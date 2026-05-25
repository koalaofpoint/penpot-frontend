import "./cljs_env.js";
import "./cljs.core.js";
import "./app.util.code_beautify.js";
import "./app.util.code_gen.markup_html.js";
import "./app.util.code_gen.markup_svg.js";
import "./app.util.code_gen.style_css.js";
goog.provide('app.util.code_gen');
app.util.code_gen.generate_markup_code = (function app$util$code_gen$generate_markup_code(objects,type,shapes){
var generate_markup = (function (){var G__72780 = type;
switch (G__72780) {
case "html":
return app.util.code_gen.markup_html.generate_markup;

break;
case "svg":
return app.util.code_gen.markup_svg.generate_markup;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72780)].join('')));

}
})();
return (generate_markup.cljs$core$IFn$_invoke$arity$2 ? generate_markup.cljs$core$IFn$_invoke$arity$2(objects,shapes) : generate_markup.call(null,objects,shapes));
});
app.util.code_gen.generate_formatted_markup_code = (function app$util$code_gen$generate_formatted_markup_code(objects,type,shapes){
var markup = app.util.code_gen.generate_markup_code(objects,type,shapes);
return app.util.code_beautify.format_code(markup,type);
});
app.util.code_gen.generate_style_code = (function app$util$code_gen$generate_style_code(var_args){
var G__72782 = arguments.length;
switch (G__72782) {
case 4:
return app.util.code_gen.generate_style_code.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.util.code_gen.generate_style_code.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.code_gen.generate_style_code.cljs$core$IFn$_invoke$arity$4 = (function (objects,type,root_shapes,all_shapes){
return app.util.code_gen.generate_style_code.cljs$core$IFn$_invoke$arity$5(objects,type,root_shapes,all_shapes,null);
}));

(app.util.code_gen.generate_style_code.cljs$core$IFn$_invoke$arity$5 = (function (objects,type,root_shapes,all_shapes,options){
var generate_style = (function (){var G__72783 = type;
switch (G__72783) {
case "css":
return app.util.code_gen.style_css.generate_style;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72783)].join('')));

}
})();
return (generate_style.cljs$core$IFn$_invoke$arity$4 ? generate_style.cljs$core$IFn$_invoke$arity$4(objects,root_shapes,all_shapes,options) : generate_style.call(null,objects,root_shapes,all_shapes,options));
}));

(app.util.code_gen.generate_style_code.cljs$lang$maxFixedArity = 5);

app.util.code_gen.prelude = (function app$util$code_gen$prelude(type){
var G__72784 = type;
switch (G__72784) {
case "css":
return app.util.code_gen.style_css.prelude;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72784)].join('')));

}
});

//# sourceMappingURL=app.util.code_gen.js.map
