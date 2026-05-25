import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.shape.js";
import "./app.common.types.shape.layout.js";
import "./app.common.uuid.js";
goog.provide('app.common.files.shapes_helpers');
app.common.files.shapes_helpers.prepare_add_shape = (function app$common$files$shapes_helpers$prepare_add_shape(changes,shape,objects){
var index = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(shape));
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
var mod_QMARK_ = new cljs.core.Keyword(null,"mod?","mod?",964661324).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(shape));
var vec__67051 = (cljs.core.truth_(mod_QMARK_)?null:new cljs.core.Keyword(null,"cell","cell",764245084).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(shape)));
var row = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67051,(0),null);
var column = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67051,(1),null);
var cell = vec__67051;
var changes__$1 = (function (){var G__67054 = (function (){var G__67055 = (function (){var G__67056 = (function (){var G__67058 = (function (){var G__67059 = app.common.files.changes_builder.with_objects(changes,objects);
if((!((index == null)))){
return app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$3(G__67059,shape,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),index], null));
} else {
return G__67059;
}
})();
if((index == null)){
return app.common.files.changes_builder.add_object.cljs$core$IFn$_invoke$arity$2(G__67058,shape);
} else {
return G__67058;
}
})();
if((!((new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape) == null)))){
return app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$4(G__67056,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null),index);
} else {
return G__67056;
}
})();
if((!((cell == null)))){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(G__67055,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape)], null),(function (p1__67049_SHARP_){
return app.common.types.shape.layout.push_into_cell(p1__67049_SHARP_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null),row,column);
}));
} else {
return G__67055;
}
})();
if(cljs.core.truth_(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape)))){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(G__67054,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape)], null),app.common.types.shape.layout.assign_cells,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null));
} else {
return G__67054;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape,changes__$1], null);
});
app.common.files.shapes_helpers.prepare_move_shapes_into_frame = (function app$common$files$shapes_helpers$prepare_move_shapes_into_frame(changes,frame_id,shapes,objects,remove_layout_data_QMARK_){
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,frame_id),new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
var shapes__$1 = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__67075_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__67075_SHARP_,parent_id);
}),shapes);
var to_move = cljs.core.not_empty(cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),shapes__$1));
if(cljs.core.truth_(to_move)){
var G__67077 = app.common.files.changes_builder.change_parent.cljs$core$IFn$_invoke$arity$4(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3((function (){var G__67078 = changes;
if(cljs.core.truth_((function (){var and__5023__auto__ = remove_layout_data_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,frame_id));
} else {
return and__5023__auto__;
}
})())){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(G__67078,shapes__$1,app.common.types.shape.layout.remove_layout_item_data);
} else {
return G__67078;
}
})(),shapes__$1,(function (p1__67076_SHARP_){
var G__67079 = p1__67076_SHARP_;
if(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__67076_SHARP_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67079,new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312),true);
} else {
return G__67079;
}
})),frame_id,to_move,(0));
if(cljs.core.truth_(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,frame_id))){
return app.common.files.changes_builder.reorder_grid_children(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(G__67077,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_id], null),app.common.types.shape.layout.assign_cells,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_id], null));
} else {
return G__67077;
}
} else {
return changes;
}
});
app.common.files.shapes_helpers.prepare_create_artboard_from_selection = (function app$common$files$shapes_helpers$prepare_create_artboard_from_selection(var_args){
var G__67141 = arguments.length;
switch (G__67141) {
case 8:
return app.common.files.shapes_helpers.prepare_create_artboard_from_selection.cljs$core$IFn$_invoke$arity$8((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]));

break;
case 9:
return app.common.files.shapes_helpers.prepare_create_artboard_from_selection.cljs$core$IFn$_invoke$arity$9((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]));

break;
case 10:
return app.common.files.shapes_helpers.prepare_create_artboard_from_selection.cljs$core$IFn$_invoke$arity$10((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]),(arguments[(7)]),(arguments[(8)]),(arguments[(9)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.files.shapes_helpers.prepare_create_artboard_from_selection.cljs$core$IFn$_invoke$arity$8 = (function (changes,id,parent_id,objects,selected,index,frame_name,without_fill_QMARK_){
return app.common.files.shapes_helpers.prepare_create_artboard_from_selection.cljs$core$IFn$_invoke$arity$9(changes,id,parent_id,objects,selected,index,frame_name,without_fill_QMARK_,null);
}));

(app.common.files.shapes_helpers.prepare_create_artboard_from_selection.cljs$core$IFn$_invoke$arity$9 = (function (changes,id,parent_id,objects,selected,index,frame_name,without_fill_QMARK_,target_cell_id){
return app.common.files.shapes_helpers.prepare_create_artboard_from_selection.cljs$core$IFn$_invoke$arity$10(changes,id,parent_id,objects,selected,index,frame_name,without_fill_QMARK_,target_cell_id,null);
}));

(app.common.files.shapes_helpers.prepare_create_artboard_from_selection.cljs$core$IFn$_invoke$arity$10 = (function (changes,id,parent_id,objects,selected,index,frame_name,without_fill_QMARK_,target_cell_id,delta){
var temp__5825__auto__ = cljs.core.not_empty(cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),selected));
if(cljs.core.truth_(temp__5825__auto__)){
var selected_objs = temp__5825__auto__;
var selected_SINGLEQUOTE_ = app.common.files.helpers.order_by_indexed_shapes(objects,selected);
var new_index = (function (){var or__5025__auto__ = index;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (app.common.files.helpers.get_position_on_parent(objects,cljs.core.first(selected_SINGLEQUOTE_)) + (1));
}
})();
var srect = app.common.geom.shapes.shapes__GT_rect(selected_objs);
var selected_id = cljs.core.first(selected);
var selected_obj = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,selected_id);
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_obj,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072));
var parent_id__$1 = (function (){var or__5025__auto__ = parent_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(selected_obj,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
}
})();
var base_parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id__$1);
var layout_attrs = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(selected))) && (app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(base_parent))))?cljs.core.select_keys(selected_obj,app.common.types.shape.layout.layout_child_attrs):null);
var target_cell_id__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = (target_cell_id == null);
if(and__5023__auto__){
return app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,parent_id__$1);
} else {
return and__5023__auto__;
}
})())?(function (){var ncols = cljs.core.count(new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864).cljs$core$IFn$_invoke$arity$1(base_parent));
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cljs.core.min_key,(function (p__67147){
var map__67148 = p__67147;
var map__67148__$1 = cljs.core.__destructure_map(map__67148);
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67148__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__67148__$1,new cljs.core.Keyword(null,"column","column",2078222095));
return ((ncols * row) + column);
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__67080_SHARP_){
return app.common.types.shape.layout.get_cell_by_shape_id(base_parent,p1__67080_SHARP_);
}),selected)));
})():target_cell_id);
var attrs = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"x","x",2099068185),(function (){var G__67150 = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(srect);
if(cljs.core.truth_(delta)){
return (G__67150 + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(delta));
} else {
return G__67150;
}
})(),new cljs.core.Keyword(null,"y","y",-1757859776),(function (){var G__67151 = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(srect);
if(cljs.core.truth_(delta)){
return (G__67151 + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(delta));
} else {
return G__67151;
}
})(),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(srect),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(srect)], null);
var shape = app.common.types.shape.setup_shape((function (){var G__67153 = attrs;
var G__67153__$1 = (((!((id == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67153,new cljs.core.Keyword(null,"id","id",-1388402092),id):G__67153);
var G__67153__$2 = (((!((frame_name == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67153__$1,new cljs.core.Keyword(null,"name","name",1843675177),frame_name):G__67153__$1);
var G__67153__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__67153__$2,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,selected)], 0))
;
var G__67153__$4 = (((!((layout_attrs == null))))?app.common.data.patch_object.cljs$core$IFn$_invoke$arity$2(G__67153__$3,layout_attrs):G__67153__$3);
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frame_id,app.common.uuid.zero);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return without_fill_QMARK_;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__67153__$4,new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312),true,new cljs.core.Keyword(null,"show-content","show-content",-878000465),true], 0));
} else {
return G__67153__$4;
}
})());
var shape__$1 = cljs.core.with_meta(shape,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),new_index], null));
var vec__67143 = app.common.files.shapes_helpers.prepare_add_shape(changes,shape__$1,objects);
var shape__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67143,(0),null);
var changes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67143,(1),null);
var changes__$2 = app.common.files.shapes_helpers.prepare_move_shapes_into_frame(changes__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$2),selected_SINGLEQUOTE_,objects,false);
var changes__$3 = (function (){var G__67154 = changes__$2;
if(cljs.core.truth_(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape__$2)))){
return app.common.files.changes_builder.reorder_grid_children(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4(G__67154,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape__$2)], null),(function (parent,objects__$1){
return app.common.types.shape.layout.assign_cells((function (){var G__67155 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parent,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(base_parent)),new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947),new cljs.core.Keyword(null,"layout-grid-rows","layout-grid-rows",743773947).cljs$core$IFn$_invoke$arity$1(base_parent)),new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864),new cljs.core.Keyword(null,"layout-grid-columns","layout-grid-columns",-295096864).cljs$core$IFn$_invoke$arity$1(base_parent));
if((!((target_cell_id__$1 == null)))){
return cljs.core.assoc_in(G__67155,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),target_cell_id__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$2)], null));
} else {
return G__67155;
}
})(),objects__$1);
}),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape__$2)], null));
} else {
return G__67154;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape__$2,changes__$3], null);
} else {
return null;
}
}));

(app.common.files.shapes_helpers.prepare_create_artboard_from_selection.cljs$lang$maxFixedArity = 10);

app.common.files.shapes_helpers.prepare_create_empty_artboard = (function app$common$files$shapes_helpers$prepare_create_empty_artboard(changes,frame_id,parent_id,objects,index,frame_name,without_fill_QMARK_,target_cell_id){
var base_parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,parent_id);
var attrs = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),0.01,new cljs.core.Keyword(null,"height","height",1025178622),0.01], null);
var shape = app.common.types.shape.setup_shape((function (){var G__67159 = attrs;
var G__67159__$1 = (((!((frame_id == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67159,new cljs.core.Keyword(null,"id","id",-1388402092),frame_id):G__67159);
var G__67159__$2 = (((!((frame_name == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__67159__$1,new cljs.core.Keyword(null,"name","name",1843675177),frame_name):G__67159__$1);
var G__67159__$3 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__67159__$2,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131),parent_id,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentVector.EMPTY], 0))
;
var G__67159__$4 = cljs.core.with_meta(G__67159__$3,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),index], null))
;
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(frame_id,app.common.uuid.zero);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return without_fill_QMARK_;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__67159__$4,new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.PersistentVector.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312),true], 0));
} else {
return G__67159__$4;
}
})());
var vec__67156 = app.common.files.shapes_helpers.prepare_add_shape(changes,shape,objects);
var shape__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67156,(0),null);
var changes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__67156,(1),null);
var changes__$2 = (function (){var G__67162 = changes__$1;
if(cljs.core.truth_(app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape__$1)))){
return app.common.files.changes_builder.reorder_grid_children(app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$4((function (){var G__67163 = G__67162;
if((!((target_cell_id == null)))){
return app.common.files.changes_builder.update_shapes.cljs$core$IFn$_invoke$arity$3(G__67163,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape__$1)], null),(function (parent){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(parent,new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187).cljs$core$IFn$_invoke$arity$1(base_parent)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-grid-cells","layout-grid-cells",2100726187),target_cell_id,new cljs.core.Keyword(null,"shapes","shapes",1897594879)], null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_id], null)),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"auto","auto",-566279492));
}));
} else {
return G__67163;
}
})(),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape__$1)], null),app.common.types.shape.layout.assign_cells,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"with-objects?","with-objects?",1705995428),true], null)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape__$1)], null));
} else {
return G__67162;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape__$1,changes__$2], null);
});

//# sourceMappingURL=app.common.files.shapes_helpers.js.map
