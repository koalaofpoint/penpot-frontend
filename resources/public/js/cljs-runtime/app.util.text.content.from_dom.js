import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.types.text.js";
import "./app.util.text.content.styles.js";
goog.provide('app.util.text.content.from_dom');
app.util.text.content.from_dom.is_text_node = (function app$util$text$content$from_dom$is_text_node(node){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.nodeType,Node.TEXT_NODE);
});
app.util.text.content.from_dom.is_element = (function app$util$text$content$from_dom$is_element(node,tag){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.nodeType,Node.ELEMENT_NODE)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(node.nodeName,tag.toUpperCase())));
});
app.util.text.content.from_dom.is_line_break = (function app$util$text$content$from_dom$is_line_break(node){
return app.util.text.content.from_dom.is_element(node,"br");
});
app.util.text.content.from_dom.is_text_span_child = (function app$util$text$content$from_dom$is_text_span_child(node){
return ((app.util.text.content.from_dom.is_line_break(node)) || (app.util.text.content.from_dom.is_text_node(node)));
});
app.util.text.content.from_dom.get_text_span_text = (function app$util$text$content$from_dom$get_text_span_text(element){
if(app.util.text.content.from_dom.is_text_span_child(element.firstChild)){
} else {
throw (new TypeError("Invalid text span child"));
}

if(app.util.text.content.from_dom.is_line_break(element.firstChild)){
return "";
} else {
return element.textContent;
}
});
app.util.text.content.from_dom.get_attrs_from_styles = (function app$util$text$content$from_dom$get_attrs_from_styles(element,attrs,defaults){
var attrs__$1 = (function (){var or__5025__auto__ = attrs;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
var value_empty_QMARK_ = (function (v){
return (((v == null)) || (((((typeof v === 'string') && (cljs.core.empty_QMARK_(v)))) || (((cljs.core.coll_QMARK_(v)) && (cljs.core.empty_QMARK_(v)))))));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,key){
var style = element.style;
var value = ((cljs.core.contains_QMARK_(app.util.text.content.styles.mapping,key))?(function (){var style_name = app.util.text.content.styles.get_style_name_as_css_variable(key);
var vec__55322 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.util.text.content.styles.mapping,key);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55322,(0),null);
var style_decode = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55322,(1),null);
var G__55325 = style.getPropertyValue(style_name);
return (style_decode.cljs$core$IFn$_invoke$arity$1 ? style_decode.cljs$core$IFn$_invoke$arity$1(G__55325) : style_decode.call(null,G__55325));
})():(function (){var style_name = app.util.text.content.styles.get_style_name(key);
return app.util.text.content.styles.normalize_attr_value(key,style.getPropertyValue(style_name));
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,key,((value_empty_QMARK_(value))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(defaults,key):value));
}),cljs.core.PersistentArrayMap.EMPTY,attrs__$1);
});
app.util.text.content.from_dom.get_text_span_styles = (function app$util$text$content$from_dom$get_text_span_styles(element){
return app.util.text.content.from_dom.get_attrs_from_styles(element,app.common.types.text.text_node_attrs,app.common.types.text.get_default_text_attrs());
});
app.util.text.content.from_dom.get_paragraph_styles = (function app$util$text$content$from_dom$get_paragraph_styles(element){
return app.util.text.content.from_dom.get_attrs_from_styles(element,app.common.data.concat_set.cljs$core$IFn$_invoke$arity$variadic(app.common.types.text.paragraph_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.text_node_attrs], 0)),app.common.data.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.text.default_paragraph_attrs,app.common.types.text.default_text_attrs], 0)));
});
app.util.text.content.from_dom.get_root_styles = (function app$util$text$content$from_dom$get_root_styles(element){
return app.util.text.content.from_dom.get_attrs_from_styles(element,app.common.types.text.root_attrs,app.common.types.text.default_root_attrs);
});
app.util.text.content.from_dom.create_text_span = (function app$util$text$content$from_dom$create_text_span(element){
var text = app.util.text.content.from_dom.get_text_span_text(element);
return app.common.data.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),text,new cljs.core.Keyword(null,"key","key",-1516042587),element.id], null),app.util.text.content.from_dom.get_text_span_styles(element)], 0));
});
app.util.text.content.from_dom.create_paragraph = (function app$util$text$content$from_dom$create_paragraph(element){
return app.common.data.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"paragraph",new cljs.core.Keyword(null,"key","key",-1516042587),element.id,new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.util.text.content.from_dom.create_text_span,element.children)], null),app.util.text.content.from_dom.get_paragraph_styles(element)], 0));
});
app.util.text.content.from_dom.create_root = (function app$util$text$content$from_dom$create_root(element){
var root_styles = app.util.text.content.from_dom.get_root_styles(element);
return app.common.data.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"root",new cljs.core.Keyword(null,"key","key",-1516042587),element.id,new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"paragraph-set",new cljs.core.Keyword(null,"children","children",-940561982),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.util.text.content.from_dom.create_paragraph,element.children)], null)], null)], null),root_styles], 0));
});

//# sourceMappingURL=app.util.text.content.from_dom.js.map
