import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.files.helpers.js";
import "./app.common.uuid.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.collapse');
app.main.data.workspace.collapse.expand_all_parents = (function app$main$data$workspace$collapse$expand_all_parents(ids,objects){
if((typeof app.main.data.workspace.collapse.expand_all_parents_56701 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.collapse.expand_all_parents_56701 = (function (ids,objects,meta56702){
this.ids = ids;
this.objects = objects;
this.meta56702 = meta56702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.collapse.expand_all_parents_56701.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.collapse.expand_all_parents_56701.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.collapse","expand-all-parents","app.main.data.workspace.collapse/expand-all-parents",889288025);
}));

(app.main.data.workspace.collapse.expand_all_parents_56701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56703,meta56702__$1){
var self__ = this;
var _56703__$1 = this;
return (new app.main.data.workspace.collapse.expand_all_parents_56701(self__.ids,self__.objects,meta56702__$1));
}));

(app.main.data.workspace.collapse.expand_all_parents_56701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56703){
var self__ = this;
var _56703__$1 = this;
return self__.meta56702;
}));

(app.main.data.workspace.collapse.expand_all_parents_56701.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.collapse.expand_all_parents_56701.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var expand_fn = (function (expanded){
var parents_seqs = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return app.common.files.helpers.get_parent_ids(self__.objects,x);
}),self__.ids);
var flat_parents = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.concat,parents_seqs);
var non_root_parents = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__56700_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__56700_SHARP_,app.common.uuid.zero);
}),flat_parents);
var distinct_parents = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,non_root_parents);
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expanded,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (id){
return cljs.core.PersistentArrayMap.createAsIfByAssoc([id,true]);
}),distinct_parents))], 0));
});
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"expanded","expanded",-3020742)], null),expand_fn);
}));
}

return (new app.main.data.workspace.collapse.expand_all_parents_56701(ids,objects,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.collapse.toggle_collapse = (function app$main$data$workspace$collapse$toggle_collapse(id){
if((typeof app.main.data.workspace.collapse.toggle_collapse_56711 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.collapse.toggle_collapse_56711 = (function (id,meta56712){
this.id = id;
this.meta56712 = meta56712;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.collapse.toggle_collapse_56711.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.collapse.toggle_collapse_56711.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.collapse","toggle-collapse","app.main.data.workspace.collapse/toggle-collapse",1946156583);
}));

(app.main.data.workspace.collapse.toggle_collapse_56711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56713,meta56712__$1){
var self__ = this;
var _56713__$1 = this;
return (new app.main.data.workspace.collapse.toggle_collapse_56711(self__.id,meta56712__$1));
}));

(app.main.data.workspace.collapse.toggle_collapse_56711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56713){
var self__ = this;
var _56713__$1 = this;
return self__.meta56712;
}));

(app.main.data.workspace.collapse.toggle_collapse_56711.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.collapse.toggle_collapse_56711.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"expanded","expanded",-3020742),self__.id], null),cljs.core.not);
}));
}

return (new app.main.data.workspace.collapse.toggle_collapse_56711(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.collapse.expand_collapse = (function app$main$data$workspace$collapse$expand_collapse(id){
if((typeof app.main.data.workspace.collapse.expand_collapse_56717 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.collapse.expand_collapse_56717 = (function (id,meta56718){
this.id = id;
this.meta56718 = meta56718;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.collapse.expand_collapse_56717.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.collapse.expand_collapse_56717.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.collapse","expand-collapse","app.main.data.workspace.collapse/expand-collapse",1532499910);
}));

(app.main.data.workspace.collapse.expand_collapse_56717.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56719,meta56718__$1){
var self__ = this;
var _56719__$1 = this;
return (new app.main.data.workspace.collapse.expand_collapse_56717(self__.id,meta56718__$1));
}));

(app.main.data.workspace.collapse.expand_collapse_56717.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56719){
var self__ = this;
var _56719__$1 = this;
return self__.meta56718;
}));

(app.main.data.workspace.collapse.expand_collapse_56717.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.collapse.expand_collapse_56717.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"expanded","expanded",-3020742),self__.id], null),true);
}));
}

return (new app.main.data.workspace.collapse.expand_collapse_56717(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.collapse.collapse_all = (function app$main$data$workspace$collapse$collapse_all(){
if((typeof app.main.data.workspace.collapse.collapse_all_56731 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.collapse.collapse_all_56731 = (function (meta56732){
this.meta56732 = meta56732;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.collapse.collapse_all_56731.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.collapse.collapse_all_56731.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.collapse","collapse-all","app.main.data.workspace.collapse/collapse-all",-1129278533);
}));

(app.main.data.workspace.collapse.collapse_all_56731.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_56733,meta56732__$1){
var self__ = this;
var _56733__$1 = this;
return (new app.main.data.workspace.collapse.collapse_all_56731(meta56732__$1));
}));

(app.main.data.workspace.collapse.collapse_all_56731.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_56733){
var self__ = this;
var _56733__$1 = this;
return self__.meta56732;
}));

(app.main.data.workspace.collapse.collapse_all_56731.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.collapse.collapse_all_56731.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),cljs.core.dissoc,new cljs.core.Keyword(null,"expanded","expanded",-3020742));
}));
}

return (new app.main.data.workspace.collapse.collapse_all_56731(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.collapse.js.map
