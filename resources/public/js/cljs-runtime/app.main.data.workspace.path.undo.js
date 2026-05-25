import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.undo_stack.js";
import "./app.common.uuid.js";
import "./app.main.data.workspace.common.js";
import "./app.main.data.workspace.path.changes.js";
import "./app.main.data.workspace.path.common.js";
import "./app.main.data.workspace.path.state.js";
import "./app.main.store.js";
import "./beicon.v2.core.js";
import "./okulary.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.path.undo');
app.main.data.workspace.path.undo.undo_event_QMARK_ = (function app$main$data$workspace$path$undo$undo_event_QMARK_(event){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.common","undo","app.main.data.workspace.common/undo",-1459605934),potok.v2.core.type(event));
});
app.main.data.workspace.path.undo.redo_event_QMARK_ = (function app$main$data$workspace$path$undo$redo_event_QMARK_(event){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.common","redo","app.main.data.workspace.common/redo",-109095064),potok.v2.core.type(event));
});
app.main.data.workspace.path.undo.make_entry = (function app$main$data$workspace$path$undo$make_entry(state){
var id = app.main.data.workspace.path.state.get_path_id(state);
var shape = app.main.data.workspace.path.state.get_path(state);
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"selrect","selrect",1966287292),new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"preview","preview",451279890),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"preview","preview",451279890)], null)),new cljs.core.Keyword(null,"last-point","last-point",-247743763),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"last-point","last-point",-247743763)], null)),new cljs.core.Keyword(null,"prev-handler","prev-handler",1106999648),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"prev-handler","prev-handler",1106999648)], null))], null);
});
app.main.data.workspace.path.undo.load_entry = (function app$main$data$workspace$path$undo$load_entry(state,p__49648){
var map__49652 = p__49648;
var map__49652__$1 = cljs.core.__destructure_map(map__49652);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49652__$1,new cljs.core.Keyword(null,"content","content",15833224));
var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49652__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49652__$1,new cljs.core.Keyword(null,"points","points",-1486596883));
var preview = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49652__$1,new cljs.core.Keyword(null,"preview","preview",451279890));
var last_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49652__$1,new cljs.core.Keyword(null,"last-point","last-point",-247743763));
var prev_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49652__$1,new cljs.core.Keyword(null,"prev-handler","prev-handler",1106999648));
var id = app.main.data.workspace.path.state.get_path_id(state);
var old_content = app.main.data.workspace.path.state.get_path.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0));
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.assoc_in_when(app.common.data.assoc_in_when(app.common.data.assoc_in_when(state,app.main.data.workspace.path.state.get_path_location.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0)),content),app.main.data.workspace.path.state.get_path_location.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"selrect","selrect",1966287292)], 0)),selrect),app.main.data.workspace.path.state.get_path_location.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"points","points",-1486596883)], 0)),points),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"preview","preview",451279890),preview,new cljs.core.Keyword(null,"last-point","last-point",-247743763),last_point,new cljs.core.Keyword(null,"prev-handler","prev-handler",1106999648),prev_handler,new cljs.core.Keyword(null,"old-content","old-content",1851086779),old_content], 0));
});
app.main.data.workspace.path.undo.undo_path = (function app$main$data$workspace$path$undo$undo_path(){
if((typeof app.main.data.workspace.path.undo.undo_path_49653 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.undo.undo_path_49653 = (function (meta49654){
this.meta49654 = meta49654;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.undo.undo_path_49653.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.undo.undo_path_49653.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.undo","undo-path","app.main.data.workspace.path.undo/undo-path",-442631179);
}));

(app.main.data.workspace.path.undo.undo_path_49653.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49655,meta49654__$1){
var self__ = this;
var _49655__$1 = this;
return (new app.main.data.workspace.path.undo.undo_path_49653(meta49654__$1));
}));

(app.main.data.workspace.path.undo.undo_path_49653.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49655){
var self__ = this;
var _49655__$1 = this;
return self__.meta49654;
}));

(app.main.data.workspace.path.undo.undo_path_49653.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.undo.undo_path_49653.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
var undo_stack = app.common.data.undo_stack.undo(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892)], null)));
var entry = app.common.data.undo_stack.peek(undo_stack);
var G__49656 = state;
if((!((entry == null)))){
return app.common.data.assoc_in_when(app.main.data.workspace.path.undo.load_entry(G__49656,entry),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892)], null),undo_stack);
} else {
return G__49656;
}
}));

(app.main.data.workspace.path.undo.undo_path_49653.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.undo.undo_path_49653.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
var undo_stack = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892)], null));
if((new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(undo_stack) > (0))){
return beicon.v2.core.of(app.main.data.workspace.path.changes.save_path_content.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preserve-move-to","preserve-move-to",1880571212),true], null)));
} else {
return beicon.v2.core.of(app.main.data.workspace.path.changes.save_path_content.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preserve-move-to","preserve-move-to",1880571212),true], null)),app.main.data.workspace.path.common.finish_path(),app.main.data.workspace.common.show_toolbar());
}
}));
}

return (new app.main.data.workspace.path.undo.undo_path_49653(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.undo.redo_path = (function app$main$data$workspace$path$undo$redo_path(){
if((typeof app.main.data.workspace.path.undo.redo_path_49658 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.undo.redo_path_49658 = (function (meta49659){
this.meta49659 = meta49659;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.undo.redo_path_49658.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.undo.redo_path_49658.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.undo","redo-path","app.main.data.workspace.path.undo/redo-path",-2139290544);
}));

(app.main.data.workspace.path.undo.redo_path_49658.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49660,meta49659__$1){
var self__ = this;
var _49660__$1 = this;
return (new app.main.data.workspace.path.undo.redo_path_49658(meta49659__$1));
}));

(app.main.data.workspace.path.undo.redo_path_49658.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49660){
var self__ = this;
var _49660__$1 = this;
return self__.meta49659;
}));

(app.main.data.workspace.path.undo.redo_path_49658.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.undo.redo_path_49658.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
var undo_stack = app.common.data.undo_stack.redo(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892)], null)));
var entry = app.common.data.undo_stack.peek(undo_stack);
return app.common.data.assoc_in_when(app.main.data.workspace.path.undo.load_entry(state,entry),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892)], null),undo_stack);
}));

(app.main.data.workspace.path.undo.redo_path_49658.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.undo.redo_path_49658.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.workspace.path.changes.save_path_content.cljs$core$IFn$_invoke$arity$0());
}));
}

return (new app.main.data.workspace.path.undo.redo_path_49658(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Joins the head with the previous undo in one. This is done so when the user changes a
 *   node handlers after adding it the undo merges both in one operation only
 */
app.main.data.workspace.path.undo.merge_head = (function app$main$data$workspace$path$undo$merge_head(){
if((typeof app.main.data.workspace.path.undo.merge_head_49664 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.undo.merge_head_49664 = (function (meta49665){
this.meta49665 = meta49665;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.undo.merge_head_49664.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.undo.merge_head_49664.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.undo","merge-head","app.main.data.workspace.path.undo/merge-head",703788867);
}));

(app.main.data.workspace.path.undo.merge_head_49664.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49666,meta49665__$1){
var self__ = this;
var _49666__$1 = this;
return (new app.main.data.workspace.path.undo.merge_head_49664(meta49665__$1));
}));

(app.main.data.workspace.path.undo.merge_head_49664.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49666){
var self__ = this;
var _49666__$1 = this;
return self__.meta49665;
}));

(app.main.data.workspace.path.undo.merge_head_49664.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.undo.merge_head_49664.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
var stack = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892)], null));
var head = app.common.data.undo_stack.peek(stack);
var stack__$1 = app.common.data.undo_stack.fixup(app.common.data.undo_stack.undo(stack),head);
return app.common.data.assoc_in_when(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892)], null),stack__$1);
}));
}

return (new app.main.data.workspace.path.undo.merge_head_49664(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.undo.add_undo_entry = (function app$main$data$workspace$path$undo$add_undo_entry(){
if((typeof app.main.data.workspace.path.undo.add_undo_entry_49671 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.undo.add_undo_entry_49671 = (function (meta49672){
this.meta49672 = meta49672;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.undo.add_undo_entry_49671.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.undo.add_undo_entry_49671.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.undo","add-undo-entry","app.main.data.workspace.path.undo/add-undo-entry",-1324903380);
}));

(app.main.data.workspace.path.undo.add_undo_entry_49671.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49673,meta49672__$1){
var self__ = this;
var _49673__$1 = this;
return (new app.main.data.workspace.path.undo.add_undo_entry_49671(meta49672__$1));
}));

(app.main.data.workspace.path.undo.add_undo_entry_49671.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49673){
var self__ = this;
var _49673__$1 = this;
return self__.meta49672;
}));

(app.main.data.workspace.path.undo.add_undo_entry_49671.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.undo.add_undo_entry_49671.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
var entry = app.main.data.workspace.path.undo.make_entry(state);
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892)], null),app.common.data.undo_stack.append,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entry], 0));
}));
}

return (new app.main.data.workspace.path.undo.add_undo_entry_49671(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.undo.end_path_undo = (function app$main$data$workspace$path$undo$end_path_undo(){
if((typeof app.main.data.workspace.path.undo.end_path_undo_49680 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.undo.end_path_undo_49680 = (function (meta49681){
this.meta49681 = meta49681;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.undo.end_path_undo_49680.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.undo.end_path_undo_49680.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.undo","end-path-undo","app.main.data.workspace.path.undo/end-path-undo",1735332515);
}));

(app.main.data.workspace.path.undo.end_path_undo_49680.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49682,meta49681__$1){
var self__ = this;
var _49682__$1 = this;
return (new app.main.data.workspace.path.undo.end_path_undo_49680(meta49681__$1));
}));

(app.main.data.workspace.path.undo.end_path_undo_49680.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49682){
var self__ = this;
var _49682__$1 = this;
return self__.meta49681;
}));

(app.main.data.workspace.path.undo.end_path_undo_49680.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.undo.end_path_undo_49680.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),app.main.data.workspace.path.state.get_path_id(state)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"undo-lock","undo-lock",-163038764),new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892)], 0));
}));
}

return (new app.main.data.workspace.path.undo.end_path_undo_49680(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.undo.stop_undo_QMARK_ = (function app$main$data$workspace$path$undo$stop_undo_QMARK_(event){
var type = potok.v2.core.type(event);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.edition","clear-edition-mode","app.main.data.workspace.edition/clear-edition-mode",1519383038),type)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.pages","finalize-page","app.main.data.workspace.pages/finalize-page",526513034),type)));
});
app.main.data.workspace.path.undo.path_content_ref = (function (){var selector = (function app$main$data$workspace$path$undo$selector(state){
return app.main.data.workspace.path.state.get_path.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0));
});
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2(selector,app.main.store.state);
})();
app.main.data.workspace.path.undo.start_path_undo = (function app$main$data$workspace$path$undo$start_path_undo(){
var lock = app.common.uuid.next();
if((typeof app.main.data.workspace.path.undo.start_path_undo_49684 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.undo.start_path_undo_49684 = (function (lock,meta49685){
this.lock = lock;
this.meta49685 = meta49685;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.undo.start_path_undo_49684.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.undo.start_path_undo_49684.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.undo","start-path-undo","app.main.data.workspace.path.undo/start-path-undo",-2079853018);
}));

(app.main.data.workspace.path.undo.start_path_undo_49684.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49686,meta49685__$1){
var self__ = this;
var _49686__$1 = this;
return (new app.main.data.workspace.path.undo.start_path_undo_49684(self__.lock,meta49685__$1));
}));

(app.main.data.workspace.path.undo.start_path_undo_49684.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49686){
var self__ = this;
var _49686__$1 = this;
return self__.meta49685;
}));

(app.main.data.workspace.path.undo.start_path_undo_49684.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.undo.start_path_undo_49684.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var undo_lock = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),app.main.data.workspace.path.state.get_path_id(state),new cljs.core.Keyword(null,"undo-lock","undo-lock",-163038764)], null));
var G__49694 = state;
if(cljs.core.not(undo_lock)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(G__49694,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),app.main.data.workspace.path.state.get_path_id(state)], null),cljs.core.assoc,new cljs.core.Keyword(null,"undo-lock","undo-lock",-163038764),self__.lock,new cljs.core.Keyword(null,"undo-stack","undo-stack",244619892),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.data.undo_stack.make_stack()], 0));
} else {
return G__49694;
}
}));

(app.main.data.workspace.path.undo.start_path_undo_49684.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.undo.start_path_undo_49684.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var undo_lock = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),app.main.data.workspace.path.state.get_path_id(state),new cljs.core.Keyword(null,"undo-lock","undo-lock",-163038764)], null));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(undo_lock,self__.lock)){
var stop_undo_stream = beicon.v2.core.take((1),beicon.v2.core.filter(app.main.data.workspace.path.undo.stop_undo_QMARK_,stream));
return beicon.v2.core.concat(beicon.v2.core.map((function (){
return app.main.data.workspace.path.undo.add_undo_entry();
}),beicon.v2.core.filter(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,cljs.core.nil_QMARK_),beicon.v2.core.take_until(stop_undo_stream,beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.path.undo.path_content_ref,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"emit-current-value?","emit-current-value?",56289147),true], null))))),beicon.v2.core.of(app.main.data.workspace.path.undo.end_path_undo()));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.path.undo.start_path_undo_49684(lock,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.path.undo.js.map
