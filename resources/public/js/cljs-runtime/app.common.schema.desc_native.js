import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.schema.js";
import "./malli.core.js";
goog.provide('app.common.schema.desc_native');
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.schema !== 'undefined') && (typeof app.common.schema.desc_native !== 'undefined') && (typeof app.common.schema.desc_native.visit !== 'undefined')){
} else {
app.common.schema.desc_native.visit = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("app.common.schema.desc-native","default","app.common.schema.desc-native/default",145934244)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__52755 = cljs.core.get_global_hierarchy;
return (fexpr__52755.cljs$core$IFn$_invoke$arity$0 ? fexpr__52755.cljs$core$IFn$_invoke$arity$0() : fexpr__52755.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.common.schema.desc-native","visit"),(function (name,_schema,_children,_options){
return name;
}),new cljs.core.Keyword("app.common.schema.desc-native","default","app.common.schema.desc-native/default",145934244),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
app.common.schema.desc_native.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("app.common.schema.desc-native","default","app.common.schema.desc-native/default",145934244),(function (_,schema,___$1,options){
return malli.core.form.cljs$core$IFn$_invoke$arity$2(schema,options);
}));
app.common.schema.desc_native.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (_,___$1,children,___$2){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"vector","vector",1902966158),children);
}));
app.common.schema.desc_native.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (_,___$1,children,___$2){
var childs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__52766){
var vec__52768 = p__52766;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52768,(0),null);
var p = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52768,(1),null);
var c = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52768,(2),null);
if((p == null)){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,c], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [k,app.common.data.without_qualified.cljs$core$IFn$_invoke$arity$1(p),c], null);
}
}),children);
var props = null;
var params = (function (){var G__52771 = childs;
if((!((props == null)))){
return cljs.core.cons(props,G__52771);
} else {
return G__52771;
}
})();
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"map","map",1371690461),params);
}));
app.common.schema.desc_native.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"multi","multi",-190293005),(function (_,schema,children,options){
var props = malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema);
if(cljs.core.truth_(new cljs.core.Keyword("app.common.schema.desc-native","simplified","app.common.schema.desc-native/simplified",-2123092483).cljs$core$IFn$_invoke$arity$1(props))){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword("app.common.schema.desc-native","simplified","app.common.schema.desc-native/simplified",-2123092483)),new cljs.core.Keyword(null,"options","options",99638489),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,children)))], null);
} else {
return malli.core.form.cljs$core$IFn$_invoke$arity$2(schema,options);
}
}));
app.common.schema.desc_native.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (_,___$1,children,___$2){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.vector,new cljs.core.Keyword(null,"merge","merge",-1804319409),children);
}));
app.common.schema.desc_native.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),(function (_,schema,children,options){
return app.common.schema.desc_native.visit.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863),schema,children,options);
}));
app.common.schema.desc_native.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","val","malli.core/val",39501268),(function (_,___$1,children,___$2){
return cljs.core.last(children);
}));
app.common.schema.desc_native.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863),(function (_,schema,___$1,options){
var schema_SINGLEQUOTE_ = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__52778 = schema_SINGLEQUOTE_;
var G__52779 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("app.common.schema.desc-native","level","app.common.schema.desc-native/level",-839786332),cljs.core.inc);
return (app.common.schema.desc_native.describe_STAR_.cljs$core$IFn$_invoke$arity$2 ? app.common.schema.desc_native.describe_STAR_.cljs$core$IFn$_invoke$arity$2(G__52778,G__52779) : app.common.schema.desc_native.describe_STAR_.call(null,G__52778,G__52779));
}));
app.common.schema.desc_native.describe_STAR_ = (function app$common$schema$desc_native$describe_STAR_(s,options){
var walk_fn = (function app$common$schema$desc_native$describe_STAR__$_walk_fn(schema,_,children,options__$1){
return app.common.schema.desc_native.visit.cljs$core$IFn$_invoke$arity$4(malli.core.type.cljs$core$IFn$_invoke$arity$1(schema),schema,children,options__$1);
});
return malli.core.walk.cljs$core$IFn$_invoke$arity$3(s,walk_fn,options);
});
/**
 * Given a schema, returns a string explaiaing the required shape in English
 */
app.common.schema.desc_native.describe = (function app$common$schema$desc_native$describe(var_args){
var G__52786 = arguments.length;
switch (G__52786) {
case 1:
return app.common.schema.desc_native.describe.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.schema.desc_native.describe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.schema.desc_native.describe.cljs$core$IFn$_invoke$arity$1 = (function (s){
return app.common.schema.desc_native.describe.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(app.common.schema.desc_native.describe.cljs$core$IFn$_invoke$arity$2 = (function (s,options){
var s__$1 = app.common.schema.schema(s);
var s__$2 = (function (){var G__52793 = s__$1;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(malli.core.type.cljs$core$IFn$_invoke$arity$1(s__$1),new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863))){
return malli.core.deref.cljs$core$IFn$_invoke$arity$1(G__52793);
} else {
return G__52793;
}
})();
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(options,new cljs.core.Keyword("malli.core","walk-entry-vals","malli.core/walk-entry-vals",-64238340),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("app.common.schema.desc-native","level","app.common.schema.desc-native/level",-839786332),(0)], 0));
return app.common.schema.desc_native.describe_STAR_(s__$2,options__$1);
}));

(app.common.schema.desc_native.describe.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=app.common.schema.desc_native.js.map
