import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.files.variant.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.common.js";
import "./app.common.logging.js";
import "./app.common.logic.shapes.js";
import "./app.common.logic.variant_properties.js";
import "./app.common.path_names.js";
import "./app.common.types.component.js";
import "./app.common.types.components_list.js";
import "./app.common.types.container.js";
import "./app.common.types.file.js";
import "./app.common.types.library.js";
import "./app.common.types.page.js";
import "./app.common.types.pages_list.js";
import "./app.common.types.path.segment.js";
import "./app.common.types.shape.js";
import "./app.common.types.shape_tree.js";
import "./app.common.types.shape.interactions.js";
import "./app.common.types.shape.layout.js";
import "./app.common.types.text.js";
import "./app.common.types.token.js";
import "./app.common.types.typography.js";
import "./app.common.types.variant.js";
import "./app.common.uuid.js";
import "./clojure.set.js";
goog.provide('app.common.logic.libraries');
app.common.logging.loggers.set("app.common.logic.libraries",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"warn","warn",-436710552)));
app.common.logic.libraries.log_shape_ids = cljs.core.PersistentHashSet.EMPTY;
app.common.logic.libraries.log_container_ids = cljs.core.PersistentHashSet.EMPTY;
app.common.logic.libraries.updatable_attrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__66581_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),p1__66581_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.common.types.component.swap_keep_attrs,cljs.core.seq(cljs.core.keys(app.common.types.component.sync_attrs))));
app.common.logic.libraries.enabled_shape_QMARK_ = (function app$common$logic$libraries$enabled_shape_QMARK_(id,container){
var or__5025__auto__ = cljs.core.empty_QMARK_(app.common.logic.libraries.log_shape_ids);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (id == null);
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
var ids = (cljs.core.truth_(container)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,app.common.files.helpers.get_parent_ids_seq_with_self(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container),id)):cljs.core.PersistentHashSet.createAsIfByAssoc([id]));
return cljs.core.seq(clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(app.common.logic.libraries.log_shape_ids,ids));
}
}
});
app.common.logic.libraries.enabled_container_QMARK_ = (function app$common$logic$libraries$enabled_container_QMARK_(id){
var or__5025__auto__ = cljs.core.empty_QMARK_(app.common.logic.libraries.log_container_ids);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return (app.common.logic.libraries.log_container_ids.cljs$core$IFn$_invoke$arity$1 ? app.common.logic.libraries.log_container_ids.cljs$core$IFn$_invoke$arity$1(id) : app.common.logic.libraries.log_container_ids.call(null,id));
}
});
app.common.logic.libraries.pretty_file = (function app$common$logic$libraries$pretty_file(file_id,libraries,current_file_id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_id,current_file_id)){
return "<local>";
} else {
return ["<",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_id,new cljs.core.Keyword(null,"name","name",1843675177)], null))),">"].join('');
}
});
app.common.logic.libraries.pretty_uuid = (function app$common$logic$libraries$pretty_uuid(uuid){
var uuid_str = cljs.core.str.cljs$core$IFn$_invoke$arity$1(uuid);
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(uuid_str,(((uuid_str).length) - (6)));
});
/**
 * Clone the root shape of the component and all children. Generate new
 *   ids from all of them.
 */
app.common.logic.libraries.duplicate_component = (function app$common$logic$libraries$duplicate_component(component,new_component_id,library_data,force_id,delta,variant_id){
var main_instance_page = app.common.types.file.get_component_page(library_data,component);
var main_instance_shape = app.common.types.file.get_component_root(library_data,component);
var delta__$1 = (function (){var or__5025__auto__ = delta;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(main_instance_shape) + (50)),(0));
}
})();
var ids_map = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var inverted_ids_map = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var nested_main_heads = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
var update_original_shape = (function (original_shape,new_shape){
ids_map.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(ids_map.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(original_shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_shape)));

inverted_ids_map.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(inverted_ids_map.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(original_shape)));

if(((app.common.types.component.main_instance_QMARK_(original_shape)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(original_shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component))))){
nested_main_heads.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(nested_main_heads.cljs$core$IDeref$_deref$arity$1(null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(original_shape)));
} else {
}

return original_shape;
});
var update_new_shape = (function (new_shape,_){
var G__66625 = new_shape;
var G__66625__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(new_shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66625,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new_component_id):G__66625);
var G__66625__$2 = ((((app.common.types.component.instance_root_QMARK_(new_shape)) && ((!((variant_id == null))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66625__$1,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),variant_id):G__66625__$1);
return app.common.geom.shapes.move(G__66625__$2,delta__$1);

});
var vec__66613 = app.common.types.shape_tree.clone_shape.cljs$core$IFn$_invoke$arity$variadic(main_instance_shape,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(main_instance_shape),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(main_instance_page),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-new-shape","update-new-shape",1958657165),update_new_shape,new cljs.core.Keyword(null,"update-original-shape","update-original-shape",1527494425),update_original_shape,new cljs.core.Keyword(null,"force-id","force-id",916825032),force_id], 0));
var new_instance_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66613,(0),null);
var new_instance_shapes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66613,(1),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66613,(2),null);
var remap_frame = (function (shape){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),(function (p1__66606_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(ids_map),p1__66606_SHARP_,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape));
}));
});
var convert_nested_main = (function (shape){
var origin_shape_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(inverted_ids_map),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(main_instance_page);
var parent_ids = app.common.files.helpers.get_parent_ids_seq_with_self(objects,origin_shape_id);
var G__66630 = shape;
var G__66630__$1 = (cljs.core.truth_((function (){var fexpr__66631 = cljs.core.deref(nested_main_heads);
return (fexpr__66631.cljs$core$IFn$_invoke$arity$1 ? fexpr__66631.cljs$core$IFn$_invoke$arity$1(origin_shape_id) : fexpr__66631.call(null,origin_shape_id));
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__66630,new cljs.core.Keyword(null,"main-instance","main-instance",476264761)):G__66630);
if(cljs.core.truth_(cljs.core.some(cljs.core.deref(nested_main_heads),parent_ids))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66630__$1,new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),origin_shape_id);
} else {
return G__66630__$1;
}
});
var xf_shape = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(remap_frame),cljs.core.map.cljs$core$IFn$_invoke$arity$1(convert_nested_main));
var new_instance_shapes__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xf_shape,new_instance_shapes);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_instance_shape,new_instance_shapes__$1], null);
});
/**
 * Create a new component copied from the one with the given id.
 */
app.common.logic.libraries.generate_duplicate_component = (function app$common$logic$libraries$generate_duplicate_component(var_args){
var args__5755__auto__ = [];
var len__5749__auto___67465 = arguments.length;
var i__5750__auto___67466 = (0);
while(true){
if((i__5750__auto___67466 < len__5749__auto___67465)){
args__5755__auto__.push((arguments[i__5750__auto___67466]));

var G__67467 = (i__5750__auto___67466 + (1));
i__5750__auto___67466 = G__67467;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return app.common.logic.libraries.generate_duplicate_component.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(app.common.logic.libraries.generate_duplicate_component.cljs$core$IFn$_invoke$arity$variadic = (function (changes,library,component_id,new_component_id,p__66644){
var map__66645 = p__66644;
var map__66645__$1 = cljs.core.__destructure_map(map__66645);
var new_shape_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66645__$1,new cljs.core.Keyword(null,"new-shape-id","new-shape-id",954303512));
var apply_changes_local_library_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66645__$1,new cljs.core.Keyword(null,"apply-changes-local-library?","apply-changes-local-library?",1077602630));
var delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66645__$1,new cljs.core.Keyword(null,"delta","delta",108939957));
var new_variant_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66645__$1,new cljs.core.Keyword(null,"new-variant-id","new-variant-id",683771380));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66645__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library),component_id);
var new_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component);
var main_instance_page = app.common.types.file.get_component_page(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library),component);
var target_page_id = (function (){var or__5025__auto__ = page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(main_instance_page);
}
})();
var vec__66647 = app.common.logic.libraries.duplicate_component(component,new_component_id,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library),new_shape_id,delta,new_variant_id);
var new_main_instance_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66647,(0),null);
var new_main_instance_shapes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66647,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_main_instance_shape,app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(app.common.files.changes_builder.add_component.cljs$core$IFn$_invoke$arity$variadic(app.common.files.changes_builder.add_objects.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_page_id(changes,target_page_id),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(main_instance_page)),new_main_instance_shapes,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null)),new_component_id,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(component),new_name,cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_main_instance_shape),target_page_id,new cljs.core.Keyword(null,"annotation","annotation",-344661666).cljs$core$IFn$_invoke$arity$1(component),(function (){var or__5025__auto__ = new_variant_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(component);
}
})(),new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(component),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"apply-changes-local-library?","apply-changes-local-library?",1077602630),apply_changes_local_library_QMARK_], null)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(new_main_instance_shape)], null),(function (shape,objects){
var G__66671 = shape;
if(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return app.common.types.shape.layout.assign_cells(G__66671,objects);
} else {
return G__66671;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null))], null);
}));

(app.common.logic.libraries.generate_duplicate_component.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(app.common.logic.libraries.generate_duplicate_component.cljs$lang$applyTo = (function (seq66636){
var G__66637 = cljs.core.first(seq66636);
var seq66636__$1 = cljs.core.next(seq66636);
var G__66638 = cljs.core.first(seq66636__$1);
var seq66636__$2 = cljs.core.next(seq66636__$1);
var G__66639 = cljs.core.first(seq66636__$2);
var seq66636__$3 = cljs.core.next(seq66636__$2);
var G__66640 = cljs.core.first(seq66636__$3);
var seq66636__$4 = cljs.core.next(seq66636__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__66637,G__66638,G__66639,G__66640,seq66636__$4);
}));

/**
 * Generate changes to create a new instance from a component.
 */
app.common.logic.libraries.generate_instantiate_component = (function app$common$logic$libraries$generate_instantiate_component(var_args){
var G__66717 = arguments.length;
switch (G__66717) {
case 7:
return app.common.logic.libraries.generate_instantiate_component.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
case 11:
return app.common.logic.libraries.generate_instantiate_component.cljs$core$IFn$_invoke$arity$11((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]));

break;
case 12:
return app.common.logic.libraries.generate_instantiate_component.cljs$core$IFn$_invoke$arity$12((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.logic.libraries.generate_instantiate_component.cljs$core$IFn$_invoke$arity$7 = (function (changes,objects,file_id,component_id,position,page,libraries){
return app.common.logic.libraries.generate_instantiate_component.cljs$core$IFn$_invoke$arity$11(changes,objects,file_id,component_id,position,page,libraries,null,null,null,cljs.core.PersistentArrayMap.EMPTY);
}));

(app.common.logic.libraries.generate_instantiate_component.cljs$core$IFn$_invoke$arity$11 = (function (changes,objects,file_id,component_id,position,page,libraries,old_id,parent_id,frame_id,params){
return app.common.logic.libraries.generate_instantiate_component.cljs$core$IFn$_invoke$arity$12(changes,objects,file_id,component_id,position,page,libraries,old_id,parent_id,frame_id,cljs.core.PersistentArrayMap.EMPTY,params);
}));

(app.common.logic.libraries.generate_instantiate_component.cljs$core$IFn$_invoke$arity$12 = (function (changes,objects,file_id,component_id,position,page,libraries,old_id,parent_id,frame_id,ids_map,p__66740){
var map__66741 = p__66740;
var map__66741__$1 = cljs.core.__destructure_map(map__66741);
var force_frame_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__66741__$1,new cljs.core.Keyword(null,"force-frame?","force-frame?",174727086),false);
var component = app.common.types.file.get_component(libraries,file_id,component_id);
var library = cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,file_id);
var parent = (cljs.core.truth_(parent_id)?cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id):null);
var parent__$1 = (cljs.core.truth_(parent)?(cljs.core.truth_((function (){var and__5023__auto__ = app.common.types.component.is_variant_QMARK_(component);
if(and__5023__auto__){
return app.common.types.component.is_variant_container_QMARK_(parent);
} else {
return and__5023__auto__;
}
})())?cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(parent)):parent):null);
var parent_id__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent__$1),parent_id);
var frame_id__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(parent__$1),frame_id);
var vec__66742 = app.common.types.container.make_component_instance.cljs$core$IFn$_invoke$arity$5(page,component,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library),position,(function (){var G__66745 = cljs.core.PersistentArrayMap.EMPTY;
var G__66745__$1 = ((cljs.core.contains_QMARK_(ids_map,old_id))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66745,new cljs.core.Keyword(null,"force-id","force-id",916825032),cljs.core.get.cljs$core$IFn$_invoke$arity$2(ids_map,old_id)):G__66745);
if(cljs.core.truth_(force_frame_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66745__$1,new cljs.core.Keyword(null,"force-frame-id","force-frame-id",1562086521),frame_id__$1);
} else {
return G__66745__$1;
}
})());
var new_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66742,(0),null);
var new_shapes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66742,(1),null);
var first_shape = (function (){var G__66746 = cljs.core.first(new_shapes);
var G__66746__$1 = (((!((parent_id__$1 == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66746,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id__$1):G__66746);
var G__66746__$2 = (((((!((parent__$1 == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parent__$1)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66746__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent__$1)):G__66746__$1);
var G__66746__$3 = (((((!((parent__$1 == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parent__$1)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66746__$2,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(parent__$1)):G__66746__$2);
var G__66746__$4 = (cljs.core.truth_((function (){var and__5023__auto__ = (!((parent__$1 == null)));
if(and__5023__auto__){
return app.common.types.container.in_any_component_QMARK_(objects,parent__$1);
} else {
return and__5023__auto__;
}
})())?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__66746__$3,new cljs.core.Keyword(null,"component-root","component-root",-485271026)):G__66746__$3);
if((((parent__$1 == null)) && ((!((frame_id__$1 == null)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66746__$4,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id__$1);
} else {
return G__66746__$4;
}
})();
var changes__$1 = (function (){var G__66754 = app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$3(changes,first_shape,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null));
if((!((old_id == null)))){
return app.common.files.changes_builder.amend_last_change(G__66754,(function (p1__66703_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__66703_SHARP_,new cljs.core.Keyword(null,"old-id","old-id",-512581150),old_id);
}));
} else {
return G__66754;
}
})();
var duplicated_parent_QMARK_ = cljs.core.some((function (p1__66704_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__66704_SHARP_,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(first_shape));
}),cljs.core.vals(ids_map));
var changes__$2 = (cljs.core.truth_((function (){var and__5023__auto__ = app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(first_shape));
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(duplicated_parent_QMARK_);
} else {
return and__5023__auto__;
}
})())?(function (){var target_cell = new cljs.core.Keyword(null,"cell","cell",764245084).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(position));
var vec__66755 = (((!((target_cell == null))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(target_cell),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(target_cell)], null):null);
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66755,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__66755,(1),null);
return app.common.files.changes_builder.reorder_grid_children(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(changes__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(first_shape)], null),(function (shape,objects__$1){
var G__66761 = app.common.types.shape.layout.assign_cells(shape,objects__$1);
if((((!((row == null)))) && ((!((column == null)))))){
return app.common.types.shape.layout.assign_cells(app.common.types.shape.layout.push_into_cell(G__66761,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(first_shape)], null),row,column),objects__$1);
} else {
return G__66761;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(first_shape)], null));
})():changes__$1);
var changes__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__66706_SHARP_,p2__66707_SHARP_){
return app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$3(p1__66706_SHARP_,p2__66707_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null));
}),changes__$2,cljs.core.rest(new_shapes));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_shape,changes__$3], null);
}));

(app.common.logic.libraries.generate_instantiate_component.cljs$lang$maxFixedArity = 12);

/**
 * Generate changes to remove the links between a shape and all its children
 *   with a component.
 */
app.common.logic.libraries.generate_detach_instance = (function app$common$logic$libraries$generate_detach_instance(changes,container,libraries,shape_id){
var shape = app.common.types.container.get_shape(container,shape_id);
if(app.common.logic.libraries.enabled_shape_QMARK_(shape_id,container)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Detach instance"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327),shape_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"container","container",-1736937707),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(container)], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}

} else {
}

var G__66779 = changes;
var G__66780 = container;
var G__66781 = libraries;
var G__66782 = shape_id;
var G__66783 = true;
var G__66784 = new cljs.core.Keyword(null,"component-root","component-root",-485271026).cljs$core$IFn$_invoke$arity$1(shape) === true;
return (app.common.logic.libraries.generate_detach_recursive.cljs$core$IFn$_invoke$arity$6 ? app.common.logic.libraries.generate_detach_recursive.cljs$core$IFn$_invoke$arity$6(G__66779,G__66780,G__66781,G__66782,G__66783,G__66784) : app.common.logic.libraries.generate_detach_recursive.call(null,G__66779,G__66780,G__66781,G__66782,G__66783,G__66784));
});
app.common.logic.libraries.generate_detach_recursive = (function app$common$logic$libraries$generate_detach_recursive(changes,container,libraries,shape_id,first,component_root_QMARK_){
var shape = app.common.types.container.get_shape(container,shape_id);
if(app.common.logic.libraries.enabled_shape_QMARK_(shape_id,container)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"  Processing"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327),shape_id], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}

} else {
}

if(((app.common.types.component.instance_head_QMARK_(shape)) && (cljs.core.not(first)))){
var G__66796 = changes;
var G__66796__$1 = (cljs.core.truth_(component_root_QMARK_)?app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(G__66796,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null),(function (p1__66790_SHARP_){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"  -> promote to root"], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__66790_SHARP_,new cljs.core.Keyword(null,"component-root","component-root",-485271026),true);
})):G__66796);
var G__66796__$2 = app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(G__66796__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id], null),(function (p1__66791_SHARP_){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"  -> remove swap-slot"], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


return app.common.types.component.remove_swap_slot(p1__66791_SHARP_);
}))
;
if((app.common.types.component.get_swap_slot(shape) == null)){
var G__66807 = G__66796__$2;
var G__66808 = null;
var G__66809 = container;
var G__66810 = libraries;
var G__66811 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
return (app.common.logic.libraries.generate_advance_nesting_level.cljs$core$IFn$_invoke$arity$5 ? app.common.logic.libraries.generate_advance_nesting_level.cljs$core$IFn$_invoke$arity$5(G__66807,G__66808,G__66809,G__66810,G__66811) : app.common.logic.libraries.generate_advance_nesting_level.call(null,G__66807,G__66808,G__66809,G__66810,G__66811));
} else {
return G__66796__$2;
}
} else {
var children_ids = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape);
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"  -> detach"], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__66792_SHARP_,p2__66793_SHARP_){
return (app.common.logic.libraries.generate_detach_recursive.cljs$core$IFn$_invoke$arity$6 ? app.common.logic.libraries.generate_detach_recursive.cljs$core$IFn$_invoke$arity$6(p1__66792_SHARP_,container,libraries,p2__66793_SHARP_,false,component_root_QMARK_) : app.common.logic.libraries.generate_detach_recursive.call(null,p1__66792_SHARP_,container,libraries,p2__66793_SHARP_,false,component_root_QMARK_));
}),app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(changes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),app.common.types.component.detach_shape),children_ids);
}
});
app.common.logic.libraries.generate_advance_nesting_level = (function app$common$logic$libraries$generate_advance_nesting_level(changes,file,container,libraries,shape_id){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"  -> advance-nesting-level"], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


var detached_ids = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var children = app.common.files.helpers.get_children_with_self(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container),shape_id);
var skip_near = (function (changes__$1,shape){
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),container)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"     * advancing"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}

} else {
}

if(cljs.core.contains_QMARK_(cljs.core.deref(detached_ids),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"       (detached)"], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


return changes__$1;
} else {
var ref_shape = app.common.types.file.find_ref_shape.cljs$core$IFn$_invoke$arity$variadic(file,container,libraries,shape,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true], null)], 0));
var G__66829 = changes__$1;
var G__66829__$1 = (((!((new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(ref_shape) == null))))?app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(G__66829,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),(function (p1__66821_SHARP_){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"       (advanced)"], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__66821_SHARP_,new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(ref_shape));
})):G__66829);
var G__66829__$2 = (((!((ref_shape == null))))?app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(G__66829__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),(function (p1__66822_SHARP_){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"       (merge touched)"], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__66822_SHARP_,new cljs.core.Keyword(null,"touched","touched",-609134419),clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(shape),app.common.types.component.normal_touched_groups(ref_shape)));
})):G__66829__$1);
var G__66829__$3 = (((((!((app.common.types.component.get_swap_slot(ref_shape) == null)))) && ((((app.common.types.component.get_swap_slot(shape) == null)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),shape_id))))))?app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(G__66829__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),(function (p1__66823_SHARP_){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"       (got swap-slot)"], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


return app.common.types.component.set_swap_slot(p1__66823_SHARP_,app.common.types.component.get_swap_slot(ref_shape));
})):G__66829__$2);
if((ref_shape == null)){
var G__66843 = G__66829__$3;
var G__66844 = container;
var G__66845 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
var G__66846 = detached_ids;
return (app.common.logic.libraries.generate_detach_immediate.cljs$core$IFn$_invoke$arity$4 ? app.common.logic.libraries.generate_detach_immediate.cljs$core$IFn$_invoke$arity$4(G__66843,G__66844,G__66845,G__66846) : app.common.logic.libraries.generate_detach_immediate.call(null,G__66843,G__66844,G__66845,G__66846));
} else {
return G__66829__$3;
}
}
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(skip_near,changes,children);
});
app.common.logic.libraries.generate_detach_immediate = (function app$common$logic$libraries$generate_detach_immediate(changes,container,shape_id,detached_ids){
var shape_and_children = app.common.files.helpers.get_children_ids_with_self(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container),shape_id);
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"       (cannot advance; detach shape and children)"], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(detached_ids,(function (p1__66847_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__66847_SHARP_,shape_and_children);
}));

return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(changes,shape_and_children,app.common.types.component.detach_shape);
});
app.common.logic.libraries.prepare_restore_component = (function app$common$logic$libraries$prepare_restore_component(var_args){
var G__66857 = arguments.length;
switch (G__66857) {
case 4:
return app.common.logic.libraries.prepare_restore_component.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 8:
return app.common.logic.libraries.prepare_restore_component.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.logic.libraries.prepare_restore_component.cljs$core$IFn$_invoke$arity$4 = (function (changes,library_data,component_id,current_page){
var component = app.common.types.components_list.get_deleted_component(library_data,component_id);
var page = (function (){var or__5025__auto__ = app.common.types.file.get_component_page(library_data,component);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (cljs.core.truth_(cljs.core.some((function (p1__66848_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current_page),p1__66848_SHARP_);
}),new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(library_data)))?current_page:null);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return app.common.types.pages_list.get_last_page(library_data);
}
}
})();
return app.common.logic.libraries.prepare_restore_component.cljs$core$IFn$_invoke$arity$8(changes,library_data,component_id,page,null,null,null,null);
}));

(app.common.logic.libraries.prepare_restore_component.cljs$core$IFn$_invoke$arity$8 = (function (changes,library_data,component_id,page,position,old_id,parent_id,frame_id){
var library_data__$1 = (function (){var or__5025__auto__ = app.common.files.changes_builder.get_library_data(changes);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return library_data;
}
})();
var component = app.common.types.components_list.get_deleted_component(library_data__$1,component_id);
var objects = (function (){var or__5025__auto__ = app.common.files.changes_builder.get_objects(changes);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page);
}
})();
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
var main_inst = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component)], null));
var inside_component_QMARK_ = (!((app.common.types.container.get_instance_root(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),parent) == null)));
var shapes = app.common.files.helpers.get_children_with_self(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component));
var is_variant_QMARK_ = app.common.types.component.is_variant_QMARK_(component);
var orig_pos = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(main_inst),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(main_inst));
var delta = (cljs.core.truth_(position)?app.common.geom.point.subtract(position,orig_pos):app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0)));
var minusdelta = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((- new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(delta)),(- new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(delta)));
var moved_shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66849_SHARP_){
return app.common.geom.shapes.move(p1__66849_SHARP_,delta);
}),shapes);
var first_shape = (function (){var G__66863 = cljs.core.first(moved_shapes);
var G__66863__$1 = (((!((parent_id == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66863,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id):G__66863);
var G__66863__$2 = (((!((frame_id == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66863__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id):G__66863__$1);
var G__66863__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = (frame_id == null);
if(and__5023__auto__){
var and__5023__auto____$1 = parent;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parent));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66863__$2,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),parent_id):G__66863__$2);
var G__66863__$4 = (cljs.core.truth_((function (){var and__5023__auto__ = (frame_id == null);
if(and__5023__auto__){
var and__5023__auto____$1 = parent;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parent));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66863__$3,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(parent)):G__66863__$3);
var G__66863__$5 = ((inside_component_QMARK_)?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__66863__$4,new cljs.core.Keyword(null,"component-root","component-root",-485271026)):G__66863__$4);
if((!(inside_component_QMARK_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66863__$5,new cljs.core.Keyword(null,"component-root","component-root",-485271026),true);
} else {
return G__66863__$5;
}
})();
var restoring_into_parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(first_shape));
var changes__$1 = app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_page(changes,page),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page)),library_data__$1);
var changes__$2 = (function (){var G__66867 = app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$3(changes__$1,first_shape,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null));
if((!((old_id == null)))){
return app.common.files.changes_builder.amend_last_change(G__66867,(function (p1__66850_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__66850_SHARP_,new cljs.core.Keyword(null,"old-id","old-id",-512581150),old_id);
}));
} else {
return G__66867;
}
})();
var changes__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__66854_SHARP_,p2__66855_SHARP_){
return app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$3(p1__66854_SHARP_,p2__66855_SHARP_,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null));
}),changes__$2,cljs.core.rest(moved_shapes));
var changes__$4 = (function (){var G__66868 = changes__$3;
var G__66868__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = is_variant_QMARK_;
if(and__5023__auto__){
var or__5025__auto__ = (function (){var and__5023__auto____$1 = parent;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not(app.common.types.component.is_variant_container_QMARK_(parent));
} else {
return and__5023__auto____$1;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (restoring_into_parent == null);
}
} else {
return and__5023__auto__;
}
})())?app.common.logic.variant_properties.generate_make_shapes_no_variant(G__66868,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_shape], null)):G__66868);
if(cljs.core.truth_(app.common.types.component.is_variant_container_QMARK_(restoring_into_parent))){
return app.common.logic.variant_properties.generate_make_shapes_variant(G__66868__$1,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_shape], null),restoring_into_parent);
} else {
return G__66868__$1;
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"changes","changes",1492088),app.common.files.changes_builder.restore_component(changes__$4,component_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page),minusdelta),new cljs.core.Keyword(null,"shape","shape",1190694006),cljs.core.first(moved_shapes)], null);
}));

(app.common.logic.libraries.prepare_restore_component.cljs$lang$maxFixedArity = 8);

/**
 * Generate changes to synchronize all shapes in all pages of the given file,
 *   that use assets of the given type in the given library.
 * 
 *   If an asset id is given, only shapes linked to this particular asset will
 *   be synchronized.
 */
app.common.logic.libraries.generate_sync_file = (function app$common$logic$libraries$generate_sync_file(changes,file_id,asset_type,asset_id,library_id,libraries,current_file_id){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colors","colors",1157174732),null,new cljs.core.Keyword(null,"typographies","typographies",-482095730),null,new cljs.core.Keyword(null,"components","components",-1073188942),null], null), null),asset_type)){
} else {
throw (new Error("Assert failed: (contains? #{:colors :typographies :components} asset-type)"));
}

if((((asset_id == null)) || (cljs.core.uuid_QMARK_(asset_id)))){
} else {
throw (new Error("Assert failed: (or (nil? asset-id) (uuid? asset-id))"));
}

if(cljs.core.uuid_QMARK_(file_id)){
} else {
throw (new Error("Assert failed: (uuid? file-id)"));
}

if(cljs.core.uuid_QMARK_(library_id)){
} else {
throw (new Error("Assert failed: (uuid? library-id)"));
}

if(cljs.core.truth_(app.common.logic.libraries.enabled_container_QMARK_(asset_id))){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Sync file with library"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asset-type","asset-type",-1419820094),asset_type], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asset-id","asset-id",249736185),asset_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),app.common.logic.libraries.pretty_file(file_id,libraries,current_file_id)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),app.common.logic.libraries.pretty_file(library_id,libraries,current_file_id)], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}

} else {
}

var file = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_id,new cljs.core.Keyword(null,"data","data",-232669377)], null));
var containers = app.common.types.file.object_containers_seq(file);
var changes__$1 = changes;
while(true){
var temp__5823__auto__ = cljs.core.first(containers);
if(cljs.core.truth_(temp__5823__auto__)){
var container = temp__5823__auto__;
var G__67493 = cljs.core.next(containers);
var G__67494 = app.common.files.changes_builder.concat_changes(changes__$1,(function (){var G__66880 = app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(null);
var G__66881 = asset_type;
var G__66882 = asset_id;
var G__66883 = library_id;
var G__66884 = container;
var G__66885 = libraries;
var G__66886 = current_file_id;
return (app.common.logic.libraries.generate_sync_container.cljs$core$IFn$_invoke$arity$7 ? app.common.logic.libraries.generate_sync_container.cljs$core$IFn$_invoke$arity$7(G__66880,G__66881,G__66882,G__66883,G__66884,G__66885,G__66886) : app.common.logic.libraries.generate_sync_container.call(null,G__66880,G__66881,G__66882,G__66883,G__66884,G__66885,G__66886));
})());
containers = G__67493;
changes__$1 = G__67494;
continue;
} else {
return changes__$1;
}
break;
}
});
/**
 * Generate changes to synchronize all shapes in all components of the
 *   local library of the given file, that use assets of the given type in
 *   the given library.
 * 
 *   If an asset id is given, only shapes linked to this particular asset will
 *   be synchronized.
 */
app.common.logic.libraries.generate_sync_library = (function app$common$logic$libraries$generate_sync_library(changes,file_id,asset_type,asset_id,library_id,libraries,current_file_id){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"colors","colors",1157174732),null,new cljs.core.Keyword(null,"typographies","typographies",-482095730),null,new cljs.core.Keyword(null,"components","components",-1073188942),null], null), null),asset_type)){
} else {
throw (new Error("Assert failed: (contains? #{:colors :typographies :components} asset-type)"));
}

if((((asset_id == null)) || (cljs.core.uuid_QMARK_(asset_id)))){
} else {
throw (new Error("Assert failed: (or (nil? asset-id) (uuid? asset-id))"));
}

if(cljs.core.uuid_QMARK_(file_id)){
} else {
throw (new Error("Assert failed: (uuid? file-id)"));
}

if(cljs.core.uuid_QMARK_(library_id)){
} else {
throw (new Error("Assert failed: (uuid? library-id)"));
}

if(cljs.core.truth_(app.common.logic.libraries.enabled_container_QMARK_(asset_id))){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Sync local components with library"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asset-type","asset-type",-1419820094),asset_type], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"asset-id","asset-id",249736185),asset_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),app.common.logic.libraries.pretty_file(file_id,libraries,current_file_id)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library","library",467978288),app.common.logic.libraries.pretty_file(library_id,libraries,current_file_id)], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}

} else {
}

var file = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_id,new cljs.core.Keyword(null,"data","data",-232669377)], null));
var local_components = app.common.types.components_list.components_seq(file);
var changes__$1 = changes;
while(true){
var temp__5823__auto__ = cljs.core.first(local_components);
if(cljs.core.truth_(temp__5823__auto__)){
var local_component = temp__5823__auto__;
var G__67495 = cljs.core.next(local_components);
var G__67496 = app.common.files.changes_builder.concat_changes(changes__$1,(function (){var G__66906 = app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(null);
var G__66907 = asset_type;
var G__66908 = asset_id;
var G__66909 = library_id;
var G__66910 = app.common.files.helpers.make_container(local_component,new cljs.core.Keyword(null,"component","component",1555936782));
var G__66911 = libraries;
var G__66912 = current_file_id;
return (app.common.logic.libraries.generate_sync_container.cljs$core$IFn$_invoke$arity$7 ? app.common.logic.libraries.generate_sync_container.cljs$core$IFn$_invoke$arity$7(G__66906,G__66907,G__66908,G__66909,G__66910,G__66911,G__66912) : app.common.logic.libraries.generate_sync_container.call(null,G__66906,G__66907,G__66908,G__66909,G__66910,G__66911,G__66912));
})());
local_components = G__67495;
changes__$1 = G__67496;
continue;
} else {
return changes__$1;
}
break;
}
});
/**
 * Generate changes to synchronize all shapes in a particular container (a page
 *   or a component) that use assets of the given type in the given library.
 */
app.common.logic.libraries.generate_sync_container = (function app$common$logic$libraries$generate_sync_container(changes,asset_type,asset_id,library_id,container,libraries,current_file_id){
if(app.common.files.helpers.page_QMARK_(container)){
if(cljs.core.truth_(app.common.logic.libraries.enabled_container_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(container)))){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Sync page in local file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(container)], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}

} else {
}
} else {
if(cljs.core.truth_(app.common.logic.libraries.enabled_container_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(container)))){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Sync component in local library"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(container)], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}

} else {
}
}

var linked_shapes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__66913_SHARP_){
return (app.common.logic.libraries.uses_assets_QMARK_.cljs$core$IFn$_invoke$arity$4 ? app.common.logic.libraries.uses_assets_QMARK_.cljs$core$IFn$_invoke$arity$4(asset_type,asset_id,p1__66913_SHARP_,library_id) : app.common.logic.libraries.uses_assets_QMARK_.call(null,asset_type,asset_id,p1__66913_SHARP_,library_id));
}),cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container)));
var shapes = cljs.core.seq(linked_shapes);
var changes__$1 = app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_container(changes,container),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container));
while(true){
var temp__5823__auto__ = cljs.core.first(shapes);
if(cljs.core.truth_(temp__5823__auto__)){
var shape = temp__5823__auto__;
var G__67497 = cljs.core.next(shapes);
var G__67498 = (function (){var objects_SINGLEQUOTE_ = app.common.files.changes_builder.get_objects(changes__$1);
var shape_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects_SINGLEQUOTE_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.truth_(shape_SINGLEQUOTE_)){
return (app.common.logic.libraries.generate_sync_shape.cljs$core$IFn$_invoke$arity$7 ? app.common.logic.libraries.generate_sync_shape.cljs$core$IFn$_invoke$arity$7(asset_type,changes__$1,library_id,container,shape_SINGLEQUOTE_,libraries,current_file_id) : app.common.logic.libraries.generate_sync_shape.call(null,asset_type,changes__$1,library_id,container,shape_SINGLEQUOTE_,libraries,current_file_id));
} else {
return changes__$1;
}
})();
shapes = G__67497;
changes__$1 = G__67498;
continue;
} else {
return changes__$1;
}
break;
}
});
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.logic !== 'undefined') && (typeof app.common.logic.libraries !== 'undefined') && (typeof app.common.logic.libraries.uses_assets_QMARK_ !== 'undefined')){
} else {
/**
 * Checks if a shape uses some asset of the given type in the given library.
 */
app.common.logic.libraries.uses_assets_QMARK_ = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__66924 = cljs.core.get_global_hierarchy;
return (fexpr__66924.cljs$core$IFn$_invoke$arity$0 ? fexpr__66924.cljs$core$IFn$_invoke$arity$0() : fexpr__66924.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.common.logic.libraries","uses-assets?"),(function (asset_type,_,___$1,___$2){
return asset_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
app.common.logic.libraries.uses_assets_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"components","components",-1073188942),(function (_,component_id,shape,library_id){
if((component_id == null)){
return app.common.types.component.uses_library_components_QMARK_(shape,library_id);
} else {
return app.common.types.component.instance_of_QMARK_(shape,library_id,component_id);
}
}));
app.common.logic.libraries.uses_assets_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"colors","colors",1157174732),(function (_,color_id,shape,library_id){
if((color_id == null)){
return app.common.types.shape.uses_library_colors_QMARK_(shape,library_id);
} else {
return app.common.types.shape.uses_library_color_QMARK_(shape,library_id,color_id);
}
}));
app.common.logic.libraries.uses_assets_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"typographies","typographies",-482095730),(function (_,typography_id,shape,library_id){
if((typography_id == null)){
return app.common.types.typography.uses_library_typographies_QMARK_(shape,library_id);
} else {
return app.common.types.typography.uses_library_typography_QMARK_(shape,library_id,typography_id);
}
}));
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.logic !== 'undefined') && (typeof app.common.logic.libraries !== 'undefined') && (typeof app.common.logic.libraries.generate_sync_shape !== 'undefined')){
} else {
/**
 * Generate changes to synchronize one shape from all assets of the given type
 *   that is using, in the given library.
 */
app.common.logic.libraries.generate_sync_shape = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__66939 = cljs.core.get_global_hierarchy;
return (fexpr__66939.cljs$core$IFn$_invoke$arity$0 ? fexpr__66939.cljs$core$IFn$_invoke$arity$0() : fexpr__66939.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.common.logic.libraries","generate-sync-shape"),(function (asset_type,_changes,_library_id,_container,_shape,_libraries,_current_file_id){
return asset_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
app.common.logic.libraries.generate_sync_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"components","components",-1073188942),(function (_,changes,_library_id,container,shape,libraries,current_file_id){
var shape_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,current_file_id);
return (app.common.logic.libraries.generate_sync_shape_direct.cljs$core$IFn$_invoke$arity$6 ? app.common.logic.libraries.generate_sync_shape_direct.cljs$core$IFn$_invoke$arity$6(changes,file,libraries,container,shape_id,false) : app.common.logic.libraries.generate_sync_shape_direct.call(null,changes,file,libraries,container,shape_id,false));
}));
app.common.logic.libraries.generate_sync_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"colors","colors",1157174732),(function (_,changes,library_id,___$1,shape,libraries,___$2){
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),null)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Sync colors of shape"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}

} else {
}

var library_colors = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [library_id,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"colors","colors",1157174732)], null));
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(changes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),(function (p1__66957_SHARP_){
return app.common.types.library.sync_colors(p1__66957_SHARP_,library_id,library_colors);
}));
}));
app.common.logic.libraries.generate_sync_shape.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"typographies","typographies",-482095730),(function (_,changes,library_id,container,shape,libraries,___$1){
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),null)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Sync typographies of shape"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape","shape",1190694006),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}

} else {
}

var typographies = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [library_id,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"typographies","typographies",-482095730)], null));
var update_node = (function (node){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(typographies,new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356).cljs$core$IFn$_invoke$arity$1(node));
if(cljs.core.truth_(temp__5823__auto__)){
var typography = temp__5823__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([node,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(typography,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092)], 0))], 0));
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(node,new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688)], 0));
}
});
return (app.common.logic.libraries.generate_sync_text_shape.cljs$core$IFn$_invoke$arity$4 ? app.common.logic.libraries.generate_sync_text_shape.cljs$core$IFn$_invoke$arity$4(changes,shape,container,update_node) : app.common.logic.libraries.generate_sync_text_shape.call(null,changes,shape,container,update_node));
}));
app.common.logic.libraries.generate_sync_text_shape = (function app$common$logic$libraries$generate_sync_text_shape(changes,shape,container,update_node){
var old_content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape);
var new_content = app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$2(update_node,old_content);
var redo_change = (function (){var G__66967 = container;
var G__66968 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"operations","operations",1630691895),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"val","val",128701612),new_content], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"position-data","position-data",-499622376),new cljs.core.Keyword(null,"val","val",128701612),null], null)], null)], null);
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__66967,G__66968) : app.common.logic.libraries.make_change.call(null,G__66967,G__66968));
})();
var undo_change = (function (){var G__66969 = container;
var G__66970 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"operations","operations",1630691895),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"val","val",128701612),old_content], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"position-data","position-data",-499622376),new cljs.core.Keyword(null,"val","val",128701612),null], null)], null)], null);
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__66969,G__66970) : app.common.logic.libraries.make_change.call(null,G__66969,G__66970));
})();
var changes_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,redo_change),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,undo_change);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_content,old_content)){
return changes;
} else {
return app.common.files.changes_builder.apply_changes_local(changes_SINGLEQUOTE_);
}
});
app.common.logic.libraries.redirect_shaperef = (function app$common$logic$libraries$redirect_shaperef(var_args){
var G__66972 = arguments.length;
switch (G__66972) {
case 3:
return app.common.logic.libraries.redirect_shaperef.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.logic.libraries.redirect_shaperef.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.logic.libraries.redirect_shaperef.cljs$core$IFn$_invoke$arity$3 = (function (container,libraries,shape){
return app.common.logic.libraries.redirect_shaperef.cljs$core$IFn$_invoke$arity$4(null,null,shape,app.common.types.file.find_remote_shape(container,libraries,shape));
}));

(app.common.logic.libraries.redirect_shaperef.cljs$core$IFn$_invoke$arity$4 = (function (_,___$1,shape,remote_shape){
if((!((new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape) == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(remote_shape));
} else {
return shape;
}
}));

(app.common.logic.libraries.redirect_shaperef.cljs$lang$maxFixedArity = 4);

/**
 * Generate changes to synchronize one shape that is the root of a component
 *   instance, and all its children, from the given component.
 */
app.common.logic.libraries.generate_sync_shape_direct = (function app$common$logic$libraries$generate_sync_shape_direct(changes,file,libraries,container,shape_id,reset_QMARK_){
if(app.common.logic.libraries.enabled_shape_QMARK_(shape_id,container)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Sync shape direct"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-inst","shape-inst",814505728),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape_id)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reset?","reset?",-1051875415),reset_QMARK_], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}

} else {
}

var shape_inst = app.common.types.container.get_shape(container,shape_id);
var library = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape_inst)),new cljs.core.Keyword(null,"data","data",-232669377));
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(library,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape_inst),true);
if(cljs.core.truth_((function (){var and__5023__auto__ = app.common.types.component.in_component_copy_QMARK_(shape_inst);
if(and__5023__auto__){
var or__5025__auto__ = app.common.types.file.direct_copy_QMARK_(shape_inst,component,container,null,libraries);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return reset_QMARK_;
}
} else {
return and__5023__auto__;
}
})())){
var redirect_shaperef = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.common.logic.libraries.redirect_shaperef,container,libraries);
var shape_main = (cljs.core.truth_(component)?(cljs.core.truth_(reset_QMARK_)?app.common.types.file.find_ref_shape(file,container,libraries,shape_inst):app.common.types.file.get_ref_shape(library,component,shape_inst)):null);
var shape_inst__$1 = (cljs.core.truth_(reset_QMARK_)?redirect_shaperef(shape_inst,shape_main):shape_inst);
var initial_root_QMARK_ = new cljs.core.Keyword(null,"component-root","component-root",-485271026).cljs$core$IFn$_invoke$arity$1(shape_inst__$1);
var root_inst = shape_inst__$1;
var root_main = shape_main;
if(cljs.core.truth_(component)){
return (app.common.logic.libraries.generate_sync_shape_direct_recursive.cljs$core$IFn$_invoke$arity$13 ? app.common.logic.libraries.generate_sync_shape_direct_recursive.cljs$core$IFn$_invoke$arity$13(changes,container,shape_inst__$1,component,library,file,libraries,shape_main,root_inst,root_main,reset_QMARK_,initial_root_QMARK_,redirect_shaperef) : app.common.logic.libraries.generate_sync_shape_direct_recursive.call(null,changes,container,shape_inst__$1,component,library,file,libraries,shape_main,root_inst,root_main,reset_QMARK_,initial_root_QMARK_,redirect_shaperef));
} else {
return changes;
}
} else {
return changes;
}
});
/**
 * Find the container that has the main shape.
 */
app.common.logic.libraries.find_main_container = (function app$common$logic$libraries$find_main_container(container_inst,shape_inst,shape_main,library,component){
var shape_inst_SINGLEQUOTE_ = shape_inst;
var component_SINGLEQUOTE_ = component;
while(true){
var container = app.common.types.file.get_component_container(library,component_SINGLEQUOTE_);
if((!((app.common.types.container.get_shape(container,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_main)) == null)))){
return container;
} else {
var parent = app.common.types.container.get_shape(container_inst,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape_inst_SINGLEQUOTE_));
var shape_inst_SINGLEQUOTE___$1 = app.common.types.container.get_head_shape.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container_inst),parent);
var component_SINGLEQUOTE___$1 = (function (){var or__5025__auto__ = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(library,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape_inst_SINGLEQUOTE___$1));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.components_list.get_deleted_component(library,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape_inst_SINGLEQUOTE___$1));
}
})();
if((!((component_SINGLEQUOTE___$1 == null)))){
var G__67503 = shape_inst_SINGLEQUOTE___$1;
var G__67504 = component_SINGLEQUOTE___$1;
shape_inst_SINGLEQUOTE_ = G__67503;
component_SINGLEQUOTE_ = G__67504;
continue;
} else {
return null;
}
}
break;
}
});
app.common.logic.libraries.generate_sync_shape_direct_recursive = (function app$common$logic$libraries$generate_sync_shape_direct_recursive(changes,container,shape_inst,component,library,file,libraries,shape_main,root_inst,root_main,reset_QMARK_,initial_root_QMARK_,redirect_shaperef){
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_inst),container)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Sync shape direct recursive"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-inst","shape-inst",814505728),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape_inst))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_inst))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component)], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}

} else {
}

if((shape_main == null)){
return changes;
} else {
var omit_touched_QMARK_ = cljs.core.not(reset_QMARK_);
var clear_remote_synced_QMARK_ = (function (){var and__5023__auto__ = initial_root_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return reset_QMARK_;
} else {
return and__5023__auto__;
}
})();
var set_remote_synced_QMARK_ = (function (){var and__5023__auto__ = cljs.core.not(initial_root_QMARK_);
if(and__5023__auto__){
return reset_QMARK_;
} else {
return and__5023__auto__;
}
})();
var changes__$1 = (function (){var G__67033 = changes;
var G__67033__$1 = (app.common.logic.libraries.update_attrs.cljs$core$IFn$_invoke$arity$7 ? app.common.logic.libraries.update_attrs.cljs$core$IFn$_invoke$arity$7(G__67033,shape_inst,shape_main,root_inst,root_main,container,omit_touched_QMARK_) : app.common.logic.libraries.update_attrs.call(null,G__67033,shape_inst,shape_main,root_inst,root_main,container,omit_touched_QMARK_))
;
var G__67033__$2 = ((app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape_main))?(app.common.logic.libraries.update_flex_child_copy_attrs.cljs$core$IFn$_invoke$arity$7 ? app.common.logic.libraries.update_flex_child_copy_attrs.cljs$core$IFn$_invoke$arity$7(G__67033__$1,shape_main,shape_inst,library,component,container,omit_touched_QMARK_) : app.common.logic.libraries.update_flex_child_copy_attrs.call(null,G__67033__$1,shape_main,shape_inst,library,component,container,omit_touched_QMARK_)):G__67033__$1);
var G__67033__$3 = (cljs.core.truth_(reset_QMARK_)?(function (){var G__67040 = G__67033__$2;
var G__67041 = shape_inst;
var G__67042 = shape_main;
var G__67043 = container;
var G__67044 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-touched?","reset-touched?",1763538527),true], null);
return (app.common.logic.libraries.change_touched.cljs$core$IFn$_invoke$arity$5 ? app.common.logic.libraries.change_touched.cljs$core$IFn$_invoke$arity$5(G__67040,G__67041,G__67042,G__67043,G__67044) : app.common.logic.libraries.change_touched.call(null,G__67040,G__67041,G__67042,G__67043,G__67044));
})():G__67033__$2);
var G__67033__$4 = (cljs.core.truth_(clear_remote_synced_QMARK_)?(app.common.logic.libraries.change_remote_synced.cljs$core$IFn$_invoke$arity$4 ? app.common.logic.libraries.change_remote_synced.cljs$core$IFn$_invoke$arity$4(G__67033__$3,shape_inst,container,null) : app.common.logic.libraries.change_remote_synced.call(null,G__67033__$3,shape_inst,container,null)):G__67033__$3);
if(cljs.core.truth_(set_remote_synced_QMARK_)){
return (app.common.logic.libraries.change_remote_synced.cljs$core$IFn$_invoke$arity$4 ? app.common.logic.libraries.change_remote_synced.cljs$core$IFn$_invoke$arity$4(G__67033__$4,shape_inst,container,true) : app.common.logic.libraries.change_remote_synced.call(null,G__67033__$4,shape_inst,container,true));
} else {
return G__67033__$4;
}
})();
var component_container = app.common.logic.libraries.find_main_container(container,shape_inst,shape_main,library,component);
var children_inst = cljs.core.vec(app.common.types.container.get_direct_children(container,shape_inst));
var children_main = cljs.core.vec(app.common.types.container.get_direct_children(component_container,shape_main));
var children_inst__$1 = (cljs.core.truth_(reset_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__66976_SHARP_){
return (redirect_shaperef.cljs$core$IFn$_invoke$arity$1 ? redirect_shaperef.cljs$core$IFn$_invoke$arity$1(p1__66976_SHARP_) : redirect_shaperef.call(null,p1__66976_SHARP_));
}),children_inst):children_inst);
var only_inst = (function (changes__$2,child_inst){
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_inst),container)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Only inst"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child-inst","child-inst",2129957566),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(child_inst))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_inst))].join('')], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}

} else {
}

if((!(((omit_touched_QMARK_) && (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(shape_inst),new cljs.core.Keyword(null,"shapes-group","shapes-group",1443424131))))))){
return (app.common.logic.libraries.remove_shape.cljs$core$IFn$_invoke$arity$4 ? app.common.logic.libraries.remove_shape.cljs$core$IFn$_invoke$arity$4(changes__$2,child_inst,container,omit_touched_QMARK_) : app.common.logic.libraries.remove_shape.call(null,changes__$2,child_inst,container,omit_touched_QMARK_));
} else {
return changes__$2;
}
});
var only_main = (function (changes__$2,child_main){
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_main),component_container)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Only main"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child-main","child-main",1212308227),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(child_main))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_main))].join('')], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}

} else {
}

if((!(((omit_touched_QMARK_) && (cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(shape_inst),new cljs.core.Keyword(null,"shapes-group","shapes-group",1443424131))))))){
var G__67063 = changes__$2;
var G__67064 = child_main;
var G__67065 = app.common.data.index_of(children_main,child_main);
var G__67066 = component_container;
var G__67067 = container;
var G__67068 = root_inst;
var G__67069 = root_main;
var G__67070 = omit_touched_QMARK_;
var G__67071 = set_remote_synced_QMARK_;
return (app.common.logic.libraries.add_shape_to_instance.cljs$core$IFn$_invoke$arity$9 ? app.common.logic.libraries.add_shape_to_instance.cljs$core$IFn$_invoke$arity$9(G__67063,G__67064,G__67065,G__67066,G__67067,G__67068,G__67069,G__67070,G__67071) : app.common.logic.libraries.add_shape_to_instance.call(null,G__67063,G__67064,G__67065,G__67066,G__67067,G__67068,G__67069,G__67070,G__67071));
} else {
return changes__$2;
}
});
var both = (function (changes__$2,child_inst,child_main){
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_inst),container)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Both"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child-inst","child-inst",2129957566),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(child_inst))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_inst))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child-main","child-main",1212308227),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(child_main))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_main))].join('')], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}

} else {
}

return (app.common.logic.libraries.generate_sync_shape_direct_recursive.cljs$core$IFn$_invoke$arity$13 ? app.common.logic.libraries.generate_sync_shape_direct_recursive.cljs$core$IFn$_invoke$arity$13(changes__$2,container,child_inst,component,library,file,libraries,child_main,root_inst,root_main,reset_QMARK_,initial_root_QMARK_,redirect_shaperef) : app.common.logic.libraries.generate_sync_shape_direct_recursive.call(null,changes__$2,container,child_inst,component,library,file,libraries,child_main,root_inst,root_main,reset_QMARK_,initial_root_QMARK_,redirect_shaperef));
});
var swapped = (function (changes__$2,child_inst,child_main){
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_inst),container)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Match slot"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child-inst","child-inst",2129957566),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(child_inst))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_inst))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child-main","child-main",1212308227),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(child_main))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_main))].join('')], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}

} else {
}

return changes__$2;
});
var moved = (function (changes__$2,child_inst,child_main){
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_inst),container)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Move"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child-inst","child-inst",2129957566),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(child_inst))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_inst))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child-main","child-main",1212308227),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(child_main))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_main))].join('')], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}

} else {
}

var G__67081 = changes__$2;
var G__67082 = child_inst;
var G__67083 = app.common.data.index_of(children_inst__$1,child_inst);
var G__67084 = app.common.data.index_of(children_main,child_main);
var G__67085 = container;
var G__67086 = omit_touched_QMARK_;
return (app.common.logic.libraries.move_shape.cljs$core$IFn$_invoke$arity$6 ? app.common.logic.libraries.move_shape.cljs$core$IFn$_invoke$arity$6(G__67081,G__67082,G__67083,G__67084,G__67085,G__67086) : app.common.logic.libraries.move_shape.call(null,G__67081,G__67082,G__67083,G__67084,G__67085,G__67086));
});
var changes__$2 = (app.common.logic.libraries.compare_children.cljs$core$IFn$_invoke$arity$15 ? app.common.logic.libraries.compare_children.cljs$core$IFn$_invoke$arity$15(changes__$1,shape_inst,children_inst__$1,children_main,container,component_container,file,libraries,only_inst,only_main,both,swapped,moved,false,reset_QMARK_) : app.common.logic.libraries.compare_children.call(null,changes__$1,shape_inst,children_inst__$1,children_main,container,component_container,file,libraries,only_inst,only_main,both,swapped,moved,false,reset_QMARK_));
var changes__$3 = (function (){var G__67087 = changes__$2;
if(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape_inst)){
var G__67088 = G__67087;
var G__67089 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_inst);
var G__67090 = shape_main;
var G__67091 = library;
var G__67092 = component;
var G__67093 = omit_touched_QMARK_;
return (app.common.logic.libraries.update_grid_copy_attrs.cljs$core$IFn$_invoke$arity$6 ? app.common.logic.libraries.update_grid_copy_attrs.cljs$core$IFn$_invoke$arity$6(G__67088,G__67089,G__67090,G__67091,G__67092,G__67093) : app.common.logic.libraries.update_grid_copy_attrs.call(null,G__67088,G__67089,G__67090,G__67091,G__67092,G__67093));
} else {
return G__67087;
}
})();
return changes__$3;
}
});
/**
 * Generate the changes for rename the component with the given id, in the current file library.
 */
app.common.logic.libraries.generate_rename_component = (function app$common$logic$libraries$generate_rename_component(changes,id,new_name,library_data){
var vec__67095 = app.common.path_names.split_group_name(new_name);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67095,(0),null);
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67095,(1),null);
return app.common.files.changes_builder.update_component(app.common.files.changes_builder.with_library_data(changes,library_data),id,(function (p1__67094_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__67094_SHARP_,new cljs.core.Keyword(null,"path","path",-188191168),path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),name], 0));
}));
});
/**
 * Generate changes to update the component a shape is linked to, from
 *   the values in the shape and all its children.
 */
app.common.logic.libraries.generate_sync_shape_inverse = (function app$common$logic$libraries$generate_sync_shape_inverse(changes,file,libraries,container,shape_id){
if(app.common.logic.libraries.enabled_shape_QMARK_(shape_id,container)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Sync shape inverse"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape","shape",1190694006),cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape_id)], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}

} else {
}

var redirect_shaperef = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.common.logic.libraries.redirect_shaperef,container,libraries);
var shape_inst = app.common.types.container.get_shape(container,shape_id);
var library = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape_inst)),new cljs.core.Keyword(null,"data","data",-232669377));
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(library,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape_inst));
var shape_main = (cljs.core.truth_(component)?app.common.types.file.find_remote_shape(container,libraries,shape_inst):null);
var shape_inst__$1 = redirect_shaperef(shape_inst,shape_main);
var initial_root_QMARK_ = new cljs.core.Keyword(null,"component-root","component-root",-485271026).cljs$core$IFn$_invoke$arity$1(shape_inst__$1);
var root_inst = shape_inst__$1;
var root_main = app.common.types.file.get_component_root(library,component);
var changes__$1 = (function (){var G__67099 = changes;
if(cljs.core.truth_((function (){var and__5023__auto__ = component;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(shape_inst__$1),new cljs.core.Keyword(null,"name-group","name-group",1478986286));
} else {
return and__5023__auto__;
}
})())){
return app.common.logic.libraries.generate_rename_component(G__67099,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape_inst__$1),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape_inst__$1),library);
} else {
return G__67099;
}
})();
if(cljs.core.truth_(component)){
return (app.common.logic.libraries.generate_sync_shape_inverse_recursive.cljs$core$IFn$_invoke$arity$12 ? app.common.logic.libraries.generate_sync_shape_inverse_recursive.cljs$core$IFn$_invoke$arity$12(changes__$1,container,shape_inst__$1,component,library,file,libraries,shape_main,root_inst,root_main,initial_root_QMARK_,redirect_shaperef) : app.common.logic.libraries.generate_sync_shape_inverse_recursive.call(null,changes__$1,container,shape_inst__$1,component,library,file,libraries,shape_main,root_inst,root_main,initial_root_QMARK_,redirect_shaperef));
} else {
return changes__$1;
}
});
app.common.logic.libraries.generate_sync_shape_inverse_recursive = (function app$common$logic$libraries$generate_sync_shape_inverse_recursive(changes,container,shape_inst,component,library,file,libraries,shape_main,root_inst,root_main,initial_root_QMARK_,redirect_shaperef){
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_inst),container)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Sync shape inverse recursive"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape","shape",1190694006),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape_inst))], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component","component",1555936782),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component)], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}

} else {
}

if((shape_main == null)){
return changes;
} else {
var component_container = app.common.types.file.get_component_container(library,component);
var omit_touched_QMARK_ = false;
var set_remote_synced_QMARK_ = cljs.core.not(initial_root_QMARK_);
var clear_remote_synced_QMARK_ = initial_root_QMARK_;
var changes__$1 = (function (){var G__67106 = changes;
var G__67106__$1 = (function (){var G__67108 = (function (){var G__67113 = (app.common.logic.libraries.update_attrs.cljs$core$IFn$_invoke$arity$7 ? app.common.logic.libraries.update_attrs.cljs$core$IFn$_invoke$arity$7(G__67106,shape_main,shape_inst,root_main,root_inst,component_container,omit_touched_QMARK_) : app.common.logic.libraries.update_attrs.call(null,G__67106,shape_main,shape_inst,root_main,root_inst,component_container,omit_touched_QMARK_));
var G__67114 = shape_inst;
var G__67115 = shape_main;
var G__67116 = container;
var G__67117 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"reset-touched?","reset-touched?",1763538527),true], null);
return (app.common.logic.libraries.change_touched.cljs$core$IFn$_invoke$arity$5 ? app.common.logic.libraries.change_touched.cljs$core$IFn$_invoke$arity$5(G__67113,G__67114,G__67115,G__67116,G__67117) : app.common.logic.libraries.change_touched.call(null,G__67113,G__67114,G__67115,G__67116,G__67117));
})();
var G__67109 = shape_main;
var G__67110 = shape_inst;
var G__67111 = component_container;
var G__67112 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"copy-touched?","copy-touched?",-1498392371),true], null);
return (app.common.logic.libraries.change_touched.cljs$core$IFn$_invoke$arity$5 ? app.common.logic.libraries.change_touched.cljs$core$IFn$_invoke$arity$5(G__67108,G__67109,G__67110,G__67111,G__67112) : app.common.logic.libraries.change_touched.call(null,G__67108,G__67109,G__67110,G__67111,G__67112));
})()
;
var G__67106__$2 = ((app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape_main))?(app.common.logic.libraries.update_flex_child_main_attrs.cljs$core$IFn$_invoke$arity$6 ? app.common.logic.libraries.update_flex_child_main_attrs.cljs$core$IFn$_invoke$arity$6(G__67106__$1,shape_main,shape_inst,component_container,container,omit_touched_QMARK_) : app.common.logic.libraries.update_flex_child_main_attrs.call(null,G__67106__$1,shape_main,shape_inst,component_container,container,omit_touched_QMARK_)):G__67106__$1);
var G__67106__$3 = ((app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape_main))?(app.common.logic.libraries.update_grid_main_attrs.cljs$core$IFn$_invoke$arity$6 ? app.common.logic.libraries.update_grid_main_attrs.cljs$core$IFn$_invoke$arity$6(G__67106__$2,shape_main,shape_inst,component_container,container,omit_touched_QMARK_) : app.common.logic.libraries.update_grid_main_attrs.call(null,G__67106__$2,shape_main,shape_inst,component_container,container,omit_touched_QMARK_)):G__67106__$2);
var G__67106__$4 = (cljs.core.truth_(clear_remote_synced_QMARK_)?(app.common.logic.libraries.change_remote_synced.cljs$core$IFn$_invoke$arity$4 ? app.common.logic.libraries.change_remote_synced.cljs$core$IFn$_invoke$arity$4(G__67106__$3,shape_inst,container,null) : app.common.logic.libraries.change_remote_synced.call(null,G__67106__$3,shape_inst,container,null)):G__67106__$3);
if(set_remote_synced_QMARK_){
return (app.common.logic.libraries.change_remote_synced.cljs$core$IFn$_invoke$arity$4 ? app.common.logic.libraries.change_remote_synced.cljs$core$IFn$_invoke$arity$4(G__67106__$4,shape_inst,container,true) : app.common.logic.libraries.change_remote_synced.call(null,G__67106__$4,shape_inst,container,true));
} else {
return G__67106__$4;
}
})();
var children_inst = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__67103_SHARP_){
return app.common.types.container.get_shape(container,p1__67103_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape_inst));
var children_main = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__67104_SHARP_){
return app.common.types.container.get_shape(component_container,p1__67104_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape_main));
var children_inst__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67105_SHARP_){
return (redirect_shaperef.cljs$core$IFn$_invoke$arity$1 ? redirect_shaperef.cljs$core$IFn$_invoke$arity$1(p1__67105_SHARP_) : redirect_shaperef.call(null,p1__67105_SHARP_));
}),children_inst);
var only_inst = (function (changes__$2,child_inst){
var G__67121 = changes__$2;
var G__67122 = child_inst;
var G__67123 = app.common.data.index_of(children_inst__$1,child_inst);
var G__67124 = component;
var G__67125 = component_container;
var G__67126 = container;
var G__67127 = root_inst;
var G__67128 = root_main;
return (app.common.logic.libraries.add_shape_to_main.cljs$core$IFn$_invoke$arity$8 ? app.common.logic.libraries.add_shape_to_main.cljs$core$IFn$_invoke$arity$8(G__67121,G__67122,G__67123,G__67124,G__67125,G__67126,G__67127,G__67128) : app.common.logic.libraries.add_shape_to_main.call(null,G__67121,G__67122,G__67123,G__67124,G__67125,G__67126,G__67127,G__67128));
});
var only_main = (function (changes__$2,child_main){
return (app.common.logic.libraries.remove_shape.cljs$core$IFn$_invoke$arity$4 ? app.common.logic.libraries.remove_shape.cljs$core$IFn$_invoke$arity$4(changes__$2,child_main,component_container,false) : app.common.logic.libraries.remove_shape.call(null,changes__$2,child_main,component_container,false));
});
var both = (function (changes__$2,child_inst,child_main){
return (app.common.logic.libraries.generate_sync_shape_inverse_recursive.cljs$core$IFn$_invoke$arity$12 ? app.common.logic.libraries.generate_sync_shape_inverse_recursive.cljs$core$IFn$_invoke$arity$12(changes__$2,container,child_inst,component,library,file,libraries,child_main,root_inst,root_main,initial_root_QMARK_,redirect_shaperef) : app.common.logic.libraries.generate_sync_shape_inverse_recursive.call(null,changes__$2,container,child_inst,component,library,file,libraries,child_main,root_inst,root_main,initial_root_QMARK_,redirect_shaperef));
});
var swapped = (function (changes__$2,child_inst,child_main){
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_inst),container)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Match slot"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child-inst","child-inst",2129957566),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(child_inst))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_inst))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"child-main","child-main",1212308227),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(child_main))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_main))].join('')], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}

} else {
}

return changes__$2;
});
var moved = (function (changes__$2,child_inst,child_main){
var G__67129 = changes__$2;
var G__67130 = child_main;
var G__67131 = app.common.data.index_of(children_main,child_main);
var G__67132 = app.common.data.index_of(children_inst__$1,child_inst);
var G__67133 = component_container;
var G__67134 = false;
return (app.common.logic.libraries.move_shape.cljs$core$IFn$_invoke$arity$6 ? app.common.logic.libraries.move_shape.cljs$core$IFn$_invoke$arity$6(G__67129,G__67130,G__67131,G__67132,G__67133,G__67134) : app.common.logic.libraries.move_shape.call(null,G__67129,G__67130,G__67131,G__67132,G__67133,G__67134));
});
var changes__$2 = (app.common.logic.libraries.compare_children.cljs$core$IFn$_invoke$arity$15 ? app.common.logic.libraries.compare_children.cljs$core$IFn$_invoke$arity$15(changes__$1,shape_inst,children_inst__$1,children_main,container,component_container,file,libraries,only_inst,only_main,both,swapped,moved,true,true) : app.common.logic.libraries.compare_children.call(null,changes__$1,shape_inst,children_inst__$1,children_main,container,component_container,file,libraries,only_inst,only_main,both,swapped,moved,true,true));
var check_local = (function (change){
var G__67135 = change;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(change),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_inst))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67135,new cljs.core.Keyword(null,"local-change?","local-change?",619740746),true);
} else {
return G__67135;
}
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(changes__$2,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.mapv,check_local)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.map,check_local));
}
});
app.common.logic.libraries.compare_children = (function app$common$logic$libraries$compare_children(changes,shape_inst,children_inst,children_main,container_inst,container_main,file,libraries,only_inst_cb,only_main_cb,both_cb,swapped_cb,moved_cb,inverse_QMARK_,reset_QMARK_){
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_inst),container_inst)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Compare children"], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}

} else {
}

var children_inst__$1 = cljs.core.seq((function (){var or__5025__auto__ = children_inst;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var children_main__$1 = cljs.core.seq((function (){var or__5025__auto__ = children_main;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})());
var changes__$1 = changes;
while(true){
var child_inst = cljs.core.first(children_inst__$1);
var child_main = cljs.core.first(children_main__$1);
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_inst),container_inst)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay(((function (children_inst__$1,children_main__$1,changes__$1,child_inst,child_main){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"Comparing"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main","main",-2117802661),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(child_main))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_main))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inst","inst",645962501),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(child_inst))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_inst))].join('')], null)], null);
});})(children_inst__$1,children_main__$1,changes__$1,child_inst,child_main))
,null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}

} else {
}

if((((child_inst == null)) && ((child_main == null)))){
return changes__$1;
} else {
if((child_inst == null)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(only_main_cb,changes__$1,children_main__$1);
} else {
if((child_main == null)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(only_inst_cb,changes__$1,children_inst__$1);
} else {
if(cljs.core.truth_((function (){var or__5025__auto__ = app.common.types.component.is_main_of_QMARK_(child_main,child_inst);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = app.common.types.file.match_swap_slot_QMARK_(child_main,child_inst,container_inst,container_main,file,libraries);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(reset_QMARK_);
} else {
return and__5023__auto__;
}
}
})())){
var G__67523 = cljs.core.next(children_inst__$1);
var G__67524 = cljs.core.next(children_main__$1);
var G__67525 = ((app.common.types.component.is_main_of_QMARK_(child_main,child_inst))?(both_cb.cljs$core$IFn$_invoke$arity$3 ? both_cb.cljs$core$IFn$_invoke$arity$3(changes__$1,child_inst,child_main) : both_cb.call(null,changes__$1,child_inst,child_main)):(swapped_cb.cljs$core$IFn$_invoke$arity$3 ? swapped_cb.cljs$core$IFn$_invoke$arity$3(changes__$1,child_inst,child_main) : swapped_cb.call(null,changes__$1,child_inst,child_main)));
children_inst__$1 = G__67523;
children_main__$1 = G__67524;
changes__$1 = G__67525;
continue;
} else {
var child_inst_SINGLEQUOTE_ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(((function (children_inst__$1,children_main__$1,changes__$1,child_inst,child_main){
return (function (p1__67136_SHARP_){
var or__5025__auto__ = app.common.types.component.is_main_of_QMARK_(child_main,p1__67136_SHARP_);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = app.common.types.file.match_swap_slot_QMARK_(child_main,p1__67136_SHARP_,container_inst,container_main,file,libraries);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(reset_QMARK_);
} else {
return and__5023__auto__;
}
}
});})(children_inst__$1,children_main__$1,changes__$1,child_inst,child_main))
,children_inst__$1);
var child_main_SINGLEQUOTE_ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(((function (children_inst__$1,children_main__$1,changes__$1,child_inst_SINGLEQUOTE_,child_inst,child_main){
return (function (p1__67137_SHARP_){
var or__5025__auto__ = app.common.types.component.is_main_of_QMARK_(p1__67137_SHARP_,child_inst);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = app.common.types.file.match_swap_slot_QMARK_(p1__67137_SHARP_,child_inst,container_inst,container_main,file,libraries);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(reset_QMARK_);
} else {
return and__5023__auto__;
}
}
});})(children_inst__$1,children_main__$1,changes__$1,child_inst_SINGLEQUOTE_,child_inst,child_main))
,children_main__$1);
if((child_inst_SINGLEQUOTE_ == null)){
var G__67532 = children_inst__$1;
var G__67533 = cljs.core.next(children_main__$1);
var G__67534 = (only_main_cb.cljs$core$IFn$_invoke$arity$2 ? only_main_cb.cljs$core$IFn$_invoke$arity$2(changes__$1,child_main) : only_main_cb.call(null,changes__$1,child_main));
children_inst__$1 = G__67532;
children_main__$1 = G__67533;
changes__$1 = G__67534;
continue;
} else {
if((child_main_SINGLEQUOTE_ == null)){
var G__67535 = cljs.core.next(children_inst__$1);
var G__67536 = children_main__$1;
var G__67537 = (only_inst_cb.cljs$core$IFn$_invoke$arity$2 ? only_inst_cb.cljs$core$IFn$_invoke$arity$2(changes__$1,child_inst) : only_inst_cb.call(null,changes__$1,child_inst));
children_inst__$1 = G__67535;
children_main__$1 = G__67536;
changes__$1 = G__67537;
continue;
} else {
if(cljs.core.truth_(inverse_QMARK_)){
var is_main_QMARK_ = app.common.types.component.is_main_of_QMARK_(child_inst,child_main_SINGLEQUOTE_);
var G__67539 = cljs.core.next(children_inst__$1);
var G__67540 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (children_inst__$1,children_main__$1,changes__$1,is_main_QMARK_,child_inst_SINGLEQUOTE_,child_main_SINGLEQUOTE_,child_inst,child_main){
return (function (p1__67138_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__67138_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_main_SINGLEQUOTE_));
});})(children_inst__$1,children_main__$1,changes__$1,is_main_QMARK_,child_inst_SINGLEQUOTE_,child_main_SINGLEQUOTE_,child_inst,child_main))
,children_main__$1);
var G__67541 = (function (){var G__67160 = changes__$1;
var G__67160__$1 = ((is_main_QMARK_)?(both_cb.cljs$core$IFn$_invoke$arity$3 ? both_cb.cljs$core$IFn$_invoke$arity$3(G__67160,child_inst,child_main_SINGLEQUOTE_) : both_cb.call(null,G__67160,child_inst,child_main_SINGLEQUOTE_)):G__67160);
var G__67160__$2 = (((!(is_main_QMARK_)))?(swapped_cb.cljs$core$IFn$_invoke$arity$3 ? swapped_cb.cljs$core$IFn$_invoke$arity$3(G__67160__$1,child_inst,child_main_SINGLEQUOTE_) : swapped_cb.call(null,G__67160__$1,child_inst,child_main_SINGLEQUOTE_)):G__67160__$1);
return (moved_cb.cljs$core$IFn$_invoke$arity$3 ? moved_cb.cljs$core$IFn$_invoke$arity$3(G__67160__$2,child_inst,child_main_SINGLEQUOTE_) : moved_cb.call(null,G__67160__$2,child_inst,child_main_SINGLEQUOTE_));

})();
children_inst__$1 = G__67539;
children_main__$1 = G__67540;
changes__$1 = G__67541;
continue;
} else {
var is_main_QMARK_ = app.common.types.component.is_main_of_QMARK_(child_inst_SINGLEQUOTE_,child_main);
var G__67547 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(((function (children_inst__$1,children_main__$1,changes__$1,is_main_QMARK_,child_inst_SINGLEQUOTE_,child_main_SINGLEQUOTE_,child_inst,child_main){
return (function (p1__67139_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__67139_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(child_inst_SINGLEQUOTE_));
});})(children_inst__$1,children_main__$1,changes__$1,is_main_QMARK_,child_inst_SINGLEQUOTE_,child_main_SINGLEQUOTE_,child_inst,child_main))
,children_inst__$1);
var G__67548 = cljs.core.next(children_main__$1);
var G__67549 = (function (){var G__67161 = changes__$1;
var G__67161__$1 = ((is_main_QMARK_)?(both_cb.cljs$core$IFn$_invoke$arity$3 ? both_cb.cljs$core$IFn$_invoke$arity$3(G__67161,child_inst_SINGLEQUOTE_,child_main) : both_cb.call(null,G__67161,child_inst_SINGLEQUOTE_,child_main)):G__67161);
var G__67161__$2 = (((!(is_main_QMARK_)))?(swapped_cb.cljs$core$IFn$_invoke$arity$3 ? swapped_cb.cljs$core$IFn$_invoke$arity$3(G__67161__$1,child_inst_SINGLEQUOTE_,child_main) : swapped_cb.call(null,G__67161__$1,child_inst_SINGLEQUOTE_,child_main)):G__67161__$1);
return (moved_cb.cljs$core$IFn$_invoke$arity$3 ? moved_cb.cljs$core$IFn$_invoke$arity$3(G__67161__$2,child_inst_SINGLEQUOTE_,child_main) : moved_cb.call(null,G__67161__$2,child_inst_SINGLEQUOTE_,child_main));

})();
children_inst__$1 = G__67547;
children_main__$1 = G__67548;
changes__$1 = G__67549;
continue;
}

}
}
}

}
}
}
break;
}
});
app.common.logic.libraries.add_shape_to_instance = (function app$common$logic$libraries$add_shape_to_instance(changes,component_shape,index,component_page,container,root_instance,root_main,omit_touched_QMARK_,set_remote_synced_QMARK_){
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component_shape),component_page)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),["ADD [P ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(container)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component_shape))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component_shape))].join('')], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}

} else {
}

var component_parent_shape = app.common.types.container.get_shape(component_page,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(component_shape));
var parent_shape = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__67164_SHARP_){
return app.common.types.component.is_main_of_QMARK_(component_parent_shape,p1__67164_SHARP_);
}),app.common.files.helpers.get_children_with_self(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root_instance)));
var all_parents = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent_shape)], null),app.common.files.helpers.get_parent_ids(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent_shape)));
var update_new_shape = (function (new_shape,original_shape){
var new_shape__$1 = (app.common.logic.libraries.reposition_shape.cljs$core$IFn$_invoke$arity$3 ? app.common.logic.libraries.reposition_shape.cljs$core$IFn$_invoke$arity$3(new_shape,root_main,root_instance) : app.common.logic.libraries.reposition_shape.call(null,new_shape,root_main,root_instance));
var G__67168 = new_shape__$1;
var G__67168__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(original_shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component_shape)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67168,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(parent_shape),new cljs.core.Keyword(null,"frame","frame",-1711082588)))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent_shape):new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(parent_shape))):G__67168);
var G__67168__$2 = (cljs.core.truth_(set_remote_synced_QMARK_)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67168__$1,new cljs.core.Keyword(null,"remote-synced","remote-synced",1564821477),true):G__67168__$1);
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67168__$2,new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(original_shape)),new cljs.core.Keyword(null,"touched","touched",-609134419));

});
var update_original_shape = (function (original_shape,_new_shape){
return original_shape;
});
var vec__67165 = app.common.types.shape_tree.clone_shape.cljs$core$IFn$_invoke$arity$variadic(component_shape,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent_shape),cljs.core.get.cljs$core$IFn$_invoke$arity$2(component_page,new cljs.core.Keyword(null,"objects","objects",2099713734)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-new-shape","update-new-shape",1958657165),update_new_shape,new cljs.core.Keyword(null,"update-original-shape","update-original-shape",1527494425),update_original_shape,new cljs.core.Keyword(null,"dest-objects","dest-objects",1417587106),cljs.core.get.cljs$core$IFn$_invoke$arity$2(container,new cljs.core.Keyword(null,"objects","objects",2099713734))], 0));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67165,(0),null);
var new_shapes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67165,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67165,(2),null);
var add_obj_change = (function (changes__$1,shape_SINGLEQUOTE_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,(function (){var G__67169 = container;
var G__67170 = (function (){var $ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_),new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"obj","obj",981763962),shape_SINGLEQUOTE_], null);
var G__67171 = $;
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67171,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_));
} else {
return G__67171;
}
})();
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__67169,G__67170) : app.common.logic.libraries.make_change.call(null,G__67169,G__67170));
})());
});
var del_obj_change = (function (changes__$1,shape_SINGLEQUOTE_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes__$1,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,(function (){var G__67173 = container;
var G__67174 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"del-obj","del-obj",-1367710701),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_),new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null);
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__67173,G__67174) : app.common.logic.libraries.make_change.call(null,G__67173,G__67174));
})());
});
var changes_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_obj_change,changes,new_shapes);
var changes_SINGLEQUOTE___$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes_SINGLEQUOTE_,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,(function (){var G__67175 = container;
var G__67176 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reg-objects","reg-objects",1473118866),new cljs.core.Keyword(null,"shapes","shapes",1897594879),all_parents], null);
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__67175,G__67176) : app.common.logic.libraries.make_change.call(null,G__67175,G__67176));
})());
var changes_SINGLEQUOTE___$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(del_obj_change,changes_SINGLEQUOTE___$1,new_shapes);
if(cljs.core.truth_((function (){var and__5023__auto__ = app.common.types.component.touched_group_QMARK_(parent_shape,new cljs.core.Keyword(null,"shapes-group","shapes-group",1443424131));
if(cljs.core.truth_(and__5023__auto__)){
return omit_touched_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return changes;
} else {
return app.common.files.changes_builder.apply_changes_local(changes_SINGLEQUOTE___$2);
}
});
app.common.logic.libraries.add_shape_to_main = (function app$common$logic$libraries$add_shape_to_main(changes,shape,index,component,component_container,page,root_instance,root_main){
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),page)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),["ADD [C ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component_container)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))].join('')], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}

} else {
}

var parent_shape = app.common.types.container.get_shape(page,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var component_parent_shape = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__67178_SHARP_){
return app.common.types.component.is_main_of_QMARK_(p1__67178_SHARP_,parent_shape);
}),app.common.files.helpers.get_children_with_self(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component_container),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root_main)));
var all_parents = cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component_parent_shape)], null),app.common.files.helpers.get_parent_ids(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component_container),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component_parent_shape)));
var update_new_shape = (function (new_shape,_original_shape){
return (app.common.logic.libraries.reposition_shape.cljs$core$IFn$_invoke$arity$3 ? app.common.logic.libraries.reposition_shape.cljs$core$IFn$_invoke$arity$3(new_shape,root_instance,root_main) : app.common.logic.libraries.reposition_shape.call(null,new_shape,root_instance,root_main));
});
var update_original_shape = (function (original_shape,new_shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(original_shape,new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_shape));
});
var vec__67179 = app.common.types.shape_tree.clone_shape.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component_parent_shape),cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"objects","objects",2099713734)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"update-new-shape","update-new-shape",1958657165),update_new_shape,new cljs.core.Keyword(null,"update-original-shape","update-original-shape",1527494425),update_original_shape,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(component_parent_shape))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component_parent_shape):new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(component_parent_shape))], 0));
var _new_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67179,(0),null);
var new_shapes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67179,(1),null);
var updated_shapes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67179,(2),null);
var add_obj_change = (function (changes__$1,shape_SINGLEQUOTE_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,(function (){var G__67182 = (function (){var G__67183 = component_container;
var G__67184 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_),new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"obj","obj",981763962),shape_SINGLEQUOTE_], null);
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__67183,G__67184) : app.common.logic.libraries.make_change.call(null,G__67183,G__67184));
})();
return G__67182;
})());
});
var mod_obj_change = (function (changes__$1,shape_SINGLEQUOTE_){
var shape_original = app.common.types.container.get_shape(page,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_),new cljs.core.Keyword(null,"operations","operations",1630691895),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"component-file","component-file",-1378670433),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"component-root","component-root",-485271026),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"component-root","component-root",-485271026).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_)], null)], null)], null)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_original),new cljs.core.Keyword(null,"operations","operations",1630691895),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape_original)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"component-file","component-file",-1378670433),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape_original)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"component-root","component-root",-485271026),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"component-root","component-root",-485271026).cljs$core$IFn$_invoke$arity$1(shape_original)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape_original)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(shape_original)], null)], null)], null));
});
var del_obj_change = (function (changes__$1,shape_SINGLEQUOTE_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes__$1,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"del-obj","del-obj",-1367710701),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_),new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null));
});
var changes_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_obj_change,changes,new_shapes);
var changes_SINGLEQUOTE___$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes_SINGLEQUOTE_,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reg-objects","reg-objects",1473118866),new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"shapes","shapes",1897594879),all_parents], null));
var changes_SINGLEQUOTE___$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(mod_obj_change,changes_SINGLEQUOTE___$1,updated_shapes);
var changes_SINGLEQUOTE___$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(del_obj_change,changes_SINGLEQUOTE___$2,new_shapes);
return app.common.files.changes_builder.apply_changes_local(changes_SINGLEQUOTE___$3);
});
app.common.logic.libraries.remove_shape = (function app$common$logic$libraries$remove_shape(changes,shape,container,omit_touched_QMARK_){
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),container)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),["REMOVE-SHAPE ",((app.common.files.helpers.page_QMARK_(container))?"[P ":"[C "),app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(container)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))].join('')], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}

} else {
}

var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(container,new cljs.core.Keyword(null,"objects","objects",2099713734));
var parents = app.common.files.helpers.get_parent_ids(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
var parent = cljs.core.first(parents);
var children = app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
var ids = cljs.core.reverse(cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),children));
var add_redo_change = (function (changes__$1,id){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,(function (){var G__67185 = container;
var G__67186 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"del-obj","del-obj",-1367710701),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null);
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__67185,G__67186) : app.common.logic.libraries.make_change.call(null,G__67185,G__67186));
})());
});
var add_undo_change = (function (changes__$1,id){
var shape_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes__$1,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,(function (){var G__67187 = container;
var G__67188 = (function (){var $ = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983),new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"index","index",-1531685915),app.common.files.helpers.get_position_on_parent(objects,id),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_),new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"obj","obj",981763962),shape_SINGLEQUOTE_], null);
var G__67189 = $;
if(cljs.core.truth_(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67189,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_));
} else {
return G__67189;
}
})();
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__67187,G__67188) : app.common.logic.libraries.make_change.call(null,G__67187,G__67188));
})());
});
var changes_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_redo_change,changes,ids),new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,(function (){var G__67190 = container;
var G__67191 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reg-objects","reg-objects",1473118866),new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.vec(parents)], null);
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__67190,G__67191) : app.common.logic.libraries.make_change.call(null,G__67190,G__67191));
})());
var changes_SINGLEQUOTE___$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_undo_change,changes_SINGLEQUOTE_,ids);
if(cljs.core.truth_((function (){var and__5023__auto__ = app.common.types.component.touched_group_QMARK_(parent,new cljs.core.Keyword(null,"shapes-group","shapes-group",1443424131));
if(cljs.core.truth_(and__5023__auto__)){
return omit_touched_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return changes;
} else {
return app.common.files.changes_builder.apply_changes_local(changes_SINGLEQUOTE___$1);
}
});
app.common.logic.libraries.move_shape = (function app$common$logic$libraries$move_shape(changes,shape,index_before,index_after,container,omit_touched_QMARK_){
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),container)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),["MOVE ",((app.common.files.helpers.page_QMARK_(container))?"[P ":"[C "),app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(container)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index_before)," -> ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index_after)].join('')], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}

} else {
}

var parent = app.common.types.container.get_shape(container,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var changes_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,(function (){var G__67192 = container;
var G__67193 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mov-objects","mov-objects",-744687289),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.Keyword(null,"index","index",-1531685915),index_after,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"allow-altering-copies","allow-altering-copies",1930197967),true], null);
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__67192,G__67193) : app.common.logic.libraries.make_change.call(null,G__67192,G__67193));
})()),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,(function (){var G__67194 = container;
var G__67195 = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mov-objects","mov-objects",-744687289),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.Keyword(null,"index","index",-1531685915),index_before,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"allow-altering-copies","allow-altering-copies",1930197967),true], null);
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__67194,G__67195) : app.common.logic.libraries.make_change.call(null,G__67194,G__67195));
})());
if(cljs.core.truth_((function (){var and__5023__auto__ = app.common.types.component.touched_group_QMARK_(parent,new cljs.core.Keyword(null,"shapes-group","shapes-group",1443424131));
if(cljs.core.truth_(and__5023__auto__)){
return omit_touched_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return changes;
} else {
return app.common.files.changes_builder.apply_changes_local(changes_SINGLEQUOTE_);
}
});
app.common.logic.libraries.change_touched = (function app$common$logic$libraries$change_touched(changes,dest_shape,origin_shape,container,p__67196){
var map__67197 = p__67196;
var map__67197__$1 = cljs.core.__destructure_map(map__67197);
var options = map__67197__$1;
var reset_touched_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67197__$1,new cljs.core.Keyword(null,"reset-touched?","reset-touched?",1763538527));
var copy_touched_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67197__$1,new cljs.core.Keyword(null,"copy-touched?","copy-touched?",-1498392371));
if((new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(dest_shape) == null)){
return changes;
} else {
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dest_shape),container)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),["CHANGE-TOUCHED ",((app.common.files.helpers.page_QMARK_(container))?"[P ":"[C "),app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(container)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dest_shape))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dest_shape))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),options], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}

} else {
}

var new_touched = (cljs.core.truth_(reset_touched_QMARK_)?null:(cljs.core.truth_(copy_touched_QMARK_)?(cljs.core.truth_(new cljs.core.Keyword(null,"remote-synced","remote-synced",1564821477).cljs$core$IFn$_invoke$arity$1(origin_shape))?null:clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(dest_shape),new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(origin_shape))):new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(dest_shape)
));
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,(function (){var G__67198 = container;
var G__67199 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dest_shape),new cljs.core.Keyword(null,"operations","operations",1630691895),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-touched","set-touched",-443889429),new cljs.core.Keyword(null,"touched","touched",-609134419),new_touched], null)], null)], null);
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__67198,G__67199) : app.common.logic.libraries.make_change.call(null,G__67198,G__67199));
})()),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,(function (){var G__67200 = container;
var G__67201 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dest_shape),new cljs.core.Keyword(null,"operations","operations",1630691895),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-touched","set-touched",-443889429),new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(dest_shape)], null)], null)], null);
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__67200,G__67201) : app.common.logic.libraries.make_change.call(null,G__67200,G__67201));
})()));
}
});
app.common.logic.libraries.change_remote_synced = (function app$common$logic$libraries$change_remote_synced(changes,shape,container,remote_synced_QMARK_){
if((new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape) == null)){
return changes;
} else {
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),container)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),["CHANGE-REMOTE-SYNCED? ",((app.common.files.helpers.page_QMARK_(container))?"[P ":"[C "),app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(container)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-synced","remote-synced",1564821477),remote_synced_QMARK_], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}

} else {
}

return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,(function (){var G__67202 = container;
var G__67203 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"operations","operations",1630691895),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-remote-synced","set-remote-synced",1195610599),new cljs.core.Keyword(null,"remote-synced","remote-synced",1564821477),remote_synced_QMARK_], null)], null)], null);
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__67202,G__67203) : app.common.logic.libraries.make_change.call(null,G__67202,G__67203));
})()),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,(function (){var G__67204 = container;
var G__67205 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"operations","operations",1630691895),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-remote-synced","set-remote-synced",1195610599),new cljs.core.Keyword(null,"remote-synced","remote-synced",1564821477),new cljs.core.Keyword(null,"remote-synced","remote-synced",1564821477).cljs$core$IFn$_invoke$arity$1(shape)], null)], null)], null);
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__67204,G__67205) : app.common.logic.libraries.make_change.call(null,G__67204,G__67205));
})()));
}
});
/**
 * Token synchronization algorithm. Copy the applied tokens that have changed
 * in the origin shape to the dest shape (applying or removing as necessary).
 * 
 * Only the given token attributes are synced.
 */
app.common.logic.libraries.update_tokens = (function app$common$logic$libraries$update_tokens(changes,container,dest_shape,orig_shape,token_attrs){
var orig_tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$3(orig_shape,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871),cljs.core.PersistentArrayMap.EMPTY);
var dest_tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$3(dest_shape,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871),cljs.core.PersistentArrayMap.EMPTY);
var dest_tokens_SINGLEQUOTE_ = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (dest_tokens_SINGLEQUOTE_,token_attr){
var orig_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(orig_tokens,token_attr);
var dest_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(dest_tokens,token_attr);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(orig_token,dest_token)){
return dest_tokens_SINGLEQUOTE_;
} else {
if((orig_token == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(dest_tokens_SINGLEQUOTE_,token_attr);
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(dest_tokens_SINGLEQUOTE_,token_attr,orig_token);
}
}
}),dest_tokens,token_attrs);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dest_tokens,dest_tokens_SINGLEQUOTE_)){
return changes;
} else {
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,(function (){var G__67206 = container;
var G__67207 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dest_shape),new cljs.core.Keyword(null,"operations","operations",1630691895),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871),new cljs.core.Keyword(null,"val","val",128701612),dest_tokens_SINGLEQUOTE_,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null)], null)], null);
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__67206,G__67207) : app.common.logic.libraries.make_change.call(null,G__67206,G__67207));
})()),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,(function (){var G__67208 = container;
var G__67209 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dest_shape),new cljs.core.Keyword(null,"operations","operations",1630691895),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871),new cljs.core.Keyword(null,"val","val",128701612),dest_tokens,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null)], null)], null);
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__67208,G__67209) : app.common.logic.libraries.make_change.call(null,G__67208,G__67209));
})()));
}
});
app.common.logic.libraries.generate_update_tokens = (function app$common$logic$libraries$generate_update_tokens(changes,container,dest_shape,origin_shape,touched,omit_touched_QMARK_,valid_attrs){
var attrs = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__67210_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),p1__67210_SHARP_);
}),cljs.core.seq(cljs.core.keys(app.common.types.component.sync_attrs)));
var applied_tokens = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (applied_tokens,attr){
var attr_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.component.sync_attrs,attr);
var token_attrs = app.common.types.token.shape_attr__GT_token_attrs.cljs$core$IFn$_invoke$arity$1(attr);
if(((((cljs.core.not(omit_touched_QMARK_)) || (cljs.core.not((touched.cljs$core$IFn$_invoke$arity$1 ? touched.cljs$core$IFn$_invoke$arity$1(attr_group) : touched.call(null,attr_group)))))) && (((cljs.core.empty_QMARK_(valid_attrs)) || (cljs.core.contains_QMARK_(valid_attrs,attr)))))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(applied_tokens,token_attrs);
} else {
return applied_tokens;
}
}),cljs.core.PersistentHashSet.EMPTY,attrs);
var G__67211 = changes;
if(cljs.core.seq(applied_tokens)){
return app.common.logic.libraries.update_tokens(G__67211,container,dest_shape,origin_shape,applied_tokens);
} else {
return G__67211;
}
});
app.common.logic.libraries.add_update_attr_changes = (function app$common$logic$libraries$add_update_attr_changes(changes,dest_shape,container,roperations,uoperations){
var all_parents = app.common.files.helpers.get_parent_ids(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dest_shape));
return app.common.files.changes_builder.apply_changes_local(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,(function (){var G__67212 = container;
var G__67213 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dest_shape),new cljs.core.Keyword(null,"operations","operations",1630691895),roperations], null);
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__67212,G__67213) : app.common.logic.libraries.make_change.call(null,G__67212,G__67213));
})()),new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.conj,(function (){var G__67214 = container;
var G__67215 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reg-objects","reg-objects",1473118866),new cljs.core.Keyword(null,"shapes","shapes",1897594879),all_parents], null);
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__67214,G__67215) : app.common.logic.libraries.make_change.call(null,G__67214,G__67215));
})()),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.conj,(function (){var G__67216 = container;
var G__67217 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dest_shape),new cljs.core.Keyword(null,"operations","operations",1630691895),cljs.core.vec(uoperations)], null);
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__67216,G__67217) : app.common.logic.libraries.make_change.call(null,G__67216,G__67217));
})()),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.concat,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__67218 = container;
var G__67219 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"reg-objects","reg-objects",1473118866),new cljs.core.Keyword(null,"shapes","shapes",1897594879),all_parents], null);
return (app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2 ? app.common.logic.libraries.make_change.cljs$core$IFn$_invoke$arity$2(G__67218,G__67219) : app.common.logic.libraries.make_change.call(null,G__67218,G__67219));
})()], null)));
});
app.common.logic.libraries.text_change_value = (function app$common$logic$libraries$text_change_value(touched_content,untouched_content,touched){
var main_comps_diff = app.common.types.text.get_diff_type(touched_content,untouched_content);
var diff_structure_QMARK_ = cljs.core.contains_QMARK_(main_comps_diff,new cljs.core.Keyword(null,"text-content-structure","text-content-structure",-2085099684));
var touched_attrs = app.common.types.text.get_first_paragraph_text_attrs(touched_content);
var thed_unif_style_QMARK_ = app.common.types.text.equal_attrs_QMARK_.cljs$core$IFn$_invoke$arity$2(touched_content,touched_attrs);
var untouched_attrs = app.common.types.text.get_first_paragraph_text_attrs(untouched_content);
var untched_unif_style_QMARK_ = app.common.types.text.equal_attrs_QMARK_.cljs$core$IFn$_invoke$arity$2(untouched_content,untouched_attrs);
if(cljs.core.truth_((function (){var and__5023__auto__ = (touched.cljs$core$IFn$_invoke$arity$1 ? touched.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text-content-text","text-content-text",1379059411)) : touched.call(null,new cljs.core.Keyword(null,"text-content-text","text-content-text",1379059411)));
if(cljs.core.truth_(and__5023__auto__)){
return (touched.cljs$core$IFn$_invoke$arity$1 ? touched.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text-content-attribute","text-content-attribute",2029723884)) : touched.call(null,new cljs.core.Keyword(null,"text-content-attribute","text-content-attribute",2029723884)));
} else {
return and__5023__auto__;
}
})())){
return touched_content;
} else {
if(cljs.core.truth_((touched.cljs$core$IFn$_invoke$arity$1 ? touched.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text-content-structure","text-content-structure",-2085099684)) : touched.call(null,new cljs.core.Keyword(null,"text-content-structure","text-content-structure",-2085099684))))){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not((touched.cljs$core$IFn$_invoke$arity$1 ? touched.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text-content-attribute","text-content-attribute",2029723884)) : touched.call(null,new cljs.core.Keyword(null,"text-content-attribute","text-content-attribute",2029723884))));
if(and__5023__auto__){
var and__5023__auto____$1 = thed_unif_style_QMARK_;
if(cljs.core.truth_(and__5023__auto____$1)){
return untched_unif_style_QMARK_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return app.common.types.text.copy_attrs_keys(touched_content,untouched_attrs);
} else {
return touched_content;
}
} else {
if(cljs.core.truth_((touched.cljs$core$IFn$_invoke$arity$1 ? touched.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text-content-text","text-content-text",1379059411)) : touched.call(null,new cljs.core.Keyword(null,"text-content-text","text-content-text",1379059411))))){
return app.common.types.text.copy_text_keys(touched_content,untouched_content);
} else {
if(cljs.core.truth_((touched.cljs$core$IFn$_invoke$arity$1 ? touched.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text-content-attribute","text-content-attribute",2029723884)) : touched.call(null,new cljs.core.Keyword(null,"text-content-attribute","text-content-attribute",2029723884))))){
if(diff_structure_QMARK_){
if(cljs.core.truth_((function (){var and__5023__auto__ = thed_unif_style_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return untched_unif_style_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return app.common.types.text.copy_attrs_keys(untouched_content,touched_attrs);
} else {
return touched_content;
}
} else {
return app.common.types.text.copy_text_keys(untouched_content,touched_content);
}
} else {
return untouched_content;

}
}
}
}
});
app.common.logic.libraries.add_update_attr_operations = (function app$common$logic$libraries$add_update_attr_operations(attr,dest_shape,roperations,uoperations,attr_val){
var roperation = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"val","val",128701612),attr_val,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null);
var uoperation = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),attr,new cljs.core.Keyword(null,"val","val",128701612),cljs.core.get.cljs$core$IFn$_invoke$arity$2(dest_shape,attr),new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.conj.cljs$core$IFn$_invoke$arity$2(roperations,roperation),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(uoperations,uoperation)], null);
});
app.common.logic.libraries.check_detached_main = (function app$common$logic$libraries$check_detached_main(changes,dest_shape,origin_shape){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(dest_shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(origin_shape))) && (((app.common.types.component.subcopy_head_QMARK_(dest_shape)) && ((!(app.common.types.component.instance_head_QMARK_(origin_shape)))))))){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(changes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dest_shape)], null),app.common.types.component.unhead_shape,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null));
} else {
return changes;
}
});
/**
 * The main function that implements the attribute sync algorithm. Copy
 *   attributes that have changed in the origin shape to the dest shape.
 * 
 *   If omit-touched? is true, attributes whose group has been touched
 *   in the destination shape will not be copied.
 */
app.common.logic.libraries.update_attrs = (function app$common$logic$libraries$update_attrs(changes,dest_shape,origin_shape,dest_root,origin_root,container,omit_touched_QMARK_){
if(app.common.logic.libraries.enabled_shape_QMARK_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dest_shape),container)){
if(app.common.logging.enabled_QMARK_("app.common.logic.libraries",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),["SYNC ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(origin_shape))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(origin_shape))," -> ",((app.common.files.helpers.page_QMARK_(container))?"[P ":"[C "),app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(container)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(dest_shape))," ",app.common.logic.libraries.pretty_uuid(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(dest_shape))].join('')], null)], null);
}),null)),null,null,"app.common.logic.libraries",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}

} else {
}

var origin_shape__$1 = (app.common.logic.libraries.reposition_shape.cljs$core$IFn$_invoke$arity$3 ? app.common.logic.libraries.reposition_shape.cljs$core$IFn$_invoke$arity$3(origin_shape,origin_root,dest_root) : app.common.logic.libraries.reposition_shape.call(null,origin_shape,origin_root,dest_root));
var touched = cljs.core.get.cljs$core$IFn$_invoke$arity$3(dest_shape,new cljs.core.Keyword(null,"touched","touched",-609134419),cljs.core.PersistentHashSet.EMPTY);
var attrs = app.common.logic.libraries.updatable_attrs;
var roperations = cljs.core.PersistentVector.EMPTY;
var uoperations = cljs.core.List.EMPTY;
while(true){
var attr = cljs.core.first(attrs);
if((attr == null)){
var G__67228 = changes;
var G__67228__$1 = ((cljs.core.seq(roperations))?app.common.logic.libraries.add_update_attr_changes(G__67228,dest_shape,container,roperations,uoperations):G__67228);
var G__67228__$2 = app.common.logic.libraries.check_detached_main(G__67228__$1,dest_shape,origin_shape__$1)
;
return app.common.logic.libraries.generate_update_tokens(G__67228__$2,container,dest_shape,origin_shape__$1,touched,omit_touched_QMARK_,null);

} else {
var attr_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.component.sync_attrs,attr);
var reset_pos_data_QMARK_ = (function (){var and__5023__auto__ = app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(origin_shape__$1);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"position-data","position-data",-499622376));
if(and__5023__auto____$1){
var and__5023__auto____$2 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position-data","position-data",-499622376).cljs$core$IFn$_invoke$arity$1(origin_shape__$1),new cljs.core.Keyword(null,"position-data","position-data",-499622376).cljs$core$IFn$_invoke$arity$1(dest_shape));
if(and__5023__auto____$2){
return (touched.cljs$core$IFn$_invoke$arity$1 ? touched.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"geometry-group","geometry-group",801077954)) : touched.call(null,new cljs.core.Keyword(null,"geometry-group","geometry-group",801077954)));
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
var text_content_change_QMARK_ = (function (){var and__5023__auto__ = omit_touched_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(origin_shape__$1);
if(and__5023__auto____$1){
var and__5023__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224),attr);
if(and__5023__auto____$2){
return (touched.cljs$core$IFn$_invoke$arity$1 ? touched.cljs$core$IFn$_invoke$arity$1(attr_group) : touched.call(null,attr_group));
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
var skip_operations_QMARK_ = (function (){var or__5025__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(origin_shape__$1,attr),cljs.core.get.cljs$core$IFn$_invoke$arity$2(dest_shape,attr));
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = (touched.cljs$core$IFn$_invoke$arity$1 ? touched.cljs$core$IFn$_invoke$arity$1(attr_group) : touched.call(null,attr_group));
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = omit_touched_QMARK_;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not(text_content_change_QMARK_);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
})();
var attr_val = (cljs.core.truth_(skip_operations_QMARK_)?null:(cljs.core.truth_(reset_pos_data_QMARK_)?null:(cljs.core.truth_(text_content_change_QMARK_)?app.common.logic.libraries.text_change_value(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(dest_shape),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(origin_shape__$1),touched):cljs.core.get.cljs$core$IFn$_invoke$arity$2(origin_shape__$1,attr)
)));
var skip_operations_QMARK___$1 = (function (){var or__5025__auto__ = skip_operations_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr_val,cljs.core.get.cljs$core$IFn$_invoke$arity$2(dest_shape,attr));
}
})();
var vec__67229 = (cljs.core.truth_((function (){var and__5023__auto__ = text_content_change_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(skip_operations_QMARK___$1);
} else {
return and__5023__auto__;
}
})())?app.common.logic.libraries.add_update_attr_operations(new cljs.core.Keyword(null,"position-data","position-data",-499622376),dest_shape,roperations,uoperations,null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [roperations,uoperations], null));
var roperations__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67229,(0),null);
var uoperations__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67229,(1),null);
var vec__67232 = (cljs.core.truth_(skip_operations_QMARK___$1)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [roperations__$1,uoperations__$1], null):app.common.logic.libraries.add_update_attr_operations(attr,dest_shape,roperations__$1,uoperations__$1,attr_val));
var roperations_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67232,(0),null);
var uoperations_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67232,(1),null);
var G__67591 = cljs.core.next(attrs);
var G__67592 = roperations_SINGLEQUOTE_;
var G__67593 = uoperations_SINGLEQUOTE_;
attrs = G__67591;
roperations = G__67592;
uoperations = G__67593;
continue;
}
break;
}
});
app.common.logic.libraries.set_path_new_values = (function app$common$logic$libraries$set_path_new_values(current_shape,prev_shape,transform){
var new_content = app.common.types.path.segment.transform_content(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(current_shape),app.common.geom.matrix.transform_in(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0)),transform));
var new_points = app.common.geom.rect.rect__GT_points(app.common.types.path.segment.content__GT_selrect(new_content));
var points_center = app.common.geom.shapes.common.points__GT_center(new_points);
var new_selrect = app.common.geom.shapes.calculate_selrect(new_points,points_center);
var shape = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(current_shape,new cljs.core.Keyword(null,"content","content",15833224),new_content,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"points","points",-1486596883),new_points,new cljs.core.Keyword(null,"selrect","selrect",1966287292),new_selrect], 0));
var prev_center = app.common.types.path.segment.content_center(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(prev_shape));
var delta = app.common.geom.point.subtract(points_center,cljs.core.first(new_points));
var new_pos = app.common.geom.point.subtract(prev_center,delta);
return app.common.geom.shapes.absolute_move(shape,new_pos);
});
app.common.logic.libraries.switch_path_change_value = (function app$common$logic$libraries$switch_path_change_value(prev_shape,current_shape,ref_shape,attr){
var old_width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(ref_shape));
var new_width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(prev_shape));
var old_height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(ref_shape));
var new_height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(prev_shape));
var transform = app.common.geom.matrix.scale_matrix.cljs$core$IFn$_invoke$arity$1(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((new_width / old_width),(new_height / old_height)));
var shape = app.common.logic.libraries.set_path_new_values(current_shape,prev_shape,transform);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,attr);
});
app.common.logic.libraries.switch_text_change_value = (function app$common$logic$libraries$switch_text_change_value(prev_content,current_content,ref_content,touched){
var main_comps_diff = app.common.types.text.get_diff_type(ref_content,current_content);
var can_keep_text_QMARK_ = (!(cljs.core.contains_QMARK_(main_comps_diff,new cljs.core.Keyword(null,"text-content-text","text-content-text",1379059411))));
var can_keep_attr_QMARK_ = (!(cljs.core.contains_QMARK_(main_comps_diff,new cljs.core.Keyword(null,"text-content-attribute","text-content-attribute",2029723884))));
var main_diff_structure_QMARK_ = cljs.core.contains_QMARK_(main_comps_diff,new cljs.core.Keyword(null,"text-content-structure","text-content-structure",-2085099684));
var current_attrs = app.common.types.text.get_first_paragraph_text_attrs(current_content);
var curr_unif_style_QMARK_ = app.common.types.text.equal_attrs_QMARK_.cljs$core$IFn$_invoke$arity$2(current_content,current_attrs);
var prev_attrs = app.common.types.text.get_first_paragraph_text_attrs(prev_content);
var prev_unif_style_QMARK_ = app.common.types.text.equal_attrs_QMARK_.cljs$core$IFn$_invoke$arity$2(prev_content,prev_attrs);
var ref_attrs = app.common.types.text.get_first_paragraph_text_attrs(ref_content);
var ref_unif_style_QMARK_ = app.common.types.text.equal_attrs_QMARK_.cljs$core$IFn$_invoke$arity$2(ref_content,ref_attrs);
if(main_diff_structure_QMARK_){
if(cljs.core.truth_((function (){var and__5023__auto__ = curr_unif_style_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = ref_unif_style_QMARK_;
if(cljs.core.truth_(and__5023__auto____$1)){
var and__5023__auto____$2 = prev_unif_style_QMARK_;
if(cljs.core.truth_(and__5023__auto____$2)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(ref_attrs,current_attrs);
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return app.common.types.text.copy_attrs_keys(current_content,prev_attrs);
} else {
return current_content;
}
} else {
if(((can_keep_text_QMARK_) && (can_keep_attr_QMARK_))){
return prev_content;
} else {
if((((!(can_keep_text_QMARK_))) && ((!(can_keep_attr_QMARK_))))){
return current_content;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = (touched.cljs$core$IFn$_invoke$arity$1 ? touched.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text-content-structure","text-content-structure",-2085099684)) : touched.call(null,new cljs.core.Keyword(null,"text-content-structure","text-content-structure",-2085099684)));
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = curr_unif_style_QMARK_;
if(cljs.core.truth_(and__5023__auto____$1)){
return prev_unif_style_QMARK_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
if(can_keep_text_QMARK_){
return app.common.types.text.copy_attrs_keys(prev_content,current_attrs);
} else {
return app.common.types.text.copy_attrs_keys(current_content,prev_attrs);
}
} else {
if(cljs.core.truth_((touched.cljs$core$IFn$_invoke$arity$1 ? touched.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text-content-structure","text-content-structure",-2085099684)) : touched.call(null,new cljs.core.Keyword(null,"text-content-structure","text-content-structure",-2085099684))))){
return current_content;
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = (touched.cljs$core$IFn$_invoke$arity$1 ? touched.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text-content-text","text-content-text",1379059411)) : touched.call(null,new cljs.core.Keyword(null,"text-content-text","text-content-text",1379059411)));
if(cljs.core.truth_(and__5023__auto__)){
return can_keep_text_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return app.common.types.text.copy_text_keys(prev_content,current_content);
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = (touched.cljs$core$IFn$_invoke$arity$1 ? touched.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"text-content-attribute","text-content-attribute",2029723884)) : touched.call(null,new cljs.core.Keyword(null,"text-content-attribute","text-content-attribute",2029723884)));
if(cljs.core.truth_(and__5023__auto__)){
return can_keep_attr_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return app.common.types.text.copy_text_keys(current_content,prev_content);
} else {
return current_content;

}
}
}
}
}
}
}
});
app.common.logic.libraries.switch_fixed_layout_geom_change_value = (function app$common$logic$libraries$switch_fixed_layout_geom_change_value(prev_shape,current_shape,origin_shape,attr){
var prev_width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(prev_shape));
var current_width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(current_shape));
var origin_width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(origin_shape));
var prev_height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(prev_shape));
var current_height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(current_shape));
var origin_height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(origin_shape));
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(current_shape));
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(current_shape));
var h_sizing = new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(prev_shape);
var v_sizing = new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(prev_shape);
var final_width = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fix","fix",-1031773329),h_sizing))?current_width:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(origin_width,current_width))?prev_width:current_width));
var final_height = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fix","fix",-1031773329),v_sizing))?current_height:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(origin_height,current_height))?prev_height:current_height));
var selrect = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(current_shape),new cljs.core.Keyword(null,"width","width",-384071477),final_width,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"height","height",1025178622),final_height,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"x1","x1",-1863922247),x,new cljs.core.Keyword(null,"y1","y1",589123466),y,new cljs.core.Keyword(null,"x2","x2",-1362513475),(x + final_width),new cljs.core.Keyword(null,"y2","y2",-718691301),(y + final_height)], 0));
var G__67235 = attr;
var G__67235__$1 = (((G__67235 instanceof cljs.core.Keyword))?G__67235.fqn:null);
switch (G__67235__$1) {
case "width":
return final_width;

break;
case "height":
return final_height;

break;
case "selrect":
return selrect;

break;
case "points":
return app.common.geom.shapes.transform_points.cljs$core$IFn$_invoke$arity$3(app.common.geom.rect.rect__GT_points(selrect),app.common.geom.rect.rect__GT_center(selrect),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(current_shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0();
}
})());

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__67235__$1)].join('')));

}
});
/**
 * Returns true when the value of `attr` in `shape` is considered equal
 * to the corresponding value in `origin-shape`, ignoring positional
 * displacement (x/y).
 * For :selrect we compare width/height only;
 * for :points we normalise each vector so the first point is the
 * origin before comparing.
 */
app.common.logic.libraries.equal_geometry_QMARK_ = (function app$common$logic$libraries$equal_geometry_QMARK_(shape,origin_shape,attr){
var or__5025__auto__ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"selrect","selrect",1966287292))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(origin_shape)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(origin_shape)))))));
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"points","points",-1486596883));
if(and__5023__auto__){
var normalize_pts = (function (pts){
if(cljs.core.seq(pts)){
var f = cljs.core.first(pts);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__67236_SHARP_){
return app.common.geom.point.subtract(p1__67236_SHARP_,f);
}),pts);
} else {
return null;
}
});
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(normalize_pts(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"points","points",-1486596883))),normalize_pts(cljs.core.get.cljs$core$IFn$_invoke$arity$2(origin_shape,new cljs.core.Keyword(null,"points","points",-1486596883))));
} else {
return and__5023__auto__;
}
}
});
/**
 * Copy attributes that have changed in the shape previous to the switch
 * to the current shape (post switch). Used only on variants switch
 */
app.common.logic.libraries.update_attrs_on_switch = (function app$common$logic$libraries$update_attrs_on_switch(changes,current_shape,previous_shape,current_root,prev_root,origin_ref_shape,container){
var previous_shape__$1 = (app.common.logic.libraries.reposition_shape.cljs$core$IFn$_invoke$arity$3 ? app.common.logic.libraries.reposition_shape.cljs$core$IFn$_invoke$arity$3(previous_shape,prev_root,current_root) : app.common.logic.libraries.reposition_shape.call(null,previous_shape,prev_root,current_root));
var touched = cljs.core.get.cljs$core$IFn$_invoke$arity$3(previous_shape__$1,new cljs.core.Keyword(null,"touched","touched",-609134419),cljs.core.PersistentHashSet.EMPTY);
var text_auto_QMARK_ = ((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(current_shape)) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"auto-height","auto-height",-960519663),null,new cljs.core.Keyword(null,"auto-width","auto-width",-992925188),null], null), null),new cljs.core.Keyword(null,"grow-type","grow-type",-908344411).cljs$core$IFn$_invoke$arity$1(current_shape))));
var attrs = app.common.logic.libraries.updatable_attrs;
var roperations = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-touched","set-touched",-443889429),new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(previous_shape__$1)], null)], null);
var uoperations = (new cljs.core.List(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-touched","set-touched",-443889429),new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(current_shape)], null),null,(1),null));
while(true){
var temp__5823__auto__ = cljs.core.first(attrs);
if(cljs.core.truth_(temp__5823__auto__)){
var attr = temp__5823__auto__;
var attr_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.component.sync_attrs,attr);
var skip_operations_QMARK_ = ((((text_auto_QMARK_) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"points","points",-1486596883),null,new cljs.core.Keyword(null,"position-data","position-data",-499622376),null,new cljs.core.Keyword(null,"selrect","selrect",1966287292),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),attr)))) || (((cljs.core.not(app.common.types.shape.is_allowed_switch_keep_attr_QMARK_(attr,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(current_shape)))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(previous_shape__$1,attr),cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_shape,attr))) || (((app.common.logic.libraries.equal_geometry_QMARK_(previous_shape__$1,origin_ref_shape,attr)) || (((cljs.core.not((touched.cljs$core$IFn$_invoke$arity$1 ? touched.cljs$core$IFn$_invoke$arity$1(attr_group) : touched.call(null,attr_group)))) || ((((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"points","points",-1486596883),null,new cljs.core.Keyword(null,"selrect","selrect",1966287292),null], null), null),attr)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(origin_ref_shape,attr),cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_shape,attr))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"content","content",15833224))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(previous_shape__$1),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(current_shape))))))))))))))));
var text_change_QMARK_ = (function (){var and__5023__auto__ = (!(skip_operations_QMARK_));
if(and__5023__auto__){
var and__5023__auto____$1 = app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(current_shape);
if(and__5023__auto____$1){
var and__5023__auto____$2 = app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(previous_shape__$1);
if(and__5023__auto____$2){
var and__5023__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224),attr);
if(and__5023__auto____$3){
return (touched.cljs$core$IFn$_invoke$arity$1 ? touched.cljs$core$IFn$_invoke$arity$1(attr_group) : touched.call(null,attr_group));
} else {
return and__5023__auto____$3;
}
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
var path_change_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(current_shape))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"content","content",15833224),null,new cljs.core.Keyword(null,"points","points",-1486596883),null,new cljs.core.Keyword(null,"selrect","selrect",1966287292),null], null), null),attr)));
var reset_pos_data_QMARK_ = (function (){var and__5023__auto__ = (!(skip_operations_QMARK_));
if(and__5023__auto__){
var and__5023__auto____$1 = app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(previous_shape__$1);
if(and__5023__auto____$1){
var and__5023__auto____$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"position-data","position-data",-499622376))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"selrect","selrect",1966287292))));
if(and__5023__auto____$2){
var and__5023__auto____$3 = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"position-data","position-data",-499622376).cljs$core$IFn$_invoke$arity$1(previous_shape__$1),new cljs.core.Keyword(null,"position-data","position-data",-499622376).cljs$core$IFn$_invoke$arity$1(current_shape));
if(and__5023__auto____$3){
return (touched.cljs$core$IFn$_invoke$arity$1 ? touched.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"geometry-group","geometry-group",801077954)) : touched.call(null,new cljs.core.Keyword(null,"geometry-group","geometry-group",801077954)));
} else {
return and__5023__auto____$3;
}
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
var skip_operations_QMARK___$1 = (function (){var or__5025__auto__ = skip_operations_QMARK_;
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var and__5023__auto__ = reset_pos_data_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"points","points",-1486596883),null,new cljs.core.Keyword(null,"selrect","selrect",1966287292),null], null), null),attr)) && ((((!(path_change_QMARK_))) && ((((!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fix","fix",-1031773329),new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(previous_shape__$1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fix","fix",-1031773329),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(previous_shape__$1))))))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(origin_ref_shape,new cljs.core.Keyword(null,"width","width",-384071477)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_shape,new cljs.core.Keyword(null,"width","width",-384071477)))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(origin_ref_shape,new cljs.core.Keyword(null,"height","height",1025178622)),cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_shape,new cljs.core.Keyword(null,"height","height",1025178622)))))))))));
}
}
})();
var attr_val = (cljs.core.truth_(skip_operations_QMARK___$1)?null:(cljs.core.truth_(reset_pos_data_QMARK_)?null:(cljs.core.truth_(text_change_QMARK_)?app.common.logic.libraries.switch_text_change_value(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(previous_shape__$1),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(current_shape),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(origin_ref_shape),touched):((path_change_QMARK_)?app.common.logic.libraries.switch_path_change_value(previous_shape__$1,current_shape,origin_ref_shape,attr):((((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fix","fix",-1031773329),new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(previous_shape__$1))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fix","fix",-1031773329),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(previous_shape__$1))))) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"points","points",-1486596883),null,new cljs.core.Keyword(null,"selrect","selrect",1966287292),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null),attr))))?app.common.logic.libraries.switch_fixed_layout_geom_change_value(previous_shape__$1,current_shape,origin_ref_shape,attr):cljs.core.get.cljs$core$IFn$_invoke$arity$2(previous_shape__$1,attr)
)))));
var skip_operations_QMARK___$2 = (function (){var or__5025__auto__ = skip_operations_QMARK___$1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr_val,cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_shape,attr));
}
})();
var vec__67251 = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(skip_operations_QMARK___$2);
if(and__5023__auto__){
return text_change_QMARK_;
} else {
return and__5023__auto__;
}
})())?app.common.logic.libraries.add_update_attr_operations(new cljs.core.Keyword(null,"position-data","position-data",-499622376),current_shape,roperations,uoperations,null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [roperations,uoperations], null));
var roperations__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67251,(0),null);
var uoperations__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67251,(1),null);
var vec__67254 = ((((cljs.core.not(skip_operations_QMARK___$2)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)))))?(function (){var vec__67260 = app.common.logic.libraries.add_update_attr_operations(new cljs.core.Keyword(null,"transform","transform",1381301764),current_shape,roperations__$1,uoperations__$1,new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(previous_shape__$1));
var roperations__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67260,(0),null);
var uoperations__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67260,(1),null);
return app.common.logic.libraries.add_update_attr_operations(new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576),current_shape,roperations__$2,uoperations__$2,new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$1(previous_shape__$1));
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [roperations__$1,uoperations__$1], null));
var roperations__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67254,(0),null);
var uoperations__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67254,(1),null);
var vec__67257 = (cljs.core.truth_(skip_operations_QMARK___$2)?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [roperations__$2,uoperations__$2], null):app.common.logic.libraries.add_update_attr_operations(attr,current_shape,roperations__$2,uoperations__$2,attr_val));
var roperations_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67257,(0),null);
var uoperations_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67257,(1),null);
var G__67609 = cljs.core.next(attrs);
var G__67610 = roperations_SINGLEQUOTE_;
var G__67611 = uoperations_SINGLEQUOTE_;
attrs = G__67609;
roperations = G__67610;
uoperations = G__67611;
continue;
} else {
var updated_attrs = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(((function (attrs,roperations,uoperations,temp__5823__auto__,previous_shape__$1,touched,text_auto_QMARK_){
return (function (p1__67237_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__67237_SHARP_));
});})(attrs,roperations,uoperations,temp__5823__auto__,previous_shape__$1,touched,text_auto_QMARK_))
),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"attr","attr",-604132353))),roperations);
var G__67263 = changes;
if((cljs.core.count(roperations) > (1))){
return app.common.logic.libraries.generate_update_tokens(app.common.logic.libraries.add_update_attr_changes(G__67263,current_shape,container,roperations,uoperations),container,current_shape,previous_shape__$1,touched,false,updated_attrs);
} else {
return G__67263;
}
}
break;
}
});
/**
 * Helper that puts the origin attributes (attrs) into dest but only if
 *   not touched the group or if omit-touched? flag is true
 */
app.common.logic.libraries.propagate_attrs = (function app$common$logic$libraries$propagate_attrs(dest,origin,attrs,omit_touched_QMARK_){
var touched = cljs.core.get.cljs$core$IFn$_invoke$arity$3(dest,new cljs.core.Keyword(null,"touched","touched",-609134419),cljs.core.PersistentHashSet.EMPTY);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (dest__$1,attr){
var attr_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.component.sync_attrs,attr);
var G__67269 = dest__$1;
if(((cljs.core.not((touched.cljs$core$IFn$_invoke$arity$1 ? touched.cljs$core$IFn$_invoke$arity$1(attr_group) : touched.call(null,attr_group)))) || (cljs.core.not(omit_touched_QMARK_)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67269,attr,cljs.core.get.cljs$core$IFn$_invoke$arity$2(origin,attr));
} else {
return G__67269;
}
}),dest,attrs);
});
/**
 * Synchronizes the attributes inside the flex-child items (main->copy)
 */
app.common.logic.libraries.update_flex_child_copy_attrs = (function app$common$logic$libraries$update_flex_child_copy_attrs(changes,shape_main,shape_copy,main_container,main_component,copy_container,omit_touched_QMARK_){
var new_changes = app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_container(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$0(),copy_container),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(copy_container)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_copy)], null),(function (shape_copy__$1){
var G__67270 = shape_copy__$1;
var G__67270__$1 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fix","fix",-1031773329),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null),new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(shape_main)))?app.common.logic.libraries.propagate_attrs(G__67270,shape_main,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),null], null), null),omit_touched_QMARK_):G__67270);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fix","fix",-1031773329),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(shape_main))){
return app.common.logic.libraries.propagate_attrs(G__67270__$1,shape_main,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),null], null), null),omit_touched_QMARK_);
} else {
return G__67270__$1;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null)),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape_copy),(function (child_copy){
var child_main = app.common.types.file.get_ref_shape(main_container,main_component,child_copy);
return app.common.logic.libraries.propagate_attrs(child_copy,child_main,app.common.types.component.swap_keep_attrs,omit_touched_QMARK_);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null));
return app.common.files.changes_builder.concat_changes(changes,new_changes);
});
/**
 * Synchronizes the attributes inside the flex-child items (copy->main)
 */
app.common.logic.libraries.update_flex_child_main_attrs = (function app$common$logic$libraries$update_flex_child_main_attrs(changes,shape_main,shape_copy,main_container,copy_container,omit_touched_QMARK_){
var new_changes = app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_page(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$0(),main_container),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(main_container)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_main)], null),(function (shape_main__$1){
var G__67272 = shape_main__$1;
var G__67272__$1 = ((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fix","fix",-1031773329),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null),new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(shape_copy)))?app.common.logic.libraries.propagate_attrs(G__67272,shape_copy,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),null], null), null),omit_touched_QMARK_):G__67272);
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fix","fix",-1031773329),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(shape_copy))){
return app.common.logic.libraries.propagate_attrs(G__67272__$1,shape_copy,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),null], null), null),omit_touched_QMARK_);
} else {
return G__67272__$1;
}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null)),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape_main),(function (child_main){
var child_copy = app.common.types.file.get_shape_in_copy(copy_container,child_main,shape_copy);
return app.common.logic.libraries.propagate_attrs(child_main,child_copy,app.common.types.component.swap_keep_attrs,omit_touched_QMARK_);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null));
return app.common.files.changes_builder.concat_changes(changes,new_changes);
});
/**
 * Synchronizes the `layout-grid-cells` property from the main shape to the copies
 */
app.common.logic.libraries.update_grid_copy_attrs = (function app$common$logic$libraries$update_grid_copy_attrs(changes,shape_copy_id,shape_main,main_container,main_component,omit_touched_QMARK_){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(app.common.files.changes_builder.apply_changes_local(changes),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_copy_id], null),(function (shape_copy,objects){
var component_page = app.common.types.file.get_component_page(main_container,main_component);
var component_swap_children = cljs.core.group_by(app.common.types.component.get_swap_slot,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67274_SHARP_){
return (!((app.common.types.component.get_swap_slot(p1__67274_SHARP_) == null)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67273_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component_page),p1__67273_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape_main))));
var ids_map = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__67275_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__67275_SHARP_);
})),cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (copy_shape){
var main_shape = (((!((app.common.types.component.get_swap_slot(copy_shape) == null))))?cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(component_swap_children,app.common.types.component.get_swap_slot(copy_shape))):app.common.types.file.get_ref_shape(main_container,main_component,copy_shape));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(main_shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(copy_shape)], null);
}))),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape_copy));
var remove_orphan_cells = (function (cells,p__67278){
var map__67279 = p__67278;
var map__67279__$1 = cljs.core.__destructure_map(map__67279);
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67279__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var child_QMARK_ = cljs.core.set(shapes);
return cljs.core.update_vals(cells,(function (cell){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cell,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (p1__67276_SHARP_){
return cljs.core.filterv(child_QMARK_,p1__67276_SHARP_);
}));
}));
});
var copy_cells = remove_orphan_cells(new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(shape_copy),shape_copy);
var main_cells = new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(app.common.types.shape.layout.remap_grid_cells(shape_main,ids_map));
return app.common.types.shape.layout.assign_cells(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape_copy,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),app.common.types.shape.layout.merge_cells(main_cells,copy_cells,omit_touched_QMARK_)),objects);
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null));
});
/**
 * Synchronizes the `layout-grid-cells` property from the copy to the main shape
 */
app.common.logic.libraries.update_grid_main_attrs = (function app$common$logic$libraries$update_grid_main_attrs(changes,shape_main,shape_copy,main_container,copy_container,_omit_touched_QMARK_){
var ids_map = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__67280_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(main_container,new cljs.core.Keyword(null,"objects","objects",2099713734)),p1__67280_SHARP_);
})),cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (main_shape){
var copy_shape = app.common.types.file.get_shape_in_copy(copy_container,main_shape,shape_copy);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(copy_shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(main_shape)], null);
}))),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape_main));
var new_changes = app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_page(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$0(),main_container),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(main_container)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_main)], null),(function (shape_main__$1){
var new_cells = new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(app.common.types.shape.layout.remap_grid_cells(shape_copy,ids_map));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape_main__$1,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new_cells);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null));
return app.common.files.changes_builder.concat_changes(changes,new_changes);
});
app.common.logic.libraries.reposition_shape = (function app$common$logic$libraries$reposition_shape(shape,origin_root,dest_root){
var shape_pos = (function (shape__$1){
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selrect","selrect",1966287292),new cljs.core.Keyword(null,"x","x",2099068185)], null)),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selrect","selrect",1966287292),new cljs.core.Keyword(null,"y","y",-1757859776)], null)));
});
var origin_root_pos = shape_pos(origin_root);
var dest_root_pos = shape_pos(dest_root);
var delta = app.common.geom.point.subtract(dest_root_pos,origin_root_pos);
return app.common.geom.shapes.move(shape,delta);
});
app.common.logic.libraries.make_change = (function app$common$logic$libraries$make_change(container,change){
if(app.common.files.helpers.page_QMARK_(container)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(change,new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(container));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(change,new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(container));
}
});
app.common.logic.libraries.generate_add_component_changes = (function app$common$logic$libraries$generate_add_component_changes(changes,root,objects,file_id,page_id,variant_props){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(root);
var variant_id = ((app.common.types.component.is_variant_QMARK_(root))?new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(root):null);
var props = ((app.common.types.component.is_variant_QMARK_(root))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(variant_props,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(root)):null);
var vec__67287 = app.common.path_names.split_group_name(name);
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67287,(0),null);
var name__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67287,(1),null);
var vec__67290 = app.common.types.container.convert_shape_in_component(root,objects,file_id);
var root_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67290,(0),null);
var updated_shapes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67290,(1),null);
var changes__$1 = app.common.files.changes_builder.add_component(changes,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root_shape),path,name__$1,updated_shapes,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root),page_id,null,variant_id,props);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [root_shape,changes__$1], null);
});
/**
 * If there is exactly one id, and it's a frame, and not already a component,
 *   use it as root. Otherwise, create a frame that contains all ids. Then, make a
 *   component with it, and link all shapes to their corresponding one in the component.
 */
app.common.logic.libraries.generate_add_component = (function app$common$logic$libraries$generate_add_component(changes,shapes,objects,page_id,file_id,prepare_create_board){
var changes__$1 = app.common.files.changes_builder.with_page_id(changes,page_id);
var shapes_count = cljs.core.count(shapes);
var first_shape = cljs.core.first(shapes);
var from_singe_frame_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),shapes_count)) && (app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(first_shape)));
var vec__67303 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shapes_count,(1))) && (((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(first_shape)) && ((!(app.common.types.component.instance_head_QMARK_(first_shape))))))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [first_shape,app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_page_id(changes__$1,page_id),objects),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(first_shape)], null):(function (){var root_name = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),shapes_count))?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(first_shape):"Component 1");
var shape_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),shapes);
var vec__67313 = (function (){var G__67318 = changes__$1;
var G__67319 = app.common.uuid.next();
var G__67320 = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(first_shape);
var G__67321 = objects;
var G__67322 = shape_ids;
var G__67323 = null;
var G__67324 = root_name;
var G__67325 = true;
return (prepare_create_board.cljs$core$IFn$_invoke$arity$8 ? prepare_create_board.cljs$core$IFn$_invoke$arity$8(G__67318,G__67319,G__67320,G__67321,G__67322,G__67323,G__67324,G__67325) : prepare_create_board.call(null,G__67318,G__67319,G__67320,G__67321,G__67322,G__67323,G__67324,G__67325));
})();
var root = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67313,(0),null);
var changes__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67313,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,changes__$2,shape_ids], null);
})());
var root = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67303,(0),null);
var changes__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67303,(1),null);
var old_root_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67303,(2),null);
var changes__$3 = (function (){var G__67337 = changes__$2;
if((!(from_singe_frame_QMARK_))){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(G__67337,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(root),(function (shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),new cljs.core.Keyword(null,"scale","scale",-230427353),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),new cljs.core.Keyword(null,"scale","scale",-230427353)], 0));
}));
} else {
return G__67337;
}
})();
var objects_SINGLEQUOTE_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root),root);
var vec__67306 = app.common.logic.libraries.generate_add_component_changes(changes__$3,root,objects_SINGLEQUOTE_,file_id,page_id,null);
var root_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67306,(0),null);
var changes__$4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67306,(1),null);
var changes__$5 = app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(changes__$4,old_root_ids,(function (p1__67302_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__67302_SHARP_,new cljs.core.Keyword(null,"component-root","component-root",-485271026));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-root","component-root",-485271026)], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [root,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root_shape),changes__$5], null);
});
/**
 * Restore a deleted component, with the given id, in the given file library.
 */
app.common.logic.libraries.generate_restore_component = (function app$common$logic$libraries$generate_restore_component(changes,library_data,component_id,library_id,current_page,objects){
var map__67342 = app.common.logic.libraries.prepare_restore_component.cljs$core$IFn$_invoke$arity$4(changes,library_data,component_id,current_page);
var map__67342__$1 = cljs.core.__destructure_map(map__67342);
var changes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67342__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67342__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var parent_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape);
var insert_before_QMARK_ = (function (){var and__5023__auto__ = app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(app.common.types.shape.layout.reverse_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,parent_id));
} else {
return and__5023__auto__;
}
})();
var objects__$1 = (function (){var G__67344 = (function (){var G__67346 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),shape);
if(cljs.core.truth_((function (){var and__5023__auto__ = (!((parent_id == null)));
if(and__5023__auto__){
return insert_before_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(G__67346,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id,new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null),(function (p1__67338_SHARP_){
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__67338_SHARP_], 0));
}));
} else {
return G__67346;
}
})();
if((((!((parent_id == null)))) && (cljs.core.not(insert_before_QMARK_)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__67344,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id,new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null),cljs.core.conj,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return G__67344;
}
})();
var new_objects_ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__67339_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__67339_SHARP_),new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983));
}),new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes__$1)));
var changes__$2 = (function (){var G__67347 = app.common.files.changes_builder.resize_parents(app.common.files.changes_builder.with_objects(changes__$1,objects__$1),new_objects_ids);
if(cljs.core.truth_(app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects__$1,parent_id))){
return app.common.files.changes_builder.reorder_children(G__67347,parent_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id,new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null)));
} else {
return G__67347;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(changes__$2,new cljs.core.Keyword(null,"file-id","file-id",-811871323),library_id);
});
/**
 * Generate changes for remove all references to components in the shape,
 *   with the given id and all its children, at the current page.
 */
app.common.logic.libraries.generate_detach_component = (function app$common$logic$libraries$generate_detach_component(changes,id,file,page_id,libraries){
var container = app.common.types.container.get_container(file,new cljs.core.Keyword(null,"page","page",849072397),page_id);
return app.common.logic.libraries.generate_detach_instance(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_container(changes,container),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container)),container,libraries,id);
});
app.common.logic.libraries.generate_new_shape_for_swap = (function app$common$logic$libraries$generate_new_shape_for_swap(changes,shape,file,page,libraries,id_new_component,index,target_cell,keep_props_values){
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page);
var position = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape));
var changes__$1 = app.common.files.changes_builder.with_objects(changes,objects);
var position__$1 = cljs.core.with_meta(position,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"cell","cell",764245084),target_cell], null));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var inside_comp_QMARK_ = app.common.types.container.in_any_component_QMARK_(objects,parent);
var vec__67352 = app.common.logic.libraries.generate_instantiate_component.cljs$core$IFn$_invoke$arity$12(changes__$1,objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),id_new_component,position__$1,page,libraries,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape),cljs.core.PersistentArrayMap.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)]),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"force-frame?","force-frame?",174727086),true], null));
var new_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67352,(0),null);
var changes__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67352,(1),null);
var new_shape__$1 = (function (){var G__67355 = new_shape;
if(cljs.core.truth_((function (){var and__5023__auto__ = (app.common.types.component.get_swap_slot(new_shape) == null);
if(and__5023__auto__){
return inside_comp_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return app.common.types.component.set_swap_slot(G__67355,app.common.types.file.find_swap_slot.cljs$core$IFn$_invoke$arity$4(shape,page,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"data","data",-232669377),file], null),libraries));
} else {
return G__67355;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_shape__$1,app.common.logic.libraries.change_touched(app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$5(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(changes__$2,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_shape__$1)], null),(function (p1__67351_SHARP_){
return app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(p1__67351_SHARP_,keep_props_values);
})),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_shape__$1], null),index,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"allow-altering-copies","allow-altering-copies",1930197967),true,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], null)),new_shape__$1,shape,app.common.types.container.make_container(page,new cljs.core.Keyword(null,"page","page",849072397)),cljs.core.PersistentArrayMap.EMPTY)], null);
});
app.common.logic.libraries.generate_component_swap = (function app$common$logic$libraries$generate_component_swap(changes,objects,shape,file,page,libraries,id_new_component,index,target_cell,keep_props_values,ignore_swapped_QMARK_){
var ignore_swapped_fn = (cljs.core.truth_(ignore_swapped_QMARK_)?(function (p1__67358_SHARP_){
return app.common.types.component.get_swap_slot(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__67358_SHARP_));
}):cljs.core.constantly(false));
var vec__67359 = app.common.logic.shapes.generate_delete_shapes.cljs$core$IFn$_invoke$arity$6(changes,file,page,objects,app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"allow-altering-copies","allow-altering-copies",1930197967),true,new cljs.core.Keyword(null,"ignore-children-fn","ignore-children-fn",576274564),ignore_swapped_fn,new cljs.core.Keyword(null,"ignore-mask","ignore-mask",-19600370),true,new cljs.core.Keyword(null,"ignore-flows-for","ignore-flows-for",-641074503),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)])], null));
var all_parents = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67359,(0),null);
var changes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67359,(1),null);
var vec__67362 = app.common.logic.libraries.generate_new_shape_for_swap(changes__$1,shape,file,page,libraries,id_new_component,index,target_cell,keep_props_values);
var new_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67362,(0),null);
var changes__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67362,(1),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_shape,all_parents,changes__$2], null);
});
app.common.logic.libraries.generate_sync_file_changes = (function app$common$logic$libraries$generate_sync_file_changes(changes,undo_group,asset_type,file_id,asset_id,library_id,libraries,current_file_id){
var sync_components_QMARK_ = (((asset_type == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(asset_type,new cljs.core.Keyword(null,"components","components",-1073188942))));
var sync_colors_QMARK_ = (((asset_type == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(asset_type,new cljs.core.Keyword(null,"colors","colors",1157174732))));
var sync_typographies_QMARK_ = (((asset_type == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(asset_type,new cljs.core.Keyword(null,"typographies","typographies",-482095730))));
var G__67366 = changes;
var G__67366__$1 = app.common.files.changes_builder.set_undo_group(G__67366,undo_group)
;
var G__67366__$2 = ((sync_components_QMARK_)?app.common.logic.libraries.generate_sync_library(G__67366__$1,file_id,new cljs.core.Keyword(null,"components","components",-1073188942),asset_id,library_id,libraries,current_file_id):G__67366__$1);
var G__67366__$3 = ((sync_colors_QMARK_)?app.common.logic.libraries.generate_sync_library(G__67366__$2,file_id,new cljs.core.Keyword(null,"colors","colors",1157174732),asset_id,library_id,libraries,current_file_id):G__67366__$2);
var G__67366__$4 = ((sync_typographies_QMARK_)?app.common.logic.libraries.generate_sync_library(G__67366__$3,file_id,new cljs.core.Keyword(null,"typographies","typographies",-482095730),asset_id,library_id,libraries,current_file_id):G__67366__$3);
var G__67366__$5 = ((sync_components_QMARK_)?app.common.logic.libraries.generate_sync_file(G__67366__$4,file_id,new cljs.core.Keyword(null,"components","components",-1073188942),asset_id,library_id,libraries,current_file_id):G__67366__$4);
var G__67366__$6 = ((sync_colors_QMARK_)?app.common.logic.libraries.generate_sync_file(G__67366__$5,file_id,new cljs.core.Keyword(null,"colors","colors",1157174732),asset_id,library_id,libraries,current_file_id):G__67366__$5);
if(sync_typographies_QMARK_){
return app.common.logic.libraries.generate_sync_file(G__67366__$6,file_id,new cljs.core.Keyword(null,"typographies","typographies",-482095730),asset_id,library_id,libraries,current_file_id);
} else {
return G__67366__$6;
}
});
app.common.logic.libraries.generate_sync_head = (function app$common$logic$libraries$generate_sync_head(changes,file_full,libraries,container,id,reset_QMARK_){
var shape_inst = app.common.types.container.get_shape(container,id);
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape_inst));
var head = app.common.types.container.get_component_shape.cljs$core$IFn$_invoke$arity$2(container,parent);
var changes__$1 = app.common.logic.libraries.generate_sync_shape_direct(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_container(changes,container),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container)),file_full,libraries,container,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(head),reset_QMARK_);
return changes__$1;
});
app.common.logic.libraries.generate_reset_component = (function app$common$logic$libraries$generate_reset_component(changes,file_full,libraries,container,id){
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container);
var swap_slot = app.common.types.component.get_swap_slot(app.common.types.container.get_shape(container,id));
var changes__$1 = app.common.logic.libraries.generate_sync_shape_direct(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_container(changes,container),objects),file_full,libraries,container,id,true);
var G__67368 = changes__$1;
if((!((swap_slot == null)))){
return app.common.logic.libraries.generate_sync_head(G__67368,file_full,libraries,container,id,true);
} else {
return G__67368;
}
});
app.common.logic.libraries.generate_duplicate_flows = (function app$common$logic$libraries$generate_duplicate_flows(changes,shapes,page,ids_map){
var flows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"flows","flows",-1369576628));
var unames = cljs.core.volatile_BANG_(app.common.files.helpers.get_used_names(cljs.core.vals(flows)));
var has_flow_QMARK_ = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.page.get_frame_flow,flows);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes__$1,frame_id){
var name = app.common.files.helpers.generate_unique_name.cljs$core$IFn$_invoke$arity$variadic("Flow",cljs.core.deref(unames),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"immediate-suffix?","immediate-suffix?",-127830647),true], 0));
var frame_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ids_map,frame_id);
var flow_id = app.common.uuid.next();
var new_flow = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),flow_id,new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"starting-frame","starting-frame",-1907986271),frame_id__$1], null);
unames.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(unames.cljs$core$IDeref$_deref$arity$1(null),name));

return app.common.files.changes_builder.set_flow(app.common.files.changes_builder.with_page(changes__$1,page),flow_id,new_flow);
}),changes,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(has_flow_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.frame_shape_QMARK_,shapes))));
});
app.common.logic.libraries.generate_duplicate_guides = (function app$common$logic$libraries$generate_duplicate_guides(changes,shapes,page,ids_map,delta){
var guides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"guides","guides",-1398390510));
var frames = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.frame_shape_QMARK_,shapes);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes__$1,frame){
var new_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(ids_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame));
var new_frame = app.common.geom.shapes.move(frame,delta);
return cljs.core.reduce_kv((function (changes__$2,_,guide){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(guide))){
var guide_id = app.common.uuid.next();
var position = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(guide),new cljs.core.Keyword(null,"x","x",2099068185)))?(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(guide) + (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new_frame) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame))):(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(guide) + (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new_frame) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame))));
var guide__$1 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),guide_id,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new_id,new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"axis","axis",-1215390822),new cljs.core.Keyword(null,"axis","axis",-1215390822).cljs$core$IFn$_invoke$arity$1(guide)], null);
return app.common.files.changes_builder.set_guide(changes__$2,guide_id,guide__$1);
} else {
return changes__$2;
}
}),changes__$1,guides);
}),app.common.files.changes_builder.with_page(changes,page),frames);
});
app.common.logic.libraries.duplicate_variant = (function app$common$logic$libraries$duplicate_variant(changes,library,component,base_pos,parent,page_id,into_new_variant_QMARK_){
var component_page = app.common.types.pages_list.get_page(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library),new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component));
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component_page);
var component_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component));
var orig_pos = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(component_shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(component_shape));
var delta = app.common.geom.point.subtract(base_pos,orig_pos);
var new_component_id = app.common.uuid.next();
var vec__67369 = app.common.logic.libraries.generate_duplicate_component.cljs$core$IFn$_invoke$arity$variadic(changes,library,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component),new_component_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"apply-changes-local-library?","apply-changes-local-library?",1077602630),true,new cljs.core.Keyword(null,"delta","delta",108939957),delta,new cljs.core.Keyword(null,"new-variant-id","new-variant-id",683771380),(cljs.core.truth_(into_new_variant_QMARK_)?null:new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent)),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null)], 0));
var shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67369,(0),null);
var changes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67369,(1),null);
var value = (cljs.core.truth_(into_new_variant_QMARK_)?[app.common.types.variant.value_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.count(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.last(app.common.files.variant.extract_properties_values(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library),objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent))))) + (1)))].join(''):null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape,(function (){var G__67372 = changes__$1;
var G__67372__$1 = (cljs.core.truth_(into_new_variant_QMARK_)?app.common.logic.variant_properties.generate_make_shapes_variant(G__67372,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null),parent):G__67372);
var G__67372__$2 = (cljs.core.truth_((function (){var and__5023__auto__ = into_new_variant_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent));
} else {
return and__5023__auto__;
}
})())?app.common.logic.variant_properties.generate_update_property_value(G__67372__$1,new_component_id,(cljs.core.count(new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(component)) - (1)),value):G__67372__$1);
return app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$4(G__67372__$2,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null),(0));

})()], null);
});
app.common.logic.libraries.generate_duplicate_component_change = (function app$common$logic$libraries$generate_duplicate_component_change(changes,objects,page,main,parent_id,frame_id,delta,libraries,library_data,ids_map){
var main_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(main);
var component_id = new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(main);
var file_id = new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(main);
var component = app.common.types.file.get_component(libraries,file_id,component_id);
var pos = (function (){var $ = app.common.geom.shapes.move(main,delta);
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1($),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1($));
})();
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
var in_variant_container_QMARK_ = cljs.core.contains_QMARK_(ids_map,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(main));
var restore_component = (function (){
var map__67381 = app.common.logic.libraries.prepare_restore_component.cljs$core$IFn$_invoke$arity$8(changes,library_data,component_id,page,pos,main_id,parent_id,frame_id);
var map__67381__$1 = cljs.core.__destructure_map(map__67381);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67381__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var changes__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67381__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape,changes__$1], null);
});
var vec__67378 = (((component == null))?restore_component():((((app.common.types.component.is_variant_QMARK_(main)) && (in_variant_container_QMARK_)))?app.common.logic.libraries.duplicate_variant(changes,cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,file_id),component,pos,parent,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page),false):(cljs.core.truth_(app.common.types.component.is_variant_container_QMARK_(parent))?app.common.logic.libraries.duplicate_variant(changes,cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,file_id),component,pos,parent,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page),true):app.common.logic.libraries.generate_instantiate_component.cljs$core$IFn$_invoke$arity$12(changes,objects,file_id,component_id,pos,page,libraries,main_id,parent_id,frame_id,ids_map,cljs.core.PersistentArrayMap.EMPTY)
)));
var _shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67378,(0),null);
var changes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67378,(1),null);
return changes__$1;
});
app.common.logic.libraries.generate_duplicate_shape_change = (function app$common$logic$libraries$generate_duplicate_shape_change(var_args){
var G__67385 = arguments.length;
switch (G__67385) {
case 13:
return app.common.logic.libraries.generate_duplicate_shape_change.cljs$core$IFn$_invoke$arity$13((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]));

break;
case 14:
return app.common.logic.libraries.generate_duplicate_shape_change.cljs$core$IFn$_invoke$arity$14((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]));

break;
case 19:
return app.common.logic.libraries.generate_duplicate_shape_change.cljs$core$IFn$_invoke$arity$19((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]),(arguments[(10)]),(arguments[(11)]),(arguments[(12)]),(arguments[(13)]),(arguments[(14)]),(arguments[(15)]),(arguments[(16)]),(arguments[(17)]),(arguments[(18)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.logic.libraries.generate_duplicate_shape_change.cljs$core$IFn$_invoke$arity$13 = (function (changes,objects,page,unames,update_unames_BANG_,ids,ids_map,obj,delta,level_delta,libraries,library_data,file_id){
return app.common.logic.libraries.generate_duplicate_shape_change.cljs$core$IFn$_invoke$arity$19(changes,objects,page,unames,update_unames_BANG_,ids,ids_map,obj,delta,level_delta,libraries,library_data,file_id,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(obj),false,false,true,null);
}));

(app.common.logic.libraries.generate_duplicate_shape_change.cljs$core$IFn$_invoke$arity$14 = (function (changes,objects,page,unames,update_unames_BANG_,ids,ids_map,obj,delta,level_delta,libraries,library_data,file_id,variant_props){
return app.common.logic.libraries.generate_duplicate_shape_change.cljs$core$IFn$_invoke$arity$19(changes,objects,page,unames,update_unames_BANG_,ids,ids_map,obj,delta,level_delta,libraries,library_data,file_id,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(obj),false,false,true,variant_props);
}));

(app.common.logic.libraries.generate_duplicate_shape_change.cljs$core$IFn$_invoke$arity$19 = (function (changes,objects,page,unames,update_unames_BANG_,ids,ids_map,obj,delta,level_delta,libraries,library_data,file_id,frame_id,parent_id,duplicating_component_QMARK_,child_QMARK_,remove_swap_slot_QMARK_,variant_props){
if((obj == null)){
return changes;
} else {
if(cljs.core.truth_(app.common.types.file.is_main_of_known_component_QMARK_(obj,libraries))){
return app.common.logic.libraries.generate_duplicate_component_change(changes,objects,page,obj,parent_id,frame_id,delta,libraries,library_data,ids_map);
} else {
var frame_QMARK_ = app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(obj);
var group_QMARK_ = app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(obj);
var bool_QMARK_ = app.common.files.helpers.bool_shape_QMARK_(obj);
var new_id = (function (){var G__67388 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(obj);
return (ids_map.cljs$core$IFn$_invoke$arity$1 ? ids_map.cljs$core$IFn$_invoke$arity$1(G__67388) : ids_map.call(null,G__67388));
})();
var parent_id__$1 = (function (){var or__5025__auto__ = parent_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return frame_id;
}
})();
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id__$1);
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(obj);
var is_component_root_QMARK_ = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"saved-component-root","saved-component-root",1854874793).cljs$core$IFn$_invoke$arity$1(obj);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"saved-component-root?","saved-component-root?",-1355561726).cljs$core$IFn$_invoke$arity$1(obj);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return app.common.types.component.instance_root_QMARK_(obj);
}
}
})();
var duplicating_component_QMARK___$1 = (function (){var or__5025__auto__ = duplicating_component_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.component.instance_head_QMARK_(obj);
}
})();
var is_component_main_QMARK_ = app.common.types.component.main_instance_QMARK_(obj);
var subinstance_head_QMARK_ = app.common.types.component.subinstance_head_QMARK_(obj);
var instance_root_QMARK_ = app.common.types.component.instance_root_QMARK_(obj);
var into_component_QMARK_ = (function (){var and__5023__auto__ = duplicating_component_QMARK___$1;
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.container.in_any_component_QMARK_(objects,parent);
} else {
return and__5023__auto__;
}
})();
var level_delta__$1 = (((!((level_delta == null))))?level_delta:app.common.types.container.get_nesting_level_delta(objects,obj,parent));
var new_shape_ref = app.common.types.file.advance_shape_ref.cljs$core$IFn$_invoke$arity$variadic(null,page,libraries,obj,level_delta__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true], null)], 0));
var regenerate_component = (function (changes__$1,shape){
var vec__67389 = app.common.logic.libraries.generate_add_component_changes(changes__$1,shape,objects,file_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page),variant_props);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67389,(0),null);
var changes__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67389,(1),null);
return changes__$2;
});
var new_obj = (function (){var G__67392 = (function (){var G__67393 = (function (){var G__67394 = app.common.data.update_when(app.common.geom.shapes.move((function (){var G__67395 = (function (){var G__67396 = (function (){var G__67397 = (function (){var G__67398 = (function (){var G__67399 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic((function (){var G__67400 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(obj,new cljs.core.Keyword(null,"id","id",-1388402092),new_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id], 0));
if(cljs.core.truth_((function (){var and__5023__auto__ = (!(instance_root_QMARK_));
if(and__5023__auto__){
var and__5023__auto____$1 = subinstance_head_QMARK_;
if(and__5023__auto____$1){
return remove_swap_slot_QMARK_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return app.common.types.component.remove_swap_slot(G__67400);
} else {
return G__67400;
}
})(),new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"use-for-thumbnail","use-for-thumbnail",1921212442)], 0));
if(cljs.core.not(is_component_root_QMARK_)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__67399,new cljs.core.Keyword(null,"main-instance","main-instance",476264761));
} else {
return G__67399;
}
})();
if(cljs.core.truth_(into_component_QMARK_)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__67398,new cljs.core.Keyword(null,"component-root","component-root",-485271026));
} else {
return G__67398;
}
})();
if(((app.common.types.component.instance_head_QMARK_(obj)) && (cljs.core.not(into_component_QMARK_)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67397,new cljs.core.Keyword(null,"component-root","component-root",-485271026),true);
} else {
return G__67397;
}
})();
if(((frame_QMARK_) || (((group_QMARK_) || (bool_QMARK_))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67396,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentVector.EMPTY);
} else {
return G__67396;
}
})();
if((((!((new_shape_ref == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_shape_ref,new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(obj))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67395,new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),new_shape_ref);
} else {
return G__67395;
}
})(),delta),new cljs.core.Keyword(null,"interactions","interactions",550841811),(function (p1__67382_SHARP_){
return app.common.types.shape.interactions.remap_interactions(p1__67382_SHARP_,ids_map,objects);
}));
if(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(obj)){
return app.common.types.shape.layout.remap_grid_cells(G__67394,ids_map);
} else {
return G__67394;
}
})();
if(cljs.core.truth_(app.common.types.component.is_variant_container_QMARK_(parent))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67393,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),parent_id__$1);
} else {
return G__67393;
}
})();
if(((app.common.types.component.is_variant_QMARK_(obj)) && (cljs.core.not(app.common.types.component.is_variant_container_QMARK_(parent))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67392,new cljs.core.Keyword(null,"name","name",1843675177),app.common.types.variant.variant_name_to_name(obj)),new cljs.core.Keyword(null,"variant-id","variant-id",1171818270));
} else {
return G__67392;
}
})();
var new_obj__$1 = (function (){var G__67401 = new_obj;
if(cljs.core.not(duplicating_component_QMARK___$1)){
return app.common.types.component.detach_shape(G__67401);
} else {
return G__67401;
}
})();
var changes__$1 = (function (){var G__67402 = app.common.files.changes_builder.amend_last_change(app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$3(changes,new_obj__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),(function (){var and__5023__auto__ = duplicating_component_QMARK___$1;
if(cljs.core.truth_(and__5023__auto__)){
return child_QMARK_;
} else {
return and__5023__auto__;
}
})()], null)),(function (p1__67383_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__67383_SHARP_,new cljs.core.Keyword(null,"old-id","old-id",-512581150),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(obj));
}));
if(cljs.core.truth_(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(obj)))){
return app.common.files.changes_builder.reorder_grid_children(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(G__67402,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(obj)], null),app.common.types.shape.layout.assign_cells,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(obj)], null));
} else {
return G__67402;
}
})();
var changes__$2 = (function (){var G__67403 = changes__$1;
if(cljs.core.truth_((function (){var and__5023__auto__ = is_component_root_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return is_component_main_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return regenerate_component(G__67403,new_obj__$1);
} else {
return G__67403;
}
})();
var page_SINGLEQUOTE_ = app.common.types.shape_tree.add_shape(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_obj__$1),new_obj__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"objects","objects",2099713734),objects], null),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(new_obj__$1),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(new_obj__$1),null,true);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes__$3,child){
return app.common.logic.libraries.generate_duplicate_shape_change.cljs$core$IFn$_invoke$arity$19(changes__$3,new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page_SINGLEQUOTE_),page,unames,update_unames_BANG_,ids,ids_map,child,delta,level_delta__$1,libraries,library_data,file_id,((frame_QMARK_)?new_id:frame_id),new_id,duplicating_component_QMARK___$1,true,(function (){var and__5023__auto__ = remove_swap_slot_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (((!(subinstance_head_QMARK_))) && ((!(instance_root_QMARK_))));
} else {
return and__5023__auto__;
}
})(),variant_props);
}),changes__$2,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(obj)));

}
}
}));

(app.common.logic.libraries.generate_duplicate_shape_change.cljs$lang$maxFixedArity = 19);

/**
 * Prepare objects to duplicate: generate new id, give them unique names,
 *   move to the desired position, and recalculate parents and frames as needed.
 */
app.common.logic.libraries.generate_duplicate_changes = (function app$common$logic$libraries$generate_duplicate_changes(var_args){
var args__5755__auto__ = [];
var len__5749__auto___67684 = arguments.length;
var i__5750__auto___67685 = (0);
while(true){
if((i__5750__auto___67685 < len__5749__auto___67684)){
args__5755__auto__.push((arguments[i__5750__auto___67685]));

var G__67686 = (i__5750__auto___67685 + (1));
i__5750__auto___67685 = G__67686;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((8) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((8)),(0),null)):null);
return app.common.logic.libraries.generate_duplicate_changes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),argseq__5756__auto__);
});

(app.common.logic.libraries.generate_duplicate_changes.cljs$core$IFn$_invoke$arity$variadic = (function (changes,all_objects,page,ids,delta,libraries,library_data,file_id,p__67421){
var map__67422 = p__67421;
var map__67422__$1 = cljs.core.__destructure_map(map__67422);
var variant_props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67422__$1,new cljs.core.Keyword(null,"variant-props","variant-props",1890974034));
var alt_duplication_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67422__$1,new cljs.core.Keyword(null,"alt-duplication?","alt-duplication?",650822057));
var shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(all_objects),ids);
var unames = cljs.core.volatile_BANG_(app.common.files.helpers.get_used_names(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page)));
var update_unames_BANG_ = (function (new_name){
return unames.cljs$core$IVolatile$_vreset_BANG_$arity$2(null,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(unames.cljs$core$IDeref$_deref$arity$1(null),new_name));
});
var all_ids = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__67404_SHARP_,p2__67405_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__67404_SHARP_,cljs.core.cons(p2__67405_SHARP_,app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(all_objects,p2__67405_SHARP_)));
}),app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),ids);
var ids_map = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__67406_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[p1__67406_SHARP_,app.common.uuid.next()],null));
})),all_ids);
var shapes__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (shape){
var G__67423 = shape;
if(cljs.core.truth_(alt_duplication_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__67423,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),app.common.uuid.zero,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),app.common.uuid.zero], 0));
} else {
return G__67423;
}
}),shapes);
var changes__$1 = app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_page(changes,page),all_objects),library_data);
var changes__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__67407_SHARP_,p2__67408_SHARP_){
return app.common.logic.libraries.generate_duplicate_shape_change.cljs$core$IFn$_invoke$arity$14(p1__67407_SHARP_,all_objects,page,unames,update_unames_BANG_,ids,ids_map,p2__67408_SHARP_,delta,null,libraries,library_data,file_id,variant_props);
}),changes__$1,shapes__$1);
var ids_map__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__67409_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__67409_SHARP_));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__67410_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"old-id","old-id",-512581150).cljs$core$IFn$_invoke$arity$1(p1__67410_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"obj","obj",981763962).cljs$core$IFn$_invoke$arity$1(p1__67410_SHARP_))],null));
}))),new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes__$2));
return app.common.logic.libraries.generate_duplicate_guides(app.common.logic.libraries.generate_duplicate_flows(changes__$2,shapes__$1,page,ids_map__$1),shapes__$1,page,ids_map__$1,delta);
}));

(app.common.logic.libraries.generate_duplicate_changes.cljs$lang$maxFixedArity = (8));

/** @this {Function} */
(app.common.logic.libraries.generate_duplicate_changes.cljs$lang$applyTo = (function (seq67411){
var G__67412 = cljs.core.first(seq67411);
var seq67411__$1 = cljs.core.next(seq67411);
var G__67413 = cljs.core.first(seq67411__$1);
var seq67411__$2 = cljs.core.next(seq67411__$1);
var G__67414 = cljs.core.first(seq67411__$2);
var seq67411__$3 = cljs.core.next(seq67411__$2);
var G__67415 = cljs.core.first(seq67411__$3);
var seq67411__$4 = cljs.core.next(seq67411__$3);
var G__67416 = cljs.core.first(seq67411__$4);
var seq67411__$5 = cljs.core.next(seq67411__$4);
var G__67417 = cljs.core.first(seq67411__$5);
var seq67411__$6 = cljs.core.next(seq67411__$5);
var G__67418 = cljs.core.first(seq67411__$6);
var seq67411__$7 = cljs.core.next(seq67411__$6);
var G__67419 = cljs.core.first(seq67411__$7);
var seq67411__$8 = cljs.core.next(seq67411__$7);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__67412,G__67413,G__67414,G__67415,G__67416,G__67417,G__67418,G__67419,seq67411__$8);
}));

/**
 * Updates the changes to correctly set the indexes of the duplicated objects,
 *   depending on the index of the original object respect their parent.
 */
app.common.logic.libraries.generate_duplicate_changes_update_indices = (function app$common$logic$libraries$generate_duplicate_changes_update_indices(changes,objects,ids){
var index_map = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (index_map,id){
var parent_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131)], null));
var parent_index = app.common.files.helpers.get_position_on_parent(objects,id);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(index_map,parent_id,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,parent_index], null));
}),cljs.core.PersistentArrayMap.EMPTY,ids);
var inc_indices = (function (p__67429,p__67430){
var vec__67432 = p__67429;
var offset = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67432,(0),null);
var result = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67432,(1),null);
var vec__67435 = p__67430;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67435,(0),null);
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67435,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(offset + (1)),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,(index + offset)], null))], null);
});
var fix_indices = (function (_,entry){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.second(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(inc_indices,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),cljs.core.PersistentVector.EMPTY], null),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,entry))));
});
var objects_indices = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.vals(app.common.data.mapm.cljs$core$IFn$_invoke$arity$2(fix_indices,index_map)));
return app.common.files.changes_builder.amend_changes(changes,(function (change){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(change,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects_indices,new cljs.core.Keyword(null,"old-id","old-id",-512581150).cljs$core$IFn$_invoke$arity$1(change)));
}));
});

//# sourceMappingURL=app.common.logic.libraries.js.map
