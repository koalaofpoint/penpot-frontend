import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.util.clipboard.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.styles.style_box');
app.main.ui.inspect.styles.style_box.panel__GT_title = (function app$main$ui$inspect$styles$style_box$panel__GT_title(type){
var G__74950 = type;
var G__74950__$1 = (((G__74950 instanceof cljs.core.Keyword))?G__74950.fqn:null);
switch (G__74950__$1) {
case "variant":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.tabs.styles.variants-panel");

break;
case "token":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.tabs.styles.token-panel");

break;
case "geometry":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.size");

break;
case "fill":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.fill");

break;
case "stroke":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.stroke");

break;
case "text":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.text");

break;
case "blur":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.blur");

break;
case "shadow":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.shadow");

break;
case "layout":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.layout");

break;
case "flex-element":
return "Flex Element";

break;
case "grid-element":
return "Grid Element";

break;
case "layout-element":
return "Layout Element";

break;
case "visibility":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.visibility");

break;
case "svg":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.svg");

break;
default:
return null;

}
});
app.main.ui.inspect.styles.style_box.style_box_STAR_ = (function app$main$ui$inspect$styles$style_box$style_box_STAR_(props_74951){
var shorthand = props_74951.shorthand;
var children = props_74951.children;
var panel = props_74951.panel;
var expanded_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(true);
var expanded = cljs.core.deref(expanded_STAR_);
var title = app.main.ui.inspect.styles.style_box.panel__GT_title(panel);
var toggle_panel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(expanded)],(function (){
return cljs.core.reset_BANG_(expanded_STAR_,cljs.core.not(expanded));
}));
var copy_shorthand = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shorthand)],(function (){
return app.util.clipboard.to_clipboard(cljs.core.str.cljs$core$IFn$_invoke$arity$1(shorthand));
}));
return rumext.v2.jsxs("article",{'className':"main_ui_inspect_styles_style_box__style-box",'children':[rumext.v2.jsxs("header",{'className':"main_ui_inspect_styles_style_box__disclosure-header",'children':[rumext.v2.jsx("button",{'aria-expanded':expanded,'aria-controls':["style-box-",app.common.data.name(panel)].join(''),'onClick':toggle_panel,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("inspect.tabs.styles.toggle-style",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title], 0)),'className':"main_ui_inspect_styles_style_box__disclosure-button",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':(cljs.core.truth_(expanded)?"arrow-down":"arrow"),'className':"main_ui_inspect_styles_style_box__disclosure-icon",'size':"s"})}),rumext.v2.jsx("span",{'className':"main_ui_inspect_styles_style_box__panel-title",'children':title}),(cljs.core.truth_(shorthand)?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'tooltipPlacement':"top-left",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.tabs.styles.copy-shorthand"),'onClick':copy_shorthand,'icon':app.main.ui.ds.foundations.assets.icon.clipboard}):null)]}),(cljs.core.truth_(expanded)?rumext.v2.jsx("div",{'id':["style-box-",app.common.data.name(panel)].join(''),'className':"main_ui_inspect_styles_style_box__style-box-content",'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_styles_style_box__style-box-panel-wrapper",'children':children})}):null)]});
});

(app.main.ui.inspect.styles.style_box.style_box_STAR_.displayName = "style-box*");


//# sourceMappingURL=app.main.ui.inspect.styles.style_box.js.map
