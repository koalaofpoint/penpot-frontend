import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.exceptions.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.schema.js";
import "./app.common.schema.desc_native.js";
import "./app.common.schema.generators.js";
import "./app.common.types.color.js";
import "./app.common.types.component.js";
import "./app.common.types.components_list.js";
import "./app.common.types.container.js";
import "./app.common.types.file.js";
import "./app.common.types.grid.js";
import "./app.common.types.library.js";
import "./app.common.types.page.js";
import "./app.common.types.pages_list.js";
import "./app.common.types.path.js";
import "./app.common.types.shape.js";
import "./app.common.types.shape_tree.js";
import "./app.common.types.token.js";
import "./app.common.types.tokens_lib.js";
import "./app.common.types.typographies_list.js";
import "./app.common.types.typography.js";
import "./app.common.types.variant.js";
import "./app.common.uuid.js";
import "./clojure.set.js";
goog.provide('app.common.files.changes');
app.common.files.changes.schema_COLON_operation = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),"Operation",new cljs.core.Keyword("decode","json","decode/json",468276044),(function (p1__53785_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__53785_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword);
}),new cljs.core.Keyword("app.common.schema.desc-native","simplified","app.common.schema.desc-native/simplified",-2123092483),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"assign","assign",-1590426222),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"AssignOperation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"assign","assign",-1590426222)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword("app.common.schema","any","app.common.schema/any",-1231442794)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ignore-geometry","ignore-geometry",1630780695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SetOperation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"set","set",304602554)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attr","attr",-604132353),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"val","val",128701612),new cljs.core.Keyword("app.common.schema","any","app.common.schema/any",-1231442794)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ignore-geometry","ignore-geometry",1630780695),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-touched","set-touched",-443889429),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SetTouchedOperation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"set-touched","set-touched",-443889429)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-remote-synced","set-remote-synced",1195610599),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SetRemoteSyncedOperation"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"set-remote-synced","set-remote-synced",1195610599)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"remote-synced","remote-synced",1564821477),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null)], null)], null);
app.common.files.changes.schema_COLON_set_default_grid_change = (function (){var gen = app.common.schema.generators.mcat((function (grid_type){
return app.common.schema.generators.fmap((function (params){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),app.common.uuid.next(),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set-default-grid","set-default-grid",-1968413784),new cljs.core.Keyword(null,"grid-type","grid-type",2068412029),grid_type,new cljs.core.Keyword(null,"params","params",710516235),params], null);
}),(function (){var G__53793 = grid_type;
var G__53793__$1 = (((G__53793 instanceof cljs.core.Keyword))?G__53793.fqn:null);
switch (G__53793__$1) {
case "square":
return app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.grid.schema_COLON_square_params);

break;
case "column":
return app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.grid.schema_COLON_column_params);

break;
case "row":
return app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(app.common.types.grid.schema_COLON_column_params);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53793__$1)].join('')));

}
})());
}),app.common.schema.generators.elements(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"square","square",812434677),null,new cljs.core.Keyword(null,"row","row",-570139521),null], null), null)));
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("decode","json","decode/json",468276044),(function (p1__53791_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__53791_SHARP_,new cljs.core.Keyword(null,"grid-type","grid-type",2068412029),cljs.core.keyword);
}),new cljs.core.Keyword("gen","gen","gen/gen",142743606),gen,new cljs.core.Keyword(null,"title","title",636505583),"SetDefaultGridChange",new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"grid-type","grid-type",2068412029),new cljs.core.Keyword("app.common.schema.desc-native","simplified","app.common.schema.desc-native/simplified",-2123092483),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"square","square",812434677),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SetDefautSquareGridAttrs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"set-default-grid","set-default-grid",-1968413784)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid-type","grid-type",2068412029),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"square","square",812434677)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),app.common.types.grid.schema_COLON_square_params], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SetDefaultColumnGridAttrs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"set-default-grid","set-default-grid",-1968413784)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid-type","grid-type",2068412029),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"column","column",2078222095)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),app.common.types.grid.schema_COLON_column_params], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SetDefaultRowGridAttrs"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"set-default-grid","set-default-grid",-1968413784)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"grid-type","grid-type",2068412029),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"row","row",-570139521)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),app.common.types.grid.schema_COLON_column_params], null)], null)], null)], null)], null);
})();
app.common.files.changes.schema_COLON_set_guide_change = (function (){var schema = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SetGuideChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"set-guide","set-guide",-793086394)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),app.common.types.page.schema_COLON_guide], null)], null)], null);
var gen = app.common.schema.generators.fmap((function (change){
if((!((new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(change) == null)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(change,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(change));
} else {
return change;
}
}),app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(schema));
return app.common.schema.update_properties.cljs$core$IFn$_invoke$arity$variadic(schema,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("gen","gen","gen/gen",142743606),gen], 0));
})();
app.common.files.changes.schema_COLON_set_flow_change = (function (){var schema = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SetFlowChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"set-flow","set-flow",-468241463)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),app.common.types.page.schema_COLON_flow], null)], null)], null);
var gen = app.common.schema.generators.fmap((function (change){
if((!((new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(change) == null)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(change,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(change));
} else {
return change;
}
}),app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(schema));
return app.common.schema.update_properties.cljs$core$IFn$_invoke$arity$variadic(schema,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("gen","gen","gen/gen",142743606),gen], 0));
})();
app.common.files.changes.schema_COLON_set_plugin_data_change = (function (){var types = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"page","page",849072397),null,new cljs.core.Keyword(null,"component","component",1555936782),null,new cljs.core.Keyword(null,"shape","shape",1190694006),null,new cljs.core.Keyword(null,"typography","typography",-399568138),null], null), null);
var schema = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SetPagePluginData"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"set-plugin-data","set-plugin-data",379252905)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object-type","object-type",-1889869015),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","one-of","app.common.schema/one-of",1806653447),types], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object-id","object-id",-754527291),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.word_keyword()], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.word_string()], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","gen","gen/gen",142743606),app.common.schema.generators.word_string()], null)], null)], null)], null)], null);
var check1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("error","path","error/path",-419192760),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168)], null),new cljs.core.Keyword("error","message","error/message",-502809098),"missing page-id"], null),(function (p__53814){
var map__53815 = p__53814;
var map__53815__$1 = cljs.core.__destructure_map(map__53815);
var change = map__53815__$1;
var object_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53815__$1,new cljs.core.Keyword(null,"object-type","object-type",-1889869015));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shape","shape",1190694006),object_type)){
return cljs.core.uuid_QMARK_(new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(change));
} else {
return true;
}
})], null);
var gen = app.common.schema.generators.fmap((function (p__53819){
var map__53820 = p__53819;
var map__53820__$1 = cljs.core.__destructure_map(map__53820);
var change = map__53820__$1;
var object_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53820__$1,new cljs.core.Keyword(null,"object-type","object-type",-1889869015));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),object_type)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(change,new cljs.core.Keyword(null,"object-id","object-id",-754527291)),new cljs.core.Keyword(null,"page-id","page-id",-872941168));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shape","shape",1190694006),object_type)){
return change;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(change,new cljs.core.Keyword(null,"page-id","page-id",-872941168));

}
}
}),app.common.schema.generators.filter(new cljs.core.Keyword(null,"page-id","page-id",-872941168),app.common.schema.generators.filter(new cljs.core.Keyword(null,"object-id","object-id",-754527291),app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1(schema))));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),app.common.schema.update_properties.cljs$core$IFn$_invoke$arity$variadic(schema,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("gen","gen","gen/gen",142743606),gen], 0)),check1], null);
})();
app.common.files.changes.schema_COLON_change = cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"multi","multi",-190293005),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"dispatch","dispatch",1319337009),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"title","title",636505583),"Change",new cljs.core.Keyword("decode","json","decode/json",468276044),(function (p1__53821_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__53821_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.keyword);
}),new cljs.core.Keyword("app.common.schema.desc-native","simplified","app.common.schema.desc-native/simplified",-2123092483),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-comment-thread-position","set-comment-thread-position",1716614827),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SetCommentThreadPositionChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comment-thread-id","comment-thread-id",239314476),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("app.common.geom.point","point","app.common.geom.point/point",1811057644)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"AddObjChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962),app.common.types.shape.schema_COLON_shape], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"ModObjChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"operations","operations",1630691895),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","max","gen/max",61264228),(5)], null),app.common.files.changes.schema_COLON_operation], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"del-obj","del-obj",-1367710701),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"DelObjChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"del-obj","del-obj",-1367710701)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-guide","set-guide",-793086394),app.common.files.changes.schema_COLON_set_guide_change], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-flow","set-flow",-468241463),app.common.files.changes.schema_COLON_set_flow_change], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-default-grid","set-default-grid",-1968413784),app.common.files.changes.schema_COLON_set_default_grid_change], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fix-obj","fix-obj",1131095112),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"FixObjChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"fix-obj","fix-obj",1131095112)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fix","fix",-1031773329),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mov-objects","mov-objects",-744687289),new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"MovObjectsChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"mov-objects","mov-objects",-744687289)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.Keyword("app.common.schema","any","app.common.schema/any",-1231442794)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"after-shape","after-shape",2054601304),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","any","app.common.schema/any",-1231442794)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"allow-altering-copies","allow-altering-copies",1930197967),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reorder-children","reorder-children",-522450648),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"ReorderChildrenChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"reorder-children","reorder-children",-522450648)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.Keyword("app.common.schema","any","app.common.schema/any",-1231442794)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-page","add-page",304111762),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"AddPageChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"add-page","add-page",304111762)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page","page",849072397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","any","app.common.schema/any",-1231442794)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mod-page","mod-page",1847006799),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"ModPageChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"mod-page","mod-page",1847006799)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),app.common.types.color.schema_COLON_hex_color], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-plugin-data","set-plugin-data",379252905),app.common.files.changes.schema_COLON_set_plugin_data_change], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"del-page","del-page",-1821214846),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"DelPageChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"del-page","del-page",-1821214846)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mov-page","mov-page",799279210),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"MovPageChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"mov-page","mov-page",799279210)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"reg-objects","reg-objects",1473118866),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"RegObjectsChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"reg-objects","reg-objects",1473118866)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-id","component-id",1551113783),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","max","gen/max",61264228),(5)], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-color","add-color",2130863672),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"AddColorChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"add-color","add-color",2130863672)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),app.common.types.color.schema_COLON_library_color], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mod-color","mod-color",1087466354),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"ModColorChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"mod-color","mod-color",1087466354)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),app.common.types.color.schema_COLON_library_color], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"del-color","del-color",-1547350867),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"DelColorChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"del-color","del-color",-1547350867)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-media","add-media",1778802009),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"AddMediaChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"add-media","add-media",1778802009)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),app.common.types.file.schema_COLON_media], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mod-media","mod-media",556146292),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"ModMediaChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"mod-media","mod-media",556146292)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object","object",1474613949),app.common.types.file.schema_COLON_media], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"del-media","del-media",-149779060),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"DelMediaChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"del-media","del-media",-149779060)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-component","add-component",1053805610),new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"AddComponentChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"add-component","add-component",1053805610)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),app.common.types.variant.schema_COLON_variant_property], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mod-component","mod-component",335097879),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"ModComponentChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"mod-component","mod-component",335097879)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),app.common.types.variant.schema_COLON_variant_property], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"del-component","del-component",-883241442),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"DelComponentChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"del-component","del-component",-883241442)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delta","delta",108939957),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.geom.point","point","app.common.geom.point/point",1811057644)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"skip-undelete?","skip-undelete?",2065473489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"restore-component","restore-component",-354059544),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"RestoreComponentChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"restore-component","restore-component",-354059544)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"purge-component","purge-component",2041170044),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"PurgeComponentChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"purge-component","purge-component",2041170044)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"add-typography","add-typography",187539002),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"AddTypogrphyChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"add-typography","add-typography",187539002)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typography","typography",-399568138),app.common.types.typography.schema_COLON_typography], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mod-typography","mod-typography",55947030),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"ModTypogrphyChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"mod-typography","mod-typography",55947030)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typography","typography",-399568138),app.common.types.typography.schema_COLON_typography], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"del-typography","del-typography",553672868),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"DelTypogrphyChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"del-typography","del-typography",553672868)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-tokens-lib","set-tokens-lib",276527580),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SetTokensLib"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"set-tokens-lib","set-tokens-lib",276527580)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),app.common.types.tokens_lib.schema_COLON_tokens_lib], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-token","set-token",1378179451),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SetTokenChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"set-token","set-token",1378179451)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-id","set-id",675256473),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"token-id","token-id",-764089526),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),app.common.types.token.schema_COLON_token_attrs], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-token-set","set-token-set",-1146185413),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SetTokenSetChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"set-token-set","set-token-set",-1146185413)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),app.common.types.tokens_lib.schema_COLON_token_set_attrs], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-token-theme","set-token-theme",-1994995543),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SetTokenThemeChange"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"set-token-theme","set-token-theme",-1994995543)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),app.common.types.tokens_lib.schema_COLON_token_theme_attrs], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-active-token-themes","set-active-token-themes",-1825247552),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SetActiveTokenThemes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"set-active-token-themes","set-active-token-themes",-1825247552)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"theme-paths","theme-paths",1306140239),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"rename-token-set-group","rename-token-set-group",696993584),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"RenameTokenSetGroup"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"rename-token-set-group","rename-token-set-group",696993584)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-group-path","set-group-path",1404470053),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-group-fname","set-group-fname",1422836316),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-token-set","move-token-set",1469939284),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"MoveTokenSet"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"move-token-set","move-token-set",1469939284)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from-path","from-path",-1111581224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-path","to-path",-1087845742),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"before-path","before-path",-1341220519),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"before-group","before-group",1198330267),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"move-token-set-group","move-token-set-group",132768939),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"MoveTokenSetGroup"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"move-token-set-group","move-token-set-group",132768939)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from-path","from-path",-1111581224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to-path","to-path",-1087845742),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"before-path","before-path",-1341220519),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"before-group","before-group",1198330267),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set-base-font-size","set-base-font-size",-1438596312),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"ModBaseFontSize"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"=","=",1152933628),new cljs.core.Keyword(null,"set-base-font-size","set-base-font-size",-1438596312)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-font-size","base-font-size",-701078258),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null)], true);
app.common.files.changes.schema_COLON_changes = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("gen","max","gen/max",61264228),(5),new cljs.core.Keyword("gen","min","gen/min",444569458),(1)], null),app.common.files.changes.schema_COLON_change], null);
app.common.files.changes.valid_change_QMARK_ = app.common.schema.lazy_validator(app.common.files.changes.schema_COLON_change);
app.common.files.changes.check_changes = app.common.schema.check_fn(app.common.files.changes.schema_COLON_changes);
/**
 * Return a vector with all elements equal to `o` removed.
 */
app.common.files.changes.without_obj = (function app$common$files$changes$without_obj(coll,o){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__53835_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__53835_SHARP_,o);
})),coll);
});
/**
 * A dynamic var that used for track changes that touch shapes on
 *   first processing phase of changes. Should be set to a hash-set
 *   instance and will contain changes that caused the touched
 *   modification.
 */
app.common.files.changes._STAR_touched_changes_STAR_ = null;
/**
 * A general purpose state to signal some out of order operations
 *   to the processor backend.
 */
app.common.files.changes._STAR_state_STAR_ = null;
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.files !== 'undefined') && (typeof app.common.files.changes !== 'undefined') && (typeof app.common.files.changes.process_change !== 'undefined')){
} else {
app.common.files.changes.process_change = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53839 = cljs.core.get_global_hierarchy;
return (fexpr__53839.cljs$core$IFn$_invoke$arity$0 ? fexpr__53839.cljs$core$IFn$_invoke$arity$0() : fexpr__53839.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.common.files.changes","process-change"),(function (_,change){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(change);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.files !== 'undefined') && (typeof app.common.files.changes !== 'undefined') && (typeof app.common.files.changes.process_operation !== 'undefined')){
} else {
app.common.files.changes.process_operation = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53841 = cljs.core.get_global_hierarchy;
return (fexpr__53841.cljs$core$IFn$_invoke$arity$0 ? fexpr__53841.cljs$core$IFn$_invoke$arity$0() : fexpr__53841.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.common.files.changes","process-operation"),(function (_,op){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(op);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
app.common.files.changes.validate_shape = (function app$common$files$changes$validate_shape(p__53842,page_id){
var map__53843 = p__53842;
var map__53843__$1 = cljs.core.__destructure_map(map__53843);
var shape = map__53843__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53843__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.truth_(app.common.types.shape.valid_shape_QMARK_(shape))){
return null;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["invalid shape found '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"'"].join(''),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assertion","assertion",-1645134882),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"data-validation","data-validation",-893817907),new cljs.core.Keyword(null,"hint","hint",439639918),["invalid shape found '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"'"].join(''),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"shape-id","shape-id",981169327),id,new cljs.core.Keyword("app.common.schema","explain","app.common.schema/explain",1944111705),app.common.types.shape.explain_shape(shape)], null),null], 0)),null);
}
});
app.common.files.changes.process_touched_change = (function app$common$files$changes$process_touched_change(data,p__53847){
var map__53848 = p__53847;
var map__53848__$1 = cljs.core.__destructure_map(map__53848);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53848__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53848__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53848__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var objects = (cljs.core.truth_(page_id)?new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145).cljs$core$IFn$_invoke$arity$1(data),page_id)):new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(data),component_id)));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
var croot = app.common.types.container.get_component_shape.cljs$core$IFn$_invoke$arity$3(objects,shape,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"allow-main?","allow-main?",-837994938),true], null));
if((((!((croot == null)))) && (app.common.types.component.main_instance_QMARK_(croot)))){
return app.common.types.components_list.set_component_modified(data,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(croot));
} else {
if((!((component_id == null)))){
return app.common.types.components_list.set_component_modified(data,component_id);
} else {
return data;
}
}
});
app.common.files.changes.process_changes = (function app$common$files$changes$process_changes(var_args){
var G__53875 = arguments.length;
switch (G__53875) {
case 2:
return app.common.files.changes.process_changes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.files.changes.process_changes.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.changes.process_changes.cljs$core$IFn$_invoke$arity$2 = (function (data,items){
return app.common.files.changes.process_changes.cljs$core$IFn$_invoke$arity$3(data,items,true);
}));

(app.common.files.changes.process_changes.cljs$core$IFn$_invoke$arity$3 = (function (data,items,verify_QMARK_){
if(cljs.core.truth_(verify_QMARK_)){
app.common.files.changes.check_changes(items);
} else {
}

var _STAR_touched_changes_STAR__orig_val__53889 = app.common.files.changes._STAR_touched_changes_STAR_;
var _STAR_touched_changes_STAR__temp_val__53890 = cljs.core.volatile_BANG_(cljs.core.PersistentHashSet.EMPTY);
(app.common.files.changes._STAR_touched_changes_STAR_ = _STAR_touched_changes_STAR__temp_val__53890);

try{var result = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__53864_SHARP_,p2__53866_SHARP_){
var or__5025__auto__ = app.common.files.changes.process_change.cljs$core$IFn$_invoke$arity$2(p1__53864_SHARP_,p2__53866_SHARP_);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return p1__53864_SHARP_;
}
}),data,items);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.files.changes.process_touched_change,result,cljs.core.deref(app.common.files.changes._STAR_touched_changes_STAR_));
}finally {(app.common.files.changes._STAR_touched_changes_STAR_ = _STAR_touched_changes_STAR__orig_val__53889);
}}));

(app.common.files.changes.process_changes.cljs$lang$maxFixedArity = 3);

app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-comment-thread-position","set-comment-thread-position",1716614827),(function (data,p__53901){
var map__53905 = p__53901;
var map__53905__$1 = cljs.core.__destructure_map(map__53905);
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53905__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var comment_thread_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53905__$1,new cljs.core.Keyword(null,"comment-thread-id","comment-thread-id",239314476));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53905__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53905__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072));
return app.common.data.update_in_when(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id], null),(function (page){
if(cljs.core.truth_((function (){var and__5023__auto__ = position;
if(cljs.core.truth_(and__5023__auto__)){
return frame_id;
} else {
return and__5023__auto__;
}
})())){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(page,new cljs.core.Keyword(null,"comment-thread-positions","comment-thread-positions",1712485078),cljs.core.assoc,comment_thread_id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id,new cljs.core.Keyword(null,"position","position",-2011731912),position], null));
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(page,new cljs.core.Keyword(null,"comment-thread-positions","comment-thread-positions",1712485078),cljs.core.dissoc,comment_thread_id);
}
}));
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-guide","set-guide",-793086394),(function (data,p__53913){
var map__53914 = p__53913;
var map__53914__$1 = cljs.core.__destructure_map(map__53914);
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53914__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53914__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53914__$1,new cljs.core.Keyword(null,"params","params",710516235));
if((params == null)){
return app.common.data.update_in_when(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id], null),(function (page){
var guides = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"guides","guides",-1398390510));
var guides__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(guides,id);
if(cljs.core.empty_QMARK_(guides__$1)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"guides","guides",-1398390510));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword(null,"guides","guides",-1398390510),guides__$1);
}
}));
} else {
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"id","id",-1388402092),id);
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id], null),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"guides","guides",-1398390510),cljs.core.assoc,id,params__$1], 0));
}
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-flow","set-flow",-468241463),(function (data,p__53918){
var map__53919 = p__53918;
var map__53919__$1 = cljs.core.__destructure_map(map__53919);
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53919__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53919__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53919__$1,new cljs.core.Keyword(null,"params","params",710516235));
if((params == null)){
return app.common.data.update_in_when(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id], null),(function (page){
var flows = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"flows","flows",-1369576628));
var flows__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(flows,id);
if(cljs.core.empty_QMARK_(flows__$1)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"flows","flows",-1369576628));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword(null,"flows","flows",-1369576628),flows__$1);
}
}));
} else {
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"id","id",-1388402092),id);
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id], null),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"flows","flows",-1369576628),cljs.core.assoc,id,params__$1], 0));
}
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-default-grid","set-default-grid",-1968413784),(function (data,p__53922){
var map__53923 = p__53922;
var map__53923__$1 = cljs.core.__destructure_map(map__53923);
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53923__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var grid_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53923__$1,new cljs.core.Keyword(null,"grid-type","grid-type",2068412029));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53923__$1,new cljs.core.Keyword(null,"params","params",710516235));
if((params == null)){
return app.common.data.update_in_when(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id], null),(function (page){
var default_grids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"default-grids","default-grids",-2097814871));
var default_grids__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(default_grids,grid_type);
if(cljs.core.empty_QMARK_(default_grids__$1)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"default-grids","default-grids",-2097814871));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.Keyword(null,"default-grids","default-grids",-2097814871),default_grids__$1);
}
}));
} else {
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id], null),cljs.core.update,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"default-grids","default-grids",-2097814871),cljs.core.assoc,grid_type,params], 0));
}
}));
app.common.files.changes.collect_shape_media_refs = (function app$common$files$changes$collect_shape_media_refs(state,obj,page_id){
var media_refs = cljs.core.not_empty(app.common.files.helpers.collect_shape_media_refs(obj));
var xform = cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (id){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"shape-id","shape-id",981169327),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(obj),new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
}));
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"media-refs","media-refs",-2132599023),cljs.core.into,xform,media_refs);
});
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983),(function (data,p__53927){
var map__53928 = p__53927;
var map__53928__$1 = cljs.core.__destructure_map(map__53928);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53928__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53928__$1,new cljs.core.Keyword(null,"obj","obj",981763962));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53928__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53928__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53928__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072));
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53928__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53928__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var ignore_touched = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53928__$1,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699));
var update_container = (function (p1__53925_SHARP_){
return app.common.types.shape_tree.add_shape(id,obj,p1__53925_SHARP_,frame_id,parent_id,index,ignore_touched);
});
if(cljs.core.truth_(app.common.files.changes._STAR_state_STAR_)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.common.files.changes._STAR_state_STAR_,app.common.files.changes.collect_shape_media_refs,obj,page_id);
} else {
}

if(cljs.core.truth_(page_id)){
return app.common.data.update_in_when(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id], null),update_container);
} else {
return app.common.data.update_in_when(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),component_id], null),update_container);
}
}));
app.common.files.changes.process_operations = (function app$common$files$changes$process_operations(objects,p__53931){
var map__53932 = p__53931;
var map__53932__$1 = cljs.core.__destructure_map(map__53932);
var change = map__53932__$1;
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53932__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53932__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var operations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53932__$1,new cljs.core.Keyword(null,"operations","operations",1630691895));
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
if(cljs.core.truth_(temp__5823__auto__)){
var shape = temp__5823__auto__;
var shape__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.files.changes.process_operation,shape,operations);
var touched_QMARK_ = new cljs.core.Keyword("app.common.types.container","touched","app.common.types.container/touched",245224963).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(shape__$1));
if(cljs.core.truth_(touched_QMARK_)){
var G__53933_54212 = app.common.files.changes._STAR_touched_changes_STAR_;
if((G__53933_54212 == null)){
} else {
cljs.core._vreset_BANG_(G__53933_54212,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(G__53933_54212),change));
}
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = app.common.files.changes._STAR_state_STAR_;
if(cljs.core.truth_(and__5023__auto__)){
return page_id;
} else {
return and__5023__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.common.files.changes._STAR_state_STAR_,app.common.files.changes.collect_shape_media_refs,shape__$1,page_id);
} else {
}

return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(objects,id,shape__$1);
} else {
return objects;
}
});
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),(function (data,p__53943){
var map__53944 = p__53943;
var map__53944__$1 = cljs.core.__destructure_map(map__53944);
var change = map__53944__$1;
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53944__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53944__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
if(cljs.core.truth_(page_id)){
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id,new cljs.core.Keyword(null,"objects","objects",2099713734)], null),app.common.files.changes.process_operations,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([change], 0));
} else {
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),component_id,new cljs.core.Keyword(null,"objects","objects",2099713734)], null),app.common.files.changes.process_operations,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([change], 0));
}
}));
app.common.files.changes.process_children_reordering = (function app$common$files$changes$process_children_reordering(objects,p__53948){
var map__53950 = p__53948;
var map__53950__$1 = cljs.core.__destructure_map(map__53950);
var change = map__53950__$1;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53950__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53950__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id),new cljs.core.Keyword(null,"shapes","shapes",1897594879));
if(cljs.core.truth_(temp__5823__auto__)){
var old_shapes = temp__5823__auto__;
var id__GT_idx = cljs.core.update_vals(cljs.core.group_by(cljs.core.second,app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(shapes)),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.first,cljs.core.first));
var new_shapes = cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p1__53947_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((id__GT_idx.cljs$core$IFn$_invoke$arity$1 ? id__GT_idx.cljs$core$IFn$_invoke$arity$1(p1__53947_SHARP_) : id__GT_idx.call(null,p1__53947_SHARP_)),(-1));
}),cljs.core._LT_,old_shapes));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(old_shapes,new_shapes)){
var G__53951_54213 = app.common.files.changes._STAR_touched_changes_STAR_;
if((G__53951_54213 == null)){
} else {
cljs.core._vreset_BANG_(G__53951_54213,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core._deref(G__53951_54213),change));
}

return cljs.core.update.cljs$core$IFn$_invoke$arity$5(objects,parent_id,cljs.core.assoc,new cljs.core.Keyword(null,"shapes","shapes",1897594879),new_shapes);
} else {
return objects;
}
} else {
return objects;
}
});
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"reorder-children","reorder-children",-522450648),(function (data,p__53953){
var map__53954 = p__53953;
var map__53954__$1 = cljs.core.__destructure_map(map__53954);
var change = map__53954__$1;
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53954__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53954__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
if(cljs.core.truth_(page_id)){
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id,new cljs.core.Keyword(null,"objects","objects",2099713734)], null),app.common.files.changes.process_children_reordering,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([change], 0));
} else {
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),component_id,new cljs.core.Keyword(null,"objects","objects",2099713734)], null),app.common.files.changes.process_children_reordering,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([change], 0));
}
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"del-obj","del-obj",-1367710701),(function (data,p__53955){
var map__53956 = p__53955;
var map__53956__$1 = cljs.core.__destructure_map(map__53956);
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53956__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53956__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53956__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var ignore_touched = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53956__$1,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699));
if(cljs.core.truth_(page_id)){
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id], null),app.common.types.shape_tree.delete_shape,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,ignore_touched], 0));
} else {
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),component_id], null),app.common.types.shape_tree.delete_shape,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id,ignore_touched], 0));
}
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"fix-obj","fix-obj",1131095112),(function (data,p__53957){
var map__53958 = p__53957;
var map__53958__$1 = cljs.core.__destructure_map(map__53958);
var params = map__53958__$1;
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53958__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53958__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53958__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var fix_container = (function app$common$files$changes$fix_container(container){
var G__53961 = new cljs.core.Keyword(null,"fix","fix",-1031773329).cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"broken-children","broken-children",2066711501));
var G__53961__$1 = (((G__53961 instanceof cljs.core.Keyword))?G__53961.fqn:null);
switch (G__53961__$1) {
case "broken-children":
return app.common.types.shape_tree.fix_broken_children(container,id);

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("internal",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"internal","internal",-854870097),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"fix-not-implemented","fix-not-implemented",1978248380),new cljs.core.Keyword(null,"fix","fix",-1031773329),new cljs.core.Keyword(null,"fix","fix",-1031773329).cljs$core$IFn$_invoke$arity$1(params)], null),null], 0)),null);

}
});
if(cljs.core.truth_(page_id)){
return app.common.data.update_in_when(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id], null),fix_container);
} else {
return app.common.data.update_in_when(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),component_id], null),fix_container);
}
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"reg-objects","reg-objects",1473118866),(function (data,p__53969){
var map__53970 = p__53969;
var map__53970__$1 = cljs.core.__destructure_map(map__53970);
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53970__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53970__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53970__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var reg_objects = (function app$common$files$changes$reg_objects(objects){
var lookup = app.common.data.getf(objects);
var update_fn = (function (p1__53965_SHARP_,p2__53966_SHARP_){
return app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic(p1__53965_SHARP_,p2__53966_SHARP_,update_group,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__53965_SHARP_], 0));
});
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__53967_SHARP_){
return cljs.core.cons(p1__53967_SHARP_,app.common.files.helpers.get_parent_ids(objects,p1__53967_SHARP_));
})),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__53968_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group","group",582596132),null,new cljs.core.Keyword(null,"bool","bool",1444635321),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(lookup(p1__53968_SHARP_)));
})),cljs.core.distinct.cljs$core$IFn$_invoke$arity$0());
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(update_fn,objects,cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(xform,shapes));
});
var set_mask_selrect = (function app$common$files$changes$set_mask_selrect(group,children){
var mask = cljs.core.first(children);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(group,new cljs.core.Keyword(null,"selrect","selrect",1966287292),new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(mask)),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(mask)),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(mask))),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(mask))),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(mask))),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(mask))),new cljs.core.Keyword(null,"flip-x","flip-x",891276861),new cljs.core.Keyword(null,"flip-x","flip-x",891276861).cljs$core$IFn$_invoke$arity$1(mask)),new cljs.core.Keyword(null,"flip-y","flip-y",935998815),new cljs.core.Keyword(null,"flip-y","flip-y",935998815).cljs$core$IFn$_invoke$arity$1(mask));
});
var update_group = (function app$common$files$changes$update_group(group,objects){
var lookup = app.common.data.getf(objects);
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(group,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var group__$1 = ((cljs.core.empty_QMARK_(children))?group:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bool","bool",1444635321),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(group)))?app.common.types.path.update_bool_shape(group,objects):(cljs.core.truth_(new cljs.core.Keyword(null,"masked-group","masked-group",1899947873).cljs$core$IFn$_invoke$arity$1(group))?set_mask_selrect(group,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lookup,children)):app.common.geom.shapes.update_group_selrect(group,cljs.core.map.cljs$core$IFn$_invoke$arity$2(lookup,children))
)));
return group__$1;
});
if(cljs.core.truth_(page_id)){
return app.common.data.update_in_when(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id,new cljs.core.Keyword(null,"objects","objects",2099713734)], null),reg_objects);
} else {
return app.common.data.update_in_when(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),component_id,new cljs.core.Keyword(null,"objects","objects",2099713734)], null),reg_objects);
}
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mov-objects","mov-objects",-744687289),(function (data,p__53977){
var map__53978 = p__53977;
var map__53978__$1 = cljs.core.__destructure_map(map__53978);
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53978__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53978__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53978__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53978__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53978__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var after_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53978__$1,new cljs.core.Keyword(null,"after-shape","after-shape",2054601304));
var allow_altering_copies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53978__$1,new cljs.core.Keyword(null,"allow-altering-copies","allow-altering-copies",1930197967));
var syncing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53978__$1,new cljs.core.Keyword(null,"syncing","syncing",-291323582));
var validate_shape = (function app$common$files$changes$validate_shape(objects,shape_id){
return objects;
});
var update_frame_id = (function app$common$files$changes$update_frame_id(frame_id,objects,id){
var obj = (function (){var G__53990 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
if((G__53990 == null)){
return null;
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53990,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id);
}
})();
var G__53991 = objects;
var G__53991__$1 = (((!((obj == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53991,id,obj):G__53991);
if((!(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(obj)))){
var $$ = G__53991__$1;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app$common$files$changes$update_frame_id,frame_id),$$,new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(obj));
} else {
return G__53991__$1;
}
});
var remove_from_old_parent = (function app$common$files$changes$remove_from_old_parent(old_objects,objects,shape_id){
var prev_parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_objects,shape_id),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_parent_id,parent_id)){
return objects;
} else {
return app.common.data.update_in_when(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [prev_parent_id,new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null),(function (shapes__$1){
return app.common.data.vec_without_nils(app.common.data.without_obj(shapes__$1,shape_id));
}));
}
});
var move_objects = (function app$common$files$changes$move_objects(objects){
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.seq(shapes);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(is_valid_move_QMARK_,objects),shapes);
if(and__5023__auto____$1){
return parent;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
var index__$1 = (function (){var or__5025__auto__ = (function (){var G__53997 = app.common.data.index_of(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent),after_shape);
if((G__53997 == null)){
return null;
} else {
return (G__53997 + (1));
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return index;
}
})();
var frame_id = ((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(parent))?new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent):new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(parent));
var $ = objects;
var $__$1 = app.common.data.update_when($,parent_id,(function (p1__53976_SHARP_){
return add_to_parent(p1__53976_SHARP_,index__$1,shapes);
}));
var $__$2 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(update_parent_id,$__$1,shapes);
var $__$3 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(remove_from_old_parent,objects),$__$2,shapes);
var $__$4 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(update_frame_id,frame_id),$__$3,shapes);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(validate_shape,$__$4,shapes);
} else {
return objects;
}
});
var add_to_parent = (function app$common$files$changes$add_to_parent(parent,index__$1,shapes__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(parent,new cljs.core.Keyword(null,"shapes","shapes",1897594879),(function (parent_shapes){
return app.common.data.vec_without_nils(insert_items(parent_shapes,index__$1,shapes__$1));
}));
});
var update_parent_id = (function app$common$files$changes$update_parent_id(objects,id){
return app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic(objects,id,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id], 0));
});
var is_valid_move_QMARK_ = (function app$common$files$changes$is_valid_move_QMARK_(objects,shape_id){
var invalid_targets = calculate_invalid_targets(objects,shape_id);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,shape_id);
var and__5023__auto__ = shape;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = cljs.core.not((invalid_targets.cljs$core$IFn$_invoke$arity$1 ? invalid_targets.cljs$core$IFn$_invoke$arity$1(parent_id) : invalid_targets.call(null,parent_id)));
if(and__5023__auto____$1){
var and__5023__auto____$2 = cljs.core.not(app.common.files.helpers.components_nesting_loop_QMARK_.cljs$core$IFn$_invoke$arity$3(objects,shape_id,parent_id));
if(and__5023__auto____$2){
var or__5025__auto__ = allow_altering_copies;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = syncing;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (((!(app.common.types.component.in_component_copy_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape)))))) && ((!(app.common.types.component.in_component_copy_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id))))));
}
}
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
var calculate_invalid_targets = (function app$common$files$changes$calculate_invalid_targets(objects,shape_id){
var reduce_fn = (function (p1__53974_SHARP_,p2__53975_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__53974_SHARP_,app$common$files$changes$calculate_invalid_targets(objects,p2__53975_SHARP_));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(reduce_fn,cljs.core.PersistentHashSet.createAsIfByAssoc([shape_id]),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape_id,new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null)));
});
var insert_items = (function app$common$files$changes$insert_items(prev_shapes,index__$1,shapes__$1){
var prev_shapes__$1 = (function (){var or__5025__auto__ = prev_shapes;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_(index__$1)){
return app.common.data.insert_at_index(prev_shapes__$1,index__$1,shapes__$1);
} else {
return app.common.files.helpers.append_at_the_end(prev_shapes__$1,shapes__$1);
}
});
if(cljs.core.truth_(page_id)){
return app.common.data.update_in_when(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id,new cljs.core.Keyword(null,"objects","objects",2099713734)], null),move_objects);
} else {
return app.common.data.update_in_when(data,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),component_id,new cljs.core.Keyword(null,"objects","objects",2099713734)], null),move_objects);
}
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"add-page","add-page",304111762),(function (data,p__54013){
var map__54014 = p__54013;
var map__54014__$1 = cljs.core.__destructure_map(map__54014);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54014__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54014__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54014__$1,new cljs.core.Keyword(null,"page","page",849072397));
if(cljs.core.truth_((function (){var and__5023__auto__ = id;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = name;
if(cljs.core.truth_(and__5023__auto____$1)){
return page;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("id+name or page should be provided, never both",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"conflict","conflict",1978796605),new cljs.core.Keyword(null,"hint","hint",439639918),"id+name or page should be provided, never both"], null),null], 0)),null);
} else {
}

var page__$1 = ((((typeof name === 'string') && (cljs.core.uuid_QMARK_(id))))?app.common.types.page.make_empty_page(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),name], null)):page);
return app.common.types.pages_list.add_page(data,page__$1);
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mod-page","mod-page",1847006799),(function (data,p__54039){
var map__54041 = p__54039;
var map__54041__$1 = cljs.core.__destructure_map(map__54041);
var params = map__54041__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54041__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return app.common.data.update_in_when(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),id], null),(function (page){
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"name","name",1843675177));
var bg = cljs.core.get.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"not-found","not-found",-629079980));
var G__54047 = page;
var G__54047__$1 = ((typeof name === 'string')?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54047,new cljs.core.Keyword(null,"name","name",1843675177),name):G__54047);
var G__54047__$2 = ((typeof bg === 'string')?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54047__$1,new cljs.core.Keyword(null,"background","background",-863952629),bg):G__54047__$1);
if((bg == null)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__54047__$2,new cljs.core.Keyword(null,"background","background",-863952629));
} else {
return G__54047__$2;
}
}));
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-plugin-data","set-plugin-data",379252905),(function (data,p__54068){
var map__54069 = p__54068;
var map__54069__$1 = cljs.core.__destructure_map(map__54069);
var object_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54069__$1,new cljs.core.Keyword(null,"object-type","object-type",-1889869015));
var object_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54069__$1,new cljs.core.Keyword(null,"object-id","object-id",-754527291));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54069__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var namespace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54069__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54069__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54069__$1,new cljs.core.Keyword(null,"value","value",305978217));
var update_fn = (function app$common$files$changes$update_fn(data__$1){
if((!((value == null)))){
return cljs.core.assoc_in(data__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431),namespace,key], null),value);
} else {
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(data__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431),namespace], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([key], 0));
}
});
var G__54083 = object_type;
var G__54083__$1 = (((G__54083 instanceof cljs.core.Keyword))?G__54083.fqn:null);
switch (G__54083__$1) {
case "file":
return update_fn(data);

break;
case "page":
return app.common.data.update_in_when(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),object_id], null),update_fn);

break;
case "shape":
return app.common.data.update_in_when(data,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),page_id,new cljs.core.Keyword(null,"objects","objects",2099713734),object_id], null),update_fn);

break;
case "color":
return app.common.data.update_in_when(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colors","colors",1157174732),object_id], null),update_fn);

break;
case "typography":
return app.common.data.update_in_when(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typographies","typographies",-482095730),object_id], null),update_fn);

break;
case "component":
return app.common.data.update_in_when(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),object_id], null),update_fn);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54083__$1)].join('')));

}
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"del-page","del-page",-1821214846),(function (data,p__54089){
var map__54090 = p__54089;
var map__54090__$1 = cljs.core.__destructure_map(map__54090);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54090__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return app.common.types.pages_list.delete_page(data,id);
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mov-page","mov-page",799279210),(function (data,p__54092){
var map__54094 = p__54092;
var map__54094__$1 = cljs.core.__destructure_map(map__54094);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54094__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54094__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(data,new cljs.core.Keyword(null,"pages","pages",-285406513),app.common.data.insert_at_index,index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null));
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"add-color","add-color",2130863672),(function (data,p__54095){
var map__54096 = p__54095;
var map__54096__$1 = cljs.core.__destructure_map(map__54096);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54096__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return app.common.types.library.add_color(data,color);
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mod-color","mod-color",1087466354),(function (data,p__54101){
var map__54102 = p__54101;
var map__54102__$1 = cljs.core.__destructure_map(map__54102);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54102__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return app.common.types.library.set_color(data,color);
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"del-color","del-color",-1547350867),(function (data,p__54105){
var map__54106 = p__54105;
var map__54106__$1 = cljs.core.__destructure_map(map__54106);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54106__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return app.common.types.library.delete_color(data,id);
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"add-media","add-media",1778802009),(function (data,p__54107){
var map__54109 = p__54107;
var map__54109__$1 = cljs.core.__destructure_map(map__54109);
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54109__$1,new cljs.core.Keyword(null,"object","object",1474613949));
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(data,new cljs.core.Keyword(null,"media","media",-1066138403),cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(object),object);
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mod-media","mod-media",556146292),(function (data,p__54110){
var map__54111 = p__54110;
var map__54111__$1 = cljs.core.__destructure_map(map__54111);
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54111__$1,new cljs.core.Keyword(null,"object","object",1474613949));
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media","media",-1066138403),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(object)], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object], 0));
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"del-media","del-media",-149779060),(function (data,p__54112){
var map__54113 = p__54112;
var map__54113__$1 = cljs.core.__destructure_map(map__54113);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54113__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"media","media",-1066138403),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([id], 0));
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"add-component","add-component",1053805610),(function (data,params){
return app.common.types.components_list.add_component(data,params);
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mod-component","mod-component",335097879),(function (data,params){
return app.common.types.components_list.mod_component(data,params);
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"del-component","del-component",-883241442),(function (data,p__54114){
var map__54115 = p__54114;
var map__54115__$1 = cljs.core.__destructure_map(map__54115);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54115__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var skip_undelete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54115__$1,new cljs.core.Keyword(null,"skip-undelete?","skip-undelete?",2065473489));
var delta = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54115__$1,new cljs.core.Keyword(null,"delta","delta",108939957));
return app.common.types.file.delete_component(data,id,skip_undelete_QMARK_,delta);
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"restore-component","restore-component",-354059544),(function (data,p__54116){
var map__54117 = p__54116;
var map__54117__$1 = cljs.core.__destructure_map(map__54117);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54117__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54117__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
return app.common.types.file.restore_component(data,id,page_id);
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"purge-component","purge-component",2041170044),(function (data,p__54118){
var map__54119 = p__54118;
var map__54119__$1 = cljs.core.__destructure_map(map__54119);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54119__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return app.common.types.file.purge_component(data,id);
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"add-typography","add-typography",187539002),(function (data,p__54120){
var map__54121 = p__54120;
var map__54121__$1 = cljs.core.__destructure_map(map__54121);
var typography = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54121__$1,new cljs.core.Keyword(null,"typography","typography",-399568138));
return app.common.types.typographies_list.add_typography(data,typography);
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mod-typography","mod-typography",55947030),(function (data,p__54122){
var map__54123 = p__54122;
var map__54123__$1 = cljs.core.__destructure_map(map__54123);
var typography = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54123__$1,new cljs.core.Keyword(null,"typography","typography",-399568138));
return app.common.types.typographies_list.update_typography.cljs$core$IFn$_invoke$arity$variadic(data,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(typography),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([typography], 0));
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"del-typography","del-typography",553672868),(function (data,p__54130){
var map__54131 = p__54130;
var map__54131__$1 = cljs.core.__destructure_map(map__54131);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54131__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return app.common.types.typographies_list.delete_typography(data,id);
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-tokens-lib","set-tokens-lib",276527580),(function (data,p__54139){
var map__54140 = p__54139;
var map__54140__$1 = cljs.core.__destructure_map(map__54140);
var tokens_lib = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54140__$1,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991),tokens_lib);
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-token","set-token",1378179451),(function (data,p__54147){
var map__54150 = p__54147;
var map__54150__$1 = cljs.core.__destructure_map(map__54150);
var set_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54150__$1,new cljs.core.Keyword(null,"set-id","set-id",675256473));
var token_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54150__$1,new cljs.core.Keyword(null,"token-id","token-id",-764089526));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54150__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991),(function (lib){
var lib_SINGLEQUOTE_ = app.common.types.tokens_lib.ensure_tokens_lib(lib);
if(cljs.core.not(attrs)){
return app.common.types.tokens_lib.delete_token(lib_SINGLEQUOTE_,set_id,token_id);
} else {
if(cljs.core.not(app.common.types.tokens_lib.get_token(lib_SINGLEQUOTE_,set_id,token_id))){
return app.common.types.tokens_lib.add_token(lib_SINGLEQUOTE_,set_id,app.common.types.tokens_lib.make_token.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs], 0)));
} else {
return app.common.types.tokens_lib.update_token(lib_SINGLEQUOTE_,set_id,token_id,(function (prev_token){
return app.common.types.tokens_lib.make_token.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_token,attrs], 0))], 0));
}));

}
}
}));
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-token-set","set-token-set",-1146185413),(function (data,p__54163){
var map__54164 = p__54163;
var map__54164__$1 = cljs.core.__destructure_map(map__54164);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54164__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54164__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991),(function (lib){
var lib_SINGLEQUOTE_ = app.common.types.tokens_lib.ensure_tokens_lib(lib);
if(cljs.core.not(attrs)){
return app.common.types.tokens_lib.delete_set(lib_SINGLEQUOTE_,id);
} else {
if(cljs.core.not(app.common.types.tokens_lib.get_set(lib_SINGLEQUOTE_,id))){
return app.common.types.tokens_lib.add_set(lib_SINGLEQUOTE_,app.common.types.tokens_lib.make_token_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs], 0)));
} else {
return app.common.types.tokens_lib.update_set(lib_SINGLEQUOTE_,id,(function (_){
return app.common.types.tokens_lib.make_token_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs], 0));
}));

}
}
}));
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-token-theme","set-token-theme",-1994995543),(function (data,p__54165){
var map__54166 = p__54165;
var map__54166__$1 = cljs.core.__destructure_map(map__54166);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54166__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54166__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991),(function (lib){
var lib_SINGLEQUOTE_ = app.common.types.tokens_lib.ensure_tokens_lib(lib);
if(cljs.core.not(attrs)){
return app.common.types.tokens_lib.delete_theme(lib_SINGLEQUOTE_,id);
} else {
if(cljs.core.not(app.common.types.tokens_lib.get_theme(lib_SINGLEQUOTE_,id))){
return app.common.types.tokens_lib.add_theme(lib_SINGLEQUOTE_,app.common.types.tokens_lib.make_token_theme.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs], 0)));
} else {
return app.common.types.tokens_lib.update_theme(lib_SINGLEQUOTE_,id,(function (prev_token_theme){
return app.common.types.tokens_lib.make_token_theme.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_token_theme,attrs], 0))], 0));
}));

}
}
}));
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-active-token-themes","set-active-token-themes",-1825247552),(function (data,p__54168){
var map__54169 = p__54168;
var map__54169__$1 = cljs.core.__destructure_map(map__54169);
var theme_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54169__$1,new cljs.core.Keyword(null,"theme-paths","theme-paths",1306140239));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991),(function (p1__54167_SHARP_){
return app.common.types.tokens_lib.set_active_themes(app.common.types.tokens_lib.ensure_tokens_lib(p1__54167_SHARP_),theme_paths);
}));
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"rename-token-set-group","rename-token-set-group",696993584),(function (data,p__54170){
var map__54171 = p__54170;
var map__54171__$1 = cljs.core.__destructure_map(map__54171);
var set_group_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54171__$1,new cljs.core.Keyword(null,"set-group-path","set-group-path",1404470053));
var set_group_fname = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54171__$1,new cljs.core.Keyword(null,"set-group-fname","set-group-fname",1422836316));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991),(function (lib){
return app.common.types.tokens_lib.rename_set_group(app.common.types.tokens_lib.ensure_tokens_lib(lib),set_group_path,set_group_fname);
}));
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"move-token-set","move-token-set",1469939284),(function (data,p__54173){
var map__54174 = p__54173;
var map__54174__$1 = cljs.core.__destructure_map(map__54174);
var changes = map__54174__$1;
var from_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54174__$1,new cljs.core.Keyword(null,"from-path","from-path",-1111581224));
var to_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54174__$1,new cljs.core.Keyword(null,"to-path","to-path",-1087845742));
var before_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54174__$1,new cljs.core.Keyword(null,"before-path","before-path",-1341220519));
var before_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54174__$1,new cljs.core.Keyword(null,"before-group","before-group",1198330267));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991),(function (p1__54172_SHARP_){
return app.common.types.tokens_lib.move_set(app.common.types.tokens_lib.ensure_tokens_lib(p1__54172_SHARP_),from_path,to_path,before_path,before_group);
}));
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"move-token-set-group","move-token-set-group",132768939),(function (data,p__54176){
var map__54177 = p__54176;
var map__54177__$1 = cljs.core.__destructure_map(map__54177);
var from_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54177__$1,new cljs.core.Keyword(null,"from-path","from-path",-1111581224));
var to_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54177__$1,new cljs.core.Keyword(null,"to-path","to-path",-1087845742));
var before_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54177__$1,new cljs.core.Keyword(null,"before-path","before-path",-1341220519));
var before_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54177__$1,new cljs.core.Keyword(null,"before-group","before-group",1198330267));
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991),(function (p1__54175_SHARP_){
return app.common.types.tokens_lib.move_set_group(app.common.types.tokens_lib.ensure_tokens_lib(p1__54175_SHARP_),from_path,to_path,before_path,before_group);
}));
}));
app.common.files.changes.process_change.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-base-font-size","set-base-font-size",-1438596312),(function (data,p__54179){
var map__54180 = p__54179;
var map__54180__$1 = cljs.core.__destructure_map(map__54180);
var base_font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54180__$1,new cljs.core.Keyword(null,"base-font-size","base-font-size",-701078258));
return app.common.types.file.set_base_font_size(data,base_font_size);
}));
app.common.files.changes.decode_shape_attrs = app.common.schema.decoder.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.schema_COLON_shape_attrs,app.common.schema.json_transformer);
app.common.files.changes.process_operation.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"assign","assign",-1590426222),(function (p__54182,p__54183){
var map__54184 = p__54182;
var map__54184__$1 = cljs.core.__destructure_map(map__54184);
var shape = map__54184__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54184__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var map__54185 = p__54183;
var map__54185__$1 = cljs.core.__destructure_map(map__54185);
var op = map__54185__$1;
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54185__$1,new cljs.core.Keyword(null,"value","value",305978217));
var modifications = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(value,new cljs.core.Keyword(null,"type","type",1174270348),type);
var modifications__$1 = (app.common.files.changes.decode_shape_attrs.cljs$core$IFn$_invoke$arity$1 ? app.common.files.changes.decode_shape_attrs.cljs$core$IFn$_invoke$arity$1(modifications) : app.common.files.changes.decode_shape_attrs.call(null,modifications));
return cljs.core.reduce_kv((function (shape__$1,k,v){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(v,cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,k))){
return app.common.files.changes.process_operation.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"attr","attr",-604132353),k,new cljs.core.Keyword(null,"val","val",128701612),v,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699).cljs$core$IFn$_invoke$arity$1(op),new cljs.core.Keyword(null,"ignore-geometry","ignore-geometry",1630780695),new cljs.core.Keyword(null,"ignore-geometry","ignore-geometry",1630780695).cljs$core$IFn$_invoke$arity$1(op)], null));
} else {
return shape__$1;
}
}),shape,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(modifications__$1,new cljs.core.Keyword(null,"type","type",1174270348)));
}));
app.common.files.changes.process_operation.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set","set",304602554),(function (shape,op){
return app.common.types.container.set_shape_attr.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(op),new cljs.core.Keyword(null,"val","val",128701612).cljs$core$IFn$_invoke$arity$1(op),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699).cljs$core$IFn$_invoke$arity$1(op),new cljs.core.Keyword(null,"ignore-geometry","ignore-geometry",1630780695),new cljs.core.Keyword(null,"ignore-geometry","ignore-geometry",1630780695).cljs$core$IFn$_invoke$arity$1(op)], 0));
}));
app.common.files.changes.process_operation.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-touched","set-touched",-443889429),(function (shape,op){
var touched = new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(op);
var in_copy_QMARK_ = app.common.types.component.in_component_copy_QMARK_(shape);
if((((!(in_copy_QMARK_))) || ((((touched == null)) || (cljs.core.empty_QMARK_(touched)))))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"touched","touched",-609134419));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"touched","touched",-609134419),touched);
}
}));
app.common.files.changes.process_operation.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"set-remote-synced","set-remote-synced",1195610599),(function (shape,op){
var remote_synced = new cljs.core.Keyword(null,"remote-synced","remote-synced",1564821477).cljs$core$IFn$_invoke$arity$1(op);
var in_copy_QMARK_ = app.common.types.component.in_component_copy_QMARK_(shape);
if((((!(in_copy_QMARK_))) || (cljs.core.not(remote_synced)))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"remote-synced","remote-synced",1564821477));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"remote-synced","remote-synced",1564821477),true);
}
}));
app.common.files.changes.process_operation.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,op){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("not-implemented",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"not-implemented","not-implemented",1918806714),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"operation-not-implemented","operation-not-implemented",1906576164),new cljs.core.Keyword(null,"context","context",-830191113),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(op)], null)], null),null], 0)),null);
}));
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.files !== 'undefined') && (typeof app.common.files.changes !== 'undefined') && (typeof app.common.files.changes.components_changed !== 'undefined')){
} else {
app.common.files.changes.components_changed = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54186 = cljs.core.get_global_hierarchy;
return (fexpr__54186.cljs$core$IFn$_invoke$arity$0 ? fexpr__54186.cljs$core$IFn$_invoke$arity$0() : fexpr__54186.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.common.files.changes","components-changed"),(function (_,change){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(change);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
app.common.files.changes.components_changed.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),(function (file_data,p__54190){
var map__54191 = p__54190;
var map__54191__$1 = cljs.core.__destructure_map(map__54191);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54191__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54191__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54191__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var operations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54191__$1,new cljs.core.Keyword(null,"operations","operations",1630691895));
var need_sync_QMARK_ = (function (operation){
var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(operation),new cljs.core.Keyword(null,"set","set",304602554));
if(and__5023__auto__){
return app.common.types.component.component_attr_QMARK_(new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(operation));
} else {
return and__5023__auto__;
}
});
var any_sync_QMARK_ = cljs.core.some(need_sync_QMARK_,operations);
if(cljs.core.truth_(any_sync_QMARK_)){
if(cljs.core.truth_(page_id)){
var page = app.common.types.pages_list.get_page(file_data,page_id);
var shape_and_parents = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54189_SHARP_){
return app.common.types.container.get_shape(page,p1__54189_SHARP_);
}),cljs.core.cons(id,app.common.files.helpers.get_parent_ids(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),id)));
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"main-instance","main-instance",476264761)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"component-id","component-id",1551113783)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,xform,shape_and_parents);
} else {
if(cljs.core.truth_(component_id)){
return cljs.core.PersistentHashSet.createAsIfByAssoc([component_id]);
} else {
return null;
}
}
} else {
return null;
}
}));
app.common.files.changes.components_changed.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mov-objects","mov-objects",-744687289),(function (file_data,p__54194){
var map__54195 = p__54194;
var map__54195__$1 = cljs.core.__destructure_map(map__54195);
var change = map__54195__$1;
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54195__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var _component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54195__$1,new cljs.core.Keyword(null,"_component-id","_component-id",-2117037839));
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54195__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54195__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
if(cljs.core.truth_(page_id)){
var page = app.common.types.pages_list.get_page(file_data,page_id);
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"main-instance","main-instance",476264761)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"component-id","component-id",1551113783)));
var check_shape = (function (shape_id,others){
var all_parents = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.container.get_shape,page),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(others,app.common.files.helpers.get_parent_ids(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),shape_id)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,xform,all_parents);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__54192_SHARP_,p2__54193_SHARP_){
return clojure.set.union.cljs$core$IFn$_invoke$arity$2(p1__54192_SHARP_,check_shape(p2__54193_SHARP_,cljs.core.PersistentVector.EMPTY));
}),check_shape(parent_id,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [parent_id], null)),shapes);
} else {
return null;
}
}));
app.common.files.changes.components_changed.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983),(function (file_data,p__54196){
var map__54197 = p__54196;
var map__54197__$1 = cljs.core.__destructure_map(map__54197);
var change = map__54197__$1;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54197__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54197__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var _component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54197__$1,new cljs.core.Keyword(null,"_component-id","_component-id",-2117037839));
if(cljs.core.truth_(page_id)){
var page = app.common.types.pages_list.get_page(file_data,page_id);
var parents = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.container.get_shape,page),cljs.core.cons(parent_id,app.common.files.helpers.get_parent_ids(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),parent_id)));
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"main-instance","main-instance",476264761)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"component-id","component-id",1551113783)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,xform,parents);
} else {
return null;
}
}));
app.common.files.changes.components_changed.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"del-obj","del-obj",-1367710701),(function (file_data,p__54198){
var map__54199 = p__54198;
var map__54199__$1 = cljs.core.__destructure_map(map__54199);
var change = map__54199__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54199__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54199__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var _component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54199__$1,new cljs.core.Keyword(null,"_component-id","_component-id",-2117037839));
if(cljs.core.truth_(page_id)){
var page = app.common.types.pages_list.get_page(file_data,page_id);
var shape_and_parents = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.container.get_shape,page),cljs.core.cons(id,app.common.files.helpers.get_parent_ids(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),id)));
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"main-instance","main-instance",476264761)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"component-id","component-id",1551113783)));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,xform,shape_and_parents);
} else {
return null;
}
}));
app.common.files.changes.components_changed.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));
/**
 * Go trough the parents and get all of them that are a frame.
 */
app.common.files.changes.parents_frames = (function app$common$files$changes$parents_frames(id,objects){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.frame_shape_QMARK_,app.common.files.helpers.get_parents_with_self(objects,id));
});
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.files !== 'undefined') && (typeof app.common.files.changes !== 'undefined') && (typeof app.common.files.changes.frames_changed !== 'undefined')){
} else {
app.common.files.changes.frames_changed = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__54200 = cljs.core.get_global_hierarchy;
return (fexpr__54200.cljs$core$IFn$_invoke$arity$0 ? fexpr__54200.cljs$core$IFn$_invoke$arity$0() : fexpr__54200.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.common.files.changes","frames-changed"),(function (_,change){
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(change);
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
app.common.files.changes.frames_changed.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mod-obj","mod-obj",-1152190456),(function (file_data,p__54201){
var map__54202 = p__54201;
var map__54202__$1 = cljs.core.__destructure_map(map__54202);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54202__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54202__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var _component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54202__$1,new cljs.core.Keyword(null,"_component-id","_component-id",-2117037839));
var operations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54202__$1,new cljs.core.Keyword(null,"operations","operations",1630691895));
if(cljs.core.truth_(page_id)){
var page = app.common.types.pages_list.get_page(file_data,page_id);
var need_sync_QMARK_ = (function (operation){
var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(operation),new cljs.core.Keyword(null,"set","set",304602554));
if(and__5023__auto__){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.component.sync_attrs,new cljs.core.Keyword(null,"attr","attr",-604132353).cljs$core$IFn$_invoke$arity$1(operation));
} else {
return and__5023__auto__;
}
});
var any_sync_QMARK_ = cljs.core.some(need_sync_QMARK_,operations);
if(cljs.core.truth_(any_sync_QMARK_)){
return app.common.files.changes.parents_frames(id,new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page));
} else {
return null;
}
} else {
return null;
}
}));
app.common.files.changes.frames_changed.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"mov-objects","mov-objects",-744687289),(function (file_data,p__54204){
var map__54205 = p__54204;
var map__54205__$1 = cljs.core.__destructure_map(map__54205);
var change = map__54205__$1;
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54205__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var _component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54205__$1,new cljs.core.Keyword(null,"_component-id","_component-id",-2117037839));
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54205__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54205__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
if(cljs.core.truth_(page_id)){
var page = app.common.types.pages_list.get_page(file_data,page_id);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(app.common.files.changes.parents_frames(parent_id,new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__54203_SHARP_){
return app.common.files.changes.parents_frames(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(p1__54203_SHARP_),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shapes], 0)));
} else {
return null;
}
}));
app.common.files.changes.frames_changed.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983),(function (file_data,p__54206){
var map__54207 = p__54206;
var map__54207__$1 = cljs.core.__destructure_map(map__54207);
var change = map__54207__$1;
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54207__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54207__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var _component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54207__$1,new cljs.core.Keyword(null,"_component-id","_component-id",-2117037839));
if(cljs.core.truth_(page_id)){
var page = app.common.types.pages_list.get_page(file_data,page_id);
return app.common.files.changes.parents_frames(parent_id,new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page));
} else {
return null;
}
}));
app.common.files.changes.frames_changed.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"del-obj","del-obj",-1367710701),(function (file_data,p__54208){
var map__54209 = p__54208;
var map__54209__$1 = cljs.core.__destructure_map(map__54209);
var change = map__54209__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54209__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54209__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var _component_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54209__$1,new cljs.core.Keyword(null,"_component-id","_component-id",-2117037839));
if(cljs.core.truth_(page_id)){
var page = app.common.types.pages_list.get_page(file_data,page_id);
return app.common.files.changes.parents_frames(id,new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page));
} else {
return null;
}
}));
app.common.files.changes.frames_changed.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (_,___$1){
return null;
}));

//# sourceMappingURL=app.common.files.changes.js.map
