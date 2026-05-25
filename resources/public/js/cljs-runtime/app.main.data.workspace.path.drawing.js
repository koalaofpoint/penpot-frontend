import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.flex_layout.js";
import "./app.common.types.container.js";
import "./app.common.types.path.js";
import "./app.common.types.path.helpers.js";
import "./app.common.types.shape.js";
import "./app.common.types.shape_tree.js";
import "./app.common.types.shape.layout.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.drawing.common.js";
import "./app.main.data.workspace.edition.js";
import "./app.main.data.workspace.path.changes.js";
import "./app.main.data.workspace.path.common.js";
import "./app.main.data.workspace.path.helpers.js";
import "./app.main.data.workspace.path.state.js";
import "./app.main.data.workspace.path.streams.js";
import "./app.main.data.workspace.path.undo.js";
import "./app.main.data.workspace.shapes.js";
import "./app.util.mouse.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.path.drawing');
app.main.data.workspace.path.drawing.end_path_event_QMARK_ = (function app$main$data$workspace$path$drawing$end_path_event_QMARK_(event){
var type = potok.v2.core.type(event);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("app.main.data.workspace.path.common","finish-path","app.main.data.workspace.path.common/finish-path",-1299126936))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("app.main.data.workspace.path.shortcuts","esc-pressed","app.main.data.workspace.path.shortcuts/esc-pressed",2080782952))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("app.main.data.workspace.common","clear-edition-mode","app.main.data.workspace.common/clear-edition-mode",1327339287))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("app.main.data.workspace.edition","clear-edition-mode","app.main.data.workspace.edition/clear-edition-mode",1519383038))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("app.main.data.workspace.pages","finalize-page","app.main.data.workspace.pages/finalize-page",526513034))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178))) || (((app.util.mouse.mouse_event_QMARK_(event)) && (app.util.mouse.mouse_double_click_event_QMARK_(event)))))))))))))));
});
app.main.data.workspace.path.drawing.preview_next_point = (function app$main$data$workspace$path$drawing$preview_next_point(p__49723){
var map__49724 = p__49723;
var map__49724__$1 = cljs.core.__destructure_map(map__49724);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49724__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49724__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var shift_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49724__$1,new cljs.core.Keyword(null,"shift?","shift?",-1034734696));
if((typeof app.main.data.workspace.path.drawing.preview_next_point_49725 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.drawing.preview_next_point_49725 = (function (p__49723,map__49724,x,y,shift_QMARK_,meta49726){
this.p__49723 = p__49723;
this.map__49724 = map__49724;
this.x = x;
this.y = y;
this.shift_QMARK_ = shift_QMARK_;
this.meta49726 = meta49726;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.drawing.preview_next_point_49725.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.preview_next_point_49725.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.drawing","preview-next-point","app.main.data.workspace.path.drawing/preview-next-point",-51717842);
}));

(app.main.data.workspace.path.drawing.preview_next_point_49725.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49727,meta49726__$1){
var self__ = this;
var _49727__$1 = this;
return (new app.main.data.workspace.path.drawing.preview_next_point_49725(self__.p__49723,self__.map__49724,self__.x,self__.y,self__.shift_QMARK_,meta49726__$1));
}));

(app.main.data.workspace.path.drawing.preview_next_point_49725.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49727){
var self__ = this;
var _49727__$1 = this;
return self__.meta49726;
}));

(app.main.data.workspace.path.drawing.preview_next_point_49725.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.preview_next_point_49725.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
var fix_angle_QMARK_ = self__.shift_QMARK_;
var last_point = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"last-point","last-point",-247743763)], null));
var position = (function (){var G__49729 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(self__.x,self__.y);
if(cljs.core.truth_(fix_angle_QMARK_)){
return app.common.types.path.helpers.position_fixed_angle(G__49729,last_point);
} else {
return G__49729;
}
})();
var content = app.main.data.workspace.path.state.get_path.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0));
var map__49728 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id], null));
var map__49728__$1 = cljs.core.__destructure_map(map__49728);
var last_point__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49728__$1,new cljs.core.Keyword(null,"last-point","last-point",-247743763));
var prev_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49728__$1,new cljs.core.Keyword(null,"prev-handler","prev-handler",1106999648));
var segment = app.common.types.path.next_node(content,position,last_point__$1,prev_handler);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"preview","preview",451279890)], null),segment);
}));
}

return (new app.main.data.workspace.path.drawing.preview_next_point_49725(p__49723,map__49724__$1,x,y,shift_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.drawing.add_node = (function app$main$data$workspace$path$drawing$add_node(p__49730){
var map__49731 = p__49730;
var map__49731__$1 = cljs.core.__destructure_map(map__49731);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49731__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49731__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var shift_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49731__$1,new cljs.core.Keyword(null,"shift?","shift?",-1034734696));
if((typeof app.main.data.workspace.path.drawing.add_node_49732 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.drawing.add_node_49732 = (function (p__49730,map__49731,x,y,shift_QMARK_,meta49733){
this.p__49730 = p__49730;
this.map__49731 = map__49731;
this.x = x;
this.y = y;
this.shift_QMARK_ = shift_QMARK_;
this.meta49733 = meta49733;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.drawing.add_node_49732.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.add_node_49732.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.drawing","add-node","app.main.data.workspace.path.drawing/add-node",1655796338);
}));

(app.main.data.workspace.path.drawing.add_node_49732.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49734,meta49733__$1){
var self__ = this;
var _49734__$1 = this;
return (new app.main.data.workspace.path.drawing.add_node_49732(self__.p__49730,self__.map__49731,self__.x,self__.y,self__.shift_QMARK_,meta49733__$1));
}));

(app.main.data.workspace.path.drawing.add_node_49732.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49734){
var self__ = this;
var _49734__$1 = this;
return self__.meta49733;
}));

(app.main.data.workspace.path.drawing.add_node_49732.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.add_node_49732.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
var fix_angle_QMARK_ = self__.shift_QMARK_;
var map__49735 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id], null));
var map__49735__$1 = cljs.core.__destructure_map(map__49735);
var last_point = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49735__$1,new cljs.core.Keyword(null,"last-point","last-point",-247743763));
var prev_handler = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49735__$1,new cljs.core.Keyword(null,"prev-handler","prev-handler",1106999648));
var position = (function (){var G__49736 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(self__.x,self__.y);
if(cljs.core.truth_(fix_angle_QMARK_)){
return app.common.types.path.helpers.position_fixed_angle(G__49736,last_point);
} else {
return G__49736;
}
})();
if((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(last_point,position)))){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$6(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"last-point","last-point",-247743763)], null),position),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id], null),cljs.core.dissoc,new cljs.core.Keyword(null,"prev-handler","prev-handler",1106999648)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id], null),cljs.core.dissoc,new cljs.core.Keyword(null,"preview","preview",451279890)),app.main.data.workspace.path.state.get_path_location(state),app.main.data.workspace.path.helpers.append_node,position,last_point,prev_handler);
} else {
return state;
}
}));
}

return (new app.main.data.workspace.path.drawing.add_node_49732(p__49730,map__49731__$1,x,y,shift_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.drawing.drag_handler = (function app$main$data$workspace$path$drawing$drag_handler(var_args){
var G__49738 = arguments.length;
switch (G__49738) {
case 1:
return app.main.data.workspace.path.drawing.drag_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 4:
return app.main.data.workspace.path.drawing.drag_handler.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.path.drawing.drag_handler.cljs$core$IFn$_invoke$arity$1 = (function (position){
return app.main.data.workspace.path.drawing.drag_handler.cljs$core$IFn$_invoke$arity$4(null,null,new cljs.core.Keyword(null,"c1","c1",1132530803),position);
}));

(app.main.data.workspace.path.drawing.drag_handler.cljs$core$IFn$_invoke$arity$4 = (function (position,index,prefix,p__49739){
var map__49740 = p__49739;
var map__49740__$1 = cljs.core.__destructure_map(map__49740);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49740__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49740__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var alt_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49740__$1,new cljs.core.Keyword(null,"alt?","alt?",-1427998432));
var shift_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49740__$1,new cljs.core.Keyword(null,"shift?","shift?",-1034734696));
if((typeof app.main.data.workspace.path.drawing.drag_handler_49742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.drawing.drag_handler_49742 = (function (x,y,alt_QMARK_,map__49740,index,prefix,p__49739,shift_QMARK_,position,meta49743){
this.x = x;
this.y = y;
this.alt_QMARK_ = alt_QMARK_;
this.map__49740 = map__49740;
this.index = index;
this.prefix = prefix;
this.p__49739 = p__49739;
this.shift_QMARK_ = shift_QMARK_;
this.position = position;
this.meta49743 = meta49743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.drawing.drag_handler_49742.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.drag_handler_49742.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.drawing","drag-handler","app.main.data.workspace.path.drawing/drag-handler",905141402);
}));

(app.main.data.workspace.path.drawing.drag_handler_49742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49744,meta49743__$1){
var self__ = this;
var _49744__$1 = this;
return (new app.main.data.workspace.path.drawing.drag_handler_49742(self__.x,self__.y,self__.alt_QMARK_,self__.map__49740,self__.index,self__.prefix,self__.p__49739,self__.shift_QMARK_,self__.position,meta49743__$1));
}));

(app.main.data.workspace.path.drawing.drag_handler_49742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49744){
var self__ = this;
var _49744__$1 = this;
return self__.meta49743;
}));

(app.main.data.workspace.path.drawing.drag_handler_49742.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.drag_handler_49742.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
var content = app.main.data.workspace.path.state.get_path.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0));
var index__$1 = (function (){var or__5025__auto__ = self__.index;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.count(content);
}
})();
var prefix__$1 = (function (){var or__5025__auto__ = self__.prefix;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"c1","c1",1132530803);
}
})();
var position__$1 = (function (){var or__5025__auto__ = self__.position;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(content,(index__$1 - (1))));
}
})();
var old_handler = app.common.types.path.get_handler_point(content,index__$1,prefix__$1);
var handler_position = (function (){var G__49746 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(self__.x,self__.y);
if(cljs.core.truth_(self__.shift_QMARK_)){
return app.common.types.path.helpers.position_fixed_angle(G__49746,position__$1);
} else {
return G__49746;
}
})();
var map__49745 = (((!((old_handler == null))))?app.common.geom.point.add(app.common.geom.point.to_vec(old_handler,position__$1),app.common.geom.point.to_vec(position__$1,handler_position)):app.common.geom.point.to_vec(position__$1,handler_position));
var map__49745__$1 = cljs.core.__destructure_map(map__49745);
var dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49745__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49745__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var match_opposite_QMARK_ = cljs.core.not(self__.alt_QMARK_);
var modifiers = app.main.data.workspace.path.helpers.move_handler_modifiers(content,index__$1,prefix__$1,match_opposite_QMARK_,match_opposite_QMARK_,dx,dy);
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"content-modifiers","content-modifiers",158766480)], null),cljs.core.merge,modifiers),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"drag-handler","drag-handler",401100376)], null),handler_position);
}));
}

return (new app.main.data.workspace.path.drawing.drag_handler_49742(x,y,alt_QMARK_,map__49740__$1,index,prefix,p__49739,shift_QMARK_,position,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.path.drawing.drag_handler.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.path.drawing.finish_drag = (function app$main$data$workspace$path$drawing$finish_drag(){
if((typeof app.main.data.workspace.path.drawing.finish_drag_49747 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.drawing.finish_drag_49747 = (function (meta49748){
this.meta49748 = meta49748;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.drawing.finish_drag_49747.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.finish_drag_49747.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.drawing","finish-drag","app.main.data.workspace.path.drawing/finish-drag",291514611);
}));

(app.main.data.workspace.path.drawing.finish_drag_49747.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49749,meta49748__$1){
var self__ = this;
var _49749__$1 = this;
return (new app.main.data.workspace.path.drawing.finish_drag_49747(meta49748__$1));
}));

(app.main.data.workspace.path.drawing.finish_drag_49747.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49749){
var self__ = this;
var _49749__$1 = this;
return self__.meta49748;
}));

(app.main.data.workspace.path.drawing.finish_drag_49747.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.finish_drag_49747.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
var modifiers = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"content-modifiers","content-modifiers",158766480)], null));
var content = app.common.types.path.apply_content_modifiers(app.main.data.workspace.path.state.get_path.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0)),modifiers);
var handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"drag-handler","drag-handler",401100376)], null));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(app.main.data.workspace.path.state.set_content(state,content),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id], null),cljs.core.dissoc,new cljs.core.Keyword(null,"drag-handler","drag-handler",401100376)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id], null),cljs.core.dissoc,new cljs.core.Keyword(null,"content-modifiers","content-modifiers",158766480)),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"prev-handler","prev-handler",1106999648)], null),handler),app.main.data.workspace.path.state.get_path_location(state),app.common.types.path.update_geometry);
}));

(app.main.data.workspace.path.drawing.finish_drag_49747.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.finish_drag_49747.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
var handler = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"prev-handler","prev-handler",1106999648)], null));
return beicon.v2.core.of(app.main.data.workspace.path.drawing.preview_next_point(handler),app.main.data.workspace.path.undo.merge_head());
}));
}

return (new app.main.data.workspace.path.drawing.finish_drag_49747(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.drawing.close_path_drag_start = (function app$main$data$workspace$path$drawing$close_path_drag_start(position){
if((typeof app.main.data.workspace.path.drawing.close_path_drag_start_49751 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.drawing.close_path_drag_start_49751 = (function (position,meta49752){
this.position = position;
this.meta49752 = meta49752;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.drawing.close_path_drag_start_49751.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.close_path_drag_start_49751.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.drawing","close-path-drag-start","app.main.data.workspace.path.drawing/close-path-drag-start",-315624480);
}));

(app.main.data.workspace.path.drawing.close_path_drag_start_49751.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49753,meta49752__$1){
var self__ = this;
var _49753__$1 = this;
return (new app.main.data.workspace.path.drawing.close_path_drag_start_49751(self__.position,meta49752__$1));
}));

(app.main.data.workspace.path.drawing.close_path_drag_start_49751.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49753){
var self__ = this;
var _49753__$1 = this;
return self__.meta49752;
}));

(app.main.data.workspace.path.drawing.close_path_drag_start_49751.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.close_path_drag_start_49751.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var content = app.main.data.workspace.path.state.get_path.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0));
var handlers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.path.get_handlers(content),self__.position);
var vec__49757 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(handlers),(1)))?cljs.core.first(handlers):null);
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49757,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49757,(1),null);
var drag_events_stream = beicon.v2.core.take_until(beicon.v2.core.merge(app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$1(stream),beicon.v2.core.filter(app.main.data.workspace.path.drawing.end_path_event_QMARK_,stream)),beicon.v2.core.map((function (p1__49750_SHARP_){
return app.main.data.workspace.path.drawing.drag_handler.cljs$core$IFn$_invoke$arity$4(self__.position,idx,prefix,p1__49750_SHARP_);
}),app.main.data.workspace.path.streams.position_stream(state)));
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.path.drawing.add_node(self__.position)),app.main.data.workspace.path.streams.drag_stream.cljs$core$IFn$_invoke$arity$1(beicon.v2.core.concat(drag_events_stream,beicon.v2.core.of(app.main.data.workspace.path.drawing.finish_drag()),beicon.v2.core.of((app.main.data.workspace.path.drawing.close_path_drag_end.cljs$core$IFn$_invoke$arity$0 ? app.main.data.workspace.path.drawing.close_path_drag_end.cljs$core$IFn$_invoke$arity$0() : app.main.data.workspace.path.drawing.close_path_drag_end.call(null))))),beicon.v2.core.of(app.main.data.workspace.path.common.finish_path()));
}));
}

return (new app.main.data.workspace.path.drawing.close_path_drag_start_49751(position,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.drawing.close_path_drag_end = (function app$main$data$workspace$path$drawing$close_path_drag_end(){
if((typeof app.main.data.workspace.path.drawing.close_path_drag_end_49760 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.drawing.close_path_drag_end_49760 = (function (meta49761){
this.meta49761 = meta49761;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.drawing.close_path_drag_end_49760.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.close_path_drag_end_49760.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.drawing","close-path-drag-end","app.main.data.workspace.path.drawing/close-path-drag-end",-232898488);
}));

(app.main.data.workspace.path.drawing.close_path_drag_end_49760.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49762,meta49761__$1){
var self__ = this;
var _49762__$1 = this;
return (new app.main.data.workspace.path.drawing.close_path_drag_end_49760(meta49761__$1));
}));

(app.main.data.workspace.path.drawing.close_path_drag_end_49760.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49762){
var self__ = this;
var _49762__$1 = this;
return self__.meta49761;
}));

(app.main.data.workspace.path.drawing.close_path_drag_end_49760.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.close_path_drag_end_49760.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id], null),cljs.core.dissoc,new cljs.core.Keyword(null,"prev-handler","prev-handler",1106999648));
}));
}

return (new app.main.data.workspace.path.drawing.close_path_drag_end_49760(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.drawing.start_path_from_point = (function app$main$data$workspace$path$drawing$start_path_from_point(position){
if((typeof app.main.data.workspace.path.drawing.start_path_from_point_49776 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.drawing.start_path_from_point_49776 = (function (position,meta49777){
this.position = position;
this.meta49777 = meta49777;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.drawing.start_path_from_point_49776.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.start_path_from_point_49776.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.drawing","start-path-from-point","app.main.data.workspace.path.drawing/start-path-from-point",1488097888);
}));

(app.main.data.workspace.path.drawing.start_path_from_point_49776.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49778,meta49777__$1){
var self__ = this;
var _49778__$1 = this;
return (new app.main.data.workspace.path.drawing.start_path_from_point_49776(self__.position,meta49777__$1));
}));

(app.main.data.workspace.path.drawing.start_path_from_point_49776.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49778){
var self__ = this;
var _49778__$1 = this;
return self__.meta49777;
}));

(app.main.data.workspace.path.drawing.start_path_from_point_49776.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.start_path_from_point_49776.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var stopper = beicon.v2.core.merge(app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$1(stream),beicon.v2.core.filter(app.main.data.workspace.path.drawing.end_path_event_QMARK_,stream));
var drag_events = beicon.v2.core.take_until(stopper,beicon.v2.core.map((function (p1__49775_SHARP_){
return app.main.data.workspace.path.drawing.drag_handler.cljs$core$IFn$_invoke$arity$1(p1__49775_SHARP_);
}),app.main.data.workspace.path.streams.position_stream(state)));
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.path.drawing.add_node(self__.position)),app.main.data.workspace.path.streams.drag_stream.cljs$core$IFn$_invoke$arity$1(beicon.v2.core.concat(drag_events,beicon.v2.core.of(app.main.data.workspace.path.drawing.finish_drag()))));
}));
}

return (new app.main.data.workspace.path.drawing.start_path_from_point_49776(position,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.drawing.make_node_events_stream = (function app$main$data$workspace$path$drawing$make_node_events_stream(stream){
return beicon.v2.core.merge_map((function (){
return beicon.v2.core.empty();
}),beicon.v2.core.take((1),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.path.drawing","close-path-drag-start","app.main.data.workspace.path.drawing/close-path-drag-start",-315624480)),stream)));
});
app.main.data.workspace.path.drawing.make_drag_stream = (function app$main$data$workspace$path$drawing$make_drag_stream(state,stream,down_event){
if(app.common.geom.point.point_QMARK_(down_event)){
} else {
throw (new Error(["Assert failed: ","should be a point instance","\n","(gpt/point? down-event)"].join('')));
}

var stopper = beicon.v2.core.merge(app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$1(stream),beicon.v2.core.filter(app.main.data.workspace.path.drawing.end_path_event_QMARK_,stream));
var drag_events = beicon.v2.core.take_until(stopper,beicon.v2.core.map((function (p1__49802_SHARP_){
return app.main.data.workspace.path.drawing.drag_handler.cljs$core$IFn$_invoke$arity$1(p1__49802_SHARP_);
}),app.main.data.workspace.path.streams.position_stream(state)));
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.path.drawing.add_node(down_event)),app.main.data.workspace.path.streams.drag_stream.cljs$core$IFn$_invoke$arity$1(beicon.v2.core.concat(drag_events,beicon.v2.core.of(app.main.data.workspace.path.drawing.finish_drag()))));
});
app.main.data.workspace.path.drawing.start_edition = (function app$main$data$workspace$path$drawing$start_edition(_id){
if((typeof app.main.data.workspace.path.drawing.start_edition_49817 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.drawing.start_edition_49817 = (function (_id,meta49818){
this._id = _id;
this.meta49818 = meta49818;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.drawing.start_edition_49817.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.start_edition_49817.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.drawing","start-edition","app.main.data.workspace.path.drawing/start-edition",-1854348662);
}));

(app.main.data.workspace.path.drawing.start_edition_49817.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49819,meta49818__$1){
var self__ = this;
var _49819__$1 = this;
return (new app.main.data.workspace.path.drawing.start_edition_49817(self__._id,meta49818__$1));
}));

(app.main.data.workspace.path.drawing.start_edition_49817.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49819){
var self__ = this;
var _49819__$1 = this;
return self__.meta49818;
}));

(app.main.data.workspace.path.drawing.start_edition_49817.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.start_edition_49817.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993)], null),new cljs.core.Keyword(null,"draw","draw",1358331674));
}));

(app.main.data.workspace.path.drawing.start_edition_49817.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.start_edition_49817.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var mouse_down = beicon.v2.core.filter(app.util.mouse.mouse_down_event_QMARK_,beicon.v2.core.filter(app.util.mouse.mouse_event_QMARK_,stream));
var end_stream = beicon.v2.core.share(beicon.v2.core.filter(app.main.data.workspace.path.drawing.end_path_event_QMARK_,stream));
var stoper_stream = beicon.v2.core.merge(end_stream,beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.path.drawing","start-edition","app.main.data.workspace.path.drawing/start-edition",-1854348662)),stream));
var mousemove_events = beicon.v2.core.map((function (p1__49808_SHARP_){
return app.main.data.workspace.path.drawing.preview_next_point(p1__49808_SHARP_);
}),app.main.data.workspace.path.streams.position_stream(state));
var mousedown_events = beicon.v2.core.take_until(end_stream,beicon.v2.core.switch_map((function (p1__49812_SHARP_){
return beicon.v2.core.race(app.main.data.workspace.path.drawing.make_node_events_stream(stream),app.main.data.workspace.path.drawing.make_drag_stream(state,stream,p1__49812_SHARP_));
}),beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$3((function (p1__49811_SHARP_,p2__49810_SHARP_){
return p2__49810_SHARP_;
}),app.main.data.workspace.path.streams.position_stream(state),mouse_down)));
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.path.undo.start_path_undo()),beicon.v2.core.take_until(stoper_stream,beicon.v2.core.merge(mousemove_events,mousedown_events)),beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.path.drawing","end-edition","app.main.data.workspace.path.drawing/end-edition",-228545187))));
}));
}

return (new app.main.data.workspace.path.drawing.start_edition_49817(_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.drawing.setup_frame = (function app$main$data$workspace$path$drawing$setup_frame(){
if((typeof app.main.data.workspace.path.drawing.setup_frame_49830 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.drawing.setup_frame_49830 = (function (meta49831){
this.meta49831 = meta49831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.drawing.setup_frame_49830.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.setup_frame_49830.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.drawing","setup-frame","app.main.data.workspace.path.drawing/setup-frame",1408910788);
}));

(app.main.data.workspace.path.drawing.setup_frame_49830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49832,meta49831__$1){
var self__ = this;
var _49832__$1 = this;
return (new app.main.data.workspace.path.drawing.setup_frame_49830(meta49831__$1));
}));

(app.main.data.workspace.path.drawing.setup_frame_49830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49832){
var self__ = this;
var _49832__$1 = this;
return self__.meta49831;
}));

(app.main.data.workspace.path.drawing.setup_frame_49830.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.setup_frame_49830.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var content = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"content","content",15833224)], null),cljs.core.PersistentVector.EMPTY);
var position = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(content,(0)),new cljs.core.Keyword(null,"params","params",710516235)));
var frame_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(app.common.types.container.get_first_valid_parent(objects,app.common.types.shape_tree.top_nested_frame.cljs$core$IFn$_invoke$arity$2(objects,position)));
var flex_layout_QMARK_ = app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
var drop_index = (cljs.core.truth_(flex_layout_QMARK_)?app.common.geom.shapes.flex_layout.get_drop_index(frame_id,objects,position):null);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),new cljs.core.Keyword(null,"object","object",1474613949)], null),(function (object){
var G__49841 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(object,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),frame_id);
if((!((drop_index == null)))){
return cljs.core.with_meta(G__49841,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),drop_index], null));
} else {
return G__49841;
}
}));
}));
}

return (new app.main.data.workspace.path.drawing.setup_frame_49830(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.drawing.handle_drawing_end = (function app$main$data$workspace$path$drawing$handle_drawing_end(shape_id){
if((typeof app.main.data.workspace.path.drawing.handle_drawing_end_49845 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.drawing.handle_drawing_end_49845 = (function (shape_id,meta49846){
this.shape_id = shape_id;
this.meta49846 = meta49846;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.drawing.handle_drawing_end_49845.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.handle_drawing_end_49845.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.drawing","handle-drawing-end","app.main.data.workspace.path.drawing/handle-drawing-end",-2005869406);
}));

(app.main.data.workspace.path.drawing.handle_drawing_end_49845.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49847,meta49846__$1){
var self__ = this;
var _49847__$1 = this;
return (new app.main.data.workspace.path.drawing.handle_drawing_end_49845(self__.shape_id,meta49846__$1));
}));

(app.main.data.workspace.path.drawing.handle_drawing_end_49845.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49847){
var self__ = this;
var _49847__$1 = this;
return self__.meta49846;
}));

(app.main.data.workspace.path.drawing.handle_drawing_end_49845.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.handle_drawing_end_49845.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var content = (function (){var G__49852 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973)),new cljs.core.Keyword(null,"object","object",1474613949)),new cljs.core.Keyword(null,"content","content",15833224));
if((G__49852 == null)){
return null;
} else {
return app.common.types.path.check_content(G__49852);
}
})();
if((cljs.core.count(content) > (1))){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),new cljs.core.Keyword(null,"object","object",1474613949),new cljs.core.Keyword(null,"initialized?","initialized?",1707939066)], null),true);
} else {
return state;
}
}));

(app.main.data.workspace.path.drawing.handle_drawing_end_49845.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.handle_drawing_end_49845.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973)),new cljs.core.Keyword(null,"object","object",1474613949)),new cljs.core.Keyword(null,"content","content",15833224));
if(cljs.core.truth_(temp__5825__auto__)){
var content = temp__5825__auto__;
if((cljs.core.count(content) > (1))){
return beicon.v2.core.of(app.main.data.workspace.path.drawing.setup_frame(),app.main.data.workspace.drawing.common.handle_finish_drawing(),app.main.data.workspace.edition.start_edition_mode(self__.shape_id),(app.main.data.workspace.path.drawing.change_edit_mode.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.path.drawing.change_edit_mode.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"draw","draw",1358331674)) : app.main.data.workspace.path.drawing.change_edit_mode.call(null,new cljs.core.Keyword(null,"draw","draw",1358331674))));
} else {
return beicon.v2.core.of(app.main.data.workspace.drawing.common.handle_finish_drawing());
}
} else {
return null;
}
}));
}

return (new app.main.data.workspace.path.drawing.handle_drawing_end_49845(shape_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Hanndle the start of drawing new path shape
 */
app.main.data.workspace.path.drawing.handle_drawing = (function app$main$data$workspace$path$drawing$handle_drawing(){
if((typeof app.main.data.workspace.path.drawing.handle_new_shape_49862 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.drawing.handle_new_shape_49862 = (function (meta49863){
this.meta49863 = meta49863;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.drawing.handle_new_shape_49862.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.handle_new_shape_49862.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.drawing","handle-new-shape","app.main.data.workspace.path.drawing/handle-new-shape",-610817203);
}));

(app.main.data.workspace.path.drawing.handle_new_shape_49862.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49864,meta49863__$1){
var self__ = this;
var _49864__$1 = this;
return (new app.main.data.workspace.path.drawing.handle_new_shape_49862(meta49863__$1));
}));

(app.main.data.workspace.path.drawing.handle_new_shape_49862.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49864){
var self__ = this;
var _49864__$1 = this;
return self__.meta49863;
}));

(app.main.data.workspace.path.drawing.handle_new_shape_49862.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.handle_new_shape_49862.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var shape = app.common.types.shape.setup_shape(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"path","path",-188191168)], null));
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973),cljs.core.assoc,new cljs.core.Keyword(null,"object","object",1474613949),shape);
}));

(app.main.data.workspace.path.drawing.handle_new_shape_49862.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.handle_new_shape_49862.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var shape_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-drawing","workspace-drawing",-819329973)),new cljs.core.Keyword(null,"object","object",1474613949)),new cljs.core.Keyword(null,"id","id",-1388402092));
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.path.drawing.start_edition(shape_id)),beicon.v2.core.map(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.path.drawing.handle_drawing_end,shape_id),beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.take((1),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.path.drawing","end-edition","app.main.data.workspace.path.drawing/end-edition",-228545187)),stream)))));
}));
}

return (new app.main.data.workspace.path.drawing.handle_new_shape_49862(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.drawing.start_draw_mode = (function app$main$data$workspace$path$drawing$start_draw_mode(){
if((typeof app.main.data.workspace.path.drawing.start_draw_mode_49885 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.drawing.start_draw_mode_49885 = (function (meta49886){
this.meta49886 = meta49886;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.drawing.start_draw_mode_49885.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.start_draw_mode_49885.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.drawing","start-draw-mode","app.main.data.workspace.path.drawing/start-draw-mode",1212441248);
}));

(app.main.data.workspace.path.drawing.start_draw_mode_49885.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49887,meta49886__$1){
var self__ = this;
var _49887__$1 = this;
return (new app.main.data.workspace.path.drawing.start_draw_mode_49885(meta49886__$1));
}));

(app.main.data.workspace.path.drawing.start_draw_mode_49885.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49887){
var self__ = this;
var _49887__$1 = this;
return self__.meta49886;
}));

(app.main.data.workspace.path.drawing.start_draw_mode_49885.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.start_draw_mode_49885.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edition","edition",1337508089));
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id),new cljs.core.Keyword(null,"content","content",15833224));
if(cljs.core.truth_(content)){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id], null),cljs.core.assoc,new cljs.core.Keyword(null,"old-content","old-content",1851086779),content);
} else {
return state;
}
}));

(app.main.data.workspace.path.drawing.start_draw_mode_49885.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.start_draw_mode_49885.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of((app.main.data.workspace.path.drawing.start_draw_mode_STAR_.cljs$core$IFn$_invoke$arity$0 ? app.main.data.workspace.path.drawing.start_draw_mode_STAR_.cljs$core$IFn$_invoke$arity$0() : app.main.data.workspace.path.drawing.start_draw_mode_STAR_.call(null)));
}));
}

return (new app.main.data.workspace.path.drawing.start_draw_mode_49885(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.drawing.start_draw_mode_STAR_ = (function app$main$data$workspace$path$drawing$start_draw_mode_STAR_(){
if((typeof app.main.data.workspace.path.drawing.start_draw_mode_STAR__49892 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.drawing.start_draw_mode_STAR__49892 = (function (meta49893){
this.meta49893 = meta49893;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.drawing.start_draw_mode_STAR__49892.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.start_draw_mode_STAR__49892.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.drawing","start-draw-mode*","app.main.data.workspace.path.drawing/start-draw-mode*",-328303341);
}));

(app.main.data.workspace.path.drawing.start_draw_mode_STAR__49892.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49894,meta49893__$1){
var self__ = this;
var _49894__$1 = this;
return (new app.main.data.workspace.path.drawing.start_draw_mode_STAR__49892(meta49893__$1));
}));

(app.main.data.workspace.path.drawing.start_draw_mode_STAR__49892.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49894){
var self__ = this;
var _49894__$1 = this;
return self__.meta49893;
}));

(app.main.data.workspace.path.drawing.start_draw_mode_STAR__49892.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.start_draw_mode_STAR__49892.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(local,new cljs.core.Keyword(null,"edition","edition",1337508089));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(local,new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id),new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"draw","draw",1358331674),mode)){
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),app.common.types.path.convert_to_path)),beicon.v2.core.of(app.main.data.workspace.path.drawing.start_edition(id)),beicon.v2.core.mapcat((function (___$2){
return beicon.v2.core.of((app.main.data.workspace.path.drawing.check_changed_content.cljs$core$IFn$_invoke$arity$0 ? app.main.data.workspace.path.drawing.check_changed_content.cljs$core$IFn$_invoke$arity$0() : app.main.data.workspace.path.drawing.check_changed_content.call(null)),(app.main.data.workspace.path.drawing.start_draw_mode_STAR_.cljs$core$IFn$_invoke$arity$0 ? app.main.data.workspace.path.drawing.start_draw_mode_STAR_.cljs$core$IFn$_invoke$arity$0() : app.main.data.workspace.path.drawing.start_draw_mode_STAR_.call(null)));
}),beicon.v2.core.take((1),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.path.drawing","end-edition","app.main.data.workspace.path.drawing/end-edition",-228545187)),stream))));
} else {
return beicon.v2.core.empty();
}
}));
}

return (new app.main.data.workspace.path.drawing.start_draw_mode_STAR__49892(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.drawing.change_edit_mode = (function app$main$data$workspace$path$drawing$change_edit_mode(mode){
if((typeof app.main.data.workspace.path.drawing.change_edit_mode_49899 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.drawing.change_edit_mode_49899 = (function (mode,meta49900){
this.mode = mode;
this.meta49900 = meta49900;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.drawing.change_edit_mode_49899.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.change_edit_mode_49899.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.drawing","change-edit-mode","app.main.data.workspace.path.drawing/change-edit-mode",792108482);
}));

(app.main.data.workspace.path.drawing.change_edit_mode_49899.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49901,meta49900__$1){
var self__ = this;
var _49901__$1 = this;
return (new app.main.data.workspace.path.drawing.change_edit_mode_49899(self__.mode,meta49900__$1));
}));

(app.main.data.workspace.path.drawing.change_edit_mode_49899.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49901){
var self__ = this;
var _49901__$1 = this;
return self__.meta49900;
}));

(app.main.data.workspace.path.drawing.change_edit_mode_49899.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.change_edit_mode_49899.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edition","edition",1337508089));
if(cljs.core.truth_(temp__5823__auto__)){
var id = temp__5823__auto__;
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),self__.mode], 0));
} else {
return state;
}
}));

(app.main.data.workspace.path.drawing.change_edit_mode_49899.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.change_edit_mode_49899.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edition","edition",1337508089));
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
var mode__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id),new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993));
var G__49913 = mode__$1;
var G__49913__$1 = (((G__49913 instanceof cljs.core.Keyword))?G__49913.fqn:null);
switch (G__49913__$1) {
case "move":
return beicon.v2.core.of(app.main.data.workspace.path.common.finish_path());

break;
case "draw":
return beicon.v2.core.of(app.main.data.workspace.path.drawing.start_draw_mode());

break;
default:
return beicon.v2.core.empty();

}
} else {
return null;
}
}));
}

return (new app.main.data.workspace.path.drawing.change_edit_mode_49899(mode,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.drawing.reset_last_handler = (function app$main$data$workspace$path$drawing$reset_last_handler(){
if((typeof app.main.data.workspace.path.drawing.reset_last_handler_49914 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.drawing.reset_last_handler_49914 = (function (meta49915){
this.meta49915 = meta49915;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.drawing.reset_last_handler_49914.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.reset_last_handler_49914.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.drawing","reset-last-handler","app.main.data.workspace.path.drawing/reset-last-handler",-1057892147);
}));

(app.main.data.workspace.path.drawing.reset_last_handler_49914.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49916,meta49915__$1){
var self__ = this;
var _49916__$1 = this;
return (new app.main.data.workspace.path.drawing.reset_last_handler_49914(meta49915__$1));
}));

(app.main.data.workspace.path.drawing.reset_last_handler_49914.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49916){
var self__ = this;
var _49916__$1 = this;
return self__.meta49915;
}));

(app.main.data.workspace.path.drawing.reset_last_handler_49914.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.reset_last_handler_49914.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"prev-handler","prev-handler",1106999648)], null),null);
}));
}

return (new app.main.data.workspace.path.drawing.reset_last_handler_49914(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.drawing.check_changed_content = (function app$main$data$workspace$path$drawing$check_changed_content(){
if((typeof app.main.data.workspace.path.drawing.check_changed_content_49953 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.drawing.check_changed_content_49953 = (function (meta49954){
this.meta49954 = meta49954;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.drawing.check_changed_content_49953.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.check_changed_content_49953.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.drawing","check-changed-content","app.main.data.workspace.path.drawing/check-changed-content",1678819773);
}));

(app.main.data.workspace.path.drawing.check_changed_content_49953.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49955,meta49954__$1){
var self__ = this;
var _49955__$1 = this;
return (new app.main.data.workspace.path.drawing.check_changed_content_49953(meta49954__$1));
}));

(app.main.data.workspace.path.drawing.check_changed_content_49953.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49955){
var self__ = this;
var _49955__$1 = this;
return self__.meta49954;
}));

(app.main.data.workspace.path.drawing.check_changed_content_49953.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.drawing.check_changed_content_49953.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
var content = app.main.data.workspace.path.state.get_path.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0));
var old_content = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"old-content","old-content",1851086779)], null));
var mode = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993)], null));
var empty_content_QMARK_ = cljs.core.empty_QMARK_(content);
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(content,old_content)) && ((!(empty_content_QMARK_))))){
return beicon.v2.core.of(app.main.data.workspace.path.changes.save_path_content.cljs$core$IFn$_invoke$arity$0());
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"draw","draw",1358331674))){
return beicon.v2.core.of(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178));
} else {
return beicon.v2.core.of(app.main.data.workspace.path.common.finish_path(),app.main.data.workspace.drawing.common.clear_drawing());

}
}
}));
}

return (new app.main.data.workspace.path.drawing.check_changed_content_49953(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.path.drawing.js.map
