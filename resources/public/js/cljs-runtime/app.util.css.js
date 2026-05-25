import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.util.dom.js";
goog.provide('app.util.css');
/**
 * Converts an object of CSS declarations to a string
 */
app.util.css.declarations__GT_str = (function app$util$css$declarations__GT_str(declarations){
var entries = Array.from(Object.entries(declarations));
return entries.reduce((function (acc,p__73552){
var vec__73553 = p__73552;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73553,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__73553,(1),null);
return ""+(acc ?? "")+(k ?? "")+": "+(v ?? "")+";";
}),"");
});
/**
 * Adds a CSS rule to a CSS Style Sheet
 */
app.util.css.add_rule = (function app$util$css$add_rule(styleSheet,selector,declarations){
var rule = ""+(selector ?? "")+" { "+(app.util.css.declarations__GT_str(declarations) ?? "")+" }";
return styleSheet.insertRule(rule,styleSheet.cssRules.length);
});
app.util.css.wrap_style_sheet = (function app$util$css$wrap_style_sheet(style){
return ({"add": cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.util.css.add_rule,style.sheet)});
});
/**
 * Creates a new CSS Style Sheet and returns an object that allows adding rules to it
 */
app.util.css.create_style = (function app$util$css$create_style(id){
var element = app.util.dom.get_element(id);
if((!((element == null)))){
return app.util.css.wrap_style_sheet(element);
} else {
var style = app.util.dom.create_element.cljs$core$IFn$_invoke$arity$1("style");
app.util.dom.set_attribute_BANG_(style,"id",id);

app.util.dom.set_attribute_BANG_(style,"type","text/css");

app.util.dom.append_child_BANG_(document.head,style);

return app.util.css.wrap_style_sheet(style);
}
});

//# sourceMappingURL=app.util.css.js.map
