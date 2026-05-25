import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.svg.js";
import "./app.common.uuid.js";
import "./app.render_wasm.svg_fills.js";
goog.provide('app.render_wasm.svg_filters');
app.render_wasm.svg_filters.drop_shadow_tags = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"feGaussianBlur","feGaussianBlur",1334510033),null,new cljs.core.Keyword(null,"feColorMatrix","feColorMatrix",-1697260201),null,new cljs.core.Keyword(null,"feOffset","feOffset",492428602),null], null), null);
/**
 * Finds a filter element by tag in filter content.
 */
app.render_wasm.svg_filters.find_filter_element = (function app$render_wasm$svg_filters$find_filter_element(filter_content,tag){
return cljs.core.some((function (p1__55357_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(tag,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__55357_SHARP_))){
return p1__55357_SHARP_;
} else {
return null;
}
}),filter_content);
});
app.render_wasm.svg_filters.find_filter_def = (function app$render_wasm$svg_filters$find_filter_def(shape){
var filter_attr = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"filter","filter",-948537934));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"style","style",-496642736)),new cljs.core.Keyword(null,"filter","filter",-948537934));
}
})();
var svg_defs = (shape?.svg_defs?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-defs","svg-defs",364869720)));
if(cljs.core.truth_((function (){var and__5023__auto__ = filter_attr;
if(cljs.core.truth_(and__5023__auto__)){
return svg_defs;
} else {
return and__5023__auto__;
}
})())){
var filter_ids = app.common.svg.extract_ids(filter_attr);
return cljs.core.some((function (p1__55358_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(svg_defs,p1__55358_SHARP_);
}),filter_ids);
} else {
return null;
}
});
app.render_wasm.svg_filters.build_blur = (function app$render_wasm$svg_filters$build_blur(gaussian_blur){
if(cljs.core.truth_(gaussian_blur)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next(),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"layer-blur","layer-blur",2003227989),new cljs.core.Keyword(null,"value","value",305978217),app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(gaussian_blur,new cljs.core.Keyword(null,"attrs","attrs",-2090668713)),new cljs.core.Keyword(null,"stdDeviation","stdDeviation",1418775521)),(0)),new cljs.core.Keyword(null,"hidden","hidden",-312506092),false], null);
} else {
return null;
}
});
app.render_wasm.svg_filters.build_drop_shadow = (function app$render_wasm$svg_filters$build_drop_shadow(filter_content,drop_shadow_elements){
var offset_elem = app.render_wasm.svg_filters.find_filter_element(filter_content,new cljs.core.Keyword(null,"feOffset","feOffset",492428602));
if(cljs.core.truth_((function (){var and__5023__auto__ = offset_elem;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.seq(drop_shadow_elements);
} else {
return and__5023__auto__;
}
})())){
var blur_elem = app.render_wasm.svg_filters.find_filter_element(drop_shadow_elements,new cljs.core.Keyword(null,"feGaussianBlur","feGaussianBlur",1334510033));
var dx = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(offset_elem,new cljs.core.Keyword(null,"attrs","attrs",-2090668713)),new cljs.core.Keyword(null,"dx","dx",-381796732)),(0));
var dy = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(offset_elem,new cljs.core.Keyword(null,"attrs","attrs",-2090668713)),new cljs.core.Keyword(null,"dy","dy",1719547243)),(0));
var blur_value = (cljs.core.truth_(blur_elem)?(app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(blur_elem,new cljs.core.Keyword(null,"attrs","attrs",-2090668713)),new cljs.core.Keyword(null,"stdDeviation","stdDeviation",1418775521)),(0)) * (2)):(0));
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"drop-shadow","drop-shadow",878776332),new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),dx,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),dy,new cljs.core.Keyword(null,"blur","blur",-453500461),blur_value,new cljs.core.Keyword(null,"spread","spread",862337191),(0),new cljs.core.Keyword(null,"hidden","hidden",-312506092),false,new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null)], null)], null);
} else {
return null;
}
});
/**
 * Derives native blur/shadow from SVG filter definitions when the shape does
 *   not already have them. The SVG attributes are left untouched so SVG fallback
 *   rendering keeps working the same way as gradient fills.
 */
app.render_wasm.svg_filters.apply_svg_filters = (function app$render_wasm$svg_filters$apply_svg_filters(shape){
var existing_blur = new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(shape);
var existing_shadow = new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(shape);
var temp__5823__auto__ = app.render_wasm.svg_filters.find_filter_def(shape);
if(cljs.core.truth_(temp__5823__auto__)){
var filter_def = temp__5823__auto__;
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(filter_def);
var gaussian_blur = app.render_wasm.svg_filters.find_filter_element(content,new cljs.core.Keyword(null,"feGaussianBlur","feGaussianBlur",1334510033));
var drop_shadow_elements = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55365_SHARP_){
return cljs.core.contains_QMARK_(app.render_wasm.svg_filters.drop_shadow_tags,new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(p1__55365_SHARP_));
}),content);
var blur = (function (){var or__5025__auto__ = existing_blur;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.render_wasm.svg_filters.build_blur(gaussian_blur);
}
})();
var shadow__$1 = ((cljs.core.seq(existing_shadow))?existing_shadow:app.render_wasm.svg_filters.build_drop_shadow(content,drop_shadow_elements));
var G__55369 = shape;
var G__55369__$1 = (cljs.core.truth_(blur)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55369,new cljs.core.Keyword(null,"blur","blur",-453500461),blur):G__55369);
if(cljs.core.seq(shadow__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55369__$1,new cljs.core.Keyword(null,"shadow","shadow",873231803),shadow__$1);
} else {
return G__55369__$1;
}
} else {
return shape;
}
});
/**
 * Applies SVG-derived effects (fills, blur, shadows) uniformly.
 *   - Keeps user fills if present; otherwise derives from SVG.
 *   - Converts SVG filters into native blur/shadow when needed.
 *   - Always returns shape with :fills (possibly []) and blur/shadow keys.
 */
app.render_wasm.svg_filters.apply_svg_derived = (function app$render_wasm$svg_filters$apply_svg_derived(shape){
var shape_SINGLEQUOTE_ = app.render_wasm.svg_filters.apply_svg_filters(shape);
var fills = (function (){var or__5025__auto__ = app.render_wasm.svg_fills.resolve_shape_fills(shape_SINGLEQUOTE_);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shape_SINGLEQUOTE_,new cljs.core.Keyword(null,"fills","fills",902966780),fills,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(shape_SINGLEQUOTE_)], 0));
});

//# sourceMappingURL=app.render_wasm.svg_filters.js.map
