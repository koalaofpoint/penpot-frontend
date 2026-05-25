import "./cljs_env.js";
import "./cljs.core.js";
import "./cuerdas.core.js";
import "./rumext.v2.util.js";
import "./malli.core.js";
import "./malli.transform.js";
import "./malli.error.js";
goog.provide('rumext.v2.validation');
rumext.v2.validation.default_transformer = malli.transform.json_transformer;
rumext.v2.validation.process_explain_kv = (function rumext$v2$validation$process_explain_kv(prefix,result,k,v){
var nm = (((k instanceof cljs.core.Keyword))?cljs.core.name(k):cljs.core.str.cljs$core$IFn$_invoke$arity$1(k));
var pk = (cljs.core.truth_(prefix)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(prefix),".",nm].join(''):nm);
if(((cljs.core.vector_QMARK_(v)) && (cljs.core.every_QMARK_(cljs.core.vector_QMARK_,v)))){
var data = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector),v);
return cljs.core.reduce_kv(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rumext.v2.validation.process_explain_kv,pk),result,data);
} else {
if(((cljs.core.vector_QMARK_(v)) && (cljs.core.every_QMARK_(cljs.core.map_QMARK_,v)))){
var gdata = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("malli","error","malli/error",-1152359159)),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.second)),v);
var ndata = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__46425_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__46425_SHARP_,new cljs.core.Keyword("malli","error","malli/error",-1152359159));
})),cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1(cljs.core.vector)),v);
var result__$1 = cljs.core.reduce_kv(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rumext.v2.validation.process_explain_kv,pk),result,gdata);
var result__$2 = cljs.core.reduce_kv(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rumext.v2.validation.process_explain_kv,pk),result__$1,ndata);
return result__$2;
} else {
if(((cljs.core.vector_QMARK_(v)) && (cljs.core.every_QMARK_(cljs.core.string_QMARK_,v)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(result,pk,cljs.core.peek(v));
} else {
if(cljs.core.map_QMARK_(v)){
return cljs.core.reduce_kv(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rumext.v2.validation.process_explain_kv,pk),result,v);
} else {
return result;

}
}
}
}
});
rumext.v2.validation.validator = (function rumext$v2$validation$validator(schema){
var validator = (new cljs.core.Delay((function (){
return malli.core.validator.cljs$core$IFn$_invoke$arity$1(schema);
}),null));
var explainer = (new cljs.core.Delay((function (){
return malli.core.explainer.cljs$core$IFn$_invoke$arity$1(schema);
}),null));
var decoder = (new cljs.core.Delay((function (){
return malli.core.decoder.cljs$core$IFn$_invoke$arity$2(schema,rumext.v2.validation.default_transformer);
}),null));
return (function (props){
var props__$1 = rumext.v2.util.props_bean(props);
var props__$2 = (function (){var fexpr__46429 = cljs.core.deref(decoder);
return (fexpr__46429.cljs$core$IFn$_invoke$arity$1 ? fexpr__46429.cljs$core$IFn$_invoke$arity$1(props__$1) : fexpr__46429.call(null,props__$1));
})();
var validate = cljs.core.deref(validator);
if(validate(props__$2)){
return null;
} else {
var explainer__$1 = cljs.core.deref(explainer);
var explain = explainer__$1(props__$2);
var explain__$1 = malli.error.humanize.cljs$core$IFn$_invoke$arity$1(explain);
return cljs.core.reduce_kv(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(rumext.v2.validation.process_explain_kv,null),cljs.core.PersistentArrayMap.EMPTY,explain__$1);
}
});
});

//# sourceMappingURL=rumext.v2.validation.js.map
