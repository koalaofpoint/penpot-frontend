import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.types.path.js";
import "./app.common.types.path.helpers.js";
import "./app.main.data.changes.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.edition.js";
import "./app.main.data.workspace.path.changes.js";
import "./app.main.data.workspace.path.helpers.js";
import "./app.main.data.workspace.path.selection.js";
import "./app.main.data.workspace.path.state.js";
import "./app.main.data.workspace.path.streams.js";
import "./app.main.data.workspace.path.undo.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.streams.js";
import "./app.util.mouse.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.path.edition');
app.main.data.workspace.path.edition.modify_handler = (function app$main$data$workspace$path$edition$modify_handler(id,index,prefix,dx,dy,match_opposite_QMARK_){
if((typeof app.main.data.workspace.path.edition.modify_handler_49754 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.edition.modify_handler_49754 = (function (id,index,prefix,dx,dy,match_opposite_QMARK_,meta49755){
this.id = id;
this.index = index;
this.prefix = prefix;
this.dx = dx;
this.dy = dy;
this.match_opposite_QMARK_ = match_opposite_QMARK_;
this.meta49755 = meta49755;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.edition.modify_handler_49754.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.modify_handler_49754.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.edition","modify-handler","app.main.data.workspace.path.edition/modify-handler",1743833054);
}));

(app.main.data.workspace.path.edition.modify_handler_49754.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49756,meta49755__$1){
var self__ = this;
var _49756__$1 = this;
return (new app.main.data.workspace.path.edition.modify_handler_49754(self__.id,self__.index,self__.prefix,self__.dx,self__.dy,self__.match_opposite_QMARK_,meta49755__$1));
}));

(app.main.data.workspace.path.edition.modify_handler_49754.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49756){
var self__ = this;
var _49756__$1 = this;
return self__.meta49755;
}));

(app.main.data.workspace.path.edition.modify_handler_49754.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.modify_handler_49754.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var content = app.main.data.workspace.path.state.get_path.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0));
var modifiers = app.main.data.workspace.path.helpers.move_handler_modifiers(content,self__.index,self__.prefix,false,self__.match_opposite_QMARK_,self__.dx,self__.dy);
var vec__49763 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.prefix,new cljs.core.Keyword(null,"c1","c1",1132530803)))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c1x","c1x",-1789291378),new cljs.core.Keyword(null,"c1y","c1y",-1210747344)], null):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"c2x","c2x",-699963108),new cljs.core.Keyword(null,"c2y","c2y",1361944924)], null));
var cx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49763,(0),null);
var cy = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49763,(1),null);
var point = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(content,self__.index),new cljs.core.Keyword(null,"params","params",710516235)),cx) + self__.dx),(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(content,self__.index),new cljs.core.Keyword(null,"params","params",710516235)),cy) + self__.dy));
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),self__.id,new cljs.core.Keyword(null,"content-modifiers","content-modifiers",158766480)], null),cljs.core.merge,modifiers),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),self__.id,new cljs.core.Keyword(null,"moving-handler","moving-handler",-188315359)], null),point);
}));
}

return (new app.main.data.workspace.path.edition.modify_handler_49754(id,index,prefix,dx,dy,match_opposite_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.edition.apply_content_modifiers = (function app$main$data$workspace$path$edition$apply_content_modifiers(){
if((typeof app.main.data.workspace.path.edition.apply_content_modifiers_49769 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.edition.apply_content_modifiers_49769 = (function (meta49770){
this.meta49770 = meta49770;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.edition.apply_content_modifiers_49769.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.apply_content_modifiers_49769.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.edition","apply-content-modifiers","app.main.data.workspace.path.edition/apply-content-modifiers",-823918355);
}));

(app.main.data.workspace.path.edition.apply_content_modifiers_49769.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49771,meta49770__$1){
var self__ = this;
var _49771__$1 = this;
return (new app.main.data.workspace.path.edition.apply_content_modifiers_49769(meta49770__$1));
}));

(app.main.data.workspace.path.edition.apply_content_modifiers_49769.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49771){
var self__ = this;
var _49771__$1 = this;
return self__.meta49770;
}));

(app.main.data.workspace.path.edition.apply_content_modifiers_49769.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.apply_content_modifiers_49769.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
var shape = app.main.data.workspace.path.state.get_path(state);
var content_modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id),new cljs.core.Keyword(null,"content-modifiers","content-modifiers",158766480));
if((((shape == null)) || ((content_modifiers == null)))){
return beicon.v2.core.of(app.main.data.workspace.edition.clear_edition_mode());
} else {
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425),state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"content","content",15833224));
var new_content = app.common.types.path.apply_content_modifiers(content,content_modifiers);
var old_points = app.common.types.path.get_points(content);
var new_points = app.common.types.path.get_points(new_content);
var point_change = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.hash_map,old_points,new_points));
if((((!((new_content == null)))) && ((!((shape == null)))))){
var changes = app.main.data.workspace.path.changes.generate_path_changes(it__$1,objects,page_id,shape,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape),new_content);
if(cljs.core.empty_QMARK_(new_content)){
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),app.main.data.workspace.edition.clear_edition_mode());
} else {
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),app.main.data.workspace.path.selection.update_selection(point_change),(function (state__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$6(state__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id], null),cljs.core.dissoc,new cljs.core.Keyword(null,"content-modifiers","content-modifiers",158766480),new cljs.core.Keyword(null,"moving-nodes","moving-nodes",-1718310036),new cljs.core.Keyword(null,"moving-handler","moving-handler",-188315359));
}));
}
} else {
return null;
}
}
}));
}

return (new app.main.data.workspace.path.edition.apply_content_modifiers_49769(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.edition.modify_content_point = (function app$main$data$workspace$path$edition$modify_content_point(content,p__49792,modifiers,point){
var map__49793 = p__49792;
var map__49793__$1 = cljs.core.__destructure_map(map__49793);
var dx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49793__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var dy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49793__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var point_indices = app.common.types.path.point_indices(content,point);
var handler_indices = app.common.types.path.handler_indices(content,point);
var modify_point = (function (modifiers__$1,index){
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(modifiers__$1,index,cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),dx,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dy], 0));
});
var modify_handler = (function (modifiers__$1,p__49794){
var vec__49795 = p__49794;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49795,(0),null);
var prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49795,(1),null);
var cx = app.common.data.prefix_keyword(prefix,new cljs.core.Keyword(null,"x","x",2099068185));
var cy = app.common.data.prefix_keyword(prefix,new cljs.core.Keyword(null,"y","y",-1757859776));
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(modifiers__$1,index,cljs.core.assoc,cx,dx,cy,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([dy], 0));
});
var $ = modifiers;
var $__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(modify_point,$,point_indices);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(modify_handler,$__$1,handler_indices);
});
app.main.data.workspace.path.edition.set_move_modifier = (function app$main$data$workspace$path$edition$set_move_modifier(points,move_modifier){
if((typeof app.main.data.workspace.path.edition.set_modifiers_49799 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.edition.set_modifiers_49799 = (function (points,move_modifier,meta49800){
this.points = points;
this.move_modifier = move_modifier;
this.meta49800 = meta49800;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.edition.set_modifiers_49799.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.set_modifiers_49799.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.edition","set-modifiers","app.main.data.workspace.path.edition/set-modifiers",-1530576040);
}));

(app.main.data.workspace.path.edition.set_modifiers_49799.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49801,meta49800__$1){
var self__ = this;
var _49801__$1 = this;
return (new app.main.data.workspace.path.edition.set_modifiers_49799(self__.points,self__.move_modifier,meta49800__$1));
}));

(app.main.data.workspace.path.edition.set_modifiers_49799.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49801){
var self__ = this;
var _49801__$1 = this;
return self__.meta49800;
}));

(app.main.data.workspace.path.edition.set_modifiers_49799.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.set_modifiers_49799.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
var content = app.main.data.workspace.path.state.get_path.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0));
var modifiers_reducer = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.data.workspace.path.edition.modify_content_point,content,self__.move_modifier);
var content_modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id),new cljs.core.Keyword(null,"content-modifiers","content-modifiers",158766480),cljs.core.PersistentArrayMap.EMPTY);
var content_modifiers__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(modifiers_reducer,content_modifiers,self__.points);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"content-modifiers","content-modifiers",158766480)], null),content_modifiers__$1);
}));
}

return (new app.main.data.workspace.path.edition.set_modifiers_49799(points,move_modifier,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.edition.move_selected_path_point = (function app$main$data$workspace$path$edition$move_selected_path_point(from_point,to_point){
if((typeof app.main.data.workspace.path.edition.move_point_49825 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.edition.move_point_49825 = (function (from_point,to_point,meta49826){
this.from_point = from_point;
this.to_point = to_point;
this.meta49826 = meta49826;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.edition.move_point_49825.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.move_point_49825.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.edition","move-point","app.main.data.workspace.path.edition/move-point",-1301992025);
}));

(app.main.data.workspace.path.edition.move_point_49825.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49827,meta49826__$1){
var self__ = this;
var _49827__$1 = this;
return (new app.main.data.workspace.path.edition.move_point_49825(self__.from_point,self__.to_point,meta49826__$1));
}));

(app.main.data.workspace.path.edition.move_point_49825.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49827){
var self__ = this;
var _49827__$1 = this;
return self__.meta49826;
}));

(app.main.data.workspace.path.edition.move_point_49825.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.move_point_49825.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
var content = app.main.data.workspace.path.state.get_path.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0));
var to_point__$1 = (function (){var G__49840 = self__.to_point;
if(cljs.core.truth_(new cljs.core.Keyword(null,"shift?","shift?",-1034734696).cljs$core$IFn$_invoke$arity$1(self__.to_point))){
return app.common.types.path.helpers.position_fixed_angle(G__49840,self__.from_point);
} else {
return G__49840;
}
})();
var delta = app.common.geom.point.subtract(to_point__$1,self__.from_point);
var modifiers_reducer = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.data.workspace.path.edition.modify_content_point,content,delta);
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id),new cljs.core.Keyword(null,"selected-points","selected-points",-1374936179),cljs.core.PersistentHashSet.EMPTY);
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id),new cljs.core.Keyword(null,"content-modifiers","content-modifiers",158766480),cljs.core.PersistentArrayMap.EMPTY);
var modifiers__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(modifiers_reducer,modifiers,points);
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"moving-nodes","moving-nodes",-1718310036)], null),true),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"content-modifiers","content-modifiers",158766480)], null),modifiers__$1);
}));
}

return (new app.main.data.workspace.path.edition.move_point_49825(from_point,to_point,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.edition.start_move_path_point = (function app$main$data$workspace$path$edition$start_move_path_point(position,shift_QMARK_){
if((typeof app.main.data.workspace.path.edition.start_move_path_point_49857 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.edition.start_move_path_point_49857 = (function (position,shift_QMARK_,meta49858){
this.position = position;
this.shift_QMARK_ = shift_QMARK_;
this.meta49858 = meta49858;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.edition.start_move_path_point_49857.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.start_move_path_point_49857.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.edition","start-move-path-point","app.main.data.workspace.path.edition/start-move-path-point",1051432604);
}));

(app.main.data.workspace.path.edition.start_move_path_point_49857.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49859,meta49858__$1){
var self__ = this;
var _49859__$1 = this;
return (new app.main.data.workspace.path.edition.start_move_path_point_49857(self__.position,self__.shift_QMARK_,meta49858__$1));
}));

(app.main.data.workspace.path.edition.start_move_path_point_49857.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49859){
var self__ = this;
var _49859__$1 = this;
return self__.meta49858;
}));

(app.main.data.workspace.path.edition.start_move_path_point_49857.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.start_move_path_point_49857.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edition","edition",1337508089));
var selected_points = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id),new cljs.core.Keyword(null,"selected-points","selected-points",-1374936179),cljs.core.PersistentHashSet.EMPTY);
var selected_QMARK_ = cljs.core.contains_QMARK_(selected_points,self__.position);
return app.main.data.workspace.path.streams.drag_stream.cljs$core$IFn$_invoke$arity$2(beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),app.common.types.path.convert_to_path),((selected_QMARK_)?null:app.main.data.workspace.path.selection.select_node(self__.position,self__.shift_QMARK_)),(function (){var G__49881 = cljs.core.deref(app.main.streams.mouse_position);
return (app.main.data.workspace.path.edition.drag_selected_points.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.path.edition.drag_selected_points.cljs$core$IFn$_invoke$arity$1(G__49881) : app.main.data.workspace.path.edition.drag_selected_points.call(null,G__49881));
})()),beicon.v2.core.of(app.main.data.workspace.path.selection.select_node(self__.position,self__.shift_QMARK_)));
}));
}

return (new app.main.data.workspace.path.edition.start_move_path_point_49857(position,shift_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.edition.drag_selected_points = (function app$main$data$workspace$path$edition$drag_selected_points(start_position){
if((typeof app.main.data.workspace.path.edition.drag_selected_points_49888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.edition.drag_selected_points_49888 = (function (start_position,meta49889){
this.start_position = start_position;
this.meta49889 = meta49889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.edition.drag_selected_points_49888.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.drag_selected_points_49888.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.edition","drag-selected-points","app.main.data.workspace.path.edition/drag-selected-points",1833717476);
}));

(app.main.data.workspace.path.edition.drag_selected_points_49888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49890,meta49889__$1){
var self__ = this;
var _49890__$1 = this;
return (new app.main.data.workspace.path.edition.drag_selected_points_49888(self__.start_position,meta49889__$1));
}));

(app.main.data.workspace.path.edition.drag_selected_points_49888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49890){
var self__ = this;
var _49890__$1 = this;
return self__.meta49889;
}));

(app.main.data.workspace.path.edition.drag_selected_points_49888.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.drag_selected_points_49888.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var stopper = app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$1(stream);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edition","edition",1337508089));
var selected_points = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id),new cljs.core.Keyword(null,"selected-points","selected-points",-1374936179),cljs.core.PersistentHashSet.EMPTY);
var start_position__$1 = cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,(function (p1__49883_SHARP_){
return app.common.geom.point.distance(self__.start_position,p1__49883_SHARP_);
}),selected_points);
var content = app.main.data.workspace.path.state.get_path.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0));
var points = app.common.types.path.get_points(content);
return beicon.v2.core.concat(beicon.v2.core.take_until(stopper,beicon.v2.core.map((function (p1__49884_SHARP_){
return app.main.data.workspace.path.edition.move_selected_path_point(start_position__$1,p1__49884_SHARP_);
}),app.main.data.workspace.path.streams.move_points_stream(start_position__$1,selected_points,points))),beicon.v2.core.of(app.main.data.workspace.path.edition.apply_content_modifiers()));
}));
}

return (new app.main.data.workspace.path.edition.drag_selected_points_49888(start_position,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Retrieve the correct displacement delta point for the
 *   provided direction speed and distances thresholds.
 */
app.main.data.workspace.path.edition.get_displacement = (function app$main$data$workspace$path$edition$get_displacement(direction){
var G__49895 = direction;
var G__49895__$1 = (((G__49895 instanceof cljs.core.Keyword))?G__49895.fqn:null);
switch (G__49895__$1) {
case "up":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(- (1)));

break;
case "down":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(1));

break;
case "left":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((- (1)),(0));

break;
case "right":
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((1),(0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49895__$1)].join('')));

}
});
app.main.data.workspace.path.edition.finish_move_selected = (function app$main$data$workspace$path$edition$finish_move_selected(){
if((typeof app.main.data.workspace.path.edition.finish_move_selected_49896 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.edition.finish_move_selected_49896 = (function (meta49897){
this.meta49897 = meta49897;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.edition.finish_move_selected_49896.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.finish_move_selected_49896.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.edition","finish-move-selected","app.main.data.workspace.path.edition/finish-move-selected",-645782363);
}));

(app.main.data.workspace.path.edition.finish_move_selected_49896.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49898,meta49897__$1){
var self__ = this;
var _49898__$1 = this;
return (new app.main.data.workspace.path.edition.finish_move_selected_49896(meta49897__$1));
}));

(app.main.data.workspace.path.edition.finish_move_selected_49896.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49898){
var self__ = this;
var _49898__$1 = this;
return self__.meta49897;
}));

(app.main.data.workspace.path.edition.finish_move_selected_49896.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.finish_move_selected_49896.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edition","edition",1337508089));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id], null),cljs.core.dissoc,new cljs.core.Keyword(null,"current-move","current-move",-2114936122));
}));
}

return (new app.main.data.workspace.path.edition.finish_move_selected_49896(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.edition.move_selected = (function app$main$data$workspace$path$edition$move_selected(direction,shift_QMARK_){
var same_event = Symbol("same-event");
if((typeof app.main.data.workspace.path.edition.move_selected_49909 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IDeref}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.edition.move_selected_49909 = (function (direction,shift_QMARK_,same_event,meta49910){
this.direction = direction;
this.shift_QMARK_ = shift_QMARK_;
this.same_event = same_event;
this.meta49910 = meta49910;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.edition.move_selected_49909.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.move_selected_49909.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.edition","move-selected","app.main.data.workspace.path.edition/move-selected",-971064472);
}));

(app.main.data.workspace.path.edition.move_selected_49909.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49911,meta49910__$1){
var self__ = this;
var _49911__$1 = this;
return (new app.main.data.workspace.path.edition.move_selected_49909(self__.direction,self__.shift_QMARK_,self__.same_event,meta49910__$1));
}));

(app.main.data.workspace.path.edition.move_selected_49909.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49911){
var self__ = this;
var _49911__$1 = this;
return self__.meta49910;
}));

(app.main.data.workspace.path.edition.move_selected_49909.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.direction;
}));

(app.main.data.workspace.path.edition.move_selected_49909.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.move_selected_49909.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edition","edition",1337508089));
var current_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id),new cljs.core.Keyword(null,"current-move","current-move",-2114936122));
if((current_move == null)){
return cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"moving-nodes","moving-nodes",-1718310036)], null),true),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),id,new cljs.core.Keyword(null,"current-move","current-move",-2114936122)], null),self__.same_event);
} else {
return state;
}
}));

(app.main.data.workspace.path.edition.move_selected_49909.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.move_selected_49909.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edition","edition",1337508089));
var current_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id),new cljs.core.Keyword(null,"current-move","current-move",-2114936122));
if(cljs.core.truth_((function (){var and__5023__auto__ = id;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.same_event,current_move);
} else {
return and__5023__auto__;
}
})())){
var points = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id),new cljs.core.Keyword(null,"selected-points","selected-points",-1374936179),cljs.core.PersistentHashSet.EMPTY);
var move_events = beicon.v2.core.filter((function (p1__49902_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.direction,cljs.core.deref(p1__49902_SHARP_));
}),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.path.edition","move-selected","app.main.data.workspace.path.edition/move-selected",-971064472)),stream));
var stopper = beicon.v2.core.take((1),beicon.v2.core.debounce((100),move_events));
var scale = (cljs.core.truth_(self__.shift_QMARK_)?app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1((10)):app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1((1)));
var mov_vec = app.common.geom.point.multiply(app.main.data.workspace.path.edition.get_displacement(self__.direction),scale);
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),app.common.types.path.convert_to_path)),beicon.v2.core.merge(beicon.v2.core.map((function (p1__49904_SHARP_){
return app.main.data.workspace.path.edition.set_move_modifier(points,p1__49904_SHARP_);
}),beicon.v2.core.scan.cljs$core$IFn$_invoke$arity$3((function (p1__49903_SHARP_){
return app.common.geom.point.add(p1__49903_SHARP_,mov_vec);
}),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0)),beicon.v2.core.take_until(stopper,move_events))),beicon.v2.core.of((app.main.data.workspace.path.edition.move_selected.cljs$core$IFn$_invoke$arity$2 ? app.main.data.workspace.path.edition.move_selected.cljs$core$IFn$_invoke$arity$2(self__.direction,self__.shift_QMARK_) : app.main.data.workspace.path.edition.move_selected.call(null,self__.direction,self__.shift_QMARK_)))),beicon.v2.core.of(app.main.data.workspace.path.edition.apply_content_modifiers(),app.main.data.workspace.path.edition.finish_move_selected()));
} else {
return beicon.v2.core.empty();
}
}));
}

return (new app.main.data.workspace.path.edition.move_selected_49909(direction,shift_QMARK_,same_event,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.edition.start_move_handler = (function app$main$data$workspace$path$edition$start_move_handler(index,prefix){
if((typeof app.main.data.workspace.path.edition.start_move_handler_49920 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.edition.start_move_handler_49920 = (function (index,prefix,meta49921){
this.index = index;
this.prefix = prefix;
this.meta49921 = meta49921;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.edition.start_move_handler_49920.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.start_move_handler_49920.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.edition","start-move-handler","app.main.data.workspace.path.edition/start-move-handler",-685497280);
}));

(app.main.data.workspace.path.edition.start_move_handler_49920.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49922,meta49921__$1){
var self__ = this;
var _49922__$1 = this;
return (new app.main.data.workspace.path.edition.start_move_handler_49920(self__.index,self__.prefix,meta49921__$1));
}));

(app.main.data.workspace.path.edition.start_move_handler_49920.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49922){
var self__ = this;
var _49922__$1 = this;
return self__.meta49921;
}));

(app.main.data.workspace.path.edition.start_move_handler_49920.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.start_move_handler_49920.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edition","edition",1337508089));
var cx = app.common.data.prefix_keyword(self__.prefix,new cljs.core.Keyword(null,"x","x",2099068185));
var cy = app.common.data.prefix_keyword(self__.prefix,new cljs.core.Keyword(null,"y","y",-1757859776));
var modifiers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229)),id),new cljs.core.Keyword(null,"content-modifiers","content-modifiers",158766480));
var start_delta_x = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,self__.index),cx,(0));
var start_delta_y = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(modifiers,self__.index),cy,(0));
var content = app.main.data.workspace.path.state.get_path.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0));
var points = app.common.types.path.get_points(content);
var point = app.common.types.path.helpers.segment__GT_point.cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(content,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.prefix,new cljs.core.Keyword(null,"c1","c1",1132530803)))?(self__.index - (1)):self__.index)));
var handler = app.common.types.path.get_handler(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(content,self__.index),self__.prefix);
var vec__49923 = app.common.types.path.opposite_index(content,self__.index,self__.prefix);
var op_idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49923,(0),null);
var op_prefix = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__49923,(1),null);
var opposite = app.common.types.path.get_handler_point(content,op_idx,op_prefix);
return app.main.data.workspace.path.streams.drag_stream.cljs$core$IFn$_invoke$arity$1(beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),app.common.types.path.convert_to_path)),beicon.v2.core.take_until(beicon.v2.core.merge(app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$1(stream),beicon.v2.core.filter(app.main.data.workspace.path.streams.finish_edition_QMARK_,stream)),beicon.v2.core.map((function (p__49927){
var map__49928 = p__49927;
var map__49928__$1 = cljs.core.__destructure_map(map__49928);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49928__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49928__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var alt_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49928__$1,new cljs.core.Keyword(null,"alt?","alt?",-1427998432));
var shift_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49928__$1,new cljs.core.Keyword(null,"shift?","shift?",-1034734696));
var pos = (function (){var G__49929 = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y);
if(cljs.core.truth_(shift_QMARK_)){
return app.common.types.path.helpers.position_fixed_angle(G__49929,point);
} else {
return G__49929;
}
})();
return app.main.data.workspace.path.edition.modify_handler(id,self__.index,self__.prefix,(start_delta_x + (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(handler))),(start_delta_y + (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(handler))),cljs.core.not(alt_QMARK_));
}),app.main.data.workspace.path.streams.move_handler_stream(handler,point,handler,opposite,points))),beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.path.edition.apply_content_modifiers()))));
}));
}

return (new app.main.data.workspace.path.edition.start_move_handler_49920(index,prefix,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.edition.start_path_edit = (function app$main$data$workspace$path$edition$start_path_edit(id){
if((typeof app.main.data.workspace.path.edition.start_path_edit_49932 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.edition.start_path_edit_49932 = (function (id,meta49933){
this.id = id;
this.meta49933 = meta49933;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.edition.start_path_edit_49932.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.start_path_edit_49932.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.edition","start-path-edit","app.main.data.workspace.path.edition/start-path-edit",-699741029);
}));

(app.main.data.workspace.path.edition.start_path_edit_49932.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49934,meta49933__$1){
var self__ = this;
var _49934__$1 = this;
return (new app.main.data.workspace.path.edition.start_path_edit_49932(self__.id,meta49933__$1));
}));

(app.main.data.workspace.path.edition.start_path_edit_49932.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49934){
var self__ = this;
var _49934__$1 = this;
return self__.meta49933;
}));

(app.main.data.workspace.path.edition.start_path_edit_49932.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.start_path_edit_49932.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.id);
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(app.main.data.workspace.path.state.set_content(state,app.common.types.path.close_subpaths(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape))),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),self__.id], null),(function (state__$1){
var state__$2 = (cljs.core.truth_(state__$1)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993).cljs$core$IFn$_invoke$arity$1(state__$1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),new cljs.core.Keyword(null,"draw","draw",1358331674)):state__$1):new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"edit-mode","edit-mode",1940640993),new cljs.core.Keyword(null,"move","move",-2110884309),new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.PersistentHashSet.EMPTY,new cljs.core.Keyword(null,"snap-toggled","snap-toggled",-1650735574),false], null));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$2,new cljs.core.Keyword(null,"old-content","old-content",1851086779),new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape));
}));
}));

(app.main.data.workspace.path.edition.start_path_edit_49932.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.start_path_edit_49932.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
var stopper = beicon.v2.core.filter((function (p1__49930_SHARP_){
var type = potok.v2.core.type(p1__49930_SHARP_);
cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("app.main.data.workspace.edition","clear-edition-mode","app.main.data.workspace.edition/clear-edition-mode",1519383038));

return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("app.main.data.workspace.path.edition","start-path-edit","app.main.data.workspace.path.edition/start-path-edit",-699741029));
}),stream);
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.path.undo.start_path_undo()),beicon.v2.core.take_until(stopper,beicon.v2.core.map((function (){
return (app.main.data.workspace.path.edition.stop_path_edit.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.path.edition.stop_path_edit.cljs$core$IFn$_invoke$arity$1(self__.id) : app.main.data.workspace.path.edition.stop_path_edit.call(null,self__.id));
}),beicon.v2.core.take((1),beicon.v2.core.filter((function (p1__49931_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__49931_SHARP_,new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178));
}),stream)))));
}));
}

return (new app.main.data.workspace.path.edition.start_path_edit_49932(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.edition.stop_path_edit = (function app$main$data$workspace$path$edition$stop_path_edit(id){
if((typeof app.main.data.workspace.path.edition.stop_path_edit_49939 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.edition.stop_path_edit_49939 = (function (id,meta49940){
this.id = id;
this.meta49940 = meta49940;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.edition.stop_path_edit_49939.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.stop_path_edit_49939.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.edition","stop-path-edit","app.main.data.workspace.path.edition/stop-path-edit",-1219697474);
}));

(app.main.data.workspace.path.edition.stop_path_edit_49939.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49941,meta49940__$1){
var self__ = this;
var _49941__$1 = this;
return (new app.main.data.workspace.path.edition.stop_path_edit_49939(self__.id,meta49940__$1));
}));

(app.main.data.workspace.path.edition.stop_path_edit_49939.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49941){
var self__ = this;
var _49941__$1 = this;
return self__.meta49940;
}));

(app.main.data.workspace.path.edition.stop_path_edit_49939.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.stop_path_edit_49939.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),cljs.core.dissoc,new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),self__.id);
}));

(app.main.data.workspace.path.edition.stop_path_edit_49939.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.stop_path_edit_49939.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null)], null)));
}));
}

return (new app.main.data.workspace.path.edition.stop_path_edit_49939(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.edition.split_segments = (function app$main$data$workspace$path$edition$split_segments(id,p__49957){
var map__49958 = p__49957;
var map__49958__$1 = cljs.core.__destructure_map(map__49958);
var from_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49958__$1,new cljs.core.Keyword(null,"from-p","from-p",2047181810));
var to_p = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49958__$1,new cljs.core.Keyword(null,"to-p","to-p",1750614589));
var t = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49958__$1,new cljs.core.Keyword(null,"t","t",-1397832519));
if((typeof app.main.data.workspace.path.edition.split_segments_49961 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.edition.split_segments_49961 = (function (id,p__49957,map__49958,from_p,to_p,t,meta49962){
this.id = id;
this.p__49957 = p__49957;
this.map__49958 = map__49958;
this.from_p = from_p;
this.to_p = to_p;
this.t = t;
this.meta49962 = meta49962;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.edition.split_segments_49961.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.split_segments_49961.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.edition","split-segments","app.main.data.workspace.path.edition/split-segments",-1641031725);
}));

(app.main.data.workspace.path.edition.split_segments_49961.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49963,meta49962__$1){
var self__ = this;
var _49963__$1 = this;
return (new app.main.data.workspace.path.edition.split_segments_49961(self__.id,self__.p__49957,self__.map__49958,self__.from_p,self__.to_p,self__.t,meta49962__$1));
}));

(app.main.data.workspace.path.edition.split_segments_49961.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49963){
var self__ = this;
var _49963__$1 = this;
return self__.meta49962;
}));

(app.main.data.workspace.path.edition.split_segments_49961.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.split_segments_49961.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var content = app.main.data.workspace.path.state.get_path.cljs$core$IFn$_invoke$arity$variadic(state,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224)], 0));
return app.main.data.workspace.path.state.set_content(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"edit-path","edit-path",-1066566229),self__.id,new cljs.core.Keyword(null,"old-content","old-content",1851086779)], null),content),app.common.types.path.content(app.common.types.path.split_segments(content,cljs.core.PersistentHashSet.createAsIfByAssoc([self__.to_p,self__.from_p]),self__.t)));
}));

(app.main.data.workspace.path.edition.split_segments_49961.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.split_segments_49961.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.workspace.path.changes.save_path_content.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"preserve-move-to","preserve-move-to",1880571212),true], null)));
}));
}

return (new app.main.data.workspace.path.edition.split_segments_49961(id,p__49957,map__49958__$1,from_p,to_p,t,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.path.edition.create_node_at_position = (function app$main$data$workspace$path$edition$create_node_at_position(params){
if((typeof app.main.data.workspace.path.edition.create_node_at_position_49971 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.edition.create_node_at_position_49971 = (function (params,meta49972){
this.params = params;
this.meta49972 = meta49972;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.edition.create_node_at_position_49971.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.create_node_at_position_49971.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.edition","create-node-at-position","app.main.data.workspace.path.edition/create-node-at-position",-351710409);
}));

(app.main.data.workspace.path.edition.create_node_at_position_49971.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_49973,meta49972__$1){
var self__ = this;
var _49973__$1 = this;
return (new app.main.data.workspace.path.edition.create_node_at_position_49971(self__.params,meta49972__$1));
}));

(app.main.data.workspace.path.edition.create_node_at_position_49971.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_49973){
var self__ = this;
var _49973__$1 = this;
return self__.meta49972;
}));

(app.main.data.workspace.path.edition.create_node_at_position_49971.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.edition.create_node_at_position_49971.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var id = app.main.data.workspace.path.state.get_path_id(state);
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),app.common.types.path.convert_to_path),app.main.data.workspace.path.edition.split_segments(id,self__.params));
}));
}

return (new app.main.data.workspace.path.edition.create_node_at_position_49971(params,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.path.edition.js.map
