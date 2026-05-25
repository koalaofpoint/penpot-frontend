import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.json.js";
import "./app.common.math.js";
import "./app.common.pprint.js";
import "./app.common.schema.generators.js";
import "./app.common.schema.registry.js";
import "./app.common.uri.js";
import "./app.common.uuid.js";
import "./cuerdas.core.js";
import "./malli.core.js";
import "./malli.error.js";
import "./malli.generator.js";
import "./malli.registry.js";
import "./malli.transform.js";
import "./malli.util.js";
goog.provide('app.common.schema');
app.common.schema.default_options = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registry","registry",1021159018),app.common.schema.registry.default_registry], null);
app.common.schema.schema_QMARK_ = (function app$common$schema$schema_QMARK_(o){
return malli.core.schema_QMARK_(o);
});
app.common.schema.type = (function app$common$schema$type(s){
return malli.core.type.cljs$core$IFn$_invoke$arity$2(s,app.common.schema.default_options);
});
app.common.schema.properties = (function app$common$schema$properties(s){
return malli.core.properties.cljs$core$IFn$_invoke$arity$1(s);
});
app.common.schema.type_properties = (function app$common$schema$type_properties(s){
return malli.core.type_properties.cljs$core$IFn$_invoke$arity$1(s);
});
app.common.schema.children = (function app$common$schema$children(s){
return malli.core.children.cljs$core$IFn$_invoke$arity$2(s,app.common.schema.default_options);
});
app.common.schema.schema = (function app$common$schema$schema(s){
if(app.common.schema.schema_QMARK_(s)){
return s;
} else {
return malli.core.schema.cljs$core$IFn$_invoke$arity$2(s,app.common.schema.default_options);
}
});
app.common.schema.validate = (function app$common$schema$validate(s,value){
return malli.core.validate.cljs$core$IFn$_invoke$arity$3(s,value,app.common.schema.default_options);
});
app.common.schema.valid_QMARK_ = (function app$common$schema$valid_QMARK_(s,value){
try{return malli.core.validate.cljs$core$IFn$_invoke$arity$3(s,value,app.common.schema.default_options);
}catch (e42794){var _cause = e42794;
return false;
}});
app.common.schema.explain = (function app$common$schema$explain(s,value){
return malli.core.explain.cljs$core$IFn$_invoke$arity$3(s,value,app.common.schema.default_options);
});
/**
 * Given an explain data structure, return a simplified version of it
 */
app.common.schema.simplify = (function app$common$schema$simplify(exp){
return malli.error.humanize.cljs$core$IFn$_invoke$arity$1(exp);
});
app.common.schema.generate = (function app$common$schema$generate(var_args){
var G__42796 = arguments.length;
switch (G__42796) {
case 1:
return app.common.schema.generate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.schema.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.schema.generate.cljs$core$IFn$_invoke$arity$1 = (function (s){
return malli.generator.generate.cljs$core$IFn$_invoke$arity$1(app.common.schema.schema(s));
}));

(app.common.schema.generate.cljs$core$IFn$_invoke$arity$2 = (function (s,o){
return malli.generator.generate.cljs$core$IFn$_invoke$arity$2(app.common.schema.schema(s),o);
}));

(app.common.schema.generate.cljs$lang$maxFixedArity = 2);

/**
 * Returns a readable form of the schema
 */
app.common.schema.form = (function app$common$schema$form(s){
return malli.core.form.cljs$core$IFn$_invoke$arity$2(s,app.common.schema.default_options);
});
/**
 * Merge two schemas
 */
app.common.schema.merge = (function app$common$schema$merge(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43062 = arguments.length;
var i__5750__auto___43063 = (0);
while(true){
if((i__5750__auto___43063 < len__5749__auto___43062)){
args__5755__auto__.push((arguments[i__5750__auto___43063]));

var G__43064 = (i__5750__auto___43063 + (1));
i__5750__auto___43063 = G__43064;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.schema.merge.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.schema.merge.cljs$core$IFn$_invoke$arity$variadic = (function (items){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(malli.util.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.schema.schema,items));
}));

(app.common.schema.merge.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.schema.merge.cljs$lang$applyTo = (function (seq42798){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42798));
}));

/**
 * Add a key & value to a schema of type [:map]. If the first level node of the schema
 * is not a map, will do a depth search to find the first map node and add the key there.
 */
app.common.schema.assoc_key = (function app$common$schema$assoc_key(var_args){
var G__42806 = arguments.length;
switch (G__42806) {
case 3:
return app.common.schema.assoc_key.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.schema.assoc_key.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.schema.assoc_key.cljs$core$IFn$_invoke$arity$3 = (function (s,k,v){
return app.common.schema.assoc_key.cljs$core$IFn$_invoke$arity$4(s,k,cljs.core.PersistentArrayMap.EMPTY,v);
}));

(app.common.schema.assoc_key.cljs$core$IFn$_invoke$arity$4 = (function (s,k,opts,v){
var s__$1 = app.common.schema.schema(s);
var v__$1 = app.common.schema.schema(v);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(malli.core.type.cljs$core$IFn$_invoke$arity$1(s__$1),new cljs.core.Keyword(null,"map","map",1371690461))){
return malli.util.assoc.cljs$core$IFn$_invoke$arity$4(s__$1,k,v__$1,opts);
} else {
var temp__5823__auto__ = malli.util.find_first.cljs$core$IFn$_invoke$arity$2(s__$1,(function (s_SINGLEQUOTE_,path,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(malli.core.type.cljs$core$IFn$_invoke$arity$1(s_SINGLEQUOTE_),new cljs.core.Keyword(null,"map","map",1371690461))){
return path;
} else {
return null;
}
}));
if(cljs.core.truth_(temp__5823__auto__)){
var path = temp__5823__auto__;
return malli.util.assoc_in.cljs$core$IFn$_invoke$arity$4(s__$1,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,k),v__$1,opts);
} else {
return s__$1;
}
}
}));

(app.common.schema.assoc_key.cljs$lang$maxFixedArity = 4);

/**
 * Remove a key from a schema of type [:map]. If the first level node of the schema
 * is not a map, will do a depth search to find the first map node and remove the key there.
 */
app.common.schema.dissoc_key = (function app$common$schema$dissoc_key(s,k){
var s__$1 = app.common.schema.schema(s);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(malli.core.type.cljs$core$IFn$_invoke$arity$1(s__$1),new cljs.core.Keyword(null,"map","map",1371690461))){
return malli.util.dissoc.cljs$core$IFn$_invoke$arity$2(s__$1,k);
} else {
var temp__5823__auto__ = malli.util.find_first.cljs$core$IFn$_invoke$arity$2(s__$1,(function (s_SINGLEQUOTE_,path,_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(malli.core.type.cljs$core$IFn$_invoke$arity$1(s_SINGLEQUOTE_),new cljs.core.Keyword(null,"map","map",1371690461))){
return path;
} else {
return null;
}
}));
if(cljs.core.truth_(temp__5823__auto__)){
var path = temp__5823__auto__;
return malli.util.update_in.cljs$core$IFn$_invoke$arity$variadic(s__$1,path,malli.util.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([k], 0));
} else {
return s__$1;
}
}
});
app.common.schema.ref_QMARK_ = (function app$common$schema$ref_QMARK_(s){
return malli.core._ref_schema_QMARK_(s);
});
app.common.schema.deref = (function app$common$schema$deref(s){
return malli.core.deref.cljs$core$IFn$_invoke$arity$1(s);
});
/**
 * Get error values form explain data structure
 */
app.common.schema.error_values = (function app$common$schema$error_values(exp){
return malli.error.error_value.cljs$core$IFn$_invoke$arity$2(exp,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("malli.error","mask-valid-values","malli.error/mask-valid-values",1682135332),new cljs.core.Symbol(null,"...","...",-1926939749,null)], null));
});
app.common.schema.optional_keys = (function app$common$schema$optional_keys(var_args){
var G__42815 = arguments.length;
switch (G__42815) {
case 1:
return app.common.schema.optional_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.schema.optional_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.schema.optional_keys.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$3(schema,null,app.common.schema.default_options);
}));

(app.common.schema.optional_keys.cljs$core$IFn$_invoke$arity$2 = (function (schema,keys){
return malli.util.optional_keys.cljs$core$IFn$_invoke$arity$3(schema,keys,app.common.schema.default_options);
}));

(app.common.schema.optional_keys.cljs$lang$maxFixedArity = 2);

app.common.schema.required_keys = (function app$common$schema$required_keys(var_args){
var G__42817 = arguments.length;
switch (G__42817) {
case 1:
return app.common.schema.required_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.schema.required_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.schema.required_keys.cljs$core$IFn$_invoke$arity$1 = (function (schema){
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$3(schema,null,app.common.schema.default_options);
}));

(app.common.schema.required_keys.cljs$core$IFn$_invoke$arity$2 = (function (schema,keys){
return malli.util.required_keys.cljs$core$IFn$_invoke$arity$3(schema,keys,app.common.schema.default_options);
}));

(app.common.schema.required_keys.cljs$lang$maxFixedArity = 2);

app.common.schema.transformer = (function app$common$schema$transformer(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43068 = arguments.length;
var i__5750__auto___43069 = (0);
while(true){
if((i__5750__auto___43069 < len__5749__auto___43068)){
args__5755__auto__.push((arguments[i__5750__auto___43069]));

var G__43070 = (i__5750__auto___43069 + (1));
i__5750__auto___43069 = G__43070;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.schema.transformer.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.schema.transformer.cljs$core$IFn$_invoke$arity$variadic = (function (transformers){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(malli.transform.transformer,transformers);
}));

(app.common.schema.transformer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.schema.transformer.cljs$lang$applyTo = (function (seq42818){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42818));
}));

/**
 * Get map entires of a map schema
 */
app.common.schema.entries = (function app$common$schema$entries(schema){
return malli.core.entries.cljs$core$IFn$_invoke$arity$2(schema,app.common.schema.default_options);
});
app.common.schema.xf_COLON_map_key = cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.key);
/**
 * Given a map schema, return all keys as set
 */
app.common.schema.keys = (function app$common$schema$keys(schema_SINGLEQUOTE_){
var schema_SINGLEQUOTE___$1 = malli.core.schema.cljs$core$IFn$_invoke$arity$2(schema_SINGLEQUOTE_,app.common.schema.default_options);
var G__42819 = malli.core.type.cljs$core$IFn$_invoke$arity$1(schema_SINGLEQUOTE___$1);
var G__42819__$1 = (((G__42819 instanceof cljs.core.Keyword))?G__42819.fqn:null);
switch (G__42819__$1) {
case "map":
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,app.common.schema.xf_COLON_map_key,app.common.schema.entries(schema_SINGLEQUOTE___$1));

break;
case "merge":
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,app.common.schema.xf_COLON_map_key,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(malli.core.entries,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.core.children.cljs$core$IFn$_invoke$arity$1(schema_SINGLEQUOTE___$1)], 0)));

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("not supported schema type",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),malli.core.type.cljs$core$IFn$_invoke$arity$1(schema_SINGLEQUOTE___$1)], null));

}
});
app.common.schema.update_properties = (function app$common$schema$update_properties(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43074 = arguments.length;
var i__5750__auto___43076 = (0);
while(true){
if((i__5750__auto___43076 < len__5749__auto___43074)){
args__5755__auto__.push((arguments[i__5750__auto___43076]));

var G__43078 = (i__5750__auto___43076 + (1));
i__5750__auto___43076 = G__43078;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return app.common.schema.update_properties.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(app.common.schema.update_properties.cljs$core$IFn$_invoke$arity$variadic = (function (s,f,args){
var s__$1 = app.common.schema.schema(s);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(malli.core._update_properties,s__$1,f,args);
}));

(app.common.schema.update_properties.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(app.common.schema.update_properties.cljs$lang$applyTo = (function (seq42822){
var G__42823 = cljs.core.first(seq42822);
var seq42822__$1 = cljs.core.next(seq42822);
var G__42824 = cljs.core.first(seq42822__$1);
var seq42822__$2 = cljs.core.next(seq42822__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42823,G__42824,seq42822__$2);
}));

app.common.schema._transform_map_keys = (function app$common$schema$_transform_map_keys(var_args){
var G__42830 = arguments.length;
switch (G__42830) {
case 1:
return app.common.schema._transform_map_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.schema._transform_map_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.schema._transform_map_keys.cljs$core$IFn$_invoke$arity$1 = (function (f){
var xform = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__42833){
var vec__42834 = p__42833;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42834,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42834,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null);
}));
return (function (p1__42827_SHARP_){
var G__42837 = p1__42827_SHARP_;
if(cljs.core.map_QMARK_(p1__42827_SHARP_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(p1__42827_SHARP_),xform,G__42837);
} else {
return G__42837;
}
});
}));

(app.common.schema._transform_map_keys.cljs$core$IFn$_invoke$arity$2 = (function (ks,f){
var xform = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__42838){
var vec__42839 = p__42838;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42839,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__42839,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__42842 = k;
if(cljs.core.contains_QMARK_(ks,k)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__42842) : f.call(null,G__42842));
} else {
return G__42842;
}
})(),v], null);
}));
return (function (p1__42828_SHARP_){
var G__42843 = p1__42828_SHARP_;
if(cljs.core.map_QMARK_(p1__42828_SHARP_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(p1__42828_SHARP_),xform,G__42843);
} else {
return G__42843;
}
});
}));

(app.common.schema._transform_map_keys.cljs$lang$maxFixedArity = 2);

app.common.schema.json_transformer = (function app$common$schema$json_transformer(){
var map_of_key_decoders = malli.transform._string_decoders();
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoders","decoders",1132818244),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(malli.transform._json_decoders(),new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema,_){
var key_schema = (function (){var G__42844 = schema;
var G__42844__$1 = (((G__42844 == null))?null:malli.core.children.cljs$core$IFn$_invoke$arity$1(G__42844));
if((G__42844__$1 == null)){
return null;
} else {
return cljs.core.first(G__42844__$1);
}
})();
var or__5025__auto__ = (function (){var G__42847 = key_schema;
var G__42847__$1 = (((G__42847 == null))?null:malli.core.type.cljs$core$IFn$_invoke$arity$1(G__42847));
var G__42847__$2 = (((G__42847__$1 == null))?null:(map_of_key_decoders.cljs$core$IFn$_invoke$arity$1 ? map_of_key_decoders.cljs$core$IFn$_invoke$arity$1(G__42847__$1) : map_of_key_decoders.call(null,G__42847__$1)));
var G__42847__$3 = (((G__42847__$2 == null))?null:malli.transform._interceptor(G__42847__$2,schema,cljs.core.PersistentArrayMap.EMPTY));
var G__42847__$4 = (((G__42847__$3 == null))?null:malli.core._intercepting.cljs$core$IFn$_invoke$arity$1(G__42847__$3));
var G__42847__$5 = (((G__42847__$4 == null))?null:malli.core._comp.cljs$core$IFn$_invoke$arity$2(G__42847__$4,malli.core._keyword__GT_string));
var G__42847__$6 = (((G__42847__$5 == null))?null:malli.transform._transform_if_valid(G__42847__$5,key_schema));
if((G__42847__$6 == null)){
return null;
} else {
return app.common.schema._transform_map_keys.cljs$core$IFn$_invoke$arity$1(G__42847__$6);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.schema._transform_map_keys.cljs$core$IFn$_invoke$arity$1(malli.core._keyword__GT_string);
}
})], null)),new cljs.core.Keyword(null,"encoders","encoders",-111722908),malli.transform._json_encoders()], null),malli.transform.collection_transformer()], 0));
});
app.common.schema.string_transformer = (function app$common$schema$string_transformer(){
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.transform.string_transformer(),malli.transform.collection_transformer()], 0));
});
app.common.schema.encode = (function app$common$schema$encode(var_args){
var G__42853 = arguments.length;
switch (G__42853) {
case 3:
return app.common.schema.encode.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.schema.encode.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.schema.encode.cljs$core$IFn$_invoke$arity$3 = (function (s,val,transformer){
return malli.core.encode.cljs$core$IFn$_invoke$arity$4(s,val,app.common.schema.default_options,transformer);
}));

(app.common.schema.encode.cljs$core$IFn$_invoke$arity$4 = (function (s,val,options,transformer){
return malli.core.encode.cljs$core$IFn$_invoke$arity$4(s,val,options,transformer);
}));

(app.common.schema.encode.cljs$lang$maxFixedArity = 4);

app.common.schema.decode = (function app$common$schema$decode(var_args){
var G__42863 = arguments.length;
switch (G__42863) {
case 3:
return app.common.schema.decode.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.schema.decode.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.schema.decode.cljs$core$IFn$_invoke$arity$3 = (function (s,val,transformer){
return malli.core.decode.cljs$core$IFn$_invoke$arity$4(s,val,app.common.schema.default_options,transformer);
}));

(app.common.schema.decode.cljs$core$IFn$_invoke$arity$4 = (function (s,val,options,transformer){
return malli.core.decode.cljs$core$IFn$_invoke$arity$4(s,val,options,transformer);
}));

(app.common.schema.decode.cljs$lang$maxFixedArity = 4);

app.common.schema.validator = (function app$common$schema$validator(s){
return malli.core.validator.cljs$core$IFn$_invoke$arity$1(app.common.schema.schema(s));
});
app.common.schema.explainer = (function app$common$schema$explainer(s){
return malli.core.explainer.cljs$core$IFn$_invoke$arity$1(app.common.schema.schema(s));
});
app.common.schema.encoder = (function app$common$schema$encoder(var_args){
var G__42869 = arguments.length;
switch (G__42869) {
case 2:
return app.common.schema.encoder.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.schema.encoder.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.schema.encoder.cljs$core$IFn$_invoke$arity$2 = (function (s,transformer){
return malli.core.encoder.cljs$core$IFn$_invoke$arity$3(s,app.common.schema.default_options,transformer);
}));

(app.common.schema.encoder.cljs$core$IFn$_invoke$arity$3 = (function (s,options,transformer){
return malli.core.encoder.cljs$core$IFn$_invoke$arity$3(s,options,transformer);
}));

(app.common.schema.encoder.cljs$lang$maxFixedArity = 3);

app.common.schema.decoder = (function app$common$schema$decoder(var_args){
var G__42873 = arguments.length;
switch (G__42873) {
case 2:
return app.common.schema.decoder.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.schema.decoder.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.schema.decoder.cljs$core$IFn$_invoke$arity$2 = (function (s,transformer){
return malli.core.decoder.cljs$core$IFn$_invoke$arity$3(s,app.common.schema.default_options,transformer);
}));

(app.common.schema.decoder.cljs$core$IFn$_invoke$arity$3 = (function (s,options,transformer){
return malli.core.decoder.cljs$core$IFn$_invoke$arity$3(s,options,transformer);
}));

(app.common.schema.decoder.cljs$lang$maxFixedArity = 3);

app.common.schema.lazy_validator = (function app$common$schema$lazy_validator(s){
var vfn = (new cljs.core.Delay((function (){
return app.common.schema.validator(s);
}),null));
return (function (v){
var fexpr__42880 = cljs.core.deref(vfn);
return (fexpr__42880.cljs$core$IFn$_invoke$arity$1 ? fexpr__42880.cljs$core$IFn$_invoke$arity$1(v) : fexpr__42880.call(null,v));
});
});
app.common.schema.lazy_explainer = (function app$common$schema$lazy_explainer(s){
var vfn = (new cljs.core.Delay((function (){
return app.common.schema.explainer(((cljs.core.delay_QMARK_(s))?app.common.schema.deref(s):s));
}),null));
return (function (v){
var fexpr__42883 = cljs.core.deref(vfn);
return (fexpr__42883.cljs$core$IFn$_invoke$arity$1 ? fexpr__42883.cljs$core$IFn$_invoke$arity$1(v) : fexpr__42883.call(null,v));
});
});
app.common.schema.lazy_decoder = (function app$common$schema$lazy_decoder(s,transformer){
var vfn = (new cljs.core.Delay((function (){
return app.common.schema.decoder.cljs$core$IFn$_invoke$arity$2(((cljs.core.delay_QMARK_(s))?app.common.schema.deref(s):s),transformer);
}),null));
return (function (v){
var fexpr__42887 = cljs.core.deref(vfn);
return (fexpr__42887.cljs$core$IFn$_invoke$arity$1 ? fexpr__42887.cljs$core$IFn$_invoke$arity$1(v) : fexpr__42887.call(null,v));
});
});
app.common.schema.decode_fn = (function app$common$schema$decode_fn(s,transformer){
var vfn = (new cljs.core.Delay((function (){
return app.common.schema.decoder.cljs$core$IFn$_invoke$arity$2(((cljs.core.delay_QMARK_(s))?app.common.schema.deref(s):s),transformer);
}),null));
return (function (v){
var fexpr__42890 = cljs.core.deref(vfn);
return (fexpr__42890.cljs$core$IFn$_invoke$arity$1 ? fexpr__42890.cljs$core$IFn$_invoke$arity$1(v) : fexpr__42890.call(null,v));
});
});
/**
 * Returns a string representation of the explain data structure
 */
app.common.schema.humanize_explain = (function app$common$schema$humanize_explain(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43088 = arguments.length;
var i__5750__auto___43089 = (0);
while(true){
if((i__5750__auto___43089 < len__5749__auto___43088)){
args__5755__auto__.push((arguments[i__5750__auto___43089]));

var G__43090 = (i__5750__auto___43089 + (1));
i__5750__auto___43089 = G__43090;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.schema.humanize_explain.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.schema.humanize_explain.cljs$core$IFn$_invoke$arity$variadic = (function (p__42895,p__42896){
var map__42897 = p__42895;
var map__42897__$1 = cljs.core.__destructure_map(map__42897);
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42897__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42897__$1,new cljs.core.Keyword(null,"value","value",305978217));
var map__42898 = p__42896;
var map__42898__$1 = cljs.core.__destructure_map(map__42898);
var length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42898__$1,new cljs.core.Keyword(null,"length","length",588987862));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42898__$1,new cljs.core.Keyword(null,"level","level",1290497552));
var errors__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__42892_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__42892_SHARP_,new cljs.core.Keyword(null,"schema","schema",-1582001791),app.common.schema.form);
}),errors);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__42900_43092 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__42901_43093 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__42902_43094 = true;
var _STAR_print_fn_STAR__temp_val__42903_43095 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__42902_43094);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__42903_43095);

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Errors:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.pprint.pprint_str.cljs$core$IFn$_invoke$arity$variadic(errors__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"level","level",1290497552),(15),new cljs.core.Keyword(null,"length","length",588987862),(20)], null)], 0))], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Value:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.pprint.pprint_str.cljs$core$IFn$_invoke$arity$variadic(value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(160),new cljs.core.Keyword(null,"level","level",1290497552),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(level,(8)),new cljs.core.Keyword(null,"length","length",588987862),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(length,(12))], null)], 0))], 0));
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__42901_43093);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__42900_43092);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
}));

(app.common.schema.humanize_explain.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.schema.humanize_explain.cljs$lang$applyTo = (function (seq42893){
var G__42894 = cljs.core.first(seq42893);
var seq42893__$1 = cljs.core.next(seq42893);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42894,seq42893__$1);
}));

/**
 * Checks a value against a schema. If valid, returns nil. If not, returns a list
 * of english error messages.
 */
app.common.schema.validation_errors = (function app$common$schema$validation_errors(value,schema){
var explainer = app.common.schema.explainer(schema);
return cljs.core.not_empty(app.common.schema.simplify((explainer.cljs$core$IFn$_invoke$arity$1 ? explainer.cljs$core$IFn$_invoke$arity$1(value) : explainer.call(null,value))));
});
/**
 * Lookups schema from registry.
 */
app.common.schema.lookup = (function app$common$schema$lookup(var_args){
var G__42911 = arguments.length;
switch (G__42911) {
case 1:
return app.common.schema.lookup.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.schema.lookup.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.schema.lookup.cljs$core$IFn$_invoke$arity$1 = (function (s){
return app.common.schema.lookup.cljs$core$IFn$_invoke$arity$2(app.common.schema.registry.default_registry,s);
}));

(app.common.schema.lookup.cljs$core$IFn$_invoke$arity$2 = (function (registry,s){
return app.common.schema.schema(malli.registry.schema(registry,s));
}));

(app.common.schema.lookup.cljs$lang$maxFixedArity = 2);

/**
 * Create a predefined check function
 */
app.common.schema.check_fn = (function app$common$schema$check_fn(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43098 = arguments.length;
var i__5750__auto___43100 = (0);
while(true){
if((i__5750__auto___43100 < len__5749__auto___43098)){
args__5755__auto__.push((arguments[i__5750__auto___43100]));

var G__43102 = (i__5750__auto___43100 + (1));
i__5750__auto___43100 = G__43102;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.schema.check_fn.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.schema.check_fn.cljs$core$IFn$_invoke$arity$variadic = (function (s,p__42928){
var map__42929 = p__42928;
var map__42929__$1 = cljs.core.__destructure_map(map__42929);
var hint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42929__$1,new cljs.core.Keyword(null,"hint","hint",439639918));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42929__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42929__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var s__$1 = (function (){try{return app.common.schema.schema(s);
}catch (e42933){var cause = e42933;
var data = cljs.core.ex_data(cause);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.core","invalid-schema","malli.core/invalid-schema",1923990979),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(data))){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(["Invalid schema\n",app.common.pprint.pprint_str(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(data))].join(''),cljs.core.PersistentArrayMap.EMPTY);
} else {
throw cause;
}
}})();
var validator_STAR_ = (new cljs.core.Delay((function (){
return malli.core.validator.cljs$core$IFn$_invoke$arity$1(s__$1);
}),null));
var explainer_STAR_ = (new cljs.core.Delay((function (){
return malli.core.explainer.cljs$core$IFn$_invoke$arity$1(s__$1);
}),null));
var hint__$1 = (function (){var or__5025__auto__ = hint;
if(or__5025__auto__){
return or__5025__auto__;
} else {
return "check error";
}
})();
var type__$1 = (function (){var or__5025__auto__ = type;
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"assertion","assertion",-1645134882);
}
})();
var code__$1 = (function (){var or__5025__auto__ = code;
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"data-validation","data-validation",-893817907);
}
})();
return (function (value){
var validate_fn = cljs.core.deref(validator_STAR_);
if((validate_fn.cljs$core$IFn$_invoke$arity$1 ? validate_fn.cljs$core$IFn$_invoke$arity$1(value) : validate_fn.call(null,value))){
} else {
var explain_fn_43109 = cljs.core.deref(explainer_STAR_);
var explain_43110 = (explain_fn_43109.cljs$core$IFn$_invoke$arity$1 ? explain_fn_43109.cljs$core$IFn$_invoke$arity$1(value) : explain_fn_43109.call(null,value));
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(hint__$1,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"code","code",1586293142),code__$1,new cljs.core.Keyword(null,"hint","hint",439639918),hint__$1,new cljs.core.Keyword("app.common.schema","explain","app.common.schema/explain",1944111705),explain_43110], null));
}

return value;
});
}));

(app.common.schema.check_fn.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.schema.check_fn.cljs$lang$applyTo = (function (seq42920){
var G__42921 = cljs.core.first(seq42920);
var seq42920__$1 = cljs.core.next(seq42920);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42921,seq42920__$1);
}));

app.common.schema.coercer = (function app$common$schema$coercer(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43113 = arguments.length;
var i__5750__auto___43114 = (0);
while(true){
if((i__5750__auto___43114 < len__5749__auto___43113)){
args__5755__auto__.push((arguments[i__5750__auto___43114]));

var G__43115 = (i__5750__auto___43114 + (1));
i__5750__auto___43114 = G__43115;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.schema.coercer.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.schema.coercer.cljs$core$IFn$_invoke$arity$variadic = (function (schema,p__42956){
var map__42957 = p__42956;
var map__42957__$1 = cljs.core.__destructure_map(map__42957);
var opts = map__42957__$1;
var decode_fn = app.common.schema.lazy_decoder(schema,app.common.schema.json_transformer);
var check_fn = app.common.schema.check_fn.cljs$core$IFn$_invoke$arity$variadic(schema,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
return (function (data){
return check_fn(decode_fn(data));
});
}));

(app.common.schema.coercer.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.schema.coercer.cljs$lang$applyTo = (function (seq42951){
var G__42952 = cljs.core.first(seq42951);
var seq42951__$1 = cljs.core.next(seq42951);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42952,seq42951__$1);
}));

/**
 * A helper intended to be used on assertions for validate/check the
 *   schema over provided data. Raises an assertion exception.
 * 
 *   Use only on non-performance sensitive code, because it creates the
 *   check-fn instance all the time it is invoked.
 */
app.common.schema.check = (function app$common$schema$check(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43118 = arguments.length;
var i__5750__auto___43119 = (0);
while(true){
if((i__5750__auto___43119 < len__5749__auto___43118)){
args__5755__auto__.push((arguments[i__5750__auto___43119]));

var G__43120 = (i__5750__auto___43119 + (1));
i__5750__auto___43119 = G__43120;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return app.common.schema.check.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(app.common.schema.check.cljs$core$IFn$_invoke$arity$variadic = (function (s,value,p__42964){
var map__42965 = p__42964;
var map__42965__$1 = cljs.core.__destructure_map(map__42965);
var opts = map__42965__$1;
var check_fn = app.common.schema.check_fn.cljs$core$IFn$_invoke$arity$variadic(s,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([opts], 0));
return check_fn(value);
}));

(app.common.schema.check.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(app.common.schema.check.cljs$lang$applyTo = (function (seq42960){
var G__42961 = cljs.core.first(seq42960);
var seq42960__$1 = cljs.core.next(seq42960);
var G__42962 = cljs.core.first(seq42960__$1);
var seq42960__$2 = cljs.core.next(seq42960__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__42961,G__42962,seq42960__$2);
}));

app.common.schema.type_schema = (function app$common$schema$type_schema(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43125 = arguments.length;
var i__5750__auto___43126 = (0);
while(true){
if((i__5750__auto___43126 < len__5749__auto___43125)){
args__5755__auto__.push((arguments[i__5750__auto___43126]));

var G__43127 = (i__5750__auto___43126 + (1));
i__5750__auto___43126 = G__43127;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.schema.type_schema.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.schema.type_schema.cljs$core$IFn$_invoke$arity$variadic = (function (p__42969){
var map__42970 = p__42969;
var map__42970__$1 = cljs.core.__destructure_map(map__42970);
var params = map__42970__$1;
return malli.core._simple_schema(params);
}));

(app.common.schema.type_schema.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.schema.type_schema.cljs$lang$applyTo = (function (seq42967){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42967));
}));

app.common.schema.coll_schema = (function app$common$schema$coll_schema(var_args){
var args__5755__auto__ = [];
var len__5749__auto___43131 = arguments.length;
var i__5750__auto___43132 = (0);
while(true){
if((i__5750__auto___43132 < len__5749__auto___43131)){
args__5755__auto__.push((arguments[i__5750__auto___43132]));

var G__43133 = (i__5750__auto___43132 + (1));
i__5750__auto___43132 = G__43133;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.schema.coll_schema.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.schema.coll_schema.cljs$core$IFn$_invoke$arity$variadic = (function (p__42980){
var map__42981 = p__42980;
var map__42981__$1 = cljs.core.__destructure_map(map__42981);
var params = map__42981__$1;
return malli.core._collection_schema(params);
}));

(app.common.schema.coll_schema.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.schema.coll_schema.cljs$lang$applyTo = (function (seq42977){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq42977));
}));

app.common.schema.register_BANG_ = (function app$common$schema$register_BANG_(var_args){
var G__42985 = arguments.length;
switch (G__42985) {
case 1:
return app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (params){
if(cljs.core.map_QMARK_(params)){
var mdata = cljs.core.meta(params);
var type = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mdata,new cljs.core.Keyword("app.common.schema","id","app.common.schema/id",1146380349));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mdata,new cljs.core.Keyword("app.common.schema","type","app.common.schema/type",-418801773));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"type","type",1174270348));
}
}
})();
if(cljs.core.qualified_keyword_QMARK_(type)){
} else {
throw (new Error(["Assert failed: ","expected qualified keyword for `type`","\n","(qualified-keyword? type)"].join('')));
}

var s = malli.core._simple_schema(params);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.common.schema.registry.registry,cljs.core.assoc,type,s);

return s;
} else {
if(cljs.core.vector_QMARK_(params)){
var mdata = cljs.core.meta(params);
var type = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mdata,new cljs.core.Keyword("app.common.schema","id","app.common.schema/id",1146380349));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(mdata,new cljs.core.Keyword("app.common.schema","type","app.common.schema/type",-418801773));
}
})();
if(cljs.core.qualified_keyword_QMARK_(type)){
} else {
throw (new Error(["Assert failed: ","expected qualified keyword to be on metadata","\n","(qualified-keyword? type)"].join('')));
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.common.schema.registry.registry,cljs.core.assoc,type,params);

return params;
} else {
if(malli.core.into_schema_QMARK_(params)){
var type = malli.core._type(params);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.common.schema.registry.registry,cljs.core.assoc,type,params);

return params;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Invalid Arguments",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}));

(app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (type,params){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.common.schema.registry.registry,cljs.core.assoc,type,params);

return params;
}));

(app.common.schema.register_BANG_.cljs$lang$maxFixedArity = 2);

app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"merge","merge",-1804319409),malli.util._merge());
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"union","union",2142937499),malli.util._union());
app.common.schema.parse_uuid = (function app$common$schema$parse_uuid(s){
if(cljs.core.uuid_QMARK_(s)){
return s;
} else {
if(cuerdas.core.empty_QMARK_(s)){
return null;
} else {
try{return app.common.uuid.parse(s);
}catch (e42991){var _cause = e42991;
return s;
}}
}
});
app.common.schema.encode_uuid = (function app$common$schema$encode_uuid(v){
if(cljs.core.uuid_QMARK_(v)){
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(v);
} else {
return v;
}
});
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.uuid_QMARK_,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("decode","string","decode/string",-108229948),new cljs.core.Keyword("decode","json","decode/json",468276044),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("app.common.schema.openapi","format","app.common.schema.openapi/format",1235016623),new cljs.core.Keyword("encode","json","encode/json",303857460),new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),new cljs.core.Keyword("gen","gen","gen/gen",142743606),new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.Keyword("encode","string","encode/string",-137314532)],["UUID formatted string",app.common.schema.parse_uuid,app.common.schema.parse_uuid,"uuid","uuid",app.common.schema.encode_uuid,"string",app.common.schema.generators.uuid(),"should be an uuid",app.common.schema.encode_uuid])], null));
app.common.schema.email_re = /[a-zA-Z0-9_.+-\\\\]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+/;
app.common.schema.parse_email = (function app$common$schema$parse_email(s){
if(typeof s === 'string'){
return cljs.core.first(cljs.core.re_seq(app.common.schema.email_re,s));
} else {
return null;
}
});
app.common.schema.email_string_QMARK_ = (function app$common$schema$email_string_QMARK_(s){
var and__5023__auto__ = typeof s === 'string';
if(and__5023__auto__){
return cljs.core.re_seq(app.common.schema.email_re,s);
} else {
return and__5023__auto__;
}
});
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","email","app.common.schema/email",2070921211),new cljs.core.Keyword(null,"pred","pred",1927423397),app.common.schema.email_string_QMARK_,new cljs.core.Keyword(null,"property-pred","property-pred",1813304729),(function (p__42992){
var map__42993 = p__42992;
var map__42993__$1 = cljs.core.__destructure_map(map__42993);
var props = map__42993__$1;
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42993__$1,new cljs.core.Keyword(null,"max","max",61366548));
if((!((max == null)))){
return (function (value){
return (cljs.core.count(value) <= max);
});
} else {
return cljs.core.constantly(true);
}
}),new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"title","title",636505583),"email",new cljs.core.Keyword(null,"description","description",-1428560544),"string with valid email address",new cljs.core.Keyword("error","code","error/code",-1740032098),"errors.invalid-email",new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.email(),new cljs.core.Keyword("decode","string","decode/string",-108229948),(function (v){
var or__5025__auto__ = app.common.schema.parse_email(v);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return v;
}
}),new cljs.core.Keyword("decode","json","decode/json",468276044),(function (v){
var or__5025__auto__ = app.common.schema.parse_email(v);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return v;
}
}),new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),"string",new cljs.core.Keyword("app.common.schema.openapi","format","app.common.schema.openapi/format",1235016623),"email"], null)], null));
app.common.schema.xf_COLON_filter_word_strings = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.string_QMARK_),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cuerdas.core.empty_QMARK_),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cuerdas.core.blank_QMARK_));
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(app.common.schema.coll_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","set","app.common.schema/set",1226590145),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(1),new cljs.core.Keyword(null,"compile","compile",608186429),(function (p__42994,children,_){
var map__42995 = p__42994;
var map__42995__$1 = cljs.core.__destructure_map(map__42995);
var props = map__42995__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42995__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42995__$1,new cljs.core.Keyword(null,"max","max",61366548));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42995__$1,new cljs.core.Keyword(null,"min","min",444991522));
var ordered = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42995__$1,new cljs.core.Keyword(null,"ordered","ordered",1187041426));
var kind__$1 = (function (){var or__5025__auto__ = cljs.core.last(children);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return kind;
}
})();
var child_pred = ((cljs.core.fn_QMARK_(kind__$1))?kind__$1:(((kind__$1 == null))?cljs.core.any_QMARK_:app.common.schema.validator(kind__$1)
));
var type_pred = (cljs.core.truth_(ordered)?app.common.data.ordered_set_QMARK_:cljs.core.set_QMARK_);
var pred = (cljs.core.truth_((function (){var and__5023__auto__ = max;
if(cljs.core.truth_(and__5023__auto__)){
return min;
} else {
return and__5023__auto__;
}
})())?(function (value){
var and__5023__auto__ = (type_pred.cljs$core$IFn$_invoke$arity$1 ? type_pred.cljs$core$IFn$_invoke$arity$1(value) : type_pred.call(null,value));
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.every_QMARK_(child_pred,value)) && ((((min <= cljs.core.count(value))) && ((cljs.core.count(value) <= max)))));
} else {
return and__5023__auto__;
}
}):(cljs.core.truth_(min)?(function (value){
var and__5023__auto__ = (type_pred.cljs$core$IFn$_invoke$arity$1 ? type_pred.cljs$core$IFn$_invoke$arity$1(value) : type_pred.call(null,value));
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.every_QMARK_(child_pred,value)) && ((min <= cljs.core.count(value))));
} else {
return and__5023__auto__;
}
}):(cljs.core.truth_(max)?(function (value){
var and__5023__auto__ = (type_pred.cljs$core$IFn$_invoke$arity$1 ? type_pred.cljs$core$IFn$_invoke$arity$1(value) : type_pred.call(null,value));
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.every_QMARK_(child_pred,value)) && ((cljs.core.count(value) <= max)));
} else {
return and__5023__auto__;
}
}):(function (value){
var and__5023__auto__ = (type_pred.cljs$core$IFn$_invoke$arity$1 ? type_pred.cljs$core$IFn$_invoke$arity$1(value) : type_pred.call(null,value));
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.every_QMARK_(child_pred,value);
} else {
return and__5023__auto__;
}
})
)));
var empty_set = (cljs.core.truth_(ordered)?app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0():cljs.core.PersistentHashSet.EMPTY);
var decode = (function (v){
if(typeof v === 'string'){
var v__$1 = cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(v,/[\s,]+/);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(empty_set,app.common.schema.xf_COLON_filter_word_strings,v__$1);
} else {
if(cljs.core.set_QMARK_(v)){
return v;
} else {
if(cljs.core.coll_QMARK_(v)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(empty_set,v);
} else {
return v;

}
}
}
});
var encode_string_child = app.common.schema.encoder.cljs$core$IFn$_invoke$arity$2(kind__$1,app.common.schema.string_transformer);
var encode_string = (function (o){
if(cljs.core.set_QMARK_(o)){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(encode_string_child,o));
} else {
return o;
}
});
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pred","pred",1927423397),pred,new cljs.core.Keyword(null,"empty","empty",767870958),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("app.common.schema.openapi","items","app.common.schema.openapi/items",-217752415),new cljs.core.Keyword("decode","string","decode/string",-108229948),new cljs.core.Keyword("decode","json","decode/json",468276044),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("app.common.schema.openapi","format","app.common.schema.openapi/format",1235016623),new cljs.core.Keyword("app.common.schema.openapi","unique-items","app.common.schema.openapi/unique-items",-2108286573),new cljs.core.Keyword("encode","json","encode/json",303857460),new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),new cljs.core.Keyword("gen","gen","gen/gen",142743606),new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.Keyword("encode","string","encode/string",-137314532)],["Set of Strings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),decode,decode,"set","set",true,cljs.core.identity,"array",app.common.schema.generators.set(app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(kind__$1)),"should be a set of strings",encode_string])], null);
})], 0)));
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(app.common.schema.coll_schema.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","vec","app.common.schema/vec",801005460),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(1),new cljs.core.Keyword(null,"compile","compile",608186429),(function (p__42996,children,_){
var map__42997 = p__42996;
var map__42997__$1 = cljs.core.__destructure_map(map__42997);
var props = map__42997__$1;
var kind = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42997__$1,new cljs.core.Keyword(null,"kind","kind",-717265803));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42997__$1,new cljs.core.Keyword(null,"max","max",61366548));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__42997__$1,new cljs.core.Keyword(null,"min","min",444991522));
var kind__$1 = (function (){var or__5025__auto__ = cljs.core.last(children);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return kind;
}
})();
var pred = ((cljs.core.fn_QMARK_(kind__$1))?kind__$1:(((kind__$1 == null))?cljs.core.any_QMARK_:app.common.schema.validator(kind__$1)
));
var pred__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = max;
if(cljs.core.truth_(and__5023__auto__)){
return min;
} else {
return and__5023__auto__;
}
})())?(function (value){
var size = cljs.core.count(value);
return ((cljs.core.set_QMARK_(value)) && ((((((min <= size)) && ((size <= max)))) && (cljs.core.every_QMARK_(pred,value)))));
}):(cljs.core.truth_(min)?(function (value){
var size = cljs.core.count(value);
return ((cljs.core.set_QMARK_(value)) && ((((min <= size)) && (cljs.core.every_QMARK_(pred,value)))));
}):(cljs.core.truth_(max)?(function (value){
var size = cljs.core.count(value);
return ((cljs.core.set_QMARK_(value)) && ((((size <= max)) && (cljs.core.every_QMARK_(pred,value)))));
}):(function (value){
return cljs.core.every_QMARK_(pred,value);
})
)));
var decode = (function (v){
if(typeof v === 'string'){
var v__$1 = cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(v,/[\s,]+/);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.common.schema.xf_COLON_filter_word_strings,v__$1);
} else {
if(cljs.core.vector_QMARK_(v)){
return v;
} else {
if(cljs.core.coll_QMARK_(v)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,v);
} else {
return v;

}
}
}
});
var encode_string_child = app.common.schema.encoder.cljs$core$IFn$_invoke$arity$2(kind__$1,app.common.schema.string_transformer);
var encode_string = (function (o){
if(cljs.core.vector_QMARK_(o)){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(encode_string_child,o));
} else {
return o;
}
});
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),pred__$1,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("app.common.schema.openapi","items","app.common.schema.openapi/items",-217752415),new cljs.core.Keyword("decode","string","decode/string",-108229948),new cljs.core.Keyword("decode","json","decode/json",468276044),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("app.common.schema.openapi","format","app.common.schema.openapi/format",1235016623),new cljs.core.Keyword("app.common.schema.openapi","unique-items","app.common.schema.openapi/unique-items",-2108286573),new cljs.core.Keyword("encode","json","encode/json",303857460),new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),new cljs.core.Keyword("gen","gen","gen/gen",142743606),new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.Keyword("encode","string","encode/string",-137314532)],["Set of Strings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),decode,decode,"set","set",true,cljs.core.identity,"array",app.common.schema.generators.set(app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(kind__$1)),"should be a set of strings",encode_string])], null);
})], 0)));
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","set-of-strings","app.common.schema/set-of-strings",1794281466),new cljs.core.Keyword(null,"pred","pred",1927423397),(function (p1__42998_SHARP_){
return ((cljs.core.set_QMARK_(p1__42998_SHARP_)) && (cljs.core.every_QMARK_(cljs.core.string_QMARK_,p1__42998_SHARP_)));
}),new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("app.common.schema.openapi","items","app.common.schema.openapi/items",-217752415),new cljs.core.Keyword("decode","string","decode/string",-108229948),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("app.common.schema.openapi","format","app.common.schema.openapi/format",1235016623),new cljs.core.Keyword("app.common.schema.openapi","unique-items","app.common.schema.openapi/unique-items",-2108286573),new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),new cljs.core.Keyword("gen","gen","gen/gen",142743606),new cljs.core.Keyword("error","message","error/message",-502809098)],["Set of Strings",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),(function (v){
var v__$1 = ((typeof v === 'string')?cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(v,/[\s,]+/):v);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,app.common.schema.xf_COLON_filter_word_strings,v__$1);
}),"set[string]","set",true,"array",app.common.schema.generators.set(app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"string","string",-1989541586))),"should be a set of strings"])], null));
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","set-of-keywords","app.common.schema/set-of-keywords",2102430849),new cljs.core.Keyword(null,"pred","pred",1927423397),(function (p1__43000_SHARP_){
return ((cljs.core.set_QMARK_(p1__43000_SHARP_)) && (cljs.core.every_QMARK_(cljs.core.keyword_QMARK_,p1__43000_SHARP_)));
}),new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("app.common.schema.openapi","items","app.common.schema.openapi/items",-217752415),new cljs.core.Keyword("decode","string","decode/string",-108229948),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("app.common.schema.openapi","format","app.common.schema.openapi/format",1235016623),new cljs.core.Keyword("app.common.schema.openapi","unique-items","app.common.schema.openapi/unique-items",-2108286573),new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),new cljs.core.Keyword("gen","gen","gen/gen",142743606),new cljs.core.Keyword("error","message","error/message",-502809098)],["Set of Strings",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"keyword"], null),(function (v){
var v__$1 = ((typeof v === 'string')?cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(v,/[\s,]+/):v);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.common.schema.xf_COLON_filter_word_strings,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.keyword)),v__$1);
}),"set[string]","set",true,"array",app.common.schema.generators.set(app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"keyword","keyword",811389747))),"should be a set of strings"])], null));
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","set-of-uuid","app.common.schema/set-of-uuid",-313818768),new cljs.core.Keyword(null,"pred","pred",1927423397),(function (p1__43002_SHARP_){
return ((cljs.core.set_QMARK_(p1__43002_SHARP_)) && (cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,p1__43002_SHARP_)));
}),new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("app.common.schema.openapi","items","app.common.schema.openapi/items",-217752415),new cljs.core.Keyword("decode","string","decode/string",-108229948),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("app.common.schema.openapi","format","app.common.schema.openapi/format",1235016623),new cljs.core.Keyword("app.common.schema.openapi","unique-items","app.common.schema.openapi/unique-items",-2108286573),new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),new cljs.core.Keyword("gen","gen","gen/gen",142743606),new cljs.core.Keyword("error","message","error/message",-502809098)],["Set of UUID",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"uuid"], null),(function (v){
var v__$1 = ((typeof v === 'string')?cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(v,/[\s,]+/):v);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.schema.parse_uuid),v__$1);
}),"set[uuid]","set",true,"array",app.common.schema.generators.set(app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422))),"should be a set of UUID instances"])], null));
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","coll-of-uuid","app.common.schema/coll-of-uuid",-1448105897),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.every_QMARK_,cljs.core.uuid_QMARK_),new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("app.common.schema.openapi","items","app.common.schema.openapi/items",-217752415),new cljs.core.Keyword("decode","string","decode/string",-108229948),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("app.common.schema.openapi","format","app.common.schema.openapi/format",1235016623),new cljs.core.Keyword("app.common.schema.openapi","unique-items","app.common.schema.openapi/unique-items",-2108286573),new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),new cljs.core.Keyword("gen","gen","gen/gen",142743606),new cljs.core.Keyword("error","message","error/message",-502809098)],["Coll of UUID",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"uuid"], null),(function (v){
var v__$1 = ((typeof v === 'string')?cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(v,/[\s,]+/):v);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.schema.parse_uuid),v__$1);
}),"[uuid]","array",false,"array",app.common.schema.generators.set(app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422))),"should be a coll of UUID instances"])], null));
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(1),new cljs.core.Keyword(null,"compile","compile",608186429),(function (props,children,_){
var options = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.last(children));
var format = new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$2(props,"keyword");
var decode = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(format,"keyword"))?cljs.core.keyword:cljs.core.identity);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),(function (p1__43007_SHARP_){
return cljs.core.contains_QMARK_(options,p1__43007_SHARP_);
}),new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"enum",new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.elements(options),new cljs.core.Keyword("decode","string","decode/string",-108229948),decode,new cljs.core.Keyword("decode","json","decode/json",468276044),decode,new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),"string",new cljs.core.Keyword("app.common.schema.openapi","format","app.common.schema.openapi/format",1235016623),new cljs.core.Keyword(null,"format","format",-1306924766).cljs$core$IFn$_invoke$arity$2(props,"keyword")], null)], null);
})], null));
app.common.schema.max_safe_int = (2147483647);
app.common.schema.min_safe_int = (-2147483648);
app.common.schema.parse_long = (function app$common$schema$parse_long(v){
var or__5025__auto__ = (function (){try{if(typeof v === 'string'){
return cljs.core.parse_long(v);
} else {
return v;
}
}catch (e43014){var e__42495__auto__ = e43014;
return null;
}})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return v;
}
});
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","int","app.common.schema/int",519552051),new cljs.core.Keyword(null,"min","min",444991522),(0),new cljs.core.Keyword(null,"max","max",61366548),(0),new cljs.core.Keyword(null,"compile","compile",608186429),(function (p__43018,_,___$1){
var map__43019 = p__43018;
var map__43019__$1 = cljs.core.__destructure_map(map__43019);
var props = map__43019__$1;
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43019__$1,new cljs.core.Keyword(null,"max","max",61366548));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43019__$1,new cljs.core.Keyword(null,"min","min",444991522));
var pred = cljs.core.int_QMARK_;
var pred__$1 = (((!((min == null))))?(function (v){
var and__5023__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v));
if(cljs.core.truth_(and__5023__auto__)){
return (v >= min);
} else {
return and__5023__auto__;
}
}):pred);
var pred__$2 = (((!((max == null))))?(function (v){
var and__5023__auto__ = (pred__$1.cljs$core$IFn$_invoke$arity$1 ? pred__$1.cljs$core$IFn$_invoke$arity$1(v) : pred__$1.call(null,v));
if(cljs.core.truth_(and__5023__auto__)){
return (max >= v);
} else {
return and__5023__auto__;
}
}):pred__$1);
var gen = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword("gen","gen","gen/gen",142743606));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.schema.generators.small_int.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"min","min",444991522),min], 0));
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),pred__$2,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"title","title",636505583),"integer",new cljs.core.Keyword(null,"description","description",-1428560544),"integer",new cljs.core.Keyword("error","message","error/message",-502809098),"expected to be int/long",new cljs.core.Keyword("error","code","error/code",-1740032098),"errors.invalid-integer",new cljs.core.Keyword("gen","gen","gen/gen",142743606),gen,new cljs.core.Keyword("decode","string","decode/string",-108229948),app.common.schema.parse_long,new cljs.core.Keyword("decode","json","decode/json",468276044),app.common.schema.parse_long,new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),"integer"], null)], null);
})], null));
app.common.schema.parse_double = (function app$common$schema$parse_double(v){
var or__5025__auto__ = (function (){try{if(typeof v === 'string'){
return cljs.core.parse_double(v);
} else {
return v;
}
}catch (e43025){var e__42495__auto__ = e43025;
return null;
}})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return v;
}
});
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","double","app.common.schema/double",-567705842),new cljs.core.Keyword(null,"compile","compile",608186429),(function (p__43030,_,___$1){
var map__43032 = p__43030;
var map__43032__$1 = cljs.core.__destructure_map(map__43032);
var props = map__43032__$1;
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43032__$1,new cljs.core.Keyword(null,"max","max",61366548));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43032__$1,new cljs.core.Keyword(null,"min","min",444991522));
var pred = cljs.core.double_QMARK_;
var pred__$1 = (((!((min == null))))?(function (v){
var and__5023__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v));
if(cljs.core.truth_(and__5023__auto__)){
return (v >= min);
} else {
return and__5023__auto__;
}
}):pred);
var pred__$2 = (((!((max == null))))?(function (v){
var and__5023__auto__ = (pred__$1.cljs$core$IFn$_invoke$arity$1 ? pred__$1.cljs$core$IFn$_invoke$arity$1(v) : pred__$1.call(null,v));
if(cljs.core.truth_(and__5023__auto__)){
return (max >= v);
} else {
return and__5023__auto__;
}
}):pred__$1);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),pred__$2,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("decode","string","decode/string",-108229948),new cljs.core.Keyword("decode","json","decode/json",468276044),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("app.common.schema.openapi","format","app.common.schema.openapi/format",1235016623),new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),new cljs.core.Keyword("gen","gen","gen/gen",142743606),new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.Keyword("error","code","error/code",-1740032098)],["double number",app.common.schema.parse_double,app.common.schema.parse_double,"doble","double","number",app.common.schema.generators.small_double.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"min","min",444991522),min], 0)),"expected to be double","errors.invalid-double"])], null);
})], null));
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","number","app.common.schema/number",-157963053),new cljs.core.Keyword(null,"compile","compile",608186429),(function (p__43034,_,___$1){
var map__43035 = p__43034;
var map__43035__$1 = cljs.core.__destructure_map(map__43035);
var props = map__43035__$1;
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43035__$1,new cljs.core.Keyword(null,"max","max",61366548));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43035__$1,new cljs.core.Keyword(null,"min","min",444991522));
var pred = cljs.core.number_QMARK_;
var pred__$1 = (((!((min == null))))?(function (v){
var and__5023__auto__ = (pred.cljs$core$IFn$_invoke$arity$1 ? pred.cljs$core$IFn$_invoke$arity$1(v) : pred.call(null,v));
if(cljs.core.truth_(and__5023__auto__)){
return (v >= min);
} else {
return and__5023__auto__;
}
}):pred);
var pred__$2 = (((!((max == null))))?(function (v){
var and__5023__auto__ = (pred__$1.cljs$core$IFn$_invoke$arity$1 ? pred__$1.cljs$core$IFn$_invoke$arity$1(v) : pred__$1.call(null,v));
if(cljs.core.truth_(and__5023__auto__)){
return (max >= v);
} else {
return and__5023__auto__;
}
}):pred__$1);
var gen = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword("gen","gen","gen/gen",142743606));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.schema.generators.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.schema.generators.small_int.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"min","min",444991522),min], 0)),app.common.schema.generators.fmap((function (p1__43033_SHARP_){
return app.common.math.precision(p1__43033_SHARP_,(2));
}),app.common.schema.generators.small_double.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"min","min",444991522),min], 0)))], 0));
}
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pred","pred",1927423397),pred__$2,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"title","title",636505583),"number",new cljs.core.Keyword(null,"description","description",-1428560544),"number",new cljs.core.Keyword("error","message","error/message",-502809098),"expected to be number",new cljs.core.Keyword("error","code","error/code",-1740032098),"errors.invalid-number",new cljs.core.Keyword("gen","gen","gen/gen",142743606),gen,new cljs.core.Keyword("decode","string","decode/string",-108229948),app.common.schema.parse_double,new cljs.core.Keyword("decode","json","decode/json",468276044),app.common.schema.parse_double,new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),"number"], null)], null);
})], null));
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.common.schema","safe-int","app.common.schema/safe-int",-730426809),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","int","app.common.schema/int",519552051),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max","max",61366548),app.common.schema.max_safe_int,new cljs.core.Keyword(null,"min","min",444991522),app.common.schema.min_safe_int], null)], null));
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.common.schema","safe-double","app.common.schema/safe-double",-720421367),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","double","app.common.schema/double",-567705842),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"max","max",61366548),app.common.schema.max_safe_int,new cljs.core.Keyword(null,"min","min",444991522),app.common.schema.min_safe_int], null)], null));
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","number","app.common.schema/number",-157963053),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.small_double(),new cljs.core.Keyword(null,"max","max",61366548),app.common.schema.max_safe_int,new cljs.core.Keyword(null,"min","min",444991522),app.common.schema.min_safe_int], null)], null));
app.common.schema.parse_boolean = (function app$common$schema$parse_boolean(v){
if(typeof v === 'string'){
var G__43038 = v;
switch (G__43038) {
case "true":
case "t":
case "1":
return true;

break;
case "false":
case "f":
case "0":
return false;

break;
default:
return v;

}
} else {
return v;
}
});
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","boolean","app.common.schema/boolean",-727386221),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.boolean_QMARK_,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("decode","string","decode/string",-108229948),new cljs.core.Keyword("decode","json","decode/json",468276044),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),new cljs.core.Keyword("gen","gen","gen/gen",142743606),new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.Keyword("encode","string","encode/string",-137314532),new cljs.core.Keyword("error","code","error/code",-1740032098)],["boolean",app.common.schema.parse_boolean,app.common.schema.parse_boolean,"boolean","boolean",app.common.schema.generators.boolean$,"expected boolean",cljs.core.str,"errors.invalid-boolean"])], null));
app.common.schema.parse_keyword = (function app$common$schema$parse_keyword(v){
if(typeof v === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.common.json.read_kebab_key(v));
} else {
return v;
}
});
app.common.schema.format_keyword = (function app$common$schema$format_keyword(v){
if((v instanceof cljs.core.Keyword)){
return app.common.json.write_camel_key(cljs.core.name(v));
} else {
return v;
}
});
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","keyword","app.common.schema/keyword",123822366),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.keyword_QMARK_,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("decode","string","decode/string",-108229948),new cljs.core.Keyword("decode","json","decode/json",468276044),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),new cljs.core.Keyword("gen","gen","gen/gen",142743606),new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.Keyword("encode","string","encode/string",-137314532),new cljs.core.Keyword("error","code","error/code",-1740032098)],["keyword",app.common.schema.parse_keyword,app.common.schema.parse_keyword,"keyword","string",app.common.schema.generators.keyword,"expected keyword",app.common.schema.format_keyword,"errors.invalid-keyword"])], null));
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","contains-any","app.common.schema/contains-any",545508409),new cljs.core.Keyword(null,"min","min",444991522),(1),new cljs.core.Keyword(null,"max","max",61366548),(1),new cljs.core.Keyword(null,"compile","compile",608186429),(function (props,children,_){
var choices = cljs.core.last(children);
var pred = (cljs.core.truth_(new cljs.core.Keyword(null,"strict","strict",-665564191).cljs$core$IFn$_invoke$arity$1(props))?(function (p1__43042_SHARP_){
return cljs.core.some((function (prop){
return (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__43042_SHARP_,prop) == null)));
}),choices);
}):(function (p1__43043_SHARP_){
return cljs.core.some((function (prop){
return cljs.core.contains_QMARK_(p1__43043_SHARP_,prop);
}),choices);
}));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"pred","pred",1927423397),pred], null);
})], null));
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","fn","app.common.schema/fn",-520191477),new cljs.core.Keyword(null,"pred","pred",1927423397),cljs.core.fn_QMARK_], null));
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","word-string","app.common.schema/word-string",149287535),new cljs.core.Keyword(null,"pred","pred",1927423397),(function (p1__43046_SHARP_){
return ((typeof p1__43046_SHARP_ === 'string') && ((!(cuerdas.core.blank_QMARK_(p1__43046_SHARP_)))));
}),new cljs.core.Keyword(null,"property-pred","property-pred",1813304729),malli.core._min_max_pred(cljs.core.count),new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"title","title",636505583),"string",new cljs.core.Keyword(null,"description","description",-1428560544),"string",new cljs.core.Keyword("error","message","error/message",-502809098),"expected a non empty string",new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.word_string(),new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),"string",new cljs.core.Keyword("app.common.schema.openapi","format","app.common.schema.openapi/format",1235016623),"string"], null)], null));
app.common.schema.decode_uri = (function app$common$schema$decode_uri(val){
if(app.common.uri.uri_QMARK_(val)){
return val;
} else {
return app.common.uri.uri(cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(val));
}
});
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","uri","app.common.schema/uri",-383357038),new cljs.core.Keyword(null,"pred","pred",1927423397),app.common.uri.uri_QMARK_,new cljs.core.Keyword(null,"property-pred","property-pred",1813304729),(function (p__43048){
var map__43049 = p__43048;
var map__43049__$1 = cljs.core.__destructure_map(map__43049);
var props = map__43049__$1;
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43049__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43049__$1,new cljs.core.Keyword(null,"max","max",61366548));
var prefix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43049__$1,new cljs.core.Keyword(null,"prefix","prefix",-265908465));
if(cljs.core.seq(props)){
return (function (value){
var value__$1 = cljs.core.str.cljs$core$IFn$_invoke$arity$1(value);
var size = ((value__$1).length);
var and__5023__auto__ = (cljs.core.truth_((function (){var and__5023__auto__ = min;
if(cljs.core.truth_(and__5023__auto__)){
return max;
} else {
return and__5023__auto__;
}
})())?(((min <= size)) && ((size <= max))):(cljs.core.truth_(min)?(min <= size):(cljs.core.truth_(max)?(size <= max):null)));
if(cljs.core.truth_(and__5023__auto__)){
if(app.common.data.regexp_QMARK_(prefix)){
return (!((cljs.core.re_seq(prefix,value__$1) == null)));
} else {
return true;

}
} else {
return and__5023__auto__;
}
});
} else {
return cljs.core.constantly(true);
}
}),new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword("decode","string","decode/string",-108229948),new cljs.core.Keyword("decode","json","decode/json",468276044),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("app.common.schema.openapi","format","app.common.schema.openapi/format",1235016623),new cljs.core.Keyword("encode","json","encode/json",303857460),new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),new cljs.core.Keyword("gen","gen","gen/gen",142743606),new cljs.core.Keyword("encode","string","encode/string",-137314532),new cljs.core.Keyword("error","code","error/code",-1740032098)],["URI formatted string",app.common.schema.decode_uri,app.common.schema.decode_uri,"uri","uri",cljs.core.str,"string",app.common.schema.generators.uri(),cljs.core.str,"errors.invalid-uri"])], null));
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.Keyword(null,"pred","pred",1927423397),(function (p1__43051_SHARP_){
return ((typeof p1__43051_SHARP_ === 'string') && ((!(cuerdas.core.blank_QMARK_(p1__43051_SHARP_)))));
}),new cljs.core.Keyword(null,"property-pred","property-pred",1813304729),(function (p__43052){
var map__43053 = p__43052;
var map__43053__$1 = cljs.core.__destructure_map(map__43053);
var props = map__43053__$1;
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43053__$1,new cljs.core.Keyword(null,"min","min",444991522));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43053__$1,new cljs.core.Keyword(null,"max","max",61366548));
if(cljs.core.truth_((function (){var or__5025__auto__ = min;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return max;
}
})())){
return (function (value){
var size = cljs.core.count(value);
if(cljs.core.truth_((function (){var and__5023__auto__ = min;
if(cljs.core.truth_(and__5023__auto__)){
return max;
} else {
return and__5023__auto__;
}
})())){
return (((min <= size)) && ((size <= max)));
} else {
if(cljs.core.truth_(min)){
return (min <= size);
} else {
if(cljs.core.truth_(max)){
return (size <= max);
} else {
return null;
}
}
}
});
} else {
return cljs.core.constantly(true);
}
}),new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"string",new cljs.core.Keyword(null,"description","description",-1428560544),"not whitespace string",new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),"string",new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.word_string(),new cljs.core.Keyword("error","fn","error/fn",-1263293860),(function (p__43055){
var map__43056 = p__43055;
var map__43056__$1 = cljs.core.__destructure_map(map__43056);
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43056__$1,new cljs.core.Keyword(null,"value","value",305978217));
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43056__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var map__43057 = app.common.schema.properties(schema);
var map__43057__$1 = cljs.core.__destructure_map(map__43057);
var props = map__43057__$1;
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43057__$1,new cljs.core.Keyword(null,"max","max",61366548));
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__43057__$1,new cljs.core.Keyword(null,"min","min",444991522));
if(((typeof value === 'string') && (((typeof max === 'number') && ((cljs.core.count(value) > max)))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["errors.field-max-length",max], null)], null);
} else {
if(((typeof value === 'string') && (((typeof min === 'number') && ((cljs.core.count(value) < min)))))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["errors.field-min-length",min], null)], null);
} else {
if(((typeof value === 'string') && (cuerdas.core.empty_QMARK_(value)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),"errors.field-missing"], null);
} else {
if(((typeof value === 'string') && (cuerdas.core.blank_QMARK_(value)))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),"errors.field-not-all-whitespace"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"code","code",1586293142),"errors.invalid-text"], null);

}
}
}
}
})], null)], null));
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.schema","password","app.common.schema/password",836164606),new cljs.core.Keyword(null,"pred","pred",1927423397),(function (value){
return ((typeof value === 'string') && ((((cljs.core.count(value) >= (8))) && ((!(cuerdas.core.blank_QMARK_(value)))))));
}),new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"title","title",636505583),"password",new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.filter((function (p1__43058_SHARP_){
return (cljs.core.count(p1__43058_SHARP_) >= (8));
}),app.common.schema.generators.word_string()),new cljs.core.Keyword("error","code","error/code",-1740032098),"errors.password-too-short",new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),"string",new cljs.core.Keyword("app.common.schema.openapi","format","app.common.schema.openapi/format",1235016623),"password"], null)], null));
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.common.schema","any","app.common.schema/any",-1231442794),malli.util.update_properties.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"any","any",1705907423),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.any], 0)));
app.common.schema.valid_safe_number_QMARK_ = app.common.schema.lazy_validator(new cljs.core.Keyword("app.common.schema","safe-number","app.common.schema/safe-number",746155378));
app.common.schema.valid_safe_int_QMARK_ = app.common.schema.lazy_validator(new cljs.core.Keyword("app.common.schema","safe-int","app.common.schema/safe-int",-730426809));
app.common.schema.valid_text_QMARK_ = app.common.schema.validator(new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422));
app.common.schema.check_safe_int = app.common.schema.check_fn(new cljs.core.Keyword("app.common.schema","safe-int","app.common.schema/safe-int",-730426809));
app.common.schema.check_set_of_strings = app.common.schema.check_fn(new cljs.core.Keyword("app.common.schema","set-of-strings","app.common.schema/set-of-strings",1794281466));
app.common.schema.check_email = app.common.schema.check_fn(new cljs.core.Keyword("app.common.schema","email","app.common.schema/email",2070921211));
app.common.schema.check_uuid = app.common.schema.check_fn.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hint","hint",439639918),"expected valid uuid instance"], 0));
app.common.schema.check_string = app.common.schema.check_fn.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hint","hint",439639918),"expected string"], 0));
app.common.schema.check_coll_of_uuid = app.common.schema.check_fn(new cljs.core.Keyword("app.common.schema","coll-of-uuid","app.common.schema/coll-of-uuid",-1448105897));
app.common.schema.check_set_of_uuid = app.common.schema.check_fn(new cljs.core.Keyword("app.common.schema","set-of-uuid","app.common.schema/set-of-uuid",-313818768));
app.common.schema.check_set_of_emails = app.common.schema.check_fn(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","set","app.common.schema/set",1226590145),new cljs.core.Keyword("app.common.schema","email","app.common.schema/email",2070921211)], null));

//# sourceMappingURL=app.common.schema.js.map
