import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.files.shapes_helpers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.flex_layout.js";
import "./app.common.geom.shapes.grid_layout.js";
import "./app.common.logic.libraries.js";
import "./app.common.types.color.js";
import "./app.common.types.component.js";
import "./app.common.types.modifiers.js";
import "./app.common.types.shape.layout.js";
import "./app.common.uuid.js";
import "./app.main.data.changes.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.colors.js";
import "./app.main.data.workspace.grid_layout.editor.js";
import "./app.main.data.workspace.modifiers.js";
import "./app.main.data.workspace.selection.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.features.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.shape_layout');
app.main.data.workspace.shape_layout.layout_keys = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670),new cljs.core.Keyword(null,"layout-gap-type","layout-gap-type",-1483813598),new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895),new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134),new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473),new cljs.core.Keyword(null,"layout-wrap-type","layout-wrap-type",186626597),new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837),new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.Keyword(null,"layout-gap-type","layout-gap-type",-1483813598)], null);
app.main.data.workspace.shape_layout.initial_flex_layout = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"layout-gap-type","layout-gap-type",-1483813598),new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.Keyword(null,"layout-wrap-type","layout-wrap-type",186626597),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895),new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837),new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134),new cljs.core.Keyword(null,"layout-flex-dir","layout-flex-dir",276559670),new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473)],[new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p1","p1",-936759954),(0),new cljs.core.Keyword(null,"p2","p2",905500641),(0),new cljs.core.Keyword(null,"p3","p3",1731040739),(0),new cljs.core.Keyword(null,"p4","p4",-1090126814),(0)], null),new cljs.core.Keyword(null,"nowrap","nowrap",457264988),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),(0),new cljs.core.Keyword(null,"column-gap","column-gap",384822863),(0)], null),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"stretch","stretch",-1888837380)]);
app.main.data.workspace.shape_layout.initial_grid_layout = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),new cljs.core.Keyword(null,"layout-gap-type","layout-gap-type",-1483813598),new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"layout-align-items","layout-align-items",-788507895),new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837),new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911),new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134),new cljs.core.Keyword(null,"layout-justify-items","layout-justify-items",1271685173),new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473),new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947),new cljs.core.Keyword(null,"layout-grid-dir","layout-grid-dir",1868849661)],[cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p1","p1",-936759954),(0),new cljs.core.Keyword(null,"p2","p2",905500641),(0),new cljs.core.Keyword(null,"p3","p3",1731040739),(0),new cljs.core.Keyword(null,"p4","p4",-1090126814),(0)], null),new cljs.core.Keyword(null,"grid","grid",402978600),new cljs.core.Keyword(null,"start","start",-355208981),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"simple","simple",-581868663),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),(0),new cljs.core.Keyword(null,"column-gap","column-gap",384822863),(0)], null),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"row","row",-570139521)]);
app.main.data.workspace.shape_layout.get_layout_initializer = (function app$main$data$workspace$shape_layout$get_layout_initializer(type,from_frame_QMARK_,calculate_params_QMARK_){
var vec__50835 = (function (){var G__50838 = type;
var G__50838__$1 = (((G__50838 instanceof cljs.core.Keyword))?G__50838.fqn:null);
switch (G__50838__$1) {
case "flex":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.shape_layout.initial_flex_layout,app.common.geom.shapes.flex_layout.calculate_params], null);

break;
case "grid":
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.shape_layout.initial_grid_layout,app.common.geom.shapes.grid_layout.calculate_params], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50838__$1)].join('')));

}
})();
var initial_layout_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50835,(0),null);
var calculate_params = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50835,(1),null);
return (function (shape,objects){
var shape__$1 = (function (){var G__50839 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shape,initial_layout_data], 0));
if(cljs.core.not(from_frame_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__50839,new cljs.core.Keyword(null,"show-content","show-content",-878000465),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312),true], 0));
} else {
return G__50839;
}
})();
var params = (cljs.core.truth_(calculate_params_QMARK_)?(function (){var G__50840 = objects;
var G__50841 = app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1));
var G__50842 = shape__$1;
return (calculate_params.cljs$core$IFn$_invoke$arity$3 ? calculate_params.cljs$core$IFn$_invoke$arity$3(G__50840,G__50841,G__50842) : calculate_params.call(null,G__50840,G__50841,G__50842));
})():null);
var G__50843 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shape__$1,params], 0));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"grid","grid",402978600))){
return app.common.types.shape.layout.reorder_grid_children(app.common.types.shape.layout.assign_cells(G__50843,objects));
} else {
return G__50843;
}
});
});
app.main.data.workspace.shape_layout.update_layout_positions = (function app$main$data$workspace$shape_layout$update_layout_positions(p__50845){
var map__50846 = p__50845;
var map__50846__$1 = cljs.core.__destructure_map(map__50846);
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50846__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50846__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var undo_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50846__$1,new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846));
if((typeof app.main.data.workspace.shape_layout.update_layout_positions_50847 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.update_layout_positions_50847 = (function (p__50845,map__50846,page_id,ids,undo_group,meta50848){
this.p__50845 = p__50845;
this.map__50846 = map__50846;
this.page_id = page_id;
this.ids = ids;
this.undo_group = undo_group;
this.meta50848 = meta50848;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.update_layout_positions_50847.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.update_layout_positions_50847.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","update-layout-positions","app.main.data.workspace.shape-layout/update-layout-positions",-42063987);
}));

(app.main.data.workspace.shape_layout.update_layout_positions_50847.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50849,meta50848__$1){
var self__ = this;
var _50849__$1 = this;
return (new app.main.data.workspace.shape_layout.update_layout_positions_50847(self__.p__50845,self__.map__50846,self__.page_id,self__.ids,self__.undo_group,meta50848__$1));
}));

(app.main.data.workspace.shape_layout.update_layout_positions_50847.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50849){
var self__ = this;
var _50849__$1 = this;
return self__.meta50848;
}));

(app.main.data.workspace.shape_layout.update_layout_positions_50847.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.update_layout_positions_50847.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id__$1 = (function (){var or__5025__auto__ = self__.page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
}
})();
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id__$1);
var ids__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50844_SHARP_){
return cljs.core.contains_QMARK_(objects,p1__50844_SHARP_);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero_QMARK_,self__.ids));
if(app.common.data.not_empty_QMARK_(ids__$1)){
var modif_tree = app.main.data.workspace.modifiers.create_modif_tree(ids__$1,app.common.types.modifiers.reflow_modifiers());
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_wasm_modifiers.cljs$core$IFn$_invoke$arity$variadic(modif_tree,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"stack-undo?","stack-undo?",1633924062),true,new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),self__.undo_group,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true], 0)));
} else {
return beicon.v2.core.of(app.main.data.workspace.modifiers.apply_modifiers.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id__$1,new cljs.core.Keyword(null,"modifiers","modifiers",50378834),modif_tree,new cljs.core.Keyword(null,"stack-undo?","stack-undo?",1633924062),true,new cljs.core.Keyword(null,"ignore-touched","ignore-touched",-179988699),true,new cljs.core.Keyword(null,"undo-group","undo-group",-1765279846),self__.undo_group], null)));
}
} else {
return beicon.v2.core.empty();
}
}));
}

return (new app.main.data.workspace.shape_layout.update_layout_positions_50847(p__50845,map__50846__$1,page_id,ids,undo_group,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shape_layout.initialize_shape_layout = (function app$main$data$workspace$shape_layout$initialize_shape_layout(){
if((typeof app.main.data.workspace.shape_layout.initialize_shape_layout_50853 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.initialize_shape_layout_50853 = (function (meta50854){
this.meta50854 = meta50854;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.initialize_shape_layout_50853.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.initialize_shape_layout_50853.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","initialize-shape-layout","app.main.data.workspace.shape-layout/initialize-shape-layout",-2040772463);
}));

(app.main.data.workspace.shape_layout.initialize_shape_layout_50853.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50855,meta50854__$1){
var self__ = this;
var _50855__$1 = this;
return (new app.main.data.workspace.shape_layout.initialize_shape_layout_50853(meta50854__$1));
}));

(app.main.data.workspace.shape_layout.initialize_shape_layout_50853.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50855){
var self__ = this;
var _50855__$1 = this;
return self__.meta50854;
}));

(app.main.data.workspace.shape_layout.initialize_shape_layout_50853.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.initialize_shape_layout_50853.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
var stopper = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.shape-layout","finalize-shape-layout","app.main.data.workspace.shape-layout/finalize-shape-layout",1203299725)),stream);
return beicon.v2.core.take_until(stopper,beicon.v2.core.mapcat((function (data){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__50856){
var vec__50857 = p__50856;
var page_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50857,(0),null);
var items = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50857,(1),null);
var ids = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__50851_SHARP_,p2__50852_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(p1__50851_SHARP_,new cljs.core.Keyword(null,"ids","ids",-998535796).cljs$core$IFn$_invoke$arity$1(p2__50852_SHARP_));
}),cljs.core.PersistentHashSet.EMPTY,items);
return app.main.data.workspace.shape_layout.update_layout_positions(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"ids","ids",-998535796),ids], null));
}),cljs.core.group_by(new cljs.core.Keyword(null,"page-id","page-id",-872941168),data));
}),beicon.v2.core.filter((function (p1__50850_SHARP_){
return app.common.data.not_empty_QMARK_(p1__50850_SHARP_);
}),beicon.v2.core.buffer_time.cljs$core$IFn$_invoke$arity$2((100),beicon.v2.core.map(cljs.core.deref,beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("layout","update","layout/update",-2110439502)),stream))))));
}));
}

return (new app.main.data.workspace.shape_layout.initialize_shape_layout_50853(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shape_layout.finalize_shape_layout = (function app$main$data$workspace$shape_layout$finalize_shape_layout(){
return potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.shape-layout","finalize-shape-layout","app.main.data.workspace.shape-layout/finalize-shape-layout",1203299725));
});
app.main.data.workspace.shape_layout.create_layout_from_id = (function app$main$data$workspace$shape_layout$create_layout_from_id(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51086 = arguments.length;
var i__5750__auto___51087 = (0);
while(true){
if((i__5750__auto___51087 < len__5749__auto___51086)){
args__5755__auto__.push((arguments[i__5750__auto___51087]));

var G__51088 = (i__5750__auto___51087 + (1));
i__5750__auto___51087 = G__51088;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return app.main.data.workspace.shape_layout.create_layout_from_id.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(app.main.data.workspace.shape_layout.create_layout_from_id.cljs$core$IFn$_invoke$arity$variadic = (function (id,type,p__50864){
var map__50865 = p__50864;
var map__50865__$1 = cljs.core.__destructure_map(map__50865);
var from_frame_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50865__$1,new cljs.core.Keyword(null,"from-frame?","from-frame?",-131850262),false);
var calculate_params_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50865__$1,new cljs.core.Keyword(null,"calculate-params?","calculate-params?",-38704171),true);
app.common.data.macros.runtime_assert("expected uuid for `id`",(function (){
return cljs.core.uuid_QMARK_(id);
}));

if((typeof app.main.data.workspace.shape_layout.create_layout_from_id_50866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.create_layout_from_id_50866 = (function (id,type,p__50864,map__50865,from_frame_QMARK_,calculate_params_QMARK_,meta50867){
this.id = id;
this.type = type;
this.p__50864 = p__50864;
this.map__50865 = map__50865;
this.from_frame_QMARK_ = from_frame_QMARK_;
this.calculate_params_QMARK_ = calculate_params_QMARK_;
this.meta50867 = meta50867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.create_layout_from_id_50866.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.create_layout_from_id_50866.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","create-layout-from-id","app.main.data.workspace.shape-layout/create-layout-from-id",282302992);
}));

(app.main.data.workspace.shape_layout.create_layout_from_id_50866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50868,meta50867__$1){
var self__ = this;
var _50868__$1 = this;
return (new app.main.data.workspace.shape_layout.create_layout_from_id_50866(self__.id,self__.type,self__.p__50864,self__.map__50865,self__.from_frame_QMARK_,self__.calculate_params_QMARK_,meta50867__$1));
}));

(app.main.data.workspace.shape_layout.create_layout_from_id_50866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50868){
var self__ = this;
var _50868__$1 = this;
return self__.meta50867;
}));

(app.main.data.workspace.shape_layout.create_layout_from_id_50866.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.create_layout_from_id_50866.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.id);
var undo_id = Symbol();
var layout_initializer = app.main.data.workspace.shape_layout.get_layout_initializer(self__.type,self__.from_frame_QMARK_,self__.calculate_params_QMARK_);
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null),layout_initializer,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null)),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2((parent?.shapes?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(parent,new cljs.core.Keyword(null,"shapes","shapes",1897594879))),(function (p1__50860_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__50860_SHARP_,new cljs.core.Keyword(null,"constraints-h","constraints-h",-260205452),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"constraints-v","constraints-v",1840495122)], 0));
})),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null)], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.shape_layout.create_layout_from_id_50866(id,type,p__50864,map__50865__$1,from_frame_QMARK_,calculate_params_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.shape_layout.create_layout_from_id.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(app.main.data.workspace.shape_layout.create_layout_from_id.cljs$lang$applyTo = (function (seq50861){
var G__50862 = cljs.core.first(seq50861);
var seq50861__$1 = cljs.core.next(seq50861);
var G__50863 = cljs.core.first(seq50861__$1);
var seq50861__$2 = cljs.core.next(seq50861__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50862,G__50863,seq50861__$2);
}));

app.main.data.workspace.shape_layout.create_layout_from_selection = (function app$main$data$workspace$shape_layout$create_layout_from_selection(type){
if((typeof app.main.data.workspace.shape_layout.create_layout_from_selection_50871 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.create_layout_from_selection_50871 = (function (type,meta50872){
this.type = type;
this.meta50872 = meta50872;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.create_layout_from_selection_50871.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.create_layout_from_selection_50871.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","create-layout-from-selection","app.main.data.workspace.shape-layout/create-layout-from-selection",270819660);
}));

(app.main.data.workspace.shape_layout.create_layout_from_selection_50871.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50873,meta50872__$1){
var self__ = this;
var _50873__$1 = this;
return (new app.main.data.workspace.shape_layout.create_layout_from_selection_50871(self__.type,meta50872__$1));
}));

(app.main.data.workspace.shape_layout.create_layout_from_selection_50871.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50873){
var self__ = this;
var _50873__$1 = this;
return self__.meta50872;
}));

(app.main.data.workspace.shape_layout.create_layout_from_selection_50871.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.create_layout_from_selection_50871.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var selected_shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),selected);
var single_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_shapes),(1));
var has_group_QMARK_ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.group_shape_QMARK_,selected_shapes);
var is_group_QMARK_ = (function (){var and__5023__auto__ = single_QMARK_;
if(and__5023__auto__){
return has_group_QMARK_;
} else {
return and__5023__auto__;
}
})();
var has_mask_QMARK_ = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.mask_shape_QMARK_,selected_shapes);
var is_mask_QMARK_ = (function (){var and__5023__auto__ = single_QMARK_;
if(and__5023__auto__){
return has_mask_QMARK_;
} else {
return and__5023__auto__;
}
})();
var has_component_QMARK_ = cljs.core.some(cljs.core.true_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.types.component.instance_root_QMARK_,selected_shapes));
var is_component_QMARK_ = (function (){var and__5023__auto__ = single_QMARK_;
if(and__5023__auto__){
return has_component_QMARK_;
} else {
return and__5023__auto__;
}
})();
var has_variant_QMARK_ = cljs.core.some(app.common.types.component.is_variant_QMARK_,selected_shapes);
var has_layout_QMARK_ = ((single_QMARK_) && (app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected_shapes))));
var new_shape_id = app.common.uuid.next();
var undo_id = Symbol();
if(cljs.core.truth_(has_variant_QMARK_)){
return beicon.v2.core.empty();
} else {
return beicon.v2.core.concat(beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id)),(cljs.core.truth_((function (){var and__5023__auto__ = is_group_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.not(is_component_QMARK_)) && (cljs.core.not(is_mask_QMARK_)));
} else {
return and__5023__auto__;
}
})())?(function (){var parent_id = new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected_shapes));
var shapes_ids = new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected_shapes));
var ordered_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),shapes_ids);
var group_index = app.common.files.helpers.get_index_replacement(selected,objects);
return beicon.v2.core.of(app.main.data.workspace.selection.select_shapes(ordered_ids),app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$4(new_shape_id,parent_id,group_index,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected_shapes))),app.main.data.workspace.colors.remove_all_fills.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_shape_id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null)),app.main.data.workspace.shape_layout.create_layout_from_id(new_shape_id,self__.type),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_shape_id], null),(function (p1__50869_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__50869_SHARP_,new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),new cljs.core.Keyword(null,"auto","auto",-566279492),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),new cljs.core.Keyword(null,"auto","auto",-566279492)], 0));
})),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(selected,app.common.types.shape.layout.toggle_fix_if_auto),app.main.data.workspace.shapes.delete_shapes.cljs$core$IFn$_invoke$arity$2(page_id,selected),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_shape_id], null)], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
})():((has_layout_QMARK_)?beicon.v2.core.of(app.main.data.workspace.shape_layout.create_layout_from_id(cljs.core.first(selected),self__.type),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),selected], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id)):beicon.v2.core.of(app.main.data.workspace.shapes.create_artboard_from_selection.cljs$core$IFn$_invoke$arity$1(new_shape_id),app.main.data.workspace.colors.remove_all_fills.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_shape_id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null)),app.main.data.workspace.shape_layout.create_layout_from_id(new_shape_id,self__.type),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_shape_id], null),(function (p1__50870_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(p1__50870_SHARP_,new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),new cljs.core.Keyword(null,"auto","auto",-566279492),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),new cljs.core.Keyword(null,"auto","auto",-566279492)], 0));
})),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(selected,app.common.types.shape.layout.toggle_fix_if_auto))
)),beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_shape_id], null)], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id)));
}
}));
}

return (new app.main.data.workspace.shape_layout.create_layout_from_selection_50871(type,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shape_layout.remove_layout = (function app$main$data$workspace$shape_layout$remove_layout(ids){
if((typeof app.main.data.workspace.shape_layout.remove_shape_layout_50897 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.remove_shape_layout_50897 = (function (ids,meta50898){
this.ids = ids;
this.meta50898 = meta50898;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.remove_shape_layout_50897.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.remove_shape_layout_50897.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","remove-shape-layout","app.main.data.workspace.shape-layout/remove-shape-layout",1271415407);
}));

(app.main.data.workspace.shape_layout.remove_shape_layout_50897.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50899,meta50898__$1){
var self__ = this;
var _50899__$1 = this;
return (new app.main.data.workspace.shape_layout.remove_shape_layout_50897(self__.ids,meta50898__$1));
}));

(app.main.data.workspace.shape_layout.remove_shape_layout_50897.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50899){
var self__ = this;
var _50899__$1 = this;
return self__.meta50898;
}));

(app.main.data.workspace.shape_layout.remove_shape_layout_50897.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.remove_shape_layout_50897.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(self__.ids,(function (p1__50896_SHARP_){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc,p1__50896_SHARP_,app.main.data.workspace.shape_layout.layout_keys);
})),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),self__.ids], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.shape_layout.remove_shape_layout_50897(ids,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shape_layout.create_layout = (function app$main$data$workspace$shape_layout$create_layout(type){
if((typeof app.main.data.workspace.shape_layout.create_shape_layout_50903 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.create_shape_layout_50903 = (function (type,meta50904){
this.type = type;
this.meta50904 = meta50904;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.create_shape_layout_50903.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.create_shape_layout_50903.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","create-shape-layout","app.main.data.workspace.shape-layout/create-shape-layout",-937143778);
}));

(app.main.data.workspace.shape_layout.create_shape_layout_50903.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50905,meta50904__$1){
var self__ = this;
var _50905__$1 = this;
return (new app.main.data.workspace.shape_layout.create_shape_layout_50903(self__.type,meta50904__$1));
}));

(app.main.data.workspace.shape_layout.create_shape_layout_50903.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50905){
var self__ = this;
var _50905__$1 = this;
return self__.meta50904;
}));

(app.main.data.workspace.shape_layout.create_shape_layout_50903.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.create_shape_layout_50903.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout","layout",-2120940921),app.common.data.name(self__.type)], null);
}));

(app.main.data.workspace.shape_layout.create_shape_layout_50903.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.create_shape_layout_50903.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var selected_shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),selected);
var single_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_shapes),(1));
var is_frame_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected_shapes)));
var has_layout_QMARK_ = app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected_shapes));
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),((((single_QMARK_) && (((is_frame_QMARK_) && ((!(has_layout_QMARK_)))))))?app.main.data.workspace.shape_layout.create_layout_from_id.cljs$core$IFn$_invoke$arity$variadic(cljs.core.first(selected),self__.type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"from-frame?","from-frame?",-131850262),true], 0)):app.main.data.workspace.shape_layout.create_layout_from_selection(self__.type)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.shape_layout.create_shape_layout_50903(type,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shape_layout.toggle_layout = (function app$main$data$workspace$shape_layout$toggle_layout(type){
if((typeof app.main.data.workspace.shape_layout.toggle_shape_layout_50913 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.toggle_shape_layout_50913 = (function (type,meta50914){
this.type = type;
this.meta50914 = meta50914;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.toggle_shape_layout_50913.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.toggle_shape_layout_50913.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","toggle-shape-layout","app.main.data.workspace.shape-layout/toggle-shape-layout",1842778168);
}));

(app.main.data.workspace.shape_layout.toggle_shape_layout_50913.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50915,meta50914__$1){
var self__ = this;
var _50915__$1 = this;
return (new app.main.data.workspace.shape_layout.toggle_shape_layout_50913(self__.type,meta50914__$1));
}));

(app.main.data.workspace.shape_layout.toggle_shape_layout_50913.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50915){
var self__ = this;
var _50915__$1 = this;
return self__.meta50914;
}));

(app.main.data.workspace.shape_layout.toggle_shape_layout_50913.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.toggle_shape_layout_50913.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected = app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
var selected_shapes = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),selected);
var single_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(selected_shapes),(1));
var has_layout_QMARK_ = (function (){var and__5023__auto__ = single_QMARK_;
if(and__5023__auto__){
return app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(selected_shapes)));
} else {
return and__5023__auto__;
}
})();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(selected))){
var event = (cljs.core.truth_(has_layout_QMARK_)?app.main.data.workspace.shape_layout.remove_layout(selected):app.main.data.workspace.shape_layout.create_layout(self__.type));
return beicon.v2.core.of(cljs.core.with_meta(event,cljs.core.meta(it__$1)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.shape_layout.toggle_shape_layout_50913(type,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shape_layout.update_layout = (function app$main$data$workspace$shape_layout$update_layout(var_args){
var G__50920 = arguments.length;
switch (G__50920) {
case 2:
return app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2 = (function (ids,changes){
return app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$3(ids,changes,null);
}));

(app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$3 = (function (ids,changes,options){
if((typeof app.main.data.workspace.shape_layout.update_layout_50923 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.update_layout_50923 = (function (ids,changes,options,meta50924){
this.ids = ids;
this.changes = changes;
this.options = options;
this.meta50924 = meta50924;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.update_layout_50923.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.update_layout_50923.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","update-layout","app.main.data.workspace.shape-layout/update-layout",-842733116);
}));

(app.main.data.workspace.shape_layout.update_layout_50923.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50925,meta50924__$1){
var self__ = this;
var _50925__$1 = this;
return (new app.main.data.workspace.shape_layout.update_layout_50923(self__.ids,self__.changes,self__.options,meta50924__$1));
}));

(app.main.data.workspace.shape_layout.update_layout_50923.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50925){
var self__ = this;
var _50925__$1 = this;
return self__.meta50924;
}));

(app.main.data.workspace.shape_layout.update_layout_50923.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.update_layout_50923.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var undo_id = Symbol();
var padding_attrs = cljs.core.set(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.changes,new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747))));
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(self__.ids,app.common.data.patch_object.cljs$core$IFn$_invoke$arity$1(self__.changes),(function (){var G__50927 = self__.options;
if(cljs.core.seq(padding_attrs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50927,new cljs.core.Keyword(null,"changed-sub-attr","changed-sub-attr",280796634),padding_attrs);
} else {
return G__50927;
}
})()),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),self__.ids], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id),(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"layout-align-content","layout-align-content",-1511926473).cljs$core$IFn$_invoke$arity$1(self__.changes);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"layout-justify-content","layout-justify-content",-416357134).cljs$core$IFn$_invoke$arity$1(self__.changes);
}
})())?potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"layout-change-alignment"], null)):null),(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"layout-padding","layout-padding",1903395747).cljs$core$IFn$_invoke$arity$1(self__.changes);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"layout-gap","layout-gap",140632911).cljs$core$IFn$_invoke$arity$1(self__.changes);
}
})())?potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"layout-change-margin"], null)):null));
}));
}

return (new app.main.data.workspace.shape_layout.update_layout_50923(ids,changes,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.shape_layout.update_layout.cljs$lang$maxFixedArity = 3);

app.main.data.workspace.shape_layout.add_layout_track = (function app$main$data$workspace$shape_layout$add_layout_track(var_args){
var G__50931 = arguments.length;
switch (G__50931) {
case 3:
return app.main.data.workspace.shape_layout.add_layout_track.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.data.workspace.shape_layout.add_layout_track.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.shape_layout.add_layout_track.cljs$core$IFn$_invoke$arity$3 = (function (ids,type,value){
return app.main.data.workspace.shape_layout.add_layout_track.cljs$core$IFn$_invoke$arity$4(ids,type,value,null);
}));

(app.main.data.workspace.shape_layout.add_layout_track.cljs$core$IFn$_invoke$arity$4 = (function (ids,type,value,index){
if(cljs.core.truth_((function (){var fexpr__50934 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"row","row",-570139521),null], null), null);
return (fexpr__50934.cljs$core$IFn$_invoke$arity$1 ? fexpr__50934.cljs$core$IFn$_invoke$arity$1(type) : fexpr__50934.call(null,type));
})())){
} else {
throw (new Error("Assert failed: (#{:column :row} type)"));
}

if((typeof app.main.data.workspace.shape_layout.add_layout_track_50935 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.add_layout_track_50935 = (function (ids,type,value,index,meta50936){
this.ids = ids;
this.type = type;
this.value = value;
this.index = index;
this.meta50936 = meta50936;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.add_layout_track_50935.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.add_layout_track_50935.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","add-layout-track","app.main.data.workspace.shape-layout/add-layout-track",1339707980);
}));

(app.main.data.workspace.shape_layout.add_layout_track_50935.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50937,meta50936__$1){
var self__ = this;
var _50937__$1 = this;
return (new app.main.data.workspace.shape_layout.add_layout_track_50935(self__.ids,self__.type,self__.value,self__.index,meta50936__$1));
}));

(app.main.data.workspace.shape_layout.add_layout_track_50935.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50937){
var self__ = this;
var _50937__$1 = this;
return self__.meta50936;
}));

(app.main.data.workspace.shape_layout.add_layout_track_50935.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.add_layout_track_50935.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(self__.ids,(function (shape){
var G__50945 = self__.type;
var G__50945__$1 = (((G__50945 instanceof cljs.core.Keyword))?G__50945.fqn:null);
switch (G__50945__$1) {
case "row":
return app.common.types.shape.layout.add_grid_row.cljs$core$IFn$_invoke$arity$3(shape,self__.value,self__.index);

break;
case "column":
return app.common.types.shape.layout.add_grid_column.cljs$core$IFn$_invoke$arity$3(shape,self__.value,self__.index);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50945__$1)].join('')));

}
})),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),self__.ids], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.shape_layout.add_layout_track_50935(ids,type,value,index,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.shape_layout.add_layout_track.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.shape_layout.remove_layout_track = (function app$main$data$workspace$shape_layout$remove_layout_track(var_args){
var args__5755__auto__ = [];
var len__5749__auto___51110 = arguments.length;
var i__5750__auto___51111 = (0);
while(true){
if((i__5750__auto___51111 < len__5749__auto___51110)){
args__5755__auto__.push((arguments[i__5750__auto___51111]));

var G__51112 = (i__5750__auto___51111 + (1));
i__5750__auto___51111 = G__51112;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((3) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((3)),(0),null)):null);
return app.main.data.workspace.shape_layout.remove_layout_track.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__5756__auto__);
});

(app.main.data.workspace.shape_layout.remove_layout_track.cljs$core$IFn$_invoke$arity$variadic = (function (ids,type,index,p__50962){
var map__50963 = p__50962;
var map__50963__$1 = cljs.core.__destructure_map(map__50963);
var with_shapes_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50963__$1,new cljs.core.Keyword(null,"with-shapes?","with-shapes?",-2137257409),false);
if(cljs.core.truth_((function (){var fexpr__50964 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"row","row",-570139521),null], null), null);
return (fexpr__50964.cljs$core$IFn$_invoke$arity$1 ? fexpr__50964.cljs$core$IFn$_invoke$arity$1(type) : fexpr__50964.call(null,type));
})())){
} else {
throw (new Error("Assert failed: (#{:column :row} type)"));
}

if((typeof app.main.data.workspace.shape_layout.remove_layout_track_50965 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.remove_layout_track_50965 = (function (ids,type,index,p__50962,map__50963,with_shapes_QMARK_,meta50966){
this.ids = ids;
this.type = type;
this.index = index;
this.p__50962 = p__50962;
this.map__50963 = map__50963;
this.with_shapes_QMARK_ = with_shapes_QMARK_;
this.meta50966 = meta50966;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.remove_layout_track_50965.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.remove_layout_track_50965.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","remove-layout-track","app.main.data.workspace.shape-layout/remove-layout-track",535512799);
}));

(app.main.data.workspace.shape_layout.remove_layout_track_50965.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50967,meta50966__$1){
var self__ = this;
var _50967__$1 = this;
return (new app.main.data.workspace.shape_layout.remove_layout_track_50965(self__.ids,self__.type,self__.index,self__.p__50962,self__.map__50963,self__.with_shapes_QMARK_,meta50966__$1));
}));

(app.main.data.workspace.shape_layout.remove_layout_track_50965.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50967){
var self__ = this;
var _50967__$1 = this;
return self__.meta50966;
}));

(app.main.data.workspace.shape_layout.remove_layout_track_50965.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.remove_layout_track_50965.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var undo_id = Symbol();
var shapes_to_delete = (cljs.core.truth_(self__.with_shapes_QMARK_)?cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (id){
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,new cljs.core.Keyword(null,"column","column",2078222095))){
return app.common.types.shape.layout.shapes_by_column.cljs$core$IFn$_invoke$arity$2(shape,self__.index);
} else {
return app.common.types.shape.layout.shapes_by_row.cljs$core$IFn$_invoke$arity$2(shape,self__.index);
}
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ids], 0))):null);
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),(cljs.core.truth_(shapes_to_delete)?app.main.data.workspace.shapes.delete_shapes.cljs$core$IFn$_invoke$arity$1(shapes_to_delete):beicon.v2.core.empty()),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(self__.ids,(function (shape,objects__$1){
var G__50968 = self__.type;
var G__50968__$1 = (((G__50968 instanceof cljs.core.Keyword))?G__50968.fqn:null);
switch (G__50968__$1) {
case "row":
return app.common.types.shape.layout.remove_grid_row(shape,self__.index,objects__$1);

break;
case "column":
return app.common.types.shape.layout.remove_grid_column(shape,self__.index,objects__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50968__$1)].join('')));

}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null)),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),self__.ids], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.shape_layout.remove_layout_track_50965(ids,type,index,p__50962,map__50963__$1,with_shapes_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.shape_layout.remove_layout_track.cljs$lang$maxFixedArity = (3));

/** @this {Function} */
(app.main.data.workspace.shape_layout.remove_layout_track.cljs$lang$applyTo = (function (seq50958){
var G__50959 = cljs.core.first(seq50958);
var seq50958__$1 = cljs.core.next(seq50958);
var G__50960 = cljs.core.first(seq50958__$1);
var seq50958__$2 = cljs.core.next(seq50958__$1);
var G__50961 = cljs.core.first(seq50958__$2);
var seq50958__$3 = cljs.core.next(seq50958__$2);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__50959,G__50960,G__50961,seq50958__$3);
}));

app.main.data.workspace.shape_layout.duplicate_layout_track = (function app$main$data$workspace$shape_layout$duplicate_layout_track(ids,type,index){
if(cljs.core.truth_((function (){var fexpr__50972 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"row","row",-570139521),null], null), null);
return (fexpr__50972.cljs$core$IFn$_invoke$arity$1 ? fexpr__50972.cljs$core$IFn$_invoke$arity$1(type) : fexpr__50972.call(null,type));
})())){
} else {
throw (new Error("Assert failed: (#{:column :row} type)"));
}

if((typeof app.main.data.workspace.shape_layout.duplicate_layout_track_50973 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.duplicate_layout_track_50973 = (function (ids,type,index,meta50974){
this.ids = ids;
this.type = type;
this.index = index;
this.meta50974 = meta50974;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.duplicate_layout_track_50973.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.duplicate_layout_track_50973.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","duplicate-layout-track","app.main.data.workspace.shape-layout/duplicate-layout-track",260016686);
}));

(app.main.data.workspace.shape_layout.duplicate_layout_track_50973.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50975,meta50974__$1){
var self__ = this;
var _50975__$1 = this;
return (new app.main.data.workspace.shape_layout.duplicate_layout_track_50973(self__.ids,self__.type,self__.index,meta50974__$1));
}));

(app.main.data.workspace.shape_layout.duplicate_layout_track_50973.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50975){
var self__ = this;
var _50975__$1 = this;
return self__.meta50974;
}));

(app.main.data.workspace.shape_layout.duplicate_layout_track_50973.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.duplicate_layout_track_50973.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(state);
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page);
var libraries = app.main.data.helpers.lookup_libraries(state);
var library_data = app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$2(state,file_id);
var shape_id = cljs.core.first(self__.ids);
var base_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,shape_id);
var shapes_by_track = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,new cljs.core.Keyword(null,"column","column",2078222095)))?app.common.types.shape.layout.shapes_by_column.cljs$core$IFn$_invoke$arity$3(base_shape,self__.index,false):app.common.types.shape.layout.shapes_by_row.cljs$core$IFn$_invoke$arity$3(base_shape,self__.index,false));
var selected = cljs.core.set(shapes_by_track);
var changes = app.common.logic.libraries.generate_duplicate_changes_update_indices(app.common.logic.libraries.generate_duplicate_changes(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),objects,page,selected,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0)),libraries,library_data,file_id),objects,selected);
var ids_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50971_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[new cljs.core.Keyword(null,"old-id","old-id",-512581150).cljs$core$IFn$_invoke$arity$1(p1__50971_SHARP_),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(p1__50971_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"obj","obj",981763962),new cljs.core.Keyword(null,"id","id",-1388402092)], null))],null));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50970_SHARP_){
var G__50976 = new cljs.core.Keyword(null,"old-id","old-id",-512581150).cljs$core$IFn$_invoke$arity$1(p1__50970_SHARP_);
return (selected.cljs$core$IFn$_invoke$arity$1 ? selected.cljs$core$IFn$_invoke$arity$1(G__50976) : selected.call(null,G__50976));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__50969_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__50969_SHARP_),new cljs.core.Keyword(null,"add-obj","add-obj",-1569519983));
}),new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824).cljs$core$IFn$_invoke$arity$1(changes)))));
var changes__$1 = app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(changes,self__.ids,(function (shape,objects__$1){
var shape__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shape,cljs.core.select_keys(base_shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947)], null))], 0));
var G__50977 = self__.type;
var G__50977__$1 = (((G__50977 instanceof cljs.core.Keyword))?G__50977.fqn:null);
switch (G__50977__$1) {
case "row":
return app.common.types.shape.layout.duplicate_row(shape__$1,objects__$1,self__.index,ids_map);

break;
case "column":
return app.common.types.shape.layout.duplicate_column(shape__$1,objects__$1,self__.index,ids_map);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50977__$1)].join('')));

}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null));
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes__$1),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),self__.ids], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.shape_layout.duplicate_layout_track_50973(ids,type,index,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shape_layout.reorder_layout_track = (function app$main$data$workspace$shape_layout$reorder_layout_track(ids,type,from_index,to_index,move_content_QMARK_){
if(cljs.core.truth_((function (){var fexpr__50978 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"row","row",-570139521),null], null), null);
return (fexpr__50978.cljs$core$IFn$_invoke$arity$1 ? fexpr__50978.cljs$core$IFn$_invoke$arity$1(type) : fexpr__50978.call(null,type));
})())){
} else {
throw (new Error("Assert failed: (#{:column :row} type)"));
}

if((typeof app.main.data.workspace.shape_layout.reorder_layout_track_50979 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.reorder_layout_track_50979 = (function (ids,type,from_index,to_index,move_content_QMARK_,meta50980){
this.ids = ids;
this.type = type;
this.from_index = from_index;
this.to_index = to_index;
this.move_content_QMARK_ = move_content_QMARK_;
this.meta50980 = meta50980;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.reorder_layout_track_50979.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.reorder_layout_track_50979.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","reorder-layout-track","app.main.data.workspace.shape-layout/reorder-layout-track",1831596773);
}));

(app.main.data.workspace.shape_layout.reorder_layout_track_50979.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50981,meta50980__$1){
var self__ = this;
var _50981__$1 = this;
return (new app.main.data.workspace.shape_layout.reorder_layout_track_50979(self__.ids,self__.type,self__.from_index,self__.to_index,self__.move_content_QMARK_,meta50980__$1));
}));

(app.main.data.workspace.shape_layout.reorder_layout_track_50979.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50981){
var self__ = this;
var _50981__$1 = this;
return self__.meta50980;
}));

(app.main.data.workspace.shape_layout.reorder_layout_track_50979.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.reorder_layout_track_50979.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(self__.ids,(function (shape){
var G__50982 = self__.type;
var G__50982__$1 = (((G__50982 instanceof cljs.core.Keyword))?G__50982.fqn:null);
switch (G__50982__$1) {
case "row":
return app.common.types.shape.layout.reorder_grid_row(shape,self__.from_index,self__.to_index,self__.move_content_QMARK_);

break;
case "column":
return app.common.types.shape.layout.reorder_grid_column(shape,self__.from_index,self__.to_index,self__.move_content_QMARK_);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50982__$1)].join('')));

}
})),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),self__.ids], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.shape_layout.reorder_layout_track_50979(ids,type,from_index,to_index,move_content_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shape_layout.hover_layout_track = (function app$main$data$workspace$shape_layout$hover_layout_track(ids,type,index,hover_QMARK_){
if(cljs.core.truth_((function (){var fexpr__50983 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"row","row",-570139521),null], null), null);
return (fexpr__50983.cljs$core$IFn$_invoke$arity$1 ? fexpr__50983.cljs$core$IFn$_invoke$arity$1(type) : fexpr__50983.call(null,type));
})())){
} else {
throw (new Error("Assert failed: (#{:column :row} type)"));
}

if((typeof app.main.data.workspace.shape_layout.hover_layout_track_50984 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.hover_layout_track_50984 = (function (ids,type,index,hover_QMARK_,meta50985){
this.ids = ids;
this.type = type;
this.index = index;
this.hover_QMARK_ = hover_QMARK_;
this.meta50985 = meta50985;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.hover_layout_track_50984.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.hover_layout_track_50984.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","hover-layout-track","app.main.data.workspace.shape-layout/hover-layout-track",1082473851);
}));

(app.main.data.workspace.shape_layout.hover_layout_track_50984.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50986,meta50985__$1){
var self__ = this;
var _50986__$1 = this;
return (new app.main.data.workspace.shape_layout.hover_layout_track_50984(self__.ids,self__.type,self__.index,self__.hover_QMARK_,meta50985__$1));
}));

(app.main.data.workspace.shape_layout.hover_layout_track_50984.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50986){
var self__ = this;
var _50986__$1 = this;
return self__.meta50985;
}));

(app.main.data.workspace.shape_layout.hover_layout_track_50984.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.hover_layout_track_50984.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.first(self__.ids));
var highlighted = (cljs.core.truth_(self__.hover_QMARK_)?cljs.core.set(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.type,new cljs.core.Keyword(null,"row","row",-570139521)))?app.common.types.shape.layout.shapes_by_row.cljs$core$IFn$_invoke$arity$2(shape,self__.index):app.common.types.shape.layout.shapes_by_column.cljs$core$IFn$_invoke$arity$2(shape,self__.index))):null);
var G__50987 = state;
var G__50987__$1 = (cljs.core.truth_(self__.hover_QMARK_)?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__50987,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-grid-edition","workspace-grid-edition",-40250766),cljs.core.first(self__.ids),new cljs.core.Keyword(null,"hover-track","hover-track",-995236856)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,self__.index], null)):G__50987);
var G__50987__$2 = ((cljs.core.not(self__.hover_QMARK_))?cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(G__50987__$1,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-grid-edition","workspace-grid-edition",-40250766),cljs.core.first(self__.ids),new cljs.core.Keyword(null,"hover-track","hover-track",-995236856)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.disj,cljs.core.PersistentHashSet.EMPTY),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.type,self__.index], null)):G__50987__$1);
return cljs.core.assoc_in(G__50987__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"highlighted","highlighted",1723498733)], null),highlighted);

}));
}

return (new app.main.data.workspace.shape_layout.hover_layout_track_50984(ids,type,index,hover_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shape_layout.change_layout_track = (function app$main$data$workspace$shape_layout$change_layout_track(ids,type,index,props){
if(cljs.core.truth_((function (){var fexpr__50988 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column","column",2078222095),null,new cljs.core.Keyword(null,"row","row",-570139521),null], null), null);
return (fexpr__50988.cljs$core$IFn$_invoke$arity$1 ? fexpr__50988.cljs$core$IFn$_invoke$arity$1(type) : fexpr__50988.call(null,type));
})())){
} else {
throw (new Error("Assert failed: (#{:column :row} type)"));
}

if((typeof app.main.data.workspace.shape_layout.change_layout_track_50989 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.change_layout_track_50989 = (function (ids,type,index,props,meta50990){
this.ids = ids;
this.type = type;
this.index = index;
this.props = props;
this.meta50990 = meta50990;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.change_layout_track_50989.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.change_layout_track_50989.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","change-layout-track","app.main.data.workspace.shape-layout/change-layout-track",-1377767973);
}));

(app.main.data.workspace.shape_layout.change_layout_track_50989.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50991,meta50990__$1){
var self__ = this;
var _50991__$1 = this;
return (new app.main.data.workspace.shape_layout.change_layout_track_50989(self__.ids,self__.type,self__.index,self__.props,meta50990__$1));
}));

(app.main.data.workspace.shape_layout.change_layout_track_50989.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50991){
var self__ = this;
var _50991__$1 = this;
return self__.meta50990;
}));

(app.main.data.workspace.shape_layout.change_layout_track_50989.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.change_layout_track_50989.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var undo_id = Symbol();
var property = (function (){var G__50992 = self__.type;
var G__50992__$1 = (((G__50992 instanceof cljs.core.Keyword))?G__50992.fqn:null);
switch (G__50992__$1) {
case "row":
return new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947);

break;
case "column":
return new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__50992__$1)].join('')));

}
})();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(self__.ids,(function (shape){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [property,self__.index], null),cljs.core.merge,self__.props);
})),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),self__.ids], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.shape_layout.change_layout_track_50989(ids,type,index,props,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shape_layout.fix_child_sizing = (function app$main$data$workspace$shape_layout$fix_child_sizing(objects,parent_changes,shape){
var parent = app.common.data.deep_merge.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.get_parent(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),parent_changes);
var auto_width_QMARK_ = app.common.types.shape.layout.auto_width_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var auto_height_QMARK_ = app.common.types.shape.layout.auto_height_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var col_QMARK_ = app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var row_QMARK_ = app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var all_children = cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.position_absolute_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent)));
var G__51014 = shape;
var G__51014__$1 = ((((col_QMARK_) && (((auto_width_QMARK_) && (cljs.core.every_QMARK_(app.common.types.shape.layout.fill_width_QMARK_,all_children))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51014,new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),new cljs.core.Keyword(null,"fix","fix",-1031773329)):G__51014);
var G__51014__$2 = ((((col_QMARK_) && (((auto_height_QMARK_) && (app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51014__$1,new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),new cljs.core.Keyword(null,"fix","fix",-1031773329)):G__51014__$1);
var G__51014__$3 = ((((row_QMARK_) && (((auto_width_QMARK_) && (app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51014__$2,new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),new cljs.core.Keyword(null,"fix","fix",-1031773329)):G__51014__$2);
if(((row_QMARK_) && (((auto_height_QMARK_) && (cljs.core.every_QMARK_(app.common.types.shape.layout.fill_height_QMARK_,all_children)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51014__$3,new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),new cljs.core.Keyword(null,"fix","fix",-1031773329));
} else {
return G__51014__$3;
}
});
app.main.data.workspace.shape_layout.fix_parent_sizing = (function app$main$data$workspace$shape_layout$fix_parent_sizing(parent,objects,ids_set,changes){
var auto_width_QMARK_ = app.common.types.shape.layout.auto_width_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var auto_height_QMARK_ = app.common.types.shape.layout.auto_height_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var col_QMARK_ = app.common.types.shape.layout.col_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var row_QMARK_ = app.common.types.shape.layout.row_QMARK_.cljs$core$IFn$_invoke$arity$1(parent);
var all_children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (shape){
if(cljs.core.contains_QMARK_(ids_set,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))){
return app.common.data.deep_merge.cljs$core$IFn$_invoke$arity$2(shape,changes);
} else {
return shape;
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(parent)));
var G__51015 = parent;
var G__51015__$1 = ((((col_QMARK_) && (((auto_width_QMARK_) && (cljs.core.every_QMARK_(app.common.types.shape.layout.fill_width_QMARK_,all_children))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51015,new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),new cljs.core.Keyword(null,"fix","fix",-1031773329)):G__51015);
var G__51015__$2 = (cljs.core.truth_((function (){var and__5023__auto__ = col_QMARK_;
if(and__5023__auto__){
var and__5023__auto____$1 = auto_height_QMARK_;
if(and__5023__auto____$1){
return cljs.core.some(app.common.types.shape.layout.fill_height_QMARK_,all_children);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51015__$1,new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),new cljs.core.Keyword(null,"fix","fix",-1031773329)):G__51015__$1);
var G__51015__$3 = (cljs.core.truth_((function (){var and__5023__auto__ = row_QMARK_;
if(and__5023__auto__){
var and__5023__auto____$1 = auto_width_QMARK_;
if(and__5023__auto____$1){
return cljs.core.some(app.common.types.shape.layout.fill_width_QMARK_,all_children);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51015__$2,new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),new cljs.core.Keyword(null,"fix","fix",-1031773329)):G__51015__$2);
if(((row_QMARK_) && (((auto_height_QMARK_) && (cljs.core.every_QMARK_(app.common.types.shape.layout.fill_height_QMARK_,all_children)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51015__$3,new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),new cljs.core.Keyword(null,"fix","fix",-1031773329));
} else {
return G__51015__$3;
}
});
app.main.data.workspace.shape_layout.update_layout_child = (function app$main$data$workspace$shape_layout$update_layout_child(var_args){
var G__51019 = arguments.length;
switch (G__51019) {
case 2:
return app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2 = (function (ids,changes){
return app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$3(ids,changes,null);
}));

(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$3 = (function (ids,changes,options){
if((typeof app.main.data.workspace.shape_layout.update_layout_child_51025 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.update_layout_child_51025 = (function (ids,changes,options,meta51026){
this.ids = ids;
this.changes = changes;
this.options = options;
this.meta51026 = meta51026;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.update_layout_child_51025.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.update_layout_child_51025.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","update-layout-child","app.main.data.workspace.shape-layout/update-layout-child",1240212393);
}));

(app.main.data.workspace.shape_layout.update_layout_child_51025.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51027,meta51026__$1){
var self__ = this;
var _51027__$1 = this;
return (new app.main.data.workspace.shape_layout.update_layout_child_51025(self__.ids,self__.changes,self__.options,meta51026__$1));
}));

(app.main.data.workspace.shape_layout.update_layout_child_51025.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51027){
var self__ = this;
var _51027__$1 = this;
return self__.meta51026;
}));

(app.main.data.workspace.shape_layout.update_layout_child_51025.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.update_layout_child_51025.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.options,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425));
}
})();
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var children_ids = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__51016_SHARP_){
return app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,p1__51016_SHARP_);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.ids], 0));
var parent_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51017_SHARP_){
return app.common.files.helpers.get_parent_id(objects,p1__51017_SHARP_);
}),self__.ids);
var undo_id = Symbol();
var margin_attrs = cljs.core.set(cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.changes,new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708))));
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(self__.ids,app.common.data.patch_object.cljs$core$IFn$_invoke$arity$1(self__.changes),(function (){var G__51043 = self__.options;
if(cljs.core.seq(margin_attrs)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__51043,new cljs.core.Keyword(null,"changed-sub-attr","changed-sub-attr",280796634),margin_attrs);
} else {
return G__51043;
}
})()),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(children_ids,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.data.workspace.shape_layout.fix_child_sizing,objects,self__.changes),self__.options),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(parent_ids,(function (parent,objects__$1){
var G__51046 = app.main.data.workspace.shape_layout.fix_parent_sizing(parent,objects__$1,cljs.core.set(self__.ids),self__.changes);
if(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(parent)){
return app.common.types.shape.layout.assign_cells(G__51046,objects__$1);
} else {
return G__51046;
}
}),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.options,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null)], 0))),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),self__.ids], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.shape_layout.update_layout_child_51025(ids,changes,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.shape_layout.update_layout_child.cljs$lang$maxFixedArity = 3);

app.main.data.workspace.shape_layout.update_grid_cells = (function app$main$data$workspace$shape_layout$update_grid_cells(layout_id,ids,props){
if((typeof app.main.data.workspace.shape_layout.update_grid_cells_51056 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.update_grid_cells_51056 = (function (layout_id,ids,props,meta51057){
this.layout_id = layout_id;
this.ids = ids;
this.props = props;
this.meta51057 = meta51057;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.update_grid_cells_51056.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.update_grid_cells_51056.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","update-grid-cells","app.main.data.workspace.shape-layout/update-grid-cells",2086769469);
}));

(app.main.data.workspace.shape_layout.update_grid_cells_51056.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51058,meta51057__$1){
var self__ = this;
var _51058__$1 = this;
return (new app.main.data.workspace.shape_layout.update_grid_cells_51056(self__.layout_id,self__.ids,self__.props,meta51057__$1));
}));

(app.main.data.workspace.shape_layout.update_grid_cells_51056.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51058){
var self__ = this;
var _51058__$1 = this;
return self__.meta51057;
}));

(app.main.data.workspace.shape_layout.update_grid_cells_51056.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.update_grid_cells_51056.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.layout_id], null),(function (shape){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (shape__$1,cell_id){
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(shape__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cell_id], null),app.common.data.patch_object,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.props], 0));
}),shape,self__.ids);
})),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.layout_id], null)], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.shape_layout.update_grid_cells_51056(layout_id,ids,props,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shape_layout.change_cells_mode = (function app$main$data$workspace$shape_layout$change_cells_mode(layout_id,ids,mode){
if((typeof app.main.data.workspace.shape_layout.change_cells_mode_51060 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.change_cells_mode_51060 = (function (layout_id,ids,mode,meta51061){
this.layout_id = layout_id;
this.ids = ids;
this.mode = mode;
this.meta51061 = meta51061;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.change_cells_mode_51060.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.change_cells_mode_51060.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","change-cells-mode","app.main.data.workspace.shape-layout/change-cells-mode",-187374808);
}));

(app.main.data.workspace.shape_layout.change_cells_mode_51060.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51062,meta51061__$1){
var self__ = this;
var _51062__$1 = this;
return (new app.main.data.workspace.shape_layout.change_cells_mode_51060(self__.layout_id,self__.ids,self__.mode,meta51061__$1));
}));

(app.main.data.workspace.shape_layout.change_cells_mode_51060.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51062){
var self__ = this;
var _51062__$1 = this;
return self__.meta51061;
}));

(app.main.data.workspace.shape_layout.change_cells_mode_51060.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.change_cells_mode_51060.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.layout_id], null),(function (shape,objects){
var G__51063 = self__.mode;
var G__51063__$1 = (((G__51063 instanceof cljs.core.Keyword))?G__51063.fqn:null);
switch (G__51063__$1) {
case "auto":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (shape__$1,cell_id){
var cell = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cell_id], null));
var G__51064 = shape__$1;
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"manual","manual",-237370608),null,new cljs.core.Keyword(null,"area","area",472007256),null], null), null),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cell))) || ((((new cljs.core.Keyword(null,"row-span","row-span",-365554241).cljs$core$IFn$_invoke$arity$1(cell) > (1))) || ((new cljs.core.Keyword(null,"column-span","column-span",1302376857).cljs$core$IFn$_invoke$arity$1(cell) > (1))))))){
return app.common.types.shape.layout.assign_cells(app.common.types.shape.layout.resize_cell_area(app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(G__51064,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cell_id], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"auto","auto",-566279492)], 0)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cell_id], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"area-name","area-name",-496581211)], 0)),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(cell),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(cell),(1),(1)),objects);
} else {
return G__51064;
}
}),shape,self__.ids);

break;
case "manual":
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (shape__$1,cell_id){
var cell = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cell_id], null));
var G__51065 = shape__$1;
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"area","area",472007256),null,new cljs.core.Keyword(null,"auto","auto",-566279492),null], null), null),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(cell))){
return app.common.types.shape.layout.assign_cells(app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(app.common.data.assoc_in_when(G__51065,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cell_id,new cljs.core.Keyword(null,"position","position",-2011731912)], null),new cljs.core.Keyword(null,"manual","manual",-237370608)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),cell_id], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"area-name","area-name",-496581211)], 0)),objects);
} else {
return G__51065;
}
}),shape,self__.ids);

break;
case "area":
var map__51066 = app.common.types.shape.layout.cells_coordinates(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51059_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),p1__51059_SHARP_], null));
}),self__.ids));
var map__51066__$1 = cljs.core.__destructure_map(map__51066);
var first_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51066__$1,new cljs.core.Keyword(null,"first-row","first-row",-111793911));
var first_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51066__$1,new cljs.core.Keyword(null,"first-column","first-column",22621775));
var last_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51066__$1,new cljs.core.Keyword(null,"last-row","last-row",388121667));
var last_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51066__$1,new cljs.core.Keyword(null,"last-column","last-column",2053855408));
var target_cell = app.common.types.shape.layout.get_cell_by_position(shape,first_row,first_column);
var shape__$1 = app.common.types.shape.layout.assign_cells(app.common.types.shape.layout.resize_cell_area(shape,new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(target_cell),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(target_cell),first_row,first_column,((last_row - first_row) + (1)),((last_column - first_column) + (1))),objects);
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(shape__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_cell)], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"area","area",472007256)], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__51063__$1)].join('')));

}
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null)),app.main.data.workspace.grid_layout.editor.clean_selection(self__.layout_id),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.layout_id], null)], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.shape_layout.change_cells_mode_51060(layout_id,ids,mode,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shape_layout.merge_cells = (function app$main$data$workspace$shape_layout$merge_cells(layout_id,ids){
if((typeof app.main.data.workspace.shape_layout.merge_cells_51068 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.merge_cells_51068 = (function (layout_id,ids,meta51069){
this.layout_id = layout_id;
this.ids = ids;
this.meta51069 = meta51069;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.merge_cells_51068.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.merge_cells_51068.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","merge-cells","app.main.data.workspace.shape-layout/merge-cells",-300475520);
}));

(app.main.data.workspace.shape_layout.merge_cells_51068.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51070,meta51069__$1){
var self__ = this;
var _51070__$1 = this;
return (new app.main.data.workspace.shape_layout.merge_cells_51068(self__.layout_id,self__.ids,meta51069__$1));
}));

(app.main.data.workspace.shape_layout.merge_cells_51068.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51070){
var self__ = this;
var _51070__$1 = this;
return self__.meta51069;
}));

(app.main.data.workspace.shape_layout.merge_cells_51068.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.merge_cells_51068.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.layout_id], null),(function (shape,objects){
var cells = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51067_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),p1__51067_SHARP_], null));
}),self__.ids);
var map__51071 = app.common.types.shape.layout.cells_coordinates(cells);
var map__51071__$1 = cljs.core.__destructure_map(map__51071);
var first_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51071__$1,new cljs.core.Keyword(null,"first-row","first-row",-111793911));
var first_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51071__$1,new cljs.core.Keyword(null,"first-column","first-column",22621775));
var last_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51071__$1,new cljs.core.Keyword(null,"last-row","last-row",388121667));
var last_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51071__$1,new cljs.core.Keyword(null,"last-column","last-column",2053855408));
var target_cell = app.common.types.shape.layout.get_cell_by_position(shape,first_row,first_column);
return app.common.types.shape.layout.assign_cells(app.common.types.shape.layout.resize_cell_area(shape,new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(target_cell),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(target_cell),first_row,first_column,((last_row - first_row) + (1)),((last_column - first_column) + (1))),objects);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null)),app.main.data.workspace.grid_layout.editor.clean_selection(self__.layout_id),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.layout_id], null)], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.shape_layout.merge_cells_51068(layout_id,ids,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shape_layout.update_grid_cell_position = (function app$main$data$workspace$shape_layout$update_grid_cell_position(layout_id,cell_id,props){
if((typeof app.main.data.workspace.shape_layout.update_grid_cell_position_51072 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.update_grid_cell_position_51072 = (function (layout_id,cell_id,props,meta51073){
this.layout_id = layout_id;
this.cell_id = cell_id;
this.props = props;
this.meta51073 = meta51073;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.update_grid_cell_position_51072.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.update_grid_cell_position_51072.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","update-grid-cell-position","app.main.data.workspace.shape-layout/update-grid-cell-position",262646518);
}));

(app.main.data.workspace.shape_layout.update_grid_cell_position_51072.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51074,meta51073__$1){
var self__ = this;
var _51074__$1 = this;
return (new app.main.data.workspace.shape_layout.update_grid_cell_position_51072(self__.layout_id,self__.cell_id,self__.props,meta51073__$1));
}));

(app.main.data.workspace.shape_layout.update_grid_cell_position_51072.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51074){
var self__ = this;
var _51074__$1 = this;
return self__.meta51073;
}));

(app.main.data.workspace.shape_layout.update_grid_cell_position_51072.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.update_grid_cell_position_51072.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var undo_id = Symbol();
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.layout_id], null),(function (shape,objects){
var prev_data = cljs.core.select_keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187)),self__.cell_id),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"row-span","row-span",-365554241),new cljs.core.Keyword(null,"column-span","column-span",1302376857)], null));
var new_data = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([prev_data,self__.props], 0));
return app.common.types.shape.layout.assign_cells(app.common.types.shape.layout.resize_cell_area(shape,new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(prev_data),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(prev_data),new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(new_data),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(new_data),new cljs.core.Keyword(null,"row-span","row-span",-365554241).cljs$core$IFn$_invoke$arity$1(new_data),new cljs.core.Keyword(null,"column-span","column-span",1302376857).cljs$core$IFn$_invoke$arity$1(new_data)),objects);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null)),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.layout_id], null)], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.shape_layout.update_grid_cell_position_51072(layout_id,cell_id,props,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.shape_layout.create_cell_board = (function app$main$data$workspace$shape_layout$create_cell_board(layout_id,cell_ids){
if((typeof app.main.data.workspace.shape_layout.create_cell_board_51076 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.shape_layout.create_cell_board_51076 = (function (layout_id,cell_ids,meta51077){
this.layout_id = layout_id;
this.cell_ids = cell_ids;
this.meta51077 = meta51077;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.shape_layout.create_cell_board_51076.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.create_cell_board_51076.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.shape-layout","create-cell-board","app.main.data.workspace.shape-layout/create-cell-board",-1425068008);
}));

(app.main.data.workspace.shape_layout.create_cell_board_51076.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_51078,meta51077__$1){
var self__ = this;
var _51078__$1 = this;
return (new app.main.data.workspace.shape_layout.create_cell_board_51076(self__.layout_id,self__.cell_ids,meta51077__$1));
}));

(app.main.data.workspace.shape_layout.create_cell_board_51076.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_51078){
var self__ = this;
var _51078__$1 = this;
return self__.meta51077;
}));

(app.main.data.workspace.shape_layout.create_cell_board_51076.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.shape_layout.create_cell_board_51076.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var frame_id = app.common.uuid.next();
var undo_id = Symbol();
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,self__.layout_id);
var cells = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51075_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),p1__51075_SHARP_], null));
}),self__.cell_ids);
var selected = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shapes","shapes",1897594879)),cells);
var map__51079 = app.common.types.shape.layout.cells_coordinates(cells);
var map__51079__$1 = cljs.core.__destructure_map(map__51079);
var first_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51079__$1,new cljs.core.Keyword(null,"first-row","first-row",-111793911));
var first_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51079__$1,new cljs.core.Keyword(null,"first-column","first-column",22621775));
var last_row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51079__$1,new cljs.core.Keyword(null,"last-row","last-row",388121667));
var last_column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51079__$1,new cljs.core.Keyword(null,"last-column","last-column",2053855408));
var target_cell = app.common.types.shape.layout.get_cell_by_position(shape,first_row,first_column);
var vec__51080 = (function (){var G__51083 = (function (){var G__51084 = app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),objects);
if(app.common.data.not_empty_QMARK_(selected)){
return app.common.files.shapes_helpers.prepare_create_artboard_from_selection.cljs$core$IFn$_invoke$arity$9(G__51084,frame_id,self__.layout_id,objects,selected,(0),null,true,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_cell));
} else {
return G__51084;
}
})();
if(cljs.core.empty_QMARK_(cljs.core.seq(selected))){
return app.common.files.shapes_helpers.prepare_create_empty_artboard(G__51083,frame_id,self__.layout_id,objects,(0),null,true,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_cell));
} else {
return G__51083;
}
})();
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51080,(0),null);
var changes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51080,(1),null);
var changes__$1 = app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(changes,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_id], null),(function (shape__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),new cljs.core.Keyword(null,"fill","fill",883462889)),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),new cljs.core.Keyword(null,"fill","fill",883462889));
})),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.layout_id], null),(function (shape__$1){
var new_row_span = ((last_row - first_row) + (1));
var new_col_span = ((last_column - first_column) + (1));
return app.common.types.shape.layout.resize_cell_area(shape__$1,new cljs.core.Keyword(null,"row","row",-570139521).cljs$core$IFn$_invoke$arity$1(target_cell),new cljs.core.Keyword(null,"column","column",2078222095).cljs$core$IFn$_invoke$arity$1(target_cell),first_row,first_column,new_row_span,new_col_span);
}));
return beicon.v2.core.of(app.main.data.workspace.undo.start_undo_transaction(undo_id),app.main.data.changes.commit_changes(changes__$1),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("layout","update","layout/update",-2110439502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.layout_id], null)], null)),app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
}

return (new app.main.data.workspace.shape_layout.create_cell_board_51076(layout_id,cell_ids,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.shape_layout.js.map
