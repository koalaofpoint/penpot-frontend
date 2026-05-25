import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.ui.components.copy_button.js";
import "./app.main.ui.components.title_bar.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.attributes.svg');
app.main.ui.inspect.attributes.svg.map__GT_css = (function app$main$ui$inspect$attributes$svg$map__GT_css(attr){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("; ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__74687){
var vec__74688 = p__74687;
var attr_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74688,(0),null);
var attr_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74688,(1),null);
return [app.common.data.name(attr_key),":",cljs.core.str.cljs$core$IFn$_invoke$arity$1(attr_value)].join('');
}),attr));
});
app.main.ui.inspect.attributes.svg.svg_attr = (function app$main$ui$inspect$attributes$svg$svg_attr(props_74691){
var map__74692 = rumext.v2.util.wrap_props(props_74691);
var map__74692__$1 = cljs.core.__destructure_map(map__74692);
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74692__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74692__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.map_QMARK_(value)){
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_svg__attributes-subtitle",'children':[rumext.v2.jsx("span",{'children':app.common.data.name(attr)}),rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.main.ui.inspect.attributes.svg.map__GT_css(value)})]}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__74693){
var vec__74694 = p__74693;
var attr_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74694,(0),null);
var attr_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74694,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsx(app$main$ui$inspect$attributes$svg$svg_attr,{'attr':attr_key,'value':attr_value},cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("svg-key-",app.common.data.name(attr_key))));

return out_arr__46744__auto__;
}),[],value)]});
} else {
var attr_name = (function (){var $ = attr;
var $__$1 = app.common.data.name($);
var $__$2 = cuerdas.core.split.cljs$core$IFn$_invoke$arity$2($__$1,"-");
var $__$3 = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",$__$2);
return cuerdas.core.capital($__$3);
})();
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_svg__svg-row",'children':[rumext.v2.jsx("div",{'className':"attr-label",'children':attr_name}),rumext.v2.jsx("div",{'className':"attr-value",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.common.data.name(value),'className':"main_ui_inspect_attributes_svg__copy-btn-title",'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_svg__button-children",'children':cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)})})})]});
}
});

(app.main.ui.inspect.attributes.svg.svg_attr.displayName = "svg-attr");

app.main.ui.inspect.attributes.svg.svg_block = (function app$main$ui$inspect$attributes$svg$svg_block(props_74697){
var map__74698 = rumext.v2.util.wrap_props(props_74697);
var map__74698__$1 = cljs.core.__destructure_map(map__74698);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74698__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
return rumext.v2.jsx(rumext.v2.Fragment,{'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__74699){
var vec__74700 = p__74699;
var attr_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74700,(0),null);
var attr_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__74700,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.inspect.attributes.svg.svg_attr,{'attr':attr_key,'value':attr_value},cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("svg-block-key-",app.common.data.name(attr_key))));

return out_arr__46744__auto__;
}),[],new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772).cljs$core$IFn$_invoke$arity$1(shape))});
});

(app.main.ui.inspect.attributes.svg.svg_block.displayName = "svg-block");

app.main.ui.inspect.attributes.svg.svg_panel = (function app$main$ui$inspect$attributes$svg$svg_panel(props_74703){
var map__74704 = rumext.v2.util.wrap_props(props_74703);
var map__74704__$1 = cljs.core.__destructure_map(map__74704);
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74704__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var shape = cljs.core.first(shapes);
if(cljs.core.seq(new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772).cljs$core$IFn$_invoke$arity$1(shape))){
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_svg__attributes-block",'children':[rumext.v2.jsx(app.main.ui.components.title_bar.inspect_title_bar_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.options.svg-attrs.title"),'className':"main_ui_inspect_attributes_svg__title-wrapper",'titleClass':"main_ui_inspect_attributes_svg__svg-attr-title"}),rumext.v2.jsx(app.main.ui.inspect.attributes.svg.svg_block,{'shape':shape})]});
} else {
return null;
}
});

(app.main.ui.inspect.attributes.svg.svg_panel.displayName = "svg-panel");


//# sourceMappingURL=app.main.ui.inspect.attributes.svg.js.map
