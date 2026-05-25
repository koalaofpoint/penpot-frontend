import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.variant.js";
import "./app.common.path_names.js";
import "./app.common.types.component.js";
import "./app.common.types.components_list.js";
import "./app.common.types.variant.js";
import "./cuerdas.core.js";
goog.provide('app.common.logic.variant_properties');
app.common.logic.variant_properties.generate_update_property_name = (function app$common$logic$variant_properties$generate_update_property_name(changes,variant_id,pos,new_name){
var data = app.common.files.changes_builder.get_library_data(changes);
var objects = app.common.files.changes_builder.get_objects(changes);
var related_components = app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$3(data,objects,variant_id);
var props = new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(cljs.core.last(related_components));
var prop_names = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),props);
var prop_names__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(prop_names,(0),pos),cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(prop_names,(pos + (1))));
var new_name__$1 = app.common.types.variant.update_number_in_repeated_item(prop_names__$1,new_name);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes__$1,component){
return app.common.files.changes_builder.update_component.cljs$core$IFn$_invoke$arity$variadic(changes__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component),(function (component__$1){
return app.common.data.update_in_when(component__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),pos], null),(function (p1__56475_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56475_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),new_name__$1);
}));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"apply-changes-local-library?","apply-changes-local-library?",1077602630),true], null)], 0));
}),changes,related_components);
});
app.common.logic.variant_properties.generate_remove_property = (function app$common$logic$variant_properties$generate_remove_property(changes,variant_id,pos){
var data = app.common.files.changes_builder.get_library_data(changes);
var objects = app.common.files.changes_builder.get_objects(changes);
var related_components = app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$3(data,objects,variant_id);
var props = new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(cljs.core.first(related_components));
if(((cljs.core.seq(props)) && (((((0) <= pos)) && ((pos < cljs.core.count(props))))))){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes__$1,component){
var props__$1 = new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(component);
var props__$2 = app.common.data.remove_at_index(props__$1,pos);
var main_id = new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component);
var name = app.common.types.variant.properties_to_name(props__$2);
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.update_component.cljs$core$IFn$_invoke$arity$variadic(changes__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component),(function (p1__56478_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56478_SHARP_,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),props__$2);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"apply-changes-local-library?","apply-changes-local-library?",1077602630),true], null)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main_id], null),(function (p1__56479_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56479_SHARP_,new cljs.core.Keyword(null,"variant-name","variant-name",-1785573622),name);
}));
}),changes,related_components);
} else {
return changes;
}
});
app.common.logic.variant_properties.generate_update_property_value = (function app$common$logic$variant_properties$generate_update_property_value(changes,component_id,pos,value){
var data = app.common.files.changes_builder.get_library_data(changes);
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(data,component_id,true);
var main_id = new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component);
var name = app.common.types.variant.properties_to_name(cljs.core.update.cljs$core$IFn$_invoke$arity$5(new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(component),pos,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),value));
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.update_component.cljs$core$IFn$_invoke$arity$variadic(changes,component_id,(function (p1__56485_SHARP_){
return cljs.core.assoc_in(p1__56485_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),pos,new cljs.core.Keyword(null,"value","value",305978217)], null),value);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"apply-changes-local-library?","apply-changes-local-library?",1077602630),true], null)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main_id], null),(function (p1__56486_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56486_SHARP_,new cljs.core.Keyword(null,"variant-name","variant-name",-1785573622),name);
}));
});
app.common.logic.variant_properties.generate_set_variant_error = (function app$common$logic$variant_properties$generate_set_variant_error(changes,component_id,value){
var data = app.common.files.changes_builder.get_library_data(changes);
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(data,component_id,true);
var main_id = new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component);
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(changes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main_id], null),(((value == null))?(function (p1__56487_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__56487_SHARP_,new cljs.core.Keyword(null,"variant-error","variant-error",-42521934));
}):(function (p1__56488_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56488_SHARP_,new cljs.core.Keyword(null,"variant-error","variant-error",-42521934),value);
})));
});
app.common.logic.variant_properties.generate_reorder_variant_poperties = (function app$common$logic$variant_properties$generate_reorder_variant_poperties(changes,variant_id,from_pos,to_space_between_pos){
var data = app.common.files.changes_builder.get_library_data(changes);
var objects = app.common.files.changes_builder.get_objects(changes);
var related_components = app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$3(data,objects,variant_id);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes__$1,component){
var props = new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(component);
var props__$1 = app.common.data.reorder(props,from_pos,to_space_between_pos);
var main_id = new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component);
var name = app.common.types.variant.properties_to_name(props__$1);
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.update_component.cljs$core$IFn$_invoke$arity$variadic(changes__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component),(function (p1__56491_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56491_SHARP_,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),props__$1);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"apply-changes-local-library?","apply-changes-local-library?",1077602630),true], null)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main_id], null),(function (p1__56492_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56492_SHARP_,new cljs.core.Keyword(null,"variant-name","variant-name",-1785573622),name);
}));
}),changes,related_components);
});
app.common.logic.variant_properties.generate_add_new_property = (function app$common$logic$variant_properties$generate_add_new_property(var_args){
var args__5755__auto__ = [];
var len__5749__auto___56572 = arguments.length;
var i__5750__auto___56573 = (0);
while(true){
if((i__5750__auto___56573 < len__5749__auto___56572)){
args__5755__auto__.push((arguments[i__5750__auto___56573]));

var G__56577 = (i__5750__auto___56573 + (1));
i__5750__auto___56573 = G__56577;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return app.common.logic.variant_properties.generate_add_new_property.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(app.common.logic.variant_properties.generate_add_new_property.cljs$core$IFn$_invoke$arity$variadic = (function (changes,variant_id,p__56516){
var map__56517 = p__56516;
var map__56517__$1 = cljs.core.__destructure_map(map__56517);
var fill_values_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56517__$1,new cljs.core.Keyword(null,"fill-values?","fill-values?",-1457713069));
var editing_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56517__$1,new cljs.core.Keyword(null,"editing?","editing?",1646440800));
var property_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56517__$1,new cljs.core.Keyword(null,"property-name","property-name",-1399851434));
var property_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56517__$1,new cljs.core.Keyword(null,"property-value","property-value",1516163307));
var data = app.common.files.changes_builder.get_library_data(changes);
var objects = app.common.files.changes_builder.get_objects(changes);
var related_components = app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$3(data,objects,variant_id);
var props = new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(cljs.core.last(related_components));
var next_prop_num = app.common.types.variant.next_property_number(props);
var property_name__$1 = (function (){var or__5025__auto__ = property_name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return [app.common.types.variant.property_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(next_prop_num)].join('');
}
})();
var prop_names = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),props);
var property_name__$2 = app.common.types.variant.update_number_in_repeated_item(prop_names,property_name__$1);
var mdata = (cljs.core.truth_(editing_QMARK_)?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing?","editing?",1646440800),true], null):null);
var vec__56518 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__56522,component){
var vec__56523 = p__56522;
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56523,(0),null);
var changes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56523,(1),null);
var main_id = new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component);
var update_props = (function (p1__56502_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(p1__56502_SHARP_,cljs.core.PersistentVector.EMPTY),cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),property_name__$2,new cljs.core.Keyword(null,"value","value",305978217),(cljs.core.truth_(fill_values_QMARK_)?[app.common.types.variant.value_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join(''):(cljs.core.truth_(property_value)?property_value:""
))], null),mdata));
});
var update_name = (function (p1__56503_SHARP_){
if(cljs.core.truth_(fill_values_QMARK_)){
if(cuerdas.core.empty_QMARK_(p1__56503_SHARP_)){
return [app.common.types.variant.value_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join('');
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56503_SHARP_),", ",app.common.types.variant.value_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(num)].join('');
}
} else {
if(cljs.core.truth_(property_value)){
if(cuerdas.core.empty_QMARK_(p1__56503_SHARP_)){
return property_value;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__56503_SHARP_),", ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(property_value)].join('');
}
} else {
return p1__56503_SHARP_;

}
}
});
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(num + (1)),app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.update_component.cljs$core$IFn$_invoke$arity$variadic(changes__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component),(function (p1__56504_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__56504_SHARP_,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),update_props);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"apply-changes-local-library?","apply-changes-local-library?",1077602630),true], null)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [main_id], null),(function (p1__56505_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__56505_SHARP_,new cljs.core.Keyword(null,"variant-name","variant-name",-1785573622),update_name);
}))], null);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(1),changes], null),related_components);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56518,(0),null);
var changes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56518,(1),null);
return changes__$1;
}));

(app.common.logic.variant_properties.generate_add_new_property.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(app.common.logic.variant_properties.generate_add_new_property.cljs$lang$applyTo = (function (seq56506){
var G__56507 = cljs.core.first(seq56506);
var seq56506__$1 = cljs.core.next(seq56506);
var G__56508 = cljs.core.first(seq56506__$1);
var seq56506__$2 = cljs.core.next(seq56506__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56507,G__56508,seq56506__$2);
}));

app.common.logic.variant_properties.generate_make_shape_no_variant = (function app$common$logic$variant_properties$generate_make_shape_no_variant(changes,shape){
var new_name = app.common.types.variant.variant_name_to_name(shape);
var vec__56537 = app.common.path_names.split_group_name(new_name);
var cpath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56537,(0),null);
var cname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56537,(1),null);
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.update_component.cljs$core$IFn$_invoke$arity$variadic(changes,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape),(function (p1__56534_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__56534_SHARP_,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490)], 0)),new cljs.core.Keyword(null,"name","name",1843675177),cname,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path","path",-188191168),cpath], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"apply-changes-local-library?","apply-changes-local-library?",1077602630),true], null)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),(function (p1__56535_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__56535_SHARP_,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"variant-name","variant-name",-1785573622)], 0)),new cljs.core.Keyword(null,"name","name",1843675177),new_name);
}));
});
app.common.logic.variant_properties.generate_make_shapes_no_variant = (function app$common$logic$variant_properties$generate_make_shapes_no_variant(changes,shapes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.logic.variant_properties.generate_make_shape_no_variant,changes,shapes);
});
app.common.logic.variant_properties.create_new_properties_from_variant = (function app$common$logic$variant_properties$create_new_properties_from_variant(shape,min_props,data,container_name,base_properties){
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape),true);
var component_full_name = app.common.path_names.merge_path_item(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component));
var add_name_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(component_full_name,container_name);
var props = app.common.types.variant.merge_properties(base_properties,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(component));
var new_props = (min_props - (cljs.core.count(props) + ((add_name_QMARK_)?(1):(0))));
var props__$1 = app.common.types.variant.add_new_props(props,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(new_props,""));
if(add_name_QMARK_){
return app.common.types.variant.add_new_prop(props__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component));
} else {
return props__$1;
}
});
app.common.logic.variant_properties.create_new_properties_from_non_variant = (function app$common$logic$variant_properties$create_new_properties_from_non_variant(shape,min_props,container_name,base_properties){
var shape_name = app.common.types.variant.remove_prefix(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape),container_name);
return app.common.types.variant.path_to_properties.cljs$core$IFn$_invoke$arity$3(shape_name,base_properties,min_props);
});
app.common.logic.variant_properties.generate_make_shapes_variant = (function app$common$logic$variant_properties$generate_make_shapes_variant(changes,shapes,variant_container){
var data = app.common.files.changes_builder.get_library_data(changes);
var objects = app.common.files.changes_builder.get_objects(changes);
var variant_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(variant_container);
var num_shapes = cljs.core.count(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(variant_container));
var first_comp_id = new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.first(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(variant_container))));
var base_props = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56550_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56550_SHARP_,new cljs.core.Keyword(null,"value","value",305978217),"");
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),first_comp_id,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490)], null)));
var num_base_props = cljs.core.count(base_props);
var vec__56557 = app.common.path_names.split_group_name(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(variant_container));
var cpath = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56557,(0),null);
var cname = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56557,(1),null);
var container_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(variant_container);
var create_new_properties = (function (shape,min_props){
if(app.common.types.component.is_variant_QMARK_(shape)){
return app.common.logic.variant_properties.create_new_properties_from_variant(shape,min_props,data,container_name,base_props);
} else {
return app.common.logic.variant_properties.create_new_properties_from_non_variant(shape,min_props,container_name,base_props);
}
});
var total_props = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (m,shape){
var x__5110__auto__ = m;
var y__5111__auto__ = cljs.core.count(create_new_properties(shape,num_base_props));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
}),(0),shapes);
var num_new_props = (((((num_shapes === (0))) || ((total_props < num_base_props))))?(0):(total_props - num_base_props));
var changes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cljs.core.iterate((function (p1__56551_SHARP_){
return app.common.logic.variant_properties.generate_add_new_property(p1__56551_SHARP_,variant_id);
}),changes),num_new_props);
var changes__$2 = app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(changes__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes),(function (p1__56552_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__56552_SHARP_,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),variant_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(variant_container)], 0));
}));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes__$3,shape){
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape),true);
if((((num_shapes === (0))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant_id,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(shape))) && (cljs.core.not(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))))))){
return changes__$3;
} else {
var props = create_new_properties(shape,total_props);
var variant_name = app.common.types.variant.properties_to_name(props);
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.update_component.cljs$core$IFn$_invoke$arity$variadic(changes__$3,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape),(function (p1__56553_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__56553_SHARP_,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),variant_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),props,new cljs.core.Keyword(null,"name","name",1843675177),cname,new cljs.core.Keyword(null,"path","path",-188191168),cpath], 0));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"apply-changes-local-library?","apply-changes-local-library?",1077602630),true], null)], 0)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),(function (p1__56554_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56554_SHARP_,new cljs.core.Keyword(null,"variant-name","variant-name",-1785573622),variant_name);
}));
}
}),changes__$2,shapes);
});

//# sourceMappingURL=app.common.logic.variant_properties.js.map
