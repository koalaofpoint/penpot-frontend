import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.modifiers.js";
import "./app.main.store.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.workspace.viewport.utils.js";
import "./app.util.debug.js";
import "./app.util.dom.js";
import "./app.util.timers.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.shapes.frame.dynamic_modifiers');
app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_shape_node = (function app$main$ui$workspace$shapes$frame$dynamic_modifiers$get_shape_node(var_args){
var G__73624 = arguments.length;
switch (G__73624) {
case 1:
return app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_shape_node.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_shape_node.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_shape_node.cljs$core$IFn$_invoke$arity$1 = (function (id){
return app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_shape_node.cljs$core$IFn$_invoke$arity$2(document,id);
}));

(app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_shape_node.cljs$core$IFn$_invoke$arity$2 = (function (base_node,id){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(base_node.id,""+"shape-"+(id ?? ""))){
return base_node;
} else {
return app.util.dom.query.cljs$core$IFn$_invoke$arity$2(base_node,""+"#shape-"+(id ?? ""));
}
}));

(app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_shape_node.cljs$lang$maxFixedArity = 2);

/**
 * Retrieve the DOM nodes to apply the matrix transformation
 */
app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_nodes = (function app$main$ui$workspace$shapes$frame$dynamic_modifiers$get_nodes(base_node,p__73625){
var map__73626 = p__73625;
var map__73626__$1 = cljs.core.__destructure_map(map__73626);
var shape = map__73626__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73626__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73626__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
if((!((base_node == null)))){
var shape_node = app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_shape_node.cljs$core$IFn$_invoke$arity$2(base_node,id);
var parent_node = app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_shape_node.cljs$core$IFn$_invoke$arity$2(base_node,parent_id);
var frame_QMARK_ = app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var group_QMARK_ = app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var text_QMARK_ = app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var masking_child_QMARK_ = new cljs.core.Keyword(null,"masking-child?","masking-child?",1265911452).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(shape));
if(frame_QMARK_){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_node,app.util.dom.query.cljs$core$IFn$_invoke$arity$2(shape_node,".frame-children"),app.util.dom.query.cljs$core$IFn$_invoke$arity$1(""+"#thumbnail-container-"+(id ?? "")),app.util.dom.query.cljs$core$IFn$_invoke$arity$1(""+"#thumbnail-"+(id ?? "")),app.util.dom.query.cljs$core$IFn$_invoke$arity$1(""+"#frame-title-"+(id ?? ""))], null);
} else {
if(cljs.core.truth_(masking_child_QMARK_)){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_node,app.util.dom.query.cljs$core$IFn$_invoke$arity$2(parent_node,".mask-clip-path"),app.util.dom.query.cljs$core$IFn$_invoke$arity$2(parent_node,".mask-shape"),((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"shape-titles","shape-titles",959632283)))?app.util.dom.query.cljs$core$IFn$_invoke$arity$1(""+"#frame-title-"+(id ?? "")):null)], null);
} else {
if(group_QMARK_){
var shape_defs = app.util.dom.query.cljs$core$IFn$_invoke$arity$2(shape_node,"defs");
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"shape-titles","shape-titles",959632283)))?app.util.dom.query.cljs$core$IFn$_invoke$arity$1(""+"#frame-title-"+(id ?? "")):null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.dom.query_all.cljs$core$IFn$_invoke$arity$2(shape_defs,".svg-def"),app.util.dom.query_all.cljs$core$IFn$_invoke$arity$2(shape_defs,".svg-mask-wrapper")], 0));
} else {
if(text_QMARK_){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_node,((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"shape-titles","shape-titles",959632283)))?app.util.dom.query.cljs$core$IFn$_invoke$arity$1(""+"#frame-title-"+(id ?? "")):null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_node,((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"shape-titles","shape-titles",959632283)))?app.util.dom.query.cljs$core$IFn$_invoke$arity$1(""+"#frame-title-"+(id ?? "")):null)], null);

}
}
}
}
} else {
return null;
}
});
app.main.ui.workspace.shapes.frame.dynamic_modifiers.transform_region_BANG_ = (function app$main$ui$workspace$shapes$frame$dynamic_modifiers$transform_region_BANG_(node,modifiers){
var map__73627 = app.common.geom.shapes.transform_selrect(app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_attribute(node,"data-old-x")),app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_attribute(node,"data-old-y")),app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_attribute(node,"data-old-width")),app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_attribute(node,"data-old-height"))),modifiers);
var map__73627__$1 = cljs.core.__destructure_map(map__73627);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73627__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73627__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73627__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73627__$1,new cljs.core.Keyword(null,"height","height",1025178622));
if((((!((x == null)))) && ((((!((y == null)))) && ((((!((width == null)))) && ((!((height == null)))))))))){
app.util.dom.set_attribute_BANG_(node,"x",x);

app.util.dom.set_attribute_BANG_(node,"y",y);

app.util.dom.set_attribute_BANG_(node,"width",width);

return app.util.dom.set_attribute_BANG_(node,"height",height);
} else {
return null;
}
});
app.main.ui.workspace.shapes.frame.dynamic_modifiers.start_transform_BANG_ = (function app$main$ui$workspace$shapes$frame$dynamic_modifiers$start_transform_BANG_(base_node,shapes){
var seq__73628 = cljs.core.seq(shapes);
var chunk__73629 = null;
var count__73630 = (0);
var i__73631 = (0);
while(true){
if((i__73631 < count__73630)){
var shape = chunk__73629.cljs$core$IIndexed$_nth$arity$2(null,i__73631);
var temp__5825__auto___73796 = app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_nodes(base_node,shape);
if(cljs.core.truth_(temp__5825__auto___73796)){
var nodes_73797 = temp__5825__auto___73796;
var seq__73647_73798 = cljs.core.seq(nodes_73797);
var chunk__73648_73799 = null;
var count__73649_73800 = (0);
var i__73650_73801 = (0);
while(true){
if((i__73650_73801 < count__73649_73800)){
var node_73802 = chunk__73648_73799.cljs$core$IIndexed$_nth$arity$2(null,i__73650_73801);
var old_transform_73803 = app.util.dom.get_attribute(node_73802,"transform");
if((!((old_transform_73803 == null)))){
app.util.dom.set_attribute_BANG_(node_73802,"data-old-transform",old_transform_73803);
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73802),"linearGradient")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73802),"radialGradient")))){
var gradient_transform_73804 = app.util.dom.get_attribute(node_73802,"gradientTransform");
if((!((gradient_transform_73804 == null)))){
app.util.dom.set_attribute_BANG_(node_73802,"data-old-gradientTransform",gradient_transform_73804);
} else {
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73802),"pattern")){
var pattern_transform_73809 = app.util.dom.get_attribute(node_73802,"patternTransform");
if((!((pattern_transform_73809 == null)))){
app.util.dom.set_attribute_BANG_(node_73802,"data-old-patternTransform",pattern_transform_73809);
} else {
}
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73802),"mask")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73802),"filter")))){
var old_x_73810 = app.util.dom.get_attribute(node_73802,"x");
var old_y_73811 = app.util.dom.get_attribute(node_73802,"y");
var old_width_73812 = app.util.dom.get_attribute(node_73802,"width");
var old_height_73813 = app.util.dom.get_attribute(node_73802,"height");
app.util.dom.set_attribute_BANG_(node_73802,"data-old-x",old_x_73810);

app.util.dom.set_attribute_BANG_(node_73802,"data-old-y",old_y_73811);

app.util.dom.set_attribute_BANG_(node_73802,"data-old-width",old_width_73812);

app.util.dom.set_attribute_BANG_(node_73802,"data-old-height",old_height_73813);
} else {
}


var G__73814 = seq__73647_73798;
var G__73815 = chunk__73648_73799;
var G__73816 = count__73649_73800;
var G__73817 = (i__73650_73801 + (1));
seq__73647_73798 = G__73814;
chunk__73648_73799 = G__73815;
count__73649_73800 = G__73816;
i__73650_73801 = G__73817;
continue;
} else {
var temp__5825__auto___73818__$1 = cljs.core.seq(seq__73647_73798);
if(temp__5825__auto___73818__$1){
var seq__73647_73819__$1 = temp__5825__auto___73818__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73647_73819__$1)){
var c__5548__auto___73820 = cljs.core.chunk_first(seq__73647_73819__$1);
var G__73821 = cljs.core.chunk_rest(seq__73647_73819__$1);
var G__73822 = c__5548__auto___73820;
var G__73823 = cljs.core.count(c__5548__auto___73820);
var G__73824 = (0);
seq__73647_73798 = G__73821;
chunk__73648_73799 = G__73822;
count__73649_73800 = G__73823;
i__73650_73801 = G__73824;
continue;
} else {
var node_73825 = cljs.core.first(seq__73647_73819__$1);
var old_transform_73826 = app.util.dom.get_attribute(node_73825,"transform");
if((!((old_transform_73826 == null)))){
app.util.dom.set_attribute_BANG_(node_73825,"data-old-transform",old_transform_73826);
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73825),"linearGradient")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73825),"radialGradient")))){
var gradient_transform_73827 = app.util.dom.get_attribute(node_73825,"gradientTransform");
if((!((gradient_transform_73827 == null)))){
app.util.dom.set_attribute_BANG_(node_73825,"data-old-gradientTransform",gradient_transform_73827);
} else {
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73825),"pattern")){
var pattern_transform_73828 = app.util.dom.get_attribute(node_73825,"patternTransform");
if((!((pattern_transform_73828 == null)))){
app.util.dom.set_attribute_BANG_(node_73825,"data-old-patternTransform",pattern_transform_73828);
} else {
}
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73825),"mask")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73825),"filter")))){
var old_x_73829 = app.util.dom.get_attribute(node_73825,"x");
var old_y_73830 = app.util.dom.get_attribute(node_73825,"y");
var old_width_73831 = app.util.dom.get_attribute(node_73825,"width");
var old_height_73832 = app.util.dom.get_attribute(node_73825,"height");
app.util.dom.set_attribute_BANG_(node_73825,"data-old-x",old_x_73829);

app.util.dom.set_attribute_BANG_(node_73825,"data-old-y",old_y_73830);

app.util.dom.set_attribute_BANG_(node_73825,"data-old-width",old_width_73831);

app.util.dom.set_attribute_BANG_(node_73825,"data-old-height",old_height_73832);
} else {
}


var G__73833 = cljs.core.next(seq__73647_73819__$1);
var G__73834 = null;
var G__73835 = (0);
var G__73836 = (0);
seq__73647_73798 = G__73833;
chunk__73648_73799 = G__73834;
count__73649_73800 = G__73835;
i__73650_73801 = G__73836;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__73837 = seq__73628;
var G__73838 = chunk__73629;
var G__73839 = count__73630;
var G__73840 = (i__73631 + (1));
seq__73628 = G__73837;
chunk__73629 = G__73838;
count__73630 = G__73839;
i__73631 = G__73840;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__73628);
if(temp__5825__auto__){
var seq__73628__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73628__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__73628__$1);
var G__73841 = cljs.core.chunk_rest(seq__73628__$1);
var G__73842 = c__5548__auto__;
var G__73843 = cljs.core.count(c__5548__auto__);
var G__73844 = (0);
seq__73628 = G__73841;
chunk__73629 = G__73842;
count__73630 = G__73843;
i__73631 = G__73844;
continue;
} else {
var shape = cljs.core.first(seq__73628__$1);
var temp__5825__auto___73845__$1 = app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_nodes(base_node,shape);
if(cljs.core.truth_(temp__5825__auto___73845__$1)){
var nodes_73846 = temp__5825__auto___73845__$1;
var seq__73669_73847 = cljs.core.seq(nodes_73846);
var chunk__73670_73848 = null;
var count__73671_73849 = (0);
var i__73672_73850 = (0);
while(true){
if((i__73672_73850 < count__73671_73849)){
var node_73852 = chunk__73670_73848.cljs$core$IIndexed$_nth$arity$2(null,i__73672_73850);
var old_transform_73853 = app.util.dom.get_attribute(node_73852,"transform");
if((!((old_transform_73853 == null)))){
app.util.dom.set_attribute_BANG_(node_73852,"data-old-transform",old_transform_73853);
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73852),"linearGradient")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73852),"radialGradient")))){
var gradient_transform_73855 = app.util.dom.get_attribute(node_73852,"gradientTransform");
if((!((gradient_transform_73855 == null)))){
app.util.dom.set_attribute_BANG_(node_73852,"data-old-gradientTransform",gradient_transform_73855);
} else {
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73852),"pattern")){
var pattern_transform_73856 = app.util.dom.get_attribute(node_73852,"patternTransform");
if((!((pattern_transform_73856 == null)))){
app.util.dom.set_attribute_BANG_(node_73852,"data-old-patternTransform",pattern_transform_73856);
} else {
}
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73852),"mask")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73852),"filter")))){
var old_x_73857 = app.util.dom.get_attribute(node_73852,"x");
var old_y_73858 = app.util.dom.get_attribute(node_73852,"y");
var old_width_73859 = app.util.dom.get_attribute(node_73852,"width");
var old_height_73860 = app.util.dom.get_attribute(node_73852,"height");
app.util.dom.set_attribute_BANG_(node_73852,"data-old-x",old_x_73857);

app.util.dom.set_attribute_BANG_(node_73852,"data-old-y",old_y_73858);

app.util.dom.set_attribute_BANG_(node_73852,"data-old-width",old_width_73859);

app.util.dom.set_attribute_BANG_(node_73852,"data-old-height",old_height_73860);
} else {
}


var G__73861 = seq__73669_73847;
var G__73862 = chunk__73670_73848;
var G__73863 = count__73671_73849;
var G__73864 = (i__73672_73850 + (1));
seq__73669_73847 = G__73861;
chunk__73670_73848 = G__73862;
count__73671_73849 = G__73863;
i__73672_73850 = G__73864;
continue;
} else {
var temp__5825__auto___73865__$2 = cljs.core.seq(seq__73669_73847);
if(temp__5825__auto___73865__$2){
var seq__73669_73866__$1 = temp__5825__auto___73865__$2;
if(cljs.core.chunked_seq_QMARK_(seq__73669_73866__$1)){
var c__5548__auto___73867 = cljs.core.chunk_first(seq__73669_73866__$1);
var G__73868 = cljs.core.chunk_rest(seq__73669_73866__$1);
var G__73869 = c__5548__auto___73867;
var G__73870 = cljs.core.count(c__5548__auto___73867);
var G__73871 = (0);
seq__73669_73847 = G__73868;
chunk__73670_73848 = G__73869;
count__73671_73849 = G__73870;
i__73672_73850 = G__73871;
continue;
} else {
var node_73872 = cljs.core.first(seq__73669_73866__$1);
var old_transform_73873 = app.util.dom.get_attribute(node_73872,"transform");
if((!((old_transform_73873 == null)))){
app.util.dom.set_attribute_BANG_(node_73872,"data-old-transform",old_transform_73873);
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73872),"linearGradient")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73872),"radialGradient")))){
var gradient_transform_73874 = app.util.dom.get_attribute(node_73872,"gradientTransform");
if((!((gradient_transform_73874 == null)))){
app.util.dom.set_attribute_BANG_(node_73872,"data-old-gradientTransform",gradient_transform_73874);
} else {
}
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73872),"pattern")){
var pattern_transform_73875 = app.util.dom.get_attribute(node_73872,"patternTransform");
if((!((pattern_transform_73875 == null)))){
app.util.dom.set_attribute_BANG_(node_73872,"data-old-patternTransform",pattern_transform_73875);
} else {
}
} else {
}

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73872),"mask")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73872),"filter")))){
var old_x_73877 = app.util.dom.get_attribute(node_73872,"x");
var old_y_73878 = app.util.dom.get_attribute(node_73872,"y");
var old_width_73879 = app.util.dom.get_attribute(node_73872,"width");
var old_height_73880 = app.util.dom.get_attribute(node_73872,"height");
app.util.dom.set_attribute_BANG_(node_73872,"data-old-x",old_x_73877);

app.util.dom.set_attribute_BANG_(node_73872,"data-old-y",old_y_73878);

app.util.dom.set_attribute_BANG_(node_73872,"data-old-width",old_width_73879);

app.util.dom.set_attribute_BANG_(node_73872,"data-old-height",old_height_73880);
} else {
}


var G__73882 = cljs.core.next(seq__73669_73866__$1);
var G__73883 = null;
var G__73884 = (0);
var G__73885 = (0);
seq__73669_73847 = G__73882;
chunk__73670_73848 = G__73883;
count__73671_73849 = G__73884;
i__73672_73850 = G__73885;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__73886 = cljs.core.next(seq__73628__$1);
var G__73887 = null;
var G__73888 = (0);
var G__73889 = (0);
seq__73628 = G__73886;
chunk__73629 = G__73887;
count__73630 = G__73888;
i__73631 = G__73889;
continue;
}
} else {
return null;
}
}
break;
}
});
app.main.ui.workspace.shapes.frame.dynamic_modifiers.set_transform_att_BANG_ = (function app$main$ui$workspace$shapes$frame$dynamic_modifiers$set_transform_att_BANG_(node,att,value){
var old_att = app.util.dom.get_attribute(node,""+"data-old-"+(att ?? ""));
var new_value = (((!((old_att == null))))?""+(value ?? "")+" "+(old_att ?? ""):cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
return app.util.dom.set_attribute_BANG_(node,att,cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_value));
});
app.main.ui.workspace.shapes.frame.dynamic_modifiers.override_transform_att_BANG_ = (function app$main$ui$workspace$shapes$frame$dynamic_modifiers$override_transform_att_BANG_(node,att,value){
return app.util.dom.set_attribute_BANG_(node,att,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value));
});
app.main.ui.workspace.shapes.frame.dynamic_modifiers.update_transform_BANG_ = (function app$main$ui$workspace$shapes$frame$dynamic_modifiers$update_transform_BANG_(base_node,shapes,transforms,modifiers){
var seq__73678 = cljs.core.seq(shapes);
var chunk__73679 = null;
var count__73680 = (0);
var i__73681 = (0);
while(true){
if((i__73681 < count__73680)){
var map__73693 = chunk__73679.cljs$core$IIndexed$_nth$arity$2(null,i__73681);
var map__73693__$1 = cljs.core.__destructure_map(map__73693);
var shape = map__73693__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73693__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73693__$1,new cljs.core.Keyword(null,"_type","_type",-970742198));
var temp__5825__auto___73890 = app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_nodes(base_node,shape);
if(cljs.core.truth_(temp__5825__auto___73890)){
var nodes_73891 = temp__5825__auto___73890;
var transform_73892 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(transforms,id);
var modifiers_73893__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null));
var seq__73697_73894 = cljs.core.seq(nodes_73891);
var chunk__73699_73895 = null;
var count__73700_73896 = (0);
var i__73701_73897 = (0);
while(true){
if((i__73701_73897 < count__73700_73896)){
var node_73898 = chunk__73699_73895.cljs$core$IIndexed$_nth$arity$2(null,i__73701_73897);
if(app.util.dom.class_QMARK_(node_73898,"frame-children")){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.set_transform_att_BANG_(node_73898,"transform",app.common.geom.matrix.inverse(transform_73892));
} else {
if(app.util.dom.class_QMARK_(node_73898,"frame-title")){
var shape_73899__$1 = app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(shape,modifiers_73893__$1);
var zoom_73900 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app.main.store.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),(1));
var edit_grid_QMARK__73901 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_data(node_73898,"edit-grid"),"true");
var mtx_73902 = app.main.ui.workspace.viewport.utils.title_transform(shape_73899__$1,zoom_73900,edit_grid_QMARK__73901);
app.main.ui.workspace.shapes.frame.dynamic_modifiers.override_transform_att_BANG_(node_73898,"transform",mtx_73902);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73898),"mask")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73898),"filter")))){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.transform_region_BANG_(node_73898,modifiers_73893__$1);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73898),"linearGradient")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73898),"radialGradient")))){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.set_transform_att_BANG_(node_73898,"gradientTransform",transform_73892);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73898),"pattern")){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.set_transform_att_BANG_(node_73898,"patternTransform",transform_73892);
} else {
if((((!((transform_73892 == null)))) && ((!((node_73898 == null)))))){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.set_transform_att_BANG_(node_73898,"transform",transform_73892);
} else {
}
}
}
}
}
}


var G__73904 = seq__73697_73894;
var G__73905 = chunk__73699_73895;
var G__73906 = count__73700_73896;
var G__73907 = (i__73701_73897 + (1));
seq__73697_73894 = G__73904;
chunk__73699_73895 = G__73905;
count__73700_73896 = G__73906;
i__73701_73897 = G__73907;
continue;
} else {
var temp__5825__auto___73910__$1 = cljs.core.seq(seq__73697_73894);
if(temp__5825__auto___73910__$1){
var seq__73697_73911__$1 = temp__5825__auto___73910__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73697_73911__$1)){
var c__5548__auto___73912 = cljs.core.chunk_first(seq__73697_73911__$1);
var G__73913 = cljs.core.chunk_rest(seq__73697_73911__$1);
var G__73914 = c__5548__auto___73912;
var G__73915 = cljs.core.count(c__5548__auto___73912);
var G__73916 = (0);
seq__73697_73894 = G__73913;
chunk__73699_73895 = G__73914;
count__73700_73896 = G__73915;
i__73701_73897 = G__73916;
continue;
} else {
var node_73917 = cljs.core.first(seq__73697_73911__$1);
if(app.util.dom.class_QMARK_(node_73917,"frame-children")){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.set_transform_att_BANG_(node_73917,"transform",app.common.geom.matrix.inverse(transform_73892));
} else {
if(app.util.dom.class_QMARK_(node_73917,"frame-title")){
var shape_73918__$1 = app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(shape,modifiers_73893__$1);
var zoom_73919 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app.main.store.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),(1));
var edit_grid_QMARK__73920 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_data(node_73917,"edit-grid"),"true");
var mtx_73921 = app.main.ui.workspace.viewport.utils.title_transform(shape_73918__$1,zoom_73919,edit_grid_QMARK__73920);
app.main.ui.workspace.shapes.frame.dynamic_modifiers.override_transform_att_BANG_(node_73917,"transform",mtx_73921);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73917),"mask")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73917),"filter")))){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.transform_region_BANG_(node_73917,modifiers_73893__$1);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73917),"linearGradient")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73917),"radialGradient")))){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.set_transform_att_BANG_(node_73917,"gradientTransform",transform_73892);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73917),"pattern")){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.set_transform_att_BANG_(node_73917,"patternTransform",transform_73892);
} else {
if((((!((transform_73892 == null)))) && ((!((node_73917 == null)))))){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.set_transform_att_BANG_(node_73917,"transform",transform_73892);
} else {
}
}
}
}
}
}


var G__73924 = cljs.core.next(seq__73697_73911__$1);
var G__73925 = null;
var G__73926 = (0);
var G__73927 = (0);
seq__73697_73894 = G__73924;
chunk__73699_73895 = G__73925;
count__73700_73896 = G__73926;
i__73701_73897 = G__73927;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__73928 = seq__73678;
var G__73929 = chunk__73679;
var G__73930 = count__73680;
var G__73931 = (i__73681 + (1));
seq__73678 = G__73928;
chunk__73679 = G__73929;
count__73680 = G__73930;
i__73681 = G__73931;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__73678);
if(temp__5825__auto__){
var seq__73678__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73678__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__73678__$1);
var G__73932 = cljs.core.chunk_rest(seq__73678__$1);
var G__73933 = c__5548__auto__;
var G__73934 = cljs.core.count(c__5548__auto__);
var G__73935 = (0);
seq__73678 = G__73932;
chunk__73679 = G__73933;
count__73680 = G__73934;
i__73681 = G__73935;
continue;
} else {
var map__73702 = cljs.core.first(seq__73678__$1);
var map__73702__$1 = cljs.core.__destructure_map(map__73702);
var shape = map__73702__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73702__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var _type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73702__$1,new cljs.core.Keyword(null,"_type","_type",-970742198));
var temp__5825__auto___73936__$1 = app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_nodes(base_node,shape);
if(cljs.core.truth_(temp__5825__auto___73936__$1)){
var nodes_73937 = temp__5825__auto___73936__$1;
var transform_73938 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(transforms,id);
var modifiers_73939__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(modifiers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null));
var seq__73703_73940 = cljs.core.seq(nodes_73937);
var chunk__73704_73941 = null;
var count__73705_73942 = (0);
var i__73706_73943 = (0);
while(true){
if((i__73706_73943 < count__73705_73942)){
var node_73944 = chunk__73704_73941.cljs$core$IIndexed$_nth$arity$2(null,i__73706_73943);
if(app.util.dom.class_QMARK_(node_73944,"frame-children")){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.set_transform_att_BANG_(node_73944,"transform",app.common.geom.matrix.inverse(transform_73938));
} else {
if(app.util.dom.class_QMARK_(node_73944,"frame-title")){
var shape_73945__$1 = app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(shape,modifiers_73939__$1);
var zoom_73946 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app.main.store.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),(1));
var edit_grid_QMARK__73947 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_data(node_73944,"edit-grid"),"true");
var mtx_73948 = app.main.ui.workspace.viewport.utils.title_transform(shape_73945__$1,zoom_73946,edit_grid_QMARK__73947);
app.main.ui.workspace.shapes.frame.dynamic_modifiers.override_transform_att_BANG_(node_73944,"transform",mtx_73948);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73944),"mask")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73944),"filter")))){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.transform_region_BANG_(node_73944,modifiers_73939__$1);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73944),"linearGradient")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73944),"radialGradient")))){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.set_transform_att_BANG_(node_73944,"gradientTransform",transform_73938);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73944),"pattern")){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.set_transform_att_BANG_(node_73944,"patternTransform",transform_73938);
} else {
if((((!((transform_73938 == null)))) && ((!((node_73944 == null)))))){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.set_transform_att_BANG_(node_73944,"transform",transform_73938);
} else {
}
}
}
}
}
}


var G__73950 = seq__73703_73940;
var G__73951 = chunk__73704_73941;
var G__73952 = count__73705_73942;
var G__73953 = (i__73706_73943 + (1));
seq__73703_73940 = G__73950;
chunk__73704_73941 = G__73951;
count__73705_73942 = G__73952;
i__73706_73943 = G__73953;
continue;
} else {
var temp__5825__auto___73956__$2 = cljs.core.seq(seq__73703_73940);
if(temp__5825__auto___73956__$2){
var seq__73703_73957__$1 = temp__5825__auto___73956__$2;
if(cljs.core.chunked_seq_QMARK_(seq__73703_73957__$1)){
var c__5548__auto___73958 = cljs.core.chunk_first(seq__73703_73957__$1);
var G__73959 = cljs.core.chunk_rest(seq__73703_73957__$1);
var G__73960 = c__5548__auto___73958;
var G__73961 = cljs.core.count(c__5548__auto___73958);
var G__73962 = (0);
seq__73703_73940 = G__73959;
chunk__73704_73941 = G__73960;
count__73705_73942 = G__73961;
i__73706_73943 = G__73962;
continue;
} else {
var node_73963 = cljs.core.first(seq__73703_73957__$1);
if(app.util.dom.class_QMARK_(node_73963,"frame-children")){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.set_transform_att_BANG_(node_73963,"transform",app.common.geom.matrix.inverse(transform_73938));
} else {
if(app.util.dom.class_QMARK_(node_73963,"frame-title")){
var shape_73964__$1 = app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(shape,modifiers_73939__$1);
var zoom_73965 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app.main.store.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"zoom","zoom",-1827487038)], null),(1));
var edit_grid_QMARK__73966 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_data(node_73963,"edit-grid"),"true");
var mtx_73967 = app.main.ui.workspace.viewport.utils.title_transform(shape_73964__$1,zoom_73965,edit_grid_QMARK__73966);
app.main.ui.workspace.shapes.frame.dynamic_modifiers.override_transform_att_BANG_(node_73963,"transform",mtx_73967);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73963),"mask")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73963),"filter")))){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.transform_region_BANG_(node_73963,modifiers_73939__$1);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73963),"linearGradient")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73963),"radialGradient")))){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.set_transform_att_BANG_(node_73963,"gradientTransform",transform_73938);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73963),"pattern")){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.set_transform_att_BANG_(node_73963,"patternTransform",transform_73938);
} else {
if((((!((transform_73938 == null)))) && ((!((node_73963 == null)))))){
app.main.ui.workspace.shapes.frame.dynamic_modifiers.set_transform_att_BANG_(node_73963,"transform",transform_73938);
} else {
}
}
}
}
}
}


var G__73968 = cljs.core.next(seq__73703_73957__$1);
var G__73969 = null;
var G__73970 = (0);
var G__73971 = (0);
seq__73703_73940 = G__73968;
chunk__73704_73941 = G__73969;
count__73705_73942 = G__73970;
i__73706_73943 = G__73971;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__73972 = cljs.core.next(seq__73678__$1);
var G__73973 = null;
var G__73974 = (0);
var G__73975 = (0);
seq__73678 = G__73972;
chunk__73679 = G__73973;
count__73680 = G__73974;
i__73681 = G__73975;
continue;
}
} else {
return null;
}
}
break;
}
});
app.main.ui.workspace.shapes.frame.dynamic_modifiers.remove_transform_BANG_ = (function app$main$ui$workspace$shapes$frame$dynamic_modifiers$remove_transform_BANG_(base_node,shapes){
var seq__73707 = cljs.core.seq(shapes);
var chunk__73708 = null;
var count__73709 = (0);
var i__73710 = (0);
while(true){
if((i__73710 < count__73709)){
var shape = chunk__73708.cljs$core$IIndexed$_nth$arity$2(null,i__73710);
var temp__5825__auto___73976 = app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_nodes(base_node,shape);
if(cljs.core.truth_(temp__5825__auto___73976)){
var nodes_73977 = temp__5825__auto___73976;
var seq__73728_73978 = cljs.core.seq(nodes_73977);
var chunk__73729_73979 = null;
var count__73730_73980 = (0);
var i__73731_73981 = (0);
while(true){
if((i__73731_73981 < count__73730_73980)){
var node_73982 = chunk__73729_73979.cljs$core$IIndexed$_nth$arity$2(null,i__73731_73981);
if((!((node_73982 == null)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73982),"foreignObject")){
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73982),"mask")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_73982),"filter")))){
var old_x_73983 = app.util.dom.get_attribute(node_73982,"data-old-x");
var old_y_73984 = app.util.dom.get_attribute(node_73982,"data-old-y");
var old_width_73985 = app.util.dom.get_attribute(node_73982,"data-old-width");
var old_height_73986 = app.util.dom.get_attribute(node_73982,"data-old-height");
app.util.dom.set_attribute_BANG_(node_73982,"x",old_x_73983);

app.util.dom.set_attribute_BANG_(node_73982,"y",old_y_73984);

app.util.dom.set_attribute_BANG_(node_73982,"width",old_width_73985);

app.util.dom.set_attribute_BANG_(node_73982,"height",old_height_73986);

app.util.dom.remove_attribute_BANG_(node_73982,"data-old-x");

app.util.dom.remove_attribute_BANG_(node_73982,"data-old-y");

app.util.dom.remove_attribute_BANG_(node_73982,"data-old-width");

app.util.dom.remove_attribute_BANG_(node_73982,"data-old-height");
} else {
if(app.util.dom.class_QMARK_(node_73982,"frame-title")){
app.util.dom.remove_attribute_BANG_(node_73982,"data-old-transform");
} else {
var old_transform_73988 = app.util.dom.get_attribute(node_73982,"data-old-transform");
if((!((old_transform_73988 == null)))){
app.util.dom.remove_attribute_BANG_(node_73982,"data-old-transform");
} else {
app.util.dom.remove_attribute_BANG_(node_73982,"transform");
}

}
}
}
} else {
}


var G__73989 = seq__73728_73978;
var G__73990 = chunk__73729_73979;
var G__73991 = count__73730_73980;
var G__73992 = (i__73731_73981 + (1));
seq__73728_73978 = G__73989;
chunk__73729_73979 = G__73990;
count__73730_73980 = G__73991;
i__73731_73981 = G__73992;
continue;
} else {
var temp__5825__auto___73993__$1 = cljs.core.seq(seq__73728_73978);
if(temp__5825__auto___73993__$1){
var seq__73728_73994__$1 = temp__5825__auto___73993__$1;
if(cljs.core.chunked_seq_QMARK_(seq__73728_73994__$1)){
var c__5548__auto___73995 = cljs.core.chunk_first(seq__73728_73994__$1);
var G__73996 = cljs.core.chunk_rest(seq__73728_73994__$1);
var G__73997 = c__5548__auto___73995;
var G__73998 = cljs.core.count(c__5548__auto___73995);
var G__73999 = (0);
seq__73728_73978 = G__73996;
chunk__73729_73979 = G__73997;
count__73730_73980 = G__73998;
i__73731_73981 = G__73999;
continue;
} else {
var node_74000 = cljs.core.first(seq__73728_73994__$1);
if((!((node_74000 == null)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_74000),"foreignObject")){
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_74000),"mask")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_74000),"filter")))){
var old_x_74004 = app.util.dom.get_attribute(node_74000,"data-old-x");
var old_y_74005 = app.util.dom.get_attribute(node_74000,"data-old-y");
var old_width_74006 = app.util.dom.get_attribute(node_74000,"data-old-width");
var old_height_74007 = app.util.dom.get_attribute(node_74000,"data-old-height");
app.util.dom.set_attribute_BANG_(node_74000,"x",old_x_74004);

app.util.dom.set_attribute_BANG_(node_74000,"y",old_y_74005);

app.util.dom.set_attribute_BANG_(node_74000,"width",old_width_74006);

app.util.dom.set_attribute_BANG_(node_74000,"height",old_height_74007);

app.util.dom.remove_attribute_BANG_(node_74000,"data-old-x");

app.util.dom.remove_attribute_BANG_(node_74000,"data-old-y");

app.util.dom.remove_attribute_BANG_(node_74000,"data-old-width");

app.util.dom.remove_attribute_BANG_(node_74000,"data-old-height");
} else {
if(app.util.dom.class_QMARK_(node_74000,"frame-title")){
app.util.dom.remove_attribute_BANG_(node_74000,"data-old-transform");
} else {
var old_transform_74010 = app.util.dom.get_attribute(node_74000,"data-old-transform");
if((!((old_transform_74010 == null)))){
app.util.dom.remove_attribute_BANG_(node_74000,"data-old-transform");
} else {
app.util.dom.remove_attribute_BANG_(node_74000,"transform");
}

}
}
}
} else {
}


var G__74012 = cljs.core.next(seq__73728_73994__$1);
var G__74013 = null;
var G__74014 = (0);
var G__74015 = (0);
seq__73728_73978 = G__74012;
chunk__73729_73979 = G__74013;
count__73730_73980 = G__74014;
i__73731_73981 = G__74015;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__74017 = seq__73707;
var G__74018 = chunk__73708;
var G__74019 = count__73709;
var G__74020 = (i__73710 + (1));
seq__73707 = G__74017;
chunk__73708 = G__74018;
count__73709 = G__74019;
i__73710 = G__74020;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__73707);
if(temp__5825__auto__){
var seq__73707__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73707__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__73707__$1);
var G__74021 = cljs.core.chunk_rest(seq__73707__$1);
var G__74022 = c__5548__auto__;
var G__74023 = cljs.core.count(c__5548__auto__);
var G__74024 = (0);
seq__73707 = G__74021;
chunk__73708 = G__74022;
count__73709 = G__74023;
i__73710 = G__74024;
continue;
} else {
var shape = cljs.core.first(seq__73707__$1);
var temp__5825__auto___74025__$1 = app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_nodes(base_node,shape);
if(cljs.core.truth_(temp__5825__auto___74025__$1)){
var nodes_74026 = temp__5825__auto___74025__$1;
var seq__73741_74027 = cljs.core.seq(nodes_74026);
var chunk__73742_74028 = null;
var count__73743_74029 = (0);
var i__73744_74030 = (0);
while(true){
if((i__73744_74030 < count__73743_74029)){
var node_74032 = chunk__73742_74028.cljs$core$IIndexed$_nth$arity$2(null,i__73744_74030);
if((!((node_74032 == null)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_74032),"foreignObject")){
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_74032),"mask")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_74032),"filter")))){
var old_x_74033 = app.util.dom.get_attribute(node_74032,"data-old-x");
var old_y_74034 = app.util.dom.get_attribute(node_74032,"data-old-y");
var old_width_74035 = app.util.dom.get_attribute(node_74032,"data-old-width");
var old_height_74036 = app.util.dom.get_attribute(node_74032,"data-old-height");
app.util.dom.set_attribute_BANG_(node_74032,"x",old_x_74033);

app.util.dom.set_attribute_BANG_(node_74032,"y",old_y_74034);

app.util.dom.set_attribute_BANG_(node_74032,"width",old_width_74035);

app.util.dom.set_attribute_BANG_(node_74032,"height",old_height_74036);

app.util.dom.remove_attribute_BANG_(node_74032,"data-old-x");

app.util.dom.remove_attribute_BANG_(node_74032,"data-old-y");

app.util.dom.remove_attribute_BANG_(node_74032,"data-old-width");

app.util.dom.remove_attribute_BANG_(node_74032,"data-old-height");
} else {
if(app.util.dom.class_QMARK_(node_74032,"frame-title")){
app.util.dom.remove_attribute_BANG_(node_74032,"data-old-transform");
} else {
var old_transform_74037 = app.util.dom.get_attribute(node_74032,"data-old-transform");
if((!((old_transform_74037 == null)))){
app.util.dom.remove_attribute_BANG_(node_74032,"data-old-transform");
} else {
app.util.dom.remove_attribute_BANG_(node_74032,"transform");
}

}
}
}
} else {
}


var G__74038 = seq__73741_74027;
var G__74039 = chunk__73742_74028;
var G__74040 = count__73743_74029;
var G__74041 = (i__73744_74030 + (1));
seq__73741_74027 = G__74038;
chunk__73742_74028 = G__74039;
count__73743_74029 = G__74040;
i__73744_74030 = G__74041;
continue;
} else {
var temp__5825__auto___74042__$2 = cljs.core.seq(seq__73741_74027);
if(temp__5825__auto___74042__$2){
var seq__73741_74043__$1 = temp__5825__auto___74042__$2;
if(cljs.core.chunked_seq_QMARK_(seq__73741_74043__$1)){
var c__5548__auto___74044 = cljs.core.chunk_first(seq__73741_74043__$1);
var G__74045 = cljs.core.chunk_rest(seq__73741_74043__$1);
var G__74046 = c__5548__auto___74044;
var G__74047 = cljs.core.count(c__5548__auto___74044);
var G__74048 = (0);
seq__73741_74027 = G__74045;
chunk__73742_74028 = G__74046;
count__73743_74029 = G__74047;
i__73744_74030 = G__74048;
continue;
} else {
var node_74049 = cljs.core.first(seq__73741_74043__$1);
if((!((node_74049 == null)))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_74049),"foreignObject")){
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_74049),"mask")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.dom.get_tag_name(node_74049),"filter")))){
var old_x_74052 = app.util.dom.get_attribute(node_74049,"data-old-x");
var old_y_74053 = app.util.dom.get_attribute(node_74049,"data-old-y");
var old_width_74054 = app.util.dom.get_attribute(node_74049,"data-old-width");
var old_height_74055 = app.util.dom.get_attribute(node_74049,"data-old-height");
app.util.dom.set_attribute_BANG_(node_74049,"x",old_x_74052);

app.util.dom.set_attribute_BANG_(node_74049,"y",old_y_74053);

app.util.dom.set_attribute_BANG_(node_74049,"width",old_width_74054);

app.util.dom.set_attribute_BANG_(node_74049,"height",old_height_74055);

app.util.dom.remove_attribute_BANG_(node_74049,"data-old-x");

app.util.dom.remove_attribute_BANG_(node_74049,"data-old-y");

app.util.dom.remove_attribute_BANG_(node_74049,"data-old-width");

app.util.dom.remove_attribute_BANG_(node_74049,"data-old-height");
} else {
if(app.util.dom.class_QMARK_(node_74049,"frame-title")){
app.util.dom.remove_attribute_BANG_(node_74049,"data-old-transform");
} else {
var old_transform_74056 = app.util.dom.get_attribute(node_74049,"data-old-transform");
if((!((old_transform_74056 == null)))){
app.util.dom.remove_attribute_BANG_(node_74049,"data-old-transform");
} else {
app.util.dom.remove_attribute_BANG_(node_74049,"transform");
}

}
}
}
} else {
}


var G__74057 = cljs.core.next(seq__73741_74043__$1);
var G__74058 = null;
var G__74059 = (0);
var G__74060 = (0);
seq__73741_74027 = G__74057;
chunk__73742_74028 = G__74058;
count__73743_74029 = G__74059;
i__73744_74030 = G__74060;
continue;
}
} else {
}
}
break;
}
} else {
}


var G__74061 = cljs.core.next(seq__73707__$1);
var G__74062 = null;
var G__74063 = (0);
var G__74064 = (0);
seq__73707 = G__74061;
chunk__73708 = G__74062;
count__73709 = G__74063;
i__73710 = G__74064;
continue;
}
} else {
return null;
}
}
break;
}
});
app.main.ui.workspace.shapes.frame.dynamic_modifiers.adapt_text_modifiers = (function app$main$ui$workspace$shapes$frame$dynamic_modifiers$adapt_text_modifiers(modifiers,shape){
var shape_SINGLEQUOTE_ = app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(shape,modifiers);
var scalev = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(shape) / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_)),(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(shape) / new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_)));
return app.common.types.modifiers.resize.cljs$core$IFn$_invoke$arity$5(modifiers,scalev,cljs.core.first(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_)),new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_),new cljs.core.Keyword(null,"transform-inverse","transform-inverse",1233122576).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_));
});
/**
 * Adds to the object the information about if the current shape is a masking child. We use the metadata
 *   to not adding new parameters to the object.
 */
app.main.ui.workspace.shapes.frame.dynamic_modifiers.add_masking_child_QMARK_ = (function app$main$ui$workspace$shapes$frame$dynamic_modifiers$add_masking_child_QMARK_(objects){
return (function (p__73750){
var map__73752 = p__73750;
var map__73752__$1 = cljs.core.__destructure_map(map__73752);
var shape = map__73752__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73752__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73752__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
var masking_child_QMARK_ = ((app.common.files.helpers.mask_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,cljs.core.first(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent)))));
var G__73753 = shape;
if(masking_child_QMARK_){
return cljs.core.with_meta(G__73753,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"masking-child?","masking-child?",1265911452),true], null));
} else {
return G__73753;
}
});
});
app.main.ui.workspace.shapes.frame.dynamic_modifiers.use_dynamic_modifiers = (function app$main$ui$workspace$shapes$frame$dynamic_modifiers$use_dynamic_modifiers(objects,node,modifiers){
var transforms = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(modifiers)],(function (){
if((!((modifiers == null)))){
return app.common.data.mapm.cljs$core$IFn$_invoke$arity$2((function (id,p__73757){
var map__73758 = p__73757;
var map__73758__$1 = cljs.core.__destructure_map(map__73758);
var current_modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73758__$1,new cljs.core.Keyword(null,"modifiers","modifiers",50378834));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
var adapt_text_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape))) && (((app.common.types.modifiers.has_geometry_QMARK_(current_modifiers)) && ((!(app.common.types.modifiers.only_move_QMARK_(current_modifiers)))))));
var current_modifiers__$1 = (function (){var G__73759 = current_modifiers;
if(adapt_text_QMARK_){
return app.main.ui.workspace.shapes.frame.dynamic_modifiers.adapt_text_modifiers(G__73759,shape);
} else {
return G__73759;
}
})();
return app.common.types.modifiers.modifiers__GT_transform(current_modifiers__$1);
}),modifiers);
} else {
return null;
}
}));
var add_children = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(modifiers)],(function (){
return app.common.types.modifiers.added_children_frames(modifiers);
}));
var shapes = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(transforms)],(function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.shapes.frame.dynamic_modifiers.add_masking_child_QMARK_(objects),app.common.data.getf(objects)),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__73754_SHARP_){
return (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(transforms,p1__73754_SHARP_) == null)));
}),cljs.core.keys(transforms)));
}));
var add_children__$1 = app.main.ui.hooks.use_equal_memo(add_children);
var add_children_prev = app.main.ui.hooks.use_previous(add_children__$1);
var prev_shapes = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
var prev_modifiers = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
var prev_transforms = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(add_children__$1)],(function (){
var raf_id1 = app.util.timers.raf((function (){
var seq__73760 = cljs.core.seq(add_children_prev);
var chunk__73761 = null;
var count__73762 = (0);
var i__73763 = (0);
while(true){
if((i__73763 < count__73762)){
var map__73770 = chunk__73761.cljs$core$IIndexed$_nth$arity$2(null,i__73763);
var map__73770__$1 = cljs.core.__destructure_map(map__73770);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73770__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var shape_node_74072 = app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_shape_node.cljs$core$IFn$_invoke$arity$1(shape);
var mirror_node_74073 = app.util.dom.query.cljs$core$IFn$_invoke$arity$1(""+".mirror-shape[href='#shape-"+(shape ?? "")+"'");
if(cljs.core.truth_(mirror_node_74073)){
mirror_node_74073.remove();
} else {
}

var temp__5825__auto___74074 = (function (){var G__73771 = shape_node_74072;
if((G__73771 == null)){
return null;
} else {
return app.util.dom.get_parent(G__73771);
}
})();
if(cljs.core.truth_(temp__5825__auto___74074)){
var parent_74075 = temp__5825__auto___74074;
app.util.dom.remove_attribute_BANG_(parent_74075,"display");
} else {
}


var G__74076 = seq__73760;
var G__74077 = chunk__73761;
var G__74078 = count__73762;
var G__74079 = (i__73763 + (1));
seq__73760 = G__74076;
chunk__73761 = G__74077;
count__73762 = G__74078;
i__73763 = G__74079;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__73760);
if(temp__5825__auto__){
var seq__73760__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73760__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__73760__$1);
var G__74080 = cljs.core.chunk_rest(seq__73760__$1);
var G__74081 = c__5548__auto__;
var G__74082 = cljs.core.count(c__5548__auto__);
var G__74083 = (0);
seq__73760 = G__74080;
chunk__73761 = G__74081;
count__73762 = G__74082;
i__73763 = G__74083;
continue;
} else {
var map__73772 = cljs.core.first(seq__73760__$1);
var map__73772__$1 = cljs.core.__destructure_map(map__73772);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73772__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var shape_node_74084 = app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_shape_node.cljs$core$IFn$_invoke$arity$1(shape);
var mirror_node_74085 = app.util.dom.query.cljs$core$IFn$_invoke$arity$1(""+".mirror-shape[href='#shape-"+(shape ?? "")+"'");
if(cljs.core.truth_(mirror_node_74085)){
mirror_node_74085.remove();
} else {
}

var temp__5825__auto___74086__$1 = (function (){var G__73773 = shape_node_74084;
if((G__73773 == null)){
return null;
} else {
return app.util.dom.get_parent(G__73773);
}
})();
if(cljs.core.truth_(temp__5825__auto___74086__$1)){
var parent_74087 = temp__5825__auto___74086__$1;
app.util.dom.remove_attribute_BANG_(parent_74087,"display");
} else {
}


var G__74088 = cljs.core.next(seq__73760__$1);
var G__74089 = null;
var G__74090 = (0);
var G__74091 = (0);
seq__73760 = G__74088;
chunk__73761 = G__74089;
count__73762 = G__74090;
i__73763 = G__74091;
continue;
}
} else {
return null;
}
}
break;
}
}));
var raf_id2 = app.util.timers.raf((function (){
var seq__73774 = cljs.core.seq(add_children__$1);
var chunk__73775 = null;
var count__73776 = (0);
var i__73777 = (0);
while(true){
if((i__73777 < count__73776)){
var map__73780 = chunk__73775.cljs$core$IIndexed$_nth$arity$2(null,i__73777);
var map__73780__$1 = cljs.core.__destructure_map(map__73780);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73780__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73780__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var frame_node_74092 = app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_shape_node.cljs$core$IFn$_invoke$arity$1(frame);
var shape_node_74093 = app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_shape_node.cljs$core$IFn$_invoke$arity$1(shape);
if((((!((frame_node_74092 == null)))) && ((!((shape_node_74093 == null)))))){
var clip_id_74094 = app.util.dom.get_attribute(app.util.dom.query.cljs$core$IFn$_invoke$arity$2(frame_node_74092,":scope > defs > .frame-clip-def"),"id");
var use_node_74095 = app.util.dom.create_element.cljs$core$IFn$_invoke$arity$2("http://www.w3.org/2000/svg","use");
var contents_node_74096 = (function (){var or__5025__auto__ = app.util.dom.query.cljs$core$IFn$_invoke$arity$2(frame_node_74092,".frame-children");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return frame_node_74092;
}
})();
app.util.dom.set_attribute_BANG_(use_node_74095,"href",""+"#shape-"+(shape ?? ""));

app.util.dom.set_attribute_BANG_(use_node_74095,"clip-path",""+"url(#"+(clip_id_74094 ?? "")+")");

app.util.dom.add_class_BANG_(use_node_74095,"mirror-shape");

app.util.dom.append_child_BANG_(contents_node_74096,use_node_74095);

app.util.dom.set_attribute_BANG_(app.util.dom.get_parent(shape_node_74093),"display","none");
} else {
}


var G__74097 = seq__73774;
var G__74098 = chunk__73775;
var G__74099 = count__73776;
var G__74100 = (i__73777 + (1));
seq__73774 = G__74097;
chunk__73775 = G__74098;
count__73776 = G__74099;
i__73777 = G__74100;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__73774);
if(temp__5825__auto__){
var seq__73774__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73774__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__73774__$1);
var G__74101 = cljs.core.chunk_rest(seq__73774__$1);
var G__74102 = c__5548__auto__;
var G__74103 = cljs.core.count(c__5548__auto__);
var G__74104 = (0);
seq__73774 = G__74101;
chunk__73775 = G__74102;
count__73776 = G__74103;
i__73777 = G__74104;
continue;
} else {
var map__73781 = cljs.core.first(seq__73774__$1);
var map__73781__$1 = cljs.core.__destructure_map(map__73781);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73781__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73781__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var frame_node_74106 = app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_shape_node.cljs$core$IFn$_invoke$arity$1(frame);
var shape_node_74107 = app.main.ui.workspace.shapes.frame.dynamic_modifiers.get_shape_node.cljs$core$IFn$_invoke$arity$1(shape);
if((((!((frame_node_74106 == null)))) && ((!((shape_node_74107 == null)))))){
var clip_id_74111 = app.util.dom.get_attribute(app.util.dom.query.cljs$core$IFn$_invoke$arity$2(frame_node_74106,":scope > defs > .frame-clip-def"),"id");
var use_node_74112 = app.util.dom.create_element.cljs$core$IFn$_invoke$arity$2("http://www.w3.org/2000/svg","use");
var contents_node_74113 = (function (){var or__5025__auto__ = app.util.dom.query.cljs$core$IFn$_invoke$arity$2(frame_node_74106,".frame-children");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return frame_node_74106;
}
})();
app.util.dom.set_attribute_BANG_(use_node_74112,"href",""+"#shape-"+(shape ?? ""));

app.util.dom.set_attribute_BANG_(use_node_74112,"clip-path",""+"url(#"+(clip_id_74111 ?? "")+")");

app.util.dom.add_class_BANG_(use_node_74112,"mirror-shape");

app.util.dom.append_child_BANG_(contents_node_74113,use_node_74112);

app.util.dom.set_attribute_BANG_(app.util.dom.get_parent(shape_node_74107),"display","none");
} else {
}


var G__74116 = cljs.core.next(seq__73774__$1);
var G__74117 = null;
var G__74118 = (0);
var G__74119 = (0);
seq__73774 = G__74116;
chunk__73775 = G__74117;
count__73776 = G__74118;
i__73777 = G__74119;
continue;
}
} else {
return null;
}
}
break;
}
}));
return (function (){
cancelAnimationFrame(raf_id1);

return cancelAnimationFrame(raf_id2);
});
}));

return rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(transforms)],(function (){
var curr_shapes_set = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),shapes);
var prev_shapes_set = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.deref(prev_shapes));
var new_shapes = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__73755_SHARP_){
return cljs.core.contains_QMARK_(prev_shapes_set,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__73755_SHARP_));
}),shapes);
var removed_shapes = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__73756_SHARP_){
return cljs.core.contains_QMARK_(curr_shapes_set,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__73756_SHARP_));
}),cljs.core.deref(prev_shapes));
var raf_id1 = ((app.common.data.not_empty_QMARK_(new_shapes))?app.util.timers.raf((function (){
return app.main.ui.workspace.shapes.frame.dynamic_modifiers.start_transform_BANG_(node,new_shapes);
})):null);
var raf_id2 = ((app.common.data.not_empty_QMARK_(shapes))?app.util.timers.raf((function (){
return app.main.ui.workspace.shapes.frame.dynamic_modifiers.update_transform_BANG_(node,shapes,transforms,modifiers);
})):null);
var raf_id3 = ((app.common.data.not_empty_QMARK_(removed_shapes))?app.util.timers.raf((function (){
return app.main.ui.workspace.shapes.frame.dynamic_modifiers.remove_transform_BANG_(node,removed_shapes);
})):null);
cljs.core.reset_BANG_(prev_modifiers,modifiers);

cljs.core.reset_BANG_(prev_transforms,transforms);

cljs.core.reset_BANG_(prev_shapes,shapes);

return (function (){
if(cljs.core.truth_(raf_id1)){
cancelAnimationFrame(raf_id1);
} else {
}

if(cljs.core.truth_(raf_id2)){
cancelAnimationFrame(raf_id2);
} else {
}

if(cljs.core.truth_(raf_id3)){
return cancelAnimationFrame(raf_id3);
} else {
return null;
}
});
}));
});

//# sourceMappingURL=app.main.ui.workspace.shapes.frame.dynamic_modifiers.js.map
