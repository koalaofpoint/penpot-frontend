import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.path.common.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.edition');
app.main.data.workspace.edition.interrupt_QMARK_ = (function app$main$data$workspace$edition$interrupt_QMARK_(e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178));
});
/**
 * Mark a shape in edition mode
 */
app.main.data.workspace.edition.start_edition_mode = (function app$main$data$workspace$edition$start_edition_mode(id){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for `id`","\n","(uuid? id)"].join('')));
}

if((typeof app.main.data.workspace.edition.start_edition_mode_66758 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.edition.start_edition_mode_66758 = (function (id,meta66759){
this.id = id;
this.meta66759 = meta66759;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.edition.start_edition_mode_66758.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.edition.start_edition_mode_66758.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.edition","start-edition-mode","app.main.data.workspace.edition/start-edition-mode",1067713961);
}));

(app.main.data.workspace.edition.start_edition_mode_66758.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66760,meta66759__$1){
var self__ = this;
var _66760__$1 = this;
return (new app.main.data.workspace.edition.start_edition_mode_66758(self__.id,meta66759__$1));
}));

(app.main.data.workspace.edition.start_edition_mode_66758.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66760){
var self__ = this;
var _66760__$1 = this;
return self__.meta66759;
}));

(app.main.data.workspace.edition.start_edition_mode_66758.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.edition.start_edition_mode_66758.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.contains_QMARK_(objects,self__.id)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),cljs.core.assoc,new cljs.core.Keyword(null,"edition","edition",1337508089),self__.id),new cljs.core.Keyword(null,"workspace-grid-edition","workspace-grid-edition",-40250766));
} else {
return state;
}
}));

(app.main.data.workspace.edition.start_edition_mode_66758.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.edition.start_edition_mode_66758.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
return beicon.v2.core.map(app.main.data.workspace.edition.clear_edition_mode,beicon.v2.core.take((1),beicon.v2.core.filter(app.main.data.workspace.edition.interrupt_QMARK_,stream)));
}));
}

return (new app.main.data.workspace.edition.start_edition_mode_66758(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.edition.clear_edition_mode = (function app$main$data$workspace$edition$clear_edition_mode(){
if((typeof app.main.data.workspace.edition.clear_edition_mode_66769 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.edition.clear_edition_mode_66769 = (function (meta66770){
this.meta66770 = meta66770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.edition.clear_edition_mode_66769.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.edition.clear_edition_mode_66769.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.edition","clear-edition-mode","app.main.data.workspace.edition/clear-edition-mode",1519383038);
}));

(app.main.data.workspace.edition.clear_edition_mode_66769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66771,meta66770__$1){
var self__ = this;
var _66771__$1 = this;
return (new app.main.data.workspace.edition.clear_edition_mode_66769(meta66770__$1));
}));

(app.main.data.workspace.edition.clear_edition_mode_66769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66771){
var self__ = this;
var _66771__$1 = this;
return self__.meta66770;
}));

(app.main.data.workspace.edition.clear_edition_mode_66769.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.edition.clear_edition_mode_66769.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.update.cljs$core$IFn$_invoke$arity$6(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),cljs.core.dissoc,new cljs.core.Keyword(null,"edition","edition",1337508089),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),cljs.core.dissoc,new cljs.core.Keyword(null,"tool","tool",-1298696470),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"lock","lock",-488188066)),new cljs.core.Keyword(null,"workspace-grid-edition","workspace-grid-edition",-40250766));
}));

(app.main.data.workspace.edition.clear_edition_mode_66769.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.edition.clear_edition_mode_66769.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edition","edition",1337508089)], null));
return beicon.v2.core.concat((((!((id == null))))?app.main.data.workspace.path.common.finish_path():null));
}));
}

return (new app.main.data.workspace.edition.clear_edition_mode_66769(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.edition.js.map
