import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.transit.js";
import "./app.common.types.text.js";
import "./cuerdas.core.js";
goog.provide('app.common.text');
app.common.text.encode_style_value = (function app$common$text$encode_style_value(v){
return app.common.transit.encode_str.cljs$core$IFn$_invoke$arity$1(v);
});
app.common.text.decode_style_value = (function app$common$text$decode_style_value(v){
return app.common.transit.decode_str.cljs$core$IFn$_invoke$arity$1(v);
});
app.common.text.encode_style = (function app$common$text$encode_style(key,val){
var k = app.common.data.name(key);
var v = app.common.text.encode_style_value(val);
return ["PENPOT$$$",k,"$$$",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v)].join('');
});
app.common.text.decode_style = (function app$common$text$decode_style(style){
var vec__68743 = cuerdas.core.split.cljs$core$IFn$_invoke$arity$3(style,"$$$",(3));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68743,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68743,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68743,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),app.common.text.decode_style_value(v)], null);
});
app.common.text.attrs_to_styles = (function app$common$text$attrs_to_styles(attrs){
return cljs.core.reduce_kv((function (res,k,v){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(res,app.common.text.encode_style(k,v));
}),cljs.core.PersistentHashSet.EMPTY,attrs);
});
app.common.text.styles_to_attrs = (function app$common$text$styles_to_attrs(styles){
return cljs.core.persistent_BANG_(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,style){
if(cuerdas.core.starts_with_QMARK_(style,"PENPOT")){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,"PENPOT_SELECTION")){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(result,new cljs.core.Keyword(null,"penpot-selection","penpot-selection",-2017334082),true);
} else {
var vec__68746 = cuerdas.core.split.cljs$core$IFn$_invoke$arity$3(style,"$$$",(3));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68746,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68746,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68746,(2),null);
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(result,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),app.common.text.decode_style_value(v));
}
} else {
return result;
}
}),cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY),cljs.core.seq(styles)));
});
/**
 * Parses draft-js style ranges, converting encoded style name into a
 *   key/val pair of data.
 */
app.common.text.parse_draft_styles = (function app$common$text$parse_draft_styles(styles){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
var vec__68750 = cuerdas.core.split.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"style","style",-496642736)),"$$$",(3));
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68750,(0),null);
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68750,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68750,(2),null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(k),new cljs.core.Keyword(null,"val","val",128701612),app.common.text.decode_style_value(v),new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"offset","offset",296498311)),new cljs.core.Keyword(null,"length","length",588987862),cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"length","length",588987862))], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__68749_SHARP_){
return cuerdas.core.starts_with_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__68749_SHARP_,new cljs.core.Keyword(null,"style","style",-496642736)),"PENPOT$$$");
}),styles));
});
/**
 * Generates a character based index with associated styles map.
 */
app.common.text.build_style_index = (function app$common$text$build_style_index(length,ranges){
var result = cljs.core.transient$(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.constantly(cljs.core.PersistentArrayMap.EMPTY),cljs.core.range.cljs$core$IFn$_invoke$arity$1(length)));
var ranges__$1 = cljs.core.seq(ranges);
while(true){
var temp__5823__auto__ = cljs.core.first(ranges__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var map__68761 = temp__5823__auto__;
var map__68761__$1 = cljs.core.__destructure_map(map__68761);
var item = map__68761__$1;
var offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68761__$1,new cljs.core.Keyword(null,"offset","offset",296498311));
var length__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68761__$1,new cljs.core.Keyword(null,"length","length",588987862));
var G__68857 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(((function (result,ranges__$1,map__68761,map__68761__$1,item,offset,length__$1,temp__5823__auto__){
return (function (result__$1,index){
var prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result__$1,index);
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(result__$1,index,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prev,new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(item)));
});})(result,ranges__$1,map__68761,map__68761__$1,item,offset,length__$1,temp__5823__auto__))
,result,cljs.core.range.cljs$core$IFn$_invoke$arity$2(offset,(offset + length__$1)));
var G__68858 = cljs.core.rest(ranges__$1);
result = G__68857;
ranges__$1 = G__68858;
continue;
} else {
return cljs.core.persistent_BANG_(result);
}
break;
}
});
app.common.text.text__GT_code_points = (function app$common$text$text__GT_code_points(text){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,Array.from(text));
});
app.common.text.code_points__GT_text = (function app$common$text$code_points__GT_text(cpoints,start,end){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(cpoints,start,end));
});
/**
 * Conversion from draft doesn't convert correctly the fills gradient types. This
 *   function change the type from string to keyword of the gradient type
 */
app.common.text.fix_gradients = (function app$common$text$fix_gradients(data){
var fix_type = (function app$common$text$fix_gradients_$_fix_type(type){
var G__68765 = type;
if(typeof type === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__68765);
} else {
return G__68765;
}
});
var update_fill = (function app$common$text$fix_gradients_$_update_fill(fill){
return app.common.data.update_in_when(fill,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870),new cljs.core.Keyword(null,"type","type",1174270348)], null),fix_type);
});
var update_all_fills = (function app$common$text$fix_gradients_$_update_all_fills(fills){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(update_fill,fills);
});
return app.common.data.update_when(data,new cljs.core.Keyword(null,"fills","fills",902966780),update_all_fills);
});
app.common.text.convert_from_draft = (function app$common$text$convert_from_draft(content){
var extract_text = (function app$common$text$convert_from_draft_$_extract_text(cpoints,part){
var start = cljs.core.ffirst(part);
var end = (cljs.core.first(cljs.core.last(part)) + (1));
var text = app.common.text.code_points__GT_text(cpoints,start,end);
var attrs = cljs.core.second(cljs.core.first(part));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.text.fix_gradients(attrs),new cljs.core.Keyword(null,"text","text",-1790561697),text);
});
var split_texts = (function app$common$text$convert_from_draft_$_split_texts(text,styles,data){
var cpoints = app.common.text.text__GT_code_points(text);
var children = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__68767_SHARP_){
return extract_text(cpoints,p1__68767_SHARP_);
}),cljs.core.partition_by.cljs$core$IFn$_invoke$arity$2(cljs.core.second,app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(app.common.text.build_style_index(cljs.core.count(cpoints),app.common.text.parse_draft_styles(styles)))));
var G__68773 = children;
if(cljs.core.empty_QMARK_(children)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__68773,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"text","text",-1790561697),""));
} else {
return G__68773;
}
});
var build_paragraph = (function app$common$text$convert_from_draft_$_build_paragraph(block){
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword(null,"key","key",-1516042587));
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword(null,"text","text",-1790561697));
var styles = cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword(null,"inlineStyleRanges","inlineStyleRanges",-930533458));
var data = app.common.text.fix_gradients(cljs.core.get.cljs$core$IFn$_invoke$arity$2(block,new cljs.core.Keyword(null,"data","data",-232669377)));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"key","key",-1516042587),key),new cljs.core.Keyword(null,"type","type",1174270348),"paragraph"),new cljs.core.Keyword(null,"children","children",-940561982),split_texts(text,styles,data));
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"root",new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"paragraph-set",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(build_paragraph,cljs.core.get.cljs$core$IFn$_invoke$arity$2(content,new cljs.core.Keyword(null,"blocks","blocks",-610462153)))], null)], null)], null);
});
app.common.text.convert_to_draft = (function app$common$text$convert_to_draft(root){
var process_attr = (function app$common$text$convert_to_draft_$_process_attr(children,ranges,p__68802){
var vec__68808 = p__68802;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68808,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68808,(1),null);
var children__$1 = cljs.core.seq(children);
var start = null;
var offset = (0);
var ranges__$1 = ranges;
while(true){
var temp__5823__auto__ = cljs.core.first(children__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var map__68818 = temp__5823__auto__;
var map__68818__$1 = cljs.core.__destructure_map(map__68818);
var item = map__68818__$1;
var text = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68818__$1,new cljs.core.Keyword(null,"text","text",-1790561697));
var cpoints = app.common.text.text__GT_code_points(text);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$3(item,k,new cljs.core.Keyword("app.common.text","novalue","app.common.text/novalue",-632023824)))){
var G__68861 = cljs.core.rest(children__$1);
var G__68862 = (((start == null))?offset:start);
var G__68863 = (offset + cljs.core.count(cpoints));
var G__68864 = ranges__$1;
children__$1 = G__68861;
start = G__68862;
offset = G__68863;
ranges__$1 = G__68864;
continue;
} else {
if((!((start == null)))){
var G__68868 = cljs.core.rest(children__$1);
var G__68869 = null;
var G__68870 = (offset + cljs.core.count(cpoints));
var G__68871 = cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(ranges__$1,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"offset","offset",296498311),start,new cljs.core.Keyword(null,"length","length",588987862),(offset - start),new cljs.core.Keyword(null,"style","style",-496642736),app.common.text.encode_style(k,v)], null));
children__$1 = G__68868;
start = G__68869;
offset = G__68870;
ranges__$1 = G__68871;
continue;
} else {
var G__68872 = cljs.core.rest(children__$1);
var G__68873 = start;
var G__68874 = (offset + cljs.core.count(cpoints));
var G__68875 = ranges__$1;
children__$1 = G__68872;
start = G__68873;
offset = G__68874;
ranges__$1 = G__68875;
continue;
}
}
} else {
var G__68819 = ranges__$1;
if((!((start == null)))){
return cljs.core.conj_BANG_.cljs$core$IFn$_invoke$arity$2(G__68819,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"offset","offset",296498311),start,new cljs.core.Keyword(null,"length","length",588987862),(offset - start),new cljs.core.Keyword(null,"style","style",-496642736),app.common.text.encode_style(k,v)], null));
} else {
return G__68819;
}
}
break;
}
});
var calc_ranges = (function app$common$text$convert_to_draft_$_calc_ranges(p__68820){
var map__68821 = p__68820;
var map__68821__$1 = cljs.core.__destructure_map(map__68821);
var blok = map__68821__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68821__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__68774_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__68774_SHARP_,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"text","text",-1790561697)], 0));
})),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.empty_QMARK_),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(cljs.core.vec),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.distinct.cljs$core$IFn$_invoke$arity$0()], 0));
var f = (function (p1__68775_SHARP_,p2__68776_SHARP_){
return process_attr(children,p1__68775_SHARP_,p2__68776_SHARP_);
});
return cljs.core.persistent_BANG_(cljs.core.transduce.cljs$core$IFn$_invoke$arity$4(xform,cljs.core.completing.cljs$core$IFn$_invoke$arity$1(f),cljs.core.transient$(cljs.core.PersistentVector.EMPTY),children));
});
var build_block = (function app$common$text$convert_to_draft_$_build_block(p__68825){
var map__68826 = p__68825;
var map__68826__$1 = cljs.core.__destructure_map(map__68826);
var paragraph = map__68826__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68826__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__68826__$1,new cljs.core.Keyword(null,"children","children",-940561982));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"key","key",-1516042587),key,new cljs.core.Keyword(null,"depth","depth",1768663640),(0),new cljs.core.Keyword(null,"text","text",-1790561697),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),children)),new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(paragraph,new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"type","type",1174270348)], 0)),new cljs.core.Keyword(null,"type","type",1174270348),"unstyled",new cljs.core.Keyword(null,"entityRanges","entityRanges",570254512),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"inlineStyleRanges","inlineStyleRanges",-930533458),calc_ranges(paragraph)], null);
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"blocks","blocks",-610462153),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__68777_SHARP_,p2__68778_SHARP_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(p1__68777_SHARP_,build_block(p2__68778_SHARP_));
}),cljs.core.PersistentVector.EMPTY,app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$2((function (p1__68779_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__68779_SHARP_),"paragraph");
}),root)),new cljs.core.Keyword(null,"entityMap","entityMap",1771692951),cljs.core.PersistentArrayMap.EMPTY], null);
});
/**
 * Given a root node of a text content extracts the texts with its associated styles
 */
app.common.text.content__GT_text_PLUS_styles = (function app$common$text$content__GT_text_PLUS_styles(node){
var rec_style_text_map = (function app$common$text$content__GT_text_PLUS_styles_$_rec_style_text_map(acc,node__$1,style){
var node_style = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([style,cljs.core.select_keys(node__$1,app.common.types.text.text_all_attrs)], 0));
var head = (function (){var or__5025__auto__ = cljs.core.first(acc);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.PersistentArrayMap.EMPTY,""], null);
}
})();
var vec__68835 = head;
var head_style = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68835,(0),null);
var head_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68835,(1),null);
var new_acc = (((!(app.common.types.text.is_text_node_QMARK_(node__$1))))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__68827_SHARP_,p2__68828_SHARP_){
return app$common$text$content__GT_text_PLUS_styles_$_rec_style_text_map(p1__68827_SHARP_,p2__68828_SHARP_,node_style);
}),acc,new cljs.core.Keyword(null,"children","children",-940561982).cljs$core$IFn$_invoke$arity$1(node__$1)):((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(head_style,node_style))?cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_style,new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$2(node__$1,"")], null),acc):cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [node_style,""+(head_text ?? "")+""+(new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(node__$1) ?? "")], null),cljs.core.rest(acc))
));
var new_acc__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node__$1),"paragraph"))?(function (){var vec__68838 = cljs.core.first(new_acc);
var hs = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68838,(0),null);
var ht = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68838,(1),null);
return cljs.core.cons(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [hs,""+(ht ?? "")+"\n"], null),cljs.core.rest(new_acc));
})():new_acc);
return new_acc__$1;
});
return cljs.core.reverse(rec_style_text_map(cljs.core.PersistentVector.EMPTY,node,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Adds a property `$id` that identifies the current node inside
 */
app.common.text.index_content = (function app$common$text$index_content(var_args){
var G__68845 = arguments.length;
switch (G__68845) {
case 1:
return app.common.text.index_content.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return app.common.text.index_content.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.text.index_content.cljs$core$IFn$_invoke$arity$1 = (function (content){
return app.common.text.index_content.cljs$core$IFn$_invoke$arity$3(content,null,(0));
}));

(app.common.text.index_content.cljs$core$IFn$_invoke$arity$3 = (function (node,path,index){
var cur_path = (cljs.core.truth_(path)?""+(path ?? "")+"-":""+"");
var cur_path__$1 = ""+(cur_path ?? "")+(app.common.data.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$2(node,new cljs.core.Keyword(null,"text","text",-1790561697))) ?? "")+"-"+(index ?? "");
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(node,new cljs.core.Keyword(null,"$id","$id",-1635392559),cur_path__$1),new cljs.core.Keyword(null,"children","children",-940561982),(function (children){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__68846){
var vec__68847 = p__68846;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68847,(0),null);
var node__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__68847,(1),null);
return app.common.text.index_content.cljs$core$IFn$_invoke$arity$3(node__$1,cur_path__$1,idx);
}),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(children));
}));
}));

(app.common.text.index_content.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=app.common.text.js.map
