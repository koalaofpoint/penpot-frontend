import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$react_dom$server.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.types.shape.layout.js";
import "./app.config.js";
import "./app.main.ui.shapes.text.html_text.js";
import "./app.util.code_gen.common.js";
import "./app.util.code_gen.markup_svg.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.util.code_gen.markup_html');
app.util.code_gen.markup_html.generate_html = (function app$util$code_gen$markup_html$generate_html(var_args){
var G__72773 = arguments.length;
switch (G__72773) {
case 2:
return app.util.code_gen.markup_html.generate_html.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.util.code_gen.markup_html.generate_html.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.code_gen.markup_html.generate_html.cljs$core$IFn$_invoke$arity$2 = (function (objects,shape){
return app.util.code_gen.markup_html.generate_html.cljs$core$IFn$_invoke$arity$3(objects,shape,(0));
}));

(app.util.code_gen.markup_html.generate_html.cljs$core$IFn$_invoke$arity$3 = (function (objects,shape,level){
if((((!((shape == null)))) && ((!((new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape) == null)))))){
var indent = cuerdas.core.repeat.cljs$core$IFn$_invoke$arity$2("  ",level);
var shape_html = ((app.util.code_gen.common.svg_markup_QMARK_(shape))?(function (){var svg_markup = app.util.code_gen.markup_svg.generate_svg(objects,shape);
return ""+(indent ?? "")+"<div class=\""+(""+"shape "+(app.common.data.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape)) ?? "")+" "+(app.util.code_gen.common.shape__GT_selector(shape) ?? "") ?? "")+"\">\n"+(svg_markup ?? "")+"\n"+(indent ?? "")+"</div>";
})():((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?(function (){var text_shape_html = shadow.js.shim.module$react_dom$server.renderToStaticMarkup(rumext.v2.element.cljs$core$IFn$_invoke$arity$2(app.main.ui.shapes.text.html_text.text_shape,({"shape": shape, "code?": true})));
var text_shape_html__$1 = cuerdas.core.replace(text_shape_html,/style\s*=\s*[\"'][^\"']*[\"']/,"");
return ""+(indent ?? "")+"<div class=\""+(""+"shape "+(app.common.data.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape)) ?? "")+" "+(app.util.code_gen.common.shape__GT_selector(shape) ?? "") ?? "")+"\">\n"+(text_shape_html__$1 ?? "")+"\n"+(indent ?? "")+"</div>";
})():((app.common.files.helpers.image_shape_QMARK_(shape))?(function (){var data = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"fill-image","fill-image",-99895848).cljs$core$IFn$_invoke$arity$1(shape);
}
})();
var image_url = app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(data);
return ""+(indent ?? "")+"<img src=\""+(image_url ?? "")+"\" class=\""+(""+"shape "+(app.common.data.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape)) ?? "")+" "+(app.util.code_gen.common.shape__GT_selector(shape) ?? "") ?? "")+"\">\n"+(indent ?? "")+"</img>";
})():((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape)))?""+(indent ?? "")+"<div class=\""+(""+"shape "+(app.common.data.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape)) ?? "")+" "+(app.util.code_gen.common.shape__GT_selector(shape) ?? "") ?? "")+"\">\n"+(indent ?? "")+"</div>":(function (){var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72770_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__72770_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
var reverse_QMARK_ = app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var children__$1 = (function (){var G__72775 = children;
if(reverse_QMARK_){
return cljs.core.reverse(G__72775);
} else {
return G__72775;
}
})();
return ""+(indent ?? "")+"<div class=\""+(""+(app.common.data.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape)) ?? "")+" "+(app.util.code_gen.common.shape__GT_selector(shape) ?? "") ?? "")+"\">\n"+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__72771_SHARP_){
return app.util.code_gen.markup_html.generate_html.cljs$core$IFn$_invoke$arity$3(objects,p1__72771_SHARP_,(level + (1)));
}),children__$1)) ?? "")+"\n"+(indent ?? "")+"</div>";
})()
))));
var shape_html__$1 = ((app.util.code_gen.common.has_wrapper_QMARK_(objects,shape))?""+"<div class=\""+(""+(app.util.code_gen.common.shape__GT_selector(shape) ?? "")+"-wrapper" ?? "")+"\">"+(shape_html ?? "")+"</div>":shape_html);
return ""+(indent ?? "")+"<!-- "+(""+(app.common.data.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape)) ?? "")+": "+(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape) ?? "") ?? "")+" -->\n"+(shape_html__$1 ?? "");
} else {
return null;
}
}));

(app.util.code_gen.markup_html.generate_html.cljs$lang$maxFixedArity = 3);

app.util.code_gen.markup_html.generate_markup = (function app$util$code_gen$markup_html$generate_markup(objects,shapes){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p1__72776_SHARP_){
return app.util.code_gen.markup_html.generate_html.cljs$core$IFn$_invoke$arity$2(objects,p1__72776_SHARP_);
}),shapes));
});

//# sourceMappingURL=app.util.code_gen.markup_html.js.map
