import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.modal.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.workspace.tokens.import.modal.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.import$');
app.main.ui.workspace.tokens.import$.import_modal_STAR_ = (function app$main$ui$workspace$tokens$import$import_modal_STAR_(props_56439){
return rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_import__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_import__modal-dialog",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'className':"main_ui_workspace_tokens_import__close-btn",'onClick':app.main.data.modal.hide_BANG_,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close"),'variant':"ghost",'icon':app.main.ui.ds.foundations.assets.icon.close}),rumext.v2.jsx(app.main.ui.workspace.tokens.import$.modal.import_modal_body_STAR_,{})]})});
});

(app.main.ui.workspace.tokens.import$.import_modal_STAR_.displayName = "import-modal*");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","import","tokens/import",-1680554363),app.main.ui.workspace.tokens.import$.import_modal_STAR_);
}));

//# sourceMappingURL=app.main.ui.workspace.tokens.import.js.map
