import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.focus.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.logic.libraries.js";
import "./app.common.types.component.js";
import "./app.common.types.container.js";
import "./app.common.uuid.js";
import "./app.main.data.changes.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.collapse.js";
import "./app.main.data.workspace.edition.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.data.workspace.zoom.js";
import "./app.main.refs.js";
import "./app.main.router.js";
import "./app.main.streams.js";
import "./app.main.worker.js";
import "./app.util.mouse.js";
import "./beicon.v2.core.js";
import "./beicon.v2.operators.js";
import "./clojure.set.js";
import "./linked.set.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.selection');
app.main.data.workspace.selection.interrupt_QMARK_ = (function app$main$data$workspace$selection$interrupt_QMARK_(e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178));
});
app.main.data.workspace.selection.update_selrect = (function app$main$data$workspace$selection$update_selrect(selrect){
if((typeof app.main.data.workspace.selection.update_selrect_48076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.selection.update_selrect_48076 = (function (selrect,meta48077){
this.selrect = selrect;
this.meta48077 = meta48077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.selection.update_selrect_48076.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.update_selrect_48076.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.selection","update-selrect","app.main.data.workspace.selection/update-selrect",1920460791);
}));

(app.main.data.workspace.selection.update_selrect_48076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48078,meta48077__$1){
var self__ = this;
var _48078__$1 = this;
return (new app.main.data.workspace.selection.update_selrect_48076(self__.selrect,meta48077__$1));
}));

(app.main.data.workspace.selection.update_selrect_48076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48078){
var self__ = this;
var _48078__$1 = this;
return self__.meta48077;
}));

(app.main.data.workspace.selection.update_selrect_48076.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.update_selrect_48076.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"selrect","selrect",1966287292)], null),self__.selrect);
}));
}

return (new app.main.data.workspace.selection.update_selrect_48076(selrect,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.selection.handle_area_selection = (function app$main$data$workspace$selection$handle_area_selection(append_QMARK_,remove_QMARK_,ignore_groups_QMARK_){
if((typeof app.main.data.workspace.selection.handle_area_selection_48084 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.selection.handle_area_selection_48084 = (function (append_QMARK_,remove_QMARK_,ignore_groups_QMARK_,meta48085){
this.append_QMARK_ = append_QMARK_;
this.remove_QMARK_ = remove_QMARK_;
this.ignore_groups_QMARK_ = ignore_groups_QMARK_;
this.meta48085 = meta48085;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.selection.handle_area_selection_48084.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.handle_area_selection_48084.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.selection","handle-area-selection","app.main.data.workspace.selection/handle-area-selection",1531956952);
}));

(app.main.data.workspace.selection.handle_area_selection_48084.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48086,meta48085__$1){
var self__ = this;
var _48086__$1 = this;
return (new app.main.data.workspace.selection.handle_area_selection_48084(self__.append_QMARK_,self__.remove_QMARK_,self__.ignore_groups_QMARK_,meta48085__$1));
}));

(app.main.data.workspace.selection.handle_area_selection_48084.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48086){
var self__ = this;
var _48086__$1 = this;
return self__.meta48085;
}));

(app.main.data.workspace.selection.handle_area_selection_48084.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.handle_area_selection_48084.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(1));
var stopper = app.util.mouse.drag_stopper.cljs$core$IFn$_invoke$arity$1(stream);
var init_position = cljs.core.deref(app.main.streams.mouse_position);
var initial_set = (cljs.core.truth_((function (){var or__5025__auto__ = self__.append_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return self__.remove_QMARK_;
}
})())?app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state):linked.set.empty_linked_set);
var init_selrect = app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4((init_position?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(init_position,new cljs.core.Keyword(null,"x","x",2099068185))),(init_position?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(init_position,new cljs.core.Keyword(null,"y","y",-1757859776))),(0),(0));
var calculate_selrect = (function (selrect,p__48104){
var vec__48105 = p__48104;
var delta = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48105,(0),null);
var space_QMARK_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48105,(1),null);
var selrect__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(selrect,new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(delta)),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(delta));
var selrect__$2 = ((space_QMARK_)?cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(selrect__$1,new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._PLUS_,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(delta)),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._PLUS_,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(delta)):selrect__$1);
return app.common.geom.rect.update_rect(selrect__$2,new cljs.core.Keyword(null,"corners","corners",-137817903));
});
var selrect_stream = beicon.v2.core.take_until(stopper,beicon.v2.core.filter((function (p1__48083_SHARP_){
return ((((p1__48083_SHARP_?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__48083_SHARP_,new cljs.core.Keyword(null,"width","width",-384071477))) > ((10) / zoom))) || (((p1__48083_SHARP_?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(p1__48083_SHARP_,new cljs.core.Keyword(null,"height","height",1025178622))) > ((10) / zoom))));
}),beicon.v2.core.scan.cljs$core$IFn$_invoke$arity$3(calculate_selrect,init_selrect,beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2(app.main.streams.keyboard_space,beicon.v2.core.filter(cljs.core.some_QMARK_,beicon.v2.core.map((function (p__48108){
var vec__48109 = p__48108;
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48109,(0),null);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48109,(1),null);
if(cljs.core.truth_((function (){var and__5023__auto__ = from;
if(cljs.core.truth_(and__5023__auto__)){
return to;
} else {
return and__5023__auto__;
}
})())){
return app.common.geom.point.to_vec(from,to);
} else {
return null;
}
}),beicon.v2.core.buffer.cljs$core$IFn$_invoke$arity$3((2),(1),app.main.streams.mouse_position)))))));
return beicon.v2.core.concat((cljs.core.truth_((function (){var or__5025__auto__ = self__.append_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return self__.remove_QMARK_;
}
})())?beicon.v2.core.empty():beicon.v2.core.of((app.main.data.workspace.selection.deselect_all.cljs$core$IFn$_invoke$arity$0 ? app.main.data.workspace.selection.deselect_all.cljs$core$IFn$_invoke$arity$0() : app.main.data.workspace.selection.deselect_all.call(null)))),beicon.v2.core.merge(beicon.v2.core.map(app.main.data.workspace.selection.update_selrect,selrect_stream),beicon.v2.core.map((function (){
return (app.main.data.workspace.selection.select_shapes_by_current_selrect.cljs$core$IFn$_invoke$arity$3 ? app.main.data.workspace.selection.select_shapes_by_current_selrect.cljs$core$IFn$_invoke$arity$3(initial_set,self__.remove_QMARK_,self__.ignore_groups_QMARK_) : app.main.data.workspace.selection.select_shapes_by_current_selrect.call(null,initial_set,self__.remove_QMARK_,self__.ignore_groups_QMARK_));
}),beicon.v2.core.pipe(beicon.v2.operators.distinct_contiguous.cljs$core$IFn$_invoke$arity$0(),beicon.v2.core.map(cljs.core.last,beicon.v2.core.buffer_time.cljs$core$IFn$_invoke$arity$2((100),selrect_stream)))),beicon.v2.core.map((function (){
return (app.main.data.workspace.selection.select_shapes_by_current_selrect.cljs$core$IFn$_invoke$arity$4 ? app.main.data.workspace.selection.select_shapes_by_current_selrect.cljs$core$IFn$_invoke$arity$4(initial_set,self__.remove_QMARK_,self__.ignore_groups_QMARK_,false) : app.main.data.workspace.selection.select_shapes_by_current_selrect.call(null,initial_set,self__.remove_QMARK_,self__.ignore_groups_QMARK_,false));
}),beicon.v2.core.last(selrect_stream))),beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.of(app.main.data.workspace.selection.update_selrect(null))));
}));
}

return (new app.main.data.workspace.selection.handle_area_selection_48084(append_QMARK_,remove_QMARK_,ignore_groups_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.selection.select_shape = (function app$main$data$workspace$selection$select_shape(var_args){
var G__48119 = arguments.length;
switch (G__48119) {
case 1:
return app.main.data.workspace.selection.select_shape.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.selection.select_shape.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.selection.select_shape.cljs$core$IFn$_invoke$arity$1 = (function (id){
return app.main.data.workspace.selection.select_shape.cljs$core$IFn$_invoke$arity$2(id,false);
}));

(app.main.data.workspace.selection.select_shape.cljs$core$IFn$_invoke$arity$2 = (function (id,toggle_QMARK_){
app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

if((typeof app.main.data.workspace.selection.select_shape_48121 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {app.main.data.event.PerformanceEvent}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.selection.select_shape_48121 = (function (id,toggle_QMARK_,meta48122){
this.id = id;
this.toggle_QMARK_ = toggle_QMARK_;
this.meta48122 = meta48122;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.selection.select_shape_48121.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.select_shape_48121.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.selection","select-shape","app.main.data.workspace.selection/select-shape",-431177915);
}));

(app.main.data.workspace.selection.select_shape_48121.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48123,meta48122__$1){
var self__ = this;
var _48123__$1 = this;
return (new app.main.data.workspace.selection.select_shape_48121(self__.id,self__.toggle_QMARK_,meta48122__$1));
}));

(app.main.data.workspace.selection.select_shape_48121.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48123){
var self__ = this;
var _48123__$1 = this;
return self__.meta48122;
}));

(app.main.data.workspace.selection.select_shape_48121.prototype.app$main$data$event$PerformanceEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.select_shape_48121.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.select_shape_48121.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"selected","selected",574897764)], null),app.common.data.toggle_selection,self__.id,self__.toggle_QMARK_),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"last-selected","last-selected",1253647018)], null),self__.id);
}));

(app.main.data.workspace.selection.select_shape_48121.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.select_shape_48121.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var selected_id = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var selected = app.main.data.helpers.lookup_shapes.cljs$core$IFn$_invoke$arity$2(state,selected_id);
var frame_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (item){
var parent = app.common.files.helpers.get_frame.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item));
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent);
}),selected);
var params_without_board = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(app.main.router.get_params(state),new cljs.core.Keyword(null,"board-id","board-id",-1767919501));
var params_board = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.main.router.get_params(state),new cljs.core.Keyword(null,"board-id","board-id",-1767919501),frame_ids);
return beicon.v2.core.of(app.main.data.workspace.collapse.expand_all_parents(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null),objects),new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178),new cljs.core.Keyword("app.main.data.workspace.specialized-panel","interrupt","app.main.data.workspace.specialized-panel/interrupt",-2063805375),(cljs.core.truth_(cljs.core.some((function (p1__48117_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__48117_SHARP_,app.common.uuid.zero);
}),frame_ids))?app.main.router.nav.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"workspace","workspace",-1096735709),params_without_board,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.router","replace","app.main.router/replace",466128885),true], null)], 0)):app.main.router.nav.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"workspace","workspace",-1096735709),params_board,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.router","replace","app.main.router/replace",466128885),true], null)], 0))));
}));
}

return (new app.main.data.workspace.selection.select_shape_48121(id,toggle_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.selection.select_shape.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.selection.select_prev_shape = (function app$main$data$workspace$selection$select_prev_shape(){
if((typeof app.main.data.workspace.selection.select_prev_shape_48129 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.selection.select_prev_shape_48129 = (function (meta48130){
this.meta48130 = meta48130;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.selection.select_prev_shape_48129.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.select_prev_shape_48129.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.selection","select-prev-shape","app.main.data.workspace.selection/select-prev-shape",-47001125);
}));

(app.main.data.workspace.selection.select_prev_shape_48129.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48131,meta48130__$1){
var self__ = this;
var _48131__$1 = this;
return (new app.main.data.workspace.selection.select_prev_shape_48129(meta48130__$1));
}));

(app.main.data.workspace.selection.select_prev_shape_48129.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48131){
var self__ = this;
var _48131__$1 = this;
return self__.meta48130;
}));

(app.main.data.workspace.selection.select_prev_shape_48129.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.select_prev_shape_48129.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var count_selected = cljs.core.count(selected);
var first_selected = cljs.core.first(selected);
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,first_selected);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(current));
var sibling_ids = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent);
var current_index = app.common.data.index_of(sibling_ids,first_selected);
var sibling = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((cljs.core.count(sibling_ids) - (1)),current_index))?cljs.core.first(sibling_ids):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sibling_ids,(current_index + (1))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),count_selected)){
return beicon.v2.core.of(app.main.data.workspace.selection.select_shape.cljs$core$IFn$_invoke$arity$1(sibling));
} else {
if((count_selected > (1))){
return beicon.v2.core.of(app.main.data.workspace.selection.select_shape.cljs$core$IFn$_invoke$arity$1(first_selected));
} else {
return null;
}
}
}));
}

return (new app.main.data.workspace.selection.select_prev_shape_48129(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.selection.select_next_shape = (function app$main$data$workspace$selection$select_next_shape(){
if((typeof app.main.data.workspace.selection.select_next_shape_48133 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.selection.select_next_shape_48133 = (function (meta48134){
this.meta48134 = meta48134;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.selection.select_next_shape_48133.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.select_next_shape_48133.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.selection","select-next-shape","app.main.data.workspace.selection/select-next-shape",661431164);
}));

(app.main.data.workspace.selection.select_next_shape_48133.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48135,meta48134__$1){
var self__ = this;
var _48135__$1 = this;
return (new app.main.data.workspace.selection.select_next_shape_48133(meta48134__$1));
}));

(app.main.data.workspace.selection.select_next_shape_48133.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48135){
var self__ = this;
var _48135__$1 = this;
return self__.meta48134;
}));

(app.main.data.workspace.selection.select_next_shape_48133.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.select_next_shape_48133.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var count_selected = cljs.core.count(selected);
var first_selected = cljs.core.first(selected);
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var current = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,first_selected);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(current));
var sibling_ids = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent);
var current_index = app.common.data.index_of(sibling_ids,first_selected);
var sibling = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),current_index))?cljs.core.last(sibling_ids):cljs.core.nth.cljs$core$IFn$_invoke$arity$2(sibling_ids,(current_index - (1))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),count_selected)){
return beicon.v2.core.of(app.main.data.workspace.selection.select_shape.cljs$core$IFn$_invoke$arity$1(sibling));
} else {
if((count_selected > (1))){
return beicon.v2.core.of(app.main.data.workspace.selection.select_shape.cljs$core$IFn$_invoke$arity$1(first_selected));
} else {
return null;
}
}
}));
}

return (new app.main.data.workspace.selection.select_next_shape_48133(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.selection.deselect_shape = (function app$main$data$workspace$selection$deselect_shape(id){
app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

if((typeof app.main.data.workspace.selection.deselect_shape_48141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.selection.deselect_shape_48141 = (function (id,meta48142){
this.id = id;
this.meta48142 = meta48142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.selection.deselect_shape_48141.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.deselect_shape_48141.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.selection","deselect-shape","app.main.data.workspace.selection/deselect-shape",-406856111);
}));

(app.main.data.workspace.selection.deselect_shape_48141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48143,meta48142__$1){
var self__ = this;
var _48143__$1 = this;
return (new app.main.data.workspace.selection.deselect_shape_48141(self__.id,meta48142__$1));
}));

(app.main.data.workspace.selection.deselect_shape_48141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48143){
var self__ = this;
var _48143__$1 = this;
return self__.meta48142;
}));

(app.main.data.workspace.selection.deselect_shape_48141.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.deselect_shape_48141.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(new cljs.core.Keyword("app.main.data.workspace.specialized-panel","interrupt","app.main.data.workspace.specialized-panel/interrupt",-2063805375));
}));

(app.main.data.workspace.selection.deselect_shape_48141.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.deselect_shape_48141.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"selected","selected",574897764)], null),cljs.core.disj,self__.id),new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),cljs.core.dissoc,new cljs.core.Keyword(null,"last-selected","last-selected",1253647018));
}));
}

return (new app.main.data.workspace.selection.deselect_shape_48141(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.selection.shift_select_shapes = (function app$main$data$workspace$selection$shift_select_shapes(var_args){
var G__48152 = arguments.length;
switch (G__48152) {
case 1:
return app.main.data.workspace.selection.shift_select_shapes.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.selection.shift_select_shapes.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.selection.shift_select_shapes.cljs$core$IFn$_invoke$arity$1 = (function (id){
return app.main.data.workspace.selection.shift_select_shapes.cljs$core$IFn$_invoke$arity$2(id,null);
}));

(app.main.data.workspace.selection.shift_select_shapes.cljs$core$IFn$_invoke$arity$2 = (function (id,objects){
if((typeof app.main.data.workspace.selection.shift_select_shapes_48153 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.selection.shift_select_shapes_48153 = (function (id,objects,meta48154){
this.id = id;
this.objects = objects;
this.meta48154 = meta48154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.selection.shift_select_shapes_48153.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.shift_select_shapes_48153.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.selection","shift-select-shapes","app.main.data.workspace.selection/shift-select-shapes",-314497046);
}));

(app.main.data.workspace.selection.shift_select_shapes_48153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48155,meta48154__$1){
var self__ = this;
var _48155__$1 = this;
return (new app.main.data.workspace.selection.shift_select_shapes_48153(self__.id,self__.objects,meta48154__$1));
}));

(app.main.data.workspace.selection.shift_select_shapes_48153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48155){
var self__ = this;
var _48155__$1 = this;
return self__.meta48154;
}));

(app.main.data.workspace.selection.shift_select_shapes_48153.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.shift_select_shapes_48153.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(new cljs.core.Keyword("app.main.data.workspace.specialized-panel","interrupt","app.main.data.workspace.specialized-panel/interrupt",-2063805375));
}));

(app.main.data.workspace.selection.shift_select_shapes_48153.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.shift_select_shapes_48153.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var objects__$1 = (function (){var or__5025__auto__ = self__.objects;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
}
})();
var append_to_selection = app.common.files.helpers.expand_region_selection(objects__$1,cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"last-selected","last-selected",1253647018)], null)),self__.id], null)));
var selection = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state),self__.id);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"selected","selected",574897764)], null),clojure.set.union.cljs$core$IFn$_invoke$arity$2(selection,append_to_selection)),new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),cljs.core.assoc,new cljs.core.Keyword(null,"last-selected","last-selected",1253647018),self__.id);
}));
}

return (new app.main.data.workspace.selection.shift_select_shapes_48153(id,objects,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.selection.shift_select_shapes.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.selection.select_shapes = (function app$main$data$workspace$selection$select_shapes(ids){
app.common.data.macros.runtime_assert("expected valid coll of uuids",(function (){
return ((cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,ids)) && (app.common.data.ordered_set_QMARK_(ids)));
}));

if((typeof app.main.data.workspace.selection.select_shapes_48165 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {app.main.data.event.PerformanceEvent}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.selection.select_shapes_48165 = (function (ids,meta48166){
this.ids = ids;
this.meta48166 = meta48166;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.selection.select_shapes_48165.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.select_shapes_48165.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.selection","select-shapes","app.main.data.workspace.selection/select-shapes",1502749611);
}));

(app.main.data.workspace.selection.select_shapes_48165.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48167,meta48166__$1){
var self__ = this;
var _48167__$1 = this;
return (new app.main.data.workspace.selection.select_shapes_48165(self__.ids,meta48166__$1));
}));

(app.main.data.workspace.selection.select_shapes_48165.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48167){
var self__ = this;
var _48167__$1 = this;
return self__.meta48166;
}));

(app.main.data.workspace.selection.select_shapes_48165.prototype.app$main$data$event$PerformanceEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.select_shapes_48165.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.select_shapes_48165.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var focus = new cljs.core.Keyword(null,"workspace-focus-selected","workspace-focus-selected",978051257).cljs$core$IFn$_invoke$arity$1(state);
var ids__$1 = ((app.common.data.not_empty_QMARK_(focus))?app.common.files.focus.filter_not_focus(objects,focus,self__.ids):self__.ids);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"selected","selected",574897764)], null),ids__$1);
}));

(app.main.data.workspace.selection.select_shapes_48165.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.select_shapes_48165.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var expand_s = beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.of(app.main.data.workspace.collapse.expand_all_parents(self__.ids,objects)));
var interrupt_s = beicon.v2.core.of(new cljs.core.Keyword("app.main.data.workspace.specialized-panel","interrupt","app.main.data.workspace.specialized-panel/interrupt",-2063805375));
return beicon.v2.core.merge(expand_s,interrupt_s);
}));
}

return (new app.main.data.workspace.selection.select_shapes_48165(ids,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.selection.select_all = (function app$main$data$workspace$selection$select_all(){
if((typeof app.main.data.workspace.selection.select_all_48168 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {app.main.data.event.PerformanceEvent}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.selection.select_all_48168 = (function (meta48170){
this.meta48170 = meta48170;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.selection.select_all_48168.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.select_all_48168.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.selection","select-all","app.main.data.workspace.selection/select-all",-803833257);
}));

(app.main.data.workspace.selection.select_all_48168.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48171,meta48170__$1){
var self__ = this;
var _48171__$1 = this;
return (new app.main.data.workspace.selection.select_all_48168(meta48170__$1));
}));

(app.main.data.workspace.selection.select_all_48168.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48171){
var self__ = this;
var _48171__$1 = this;
return self__.meta48170;
}));

(app.main.data.workspace.selection.select_all_48168.prototype.app$main$data$event$PerformanceEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.select_all_48168.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.select_all_48168.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var focus = new cljs.core.Keyword(null,"workspace-focus-selected","workspace-focus-selected",978051257).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.common.files.focus.focus_objects(app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state),focus);
var lookup = app.common.data.getf(objects);
var parents = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(lookup),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131))),app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state));
var parent = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(parents)))?lookup(cljs.core.first(parents)):lookup(app.common.uuid.zero));
var toselect = cljs.core.into.cljs$core$IFn$_invoke$arity$3(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hidden","hidden",-312506092)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"blocked","blocked",181326681)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092))),app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(parent)));
return beicon.v2.core.of(app.main.data.workspace.selection.select_shapes(toselect));
}));
}

return (new app.main.data.workspace.selection.select_all_48168(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Clear all possible state of drawing, edition
 *   or any similar action taken by the user.
 *   When `check-modal` the method will check if a modal is opened
 *   and not deselect if it's true
 */
app.main.data.workspace.selection.deselect_all = (function app$main$data$workspace$selection$deselect_all(var_args){
var G__48184 = arguments.length;
switch (G__48184) {
case 0:
return app.main.data.workspace.selection.deselect_all.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.workspace.selection.deselect_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.selection.deselect_all.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.workspace.selection.deselect_all.cljs$core$IFn$_invoke$arity$1(false);
}));

(app.main.data.workspace.selection.deselect_all.cljs$core$IFn$_invoke$arity$1 = (function (check_modal){
if((typeof app.main.data.workspace.selection.deselect_all_48185 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.selection.deselect_all_48185 = (function (check_modal,meta48186){
this.check_modal = check_modal;
this.meta48186 = meta48186;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.selection.deselect_all_48185.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.deselect_all_48185.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.selection","deselect-all","app.main.data.workspace.selection/deselect-all",-1662679693);
}));

(app.main.data.workspace.selection.deselect_all_48185.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48187,meta48186__$1){
var self__ = this;
var _48187__$1 = this;
return (new app.main.data.workspace.selection.deselect_all_48185(self__.check_modal,meta48186__$1));
}));

(app.main.data.workspace.selection.deselect_all_48185.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48187){
var self__ = this;
var _48187__$1 = this;
return self__.meta48186;
}));

(app.main.data.workspace.selection.deselect_all_48185.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.deselect_all_48185.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var params_without_board = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(app.main.router.get_params(state),new cljs.core.Keyword(null,"board-id","board-id",-1767919501));
return beicon.v2.core.of(new cljs.core.Keyword("app.main.data.workspace.specialized-panel","interrupt","app.main.data.workspace.specialized-panel/interrupt",-2063805375),app.main.data.workspace.edition.clear_edition_mode(),app.main.router.nav.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"workspace","workspace",-1096735709),params_without_board,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.router","replace","app.main.router/replace",466128885),true], null)], 0)));
}));

(app.main.data.workspace.selection.deselect_all_48185.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.deselect_all_48185.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var G__48190 = state;
if(((cljs.core.not(self__.check_modal)) || (cljs.core.not(new cljs.core.Keyword("app.main.data.modal","modal","app.main.data.modal/modal",2103156851).cljs$core$IFn$_invoke$arity$1(state))))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__48190,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),(function (p1__48179_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__48179_SHARP_,new cljs.core.Keyword(null,"selected","selected",574897764),app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0()),new cljs.core.Keyword(null,"selected-frame","selected-frame",-617585651));
}));
} else {
return G__48190;
}
}));
}

return (new app.main.data.workspace.selection.deselect_all_48185(check_modal,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.selection.deselect_all.cljs$lang$maxFixedArity = 1);

/**
 * Sends the current selection rectangle to the worker to compute the selection,
 *   and sends its result to select-shapes for storage in the state.
 */
app.main.data.workspace.selection.select_shapes_by_current_selrect = (function app$main$data$workspace$selection$select_shapes_by_current_selrect(var_args){
var G__48199 = arguments.length;
switch (G__48199) {
case 3:
return app.main.data.workspace.selection.select_shapes_by_current_selrect.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.selection.select_shapes_by_current_selrect.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.selection.select_shapes_by_current_selrect.cljs$core$IFn$_invoke$arity$3 = (function (initial_set,remove_QMARK_,ignore_groups_QMARK_){
return app.main.data.workspace.selection.select_shapes_by_current_selrect.cljs$core$IFn$_invoke$arity$4(initial_set,remove_QMARK_,ignore_groups_QMARK_,true);
}));

(app.main.data.workspace.selection.select_shapes_by_current_selrect.cljs$core$IFn$_invoke$arity$4 = (function (initial_set,remove_QMARK_,ignore_groups_QMARK_,buffered_QMARK_){
if((typeof app.main.data.workspace.selection.select_shapes_by_current_selrect_48200 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.selection.select_shapes_by_current_selrect_48200 = (function (initial_set,remove_QMARK_,ignore_groups_QMARK_,buffered_QMARK_,meta48201){
this.initial_set = initial_set;
this.remove_QMARK_ = remove_QMARK_;
this.ignore_groups_QMARK_ = ignore_groups_QMARK_;
this.buffered_QMARK_ = buffered_QMARK_;
this.meta48201 = meta48201;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.selection.select_shapes_by_current_selrect_48200.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.select_shapes_by_current_selrect_48200.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.selection","select-shapes-by-current-selrect","app.main.data.workspace.selection/select-shapes-by-current-selrect",-1839601210);
}));

(app.main.data.workspace.selection.select_shapes_by_current_selrect_48200.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48202,meta48201__$1){
var self__ = this;
var _48202__$1 = this;
return (new app.main.data.workspace.selection.select_shapes_by_current_selrect_48200(self__.initial_set,self__.remove_QMARK_,self__.ignore_groups_QMARK_,self__.buffered_QMARK_,meta48201__$1));
}));

(app.main.data.workspace.selection.select_shapes_by_current_selrect_48200.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48202){
var self__ = this;
var _48202__$1 = this;
return self__.meta48201;
}));

(app.main.data.workspace.selection.select_shapes_by_current_selrect_48200.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.select_shapes_by_current_selrect_48200.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var blocked_QMARK_ = (function (id){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id),new cljs.core.Keyword(null,"blocked","blocked",181326681),false);
});
var ask_worker = (cljs.core.truth_(self__.buffered_QMARK_)?app.main.worker.ask_buffered_BANG_:app.main.worker.ask_BANG_);
var filter_objs = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.complement(blocked_QMARK_)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.hidden_parent_QMARK_,objects)));
if((!((selrect == null)))){
return beicon.v2.core.map(app.main.data.workspace.selection.select_shapes,beicon.v2.core.map((cljs.core.truth_(self__.remove_QMARK_)?(function (p1__48196_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.disj,self__.initial_set,p1__48196_SHARP_);
}):(function (p1__48197_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(self__.initial_set,filter_objs,p1__48197_SHARP_);
})),beicon.v2.core.map((function (p1__48195_SHARP_){
return app.common.files.helpers.clean_loops(objects,p1__48195_SHARP_);
}),beicon.v2.core.filter(cljs.core.some_QMARK_,(function (){var G__48204 = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword("index","query-selection","index/query-selection",-1103332922),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"rect","rect",-108902628),selrect,new cljs.core.Keyword(null,"include-frames?","include-frames?",-256091430),true,new cljs.core.Keyword(null,"ignore-groups?","ignore-groups?",1142155659),self__.ignore_groups_QMARK_,new cljs.core.Keyword(null,"full-frame?","full-frame?",763988721),true,new cljs.core.Keyword(null,"using-selrect?","using-selrect?",-223163153),true], null);
return (ask_worker.cljs$core$IFn$_invoke$arity$1 ? ask_worker.cljs$core$IFn$_invoke$arity$1(G__48204) : ask_worker.call(null,G__48204));
})()))));
} else {
return beicon.v2.core.empty();
}
}));
}

return (new app.main.data.workspace.selection.select_shapes_by_current_selrect_48200(initial_set,remove_QMARK_,ignore_groups_QMARK_,buffered_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.selection.select_shapes_by_current_selrect.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.selection.select_inside_group = (function app$main$data$workspace$selection$select_inside_group(group_id,position){
if((typeof app.main.data.workspace.selection.select_inside_group_48207 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.selection.select_inside_group_48207 = (function (group_id,position,meta48208){
this.group_id = group_id;
this.position = position;
this.meta48208 = meta48208;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.selection.select_inside_group_48207.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.select_inside_group_48207.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.selection","select-inside-group","app.main.data.workspace.selection/select-inside-group",7140741);
}));

(app.main.data.workspace.selection.select_inside_group_48207.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48209,meta48208__$1){
var self__ = this;
var _48209__$1 = this;
return (new app.main.data.workspace.selection.select_inside_group_48207(self__.group_id,self__.position,meta48208__$1));
}));

(app.main.data.workspace.selection.select_inside_group_48207.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48209){
var self__ = this;
var _48209__$1 = this;
return self__.meta48208;
}));

(app.main.data.workspace.selection.select_inside_group_48207.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.select_inside_group_48207.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.group_id);
var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48205_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__48205_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(group));
var selected = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__48206_SHARP_){
return app.common.geom.shapes.has_point_QMARK_(p1__48206_SHARP_,self__.position);
}),cljs.core.reverse(children));
if(cljs.core.truth_(selected)){
return beicon.v2.core.of(app.main.data.workspace.selection.select_shape.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.selection.select_inside_group_48207(group_id,position,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.selection.clear_memorize_duplicated = (function app$main$data$workspace$selection$clear_memorize_duplicated(){
if((typeof app.main.data.workspace.selection.clear_memorize_duplicated_48212 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.selection.clear_memorize_duplicated_48212 = (function (meta48213){
this.meta48213 = meta48213;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.selection.clear_memorize_duplicated_48212.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.clear_memorize_duplicated_48212.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.selection","clear-memorize-duplicated","app.main.data.workspace.selection/clear-memorize-duplicated",-433594579);
}));

(app.main.data.workspace.selection.clear_memorize_duplicated_48212.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48214,meta48213__$1){
var self__ = this;
var _48214__$1 = this;
return (new app.main.data.workspace.selection.clear_memorize_duplicated_48212(meta48213__$1));
}));

(app.main.data.workspace.selection.clear_memorize_duplicated_48212.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48214){
var self__ = this;
var _48214__$1 = this;
return self__.meta48213;
}));

(app.main.data.workspace.selection.clear_memorize_duplicated_48212.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.clear_memorize_duplicated_48212.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.dissoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"duplicated","duplicated",1960480511)], null));
}));
}

return (new app.main.data.workspace.selection.clear_memorize_duplicated_48212(cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * When duplicate an object, remember the operation during the following seconds.
 *   If the user moves the duplicated object, and then duplicates it again, check
 *   the displacement and apply it to the third copy. This is useful for doing
 *   grids or cascades of cloned objects.
 */
app.main.data.workspace.selection.memorize_duplicated = (function app$main$data$workspace$selection$memorize_duplicated(id_original,id_duplicated){
if((typeof app.main.data.workspace.selection.memorize_duplicated_48218 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.selection.memorize_duplicated_48218 = (function (id_original,id_duplicated,meta48219){
this.id_original = id_original;
this.id_duplicated = id_duplicated;
this.meta48219 = meta48219;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.selection.memorize_duplicated_48218.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.memorize_duplicated_48218.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.selection","memorize-duplicated","app.main.data.workspace.selection/memorize-duplicated",-1965907575);
}));

(app.main.data.workspace.selection.memorize_duplicated_48218.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48220,meta48219__$1){
var self__ = this;
var _48220__$1 = this;
return (new app.main.data.workspace.selection.memorize_duplicated_48218(self__.id_original,self__.id_duplicated,meta48219__$1));
}));

(app.main.data.workspace.selection.memorize_duplicated_48218.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48220){
var self__ = this;
var _48220__$1 = this;
return self__.meta48219;
}));

(app.main.data.workspace.selection.memorize_duplicated_48218.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.memorize_duplicated_48218.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"duplicated","duplicated",1960480511)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id-original","id-original",-1521290158),self__.id_original,new cljs.core.Keyword(null,"id-duplicated","id-duplicated",-308911643),self__.id_duplicated], null));
}));

(app.main.data.workspace.selection.memorize_duplicated_48218.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.memorize_duplicated_48218.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
var stopper = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.selection","memorize-duplicated","app.main.data.workspace.selection/memorize-duplicated",-1965907575)),stream);
return beicon.v2.core.map(app.main.data.workspace.selection.clear_memorize_duplicated,beicon.v2.core.take_until(stopper,beicon.v2.core.timer((10000))));
}));
}

return (new app.main.data.workspace.selection.memorize_duplicated_48218(id_original,id_duplicated,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.selection.calc_duplicate_delta = (function app$main$data$workspace$selection$calc_duplicate_delta(obj,state,objects){
var map__48222 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"duplicated","duplicated",1960480511)], null));
var map__48222__$1 = cljs.core.__destructure_map(map__48222);
var id_original = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48222__$1,new cljs.core.Keyword(null,"id-original","id-original",-1521290158));
var id_duplicated = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48222__$1,new cljs.core.Keyword(null,"id-duplicated","id-duplicated",-308911643));
var move_QMARK_ = ((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(obj)) && ((!(app.common.types.component.instance_head_QMARK_(obj)))));
if(((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id_original,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(obj))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id_duplicated,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(obj))))) || ((((!(cljs.core.contains_QMARK_(objects,id_original)))) || ((!(cljs.core.contains_QMARK_(objects,id_duplicated)))))))){
if(move_QMARK_){
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(obj) + (50)),(0));
} else {
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0));
}
} else {
var pt_original = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id_original)));
var pt_duplicated = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id_duplicated)));
var pt_obj = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(obj));
var distance = app.common.geom.point.subtract(pt_duplicated,pt_original);
var new_pos = app.common.geom.point.add(pt_duplicated,distance);
return app.common.geom.point.subtract(new_pos,pt_obj);
}
});
app.main.data.workspace.selection.duplicate_shapes = (function app$main$data$workspace$selection$duplicate_shapes(var_args){
var args__5755__auto__ = [];
var len__5749__auto___48364 = arguments.length;
var i__5750__auto___48365 = (0);
while(true){
if((i__5750__auto___48365 < len__5749__auto___48364)){
args__5755__auto__.push((arguments[i__5750__auto___48365]));

var G__48366 = (i__5750__auto___48365 + (1));
i__5750__auto___48365 = G__48366;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.main.data.workspace.selection.duplicate_shapes.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.main.data.workspace.selection.duplicate_shapes.cljs$core$IFn$_invoke$arity$variadic = (function (ids,p__48238){
var map__48239 = p__48238;
var map__48239__$1 = cljs.core.__destructure_map(map__48239);
var move_delta_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48239__$1,new cljs.core.Keyword(null,"move-delta?","move-delta?",1707744700),false);
var alt_duplication_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48239__$1,new cljs.core.Keyword(null,"alt-duplication?","alt-duplication?",650822057),false);
var change_selection_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48239__$1,new cljs.core.Keyword(null,"change-selection?","change-selection?",1166805125),true);
var return_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__48239__$1,new cljs.core.Keyword(null,"return-ref","return-ref",1355506357),null);
if((typeof app.main.data.workspace.selection.duplicate_shapes_48240 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.selection.duplicate_shapes_48240 = (function (ids,p__48238,map__48239,move_delta_QMARK_,alt_duplication_QMARK_,change_selection_QMARK_,return_ref,meta48241){
this.ids = ids;
this.p__48238 = p__48238;
this.map__48239 = map__48239;
this.move_delta_QMARK_ = move_delta_QMARK_;
this.alt_duplication_QMARK_ = alt_duplication_QMARK_;
this.change_selection_QMARK_ = change_selection_QMARK_;
this.return_ref = return_ref;
this.meta48241 = meta48241;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.selection.duplicate_shapes_48240.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.duplicate_shapes_48240.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.selection","duplicate-shapes","app.main.data.workspace.selection/duplicate-shapes",757495841);
}));

(app.main.data.workspace.selection.duplicate_shapes_48240.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48242,meta48241__$1){
var self__ = this;
var _48242__$1 = this;
return (new app.main.data.workspace.selection.duplicate_shapes_48240(self__.ids,self__.p__48238,self__.map__48239,self__.move_delta_QMARK_,self__.alt_duplication_QMARK_,self__.change_selection_QMARK_,self__.return_ref,meta48241__$1));
}));

(app.main.data.workspace.selection.duplicate_shapes_48240.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48242){
var self__ = this;
var _48242__$1 = this;
return self__.meta48241;
}));

(app.main.data.workspace.selection.duplicate_shapes_48240.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.duplicate_shapes_48240.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(state);
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page);
var ids__$1 = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__48231_SHARP_){
return app.common.types.component.allow_duplicate_QMARK_(objects,p1__48231_SHARP_);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092))),self__.ids);
if(cljs.core.seq(ids__$1)){
var obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.first(ids__$1));
var delta = (cljs.core.truth_(self__.move_delta_QMARK_)?app.main.data.workspace.selection.calc_duplicate_delta(obj,state,objects):app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0)));
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var libraries = app.main.data.helpers.lookup_libraries(state);
var library_data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,file_id);
var changes = app.common.logic.libraries.generate_duplicate_changes_update_indices(app.common.logic.libraries.generate_duplicate_changes.cljs$core$IFn$_invoke$arity$variadic(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),objects,page,ids__$1,delta,libraries,library_data,file_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"alt-duplication?","alt-duplication?",650822057),self__.alt_duplication_QMARK_], null)], 0)),objects,ids__$1);
var tags = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"tags","tags",1771418977).cljs$core$IFn$_invoke$arity$1(changes);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var changes__$1 = (function (){var G__48257 = changes;
if(cljs.core.truth_(self__.alt_duplication_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48257,new cljs.core.Keyword(null,"tags","tags",1771418977),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(tags,new cljs.core.Keyword(null,"alt-duplication","alt-duplication",774015793)));
} else {
return G__48257;
}
})();
var id_original = cljs.core.first(ids__$1);
var new_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48234_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__48234_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48233_SHARP_){
var G__48258 = new cljs.core.Keyword(null,"old-id","old-id",-512581150).cljs$core$IFn$_invoke$arity$1(p1__48233_SHARP_);
return (ids__$1.cljs$core$IFn$_invoke$arity$1 ? ids__$1.cljs$core$IFn$_invoke$arity$1(G__48258) : ids__$1.call(null,G__48258));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48232_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__48232_SHARP_),new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983));
}),new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes__$1)))));
var id_duplicated = cljs.core.first(new_ids);
var frames = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__48235_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__48235_SHARP_,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072)], null));
})),ids__$1);
var undo_id = Symbol();
return beicon.v2.core.concat(beicon.v2.core.map((function (shape_id){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,shape_id);
var parent_type = app.common.files.helpers.get_shape_type(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var external_lib_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape));
var component = app.common.types.container.get_component_from_shape(shape,libraries);
var origin = "workspace:duplicate-shapes";
if(app.common.types.component.instance_head_QMARK_(shape)){
return app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"use-library-component",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),origin,new cljs.core.Keyword(null,"is-external-library","is-external-library",-1562006393),external_lib_QMARK_,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"parent-type","parent-type",1460910476),parent_type,new cljs.core.Keyword(null,"is-variant","is-variant",-1643856989),app.common.types.component.is_variant_QMARK_(component)], null));
} else {
if(app.common.files.helpers.has_layout_QMARK_(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape))){
return app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"layout-add-element",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),origin,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"parent-type","parent-type",1460910476),parent_type], null));
} else {
return app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"create-shape",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),origin,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)),new cljs.core.Keyword(null,"parent-type","parent-type",1460910476),parent_type], null));
}
}
}),beicon.v2.core.from(ids__$1)),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (){
if((!((self__.return_ref == null)))){
return cljs.core.reset_BANG_(self__.return_ref,id_duplicated);
} else {
return null;
}
}),beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes__$1),(cljs.core.truth_(self__.change_selection_QMARK_)?app.main.data.workspace.selection.select_shapes(new_ids):null),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),frames], null)),app.main.data.workspace.selection.memorize_duplicated(id_original,id_duplicated),app.main.data.workspace.undo.commit_undo_transaction(undo_id))));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.selection.duplicate_shapes_48240(ids,p__48238,map__48239__$1,move_delta_QMARK_,alt_duplication_QMARK_,change_selection_QMARK_,return_ref,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.selection.duplicate_shapes.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.main.data.workspace.selection.duplicate_shapes.cljs$lang$applyTo = (function (seq48236){
var G__48237 = cljs.core.first(seq48236);
var seq48236__$1 = cljs.core.next(seq48236);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__48237,seq48236__$1);
}));

app.main.data.workspace.selection.duplicate_selected = (function app$main$data$workspace$selection$duplicate_selected(var_args){
var G__48261 = arguments.length;
switch (G__48261) {
case 1:
return app.main.data.workspace.selection.duplicate_selected.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.selection.duplicate_selected.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.selection.duplicate_selected.cljs$core$IFn$_invoke$arity$1 = (function (move_delta_QMARK_){
return app.main.data.workspace.selection.duplicate_selected.cljs$core$IFn$_invoke$arity$2(move_delta_QMARK_,false);
}));

(app.main.data.workspace.selection.duplicate_selected.cljs$core$IFn$_invoke$arity$2 = (function (move_delta_QMARK_,alt_duplication_QMARK_){
if((typeof app.main.data.workspace.selection.duplicate_selected_48262 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.selection.duplicate_selected_48262 = (function (move_delta_QMARK_,alt_duplication_QMARK_,meta48263){
this.move_delta_QMARK_ = move_delta_QMARK_;
this.alt_duplication_QMARK_ = alt_duplication_QMARK_;
this.meta48263 = meta48263;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.selection.duplicate_selected_48262.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.duplicate_selected_48262.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.selection","duplicate-selected","app.main.data.workspace.selection/duplicate-selected",-1398135140);
}));

(app.main.data.workspace.selection.duplicate_selected_48262.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48264,meta48263__$1){
var self__ = this;
var _48264__$1 = this;
return (new app.main.data.workspace.selection.duplicate_selected_48262(self__.move_delta_QMARK_,self__.alt_duplication_QMARK_,meta48263__$1));
}));

(app.main.data.workspace.selection.duplicate_selected_48262.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48264){
var self__ = this;
var _48264__$1 = this;
return self__.meta48263;
}));

(app.main.data.workspace.selection.duplicate_selected_48262.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.duplicate_selected_48262.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(((cljs.core.not(self__.move_delta_QMARK_)) || ((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"transform","transform",1381301764)], null)) == null)))){
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.of(app.main.data.workspace.selection.duplicate_shapes.cljs$core$IFn$_invoke$arity$variadic(selected,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"move-delta?","move-delta?",1707744700),self__.move_delta_QMARK_,new cljs.core.Keyword(null,"alt-duplication?","alt-duplication?",650822057),self__.alt_duplication_QMARK_], 0)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.selection.duplicate_selected_48262(move_delta_QMARK_,alt_duplication_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.selection.duplicate_selected.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.selection.change_hover_state = (function app$main$data$workspace$selection$change_hover_state(id,value){
if((typeof app.main.data.workspace.selection.change_hover_state_48273 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.selection.change_hover_state_48273 = (function (id,value,meta48274){
this.id = id;
this.value = value;
this.meta48274 = meta48274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.selection.change_hover_state_48273.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.change_hover_state_48273.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.selection","change-hover-state","app.main.data.workspace.selection/change-hover-state",972605989);
}));

(app.main.data.workspace.selection.change_hover_state_48273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48275,meta48274__$1){
var self__ = this;
var _48275__$1 = this;
return (new app.main.data.workspace.selection.change_hover_state_48273(self__.id,self__.value,meta48274__$1));
}));

(app.main.data.workspace.selection.change_hover_state_48273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48275){
var self__ = this;
var _48275__$1 = this;
return self__.meta48274;
}));

(app.main.data.workspace.selection.change_hover_state_48273.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.change_hover_state_48273.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var hover_value = (cljs.core.truth_(self__.value)?cljs.core.PersistentHashSet.createAsIfByAssoc([self__.id]):cljs.core.PersistentHashSet.EMPTY);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"hover","hover",-341141711)], null),hover_value);
}));
}

return (new app.main.data.workspace.selection.change_hover_state_48273(id,value,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.selection.update_focus_shapes = (function app$main$data$workspace$selection$update_focus_shapes(added,removed){
if((typeof app.main.data.workspace.selection.update_focus_shapes_48278 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.selection.update_focus_shapes_48278 = (function (added,removed,meta48279){
this.added = added;
this.removed = removed;
this.meta48279 = meta48279;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.selection.update_focus_shapes_48278.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.update_focus_shapes_48278.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.selection","update-focus-shapes","app.main.data.workspace.selection/update-focus-shapes",1662876450);
}));

(app.main.data.workspace.selection.update_focus_shapes_48278.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48280,meta48279__$1){
var self__ = this;
var _48280__$1 = this;
return (new app.main.data.workspace.selection.update_focus_shapes_48278(self__.added,self__.removed,meta48279__$1));
}));

(app.main.data.workspace.selection.update_focus_shapes_48278.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48280){
var self__ = this;
var _48280__$1 = this;
return self__.meta48279;
}));

(app.main.data.workspace.selection.update_focus_shapes_48278.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.update_focus_shapes_48278.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var focus = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(clojure.set.union.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-focus-selected","workspace-focus-selected",978051257).cljs$core$IFn$_invoke$arity$1(state),self__.added),self__.removed);
var focus__$1 = app.common.files.helpers.clean_loops(objects,focus);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-focus-selected","workspace-focus-selected",978051257),focus__$1);
}));
}

return (new app.main.data.workspace.selection.update_focus_shapes_48278(added,removed,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Zoom in on and center viewport on selection;
 * hide all other layers in viewport and layer panel.
 * 
 * When in focus mode, exit restoring previous viewport and selection.
 *   
 */
app.main.data.workspace.selection.toggle_focus_mode = (function app$main$data$workspace$selection$toggle_focus_mode(){
if((typeof app.main.data.workspace.selection.toggle_focus_mode_48287 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.selection.toggle_focus_mode_48287 = (function (meta48288){
this.meta48288 = meta48288;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.selection.toggle_focus_mode_48287.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.toggle_focus_mode_48287.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.selection","toggle-focus-mode","app.main.data.workspace.selection/toggle-focus-mode",2048185160);
}));

(app.main.data.workspace.selection.toggle_focus_mode_48287.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48289,meta48288__$1){
var self__ = this;
var _48289__$1 = this;
return (new app.main.data.workspace.selection.toggle_focus_mode_48287(meta48288__$1));
}));

(app.main.data.workspace.selection.toggle_focus_mode_48287.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48289){
var self__ = this;
var _48289__$1 = this;
return self__.meta48288;
}));

(app.main.data.workspace.selection.toggle_focus_mode_48287.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.toggle_focus_mode_48287.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(app.main.data.workspace.selection.toggle_focus_mode_48287.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.toggle_focus_mode_48287.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var have_selection_QMARK_ = app.common.data.not_empty_QMARK_(selected);
var in_mode_QMARK_ = app.common.data.not_empty_QMARK_(new cljs.core.Keyword(null,"workspace-focus-selected","workspace-focus-selected",978051257).cljs$core$IFn$_invoke$arity$1(state));
if(in_mode_QMARK_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"workspace-pre-focus","workspace-pre-focus",1343741403).cljs$core$IFn$_invoke$arity$1(state)),new cljs.core.Keyword(null,"workspace-focus-selected","workspace-focus-selected",978051257)),new cljs.core.Keyword(null,"workspace-pre-focus","workspace-pre-focus",1343741403));
} else {
if(have_selection_QMARK_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-focus-selected","workspace-focus-selected",978051257),selected),new cljs.core.Keyword(null,"workspace-pre-focus","workspace-pre-focus",1343741403),new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699).cljs$core$IFn$_invoke$arity$1(state));
} else {
return state;
}
}
}));

(app.main.data.workspace.selection.toggle_focus_mode_48287.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.selection.toggle_focus_mode_48287.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var stopper = beicon.v2.core.filter((function (p1__48286_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.selection","toggle-focus-mode","app.main.data.workspace.selection/toggle-focus-mode",2048185160),potok.v2.core.type(p1__48286_SHARP_))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.pages","finalize-page","app.main.data.workspace.pages/finalize-page",526513034),potok.v2.core.type(p1__48286_SHARP_))));
}),stream);
if(app.common.data.not_empty_QMARK_(new cljs.core.Keyword(null,"workspace-focus-selected","workspace-focus-selected",978051257).cljs$core$IFn$_invoke$arity$1(state))){
return beicon.v2.core.take_until(stopper,beicon.v2.core.merge(beicon.v2.core.of(app.main.data.workspace.zoom.zoom_to_selected_shape,app.main.data.workspace.selection.deselect_all.cljs$core$IFn$_invoke$arity$0()),beicon.v2.core.merge_map((function (p__48291){
var vec__48295 = p__48291;
var old_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48295,(0),null);
var new_keys = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48295,(1),null);
var removed = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(old_keys,new_keys);
var added = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(new_keys,old_keys);
if(((app.common.data.not_empty_QMARK_(added)) || (app.common.data.not_empty_QMARK_(removed)))){
return beicon.v2.core.of(app.main.data.workspace.selection.update_focus_shapes(added,removed));
} else {
return beicon.v2.core.empty();
}
}),beicon.v2.core.buffer.cljs$core$IFn$_invoke$arity$3((2),(1),beicon.v2.core.map(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set,cljs.core.keys),beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$2(app.main.refs.workspace_page_objects,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"emit-current-value?","emit-current-value?",56289147),true], null)))))));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.selection.toggle_focus_mode_48287(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.selection.js.map
