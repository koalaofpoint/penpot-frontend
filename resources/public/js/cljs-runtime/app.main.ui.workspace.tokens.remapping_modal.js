import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.modal.js";
import "./app.main.store.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.foundations.typography.js";
import "./app.main.ui.ds.foundations.typography.heading.js";
import "./app.main.ui.ds.foundations.typography.text.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.remapping_modal');
/**
 * Hide the token remapping confirmation modal
 */
app.main.ui.workspace.tokens.remapping_modal.hide_remapping_modal = (function app$main$ui$workspace$tokens$remapping_modal$hide_remapping_modal(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());
});
app.main.ui.workspace.tokens.remapping_modal.token_remapping_modal = (function app$main$ui$workspace$tokens$remapping_modal$token_remapping_modal(props_79811){
var map__79815 = rumext.v2.util.wrap_props(props_79811);
var map__79815__$1 = cljs.core.__destructure_map(map__79815);
var old_token_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79815__$1,new cljs.core.Keyword(null,"old-token-name","old-token-name",-978310636));
var new_token_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79815__$1,new cljs.core.Keyword(null,"new-token-name","new-token-name",554026608));
var on_remap = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79815__$1,new cljs.core.Keyword(null,"on-remap","on-remap",143137190));
var on_rename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79815__$1,new cljs.core.Keyword(null,"on-rename","on-rename",2102721909));
var remap_modal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"remap-modal","remap-modal",-2098032472));
var confirm_remap = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_remap),rumext.v2.adapt(remap_modal)],(function (){
var old_token_name_79830__$1 = new cljs.core.Keyword(null,"old-token-name","old-token-name",-978310636).cljs$core$IFn$_invoke$arity$1(remap_modal);
var new_token_name_79831__$1 = new cljs.core.Keyword(null,"new-token-name","new-token-name",554026608).cljs$core$IFn$_invoke$arity$1(remap_modal);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("tokens","remap-tokens","tokens/remap-tokens",1280442318),old_token_name_79830__$1,new_token_name_79831__$1], null));

if(cljs.core.fn_QMARK_(on_remap)){
return (on_remap.cljs$core$IFn$_invoke$arity$0 ? on_remap.cljs$core$IFn$_invoke$arity$0() : on_remap.call(null));
} else {
return null;
}
}));
var rename_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_rename)],(function (){
if(cljs.core.fn_QMARK_(on_rename)){
return (on_rename.cljs$core$IFn$_invoke$arity$0 ? on_rename.cljs$core$IFn$_invoke$arity$0() : on_rename.call(null));
} else {
return null;
}
}));
var cancel_action = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.ui.workspace.tokens.remapping_modal.hide_remapping_modal();
}));
var on_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cancel_action)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (cancel_action.cljs$core$IFn$_invoke$arity$0 ? cancel_action.cljs$core$IFn$_invoke$arity$0() : cancel_action.call(null));
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'onKeyDown':on_key_down,'role':"alertdialog",'aria-modal':"true",'aria-labelledby':"modal-title",'className':"main_ui_workspace_tokens_remapping_modal__modal-overlay",'children':rumext.v2.jsxs("div",{'data-testid':"token-remapping-modal",'className':"main_ui_workspace_tokens_remapping_modal__modal-dialog",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'onClick':cancel_action,'className':"main_ui_workspace_tokens_remapping_modal__close-btn",'icon':app.main.ui.ds.foundations.assets.icon.close,'variant':"action",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close")}),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_remapping_modal__modal-header",'children':rumext.v2.jsx(app.main.ui.ds.foundations.typography.heading.heading_STAR_,{'level':(2),'id':"modal-title",'typography':"headline-large",'className':"main_ui_workspace_tokens_remapping_modal__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.remap-token-references-title",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([old_token_name,new_token_name], 0))})}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_remapping_modal__modal-content",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"p",'typography':app.main.ui.ds.foundations.typography.body_medium,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.remap-warning-effects")}),rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"p",'typography':app.main.ui.ds.foundations.typography.body_medium,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.remap-warning-time")})]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_remapping_modal__modal-footer",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_remapping_modal__action-buttons",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'onClick':rename_token,'type':"button",'variant':"secondary",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.not-remap")}),rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'onClick':confirm_remap,'type':"button",'variant':"primary",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.remap")})]})})]})});
});

(app.main.ui.workspace.tokens.remapping_modal.token_remapping_modal.displayName = "token-remapping-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__47156__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__47156__auto__,new cljs.core.Keyword("tokens","remapping-confirmation","tokens/remapping-confirmation",-1629837152),app.main.ui.workspace.tokens.remapping_modal.token_remapping_modal);
}));

//# sourceMappingURL=app.main.ui.workspace.tokens.remapping_modal.js.map
