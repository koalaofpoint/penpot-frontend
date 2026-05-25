import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.types.container.js";
import "./app.common.types.path.js";
import "./app.common.types.text.js";
import "./app.main.data.changes.js";
import "./app.main.data.helpers.js";
import "./app.main.features.js";
import "./app.render_wasm.api.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.path.shapes_to_path');
app.main.data.workspace.path.shapes_to_path.dissoc_attrs = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"rx","rx",1627208482),new cljs.core.Keyword(null,"ry","ry",-334598563),new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r4","r4",1134323163),new cljs.core.Keyword(null,"metadata","metadata",1799301597)], null);
app.main.data.workspace.path.shapes_to_path.convert_selected_to_path = (function app$main$data$workspace$path$shapes_to_path$convert_selected_to_path(var_args){
var G__50811 = arguments.length;
switch (G__50811) {
case 0:
return app.main.data.workspace.path.shapes_to_path.convert_selected_to_path.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return app.main.data.workspace.path.shapes_to_path.convert_selected_to_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.path.shapes_to_path.convert_selected_to_path.cljs$core$IFn$_invoke$arity$0 = (function (){
return app.main.data.workspace.path.shapes_to_path.convert_selected_to_path.cljs$core$IFn$_invoke$arity$1(null);
}));

(app.main.data.workspace.path.shapes_to_path.convert_selected_to_path.cljs$core$IFn$_invoke$arity$1 = (function (ids){
if((typeof app.main.data.workspace.path.shapes_to_path.convert_selected_to_path_50812 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.path.shapes_to_path.convert_selected_to_path_50812 = (function (ids,meta50813){
this.ids = ids;
this.meta50813 = meta50813;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.path.shapes_to_path.convert_selected_to_path_50812.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.shapes_to_path.convert_selected_to_path_50812.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.path.shapes-to-path","convert-selected-to-path","app.main.data.workspace.path.shapes-to-path/convert-selected-to-path",-414137768);
}));

(app.main.data.workspace.path.shapes_to_path.convert_selected_to_path_50812.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50814,meta50813__$1){
var self__ = this;
var _50814__$1 = this;
return (new app.main.data.workspace.path.shapes_to_path.convert_selected_to_path_50812(self__.ids,meta50813__$1));
}));

(app.main.data.workspace.path.shapes_to_path.convert_selected_to_path_50812.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50814){
var self__ = this;
var _50814__$1 = this;
return self__.meta50813;
}));

(app.main.data.workspace.path.shapes_to_path.convert_selected_to_path_50812.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.path.shapes_to_path.convert_selected_to_path_50812.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(state,"render-wasm/v1"))){
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50806_SHARP_){
return app.common.types.container.has_any_copy_parent_QMARK_(objects,cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__50806_SHARP_));
}),(function (){var or__5025__auto__ = self__.ids;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
}
})());
var children_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__50807_SHARP_){
return app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,p1__50807_SHARP_);
})),selected);
var changes = app.common.files.changes_builder.remove_objects.cljs$core$IFn$_invoke$arity$2(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),objects),selected,(function (shape){
var content = app.render_wasm.api.shape_to_path(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
return app.common.types.path.update_geometry.cljs$core$IFn$_invoke$arity$2(app.common.data.without_keys((function (){var G__50816 = (function (){var G__50817 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"path","path",-188191168));
if(app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50817,new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.first(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fills","fills",902966780),app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$2(app.common.types.text.is_text_node_QMARK_,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape)))));
} else {
return G__50817;
}
})();
if(app.common.files.helpers.image_shape_QMARK_(shape)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__50816,new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"metadata","metadata",1799301597)));
} else {
return G__50816;
}
})(),app.main.data.workspace.path.shapes_to_path.dissoc_attrs),content);
})),children_ids);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
} else {
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var selected = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__50808_SHARP_){
return app.common.types.container.has_any_copy_parent_QMARK_(objects,cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__50808_SHARP_));
}),(function (){var or__5025__auto__ = self__.ids;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.helpers.lookup_selected.cljs$core$IFn$_invoke$arity$1(state);
}
})());
var children_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__50809_SHARP_){
return app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,p1__50809_SHARP_);
})),selected);
var changes = app.common.files.changes_builder.remove_objects.cljs$core$IFn$_invoke$arity$2(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(app.common.files.changes_builder.with_objects(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$2(it__$1,page_id),objects),selected,app.common.types.path.convert_to_path,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null)),children_ids);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}
}));
}

return (new app.main.data.workspace.path.shapes_to_path.convert_selected_to_path_50812(ids,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.path.shapes_to_path.convert_selected_to_path.cljs$lang$maxFixedArity = 1);


//# sourceMappingURL=app.main.data.workspace.path.shapes_to_path.js.map
