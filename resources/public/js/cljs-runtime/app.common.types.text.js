import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.flags.js";
import "./app.common.types.color.js";
import "./app.common.types.fills.js";
import "./clojure.set.js";
import "./clojure.walk.js";
import "./cuerdas.core.js";
goog.provide('app.common.types.text');
app.common.types.text.text_typography_attrs = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356),new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688)], null);
app.common.types.text.text_fill_attrs = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098),new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255),new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870)], null);
app.common.types.text.text_font_attrs = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"font-style","font-style",-773672352)], null);
app.common.types.text.text_align_attrs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-align","text-align",1786091845)], null);
app.common.types.text.text_direction_attrs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-direction","text-direction",590275785)], null);
app.common.types.text.text_spacing_attrs = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767)], null);
app.common.types.text.text_valign_attrs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333)], null);
app.common.types.text.text_decoration_attrs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207)], null);
app.common.types.text.text_transform_attrs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676)], null);
app.common.types.text.text_fills = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fills","fills",902966780)], null);
app.common.types.text.shape_attrs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grow-type","grow-type",-908344411)], null);
app.common.types.text.root_attrs = app.common.types.text.text_valign_attrs;
app.common.types.text.paragraph_attrs = app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(app.common.types.text.text_align_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.text_direction_attrs], 0));
app.common.types.text.text_node_attrs = app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(app.common.types.text.text_typography_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.text_font_attrs,app.common.types.text.text_spacing_attrs,app.common.types.text.text_decoration_attrs,app.common.types.text.text_transform_attrs,app.common.types.text.text_fills], 0));
app.common.types.text.text_all_attrs = app.common.data.concat_set.cljs$core$IFn$_invoke$arity$variadic(app.common.types.text.shape_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.root_attrs,app.common.types.text.paragraph_attrs,app.common.types.text.text_node_attrs], 0));
app.common.types.text.text_style_attrs = app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(app.common.types.text.root_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.paragraph_attrs,app.common.types.text.text_node_attrs], 0));
app.common.types.text.default_root_attrs = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"vertical-align","vertical-align",651007333),"top"], null);
app.common.types.text.default_text_fills = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),"#000000",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(1)], null)], null);
app.common.types.text.default_paragraph_attrs = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-align","text-align",1786091845),"left",new cljs.core.Keyword(null,"text-direction","text-direction",590275785),"ltr"], null);
app.common.types.text.default_text_attrs = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"font-style","font-style",-773672352),new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),new cljs.core.Keyword(null,"text-align","text-align",1786091845),new cljs.core.Keyword(null,"font-id","font-id",-390084123),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"text-direction","text-direction",590275785),new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"font-family","font-family",-667419874)],["1.2","normal","none","left","sourcesanspro","14","400","ltr","regular","none","0","sourcesanspro"]);
/**
 * Return calculated default text fills
 */
app.common.types.text.get_default_text_fills = (function app$common$types$text$get_default_text_fills(){
if(cljs.core.contains_QMARK_(app.common.flags._STAR_current_STAR_,new cljs.core.Keyword(null,"frontend-binary-fills","frontend-binary-fills",-342747503))){
return app.common.types.fills.from_plain(app.common.types.text.default_text_fills);
} else {
return app.common.types.text.default_text_fills;
}
});
/**
 * Return calculated default text attrs.
 * 
 *   NOTE: is implemented as function because it needs resolve at runtime
 *   the activated flag for properly encode the fills
 */
app.common.types.text.get_default_text_attrs = (function app$common$types$text$get_default_text_attrs(){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.types.text.default_text_attrs,new cljs.core.Keyword(null,"fills","fills",902966780),app.common.types.text.get_default_text_fills());
});
app.common.types.text.typography_fields = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"font-style","font-style",-773672352),new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"text-transform","text-transform",1685000676)], null);
app.common.types.text.default_typography = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(app.common.types.text.default_text_attrs,app.common.types.text.typography_fields),new cljs.core.Keyword(null,"name","name",1843675177),"Source Sans Pro Regular");
app.common.types.text.node_seq = (function app$common$types$text$node_seq(var_args){
var G__49599 = arguments.length;
switch (G__49599) {
case 1:
return app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$1 = (function (root){
return app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,root);
}));

(app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$2 = (function (match_QMARK_,root){
return cljs.core.seq(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(match_QMARK_,cljs.core.tree_seq(cljs.core.map_QMARK_,new cljs.core.Keyword(null,"children","children",-940561982),root)));
}));

(app.common.types.text.node_seq.cljs$lang$maxFixedArity = 2);

app.common.types.text.is_text_node_QMARK_ = (function app$common$types$text$is_text_node_QMARK_(node){
return (((new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node) == null)) && (typeof new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node) === 'string'));
});
app.common.types.text.is_paragraph_set_node_QMARK_ = (function app$common$types$text$is_paragraph_set_node_QMARK_(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("paragraph-set",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node));
});
app.common.types.text.is_paragraph_node_QMARK_ = (function app$common$types$text$is_paragraph_node_QMARK_(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("paragraph",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node));
});
app.common.types.text.is_root_node_QMARK_ = (function app$common$types$text$is_root_node_QMARK_(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("root",new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node));
});
app.common.types.text.is_node_QMARK_ = (function app$common$types$text$is_node_QMARK_(node){
return ((app.common.types.text.is_text_node_QMARK_(node)) || (((app.common.types.text.is_paragraph_node_QMARK_(node)) || (((app.common.types.text.is_paragraph_set_node_QMARK_(node)) || (app.common.types.text.is_root_node_QMARK_(node)))))));
});
/**
 * Only matches content nodes, ignoring the paragraph-set nodes.
 */
app.common.types.text.is_content_node_QMARK_ = (function app$common$types$text$is_content_node_QMARK_(node){
return ((app.common.types.text.is_text_node_QMARK_(node)) || (((app.common.types.text.is_paragraph_node_QMARK_(node)) || (app.common.types.text.is_root_node_QMARK_(node)))));
});
app.common.types.text.transform_nodes = (function app$common$types$text$transform_nodes(var_args){
var G__49604 = arguments.length;
switch (G__49604) {
case 2:
return app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$2 = (function (transform,root){
return app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$3(cljs.core.identity,transform,root);
}));

(app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$3 = (function (pred,transform,root){
return clojure.walk.postwalk((function (item){
if(cljs.core.truth_((function (){var and__5023__auto__ = app.common.types.text.is_node_QMARK_(item);
if(and__5023__auto__){
return (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(item) : pred.call(null,item));
} else {
return and__5023__auto__;
}
})())){
return (transform.cljs$core$IFn$_invoke$arity$1 ? transform.cljs$core$IFn$_invoke$arity$1(item) : transform.call(null,item));
} else {
return item;
}
}),root);
}));

(app.common.types.text.transform_nodes.cljs$lang$maxFixedArity = 3);

app.common.types.text.update_text_content = (function app$common$types$text$update_text_content(shape,pred_fn,update_fn,attrs){
var update_attrs_fn = (function (p1__49605_SHARP_){
return (update_fn.cljs$core$IFn$_invoke$arity$2 ? update_fn.cljs$core$IFn$_invoke$arity$2(p1__49605_SHARP_,attrs) : update_fn.call(null,p1__49605_SHARP_,attrs));
});
var transform = (function (p1__49606_SHARP_){
return app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$3(pred_fn,update_attrs_fn,p1__49606_SHARP_);
});
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"content","content",15833224),transform);
});
app.common.types.text.generate_shape_name = (function app$common$types$text$generate_shape_name(text){
return cljs.core.subs.cljs$core$IFn$_invoke$arity$3(text,(0),(function (){var x__5113__auto__ = (280);
var y__5114__auto__ = cljs.core.count(text);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})());
});
/**
 * Given two content text structures, conformed by maps and vectors,
 * compare them, and returns a set with the differences info.
 * If the structures are equal, it returns an empty set. If the structure
 * has changed, it returns :text-content-structure. There are two
 * callbacks to specify what to return when there is a text change with
 * the same structure, and when attributes change.
 */
app.common.types.text.compare_text_content = (function app$common$types$text$compare_text_content(a,b,p__49613){
var map__49614 = p__49613;
var map__49614__$1 = cljs.core.__destructure_map(map__49614);
var callbacks = map__49614__$1;
var text_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49614__$1,new cljs.core.Keyword(null,"text-cb","text-cb",33486268));
var attribute_cb = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49614__$1,new cljs.core.Keyword(null,"attribute-cb","attribute-cb",417371796));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(a,b)){
return cljs.core.PersistentHashSet.EMPTY;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(a),cljs.core.type(b))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-content-structure","text-content-structure",-2085099684),null], null), null);
} else {
if(cljs.core.map_QMARK_(a)){
var keys = cljs.core.disj.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(cljs.core.set(cljs.core.keys(a)),cljs.core.set(cljs.core.keys(b))),new cljs.core.Keyword(null,"key","key",-1516042587));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,k){
var v1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(a,k);
var v2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(b,k);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"children","children",-940561982))){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(v1),cljs.core.count(v2))){
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-content-structure","text-content-structure",-2085099684),null], null), null);
} else {
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__49611_SHARP_,p2__49612_SHARP_){
return (app.common.types.text.compare_text_content.cljs$core$IFn$_invoke$arity$3 ? app.common.types.text.compare_text_content.cljs$core$IFn$_invoke$arity$3(p1__49611_SHARP_,p2__49612_SHARP_,callbacks) : app.common.types.text.compare_text_content.call(null,p1__49611_SHARP_,p2__49612_SHARP_,callbacks));
}),v1,v2)));
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"text","text",-1790561697))){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v1,v2)){
return (text_cb.cljs$core$IFn$_invoke$arity$1 ? text_cb.cljs$core$IFn$_invoke$arity$1(acc) : text_cb.call(null,acc));
} else {
return acc;
}
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v1,v2)){
return (attribute_cb.cljs$core$IFn$_invoke$arity$2 ? attribute_cb.cljs$core$IFn$_invoke$arity$2(acc,k) : attribute_cb.call(null,acc,k));
} else {
return acc;
}

}
}
}),cljs.core.PersistentHashSet.EMPTY,keys);
} else {
return new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-content-structure","text-content-structure",-2085099684),null], null), null);

}
}
}
});
/**
 * Given a text structure, and a map of attrs, check that all the internal attrs in
 * paragraphs and sentences have the same attrs
 */
app.common.types.text.equal_attrs_QMARK_ = (function app$common$types$text$equal_attrs_QMARK_(var_args){
var G__49618 = arguments.length;
switch (G__49618) {
case 2:
return app.common.types.text.equal_attrs_QMARK_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.text.equal_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.text.equal_attrs_QMARK_.cljs$core$IFn$_invoke$arity$2 = (function (item,attrs){
return app.common.types.text.equal_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3(item,attrs,true);
}));

(app.common.types.text.equal_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3 = (function (item,attrs,ignore_QMARK_){
var item_attrs = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"children","children",-940561982)], 0));
var and__5023__auto__ = (function (){var or__5025__auto__ = ignore_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((cljs.core.empty_QMARK_(item_attrs)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attrs,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(item,new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"children","children",-940561982)], 0)))));
}
})();
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.every_QMARK_((function (p1__49615_SHARP_){
return app.common.types.text.equal_attrs_QMARK_.cljs$core$IFn$_invoke$arity$3(p1__49615_SHARP_,attrs,false);
}),new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(item));
} else {
return and__5023__auto__;
}
}));

(app.common.types.text.equal_attrs_QMARK_.cljs$lang$maxFixedArity = 3);

/**
 * Given a content text structure, extract it's first paragraph
 * text attrs
 */
app.common.types.text.get_first_paragraph_text_attrs = (function app$common$types$text$get_first_paragraph_text_attrs(content){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(content,new cljs.core.Keyword(null,"children","children",-940561982)),(0)),new cljs.core.Keyword(null,"children","children",-940561982)),(0)),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"children","children",-940561982)], 0));
});
/**
 * Given two content text structures, conformed by maps and vectors,
 * compare them, and returns a set with the type of differences.
 * The possibilities are
 *   :text-content-text
 *   :text-content-attribute
 *   :text-content-structure
 */
app.common.types.text.get_diff_type = (function app$common$types$text$get_diff_type(a,b){
return app.common.types.text.compare_text_content(a,b,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-cb","text-cb",33486268),(function (acc){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.Keyword(null,"text-content-text","text-content-text",1379059411));
}),new cljs.core.Keyword(null,"attribute-cb","attribute-cb",417371796),(function (acc,_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.Keyword(null,"text-content-attribute","text-content-attribute",2029723884));
})], null));
});
/**
 * Given two content text structures, conformed by maps and vectors,
 * compare them, and returns a set with the attributes that have changed.
 * This is independent of the text structure, so if the structure changes
 * but the attributes are the same, it will return an empty set.
 */
app.common.types.text.get_diff_attrs = (function app$common$types$text$get_diff_attrs(a,b){
var diff_attrs = app.common.types.text.compare_text_content(a,b,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text-cb","text-cb",33486268),cljs.core.identity,new cljs.core.Keyword(null,"attribute-cb","attribute-cb",417371796),(function (acc,attr){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,attr);
})], null));
if((!(cljs.core.contains_QMARK_(diff_attrs,new cljs.core.Keyword(null,"text-content-structure","text-content-structure",-2085099684))))){
return diff_attrs;
} else {
var attrs = app.common.types.text.get_first_paragraph_text_attrs(a);
if(cljs.core.truth_((function (){var and__5023__auto__ = app.common.types.text.equal_attrs_QMARK_.cljs$core$IFn$_invoke$arity$2(a,attrs);
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.text.equal_attrs_QMARK_.cljs$core$IFn$_invoke$arity$2(b,attrs);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.PersistentHashSet.EMPTY;
} else {
return cljs.core.disj.cljs$core$IFn$_invoke$arity$2(diff_attrs,new cljs.core.Keyword(null,"text-content-structure","text-content-structure",-2085099684));
}
}
});
/**
 * Given two content text structures, check that the structures are equal.
 * This means that all the :children keys at any level has the same number of
 * entries
 */
app.common.types.text.equal_structure_QMARK_ = (function app$common$types$text$equal_structure_QMARK_(a,b){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.type(a),cljs.core.type(b))) && ((!(((cljs.core.map_QMARK_(a)) && (cljs.core.map_QMARK_(b)))))))){
return false;
} else {
if(cljs.core.map_QMARK_(a)){
var children_a = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(a);
var children_b = new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(b);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(children_a),cljs.core.count(children_b))){
return false;
} else {
return cljs.core.every_QMARK_(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$3(app.common.types.text.equal_structure_QMARK_,children_a,children_b));
}
} else {
return true;

}
}
});
/**
 * Given two equal content text structures, deep copy all the keys :text
 * from origin to destiny
 */
app.common.types.text.copy_text_keys = (function app$common$types$text$copy_text_keys(origin,destiny){
if(cljs.core.map_QMARK_(origin)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5503__auto__ = (function app$common$types$text$copy_text_keys_$_iter__49623(s__49624){
return (new cljs.core.LazySeq(null,(function (){
var s__49624__$1 = s__49624;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__49624__$1);
if(temp__5825__auto__){
var s__49624__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49624__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__49624__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__49626 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__49625 = (0);
while(true){
if((i__49625 < size__5502__auto__)){
var k = cljs.core._nth(c__5501__auto__,i__49625);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"key","key",-1516042587))){
cljs.core.chunk_append(b__49626,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),k))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (i__49625,s__49624__$1,k,c__5501__auto__,size__5502__auto__,b__49626,s__49624__$2,temp__5825__auto__){
return (function (p1__49621_SHARP_,p2__49622_SHARP_){
return (app.common.types.text.copy_text_keys.cljs$core$IFn$_invoke$arity$2 ? app.common.types.text.copy_text_keys.cljs$core$IFn$_invoke$arity$2(p1__49621_SHARP_,p2__49622_SHARP_) : app.common.types.text.copy_text_keys.call(null,p1__49621_SHARP_,p2__49622_SHARP_));
});})(i__49625,s__49624__$1,k,c__5501__auto__,size__5502__auto__,b__49626,s__49624__$2,temp__5825__auto__))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(origin,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(destiny,k)))], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),k))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(origin)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(destiny,k)], null)
)));

var G__49708 = (i__49625 + (1));
i__49625 = G__49708;
continue;
} else {
var G__49709 = (i__49625 + (1));
i__49625 = G__49709;
continue;
}
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49626),app$common$types$text$copy_text_keys_$_iter__49623(cljs.core.chunk_rest(s__49624__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49626),null);
}
} else {
var k = cljs.core.first(s__49624__$2);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(k,new cljs.core.Keyword(null,"key","key",-1516042587))){
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),k))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$3(((function (s__49624__$1,k,s__49624__$2,temp__5825__auto__){
return (function (p1__49621_SHARP_,p2__49622_SHARP_){
return (app.common.types.text.copy_text_keys.cljs$core$IFn$_invoke$arity$2 ? app.common.types.text.copy_text_keys.cljs$core$IFn$_invoke$arity$2(p1__49621_SHARP_,p2__49622_SHARP_) : app.common.types.text.copy_text_keys.call(null,p1__49621_SHARP_,p2__49622_SHARP_));
});})(s__49624__$1,k,s__49624__$2,temp__5825__auto__))
,cljs.core.get.cljs$core$IFn$_invoke$arity$2(origin,k),cljs.core.get.cljs$core$IFn$_invoke$arity$2(destiny,k)))], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),k))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(origin)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$2(destiny,k)], null)
)),app$common$types$text$copy_text_keys_$_iter__49623(cljs.core.rest(s__49624__$2)));
} else {
var G__49714 = cljs.core.rest(s__49624__$2);
s__49624__$1 = G__49714;
continue;
}
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.keys(destiny));
})());
} else {
return null;
}
});
/**
 * Given a content text structure and a list of attrs, copy that
 * attrs values on all the content tree
 */
app.common.types.text.copy_attrs_keys = (function app$common$types$text$copy_attrs_keys(content,attrs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,(function (){var iter__5503__auto__ = (function app$common$types$text$copy_attrs_keys_$_iter__49632(s__49633){
return (new cljs.core.LazySeq(null,(function (){
var s__49633__$1 = s__49633;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__49633__$1);
if(temp__5825__auto__){
var s__49633__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__49633__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__49633__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__49635 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__49634 = (0);
while(true){
if((i__49634 < size__5502__auto__)){
var vec__49636 = cljs.core._nth(c__5501__auto__,i__49634);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49636,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49636,(1),null);
cljs.core.chunk_append(b__49635,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),k))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (i__49634,vec__49636,k,v,c__5501__auto__,size__5502__auto__,b__49635,s__49633__$2,temp__5825__auto__){
return (function (p1__49630_SHARP_){
return (app.common.types.text.copy_attrs_keys.cljs$core$IFn$_invoke$arity$2 ? app.common.types.text.copy_attrs_keys.cljs$core$IFn$_invoke$arity$2(p1__49630_SHARP_,attrs) : app.common.types.text.copy_attrs_keys.call(null,p1__49630_SHARP_,attrs));
});})(i__49634,vec__49636,k,v,c__5501__auto__,size__5502__auto__,b__49635,s__49633__$2,temp__5825__auto__))
,v))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$3(attrs,k,v)], null)));

var G__49715 = (i__49634 + (1));
i__49634 = G__49715;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__49635),app$common$types$text$copy_attrs_keys_$_iter__49632(cljs.core.chunk_rest(s__49633__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__49635),null);
}
} else {
var vec__49642 = cljs.core.first(s__49633__$2);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49642,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49642,(1),null);
return cljs.core.cons(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"children","children",-940561982),k))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2(((function (vec__49642,k,v,s__49633__$2,temp__5825__auto__){
return (function (p1__49630_SHARP_){
return (app.common.types.text.copy_attrs_keys.cljs$core$IFn$_invoke$arity$2 ? app.common.types.text.copy_attrs_keys.cljs$core$IFn$_invoke$arity$2(p1__49630_SHARP_,attrs) : app.common.types.text.copy_attrs_keys.call(null,p1__49630_SHARP_,attrs));
});})(vec__49642,k,v,s__49633__$2,temp__5825__auto__))
,v))], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,cljs.core.get.cljs$core$IFn$_invoke$arity$3(attrs,k,v)], null)),app$common$types$text$copy_attrs_keys_$_iter__49632(cljs.core.rest(s__49633__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(content);
})());
});
/**
 * Given a root node of a text content extracts the texts with its associated styles
 */
app.common.types.text.content__GT_text = (function app$common$types$text$content__GT_text(content){
var add_node = (function app$common$types$text$content__GT_text_$_add_node(acc,node){
if(app.common.types.text.is_paragraph_node_QMARK_(node)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,cljs.core.PersistentVector.EMPTY);
} else {
if(app.common.types.text.is_text_node_QMARK_(node)){
var i = (cljs.core.count(acc) - (1));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,i,cljs.core.conj,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node));
} else {
return acc;

}
}
});
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__49647_SHARP_){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("",p1__49647_SHARP_);
}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(add_node,cljs.core.PersistentVector.EMPTY,app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$1(content))));
});
/**
 * Given a root node of a text content extracts the texts with its associated styles
 */
app.common.types.text.content__GT_text_PLUS_styles = (function app$common$types$text$content__GT_text_PLUS_styles(node){
var rec_style_text_map = (function app$common$types$text$content__GT_text_PLUS_styles_$_rec_style_text_map(acc,node__$1,style){
var node_style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,cljs.core.select_keys(node__$1,app.common.types.text.text_all_attrs)], 0));
var head = (function (){var or__5025__auto__ = cljs.core.first(acc);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,""], null);
}
})();
var vec__49671 = head;
var head_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49671,(0),null);
var head_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49671,(1),null);
var new_acc = (((!(app.common.types.text.is_text_node_QMARK_(node__$1))))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__49649_SHARP_,p2__49650_SHARP_){
return app$common$types$text$content__GT_text_PLUS_styles_$_rec_style_text_map(p1__49649_SHARP_,p2__49650_SHARP_,node_style);
}),acc,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node__$1)):((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(head_style,node_style))?cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_style,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$2(node__$1,"")], null),acc):cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_style,""+(head_text ?? "")+""+(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node__$1) ?? "")], null),cljs.core.rest(acc))
));
var new_acc__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node__$1),"paragraph"))?(function (){var vec__49675 = cljs.core.first(new_acc);
var hs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49675,(0),null);
var ht = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49675,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hs,""+(ht ?? "")+"\n"], null),cljs.core.rest(new_acc));
})():new_acc);
return new_acc__$1;
});
return cljs.core.reverse(rec_style_text_map(cljs.core.PersistentVector.EMPTY,node,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Changes the content of the text shape to use the text as argument. Will use the styles of the
 * first paragraph and text that is present in the shape (and override the rest)
 */
app.common.types.text.change_text = (function app$common$types$text$change_text(var_args){
var args__5755__auto__ = [];
var len__5749__auto___49717 = arguments.length;
var i__5750__auto___49718 = (0);
while(true){
if((i__5750__auto___49718 < len__5749__auto___49717)){
args__5755__auto__.push((arguments[i__5750__auto___49718]));

var G__49720 = (i__5750__auto___49718 + (1));
i__5750__auto___49718 = G__49720;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return app.common.types.text.change_text.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(app.common.types.text.change_text.cljs$core$IFn$_invoke$arity$variadic = (function (content,text,p__49699){
var map__49700 = p__49699;
var map__49700__$1 = cljs.core.__destructure_map(map__49700);
var styles = map__49700__$1;
var root_styles = cljs.core.select_keys(content,app.common.types.text.root_attrs);
var paragraph_style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.default_text_attrs,styles,cljs.core.select_keys(cljs.core.first(app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$2(app.common.types.text.is_paragraph_node_QMARK_,content)),app.common.types.text.text_all_attrs)], 0));
var text_style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.default_text_attrs,styles,cljs.core.select_keys(cljs.core.first(app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$2(app.common.types.text.is_text_node_QMARK_,content)),app.common.types.text.text_all_attrs)], 0));
var paragraph_texts = cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(text,"\n");
var paragraphs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (pt){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([paragraph_style,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"paragraph",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text","text",-1790561697),pt], null),text_style], 0))], null)], null)], 0));
}),paragraph_texts);
return app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"root",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"paragraph-set",new cljs.core.Keyword(null,"children","children",-940561982),paragraphs], null)], null)], null),root_styles);
}));

(app.common.types.text.change_text.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(app.common.types.text.change_text.cljs$lang$applyTo = (function (seq49694){
var G__49695 = cljs.core.first(seq49694);
var seq49694__$1 = cljs.core.next(seq49694);
var G__49696 = cljs.core.first(seq49694__$1);
var seq49694__$2 = cljs.core.next(seq49694__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__49695,G__49696,seq49694__$2);
}));


//# sourceMappingURL=app.common.types.text.js.map
