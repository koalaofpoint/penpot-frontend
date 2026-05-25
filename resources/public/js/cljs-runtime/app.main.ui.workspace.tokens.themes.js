import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.modal.js";
import "./app.main.refs.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.ds.foundations.typography.text.js";
import "./app.main.ui.workspace.tokens.themes.theme_selector.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.themes');
app.main.ui.workspace.tokens.themes.themes_header_STAR_ = (function app$main$ui$workspace$tokens$themes$themes_header_STAR_(props_56375){
var ordered_themes = rumext.v2.deref(app.main.refs.workspace_token_themes_no_hidden);
var can_edit_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.can_edit_QMARK_);
var open_modal = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
app.util.dom.stop_propagation(e);

return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tokens","themes","tokens/themes",31381800),cljs.core.PersistentArrayMap.EMPTY);
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_themes__themes-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"div",'typography':"headline-small",'className':"main_ui_workspace_tokens_themes__themes-header",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.themes")}),((cljs.core.empty_QMARK_(ordered_themes))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_themes__empty-theme-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':"body-small",'className':"main_ui_workspace_tokens_themes__empty-state-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.no-themes")}),(cljs.core.truth_(can_edit_QMARK_)?rumext.v2.jsx("button",{'onClick':open_modal,'className':"main_ui_workspace_tokens_themes__create-theme-button",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.create-one")}):null)]}):(cljs.core.truth_(can_edit_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_themes__theme-selector-wrapper",'children':[rumext.v2.jsx(app.main.ui.workspace.tokens.themes.theme_selector.theme_selector,{}),rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"secondary",'type':"button",'className':"main_ui_workspace_tokens_themes__edit-theme-button",'onClick':open_modal,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.edit")})]}):rumext.v2.jsx("div",{'title':(cljs.core.truth_(can_edit_QMARK_)?null:app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.no-permission-themes")),'children':rumext.v2.jsx(app.main.ui.workspace.tokens.themes.theme_selector.theme_selector,{})})))]});
});

(app.main.ui.workspace.tokens.themes.themes_header_STAR_.displayName = "themes-header*");


//# sourceMappingURL=app.main.ui.workspace.tokens.themes.js.map
