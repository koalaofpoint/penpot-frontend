import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.geom.shapes.js";
import "./app.common.math.js";
import "./app.common.types.text.js";
goog.provide('app.common.attrs');
app.common.attrs.get_attr = (function app$common$attrs$get_attr(obj,attr){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(obj,attr),new cljs.core.Keyword(null,"multiple","multiple",1244445549))){
return new cljs.core.Keyword(null,"multiple","multiple",1244445549);
} else {
if(cljs.core.truth_((function (){var fexpr__56199 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ox","ox",571335403),null,new cljs.core.Keyword(null,"oy","oy",-831335459),null], null), null);
return (fexpr__56199.cljs$core$IFn$_invoke$arity$1 ? fexpr__56199.cljs$core$IFn$_invoke$arity$1(attr) : fexpr__56199.call(null,attr));
})())){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(obj,attr);
if(cljs.core.truth_(temp__5823__auto__)){
var value = temp__5823__auto__;
return value;
} else {
var temp__5823__auto____$1 = new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(obj);
if(cljs.core.truth_(temp__5823__auto____$1)){
var points = temp__5823__auto____$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(points,new cljs.core.Keyword(null,"multiple","multiple",1244445549))){
var rect = app.common.geom.shapes.shapes__GT_rect(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [obj], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(attr,new cljs.core.Keyword(null,"ox","ox",571335403))){
return new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(rect);
} else {
return new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(rect);
}
} else {
return new cljs.core.Keyword(null,"multiple","multiple",1244445549);
}
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(obj,attr,new cljs.core.Keyword("app.common.attrs","unset","app.common.attrs/unset",-1523604502));
}
}
} else {
if(cljs.core.truth_((function (){var fexpr__56200 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),null,new cljs.core.Keyword(null,"height","height",1025178622),null], null), null);
return (fexpr__56200.cljs$core$IFn$_invoke$arity$1 ? fexpr__56200.cljs$core$IFn$_invoke$arity$1(attr) : fexpr__56200.call(null,attr));
})())){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(obj,attr);
if(cljs.core.truth_(temp__5823__auto__)){
var value = temp__5823__auto__;
return value;
} else {
var temp__5823__auto____$1 = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(obj);
if(cljs.core.truth_(temp__5823__auto____$1)){
var selrect = temp__5823__auto____$1;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"multiple","multiple",1244445549))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(obj),attr);
} else {
return new cljs.core.Keyword(null,"multiple","multiple",1244445549);
}
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(obj,attr,new cljs.core.Keyword("app.common.attrs","unset","app.common.attrs/unset",-1523604502));
}
}
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(obj,attr,new cljs.core.Keyword("app.common.attrs","unset","app.common.attrs/unset",-1523604502));

}
}
}
});
app.common.attrs.default_equal = (function app$common$attrs$default_equal(val1,val2){
if(((typeof val1 === 'number') && (typeof val2 === 'number'))){
return app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(val1,val2);
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val1,val2);
}
});
app.common.attrs.get_attrs_multi = (function app$common$attrs$get_attrs_multi(var_args){
var G__56204 = arguments.length;
switch (G__56204) {
case 2:
return app.common.attrs.get_attrs_multi.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return app.common.attrs.get_attrs_multi.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.attrs.get_attrs_multi.cljs$core$IFn$_invoke$arity$2 = (function (objs,attrs){
return app.common.attrs.get_attrs_multi.cljs$core$IFn$_invoke$arity$4(objs,attrs,app.common.attrs.default_equal,cljs.core.identity);
}));

(app.common.attrs.get_attrs_multi.cljs$core$IFn$_invoke$arity$4 = (function (objs,attrs,eqfn,sel){
var attr = cljs.core.first(attrs);
var attrs__$1 = cljs.core.rest(attrs);
var result = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if(cljs.core.truth_(attr)){
var value = (function (){var curr = cljs.core.first(objs);
var objs__$1 = cljs.core.rest(objs);
var value = new cljs.core.Keyword("app.common.attrs","unset","app.common.attrs/unset",-1523604502);
while(true){
if(cljs.core.truth_((function (){var and__5023__auto__ = curr;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"multiple","multiple",1244445549));
} else {
return and__5023__auto__;
}
})())){
var new_val = app.common.attrs.get_attr(curr,attr);
var value__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_val,new cljs.core.Keyword("app.common.attrs","unset","app.common.attrs/unset",-1523604502)))?value:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_val,new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?new cljs.core.Keyword(null,"multiple","multiple",1244445549):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("app.common.attrs","unset","app.common.attrs/unset",-1523604502)))?(sel.cljs$core$IFn$_invoke$arity$1 ? sel.cljs$core$IFn$_invoke$arity$1(new_val) : sel.call(null,new_val)):(cljs.core.truth_((eqfn.cljs$core$IFn$_invoke$arity$2 ? eqfn.cljs$core$IFn$_invoke$arity$2(new_val,value) : eqfn.call(null,new_val,value)))?value:new cljs.core.Keyword(null,"multiple","multiple",1244445549)
))));
var G__56213 = cljs.core.first(objs__$1);
var G__56214 = cljs.core.rest(objs__$1);
var G__56215 = value__$1;
curr = G__56213;
objs__$1 = G__56214;
value = G__56215;
continue;
} else {
return value;
}
break;
}
})();
var G__56216 = cljs.core.first(attrs__$1);
var G__56217 = cljs.core.rest(attrs__$1);
var G__56218 = (function (){var G__56209 = result;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword("app.common.attrs","unset","app.common.attrs/unset",-1523604502))){
return cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(G__56209,attr,value);
} else {
return G__56209;
}
})();
attr = G__56216;
attrs__$1 = G__56217;
result = G__56218;
continue;
} else {
return cljs.core.persistent_BANG_(result);
}
break;
}
}));

(app.common.attrs.get_attrs_multi.cljs$lang$maxFixedArity = 4);

/**
 * Gets the multi attributes for a text shape. Splits the content by type and gets the attributes depending
 *   on the node type
 */
app.common.attrs.get_text_attrs_multi = (function app$common$attrs$get_text_attrs_multi(p__56210,defaults,attrs){
var map__56211 = p__56210;
var map__56211__$1 = cljs.core.__destructure_map(map__56211);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56211__$1,new cljs.core.Keyword(null,"content","content",15833224));
var root_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(app.common.types.text.root_attrs),attrs);
var paragraph_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(app.common.types.text.paragraph_attrs),attrs);
var text_node_attrs = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(app.common.types.text.text_node_attrs),attrs);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([defaults,app.common.attrs.get_attrs_multi.cljs$core$IFn$_invoke$arity$2(app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$2(app.common.types.text.is_root_node_QMARK_,content),root_attrs),app.common.attrs.get_attrs_multi.cljs$core$IFn$_invoke$arity$2(app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$2(app.common.types.text.is_paragraph_node_QMARK_,content),paragraph_attrs),app.common.attrs.get_attrs_multi.cljs$core$IFn$_invoke$arity$2(app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$2(app.common.types.text.is_text_node_QMARK_,content),text_node_attrs)], 0));
});

//# sourceMappingURL=app.common.attrs.js.map
