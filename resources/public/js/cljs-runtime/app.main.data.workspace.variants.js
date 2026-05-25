import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.files.variant.js";
import "./app.common.geom.point.js";
import "./app.common.logic.variant_properties.js";
import "./app.common.logic.variants.js";
import "./app.common.path_names.js";
import "./app.common.types.color.js";
import "./app.common.types.component.js";
import "./app.common.types.components_list.js";
import "./app.common.types.file.js";
import "./app.common.types.shape.layout.js";
import "./app.common.types.variant.js";
import "./app.common.uuid.js";
import "./app.main.data.changes.js";
import "./app.main.data.common.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.colors.js";
import "./app.main.data.workspace.libraries.js";
import "./app.main.data.workspace.pages.js";
import "./app.main.data.workspace.selection.js";
import "./app.main.data.workspace.shape_layout.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.transforms.js";
import "./app.main.data.workspace.undo.js";
import "./app.util.dom.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.variants');
/**
 * Compares the previous properties with the updated ones and executes the correspondent action
 * for each one depending on if it needs to be removed, updated or added
 */
app.main.data.workspace.variants.update_properties_names_and_values = (function app$main$data$workspace$variants$update_properties_names_and_values(component_id,variant_id,previous_properties,updated_properties){
if((typeof app.main.data.workspace.variants.update_properties_names_and_values_51090 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.update_properties_names_and_values_51090 = (function (component_id,variant_id,previous_properties,updated_properties,meta51091){
this.component_id = component_id;
this.variant_id = variant_id;
this.previous_properties = previous_properties;
this.updated_properties = updated_properties;
this.meta51091 = meta51091;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.update_properties_names_and_values_51090.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.update_properties_names_and_values_51090.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","update-properties-names-and-values","app.main.data.workspace.variants/update-properties-names-and-values",-643134898);
}));

(app.main.data.workspace.variants.update_properties_names_and_values_51090.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51092,meta51091__$1){
var self__ = this;
var _51092__$1 = this;
return (new app.main.data.workspace.variants.update_properties_names_and_values_51090(self__.component_id,self__.variant_id,self__.previous_properties,self__.updated_properties,meta51091__$1));
}));

(app.main.data.workspace.variants.update_properties_names_and_values_51090.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51092){
var self__ = this;
var _51092__$1 = this;
return self__.meta51091;
}));

(app.main.data.workspace.variants.update_properties_names_and_values_51090.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.update_properties_names_and_values_51090.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),cljs.core.dissoc,new cljs.core.Keyword(null,"shape-for-rename","shape-for-rename",2104336641));
}));

(app.main.data.workspace.variants.update_properties_names_and_values_51090.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.update_properties_names_and_values_51090.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.get_page(data,page_id),new cljs.core.Keyword(null,"objects","objects",2099713734));
var updated_properties__$1 = app.common.types.variant.update_number_in_repeated_prop_names(self__.updated_properties);
var properties_to_remove = app.common.types.variant.find_properties_to_remove(self__.previous_properties,updated_properties__$1);
var properties_to_add = app.common.types.variant.find_properties_to_add(self__.previous_properties,updated_properties__$1);
var properties_to_update = app.common.types.variant.find_properties_to_update(self__.previous_properties,updated_properties__$1);
var changes = app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),objects),data);
var changes__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes__$1,p__51094){
var map__51095 = p__51094;
var map__51095__$1 = cljs.core.__destructure_map(map__51095);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51095__$1,new cljs.core.Keyword(null,"name","name",1843675177));
return app.common.logic.variant_properties.generate_update_property_value(changes__$1,self__.component_id,app.common.types.variant.find_index_for_property_name(self__.previous_properties,name),"");
}),changes,properties_to_remove);
var changes__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes__$2,p__51096){
var map__51097 = p__51096;
var map__51097__$1 = cljs.core.__destructure_map(map__51097);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51097__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51097__$1,new cljs.core.Keyword(null,"value","value",305978217));
return app.common.logic.variant_properties.generate_update_property_value(changes__$2,self__.component_id,app.common.types.variant.find_index_for_property_name(self__.previous_properties,name),value);
}),changes__$1,properties_to_update);
var changes__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes__$3,p__51098){
var vec__51099 = p__51098;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51099,(0),null);
var map__51102 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51099,(1),null);
var map__51102__$1 = cljs.core.__destructure_map(map__51102);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51102__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51102__$1,new cljs.core.Keyword(null,"value","value",305978217));
return app.common.logic.variant_properties.generate_update_property_value(app.common.logic.variant_properties.generate_add_new_property.cljs$core$IFn$_invoke$arity$variadic(changes__$3,self__.variant_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"property-name","property-name",-1399851434),name], null)], 0)),self__.component_id,(idx + cljs.core.count(self__.previous_properties)),value);
}),changes__$2,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,properties_to_add));
var undo_id = Symbol();
return beicon.v2.core.of(((((cljs.core.seq(properties_to_remove)) || (cljs.core.seq(properties_to_update))))?app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"variant-edit-property-value",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:rename-in-layers"], null)):null),((cljs.core.seq(properties_to_add))?app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"variant-add-property",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:rename-in-layers"], null)):null),app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes__$3),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.variants.update_properties_names_and_values_51090(component_id,variant_id,previous_properties,updated_properties,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Update the variant property name on the position pos
 * in all the components with this variant-id and remove the focus
 */
app.main.data.workspace.variants.update_property_name = (function app$main$data$workspace$variants$update_property_name(variant_id,pos,new_name,p__51104){
var map__51105 = p__51104;
var map__51105__$1 = cljs.core.__destructure_map(map__51105);
var trigger = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51105__$1,new cljs.core.Keyword(null,"trigger","trigger",103466139));
if((typeof app.main.data.workspace.variants.update_property_name_51106 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.update_property_name_51106 = (function (variant_id,pos,new_name,p__51104,map__51105,trigger,meta51107){
this.variant_id = variant_id;
this.pos = pos;
this.new_name = new_name;
this.p__51104 = p__51104;
this.map__51105 = map__51105;
this.trigger = trigger;
this.meta51107 = meta51107;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.update_property_name_51106.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.update_property_name_51106.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","update-property-name","app.main.data.workspace.variants/update-property-name",1951379651);
}));

(app.main.data.workspace.variants.update_property_name_51106.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51108,meta51107__$1){
var self__ = this;
var _51108__$1 = this;
return (new app.main.data.workspace.variants.update_property_name_51106(self__.variant_id,self__.pos,self__.new_name,self__.p__51104,self__.map__51105,self__.trigger,meta51107__$1));
}));

(app.main.data.workspace.variants.update_property_name_51106.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51108){
var self__ = this;
var _51108__$1 = this;
return self__.meta51107;
}));

(app.main.data.workspace.variants.update_property_name_51106.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.update_property_name_51106.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var related_components = app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$3(data,objects,self__.variant_id);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (s,related_component){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(s,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),file_id,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(related_component),new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490)], null),(function (props){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__51103_SHARP_){
return cljs.core.with_meta(p1__51103_SHARP_,null);
}),props);
}));
}),state,related_components);
}));

(app.main.data.workspace.variants.update_property_name_51106.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.update_property_name_51106.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.get_page(data,page_id),new cljs.core.Keyword(null,"objects","objects",2099713734));
var related_components = app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$3(data,objects,self__.variant_id);
var props = new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(cljs.core.last(related_components));
var valid_pos_QMARK_ = (cljs.core.count(props) > self__.pos);
var prop_name = ((valid_pos_QMARK_)?new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(props,self__.pos)):null);
var changes = ((valid_pos_QMARK_)?app.common.logic.variant_properties.generate_update_property_name(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),objects),data),self__.variant_id,self__.pos,self__.new_name):null);
var undo_id = Symbol();
if(((valid_pos_QMARK_) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prop_name,self__.new_name)))){
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes),app.main.data.workspace.undo.commit_undo_transaction(undo_id),app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"variant-edit-property-name",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),self__.trigger], null)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.variants.update_property_name_51106(variant_id,pos,new_name,p__51104,map__51105__$1,trigger,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Updates the variant property value on the position pos in a component
 */
app.main.data.workspace.variants.update_property_value = (function app$main$data$workspace$variants$update_property_value(component_id,pos,value){
if((typeof app.main.data.workspace.variants.update_property_value_51114 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.update_property_value_51114 = (function (component_id,pos,value,meta51115){
this.component_id = component_id;
this.pos = pos;
this.value = value;
this.meta51115 = meta51115;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.update_property_value_51114.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.update_property_value_51114.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","update-property-value","app.main.data.workspace.variants/update-property-value",807023037);
}));

(app.main.data.workspace.variants.update_property_value_51114.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51116,meta51115__$1){
var self__ = this;
var _51116__$1 = this;
return (new app.main.data.workspace.variants.update_property_value_51114(self__.component_id,self__.pos,self__.value,meta51115__$1));
}));

(app.main.data.workspace.variants.update_property_value_51114.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51116){
var self__ = this;
var _51116__$1 = this;
return self__.meta51115;
}));

(app.main.data.workspace.variants.update_property_value_51114.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.update_property_value_51114.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.get_page(data,page_id),new cljs.core.Keyword(null,"objects","objects",2099713734));
var changes = app.common.logic.variant_properties.generate_update_property_value(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),data),objects),self__.component_id,self__.pos,self__.value);
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.variants.update_property_value_51114(component_id,pos,value,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Sets or unsets an error for a component
 */
app.main.data.workspace.variants.update_error = (function app$main$data$workspace$variants$update_error(var_args){
var G__51118 = arguments.length;
switch (G__51118) {
case 1:
return app.main.data.workspace.variants.update_error.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.variants.update_error.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.variants.update_error.cljs$core$IFn$_invoke$arity$1 = (function (component_id){
return app.main.data.workspace.variants.update_error.cljs$core$IFn$_invoke$arity$2(component_id,null);
}));

(app.main.data.workspace.variants.update_error.cljs$core$IFn$_invoke$arity$2 = (function (component_id,value){
if((typeof app.main.data.workspace.variants.update_error_51120 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.update_error_51120 = (function (component_id,value,meta51121){
this.component_id = component_id;
this.value = value;
this.meta51121 = meta51121;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.update_error_51120.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.update_error_51120.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","update-error","app.main.data.workspace.variants/update-error",514760823);
}));

(app.main.data.workspace.variants.update_error_51120.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51122,meta51121__$1){
var self__ = this;
var _51122__$1 = this;
return (new app.main.data.workspace.variants.update_error_51120(self__.component_id,self__.value,meta51121__$1));
}));

(app.main.data.workspace.variants.update_error_51120.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51122){
var self__ = this;
var _51122__$1 = this;
return self__.meta51121;
}));

(app.main.data.workspace.variants.update_error_51120.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.update_error_51120.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.get_page(data,page_id),new cljs.core.Keyword(null,"objects","objects",2099713734));
var changes = app.common.logic.variant_properties.generate_set_variant_error(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),data),objects),self__.component_id,self__.value);
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.variants.update_error_51120(component_id,value,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.variants.update_error.cljs$lang$maxFixedArity = 2);

/**
 * Remove the variant property on the position pos
 * in all the components with this variant-id
 */
app.main.data.workspace.variants.remove_property = (function app$main$data$workspace$variants$remove_property(variant_id,pos){
if((typeof app.main.data.workspace.variants.remove_property_51124 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.remove_property_51124 = (function (variant_id,pos,meta51125){
this.variant_id = variant_id;
this.pos = pos;
this.meta51125 = meta51125;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.remove_property_51124.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.remove_property_51124.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","remove-property","app.main.data.workspace.variants/remove-property",95421074);
}));

(app.main.data.workspace.variants.remove_property_51124.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51126,meta51125__$1){
var self__ = this;
var _51126__$1 = this;
return (new app.main.data.workspace.variants.remove_property_51124(self__.variant_id,self__.pos,meta51125__$1));
}));

(app.main.data.workspace.variants.remove_property_51124.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51126){
var self__ = this;
var _51126__$1 = this;
return self__.meta51125;
}));

(app.main.data.workspace.variants.remove_property_51124.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.remove_property_51124.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.get_page(data,page_id),new cljs.core.Keyword(null,"objects","objects",2099713734));
var changes = app.common.logic.variant_properties.generate_remove_property(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),data),objects),self__.variant_id,self__.pos);
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.variants.remove_property_51124(variant_id,pos,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Remove every empty property for all components when their respective values are empty
 * for all of them
 */
app.main.data.workspace.variants.remove_empty_properties = (function app$main$data$workspace$variants$remove_empty_properties(variant_id){
if((typeof app.main.data.workspace.variants.remove_empty_properties_51127 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.remove_empty_properties_51127 = (function (variant_id,meta51128){
this.variant_id = variant_id;
this.meta51128 = meta51128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.remove_empty_properties_51127.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.remove_empty_properties_51127.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","remove-empty-properties","app.main.data.workspace.variants/remove-empty-properties",317322171);
}));

(app.main.data.workspace.variants.remove_empty_properties_51127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51129,meta51128__$1){
var self__ = this;
var _51129__$1 = this;
return (new app.main.data.workspace.variants.remove_empty_properties_51127(self__.variant_id,meta51128__$1));
}));

(app.main.data.workspace.variants.remove_empty_properties_51127.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51129){
var self__ = this;
var _51129__$1 = this;
return self__.meta51128;
}));

(app.main.data.workspace.variants.remove_empty_properties_51127.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.remove_empty_properties_51127.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.get_page(data,page_id),new cljs.core.Keyword(null,"objects","objects",2099713734));
var variant_components = app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$3(data,objects,self__.variant_id);
var properties_empty_pos = cljs.core.reverse(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (i,p__51131){
var vec__51132 = p__51131;
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51132,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51132,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [i,cljs.core.empty_QMARK_(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),v)))], null);
}),cljs.core.group_by(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([variant_components], 0)))));
var changes = app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),data),objects);
var changes__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes__$1,p__51135){
var vec__51136 = p__51135;
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51136,(0),null);
var property_empty_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51136,(1),null);
if(cljs.core.truth_(property_empty_QMARK_)){
return app.common.logic.variant_properties.generate_remove_property(changes__$1,self__.variant_id,pos);
} else {
return changes__$1;
}
}),changes,properties_empty_pos);
var undo_id = Symbol();
if(cljs.core.seq(new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes__$1))){
return beicon.v2.core.of(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"variant-remove-property",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:rename-in-layers"], null)),app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes__$1),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.variants.remove_empty_properties_51127(variant_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Add a new variant property to all the components with this variant-id
 */
app.main.data.workspace.variants.add_new_property = (function app$main$data$workspace$variants$add_new_property(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51289 = arguments.length;
var i__5750__auto___51290 = (0);
while(true){
if((i__5750__auto___51290 < len__5749__auto___51289)){
args__5755__auto__.push((arguments[i__5750__auto___51290]));

var G__51291 = (i__5750__auto___51290 + (1));
i__5750__auto___51290 = G__51291;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.main.data.workspace.variants.add_new_property.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.main.data.workspace.variants.add_new_property.cljs$core$IFn$_invoke$arity$variadic = (function (variant_id,p__51141){
var vec__51142 = p__51141;
var options = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51142,(0),null);
if((typeof app.main.data.workspace.variants.add_new_property_51145 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.add_new_property_51145 = (function (variant_id,p__51141,vec__51142,options,meta51146){
this.variant_id = variant_id;
this.p__51141 = p__51141;
this.vec__51142 = vec__51142;
this.options = options;
this.meta51146 = meta51146;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.add_new_property_51145.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.add_new_property_51145.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","add-new-property","app.main.data.workspace.variants/add-new-property",-1851122032);
}));

(app.main.data.workspace.variants.add_new_property_51145.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51147,meta51146__$1){
var self__ = this;
var _51147__$1 = this;
return (new app.main.data.workspace.variants.add_new_property_51145(self__.variant_id,self__.p__51141,self__.vec__51142,self__.options,meta51146__$1));
}));

(app.main.data.workspace.variants.add_new_property_51145.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51147){
var self__ = this;
var _51147__$1 = this;
return self__.meta51146;
}));

(app.main.data.workspace.variants.add_new_property_51145.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.add_new_property_51145.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.get_page(data,page_id),new cljs.core.Keyword(null,"objects","objects",2099713734));
var changes = app.common.logic.variant_properties.generate_add_new_property.cljs$core$IFn$_invoke$arity$variadic(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),data),objects),self__.variant_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.options], 0));
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.variants.add_new_property_51145(variant_id,p__51141,vec__51142,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.variants.add_new_property.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.main.data.workspace.variants.add_new_property.cljs$lang$applyTo = (function (seq51139){
var G__51140 = cljs.core.first(seq51139);
var seq51139__$1 = cljs.core.next(seq51139);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51140,seq51139__$1);
}));

/**
 * Reorder properties by moving a property from some position to some space between positions
 */
app.main.data.workspace.variants.reorder_variant_poperties = (function app$main$data$workspace$variants$reorder_variant_poperties(variant_id,from_pos,to_space_between_pos){
if((typeof app.main.data.workspace.variants.reorder_variant_properties_51149 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.reorder_variant_properties_51149 = (function (variant_id,from_pos,to_space_between_pos,meta51150){
this.variant_id = variant_id;
this.from_pos = from_pos;
this.to_space_between_pos = to_space_between_pos;
this.meta51150 = meta51150;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.reorder_variant_properties_51149.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.reorder_variant_properties_51149.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","reorder-variant-properties","app.main.data.workspace.variants/reorder-variant-properties",-1549102244);
}));

(app.main.data.workspace.variants.reorder_variant_properties_51149.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51151,meta51150__$1){
var self__ = this;
var _51151__$1 = this;
return (new app.main.data.workspace.variants.reorder_variant_properties_51149(self__.variant_id,self__.from_pos,self__.to_space_between_pos,meta51150__$1));
}));

(app.main.data.workspace.variants.reorder_variant_properties_51149.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51151){
var self__ = this;
var _51151__$1 = this;
return self__.meta51150;
}));

(app.main.data.workspace.variants.reorder_variant_properties_51149.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.reorder_variant_properties_51149.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.get_page(data,page_id),new cljs.core.Keyword(null,"objects","objects",2099713734));
var changes = app.common.logic.variant_properties.generate_reorder_variant_poperties(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),data),objects),self__.variant_id,self__.from_pos,self__.to_space_between_pos);
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.variants.reorder_variant_properties_51149(variant_id,from_pos,to_space_between_pos,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Sets the variant-id on a component
 */
app.main.data.workspace.variants.set_variant_id = (function app$main$data$workspace$variants$set_variant_id(component_id,variant_id){
if((typeof app.main.data.workspace.variants.set_variant_id_51154 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.set_variant_id_51154 = (function (component_id,variant_id,meta51155){
this.component_id = component_id;
this.variant_id = variant_id;
this.meta51155 = meta51155;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.set_variant_id_51154.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.set_variant_id_51154.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","set-variant-id","app.main.data.workspace.variants/set-variant-id",-615417257);
}));

(app.main.data.workspace.variants.set_variant_id_51154.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51156,meta51155__$1){
var self__ = this;
var _51156__$1 = this;
return (new app.main.data.workspace.variants.set_variant_id_51154(self__.component_id,self__.variant_id,meta51155__$1));
}));

(app.main.data.workspace.variants.set_variant_id_51154.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51156){
var self__ = this;
var _51156__$1 = this;
return self__.meta51155;
}));

(app.main.data.workspace.variants.set_variant_id_51154.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.set_variant_id_51154.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var changes = app.common.files.changes_builder.update_component(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),data),self__.component_id,(function (p1__51152_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51152_SHARP_,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),self__.variant_id);
}));
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.variants.set_variant_id_51154(component_id,variant_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.variants.focus_property = (function app$main$data$workspace$variants$focus_property(variant_id){
if((typeof app.main.data.workspace.variants.focus_property_51157 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.focus_property_51157 = (function (variant_id,meta51158){
this.variant_id = variant_id;
this.meta51158 = meta51158;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.focus_property_51157.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.focus_property_51157.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","focus-property","app.main.data.workspace.variants/focus-property",847873142);
}));

(app.main.data.workspace.variants.focus_property_51157.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51159,meta51158__$1){
var self__ = this;
var _51159__$1 = this;
return (new app.main.data.workspace.variants.focus_property_51157(self__.variant_id,meta51158__$1));
}));

(app.main.data.workspace.variants.focus_property_51157.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51159){
var self__ = this;
var _51159__$1 = this;
return self__.meta51158;
}));

(app.main.data.workspace.variants.focus_property_51157.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.focus_property_51157.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return app.util.dom.focus_BANG_(app.util.dom.get_element(["variant-prop-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.variant_id),"-0"].join('')));
}));
}

return (new app.main.data.workspace.variants.focus_property_51157(variant_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Resize the variant container, and move the shape (that is a variant) to the right
 */
app.main.data.workspace.variants.resposition_and_resize_variant = (function app$main$data$workspace$variants$resposition_and_resize_variant(shape_id){
if((typeof app.main.data.workspace.variants.resposition_and_resize_variant_51160 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.resposition_and_resize_variant_51160 = (function (shape_id,meta51161){
this.shape_id = shape_id;
this.meta51161 = meta51161;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.resposition_and_resize_variant_51160.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.resposition_and_resize_variant_51160.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","resposition-and-resize-variant","app.main.data.workspace.variants/resposition-and-resize-variant",-384338766);
}));

(app.main.data.workspace.variants.resposition_and_resize_variant_51160.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51162,meta51161__$1){
var self__ = this;
var _51162__$1 = this;
return (new app.main.data.workspace.variants.resposition_and_resize_variant_51160(self__.shape_id,meta51161__$1));
}));

(app.main.data.workspace.variants.resposition_and_resize_variant_51160.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51162){
var self__ = this;
var _51162__$1 = this;
return self__.meta51161;
}));

(app.main.data.workspace.variants.resposition_and_resize_variant_51160.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.resposition_and_resize_variant_51160.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.shape_id);
var container = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var width = ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(container) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(shape)) + (20));
var x = (width - (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(shape) + (30)));
return beicon.v2.core.of(app.main.data.workspace.transforms.update_dimensions.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape)], null),new cljs.core.Keyword(null,"width","width",-384071477),width),app.main.data.workspace.transforms.update_position.cljs$core$IFn$_invoke$arity$3(self__.shape_id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),x], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"absolute?","absolute?",1457842844),false], null)));
}));
}

return (new app.main.data.workspace.variants.resposition_and_resize_variant_51160(shape_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Create a new variant and add it to the variant-container
 */
app.main.data.workspace.variants.add_new_variant = (function app$main$data$workspace$variants$add_new_variant(var_args){
var G__51164 = arguments.length;
switch (G__51164) {
case 1:
return app.main.data.workspace.variants.add_new_variant.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.variants.add_new_variant.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.variants.add_new_variant.cljs$core$IFn$_invoke$arity$1 = (function (shape_id){
return app.main.data.workspace.variants.add_new_variant.cljs$core$IFn$_invoke$arity$2(shape_id,false);
}));

(app.main.data.workspace.variants.add_new_variant.cljs$core$IFn$_invoke$arity$2 = (function (shape_id,multiselect_QMARK_){
if((typeof app.main.data.workspace.variants.add_new_variant_51165 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.add_new_variant_51165 = (function (shape_id,multiselect_QMARK_,meta51166){
this.shape_id = shape_id;
this.multiselect_QMARK_ = multiselect_QMARK_;
this.meta51166 = meta51166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.add_new_variant_51165.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.add_new_variant_51165.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","add-new-variant","app.main.data.workspace.variants/add-new-variant",-185616496);
}));

(app.main.data.workspace.variants.add_new_variant_51165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51167,meta51166__$1){
var self__ = this;
var _51167__$1 = this;
return (new app.main.data.workspace.variants.add_new_variant_51165(self__.shape_id,self__.multiselect_QMARK_,meta51166__$1));
}));

(app.main.data.workspace.variants.add_new_variant_51165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51167){
var self__ = this;
var _51167__$1 = this;
return self__.meta51166;
}));

(app.main.data.workspace.variants.add_new_variant_51165.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.add_new_variant_51165.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.get_page(data,page_id),new cljs.core.Keyword(null,"objects","objects",2099713734));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.shape_id);
var shape__$1 = (cljs.core.truth_(app.common.types.component.is_variant_container_QMARK_(shape))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.last(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape))):shape);
var component_id = new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape__$1);
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(data,component_id);
var container_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape__$1);
var variant_container = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,container_id);
var has_layout_QMARK_ = app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(variant_container);
var new_component_id = app.common.uuid.next();
var new_shape_id = app.common.uuid.next();
var prop_num = (cljs.core.count(new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(component)) - (1));
var changes = app.common.logic.variants.generate_add_new_variant(app.common.files.changes_builder.with_page_id(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),data),objects),page_id),shape__$1,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(component),new_component_id,new_shape_id,prop_num);
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes),((has_layout_QMARK_)?null:app.main.data.workspace.variants.resposition_and_resize_variant(new_shape_id)),app.main.data.workspace.undo.commit_undo_transaction(undo_id),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape__$1)], null)], null)),(cljs.core.truth_(self__.multiselect_QMARK_)?app.main.data.workspace.selection.shift_select_shapes.cljs$core$IFn$_invoke$arity$1(new_shape_id):app.main.data.workspace.selection.select_shape.cljs$core$IFn$_invoke$arity$1(new_shape_id))),beicon.v2.core.delay((250),beicon.v2.core.of(app.main.data.workspace.variants.focus_property(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(variant_container)))));
}));
}

return (new app.main.data.workspace.variants.add_new_variant_51165(shape_id,multiselect_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.variants.add_new_variant.cljs$lang$maxFixedArity = 2);

/**
 * Given the id of a main shape of a component, creates a variant structure for
 * that component
 */
app.main.data.workspace.variants.transform_in_variant = (function app$main$data$workspace$variants$transform_in_variant(var_args){
var G__51173 = arguments.length;
switch (G__51173) {
case 1:
return app.main.data.workspace.variants.transform_in_variant.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 7:
return app.main.data.workspace.variants.transform_in_variant.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.variants.transform_in_variant.cljs$core$IFn$_invoke$arity$1 = (function (main_instance_id){
return app.main.data.workspace.variants.transform_in_variant.cljs$core$IFn$_invoke$arity$7(main_instance_id,null,null,cljs.core.PersistentVector.EMPTY,false,true,true);
}));

(app.main.data.workspace.variants.transform_in_variant.cljs$core$IFn$_invoke$arity$7 = (function (main_instance_id,variant_id,delta,prefix,add_wrapper_QMARK_,duplicate_QMARK_,flex_QMARK_){
if((typeof app.main.data.workspace.variants.transform_in_variant_51174 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.transform_in_variant_51174 = (function (main_instance_id,variant_id,delta,prefix,add_wrapper_QMARK_,duplicate_QMARK_,flex_QMARK_,meta51175){
this.main_instance_id = main_instance_id;
this.variant_id = variant_id;
this.delta = delta;
this.prefix = prefix;
this.add_wrapper_QMARK_ = add_wrapper_QMARK_;
this.duplicate_QMARK_ = duplicate_QMARK_;
this.flex_QMARK_ = flex_QMARK_;
this.meta51175 = meta51175;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.transform_in_variant_51174.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.transform_in_variant_51174.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","transform-in-variant","app.main.data.workspace.variants/transform-in-variant",-1072127094);
}));

(app.main.data.workspace.variants.transform_in_variant_51174.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51176,meta51175__$1){
var self__ = this;
var _51176__$1 = this;
return (new app.main.data.workspace.variants.transform_in_variant_51174(self__.main_instance_id,self__.variant_id,self__.delta,self__.prefix,self__.add_wrapper_QMARK_,self__.duplicate_QMARK_,self__.flex_QMARK_,meta51175__$1));
}));

(app.main.data.workspace.variants.transform_in_variant_51174.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51176){
var self__ = this;
var _51176__$1 = this;
return self__.meta51175;
}));

(app.main.data.workspace.variants.transform_in_variant_51174.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.transform_in_variant_51174.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var variant_id__$1 = (function (){var or__5025__auto__ = self__.variant_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.uuid.next();
}
})();
var variant_vec = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [variant_id__$1], null);
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$3(state,file_id,page_id);
var main = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.main_instance_id);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(main));
var component_id = new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(main);
var name = (cljs.core.truth_(self__.add_wrapper_QMARK_)?["Component/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(main))].join(''):new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(main));
var cpath = (function (){var G__51177 = app.common.path_names.split_path(name);
if(cljs.core.seq(self__.prefix)){
return cljs.core.vec(cljs.core.cons(app.common.path_names.join_path(self__.prefix),cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(self__.prefix),G__51177)));
} else {
return G__51177;
}
})();
var name__$1 = cljs.core.first(cpath);
var num_props = (function (){var x__5110__auto__ = (1);
var y__5111__auto__ = (cljs.core.count(cpath) - (1));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var base_props = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"is-variant-container","is-variant-container",-1294533822),true,new cljs.core.Keyword(null,"name","name",1843675177),name__$1,new cljs.core.Keyword(null,"r1","r1",690974900),(20),new cljs.core.Keyword(null,"r2","r2",252844174),(20),new cljs.core.Keyword(null,"r3","r3",-2027148174),(20),new cljs.core.Keyword(null,"r4","r4",1134323163),(20),new cljs.core.Keyword(null,"layout-item-absolute","layout-item-absolute",1832387265),true], null);
var flex_props = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),new cljs.core.Keyword(null,"auto","auto",-566279492),new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p1","p1",-936759954),(30),new cljs.core.Keyword(null,"p2","p2",905500641),(30),new cljs.core.Keyword(null,"p3","p3",1731040739),(30),new cljs.core.Keyword(null,"p4","p4",-1090126814),(30)], null),new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),(0),new cljs.core.Keyword(null,"column-gap","column-gap",384822863),(20)], null)], null);
var cont_props = (cljs.core.truth_(self__.flex_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(base_props,flex_props):base_props);
var main_props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name__$1,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),variant_id__$1], null);
var stroke_props = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340),new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),"#bb97d8",new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),(1),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),(2)], null);
var delta__$1 = (function (){var or__5025__auto__ = self__.delta;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)){
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0));
} else {
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((-30),(-30));
}
}
})();
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(name__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(main)))?app.main.data.workspace.libraries.rename_component(component_id,name__$1):null),app.main.data.workspace.shapes.create_artboard_from_shapes.cljs$core$IFn$_invoke$arity$7(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.main_instance_id], null),variant_id__$1,null,null,null,delta__$1,self__.flex_QMARK_),app.main.data.workspace.colors.remove_all_fills.cljs$core$IFn$_invoke$arity$2(variant_vec,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null)),(cljs.core.truth_(self__.flex_QMARK_)?app.main.data.workspace.shape_layout.create_layout_from_id(variant_id__$1,new cljs.core.Keyword(null,"flex","flex",-1425124628)):null),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(variant_vec,(function (p1__51168_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__51168_SHARP_,cont_props], 0));
})),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.main_instance_id], null),(function (p1__51169_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__51169_SHARP_,main_props], 0));
})),app.main.data.workspace.colors.add_stroke(variant_vec,stroke_props),app.main.data.workspace.variants.set_variant_id(component_id,variant_id__$1)),beicon.v2.core.from(cljs.core.repeatedly.cljs$core$IFn$_invoke$arity$2(num_props,(function (){
return app.main.data.workspace.variants.add_new_property.cljs$core$IFn$_invoke$arity$variadic(variant_id__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill-values?","fill-values?",-1457713069),true], null)], 0));
}))),(((cljs.core.count(cpath) > (1)))?beicon.v2.core.from(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51170_SHARP_){
return app.main.data.workspace.variants.update_property_value(component_id,p1__51170_SHARP_,cljs.core.nth.cljs$core$IFn$_invoke$arity$2(cpath,(p1__51170_SHARP_ + (1))));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$1(num_props))):null),beicon.v2.core.of((cljs.core.truth_(self__.duplicate_QMARK_)?app.main.data.workspace.variants.add_new_variant.cljs$core$IFn$_invoke$arity$1(self__.main_instance_id):null),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(variant_vec,(function (p1__51171_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__51171_SHARP_,new cljs.core.Keyword(null,"layout-item-absolute","layout-item-absolute",1832387265));
})),app.main.data.workspace.undo.commit_undo_transaction(undo_id),(cljs.core.truth_(self__.flex_QMARK_)?potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [variant_id__$1], null)], null)):null)));
}));
}

return (new app.main.data.workspace.variants.transform_in_variant_51174(main_instance_id,variant_id,delta,prefix,add_wrapper_QMARK_,duplicate_QMARK_,flex_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.variants.transform_in_variant.cljs$lang$maxFixedArity = 7);

/**
 * Manage the shared shortcut, and do the pertinent action
 */
app.main.data.workspace.variants.add_component_or_variant = (function app$main$data$workspace$variants$add_component_or_variant(){
if((typeof app.main.data.workspace.variants.add_component_or_variant_51178 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.add_component_or_variant_51178 = (function (meta51179){
this.meta51179 = meta51179;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.add_component_or_variant_51178.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.add_component_or_variant_51178.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","add-component-or-variant","app.main.data.workspace.variants/add-component-or-variant",1400958828);
}));

(app.main.data.workspace.variants.add_component_or_variant_51178.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51180,meta51179__$1){
var self__ = this;
var _51180__$1 = this;
return (new app.main.data.workspace.variants.add_component_or_variant_51178(meta51179__$1));
}));

(app.main.data.workspace.variants.add_component_or_variant_51178.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51180){
var self__ = this;
var _51180__$1 = this;
return self__.meta51179;
}));

(app.main.data.workspace.variants.add_component_or_variant_51178.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.add_component_or_variant_51178.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected_ids = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var selected_shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),selected_ids);
var single_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selected_ids));
var first_shape = cljs.core.first(selected_shapes);
var transform_in_variant_QMARK_ = ((single_QMARK_) && ((((!(app.common.types.component.is_variant_QMARK_(first_shape)))) && (app.common.types.component.main_instance_QMARK_(first_shape)))));
var add_new_variant_QMARK_ = cljs.core.every_QMARK_(app.common.types.component.is_variant_QMARK_,selected_shapes);
var undo_id = Symbol();
if(transform_in_variant_QMARK_){
return beicon.v2.core.of(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"transform-in-variant",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:shortcut"], null)),app.main.data.workspace.variants.transform_in_variant.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(first_shape)));
} else {
if(add_new_variant_QMARK_){
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-new-variant",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:shortcut-create-component"], null)),app.main.data.workspace.undo.start_undo_transaction(undo_id)),beicon.v2.core.from(cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.variants.add_new_variant,selected_ids)),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
} else {
return beicon.v2.core.of(app.main.data.workspace.libraries.add_component.cljs$core$IFn$_invoke$arity$0());

}
}
}));
}

return (new app.main.data.workspace.variants.add_component_or_variant_51178(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Manage the shared shortcut, and do the pertinent action
 */
app.main.data.workspace.variants.duplicate_or_add_variant = (function app$main$data$workspace$variants$duplicate_or_add_variant(){
if((typeof app.main.data.workspace.variants.duplicate_or_add_variant_51182 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.duplicate_or_add_variant_51182 = (function (meta51183){
this.meta51183 = meta51183;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.duplicate_or_add_variant_51182.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.duplicate_or_add_variant_51182.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","duplicate-or-add-variant","app.main.data.workspace.variants/duplicate-or-add-variant",-1689023993);
}));

(app.main.data.workspace.variants.duplicate_or_add_variant_51182.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51184,meta51183__$1){
var self__ = this;
var _51184__$1 = this;
return (new app.main.data.workspace.variants.duplicate_or_add_variant_51182(meta51183__$1));
}));

(app.main.data.workspace.variants.duplicate_or_add_variant_51182.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51184){
var self__ = this;
var _51184__$1 = this;
return self__.meta51183;
}));

(app.main.data.workspace.variants.duplicate_or_add_variant_51182.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.duplicate_or_add_variant_51182.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected_ids = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var selected_shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),selected_ids);
var add_new_variant_QMARK_ = cljs.core.every_QMARK_(app.common.types.component.is_variant_QMARK_,selected_shapes);
var undo_id = Symbol();
if(add_new_variant_QMARK_){
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-new-variant",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:shortcut-duplicate"], null)),app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.variants.add_new_variant.cljs$core$IFn$_invoke$arity$2(cljs.core.first(selected_ids),false)),beicon.v2.core.from(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51181_SHARP_){
return app.main.data.workspace.variants.add_new_variant.cljs$core$IFn$_invoke$arity$2(p1__51181_SHARP_,true);
}),cljs.core.rest(selected_ids))),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
} else {
return beicon.v2.core.of(app.main.data.workspace.selection.duplicate_selected.cljs$core$IFn$_invoke$arity$1(true));
}
}));
}

return (new app.main.data.workspace.variants.duplicate_or_add_variant_51182(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Rename the variant container and all components belonging to this variant
 */
app.main.data.workspace.variants.rename_variant = (function app$main$data$workspace$variants$rename_variant(variant_id,name){
if((typeof app.main.data.workspace.variants.rename_variant_51187 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.rename_variant_51187 = (function (variant_id,name,meta51188){
this.variant_id = variant_id;
this.name = name;
this.meta51188 = meta51188;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.rename_variant_51187.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.rename_variant_51187.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","rename-variant","app.main.data.workspace.variants/rename-variant",-1736167912);
}));

(app.main.data.workspace.variants.rename_variant_51187.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51189,meta51188__$1){
var self__ = this;
var _51189__$1 = this;
return (new app.main.data.workspace.variants.rename_variant_51187(self__.variant_id,self__.name,meta51188__$1));
}));

(app.main.data.workspace.variants.rename_variant_51187.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51189){
var self__ = this;
var _51189__$1 = this;
return self__.meta51188;
}));

(app.main.data.workspace.variants.rename_variant_51187.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.rename_variant_51187.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.get_page(data,page_id),new cljs.core.Keyword(null,"objects","objects",2099713734));
var variant_components = app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$3(data,objects,self__.variant_id);
var clean_name = app.common.path_names.clean_path(self__.name);
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.variant_id], null),(function (p1__51185_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51185_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177),clean_name);
}))),beicon.v2.core.from(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51186_SHARP_){
return app.main.data.workspace.libraries.rename_component_and_main_instance(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51186_SHARP_),clean_name);
}),variant_components)),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
}));
}

return (new app.main.data.workspace.variants.rename_variant_51187(variant_id,name,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * If the component is in a variant, rename the variant.
 * If it is not, rename the component and its main
 */
app.main.data.workspace.variants.rename_comp_or_variant_and_main = (function app$main$data$workspace$variants$rename_comp_or_variant_and_main(component_id,name){
if((typeof app.main.data.workspace.variants.rename_comp_or_variant_and_main_51193 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.rename_comp_or_variant_and_main_51193 = (function (component_id,name,meta51194){
this.component_id = component_id;
this.name = name;
this.meta51194 = meta51194;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.rename_comp_or_variant_and_main_51193.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.rename_comp_or_variant_and_main_51193.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","rename-comp-or-variant-and-main","app.main.data.workspace.variants/rename-comp-or-variant-and-main",-304307975);
}));

(app.main.data.workspace.variants.rename_comp_or_variant_and_main_51193.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51195,meta51194__$1){
var self__ = this;
var _51195__$1 = this;
return (new app.main.data.workspace.variants.rename_comp_or_variant_and_main_51193(self__.component_id,self__.name,meta51194__$1));
}));

(app.main.data.workspace.variants.rename_comp_or_variant_and_main_51193.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51195){
var self__ = this;
var _51195__$1 = this;
return self__.meta51194;
}));

(app.main.data.workspace.variants.rename_comp_or_variant_and_main_51193.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.rename_comp_or_variant_and_main_51193.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(data,self__.component_id);
if(app.common.types.component.is_variant_QMARK_(component)){
return beicon.v2.core.of(app.main.data.workspace.variants.rename_variant(new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(component),self__.name));
} else {
return beicon.v2.core.of(app.main.data.workspace.libraries.rename_component_and_main_instance(self__.component_id,self__.name));
}
}));
}

return (new app.main.data.workspace.variants.rename_comp_or_variant_and_main_51193(component_id,name,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Receives a list of frames (with X, y, width and height) and
 *   calculates a rect that contains them all
 */
app.main.data.workspace.variants.bounding_rect = (function app$main$data$workspace$variants$bounding_rect(frames){
var xs = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185),frames);
var ys = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"y","y",-1757859776),frames);
var x2s = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51199_SHARP_){
return (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(p1__51199_SHARP_) + new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(p1__51199_SHARP_));
}),frames);
var y2s = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51200_SHARP_){
return (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(p1__51200_SHARP_) + new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(p1__51200_SHARP_));
}),frames);
var min_x = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,xs);
var min_y = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.min,ys);
var max_x = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,x2s);
var max_y = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,y2s);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),min_x,new cljs.core.Keyword(null,"y","y",-1757859776),min_y,new cljs.core.Keyword(null,"width","width",-384071477),(max_x - min_x),new cljs.core.Keyword(null,"height","height",1025178622),(max_y - min_y)], null);
});
app.main.data.workspace.variants.common_prefix = (function app$main$data$workspace$variants$common_prefix(paths){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.take_while.cljs$core$IFn$_invoke$arity$2((function (p1__51201_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,p1__51201_SHARP_);
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.map,cljs.core.vector,paths))));
});
app.main.data.workspace.variants.combine_as_variants = (function app$main$data$workspace$variants$combine_as_variants(ids,p__51209){
var map__51210 = p__51209;
var map__51210__$1 = cljs.core.__destructure_map(map__51210);
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51210__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var trigger = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51210__$1,new cljs.core.Keyword(null,"trigger","trigger",103466139));
if((typeof app.main.data.workspace.variants.combine_as_variants_51211 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.combine_as_variants_51211 = (function (ids,p__51209,map__51210,page_id,trigger,meta51212){
this.ids = ids;
this.p__51209 = p__51209;
this.map__51210 = map__51210;
this.page_id = page_id;
this.trigger = trigger;
this.meta51212 = meta51212;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.combine_as_variants_51211.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.combine_as_variants_51211.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","combine-as-variants","app.main.data.workspace.variants/combine-as-variants",1023651382);
}));

(app.main.data.workspace.variants.combine_as_variants_51211.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51213,meta51212__$1){
var self__ = this;
var _51213__$1 = this;
return (new app.main.data.workspace.variants.combine_as_variants_51211(self__.ids,self__.p__51209,self__.map__51210,self__.page_id,self__.trigger,meta51212__$1));
}));

(app.main.data.workspace.variants.combine_as_variants_51211.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51213){
var self__ = this;
var _51213__$1 = this;
return self__.meta51212;
}));

(app.main.data.workspace.variants.combine_as_variants_51211.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.combine_as_variants_51211.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var current_page = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var combine = (function (current_page__$1){
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,current_page__$1);
var ids__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (id){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
return (((!(app.common.types.component.main_instance_QMARK_(shape)))) || (app.common.types.component.is_variant_QMARK_(shape)));
}),app.common.files.helpers.clean_loops(objects,self__.ids));
if((cljs.core.count(ids__$1) > (1))){
var shapes = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__51202_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__51202_SHARP_);
}),ids__$1);
var rect = app.main.data.workspace.variants.bounding_rect(shapes);
var prefix = app.main.data.workspace.variants.common_prefix(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__51203_SHARP_){
return app.common.path_names.split_path(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__51203_SHARP_));
}),shapes));
var add_wrapper_QMARK_ = cljs.core.empty_QMARK_(prefix);
var first_shape = cljs.core.first(shapes);
var delta = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(first_shape)) - (30)),((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(first_shape)) - (30)));
var common_parent = cljs.core.last(app.main.data.workspace.variants.common_prefix(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__51204_SHARP_){
return cljs.core.reverse(app.common.files.helpers.get_parent_ids(objects,p1__51204_SHARP_));
}),ids__$1)));
var index = (cljs.core.count(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,common_parent))) + (1));
var variant_id = app.common.uuid.next();
var undo_id = Symbol();
return beicon.v2.core.concat((cljs.core.truth_((function (){var and__5023__auto__ = self__.page_id;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_page__$1,self__.page_id);
} else {
return and__5023__auto__;
}
})())?beicon.v2.core.of(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id], 0))):beicon.v2.core.empty()),beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.variants.transform_in_variant.cljs$core$IFn$_invoke$arity$7(cljs.core.first(ids__$1),variant_id,delta,prefix,add_wrapper_QMARK_,false,false),app.main.data.workspace.shapes.relocate_shapes(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.reverse(cljs.core.rest(ids__$1))),variant_id,(0)),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids__$1,(function (p1__51205_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__51205_SHARP_,new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),new cljs.core.Keyword(null,"left","left",-399115937)),new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122),new cljs.core.Keyword(null,"top","top",-1856271961)),new cljs.core.Keyword(null,"fixed-scroll","fixed-scroll",-83520691),false);
})),app.main.data.workspace.shapes.relocate_shapes(cljs.core.PersistentHashSet.createAsIfByAssoc([variant_id]),common_parent,index),app.main.data.workspace.transforms.update_dimensions.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [variant_id], null),new cljs.core.Keyword(null,"width","width",-384071477),(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect) + (60))),app.main.data.workspace.transforms.update_dimensions.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [variant_id], null),new cljs.core.Keyword(null,"height","height",1025178622),(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(rect) + (60))),app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"combine-as-variants",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),self__.trigger,new cljs.core.Keyword(null,"number-of-combined","number-of-combined",366676508),cljs.core.count(ids__$1)], null))),beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id))));
} else {
return null;
}
});
var redirect_to_page = (function (page_id__$1){
return beicon.v2.core.merge(beicon.v2.core.mapcat((function (___$2){
return combine(page_id__$1);
}),beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.take((1),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.pages","initialize-page","app.main.data.workspace.pages/initialize-page",-80938988)),stream)))),beicon.v2.core.of(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id__$1], 0))));
});
if(cljs.core.truth_((function (){var and__5023__auto__ = self__.page_id;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(self__.page_id,current_page);
} else {
return and__5023__auto__;
}
})())){
return redirect_to_page(self__.page_id);
} else {
return combine(current_page);
}
}));
}

return (new app.main.data.workspace.variants.combine_as_variants_51211(ids,p__51209,map__51210__$1,page_id,trigger,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.variants.combine_selected_as_variants = (function app$main$data$workspace$variants$combine_selected_as_variants(options){
if((typeof app.main.data.workspace.variants.combine_selected_as_variants_51226 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.combine_selected_as_variants_51226 = (function (options,meta51227){
this.options = options;
this.meta51227 = meta51227;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.combine_selected_as_variants_51226.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.combine_selected_as_variants_51226.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","combine-selected-as-variants","app.main.data.workspace.variants/combine-selected-as-variants",-1261075073);
}));

(app.main.data.workspace.variants.combine_selected_as_variants_51226.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51228,meta51227__$1){
var self__ = this;
var _51228__$1 = this;
return (new app.main.data.workspace.variants.combine_selected_as_variants_51226(self__.options,meta51227__$1));
}));

(app.main.data.workspace.variants.combine_selected_as_variants_51226.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51228){
var self__ = this;
var _51228__$1 = this;
return self__.meta51227;
}));

(app.main.data.workspace.variants.combine_selected_as_variants_51226.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.combine_selected_as_variants_51226.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.of(app.main.data.workspace.variants.combine_as_variants(selected,self__.options));
}));
}

return (new app.main.data.workspace.variants.combine_selected_as_variants_51226(options,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Switch the shape (that must be a variant copy head) for the closest one with the property value passed as parameter
 */
app.main.data.workspace.variants.variant_switch = (function app$main$data$workspace$variants$variant_switch(shape,p__51237){
var map__51238 = p__51237;
var map__51238__$1 = cljs.core.__destructure_map(map__51238);
var params = map__51238__$1;
var pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51238__$1,new cljs.core.Keyword(null,"pos","pos",-864607220));
var val = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51238__$1,new cljs.core.Keyword(null,"val","val",128701612));
if((typeof app.main.data.workspace.variants.variant_switch_51239 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.variant_switch_51239 = (function (shape,p__51237,map__51238,params,pos,val,meta51240){
this.shape = shape;
this.p__51237 = p__51237;
this.map__51238 = map__51238;
this.params = params;
this.pos = pos;
this.val = val;
this.meta51240 = meta51240;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.variant_switch_51239.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.variant_switch_51239.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","variant-switch","app.main.data.workspace.variants/variant-switch",-986252718);
}));

(app.main.data.workspace.variants.variant_switch_51239.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51241,meta51240__$1){
var self__ = this;
var _51241__$1 = this;
return (new app.main.data.workspace.variants.variant_switch_51239(self__.shape,self__.p__51237,self__.map__51238,self__.params,self__.pos,self__.val,meta51240__$1));
}));

(app.main.data.workspace.variants.variant_switch_51239.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51241){
var self__ = this;
var _51241__$1 = this;
return self__.meta51240;
}));

(app.main.data.workspace.variants.variant_switch_51239.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.variant_switch_51239.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var libraries = app.main.data.helpers.lookup_libraries(state);
var component_id = new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(self__.shape);
var component = app.common.types.file.get_component.cljs$core$IFn$_invoke$arity$variadic(libraries,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(self__.shape),component_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),false], 0));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(self__.val,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490)),self__.pos),new cljs.core.Keyword(null,"value","value",305978217)))){
var current_page_objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var variant_id = new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(component);
var component_file_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(self__.shape)),new cljs.core.Keyword(null,"data","data",-232669377));
var component_page_objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.get_page(component_file_data,new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component)),new cljs.core.Keyword(null,"objects","objects",2099713734));
var variant_comps = app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$3(component_file_data,component_page_objects,variant_id);
var target_props = cljs.core.update.cljs$core$IFn$_invoke$arity$5(new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(component),self__.pos,cljs.core.assoc,new cljs.core.Keyword(null,"value","value",305978217),self__.val);
var valid_comps = cljs.core.reverse(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51232_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__51232_SHARP_,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490)),self__.pos),new cljs.core.Keyword(null,"value","value",305978217)),self__.val);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__51231_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51231_SHARP_),component_id);
}),variant_comps)));
var nearest_comp = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,(function (p1__51233_SHARP_){
return app.common.types.variant.distance(target_props,new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(p1__51233_SHARP_));
}),valid_comps);
var shape_parents = app.common.files.helpers.get_parents_with_self(current_page_objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(self__.shape));
var nearest_comp_children = app.common.files.helpers.get_children_with_self(component_page_objects,new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(nearest_comp));
var comps_nesting_loop_QMARK_ = cljs.core.seq_QMARK_(app.common.files.helpers.components_nesting_loop_QMARK_.cljs$core$IFn$_invoke$arity$2(nearest_comp_children,shape_parents));
var map__51242 = cljs.core.meta(self__.params);
var map__51242__$1 = cljs.core.__destructure_map(map__51242);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__51242__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
if(cljs.core.truth_(nearest_comp)){
if(comps_nesting_loop_QMARK_){
(on_error.cljs$core$IFn$_invoke$arity$0 ? on_error.cljs$core$IFn$_invoke$arity$0() : on_error.call(null));

return beicon.v2.core.empty();
} else {
return beicon.v2.core.of(app.main.data.workspace.libraries.component_swap(self__.shape,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(self__.shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(nearest_comp),true),app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"variant-switch",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:design-tab"], null)));
}
} else {
return null;
}
} else {
return null;
}
}));
}

return (new app.main.data.workspace.variants.variant_switch_51239(shape,p__51237,map__51238__$1,params,pos,val,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Switch each shape (that must be a variant copy head) for the closest one with the property value passed as parameter
 */
app.main.data.workspace.variants.variants_switch = (function app$main$data$workspace$variants$variants_switch(p__51251){
var map__51252 = p__51251;
var map__51252__$1 = cljs.core.__destructure_map(map__51252);
var params = map__51252__$1;
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51252__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
if((typeof app.main.data.workspace.variants.variants_switch_51254 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.variants.variants_switch_51254 = (function (p__51251,map__51252,params,shapes,meta51255){
this.p__51251 = p__51251;
this.map__51252 = map__51252;
this.params = params;
this.shapes = shapes;
this.meta51255 = meta51255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.variants.variants_switch_51254.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.variants_switch_51254.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.variants","variants-switch","app.main.data.workspace.variants/variants-switch",-2126966764);
}));

(app.main.data.workspace.variants.variants_switch_51254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51256,meta51255__$1){
var self__ = this;
var _51256__$1 = this;
return (new app.main.data.workspace.variants.variants_switch_51254(self__.p__51251,self__.map__51252,self__.params,self__.shapes,meta51255__$1));
}));

(app.main.data.workspace.variants.variants_switch_51254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51256){
var self__ = this;
var _51256__$1 = this;
return self__.meta51255;
}));

(app.main.data.workspace.variants.variants_switch_51254.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.variants.variants_switch_51254.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),app.common.data.xf_COLON_map_id,self__.shapes);
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)),beicon.v2.core.map((function (p1__51250_SHARP_){
return app.main.data.workspace.variants.variant_switch(p1__51250_SHARP_,self__.params);
}),beicon.v2.core.from(self__.shapes)),beicon.v2.core.of(app.main.data.workspace.undo.commit_undo_transaction(undo_id),app.main.data.workspace.selection.select_shapes(ids)));
}));
}

return (new app.main.data.workspace.variants.variants_switch_51254(p__51251,map__51252__$1,params,shapes,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.variants.js.map
