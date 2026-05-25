import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.types.file.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.tokens.typography.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.controls.input.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.foundations.typography.js";
import "./app.main.ui.ds.foundations.typography.heading.js";
import "./app.main.ui.ds.foundations.typography.text.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.settings.menu');
app.main.ui.workspace.tokens.settings.menu.token_settings_STAR_ = (function app$main$ui$workspace$tokens$settings$menu$token_settings_STAR_(props_56583){
var file_data = cljs.core.deref(app.main.refs.workspace_data);
var base_font_size_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return app.common.types.file.get_base_font_size(file_data);
}));
var base_font_size = cljs.core.deref(base_font_size_STAR_);
var valid_QMARK__STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(true);
var is_valid = cljs.core.deref(valid_QMARK__STAR_);
var is_valid_QMARK_ = (function (value){
return cljs.core.boolean$(cljs.core.re_matches(/^\d+(\.\d+)?(px)?$/,value));
});
var hint_message = (cljs.core.truth_(is_valid)?["1rem = ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(base_font_size)].join(''):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.base-font-size.error"));
var on_change_base_font_size = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(base_font_size_STAR_)],(function (e){
var value = app.util.dom.get_target_val(e);
cljs.core.reset_BANG_(valid_QMARK__STAR_,is_valid_QMARK_(value));

if(is_valid_QMARK_(value)){
var unit_value = ((cuerdas.core.ends_with_QMARK_(value,"px"))?value:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(value),"px"].join(''));
return cljs.core.reset_BANG_(base_font_size_STAR_,unit_value);
} else {
return null;
}
}));
var on_set_font = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(base_font_size)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.tokens.typography.set_base_font_size(base_font_size),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide()], 0));
}));
var handle_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(base_font_size),rumext.v2.adapt(is_valid)],(function (e){
if(cljs.core.truth_((function (){var and__5023__auto__ = app.util.keyboard.enter_QMARK_(e);
if(cljs.core.truth_(and__5023__auto__)){
return is_valid;
} else {
return and__5023__auto__;
}
})())){
return (on_set_font.cljs$core$IFn$_invoke$arity$0 ? on_set_font.cljs$core$IFn$_invoke$arity$0() : on_set_font.call(null));
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'data-testid':"token-font-settings-modal",'className':"main_ui_workspace_tokens_settings_menu__setting-modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_settings_menu__setting-modal",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'onClick':app.main.data.modal.hide_BANG_,'className':"main_ui_workspace_tokens_settings_menu__close-btn",'icon':app.main.ui.ds.foundations.assets.icon.close,'variant':"action",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close")}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_settings_menu__settings-modal-layout",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.heading.heading_STAR_,{'level':(2),'typography':app.main.ui.ds.foundations.typography.headline_medium,'className':"main_ui_workspace_tokens_settings_menu__settings-modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.settings")}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_settings_menu__settings-modal-content",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_settings_menu__settings-modal-subtitle-wrapper",'children':rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':app.main.ui.ds.foundations.typography.body_large,'className':"main_ui_workspace_tokens_settings_menu__settings-subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.base-font-size")})}),rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':app.main.ui.ds.foundations.typography.body_medium,'className':"main_ui_workspace_tokens_settings_menu__settings-modal-description",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.setting-description")}),rumext.v2.jsx(app.main.ui.ds.controls.input.input_STAR_,{'type':"text",'placeholder':"16",'defaultValue':base_font_size,'hintMessage':hint_message,'hintType':(cljs.core.truth_(is_valid)?"hint":"error"),'onKeyDown':handle_key_down,'onChange':on_change_base_font_size}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_settings_menu__settings-modal-actions",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'onClick':app.main.data.modal.hide_BANG_,'type':"button",'variant':"secondary",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.cancel")}),rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'onClick':on_set_font,'type':"button",'disabled':cljs.core.not(is_valid),'variant':"primary",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.save")})]})]})]})]})});
});

(app.main.ui.workspace.tokens.settings.menu.token_settings_STAR_.displayName = "token-settings*");


//# sourceMappingURL=app.main.ui.workspace.tokens.settings.menu.js.map
