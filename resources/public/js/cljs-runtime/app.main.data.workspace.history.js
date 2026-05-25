import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.workspace.common.js";
import "./app.main.data.workspace.layout.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.history');
app.main.data.workspace.history.initialize_history = (function app$main$data$workspace$history$initialize_history(){
if((typeof app.main.data.workspace.history.initialize_history_55097 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.history.initialize_history_55097 = (function (meta55098){
this.meta55098 = meta55098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.history.initialize_history_55097.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.history.initialize_history_55097.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.history","initialize-history","app.main.data.workspace.history/initialize-history",-627816697);
}));

(app.main.data.workspace.history.initialize_history_55097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_55099,meta55098__$1){
var self__ = this;
var _55099__$1 = this;
return (new app.main.data.workspace.history.initialize_history_55097(meta55098__$1));
}));

(app.main.data.workspace.history.initialize_history_55097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_55099){
var self__ = this;
var _55099__$1 = this;
return self__.meta55098;
}));

(app.main.data.workspace.history.initialize_history_55097.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.history.initialize_history_55097.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
var clear_history_mode = (function (){
return app.main.data.workspace.layout.remove_layout_flag(new cljs.core.Keyword(null,"document-history","document-history",1908608999));
});
return beicon.v2.core.merge(beicon.v2.core.of(app.main.data.workspace.layout.toggle_layout_flag(new cljs.core.Keyword(null,"document-history","document-history",1908608999))),beicon.v2.core.map(clear_history_mode,beicon.v2.core.take((1),beicon.v2.core.filter(app.main.data.workspace.common.interrupt_QMARK_,stream))));
}));
}

return (new app.main.data.workspace.history.initialize_history_55097(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.history.js.map
