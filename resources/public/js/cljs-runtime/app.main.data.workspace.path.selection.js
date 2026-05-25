import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.main.data.workspace.path.state.js";
import "./app.main.streams.js";
import "./app.util.mouse.js";
import "./beicon.v2.core.js";
import "./beicon.v2.operators.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.path.selection');
app.main.data.workspace.path.selection.path_pointer_enter = (function app$main$data$workspace$path$selection$path_pointer_enter(position){
if((typeof app.main.data.workspace.path.selection.path_pointer_enter_70191 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.selection.path_pointer_enter_70191 = (function (position,meta70192){
this.position = position;
this.meta70192 = meta70192;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.selection.path_pointer_enter_70191.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.path_pointer_enter_70191.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.selection","path-pointer-enter","app.main.data.workspace.path.selection/path-pointer-enter",-1500705105);
}));

(app.main.data.workspace.path.selection.path_pointer_enter_70191.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70193,meta70192__$1){
var self__ = this;
var _70193__$1 = this;
return (new app.main.data.workspace.path.selection.path_pointer_enter_70191(self__.position,meta70192__$1));
}));

(app.main.data.workspace.path.selection.path_pointer_enter_70191.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70193){
var self__ = this;
var _70193__$1 = this;
return self__.meta70192;
}));

(app.main.data.workspace.path.selection.path_pointer_enter_70191.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.path_pointer_enter_70191.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"hover-points","hover-points",-372943198)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),self__.position);
}));
}

return (new app.main.data.workspace.path.selection.path_pointer_enter_70191(position,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.selection.path_pointer_leave = (function app$main$data$workspace$path$selection$path_pointer_leave(position){
if((typeof app.main.data.workspace.path.selection.path_pointer_leave_70194 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.selection.path_pointer_leave_70194 = (function (position,meta70195){
this.position = position;
this.meta70195 = meta70195;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.selection.path_pointer_leave_70194.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.path_pointer_leave_70194.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.selection","path-pointer-leave","app.main.data.workspace.path.selection/path-pointer-leave",-1814776447);
}));

(app.main.data.workspace.path.selection.path_pointer_leave_70194.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70196,meta70195__$1){
var self__ = this;
var _70196__$1 = this;
return (new app.main.data.workspace.path.selection.path_pointer_leave_70194(self__.position,meta70195__$1));
}));

(app.main.data.workspace.path.selection.path_pointer_leave_70194.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70196){
var self__ = this;
var _70196__$1 = this;
return self__.meta70195;
}));

(app.main.data.workspace.path.selection.path_pointer_leave_70194.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.path_pointer_leave_70194.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"hover-points","hover-points",-372943198)], null),cljs.core.disj,self__.position);
}));
}

return (new app.main.data.workspace.path.selection.path_pointer_leave_70194(position,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.selection.path_handler_enter = (function app$main$data$workspace$path$selection$path_handler_enter(index,prefix){
if((typeof app.main.data.workspace.path.selection.path_handler_enter_70206 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.selection.path_handler_enter_70206 = (function (index,prefix,meta70207){
this.index = index;
this.prefix = prefix;
this.meta70207 = meta70207;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.selection.path_handler_enter_70206.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.path_handler_enter_70206.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.selection","path-handler-enter","app.main.data.workspace.path.selection/path-handler-enter",-1369135598);
}));

(app.main.data.workspace.path.selection.path_handler_enter_70206.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70208,meta70207__$1){
var self__ = this;
var _70208__$1 = this;
return (new app.main.data.workspace.path.selection.path_handler_enter_70206(self__.index,self__.prefix,meta70207__$1));
}));

(app.main.data.workspace.path.selection.path_handler_enter_70206.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70208){
var self__ = this;
var _70208__$1 = this;
return self__.meta70207;
}));

(app.main.data.workspace.path.selection.path_handler_enter_70206.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.path_handler_enter_70206.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"hover-handlers","hover-handlers",976618668)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.index,self__.prefix], null));
}));
}

return (new app.main.data.workspace.path.selection.path_handler_enter_70206(index,prefix,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.selection.path_handler_leave = (function app$main$data$workspace$path$selection$path_handler_leave(index,prefix){
if((typeof app.main.data.workspace.path.selection.path_handler_leave_70215 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.selection.path_handler_leave_70215 = (function (index,prefix,meta70216){
this.index = index;
this.prefix = prefix;
this.meta70216 = meta70216;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.selection.path_handler_leave_70215.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.path_handler_leave_70215.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.selection","path-handler-leave","app.main.data.workspace.path.selection/path-handler-leave",1323519696);
}));

(app.main.data.workspace.path.selection.path_handler_leave_70215.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70217,meta70216__$1){
var self__ = this;
var _70217__$1 = this;
return (new app.main.data.workspace.path.selection.path_handler_leave_70215(self__.index,self__.prefix,meta70216__$1));
}));

(app.main.data.workspace.path.selection.path_handler_leave_70215.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70217){
var self__ = this;
var _70217__$1 = this;
return self__.meta70216;
}));

(app.main.data.workspace.path.selection.path_handler_leave_70215.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.path_handler_leave_70215.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"hover-handlers","hover-handlers",976618668)], null),cljs.core.disj,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.index,self__.prefix], null));
}));
}

return (new app.main.data.workspace.path.selection.path_handler_leave_70215(index,prefix,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.selection.select_node_area = (function app$main$data$workspace$path$selection$select_node_area(initial_set,remove_QMARK_){
if((typeof app.main.data.workspace.path.selection.select_node_area_70225 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.selection.select_node_area_70225 = (function (initial_set,remove_QMARK_,meta70226){
this.initial_set = initial_set;
this.remove_QMARK_ = remove_QMARK_;
this.meta70226 = meta70226;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.selection.select_node_area_70225.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.select_node_area_70225.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.selection","select-node-area","app.main.data.workspace.path.selection/select-node-area",-759785288);
}));

(app.main.data.workspace.path.selection.select_node_area_70225.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70227,meta70226__$1){
var self__ = this;
var _70227__$1 = this;
return (new app.main.data.workspace.path.selection.select_node_area_70225(self__.initial_set,self__.remove_QMARK_,meta70226__$1));
}));

(app.main.data.workspace.path.selection.select_node_area_70225.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70227){
var self__ = this;
var _70227__$1 = this;
return self__.meta70226;
}));

(app.main.data.workspace.path.selection.select_node_area_70225.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.select_node_area_70225.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edition","edition",1337508089));
var content = app.main.data.workspace.path.state.get_path.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0));
var selected_point_QMARK_ = (((!((selrect == null))))?cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.has_point_rect_QMARK_,selrect):cljs.core.constantly(false));
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__70221_SHARP_){
return (!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"command","command",-894540724).cljs$core$IFn$_invoke$arity$1(p1__70221_SHARP_),new cljs.core.Keyword(null,"close-path","close-path",1220079654))));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.common.geom.point.point,new cljs.core.Keyword(null,"params","params",710516235))),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(selected_point_QMARK_));
var positions = (cljs.core.truth_(self__.remove_QMARK_)?cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,self__.initial_set,cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,xform,content)):cljs.core.into.cljs$core$IFn$_invoke$arity$3(self__.initial_set,xform,content));
var G__70239 = state;
if((!((id == null)))){
return cljs.core.assoc_in(G__70239,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"selected-points","selected-points",-1374936179)], null),positions);
} else {
return G__70239;
}
}));
}

return (new app.main.data.workspace.path.selection.select_node_area_70225(initial_set,remove_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.selection.select_node = (function app$main$data$workspace$path$selection$select_node(position,shift_QMARK_){
if((typeof app.main.data.workspace.path.selection.select_node_70248 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.selection.select_node_70248 = (function (position,shift_QMARK_,meta70249){
this.position = position;
this.shift_QMARK_ = shift_QMARK_;
this.meta70249 = meta70249;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.selection.select_node_70248.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.select_node_70248.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.selection","select-node","app.main.data.workspace.path.selection/select-node",-990331561);
}));

(app.main.data.workspace.path.selection.select_node_70248.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70250,meta70249__$1){
var self__ = this;
var _70250__$1 = this;
return (new app.main.data.workspace.path.selection.select_node_70248(self__.position,self__.shift_QMARK_,meta70249__$1));
}));

(app.main.data.workspace.path.selection.select_node_70248.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70250){
var self__ = this;
var _70250__$1 = this;
return self__.meta70249;
}));

(app.main.data.workspace.path.selection.select_node_70248.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.select_node_70248.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edition","edition",1337508089));
var selected_points = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id),new cljs.core.Keyword(null,"selected-points","selected-points",-1374936179),cljs.core.PersistentHashSet.EMPTY);
var selected_points__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = self__.shift_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.contains_QMARK_(selected_points,self__.position);
} else {
return and__5023__auto__;
}
})())?cljs.core.disj.cljs$core$IFn$_invoke$arity$2(selected_points,self__.position):(cljs.core.truth_(self__.shift_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected_points,self__.position):cljs.core.PersistentHashSet.createAsIfByAssoc([self__.position])
));
var G__70263 = state;
if((!((id == null)))){
return cljs.core.assoc_in(G__70263,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"selected-points","selected-points",-1374936179)], null),selected_points__$1);
} else {
return G__70263;
}
}));
}

return (new app.main.data.workspace.path.selection.select_node_70248(position,shift_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.selection.deselect_all = (function app$main$data$workspace$path$selection$deselect_all(){
if((typeof app.main.data.workspace.path.selection.deselect_all_70271 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.selection.deselect_all_70271 = (function (meta70272){
this.meta70272 = meta70272;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.selection.deselect_all_70271.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.deselect_all_70271.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.selection","deselect-all","app.main.data.workspace.path.selection/deselect-all",-1275706508);
}));

(app.main.data.workspace.path.selection.deselect_all_70271.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70273,meta70272__$1){
var self__ = this;
var _70273__$1 = this;
return (new app.main.data.workspace.path.selection.deselect_all_70271(meta70272__$1));
}));

(app.main.data.workspace.path.selection.deselect_all_70271.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70273){
var self__ = this;
var _70273__$1 = this;
return self__.meta70272;
}));

(app.main.data.workspace.path.selection.deselect_all_70271.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.deselect_all_70271.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"selected-points","selected-points",-1374936179)], null),cljs.core.PersistentHashSet.EMPTY);
}));
}

return (new app.main.data.workspace.path.selection.deselect_all_70271(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.selection.update_area_selection = (function app$main$data$workspace$path$selection$update_area_selection(rect){
if((typeof app.main.data.workspace.path.selection.update_area_selection_70279 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.selection.update_area_selection_70279 = (function (rect,meta70280){
this.rect = rect;
this.meta70280 = meta70280;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.selection.update_area_selection_70279.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.update_area_selection_70279.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.selection","update-area-selection","app.main.data.workspace.path.selection/update-area-selection",1476390772);
}));

(app.main.data.workspace.path.selection.update_area_selection_70279.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70281,meta70280__$1){
var self__ = this;
var _70281__$1 = this;
return (new app.main.data.workspace.path.selection.update_area_selection_70279(self__.rect,meta70280__$1));
}));

(app.main.data.workspace.path.selection.update_area_selection_70279.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70281){
var self__ = this;
var _70281__$1 = this;
return self__.meta70280;
}));

(app.main.data.workspace.path.selection.update_area_selection_70279.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.update_area_selection_70279.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"selrect","selrect",1966287292)], null),self__.rect);
}));
}

return (new app.main.data.workspace.path.selection.update_area_selection_70279(rect,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.selection.clear_area_selection = (function app$main$data$workspace$path$selection$clear_area_selection(){
if((typeof app.main.data.workspace.path.selection.clear_area_selection_70289 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.selection.clear_area_selection_70289 = (function (meta70290){
this.meta70290 = meta70290;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.selection.clear_area_selection_70289.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.clear_area_selection_70289.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.selection","clear-area-selection","app.main.data.workspace.path.selection/clear-area-selection",-1762539275);
}));

(app.main.data.workspace.path.selection.clear_area_selection_70289.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70291,meta70290__$1){
var self__ = this;
var _70291__$1 = this;
return (new app.main.data.workspace.path.selection.clear_area_selection_70289(meta70290__$1));
}));

(app.main.data.workspace.path.selection.clear_area_selection_70289.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70291){
var self__ = this;
var _70291__$1 = this;
return self__.meta70290;
}));

(app.main.data.workspace.path.selection.clear_area_selection_70289.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.clear_area_selection_70289.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),cljs.core.dissoc,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
}));
}

return (new app.main.data.workspace.path.selection.clear_area_selection_70289(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.selection.handle_area_selection = (function app$main$data$workspace$path$selection$handle_area_selection(append_QMARK_,remove_QMARK_){
var valid_rect_QMARK_ = (function app$main$data$workspace$path$selection$handle_area_selection_$_valid_rect_QMARK_(zoom,p__70295){
var map__70296 = p__70295;
var map__70296__$1 = cljs.core.__destructure_map(map__70296);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70296__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70296__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return (((width > ((10) / zoom))) || ((height > ((10) / zoom))));
});
if((typeof app.main.data.workspace.path.selection.handle_area_selection_70297 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.selection.handle_area_selection_70297 = (function (append_QMARK_,remove_QMARK_,valid_rect_QMARK_,meta70298){
this.append_QMARK_ = append_QMARK_;
this.remove_QMARK_ = remove_QMARK_;
this.valid_rect_QMARK_ = valid_rect_QMARK_;
this.meta70298 = meta70298;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.selection.handle_area_selection_70297.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.handle_area_selection_70297.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.selection","handle-area-selection","app.main.data.workspace.path.selection/handle-area-selection",71306449);
}));

(app.main.data.workspace.path.selection.handle_area_selection_70297.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70299,meta70298__$1){
var self__ = this;
var _70299__$1 = this;
return (new app.main.data.workspace.path.selection.handle_area_selection_70297(self__.append_QMARK_,self__.remove_QMARK_,self__.valid_rect_QMARK_,meta70298__$1));
}));

(app.main.data.workspace.path.selection.handle_area_selection_70297.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70299){
var self__ = this;
var _70299__$1 = this;
return self__.meta70298;
}));

(app.main.data.workspace.path.selection.handle_area_selection_70297.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.handle_area_selection_70297.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edition","edition",1337508089));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(1));
var stopper = app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$1(stream);
var from_p = cljs.core.deref(app.main.streams.mouse_position);
var initial_set = (cljs.core.truth_((function (){var or__5025__auto__ = self__.append_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return self__.remove_QMARK_;
}
})())?cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id),new cljs.core.Keyword(null,"selected-points","selected-points",-1374936179),cljs.core.PersistentHashSet.EMPTY):cljs.core.PersistentHashSet.EMPTY);
var selrect_stream = beicon.v2.core.take_until(stopper,beicon.v2.core.filter(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.valid_rect_QMARK_,zoom),beicon.v2.core.map((function (p1__70292_SHARP_){
return app.common.geom.rect.points__GT_rect(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [from_p,p1__70292_SHARP_], null));
}),app.main.streams.mouse_position)));
return beicon.v2.core.concat((cljs.core.truth_((function (){var or__5025__auto__ = self__.append_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return self__.remove_QMARK_;
}
})())?beicon.v2.core.empty():beicon.v2.core.of(app.main.data.workspace.path.selection.deselect_all())),beicon.v2.core.merge(beicon.v2.core.map(app.main.data.workspace.path.selection.update_area_selection,selrect_stream),beicon.v2.core.map((function (){
return app.main.data.workspace.path.selection.select_node_area(initial_set,self__.remove_QMARK_);
}),beicon.v2.core.pipe(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$0(),beicon.v2.core.map(cljs.core.last,beicon.v2.core.buffer_time.cljs$core$IFn$_invoke$arity$2((100),selrect_stream))))),beicon.v2.core.of(app.main.data.workspace.path.selection.clear_area_selection()));
}));
}

return (new app.main.data.workspace.path.selection.handle_area_selection_70297(append_QMARK_,remove_QMARK_,valid_rect_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.selection.update_selection = (function app$main$data$workspace$path$selection$update_selection(point_change){
if((typeof app.main.data.workspace.path.selection.update_selection_70306 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.selection.update_selection_70306 = (function (point_change,meta70307){
this.point_change = point_change;
this.meta70307 = meta70307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.selection.update_selection_70306.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.update_selection_70306.prototype.potok$v2$core$Event$_type$arity$1 = (function (___46411__auto__){
var self__ = this;
var ___46411__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.selection","update-selection","app.main.data.workspace.path.selection/update-selection",1398542135);
}));

(app.main.data.workspace.path.selection.update_selection_70306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_70308,meta70307__$1){
var self__ = this;
var _70308__$1 = this;
return (new app.main.data.workspace.path.selection.update_selection_70306(self__.point_change,meta70307__$1));
}));

(app.main.data.workspace.path.selection.update_selection_70306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_70308){
var self__ = this;
var _70308__$1 = this;
return self__.meta70307;
}));

(app.main.data.workspace.path.selection.update_selection_70306.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.selection.update_selection_70306.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
var selected_points = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id),new cljs.core.Keyword(null,"selected-points","selected-points",-1374936179),cljs.core.PersistentHashSet.EMPTY);
var selected_points__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(self__.point_change),selected_points);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"selected-points","selected-points",-1374936179)], null),selected_points__$1);
}));
}

return (new app.main.data.workspace.path.selection.update_selection_70306(point_change,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.path.selection.js.map
