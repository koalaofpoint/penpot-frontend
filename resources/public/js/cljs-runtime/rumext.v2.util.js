import "./cljs_env.js";
import "./cljs.core.js";
import "./cljs_bean.core.js";
import "./cuerdas.core.js";
import "./malli.core.js";
import "./malli.error.js";
goog.provide('rumext.v2.util');
rumext.v2.util.ident__GT_key = (function rumext$v2$util$ident__GT_key(nword){
var nword__$1 = ((typeof nword === 'string')?nword:cljs.core.name(nword));
if((cuerdas.core.index_of.cljs$core$IFn$_invoke$arity$2(nword__$1,"-") == null)){
return nword__$1;
} else {
if(cuerdas.core.starts_with_QMARK_(nword__$1,"-")){
return cuerdas.core.capital(cuerdas.core.camel(nword__$1));
} else {
return cuerdas.core.camel(nword__$1);

}
}
});
/**
 * Compiles a keyword or symbol to string using react prop naming
 *   convention
 */
rumext.v2.util.ident__GT_prop = (function rumext$v2$util$ident__GT_prop(nword){
var nword__$1 = ((typeof nword === 'string')?nword:cljs.core.name(nword));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nword__$1,"class")){
return "className";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nword__$1,"for")){
return "htmlFor";
} else {
if(cuerdas.core.starts_with_QMARK_(nword__$1,"--")){
return nword__$1;
} else {
if(cuerdas.core.starts_with_QMARK_(nword__$1,"data-")){
return nword__$1;
} else {
if(cuerdas.core.starts_with_QMARK_(nword__$1,"aria-")){
return nword__$1;
} else {
return rumext.v2.util.ident__GT_key(nword__$1);

}
}
}
}
}
});
rumext.v2.util.obj__GT_map = (function rumext$v2$util$obj__GT_map(obj){
var keys = Object.keys(obj);
var len = keys.length;
var i = (0);
var r = cljs.core.transient$(cljs.core.PersistentArrayMap.EMPTY);
while(true){
if((i < len)){
var key = (keys[i]);
var G__43304 = (i + (1));
var G__43305 = cljs.core.assoc_BANG_.cljs$core$IFn$_invoke$arity$3(r,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key),(obj[key]));
i = G__43304;
r = G__43305;
continue;
} else {
return cljs.core.persistent_BANG_(r);
}
break;
}
});
rumext.v2.util.plain_object_QMARK_ = (function rumext$v2$util$plain_object_QMARK_(o){
return (((!((o == null)))) && ((Object.getPrototypeOf(o) === Object.prototype)));
});
rumext.v2.util.map__GT_obj = (function rumext$v2$util$map__GT_obj(o){
if(rumext.v2.util.plain_object_QMARK_(o)){
return o;
} else {
if(cljs.core.map_QMARK_(o)){
var m = ({});
cljs.core.run_BANG_((function (p__43269){
var vec__43270 = p__43269;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43270,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__43270,(1),null);
return (m[cljs.core.name(k)] = v);
}),o);

return m;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("unable to create obj",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),o], null));

}
}
});
rumext.v2.util.map__GT_props = (function rumext$v2$util$map__GT_props(var_args){
var G__43280 = arguments.length;
switch (G__43280) {
case 1:
return rumext.v2.util.map__GT_props.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return rumext.v2.util.map__GT_props.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(rumext.v2.util.map__GT_props.cljs$core$IFn$_invoke$arity$1 = (function (o){
return rumext.v2.util.map__GT_props.cljs$core$IFn$_invoke$arity$2(o,false);
}));

(rumext.v2.util.map__GT_props.cljs$core$IFn$_invoke$arity$2 = (function (o,recursive_QMARK_){
if(cljs.core.object_QMARK_(o)){
return o;
} else {
var level = ((recursive_QMARK_ === true)?(1):recursive_QMARK_);
return cljs.core.reduce_kv((function (res,k,v){
var v__$1 = (((v instanceof cljs.core.Keyword))?cljs.core.name(v):v);
var k__$1 = ((typeof k === 'string')?k:(((k instanceof cljs.core.Keyword))?((((cljs.core.int_QMARK_(level)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((1),level))))?rumext.v2.util.ident__GT_key(k):rumext.v2.util.ident__GT_prop(k)):null
));
if((!((k__$1 == null)))){
var v_43307__$2 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(k__$1,"style")) && (cljs.core.map_QMARK_(v__$1))))?rumext.v2.util.map__GT_props.cljs$core$IFn$_invoke$arity$2(v__$1,true):((((cljs.core.int_QMARK_(level)) && (cljs.core.map_QMARK_(v__$1))))?rumext.v2.util.map__GT_props.cljs$core$IFn$_invoke$arity$2(v__$1,(level + (1))):v__$1
));
(res[k__$1] = v_43307__$2);
} else {
}

return res;
}),({}),o);
}
}));

(rumext.v2.util.map__GT_props.cljs$lang$maxFixedArity = 2);

rumext.v2.util.wrap_props = (function rumext$v2$util$wrap_props(props){
if(cljs.core.object_QMARK_(props)){
return rumext.v2.util.obj__GT_map(props);
} else {
if(cljs.core.map_QMARK_(props)){
return props;
} else {
if((props == null)){
return cljs.core.PersistentArrayMap.EMPTY;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Unexpected props",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"props","props",453281727),props], null));

}
}
}
});
rumext.v2.util.props_equals_QMARK_ = (function rumext$v2$util$props_equals_QMARK_(eq_QMARK_,new_props,old_props){
var old_keys = Object.keys(old_props);
var new_keys = Object.keys(new_props);
var old_keys_len = old_keys.length;
var new_keys_len = new_keys.length;
if((old_keys_len === new_keys_len)){
var idx = ((0) | (0));
while(true){
if((idx < new_keys_len)){
var key = (new_keys[idx]);
var new_val = (new_props[key]);
var old_val = (old_props[key]);
if((eq_QMARK_.cljs$core$IFn$_invoke$arity$2 ? eq_QMARK_.cljs$core$IFn$_invoke$arity$2(new_val,old_val) : eq_QMARK_.call(null,new_val,old_val))){
var G__43308 = (idx + (1));
idx = G__43308;
continue;
} else {
return false;
}
} else {
return true;
}
break;
}
} else {
return false;
}
});
rumext.v2.util.symbol_for = (function rumext$v2$util$symbol_for(v){
return Symbol.for(v);
});
rumext.v2.util.prop__GT_key = (function rumext$v2$util$prop__GT_key(k){
if(typeof k === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cuerdas.core.kebab(k));
} else {
return k;
}
});
rumext.v2.util.react_prop__GT_key = (function rumext$v2$util$react_prop__GT_key(k){
if(typeof k === 'string'){
var G__43297 = k;
switch (G__43297) {
case "htmlFor":
return new cljs.core.Keyword(null,"for","for",-1323786319);

break;
case "className":
return new cljs.core.Keyword(null,"class","class",-2030961996);

break;
default:
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cuerdas.core.kebab(k));

}
} else {
return k;
}
});
rumext.v2.util.react_key__GT_prop = (function rumext$v2$util$react_key__GT_prop(x){
if(cljs.core.simple_keyword_QMARK_(x)){
return rumext.v2.util.ident__GT_prop(cljs.core.name(x));
} else {
return null;
}
});
rumext.v2.util.key__GT_prop = (function rumext$v2$util$key__GT_prop(x){
if((x instanceof cljs.core.Keyword)){
return cuerdas.core.camel(x.fqn);
} else {
return null;
}
});
rumext.v2.util.bean = (function rumext$v2$util$bean(o){
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$variadic(o,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prop->key","prop->key",-1297715246),rumext.v2.util.prop__GT_key,new cljs.core.Keyword(null,"key->prop","key->prop",-1028452531),rumext.v2.util.key__GT_prop], 0));
});
/**
 * A props specific bean that properly handles react props naming
 *   conventions
 */
rumext.v2.util.props_bean = (function rumext$v2$util$props_bean(o){
return cljs_bean.core.__GT_clj.cljs$core$IFn$_invoke$arity$variadic(o,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prop->key","prop->key",-1297715246),rumext.v2.util.react_prop__GT_key,new cljs.core.Keyword(null,"key->prop","key->prop",-1028452531),rumext.v2.util.react_key__GT_prop], 0));
});

//# sourceMappingURL=rumext.v2.util.js.map
