import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.schema.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.repo.js";
import "./app.util.sse.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.exports.files');
app.main.data.exports.files.valid_types = app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"all","all",892129742),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"merge","merge",-1804319409),new cljs.core.Keyword(null,"detach","detach",-1092200572)], 0));
app.main.data.exports.files.valid_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"binfile-v1","binfile-v1",1008484704),null,new cljs.core.Keyword(null,"legacy-zip","legacy-zip",1673362658),null,new cljs.core.Keyword(null,"binfile-v3","binfile-v3",-2038359825),null], null), null);
app.main.data.exports.files.schema_COLON_export_files = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Files"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"FileParam"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-shared","is-shared",2126511925),new cljs.core.Keyword("app.common.schema","boolean","app.common.schema/boolean",-727386221)], null)], null)], null);
app.main.data.exports.files.check_export_files = app.common.schema.check_fn(app.main.data.exports.files.schema_COLON_export_files);
app.main.data.exports.files.open_export_dialog = (function app$main$data$exports$files$open_export_dialog(files){
var files__$1 = app.main.data.exports.files.check_export_files(files);
if((typeof app.main.data.exports.files.export_files_73063 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.exports.files.export_files_73063 = (function (files,meta73064){
this.files = files;
this.meta73064 = meta73064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.exports.files.export_files_73063.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.files.export_files_73063.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.exports.files","export-files","app.main.data.exports.files/export-files",1145324384);
}));

(app.main.data.exports.files.export_files_73063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73065,meta73064__$1){
var self__ = this;
var _73065__$1 = this;
return (new app.main.data.exports.files.export_files_73063(self__.files,meta73064__$1));
}));

(app.main.data.exports.files.export_files_73063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73065){
var self__ = this;
var _73065__$1 = this;
return self__.meta73064;
}));

(app.main.data.exports.files.export_files_73063.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.files.export_files_73063.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995));
return beicon.v2.core.merge(beicon.v2.core.of(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"export-binary-files",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard",new cljs.core.Keyword(null,"format","format",-1306924766),"binfile-v3",new cljs.core.Keyword(null,"num-files","num-files",1227997359),cljs.core.count(self__.files)], null))),beicon.v2.core.map((function (files__$1){
return app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.main.data.exports.files","export-files","app.main.data.exports.files/export-files",1145324384),new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"files","files",-472457450),files__$1], null));
}),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,beicon.v2.core.mapcat((function (file){
return beicon.v2.core.map((function (p1__73058_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file,new cljs.core.Keyword(null,"has-libraries","has-libraries",1869731297),p1__73058_SHARP_);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"has-file-libraries","has-file-libraries",183957263),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file)], null)));
}),beicon.v2.core.from(self__.files)))));
}));
}

return (new app.main.data.exports.files.export_files_73063(files__$1,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.exports.files.export_files = (function app$main$data$exports$files$export_files(var_args){
var args__5755__auto__ = [];
var len__5749__auto___73091 = arguments.length;
var i__5750__auto___73092 = (0);
while(true){
if((i__5750__auto___73092 < len__5749__auto___73091)){
args__5755__auto__.push((arguments[i__5750__auto___73092]));

var G__73093 = (i__5750__auto___73092 + (1));
i__5750__auto___73092 = G__73093;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.data.exports.files.export_files.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.data.exports.files.export_files.cljs$core$IFn$_invoke$arity$variadic = (function (p__73075){
var map__73080 = p__73075;
var map__73080__$1 = cljs.core.__destructure_map(map__73080);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73080__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73080__$1,new cljs.core.Keyword(null,"files","files",-472457450));
return beicon.v2.core.mapcat((function (file){
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (cause){
var error = cljs.core.ex_data(cause);
return beicon.v2.core.of(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"error","error",-978969032),error], null));
}),beicon.v2.core.map((function (uri){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"uri","uri",-774711847),uri,new cljs.core.Keyword(null,"filename","filename",-1428840783),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file)], null);
}),beicon.v2.core.map(app.util.sse.get_payload,beicon.v2.core.filter(app.util.sse.end_of_stream_QMARK_,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.util.sse","export-binfile","app.util.sse/export-binfile",-1934301614),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file),new cljs.core.Keyword(null,"version","version",425292698),(3),new cljs.core.Keyword(null,"include-libraries","include-libraries",1396501919),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"all","all",892129742)),new cljs.core.Keyword(null,"embed-assets","embed-assets",76615105),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"merge","merge",-1804319409))], null))))));
}),beicon.v2.core.from(files));
}));

(app.main.data.exports.files.export_files.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.data.exports.files.export_files.cljs$lang$applyTo = (function (seq73072){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73072));
}));

app.main.data.exports.files.create_team_access_request = (function app$main$data$exports$files$create_team_access_request(params){
if((typeof app.main.data.exports.files.create_team_access_request_73081 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.exports.files.create_team_access_request_73081 = (function (params,meta73082){
this.params = params;
this.meta73082 = meta73082;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.exports.files.create_team_access_request_73081.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.files.create_team_access_request_73081.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.exports.files","create-team-access-request","app.main.data.exports.files/create-team-access-request",1798431377);
}));

(app.main.data.exports.files.create_team_access_request_73081.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73083,meta73082__$1){
var self__ = this;
var _73083__$1 = this;
return (new app.main.data.exports.files.create_team_access_request_73081(self__.params,meta73082__$1));
}));

(app.main.data.exports.files.create_team_access_request_73081.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73083){
var self__ = this;
var _73083__$1 = this;
return self__.meta73082;
}));

(app.main.data.exports.files.create_team_access_request_73081.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.exports.files.create_team_access_request_73081.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__73084 = cljs.core.meta(self__.params);
var map__73084__$1 = cljs.core.__destructure_map(map__73084);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73084__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73084__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-team-access-request","create-team-access-request",1803920101),self__.params)));
}));
}

return (new app.main.data.exports.files.create_team_access_request_73081(params,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.exports.files.js.map
