import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.math.js";
import "./app.common.schema.js";
import "./app.main.constants.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.controls.select.js";
import "./app.main.ui.ds.controls.shared.options_dropdown.js";
import "./app.main.ui.ds.controls.utilities.input_field.js";
import "./app.main.ui.ds.controls.utilities.token_field.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.formats.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./app.util.object.js";
import "./app.util.simple_math.js";
import "./app.util.timers.js";
import "./cuerdas.core.js";
import "./goog.events.events.js";
import "./rumext.v2.js";
import "./rumext.v2.util.js";
goog.provide('app.main.ui.ds.controls.numeric_input');
/**
 * Increments `val` by `step`, clamped to [`min-val`, `max-val`].
 */
app.main.ui.ds.controls.numeric_input.increment = (function app$main$ui$ds$controls$numeric_input$increment(val,step,min_val,max_val){
return app.common.math.clamp((val + step),min_val,max_val);
});
/**
 * Decrements `val` by `step`, clamped to [`min-val`, `max-val`].
 */
app.main.ui.ds.controls.numeric_input.decrement = (function app$main$ui$ds$controls$numeric_input$decrement(val,step,min_val,max_val){
return app.common.math.clamp((val - step),min_val,max_val);
});
/**
 * Parses and clamps `raw-value` as a number within bounds;
 * returns nil if invalid or empty.
 */
app.main.ui.ds.controls.numeric_input.parse_value = (function app$main$ui$ds$controls$numeric_input$parse_value(raw_value,last_value,min_value,max_value,nillable){
var new_value = app.util.simple_math.expr_eval(cuerdas.core.strip_suffix(cljs.core.str.cljs$core$IFn$_invoke$arity$1(raw_value),"."),app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(last_value));
if(cljs.core.truth_((function (){var and__5023__auto__ = nillable;
if(cljs.core.truth_(and__5023__auto__)){
return (raw_value == null);
} else {
return and__5023__auto__;
}
})())){
return null;
} else {
if(cljs.core.truth_(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(new_value))){
var G__78394 = (function (){var G__78395 = Math.min(Math.max(new_value,(app.common.schema.min_safe_int / (2))),(app.common.schema.max_safe_int / (2)));
if(cljs.core.truth_(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(min_value))){
return Math.max(G__78395,min_value);
} else {
return G__78395;
}
})();
if(cljs.core.truth_(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(max_value))){
return Math.min(G__78394,max_value);
} else {
return G__78394;
}
} else {
return null;

}
}
});
app.main.ui.ds.controls.numeric_input.get_option_by_name = (function app$main$ui$ds$controls$numeric_input$get_option_by_name(options,name){
var options__$1 = ((cljs.core.delay_QMARK_(options))?cljs.core.deref(options):options);
return app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__78398_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__78398_SHARP_,new cljs.core.Keyword(null,"name","name",1843675177)));
}),options__$1);
});
app.main.ui.ds.controls.numeric_input.get_token_op = (function app$main$ui$ds$controls$numeric_input$get_token_op(tokens,name){
var tokens__$1 = ((cljs.core.delay_QMARK_(tokens))?cljs.core.deref(tokens):tokens);
var xform = cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__78399_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__78399_SHARP_),name);
}));
return cljs.core.reduce_kv((function (result,_,tokens__$2){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(result,xform,tokens__$2);
}),cljs.core.PersistentVector.EMPTY,tokens__$1);
});
app.main.ui.ds.controls.numeric_input.clean_token_name = (function app$main$ui$ds$controls$numeric_input$clean_token_name(s){
var G__78400 = s;
var G__78400__$1 = (((G__78400 == null))?null:cuerdas.core.replace(G__78400,/^\{/,""));
if((G__78400__$1 == null)){
return null;
} else {
return cuerdas.core.replace(G__78400__$1,/\}$/,"");
}
});
app.main.ui.ds.controls.numeric_input.token__GT_dropdown_option = (function app$main$ui$ds$controls$numeric_input$token__GT_dropdown_option(token){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.Keyword(null,"id","id",-1388402092))),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626),cljs.core.get.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626)),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.Keyword(null,"name","name",1843675177))], null);
});
app.main.ui.ds.controls.numeric_input.generate_dropdown_options = (function app$main$ui$ds$controls$numeric_input$generate_dropdown_options(tokens,no_sets){
if(cljs.core.empty_QMARK_(tokens)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"empty","empty",767870958),new cljs.core.Keyword(null,"label","label",1718410804),(cljs.core.truth_(no_sets)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.inputs.numeric-input.no-applicable-tokens"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.inputs.numeric-input.no-matches"))], null)], null);
} else {
return cljs.core.not_empty(cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,cljs.core.interpose.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"separator","separator",-1628749125),true,new cljs.core.Keyword(null,"id","id",-1388402092),"separator",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"separator","separator",-1628749125)], null)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__78401){
var vec__78402 = p__78401;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78402,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78402,(1),null);
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"group","group",582596132),true,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"id","id",-1388402092),""+"group-"+(cljs.core.name(type) ?? ""),new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.name(type)], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.ui.ds.controls.numeric_input.token__GT_dropdown_option,items));
}),tokens)))));
}
});
app.main.ui.ds.controls.numeric_input.extract_partial_brace_text = (function app$main$ui$ds$controls$numeric_input$extract_partial_brace_text(s){
var temp__5825__auto__ = cuerdas.core.last_index_of.cljs$core$IFn$_invoke$arity$2(s,"{");
if(cljs.core.truth_(temp__5825__auto__)){
var start = temp__5825__auto__;
return cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(start + (1)));
} else {
return null;
}
});
app.main.ui.ds.controls.numeric_input.filter_token_groups_by_name = (function app$main$ui$ds$controls$numeric_input$filter_token_groups_by_name(tokens,filter_text){
var lc_filter = cuerdas.core.lower(filter_text);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__78406){
var vec__78407 = p__78406;
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78407,(0),null);
var tokens__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78407,(1),null);
var filtered = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__78405_SHARP_){
return cuerdas.core.includes_QMARK_(cuerdas.core.lower(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__78405_SHARP_)),lc_filter);
}),tokens__$1);
if(cljs.core.seq(filtered)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,filtered], null);
} else {
return null;
}
})),tokens);
});
app.main.ui.ds.controls.numeric_input.focusable_option_QMARK_ = (function app$main$ui$ds$controls$numeric_input$focusable_option_QMARK_(option){
var and__5023__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(option);
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(option))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(option))));
} else {
return and__5023__auto__;
}
});
app.main.ui.ds.controls.numeric_input.first_focusable_id = (function app$main$ui$ds$controls$numeric_input$first_focusable_id(options){
return cljs.core.some((function (p1__78410_SHARP_){
if(cljs.core.truth_(app.main.ui.ds.controls.numeric_input.focusable_option_QMARK_(p1__78410_SHARP_))){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__78410_SHARP_);
} else {
return null;
}
}),options);
});
app.main.ui.ds.controls.numeric_input.next_focus_index = (function app$main$ui$ds$controls$numeric_input$next_focus_index(options,focused_id,direction){
var options__$1 = ((cljs.core.delay_QMARK_(options))?cljs.core.deref(options):options);
var len = cljs.core.count(options__$1);
var start_index = (function (){var or__5025__auto__ = app.common.data.index_of_pred(options__$1,(function (p1__78411_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(focused_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__78411_SHARP_));
}));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (-1);
}
})();
var indices = (function (){var G__78412 = direction;
var G__78412__$1 = (((G__78412 instanceof cljs.core.Keyword))?G__78412.fqn:null);
switch (G__78412__$1) {
case "down":
return cljs.core.range.cljs$core$IFn$_invoke$arity$2((start_index + (1)),(len + start_index));

break;
case "up":
return cljs.core.range.cljs$core$IFn$_invoke$arity$3((start_index - (1)),(start_index - len),(-1));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__78412__$1)].join('')));

}
})();
return cljs.core.some((function (i){
var j = cljs.core.mod(i,len);
if(cljs.core.truth_(app.main.ui.ds.controls.numeric_input.focusable_option_QMARK_(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(options__$1,j)))){
return j;
} else {
return null;
}
}),indices);
});
/**
 * Sorts both the groups and the tokens inside them alphabetically.
 * 
 * Input:
 * A map where:
 * - keys are groups (keywords or strings, e.g. :dimensions, :colors)
 * - values are vectors of token maps, each containing at least a :name key
 * 
 * Example input:
 * {:dimensions [{:name "tres"} {:name "quini"}]
 *  :colors    [{:name "azul"} {:name "rojo"}]}
 * 
 * Output:
 * A sorted map where:
 * - groups are ordered alphabetically by key
 * - tokens inside each group are sorted alphabetically by :name
 * 
 * Example output:
 * {:colors    [{:name "azul"} {:name "rojo"}]
 *  :dimensions [{:name "quini"} {:name "tres"}]}
 */
app.main.ui.ds.controls.numeric_input.sort_groups_and_tokens = (function app$main$ui$ds$controls$numeric_input$sort_groups_and_tokens(groups__GT_tokens){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),(function (){var iter__5503__auto__ = (function app$main$ui$ds$controls$numeric_input$sort_groups_and_tokens_$_iter__78413(s__78414){
return (new cljs.core.LazySeq(null,(function (){
var s__78414__$1 = s__78414;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__78414__$1);
if(temp__5825__auto__){
var s__78414__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__78414__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__78414__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__78416 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__78415 = (0);
while(true){
if((i__78415 < size__5502__auto__)){
var vec__78417 = cljs.core._nth(c__5501__auto__,i__78415);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78417,(0),null);
var tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78417,(1),null);
cljs.core.chunk_append(b__78416,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),tokens)], null));

var G__78458 = (i__78415 + (1));
i__78415 = G__78458;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__78416),app$main$ui$ds$controls$numeric_input$sort_groups_and_tokens_$_iter__78413(cljs.core.chunk_rest(s__78414__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__78416),null);
}
} else {
var vec__78420 = cljs.core.first(s__78414__$2);
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78420,(0),null);
var tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__78420,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),tokens)], null),app$main$ui$ds$controls$numeric_input$sort_groups_and_tokens_$_iter__78413(cljs.core.rest(s__78414__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(groups__GT_tokens);
})());
});
app.main.ui.ds.controls.numeric_input.schema_COLON_icon = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (p1__78423_SHARP_){
return cljs.core.contains_QMARK_(app.main.ui.ds.foundations.assets.icon.icon_list,p1__78423_SHARP_);
})], null)], null);
app.main.ui.ds.controls.numeric_input.schema_COLON_numeric_input = new cljs.core.PersistentVector(null, 24, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"inner-class","inner-class",-105897732),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"multiple","multiple",1244445549)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-icon","text-icon",1465142034),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),app.main.ui.ds.controls.numeric_input.schema_COLON_icon], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"float","float",-1732389368)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"float","float",-1732389368)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"max-length","max-length",-254826109),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"step","step",1288888124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,"float","float",-1732389368)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-selected-on-focus","is-selected-on-focus",1677176120),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"nillable","nillable",-1886614248),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"applied-token","applied-token",-1808287379),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"multiple","multiple",1244445549)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"empty-to-end","empty-to-end",1724235985),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-blur","on-blur",814300747),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-detach","on-detach",-2045841864),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"property","property",-1114278232),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"align","align",1964212802),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"right","right",-452581833)], null)], null)], null)], null);
app.main.ui.ds.controls.numeric_input.numeric_input_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.controls.numeric_input.schema_COLON_numeric_input);

app.main.ui.ds.controls.numeric_input.numeric_input_STAR_ = (function app$main$ui$ds$controls$numeric_input$numeric_input_STAR_(props_78424){
// ===== start props checking =====;

var res__47117__auto___78479 = app.main.ui.ds.controls.numeric_input.numeric_input_STAR__validator(props_78424);
if((!((res__47117__auto___78479 == null)))){
var items__47118__auto___78480 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___78479);
var msg__47122__auto___78481 = ["invalid props on component numeric-input*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___78480),"\n"].join('');
throw (new Error(msg__47122__auto___78481));
} else {
}

// ===== end props checking =====;

var on_change = undefined;
var step = undefined;
var inner_class = undefined;
var align = undefined;
var min = undefined;
var max_length = undefined;
var placeholder = undefined;
var disabled = undefined;
var ref = undefined;
var property = undefined;
var default$ = undefined;
var on_focus = undefined;
var value = undefined;
var name = undefined;
var on_blur = undefined;
var icon = undefined;
var applied_token = undefined;
var empty_to_end = undefined;
var text_icon = undefined;
var id = undefined;
var class$ = undefined;
var max = undefined;
var on_detach = undefined;
var tokens = undefined;
var nillable = undefined;
var is_selected_on_focus = undefined;
var props = undefined;
var {"onChange": on_change, "step": step, "innerClass": inner_class, "align": align, "min": min, "maxLength": max_length, "placeholder": placeholder, "disabled": disabled, "ref": ref, "property": property, "default": default$, "onFocus": on_focus, "value": value, "name": name, "onBlur": on_blur, "icon": icon, "appliedToken": applied_token, "emptyToEnd": empty_to_end, "textIcon": text_icon, "id": id, "className": class$, "max": max, "onDetach": on_detach, "tokens": tokens, "nillable": nillable, "isSelectedOnFocus": is_selected_on_focus, ...props} = props_78424;

var tokens__$1 = ((cljs.core.object_QMARK_(tokens))?rumext.v2.util.bean(tokens):tokens);
var value__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),applied_token))?new cljs.core.Keyword(null,"multiple","multiple",1244445549):value);
var is_multiple_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),value__$1);
var value__$2 = ((is_multiple_QMARK_)?null:(cljs.core.truth_((function (){var and__5023__auto__ = nillable;
if(cljs.core.truth_(and__5023__auto__)){
return (value__$1 == null);
} else {
return and__5023__auto__;
}
})())?null:app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(value__$1,default$)
));
var nillable__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(nillable,false);
var disabled__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(disabled,false);
var select_on_focus = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(is_selected_on_focus,true);
var default$__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(default$),rumext.v2.adapt(nillable__$1)],(function (){
return app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(default$,(cljs.core.truth_(nillable__$1)?null:(0)));
}));
var step__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(step)],(function (){
return app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(step,(1));
}));
var min__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(min)],(function (){
return app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(min,app.common.schema.min_safe_int);
}));
var max__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(max)],(function (){
return app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(max,app.common.schema.max_safe_int);
}));
var max_length__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(max_length,app.main.constants.max_input_length);
var empty_to_end__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(empty_to_end,false);
var internal_id = rumext.v2.use_id();
var id__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(id,internal_id);
var listbox_id = rumext.v2.use_id();
var align__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(align,new cljs.core.Keyword(null,"left","left",-399115937));
var is_open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var is_open = cljs.core.deref(is_open_STAR_);
var token_applied_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(applied_token);
var token_applied = cljs.core.deref(token_applied_STAR_);
var focused_id_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var focused_id = cljs.core.deref(focused_id_STAR_);
var filter_id_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("");
var filter_id = cljs.core.deref(filter_id_STAR_);
var raw_value_STAR_ = rumext.v2.use_ref(null);
var last_value_STAR_ = rumext.v2.use_ref(null);
var wrapper_ref = rumext.v2.use_ref(null);
var nodes_ref = rumext.v2.use_ref(null);
var options_ref = rumext.v2.use_ref(null);
var token_wrapper_ref = rumext.v2.use_ref(null);
var internal_ref = rumext.v2.use_ref(null);
var ref__$1 = (function (){var or__5025__auto__ = ref;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return internal_ref;
}
})();
var dirty_ref = rumext.v2.use_ref(false);
var open_dropdown_ref = rumext.v2.use_ref(null);
var token_detach_btn_ref = rumext.v2.use_ref(null);
var dropdown_options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens__$1),rumext.v2.adapt(filter_id)],(function (){
return (new cljs.core.Delay((function (){
var tokens__$2 = ((cljs.core.delay_QMARK_(tokens__$1))?cljs.core.deref(tokens__$1):tokens__$1);
var sorted_tokens = app.main.ui.ds.controls.numeric_input.sort_groups_and_tokens(tokens__$2);
var partial = app.main.ui.ds.controls.numeric_input.extract_partial_brace_text(filter_id);
var options = ((cljs.core.seq(partial))?app.main.ui.ds.controls.numeric_input.filter_token_groups_by_name(sorted_tokens,partial):sorted_tokens);
var no_sets_QMARK_ = (sorted_tokens == null);
return app.main.ui.ds.controls.numeric_input.generate_dropdown_options(options,no_sets_QMARK_);
}),null));
}));
var selected_id_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
if(cljs.core.truth_(applied_token)){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(app.main.ui.ds.controls.numeric_input.get_option_by_name(dropdown_options,applied_token));
} else {
return null;
}
}));
var selected_id = cljs.core.deref(selected_id_STAR_);
var set_option_ref = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (node){
var state = rumext.v2.ref_val(nodes_ref);
var state__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(state,({}));
var id__$2 = app.util.dom.get_data(node,"id");
var state__$2 = app.util.object.set_BANG_(state__$1,id__$2,node);
rumext.v2.set_ref_val_BANG_(nodes_ref,state__$2);

return (function (){
var state__$3 = rumext.v2.ref_val(nodes_ref);
var state__$4 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(state__$3,({}));
var id__$3 = app.util.dom.get_data(node,"id");
var state__$5 = app.util.object.unset_BANG_(state__$4,id__$3);
return rumext.v2.set_ref_val_BANG_(nodes_ref,state__$5);
});
}));
var update_input = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (new_value){
var temp__5825__auto__ = rumext.v2.ref_val(ref__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
return app.util.dom.set_value_BANG_(node,new_value);
} else {
return null;
}
}));
var apply_value = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change),rumext.v2.adapt(update_input),rumext.v2.adapt(value__$2),rumext.v2.adapt(nillable__$1),rumext.v2.adapt(min__$1),rumext.v2.adapt(max__$1)],(function (raw_value){
var temp__5823__auto__ = app.main.ui.ds.controls.numeric_input.parse_value(raw_value,rumext.v2.ref_val(last_value_STAR_),min__$1,max__$1,nillable__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var parsed = temp__5823__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parsed,rumext.v2.ref_val(last_value_STAR_))){
return null;
} else {
rumext.v2.set_ref_val_BANG_(last_value_STAR_,parsed);

cljs.core.reset_BANG_(token_applied_STAR_,null);

if(cljs.core.fn_QMARK_(on_change)){
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(parsed) : on_change.call(null,parsed));
} else {
}

rumext.v2.set_ref_val_BANG_(raw_value_STAR_,app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(parsed));

var G__78427 = app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(parsed);
return (update_input.cljs$core$IFn$_invoke$arity$1 ? update_input.cljs$core$IFn$_invoke$arity$1(G__78427) : update_input.call(null,G__78427));
}
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = nillable__$1;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.empty_QMARK_(raw_value);
} else {
return and__5023__auto__;
}
})())){
rumext.v2.set_ref_val_BANG_(last_value_STAR_,null);

rumext.v2.set_ref_val_BANG_(raw_value_STAR_,"");

cljs.core.reset_BANG_(token_applied_STAR_,null);

(update_input.cljs$core$IFn$_invoke$arity$1 ? update_input.cljs$core$IFn$_invoke$arity$1("") : update_input.call(null,""));

if(cljs.core.fn_QMARK_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(null) : on_change.call(null,null));
} else {
return null;
}
} else {
var fallback_value = (function (){var or__5025__auto__ = rumext.v2.ref_val(last_value_STAR_);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$__$1;
}
})();
rumext.v2.set_ref_val_BANG_(raw_value_STAR_,fallback_value);

rumext.v2.set_ref_val_BANG_(last_value_STAR_,fallback_value);

cljs.core.reset_BANG_(token_applied_STAR_,null);

var G__78428_78568 = app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(fallback_value);
(update_input.cljs$core$IFn$_invoke$arity$1 ? update_input.cljs$core$IFn$_invoke$arity$1(G__78428_78568) : update_input.call(null,G__78428_78568));

if(((cljs.core.fn_QMARK_(on_change)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fallback_value,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$2))))){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(fallback_value) : on_change.call(null,fallback_value));
} else {
return null;
}
}
}
}));
var apply_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(min__$1),rumext.v2.adapt(max__$1),rumext.v2.adapt(nillable__$1),rumext.v2.adapt(on_change),rumext.v2.adapt(tokens__$1)],(function (value__$3,name__$1){
var parsed = app.main.ui.ds.controls.numeric_input.parse_value(value__$3,rumext.v2.ref_val(last_value_STAR_),min__$1,max__$1,nillable__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parsed,rumext.v2.ref_val(last_value_STAR_))){
return null;
} else {
rumext.v2.set_ref_val_BANG_(last_value_STAR_,parsed);

if(cljs.core.fn_QMARK_(on_change)){
var G__78429 = app.main.ui.ds.controls.numeric_input.get_token_op(tokens__$1,name__$1);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__78429) : on_change.call(null,G__78429));
} else {
return null;
}
}
}));
var store_raw_value = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var text = app.util.dom.get_target_val(event);
rumext.v2.set_ref_val_BANG_(raw_value_STAR_,text);

return cljs.core.reset_BANG_(filter_id_STAR_,text);
}));
var on_token_apply = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(apply_token)],(function (id__$2,value__$3,name__$1){
cljs.core.reset_BANG_(selected_id_STAR_,id__$2);

cljs.core.reset_BANG_(focused_id_STAR_,null);

cljs.core.reset_BANG_(is_open_STAR_,false);

cljs.core.reset_BANG_(token_applied_STAR_,name__$1);

(apply_token.cljs$core$IFn$_invoke$arity$2 ? apply_token.cljs$core$IFn$_invoke$arity$2(value__$3,name__$1) : apply_token.call(null,value__$3,name__$1));

return app.util.timers.schedule_on_idle.cljs$core$IFn$_invoke$arity$1((function (){
if(cljs.core.truth_(token_wrapper_ref)){
return app.util.dom.focus_BANG_(rumext.v2.ref_val(token_wrapper_ref));
} else {
return null;
}
}));
}));
var on_option_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_token_apply)],(function (event){
var node = app.util.dom.get_current_target(event);
var id__$2 = app.util.dom.get_data(node,"id");
var options = rumext.v2.ref_val(options_ref);
var options__$1 = ((cljs.core.delay_QMARK_(options))?cljs.core.deref(options):options);
var option = app.main.ui.ds.controls.select.get_option(options__$1,id__$2);
var value__$3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626));
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.Keyword(null,"name","name",1843675177));
(on_token_apply.cljs$core$IFn$_invoke$arity$3 ? on_token_apply.cljs$core$IFn$_invoke$arity$3(id__$2,value__$3,name__$1) : on_token_apply.call(null,id__$2,value__$3,name__$1));

return cljs.core.reset_BANG_(filter_id_STAR_,"");
}));
var on_option_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(focused_id),rumext.v2.adapt(on_token_apply)],(function (_){
var options = rumext.v2.ref_val(options_ref);
var options__$1 = ((cljs.core.delay_QMARK_(options))?cljs.core.deref(options):options);
var option = app.main.ui.ds.controls.select.get_option(options__$1,focused_id);
var value__$3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626));
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.Keyword(null,"name","name",1843675177));
(on_token_apply.cljs$core$IFn$_invoke$arity$3 ? on_token_apply.cljs$core$IFn$_invoke$arity$3(focused_id,value__$3,name__$1) : on_token_apply.call(null,focused_id,value__$3,name__$1));

return cljs.core.reset_BANG_(filter_id_STAR_,"");
}));
var on_blur__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(apply_value),rumext.v2.adapt(on_blur)],(function (event){
var target_78569 = app.util.dom.get_related_target(event);
var self_node_78570 = rumext.v2.ref_val(wrapper_ref);
if(cljs.core.truth_(app.util.dom.is_child_QMARK_(self_node_78570,target_78569))){
} else {
cljs.core.reset_BANG_(filter_id_STAR_,"");

cljs.core.reset_BANG_(focused_id_STAR_,null);

cljs.core.reset_BANG_(is_open_STAR_,false);
}

if(cljs.core.truth_(rumext.v2.ref_val(dirty_ref))){
var G__78431_78571 = rumext.v2.ref_val(raw_value_STAR_);
(apply_value.cljs$core$IFn$_invoke$arity$1 ? apply_value.cljs$core$IFn$_invoke$arity$1(G__78431_78571) : apply_value.call(null,G__78431_78571));
} else {
}

if(cljs.core.fn_QMARK_(on_blur)){
return (on_blur.cljs$core$IFn$_invoke$arity$1 ? on_blur.cljs$core$IFn$_invoke$arity$1(event) : on_blur.call(null,event));
} else {
return null;
}
}));
var on_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_open),rumext.v2.adapt(apply_value),rumext.v2.adapt(update_input),rumext.v2.adapt(is_open),rumext.v2.adapt(focused_id),rumext.v2.adapt(app.main.ui.ds.controls.select.handle_focus_change)],(function (event){
rumext.v2.set_ref_val_BANG_(dirty_ref,true);

var up_QMARK_ = app.util.keyboard.up_arrow_QMARK_(event);
var down_QMARK_ = app.util.keyboard.down_arrow_QMARK_(event);
var enter_QMARK_ = app.util.keyboard.enter_QMARK_(event);
var esc_QMARK_ = app.util.keyboard.esc_QMARK_(event);
var node = rumext.v2.ref_val(ref__$1);
var open_tokens = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$2(event,"{");
var close_tokens = app.util.keyboard.is_key_QMARK_.cljs$core$IFn$_invoke$arity$2(event,"}");
var options = rumext.v2.ref_val(options_ref);
var options__$1 = ((cljs.core.delay_QMARK_(options))?cljs.core.deref(options):options);
if((((!((options__$1 == null)))) && (open_tokens))){
return cljs.core.reset_BANG_(is_open_STAR_,true);
} else {
if(close_tokens){
var name__$1 = app.main.ui.ds.controls.numeric_input.clean_token_name(rumext.v2.ref_val(raw_value_STAR_));
var token = app.main.ui.ds.controls.numeric_input.get_option_by_name(options__$1,name__$1);
if(cljs.core.truth_(token)){
var G__78433 = new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626).cljs$core$IFn$_invoke$arity$1(token);
var G__78434 = name__$1;
return (apply_token.cljs$core$IFn$_invoke$arity$2 ? apply_token.cljs$core$IFn$_invoke$arity$2(G__78433,G__78434) : apply_token.call(null,G__78433,G__78434));
} else {
var G__78436 = rumext.v2.ref_val(last_value_STAR_);
return (apply_value.cljs$core$IFn$_invoke$arity$1 ? apply_value.cljs$core$IFn$_invoke$arity$1(G__78436) : apply_value.call(null,G__78436));
}
} else {
if(cljs.core.truth_(enter_QMARK_)){
if(cljs.core.truth_(is_open)){
app.util.dom.prevent_default(event);

if(cljs.core.truth_(focused_id)){
return (on_option_enter.cljs$core$IFn$_invoke$arity$1 ? on_option_enter.cljs$core$IFn$_invoke$arity$1(event) : on_option_enter.call(null,event));
} else {
var option_id = app.main.ui.ds.controls.numeric_input.first_focusable_id(options__$1);
var option = app.main.ui.ds.controls.select.get_option(options__$1,option_id);
var value__$3 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626));
var name__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(option,new cljs.core.Keyword(null,"name","name",1843675177));
(on_token_apply.cljs$core$IFn$_invoke$arity$3 ? on_token_apply.cljs$core$IFn$_invoke$arity$3(option_id,value__$3,name__$1) : on_token_apply.call(null,option_id,value__$3,name__$1));

return cljs.core.reset_BANG_(filter_id_STAR_,"");
}
} else {
return (on_blur__$1.cljs$core$IFn$_invoke$arity$1 ? on_blur__$1.cljs$core$IFn$_invoke$arity$1(event) : on_blur__$1.call(null,event));
}
} else {
if(cljs.core.truth_(esc_QMARK_)){
var G__78437_78572 = app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(rumext.v2.ref_val(last_value_STAR_));
(update_input.cljs$core$IFn$_invoke$arity$1 ? update_input.cljs$core$IFn$_invoke$arity$1(G__78437_78572) : update_input.call(null,G__78437_78572));

cljs.core.reset_BANG_(is_open_STAR_,false);

return app.util.dom.blur_BANG_(node);
} else {
if(cljs.core.truth_(app.util.keyboard.home_QMARK_(event))){
return app.main.ui.ds.controls.select.handle_focus_change(options__$1,focused_id_STAR_,(0),rumext.v2.ref_val(nodes_ref));
} else {
if(cljs.core.truth_(up_QMARK_)){
if(cljs.core.truth_(is_open)){
var new_index = app.main.ui.ds.controls.numeric_input.next_focus_index(options__$1,focused_id,new cljs.core.Keyword(null,"up","up",-269712113));
app.util.dom.prevent_default(event);

return app.main.ui.ds.controls.select.handle_focus_change(options__$1,focused_id_STAR_,new_index,rumext.v2.ref_val(nodes_ref));
} else {
var parsed = app.main.ui.ds.controls.numeric_input.parse_value(rumext.v2.ref_val(raw_value_STAR_),rumext.v2.ref_val(last_value_STAR_),min__$1,max__$1,nillable__$1);
var current_value = (function (){var or__5025__auto__ = parsed;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$__$1;
}
})();
var new_val = app.main.ui.ds.controls.numeric_input.increment(current_value,step__$1,min__$1,max__$1);
app.util.dom.prevent_default(event);

var G__78439_78573 = app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(new_val);
(update_input.cljs$core$IFn$_invoke$arity$1 ? update_input.cljs$core$IFn$_invoke$arity$1(G__78439_78573) : update_input.call(null,G__78439_78573));

var G__78440 = ""+(new_val ?? "");
return (apply_value.cljs$core$IFn$_invoke$arity$1 ? apply_value.cljs$core$IFn$_invoke$arity$1(G__78440) : apply_value.call(null,G__78440));
}
} else {
if(cljs.core.truth_(down_QMARK_)){
if(cljs.core.truth_(is_open)){
var new_index = app.main.ui.ds.controls.numeric_input.next_focus_index(options__$1,focused_id,new cljs.core.Keyword(null,"down","down",1565245570));
app.util.dom.prevent_default(event);

return app.main.ui.ds.controls.select.handle_focus_change(options__$1,focused_id_STAR_,new_index,rumext.v2.ref_val(nodes_ref));
} else {
var parsed = app.main.ui.ds.controls.numeric_input.parse_value(rumext.v2.ref_val(raw_value_STAR_),rumext.v2.ref_val(last_value_STAR_),min__$1,max__$1,nillable__$1);
var current_value = (function (){var or__5025__auto__ = parsed;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$__$1;
}
})();
var new_val = app.main.ui.ds.controls.numeric_input.decrement(current_value,step__$1,min__$1,max__$1);
app.util.dom.prevent_default(event);

var G__78441_78574 = app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(new_val);
(update_input.cljs$core$IFn$_invoke$arity$1 ? update_input.cljs$core$IFn$_invoke$arity$1(G__78441_78574) : update_input.call(null,G__78441_78574));

var G__78442 = ""+(new_val ?? "");
return (apply_value.cljs$core$IFn$_invoke$arity$1 ? apply_value.cljs$core$IFn$_invoke$arity$1(G__78442) : apply_value.call(null,G__78442));
}
} else {
return null;
}
}
}
}
}
}
}
}));
var on_focus__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_focus),rumext.v2.adapt(select_on_focus)],(function (event){
if(cljs.core.fn_QMARK_(on_focus)){
(on_focus.cljs$core$IFn$_invoke$arity$1 ? on_focus.cljs$core$IFn$_invoke$arity$1(event) : on_focus.call(null,event));
} else {
}

var target = app.util.dom.get_target(event);
if(cljs.core.truth_(select_on_focus)){
app.util.dom.select_text_BANG_(target);

return target.addEventListener("mouseup",app.util.dom.prevent_default,({"once": true}));
} else {
return null;
}
}));
var on_mouse_wheel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(apply_value),rumext.v2.adapt(app.main.ui.ds.controls.numeric_input.parse_value),rumext.v2.adapt(min__$1),rumext.v2.adapt(max__$1),rumext.v2.adapt(nillable__$1),rumext.v2.adapt(ref__$1),rumext.v2.adapt(default$__$1),rumext.v2.adapt(step__$1),rumext.v2.adapt(min__$1),rumext.v2.adapt(max__$1)],(function (event){
var temp__5825__auto__ = rumext.v2.ref_val(ref__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
if(cljs.core.truth_(app.util.dom.active_QMARK_(node))){
var inc_QMARK_ = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(app.util.dom.get_delta_position(event)) < (0));
var parsed = app.main.ui.ds.controls.numeric_input.parse_value(rumext.v2.ref_val(raw_value_STAR_),rumext.v2.ref_val(last_value_STAR_),min__$1,max__$1,nillable__$1);
var current_value = (function (){var or__5025__auto__ = parsed;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$__$1;
}
})();
var new_val = ((inc_QMARK_)?app.main.ui.ds.controls.numeric_input.increment(current_value,step__$1,min__$1,max__$1):app.main.ui.ds.controls.numeric_input.decrement(current_value,step__$1,min__$1,max__$1));
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

var G__78444 = ""+(new_val ?? "");
return (apply_value.cljs$core$IFn$_invoke$arity$1 ? apply_value.cljs$core$IFn$_invoke$arity$1(G__78444) : apply_value.call(null,G__78444));
} else {
return null;
}
} else {
return null;
}
}));
var open_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(disabled__$1),rumext.v2.adapt(ref__$1)],(function (event){
if(cljs.core.truth_(disabled__$1)){
return null;
} else {
app.util.dom.prevent_default(event);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(is_open_STAR_,cljs.core.not);

return app.util.dom.focus_BANG_(rumext.v2.ref_val(ref__$1));
}
}));
var open_dropdown_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(disabled__$1),rumext.v2.adapt(token_wrapper_ref)],(function (event){
if(cljs.core.truth_(disabled__$1)){
return null;
} else {
app.util.dom.prevent_default(event);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(is_open_STAR_,cljs.core.not);

return app.util.dom.focus_BANG_(rumext.v2.ref_val(token_wrapper_ref));
}
}));
var detach_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_detach),rumext.v2.adapt(tokens__$1),rumext.v2.adapt(disabled__$1),rumext.v2.adapt(token_applied)],(function (event){
if(cljs.core.truth_(disabled__$1)){
return null;
} else {
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

cljs.core.reset_BANG_(token_applied_STAR_,null);

cljs.core.reset_BANG_(selected_id_STAR_,null);

cljs.core.reset_BANG_(focused_id_STAR_,null);

if(cljs.core.truth_(on_detach)){
(on_detach.cljs$core$IFn$_invoke$arity$1 ? on_detach.cljs$core$IFn$_invoke$arity$1(token_applied) : on_detach.call(null,token_applied));
} else {
}

return app.util.timers.schedule_on_idle.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.dom.focus_BANG_(rumext.v2.ref_val(ref__$1));
}));
}
}));
var on_token_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(detach_token),rumext.v2.adapt(is_open)],(function (event){
var esc_QMARK_ = app.util.keyboard.esc_QMARK_(event);
var delete_QMARK_ = app.util.keyboard.delete_QMARK_(event);
var backspace_QMARK_ = app.util.keyboard.backspace_QMARK_(event);
var enter_QMARK_ = app.util.keyboard.enter_QMARK_(event);
var up_QMARK_ = app.util.keyboard.up_arrow_QMARK_(event);
var down_QMARK_ = app.util.keyboard.down_arrow_QMARK_(event);
var options = rumext.v2.ref_val(options_ref);
var options__$1 = ((cljs.core.delay_QMARK_(options))?cljs.core.deref(options):options);
var detach_btn = rumext.v2.ref_val(token_detach_btn_ref);
var target = app.util.dom.get_target(event);
if(cljs.core.truth_(disabled__$1)){
return null;
} else {
if(cljs.core.truth_((function (){var or__5025__auto__ = delete_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return backspace_QMARK_;
}
})())){
app.util.dom.prevent_default(event);

(detach_token.cljs$core$IFn$_invoke$arity$1 ? detach_token.cljs$core$IFn$_invoke$arity$1(event) : detach_token.call(null,event));

return app.util.dom.focus_BANG_(rumext.v2.ref_val(ref__$1));
} else {
if(cljs.core.truth_(enter_QMARK_)){
if(cljs.core.truth_(is_open)){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

return (on_option_enter.cljs$core$IFn$_invoke$arity$1 ? on_option_enter.cljs$core$IFn$_invoke$arity$1(event) : on_option_enter.call(null,event));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(target,detach_btn)){
app.util.dom.prevent_default(event);

return cljs.core.reset_BANG_(is_open_STAR_,true);
} else {
return null;
}
}
} else {
if(cljs.core.truth_(esc_QMARK_)){
return app.util.dom.blur_BANG_(rumext.v2.ref_val(token_wrapper_ref));
} else {
if(cljs.core.truth_(up_QMARK_)){
if(cljs.core.truth_(is_open)){
var new_index = app.main.ui.ds.controls.numeric_input.next_focus_index(options__$1,focused_id,new cljs.core.Keyword(null,"up","up",-269712113));
app.util.dom.prevent_default(event);

return app.main.ui.ds.controls.select.handle_focus_change(options__$1,focused_id_STAR_,new_index,nodes_ref);
} else {
return null;
}
} else {
if(cljs.core.truth_(down_QMARK_)){
if(cljs.core.truth_(is_open)){
var new_index = app.main.ui.ds.controls.numeric_input.next_focus_index(options__$1,focused_id,new cljs.core.Keyword(null,"down","down",1565245570));
app.util.dom.prevent_default(event);

return app.main.ui.ds.controls.select.handle_focus_change(options__$1,focused_id_STAR_,new_index,nodes_ref);
} else {
return null;
}
} else {
return null;
}
}
}
}
}
}
}));
var input_props = {...props, 'onChange':store_raw_value,'aria-label':property,'className':inner_class,'placeholder':((is_multiple_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.mixed-values"):placeholder),'id':id__$1,'maxLength':max_length__$1,'slotStart':(cljs.core.truth_(text_icon)?rumext.v2.jsx("div",{'className':"main_ui_ds_controls_numeric_input__text-icon",'children':text_icon}):null),'onFocus':on_focus__$1,'onBlur':on_blur__$1,'type':"text",'ref':ref__$1,'slotEnd':(cljs.core.truth_(disabled__$1)?null:(((!((tokens__$1 == null))))?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'icon':app.main.ui.ds.foundations.assets.icon.tokens,'tooltipClass':"main_ui_ds_controls_numeric_input__button-tooltip",'className':"main_ui_ds_controls_numeric_input__invisible-button",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.inputs.numeric-input.open-token-list-dropdown"),'ref':open_dropdown_ref,'onClick':open_dropdown}):null)),'defaultValue':(function (){var or__5025__auto__ = rumext.v2.ref_val(last_value_STAR_);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(value__$2);
}
})(),'onKeyDown':on_key_down,'disabled':disabled__$1,'variant':"comfortable",'icon':icon};
var token_props = (cljs.core.truth_((function (){var and__5023__auto__ = token_applied;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),token_applied);
} else {
return and__5023__auto__;
}
})())?(function (){var token = app.main.ui.ds.controls.numeric_input.get_option_by_name(dropdown_options,token_applied);
var id__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.Keyword(null,"id","id",-1388402092));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.Keyword(null,"name","name",1843675177));
var token_value = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = rumext.v2.ref_val(last_value_STAR_);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(value__$2);
}
}
})();
var token_value__$1 = (((((!((id__$2 == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword(null,"opacity","opacity",397153780)))))?((100) * token_value):token_value);
return {...props, 'onTokenKeyDown':on_token_key_down,'detachToken':detach_token,'tokenDetachBtnRef':token_detach_btn_ref,'className':inner_class,'label':label,'id':id__$2,'value':token_value__$1,'slotStart':(cljs.core.truth_((function (){var or__5025__auto__ = icon;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return text_icon;
}
})())?(cljs.core.truth_(icon)?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':icon,'size':"s",'className':"main_ui_ds_controls_numeric_input__icon"}):(cljs.core.truth_(text_icon)?rumext.v2.jsx("div",{'className':"main_ui_ds_controls_numeric_input__text-icon",'children':text_icon}):null)):null),'onFocus':on_focus__$1,'property':property,'onBlur':on_blur__$1,'onClick':open_dropdown_token,'tokenWrapperRef':token_wrapper_ref,'disabled':disabled__$1};
})():null);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(value__$2),rumext.v2.adapt(default$__$1),rumext.v2.adapt(applied_token)],(function (){
var value_SINGLEQUOTE_ = ((is_multiple_QMARK_)?"":(cljs.core.truth_((function (){var and__5023__auto__ = nillable__$1;
if(cljs.core.truth_(and__5023__auto__)){
return (value__$2 == null);
} else {
return and__5023__auto__;
}
})())?"":app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(value__$2,default$__$1))
));
rumext.v2.set_ref_val_BANG_(raw_value_STAR_,value_SINGLEQUOTE_);

rumext.v2.set_ref_val_BANG_(last_value_STAR_,value_SINGLEQUOTE_);

cljs.core.reset_BANG_(token_applied_STAR_,applied_token);

if(cljs.core.truth_(applied_token)){
var token_id_78605 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(app.main.ui.ds.controls.numeric_input.get_option_by_name(dropdown_options,applied_token));
cljs.core.reset_BANG_(selected_id_STAR_,token_id_78605);
} else {
cljs.core.reset_BANG_(selected_id_STAR_,null);
}

var temp__5825__auto__ = rumext.v2.ref_val(ref__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
return app.util.dom.set_value_BANG_(node,value_SINGLEQUOTE_);
} else {
return null;
}
}));

rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_mouse_wheel)],(function (){
var temp__5825__auto__ = rumext.v2.ref_val(ref__$1);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
var key = goog.events.listen(node,"wheel",on_mouse_wheel,({"passive": false}));
return (function (){
return goog.events.unlistenByKey(key);
});
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(dropdown_options)],(function (){
return rumext.v2.set_ref_val_BANG_(options_ref,dropdown_options);
}));

return rumext.v2.jsxs("div",{'ref':wrapper_ref,'className':(class$ ?? "")+" "+("main_ui_ds_controls_numeric_input__input-wrapper" ?? ""),'children':[(((((!((token_applied == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),token_applied))))?rumext.v2.create_element(app.main.ui.ds.controls.utilities.token_field.token_field_STAR_,token_props):rumext.v2.create_element(app.main.ui.ds.controls.utilities.input_field.input_field_STAR_,input_props)),((is_open)?(function (){var options = ((cljs.core.delay_QMARK_(dropdown_options))?cljs.core.deref(dropdown_options):dropdown_options);
return rumext.v2.jsx(app.main.ui.ds.controls.shared.options_dropdown.options_dropdown_STAR_,{'onClick':on_option_click,'id':listbox_id,'options':options,'selected':selected_id,'focused':focused_id,'align':align__$1,'emptyToEnd':empty_to_end__$1,'ref':set_option_ref});
})():null)]});
});

(app.main.ui.ds.controls.numeric_input.numeric_input_STAR_.displayName = "numeric-input*");


//# sourceMappingURL=app.main.ui.ds.controls.numeric_input.js.map
