import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.types.shape.layout.js";
import "./app.main.refs.js";
import "./app.main.ui.workspace.sidebar.options.menus.blur.js";
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
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.shapes.bool');
app.main.ui.workspace.sidebar.options.shapes.bool.options_STAR_ = (function app$main$ui$workspace$sidebar$options$shapes$bool$options_STAR_(props_55817){
var file_id = props_55817.fileId;
var page_id = props_55817.pageId;
var shape = props_55817.shape;
var id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var type = (shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)));
var ids = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null);
}));
var shapes = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null);
}));
var applied_tokens = ((cljs.core.seq(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871))))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871)):null);
var measure_values = cljs.core.select_keys(shape,app.main.ui.workspace.sidebar.options.menus.measures.measure_attrs);
var stroke_values = cljs.core.select_keys(shape,app.main.ui.workspace.sidebar.options.menus.stroke.stroke_attrs);
var layer_values = cljs.core.select_keys(shape,app.main.ui.workspace.sidebar.options.menus.layer.layer_attrs);
var constraint_values = cljs.core.select_keys(shape,app.main.ui.workspace.sidebar.options.menus.constraints.constraint_attrs);
var layout_item_values = cljs.core.select_keys(shape,app.main.ui.workspace.sidebar.options.menus.layout_item.layout_item_attrs);
var layout_container_values = cljs.core.select_keys(shape,app.main.ui.workspace.sidebar.options.menus.layout_container.layout_container_flex_attrs);
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
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layer.layer_menu_STAR_,{'ids':ids,'type':type,'appliedTokens':applied_tokens,'values':layer_values}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.measures.measures_menu_STAR_,{'ids':ids,'appliedTokens':applied_tokens,'type':type,'values':measure_values,'shapes':shapes}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.layout_container_menu,{'type':type,'ids':new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),'values':layout_container_values,'applied-tokens':applied_tokens,'multiple':false}),(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ids),(1));
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
})())?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.grid_cell.options,{'shape':cljs.core.first(parents),'cell':app.common.types.shape.layout.get_cell_by_shape_id(cljs.core.first(parents),cljs.core.first(ids))}):null),(cljs.core.truth_(is_layout_child_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_item.layout_item_menu,{'ids':ids,'type':type,'values':layout_item_values,'is-layout-child?':true,'is-flex-parent?':is_flex_parent_QMARK_,'is-grid-parent?':is_grid_parent_QMARK_,'applied-tokens':applied_tokens,'shape':shape}):null),(((((!(is_layout_child_QMARK_))) || (is_layout_child_absolute_QMARK_)))?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.constraints.constraints_menu,{'ids':ids,'values':constraint_values}):null),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.fill.fill_menu_STAR_,{'ids':ids,'type':type,'values':shape,'appliedTokens':applied_tokens}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.stroke.stroke_menu,{'ids':ids,'type':type,'show-caps':true,'values':stroke_values,'applied-tokens':applied_tokens}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.shadow.shadow_menu_STAR_,{'ids':ids,'values':cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"shadow","shadow",873231803))}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.blur.blur_menu,{'ids':ids,'values':cljs.core.select_keys(shape,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",-453500461)], null))}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.exports.exports_menu_STAR_,{'type':type,'ids':ids,'shapes':shapes,'values':cljs.core.select_keys(shape,app.main.ui.workspace.sidebar.options.menus.exports.exports_attrs),'pageId':page_id,'fileId':file_id})]});
});

(app.main.ui.workspace.sidebar.options.shapes.bool.options_STAR_.displayName = "options*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.shapes.bool.js.map
