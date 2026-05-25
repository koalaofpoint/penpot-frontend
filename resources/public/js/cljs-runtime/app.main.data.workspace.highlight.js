import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./clojure.set.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.highlight');
app.main.data.workspace.highlight.highlight_shape = (function app$main$data$workspace$highlight$highlight_shape(id){
app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

if((typeof app.main.data.workspace.highlight.highlight_shape_70860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.highlight.highlight_shape_70860 = (function (id,meta70861){
this.id = id;
this.meta70861 = meta70861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.highlight.highlight_shape_70860.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.highlight.highlight_shape_70860.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.highlight","highlight-shape","app.main.data.workspace.highlight/highlight-shape",367099759);
}));

(app.main.data.workspace.highlight.highlight_shape_70860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70862,meta70861__$1){
var self__ = this;
var _70862__$1 = this;
return (new app.main.data.workspace.highlight.highlight_shape_70860(self__.id,meta70861__$1));
}));

(app.main.data.workspace.highlight.highlight_shape_70860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70862){
var self__ = this;
var _70862__$1 = this;
return self__.meta70861;
}));

(app.main.data.workspace.highlight.highlight_shape_70860.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.highlight.highlight_shape_70860.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733)], null),clojure.set.union,cljs.core.PersistentHashSet.createAsIfByAssoc([self__.id]));
}));
}

return (new app.main.data.workspace.highlight.highlight_shape_70860(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.highlight.dehighlight_shape = (function app$main$data$workspace$highlight$dehighlight_shape(id){
app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

if((typeof app.main.data.workspace.highlight.dehighlight_shape_70863 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.highlight.dehighlight_shape_70863 = (function (id,meta70864){
this.id = id;
this.meta70864 = meta70864;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.highlight.dehighlight_shape_70863.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.highlight.dehighlight_shape_70863.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.highlight","dehighlight-shape","app.main.data.workspace.highlight/dehighlight-shape",1924177456);
}));

(app.main.data.workspace.highlight.dehighlight_shape_70863.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70865,meta70864__$1){
var self__ = this;
var _70865__$1 = this;
return (new app.main.data.workspace.highlight.dehighlight_shape_70863(self__.id,meta70864__$1));
}));

(app.main.data.workspace.highlight.dehighlight_shape_70863.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70865){
var self__ = this;
var _70865__$1 = this;
return self__.meta70864;
}));

(app.main.data.workspace.highlight.dehighlight_shape_70863.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.highlight.dehighlight_shape_70863.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733)], null),cljs.core.disj,self__.id);
}));
}

return (new app.main.data.workspace.highlight.dehighlight_shape_70863(id,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.highlight.js.map
