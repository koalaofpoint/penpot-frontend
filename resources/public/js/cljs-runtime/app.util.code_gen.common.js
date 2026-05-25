import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.matrix.js";
import "./app.common.types.shape.layout.js";
import "./cuerdas.core.js";
goog.provide('app.util.code_gen.common');
app.util.code_gen.common.shape__GT_selector = (function app$util$code_gen$common$shape__GT_selector(shape){
if(cljs.core.truth_(shape)){
var name = cuerdas.core.replace(cljs.core.subs.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape),(0),(function (){var x__5113__auto__ = (10);
var y__5114__auto__ = cljs.core.count(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})()),/[^a-zA-Z0-9\s\:]+/,"");
var name__$1 = (cljs.core.truth_(cljs.core.re_matches(/^\d.*/,name))?""+"c-"+(name ?? ""):name);
var id = cljs.core.subs.cljs$core$IFn$_invoke$arity$3(""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape) ?? ""),(24),(36));
var selector = cuerdas.core.css_selector(""+(name__$1 ?? "")+" "+(id ?? ""));
var selector__$1 = ((cuerdas.core.starts_with_QMARK_(selector,"-"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$2(selector,(1)):selector);
return selector__$1;
} else {
return "";
}
});
/**
 * Function to determine whether a shape is rendered in HTML+CSS or is rendered
 *   through a SVG
 */
app.util.code_gen.common.svg_markup_QMARK_ = (function app$util$code_gen$common$svg_markup_QMARK_(shape){
return ((app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) || (((app.common.files.helpers.bool_shape_QMARK_(shape)) || (((app.common.files.helpers.svg_raw_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) || ((((!((new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772).cljs$core$IFn$_invoke$arity$1(shape) == null)))) || (((app.common.files.helpers.mask_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) || (((((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (((app.common.data.not_empty_QMARK_(new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(shape))) || (app.common.data.not_empty_QMARK_(new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(shape))))))) || ((((cljs.core.count(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(shape)) > (1))) || ((((cljs.core.count(new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(shape)) > (1))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(shape)),(1))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(shape))),new cljs.core.Keyword(null,"inner","inner",-1383171215))))))))))))))))))));
});
app.util.code_gen.common.has_wrapper_QMARK_ = (function app$util$code_gen$common$has_wrapper_QMARK_(objects,shape){
return ((app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,shape)) && (((cljs.core.not(app.common.types.shape.layout.position_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))) && ((!(app.common.geom.matrix.unit_QMARK_(new cljs.core.Keyword(null,"transform","transform",1381301764).cljs$core$IFn$_invoke$arity$1(shape))))))));
});

//# sourceMappingURL=app.util.code_gen.common.js.map
