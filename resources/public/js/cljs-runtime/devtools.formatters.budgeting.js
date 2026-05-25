import "./cljs_env.js";
import "./cljs.core.js";
import "./devtools.formatters.templating.js";
import "./devtools.formatters.state.js";
import "./devtools.formatters.helpers.js";
import "./devtools.formatters.markup.js";
goog.provide('devtools.formatters.budgeting');
devtools.formatters.budgeting.header_expander_depth_cost = (2);
devtools.formatters.budgeting.over_budget_values = (((typeof WeakSet !== 'undefined'))?(new WeakSet()):cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY));
devtools.formatters.budgeting.add_over_budget_value_BANG_ = (function devtools$formatters$budgeting$add_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__25133__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__25133__auto__["add"]).call(o__25133__auto__,value);
}
});
devtools.formatters.budgeting.delete_over_budget_value_BANG_ = (function devtools$formatters$budgeting$delete_over_budget_value_BANG_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.vreset_BANG_(devtools.formatters.budgeting.over_budget_values,cljs.core.disj.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value));
} else {
var o__25133__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__25133__auto__["delete"]).call(o__25133__auto__,value);
}
});
devtools.formatters.budgeting.has_over_budget_value_QMARK_ = (function devtools$formatters$budgeting$has_over_budget_value_QMARK_(value){
if(cljs.core.volatile_QMARK_(devtools.formatters.budgeting.over_budget_values)){
return cljs.core.contains_QMARK_(cljs.core.deref(devtools.formatters.budgeting.over_budget_values),value);
} else {
var o__25133__auto__ = devtools.formatters.budgeting.over_budget_values;
return (o__25133__auto__["has"]).call(o__25133__auto__,value);
}
});
devtools.formatters.budgeting.object_reference_QMARK_ = (function devtools$formatters$budgeting$object_reference_QMARK_(json_ml){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(json_ml),"object");
});
devtools.formatters.budgeting.determine_depth = (function devtools$formatters$budgeting$determine_depth(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
return (cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.max,cljs.core.map.cljs$core$IFn$_invoke$arity$2(devtools.formatters.budgeting.determine_depth,json_ml)) + (1));
} else {
return (0);
}
});
devtools.formatters.budgeting.has_any_object_reference_QMARK_ = (function devtools$formatters$budgeting$has_any_object_reference_QMARK_(json_ml){
if(cljs.core.array_QMARK_(json_ml)){
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
return true;
} else {
return cljs.core.some(devtools.formatters.budgeting.has_any_object_reference_QMARK_,json_ml);
}
} else {
return null;
}
});
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_ = (function devtools$formatters$budgeting$transfer_remaining_depth_budget_BANG_(object_reference,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

var data = cljs.core.second(object_reference);
var _ = ((cljs.core.object_QMARK_(data))?null:(function(){throw (new Error("Assert failed: (object? data)"))})());
var config = (data["config"]);
var G__27888 = data;
var target__25154__auto__ = G__27888;
if(cljs.core.truth_(target__25154__auto__)){
} else {
throw (new Error(["Assert failed: ",["unable to locate object path ",null," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__27888)].join(''),"\n","target__25154__auto__"].join('')));
}

(target__25154__auto__["config"] = devtools.formatters.state.set_depth_budget(config,depth_budget));

return G__27888;
});
devtools.formatters.budgeting.distribute_budget_BANG_ = (function devtools$formatters$budgeting$distribute_budget_BANG_(json_ml,depth_budget){
if((!((depth_budget < (0))))){
} else {
throw (new Error("Assert failed: (not (neg? depth-budget))"));
}

if(cljs.core.array_QMARK_(json_ml)){
var new_depth_budget_27910 = (depth_budget - (1));
if(devtools.formatters.budgeting.object_reference_QMARK_(json_ml)){
devtools.formatters.budgeting.transfer_remaining_depth_budget_BANG_(json_ml,new_depth_budget_27910);
} else {
var seq__27890_27911 = cljs.core.seq(json_ml);
var chunk__27891_27912 = null;
var count__27892_27913 = (0);
var i__27893_27914 = (0);
while(true){
if((i__27893_27914 < count__27892_27913)){
var item_27915 = chunk__27891_27912.cljs$core$IIndexed$_nth$arity$2(null,i__27893_27914);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_27915,new_depth_budget_27910) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_27915,new_depth_budget_27910));


var G__27917 = seq__27890_27911;
var G__27918 = chunk__27891_27912;
var G__27919 = count__27892_27913;
var G__27920 = (i__27893_27914 + (1));
seq__27890_27911 = G__27917;
chunk__27891_27912 = G__27918;
count__27892_27913 = G__27919;
i__27893_27914 = G__27920;
continue;
} else {
var temp__5825__auto___27922 = cljs.core.seq(seq__27890_27911);
if(temp__5825__auto___27922){
var seq__27890_27923__$1 = temp__5825__auto___27922;
if(cljs.core.chunked_seq_QMARK_(seq__27890_27923__$1)){
var c__5548__auto___27924 = cljs.core.chunk_first(seq__27890_27923__$1);
var G__27925 = cljs.core.chunk_rest(seq__27890_27923__$1);
var G__27926 = c__5548__auto___27924;
var G__27927 = cljs.core.count(c__5548__auto___27924);
var G__27928 = (0);
seq__27890_27911 = G__27925;
chunk__27891_27912 = G__27926;
count__27892_27913 = G__27927;
i__27893_27914 = G__27928;
continue;
} else {
var item_27929 = cljs.core.first(seq__27890_27923__$1);
(devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2 ? devtools.formatters.budgeting.distribute_budget_BANG_.cljs$core$IFn$_invoke$arity$2(item_27929,new_depth_budget_27910) : devtools.formatters.budgeting.distribute_budget_BANG_.call(null,item_27929,new_depth_budget_27910));


var G__27930 = cljs.core.next(seq__27890_27923__$1);
var G__27931 = null;
var G__27932 = (0);
var G__27933 = (0);
seq__27890_27911 = G__27930;
chunk__27891_27912 = G__27931;
count__27892_27913 = G__27932;
i__27893_27914 = G__27933;
continue;
}
} else {
}
}
break;
}
}
} else {
}

return json_ml;
});
devtools.formatters.budgeting.was_over_budget_QMARK__BANG_ = (function devtools$formatters$budgeting$was_over_budget_QMARK__BANG_(value){
if(cljs.core.truth_(devtools.formatters.budgeting.has_over_budget_value_QMARK_(value))){
devtools.formatters.budgeting.delete_over_budget_value_BANG_(value);

return true;
} else {
return null;
}
});
devtools.formatters.budgeting.alter_json_ml_to_fit_in_remaining_budget_BANG_ = (function devtools$formatters$budgeting$alter_json_ml_to_fit_in_remaining_budget_BANG_(value,json_ml){
var temp__5823__auto__ = devtools.formatters.helpers.pref(new cljs.core.Keyword(null,"initial-hierarchy-depth-budget","initial-hierarchy-depth-budget",-482715807));
if(cljs.core.truth_(temp__5823__auto__)){
var initial_hierarchy_depth_budget = temp__5823__auto__;
var remaining_depth_budget = (function (){var or__5025__auto__ = devtools.formatters.state.get_depth_budget();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (initial_hierarchy_depth_budget - (1));
}
})();
var depth = devtools.formatters.budgeting.determine_depth(json_ml);
var final_QMARK_ = cljs.core.not(devtools.formatters.budgeting.has_any_object_reference_QMARK_(json_ml));
var needed_depth = ((final_QMARK_)?depth:(depth + devtools.formatters.budgeting.header_expander_depth_cost));
if((remaining_depth_budget >= needed_depth)){
return devtools.formatters.budgeting.distribute_budget_BANG_(json_ml,remaining_depth_budget);
} else {
var expander_ml = devtools.formatters.templating.render_markup(devtools.formatters.markup._LT_header_expander_GT_(value));
devtools.formatters.budgeting.add_over_budget_value_BANG_(value);

return expander_ml;
}
} else {
return json_ml;
}
});

//# sourceMappingURL=devtools.formatters.budgeting.js.map
