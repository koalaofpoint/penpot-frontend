import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.shapes.bounds.js";
import "./app.common.geom.shapes.points.js";
import "./app.common.text.js";
import "./app.common.types.shape.layout.js";
import "./app.common.types.text.js";
import "./app.main.ui.shapes.text.styles.js";
import "./app.util.code_gen.common.js";
import "./app.util.code_gen.style_css_formats.js";
import "./app.util.code_gen.style_css_values.js";
import "./cuerdas.core.js";
goog.provide('app.util.code_gen.style_css');
app.util.code_gen.style_css.prelude = "\nhtml, body {\n  margin: 0;\n  min-height: 100%;\n  min-width: 100%;\n  padding: 0;\n}\n\nbody {\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  width: 100vw;\n  min-height: 100vh;\n}\n\n* {\n  box-sizing: border-box;\n}\n\n.text-node { background-clip: text !important; -webkit-background-clip: text !important; }\n\n";
app.util.code_gen.style_css.shape_wrapper_css_properties = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 14, [new cljs.core.Keyword(null,"min-width","min-width",1926193728),null,new cljs.core.Keyword(null,"max-height","max-height",-612563804),null,new cljs.core.Keyword(null,"min-height","min-height",398480837),null,new cljs.core.Keyword(null,"top","top",-1856271961),null,new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605),null,new cljs.core.Keyword(null,"max-width","max-width",-1939924051),null,new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),null,new cljs.core.Keyword(null,"grid-row","grid-row",-1737175087),null,new cljs.core.Keyword(null,"z-index","z-index",1892827090),null,new cljs.core.Keyword(null,"position","position",-2011731912),null,new cljs.core.Keyword(null,"align-self","align-self",1475936794),null,new cljs.core.Keyword(null,"grid-column","grid-column",-1086912770),null,new cljs.core.Keyword(null,"left","left",-399115937),null,new cljs.core.Keyword(null,"margin","margin",-995903681),null], null), null);
app.util.code_gen.style_css.shape_css_properties = cljs.core.PersistentVector.fromArray([new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"top","top",-1856271961),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"transform","transform",1381301764),new cljs.core.Keyword(null,"background","background",-863952629),new cljs.core.Keyword(null,"border","border",1444987323),new cljs.core.Keyword(null,"border-start-start-radius","border-start-start-radius",520714431),new cljs.core.Keyword(null,"border-start-end-radius","border-start-end-radius",867698004),new cljs.core.Keyword(null,"border-end-start-radius","border-end-start-radius",-251560249),new cljs.core.Keyword(null,"border-end-end-radius","border-end-end-radius",670676344),new cljs.core.Keyword(null,"box-shadow","box-shadow",1600206755),new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"overflow","overflow",2058931880),new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224),new cljs.core.Keyword(null,"display","display",242065432),new cljs.core.Keyword(null,"align-items","align-items",-267946462),new cljs.core.Keyword(null,"align-content","align-content",-990200349),new cljs.core.Keyword(null,"justify-items","justify-items",1638310783),new cljs.core.Keyword(null,"justify-content","justify-content",-1990475787),new cljs.core.Keyword(null,"gap","gap",80255254),new cljs.core.Keyword(null,"column-gap","column-gap",384822863),new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),new cljs.core.Keyword(null,"padding-inline-start","padding-inline-start",1837266335),new cljs.core.Keyword(null,"padding-inline-end","padding-inline-end",-647416958),new cljs.core.Keyword(null,"padding-block-start","padding-block-start",1054404612),new cljs.core.Keyword(null,"padding-block-end","padding-block-end",923602025),new cljs.core.Keyword(null,"z-index","z-index",1892827090),new cljs.core.Keyword(null,"flex-direction","flex-direction",364609438),new cljs.core.Keyword(null,"flex-wrap","flex-wrap",455413707),new cljs.core.Keyword(null,"flex","flex",-1425124628),new cljs.core.Keyword(null,"flex-grow","flex-grow",1865160747),new cljs.core.Keyword(null,"grid-template-rows","grid-template-rows",-372292629),new cljs.core.Keyword(null,"grid-template-columns","grid-template-columns",-594112133),new cljs.core.Keyword(null,"grid-template-areas","grid-template-areas",-1162938120),new cljs.core.Keyword(null,"grid-auto-flow","grid-auto-flow",-1754873684),new cljs.core.Keyword(null,"flex-shrink","flex-shrink",1481146383),new cljs.core.Keyword(null,"margin","margin",-995903681),new cljs.core.Keyword(null,"margin-block-start","margin-block-start",1770237075),new cljs.core.Keyword(null,"margin-block-end","margin-block-end",-1287470806),new cljs.core.Keyword(null,"margin-inline-start","margin-inline-start",320232954),new cljs.core.Keyword(null,"margin-inline-end","margin-inline-end",-1696808891),new cljs.core.Keyword(null,"max-height","max-height",-612563804),new cljs.core.Keyword(null,"max-block-size","max-block-size",-1751985816),new cljs.core.Keyword(null,"min-height","min-height",398480837),new cljs.core.Keyword(null,"min-block-size","min-block-size",2039624084),new cljs.core.Keyword(null,"max-width","max-width",-1939924051),new cljs.core.Keyword(null,"max-inline-size","max-inline-size",1870424342),new cljs.core.Keyword(null,"min-width","min-width",1926193728),new cljs.core.Keyword(null,"min-inline-size","min-inline-size",-2050841943),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605),new cljs.core.Keyword(null,"grid-column","grid-column",-1086912770),new cljs.core.Keyword(null,"grid-row","grid-row",-1737175087),new cljs.core.Keyword(null,"grid-area","grid-area",-1829717451)], true);
app.util.code_gen.style_css.shape__GT_css_property = (function app$util$code_gen$style_css$shape__GT_css_property(shape,objects,property,options){
var temp__5825__auto__ = app.util.code_gen.style_css_values.get_value(property,shape,objects,options);
if(cljs.core.truth_(temp__5825__auto__)){
var value = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [property,value], null);
} else {
return null;
}
});
app.util.code_gen.style_css.shape__GT_wrapper_css_properties = (function app$util$code_gen$style_css$shape__GT_wrapper_css_properties(shape,objects){
if(((app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape)) && ((!(app.common.geom.matrix.unit_QMARK_(new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape))))))){
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(shape));
var bounds = app.common.geom.shapes.points.parent_coords_bounds(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(parent));
var width = app.common.geom.shapes.points.width_points(bounds);
var height = app.common.geom.shapes.points.height_points(bounds);
var G__69701 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"width","width",-384071477),width], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"height","height",1025178622),height], null)], null);
if((((!(app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape)))) || (cljs.core.not(app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__69701,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),"relative"], null));
} else {
return G__69701;
}
} else {
return null;
}
});
app.util.code_gen.style_css.shape__GT_wrapper_child_css_properties = (function app$util$code_gen$style_css$shape__GT_wrapper_child_css_properties(shape,objects){
if(((app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape)) && ((!(app.common.geom.matrix.unit_QMARK_(new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape))))))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),"50%"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),"50%"], null)], null);
} else {
return null;
}
});
app.util.code_gen.style_css.shape__GT_svg_props = (function app$util$code_gen$style_css$shape__GT_svg_props(shape,objects){
var bounds = app.common.geom.shapes.bounds.get_object_bounds.cljs$core$IFn$_invoke$arity$2(objects,shape);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),"absolute"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"top","top",-1856271961),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"left","left",-399115937),(0)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"transform","transform",1381301764),""+"translate("+(""+((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape))) ?? "")+"px" ?? "")+","+(""+((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape))) ?? "")+"px" ?? "")+")"], null)], null);
});
/**
 * Given a shape extract the CSS properties in the format of list [property value]
 */
app.util.code_gen.style_css.shape__GT_css_properties = (function app$util$code_gen$style_css$shape__GT_css_properties(shape,objects,properties,options){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (property){
var temp__5825__auto__ = app.util.code_gen.style_css_values.get_value(property,shape,objects,options);
if(cljs.core.truth_(temp__5825__auto__)){
var value = temp__5825__auto__;
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [property,value], null);
} else {
return null;
}
}),properties);
});
app.util.code_gen.style_css.format_css_value = (function app$util$code_gen$style_css$format_css_value(var_args){
var G__69706 = arguments.length;
switch (G__69706) {
case 2:
return app.util.code_gen.style_css.format_css_value.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.util.code_gen.style_css.format_css_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.code_gen.style_css.format_css_value.cljs$core$IFn$_invoke$arity$2 = (function (p__69707,options){
var vec__69708 = p__69707;
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69708,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69708,(1),null);
return app.util.code_gen.style_css.format_css_value.cljs$core$IFn$_invoke$arity$3(property,value,options);
}));

(app.util.code_gen.style_css.format_css_value.cljs$core$IFn$_invoke$arity$3 = (function (property,value,options){
if((!((value == null)))){
return app.util.code_gen.style_css_formats.format_value(property,value,options);
} else {
return null;
}
}));

(app.util.code_gen.style_css.format_css_value.cljs$lang$maxFixedArity = 3);

/**
 * Format a single CSS property in the format 'property: value;'.
 */
app.util.code_gen.style_css.format_css_property = (function app$util$code_gen$style_css$format_css_property(p__69712,options){
var vec__69714 = p__69712;
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69714,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__69714,(1),null);
if((!((value == null)))){
var formatted_value = app.util.code_gen.style_css.format_css_value.cljs$core$IFn$_invoke$arity$3(property,value,options);
var property_name = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(property,new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224)))?""+"mix-"+(app.common.data.name(property) ?? ""):app.common.data.name(property));
return ""+(property_name ?? "")+": "+(formatted_value ?? "")+";";
} else {
return null;
}
});
/**
 * Format a list of [property value] into a list of css properties in the format 'property: value;'
 */
app.util.code_gen.style_css.format_css_properties = (function app$util$code_gen$style_css$format_css_properties(properties,options){
if(cljs.core.truth_(properties)){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69722_SHARP_){
return ""+"  "+(app.util.code_gen.style_css.format_css_property(p1__69722_SHARP_,options) ?? "");
}),properties));
} else {
return null;
}
});
app.util.code_gen.style_css.get_shape_properties_css = (function app$util$code_gen$style_css$get_shape_properties_css(var_args){
var G__69724 = arguments.length;
switch (G__69724) {
case 3:
return app.util.code_gen.style_css.get_shape_properties_css.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.util.code_gen.style_css.get_shape_properties_css.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.code_gen.style_css.get_shape_properties_css.cljs$core$IFn$_invoke$arity$3 = (function (objects,shape,properties){
return app.util.code_gen.style_css.get_shape_properties_css.cljs$core$IFn$_invoke$arity$4(objects,shape,properties,null);
}));

(app.util.code_gen.style_css.get_shape_properties_css.cljs$core$IFn$_invoke$arity$4 = (function (objects,shape,properties,options){
return app.util.code_gen.style_css.format_css_properties(app.util.code_gen.style_css.shape__GT_css_properties(shape,objects,properties,options),options);
}));

(app.util.code_gen.style_css.get_shape_properties_css.cljs$lang$maxFixedArity = 4);

app.util.code_gen.style_css.format_js_styles = (function app$util$code_gen$style_css$format_js_styles(properties,_options){
return app.util.code_gen.style_css.format_css_properties(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (key){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cuerdas.core.kebab(key),(properties[key])], null);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__69725_SHARP_){
return cuerdas.core.starts_with_QMARK_(p1__69725_SHARP_,"--");
}),Object.keys(properties))),null);
});
app.util.code_gen.style_css.node__GT_css = (function app$util$code_gen$style_css$node__GT_css(shape,shape_selector,node){
var properties = (function (){var G__69734 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"root","root",-448657453),G__69734)){
return app.main.ui.shapes.text.styles.generate_root_styles.cljs$core$IFn$_invoke$arity$3(shape,node,true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("root",G__69734)){
return app.main.ui.shapes.text.styles.generate_root_styles.cljs$core$IFn$_invoke$arity$3(shape,node,true);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"paragraph-set","paragraph-set",1605922385),G__69734)){
return app.main.ui.shapes.text.styles.generate_paragraph_set_styles(shape);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("paragraph-set",G__69734)){
return app.main.ui.shapes.text.styles.generate_paragraph_set_styles(shape);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"paragraph","paragraph",296707709),G__69734)){
return app.main.ui.shapes.text.styles.generate_paragraph_styles(shape,node);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("paragraph",G__69734)){
return app.main.ui.shapes.text.styles.generate_paragraph_styles(shape,node);
} else {
return app.main.ui.shapes.text.styles.generate_text_styles.cljs$core$IFn$_invoke$arity$2(shape,node);

}
}
}
}
}
}
})();
return ""+"."+(""+(shape_selector ?? "")+" ."+(new cljs.core.Keyword(null,"$id","$id",-1635392559).cljs$core$IFn$_invoke$arity$1(node) ?? "") ?? "")+" {\n"+(app.util.code_gen.style_css.format_js_styles(properties,null) ?? "")+"\n}";
});
app.util.code_gen.style_css.generate_text_css = (function app$util$code_gen$style_css$generate_text_css(shape){
var selector = app.util.code_gen.common.shape__GT_selector(shape);
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69735_SHARP_){
return app.util.code_gen.style_css.node__GT_css(shape,selector,p1__69735_SHARP_);
}),app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$1(app.common.text.index_content.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape)))));
});
app.util.code_gen.style_css.get_shape_css_selector = (function app$util$code_gen$style_css$get_shape_css_selector(var_args){
var G__69741 = arguments.length;
switch (G__69741) {
case 2:
return app.util.code_gen.style_css.get_shape_css_selector.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.util.code_gen.style_css.get_shape_css_selector.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.code_gen.style_css.get_shape_css_selector.cljs$core$IFn$_invoke$arity$2 = (function (objects,shape){
return app.util.code_gen.style_css.get_shape_css_selector.cljs$core$IFn$_invoke$arity$3(shape,objects,null);
}));

(app.util.code_gen.style_css.get_shape_css_selector.cljs$core$IFn$_invoke$arity$3 = (function (shape,objects,options){
if((((!((shape == null)))) && ((!((new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape) == null)))))){
var selector = app.util.code_gen.common.shape__GT_selector(shape);
var wrapper_QMARK_ = app.util.code_gen.common.has_wrapper_QMARK_(objects,shape);
var svg_QMARK_ = app.util.code_gen.common.svg_markup_QMARK_(shape);
var css_properties = ((wrapper_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(app.util.code_gen.style_css.shape_wrapper_css_properties),app.util.code_gen.style_css.shape_css_properties):app.util.code_gen.style_css.shape_css_properties);
var properties = app.util.code_gen.style_css.format_css_properties(app.util.code_gen.style_css.shape__GT_css_properties(shape,objects,css_properties,options),options);
var wrapper_properties = ((wrapper_QMARK_)?app.util.code_gen.style_css.format_css_properties(app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(app.util.code_gen.style_css.shape__GT_css_properties(shape,objects,app.util.code_gen.style_css.shape_wrapper_css_properties,options),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.code_gen.style_css.shape__GT_wrapper_css_properties(shape,objects)], 0)),options):null);
var wrapper_child_properties = ((wrapper_QMARK_)?app.util.code_gen.style_css.format_css_properties(app.util.code_gen.style_css.shape__GT_wrapper_child_css_properties(shape,objects),options):null);
var svg_child_props = ((svg_QMARK_)?app.util.code_gen.style_css.format_css_properties(app.util.code_gen.style_css.shape__GT_svg_props(shape,objects),options):null);
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__69742 = "/* %s */";
var G__69743 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape);
return (cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$2 ? cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$2(G__69742,G__69743) : cuerdas.core.fmt.call(null,G__69742,G__69743));
})(),((wrapper_QMARK_)?(cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$3(".%s-wrapper {\n%s\n}",selector,wrapper_properties) : cuerdas.core.fmt.call(null,".%s-wrapper {\n%s\n}",selector,wrapper_properties)):null),((wrapper_QMARK_)?(cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$3(".%s-wrapper > * {\n%s\n}",selector,wrapper_child_properties) : cuerdas.core.fmt.call(null,".%s-wrapper > * {\n%s\n}",selector,wrapper_child_properties)):null),((svg_QMARK_)?(cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$3(".%s > svg {\n%s\n}",selector,svg_child_props) : cuerdas.core.fmt.call(null,".%s > svg {\n%s\n}",selector,svg_child_props)):null),(cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$3(".%s {\n%s\n}",selector,properties) : cuerdas.core.fmt.call(null,".%s {\n%s\n}",selector,properties)),((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?app.util.code_gen.style_css.generate_text_css(shape):null)], null)));
} else {
return null;
}
}));

(app.util.code_gen.style_css.get_shape_css_selector.cljs$lang$maxFixedArity = 3);

app.util.code_gen.style_css.get_css_property = (function app$util$code_gen$style_css$get_css_property(var_args){
var G__69748 = arguments.length;
switch (G__69748) {
case 3:
return app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$3 = (function (objects,shape,property){
return app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$4(objects,shape,property,null);
}));

(app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$4 = (function (objects,shape,property,options){
return app.util.code_gen.style_css.format_css_property(app.util.code_gen.style_css.shape__GT_css_property(shape,objects,property,options),options);
}));

(app.util.code_gen.style_css.get_css_property.cljs$lang$maxFixedArity = 4);

/**
 * Get the CSS value for a given property of a shape.
 */
app.util.code_gen.style_css.get_css_value = (function app$util$code_gen$style_css$get_css_value(var_args){
var G__69751 = arguments.length;
switch (G__69751) {
case 3:
return app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3 = (function (objects,shape,property){
return app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$4(objects,shape,property,null);
}));

(app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$4 = (function (objects,shape,property,options){
var temp__5825__auto__ = app.util.code_gen.style_css.shape__GT_css_property(shape,objects,property,options);
if(cljs.core.truth_(temp__5825__auto__)){
var prop = temp__5825__auto__;
return app.util.code_gen.style_css.format_css_value.cljs$core$IFn$_invoke$arity$2(prop,options);
} else {
return null;
}
}));

(app.util.code_gen.style_css.get_css_value.cljs$lang$maxFixedArity = 4);

app.util.code_gen.style_css.generate_style = (function app$util$code_gen$style_css$generate_style(var_args){
var G__69760 = arguments.length;
switch (G__69760) {
case 3:
return app.util.code_gen.style_css.generate_style.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.util.code_gen.style_css.generate_style.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.code_gen.style_css.generate_style.cljs$core$IFn$_invoke$arity$3 = (function (objects,root_shapes,all_shapes){
return app.util.code_gen.style_css.generate_style.cljs$core$IFn$_invoke$arity$4(objects,root_shapes,all_shapes,null);
}));

(app.util.code_gen.style_css.generate_style.cljs$core$IFn$_invoke$arity$4 = (function (objects,root_shapes,all_shapes,p__69764){
var map__69765 = p__69764;
var map__69765__$1 = cljs.core.__destructure_map(map__69765);
var options = map__69765__$1;
var with_prelude_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__69765__$1,new cljs.core.Keyword(null,"with-prelude?","with-prelude?",-1449344035),true);
var options__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(options,new cljs.core.Keyword(null,"root-shapes","root-shapes",2046683285),cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092)),root_shapes));
return ""+((cljs.core.truth_(with_prelude_QMARK_)?app.util.code_gen.style_css.prelude:"") ?? "")+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n\n",cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__69755_SHARP_){
return app.util.code_gen.style_css.get_shape_css_selector.cljs$core$IFn$_invoke$arity$3(p1__69755_SHARP_,objects,options__$1);
}),all_shapes)) ?? "");
}));

(app.util.code_gen.style_css.generate_style.cljs$lang$maxFixedArity = 4);

app.util.code_gen.style_css.shadow__GT_css = (function app$util$code_gen$style_css$shadow__GT_css(shadow__$1){
return ""+"box-shadow: "+(app.util.code_gen.style_css_formats.format_shadow__GT_css(shadow__$1,cljs.core.PersistentArrayMap.EMPTY) ?? "")+";";
});

//# sourceMappingURL=app.util.code_gen.style_css.js.map
