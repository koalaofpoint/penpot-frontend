import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.logging.js";
import "./app.common.uuid.js";
import "./app.main.data.changes.js";
import "./app.main.data.helpers.js";
import "./app.main.repo.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.persistence');
app.common.logging.loggers.set("app.main.data.persistence",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"warn","warn",-436710552)));
app.main.data.persistence.running = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(false);
app.main.data.persistence.revn_data = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
app.main.data.persistence.queue_conj = cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentQueue.EMPTY,cljs.core.PersistentVector.EMPTY));
app.main.data.persistence.force_persist_QMARK_ = (function app$main$data$persistence$force_persist_QMARK_(p1__38062_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__38062_SHARP_,new cljs.core.Keyword("app.main.data.persistence","force-persist","app.main.data.persistence/force-persist",-1937686199));
});
app.main.data.persistence.update_status = (function app$main$data$persistence$update_status(status){
if((typeof app.main.data.persistence.update_status_38063 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.persistence.update_status_38063 = (function (status,meta38064){
this.status = status;
this.meta38064 = meta38064;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.persistence.update_status_38063.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.persistence.update_status_38063.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.persistence","update-status","app.main.data.persistence/update-status",1791929606);
}));

(app.main.data.persistence.update_status_38063.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38065,meta38064__$1){
var self__ = this;
var _38065__$1 = this;
return (new app.main.data.persistence.update_status_38063(self__.status,meta38064__$1));
}));

(app.main.data.persistence.update_status_38063.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38065){
var self__ = this;
var _38065__$1 = this;
return self__.meta38064;
}));

(app.main.data.persistence.update_status_38063.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.persistence.update_status_38063.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"persistence","persistence",-203044807),(function (pstate){
if(app.common.logging.enabled_QMARK_("app.main.data.persistence",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"update-status"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"from","from",1815293044),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(pstate)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"to","to",192099007),self__.status], null)], null);
}),null)),null,null,"app.main.data.persistence",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


var status__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.status,new cljs.core.Keyword(null,"pending","pending",-220036727))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(pstate),new cljs.core.Keyword(null,"saving","saving",-567560703)))))?new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(pstate):self__.status);
var G__38077 = (function (){var G__38078 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(pstate,new cljs.core.Keyword(null,"status","status",-1997798413),status__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status__$1,new cljs.core.Keyword(null,"error","error",-978969032))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38078,new cljs.core.Keyword(null,"run-id","run-id",-1745267908));
} else {
return G__38078;
}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status__$1,new cljs.core.Keyword(null,"saved","saved",288760660))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__38077,new cljs.core.Keyword(null,"run-id","run-id",-1745267908));
} else {
return G__38077;
}
}));
}));
}

return (new app.main.data.persistence.update_status_38063(status,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.persistence.update_file_revn = (function app$main$data$persistence$update_file_revn(file_id,revn){
if((typeof app.main.data.persistence.update_file_revn_38091 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.persistence.update_file_revn_38091 = (function (file_id,revn,meta38092){
this.file_id = file_id;
this.revn = revn;
this.meta38092 = meta38092;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.persistence.update_file_revn_38091.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.persistence.update_file_revn_38091.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.persistence","update-file-revn","app.main.data.persistence/update-file-revn",-1294196592);
}));

(app.main.data.persistence.update_file_revn_38091.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38093,meta38092__$1){
var self__ = this;
var _38093__$1 = this;
return (new app.main.data.persistence.update_file_revn_38091(self__.file_id,self__.revn,meta38092__$1));
}));

(app.main.data.persistence.update_file_revn_38091.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38093){
var self__ = this;
var _38093__$1 = this;
return self__.meta38092;
}));

(app.main.data.persistence.update_file_revn_38091.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.persistence.update_file_revn_38091.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(app.common.logging.enabled_QMARK_("app.main.data.persistence",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"update-file-revn"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),""+(self__.file_id ?? "")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"revn","revn",-633391765),self__.revn], null)], null);
}),null)),null,null,"app.main.data.persistence",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.main.data.helpers.update_file.cljs$core$IFn$_invoke$arity$3(state,self__.file_id,(function (p1__38090_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__38090_SHARP_,new cljs.core.Keyword(null,"revn","revn",-633391765),cljs.core.max,self__.revn);
}));
}));

(app.main.data.persistence.update_file_revn_38091.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.persistence.update_file_revn_38091.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.persistence.revn_data,cljs.core.update,self__.file_id,cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.max,(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.revn], 0));
}));
}

return (new app.main.data.persistence.update_file_revn_38091(file_id,revn,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.persistence.discard_commit = (function app$main$data$persistence$discard_commit(commit_id){
if((typeof app.main.data.persistence.discard_commit_38113 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.persistence.discard_commit_38113 = (function (commit_id,meta38114){
this.commit_id = commit_id;
this.meta38114 = meta38114;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.persistence.discard_commit_38113.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.persistence.discard_commit_38113.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.persistence","discard-commit","app.main.data.persistence/discard-commit",553409677);
}));

(app.main.data.persistence.discard_commit_38113.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38115,meta38114__$1){
var self__ = this;
var _38115__$1 = this;
return (new app.main.data.persistence.discard_commit_38113(self__.commit_id,meta38114__$1));
}));

(app.main.data.persistence.discard_commit_38113.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38115){
var self__ = this;
var _38115__$1 = this;
return self__.meta38114;
}));

(app.main.data.persistence.discard_commit_38113.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.persistence.discard_commit_38113.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"persistence","persistence",-203044807),(function (pstate){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$3(pstate,new cljs.core.Keyword(null,"queue","queue",1455835879),(function (queue){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.commit_id,cljs.core.peek(queue))){
return cljs.core.pop(queue);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid state",cljs.core.PersistentArrayMap.EMPTY);
}
})),new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.dissoc,self__.commit_id);
}));
}));
}

return (new app.main.data.persistence.discard_commit_38113(commit_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Event used internally to append the current change to the
 *   persistence queue.
 */
app.main.data.persistence.append_commit = (function app$main$data$persistence$append_commit(p__38120){
var map__38121 = p__38120;
var map__38121__$1 = cljs.core.__destructure_map(map__38121);
var commit = map__38121__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38121__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var run_id = app.common.uuid.next();
if((typeof app.main.data.persistence.append_commit_38125 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.persistence.append_commit_38125 = (function (p__38120,map__38121,commit,id,run_id,meta38126){
this.p__38120 = p__38120;
this.map__38121 = map__38121;
this.commit = commit;
this.id = id;
this.run_id = run_id;
this.meta38126 = meta38126;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.persistence.append_commit_38125.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.persistence.append_commit_38125.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.persistence","append-commit","app.main.data.persistence/append-commit",-486425046);
}));

(app.main.data.persistence.append_commit_38125.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38127,meta38126__$1){
var self__ = this;
var _38127__$1 = this;
return (new app.main.data.persistence.append_commit_38125(self__.p__38120,self__.map__38121,self__.commit,self__.id,self__.run_id,meta38126__$1));
}));

(app.main.data.persistence.append_commit_38125.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38127){
var self__ = this;
var _38127__$1 = this;
return self__.meta38126;
}));

(app.main.data.persistence.append_commit_38125.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.persistence.append_commit_38125.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(app.common.logging.enabled_QMARK_("app.main.data.persistence",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"append-commit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"method","method",55703592),"update"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commit-id","commit-id",480429844),""+(self__.id ?? "")], null)], null);
}),null)),null,null,"app.main.data.persistence",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"persistence","persistence",-203044807),(function (pstate){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(pstate,new cljs.core.Keyword(null,"run-id","run-id",-1745267908),app.common.data.nilv,self__.run_id),new cljs.core.Keyword(null,"queue","queue",1455835879),app.main.data.persistence.queue_conj,self__.id),new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.assoc,self__.id,self__.commit);
}));
}));

(app.main.data.persistence.append_commit_38125.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.persistence.append_commit_38125.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var pstate = new cljs.core.Keyword(null,"persistence","persistence",-203044807).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.run_id,new cljs.core.Keyword(null,"run-id","run-id",-1745267908).cljs$core$IFn$_invoke$arity$1(pstate))){
return beicon.v2.core.of((app.main.data.persistence.run_persistence_task.cljs$core$IFn$_invoke$arity$0 ? app.main.data.persistence.run_persistence_task.cljs$core$IFn$_invoke$arity$0() : app.main.data.persistence.run_persistence_task.call(null)),app.main.data.persistence.update_status(new cljs.core.Keyword(null,"saving","saving",-567560703)));
} else {
return null;
}
}));
}

return (new app.main.data.persistence.append_commit_38125(p__38120,map__38121__$1,commit,id,run_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.persistence.discard_persistence_state = (function app$main$data$persistence$discard_persistence_state(){
if((typeof app.main.data.persistence.discard_persistence_state_38131 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.persistence.discard_persistence_state_38131 = (function (meta38132){
this.meta38132 = meta38132;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.persistence.discard_persistence_state_38131.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.persistence.discard_persistence_state_38131.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.persistence","discard-persistence-state","app.main.data.persistence/discard-persistence-state",-693149898);
}));

(app.main.data.persistence.discard_persistence_state_38131.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38133,meta38132__$1){
var self__ = this;
var _38133__$1 = this;
return (new app.main.data.persistence.discard_persistence_state_38131(meta38132__$1));
}));

(app.main.data.persistence.discard_persistence_state_38131.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38133){
var self__ = this;
var _38133__$1 = this;
return self__.meta38132;
}));

(app.main.data.persistence.discard_persistence_state_38131.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.persistence.discard_persistence_state_38131.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"persistence","persistence",-203044807));
}));
}

return (new app.main.data.persistence.discard_persistence_state_38131(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.persistence.persist_commit = (function app$main$data$persistence$persist_commit(commit_id){
if((typeof app.main.data.persistence.persist_commit_38148 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.persistence.persist_commit_38148 = (function (commit_id,meta38149){
this.commit_id = commit_id;
this.meta38149 = meta38149;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.persistence.persist_commit_38148.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.persistence.persist_commit_38148.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.persistence","persist-commit","app.main.data.persistence/persist-commit",-1661371886);
}));

(app.main.data.persistence.persist_commit_38148.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38150,meta38149__$1){
var self__ = this;
var _38150__$1 = this;
return (new app.main.data.persistence.persist_commit_38148(self__.commit_id,meta38149__$1));
}));

(app.main.data.persistence.persist_commit_38148.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38150){
var self__ = this;
var _38150__$1 = this;
return self__.meta38149;
}));

(app.main.data.persistence.persist_commit_38148.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.persistence.persist_commit_38148.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(app.common.logging.enabled_QMARK_("app.main.data.persistence",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"persist-commit"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commit-id","commit-id",480429844),""+(self__.commit_id ?? "")], null)], null);
}),null)),null,null,"app.main.data.persistence",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"persistence","persistence",-203044807)),new cljs.core.Keyword(null,"index","index",-1531685915)),self__.commit_id);
if(cljs.core.truth_(temp__5825__auto__)){
var map__38156 = temp__5825__auto__;
var map__38156__$1 = cljs.core.__destructure_map(map__38156);
var commit = map__38156__$1;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38156__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var file_revn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38156__$1,new cljs.core.Keyword(null,"file-revn","file-revn",1919013210));
var file_vern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38156__$1,new cljs.core.Keyword(null,"file-vern","file-vern",336101510));
var changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38156__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
var features__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38156__$1,new cljs.core.Keyword(null,"features","features",-1146962336));
var sid = new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(state);
var revn = (function (){var x__5110__auto__ = file_revn;
var y__5111__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(app.main.data.persistence.revn_data),file_id,(0));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var params = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"features","features",-1146962336),new cljs.core.Keyword(null,"session-id","session-id",-1147060351),new cljs.core.Keyword(null,"revn","revn",-633391765),new cljs.core.Keyword(null,"vern","vern",2071435888),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"commit-id","commit-id",480429844),new cljs.core.Keyword(null,"changes","changes",1492088),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"created-at","created-at",-89248644)],[features__$1,sid,revn,file_vern,file_id,self__.commit_id,cljs.core.vec(changes),new cljs.core.Keyword(null,"origin","origin",1037372088).cljs$core$IFn$_invoke$arity$1(commit),new cljs.core.Keyword(null,"created-at","created-at",-89248644).cljs$core$IFn$_invoke$arity$1(commit)]);
var permissions = new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(permissions))){
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (cause){
return beicon.v2.core.concat(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"authentication","authentication",1746273042),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cause)))?beicon.v2.core.empty():beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.persistence","error","app.main.data.persistence/error",-446088197),cause),app.main.data.persistence.update_status(new cljs.core.Keyword(null,"error","error",-978969032)))),beicon.v2.core.of(app.main.data.persistence.discard_persistence_state()),beicon.v2.core.throw$(cause));
}),beicon.v2.core.mapcat((function (p__38164){
var map__38165 = p__38164;
var map__38165__$1 = cljs.core.__destructure_map(map__38165);
var response = map__38165__$1;
var revn__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38165__$1,new cljs.core.Keyword(null,"revn","revn",-633391765));
var lagged = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38165__$1,new cljs.core.Keyword(null,"lagged","lagged",2006121946));
if(app.common.logging.enabled_QMARK_("app.main.data.persistence",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"changes persisted"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commit-id","commit-id",480429844),""+(self__.commit_id ?? "")], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"lagged","lagged",2006121946),cljs.core.count(lagged)], null)], null);
}),null)),null,null,"app.main.data.persistence",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.persistence","commit-persisted","app.main.data.persistence/commit-persisted",-1619235892),commit),app.main.data.persistence.update_file_revn(file_id,revn__$1));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-file","update-file",-511736043),params)));
} else {
return null;
}
} else {
return null;
}
}));
}

return (new app.main.data.persistence.persist_commit_38148(commit_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.persistence.run_persistence_task = (function app$main$data$persistence$run_persistence_task(){
if((typeof app.main.data.persistence.run_persistence_task_38171 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.persistence.run_persistence_task_38171 = (function (meta38172){
this.meta38172 = meta38172;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.persistence.run_persistence_task_38171.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.persistence.run_persistence_task_38171.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.persistence","run-persistence-task","app.main.data.persistence/run-persistence-task",852560259);
}));

(app.main.data.persistence.run_persistence_task_38171.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38173,meta38172__$1){
var self__ = this;
var _38173__$1 = this;
return (new app.main.data.persistence.run_persistence_task_38171(meta38172__$1));
}));

(app.main.data.persistence.run_persistence_task_38171.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38173){
var self__ = this;
var _38173__$1 = this;
return self__.meta38172;
}));

(app.main.data.persistence.run_persistence_task_38171.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.persistence.run_persistence_task_38171.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var queue = new cljs.core.Keyword(null,"queue","queue",1455835879).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"persistence","persistence",-203044807).cljs$core$IFn$_invoke$arity$1(state));
var temp__5823__auto__ = cljs.core.peek(queue);
if(cljs.core.truth_(temp__5823__auto__)){
var commit_id = temp__5823__auto__;
var stoper_s = beicon.v2.core.merge(beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.persistence","run-persistence-task","app.main.data.persistence/run-persistence-task",852560259)),stream),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.persistence","error","app.main.data.persistence/error",-446088197)),stream));
if(app.common.logging.enabled_QMARK_("app.main.data.persistence",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"run-persistence-task"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"commit-id","commit-id",480429844),""+(commit_id ?? "")], null)], null);
}),null)),null,null,"app.main.data.persistence",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return beicon.v2.core.take_until(stoper_s,beicon.v2.core.merge(beicon.v2.core.of(app.main.data.persistence.persist_commit(commit_id)),beicon.v2.core.mapcat((function (___$2){
return beicon.v2.core.of(app.main.data.persistence.discard_commit(commit_id),(app.main.data.persistence.run_persistence_task.cljs$core$IFn$_invoke$arity$0 ? app.main.data.persistence.run_persistence_task.cljs$core$IFn$_invoke$arity$0() : app.main.data.persistence.run_persistence_task.call(null)));
}),beicon.v2.core.take((1),beicon.v2.core.filter((function (p1__38170_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(commit_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__38170_SHARP_));
}),beicon.v2.core.map(cljs.core.deref,beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.persistence","commit-persisted","app.main.data.persistence/commit-persisted",-1619235892)),stream)))))));
} else {
return beicon.v2.core.of(app.main.data.persistence.update_status(new cljs.core.Keyword(null,"saved","saved",288760660)));
}
}));
}

return (new app.main.data.persistence.run_persistence_task_38171(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.persistence.xf_mapcat_undo = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692));
app.main.data.persistence.xf_mapcat_redo = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824));
app.main.data.persistence.merge_commit = (function app$main$data$persistence$merge_commit(buffer){
return beicon.v2.core.map((function (p__38190){
var vec__38191 = p__38190;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38191,(0),null);
var vec__38194 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38191,(1),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__38194,(0),null);
var commits = vec__38194;
var uchg = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.main.data.persistence.xf_mapcat_undo,commits);
var rchg = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.main.data.persistence.xf_mapcat_redo,commits);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),uchg),new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),rchg),new cljs.core.Keyword(null,"changes","changes",1492088),rchg);
}),beicon.v2.core.from(cljs.core.group_by(new cljs.core.Keyword(null,"file-id","file-id",-811871323),buffer)));
});
app.main.data.persistence.initialize_persistence = (function app$main$data$persistence$initialize_persistence(){
if((typeof app.main.data.persistence.initialize_persistence_38203 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.persistence.initialize_persistence_38203 = (function (meta38204){
this.meta38204 = meta38204;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.persistence.initialize_persistence_38203.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.persistence.initialize_persistence_38203.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.persistence","initialize-persistence","app.main.data.persistence/initialize-persistence",1230204553);
}));

(app.main.data.persistence.initialize_persistence_38203.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38205,meta38204__$1){
var self__ = this;
var _38205__$1 = this;
return (new app.main.data.persistence.initialize_persistence_38203(meta38204__$1));
}));

(app.main.data.persistence.initialize_persistence_38203.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38205){
var self__ = this;
var _38205__$1 = this;
return self__.meta38204;
}));

(app.main.data.persistence.initialize_persistence_38203.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.persistence.initialize_persistence_38203.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
if(app.common.logging.enabled_QMARK_("app.main.data.persistence",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"initialize persistence"], null)], null);
}),null)),null,null,"app.main.data.persistence",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


var stoper_s = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.persistence","initialize-persistence","app.main.data.persistence/initialize-persistence",1230204553)),stream);
var local_commits_s = beicon.v2.core.share(beicon.v2.core.filter(cljs.core.complement(cljs.core.empty_QMARK_),beicon.v2.core.filter((function (p1__38200_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"local","local",-1497766724),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(p1__38200_SHARP_));
}),beicon.v2.core.map(cljs.core.deref,beicon.v2.core.filter(app.main.data.changes.commit_QMARK_,stream)))));
var notifier_s = beicon.v2.core.merge(beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (){
if(app.common.logging.enabled_QMARK_("app.main.data.persistence",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"persistence beat"], null)], null);
}),null)),null,null,"app.main.data.persistence",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}

return null;
}),beicon.v2.core.debounce((3000),local_commits_s)),beicon.v2.core.filter((function (p1__38201_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__38201_SHARP_,new cljs.core.Keyword("app.main.data.persistence","force-persist","app.main.data.persistence/force-persist",-1937686199));
}),stream));
return beicon.v2.core.merge(beicon.v2.core.map((function (){
return potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.persistence","persistence-notification","app.main.data.persistence/persistence-notification",-1959405001));
}),notifier_s),beicon.v2.core.take_until(stoper_s,beicon.v2.core.map((function (___$3){
return app.main.data.persistence.update_status(new cljs.core.Keyword(null,"pending","pending",-220036727));
}),beicon.v2.core.debounce((200),local_commits_s))),beicon.v2.core.finalize((function (){
if(app.common.logging.enabled_QMARK_("app.main.data.persistence",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"finalize persistence: changes watcher"], null)], null);
}),null)),null,null,"app.main.data.persistence",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}

return null;
}),beicon.v2.core.take_until(beicon.v2.core.delay((100),stoper_s),beicon.v2.core.map(app.main.data.persistence.append_commit,beicon.v2.core.mapcat(app.main.data.persistence.merge_commit,beicon.v2.core.buffer_until(notifier_s,local_commits_s))))),beicon.v2.core.take_until(stoper_s,beicon.v2.core.mapcat((function (p__38208){
var map__38209 = p__38208;
var map__38209__$1 = cljs.core.__destructure_map(map__38209);
var commit = map__38209__$1;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38209__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var file_revn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38209__$1,new cljs.core.Keyword(null,"file-revn","file-revn",1919013210));
return beicon.v2.core.of(app.main.data.persistence.update_file_revn(file_id,file_revn));
}),beicon.v2.core.filter((function (p1__38202_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"source","source",-433931539).cljs$core$IFn$_invoke$arity$1(p1__38202_SHARP_));
}),beicon.v2.core.map(cljs.core.deref,beicon.v2.core.filter(app.main.data.changes.commit_QMARK_,stream))))));
}));
}

return (new app.main.data.persistence.initialize_persistence_38203(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.persistence.js.map
