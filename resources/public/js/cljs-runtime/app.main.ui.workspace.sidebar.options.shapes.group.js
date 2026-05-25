import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.types.shape.layout.js";
import "./app.main.refs.js";
import "./app.main.ui.workspace.sidebar.options.menus.blur.js";
import "./app.main.ui.workspace.sidebar.options.menus.color_selection.js";
import "./app.main.ui.workspace.sidebar.options.menus.constraints.js";
import "./app.main.ui.workspace.sidebar.options.menus.exports.js";
import "./app.main.ui.workspace.sidebar.options.menus.fill.js";
import "./app.main.ui.workspace.sidebar.options.menus.grid_cell.js";
import "./app.main.ui.workspace.sidebar.options.menus.layer.js";
import "./app.main.ui.workspace.sidebar.options.menus.layout_container.js";
import "./app.main.ui.workspace.sidebar.options.menus.layout_item.js";
import "./app.main.ui.workspace.sidebar.options.menus.measures.js";
import "./app.main.ui.workspace.sidebar.options.menus.shadow.js";
import "./app.main.ui.workspace.sidebar.options.menus.stroke.js";
import "./app.main.ui.workspace.sidebar.options.menus.svg_attrs.js";
import "./app.main.ui.workspace.sidebar.options.menus.text.js";
import "./app.main.ui.workspace.sidebar.options.shapes.multiple.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.shapes.group');
app.main.ui.workspace.sidebar.options.shapes.group.options_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$sidebar$options$shapes$group$options_STAR_(props_56034){
var shapes_with_children = props_56034.shapesWithChildren;
var file_id = props_56034.fileId;
var libraries = props_56034.libraries;
var page_id = props_56034.pageId;
var shape = props_56034.shape;
var id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var type = (shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)));
var ids = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null);
}));
var shapes = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null);
}));
var applied_tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871));
var objects = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes_with_children)],(function (){
return app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),shapes_with_children);
}));
var layout_container_values = cljs.core.select_keys(shape,app.main.ui.workspace.sidebar.options.menus.layout_container.layout_container_flex_attrs);
var svg_values = cljs.core.select_keys(shape,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)], null));
var is_layout_child_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (){
return app.main.refs.is_layout_child_QMARK_(ids);
}));
var is_layout_child_QMARK_ = rumext.v2.deref(is_layout_child_ref);
var is_flex_parent_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (){
return app.main.refs.flex_layout_child_QMARK_(ids);
}));
var is_flex_parent_QMARK_ = rumext.v2.deref(is_flex_parent_ref);
var is_grid_parent_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (){
return app.main.refs.grid_layout_child_QMARK_(ids);
}));
var is_grid_parent_QMARK_ = rumext.v2.deref(is_grid_parent_ref);
var is_layout_child_absolute_QMARK_ = app.common.types.shape.layout.item_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var parents_by_ids_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (){
return app.main.refs.parents_by_ids(ids);
}));
var parents = rumext.v2.deref(parents_by_ids_ref);
var vec__56035 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs(shapes,objects,new cljs.core.Keyword(null,"measure","measure",-1857519826));
var measure_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56035,(0),null);
var measure_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56035,(1),null);
var vec__56038 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs(shapes,objects,new cljs.core.Keyword(null,"layer","layer",-1601820589));
var layer_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56038,(0),null);
var layer_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56038,(1),null);
var vec__56041 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs(shapes,objects,new cljs.core.Keyword(null,"constraint","constraint",1725147424));
var constraint_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56041,(0),null);
var constraint_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56041,(1),null);
var vec__56044 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs(shapes,objects,new cljs.core.Keyword(null,"fill","fill",883462889));
var fill_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56044,(0),null);
var fill_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56044,(1),null);
var fill_tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56044,(2),null);
var vec__56047 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs(shapes,objects,new cljs.core.Keyword(null,"shadow","shadow",873231803));
var shadow_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56047,(0),null);
var vec__56050 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs(shapes,objects,new cljs.core.Keyword(null,"blur","blur",-453500461));
var blur_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56050,(0),null);
var blur_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56050,(1),null);
var vec__56053 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs(shapes,objects,new cljs.core.Keyword(null,"stroke","stroke",1741823555));
var stroke_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56053,(0),null);
var stroke_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56053,(1),null);
var stroke_tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56053,(2),null);
var vec__56056 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs(shapes,objects,new cljs.core.Keyword(null,"text","text",-1790561697));
var text_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56056,(0),null);
var text_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56056,(1),null);
var vec__56059 = app.main.ui.workspace.sidebar.options.shapes.multiple.get_attrs(shapes,objects,new cljs.core.Keyword(null,"layout-item","layout-item",-1207087322));
var layout_item_ids = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56059,(0),null);
var layout_item_values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56059,(1),null);
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_shapes_group__options",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layer.layer_menu_STAR_,{'type':type,'ids':layer_ids,'appliedTokens':applied_tokens,'values':layer_values}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.measures.measures_menu_STAR_,{'type':type,'ids':measure_ids,'appliedTokens':applied_tokens,'values':measure_values,'shapes':shapes}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.layout_container_menu,{'type':type,'ids':new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),'values':layout_container_values,'applied-tokens':applied_tokens,'multiple':false}),(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ids),(1));
if(and__5023__auto__){
var and__5023__auto____$1 = is_layout_child_QMARK_;
if(cljs.core.truth_(and__5023__auto____$1)){
return is_grid_parent_QMARK_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.grid_cell.options,{'shape':cljs.core.first(parents),'cell':app.common.types.shape.layout.get_cell_by_shape_id(cljs.core.first(parents),cljs.core.first(ids))}):null),(cljs.core.truth_(is_layout_child_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_item.layout_item_menu,{'type':type,'ids':layout_item_ids,'is-layout-child?':true,'is-layout-container?':false,'is-flex-parent?':is_flex_parent_QMARK_,'is-grid-parent?':is_grid_parent_QMARK_,'applied-tokens':applied_tokens,'values':layout_item_values}):null),(((((!(is_layout_child_QMARK_))) || (is_layout_child_absolute_QMARK_)))?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.constraints.constraints_menu,{'ids':constraint_ids,'values':constraint_values}):null),((cljs.core.empty_QMARK_(fill_ids))?null:rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.fill.fill_menu_STAR_,{'type':type,'ids':fill_ids,'values':fill_values,'appliedTokens':fill_tokens})),((cljs.core.empty_QMARK_(stroke_ids))?null:rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.stroke.stroke_menu,{'type':type,'ids':stroke_ids,'values':stroke_values,'applied-tokens':stroke_tokens})),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.color_selection.color_selection_menu_STAR_,{'type':type,'shapes':cljs.core.vals(objects),'fileId':file_id,'libraries':libraries}),((cljs.core.empty_QMARK_(shadow_ids))?null:rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.shadow.shadow_menu_STAR_,{'ids':ids,'values':cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"shadow","shadow",873231803)),'type':type})),((cljs.core.empty_QMARK_(blur_ids))?null:rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.blur.blur_menu,{'type':type,'ids':blur_ids,'values':blur_values})),((cljs.core.empty_QMARK_(text_ids))?null:rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.text.text_menu,{'type':type,'ids':text_ids,'values':text_values})),((cljs.core.empty_QMARK_(svg_values))?null:rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.svg_attrs.svg_attrs_menu,{'ids':ids,'values':svg_values})),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.exports.exports_menu_STAR_,{'type':type,'ids':ids,'shapes':shapes,'values':cljs.core.select_keys(shape,app.main.ui.workspace.sidebar.options.menus.exports.exports_attrs),'pageId':page_id,'fileId':file_id})]});
}));

(app.main.ui.workspace.sidebar.options.shapes.group.options_STAR_.displayName = "options*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.shapes.group.js.map
