import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.components.copy_button.js";
import "./app.main.ui.components.title_bar.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.annotation');
app.main.ui.inspect.annotation.annotation = (function app$main$ui$inspect$annotation$annotation(props_74641){
var map__74642 = rumext.v2.util.wrap_props(props_74641);
var map__74642__$1 = cljs.core.__destructure_map(map__74642);
var props = map__74642__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__74642__$1,new cljs.core.Keyword(null,"content","content",15833224));
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_annotation__attributes-block",'children':[rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':false,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.annotation"),'className':"main_ui_inspect_annotation__title-spacing-annotation",'children':rumext.v2.jsx(app.main.ui.components.copy_button.copy_button_STAR_,{'data':content,'className':"main_ui_inspect_annotation__copy-btn-title"})}),rumext.v2.jsx("div",{'className':"main_ui_inspect_annotation__annotation-content",'children':content})]});
});

(app.main.ui.inspect.annotation.annotation.displayName = "annotation");


//# sourceMappingURL=app.main.ui.inspect.annotation.js.map
