import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.types.color.js";
import "./app.common.types.shape.layout.js";
import "./app.main.refs.js";
import "./app.main.ui.workspace.sidebar.options.menus.blur.js";
import "./app.main.ui.workspace.sidebar.options.menus.constraints.js";
import "./app.main.ui.workspace.sidebar.options.menus.exports.js";
import "./app.main.ui.workspace.sidebar.options.menus.fill.js";
import "./app.main.ui.workspace.sidebar.options.menus.grid_cell.js";
import "./app.main.ui.workspace.sidebar.options.menus.layout_container.js";
import "./app.main.ui.workspace.sidebar.options.menus.layout_item.js";
import "./app.main.ui.workspace.sidebar.options.menus.measures.js";
import "./app.main.ui.workspace.sidebar.options.menus.shadow.js";
import "./app.main.ui.workspace.sidebar.options.menus.stroke.js";
import "./app.main.ui.workspace.sidebar.options.menus.svg_attrs.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.shapes.svg_raw');
app.main.ui.workspace.sidebar.options.shapes.svg_raw.svg_elements = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 13, [new cljs.core.Keyword(null,"path","path",-188191168),null,new cljs.core.Keyword(null,"textPath","textPath",269260449),null,new cljs.core.Keyword(null,"symbol","symbol",-1038572696),null,new cljs.core.Keyword(null,"circle","circle",1903212362),null,new cljs.core.Keyword(null,"g","g",1738089905),null,new cljs.core.Keyword(null,"line","line",212345235),null,new cljs.core.Keyword(null,"svg","svg",856789142),null,new cljs.core.Keyword(null,"ellipse","ellipse",1135891702),null,new cljs.core.Keyword(null,"image","image",-58725096),null,new cljs.core.Keyword(null,"polyline","polyline",-1731551044),null,new cljs.core.Keyword(null,"rect","rect",-108902628),null,new cljs.core.Keyword(null,"polygon","polygon",837053759),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null);
app.main.ui.workspace.sidebar.options.shapes.svg_raw.parse_color = (function app$main$ui$workspace$sidebar$options$shapes$svg_raw$parse_color(color){
try{if(((cljs.core.not(color)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color,"none")))){
return null;
} else {
if(cuerdas.core.starts_with_QMARK_(color,"url")){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"multiple","multiple",1244445549)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),app.common.types.color.parse(color),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null);

}
}
}catch (e56062){var e = e56062;
console.error("Error parsing color",e);

return null;
}});
app.main.ui.workspace.sidebar.options.shapes.svg_raw.get_fill_values = (function app$main$ui$workspace$sidebar$options$shapes$svg_raw$get_fill_values(shape){
var fill_values = cljs.core.select_keys(shape,app.main.ui.workspace.sidebar.options.menus.fill.fill_attrs);
var color = app.main.ui.workspace.sidebar.options.shapes.svg_raw.parse_color((function (){var or__5025__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"fill","fill",883462889)], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"fill","fill",883462889)], null));
}
})());
var fill_values__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.empty_QMARK_(fill_values);
if(and__5023__auto__){
return color;
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color)], null):fill_values);
return fill_values__$1;
});
app.main.ui.workspace.sidebar.options.shapes.svg_raw.get_stroke_values = (function app$main$ui$workspace$sidebar$options$shapes$svg_raw$get_stroke_values(shape){
var stroke_values = cljs.core.select_keys(shape,app.main.ui.workspace.sidebar.options.menus.stroke.stroke_attrs);
var color = app.main.ui.workspace.sidebar.options.shapes.svg_raw.parse_color((function (){var or__5025__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"stroke","stroke",1741823555)], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"stroke","stroke",1741823555)], null));
}
})());
var stroke_color = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$2(color,"#000000");
var stroke_opacity = new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$2(color,(1));
var stroke_style = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146)], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146)], null));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
if(cljs.core.truth_(color)){
return "solid";
} else {
return "none";
}
}
}
})());
var stroke_alignment = new cljs.core.Keyword(null,"center","center",-748944368);
var stroke_width = app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435)], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435)], null));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return "1";
}
}
})());
var stroke_values__$1 = ((cljs.core.empty_QMARK_(stroke_values))?new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),stroke_color,new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),stroke_opacity,new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146),stroke_style,new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340),stroke_alignment,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),stroke_width], null):stroke_values);
return stroke_values__$1;
});
app.main.ui.workspace.sidebar.options.shapes.svg_raw.options_STAR_ = (function app$main$ui$workspace$sidebar$options$shapes$svg_raw$options_STAR_(props_56063){
var file_id = props_56063.fileId;
var page_id = props_56063.pageId;
var shape = props_56063.shape;
var id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var type = (shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)));
var ids = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [id], null);
}));
var shapes = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null);
}));
var applied_tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871));
var map__56064 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"content","content",15833224));
var map__56064__$1 = cljs.core.__destructure_map(map__56064);
var content = map__56064__$1;
var tag = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56064__$1,new cljs.core.Keyword(null,"tag","tag",-1290361223));
var fill_values = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (){
return app.main.ui.workspace.sidebar.options.shapes.svg_raw.get_fill_values(shape);
}));
var stroke_values = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (){
return app.main.ui.workspace.sidebar.options.shapes.svg_raw.get_stroke_values(shape);
}));
var measure_values = cljs.core.select_keys(shape,app.main.ui.workspace.sidebar.options.menus.measures.measure_attrs);
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
if(cljs.core.contains_QMARK_(app.main.ui.workspace.sidebar.options.shapes.svg_raw.svg_elements,tag)){
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.measures.measures_menu_STAR_,{'ids':ids,'type':type,'appliedTokens':applied_tokens,'values':measure_values,'shapes':shapes}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_container.layout_container_menu,{'type':type,'ids':new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)], null),'values':layout_container_values,'applied-tokens':applied_tokens,'multiple':false}),(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(ids),(1));
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
})())?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.grid_cell.options,{'shape':cljs.core.first(parents),'cell':app.common.types.shape.layout.get_cell_by_shape_id(cljs.core.first(parents),cljs.core.first(ids))}):null),(cljs.core.truth_(is_layout_child_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_item.layout_item_menu,{'ids':ids,'type':type,'values':layout_item_values,'is-layout-child?':true,'is-flex-parent?':is_flex_parent_QMARK_,'is-grid-parent?':is_grid_parent_QMARK_,'applied-tokens':applied_tokens,'shape':shape}):null),(((((!(is_layout_child_QMARK_))) || (is_layout_child_absolute_QMARK_)))?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.constraints.constraints_menu,{'ids':ids,'values':constraint_values}):null),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.fill.fill_menu_STAR_,{'ids':ids,'type':type,'values':fill_values,'appliedTokens':applied_tokens}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.stroke.stroke_menu,{'ids':ids,'type':type,'values':stroke_values,'applied-tokens':applied_tokens}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.shadow.shadow_menu_STAR_,{'ids':ids,'values':cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"shadow","shadow",873231803))}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.blur.blur_menu,{'ids':ids,'values':cljs.core.select_keys(shape,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",-453500461)], null))}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.svg_attrs.svg_attrs_menu,{'ids':ids,'values':cljs.core.select_keys(shape,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)], null))}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.exports.exports_menu_STAR_,{'type':type,'ids':ids,'shapes':shapes,'values':cljs.core.select_keys(shape,app.main.ui.workspace.sidebar.options.menus.exports.exports_attrs),'pageId':page_id,'fileId':file_id})]});
} else {
return null;
}
});

(app.main.ui.workspace.sidebar.options.shapes.svg_raw.options_STAR_.displayName = "options*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.shapes.svg_raw.js.map
