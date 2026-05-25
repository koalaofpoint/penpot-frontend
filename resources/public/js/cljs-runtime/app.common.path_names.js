import "./cljs_env.js";
import "./cljs.core.js";
import "./cuerdas.core.js";
goog.provide('app.common.path_names');
/**
 * Decompose a path string in the form 'one / two / three' into a vector
 * of strings, trimming spaces (e.g. ['one' 'two' 'three']).
 */
app.common.path_names.split_path = (function app$common$path_names$split_path(var_args){
var args__5755__auto__ = [];
var len__5749__auto___50776 = arguments.length;
var i__5750__auto___50778 = (0);
while(true){
if((i__5750__auto___50778 < len__5749__auto___50776)){
args__5755__auto__.push((arguments[i__5750__auto___50778]));

var G__50779 = (i__5750__auto___50778 + (1));
i__5750__auto___50778 = G__50779;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.path_names.split_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.path_names.split_path.cljs$core$IFn$_invoke$arity$variadic = (function (path_str,p__50696){
var map__50697 = p__50696;
var map__50697__$1 = cljs.core.__destructure_map(map__50697);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50697__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),"/");
var xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cuerdas.core.trim),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cuerdas.core.empty_QMARK_));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xf,cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(path_str,separator));
}));

(app.common.path_names.split_path.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.path_names.split_path.cljs$lang$applyTo = (function (seq50694){
var G__50695 = cljs.core.first(seq50694);
var seq50694__$1 = cljs.core.next(seq50694);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50695,seq50694__$1);
}));

/**
 * Regenerate a path as a string, from a vector.
 * (e.g. ['one' 'two' 'three'] -> 'one / two / three')
 */
app.common.path_names.join_path = (function app$common$path_names$join_path(var_args){
var args__5755__auto__ = [];
var len__5749__auto___50788 = arguments.length;
var i__5750__auto___50789 = (0);
while(true){
if((i__5750__auto___50789 < len__5749__auto___50788)){
args__5755__auto__.push((arguments[i__5750__auto___50789]));

var G__50790 = (i__5750__auto___50789 + (1));
i__5750__auto___50789 = G__50790;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.path_names.join_path.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.path_names.join_path.cljs$core$IFn$_invoke$arity$variadic = (function (path,p__50701){
var map__50702 = p__50701;
var map__50702__$1 = cljs.core.__destructure_map(map__50702);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50702__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),"/");
var with_spaces_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50702__$1,new cljs.core.Keyword(null,"with-spaces?","with-spaces?",3340243),true);
if(cljs.core.truth_(with_spaces_QMARK_)){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2([" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(separator)," "].join(''),path);
} else {
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(separator,path);
}
}));

(app.common.path_names.join_path.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.path_names.join_path.cljs$lang$applyTo = (function (seq50698){
var G__50699 = cljs.core.first(seq50698);
var seq50698__$1 = cljs.core.next(seq50698);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50699,seq50698__$1);
}));

/**
 * Parse a path string. Retrieve the group and the name in separated values,
 * normalizing spaces (e.g. 'group / subgroup / name' -> ['group / subgroup' 'name']).
 */
app.common.path_names.split_group_name = (function app$common$path_names$split_group_name(var_args){
var args__5755__auto__ = [];
var len__5749__auto___50791 = arguments.length;
var i__5750__auto___50792 = (0);
while(true){
if((i__5750__auto___50792 < len__5749__auto___50791)){
args__5755__auto__.push((arguments[i__5750__auto___50792]));

var G__50793 = (i__5750__auto___50792 + (1));
i__5750__auto___50792 = G__50793;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.path_names.split_group_name.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.path_names.split_group_name.cljs$core$IFn$_invoke$arity$variadic = (function (path_str,p__50707){
var map__50709 = p__50707;
var map__50709__$1 = cljs.core.__destructure_map(map__50709);
var separator = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50709__$1,new cljs.core.Keyword(null,"separator","separator",-1628749125),"/");
var with_spaces_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50709__$1,new cljs.core.Keyword(null,"with-spaces?","with-spaces?",3340243),true);
var path = app.common.path_names.split_path.cljs$core$IFn$_invoke$arity$variadic(path_str,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"separator","separator",-1628749125),separator], 0));
var group_str = app.common.path_names.join_path.cljs$core$IFn$_invoke$arity$variadic(cljs.core.butlast(path),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"separator","separator",-1628749125),separator,new cljs.core.Keyword(null,"with-spaces?","with-spaces?",3340243),with_spaces_QMARK_], 0));
var name = (function (){var or__5025__auto__ = cljs.core.last(path);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [group_str,name], null);
}));

(app.common.path_names.split_group_name.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.path_names.split_group_name.cljs$lang$applyTo = (function (seq50704){
var G__50705 = cljs.core.first(seq50704);
var seq50704__$1 = cljs.core.next(seq50704);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50705,seq50704__$1);
}));

/**
 * Regenerate a path as a string, from a vector.
 */
app.common.path_names.join_path_with_dot = (function app$common$path_names$join_path_with_dot(path_vec){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\u00A0\u2022\u00A0",path_vec);
});
/**
 * Remove empty items from the path.
 */
app.common.path_names.clean_path = (function app$common$path_names$clean_path(path){
return app.common.path_names.join_path(app.common.path_names.split_path(path));
});
/**
 * Put the item at the end of the path.
 */
app.common.path_names.merge_path_item = (function app$common$path_names$merge_path_item(path,name){
if((!(cljs.core.empty_QMARK_(path)))){
if((!(cljs.core.empty_QMARK_(name)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
} else {
return path;
}
} else {
return name;
}
});
/**
 * Put the item at the end of the path.
 */
app.common.path_names.merge_path_item_with_dot = (function app$common$path_names$merge_path_item_with_dot(path,name){
if((!(cljs.core.empty_QMARK_(path)))){
if((!(cljs.core.empty_QMARK_(name)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(path),"\u00A0\u2022\u00A0",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join('');
} else {
return path;
}
} else {
return name;
}
});
/**
 * Separate last item of the path, and truncate the others if too long:
 *  'one'                          ->  ['' 'one' false]
 *  'one / two / three'            ->  ['one / two' 'three' false]
 *  'one / two / three / four'     ->  ['one / two / ...' 'four' true]
 *  'one-item-but-very-long / two' ->  ['...' 'two' true] 
 */
app.common.path_names.compact_path = (function app$common$path_names$compact_path(path,max_length,dot_QMARK_){
var path_split = app.common.path_names.split_path(path);
var last_item = cljs.core.last(path_split);
var merge_path = (cljs.core.truth_(dot_QMARK_)?app.common.path_names.merge_path_item_with_dot:app.common.path_names.merge_path_item);
var other_items = cljs.core.seq(cljs.core.butlast(path_split));
var other_path = "";
while(true){
var temp__5823__auto__ = cljs.core.first(other_items);
if(cljs.core.truth_(temp__5823__auto__)){
var item = temp__5823__auto__;
var full_path = (function (){var G__50719 = (merge_path.cljs$core$IFn$_invoke$arity$2 ? merge_path.cljs$core$IFn$_invoke$arity$2(other_path,item) : merge_path.call(null,other_path,item));
var G__50720 = last_item;
return (merge_path.cljs$core$IFn$_invoke$arity$2 ? merge_path.cljs$core$IFn$_invoke$arity$2(G__50719,G__50720) : merge_path.call(null,G__50719,G__50720));
})();
if((cljs.core.count(full_path) > max_length)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(merge_path.cljs$core$IFn$_invoke$arity$2 ? merge_path.cljs$core$IFn$_invoke$arity$2(other_path,"...") : merge_path.call(null,other_path,"...")),last_item,true], null);
} else {
var G__50795 = cljs.core.next(other_items);
var G__50796 = (merge_path.cljs$core$IFn$_invoke$arity$2 ? merge_path.cljs$core$IFn$_invoke$arity$2(other_path,item) : merge_path.call(null,other_path,item));
other_items = G__50795;
other_path = G__50796;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [other_path,last_item,false], null);
}
break;
}
});
/**
 * Remove the last item of the path.
 */
app.common.path_names.butlast_path = (function app$common$path_names$butlast_path(path){
var split = app.common.path_names.split_path(path);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(split))){
return "";
} else {
return app.common.path_names.join_path(cljs.core.butlast(split));
}
});
/**
 * Remove the last item of the path.
 */
app.common.path_names.butlast_path_with_dots = (function app$common$path_names$butlast_path_with_dots(path){
var split = app.common.path_names.split_path(path);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(split))){
return "";
} else {
return app.common.path_names.join_path_with_dot(cljs.core.butlast(split));
}
});
/**
 * Returns the last item of the path.
 */
app.common.path_names.last_path = (function app$common$path_names$last_path(path){
return cljs.core.last(app.common.path_names.split_path(path));
});
app.common.path_names.inside_path_QMARK_ = (function app$common$path_names$inside_path_QMARK_(child,parent){
var child_path = app.common.path_names.split_path(child);
var parent_path = app.common.path_names.split_path(parent);
return (((cljs.core.count(parent_path) <= cljs.core.count(child_path))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_path,cljs.core.take.cljs$core$IFn$_invoke$arity$2(cljs.core.count(parent_path),child_path))));
});
/**
 * Splits a string into two parts:
 * the text before and including the last period,
 * and the text after the last period.
 */
app.common.path_names.split_by_last_period = (function app$common$path_names$split_by_last_period(s){
var temp__5823__auto__ = cuerdas.core.last_index_of.cljs$core$IFn$_invoke$arity$2(s,".");
if(cljs.core.truth_(temp__5823__auto__)){
var last_period = temp__5823__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.subs.cljs$core$IFn$_invoke$arity$3(s,(0),(last_period + (1))),cljs.core.subs.cljs$core$IFn$_invoke$arity$2(s,(last_period + (1)))], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [s,""], null);
}
});
/**
 * Sorts segments so that those with children come first.
 */
app.common.path_names.sort_by_children = (function app$common$path_names$sort_by_children(segments,separator){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (segment){
var path = app.common.path_names.split_path.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(segment),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"separator","separator",-1628749125),separator], 0));
var path_length = cljs.core.count(path);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(path_length,(1))){
return (1);
} else {
return (0);
}
}),segments);
});
/**
 * Groups segments by their first path segment and update segment name.
 */
app.common.path_names.group_by_first_segment = (function app$common$path_names$group_by_first_segment(segments,separator){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,segment){
var vec__50726 = app.common.path_names.split_path.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(segment),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"separator","separator",-1628749125),separator], 0));
var seq__50727 = cljs.core.seq(vec__50726);
var first__50728 = cljs.core.first(seq__50727);
var seq__50727__$1 = cljs.core.next(seq__50727);
var first_segment = first__50728;
var remaining_segments = seq__50727__$1;
var rest_path = ((cljs.core.seq(remaining_segments))?app.common.path_names.join_path.cljs$core$IFn$_invoke$arity$variadic(remaining_segments,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"separator","separator",-1628749125),separator,new cljs.core.Keyword(null,"with-spaces?","with-spaces?",3340243),false], 0)):null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,first_segment,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),(cljs.core.truth_(rest_path)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(segment,new cljs.core.Keyword(null,"name","name",1843675177),rest_path):segment));
}),cljs.core.PersistentArrayMap.EMPTY,segments);
});
/**
 * Sorts elements and groups them by their first path segment.
 */
app.common.path_names.sort_and_group_segments = (function app$common$path_names$sort_and_group_segments(segments,separator){
var sorted = app.common.path_names.sort_by_children(segments,separator);
var grouped = app.common.path_names.group_by_first_segment(sorted,separator);
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.sorted_map(),grouped);
});
/**
 * Builds a single tree node with lazy children.
 */
app.common.path_names.build_tree_node = (function app$common$path_names$build_tree_node(segment_name,remaining_segments,separator,parent_path,depth){
var current_path = (cljs.core.truth_(parent_path)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(parent_path),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(segment_name)].join(''):segment_name);
var is_leaf_QMARK_ = ((cljs.core.seq(remaining_segments)) && (cljs.core.every_QMARK_((function (segment){
var remaining_segment_name = cljs.core.first(app.common.path_names.split_path.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(segment),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"separator","separator",-1628749125),separator], 0)));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(segment_name,remaining_segment_name);
}),remaining_segments)));
var leaf_segment = ((is_leaf_QMARK_)?cljs.core.first(remaining_segments):null);
var node = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"name","name",1843675177),segment_name,new cljs.core.Keyword(null,"path","path",-188191168),current_path,new cljs.core.Keyword(null,"depth","depth",1768663640),depth,new cljs.core.Keyword(null,"leaf","leaf",1306118732),leaf_segment,new cljs.core.Keyword(null,"children-fn","children-fn",-1407047987),((is_leaf_QMARK_)?null:(function (){
var grouped_elements = app.common.path_names.sort_and_group_segments(remaining_segments,separator);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__50753){
var vec__50755 = p__50753;
var child_segment_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50755,(0),null);
var remaining_child_segments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50755,(1),null);
var G__50758 = child_segment_name;
var G__50759 = remaining_child_segments;
var G__50760 = separator;
var G__50761 = current_path;
var G__50762 = (depth + (1));
return (app.common.path_names.build_tree_node.cljs$core$IFn$_invoke$arity$5 ? app.common.path_names.build_tree_node.cljs$core$IFn$_invoke$arity$5(G__50758,G__50759,G__50760,G__50761,G__50762) : app.common.path_names.build_tree_node.call(null,G__50758,G__50759,G__50760,G__50761,G__50762));
}),grouped_elements);
}))], null);
return node;
});
/**
 * Builds the root level of the tree.
 */
app.common.path_names.build_tree_root = (function app$common$path_names$build_tree_root(segments,separator){
var grouped_elements = app.common.path_names.sort_and_group_segments(segments,separator);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__50768){
var vec__50772 = p__50768;
var segment_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50772,(0),null);
var remaining_segments = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50772,(1),null);
return app.common.path_names.build_tree_node(segment_name,remaining_segments,separator,null,(0));
}),grouped_elements);
});

//# sourceMappingURL=app.common.path_names.js.map
