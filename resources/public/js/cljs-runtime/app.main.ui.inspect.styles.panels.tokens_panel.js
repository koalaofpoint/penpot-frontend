import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.inspect.styles.rows.properties_row.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.styles.panels.tokens_panel');
app.main.ui.inspect.styles.panels.tokens_panel.tokens_panel_STAR_ = (function app$main$ui$inspect$styles$panels$tokens_panel$tokens_panel_STAR_(props_74935){
var set_names = props_74935.setNames;
var theme_paths = props_74935.themePaths;
return rumext.v2.jsxs("div",{'className':"main_ui_inspect_styles_panels_tokens_panel__tokens-panel",'children':[((cljs.core.seq(theme_paths))?(function (){var theme_list = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",theme_paths);
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'className':"main_ui_inspect_styles_panels_tokens_panel__token-theme",'term':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.tabs.styles.active-themes"),'detail':theme_list});
})():null),((cljs.core.seq(set_names))?(function (){var sets_list = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",set_names);
return rumext.v2.jsx(app.main.ui.inspect.styles.rows.properties_row.properties_row_STAR_,{'className':"main_ui_inspect_styles_panels_tokens_panel__token-sets",'term':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.tabs.styles.active-sets"),'detail':sets_list});
})():null)]});
});

(app.main.ui.inspect.styles.panels.tokens_panel.tokens_panel_STAR_.displayName = "tokens-panel*");


//# sourceMappingURL=app.main.ui.inspect.styles.panels.tokens_panel.js.map
