import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.ui.components.copy_button.js";
import "./app.main.ui.components.title_bar.js";
import "./app.util.code_gen.style_css.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.attributes.blur');
app.main.ui.inspect.attributes.blur.has_blur_QMARK_ = (function app$main$ui$inspect$attributes$blur$has_blur_QMARK_(shape){
return new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(shape);
});
app.main.ui.inspect.attributes.blur.blur_panel = (function app$main$ui$inspect$attributes$blur$blur_panel(props_74643){
var map__74644 = rumext.v2.util.wrap_props(props_74643);
var map__74644__$1 = cljs.core.__destructure_map(map__74644);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74644__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74644__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var shapes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.main.ui.inspect.attributes.blur.has_blur_QMARK_,shapes);
if(cljs.core.seq(shapes__$1)){
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_blur__attributes-block",'children':[rumext.v2.jsx(app.main.ui.components.title_bar.inspect_title_bar_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.blur"),'className':"main_ui_inspect_attributes_blur__title-wrapper",'titleClass':"main_ui_inspect_attributes_blur__blur-attr-title",'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes__$1),(1)))?rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$3(objects,cljs.core.first(shapes__$1),new cljs.core.Keyword(null,"filter","filter",-948537934)),'className':"main_ui_inspect_attributes_blur__copy-btn-title"}):null)}),rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_blur__attributes-content",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,shape){
out_arr__46744__auto__.push(rumext.v2.jsxs("div",{'className':"main_ui_inspect_attributes_blur__blur-row",'children':[rumext.v2.jsx("div",{'className':"attr-label",'children':"Filter"}),rumext.v2.jsx("div",{'className':"attr-value",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':app.util.code_gen.style_css.get_css_property.cljs$core$IFn$_invoke$arity$3(objects,shape,new cljs.core.Keyword(null,"filter","filter",-948537934)),'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_attributes_blur__button-children",'children':app.util.code_gen.style_css.get_css_value.cljs$core$IFn$_invoke$arity$3(objects,shape,new cljs.core.Keyword(null,"filter","filter",-948537934))})})})]},""+"block-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape) ?? "")+"-blur"));

return out_arr__46744__auto__;
}),[],shapes__$1)})]});
} else {
return null;
}
});

(app.main.ui.inspect.attributes.blur.blur_panel.displayName = "blur-panel");


//# sourceMappingURL=app.main.ui.inspect.attributes.blur.js.map
