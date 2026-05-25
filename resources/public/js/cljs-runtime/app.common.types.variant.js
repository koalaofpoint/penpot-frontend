import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.math.js";
import "./app.common.path_names.js";
import "./app.common.schema.js";
import "./cuerdas.core.js";
goog.provide('app.common.types.variant');
app.common.types.variant.schema_COLON_variant_property = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
/**
 * A component that is part of a variant set
 */
app.common.types.variant.schema_COLON_variant_component = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),app.common.types.variant.schema_COLON_variant_property], null)], null)], null);
/**
 * The root shape of the main instance of a variant component
 */
app.common.types.variant.schema_COLON_variant_shape = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant-name","variant-name",-1785573622),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant-error","variant-error",-42521934),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
/**
 * Is a board that contains all variant components of a variant set,
 *   for grouping them visually in the workspace
 */
app.common.types.variant.schema_COLON_variant_container = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-variant-container","is-variant-container",-1294533822),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
app.common.types.variant.valid_variant_component_QMARK_ = app.common.schema.check_fn(app.common.types.variant.schema_COLON_variant_component);
app.common.types.variant.property_prefix = "Property ";
app.common.types.variant.property_regex = cljs.core.re_pattern([app.common.types.variant.property_prefix,"(\\d+)"].join(''));
app.common.types.variant.property_max_length = (60);
app.common.types.variant.value_prefix = "Value ";
/**
 * Transform the properties into a name, with the values separated by comma
 */
app.common.types.variant.properties_to_name = (function app$common$types$variant$properties_to_name(properties){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cuerdas.core.empty_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),properties)));
});
/**
 * Returns the next property number, to avoid duplicates on the property names
 */
app.common.types.variant.next_property_number = (function app$common$types$variant$next_property_number(properties){
var numbers = cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__50797_SHARP_){
var G__50799 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__50797_SHARP_);
var G__50799__$1 = (((G__50799 == null))?null:cljs.core.re_find(app.common.types.variant.property_regex,G__50799));
var G__50799__$2 = (((G__50799__$1 == null))?null:cljs.core.second(G__50799__$1));
if((G__50799__$2 == null)){
return null;
} else {
return app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$1(G__50799__$2);
}
}),properties);
var max_num = ((cljs.core.seq(numbers))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,numbers):(0));
return ((function (){var x__5110__auto__ = max_num;
var y__5111__auto__ = cljs.core.count(properties);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})() + (1));
});
/**
 * Adds a new property with generated name and provided value to the existing props list.
 */
app.common.types.variant.add_new_prop = (function app$common$types$variant$add_new_prop(props,value){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),[app.common.types.variant.property_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.common.types.variant.next_property_number(props))].join(''),new cljs.core.Keyword(null,"value","value",305978217),value], null));
});
/**
 * Adds new properties with generated names and provided values to the existing props list.
 */
app.common.types.variant.add_new_props = (function app$common$types$variant$add_new_props(props,values){
var next_prop_num = app.common.types.variant.next_property_number(props);
var xf = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (i,v){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),[app.common.types.variant.property_prefix,cljs.core.str.cljs$core$IFn$_invoke$arity$1((next_prop_num + i))].join(''),new cljs.core.Keyword(null,"value","value",305978217),v], null);
}));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(props,xf,values);
});
/**
 * From a list of properties and a name with path, assign each token of the
 * path as value of a different property
 */
app.common.types.variant.path_to_properties = (function app$common$types$variant$path_to_properties(var_args){
var G__50819 = arguments.length;
switch (G__50819) {
case 2:
return app.common.types.variant.path_to_properties.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.variant.path_to_properties.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.variant.path_to_properties.cljs$core$IFn$_invoke$arity$2 = (function (path,properties){
return app.common.types.variant.path_to_properties.cljs$core$IFn$_invoke$arity$3(path,properties,(0));
}));

(app.common.types.variant.path_to_properties.cljs$core$IFn$_invoke$arity$3 = (function (path,properties,min_props){
var cpath = app.common.path_names.split_path(path);
var total_props = (function (){var x__5110__auto__ = cljs.core.count(cpath);
var y__5111__auto__ = min_props;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var assigned = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__50813_SHARP_,p2__50814_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50813_SHARP_,new cljs.core.Keyword(null,"value","value",305978217),cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cpath,p2__50814_SHARP_,""));
}),properties,cljs.core.range.cljs$core$IFn$_invoke$arity$0());
var cpath__$1 = cljs.core.take.cljs$core$IFn$_invoke$arity$2(total_props,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cpath,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("")));
var remaining = cljs.core.drop.cljs$core$IFn$_invoke$arity$2(cljs.core.count(properties),cpath__$1);
return app.common.types.variant.add_new_props(assigned,remaining);
}));

(app.common.types.variant.path_to_properties.cljs$lang$maxFixedArity = 3);

/**
 * Transforms a map of properties to a formula of properties omitting the empty ones
 */
app.common.types.variant.properties_map__GT_formula = (function app$common$types$variant$properties_map__GT_formula(properties){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__50823){
var map__50824 = p__50823;
var map__50824__$1 = cljs.core.__destructure_map(map__50824);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50824__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50824__$1,new cljs.core.Keyword(null,"value","value",305978217));
if((!(cuerdas.core.blank_QMARK_(value)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(name),"=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join('');
} else {
return null;
}
}),properties));
});
/**
 * Transforms a formula of properties to a map of properties
 */
app.common.types.variant.properties_formula__GT_map = (function app$common$types$variant$properties_formula__GT_map(s){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__50826){
var vec__50827 = p__50826;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50827,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50827,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"value","value",305978217),cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(v)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__50830){
var vec__50831 = p__50830;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50831,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50831,(1),null);
return (!(cuerdas.core.blank_QMARK_(v)));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50825_SHARP_){
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$3(p1__50825_SHARP_,"=",(2));
}),cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(s,","))));
});
/**
 * Checks if a formula is valid
 */
app.common.types.variant.valid_properties_formula_QMARK_ = (function app$common$types$variant$valid_properties_formula_QMARK_(s){
return cljs.core.every_QMARK_((function (p1__50835_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((2),cljs.core.count(p1__50835_SHARP_))) && ((((!(cuerdas.core.blank_QMARK_(cljs.core.first(p1__50835_SHARP_))))) && ((((cljs.core.count(cljs.core.first(p1__50835_SHARP_)) < app.common.types.variant.property_max_length)) && ((cljs.core.count(cljs.core.second(p1__50835_SHARP_)) < app.common.types.variant.property_max_length)))))));
}),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__50834_SHARP_){
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$3(p1__50834_SHARP_,"=",(2));
}),cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(s,",")));
});
/**
 * Compares two property maps to find which properties should be removed
 */
app.common.types.variant.find_properties_to_remove = (function app$common$types$variant$find_properties_to_remove(prev_props,upd_props){
var upd_names = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),upd_props));
return cljs.core.filterv((function (p1__50836_SHARP_){
return (!(cljs.core.contains_QMARK_(upd_names,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__50836_SHARP_))));
}),prev_props);
});
/**
 * Compares two property maps to find which properties should be updated
 */
app.common.types.variant.find_properties_to_update = (function app$common$types$variant$find_properties_to_update(prev_props,upd_props){
return cljs.core.filterv((function (p1__50837_SHARP_){
return cljs.core.some((function (prop){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__50837_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prop))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__50837_SHARP_),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prop))));
}),prev_props);
}),upd_props);
});
/**
 * Compares two property maps to find which properties should be added
 */
app.common.types.variant.find_properties_to_add = (function app$common$types$variant$find_properties_to_add(prev_props,upd_props){
var prev_names = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),prev_props));
return cljs.core.filterv((function (p1__50838_SHARP_){
return (!(cljs.core.contains_QMARK_(prev_names,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__50838_SHARP_))));
}),upd_props);
});
/**
 * Extract the number in parentheses from an item, if present, and return both the base name and the number
 */
app.common.types.variant.split_base_name_and_number = (function app$common$types$variant$split_base_name_and_number(item){
var pattern_num_parens = /\(\d+\)$/;
var pattern_num = /\d+/;
var base = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(cuerdas.core.replace(item,pattern_num_parens,""));
var num = (function (){var G__50839 = item;
var G__50839__$1 = (((G__50839 == null))?null:cljs.core.re_find(pattern_num_parens,G__50839));
var G__50839__$2 = (((G__50839__$1 == null))?null:cljs.core.re_find(pattern_num,G__50839__$1));
if((G__50839__$2 == null)){
return null;
} else {
return app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$1(G__50839__$2);
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [base,app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(num,(0))], null);
});
/**
 * Return a map with a set of numbers associated to each base name
 */
app.common.types.variant.group_numbers_by_base_name = (function app$common$types$variant$group_numbers_by_base_name(items){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,item){
var vec__50840 = app.common.types.variant.split_base_name_and_number(item);
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50840,(0),null);
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50840,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,base,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),num);
}),cljs.core.PersistentArrayMap.EMPTY,items);
});
/**
 * Add, keep or update a number in parentheses for a given item, if necessary, depending on the items
 * already present in a list, to avoid repetitions
 */
app.common.types.variant.update_number_in_repeated_item = (function app$common$types$variant$update_number_in_repeated_item(items,item){
var names = app.common.types.variant.group_numbers_by_base_name(items);
var vec__50843 = app.common.types.variant.split_base_name_and_number(item);
var base = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50843,(0),null);
var num = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50843,(1),null);
var nums_taken = cljs.core.get.cljs$core$IFn$_invoke$arity$3(names,base,cljs.core.PersistentHashSet.EMPTY);
var n = num;
while(true){
if(cljs.core.truth_((nums_taken.cljs$core$IFn$_invoke$arity$1 ? nums_taken.cljs$core$IFn$_invoke$arity$1(n) : nums_taken.call(null,n)))){
var G__50881 = (n + (1));
n = G__50881;
continue;
} else {
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(base),(((n > (0)))?[" (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(n),")"].join(''):null)].join('');
}
break;
}
});
/**
 * Add, keep or update a number for each prop name depending on the previous ones
 */
app.common.types.variant.update_number_in_repeated_prop_names = (function app$common$types$variant$update_number_in_repeated_prop_names(props){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,prop){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),app.common.types.variant.update_number_in_repeated_item(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),acc),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prop)),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prop)], null));
}),cljs.core.PersistentVector.EMPTY,props);
});
/**
 * Finds the index of a name in a property map
 */
app.common.types.variant.find_index_for_property_name = (function app$common$types$variant$find_index_for_property_name(props,name){
return cljs.core.some((function (p__50846){
var vec__50847 = p__50846;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50847,(0),null);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50847,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prop),name)){
return idx;
} else {
return null;
}
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,props));
});
/**
 * Removes the given prefix (with or without a trailing ' / ') from the beginning of the name
 */
app.common.types.variant.remove_prefix = (function app$common$types$variant$remove_prefix(name,prefix){
var long_name = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix)," / "].join('');
if(cuerdas.core.starts_with_QMARK_(name,long_name)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,((long_name).length));
} else {
if(cuerdas.core.starts_with_QMARK_(name,prefix)){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(name,cljs.core.count(prefix));
} else {
return name;

}
}
});
app.common.types.variant.xf_COLON_map_name = cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177));
app.common.types.variant.matching_indices = (function app$common$types$variant$matching_indices(props1,props2){
var names_in_p2 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,app.common.types.variant.xf_COLON_map_name,props2);
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (index,p__50850){
var map__50851 = p__50850;
var map__50851__$1 = cljs.core.__destructure_map(map__50851);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50851__$1,new cljs.core.Keyword(null,"name","name",1843675177));
if(cljs.core.contains_QMARK_(names_in_p2,name)){
return index;
} else {
return null;
}
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.some_QMARK_));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,xform,props1);
});
/**
 * Returns the index of the first item in props with the given name, or nil if not found.
 */
app.common.types.variant.find_index_by_name = (function app$common$types$variant$find_index_by_name(name,props){
return cljs.core.some((function (p__50852){
var vec__50853 = p__50852;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50853,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50853,(1),null);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),name)){
return idx;
} else {
return null;
}
}),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,props));
});
/**
 * Returns the first non-negative integer not present in the used-pos set.
 */
app.common.types.variant.next_valid_position = (function app$common$types$variant$next_valid_position(used_pos){
var p = (0);
while(true){
if(cljs.core.contains_QMARK_(used_pos,p)){
var G__50886 = (p + (1));
p = G__50886;
continue;
} else {
return p;
}
break;
}
});
/**
 * Returns the index of the property with the given name in `props`,
 *   or the next available index not in `used-pos` if not found.
 */
app.common.types.variant.find_position = (function app$common$types$variant$find_position(name,props,used_pos){
var or__5025__auto__ = app.common.types.variant.find_index_by_name(name,props);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.variant.next_valid_position(used_pos);
}
});
/**
 * Merges props2 into props1 with the following rules:
 *  - For each property p2 in props2:
 *    - Skip it if its value is empty.
 *    - If props1 contains a property with the same name, update its value with that of p2.
 *    - Otherwise, assign p2's value to the first unused property in props1. A property is considered used if:
 *      - Its name exists in both props1 and props2, or
 *      - Its value has already been updated during the merge.
 *    - If no unused properties are available in props1, append a new property with a default name and p2's value.
 */
app.common.types.variant.merge_properties = (function app$common$types$variant$merge_properties(props1,props2){
var props2__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50856_SHARP_){
return cuerdas.core.empty_QMARK_(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__50856_SHARP_));
}),props2);
return new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p__50857,prop){
var map__50858 = p__50857;
var map__50858__$1 = cljs.core.__destructure_map(map__50858);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50858__$1,new cljs.core.Keyword(null,"props","props",453281727));
var used_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50858__$1,new cljs.core.Keyword(null,"used-pos","used-pos",614992));
var pos = app.common.types.variant.find_position(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prop),props,used_pos);
var used_pos__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(used_pos,pos);
if((pos < cljs.core.count(props))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),cljs.core.assoc_in(cljs.core.vec(props),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [pos,new cljs.core.Keyword(null,"value","value",305978217)], null),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prop)),new cljs.core.Keyword(null,"used-pos","used-pos",614992),used_pos__$1], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),app.common.types.variant.add_new_prop(props,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prop)),new cljs.core.Keyword(null,"used-pos","used-pos",614992),used_pos__$1], null);
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"props","props",453281727),cljs.core.vec(props1),new cljs.core.Keyword(null,"used-pos","used-pos",614992),app.common.types.variant.matching_indices(props1,props2__$1)], null),props2__$1));
});
/**
 * Compares vectors of properties keeping the value if it is the same for all
 * or setting a custom value where their values do not coincide
 */
app.common.types.variant.compare_properties = (function app$common$types$variant$compare_properties(var_args){
var G__50860 = arguments.length;
switch (G__50860) {
case 1:
return app.common.types.variant.compare_properties.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.types.variant.compare_properties.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.variant.compare_properties.cljs$core$IFn$_invoke$arity$1 = (function (props_list){
return app.common.types.variant.compare_properties.cljs$core$IFn$_invoke$arity$2(props_list,null);
}));

(app.common.types.variant.compare_properties.cljs$core$IFn$_invoke$arity$2 = (function (props_list,distinct_mark){
var grouped = cljs.core.group_by(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,props_list));
var check_values = (function (values){
var vals = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),values);
if(cljs.core.truth_(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,vals))){
return cljs.core.first(vals);
} else {
return distinct_mark;
}
});
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__50861){
var vec__50862 = p__50861;
var name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50862,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50862,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"value","value",305978217),check_values(values)], null);
}),grouped);
}));

(app.common.types.variant.compare_properties.cljs$lang$maxFixedArity = 2);

/**
 * Determines if all elements belong to the same variant
 */
app.common.types.variant.same_variant_QMARK_ = (function app$common$types$variant$same_variant_QMARK_(components){
var variant_ids = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),components));
var not_blank_QMARK_ = cljs.core.complement(cuerdas.core.blank_QMARK_);
var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(variant_ids));
if(and__5023__auto__){
return not_blank_QMARK_(cljs.core.first(variant_ids));
} else {
return and__5023__auto__;
}
});
/**
 * Computes a weighted distance between two property lists `props1` and `props2`.
 * Latter properties weight less that previous ones
 */
app.common.types.variant.distance = (function app$common$types$variant$distance(props1,props2){
var total_num_props = cljs.core.count(props1);
var xform = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (idx,p__50865){
var vec__50866 = p__50865;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50866,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50866,(1),null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1,p2)){
return app.common.math.pow((2),(total_num_props - idx));
} else {
return (0);
}
}));
return cljs.core.transduce.cljs$core$IFn$_invoke$arity$3(xform,cljs.core._PLUS_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,props1,props2));
});
/**
 * Transforms a variant-name (its properties values) into a standard name:
 * the real name of the shape joined by the properties values separated by '/'
 */
app.common.types.variant.variant_name_to_name = (function app$common$types$variant$variant_name_to_name(variant){
return app.common.path_names.merge_path_item(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(variant),cuerdas.core.replace(new cljs.core.Keyword(null,"variant-name","variant-name",-1785573622).cljs$core$IFn$_invoke$arity$1(variant),/, /," / "));
});
app.common.types.variant.boolean_pairs = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["on","off"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["yes","no"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["true","false"], null)], null);
/**
 * Given a vector, return a map that contains the boolean equivalency if the values match
 * with any of the boolean pairs. Returns nil if none match.
 */
app.common.types.variant.find_boolean_pair = (function app$common$types$variant$find_boolean_pair(p__50869){
var vec__50870 = p__50869;
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50870,(0),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50870,(1),null);
var v = vec__50870;
var a_SINGLEQUOTE_ = cuerdas.core.lower(cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(a));
var b_SINGLEQUOTE_ = cuerdas.core.lower(cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(b));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(v),(2))){
return cljs.core.some((function (p__50873){
var vec__50874 = p__50873;
var t = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50874,(0),null);
var f = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50874,(1),null);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a_SINGLEQUOTE_,t)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b_SINGLEQUOTE_,f)))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([a,true,b,false]);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(b_SINGLEQUOTE_,t)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a_SINGLEQUOTE_,f)))){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([b,true,a,false]);
} else {
return null;

}
}
}),app.common.types.variant.boolean_pairs);
} else {
return null;
}
});

//# sourceMappingURL=app.common.types.variant.js.map
