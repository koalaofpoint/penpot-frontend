import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.types.component.js";
import "./app.common.types.components_list.js";
import "./app.common.types.shape.layout.js";
import "./app.common.types.tokens_lib.js";
import "./app.main.data.style_dictionary.js";
import "./app.main.refs.js";
import "./app.main.ui.inspect.styles.panels.blur.js";
import "./app.main.ui.inspect.styles.panels.fill.js";
import "./app.main.ui.inspect.styles.panels.geometry.js";
import "./app.main.ui.inspect.styles.panels.layout.js";
import "./app.main.ui.inspect.styles.panels.layout_element.js";
import "./app.main.ui.inspect.styles.panels.shadow.js";
import "./app.main.ui.inspect.styles.panels.stroke.js";
import "./app.main.ui.inspect.styles.panels.svg.js";
import "./app.main.ui.inspect.styles.panels.text.js";
import "./app.main.ui.inspect.styles.panels.tokens_panel.js";
import "./app.main.ui.inspect.styles.panels.variants_panel.js";
import "./app.main.ui.inspect.styles.panels.visibility.js";
import "./app.main.ui.inspect.styles.style_box.js";
import "./app.util.code_gen.style_css.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.styles');
app.main.ui.inspect.styles.layout_element_properties = new cljs.core.PersistentVector(null, 14, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),new cljs.core.Keyword(null,"margin-block-end","margin-block-end",-1287470806),new cljs.core.Keyword(null,"margin-inline-start","margin-inline-start",320232954),new cljs.core.Keyword(null,"margin-inline-end","margin-inline-end",-1696808891),new cljs.core.Keyword(null,"max-block-size","max-block-size",-1751985816),new cljs.core.Keyword(null,"min-block-size","min-block-size",2039624084),new cljs.core.Keyword(null,"max-inline-size","max-inline-size",1870424342),new cljs.core.Keyword(null,"min-inline-size","min-inline-size",-2050841943),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"grid-column","grid-column",-1086912770),new cljs.core.Keyword(null,"grid-row","grid-row",-1737175087)], null);
app.main.ui.inspect.styles.type__GT_panel_group = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"layout-element","layout-element",1221436156)], null),new cljs.core.Keyword(null,"frame","frame",-1711082588),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"layout-element","layout-element",1221436156)], null),new cljs.core.Keyword(null,"group","group",582596132),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"layout-element","layout-element",1221436156)], null),new cljs.core.Keyword(null,"rect","rect",-108902628),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"layout-element","layout-element",1221436156)], null),new cljs.core.Keyword(null,"circle","circle",1903212362),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"layout-element","layout-element",1221436156)], null),new cljs.core.Keyword(null,"path","path",-188191168),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"layout-element","layout-element",1221436156)], null),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"layout-element","layout-element",1221436156)], null),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"layout-element","layout-element",1221436156)], null)], null);
app.main.ui.inspect.styles.has_fill_QMARK_ = (function app$main$ui$inspect$styles$has_fill_QMARK_(shape){
return (((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"group","group",582596132),null,new cljs.core.Keyword(null,"text","text",-1790561697),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape))))) && (cljs.core.seq(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(shape))));
});
app.main.ui.inspect.styles.has_stroke_QMARK_ = (function app$main$ui$inspect$styles$has_stroke_QMARK_(shape){
return cljs.core.seq(new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(shape));
});
app.main.ui.inspect.styles.has_blur_QMARK_ = (function app$main$ui$inspect$styles$has_blur_QMARK_(shape){
return new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(shape);
});
app.main.ui.inspect.styles.has_text_QMARK_ = (function app$main$ui$inspect$styles$has_text_QMARK_(shape){
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape);
});
app.main.ui.inspect.styles.has_shadow_QMARK_ = (function app$main$ui$inspect$styles$has_shadow_QMARK_(shape){
return cljs.core.seq(new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(shape));
});
app.main.ui.inspect.styles.get_shape_type = (function app$main$ui$inspect$styles$get_shape_type(shapes,first_shape,first_component){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1))){
if(cljs.core.truth_((function (){var or__5025__auto__ = app.common.types.component.is_variant_container_QMARK_(first_shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.component.is_variant_QMARK_(first_component);
}
})())){
return new cljs.core.Keyword(null,"variant","variant",-424354234);
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(first_shape);
}
} else {
return new cljs.core.Keyword(null,"multiple","multiple",1244445549);
}
});
app.main.ui.inspect.styles.styles_tab_STAR_ = (function app$main$ui$inspect$styles$styles_tab_STAR_(props_74957){
var shapes = props_74957.shapes;
var color_space = props_74957.colorSpace;
var file_id = props_74957.fileId;
var libraries = props_74957.libraries;
var objects = props_74957.objects;
var from = props_74957.from;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,file_id),new cljs.core.Keyword(null,"data","data",-232669377));
var first_shape = cljs.core.first(shapes);
var first_component = app.common.types.components_list.get_component.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(first_shape));
var shape_type = app.main.ui.inspect.styles.get_shape_type(shapes,first_shape,first_component);
var panels = (app.main.ui.inspect.styles.type__GT_panel_group.cljs$core$IFn$_invoke$arity$1 ? app.main.ui.inspect.styles.type__GT_panel_group.cljs$core$IFn$_invoke$arity$1(shape_type) : app.main.ui.inspect.styles.type__GT_panel_group.call(null,shape_type));
var tokens_lib = rumext.v2.deref(app.main.refs.tokens_lib);
var active_themes = rumext.v2.deref(app.main.refs.workspace_active_theme_paths_no_hidden);
var active_sets = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens_lib)],(function (){
var G__74958 = tokens_lib;
if((G__74958 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_active_themes_set_names(G__74958);
}
}));
var active_tokens = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens_lib)],(function (){
var G__74959 = tokens_lib;
if((G__74959 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_tokens_in_active_sets(G__74959);
}
}));
var resolved_active_tokens = app.main.data.style_dictionary.use_resolved_tokens_STAR_(active_tokens);
var has_visibility_props_QMARK_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (shape){
var shape_type__$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
var and__5023__auto__ = (!(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape_type__$1,new cljs.core.Keyword(null,"text","text",-1790561697))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape_type__$1,new cljs.core.Keyword(null,"group","group",582596132))))));
if(and__5023__auto__){
var or__5025__auto__ = new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return new cljs.core.Keyword(null,"visibility","visibility",1338380893).cljs$core$IFn$_invoke$arity$1(shape);
}
}
} else {
return and__5023__auto__;
}
}));
var shorthands_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"stroke","stroke",1741823555),new cljs.core.Keyword(null,"variant","variant",-424354234),new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"grid-element","grid-element",515673421),new cljs.core.Keyword(null,"geometry","geometry",-405034994),new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"svg","svg",856789142),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"layout-element","layout-element",1221436156),new cljs.core.Keyword(null,"visibility","visibility",1338380893),new cljs.core.Keyword(null,"text","text",-1790561697)],[null,null,null,null,null,null,null,null,null,null,null,null]);
}));
var shorthands = cljs.core.deref(shorthands_STAR_);
var set_shorthands = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shorthands_STAR_)],(function (shorthand){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(shorthands_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"panel","panel",-558637456).cljs$core$IFn$_invoke$arity$1(shorthand),new cljs.core.Keyword(null,"property","property",-1114278232).cljs$core$IFn$_invoke$arity$1(shorthand));
}));
return rumext.v2.jsxs("ol",{'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.styles"),'className':"main_ui_inspect_styles__styles-tab"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,new cljs.core.Keyword(null,"workspace","workspace",-1096735709)))?"main_ui_inspect_styles__styles-tab-workspace":""),'children':[((((cljs.core.seq(active_themes)) || (cljs.core.seq(active_sets))))?rumext.v2.jsx("li",{'children':rumext.v2.jsx(app.main.ui.inspect.styles.style_box.style_box_STAR_,{'panel':new cljs.core.Keyword(null,"token","token",-1211463215),'children':rumext.v2.jsx(app.main.ui.inspect.styles.panels.tokens_panel.tokens_panel_STAR_,{'themePaths':active_themes,'setNames':active_sets})})}):null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,panel){
out_arr__46744__auto__.push(rumext.v2.jsx("li",{'children':(function (){var G__74960 = panel;
var G__74960__$1 = (((G__74960 instanceof cljs.core.Keyword))?G__74960.fqn:null);
switch (G__74960__$1) {
case "variant":
return rumext.v2.jsx(app.main.ui.inspect.styles.style_box.style_box_STAR_,{'panel':new cljs.core.Keyword(null,"variant","variant",-424354234),'children':rumext.v2.jsx(app.main.ui.inspect.styles.panels.variants_panel.variants_panel_STAR_,{'component':first_component,'objects':objects,'shape':first_shape,'data':data})});

break;
case "geometry":
return rumext.v2.jsx(app.main.ui.inspect.styles.style_box.style_box_STAR_,{'panel':new cljs.core.Keyword(null,"geometry","geometry",-405034994),'shorthand':new cljs.core.Keyword(null,"geometry","geometry",-405034994).cljs$core$IFn$_invoke$arity$1(shorthands),'children':rumext.v2.jsx(app.main.ui.inspect.styles.panels.geometry.geometry_panel_STAR_,{'shapes':shapes,'objects':objects,'resolvedTokens':resolved_active_tokens,'onGeometryShorthand':set_shorthands})});

break;
case "layout":
var layout_shapes = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.layout.any_layout_QMARK_,shapes);
if(cljs.core.seq(layout_shapes)){
return rumext.v2.jsx(app.main.ui.inspect.styles.style_box.style_box_STAR_,{'panel':new cljs.core.Keyword(null,"layout","layout",-2120940921),'shorthand':new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(shorthands),'children':rumext.v2.jsx(app.main.ui.inspect.styles.panels.layout.layout_panel_STAR_,{'shapes':layout_shapes,'objects':objects,'resolvedTokens':resolved_active_tokens,'onLayoutShorthand':set_shorthands})});
} else {
return null;
}

break;
case "layout-element":
var shapes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__74953_SHARP_){
return app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,p1__74953_SHARP_);
}),shapes);
var some_layout_prop_QMARK_ = cljs.core.seq(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (shape){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__74954_SHARP_){
return app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3(objects,shape,p1__74954_SHARP_);
}),app.main.ui.inspect.styles.layout_element_properties);
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shapes__$1], 0)));
if(some_layout_prop_QMARK_){
var only_flex_QMARK_ = cljs.core.every_QMARK_((function (p1__74955_SHARP_){
return app.common.types.shape.layout.flex_layout_immediate_child_QMARK_(objects,p1__74955_SHARP_);
}),shapes__$1);
var only_grid_QMARK_ = cljs.core.every_QMARK_((function (p1__74956_SHARP_){
return app.common.types.shape.layout.grid_layout_immediate_child_QMARK_(objects,p1__74956_SHARP_);
}),shapes__$1);
var panel__$1 = ((only_flex_QMARK_)?new cljs.core.Keyword(null,"flex-element","flex-element",-876437350):((only_grid_QMARK_)?new cljs.core.Keyword(null,"grid-element","grid-element",515673421):new cljs.core.Keyword(null,"layout-element","layout-element",1221436156)));
return rumext.v2.jsx(app.main.ui.inspect.styles.style_box.style_box_STAR_,{'panel':panel__$1,'shorthand':new cljs.core.Keyword(null,"layout-element","layout-element",1221436156).cljs$core$IFn$_invoke$arity$1(shorthands),'children':rumext.v2.jsx(app.main.ui.inspect.styles.panels.layout_element.layout_element_panel_STAR_,{'shapes':shapes__$1,'objects':objects,'resolvedTokens':resolved_active_tokens,'layoutElementProperties':app.main.ui.inspect.styles.layout_element_properties,'onLayoutElementShorthand':set_shorthands})});
} else {
return null;
}

break;
case "fill":
var shapes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.main.ui.inspect.styles.has_fill_QMARK_,shapes);
if(cljs.core.seq(shapes__$1)){
return rumext.v2.jsx(app.main.ui.inspect.styles.style_box.style_box_STAR_,{'panel':new cljs.core.Keyword(null,"fill","fill",883462889),'shorthand':new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(shorthands),'children':rumext.v2.jsx(app.main.ui.inspect.styles.panels.fill.fill_panel_STAR_,{'colorSpace':color_space,'shapes':shapes__$1,'resolvedTokens':resolved_active_tokens,'onFillShorthand':set_shorthands})});
} else {
return null;
}

break;
case "stroke":
var shapes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.main.ui.inspect.styles.has_stroke_QMARK_,shapes);
if(cljs.core.seq(shapes__$1)){
return rumext.v2.jsx(app.main.ui.inspect.styles.style_box.style_box_STAR_,{'panel':new cljs.core.Keyword(null,"stroke","stroke",1741823555),'shorthand':new cljs.core.Keyword(null,"stroke","stroke",1741823555).cljs$core$IFn$_invoke$arity$1(shorthands),'children':rumext.v2.jsx(app.main.ui.inspect.styles.panels.stroke.stroke_panel_STAR_,{'colorSpace':color_space,'shapes':shapes__$1,'objects':objects,'resolvedTokens':resolved_active_tokens,'onStrokeShorthand':set_shorthands})});
} else {
return null;
}

break;
case "visibility":
var shapes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(has_visibility_props_QMARK_,shapes);
if(cljs.core.seq(shapes__$1)){
return rumext.v2.jsx(app.main.ui.inspect.styles.style_box.style_box_STAR_,{'panel':new cljs.core.Keyword(null,"visibility","visibility",1338380893),'children':rumext.v2.jsx(app.main.ui.inspect.styles.panels.visibility.visibility_panel_STAR_,{'shapes':shapes__$1,'objects':objects,'resolvedTokens':resolved_active_tokens})});
} else {
return null;
}

break;
case "svg":
var shape = cljs.core.first(shapes);
if(cljs.core.seq(new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772).cljs$core$IFn$_invoke$arity$1(shape))){
return rumext.v2.jsx(app.main.ui.inspect.styles.style_box.style_box_STAR_,{'panel':new cljs.core.Keyword(null,"svg","svg",856789142),'children':rumext.v2.jsx(app.main.ui.inspect.styles.panels.svg.svg_panel_STAR_,{'shape':shape,'objects':objects})});
} else {
return null;
}

break;
case "blur":
var shapes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.main.ui.inspect.styles.has_blur_QMARK_,shapes);
if(cljs.core.seq(shapes__$1)){
return rumext.v2.jsx(app.main.ui.inspect.styles.style_box.style_box_STAR_,{'panel':new cljs.core.Keyword(null,"blur","blur",-453500461),'children':rumext.v2.jsx(app.main.ui.inspect.styles.panels.blur.blur_panel_STAR_,{'shapes':shapes__$1,'objects':objects})});
} else {
return null;
}

break;
case "text":
var shapes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.main.ui.inspect.styles.has_text_QMARK_,shapes);
if(cljs.core.seq(shapes__$1)){
return rumext.v2.jsx(app.main.ui.inspect.styles.style_box.style_box_STAR_,{'panel':new cljs.core.Keyword(null,"text","text",-1790561697),'shorthand':new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(shorthands),'children':rumext.v2.jsx(app.main.ui.inspect.styles.panels.text.text_panel_STAR_,{'shapes':shapes__$1,'colorSpace':color_space,'resolvedTokens':resolved_active_tokens,'onFontShorthand':set_shorthands})});
} else {
return null;
}

break;
case "shadow":
var shapes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.main.ui.inspect.styles.has_shadow_QMARK_,shapes);
if(cljs.core.seq(shapes__$1)){
return rumext.v2.jsx(app.main.ui.inspect.styles.style_box.style_box_STAR_,{'panel':new cljs.core.Keyword(null,"shadow","shadow",873231803),'shorthand':new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(shorthands),'children':rumext.v2.jsx(app.main.ui.inspect.styles.panels.shadow.shadow_panel_STAR_,{'shapes':shapes__$1,'resolvedTokens':resolved_active_tokens,'colorSpace':color_space,'onShadowShorthand':set_shorthands})});
} else {
return null;
}

break;
default:
return rumext.v2.jsx(app.main.ui.inspect.styles.style_box.style_box_STAR_,{'panel':panel,'children':rumext.v2.jsx("div",{'children':color_space})});

}
})()},app.common.data.name(panel)));

return out_arr__46744__auto__;
}),[],panels)]});
});

(app.main.ui.inspect.styles.styles_tab_STAR_.displayName = "styles-tab*");


//# sourceMappingURL=app.main.ui.inspect.styles.js.map
