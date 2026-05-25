import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.svg.js";
import "./app.common.types.color.js";
import "./clojure.string.js";
goog.provide('app.render_wasm.svg_fills');
app.render_wasm.svg_fills.url_fill_pattern = /url\(\s*['\"]?#([^)'\"]+)['\"]?\s*\)/;
app.render_wasm.svg_fills.trim_fill_value = (function app$render_wasm$svg_fills$trim_fill_value(value){
var string_value = ((typeof value === 'string')?value:(((value instanceof cljs.core.Keyword))?cljs.core.name(value):(((value instanceof cljs.core.Symbol))?cljs.core.name(value):((typeof value === 'number')?cljs.core.str.cljs$core$IFn$_invoke$arity$1(value):(((!((value == null))))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(value):null
)))));
if((!((string_value == null)))){
var trimmed = clojure.string.trim(string_value);
if(cljs.core.seq(trimmed)){
return trimmed;
} else {
return null;
}
} else {
return null;
}
});
app.render_wasm.svg_fills.parse_length = (function app$render_wasm$svg_fills$parse_length(value){
if((value == null)){
return null;
} else {
if(typeof value === 'number'){
return value;
} else {
var value__$1 = app.render_wasm.svg_fills.trim_fill_value(value);
if(cljs.core.seq(value__$1)){
var percent_QMARK_ = clojure.string.ends_with_QMARK_(value__$1,"%");
var px_QMARK_ = clojure.string.ends_with_QMARK_(value__$1,"px");
var numeric = ((percent_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value__$1,(0),(cljs.core.count(value__$1) - (1))):((px_QMARK_)?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(value__$1,(0),(cljs.core.count(value__$1) - (2))):value__$1
));
var parsed = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(numeric);
if(cljs.core.truth_(parsed)){
if(percent_QMARK_){
return (parsed / 100.0);
} else {
return parsed;
}
} else {
return null;
}
} else {
return null;
}

}
}
});
app.render_wasm.svg_fills.parse_offset = (function app$render_wasm$svg_fills$parse_offset(value){
var length = app.render_wasm.svg_fills.parse_length((function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})());
var x__5113__auto__ = (function (){var x__5110__auto__ = (function (){var or__5025__auto__ = length;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return 0.0;
}
})();
var y__5111__auto__ = 0.0;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var y__5114__auto__ = 1.0;
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
});
app.render_wasm.svg_fills.parse_opacity = (function app$render_wasm$svg_fills$parse_opacity(value){
var parsed = app.render_wasm.svg_fills.parse_length(value);
if((!((parsed == null)))){
return parsed;
} else {
return 1.0;
}
});
app.render_wasm.svg_fills.shape__GT_selrect = (function app$render_wasm$svg_fills$shape__GT_selrect(shape){
var selrect = (shape?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"selrect","selrect",1966287292)));
if(app.common.geom.rect.rect_QMARK_(selrect)){
return selrect;
} else {
if(cljs.core.map_QMARK_(selrect)){
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$1(selrect);
} else {
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(function (){var or__5025__auto__ = (shape?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"x","x",2099068185)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"y","y",-1757859776),(function (){var or__5025__auto__ = (shape?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"y","y",-1757859776)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})(),new cljs.core.Keyword(null,"width","width",-384071477),(function (){var x__5110__auto__ = 0.01;
var y__5111__auto__ = (function (){var or__5025__auto__ = (shape?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"width","width",-384071477)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})(),new cljs.core.Keyword(null,"height","height",1025178622),(function (){var x__5110__auto__ = 0.01;
var y__5111__auto__ = (function (){var or__5025__auto__ = (shape?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"height","height",1025178622)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})();
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()], null));

}
}
});
/**
 * Applies SVG transform to a point if present.
 */
app.render_wasm.svg_fills.apply_svg_transform = (function app$render_wasm$svg_fills$apply_svg_transform(pt,svg_transform){
if(cljs.core.truth_(svg_transform)){
return app.common.geom.point.transform(pt,svg_transform);
} else {
return pt;
}
});
/**
 * Transforms a point from viewBox space to selrect space.
 */
app.render_wasm.svg_fills.apply_viewbox_transform = (function app$render_wasm$svg_fills$apply_viewbox_transform(pt,viewbox,rect){
if(cljs.core.truth_(viewbox)){
var map__55214 = viewbox;
var map__55214__$1 = cljs.core.__destructure_map(map__55214);
var svg_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55214__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var svg_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55214__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var svg_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55214__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var svg_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55214__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var rect_width = (function (){var x__5110__auto__ = 0.01;
var y__5111__auto__ = (rect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"width","width",-384071477)));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var rect_height = (function (){var x__5110__auto__ = 0.01;
var y__5111__auto__ = (rect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"height","height",1025178622)));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var origin_x = (function (){var or__5025__auto__ = (rect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"x","x",2099068185)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (rect?.x1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"x1","x1",-1863922247)));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (0);
}
}
})();
var origin_y = (function (){var or__5025__auto__ = (rect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"y","y",-1757859776)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (rect?.y1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"y1","y1",589123466)));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (0);
}
}
})();
var scale_x = (rect_width / svg_width);
var scale_y = (rect_height / svg_height);
var transformed_x = (origin_x + (((pt?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"x","x",2099068185))) - svg_x) * scale_x));
var transformed_y = (origin_y + (((pt?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(pt,new cljs.core.Keyword(null,"y","y",-1757859776))) - svg_y) * scale_y));
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(transformed_x,transformed_y);
} else {
return pt;
}
});
app.render_wasm.svg_fills.normalize_point = (function app$render_wasm$svg_fills$normalize_point(pt,units,shape){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(units,"userspaceonuse")){
var rect = app.render_wasm.svg_fills.shape__GT_selrect(shape);
var width = (function (){var x__5110__auto__ = 0.01;
var y__5111__auto__ = (rect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"width","width",-384071477)));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var height = (function (){var x__5110__auto__ = 0.01;
var y__5111__auto__ = (rect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"height","height",1025178622)));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var origin_x = (function (){var or__5025__auto__ = (rect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"x","x",2099068185)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (rect?.x1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"x1","x1",-1863922247)));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (0);
}
}
})();
var origin_y = (function (){var or__5025__auto__ = (rect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"y","y",-1757859776)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (rect?.y1?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"y1","y1",589123466)));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (0);
}
}
})();
var svg_transform = new cljs.core.Keyword(null,"svg-transform","svg-transform",-1664613325).cljs$core$IFn$_invoke$arity$1(shape);
var viewbox = new cljs.core.Keyword(null,"svg-viewbox","svg-viewbox",-255575146).cljs$core$IFn$_invoke$arity$1(shape);
var pt_after_svg_transform = app.render_wasm.svg_fills.apply_svg_transform(pt,svg_transform);
var transformed_pt = app.render_wasm.svg_fills.apply_viewbox_transform(pt_after_svg_transform,viewbox,rect);
var normalized_x = (((transformed_pt?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(transformed_pt,new cljs.core.Keyword(null,"x","x",2099068185))) - origin_x) / width);
var normalized_y = (((transformed_pt?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(transformed_pt,new cljs.core.Keyword(null,"y","y",-1757859776))) - origin_y) / height);
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(normalized_x,normalized_y);
} else {
return pt;
}
});
app.render_wasm.svg_fills.normalize_attrs = (function app$render_wasm$svg_fills$normalize_attrs(attrs){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__55215){
var vec__55216 = p__55215;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55216,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55216,(1),null);
var key = (((k instanceof cljs.core.Keyword))?cljs.core.name(k):(((k instanceof cljs.core.Symbol))?cljs.core.name(k):cljs.core.str.cljs$core$IFn$_invoke$arity$1(k)
));
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(clojure.string.lower_case(key)),v], null);
})),(function (){var or__5025__auto__ = attrs;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
})());
});
app.render_wasm.svg_fills.id_candidates = (function app$render_wasm$svg_fills$id_candidates(id){
var base = ((typeof id === 'string')?id:(((id instanceof cljs.core.Keyword))?cljs.core.name(id):(((id instanceof cljs.core.Symbol))?cljs.core.name(id):(((!((id == null))))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(id):null
))));
var lower = (function (){var G__55220 = base;
if((G__55220 == null)){
return null;
} else {
return clojure.string.lower_case(G__55220);
}
})();
var kebab = (function (){var G__55221 = base;
var G__55221__$1 = (((G__55221 == null))?null:clojure.string.replace(G__55221,/([a-z0-9])([A-Z])/,"$1-$2"));
if((G__55221__$1 == null)){
return null;
} else {
return clojure.string.lower_case(G__55221__$1);
}
})();
return cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55219_SHARP_){
return (((p1__55219_SHARP_ == null)) || (((typeof p1__55219_SHARP_ === 'string') && (clojure.string.blank_QMARK_(p1__55219_SHARP_)))));
}),new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [((typeof id === 'string')?id:null),(((id instanceof cljs.core.Keyword))?id:null),(((id instanceof cljs.core.Symbol))?id:null),base,(cljs.core.truth_(base)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(base):null),(cljs.core.truth_(base)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(base):null),lower,(cljs.core.truth_(lower)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(lower):null),(cljs.core.truth_(lower)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(lower):null),kebab,(cljs.core.truth_(kebab)?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(kebab):null),(cljs.core.truth_(kebab)?cljs.core.symbol.cljs$core$IFn$_invoke$arity$1(kebab):null)], null)));
});
app.render_wasm.svg_fills.svg_def_by_id = (function app$render_wasm$svg_fills$svg_def_by_id(defs,id){
return cljs.core.some((function (p1__55222_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(defs,p1__55222_SHARP_);
}),app.render_wasm.svg_fills.id_candidates(id));
});
app.render_wasm.svg_fills.normalize_gradient_id = (function app$render_wasm$svg_fills$normalize_gradient_id(value){
var temp__5825__auto__ = app.render_wasm.svg_fills.trim_fill_value(value);
if(cljs.core.truth_(temp__5825__auto__)){
var clean = temp__5825__auto__;
var without = clojure.string.replace(clean,/^#/,"");
if(cljs.core.seq(without)){
return without;
} else {
return null;
}
} else {
return null;
}
});
/**
 * Returns the first matching value for the provided attribute keys.
 */
app.render_wasm.svg_fills.attr = (function app$render_wasm$svg_fills$attr(var_args){
var args__5755__auto__ = [];
var len__5749__auto___55332 = arguments.length;
var i__5750__auto___55333 = (0);
while(true){
if((i__5750__auto___55333 < len__5749__auto___55332)){
args__5755__auto__.push((arguments[i__5750__auto___55333]));

var G__55334 = (i__5750__auto___55333 + (1));
i__5750__auto___55333 = G__55334;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.render_wasm.svg_fills.attr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.render_wasm.svg_fills.attr.cljs$core$IFn$_invoke$arity$variadic = (function (attrs,keys){
return cljs.core.some((function (p1__55223_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,p1__55223_SHARP_);
}),keys);
}));

(app.render_wasm.svg_fills.attr.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.render_wasm.svg_fills.attr.cljs$lang$applyTo = (function (seq55224){
var G__55225 = cljs.core.first(seq55224);
var seq55224__$1 = cljs.core.next(seq55224);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__55225,seq55224__$1);
}));

app.render_wasm.svg_fills.resolve_gradient_node = (function app$render_wasm$svg_fills$resolve_gradient_node(shape,gradient_id){
var defs = (shape?.svg_defs?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-defs","svg-defs",364869720)));
if(cljs.core.truth_((function (){var and__5023__auto__ = defs;
if(cljs.core.truth_(and__5023__auto__)){
return gradient_id;
} else {
return and__5023__auto__;
}
})())){
var chain = (function (){var gid = gradient_id;
var seen = cljs.core.PersistentHashSet.EMPTY;
var acc = cljs.core.PersistentVector.EMPTY;
while(true){
var normalized = app.render_wasm.svg_fills.normalize_gradient_id(gid);
if((((normalized == null)) || (cljs.core.contains_QMARK_(seen,normalized)))){
return acc;
} else {
var temp__5823__auto__ = app.render_wasm.svg_fills.svg_def_by_id(defs,normalized);
if(cljs.core.truth_(temp__5823__auto__)){
var node = temp__5823__auto__;
var attrs = app.render_wasm.svg_fills.normalize_attrs(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node));
var tag = (function (){var raw = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node);
if((raw instanceof cljs.core.Keyword)){
return raw;
} else {
if(typeof raw === 'string'){
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(raw);
} else {
return raw;

}
}
})();
var content = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node);
var href = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"xlinkhref","xlinkhref",1985487126));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"xlink-href","xlink-href",244956585));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"xlink:href","xlink:href",828777205));
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"href","href",-793805698));
}
}
}
})();
var G__55345 = href;
var G__55346 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(seen,normalized);
var G__55347 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"content","content",15833224),content], null));
gid = G__55345;
seen = G__55346;
acc = G__55347;
continue;
} else {
return acc;
}
}
break;
}
})();
if(cljs.core.seq(chain)){
var combined = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (result,node){
var tag = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(result);
}
})();
var attrs = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(result),new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(node)], 0));
var content = (function (){var own = new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(node);
if(cljs.core.seq(own)){
return own;
} else {
return new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(result);
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"tag","tag",-1290361223),tag,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"content","content",15833224),content], null);
}),cljs.core.PersistentArrayMap.EMPTY,cljs.core.reverse(chain));
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"linearGradient","linearGradient",1711964727),null,new cljs.core.Keyword(null,"radialGradient","radialGradient",1402247193),null], null), null),new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(combined))){
var result = cljs.core.update.cljs$core$IFn$_invoke$arity$3(combined,new cljs.core.Keyword(null,"content","content",15833224),(function (p1__55226_SHARP_){
var or__5025__auto__ = p1__55226_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));
return result;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
app.render_wasm.svg_fills.parse_gradient_stop = (function app$render_wasm$svg_fills$parse_gradient_stop(stop_node){
var attrs = app.render_wasm.svg_fills.normalize_attrs(new cljs.core.Keyword(null,"attrs","attrs",-2090668713).cljs$core$IFn$_invoke$arity$1(stop_node));
var style = (function (){var G__55227 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"style","style",-496642736));
if((G__55227 == null)){
return null;
} else {
return app.common.svg.parse_style(G__55227);
}
})();
var color_value = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"stop-color","stop-color",316173955));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"stopcolor","stopcolor",-1241628911));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"stop-color","stop-color",316173955));
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"stopColor","stopColor",265518586));
}
}
}
})();
var color_value__$1 = app.render_wasm.svg_fills.trim_fill_value(color_value);
var color_value__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color_value__$1,"currentcolor"))?"#000000":color_value__$1);
var color = ((app.common.types.color.color_string_QMARK_(color_value__$2))?app.common.types.color.parse(color_value__$2):null);
var opacity = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"stopopacity","stopopacity",-1465341352));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"stop-opacity","stop-opacity",-2018003729));
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(style,new cljs.core.Keyword(null,"stopOpacity","stopOpacity",-480120864));
}
}
}
})();
var offset = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"offset","offset",296498311));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "0";
}
})();
if(cljs.core.truth_(color)){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),color,new cljs.core.Keyword(null,"opacity","opacity",397153780),(function (){var G__55228 = opacity;
if((G__55228 == null)){
return null;
} else {
return app.render_wasm.svg_fills.parse_opacity(G__55228);
}
})(),new cljs.core.Keyword(null,"offset","offset",296498311),app.render_wasm.svg_fills.parse_offset(offset)], null));
} else {
return null;
}
});
app.render_wasm.svg_fills.apply_gradient_transform = (function app$render_wasm$svg_fills$apply_gradient_transform(points,transform){
if(cljs.core.truth_(transform)){
var matrix = app.common.svg.parse_transform(transform);
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55229_SHARP_){
return app.common.geom.point.transform(p1__55229_SHARP_,matrix);
}),points);
} else {
return points;
}
});
app.render_wasm.svg_fills.build_linear_gradient = (function app$render_wasm$svg_fills$build_linear_gradient(shape,p__55231){
var map__55232 = p__55231;
var map__55232__$1 = cljs.core.__destructure_map(map__55232);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55232__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55232__$1,new cljs.core.Keyword(null,"content","content",15833224));
var units = clojure.string.lower_case((function (){var or__5025__auto__ = app.render_wasm.svg_fills.attr.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gradientunits","gradientunits",1995839676),new cljs.core.Keyword(null,"gradient-units","gradient-units",-1502403779)], 0));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "objectBoundingBox";
}
})());
var transform = app.render_wasm.svg_fills.attr.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gradienttransform","gradienttransform",-1259862407),new cljs.core.Keyword(null,"gradient-transform","gradient-transform",-1737815870)], 0));
var x1 = (function (){var or__5025__auto__ = app.render_wasm.svg_fills.parse_length((function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"x1","x1",-1863922247));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"x","x",2099068185));
}
})());
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return 0.0;
}
})();
var y1 = (function (){var or__5025__auto__ = app.render_wasm.svg_fills.parse_length((function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"y1","y1",589123466));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"y","y",-1757859776));
}
})());
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return 0.0;
}
})();
var x2 = (function (){var or__5025__auto__ = app.render_wasm.svg_fills.parse_length((function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"x2","x2",-1362513475));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"x","x",2099068185));
}
})());
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return 1.0;
}
})();
var y2 = (function (){var or__5025__auto__ = app.render_wasm.svg_fills.parse_length((function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"y2","y2",-718691301));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"y","y",-1757859776));
}
})());
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return 0.0;
}
})();
var stops = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (node){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node)),new cljs.core.Keyword(null,"stop","stop",-2140911342))){
return app.render_wasm.svg_fills.parse_gradient_stop(node);
} else {
return null;
}
}),content));
if(cljs.core.seq(stops)){
var points = app.render_wasm.svg_fills.apply_gradient_transform(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x1,y1),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x2,y2)], null),transform);
var vec__55237 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55230_SHARP_){
return app.render_wasm.svg_fills.normalize_point(p1__55230_SHARP_,units,shape);
}),points);
var start = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55237,(0),null);
var end = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55237,(1),null);
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"linear","linear",872268697),new cljs.core.Keyword(null,"start-x","start-x",-193941684),(start?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(start,new cljs.core.Keyword(null,"x","x",2099068185))),new cljs.core.Keyword(null,"start-y","start-y",-771244577),(start?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(start,new cljs.core.Keyword(null,"y","y",-1757859776))),new cljs.core.Keyword(null,"end-x","end-x",-1323983821),(end?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(end,new cljs.core.Keyword(null,"x","x",2099068185))),new cljs.core.Keyword(null,"end-y","end-y",859881965),(end?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(end,new cljs.core.Keyword(null,"y","y",-1757859776))),new cljs.core.Keyword(null,"width","width",-384071477),(1),new cljs.core.Keyword(null,"stops","stops",-1205459005),stops], null);
} else {
return null;
}
});
app.render_wasm.svg_fills.build_radial_gradient = (function app$render_wasm$svg_fills$build_radial_gradient(shape,p__55243){
var map__55244 = p__55243;
var map__55244__$1 = cljs.core.__destructure_map(map__55244);
var attrs = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55244__$1,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55244__$1,new cljs.core.Keyword(null,"content","content",15833224));
var units = clojure.string.lower_case((function (){var or__5025__auto__ = app.render_wasm.svg_fills.attr.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gradientunits","gradientunits",1995839676),new cljs.core.Keyword(null,"gradient-units","gradient-units",-1502403779)], 0));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "objectBoundingBox";
}
})());
var transform = app.render_wasm.svg_fills.attr.cljs$core$IFn$_invoke$arity$variadic(attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"gradienttransform","gradienttransform",-1259862407),new cljs.core.Keyword(null,"gradient-transform","gradient-transform",-1737815870)], 0));
var cx = (function (){var or__5025__auto__ = app.render_wasm.svg_fills.parse_length((function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"cx","cx",1272694324));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"fx","fx",-1237829572));
}
})());
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return 0.5;
}
})();
var cy = (function (){var or__5025__auto__ = app.render_wasm.svg_fills.parse_length((function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"cy","cy",755331060));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"fy","fy",550788984));
}
})());
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return 0.5;
}
})();
var r = (function (){var or__5025__auto__ = app.render_wasm.svg_fills.parse_length(cljs.core.get.cljs$core$IFn$_invoke$arity$2(attrs,new cljs.core.Keyword(null,"r","r",-471384190)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return 0.5;
}
})();
var stops = cljs.core.vec(cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (node){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node)),new cljs.core.Keyword(null,"stop","stop",-2140911342))){
return app.render_wasm.svg_fills.parse_gradient_stop(node);
} else {
return null;
}
}),content));
if(cljs.core.seq(stops)){
var vec__55284 = (function (){var points = app.render_wasm.svg_fills.apply_gradient_transform(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(cx,cy),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((cx + r),cy),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(cx,(cy + r))], null),transform);
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55241_SHARP_){
return app.render_wasm.svg_fills.normalize_point(p1__55241_SHARP_,units,shape);
}),points);
})();
var center = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55284,(0),null);
var point_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55284,(1),null);
var point_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55284,(2),null);
var radius_x = app.common.geom.point.distance(center,point_x);
var radius_y = app.common.geom.point.distance(center,point_y);
var base_radius = (((radius_y > (0)))?radius_y:radius_x);
var radius_point = (((radius_y > (0)))?point_y:point_x);
var width = (function (){var safe_radius = (function (){var x__5110__auto__ = base_radius;
var y__5111__auto__ = 1.0E-6;
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
return (radius_x / safe_radius);
})();
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"radial","radial",-1334240714),new cljs.core.Keyword(null,"start-x","start-x",-193941684),(center?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(center,new cljs.core.Keyword(null,"x","x",2099068185))),new cljs.core.Keyword(null,"start-y","start-y",-771244577),(center?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(center,new cljs.core.Keyword(null,"y","y",-1757859776))),new cljs.core.Keyword(null,"end-x","end-x",-1323983821),(radius_point?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(radius_point,new cljs.core.Keyword(null,"x","x",2099068185))),new cljs.core.Keyword(null,"end-y","end-y",859881965),(radius_point?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(radius_point,new cljs.core.Keyword(null,"y","y",-1757859776))),new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"stops","stops",-1205459005),stops], null);
} else {
return null;
}
});
app.render_wasm.svg_fills.svg_gradient__GT_fill = (function app$render_wasm$svg_fills$svg_gradient__GT_fill(shape,value){
var trimmed = app.render_wasm.svg_fills.trim_fill_value(value);
var fill_str = ((typeof trimmed === 'string')?trimmed:(((!((trimmed == null))))?cljs.core.str.cljs$core$IFn$_invoke$arity$1(trimmed):null
));
var temp__5825__auto__ = ((typeof fill_str === 'string')?(function (){var G__55292 = cljs.core.re_matches(app.render_wasm.svg_fills.url_fill_pattern,fill_str);
if((G__55292 == null)){
return null;
} else {
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(G__55292,(1),null);
}
})():null);
if(cljs.core.truth_(temp__5825__auto__)){
var gradient_id = temp__5825__auto__;
var temp__5825__auto____$1 = app.render_wasm.svg_fills.resolve_gradient_node(shape,gradient_id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var node = temp__5825__auto____$1;
var G__55293 = new cljs.core.Keyword(null,"tag","tag",-1290361223).cljs$core$IFn$_invoke$arity$1(node);
var G__55293__$1 = (((G__55293 instanceof cljs.core.Keyword))?G__55293.fqn:null);
switch (G__55293__$1) {
case "linearGradient":
return app.render_wasm.svg_fills.build_linear_gradient(shape,node);

break;
case "radialGradient":
return app.render_wasm.svg_fills.build_radial_gradient(shape,node);

break;
default:
return null;

}
} else {
return null;
}
} else {
return null;
}
});
app.render_wasm.svg_fills.parse_svg_fill = (function app$render_wasm$svg_fills$parse_svg_fill(shape,value){
var temp__5825__auto__ = app.render_wasm.svg_fills.trim_fill_value(value);
if(cljs.core.truth_(temp__5825__auto__)){
var trimmed = temp__5825__auto__;
var normalized = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(clojure.string.lower_case(trimmed),"currentcolor"))?"#000000":trimmed);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(normalized,"none")){
return null;
} else {
if(((app.common.types.color.color_string_QMARK_(normalized)) || ((value instanceof cljs.core.Keyword)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"value","value",305978217),app.common.types.color.parse(normalized)], null);
} else {
if(clojure.string.starts_with_QMARK_(normalized,"url(")){
var temp__5825__auto____$1 = app.render_wasm.svg_fills.svg_gradient__GT_fill(shape,normalized);
if(cljs.core.truth_(temp__5825__auto____$1)){
var gradient = temp__5825__auto____$1;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"gradient","gradient",-1983908971),new cljs.core.Keyword(null,"value","value",305978217),gradient], null);
} else {
return null;
}
} else {
return null;

}
}
}
} else {
return null;
}
});
/**
 * Returns a sequence with a single fill derived from the shape SVG attrs/defs,
 *   or nil when no SVG fill information can be inferred.
 */
app.render_wasm.svg_fills.svg_fill__GT_fills = (function app$render_wasm$svg_fills$svg_fill__GT_fills(shape){
var style_fill = app.render_wasm.svg_fills.parse_svg_fill(shape,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"style","style",-496642736)),new cljs.core.Keyword(null,"fill","fill",883462889)));
var attr_fill = app.render_wasm.svg_fills.parse_svg_fill(shape,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"fill","fill",883462889)));
var map__55298 = (function (){var or__5025__auto__ = style_fill;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return attr_fill;
}
})();
var map__55298__$1 = cljs.core.__destructure_map(map__55298);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55298__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55298__$1,new cljs.core.Keyword(null,"value","value",305978217));
if((!((type == null)))){
var opacity = (function (){var or__5025__auto__ = (function (){var G__55302 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"style","style",-496642736)),new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981));
if((G__55302 == null)){
return null;
} else {
return app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(G__55302,(1));
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var G__55303 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)),new cljs.core.Keyword(null,"fillOpacity","fillOpacity",619211981));
if((G__55303 == null)){
return null;
} else {
return app.common.data.parse_double.cljs$core$IFn$_invoke$arity$2(G__55303,(1));
}
}
})();
var base_fill = (function (){var G__55309 = type;
var G__55309__$1 = (((G__55309 instanceof cljs.core.Keyword))?G__55309.fqn:null);
switch (G__55309__$1) {
case "color":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),value], null);

break;
case "gradient":
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870),value], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55309__$1)].join('')));

}
})();
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (){var G__55313 = base_fill;
if((!((opacity == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55313,new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),opacity);
} else {
return G__55313;
}
})()], null);
} else {
return null;
}
});
/**
 * Returns the fills that should be sent to WASM for the provided shape,
 *   reusing existing fills when present, falling back to SVG derived fills,
 *   and finally defaulting to the standard SVG black fill when needed.
 */
app.render_wasm.svg_fills.resolve_shape_fills = (function app$render_wasm$svg_fills$resolve_shape_fills(shape){
var base_fills = (shape?.fills?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"fills","fills",902966780)));
var fallback = app.render_wasm.svg_fills.svg_fill__GT_fills(shape);
var type = (shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)));
if(cljs.core.seq(base_fills)){
return base_fills;
} else {
if(cljs.core.seq(fallback)){
return fallback;
} else {
if(((cljs.core.contains_QMARK_(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"svg-raw","svg-raw",-594329202),type)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),type)))))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),"#000000",new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170),(1)], null)], null);
} else {
return cljs.core.PersistentVector.EMPTY;

}
}
}
});

//# sourceMappingURL=app.render_wasm.svg_fills.js.map
