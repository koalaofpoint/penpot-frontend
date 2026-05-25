import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes.js";
import "./app.common.logging.js";
import "./app.common.schema.js";
import "./app.common.time.js";
import "./app.common.types.shape.layout.js";
import "./app.main.data.changes.js";
import "./app.main.data.common.js";
import "./app.main.data.helpers.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.undo');
app.common.logging.loggers.set("app.main.data.workspace.undo",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"warn","warn",-436710552)));
app.main.data.workspace.undo.discard_transaction_time_millis = ((20) * (1000));
app.main.data.workspace.undo.schema_COLON_undo_entry = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"undo-entry"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),app.common.files.changes.schema_COLON_change], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),app.common.files.changes.schema_COLON_change], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tags","tags",1771418977),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null)], null)], null);
app.main.data.workspace.undo.check_undo_entry = app.common.schema.check_fn(app.main.data.workspace.undo.schema_COLON_undo_entry);
app.main.data.workspace.undo.MAX_UNDO_SIZE = (50);
app.main.data.workspace.undo.conj_undo_entry = (function app$main$data$workspace$undo$conj_undo_entry(undo,data){
var undo__$1 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(undo,data);
var cnt = cljs.core.count(undo__$1);
if((cnt > app.main.data.workspace.undo.MAX_UNDO_SIZE)){
return cljs.core.subvec.cljs$core$IFn$_invoke$arity$2(undo__$1,(cnt - app.main.data.workspace.undo.MAX_UNDO_SIZE));
} else {
return undo__$1;
}
});
/**
 * Updates the state to point to a specific index in the undo stack.
 * Used to materialize the undo stack when the user selects an entry
 * in the undo history.
 */
app.main.data.workspace.undo.materialize_undo = (function app$main$data$workspace$undo$materialize_undo(_changes,index){
if((typeof app.main.data.workspace.undo.materialize_undo_47958 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.undo.materialize_undo_47958 = (function (_changes,index,meta47959){
this._changes = _changes;
this.index = index;
this.meta47959 = meta47959;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.undo.materialize_undo_47958.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.materialize_undo_47958.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.undo","materialize-undo","app.main.data.workspace.undo/materialize-undo",-731495176);
}));

(app.main.data.workspace.undo.materialize_undo_47958.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47960,meta47959__$1){
var self__ = this;
var _47960__$1 = this;
return (new app.main.data.workspace.undo.materialize_undo_47958(self__._changes,self__.index,meta47959__$1));
}));

(app.main.data.workspace.undo.materialize_undo_47958.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47960){
var self__ = this;
var _47960__$1 = this;
return self__.meta47959;
}));

(app.main.data.workspace.undo.materialize_undo_47958.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.materialize_undo_47958.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),cljs.core.assoc,new cljs.core.Keyword(null,"index","index",-1531685915),self__.index);
}));
}

return (new app.main.data.workspace.undo.materialize_undo_47958(_changes,index,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.undo.add_undo_entry = (function app$main$data$workspace$undo$add_undo_entry(state,entry){
if(cljs.core.truth_((function (){var and__5023__auto__ = entry;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = cljs.core.not_empty(new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692).cljs$core$IFn$_invoke$arity$1(entry));
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not_empty(new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(entry));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),new cljs.core.Keyword(null,"index","index",-1531685915)], null),(-1));
var items = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),new cljs.core.Keyword(null,"items","items",1031954938)], null),cljs.core.PersistentVector.EMPTY);
var items__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.take.cljs$core$IFn$_invoke$arity$2((index + (1)),items));
var items__$2 = app.main.data.workspace.undo.conj_undo_entry(items__$1,entry);
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),cljs.core.assoc,new cljs.core.Keyword(null,"items","items",1031954938),items__$2,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var x__5113__auto__ = (index + (1));
var y__5114__auto__ = (app.main.data.workspace.undo.MAX_UNDO_SIZE - (1));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})()], 0));
} else {
return state;
}
});
/**
 * Extends the current undo entry in the workspace with new changes if it
 * exists, or creates a new entry if it doesn't.
 */
app.main.data.workspace.undo.stack_undo_entry = (function app$main$data$workspace$undo$stack_undo_entry(state,p__47979){
var map__47980 = p__47979;
var map__47980__$1 = cljs.core.__destructure_map(map__47980);
var entry = map__47980__$1;
var undo_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47980__$1,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692));
var redo_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47980__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824));
var index = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),new cljs.core.Keyword(null,"index","index",-1531685915)], null),(-1));
if((index >= (0))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),new cljs.core.Keyword(null,"items","items",1031954938),index], null),(function (item){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),(function (p1__47977_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(undo_changes,p1__47977_SHARP_);
})),new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),(function (p1__47978_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__47978_SHARP_,redo_changes);
}));
}));
} else {
return app.main.data.workspace.undo.add_undo_entry(state,entry);
}
});
/**
 * Extends the current undo transaction with new changes.
 */
app.main.data.workspace.undo.accumulate_undo_entry = (function app$main$data$workspace$undo$accumulate_undo_entry(state,p__47986){
var map__47987 = p__47986;
var map__47987__$1 = cljs.core.__destructure_map(map__47987);
var undo_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47987__$1,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692));
var redo_changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47987__$1,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824));
var undo_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47987__$1,new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846));
var tags = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__47987__$1,new cljs.core.Keyword(null,"tags","tags",1771418977));
return cljs.core.assoc_in((function (){var G__47988 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692)], null),(function (p1__47984_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(undo_changes,p1__47984_SHARP_);
})),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824)], null),(function (p1__47985_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__47985_SHARP_,redo_changes);
}));
if((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846)], null)) == null)){
return cljs.core.assoc_in(G__47988,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846)], null),undo_group);
} else {
return G__47988;
}
})(),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"tags","tags",1771418977)], null),tags);
});
/**
 * UpdateEvent to add an entry to the undo stack, or extend the current undo transaction
 * or last undo entry.
 * - If `stack?` is true, it will stack the entry on top of the current undo entry.
 * - If `stack?` is false, it will add a new entry to the undo stack.
 * - If there is an open transaction, it will accumulate the changes in that transaction.
 */
app.main.data.workspace.undo.append_undo = (function app$main$data$workspace$undo$append_undo(entry,stack_QMARK_){
if(cljs.core.truth_(app.main.data.workspace.undo.check_undo_entry(entry))){
} else {
throw (new Error("Assert failed: (check-undo-entry entry)"));
}

if(cljs.core.boolean_QMARK_(stack_QMARK_)){
} else {
throw (new Error("Assert failed: (boolean? stack?)"));
}

if((typeof app.main.data.workspace.undo.append_undo_47989 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.undo.append_undo_47989 = (function (entry,stack_QMARK_,meta47990){
this.entry = entry;
this.stack_QMARK_ = stack_QMARK_;
this.meta47990 = meta47990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.undo.append_undo_47989.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.append_undo_47989.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.undo","append-undo","app.main.data.workspace.undo/append-undo",2071819251);
}));

(app.main.data.workspace.undo.append_undo_47989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_47991,meta47990__$1){
var self__ = this;
var _47991__$1 = this;
return (new app.main.data.workspace.undo.append_undo_47989(self__.entry,self__.stack_QMARK_,meta47990__$1));
}));

(app.main.data.workspace.undo.append_undo_47989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_47991){
var self__ = this;
var _47991__$1 = this;
return self__.meta47990;
}));

(app.main.data.workspace.undo.append_undo_47989.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.append_undo_47989.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),new cljs.core.Keyword(null,"transaction","transaction",1777321997)], null));
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.not(self__.stack_QMARK_)) || (((app.common.data.not_empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692)], null)))) || (app.common.data.not_empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824)], null)))))));
} else {
return and__5023__auto__;
}
})())){
return app.main.data.workspace.undo.accumulate_undo_entry(state,self__.entry);
} else {
if(cljs.core.truth_(self__.stack_QMARK_)){
return app.main.data.workspace.undo.stack_undo_entry(state,self__.entry);
} else {
return app.main.data.workspace.undo.add_undo_entry(state,self__.entry);

}
}
}));
}

return (new app.main.data.workspace.undo.append_undo_47989(entry,stack_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.undo.empty_tx = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.PersistentVector.EMPTY], null);
/**
 * Start a transaction, so that changes in it are added together into a single undo entry.
 */
app.main.data.workspace.undo.start_undo_transaction = (function app$main$data$workspace$undo$start_undo_transaction(var_args){
var args__5755__auto__ = [];
var len__5749__auto___48071 = arguments.length;
var i__5750__auto___48072 = (0);
while(true){
if((i__5750__auto___48072 < len__5749__auto___48071)){
args__5755__auto__.push((arguments[i__5750__auto___48072]));

var G__48073 = (i__5750__auto___48072 + (1));
i__5750__auto___48072 = G__48073;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.main.data.workspace.undo.start_undo_transaction.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.main.data.workspace.undo.start_undo_transaction.cljs$core$IFn$_invoke$arity$variadic = (function (id,p__47999){
var map__48000 = p__47999;
var map__48000__$1 = cljs.core.__destructure_map(map__48000);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48000__$1,new cljs.core.Keyword(null,"timeout","timeout",-318625318),app.main.data.workspace.undo.discard_transaction_time_millis);
if((typeof app.main.data.workspace.undo.start_undo_transaction_48001 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.undo.start_undo_transaction_48001 = (function (id,p__47999,map__48000,timeout,meta48002){
this.id = id;
this.p__47999 = p__47999;
this.map__48000 = map__48000;
this.timeout = timeout;
this.meta48002 = meta48002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.undo.start_undo_transaction_48001.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.start_undo_transaction_48001.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.undo","start-undo-transaction","app.main.data.workspace.undo/start-undo-transaction",2132602364);
}));

(app.main.data.workspace.undo.start_undo_transaction_48001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48003,meta48002__$1){
var self__ = this;
var _48003__$1 = this;
return (new app.main.data.workspace.undo.start_undo_transaction_48001(self__.id,self__.p__47999,self__.map__48000,self__.timeout,meta48002__$1));
}));

(app.main.data.workspace.undo.start_undo_transaction_48001.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48003){
var self__ = this;
var _48003__$1 = this;
return self__.meta48002;
}));

(app.main.data.workspace.undo.start_undo_transaction_48001.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.start_undo_transaction_48001.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.undo",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"start-undo-transaction"], null)], null);
}),null)),null,null,"app.main.data.workspace.undo",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}


return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),(function (undo_state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$3(undo_state,new cljs.core.Keyword(null,"transaction","transaction",1777321997),(function (p1__47996_SHARP_){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(p1__47996_SHARP_,app.main.data.workspace.undo.empty_tx);
})),new cljs.core.Keyword(null,"transactions-pending","transactions-pending",-59999859),cljs.core.assoc,self__.id,app.common.time.now());
}));
}));

(app.main.data.workspace.undo.start_undo_transaction_48001.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.start_undo_transaction_48001.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
if(cljs.core.truth_((function (){var and__5023__auto__ = self__.timeout;
if(cljs.core.truth_(and__5023__auto__)){
return (self__.timeout > (0));
} else {
return and__5023__auto__;
}
})())){
var stoper = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.undo","start-undo-transaction","app.main.data.workspace.undo/start-undo-transaction",2132602364)),stream);
return beicon.v2.core.take_until(stoper,beicon.v2.core.delay(self__.timeout,beicon.v2.core.of((app.main.data.workspace.undo.check_open_transactions.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.undo.check_open_transactions.cljs$core$IFn$_invoke$arity$1(self__.timeout) : app.main.data.workspace.undo.check_open_transactions.call(null,self__.timeout)))));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.undo.start_undo_transaction_48001(id,p__47999,map__48000__$1,timeout,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.undo.start_undo_transaction.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.main.data.workspace.undo.start_undo_transaction.cljs$lang$applyTo = (function (seq47997){
var G__47998 = cljs.core.first(seq47997);
var seq47997__$1 = cljs.core.next(seq47997);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__47998,seq47997__$1);
}));

/**
 * Updates the state to discard any current and pending undo transaction.
 */
app.main.data.workspace.undo.discard_undo_transaction = (function app$main$data$workspace$undo$discard_undo_transaction(){
if((typeof app.main.data.workspace.undo.discard_undo_transaction_48007 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.undo.discard_undo_transaction_48007 = (function (meta48008){
this.meta48008 = meta48008;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.undo.discard_undo_transaction_48007.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.discard_undo_transaction_48007.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.undo","discard-undo-transaction","app.main.data.workspace.undo/discard-undo-transaction",349503576);
}));

(app.main.data.workspace.undo.discard_undo_transaction_48007.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48009,meta48008__$1){
var self__ = this;
var _48009__$1 = this;
return (new app.main.data.workspace.undo.discard_undo_transaction_48007(meta48008__$1));
}));

(app.main.data.workspace.undo.discard_undo_transaction_48007.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48009){
var self__ = this;
var _48009__$1 = this;
return self__.meta48008;
}));

(app.main.data.workspace.undo.discard_undo_transaction_48007.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.discard_undo_transaction_48007.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.undo",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"discard-undo-transaction"], null)], null);
}),null)),null,null,"app.main.data.workspace.undo",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}


return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),cljs.core.dissoc,new cljs.core.Keyword(null,"transaction","transaction",1777321997),new cljs.core.Keyword(null,"transactions-pending","transactions-pending",-59999859));
}));
}

return (new app.main.data.workspace.undo.discard_undo_transaction_48007(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Conditionally add an undo entry from the current transaction. That
 *   only happens when no pending transactions are available and the
 *   current transaction exists.
 */
app.main.data.workspace.undo.add_transaction_undo_entry = (function app$main$data$workspace$undo$add_transaction_undo_entry(state){
var undo_state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606));
var current_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(undo_state,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
var pending_tx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(undo_state,new cljs.core.Keyword(null,"transactions-pending","transactions-pending",-59999859));
if((((!((current_tx == null)))) && (cljs.core.empty_QMARK_(pending_tx)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(app.main.data.workspace.undo.add_undo_entry(state,current_tx),new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),cljs.core.dissoc,new cljs.core.Keyword(null,"transaction","transaction",1777321997));
} else {
return state;
}
});
app.main.data.workspace.undo.commit_undo_transaction = (function app$main$data$workspace$undo$commit_undo_transaction(id){
if((typeof app.main.data.workspace.undo.commit_undo_transaction_48015 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.undo.commit_undo_transaction_48015 = (function (id,meta48016){
this.id = id;
this.meta48016 = meta48016;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.undo.commit_undo_transaction_48015.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.commit_undo_transaction_48015.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.undo","commit-undo-transaction","app.main.data.workspace.undo/commit-undo-transaction",317661795);
}));

(app.main.data.workspace.undo.commit_undo_transaction_48015.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48017,meta48016__$1){
var self__ = this;
var _48017__$1 = this;
return (new app.main.data.workspace.undo.commit_undo_transaction_48015(self__.id,meta48016__$1));
}));

(app.main.data.workspace.undo.commit_undo_transaction_48015.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48017){
var self__ = this;
var _48017__$1 = this;
return self__.meta48016;
}));

(app.main.data.workspace.undo.commit_undo_transaction_48015.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.commit_undo_transaction_48015.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.undo",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"commit-undo-transaction"], null)], null);
}),null)),null,null,"app.main.data.workspace.undo",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}


return app.main.data.workspace.undo.add_transaction_undo_entry(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),new cljs.core.Keyword(null,"transactions-pending","transactions-pending",-59999859)], null),cljs.core.dissoc,self__.id));
}));
}

return (new app.main.data.workspace.undo.commit_undo_transaction_48015(id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Clears the undo stack, removing all entries and transactions.
 */
app.main.data.workspace.undo.reinitialize_undo = (function (){
if((typeof app.main.data.workspace.undo.reset_undo_48021 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.undo.reset_undo_48021 = (function (meta48022){
this.meta48022 = meta48022;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.undo.reset_undo_48021.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.reset_undo_48021.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.undo","reset-undo","app.main.data.workspace.undo/reset-undo",963720812);
}));

(app.main.data.workspace.undo.reset_undo_48021.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48023,meta48022__$1){
var self__ = this;
var _48023__$1 = this;
return (new app.main.data.workspace.undo.reset_undo_48021(meta48022__$1));
}));

(app.main.data.workspace.undo.reset_undo_48021.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48023){
var self__ = this;
var _48023__$1 = this;
return self__.meta48022;
}));

(app.main.data.workspace.undo.reset_undo_48021.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.reset_undo_48021.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606),cljs.core.PersistentArrayMap.EMPTY);
}));
}

return (new app.main.data.workspace.undo.reset_undo_48021(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.workspace.undo.check_open_transactions = (function app$main$data$workspace$undo$check_open_transactions(timeout){
if((typeof app.main.data.workspace.undo.check_open_transactions_48026 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.undo.check_open_transactions_48026 = (function (timeout,meta48027){
this.timeout = timeout;
this.meta48027 = meta48027;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.undo.check_open_transactions_48026.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.check_open_transactions_48026.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.undo","check-open-transactions","app.main.data.workspace.undo/check-open-transactions",-815936958);
}));

(app.main.data.workspace.undo.check_open_transactions_48026.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48028,meta48027__$1){
var self__ = this;
var _48028__$1 = this;
return (new app.main.data.workspace.undo.check_open_transactions_48026(self__.timeout,meta48027__$1));
}));

(app.main.data.workspace.undo.check_open_transactions_48026.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48028){
var self__ = this;
var _48028__$1 = this;
return self__.meta48027;
}));

(app.main.data.workspace.undo.check_open_transactions_48026.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.check_open_transactions_48026.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.undo",new cljs.core.Keyword(null,"info","info",-317069002))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"check-open-transactions"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"timeout","timeout",-318625318),self__.timeout], null)], null);
}),null)),null,null,"app.main.data.workspace.undo",new cljs.core.Keyword(null,"info","info",-317069002),false);
} else {
}


var pending_ts = cljs.core.update_vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606)),new cljs.core.Keyword(null,"transactions-pending","transactions-pending",-59999859)),(function (p1__48024_SHARP_){
return app.common.time.diff_ms(p1__48024_SHARP_,app.common.time.now());
}));
return beicon.v2.core.map(app.main.data.workspace.undo.commit_undo_transaction,beicon.v2.core.map(cljs.core.first,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (p1__48025_SHARP_){
return console.warn(""+"FORCE COMMIT TRANSACTION AFTER "+(cljs.core.second(p1__48025_SHARP_) ?? "")+"MS");
}),beicon.v2.core.from(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__48029){
var vec__48030 = p__48029;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48030,(0),null);
var ts = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48030,(1),null);
return (ts >= self__.timeout);
}),pending_ts)))));
}));
}

return (new app.main.data.workspace.undo.check_open_transactions_48026(timeout,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Repeat undoing or redoing until dest-index is reached.
 */
app.main.data.workspace.undo.undo_to_index = (function app$main$data$workspace$undo$undo_to_index(dest_index){
if((typeof app.main.data.workspace.undo.undo_to_index_48033 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.undo.undo_to_index_48033 = (function (dest_index,meta48034){
this.dest_index = dest_index;
this.meta48034 = meta48034;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.undo.undo_to_index_48033.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.undo_to_index_48033.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.undo","undo-to-index","app.main.data.workspace.undo/undo-to-index",-2070841694);
}));

(app.main.data.workspace.undo.undo_to_index_48033.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48035,meta48034__$1){
var self__ = this;
var _48035__$1 = this;
return (new app.main.data.workspace.undo.undo_to_index_48033(self__.dest_index,meta48034__$1));
}));

(app.main.data.workspace.undo.undo_to_index_48033.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48035){
var self__ = this;
var _48035__$1 = this;
return self__.meta48034;
}));

(app.main.data.workspace.undo.undo_to_index_48033.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.undo_to_index_48033.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var edition = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edition","edition",1337508089)], null));
var drawing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973));
if((((((!((edition == null)))) || ((!((new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(drawing) == null)))))) && (cljs.core.not(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,edition))))){
return null;
} else {
var undo = new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606).cljs$core$IFn$_invoke$arity$1(state);
var items = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(undo);
var index = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(undo);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (cljs.core.count(items) - (1));
}
})();
if((((!((items == null)))) && (((((-1) <= self__.dest_index)) && ((self__.dest_index <= (cljs.core.count(items) - (1)))))))){
var changes = cljs.core.vec(cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,(((self__.dest_index < index))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.reverse(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(items,(self__.dest_index + (1)),(index + (1))))):(((self__.dest_index > index))?cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(items,(index + (1)),(self__.dest_index + (1)))):cljs.core.PersistentVector.EMPTY
))));
if(cljs.core.seq(changes)){
return beicon.v2.core.of(app.main.data.workspace.undo.materialize_undo(changes,self__.dest_index),app.main.data.changes.commit_changes(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),changes,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"origin","origin",1037372088),it__$1,new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),false], null)));
} else {
return null;
}
} else {
return null;
}
}
}));
}

return (new app.main.data.workspace.undo.undo_to_index_48033(dest_index,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Undo the last action, or the last action in a group.
 * If there is an open transaction, it will undo to the last transaction
 * index.
 */
app.main.data.workspace.undo.undo = (function (){
if((typeof app.main.data.workspace.undo.undo_48047 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.undo.undo_48047 = (function (meta48048){
this.meta48048 = meta48048;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.undo.undo_48047.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.undo_48047.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.undo","undo","app.main.data.workspace.undo/undo",-525724021);
}));

(app.main.data.workspace.undo.undo_48047.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48049,meta48048__$1){
var self__ = this;
var _48049__$1 = this;
return (new app.main.data.workspace.undo.undo_48047(meta48048__$1));
}));

(app.main.data.workspace.undo.undo_48047.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48049){
var self__ = this;
var _48049__$1 = this;
return self__.meta48048;
}));

(app.main.data.workspace.undo.undo_48047.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.undo_48047.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var edition = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edition","edition",1337508089)], null));
var drawing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973));
if(cljs.core.truth_((function (){var or__5025__auto__ = (((edition == null)) && ((new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(drawing) == null)));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,edition);
}
})())){
var undo = new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606).cljs$core$IFn$_invoke$arity$1(state);
var items = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(undo);
var index = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(undo);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (cljs.core.count(items) - (1));
}
})();
if(((cljs.core.empty_QMARK_(items)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(-1))))){
return null;
} else {
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(items,index);
var changes = new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692).cljs$core$IFn$_invoke$arity$1(item);
var undo_group = new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846).cljs$core$IFn$_invoke$arity$1(item);
var find_first_group_idx = (function (index__$1){
while(true){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(items,index__$1),new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846)),undo_group)){
var G__48098 = (index__$1 - (1));
index__$1 = G__48098;
continue;
} else {
return (index__$1 + (1));
}
break;
}
});
var undo_group_index = (cljs.core.truth_(undo_group)?find_first_group_idx(index):null);
if(cljs.core.truth_(undo_group)){
return beicon.v2.core.of(app.main.data.workspace.undo.undo_to_index((undo_group_index - (1))));
} else {
return beicon.v2.core.of(app.main.data.workspace.undo.materialize_undo(changes,(index - (1))),app.main.data.changes.commit_changes(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),changes,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),false,new cljs.core.Keyword(null,"origin","origin",1037372088),it__$1], null)),(app.main.data.workspace.undo.assure_valid_current_page.cljs$core$IFn$_invoke$arity$0 ? app.main.data.workspace.undo.assure_valid_current_page.cljs$core$IFn$_invoke$arity$0() : app.main.data.workspace.undo.assure_valid_current_page.call(null)));
}
}
} else {
return null;
}
}));
}

return (new app.main.data.workspace.undo.undo_48047(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.workspace.undo.redo = (function (){
if((typeof app.main.data.workspace.undo.redo_48056 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.undo.redo_48056 = (function (meta48057){
this.meta48057 = meta48057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.undo.redo_48056.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.redo_48056.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.undo","redo","app.main.data.workspace.undo/redo",552169249);
}));

(app.main.data.workspace.undo.redo_48056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48058,meta48057__$1){
var self__ = this;
var _48058__$1 = this;
return (new app.main.data.workspace.undo.redo_48056(meta48057__$1));
}));

(app.main.data.workspace.undo.redo_48056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48058){
var self__ = this;
var _48058__$1 = this;
return self__.meta48057;
}));

(app.main.data.workspace.undo.redo_48056.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.redo_48056.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var edition = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edition","edition",1337508089)], null));
var drawing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973));
if(cljs.core.truth_((function (){var or__5025__auto__ = (((edition == null)) && ((new cljs.core.Keyword(null,"object","object",1474613949).cljs$core$IFn$_invoke$arity$1(drawing) == null)));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,edition);
}
})())){
var undo = new cljs.core.Keyword(null,"workspace-undo","workspace-undo",-1544884606).cljs$core$IFn$_invoke$arity$1(state);
var items = new cljs.core.Keyword(null,"items","items",1031954938).cljs$core$IFn$_invoke$arity$1(undo);
var index = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(undo);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (cljs.core.count(items) - (1));
}
})();
if(((cljs.core.empty_QMARK_(items)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(cljs.core.count(items) - (1)))))){
return null;
} else {
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(items,(index + (1)));
var changes = new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(item);
var undo_group = new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846).cljs$core$IFn$_invoke$arity$1(item);
var find_last_group_idx = (function app$main$data$workspace$undo$flgidx(index__$1){
var item__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(items,index__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846).cljs$core$IFn$_invoke$arity$1(item__$1),undo_group)){
return app$main$data$workspace$undo$flgidx((index__$1 + (1)));
} else {
return (index__$1 - (1));
}
});
var redo_group_index = (cljs.core.truth_(undo_group)?find_last_group_idx((index + (1))):null);
if(cljs.core.truth_(undo_group)){
return beicon.v2.core.of(app.main.data.workspace.undo.undo_to_index(redo_group_index));
} else {
return beicon.v2.core.of(app.main.data.workspace.undo.materialize_undo(changes,(index + (1))),app.main.data.changes.commit_changes(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),changes,new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"origin","origin",1037372088),it__$1,new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),false], null)));
}
}
} else {
return null;
}
}));
}

return (new app.main.data.workspace.undo.redo_48056(cljs.core.PersistentArrayMap.EMPTY));
})()
;
app.main.data.workspace.undo.assure_valid_current_page = (function app$main$data$workspace$undo$assure_valid_current_page(){
if((typeof app.main.data.workspace.undo.assure_valid_current_page_48065 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.undo.assure_valid_current_page_48065 = (function (meta48066){
this.meta48066 = meta48066;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.undo.assure_valid_current_page_48065.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.assure_valid_current_page_48065.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.undo","assure-valid-current-page","app.main.data.workspace.undo/assure-valid-current-page",1873691179);
}));

(app.main.data.workspace.undo.assure_valid_current_page_48065.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48067,meta48066__$1){
var self__ = this;
var _48067__$1 = this;
return (new app.main.data.workspace.undo.assure_valid_current_page_48065(meta48066__$1));
}));

(app.main.data.workspace.undo.assure_valid_current_page_48065.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48067){
var self__ = this;
var _48067__$1 = this;
return self__.meta48066;
}));

(app.main.data.workspace.undo.assure_valid_current_page_48065.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.undo.assure_valid_current_page_48065.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"pages","pages",-285406513));
if(cljs.core.contains_QMARK_(pages,page_id)){
return beicon.v2.core.empty();
} else {
return beicon.v2.core.of(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"page-id","page-id",-872941168),cljs.core.first(pages)], 0)));
}
}));
}

return (new app.main.data.workspace.undo.assure_valid_current_page_48065(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.undo.js.map
