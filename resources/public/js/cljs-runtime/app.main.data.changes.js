import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes.js";
import "./app.common.logging.js";
import "./app.common.time.js";
import "./app.common.types.shape.js";
import "./app.common.types.shape_tree.js";
import "./app.common.uuid.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.features.js";
import "./app.main.worker.js";
import "./app.render_wasm.shape.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.changes');
app.common.logging.loggers.set("app.main.data.changes",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"info","info",-317069002)));
app.main.data.changes.page_change_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"del-page","del-page",-1821214846),null,new cljs.core.Keyword(null,"mov-page","mov-page",799279210),null,new cljs.core.Keyword(null,"mod-page","mod-page",1847006799),null,new cljs.core.Keyword(null,"add-page","add-page",304111762),null], null), null);
app.main.data.changes.update_layout_attr_QMARK_ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"hidden","hidden",-312506092),null], null), null);
app.main.data.changes.commit_QMARK_ = potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.changes","commit","app.main.data.changes/commit",-1518621522));
/**
 * For events that modifies the page, page-id does not comes
 *   as a property so we assign it from the `id` property.
 */
app.main.data.changes.fix_page_id = (function app$main$data$changes$fix_page_id(p__37944){
var map__37945 = p__37944;
var map__37945__$1 = cljs.core.__destructure_map(map__37945);
var change = map__37945__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37945__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37945__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37945__$1,new cljs.core.Keyword(null,"page","page",849072397));
var G__37949 = change;
if(cljs.core.truth_((function (){var and__5023__auto__ = (app.main.data.changes.page_change_QMARK_.cljs$core$IFn$_invoke$arity$1 ? app.main.data.changes.page_change_QMARK_.cljs$core$IFn$_invoke$arity$1(type) : app.main.data.changes.page_change_QMARK_.call(null,type));
if(cljs.core.truth_(and__5023__auto__)){
return (new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(change) == null);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__37949,new cljs.core.Keyword(null,"page-id","page-id",-872941168),(function (){var or__5025__auto__ = id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page);
}
})());
} else {
return G__37949;
}
});
/**
 * Given a commit, send the changes to the worker for updating the
 *   indexes.
 */
app.main.data.changes.update_indexes = (function app$main$data$changes$update_indexes(commit,attr){
if((typeof app.main.data.changes.update_indexes_37950 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.changes.update_indexes_37950 = (function (commit,attr,meta37951){
this.commit = commit;
this.attr = attr;
this.meta37951 = meta37951;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.changes.update_indexes_37950.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.changes.update_indexes_37950.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.changes","update-indexes","app.main.data.changes/update-indexes",-1023381144);
}));

(app.main.data.changes.update_indexes_37950.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37952,meta37951__$1){
var self__ = this;
var _37952__$1 = this;
return (new app.main.data.changes.update_indexes_37950(self__.commit,self__.attr,meta37951__$1));
}));

(app.main.data.changes.update_indexes_37950.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37952){
var self__ = this;
var _37952__$1 = this;
return self__.meta37951;
}));

(app.main.data.changes.update_indexes_37950.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.changes.update_indexes_37950.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var changes = cljs.core.group_by(new cljs.core.Keyword(null,"page-id","page-id",-872941168),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page-id","page-id",-872941168),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.data.changes.fix_page_id,cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.commit,self__.attr))));
return beicon.v2.core.ignore(beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (cause){
if(app.common.logging.enabled_QMARK_("app.main.data.changes",new cljs.core.Keyword(null,"warn","warn",-436710552))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"unable to update index"], null)], null);
}),null)),cause,null,"app.main.data.changes",new cljs.core.Keyword(null,"warn","warn",-436710552),false);
} else {
}


return beicon.v2.core.empty();
}),beicon.v2.core.merge_map((function (p__37957){
var vec__37958 = p__37957;
var page_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37958,(0),null);
var changes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__37958,(1),null);
if(app.common.logging.enabled_QMARK_("app.main.data.changes",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"update-indexes"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changes","changes",1492088),cljs.core.count(changes__$1)], null)], null);
}),null)),null,null,"app.main.data.changes",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.main.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword("index","update","index/update",945065946),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"changes","changes",1492088),changes__$1], null));
}),beicon.v2.core.from(changes))));
}));
}

return (new app.main.data.changes.update_indexes_37950(commit,attr,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.changes.get_pending_commits = (function app$main$data$changes$get_pending_commits(p__37962){
var map__37963 = p__37962;
var map__37963__$1 = cljs.core.__destructure_map(map__37963);
var persistence = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37963__$1,new cljs.core.Keyword(null,"persistence","persistence",-203044807));
return cljs.core.not_empty(cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(persistence)),new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(persistence)));
});
app.main.data.changes.xf_COLON_map_page_id = cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"page-id","page-id",-872941168));
app.main.data.changes.apply_changes_localy = (function app$main$data$changes$apply_changes_localy(p__37971,pending){
var map__37972 = p__37971;
var map__37972__$1 = cljs.core.__destructure_map(map__37972);
var commit = map__37972__$1;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37972__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var redo_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37972__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824));
var ignore_wasm_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37972__$1,new cljs.core.Keyword(null,"ignore-wasm?","ignore-wasm?",-324568531));
if((typeof app.main.data.changes.apply_changes_localy_37973 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.changes.apply_changes_localy_37973 = (function (p__37971,pending,map__37972,commit,file_id,redo_changes,ignore_wasm_QMARK_,meta37974){
this.p__37971 = p__37971;
this.pending = pending;
this.map__37972 = map__37972;
this.commit = commit;
this.file_id = file_id;
this.redo_changes = redo_changes;
this.ignore_wasm_QMARK_ = ignore_wasm_QMARK_;
this.meta37974 = meta37974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.changes.apply_changes_localy_37973.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.changes.apply_changes_localy_37973.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.changes","apply-changes-localy","app.main.data.changes/apply-changes-localy",71562413);
}));

(app.main.data.changes.apply_changes_localy_37973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37975,meta37974__$1){
var self__ = this;
var _37975__$1 = this;
return (new app.main.data.changes.apply_changes_localy_37973(self__.p__37971,self__.pending,self__.map__37972,self__.commit,self__.file_id,self__.redo_changes,self__.ignore_wasm_QMARK_,meta37974__$1));
}));

(app.main.data.changes.apply_changes_localy_37973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37975){
var self__ = this;
var _37975__$1 = this;
return self__.meta37974;
}));

(app.main.data.changes.apply_changes_localy_37973.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.changes.apply_changes_localy_37973.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var undo_changes = (cljs.core.truth_(self__.pending)?cljs.core.vec(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.identity,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.reverse(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),self__.pending))], 0))):null);
var redo_changes__$1 = (cljs.core.truth_(self__.pending)?cljs.core.into.cljs$core$IFn$_invoke$arity$3(self__.redo_changes,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824)),self__.pending):self__.redo_changes);
var apply_changes = (function (fdata){
var fdata__$1 = app.common.files.changes.process_changes.cljs$core$IFn$_invoke$arity$3(fdata,undo_changes,false);
var fdata__$2 = app.common.files.changes.process_changes.cljs$core$IFn$_invoke$arity$3(fdata__$1,redo_changes__$1,false);
var pids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,app.main.data.changes.xf_COLON_map_page_id,redo_changes__$1);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__37964_SHARP_,p2__37965_SHARP_){
return app.common.types.shape_tree.update_object_indices(p1__37964_SHARP_,p2__37965_SHARP_);
}),fdata__$2,pids);
});
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(self__.ignore_wasm_QMARK_);
if(and__5023__auto__){
return app.main.features.active_feature_QMARK_(state,"render-wasm/v1");
} else {
return and__5023__auto__;
}
})())){
var shape_changes = cljs.core.volatile_BANG_(cljs.core.PersistentArrayMap.EMPTY);
var state__$1 = (function (){var _STAR_shape_changes_STAR__orig_val__37980 = app.common.types.shape._STAR_shape_changes_STAR_;
var _STAR_shape_changes_STAR__temp_val__37981 = shape_changes;
(app.common.types.shape._STAR_shape_changes_STAR_ = _STAR_shape_changes_STAR__temp_val__37981);

try{return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),self__.file_id,new cljs.core.Keyword(null,"data","data",-232669377)], null),apply_changes);
}finally {(app.common.types.shape._STAR_shape_changes_STAR_ = _STAR_shape_changes_STAR__orig_val__37980);
}})();
var objects_38031 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.Keyword(null,"files","files",-472457450)),self__.file_id),new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145)),new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state__$1)),new cljs.core.Keyword(null,"objects","objects",2099713734));
app.render_wasm.shape.process_shape_changes_BANG_(objects_38031,cljs.core.deref(shape_changes));

return state__$1;
} else {
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"files","files",-472457450),self__.file_id,new cljs.core.Keyword(null,"data","data",-232669377)], null),apply_changes);
}
}));
}

return (new app.main.data.changes.apply_changes_localy_37973(p__37971,pending,map__37972__$1,commit,file_id,redo_changes,ignore_wasm_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Create a commit event instance
 */
app.main.data.changes.commit = (function app$main$data$changes$commit(p__37986){
var map__37987 = p__37986;
var map__37987__$1 = cljs.core.__destructure_map(map__37987);
var undo_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846));
var file_revn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"file-revn","file-revn",1919013210));
var save_undo_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853));
var undo_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692));
var stack_undo_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"stack-undo?","stack-undo?",1633924062));
var features__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"features","features",-1146962336));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var file_vern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"file-vern","file-vern",336101510));
var ignore_wasm_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"ignore-wasm?","ignore-wasm?",-324568531));
var source = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"source","source",-433931539));
var redo_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824));
var commit_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"commit-id","commit-id",480429844));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37987__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
if(cljs.core.truth_(app.common.files.changes.check_changes(redo_changes))){
} else {
throw (new Error(["Assert failed: ","expect valid vector of changes for redo-changes","\n","(cpc/check-changes redo-changes)"].join('')));
}

if(cljs.core.truth_(app.common.files.changes.check_changes(undo_changes))){
} else {
throw (new Error(["Assert failed: ","expect valid vector of changes for undo-changes","\n","(cpc/check-changes undo-changes)"].join('')));
}

var commit_id__$1 = (function (){var or__5025__auto__ = commit_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.uuid.next();
}
})();
var source__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(source,new cljs.core.Keyword(null,"local","local",-1497766724));
var local_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(source__$1,new cljs.core.Keyword(null,"local","local",-1497766724));
var commit = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"file-vern","file-vern",336101510),new cljs.core.Keyword(null,"ignore-wasm?","ignore-wasm?",-324568531),new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"file-revn","file-revn",1919013210),new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),new cljs.core.Keyword(null,"stack-undo?","stack-undo?",1633924062)],[features__$1,tags,file_id,file_vern,ignore_wasm_QMARK_,source__$1,redo_changes,commit_id__$1,redo_changes,potok.v2.core.type(origin),file_revn,undo_group,save_undo_QMARK_,app.common.time.now(),undo_changes,stack_undo_QMARK_]);
if((typeof app.main.data.changes.commit_37992 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.changes.commit_37992 = (function (undo_group,file_revn,save_undo_QMARK_,undo_changes,stack_undo_QMARK_,features,tags,map__37987,file_id,file_vern,local_QMARK_,ignore_wasm_QMARK_,source,redo_changes,commit_id,commit,p__37986,origin,meta37993){
this.undo_group = undo_group;
this.file_revn = file_revn;
this.save_undo_QMARK_ = save_undo_QMARK_;
this.undo_changes = undo_changes;
this.stack_undo_QMARK_ = stack_undo_QMARK_;
this.features = features;
this.tags = tags;
this.map__37987 = map__37987;
this.file_id = file_id;
this.file_vern = file_vern;
this.local_QMARK_ = local_QMARK_;
this.ignore_wasm_QMARK_ = ignore_wasm_QMARK_;
this.source = source;
this.redo_changes = redo_changes;
this.commit_id = commit_id;
this.commit = commit;
this.p__37986 = p__37986;
this.origin = origin;
this.meta37993 = meta37993;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.changes.commit_37992.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.changes.commit_37992.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.changes","commit","app.main.data.changes/commit",-1518621522);
}));

(app.main.data.changes.commit_37992.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37994,meta37993__$1){
var self__ = this;
var _37994__$1 = this;
return (new app.main.data.changes.commit_37992(self__.undo_group,self__.file_revn,self__.save_undo_QMARK_,self__.undo_changes,self__.stack_undo_QMARK_,self__.features,self__.tags,self__.map__37987,self__.file_id,self__.file_vern,self__.local_QMARK_,self__.ignore_wasm_QMARK_,self__.source,self__.redo_changes,self__.commit_id,self__.commit,self__.p__37986,self__.origin,meta37993__$1));
}));

(app.main.data.changes.commit_37992.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37994){
var self__ = this;
var _37994__$1 = this;
return self__.meta37993;
}));

(app.main.data.changes.commit_37992.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.commit;
}));

(app.main.data.changes.commit_37992.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.changes.commit_37992.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var pending = (cljs.core.truth_(self__.local_QMARK_)?null:app.main.data.changes.get_pending_commits(state));
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.changes.apply_changes_localy(self__.commit,pending)),(cljs.core.truth_(pending)?beicon.v2.core.concat(beicon.v2.core.map((function (commit__$1){
return app.main.data.changes.update_indexes(commit__$1,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692));
}),beicon.v2.core.from(cljs.core.reverse(pending))),beicon.v2.core.of(app.main.data.changes.update_indexes(self__.commit,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824))),beicon.v2.core.map((function (commit__$1){
return app.main.data.changes.update_indexes(commit__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824));
}),beicon.v2.core.from(pending))):beicon.v2.core.of(app.main.data.changes.update_indexes(self__.commit,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824)))));
}));
}

return (new app.main.data.changes.commit_37992(undo_group,file_revn,save_undo_QMARK_,undo_changes,stack_undo_QMARK_,features__$1,tags,map__37987__$1,file_id,file_vern,local_QMARK_,ignore_wasm_QMARK_,source__$1,redo_changes,commit_id__$1,commit,p__37986,origin,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.changes.resolve_file_revn = (function app$main$data$changes$resolve_file_revn(state,file_id){
return new cljs.core.Keyword(null,"revn","revn",-633391765).cljs$core$IFn$_invoke$arity$1(app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$2(state,file_id));
});
app.main.data.changes.resolve_file_vern = (function app$main$data$changes$resolve_file_vern(state,file_id){
return new cljs.core.Keyword(null,"vern","vern",2071435888).cljs$core$IFn$_invoke$arity$1(app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$2(state,file_id));
});
/**
 * Schedules a list of changes to execute now, and add the corresponding undo changes to
 * the undo stack.
 * 
 * Options:
 * - save-undo?: if set to false, do not add undo changes.
 * - undo-group: if some consecutive changes (or even transactions) share the same
 *               undo-group, they will be undone or redone in a single step
 * 
 */
app.main.data.changes.commit_changes = (function app$main$data$changes$commit_changes(p__38001){
var map__38002 = p__38001;
var map__38002__$1 = cljs.core.__destructure_map(map__38002);
var params = map__38002__$1;
var redo_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38002__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824));
var undo_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38002__$1,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692));
var save_undo_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38002__$1,new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),true);
var undo_group = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38002__$1,new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),app.common.uuid.next());
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38002__$1,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.PersistentHashSet.EMPTY);
var stack_undo_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__38002__$1,new cljs.core.Keyword(null,"stack-undo?","stack-undo?",1633924062),false);
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38002__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
if((typeof app.main.data.changes.commit_changes_38005 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {app.main.data.event.PerformanceEvent}
 * @implements {potok.v2.core.Event}
*/
app.main.data.changes.commit_changes_38005 = (function (undo_group,map__38002,save_undo_QMARK_,undo_changes,p__38001,stack_undo_QMARK_,tags,file_id,params,redo_changes,meta38006){
this.undo_group = undo_group;
this.map__38002 = map__38002;
this.save_undo_QMARK_ = save_undo_QMARK_;
this.undo_changes = undo_changes;
this.p__38001 = p__38001;
this.stack_undo_QMARK_ = stack_undo_QMARK_;
this.tags = tags;
this.file_id = file_id;
this.params = params;
this.redo_changes = redo_changes;
this.meta38006 = meta38006;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.changes.commit_changes_38005.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.changes.commit_changes_38005.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.changes","commit-changes","app.main.data.changes/commit-changes",1277456228);
}));

(app.main.data.changes.commit_changes_38005.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38007,meta38006__$1){
var self__ = this;
var _38007__$1 = this;
return (new app.main.data.changes.commit_changes_38005(self__.undo_group,self__.map__38002,self__.save_undo_QMARK_,self__.undo_changes,self__.p__38001,self__.stack_undo_QMARK_,self__.tags,self__.file_id,self__.params,self__.redo_changes,meta38006__$1));
}));

(app.main.data.changes.commit_changes_38005.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38007){
var self__ = this;
var _38007__$1 = this;
return self__.meta38006;
}));

(app.main.data.changes.commit_changes_38005.prototype.app$main$data$event$PerformanceEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.changes.commit_changes_38005.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.changes.commit_changes_38005.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var file_id__$1 = (function (){var or__5025__auto__ = self__.file_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
}
})();
var uchg = cljs.core.vec(self__.undo_changes);
var rchg = cljs.core.vec(self__.redo_changes);
var features__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"features","features",-1146962336));
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"permissions","permissions",67803075));
if(cljs.core.truth_(new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(permissions))){
return beicon.v2.core.of(app.main.data.changes.commit(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.params,new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),self__.undo_group),new cljs.core.Keyword(null,"features","features",-1146962336),features__$1),new cljs.core.Keyword(null,"tags","tags",1771418977),self__.tags),new cljs.core.Keyword(null,"stack-undo?","stack-undo?",1633924062),self__.stack_undo_QMARK_),new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),self__.save_undo_QMARK_),new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id__$1),new cljs.core.Keyword(null,"file-revn","file-revn",1919013210),app.main.data.changes.resolve_file_revn(state,file_id__$1)),new cljs.core.Keyword(null,"file-vern","file-vern",336101510),app.main.data.changes.resolve_file_vern(state,file_id__$1)),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),uchg),new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),rchg)));
} else {
return null;
}
}));
}

return (new app.main.data.changes.commit_changes_38005(undo_group,map__38002__$1,save_undo_QMARK_,undo_changes,p__38001,stack_undo_QMARK_,tags,file_id,params,redo_changes,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.changes.js.map
