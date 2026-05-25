import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./clojure.set.js";
import "./cuerdas.core.js";
import "./malli.core.js";
goog.provide('app.common.schema.openapi');
app.common.schema.openapi._STAR_definitions_STAR_ = null;
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.schema !== 'undefined') && (typeof app.common.schema.openapi !== 'undefined') && (typeof app.common.schema.openapi.visit !== 'undefined')){
} else {
app.common.schema.openapi.visit = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"default","default",-1987822328),new cljs.core.Keyword("app.common.schema.openapi","default","app.common.schema.openapi/default",-1057013151)], null),new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__48197 = cljs.core.get_global_hierarchy;
return (fexpr__48197.cljs$core$IFn$_invoke$arity$0 ? fexpr__48197.cljs$core$IFn$_invoke$arity$0() : fexpr__48197.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.common.schema.openapi","visit"),(function (name,_schema,_children,_options){
return name;
}),new cljs.core.Keyword("app.common.schema.openapi","default","app.common.schema.openapi/default",-1057013151),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("app.common.schema.openapi","default","app.common.schema.openapi/default",-1057013151),(function (_,schema,___$1,___$2){
var props = malli.core.type_properties.cljs$core$IFn$_invoke$arity$1(schema);
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739)),new cljs.core.Keyword(null,"format","format",-1306924766),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword("app.common.schema.openapi","format","app.common.schema.openapi/format",1235016623)),new cljs.core.Keyword(null,"title","title",636505583),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"title","title",636505583)),new cljs.core.Keyword(null,"description","description",-1428560544),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"description","description",-1428560544))], null));
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">",">",-555517146),(function (_,___$1,p__48202,___$2){
var vec__48203 = p__48202;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48203,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"exclusiveMinimum","exclusiveMinimum",-869557322),value], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,">=",">=",-623615505),(function (_,___$1,p__48206,___$2){
var vec__48207 = p__48206;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48207,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"minimum","minimum",-1621006059),value], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<","<",-646864291),(function (_,___$1,p__48213,___$2){
var vec__48214 = p__48213;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48214,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"exclusiveMaximum","exclusiveMaximum",1883434466),value], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"<=","<=",-395636158),(function (_,___$1,p__48218,___$2){
var vec__48219 = p__48218;
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48219,(0),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"maximum","maximum",573880714),value], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"=","=",1152933628),(function (_,schema,children,___$1){
var props = malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"string","string",-1989541586));
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),(function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.data.name(type);
}
})(),new cljs.core.Keyword(null,"enum","enum",1679018432),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"string","string",-1989541586),type))?cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.common.data.name,children):cljs.core.vec(children))], null));
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not=","not=",-173995323),(function (_,___$1,___$2,___$3){
return cljs.core.PersistentArrayMap.EMPTY;
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (_,___$1,___$2,___$3){
return null;
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("app.common.schema","contains-any","app.common.schema/contains-any",545508409),(function (_,___$1,___$2,___$3){
return null;
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"not","not",-595976884),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"not","not",-595976884),cljs.core.last(children)], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"and","and",-971899817),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allOf","allOf",857821143),cljs.core.keep.cljs$core$IFn$_invoke$arity$2(cljs.core.not_empty,children)], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"or","or",235744169),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anyOf","anyOf",-1046092155),children], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"orn","orn",738436484),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"anyOf","anyOf",-1046092155),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.last,children)], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","val","malli.core/val",39501268),(function (_,___$1,children,___$2){
return cljs.core.first(children);
}));
app.common.schema.openapi.required_xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(malli.core._comp.cljs$core$IFn$_invoke$arity$3(cljs.core.not,new cljs.core.Keyword(null,"optional","optional",2053951509),cljs.core.second)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cuerdas.core.camel));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map","map",1371690461),(function (_,schema,children,___$1){
var required = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.common.schema.openapi.required_xf,children);
var props = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array_map,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p__48238){
var vec__48239 = p__48238;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48239,(0),null);
var ___$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48239,(1),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48239,(2),null);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cuerdas.core.camel(k),s], null);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hidden","hidden",-312506092),children)], 0)));
var closed_QMARK_ = new cljs.core.Keyword(null,"closed","closed",-919675359).cljs$core$IFn$_invoke$arity$1(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema));
var object = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"object",new cljs.core.Keyword(null,"properties","properties",685819552),props], null);
var G__48242 = object;
var G__48242__$1 = ((cljs.core.seq(required))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48242,new cljs.core.Keyword(null,"required","required",1807647006),required):G__48242);
if(cljs.core.truth_(closed_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48242__$1,new cljs.core.Keyword(null,"additionalProperties","additionalProperties",-1203767392),false);
} else {
return G__48242__$1;
}
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"multi","multi",-190293005),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"oneOf","oneOf",1209080187),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.last,children)], null);
}));
app.common.schema.openapi.minmax_properties = (function app$common$schema$openapi$minmax_properties(m,schema,kmin,kmax){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([m,clojure.set.rename_keys(cljs.core.select_keys(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),kmin,new cljs.core.Keyword(null,"max","max",61366548),kmax], null))], 0));
});
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"map-of","map-of",1189682355),(function (_,schema,children,___$1){
return app.common.schema.openapi.minmax_properties(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"object",new cljs.core.Keyword(null,"additionalProperties","additionalProperties",-1203767392),cljs.core.second(children)], null),schema,new cljs.core.Keyword(null,"minProperties","minProperties",100355152),new cljs.core.Keyword(null,"maxProperties","maxProperties",1289793027));
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"any","any",1705907423),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),"Any Value"], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("app.common.schema","set","app.common.schema/set",1226590145),(function (_,schema,children,___$1){
return app.common.schema.openapi.minmax_properties(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(children),new cljs.core.Keyword(null,"uniqueItems","uniqueItems",-826722268),true], null),schema,new cljs.core.Keyword(null,"minItems","minItems",1950622069),new cljs.core.Keyword(null,"maxItems","maxItems",576652798));
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("app.common.schema","vec","app.common.schema/vec",801005460),(function (_,schema,children,___$1){
return app.common.schema.openapi.minmax_properties(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(children)], null),schema,new cljs.core.Keyword(null,"minItems","minItems",1950622069),new cljs.core.Keyword(null,"maxItems","maxItems",576652798));
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"vector","vector",1902966158),(function (_,schema,children,options){
return app.common.schema.openapi.visit.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.common.schema","vec","app.common.schema/vec",801005460),schema,children,options);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (_,schema,children,options){
return app.common.schema.openapi.visit.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("app.common.schema","set","app.common.schema/set",1226590145),schema,children,options);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"sequential","sequential",-1082983960),(function (_,schema,children,___$1){
return app.common.schema.openapi.minmax_properties(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.first(children)], null),schema,new cljs.core.Keyword(null,"minItems","minItems",1950622069),new cljs.core.Keyword(null,"maxItems","maxItems",576652798));
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"enum","enum",1679018432),(function (_,___$1,children,options){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var G__48254 = malli.core._infer(children);
if((G__48254 == null)){
return null;
} else {
return (app.common.schema.openapi.transform_STAR_.cljs$core$IFn$_invoke$arity$2 ? app.common.schema.openapi.transform_STAR_.cljs$core$IFn$_invoke$arity$2(G__48254,options) : app.common.schema.openapi.transform_STAR_.call(null,G__48254,options));
}
})(),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"enum","enum",1679018432),children], null)], 0));
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"maybe","maybe",-314397560),(function (_,___$1,children,___$2){
var children__$1 = cljs.core.first(children);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(children__$1,new cljs.core.Keyword(null,"nullable","nullable",317149691),true);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"tuple","tuple",-472667284),(function (_,___$1,children,___$2){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"array",new cljs.core.Keyword(null,"items","items",1031954938),children,new cljs.core.Keyword(null,"additionalItems","additionalItems",630706986),false], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"re","re",228676202),(function (_,schema,___$1,options){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"pattern","pattern",242135423),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.first(malli.core.children.cljs$core$IFn$_invoke$arity$2(schema,options)))], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"nil","nil",99600501),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"null"], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"string","string",-1989541586),(function (_,schema,___$1,___$2){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null),clojure.set.rename_keys(cljs.core.select_keys(malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"max","max",61366548)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),new cljs.core.Keyword(null,"minLength","minLength",-1538722770),new cljs.core.Keyword(null,"max","max",61366548),new cljs.core.Keyword(null,"maxLength","maxLength",-1633020073)], null))], 0));
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),(function (_,___$1,children,___$2){
var options = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.common.data.name,cljs.core.first(children));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"enum","enum",1679018432),options], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"int","int",-1741416922),(function (_,schema,___$1,___$2){
return app.common.schema.openapi.minmax_properties(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"integer"], null),schema,new cljs.core.Keyword(null,"minimum","minimum",-1621006059),new cljs.core.Keyword(null,"maximum","maximum",573880714));
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"double","double",884886883),(function (_,schema,___$1,___$2){
return app.common.schema.openapi.minmax_properties(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"number",new cljs.core.Keyword(null,"format","format",-1306924766),"double"], null),schema,new cljs.core.Keyword(null,"minimum","minimum",-1621006059),new cljs.core.Keyword(null,"maximum","maximum",573880714));
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("app.common.schema","int","app.common.schema/int",519552051),(function (_,schema,children,options){
return app.common.schema.openapi.visit.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"int","int",-1741416922),schema,children,options);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("app.common.schema","double","app.common.schema/double",-567705842),(function (_,schema,children,options){
return app.common.schema.openapi.visit.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"double","double",884886883),schema,children,options);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"boolean","boolean",-1919418404),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"boolean"], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("app.common.schema","boolean","app.common.schema/boolean",-727386221),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"boolean"], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"keyword","keyword",811389747),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"qualified-keyword","qualified-keyword",736041675),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"qualified-symbol","qualified-symbol",-665513695),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"string"], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"uuid","uuid",-2145095719),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"uuid"], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422),(function (_,___$1,___$2,___$3){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"string",new cljs.core.Keyword(null,"format","format",-1306924766),"uuid"], null);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),(function (_,schema,children,options){
return app.common.schema.openapi.visit.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863),schema,children,options);
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("malli.core","schema","malli.core/schema",-1780373863),(function (_,schema,___$1,options){
var result = (function (){var G__48267 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__48268 = options;
return (app.common.schema.openapi.transform_STAR_.cljs$core$IFn$_invoke$arity$2 ? app.common.schema.openapi.transform_STAR_.cljs$core$IFn$_invoke$arity$2(G__48267,G__48268) : app.common.schema.openapi.transform_STAR_.call(null,G__48267,G__48268));
})();
var defpath = new cljs.core.Keyword("app.common.schema.openapi","definitions-path","app.common.schema.openapi/definitions-path",585697057).cljs$core$IFn$_invoke$arity$2(options,"#/definitions/");
if(cljs.core.truth_(new cljs.core.Keyword("app.common.schema.openapi","embed","app.common.schema.openapi/embed",2010301748).cljs$core$IFn$_invoke$arity$1(options))){
return result;
} else {
var temp__5823__auto__ = malli.core._ref(schema);
if(cljs.core.truth_(temp__5823__auto__)){
var ref = temp__5823__auto__;
var nname = cljs.core.namespace(ref);
var tname = cljs.core.name(ref);
var tname__$1 = cuerdas.core.capital(cuerdas.core.camel(tname));
var nname__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nname,"app.common.schema")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nname,"app.common.time")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nname,"app.common.features"))))))?"":((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(nname,"datoteka.fs"))?"Filesystem":((cuerdas.core.starts_with_QMARK_(nname,"app.common.geom"))?cuerdas.core.capital(cuerdas.core.camel(cuerdas.core.replace(nname,/app\.common\.geom\.\w+/,"geom"))):((cuerdas.core.starts_with_QMARK_(nname,"app."))?cuerdas.core.capital(cuerdas.core.camel(cljs.core.subs.cljs$core$IFn$_invoke$arity$2(nname,(4)))):cuerdas.core.capital(cuerdas.core.camel(nname))
))));
var rkey = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(nname__$1),cljs.core.str.cljs$core$IFn$_invoke$arity$1(tname__$1)].join('');
var G__48271_48336 = app.common.schema.openapi._STAR_definitions_STAR_;
if((G__48271_48336 == null)){
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(G__48271_48336,cljs.core.assoc,rkey,result);
}

return new cljs.core.PersistentArrayMap(null, 1, ["$ref",""+(defpath ?? "")+(rkey ?? "")], null);
} else {
return result;
}
}
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"merge","merge",-1804319409),(function (_,schema,___$1,options){
var G__48272 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__48273 = options;
return (app.common.schema.openapi.transform_STAR_.cljs$core$IFn$_invoke$arity$2 ? app.common.schema.openapi.transform_STAR_.cljs$core$IFn$_invoke$arity$2(G__48272,G__48273) : app.common.schema.openapi.transform_STAR_.call(null,G__48272,G__48273));
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"union","union",2142937499),(function (_,schema,___$1,options){
var G__48275 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__48276 = options;
return (app.common.schema.openapi.transform_STAR_.cljs$core$IFn$_invoke$arity$2 ? app.common.schema.openapi.transform_STAR_.cljs$core$IFn$_invoke$arity$2(G__48275,G__48276) : app.common.schema.openapi.transform_STAR_.call(null,G__48275,G__48276));
}));
app.common.schema.openapi.visit.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"select-keys","select-keys",1945879180),(function (_,schema,___$1,options){
var G__48278 = malli.core.deref.cljs$core$IFn$_invoke$arity$1(schema);
var G__48279 = options;
return (app.common.schema.openapi.transform_STAR_.cljs$core$IFn$_invoke$arity$2 ? app.common.schema.openapi.transform_STAR_.cljs$core$IFn$_invoke$arity$2(G__48278,G__48279) : app.common.schema.openapi.transform_STAR_.call(null,G__48278,G__48279));
}));
app.common.schema.openapi.unlift_keys = (function app$common$schema$openapi$unlift_keys(m,prefix){
return cljs.core.reduce_kv((function (p1__48281_SHARP_,p2__48280_SHARP_,p3__48282_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.name(prefix),cljs.core.namespace(p2__48280_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48281_SHARP_,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(cuerdas.core.camel(cljs.core.name(p2__48280_SHARP_))),p3__48282_SHARP_);
} else {
return p1__48281_SHARP_;
}
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
app.common.schema.openapi.transform_STAR_ = (function app$common$schema$openapi$transform_STAR_(s,options){
var walk_fn = (function app$common$schema$openapi$transform_STAR__$_walk_fn(schema,_,children,options__$1){
var p = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([malli.core.type_properties.cljs$core$IFn$_invoke$arity$1(schema),malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema)], 0));
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.select_keys(p,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"default","default",-1987822328)], null)),app.common.schema.openapi.visit.cljs$core$IFn$_invoke$arity$4(malli.core.type.cljs$core$IFn$_invoke$arity$1(schema),schema,children,options__$1),app.common.schema.openapi.unlift_keys(p,new cljs.core.Keyword(null,"app.common.openapi","app.common.openapi",778969799))], 0));
});
return malli.core.walk.cljs$core$IFn$_invoke$arity$3(s,walk_fn,options);
});
app.common.schema.openapi.transform = (function app$common$schema$openapi$transform(var_args){
var G__48294 = arguments.length;
switch (G__48294) {
case 1:
return app.common.schema.openapi.transform.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.schema.openapi.transform.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.schema.openapi.transform.cljs$core$IFn$_invoke$arity$1 = (function (s){
return app.common.schema.openapi.transform.cljs$core$IFn$_invoke$arity$2(s,null);
}));

(app.common.schema.openapi.transform.cljs$core$IFn$_invoke$arity$2 = (function (s,options){
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword("malli.core","walk-entry-vals","malli.core/walk-entry-vals",-64238340),true);
return app.common.schema.openapi.transform_STAR_(s,options__$1);
}));

(app.common.schema.openapi.transform.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=app.common.schema.openapi.js.map
