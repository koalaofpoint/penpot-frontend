import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.types.path.js";
import "./app.main.data.workspace.path.state.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.path.common');
app.main.data.workspace.path.common.init_path = (function app$main$data$workspace$path$common$init_path(){
return potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.path.common","init-path","app.main.data.workspace.path.common/init-path",606122384),cljs.core.PersistentArrayMap.EMPTY);
});
app.main.data.workspace.path.common.clean_edit_state = (function app$main$data$workspace$path$common$clean_edit_state(state){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"last-point","last-point",-247743763),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prev-handler","prev-handler",1106999648),new cljs.core.Keyword(null,"drag-handler","drag-handler",401100376),new cljs.core.Keyword(null,"preview","preview",451279890)], 0));
});
app.main.data.workspace.path.common.finish_path = (function app$main$data$workspace$path$common$finish_path(){
if((typeof app.main.data.workspace.path.common.finish_path_66708 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.common.finish_path_66708 = (function (meta66709){
this.meta66709 = meta66709;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.common.finish_path_66708.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.common.finish_path_66708.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.common","finish-path","app.main.data.workspace.path.common/finish-path",-1299126936);
}));

(app.main.data.workspace.path.common.finish_path_66708.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_66710,meta66709__$1){
var self__ = this;
var _66710__$1 = this;
return (new app.main.data.workspace.path.common.finish_path_66708(meta66709__$1));
}));

(app.main.data.workspace.path.common.finish_path_66708.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_66710){
var self__ = this;
var _66710__$1 = this;
return self__.meta66709;
}));

(app.main.data.workspace.path.common.finish_path_66708.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.common.finish_path_66708.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id], null),app.main.data.workspace.path.common.clean_edit_state),app.main.data.workspace.path.state.get_path_location.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0)),app.common.types.path.close_subpaths);
}));
}

return (new app.main.data.workspace.path.common.finish_path_66708(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.path.common.js.map
