import "./cljs_env.js";
import "./cljs.core.js";
import "./malli.core.js";
import "./malli.util.js";
import "./cljs.math.js";
import "./goog.date.utcdatetime.js";
import "./goog.date.date.js";
goog.provide('malli.transform');
malli.transform._STAR_max_compile_depth_STAR_ = (10);
/**
 * Utility function to convert input into an interceptor. Works with functions,
 *   map and sequence of those.
 */
malli.transform._interceptor = (function malli$transform$_interceptor(_QMARK_interceptor,schema,options){
if(cljs.core.fn_QMARK_(_QMARK_interceptor)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),_QMARK_interceptor], null);
} else {
if(((cljs.core.map_QMARK_(_QMARK_interceptor)) && (cljs.core.contains_QMARK_(_QMARK_interceptor,new cljs.core.Keyword(null,"compile","compile",608186429))))){
var compiled = new cljs.core.Keyword("malli.transform","compiled","malli.transform/compiled",-1910053091).cljs$core$IFn$_invoke$arity$2(options,(0));
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("malli.transform","compiled","malli.transform/compiled",-1910053091),(compiled + (1)));
if((compiled >= malli.transform._STAR_max_compile_depth_STAR_)){
malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.transform","too-deep-compilation","malli.transform/too-deep-compilation",-1157462070),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"this","this",-611633625),_QMARK_interceptor,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"options","options",99638489),options__$1], null));
} else {
}

var temp__5825__auto__ = (function (){var G__37221 = (function (){var fexpr__37224 = new cljs.core.Keyword(null,"compile","compile",608186429).cljs$core$IFn$_invoke$arity$1(_QMARK_interceptor);
return (fexpr__37224.cljs$core$IFn$_invoke$arity$2 ? fexpr__37224.cljs$core$IFn$_invoke$arity$2(schema,options__$1) : fexpr__37224.call(null,schema,options__$1));
})();
var G__37222 = schema;
var G__37223 = options__$1;
return (malli.transform._interceptor.cljs$core$IFn$_invoke$arity$3 ? malli.transform._interceptor.cljs$core$IFn$_invoke$arity$3(G__37221,G__37222,G__37223) : malli.transform._interceptor.call(null,G__37221,G__37222,G__37223));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var interceptor = temp__5825__auto__;
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(_QMARK_interceptor,new cljs.core.Keyword(null,"compile","compile",608186429)),interceptor], 0));
} else {
return null;
}
} else {
if(((cljs.core.map_QMARK_(_QMARK_interceptor)) && (((cljs.core.contains_QMARK_(_QMARK_interceptor,new cljs.core.Keyword(null,"enter","enter",1792452624))) || (cljs.core.contains_QMARK_(_QMARK_interceptor,new cljs.core.Keyword(null,"leave","leave",1022579443))))))){
return _QMARK_interceptor;
} else {
if(cljs.core.coll_QMARK_(_QMARK_interceptor)){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2((function (p__37227,p__37228){
var map__37230 = p__37227;
var map__37230__$1 = cljs.core.__destructure_map(map__37230);
var enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37230__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var leave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37230__$1,new cljs.core.Keyword(null,"leave","leave",1022579443));
var map__37231 = p__37228;
var map__37231__$1 = cljs.core.__destructure_map(map__37231);
var new_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37231__$1,new cljs.core.Keyword(null,"enter","enter",1792452624));
var new_leave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37231__$1,new cljs.core.Keyword(null,"leave","leave",1022579443));
var enter__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = enter;
if(cljs.core.truth_(and__5023__auto__)){
return new_enter;
} else {
return and__5023__auto__;
}
})())?(function (p1__37217_SHARP_){
var G__37250 = (enter.cljs$core$IFn$_invoke$arity$1 ? enter.cljs$core$IFn$_invoke$arity$1(p1__37217_SHARP_) : enter.call(null,p1__37217_SHARP_));
return (new_enter.cljs$core$IFn$_invoke$arity$1 ? new_enter.cljs$core$IFn$_invoke$arity$1(G__37250) : new_enter.call(null,G__37250));
}):(function (){var or__5025__auto__ = enter;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new_enter;
}
})());
var leave__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = leave;
if(cljs.core.truth_(and__5023__auto__)){
return new_leave;
} else {
return and__5023__auto__;
}
})())?(function (p1__37218_SHARP_){
var G__37259 = (new_leave.cljs$core$IFn$_invoke$arity$1 ? new_leave.cljs$core$IFn$_invoke$arity$1(p1__37218_SHARP_) : new_leave.call(null,p1__37218_SHARP_));
return (leave.cljs$core$IFn$_invoke$arity$1 ? leave.cljs$core$IFn$_invoke$arity$1(G__37259) : leave.call(null,G__37259));
}):(function (){var or__5025__auto__ = leave;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new_leave;
}
})());
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"enter","enter",1792452624),enter__$1,new cljs.core.Keyword(null,"leave","leave",1022579443),leave__$1], null);
}),cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__37219_SHARP_){
return (malli.transform._interceptor.cljs$core$IFn$_invoke$arity$3 ? malli.transform._interceptor.cljs$core$IFn$_invoke$arity$3(p1__37219_SHARP_,schema,options) : malli.transform._interceptor.call(null,p1__37219_SHARP_,schema,options));
}),_QMARK_interceptor));
} else {
if((_QMARK_interceptor == null)){
return null;
} else {
if(cljs.core.ifn_QMARK_(_QMARK_interceptor)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enter","enter",1792452624),_QMARK_interceptor], null);
} else {
return malli.core._fail_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("malli.transform","invalid-transformer","malli.transform/invalid-transformer",-1717093616),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),_QMARK_interceptor], null));

}
}
}
}
}
}
});
malli.transform._safe = (function malli$transform$_safe(f){
return (function (p1__37262_SHARP_){
try{return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(p1__37262_SHARP_) : f.call(null,p1__37262_SHARP_));
}catch (e37263){if((e37263 instanceof Error)){
var _ = e37263;
return p1__37262_SHARP_;
} else {
throw e37263;

}
}});
});
malli.transform._string__GT_long = (function malli$transform$_string__GT_long(x){
if(typeof x === 'string'){
try{var x_SINGLEQUOTE_ = (cljs.core.truth_(cljs.core.re_find(/\D/,cljs.core.subs.cljs$core$IFn$_invoke$arity$2(x,(1))))?NaN:parseInt(x,(10)));
if(cljs.core.truth_(isNaN(x_SINGLEQUOTE_))){
return x;
} else {
if((x_SINGLEQUOTE_ > Number.MAX_SAFE_INTEGER)){
return x;
} else {
if((x_SINGLEQUOTE_ < Number.MIN_SAFE_INTEGER)){
return x;
} else {
return x_SINGLEQUOTE_;

}
}
}
}catch (e37265){if((e37265 instanceof Error)){
var _ = e37265;
return x;
} else {
throw e37265;

}
}} else {
return x;
}
});
malli.transform.parse_float = (function malli$transform$parse_float(s){
return cljs.core.parse_double(s);
});
malli.transform._string__GT_float = (function malli$transform$_string__GT_float(x){
if(typeof x === 'string'){
var or__5025__auto__ = malli.transform.parse_float(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return x;
}
} else {
return x;
}
});
malli.transform._string__GT_double = (function malli$transform$_string__GT_double(x){
if(typeof x === 'string'){
var or__5025__auto__ = cljs.core.parse_double(x);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return x;
}
} else {
return x;
}
});
malli.transform._number__GT_float = (function malli$transform$_number__GT_float(x){
if(typeof x === 'number'){
return x;
} else {
return x;
}
});
malli.transform._number__GT_double = (function malli$transform$_number__GT_double(x){
if(typeof x === 'number'){
return x;
} else {
return x;
}
});
malli.transform._number__GT_long = (function malli$transform$_number__GT_long(x){
if(cljs.core.integer_QMARK_(x)){
return x;
} else {
if(((typeof x === 'number') && ((x === cljs.math.round(x))))){
return cljs.math.round(x);
} else {
return x;

}
}
});
malli.transform._string__GT_keyword = (function malli$transform$_string__GT_keyword(x){
if(typeof x === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
malli.transform._string__GT_boolean = (function malli$transform$_string__GT_boolean(x){
if(typeof x === 'string'){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("true",x)){
return true;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("false",x)){
return false;
} else {
return x;

}
}
} else {
return x;
}
});
malli.transform.uuid_re = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
malli.transform._string__GT_uuid = (function malli$transform$_string__GT_uuid(x){
if(typeof x === 'string'){
var temp__5823__auto__ = cljs.core.re_matches(malli.transform.uuid_re,x);
if(cljs.core.truth_(temp__5823__auto__)){
var x__$1 = temp__5823__auto__;
return cljs.core.uuid(x__$1);
} else {
return x;
}
} else {
return x;
}
});
malli.transform._string__GT_date = (function malli$transform$_string__GT_date(x){
if(typeof x === 'string'){
try{return (new Date(goog.date.UtcDateTime.fromIsoString(x).getTime()));
}catch (e37279){if((e37279 instanceof Error)){
var _ = e37279;
return x;
} else {
throw e37279;

}
}} else {
return x;
}
});
malli.transform._string__GT_symbol = (function malli$transform$_string__GT_symbol(x){
if(typeof x === 'string'){
return cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(x);
} else {
return x;
}
});
malli.transform._string__GT_nil = (function malli$transform$_string__GT_nil(x){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",x)){
return null;
} else {
return x;
}
});
malli.transform._any__GT_string = (function malli$transform$_any__GT_string(x){
if((x == null)){
return null;
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(x);
}
});
malli.transform._any__GT_any = (function malli$transform$_any__GT_any(x){
return x;
});
malli.transform._date__GT_string = (function malli$transform$_date__GT_string(x){
if(cljs.core.inst_QMARK_(x)){
try{return x.toISOString();
}catch (e37283){if((e37283 instanceof Error)){
var _ = e37283;
return x;
} else {
throw e37283;

}
}} else {
return x;
}
});
malli.transform._transform_map_keys = (function malli$transform$_transform_map_keys(var_args){
var G__37290 = arguments.length;
switch (G__37290) {
case 1:
return malli.transform._transform_map_keys.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return malli.transform._transform_map_keys.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.transform._transform_map_keys.cljs$core$IFn$_invoke$arity$1 = (function (f){
var xform = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__37292){
var vec__37293 = p__37292;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37293,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37293,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(k) : f.call(null,k)),v], null);
}));
return (function (p1__37284_SHARP_){
var G__37300 = p1__37284_SHARP_;
if(cljs.core.map_QMARK_(p1__37284_SHARP_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(p1__37284_SHARP_),xform,G__37300);
} else {
return G__37300;
}
});
}));

(malli.transform._transform_map_keys.cljs$core$IFn$_invoke$arity$2 = (function (ks,f){
var xform = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__37301){
var vec__37302 = p__37301;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37302,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37302,(1),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__37306 = k;
if(cljs.core.contains_QMARK_(ks,k)){
return (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__37306) : f.call(null,G__37306));
} else {
return G__37306;
}
})(),v], null);
}));
return (function (p1__37285_SHARP_){
var G__37311 = p1__37285_SHARP_;
if(cljs.core.map_QMARK_(p1__37285_SHARP_)){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.empty(p1__37285_SHARP_),xform,G__37311);
} else {
return G__37311;
}
});
}));

(malli.transform._transform_map_keys.cljs$lang$maxFixedArity = 2);

malli.transform._transform_if_valid = (function malli$transform$_transform_if_valid(f,schema){
var validator = malli.core._validator(schema);
return (function (x){
var out = (f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(x) : f.call(null,x));
if(cljs.core.truth_((validator.cljs$core$IFn$_invoke$arity$1 ? validator.cljs$core$IFn$_invoke$arity$1(out) : validator.call(null,out)))){
return out;
} else {
return x;
}
});
});
malli.transform._sequential__GT_set = (function malli$transform$_sequential__GT_set(x){
if(cljs.core.set_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.set(x);
} else {
return x;

}
}
});
malli.transform._sequential__GT_vector = (function malli$transform$_sequential__GT_vector(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return x;

}
}
});
malli.transform._sequential_or_set__GT_vector = (function malli$transform$_sequential_or_set__GT_vector(x){
if(cljs.core.vector_QMARK_(x)){
return x;
} else {
if(cljs.core.set_QMARK_(x)){
return cljs.core.vec(x);
} else {
if(cljs.core.sequential_QMARK_(x)){
return cljs.core.vec(x);
} else {
return x;

}
}
}
});
malli.transform._sequential_or_set__GT_seq = (function malli$transform$_sequential_or_set__GT_seq(x){
if(cljs.core.vector_QMARK_(x)){
return cljs.core.seq(x);
} else {
if(cljs.core.set_QMARK_(x)){
return cljs.core.seq(x);
} else {
return x;

}
}
});
malli.transform._infer_child_compiler = (function malli$transform$_infer_child_compiler(x_coders){
return (function (schema,_){
var G__37328 = schema;
var G__37328__$1 = (((G__37328 == null))?null:malli.core.children.cljs$core$IFn$_invoke$arity$1(G__37328));
var G__37328__$2 = (((G__37328__$1 == null))?null:malli.core._infer(G__37328__$1));
if((G__37328__$2 == null)){
return null;
} else {
return (x_coders.cljs$core$IFn$_invoke$arity$1 ? x_coders.cljs$core$IFn$_invoke$arity$1(G__37328__$2) : x_coders.call(null,G__37328__$2));
}
});
});
malli.transform._add_child_compilers = (function malli$transform$_add_child_compilers(x_coders){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(x_coders,new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),malli.transform._infer_child_compiler(x_coders)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),malli.transform._infer_child_compiler(x_coders)], null)], 0));
});
malli.transform._base_json_decoders = (function malli$transform$_base_json_decoders(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"qualified-symbol","qualified-symbol",-665513695),new cljs.core.Symbol(null,"simple-keyword?","simple-keyword?",-367134735,null),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Symbol(null,"uuid?","uuid?",400077689,null),new cljs.core.Symbol(null,"inst?","inst?",1614698981,null),new cljs.core.Symbol(null,"simple-ident?","simple-ident?",194189851,null),new cljs.core.Symbol(null,"int?","int?",1799729645,null),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Symbol(null,"float?","float?",673884616,null),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Symbol(null,"ident?","ident?",-2061359468,null),new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),new cljs.core.Symbol(null,"neg-int?","neg-int?",-1610409390,null),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"qualified-ident?","qualified-ident?",-928894763,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"simple-symbol?","simple-symbol?",1408454822,null),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Symbol(null,"qualified-keyword?","qualified-keyword?",375456001,null),new cljs.core.Symbol(null,"qualified-symbol?","qualified-symbol?",98763807,null),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),new cljs.core.Keyword(null,"uuid","uuid",-2145095719),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Symbol(null,"double?","double?",-2146564276,null),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)],[malli.transform._string__GT_symbol,malli.transform._string__GT_keyword,malli.transform._number__GT_double,malli.transform._string__GT_uuid,malli.transform._string__GT_date,malli.transform._string__GT_keyword,malli.transform._number__GT_long,malli.transform._number__GT_long,malli.transform._number__GT_float,malli.transform._number__GT_float,malli.transform._string__GT_symbol,malli.transform._string__GT_keyword,malli.transform._string__GT_keyword,malli.transform._number__GT_long,malli.transform._string__GT_symbol,malli.transform._string__GT_keyword,malli.transform._string__GT_keyword,malli.transform._string__GT_symbol,malli.transform._number__GT_long,malli.transform._number__GT_long,malli.transform._string__GT_keyword,malli.transform._string__GT_keyword,malli.transform._string__GT_symbol,malli.transform._number__GT_long,malli.transform._string__GT_uuid,malli.transform._sequential__GT_set,malli.transform._number__GT_double,malli.transform._number__GT_long]);
});
malli.transform._json_decoders = (function malli$transform$_json_decoders(){
return malli.transform._add_child_compilers(malli.transform._base_json_decoders());
});
malli.transform._base_json_encoders = (function malli$transform$_base_json_encoders(){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"qualified-symbol","qualified-symbol",-665513695),new cljs.core.Symbol(null,"simple-keyword?","simple-keyword?",-367134735,null),new cljs.core.Symbol(null,"uuid?","uuid?",400077689,null),new cljs.core.Symbol(null,"inst?","inst?",1614698981,null),new cljs.core.Keyword(null,"symbol","symbol",-1038572696),new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),new cljs.core.Symbol(null,"symbol?","symbol?",1820680511,null),new cljs.core.Symbol(null,"keyword?","keyword?",1917797069,null),new cljs.core.Symbol(null,"simple-symbol?","simple-symbol?",1408454822,null),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Symbol(null,"qualified-keyword?","qualified-keyword?",375456001,null),new cljs.core.Symbol(null,"qualified-symbol?","qualified-symbol?",98763807,null),new cljs.core.Keyword(null,"uuid","uuid",-2145095719)],[malli.transform._any__GT_string,malli.core._keyword__GT_string,malli.transform._any__GT_string,malli.transform._date__GT_string,malli.transform._any__GT_string,malli.core._keyword__GT_string,malli.transform._any__GT_string,malli.core._keyword__GT_string,malli.transform._any__GT_string,malli.core._keyword__GT_string,malli.core._keyword__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string]);
});
malli.transform._json_encoders = (function malli$transform$_json_encoders(){
return malli.transform._add_child_compilers(malli.transform._base_json_encoders());
});
malli.transform._string_decoders = (function malli$transform$_string_decoders(){
return malli.transform._add_child_compilers(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.transform._base_json_decoders(),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Symbol(null,"true?","true?",-1600332395,null),new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Keyword(null,"not=","not=",-173995323),new cljs.core.Symbol(null,"int?","int?",1799729645,null),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Symbol(null,"float?","float?",673884616,null),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Symbol(null,"false?","false?",-1522377573,null),new cljs.core.Symbol(null,"neg-int?","neg-int?",-1610409390,null),new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),new cljs.core.Symbol(null,"boolean?","boolean?",1790940868,null),new cljs.core.Symbol(null,"number?","number?",-1747282210,null),new cljs.core.Symbol(null,"double?","double?",-2146564276,null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)],[malli.transform._string__GT_boolean,malli.transform._string__GT_long,malli.transform._string__GT_double,malli.transform._string__GT_long,malli.transform._string__GT_long,malli.transform._string__GT_long,malli.transform._string__GT_long,malli.transform._string__GT_float,malli.transform._string__GT_float,malli.transform._string__GT_boolean,malli.transform._string__GT_long,malli.transform._sequential__GT_vector,malli.transform._string__GT_long,malli.transform._string__GT_long,malli.transform._transform_map_keys.cljs$core$IFn$_invoke$arity$1(malli.core._keyword__GT_string),malli.transform._string__GT_long,malli.transform._string__GT_long,malli.transform._string__GT_boolean,malli.transform._string__GT_double,malli.transform._string__GT_double,malli.transform._string__GT_boolean,malli.transform._string__GT_long,malli.transform._string__GT_long])], 0)));
});
malli.transform._string_encoders = (function malli$transform$_string_encoders(){
return malli.transform._add_child_compilers(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.transform._base_json_encoders(),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"<=","<=",-395636158),new cljs.core.Keyword(null,"double","double",884886883),new cljs.core.Keyword(null,"not=","not=",-173995323),new cljs.core.Symbol(null,"int?","int?",1799729645,null),new cljs.core.Keyword(null,"int","int",-1741416922),new cljs.core.Keyword(null,">",">",-555517146),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Symbol(null,"neg-int?","neg-int?",-1610409390,null),new cljs.core.Keyword(null,">=",">=",-623615505),new cljs.core.Symbol(null,"integer?","integer?",1303791671,null),new cljs.core.Symbol(null,"zero?","zero?",325758897,null),new cljs.core.Symbol(null,"float","float",-91857841,null),new cljs.core.Symbol(null,"nat-int?","nat-int?",-1879663400,null),new cljs.core.Symbol(null,"double","double",-1769548886,null),new cljs.core.Keyword(null,"<","<",-646864291),new cljs.core.Symbol(null,"pos-int?","pos-int?",-1205815015,null)],[malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string,malli.transform._any__GT_string])], 0)));
});

/**
* @constructor
 * @implements {malli.core.Transformer}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.transform.t_malli$transform37406 = (function (_QMARK_transformers,__GT_data,__GT_eval,__GT_chain,chain,chain_SINGLEQUOTE_,meta37407){
this._QMARK_transformers = _QMARK_transformers;
this.__GT_data = __GT_data;
this.__GT_eval = __GT_eval;
this.__GT_chain = __GT_chain;
this.chain = chain;
this.chain_SINGLEQUOTE_ = chain_SINGLEQUOTE_;
this.meta37407 = meta37407;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.transform.t_malli$transform37406.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37408,meta37407__$1){
var self__ = this;
var _37408__$1 = this;
return (new malli.transform.t_malli$transform37406(self__._QMARK_transformers,self__.__GT_data,self__.__GT_eval,self__.__GT_chain,self__.chain,self__.chain_SINGLEQUOTE_,meta37407__$1));
}));

(malli.transform.t_malli$transform37406.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37408){
var self__ = this;
var _37408__$1 = this;
return self__.meta37407;
}));

(malli.transform.t_malli$transform37406.prototype.malli$core$Transformer$ = cljs.core.PROTOCOL_SENTINEL);

(malli.transform.t_malli$transform37406.prototype.malli$core$Transformer$_transformer_chain$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.chain;
}));

(malli.transform.t_malli$transform37406.prototype.malli$core$Transformer$_value_transformer$arity$4 = (function (_,schema,method,options){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__37450){
var map__37451 = p__37450;
var map__37451__$1 = cljs.core.__destructure_map(map__37451);
var map__37452 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37451__$1,method);
var map__37452__$1 = cljs.core.__destructure_map(map__37452);
var keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37452__$1,new cljs.core.Keyword(null,"keys","keys",1068423698));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37452__$1,new cljs.core.Keyword(null,"default","default",-1987822328));
var transformers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37452__$1,new cljs.core.Keyword(null,"transformers","transformers",-734201565));
var options__$1 = (function (){var or__5025__auto__ = options;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return malli.core.options.cljs$core$IFn$_invoke$arity$1(schema);
}
})();
var from = (function (f){
return (function (p1__37369_SHARP_){
var G__37467 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2((f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(schema) : f.call(null,schema)),p1__37369_SHARP_);
if((G__37467 == null)){
return null;
} else {
return (self__.__GT_eval.cljs$core$IFn$_invoke$arity$2 ? self__.__GT_eval.cljs$core$IFn$_invoke$arity$2(G__37467,options__$1) : self__.__GT_eval.call(null,G__37467,options__$1));
}
});
});
var from_properties = cljs.core.some_fn.cljs$core$IFn$_invoke$arity$2(from(malli.core.properties),from(malli.core.type_properties));
var temp__5823__auto__ = (function (){var or__5025__auto__ = cljs.core.some(from_properties,keys);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(transformers,malli.core.type.cljs$core$IFn$_invoke$arity$1(schema));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return default$;
}
}
})();
if(cljs.core.truth_(temp__5823__auto__)){
var _QMARK_interceptor = temp__5823__auto__;
var interceptor = malli.transform._interceptor(_QMARK_interceptor,schema,options__$1);
if((acc == null)){
return interceptor;
} else {
return malli.transform._interceptor(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [acc,interceptor], null),schema,options__$1);
}
} else {
return acc;
}
}),null,self__.chain_SINGLEQUOTE_);
}));

(malli.transform.t_malli$transform37406.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?transformers","?transformers",1611212010,null),new cljs.core.Symbol(null,"->data","->data",912474639,null),new cljs.core.Symbol(null,"->eval","->eval",1090195269,null),new cljs.core.Symbol(null,"->chain","->chain",923961567,null),new cljs.core.Symbol(null,"chain","chain",1656162556,null),new cljs.core.Symbol(null,"chain'","chain'",-156051191,null),new cljs.core.Symbol(null,"meta37407","meta37407",-1225702053,null)], null);
}));

(malli.transform.t_malli$transform37406.cljs$lang$type = true);

(malli.transform.t_malli$transform37406.cljs$lang$ctorStr = "malli.transform/t_malli$transform37406");

(malli.transform.t_malli$transform37406.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.transform/t_malli$transform37406");
}));

/**
 * Positional factory function for malli.transform/t_malli$transform37406.
 */
malli.transform.__GT_t_malli$transform37406 = (function malli$transform$__GT_t_malli$transform37406(_QMARK_transformers,__GT_data,__GT_eval,__GT_chain,chain,chain_SINGLEQUOTE_,meta37407){
return (new malli.transform.t_malli$transform37406(_QMARK_transformers,__GT_data,__GT_eval,__GT_chain,chain,chain_SINGLEQUOTE_,meta37407));
});


malli.transform.transformer = (function malli$transform$transformer(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37738 = arguments.length;
var i__5750__auto___37739 = (0);
while(true){
if((i__5750__auto___37739 < len__5749__auto___37738)){
args__5755__auto__.push((arguments[i__5750__auto___37739]));

var G__37740 = (i__5750__auto___37739 + (1));
i__5750__auto___37739 = G__37740;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_transformers){
var __GT_data = (function (ts,default$,name,key){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"transformers","transformers",-734201565),ts,new cljs.core.Keyword(null,"default","default",-1987822328),default$,new cljs.core.Keyword(null,"keys","keys",1068423698),(cljs.core.truth_(name)?(function (){var G__37394 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(key),name], null)], null);
if((!(cljs.core.qualified_keyword_QMARK_(name)))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__37394,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$2(key,cljs.core.name(name))], null));
} else {
return G__37394;
}
})():null)], null);
});
var __GT_eval = (function (x,options){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (x__$1,k,v){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(x__$1,k,malli.core.eval.cljs$core$IFn$_invoke$arity$2(v,options));
}),x,x);
} else {
return malli.core.eval.cljs$core$IFn$_invoke$arity$1(x);
}
});
var __GT_chain = malli.core._comp.cljs$core$IFn$_invoke$arity$2(malli.core._transformer_chain,malli.core._into_transformer);
var chain = cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__37364_SHARP_){
if(cljs.core.map_QMARK_(p1__37364_SHARP_)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__37364_SHARP_], null);
} else {
return __GT_chain(p1__37364_SHARP_);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,_QMARK_transformers)], 0)));
var chain_SINGLEQUOTE_ = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__37367_SHARP_){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__37367_SHARP_);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decode","decode",-1306165281),__GT_data(new cljs.core.Keyword(null,"decoders","decoders",1132818244).cljs$core$IFn$_invoke$arity$1(p1__37367_SHARP_),new cljs.core.Keyword(null,"default-decoder","default-decoder",808357161).cljs$core$IFn$_invoke$arity$1(p1__37367_SHARP_),name,"decode"),new cljs.core.Keyword(null,"encode","encode",-1753429702),__GT_data(new cljs.core.Keyword(null,"encoders","encoders",-111722908).cljs$core$IFn$_invoke$arity$1(p1__37367_SHARP_),new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207).cljs$core$IFn$_invoke$arity$1(p1__37367_SHARP_),name,"encode")], null);
}),chain);
if(cljs.core.seq(chain)){
return (new malli.transform.t_malli$transform37406(_QMARK_transformers,__GT_data,__GT_eval,__GT_chain,chain,chain_SINGLEQUOTE_,cljs.core.PersistentArrayMap.EMPTY));
} else {
return null;
}
}));

(malli.transform.transformer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.transform.transformer.cljs$lang$applyTo = (function (seq37380){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37380));
}));

malli.transform.json_transformer = (function malli$transform$json_transformer(var_args){
var G__37486 = arguments.length;
switch (G__37486) {
case 0:
return malli.transform.json_transformer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.transform.json_transformer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.transform.json_transformer.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.transform.json_transformer.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.transform.json_transformer.cljs$core$IFn$_invoke$arity$1 = (function (p__37489){
var map__37491 = p__37489;
var map__37491__$1 = cljs.core.__destructure_map(map__37491);
var json_vectors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37491__$1,new cljs.core.Keyword("malli.transform","json-vectors","malli.transform/json-vectors",-1108071835));
var keywordize_map_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37491__$1,new cljs.core.Keyword("malli.transform","keywordize-map-keys","malli.transform/keywordize-map-keys",158196822));
var map_of_key_decoders = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37491__$1,new cljs.core.Keyword("malli.transform","map-of-key-decoders","malli.transform/map-of-key-decoders",-1029175759),malli.transform._string_decoders());
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"json","json",1279968570),new cljs.core.Keyword(null,"decoders","decoders",1132818244),(function (){var G__37494 = (function (){var G__37495 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(malli.transform._json_decoders(),new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema,_){
var key_schema = (function (){var G__37496 = schema;
var G__37496__$1 = (((G__37496 == null))?null:malli.core.children.cljs$core$IFn$_invoke$arity$1(G__37496));
if((G__37496__$1 == null)){
return null;
} else {
return cljs.core.first(G__37496__$1);
}
})();
var or__5025__auto__ = (function (){var G__37498 = key_schema;
var G__37498__$1 = (((G__37498 == null))?null:malli.core.type.cljs$core$IFn$_invoke$arity$1(G__37498));
var G__37498__$2 = (((G__37498__$1 == null))?null:(map_of_key_decoders.cljs$core$IFn$_invoke$arity$1 ? map_of_key_decoders.cljs$core$IFn$_invoke$arity$1(G__37498__$1) : map_of_key_decoders.call(null,G__37498__$1)));
var G__37498__$3 = (((G__37498__$2 == null))?null:malli.transform._interceptor(G__37498__$2,schema,cljs.core.PersistentArrayMap.EMPTY));
var G__37498__$4 = (((G__37498__$3 == null))?null:malli.core._intercepting.cljs$core$IFn$_invoke$arity$1(G__37498__$3));
var G__37498__$5 = (((G__37498__$4 == null))?null:malli.core._comp.cljs$core$IFn$_invoke$arity$2(G__37498__$4,malli.core._keyword__GT_string));
var G__37498__$6 = (((G__37498__$5 == null))?null:malli.transform._transform_if_valid(G__37498__$5,key_schema));
if((G__37498__$6 == null)){
return null;
} else {
return malli.transform._transform_map_keys.cljs$core$IFn$_invoke$arity$1(G__37498__$6);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return malli.transform._transform_map_keys.cljs$core$IFn$_invoke$arity$1(malli.core._keyword__GT_string);
}
})], null));
if(cljs.core.truth_(keywordize_map_keys)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37495,new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema,_){
var keyword_keys = cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.name,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword_QMARK_,malli.util.keys(schema))));
return malli.transform._transform_map_keys.cljs$core$IFn$_invoke$arity$2(keyword_keys,malli.transform._string__GT_keyword);
})], null));
} else {
return G__37495;
}
})();
if(cljs.core.truth_(json_vectors)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37494,new cljs.core.Keyword(null,"vector","vector",1902966158),malli.transform._sequential__GT_vector);
} else {
return G__37494;
}
})(),new cljs.core.Keyword(null,"encoders","encoders",-111722908),malli.transform._json_encoders()], null)], 0));
}));

(malli.transform.json_transformer.cljs$lang$maxFixedArity = 1);

malli.transform.string_transformer = (function malli$transform$string_transformer(){
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.Keyword(null,"decoders","decoders",1132818244),malli.transform._string_decoders(),new cljs.core.Keyword(null,"encoders","encoders",-111722908),malli.transform._string_encoders()], null)], 0));
});
malli.transform.strip_extra_keys_transformer = (function malli$transform$strip_extra_keys_transformer(var_args){
var G__37502 = arguments.length;
switch (G__37502) {
case 0:
return malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.transform.strip_extra_keys_transformer.cljs$core$IFn$_invoke$arity$1 = (function (p__37507){
var map__37508 = p__37507;
var map__37508__$1 = cljs.core.__destructure_map(map__37508);
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37508__$1,new cljs.core.Keyword(null,"accept","accept",1874130431),malli.core._comp.cljs$core$IFn$_invoke$arity$3((function (p1__37500_SHARP_){
return (((p1__37500_SHARP_ == null)) || (p1__37500_SHARP_ === true));
}),new cljs.core.Keyword(null,"closed","closed",-919675359),malli.core.properties));
var strip_map = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema,_){
var default_schema = malli.core.default_schema.cljs$core$IFn$_invoke$arity$1(schema);
var ks = (function (){var G__37512 = schema;
var G__37512__$1 = (((G__37512 == null))?null:malli.core.explicit_keys.cljs$core$IFn$_invoke$arity$1(G__37512));
if((G__37512__$1 == null)){
return null;
} else {
return cljs.core.set(G__37512__$1);
}
})();
var G__37513 = null;
if(cljs.core.truth_((accept.cljs$core$IFn$_invoke$arity$1 ? accept.cljs$core$IFn$_invoke$arity$1(schema) : accept.call(null,schema)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37513,new cljs.core.Keyword(null,"enter","enter",1792452624),(function (x){
if(((cljs.core.map_QMARK_(x)) && (cljs.core.not(default_schema)))){
return cljs.core.reduce_kv((function (acc,k,___$1){
if(cljs.core.not((ks.cljs$core$IFn$_invoke$arity$1 ? ks.cljs$core$IFn$_invoke$arity$1(k) : ks.call(null,k)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(acc,k);
} else {
return acc;
}
}),x,x);
} else {
return x;
}
}));
} else {
return G__37513;
}
})], null);
var strip_map_of = (function (stage){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema,options){
var entry_schema = malli.core.into_schema.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"tuple","tuple",-472667284),null,malli.core.children.cljs$core$IFn$_invoke$arity$1(schema),options);
var valid_QMARK_ = malli.core.validator.cljs$core$IFn$_invoke$arity$2(entry_schema,options);
return cljs.core.PersistentArrayMap.createAsIfByAssoc([stage,(function (x){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,entry){
if(cljs.core.truth_((valid_QMARK_.cljs$core$IFn$_invoke$arity$1 ? valid_QMARK_.cljs$core$IFn$_invoke$arity$1(entry) : valid_QMARK_.call(null,entry)))){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc,acc,entry);
} else {
return acc;
}
}),cljs.core.empty(x),x);
})]);
})], null);
});
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decoders","decoders",1132818244),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map","map",1371690461),strip_map,new cljs.core.Keyword(null,"map-of","map-of",1189682355),strip_map_of(new cljs.core.Keyword(null,"leave","leave",1022579443))], null),new cljs.core.Keyword(null,"encoders","encoders",-111722908),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"map","map",1371690461),strip_map,new cljs.core.Keyword(null,"map-of","map-of",1189682355),strip_map_of(new cljs.core.Keyword(null,"enter","enter",1792452624))], null)], null)], 0));
}));

(malli.transform.strip_extra_keys_transformer.cljs$lang$maxFixedArity = 1);

malli.transform.key_transformer = (function malli$transform$key_transformer(p__37520){
var map__37524 = p__37520;
var map__37524__$1 = cljs.core.__destructure_map(map__37524);
var decode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37524__$1,new cljs.core.Keyword(null,"decode","decode",-1306165281));
var encode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37524__$1,new cljs.core.Keyword(null,"encode","encode",-1753429702));
var types = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37524__$1,new cljs.core.Keyword(null,"types","types",590030639),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),null], null), null));
var transform = (function (f,stage){
if(cljs.core.truth_(f)){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([stage,malli.transform._transform_map_keys.cljs$core$IFn$_invoke$arity$1(f)]);
} else {
return null;
}
});
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.set_QMARK_(types))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decoders","decoders",1132818244),cljs.core.zipmap(types,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(transform(decode,new cljs.core.Keyword(null,"enter","enter",1792452624)))),new cljs.core.Keyword(null,"encoders","encoders",-111722908),cljs.core.zipmap(types,cljs.core.repeat.cljs$core$IFn$_invoke$arity$1(transform(encode,new cljs.core.Keyword(null,"leave","leave",1022579443))))], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),types))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-decoder","default-decoder",808357161),transform(decode,new cljs.core.Keyword(null,"enter","enter",1792452624)),new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207),transform(encode,new cljs.core.Keyword(null,"leave","leave",1022579443))], null):null))], 0));
});
malli.transform.default_value_transformer = (function malli$transform$default_value_transformer(var_args){
var G__37529 = arguments.length;
switch (G__37529) {
case 0:
return malli.transform.default_value_transformer.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return malli.transform.default_value_transformer.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(malli.transform.default_value_transformer.cljs$core$IFn$_invoke$arity$0 = (function (){
return malli.transform.default_value_transformer.cljs$core$IFn$_invoke$arity$1(null);
}));

(malli.transform.default_value_transformer.cljs$core$IFn$_invoke$arity$1 = (function (p__37530){
var map__37531 = p__37530;
var map__37531__$1 = cljs.core.__destructure_map(map__37531);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37531__$1,new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"default","default",-1987822328));
var default_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37531__$1,new cljs.core.Keyword(null,"default-fn","default-fn",-473729550),(function (_,x){
return x;
}));
var defaults = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37531__$1,new cljs.core.Keyword(null,"defaults","defaults",976027214));
var add_optional_keys = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37531__$1,new cljs.core.Keyword("malli.transform","add-optional-keys","malli.transform/add-optional-keys",964281447));
var get_default = (function (schema,more_props){
var or__5025__auto__ = (function (){var G__37532 = schema;
var G__37532__$1 = (((G__37532 == null))?null:malli.core.properties.cljs$core$IFn$_invoke$arity$1(G__37532));
var G__37532__$2 = (((G__37532__$1 == null))?null:new cljs.core.Keyword("default","fn","default/fn",503756453).cljs$core$IFn$_invoke$arity$1(G__37532__$1));
if((G__37532__$2 == null)){
return null;
} else {
return malli.core.eval.cljs$core$IFn$_invoke$arity$1(G__37532__$2);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var G__37534 = more_props;
var G__37534__$1 = (((G__37534 == null))?null:new cljs.core.Keyword("default","fn","default/fn",503756453).cljs$core$IFn$_invoke$arity$1(G__37534));
if((G__37534__$1 == null)){
return null;
} else {
return malli.core.eval.cljs$core$IFn$_invoke$arity$1(G__37534__$1);
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var temp__5827__auto__ = (function (){var or__5025__auto____$2 = (function (){var G__37535 = schema;
var G__37535__$1 = (((G__37535 == null))?null:malli.core.properties.cljs$core$IFn$_invoke$arity$1(G__37535));
if((G__37535__$1 == null)){
return null;
} else {
return cljs.core.find(G__37535__$1,key);
}
})();
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
var G__37537 = more_props;
if((G__37537 == null)){
return null;
} else {
return cljs.core.find(G__37537,key);
}
}
})();
if((temp__5827__auto__ == null)){
var G__37540 = schema;
var G__37540__$1 = (((G__37540 == null))?null:malli.core.type.cljs$core$IFn$_invoke$arity$1(G__37540));
var G__37540__$2 = (((G__37540__$1 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(defaults,G__37540__$1));
if((G__37540__$2 == null)){
return null;
} else {
return (function (p1__37526_SHARP_){
return cljs.core.constantly((p1__37526_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__37526_SHARP_.cljs$core$IFn$_invoke$arity$1(schema) : p1__37526_SHARP_.call(null,schema)));
})(G__37540__$2);
}
} else {
var e = temp__5827__auto__;
return cljs.core.constantly(cljs.core.val(e));
}
}
}
});
var set_default = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema,_){
var temp__5829__auto__ = get_default(schema,null);
if((temp__5829__auto__ == null)){
return null;
} else {
var f = temp__5829__auto__;
return (function (x){
if((x == null)){
var G__37544 = schema;
var G__37545 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
return (default_fn.cljs$core$IFn$_invoke$arity$2 ? default_fn.cljs$core$IFn$_invoke$arity$2(G__37544,G__37545) : default_fn.call(null,G__37544,G__37545));
} else {
return x;
}
});
}
})], null);
var add_defaults = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"compile","compile",608186429),(function (schema,_){
var defaults__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__37554){
var vec__37555 = p__37554;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37555,(0),null);
var map__37558 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37555,(1),null);
var map__37558__$1 = cljs.core.__destructure_map(map__37558);
var p = map__37558__$1;
var optional = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37558__$1,new cljs.core.Keyword(null,"optional","optional",2053951509));
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37555,(2),null);
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.not(optional);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return add_optional_keys;
}
})())){
var temp__5829__auto__ = (function (){var or__5025__auto__ = get_default(v,p);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(malli.core._ref_schema_QMARK_(v)){
return get_default(malli.core._deref(v),p);
} else {
return null;
}
}
})();
if((temp__5829__auto__ == null)){
return null;
} else {
var f = temp__5829__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,(function (){
var G__37562 = schema;
var G__37563 = (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
return (default_fn.cljs$core$IFn$_invoke$arity$2 ? default_fn.cljs$core$IFn$_invoke$arity$2(G__37562,G__37563) : default_fn.call(null,G__37562,G__37563));
})], null);
}
} else {
return null;
}
})),malli.core.children.cljs$core$IFn$_invoke$arity$1(schema));
if(cljs.core.seq(defaults__$1)){
return (function (x){
if(cljs.core.map_QMARK_(x)){
return cljs.core.reduce_kv((function (acc,k,f){
if((!(cljs.core.contains_QMARK_(x,k)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(acc,k,(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null)));
} else {
return acc;
}
}),x,defaults__$1);
} else {
return x;
}
});
} else {
return null;
}
})], null);
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"default-decoder","default-decoder",808357161),set_default,new cljs.core.Keyword(null,"default-encoder","default-encoder",117541207),set_default], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decoders","decoders",1132818244),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),add_defaults], null),new cljs.core.Keyword(null,"encoders","encoders",-111722908),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"map","map",1371690461),add_defaults], null)], null)], 0));
}));

(malli.transform.default_value_transformer.cljs$lang$maxFixedArity = 1);

malli.transform.collection_transformer = (function malli$transform$collection_transformer(){
var coders = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"vector","vector",1902966158),malli.transform._sequential_or_set__GT_vector,new cljs.core.Keyword(null,"sequential","sequential",-1082983960),malli.transform._sequential_or_set__GT_seq,new cljs.core.Keyword(null,"set","set",304602554),malli.transform._sequential__GT_set,new cljs.core.Keyword(null,"tuple","tuple",-472667284),malli.transform._sequential__GT_vector], null);
return malli.transform.transformer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"decoders","decoders",1132818244),coders,new cljs.core.Keyword(null,"encoders","encoders",-111722908),coders], null)], 0));
});

//# sourceMappingURL=malli.transform.js.map
