import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.features.js";
import "./app.common.files.defaults.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.tree_seq.js";
import "./app.common.logging.js";
import "./app.common.schema.js";
import "./app.common.time.js";
import "./app.common.types.color.js";
import "./app.common.types.component.js";
import "./app.common.types.components_list.js";
import "./app.common.types.container.js";
import "./app.common.types.library.js";
import "./app.common.types.page.js";
import "./app.common.types.pages_list.js";
import "./app.common.types.plugins.js";
import "./app.common.types.shape.js";
import "./app.common.types.shape_tree.js";
import "./app.common.types.text.js";
import "./app.common.types.tokens_lib.js";
import "./app.common.types.typographies_list.js";
import "./app.common.types.typography.js";
import "./app.common.uuid.js";
import "./clojure.set.js";
import "./cuerdas.core.js";
goog.provide('app.common.types.file');
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.types !== 'undefined') && (typeof app.common.types.file !== 'undefined') && (typeof app.common.types.file.BASE_FONT_SIZE !== 'undefined')){
} else {
app.common.types.file.BASE_FONT_SIZE = "16px";
}
/**
 * A schema that represents the file media object
 */
app.common.types.file.schema_COLON_media = new cljs.core.PersistentVector(null, 13, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"FileMedia"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deleted-at","deleted-at",1742232687),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword("app.common.schema","safe-int","app.common.schema/safe-int",-730426809)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword("app.common.schema","safe-int","app.common.schema/safe-int",-730426809)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mtype","mtype",-1724656120),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"media-id","media-id",-1004710193),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thumbnail-id","thumbnail-id",406242421),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-local","is-local",-258841872),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
app.common.types.file.schema_COLON_colors = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","max","gen/max",61264228),(5)], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422),app.common.types.color.schema_COLON_library_color], null);
app.common.types.file.schema_COLON_components = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","max","gen/max",61264228),(5)], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422),app.common.types.container.schema_COLON_container], null);
app.common.types.file.schema_COLON_typographies = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","max","gen/max",61264228),(2)], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422),app.common.types.typography.schema_COLON_typography], null);
app.common.types.file.schema_COLON_pages_index = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("gen","max","gen/max",61264228),(5)], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422),app.common.types.page.schema_COLON_page], null);
app.common.types.file.schema_COLON_options = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"FileOptions"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components-v2","components-v2",-708922978),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","boolean","app.common.schema/boolean",-727386221)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"base-font-size","base-font-size",-701078258),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
app.common.types.file.schema_COLON_data = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"FileData"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),app.common.types.file.schema_COLON_pages_index], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.file.schema_COLON_options], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"colors","colors",1157174732),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.file.schema_COLON_colors], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"components","components",-1073188942),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.file.schema_COLON_components], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"typographies","typographies",-482095730),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.file.schema_COLON_typographies], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.plugins.schema_COLON_plugin_data], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.tokens_lib.schema_COLON_tokens_lib], null)], null);
/**
 * A schema for validate a file data structure; data is optional
 *   because sometimes we want to validate file without the data.
 */
app.common.types.file.schema_COLON_file = new cljs.core.PersistentVector(null, 17, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"file"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"revn","revn",-633391765),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vern","vern",2071435888),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"deleted-at","deleted-at",1742232687),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-shared","is-shared",2126511925),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","boolean","app.common.schema/boolean",-727386221)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"has-media-trimmed","has-media-trimmed",285220007),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","boolean","app.common.schema/boolean",-727386221)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),app.common.types.file.schema_COLON_data], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.Keyword("app.common.features","features","app.common.features/features",-559981229)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"migrations","migrations",1963762970),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","set","app.common.schema/set",1226590145),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ordered","ordered",1187041426),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null);
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.common.types.file","data","app.common.types.file/data",564605466),app.common.types.file.schema_COLON_data);
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.common.types.file","file","app.common.types.file/file",-455840505),app.common.types.file.schema_COLON_file);
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.common.types.file","colors","app.common.types.file/colors",880706307),app.common.types.file.schema_COLON_colors);
app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.common.types.file","typographies","app.common.types.file/typographies",313227253),app.common.types.file.schema_COLON_typographies);
app.common.types.file.check_file = app.common.schema.check_fn.cljs$core$IFn$_invoke$arity$variadic(app.common.types.file.schema_COLON_file,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hint","hint",439639918),"invalid file"], 0));
app.common.types.file.check_file_data = app.common.schema.check_fn.cljs$core$IFn$_invoke$arity$variadic(app.common.types.file.schema_COLON_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hint","hint",439639918),"invalid file data"], 0));
app.common.types.file.check_file_media = app.common.schema.check_fn(app.common.types.file.schema_COLON_media);
app.common.types.file.empty_file_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pages","pages",-285406513),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),cljs.core.PersistentArrayMap.EMPTY], null);
app.common.types.file.make_file_data = (function app$common$types$file$make_file_data(var_args){
var G__53239 = arguments.length;
switch (G__53239) {
case 1:
return app.common.types.file.make_file_data.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.types.file.make_file_data.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.file.make_file_data.cljs$core$IFn$_invoke$arity$1 = (function (file_id){
return app.common.types.file.make_file_data.cljs$core$IFn$_invoke$arity$2(file_id,app.common.uuid.next());
}));

(app.common.types.file.make_file_data.cljs$core$IFn$_invoke$arity$2 = (function (file_id,page_id){
var page = (((!((page_id == null))))?app.common.types.page.make_empty_page(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),page_id,new cljs.core.Keyword(null,"name","name",1843675177),"Page 1"], null)):null);
var G__53243 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.types.file.empty_file_data,new cljs.core.Keyword(null,"id","id",-1388402092),file_id);
var G__53243__$1 = (((!((page == null))))?app.common.types.pages_list.add_page(G__53243,page):G__53243);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__53243__$1,new cljs.core.Keyword(null,"options","options",99638489),cljs.core.merge,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"components-v2","components-v2",-708922978),true,new cljs.core.Keyword(null,"base-font-size","base-font-size",-701078258),app.common.types.file.BASE_FONT_SIZE], null));

}));

(app.common.types.file.make_file_data.cljs$lang$maxFixedArity = 2);

app.common.types.file.make_file = (function app$common$types$file$make_file(var_args){
var args__5755__auto__ = [];
var len__5749__auto___53794 = arguments.length;
var i__5750__auto___53795 = (0);
while(true){
if((i__5750__auto___53795 < len__5749__auto___53794)){
args__5755__auto__.push((arguments[i__5750__auto___53795]));

var G__53796 = (i__5750__auto___53795 + (1));
i__5750__auto___53795 = G__53796;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.common.types.file.make_file.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.common.types.file.make_file.cljs$core$IFn$_invoke$arity$variadic = (function (p__53255,p__53256){
var map__53257 = p__53255;
var map__53257__$1 = cljs.core.__destructure_map(map__53257);
var params = map__53257__$1;
var migrations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53257__$1,new cljs.core.Keyword(null,"migrations","migrations",1963762970));
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53257__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
var backend = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53257__$1,new cljs.core.Keyword(null,"backend","backend",-847489124));
var created_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53257__$1,new cljs.core.Keyword(null,"created-at","created-at",-89248644));
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53257__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
var features__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53257__$1,new cljs.core.Keyword(null,"features","features",-1146962336));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53257__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var revn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53257__$1,new cljs.core.Keyword(null,"revn","revn",-633391765));
var modified_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53257__$1,new cljs.core.Keyword(null,"modified-at","modified-at",-932048179));
var deleted_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53257__$1,new cljs.core.Keyword(null,"deleted-at","deleted-at",1742232687));
var ignore_sync_until = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53257__$1,new cljs.core.Keyword(null,"ignore-sync-until","ignore-sync-until",-722845166));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53257__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var is_shared = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53257__$1,new cljs.core.Keyword(null,"is-shared","is-shared",2126511925));
var map__53258 = p__53256;
var map__53258__$1 = cljs.core.__destructure_map(map__53258);
var create_page = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53258__$1,new cljs.core.Keyword(null,"create-page","create-page",-1352656443),true);
var with_data = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53258__$1,new cljs.core.Keyword(null,"with-data","with-data",-1106621804),true);
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53258__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var id__$1 = (function (){var or__5025__auto__ = id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.uuid.next();
}
})();
var created_at__$1 = (function (){var or__5025__auto__ = created_at;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.time.now();
}
})();
var modified_at__$1 = (function (){var or__5025__auto__ = modified_at;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return created_at__$1;
}
})();
var features__$2 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(features__$1,cljs.core.PersistentHashSet.EMPTY);
var data = (cljs.core.truth_(with_data)?(cljs.core.truth_(create_page)?(cljs.core.truth_(page_id)?app.common.types.file.make_file_data.cljs$core$IFn$_invoke$arity$2(id__$1,page_id):app.common.types.file.make_file_data.cljs$core$IFn$_invoke$arity$1(id__$1)):app.common.types.file.make_file_data.cljs$core$IFn$_invoke$arity$2(id__$1,null)):null);
var file = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"revn","revn",-633391765),new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),new cljs.core.Keyword(null,"deleted-at","deleted-at",1742232687),new cljs.core.Keyword(null,"vern","vern",2071435888),new cljs.core.Keyword(null,"ignore-sync-until","ignore-sync-until",-722845166),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"is-shared","is-shared",2126511925),new cljs.core.Keyword(null,"migrations","migrations",1963762970),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.Keyword(null,"backend","backend",-847489124),new cljs.core.Keyword(null,"metadata","metadata",1799301597),new cljs.core.Keyword(null,"data","data",-232669377)],[features__$2,name,app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(revn,(0)),modified_at__$1,deleted_at,(0),ignore_sync_until,id__$1,app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(is_shared,false),migrations,new cljs.core.Keyword(null,"version","version",425292698).cljs$core$IFn$_invoke$arity$2(params,app.common.files.defaults.version),project_id,created_at__$1,backend,metadata,data]));
return app.common.types.file.check_file(file);
}));

(app.common.types.file.make_file.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.common.types.file.make_file.cljs$lang$applyTo = (function (seq53248){
var G__53249 = cljs.core.first(seq53248);
var seq53248__$1 = cljs.core.next(seq53248);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53249,seq53248__$1);
}));

app.common.types.file.file_data = (function app$common$types$file$file_data(file){
return new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file);
});
app.common.types.file.update_file_data = (function app$common$types$file$update_file_data(file,f){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(file,new cljs.core.Keyword(null,"data","data",-232669377),f);
});
/**
 * Generate a sequence of all pages and all components, wrapped as containers
 */
app.common.types.file.containers_seq = (function app$common$types$file$containers_seq(file_data){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53259_SHARP_){
return app.common.types.container.make_container(p1__53259_SHARP_,new cljs.core.Keyword(null,"page","page",849072397));
}),app.common.types.pages_list.pages_seq(file_data)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53260_SHARP_){
return app.common.types.container.make_container(p1__53260_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782));
}),app.common.types.components_list.components_seq(file_data)));
});
/**
 * Generate a sequence of all pages and all deleted components (all those components that have :objects), wrapped as containers
 */
app.common.types.file.object_containers_seq = (function app$common$types$file$object_containers_seq(file_data){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53261_SHARP_){
return app.common.types.container.make_container(p1__53261_SHARP_,new cljs.core.Keyword(null,"page","page",849072397));
}),app.common.types.pages_list.pages_seq(file_data)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53262_SHARP_){
return app.common.types.container.make_container(p1__53262_SHARP_,new cljs.core.Keyword(null,"component","component",1555936782));
}),app.common.types.components_list.deleted_components_seq(file_data)));
});
/**
 * Update a container inside the file, it can be a page or a component
 */
app.common.types.file.update_container = (function app$common$types$file$update_container(file_data,container,f){
if(app.common.types.container.page_QMARK_(container)){
return app.common.types.pages_list.update_page(file_data,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(container),f);
} else {
return app.common.types.components_list.update_component(file_data,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(container),f);
}
});
app.common.types.file.find_component_file = (function app$common$types$file$find_component_file(file,libraries,component_file){
if((((!((file == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(component_file,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file))))){
return file;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,component_file);
}
});
/**
 * Retrieve a component from a library.
 */
app.common.types.file.get_component = (function app$common$types$file$get_component(var_args){
var args__5755__auto__ = [];
var len__5749__auto___53798 = arguments.length;
var i__5750__auto___53799 = (0);
while(true){
if((i__5750__auto___53799 < len__5749__auto___53798)){
args__5755__auto__.push((arguments[i__5750__auto___53799]));

var G__53800 = (i__5750__auto___53799 + (1));
i__5750__auto___53799 = G__53800;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return app.common.types.file.get_component.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(app.common.types.file.get_component.cljs$core$IFn$_invoke$arity$variadic = (function (libraries,library_id,component_id,p__53267){
var map__53268 = p__53267;
var map__53268__$1 = cljs.core.__destructure_map(map__53268);
var include_deleted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53268__$1,new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),false);
return app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,library_id),new cljs.core.Keyword(null,"data","data",-232669377)),component_id,include_deleted_QMARK_);
}));

(app.common.types.file.get_component.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(app.common.types.file.get_component.cljs$lang$applyTo = (function (seq53263){
var G__53264 = cljs.core.first(seq53263);
var seq53263__$1 = cljs.core.next(seq53263);
var G__53265 = cljs.core.first(seq53263__$1);
var seq53263__$2 = cljs.core.next(seq53263__$1);
var G__53266 = cljs.core.first(seq53263__$2);
var seq53263__$3 = cljs.core.next(seq53263__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53264,G__53265,G__53266,seq53263__$3);
}));

/**
 * Retrieve the referenced component, from the local file or from a library
 */
app.common.types.file.resolve_component = (function app$common$types$file$resolve_component(var_args){
var args__5755__auto__ = [];
var len__5749__auto___53801 = arguments.length;
var i__5750__auto___53802 = (0);
while(true){
if((i__5750__auto___53802 < len__5749__auto___53801)){
args__5755__auto__.push((arguments[i__5750__auto___53802]));

var G__53803 = (i__5750__auto___53802 + (1));
i__5750__auto___53802 = G__53803;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return app.common.types.file.resolve_component.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(app.common.types.file.resolve_component.cljs$core$IFn$_invoke$arity$variadic = (function (shape,file,libraries,p__53284){
var map__53285 = p__53284;
var map__53285__$1 = cljs.core.__destructure_map(map__53285);
var include_deleted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53285__$1,new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),false);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file))){
return app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape),include_deleted_QMARK_);
} else {
return app.common.types.file.get_component.cljs$core$IFn$_invoke$arity$variadic(libraries,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),include_deleted_QMARK_], 0));
}
}));

(app.common.types.file.resolve_component.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(app.common.types.file.resolve_component.cljs$lang$applyTo = (function (seq53273){
var G__53274 = cljs.core.first(seq53273);
var seq53273__$1 = cljs.core.next(seq53273);
var G__53275 = cljs.core.first(seq53273__$1);
var seq53273__$2 = cljs.core.next(seq53273__$1);
var G__53276 = cljs.core.first(seq53273__$2);
var seq53273__$3 = cljs.core.next(seq53273__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53274,G__53275,G__53276,seq53273__$3);
}));

/**
 * Retrieve the library the component belongs to.
 */
app.common.types.file.get_component_library = (function app$common$types$file$get_component_library(libraries,instance_root){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(instance_root));
});
/**
 * Retrieve the page where the main instance of the component resides.
 */
app.common.types.file.get_component_page = (function app$common$types$file$get_component_page(file_data,component){
return app.common.types.pages_list.get_page(file_data,new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component));
});
/**
 * Retrieve the container that holds the component shapes (the page
 * or the component itself on deleted component).
 */
app.common.types.file.get_component_container = (function app$common$types$file$get_component_container(file_data,component){
if(cljs.core.not(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))){
var component_page = app.common.types.file.get_component_page(file_data,component);
return app.common.files.helpers.make_container(component_page,new cljs.core.Keyword(null,"page","page",849072397));
} else {
return app.common.files.helpers.make_container(component,new cljs.core.Keyword(null,"component","component",1555936782));
}
});
app.common.types.file.get_component_container_from_head = (function app$common$types$file$get_component_container_from_head(var_args){
var args__5755__auto__ = [];
var len__5749__auto___53804 = arguments.length;
var i__5750__auto___53805 = (0);
while(true){
if((i__5750__auto___53805 < len__5749__auto___53804)){
args__5755__auto__.push((arguments[i__5750__auto___53805]));

var G__53806 = (i__5750__auto___53805 + (1));
i__5750__auto___53805 = G__53806;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return app.common.types.file.get_component_container_from_head.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(app.common.types.file.get_component_container_from_head.cljs$core$IFn$_invoke$arity$variadic = (function (instance_head,libraries,p__53290){
var map__53291 = p__53290;
var map__53291__$1 = cljs.core.__destructure_map(map__53291);
var include_deleted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53291__$1,new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true);
var library_data = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(app.common.types.file.get_component_library(libraries,instance_head));
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(library_data,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(instance_head),include_deleted_QMARK_);
return app.common.types.file.get_component_container(library_data,component);
}));

(app.common.types.file.get_component_container_from_head.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(app.common.types.file.get_component_container_from_head.cljs$lang$applyTo = (function (seq53286){
var G__53287 = cljs.core.first(seq53286);
var seq53286__$1 = cljs.core.next(seq53286);
var G__53288 = cljs.core.first(seq53286__$1);
var seq53286__$2 = cljs.core.next(seq53286__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53287,G__53288,seq53286__$2);
}));

/**
 * Retrieve the root shape of the component.
 */
app.common.types.file.get_component_root = (function app$common$types$file$get_component_root(file_data,component){
if(cljs.core.not(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))){
return app.common.types.container.get_shape(app.common.types.file.get_component_page(file_data,component),new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component));
} else {
return app.common.types.component.get_deleted_component_root(component);
}
});
/**
 * Retrieve one shape in the component by id. If with-context? is true, add the
 * file and container where the shape resides in its metadata.
 */
app.common.types.file.get_component_shape = (function app$common$types$file$get_component_shape(var_args){
var args__5755__auto__ = [];
var len__5749__auto___53807 = arguments.length;
var i__5750__auto___53808 = (0);
while(true){
if((i__5750__auto___53808 < len__5749__auto___53807)){
args__5755__auto__.push((arguments[i__5750__auto___53808]));

var G__53809 = (i__5750__auto___53808 + (1));
i__5750__auto___53808 = G__53809;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return app.common.types.file.get_component_shape.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(app.common.types.file.get_component_shape.cljs$core$IFn$_invoke$arity$variadic = (function (file_data,component,shape_id,p__53326){
var map__53328 = p__53326;
var map__53328__$1 = cljs.core.__destructure_map(map__53328);
var with_context_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53328__$1,new cljs.core.Keyword(null,"with-context?","with-context?",-56752853),false);
if(cljs.core.not(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))){
var component_page = app.common.types.file.get_component_page(file_data,component);
if(cljs.core.truth_(component_page)){
var child = app.common.files.helpers.get_child(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component_page),new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component),shape_id);
var G__53333 = child;
if(cljs.core.truth_((function (){var and__5023__auto__ = child;
if(cljs.core.truth_(and__5023__auto__)){
return with_context_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return cljs.core.with_meta(G__53333,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file_data),new cljs.core.Keyword(null,"data","data",-232669377),file_data], null),new cljs.core.Keyword(null,"container","container",-1736937707),app.common.types.container.make_container(component_page,new cljs.core.Keyword(null,"page","page",849072397))], null));
} else {
return G__53333;
}
} else {
return null;
}
} else {
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.Keyword(null,"objects","objects",2099713734)),shape_id);
var G__53338 = shape;
if(cljs.core.truth_((function (){var and__5023__auto__ = shape;
if(cljs.core.truth_(and__5023__auto__)){
return with_context_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return cljs.core.with_meta(G__53338,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file_data),new cljs.core.Keyword(null,"data","data",-232669377),file_data], null),new cljs.core.Keyword(null,"container","container",-1736937707),app.common.types.container.make_container(component,new cljs.core.Keyword(null,"component","component",1555936782))], null));
} else {
return G__53338;
}
}
}));

(app.common.types.file.get_component_shape.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(app.common.types.file.get_component_shape.cljs$lang$applyTo = (function (seq53307){
var G__53308 = cljs.core.first(seq53307);
var seq53307__$1 = cljs.core.next(seq53307);
var G__53309 = cljs.core.first(seq53307__$1);
var seq53307__$2 = cljs.core.next(seq53307__$1);
var G__53310 = cljs.core.first(seq53307__$2);
var seq53307__$3 = cljs.core.next(seq53307__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53308,G__53309,G__53310,seq53307__$3);
}));

/**
 * Retrieve the shape in the component that is referenced by the instance shape.
 */
app.common.types.file.get_ref_shape = (function app$common$types$file$get_ref_shape(var_args){
var args__5755__auto__ = [];
var len__5749__auto___53811 = arguments.length;
var i__5750__auto___53812 = (0);
while(true){
if((i__5750__auto___53812 < len__5749__auto___53811)){
args__5755__auto__.push((arguments[i__5750__auto___53812]));

var G__53813 = (i__5750__auto___53812 + (1));
i__5750__auto___53812 = G__53813;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return app.common.types.file.get_ref_shape.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(app.common.types.file.get_ref_shape.cljs$core$IFn$_invoke$arity$variadic = (function (file_data,component,shape,p__53350){
var map__53351 = p__53350;
var map__53351__$1 = cljs.core.__destructure_map(map__53351);
var with_context_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53351__$1,new cljs.core.Keyword(null,"with-context?","with-context?",-56752853),false);
if(cljs.core.truth_(new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape))){
return app.common.types.file.get_component_shape.cljs$core$IFn$_invoke$arity$variadic(file_data,component,new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"with-context?","with-context?",-56752853),with_context_QMARK_], 0));
} else {
return null;
}
}));

(app.common.types.file.get_ref_shape.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(app.common.types.file.get_ref_shape.cljs$lang$applyTo = (function (seq53343){
var G__53344 = cljs.core.first(seq53343);
var seq53343__$1 = cljs.core.next(seq53343);
var G__53345 = cljs.core.first(seq53343__$1);
var seq53343__$2 = cljs.core.next(seq53343__$1);
var G__53346 = cljs.core.first(seq53343__$2);
var seq53343__$3 = cljs.core.next(seq53343__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53344,G__53345,G__53346,seq53343__$3);
}));

/**
 * Given a shape in the main component and the root of the copy component returns the equivalent
 *   shape inside the root copy that matches the main-shape
 */
app.common.types.file.get_shape_in_copy = (function app$common$types$file$get_shape_in_copy(file_data,main_shape,root_copy){
return app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__53352_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(p1__53352_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(main_shape));
}),app.common.geom.shapes.tree_seq.get_children_seq(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root_copy),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(file_data)));
});
/**
 * Locate the nearest component in the local file or libraries, and retrieve the shape
 * referenced by the instance shape.
 */
app.common.types.file.find_ref_shape = (function app$common$types$file$find_ref_shape(var_args){
var args__5755__auto__ = [];
var len__5749__auto___53816 = arguments.length;
var i__5750__auto___53817 = (0);
while(true){
if((i__5750__auto___53817 < len__5749__auto___53816)){
args__5755__auto__.push((arguments[i__5750__auto___53817]));

var G__53818 = (i__5750__auto___53817 + (1));
i__5750__auto___53817 = G__53818;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return app.common.types.file.find_ref_shape.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(app.common.types.file.find_ref_shape.cljs$core$IFn$_invoke$arity$variadic = (function (file,container,libraries,shape,p__53360){
var map__53361 = p__53360;
var map__53361__$1 = cljs.core.__destructure_map(map__53361);
var include_deleted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53361__$1,new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),false);
var with_context_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53361__$1,new cljs.core.Keyword(null,"with-context?","with-context?",-56752853),false);
var find_ref_shape_in_head = (function (head_shape){
var component_file = app.common.types.file.find_component_file(file,libraries,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(head_shape));
var component = (((!((component_file == null))))?app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(component_file),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(head_shape),include_deleted_QMARK_):null);
if((!((component == null)))){
return app.common.types.file.get_ref_shape.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(component_file),component,shape,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"with-context?","with-context?",-56752853),with_context_QMARK_], 0));
} else {
return null;
}
});
return cljs.core.some(find_ref_shape_in_head,app.common.types.container.get_parent_heads(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container),shape));
}));

(app.common.types.file.find_ref_shape.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(app.common.types.file.find_ref_shape.cljs$lang$applyTo = (function (seq53354){
var G__53355 = cljs.core.first(seq53354);
var seq53354__$1 = cljs.core.next(seq53354);
var G__53356 = cljs.core.first(seq53354__$1);
var seq53354__$2 = cljs.core.next(seq53354__$1);
var G__53357 = cljs.core.first(seq53354__$2);
var seq53354__$3 = cljs.core.next(seq53354__$2);
var G__53358 = cljs.core.first(seq53354__$3);
var seq53354__$4 = cljs.core.next(seq53354__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53355,G__53356,G__53357,G__53358,seq53354__$4);
}));

/**
 * Get the shape-ref of the near main of the shape, recursively repeated as many times
 * as the given levels.
 */
app.common.types.file.advance_shape_ref = (function app$common$types$file$advance_shape_ref(var_args){
var args__5755__auto__ = [];
var len__5749__auto___53822 = arguments.length;
var i__5750__auto___53823 = (0);
while(true){
if((i__5750__auto___53823 < len__5749__auto___53822)){
args__5755__auto__.push((arguments[i__5750__auto___53823]));

var G__53825 = (i__5750__auto___53823 + (1));
i__5750__auto___53823 = G__53825;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((5) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((5)),(0),null)):null);
return app.common.types.file.advance_shape_ref.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),argseq__5756__auto__);
});

(app.common.types.file.advance_shape_ref.cljs$core$IFn$_invoke$arity$variadic = (function (file,container,libraries,shape,levels,p__53371){
var map__53372 = p__53371;
var map__53372__$1 = cljs.core.__destructure_map(map__53372);
var include_deleted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53372__$1,new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),false);
var ref_shape = app.common.types.file.find_ref_shape.cljs$core$IFn$_invoke$arity$variadic(file,container,libraries,shape,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),include_deleted_QMARK_,new cljs.core.Keyword(null,"with-context?","with-context?",-56752853),true], 0));
if((((new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(ref_shape) == null)) || ((!((levels > (0))))))){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ref_shape);
} else {
return app.common.types.file.advance_shape_ref.cljs$core$IFn$_invoke$arity$variadic(file,new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(ref_shape)),libraries,ref_shape,(levels - (1)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),include_deleted_QMARK_], 0));
}
}));

(app.common.types.file.advance_shape_ref.cljs$lang$maxFixedArity = (5));

/** @this {Function} */
(app.common.types.file.advance_shape_ref.cljs$lang$applyTo = (function (seq53365){
var G__53366 = cljs.core.first(seq53365);
var seq53365__$1 = cljs.core.next(seq53365);
var G__53367 = cljs.core.first(seq53365__$1);
var seq53365__$2 = cljs.core.next(seq53365__$1);
var G__53368 = cljs.core.first(seq53365__$2);
var seq53365__$3 = cljs.core.next(seq53365__$2);
var G__53369 = cljs.core.first(seq53365__$3);
var seq53365__$4 = cljs.core.next(seq53365__$3);
var G__53370 = cljs.core.first(seq53365__$4);
var seq53365__$5 = cljs.core.next(seq53365__$4);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53366,G__53367,G__53368,G__53369,G__53370,seq53365__$5);
}));

/**
 * Locate the nearest component in the local file or libraries that is referenced by the
 * instance shape.
 */
app.common.types.file.find_ref_component = (function app$common$types$file$find_ref_component(var_args){
var args__5755__auto__ = [];
var len__5749__auto___53828 = arguments.length;
var i__5750__auto___53829 = (0);
while(true){
if((i__5750__auto___53829 < len__5749__auto___53828)){
args__5755__auto__.push((arguments[i__5750__auto___53829]));

var G__53830 = (i__5750__auto___53829 + (1));
i__5750__auto___53829 = G__53830;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((4) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((4)),(0),null)):null);
return app.common.types.file.find_ref_component.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),argseq__5756__auto__);
});

(app.common.types.file.find_ref_component.cljs$core$IFn$_invoke$arity$variadic = (function (file,page,libraries,shape,p__53389){
var map__53390 = p__53389;
var map__53390__$1 = cljs.core.__destructure_map(map__53390);
var include_deleted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53390__$1,new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),false);
var find_ref_component_in_head = (function (head_shape){
var component_file = app.common.types.file.find_component_file(file,libraries,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(head_shape));
var component = (((!((component_file == null))))?app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(component_file),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(head_shape),include_deleted_QMARK_):null);
if((!((component == null)))){
if(cljs.core.truth_(app.common.types.file.get_ref_shape(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(component_file),component,shape))){
return component;
} else {
return null;
}
} else {
return null;
}
});
return cljs.core.some(find_ref_component_in_head,app.common.types.container.get_parent_copy_heads(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),shape));
}));

(app.common.types.file.find_ref_component.cljs$lang$maxFixedArity = (4));

/** @this {Function} */
(app.common.types.file.find_ref_component.cljs$lang$applyTo = (function (seq53381){
var G__53382 = cljs.core.first(seq53381);
var seq53381__$1 = cljs.core.next(seq53381);
var G__53383 = cljs.core.first(seq53381__$1);
var seq53381__$2 = cljs.core.next(seq53381__$1);
var G__53384 = cljs.core.first(seq53381__$2);
var seq53381__$3 = cljs.core.next(seq53381__$2);
var G__53385 = cljs.core.first(seq53381__$3);
var seq53381__$4 = cljs.core.next(seq53381__$3);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53382,G__53383,G__53384,G__53385,seq53381__$4);
}));

/**
 * Recursively go back by the :shape-ref of the shape until find the correct shape of the original component
 */
app.common.types.file.find_remote_shape = (function app$common$types$file$find_remote_shape(var_args){
var args__5755__auto__ = [];
var len__5749__auto___53832 = arguments.length;
var i__5750__auto___53833 = (0);
while(true){
if((i__5750__auto___53833 < len__5749__auto___53832)){
args__5755__auto__.push((arguments[i__5750__auto___53833]));

var G__53834 = (i__5750__auto___53833 + (1));
i__5750__auto___53833 = G__53834;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return app.common.types.file.find_remote_shape.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(app.common.types.file.find_remote_shape.cljs$core$IFn$_invoke$arity$variadic = (function (container,libraries,shape,p__53399){
var map__53400 = p__53399;
var map__53400__$1 = cljs.core.__destructure_map(map__53400);
var with_context_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53400__$1,new cljs.core.Keyword(null,"with-context?","with-context?",-56752853),false);
var top_instance = app.common.types.container.get_component_shape.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container),shape);
var component_file = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(top_instance),new cljs.core.Keyword(null,"data","data",-232669377)], null));
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(component_file,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(top_instance),true);
var remote_shape = app.common.types.file.get_ref_shape(component_file,component,shape);
var component_container = app.common.types.file.get_component_container(component_file,component);
var vec__53401 = (((!((remote_shape == null))))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remote_shape,component_container,component_file], null):(function (){var head_instance = app.common.types.container.get_head_shape.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container),shape);
var component_file__$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(head_instance),new cljs.core.Keyword(null,"data","data",-232669377)], null));
var head_component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(component_file__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(head_instance),true);
var remote_shape_SINGLEQUOTE_ = app.common.types.file.get_ref_shape(component_file__$1,head_component,shape);
var component_container_SINGLEQUOTE_ = app.common.types.file.get_component_container(component_file__$1,head_component);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [remote_shape_SINGLEQUOTE_,component_container_SINGLEQUOTE_,component_file__$1], null);
})());
var remote_shape__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53401,(0),null);
var component_container__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53401,(1),null);
var component_file__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53401,(2),null);
if((remote_shape__$1 == null)){
return null;
} else {
if((new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(remote_shape__$1) == null)){
var G__53404 = remote_shape__$1;
if(cljs.core.truth_((function (){var and__5023__auto__ = remote_shape__$1;
if(cljs.core.truth_(and__5023__auto__)){
return with_context_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return cljs.core.with_meta(G__53404,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component_file__$1),new cljs.core.Keyword(null,"data","data",-232669377),component_file__$1], null),new cljs.core.Keyword(null,"container","container",-1736937707),component_container__$1], null));
} else {
return G__53404;
}
} else {
return app.common.types.file.find_remote_shape.cljs$core$IFn$_invoke$arity$variadic(component_container__$1,libraries,remote_shape__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"with-context?","with-context?",-56752853),with_context_QMARK_], 0));
}
}
}));

(app.common.types.file.find_remote_shape.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(app.common.types.file.find_remote_shape.cljs$lang$applyTo = (function (seq53395){
var G__53396 = cljs.core.first(seq53395);
var seq53395__$1 = cljs.core.next(seq53395);
var G__53397 = cljs.core.first(seq53395__$1);
var seq53395__$2 = cljs.core.next(seq53395__$1);
var G__53398 = cljs.core.first(seq53395__$2);
var seq53395__$3 = cljs.core.next(seq53395__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__53396,G__53397,G__53398,seq53395__$3);
}));

/**
 * Check if the shape is in a direct copy of the component (i.e. the shape-ref points to shapes inside
 * the component).
 */
app.common.types.file.direct_copy_QMARK_ = (function app$common$types$file$direct_copy_QMARK_(shape,component,page,file,libraries){
var ref_component = app.common.types.file.find_ref_component.cljs$core$IFn$_invoke$arity$variadic(file,page,libraries,shape,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true], 0));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(ref_component)) === true;
});
app.common.types.file.find_swap_slot = (function app$common$types$file$find_swap_slot(var_args){
var G__53406 = arguments.length;
switch (G__53406) {
case 4:
return app.common.types.file.find_swap_slot.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.common.types.file.find_swap_slot.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.file.find_swap_slot.cljs$core$IFn$_invoke$arity$4 = (function (shape,container,file,libraries){
return app.common.types.file.find_swap_slot.cljs$core$IFn$_invoke$arity$5(shape,container,file,libraries,cljs.core.PersistentHashSet.EMPTY);
}));

(app.common.types.file.find_swap_slot.cljs$core$IFn$_invoke$arity$5 = (function (shape,container,file,libraries,viewed_ids){
if(cljs.core.contains_QMARK_(viewed_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))){
return null;
} else {
var temp__5823__auto__ = app.common.types.component.get_swap_slot(shape);
if(cljs.core.truth_(temp__5823__auto__)){
var swap_slot = temp__5823__auto__;
return swap_slot;
} else {
var ref_shape = app.common.types.file.find_ref_shape.cljs$core$IFn$_invoke$arity$variadic(file,container,libraries,shape,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true,new cljs.core.Keyword(null,"with-context?","with-context?",-56752853),true], 0));
var shape_meta = cljs.core.meta(ref_shape);
var ref_file = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(shape_meta);
var ref_container = new cljs.core.Keyword(null,"container","container",-1736937707).cljs$core$IFn$_invoke$arity$1(shape_meta);
if(cljs.core.truth_(ref_shape)){
var temp__5823__auto____$1 = app.common.types.component.get_swap_slot(ref_shape);
if(cljs.core.truth_(temp__5823__auto____$1)){
var swap_slot = temp__5823__auto____$1;
return swap_slot;
} else {
if(app.common.types.component.main_instance_QMARK_(ref_shape)){
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
} else {
return app.common.types.file.find_swap_slot.cljs$core$IFn$_invoke$arity$5(ref_shape,ref_container,ref_file,libraries,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(viewed_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));
}
}
} else {
return null;
}
}
}
}));

(app.common.types.file.find_swap_slot.cljs$lang$maxFixedArity = 5);

app.common.types.file.match_swap_slot_QMARK_ = (function app$common$types$file$match_swap_slot_QMARK_(shape_main,shape_inst,container_inst,container_main,file,libraries){
var slot_main = app.common.types.file.find_swap_slot.cljs$core$IFn$_invoke$arity$4(shape_main,container_main,file,libraries);
var slot_inst = app.common.types.file.find_swap_slot.cljs$core$IFn$_invoke$arity$4(shape_inst,container_inst,file,libraries);
if((!((slot_inst == null)))){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(slot_main,slot_inst)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape_main),slot_inst)));
} else {
return null;
}
});
/**
 * Go up from the chain of references shapes that will eventually lead to the shape
 * with swap-slot-id as id. Returns the next shape on the chain
 */
app.common.types.file.find_next_related_swap_shape_id = (function app$common$types$file$find_next_related_swap_shape_id(parent,swap_slot_id,libraries){
var container = app.common.types.file.get_component_container_from_head(parent,libraries);
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container);
var children = app.common.files.helpers.get_children(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent));
var original_shape_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53410_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(swap_slot_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__53410_SHARP_));
}),children)));
if(cljs.core.truth_(original_shape_id)){
return original_shape_id;
} else {
var referenced_shape = app.common.types.file.find_ref_shape(null,container,libraries,parent);
var next_shape_id = (cljs.core.truth_(referenced_shape)?(app.common.types.file.find_next_related_swap_shape_id.cljs$core$IFn$_invoke$arity$3 ? app.common.types.file.find_next_related_swap_shape_id.cljs$core$IFn$_invoke$arity$3(referenced_shape,swap_slot_id,libraries) : app.common.types.file.find_next_related_swap_shape_id.call(null,referenced_shape,swap_slot_id,libraries)):null);
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53411_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(next_shape_id,new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(p1__53411_SHARP_));
}),children)));
}
});
/**
 * When a shape has been swapped, find the original ref-id that the shape had
 * before the swap
 */
app.common.types.file.find_ref_id_for_swapped = (function app$common$types$file$find_ref_id_for_swapped(shape,container,libraries){
var swap_slot = app.common.types.component.get_swap_slot(shape);
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var parent_head = app.common.types.container.get_head_shape.cljs$core$IFn$_invoke$arity$2(objects,parent);
var parent_ref = app.common.types.file.find_ref_shape(null,container,libraries,parent_head);
if(cljs.core.truth_((function (){var and__5023__auto__ = swap_slot;
if(cljs.core.truth_(and__5023__auto__)){
return parent_ref;
} else {
return and__5023__auto__;
}
})())){
return app.common.types.file.find_next_related_swap_shape_id(parent_ref,swap_slot,libraries);
} else {
return null;
}
});
/**
 * Retrieve all shapes of the component
 */
app.common.types.file.get_component_shapes = (function app$common$types$file$get_component_shapes(file_data,component){
if(cljs.core.not(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))){
var instance_page = app.common.types.file.get_component_page(file_data,component);
return app.common.files.helpers.get_children_with_self(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(instance_page),new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component));
} else {
return cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component));
}
});
app.common.types.file.is_main_of_known_component_QMARK_ = (function app$common$types$file$is_main_of_known_component_QMARK_(shape,libraries){
var main_instance_QMARK_ = app.common.types.component.main_instance_QMARK_(shape);
var component_id = new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape);
var file_id = new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape);
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,file_id),new cljs.core.Keyword(null,"data","data",-232669377)),component_id,true);
var and__5023__auto__ = main_instance_QMARK_;
if(and__5023__auto__){
return component;
} else {
return and__5023__auto__;
}
});
/**
 * Add an :objects property to the component, with only the shapes that belong to it
 */
app.common.types.file.load_component_objects = (function app$common$types$file$load_component_objects(var_args){
var G__53432 = arguments.length;
switch (G__53432) {
case 2:
return app.common.types.file.load_component_objects.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.types.file.load_component_objects.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.types.file.load_component_objects.cljs$core$IFn$_invoke$arity$2 = (function (file_data,component){
return app.common.types.file.load_component_objects.cljs$core$IFn$_invoke$arity$3(file_data,component,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0)));
}));

(app.common.types.file.load_component_objects.cljs$core$IFn$_invoke$arity$3 = (function (file_data,component,delta){
if(cljs.core.truth_((function (){var and__5023__auto__ = component;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component));
} else {
return and__5023__auto__;
}
})())){
var component_page = app.common.types.file.get_component_page(file_data,component);
var page_objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component_page);
var objects = app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53425_SHARP_){
return app.common.geom.shapes.move(p1__53425_SHARP_,delta);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53424_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(page_objects,p1__53424_SHARP_);
}),cljs.core.cons(new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component),app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(page_objects,new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component))))));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(component,new cljs.core.Keyword(null,"objects","objects",2099713734),objects);
} else {
return component;
}
}));

(app.common.types.file.load_component_objects.cljs$lang$maxFixedArity = 3);

/**
 * Mark a component as deleted and store the main instance shapes iside it, to
 *   be able to be recovered later.
 */
app.common.types.file.delete_component = (function app$common$types$file$delete_component(file_data,component_id,skip_undelete_QMARK_,delta){
var delta__$1 = (function (){var or__5025__auto__ = delta;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0));
}
})();
if(cljs.core.truth_(skip_undelete_QMARK_)){
return app.common.types.components_list.delete_component(file_data,component_id);
} else {
return app.common.types.components_list.mark_component_deleted(app.common.types.components_list.update_component(file_data,component_id,(function (p1__53437_SHARP_){
return app.common.types.file.load_component_objects.cljs$core$IFn$_invoke$arity$3(file_data,p1__53437_SHARP_,delta__$1);
})),component_id);
}
});
/**
 * Recover a deleted component and all its shapes and put all this again in place.
 */
app.common.types.file.restore_component = (function app$common$types$file$restore_component(file_data,component_id,page_id){
var update_page_QMARK_ = (!((page_id == null)));
var component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(file_data,component_id,true);
var main_instance_page = (function (){var or__5025__auto__ = page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component);
}
})();
var main_instance = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file_data,new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145)),main_instance_page),new cljs.core.Keyword(null,"objects","objects",2099713734)),new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component));
var G__53455 = file_data;
var G__53455__$1 = app.common.types.components_list.mark_component_undeleted(app.common.types.components_list.update_component(G__53455,component_id,(function (p1__53444_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__53444_SHARP_,new cljs.core.Keyword(null,"objects","objects",2099713734));
})),component_id)
;
var G__53455__$2 = ((update_page_QMARK_)?app.common.types.components_list.update_component(G__53455__$1,component_id,(function (p1__53445_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53445_SHARP_,new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139),page_id);
})):G__53455__$1);
if(app.common.types.component.is_variant_QMARK_(component)){
return app.common.types.components_list.update_component(G__53455__$2,component_id,(function (p1__53446_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53446_SHARP_,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(main_instance));
}));
} else {
return G__53455__$2;
}
});
/**
 * Remove permanently a component.
 */
app.common.types.file.purge_component = (function app$common$types$file$purge_component(file_data,component_id){
return app.common.types.components_list.delete_component(file_data,component_id);
});
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.types !== 'undefined') && (typeof app.common.types.file !== 'undefined') && (typeof app.common.types.file.uses_asset_QMARK_ !== 'undefined')){
} else {
/**
 * Checks if a shape uses the given asset.
 */
app.common.types.file.uses_asset_QMARK_ = (function (){var method_table__5622__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var prefer_table__5623__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var method_cache__5624__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var cached_hierarchy__5625__auto__ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hierarchy__5626__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"hierarchy","hierarchy",-1053470341),(function (){var fexpr__53468 = cljs.core.get_global_hierarchy;
return (fexpr__53468.cljs$core$IFn$_invoke$arity$0 ? fexpr__53468.cljs$core$IFn$_invoke$arity$0() : fexpr__53468.call(null));
})());
return (new cljs.core.MultiFn(cljs.core.symbol.cljs$core$IFn$_invoke$arity$2("app.common.types.file","uses-asset?"),(function (asset_type,_,___$1,___$2){
return asset_type;
}),new cljs.core.Keyword(null,"default","default",-1987822328),hierarchy__5626__auto__,method_table__5622__auto__,prefer_table__5623__auto__,method_cache__5624__auto__,cached_hierarchy__5625__auto__));
})();
}
app.common.types.file.uses_asset_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"component","component",1555936782),(function (_,shape,library_id,component){
return app.common.types.component.instance_of_QMARK_(shape,library_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component));
}));
app.common.types.file.uses_asset_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"color","color",1011675173),(function (_,shape,library_id,color){
return app.common.types.shape.uses_library_color_QMARK_(shape,library_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color));
}));
app.common.types.file.uses_asset_QMARK_.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"typography","typography",-399568138),(function (_,shape,library_id,typography){
return app.common.types.typography.uses_library_typography_QMARK_(shape,library_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(typography));
}));
/**
 * Find all usages of an asset in a file (may be in pages or in the components
 *   of the local library).
 * 
 *   Returns a list ((asset ((container shapes) (container shapes)...))...)
 */
app.common.types.file.find_asset_type_usages = (function app$common$types$file$find_asset_type_usages(file_data,library_data,asset_type){
var assets = (function (){var G__53503 = asset_type;
var G__53503__$1 = (((G__53503 instanceof cljs.core.Keyword))?G__53503.fqn:null);
switch (G__53503__$1) {
case "component":
return app.common.types.components_list.components_seq(library_data);

break;
case "color":
return cljs.core.vals(app.common.types.library.get_colors(library_data));

break;
case "typography":
return app.common.types.typographies_list.typographies_seq(library_data);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53503__$1)].join('')));

}
})();
var find_usages_in_container = (function (container,asset){
var instances = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53497_SHARP_){
return app.common.types.file.uses_asset_QMARK_.cljs$core$IFn$_invoke$arity$4(asset_type,p1__53497_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(library_data),asset);
}),app.common.types.container.shapes_seq(container));
if(app.common.data.not_empty_QMARK_(instances)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [container,instances], null)], null);
} else {
return null;
}
});
var find_asset_usages = (function (file_data__$1,asset){
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__53499_SHARP_){
return find_usages_in_container(p1__53499_SHARP_,asset);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.file.containers_seq(file_data__$1)], 0));
});
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (asset){
var instances = find_asset_usages(file_data,asset);
if(app.common.data.not_empty_QMARK_(instances)){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [asset,instances], null)], null);
} else {
return null;
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([assets], 0));
});
/**
 * Checks if a specific asset is used in a given file (by any shape in its pages or in
 *   the components of the local library).
 */
app.common.types.file.used_in_QMARK_ = (function app$common$types$file$used_in_QMARK_(file_data,library_id,asset,asset_type){
var used_in_shape_QMARK_ = (function app$common$types$file$used_in_QMARK__$_used_in_shape_QMARK_(shape){
return app.common.types.file.uses_asset_QMARK_.cljs$core$IFn$_invoke$arity$4(asset_type,shape,library_id,asset);
});
var used_in_container_QMARK_ = (function app$common$types$file$used_in_QMARK__$_used_in_container_QMARK_(container){
return cljs.core.some(used_in_shape_QMARK_,app.common.types.container.shapes_seq(container));
});
return cljs.core.some(used_in_container_QMARK_,app.common.types.file.containers_seq(file_data));
});
/**
 * Get a lazy sequence of all assets in the library that are in use by the file and have
 * been modified after the given date.
 */
app.common.types.file.used_assets_changed_since = (function app$common$types$file$used_assets_changed_since(file_data,library,since_date){
var used_assets_shape = (function app$common$types$file$used_assets_changed_since_$_used_assets_shape(shape){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(app.common.types.components_list.used_components_changed_since(shape,library,since_date),app.common.types.library.used_colors_changed_since(shape,library,since_date),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.typographies_list.used_typographies_changed_since(shape,library,since_date)], 0));
});
var used_assets_container = (function app$common$types$file$used_assets_changed_since_$_used_assets_container(container){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53517_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53517_SHARP_,new cljs.core.Keyword(null,"container-id","container-id",1274665684),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(container));
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(used_assets_shape,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.container.shapes_seq(container)], 0)));
});
return cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(used_assets_container,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.file.containers_seq(file_data)], 0));
});
/**
 * If exists a page named 'Main components', get the id and calculate the position to start
 *   adding new components. If not, create it and start at (0, 0).
 */
app.common.types.file.get_or_add_library_page = (function app$common$types$file$get_or_add_library_page(file_data,grid_gap){
var library_page = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__53518_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__53518_SHARP_),"Main components");
}),app.common.types.pages_list.pages_seq(file_data));
if((!((library_page == null)))){
var compare_pos = (function (pos,shape){
var bounds = app.common.geom.shapes.bounding_box(shape);
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((function (){var x__5113__auto__ = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos);
var y__5114__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(bounds,new cljs.core.Keyword(null,"x","x",2099068185),(0));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})(),(function (){var x__5110__auto__ = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos);
var y__5111__auto__ = ((cljs.core.get.cljs$core$IFn$_invoke$arity$3(bounds,new cljs.core.Keyword(null,"y","y",-1757859776),(0)) + cljs.core.get.cljs$core$IFn$_invoke$arity$3(bounds,new cljs.core.Keyword(null,"height","height",1025178622),(0))) + grid_gap);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})());
});
var position = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(compare_pos,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0)),app.common.types.container.shapes_seq(library_page));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_data,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(library_page),position], null);
} else {
var library_page__$1 = app.common.types.page.make_empty_page(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next(),new cljs.core.Keyword(null,"name","name",1843675177),"Main components"], null));
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.types.pages_list.add_page(file_data,library_page__$1),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(library_page__$1),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0))], null);
}
});
app.common.types.file.absorb_components = (function app$common$types$file$absorb_components(file_data,used_components,library_data){
var grid_gap = (50);
var vec__53529 = app.common.types.file.get_or_add_library_page(file_data,grid_gap);
var file_data__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53529,(0),null);
var page_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53529,(1),null);
var start_pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53529,(2),null);
var absorb_component = (function (file_data__$2,p__53532,position){
var vec__53533 = p__53532;
var component = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53533,(0),null);
var instances = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53533,(1),null);
var page = app.common.types.pages_list.get_page(file_data__$2,page_id);
var vec__53536 = app.common.types.container.make_component_instance.cljs$core$IFn$_invoke$arity$5(page,component,library_data,position,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"main-instance?","main-instance?",-1502113126),true,new cljs.core.Keyword(null,"keep-ids?","keep-ids?",-236947248),true], null));
var main_instance_shape = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53536,(0),null);
var main_instance_shapes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53536,(1),null);
var main_instance_shapes__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53521_SHARP_){
var G__53539 = p1__53521_SHARP_;
if((!((new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(p1__53521_SHARP_) == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53539,new cljs.core.Keyword(null,"component-file","component-file",-1378670433),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file_data__$2));
} else {
return G__53539;
}
}),main_instance_shapes);
var add_main_instance_shapes = (function (page__$1){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (page__$2,shape){
return app.common.types.shape_tree.add_shape(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),shape,page__$2,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),null,true);
}),page__$1,main_instance_shapes__$1);
});
var copy_component = (function (file_data__$3){
return app.common.types.components_list.add_component(file_data__$3,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(component),new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(main_instance_shape),new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139),page_id], null));
});
var remap_instances = (function (file_data__$3,p__53540){
var vec__53541 = p__53540;
var container = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53541,(0),null);
var shapes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53541,(1),null);
var remap_instance = (function (p1__53522_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53522_SHARP_,new cljs.core.Keyword(null,"component-file","component-file",-1378670433),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file_data__$3));
});
return app.common.types.file.update_container(file_data__$3,container,(function (p1__53523_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (container__$1,shape){
return app.common.types.container.update_shape(container__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),remap_instance);
}),p1__53523_SHARP_,shapes);
}));
});
var $ = file_data__$2;
var $__$1 = app.common.types.pages_list.update_page($,page_id,add_main_instance_shapes);
var $__$2 = copy_component($__$1);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(remap_instances,$__$2,instances);
});
var add_component_grid = (function (data,used_components__$1){
var position_seq = app.common.types.shape_tree.generate_shape_grid(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__53524_SHARP_){
return app.common.types.file.get_component_root(library_data,cljs.core.first(p1__53524_SHARP_));
}),used_components__$1),start_pos,grid_gap);
var data__$1 = data;
var components_seq = cljs.core.seq(used_components__$1);
var position_seq__$1 = position_seq;
while(true){
var used_component = cljs.core.first(components_seq);
var position = cljs.core.first(position_seq__$1);
if((used_component == null)){
return data__$1;
} else {
var G__53894 = absorb_component(data__$1,used_component,position);
var G__53895 = cljs.core.rest(components_seq);
var G__53896 = cljs.core.rest(position_seq__$1);
data__$1 = G__53894;
components_seq = G__53895;
position_seq__$1 = G__53896;
continue;
}
break;
}
});
return add_component_grid(file_data__$1,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__53525_SHARP_){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(p1__53525_SHARP_));
}),used_components));
});
app.common.types.file.absorb_colors = (function app$common$types$file$absorb_colors(file_data,used_colors){
var absorb_color = (function (file_data__$1,p__53546){
var vec__53547 = p__53546;
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53547,(0),null);
var usages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53547,(1),null);
var remap_shape = (function (p1__53544_SHARP_){
return app.common.types.shape.remap_colors(p1__53544_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file_data__$1),color);
});
var remap_shapes = (function (file_data__$2,p__53550){
var vec__53551 = p__53550;
var container = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53551,(0),null);
var shapes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53551,(1),null);
return app.common.types.file.update_container(file_data__$2,container,(function (p1__53545_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (container__$1,shape){
return app.common.types.container.update_shape(container__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),remap_shape);
}),p1__53545_SHARP_,shapes);
}));
});
var $ = file_data__$1;
var $__$1 = app.common.types.library.add_color($,color);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(remap_shapes,$__$1,usages);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(absorb_color,file_data,used_colors);
});
app.common.types.file.absorb_typographies = (function app$common$types$file$absorb_typographies(file_data,used_typographies){
var absorb_typography = (function (file_data__$1,p__53556){
var vec__53557 = p__53556;
var typography = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53557,(0),null);
var usages = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53557,(1),null);
var remap_shape = (function (p1__53554_SHARP_){
return app.common.types.typography.remap_typographies(p1__53554_SHARP_,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file_data__$1),typography);
});
var remap_shapes = (function (file_data__$2,p__53560){
var vec__53561 = p__53560;
var container = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53561,(0),null);
var shapes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53561,(1),null);
return app.common.types.file.update_container(file_data__$2,container,(function (p1__53555_SHARP_){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (container__$1,shape){
return app.common.types.container.update_shape(container__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),remap_shape);
}),p1__53555_SHARP_,shapes);
}));
});
var $ = file_data__$1;
var $__$1 = app.common.types.typographies_list.add_typography($,typography);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(remap_shapes,$__$1,usages);
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(absorb_typography,file_data,used_typographies);
});
/**
 * Find all assets of a library that are used in the file, and
 *   move them to the file local library.
 */
app.common.types.file.absorb_assets = (function app$common$types$file$absorb_assets(file_data,library_data){
var used_components = app.common.types.file.find_asset_type_usages(file_data,library_data,new cljs.core.Keyword(null,"component","component",1555936782));
var file_data__$1 = (function (){var G__53564 = file_data;
if(app.common.data.not_empty_QMARK_(used_components)){
return app.common.types.file.absorb_components(G__53564,used_components,library_data);
} else {
return G__53564;
}
})();
var used_colors = app.common.types.file.find_asset_type_usages(file_data__$1,library_data,new cljs.core.Keyword(null,"color","color",1011675173));
var file_data__$2 = (function (){var G__53565 = file_data__$1;
if(app.common.data.not_empty_QMARK_(used_colors)){
return app.common.types.file.absorb_colors(G__53565,used_colors);
} else {
return G__53565;
}
})();
var used_typographies = app.common.types.file.find_asset_type_usages(file_data__$2,library_data,new cljs.core.Keyword(null,"typography","typography",-399568138));
var file_data__$3 = (function (){var G__53566 = file_data__$2;
if(app.common.data.not_empty_QMARK_(used_typographies)){
return app.common.types.file.absorb_typographies(G__53566,used_typographies);
} else {
return G__53566;
}
})();
return file_data__$3;
});
/**
 * Display a summary of a shape and its relationships, and recursively of all children.
 */
app.common.types.file.dump_shape = (function app$common$types$file$dump_shape(shape_id,level,objects,file,libraries,p__53567){
var map__53568 = p__53567;
var map__53568__$1 = cljs.core.__destructure_map(map__53568);
var flags = map__53568__$1;
var show_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53568__$1,new cljs.core.Keyword(null,"show-ids","show-ids",1853916915));
var show_touched = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53568__$1,new cljs.core.Keyword(null,"show-touched","show-touched",2135884991));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,shape_id);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cuerdas.core.pad.cljs$core$IFn$_invoke$arity$2([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2("  ",level)),(cljs.core.truth_(new cljs.core.Keyword(null,"main-instance","main-instance",476264761).cljs$core$IFn$_invoke$arity$1(shape))?"{":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape)),(cljs.core.truth_(new cljs.core.Keyword(null,"main-instance","main-instance",476264761).cljs$core$IFn$_invoke$arity$1(shape))?"}":null),((cljs.core.seq(new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(shape)))?"*":null),cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(show_ids)?cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic(" %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], 0)):null))].join(''),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"length","length",588987862),(20),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"right","right",-452581833)], null)),(app.common.types.file.dump_shape_component_info.cljs$core$IFn$_invoke$arity$5 ? app.common.types.file.dump_shape_component_info.cljs$core$IFn$_invoke$arity$5(shape,objects,file,libraries,flags) : app.common.types.file.dump_shape_component_info.call(null,shape,objects,file,libraries,flags))], 0));

if(cljs.core.truth_(show_touched)){
if(cljs.core.seq(new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(shape))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2("  ",level)),"    ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(shape))].join('')], 0));
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"remote-synced","remote-synced",1564821477).cljs$core$IFn$_invoke$arity$1(shape))){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2("  ",level)),"    (remote-synced)"].join('')], 0));
} else {
}
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape))){
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function app$common$types$file$dump_shape_$_iter__53570(s__53571){
return (new cljs.core.LazySeq(null,(function (){
var s__53571__$1 = s__53571;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__53571__$1);
if(temp__5825__auto__){
var s__53571__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53571__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__53571__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__53573 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__53572 = (0);
while(true){
if((i__53572 < size__5502__auto__)){
var shape_id__$1 = cljs.core._nth(c__5501__auto__,i__53572);
cljs.core.chunk_append(b__53573,(function (){var G__53576 = shape_id__$1;
var G__53577 = (level + (1));
var G__53578 = objects;
var G__53579 = file;
var G__53580 = libraries;
var G__53581 = flags;
return (app.common.types.file.dump_shape.cljs$core$IFn$_invoke$arity$6 ? app.common.types.file.dump_shape.cljs$core$IFn$_invoke$arity$6(G__53576,G__53577,G__53578,G__53579,G__53580,G__53581) : app.common.types.file.dump_shape.call(null,G__53576,G__53577,G__53578,G__53579,G__53580,G__53581));
})());

var G__53908 = (i__53572 + (1));
i__53572 = G__53908;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53573),app$common$types$file$dump_shape_$_iter__53570(cljs.core.chunk_rest(s__53571__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53573),null);
}
} else {
var shape_id__$1 = cljs.core.first(s__53571__$2);
return cljs.core.cons((function (){var G__53585 = shape_id__$1;
var G__53586 = (level + (1));
var G__53587 = objects;
var G__53588 = file;
var G__53589 = libraries;
var G__53590 = flags;
return (app.common.types.file.dump_shape.cljs$core$IFn$_invoke$arity$6 ? app.common.types.file.dump_shape.cljs$core$IFn$_invoke$arity$6(G__53585,G__53586,G__53587,G__53588,G__53589,G__53590) : app.common.types.file.dump_shape.call(null,G__53585,G__53586,G__53587,G__53588,G__53589,G__53590));
})(),app$common$types$file$dump_shape_$_iter__53570(cljs.core.rest(s__53571__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
})());
} else {
return null;
}
});
/**
 * If the shape is inside a component, display the information of the relationship.
 */
app.common.types.file.dump_shape_component_info = (function app$common$types$file$dump_shape_component_info(shape,objects,file,libraries,p__53592){
var map__53593 = p__53592;
var map__53593__$1 = cljs.core.__destructure_map(map__53593);
var show_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53593__$1,new cljs.core.Keyword(null,"show-ids","show-ids",1853916915));
if((new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape) == null)){
if(cljs.core.truth_(new cljs.core.Keyword(null,"component-root","component-root",-485271026).cljs$core$IFn$_invoke$arity$1(shape))){
return [" #",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(show_ids)?cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic(" [Component %s]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape)], 0)):null))].join('');
} else {
return "";
}
} else {
var root_shape = app.common.types.container.get_component_shape.cljs$core$IFn$_invoke$arity$2(objects,shape);
var component_file_id = (cljs.core.truth_(root_shape)?new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(root_shape):null);
var component_file = (cljs.core.truth_(component_file_id)?cljs.core.get.cljs$core$IFn$_invoke$arity$3(libraries,component_file_id,null):null);
var component_shape = app.common.types.file.find_ref_shape.cljs$core$IFn$_invoke$arity$variadic(file,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"objects","objects",2099713734),objects], null),libraries,shape,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true], 0));
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic(" %s--> %s%s%s%s%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(new cljs.core.Keyword(null,"component-root","component-root",-485271026).cljs$core$IFn$_invoke$arity$1(shape))?"#":(cljs.core.truth_(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape))?"@":"-"
)),(cljs.core.truth_(new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape))?cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("<%s> ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(component_file)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component_file),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file)))?"local":new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component_file)):(cljs.core.truth_(show_ids)?cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("\u00BF%s?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape)], 0)):"?"))], 0)):null),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component_shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
if(cljs.core.truth_(show_ids)){
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("\u00BF%s?",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329).cljs$core$IFn$_invoke$arity$1(shape)], 0));
} else {
return "?";
}
}
})(),(cljs.core.truth_((function (){var and__5023__auto__ = show_ids;
if(cljs.core.truth_(and__5023__auto__)){
return component_shape;
} else {
return and__5023__auto__;
}
})())?cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic(" %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component_shape)], 0)):null),(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"component-root","component-root",-485271026).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (((new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape) == null)) || (true));
}
})())?"":(function (){var component_id = new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape);
var component_file_id__$1 = new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape);
var component_file__$1 = (cljs.core.truth_(component_file_id__$1)?cljs.core.get.cljs$core$IFn$_invoke$arity$3(libraries,component_file_id__$1,null):null);
var component = (cljs.core.truth_(component_file__$1)?app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(component_file__$1),component_id,true):app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file),component_id,true));
return cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic(" (%s%s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(component_file__$1)?cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("<%s> ",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component_file__$1),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file)))?"local":new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component_file__$1))], 0)):null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component)], 0));
})()),(cljs.core.truth_((function (){var and__5023__auto__ = show_ids;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape);
} else {
return and__5023__auto__;
}
})())?cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic(" [Component %s]",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape)], 0)):null)], 0));
}
});
/**
 * Display a summary of a component and the links to the main instance.
 * If the component contains an :objects, display also all shapes inside.
 */
app.common.types.file.dump_component = (function app$common$types$file$dump_component(component,file,libraries,p__53599){
var map__53600 = p__53599;
var map__53600__$1 = cljs.core.__destructure_map(map__53600);
var flags = map__53600__$1;
var show_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53600__$1,new cljs.core.Keyword(null,"show-ids","show-ids",1853916915));
var show_modified = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53600__$1,new cljs.core.Keyword(null,"show-modified","show-modified",-1388936404));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("[%sComponent: %s]%s%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))?"DELETED ":null),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component),(cljs.core.truth_(show_ids)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component))].join(''):null),(cljs.core.truth_(show_modified)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"modified-at","modified-at",-932048179).cljs$core$IFn$_invoke$arity$1(component))].join(''):null)], 0))], 0));

if(cljs.core.truth_(new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component))){
var page_53920 = app.common.types.file.get_component_page(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file),component);
var root_53921 = app.common.types.file.get_component_root(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file),component);
if(cljs.core.not(show_ids)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["  --> [",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(page_53920)),"] ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(root_53921))].join('')], 0));
} else {
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(page_53920)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic(" %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page_53920)], 0)))].join('')], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["  ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(root_53921)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic(" %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root_53921)], 0)))].join('')], 0));
}
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.seq(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component));
} else {
return and__5023__auto__;
}
})())){
cljs.core.println();
} else {
}

if(cljs.core.seq(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component))){
var root = app.common.types.component.get_deleted_component_root(component);
return app.common.types.file.dump_shape(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root),(1),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component),file,libraries,flags);
} else {
return null;
}
});
/**
 * Display a summary of a page, and of all shapes inside.
 */
app.common.types.file.dump_page = (function app$common$types$file$dump_page(page,file,libraries,p__53606){
var map__53607 = p__53606;
var map__53607__$1 = cljs.core.__destructure_map(map__53607);
var flags = map__53607__$1;
var show_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53607__$1,new cljs.core.Keyword(null,"show-ids","show-ids",1853916915));
var root_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__53607__$1,new cljs.core.Keyword(null,"root-id","root-id",1294683809),app.common.uuid.zero);
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page);
var root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,root_id);
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("[Page: %s]%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(page),(cljs.core.truth_(show_ids)?[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page))].join(''):null)], 0))], 0));

return app.common.types.file.dump_shape(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root),(1),objects,file,libraries,flags);
});
/**
 * Display a summary of a library, and of all components inside.
 */
app.common.types.file.dump_library = (function app$common$types$file$dump_library(library,file,libraries,p__53610){
var map__53611 = p__53610;
var map__53611__$1 = cljs.core.__destructure_map(map__53611);
var flags = map__53611__$1;
var show_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53611__$1,new cljs.core.Keyword(null,"show-ids","show-ids",1853916915));
var only = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53611__$1,new cljs.core.Keyword(null,"only","only",1907811652));
var include_deleted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53611__$1,new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372));
var lib_components = app.common.types.components_list.components.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),include_deleted_QMARK_], null));
cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("========= %s%s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(library),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file)))?"Local library":cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("Library %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(library)], 0))),(cljs.core.truth_(show_ids)?cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic(" %s",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(library)], 0)):null)], 0))], 0));

if(cljs.core.seq(lib_components)){
return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function app$common$types$file$dump_library_$_iter__53612(s__53613){
return (new cljs.core.LazySeq(null,(function (){
var s__53613__$1 = s__53613;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__53613__$1);
if(temp__5825__auto__){
var s__53613__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53613__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__53613__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__53615 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__53614 = (0);
while(true){
if((i__53614 < size__5502__auto__)){
var component = cljs.core._nth(c__5501__auto__,i__53614);
cljs.core.chunk_append(b__53615,(cljs.core.truth_((function (){var or__5025__auto__ = (only == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var G__53616 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component);
return (only.cljs$core$IFn$_invoke$arity$1 ? only.cljs$core$IFn$_invoke$arity$1(G__53616) : only.call(null,G__53616));
}
})())?(function (){
cljs.core.println();

return app.common.types.file.dump_component(component,library,libraries,flags);
})()
:null));

var G__53926 = (i__53614 + (1));
i__53614 = G__53926;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53615),app$common$types$file$dump_library_$_iter__53612(cljs.core.chunk_rest(s__53613__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53615),null);
}
} else {
var component = cljs.core.first(s__53613__$2);
return cljs.core.cons((cljs.core.truth_((function (){var or__5025__auto__ = (only == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var G__53620 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component);
return (only.cljs$core$IFn$_invoke$arity$1 ? only.cljs$core$IFn$_invoke$arity$1(G__53620) : only.call(null,G__53620));
}
})())?(function (){
cljs.core.println();

return app.common.types.file.dump_component(component,library,libraries,flags);
})()
:null),app$common$types$file$dump_library_$_iter__53612(cljs.core.rest(s__53613__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.vals(lib_components));
})());
} else {
cljs.core.println();

return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["(no components)"], 0));
}
});
/**
 * Display all shapes in the given page, and also all components of the local
 * library and all linked libraries.
 */
app.common.types.file.dump_tree = (function app$common$types$file$dump_tree(file,page_id,libraries,flags){
var page = app.common.types.pages_list.get_page(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file),page_id);
app.common.types.file.dump_page(page,file,libraries,flags);

app.common.types.file.dump_library(file,file,libraries,flags);

cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function app$common$types$file$dump_tree_$_iter__53621(s__53622){
return (new cljs.core.LazySeq(null,(function (){
var s__53622__$1 = s__53622;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__53622__$1);
if(temp__5825__auto__){
var s__53622__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53622__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__53622__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__53624 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__53623 = (0);
while(true){
if((i__53623 < size__5502__auto__)){
var library = cljs.core._nth(c__5501__auto__,i__53623);
cljs.core.chunk_append(b__53624,app.common.types.file.dump_library(library,file,libraries,flags));

var G__53930 = (i__53623 + (1));
i__53623 = G__53930;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53624),app$common$types$file$dump_tree_$_iter__53621(cljs.core.chunk_rest(s__53622__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53624),null);
}
} else {
var library = cljs.core.first(s__53622__$2);
return cljs.core.cons(app.common.types.file.dump_library(library,file,libraries,flags),app$common$types$file$dump_tree_$_iter__53621(cljs.core.rest(s__53622__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(cljs.core.vals(libraries));
})());

return cljs.core.println();
});
/**
 * Display all shapes in the context of the given shape, and also the components
 * used by any of the shape or children.
 */
app.common.types.file.dump_subtree = (function app$common$types$file$dump_subtree(file,page_id,shape_id,libraries,flags){
var libraries_STAR_ = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(libraries,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),file);
var add_component = (function app$common$types$file$dump_subtree_$_add_component(libs_to_show,library_id,component_id){
var component_ids = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$3(libs_to_show,library_id,cljs.core.PersistentHashSet.EMPTY),component_id);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(libs_to_show,library_id,component_ids);
});
var find_used_components = (function app$common$types$file$dump_subtree_$_find_used_components(page,root){
var children = app.common.files.helpers.get_children_with_self(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (libs_to_show,shape){
if(app.common.types.component.instance_head_QMARK_(shape)){
return add_component(libs_to_show,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return libs_to_show;
}
}),cljs.core.PersistentArrayMap.EMPTY,children);
});
var find_used_components_cumulative = (function app$common$types$file$dump_subtree_$_find_used_components_cumulative(libs_to_show,page,root){
var sublibs_to_show = find_used_components(page,root);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (libs_to_show__$1,p__53646){
var vec__53651 = p__53646;
var library_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53651,(0),null);
var components = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53651,(1),null);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (libs_to_show__$2,component_id){
var library = cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries_STAR_,library_id);
var component = app.common.types.file.get_component.cljs$core$IFn$_invoke$arity$variadic(libraries_STAR_,library_id,component_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true], null)], 0));
var root__$1 = (cljs.core.truth_(component)?app.common.types.file.get_component_root(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library),component):null);
if((component == null)){
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cuerdas.core.format.cljs$core$IFn$_invoke$arity$variadic("(Cannot find component %s in library %s)",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([component_id,library_id], 0))], 0));

return libs_to_show__$2;
} else {
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(libs_to_show__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [library_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root__$1)], null)))){
return libs_to_show__$2;
} else {
return add_component(libs_to_show__$2,library_id,component_id);
}
}
}),libs_to_show__$1,components);
}),libs_to_show,sublibs_to_show);
});
var page = app.common.types.pages_list.get_page(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file),page_id);
var shape = app.common.types.shape_tree.get_shape(page,shape_id);
var root = (function (){var or__5025__auto__ = app.common.types.container.get_instance_root(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return shape;
}
})();
var libs_to_show = find_used_components_cumulative(cljs.core.PersistentArrayMap.EMPTY,page,root);
if((root == null)){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([["Cannot find shape ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape_id)].join('')], 0));
} else {
app.common.types.file.dump_page(page,file,libraries_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,new cljs.core.Keyword(null,"root-id","root-id",1294683809),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root)));

return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function app$common$types$file$dump_subtree_$_iter__53675(s__53676){
return (new cljs.core.LazySeq(null,(function (){
var s__53676__$1 = s__53676;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__53676__$1);
if(temp__5825__auto__){
var s__53676__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__53676__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__53676__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__53678 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__53677 = (0);
while(true){
if((i__53677 < size__5502__auto__)){
var vec__53686 = cljs.core._nth(c__5501__auto__,i__53677);
var library_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53686,(0),null);
var component_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53686,(1),null);
cljs.core.chunk_append(b__53678,(function (){var library = cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries_STAR_,library_id);
app.common.types.file.dump_library(library,file,libraries_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(flags,new cljs.core.Keyword(null,"only","only",1907811652),component_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true], 0)));

return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = ((function (i__53677,library,vec__53686,library_id,component_ids,c__5501__auto__,size__5502__auto__,b__53678,s__53676__$2,temp__5825__auto__,page,shape,root,libs_to_show,libraries_STAR_){
return (function app$common$types$file$dump_subtree_$_iter__53675_$_iter__53690(s__53691){
return (new cljs.core.LazySeq(null,((function (i__53677,library,vec__53686,library_id,component_ids,c__5501__auto__,size__5502__auto__,b__53678,s__53676__$2,temp__5825__auto__,page,shape,root,libs_to_show,libraries_STAR_){
return (function (){
var s__53691__$1 = s__53691;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__53691__$1);
if(temp__5825__auto____$1){
var s__53691__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53691__$2)){
var c__5501__auto____$1 = cljs.core.chunk_first(s__53691__$2);
var size__5502__auto____$1 = cljs.core.count(c__5501__auto____$1);
var b__53693 = cljs.core.chunk_buffer(size__5502__auto____$1);
if((function (){var i__53692 = (0);
while(true){
if((i__53692 < size__5502__auto____$1)){
var component_id = cljs.core._nth(c__5501__auto____$1,i__53692);
cljs.core.chunk_append(b__53693,(function (){var library__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries_STAR_,library_id);
var component = app.common.types.file.get_component.cljs$core$IFn$_invoke$arity$variadic(libraries_STAR_,library_id,component_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true], null)], 0));
var page__$1 = app.common.types.file.get_component_page(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library__$1),component);
var root__$1 = app.common.types.file.get_component_root(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library__$1),component);
if(cljs.core.truth_(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))){
return null;
} else {
cljs.core.println();

return app.common.types.file.dump_page(page__$1,file,libraries_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,new cljs.core.Keyword(null,"root-id","root-id",1294683809),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root__$1)));
}
})());

var G__53938 = (i__53692 + (1));
i__53692 = G__53938;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53693),app$common$types$file$dump_subtree_$_iter__53675_$_iter__53690(cljs.core.chunk_rest(s__53691__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53693),null);
}
} else {
var component_id = cljs.core.first(s__53691__$2);
return cljs.core.cons((function (){var library__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries_STAR_,library_id);
var component = app.common.types.file.get_component.cljs$core$IFn$_invoke$arity$variadic(libraries_STAR_,library_id,component_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true], null)], 0));
var page__$1 = app.common.types.file.get_component_page(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library__$1),component);
var root__$1 = app.common.types.file.get_component_root(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library__$1),component);
if(cljs.core.truth_(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))){
return null;
} else {
cljs.core.println();

return app.common.types.file.dump_page(page__$1,file,libraries_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,new cljs.core.Keyword(null,"root-id","root-id",1294683809),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root__$1)));
}
})(),app$common$types$file$dump_subtree_$_iter__53675_$_iter__53690(cljs.core.rest(s__53691__$2)));
}
} else {
return null;
}
break;
}
});})(i__53677,library,vec__53686,library_id,component_ids,c__5501__auto__,size__5502__auto__,b__53678,s__53676__$2,temp__5825__auto__,page,shape,root,libs_to_show,libraries_STAR_))
,null,null));
});})(i__53677,library,vec__53686,library_id,component_ids,c__5501__auto__,size__5502__auto__,b__53678,s__53676__$2,temp__5825__auto__,page,shape,root,libs_to_show,libraries_STAR_))
;
return iter__5503__auto__(component_ids);
})());
})());

var G__53939 = (i__53677 + (1));
i__53677 = G__53939;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53678),app$common$types$file$dump_subtree_$_iter__53675(cljs.core.chunk_rest(s__53676__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53678),null);
}
} else {
var vec__53698 = cljs.core.first(s__53676__$2);
var library_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53698,(0),null);
var component_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53698,(1),null);
return cljs.core.cons((function (){var library = cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries_STAR_,library_id);
app.common.types.file.dump_library(library,file,libraries_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(flags,new cljs.core.Keyword(null,"only","only",1907811652),component_ids,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true], 0)));

return cljs.core.dorun.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = ((function (library,vec__53698,library_id,component_ids,s__53676__$2,temp__5825__auto__,page,shape,root,libs_to_show,libraries_STAR_){
return (function app$common$types$file$dump_subtree_$_iter__53675_$_iter__53701(s__53702){
return (new cljs.core.LazySeq(null,(function (){
var s__53702__$1 = s__53702;
while(true){
var temp__5825__auto____$1 = cljs.core.seq(s__53702__$1);
if(temp__5825__auto____$1){
var s__53702__$2 = temp__5825__auto____$1;
if(cljs.core.chunked_seq_QMARK_(s__53702__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__53702__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__53704 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__53703 = (0);
while(true){
if((i__53703 < size__5502__auto__)){
var component_id = cljs.core._nth(c__5501__auto__,i__53703);
cljs.core.chunk_append(b__53704,(function (){var library__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries_STAR_,library_id);
var component = app.common.types.file.get_component.cljs$core$IFn$_invoke$arity$variadic(libraries_STAR_,library_id,component_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true], null)], 0));
var page__$1 = app.common.types.file.get_component_page(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library__$1),component);
var root__$1 = app.common.types.file.get_component_root(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library__$1),component);
if(cljs.core.truth_(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))){
return null;
} else {
cljs.core.println();

return app.common.types.file.dump_page(page__$1,file,libraries_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,new cljs.core.Keyword(null,"root-id","root-id",1294683809),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root__$1)));
}
})());

var G__53940 = (i__53703 + (1));
i__53703 = G__53940;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__53704),app$common$types$file$dump_subtree_$_iter__53675_$_iter__53701(cljs.core.chunk_rest(s__53702__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__53704),null);
}
} else {
var component_id = cljs.core.first(s__53702__$2);
return cljs.core.cons((function (){var library__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries_STAR_,library_id);
var component = app.common.types.file.get_component.cljs$core$IFn$_invoke$arity$variadic(libraries_STAR_,library_id,component_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true], null)], 0));
var page__$1 = app.common.types.file.get_component_page(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library__$1),component);
var root__$1 = app.common.types.file.get_component_root(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(library__$1),component);
if(cljs.core.truth_(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))){
return null;
} else {
cljs.core.println();

return app.common.types.file.dump_page(page__$1,file,libraries_STAR_,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(flags,new cljs.core.Keyword(null,"root-id","root-id",1294683809),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root__$1)));
}
})(),app$common$types$file$dump_subtree_$_iter__53675_$_iter__53701(cljs.core.rest(s__53702__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});})(library,vec__53698,library_id,component_ids,s__53676__$2,temp__5825__auto__,page,shape,root,libs_to_show,libraries_STAR_))
;
return iter__5503__auto__(component_ids);
})());
})(),app$common$types$file$dump_subtree_$_iter__53675(cljs.core.rest(s__53676__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(libs_to_show);
})());
}
});
app.common.types.file.get_component_ref_file = (function app$common$types$file$get_component_ref_file(objects,shape){
while(true){
if(cljs.core.contains_QMARK_(shape,new cljs.core.Keyword(null,"component-file","component-file",-1378670433))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"component-file","component-file",-1378670433));
} else {
if(cljs.core.contains_QMARK_(shape,new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329))){
var G__53941 = objects;
var G__53942 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
objects = G__53941;
shape = G__53942;
continue;
} else {
return null;

}
}
break;
}
});
app.common.types.file.detach_external_references = (function app$common$types$file$detach_external_references(file,file_id){
var detach_text = (function (content){
return app.common.types.text.transform_nodes.cljs$core$IFn$_invoke$arity$2((function (p1__53712_SHARP_){
var G__53716 = p1__53712_SHARP_;
var G__53716__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255).cljs$core$IFn$_invoke$arity$1(p1__53712_SHARP_)))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53716,new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255)], 0)):G__53716);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688).cljs$core$IFn$_invoke$arity$1(p1__53712_SHARP_))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53716__$1,new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688)], 0));
} else {
return G__53716__$1;
}
}),content);
});
var detach_shape = (function (objects,shape){
var shape_SINGLEQUOTE_ = (function (){var G__53717 = shape;
var G__53717__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255).cljs$core$IFn$_invoke$arity$1(shape)))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53717,new cljs.core.Keyword(null,"fill-color-ref-id","fill-color-ref-id",-1755428098),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"fill-color-ref-file","fill-color-ref-file",-952903255)], 0)):G__53717);
var G__53717__$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"stroke-color-ref-file","stroke-color-ref-file",2014652279).cljs$core$IFn$_invoke$arity$1(shape)))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53717__$1,new cljs.core.Keyword(null,"stroke-color-ref-id","stroke-color-ref-id",1785439761),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stroke-color-ref-file","stroke-color-ref-file",2014652279)], 0)):G__53717__$1);
var G__53717__$3 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file_id,app.common.types.file.get_component_ref_file(objects,shape)))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(G__53717__$2,new cljs.core.Keyword(null,"component-id","component-id",1551113783),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"component-file","component-file",-1378670433),new cljs.core.Keyword(null,"shape-ref","shape-ref",-780361329),new cljs.core.Keyword(null,"component-root","component-root",-485271026)], 0)):G__53717__$2);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__53717__$3,new cljs.core.Keyword(null,"content","content",15833224),detach_text);
} else {
return G__53717__$3;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(shape,shape_SINGLEQUOTE_)){
if(app.common.logging.enabled_QMARK_("app.common.types.file",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"detach shape"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_id)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))], null)], null);
}),null)),null,null,"app.common.types.file",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}

} else {
}

return shape_SINGLEQUOTE_;
});
var detach_objects = (function (objects){
return app.common.data.update_vals(objects,(function (p1__53714_SHARP_){
return detach_shape(objects,p1__53714_SHARP_);
}));
});
var detach_pages = (function (pages_index){
return app.common.data.update_vals(pages_index,(function (p1__53715_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(p1__53715_SHARP_,new cljs.core.Keyword(null,"objects","objects",2099713734),detach_objects);
}));
});
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(file,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145)], null),detach_pages);
});
/**
 * Retrieve the base font size value or token reference.
 */
app.common.types.file.get_base_font_size = (function app$common$types$file$get_base_font_size(file_data){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(file_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"base-font-size","base-font-size",-701078258)], null),app.common.types.file.BASE_FONT_SIZE);
});
app.common.types.file.set_base_font_size = (function app$common$types$file$set_base_font_size(file_data,base_font_size){
return cljs.core.assoc_in(file_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"options","options",99638489),new cljs.core.Keyword(null,"base-font-size","base-font-size",-701078258)], null),base_font_size);
});
/**
 * Returns a vector with the shape ref chain until target-ref, including itself
 */
app.common.types.file.get_ref_chain_until_target_ref = (function app$common$types$file$get_ref_chain_until_target_ref(container,libraries,shape,target_ref){
var chain = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null);
var current = shape;
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,target_ref)){
return chain;
} else {
var temp__5823__auto__ = app.common.types.file.find_ref_shape.cljs$core$IFn$_invoke$arity$variadic(null,container,libraries,current,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"with-context?","with-context?",-56752853),true], 0));
if(cljs.core.truth_(temp__5823__auto__)){
var ref = temp__5823__auto__;
var G__53945 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(chain,ref);
var G__53946 = ref;
chain = G__53945;
current = G__53946;
continue;
} else {
return chain;
}
}
break;
}
});
/**
 * Returns a set with the :touched of all the items on the shape
 * ref chain until target-ref, including itself
 */
app.common.types.file.get_touched_from_ref_chain_until_target_ref = (function app$common$types$file$get_touched_from_ref_chain_until_target_ref(container,libraries,shape,target_ref){
var chain = app.common.types.file.get_ref_chain_until_target_ref(container,libraries,shape,target_ref);
var more_touched = cljs.core.set(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.common.types.component.swap_slot_QMARK_,cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.set.union,cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"touched","touched",-609134419),chain)))));
return clojure.set.union.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})(),more_touched);
});

//# sourceMappingURL=app.common.types.file.js.map
