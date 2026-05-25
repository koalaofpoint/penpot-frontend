import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.modal.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.workspace.tokens.export.modal.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.export$');
app.main.ui.workspace.tokens.export$.export_modal_STAR_ = (function app$main$ui$workspace$tokens$export$export_modal_STAR_(props_79588){
return rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_export__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_export__modal-dialog",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'className':"main_ui_workspace_tokens_export__close-btn",'onClick':app.main.data.modal.hide_BANG_,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close"),'variant':"ghost",'icon':app.main.ui.ds.foundations.assets.icon.close}),rumext.v2.jsx(app.main.ui.workspace.tokens.export$.modal.export_modal_body_STAR_,{})]})});
});

(app.main.ui.workspace.tokens.export$.export_modal_STAR_.displayName = "export-modal*");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__47156__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__47156__auto__,new cljs.core.Keyword("tokens","export","tokens/export",-125347700),app.main.ui.workspace.tokens.export$.export_modal_STAR_);
}));

//# sourceMappingURL=app.main.ui.workspace.tokens.export.js.map
