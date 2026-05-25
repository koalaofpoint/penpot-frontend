import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$js_beautify.js";
import "./cuerdas.core.js";
goog.provide('app.util.code_beautify');
app.util.code_beautify.format_html = (function app$util$code_beautify$format_html(data){
return shadow.js.shim.module$js_beautify.html(data,({"indent_size": (2)}));
});
app.util.code_beautify.format_code = (function app$util$code_beautify$format_code(code,type){
var type__$1 = (((type instanceof cljs.core.Keyword))?cljs.core.name(type):type);
var G__69352 = code;
var G__69352__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"svg"))?cuerdas.core.replace(cuerdas.core.replace(G__69352,"<defs></defs>",""),"><",">\n<"):G__69352);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"svg")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,"html")))){
return app.util.code_beautify.format_html(G__69352__$1);
} else {
return G__69352__$1;
}
});

//# sourceMappingURL=app.util.code_beautify.js.map
