import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$react_dom$server.js";
import "./app.main.render.js";
import "./app.util.code_beautify.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.util.code_gen.markup_svg');
app.util.code_gen.markup_svg.generate_svg = (function app$util$code_gen$markup_svg$generate_svg(objects,shape){
return shadow.js.shim.module$react_dom$server.renderToStaticMarkup(rumext.v2.element.cljs$core$IFn$_invoke$arity$2(app.main.render.object_svg,({"objects": objects, "object-id": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)})));
});
app.util.code_gen.markup_svg.generate_markup = (function app$util$code_gen$markup_svg$generate_markup(objects,shapes){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__69399_SHARP_){
return app.util.code_gen.markup_svg.generate_svg(objects,p1__69399_SHARP_);
}),shapes));
});
app.util.code_gen.markup_svg.generate_formatted_markup = (function app$util$code_gen$markup_svg$generate_formatted_markup(objects,shapes){
var markup = app.util.code_gen.markup_svg.generate_markup(objects,shapes);
return app.util.code_beautify.format_code(markup,"svg");
});

//# sourceMappingURL=app.util.code_gen.markup_svg.js.map
