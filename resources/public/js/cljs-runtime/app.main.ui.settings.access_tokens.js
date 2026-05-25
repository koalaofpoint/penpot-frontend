import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.schema.js";
import "./app.common.time.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.data.profile.js";
import "./app.main.store.js";
import "./app.main.ui.components.context_menu_a11y.js";
import "./app.main.ui.components.forms.js";
import "./app.main.ui.icons.js";
import "./app.util.clipboard.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.settings.access_tokens');
app.main.ui.settings.access_tokens.clipboard_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_settings_access_tokens__clipboard-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-clipboard"})});
app.main.ui.settings.access_tokens.close_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_settings_access_tokens__close-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-close"})});
app.main.ui.settings.access_tokens.menu_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_settings_access_tokens__menu-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-menu"})});
app.main.ui.settings.access_tokens.tokens_ref = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"access-tokens","access-tokens",713316693),app.main.store.state);
app.main.ui.settings.access_tokens.token_created_ref = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"access-token-created","access-token-created",294001579),app.main.store.state);
app.main.ui.settings.access_tokens.schema_COLON_form = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"AccessTokenForm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(250)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expiration-date","expiration-date",-1266973669),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(250)], null)], null)], null)], null);
app.main.ui.settings.access_tokens.initial_data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),"",new cljs.core.Keyword(null,"expiration-date","expiration-date",-1266973669),"never"], null);
app.main.ui.settings.access_tokens.access_token_modal = (function app$main$ui$settings$access_tokens$access_token_modal(props_66552){
var form = (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"initial","initial",1854648214),app.main.ui.settings.access_tokens.initial_data,new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.settings.access_tokens.schema_COLON_form) : app.main.ui.components.forms.use_form.call(null,new cljs.core.Keyword(null,"initial","initial",1854648214),app.main.ui.settings.access_tokens.initial_data,new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.settings.access_tokens.schema_COLON_form));
var created = rumext.v2.deref(app.main.ui.settings.access_tokens.token_created_ref);
var created_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var on_success = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(created)],(function (_){
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.access-tokens.create.success");
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.profile.fetch_access_tokens(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(message),cljs.core.reset_BANG_(created_QMARK_,true)], 0));
}));
var on_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(created)],(function (_){
cljs.core.reset_BANG_(created_QMARK_,false);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());
}));
var on_error = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.generic")),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide()], 0));
}));
var on_submit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (form__$1){
var cdata = new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form__$1));
var mdata = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_success,form__$1),new cljs.core.Keyword(null,"on-error","on-error",1728533530),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_error,form__$1)], null);
var expiration = new cljs.core.Keyword(null,"expiration-date","expiration-date",-1266973669).cljs$core$IFn$_invoke$arity$1(cdata);
var params = (function (){var G__66553 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cdata),new cljs.core.Keyword(null,"perms","perms",-1384176260),new cljs.core.Keyword(null,"perms","perms",-1384176260).cljs$core$IFn$_invoke$arity$1(cdata)], null);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("never",expiration)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__66553,new cljs.core.Keyword(null,"expiration","expiration",238846697),expiration);
} else {
return G__66553;
}
})();
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.profile.create_access_token(cljs.core.with_meta(params,mdata)));
}));
var copy_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(created)],(function (event){
app.util.dom.prevent_default(event);

app.util.clipboard.to_clipboard(new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$1(created));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.access-tokens.copied-success"),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(7000)], null)));
}));
return rumext.v2.jsx("div",{'className':"main_ui_settings_access_tokens__modal-overlay",'children':rumext.v2.jsx("div",{'className':"main_ui_settings_access_tokens__modal-container",'children':rumext.v2.jsxs(app.main.ui.components.forms.form,{'form':form,'on-submit':on_submit,'children':[rumext.v2.jsxs("div",{'className':"main_ui_settings_access_tokens__modal-header",'children':[rumext.v2.jsx("h2",{'className':"main_ui_settings_access_tokens__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.create-access-token.title")}),rumext.v2.jsx("button",{'onClick':on_close,'className':"main_ui_settings_access_tokens__modal-close-btn",'children':app.main.ui.settings.access_tokens.close_icon})]}),rumext.v2.jsxs("div",{'className':"main_ui_settings_access_tokens__modal-content",'children':[rumext.v2.jsx("div",{'className':"main_ui_settings_access_tokens__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'type':"text",'auto-focus?':true,'form':form,'name':new cljs.core.Keyword(null,"name","name",1843675177),'disabled':cljs.core.deref(created_QMARK_),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.create-access-token.name.label"),'show-success?':true,'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.create-access-token.name.placeholder")})}),rumext.v2.jsxs("div",{'className':"main_ui_settings_access_tokens__fields-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_settings_access_tokens__select-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.create-access-token.expiration-date.label")}),rumext.v2.jsx(app.main.ui.components.forms.select,{'options':new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.access-tokens.expiration-never"),new cljs.core.Keyword(null,"value","value",305978217),"never",new cljs.core.Keyword(null,"key","key",-1516042587),"never"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.access-tokens.expiration-30-days"),new cljs.core.Keyword(null,"value","value",305978217),"720h",new cljs.core.Keyword(null,"key","key",-1516042587),"720h"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.access-tokens.expiration-60-days"),new cljs.core.Keyword(null,"value","value",305978217),"1440h",new cljs.core.Keyword(null,"key","key",-1516042587),"1440h"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.access-tokens.expiration-90-days"),new cljs.core.Keyword(null,"value","value",305978217),"2160h",new cljs.core.Keyword(null,"key","key",-1516042587),"2160h"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.access-tokens.expiration-180-days"),new cljs.core.Keyword(null,"value","value",305978217),"4320h",new cljs.core.Keyword(null,"key","key",-1516042587),"4320h"], null)], null),'default':"never",'disabled':cljs.core.deref(created_QMARK_),'name':new cljs.core.Keyword(null,"expiration-date","expiration-date",-1266973669)}),(cljs.core.truth_(cljs.core.deref(created_QMARK_))?rumext.v2.jsx("span",{'className':"main_ui_settings_access_tokens__token-created-info",'children':(cljs.core.truth_(new cljs.core.Keyword(null,"expires-at","expires-at",1654982210).cljs$core$IFn$_invoke$arity$1(created))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.access-tokens.token-will-expire",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.time.format_inst.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expires-at","expires-at",1654982210).cljs$core$IFn$_invoke$arity$1(created),"PPP")], 0)):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.access-tokens.token-will-not-expire"))}):null)]}),rumext.v2.jsx("div",{'className':"main_ui_settings_access_tokens__fields-row",'children':(cljs.core.truth_(cljs.core.deref(created_QMARK_))?rumext.v2.jsxs("div",{'className':"main_ui_settings_access_tokens__custon-input-wrapper",'children':[rumext.v2.jsx("input",{'type':"text",'value':new cljs.core.Keyword(null,"token","token",-1211463215).cljs$core$IFn$_invoke$arity$2(created,""),'readOnly':true,'className':"main_ui_settings_access_tokens__custom-input-token"}),rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.create-access-token.copy-token"),'onClick':copy_token,'className':"main_ui_settings_access_tokens__copy-btn",'children':app.main.ui.settings.access_tokens.clipboard_icon})]}):null)})]}),rumext.v2.jsx("div",{'className':"main_ui_settings_access_tokens__modal-footer",'children':rumext.v2.jsx("div",{'className':"main_ui_settings_access_tokens__action-buttons",'children':(cljs.core.truth_(cljs.core.deref(created_QMARK_))?rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close"),'onClick':app.main.data.modal.hide_BANG_,'className':"main_ui_settings_access_tokens__cancel-button"}):rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.cancel"),'onClick':app.main.data.modal.hide_BANG_,'className':"main_ui_settings_access_tokens__cancel-button"}),rumext.v2.jsx(app.main.ui.components.forms.submit_button_STAR_,{'large?':false,'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.create-access-token.submit-label")})]}))})})]})})});
});

(app.main.ui.settings.access_tokens.access_token_modal.displayName = "access-token-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"access-token","access-token",-654201199),app.main.ui.settings.access_tokens.access_token_modal);
}));
app.main.ui.settings.access_tokens.access_tokens_hero = (function app$main$ui$settings$access_tokens$access_tokens_hero(props_66568){
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"access-token","access-token",-654201199),cljs.core.PersistentArrayMap.EMPTY));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_settings_access_tokens__access-tokens-hero",'children':[rumext.v2.jsx("h2",{'className':"main_ui_settings_access_tokens__hero-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.access-tokens.personal")}),rumext.v2.jsx("p",{'className':"main_ui_settings_access_tokens__hero-desc",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.access-tokens.personal.description")}),rumext.v2.jsx("button",{'onClick':on_click,'className':"main_ui_settings_access_tokens__hero-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.access-tokens.create")})]});
});

(app.main.ui.settings.access_tokens.access_tokens_hero.displayName = "access-tokens-hero");

app.main.ui.settings.access_tokens.access_token_actions = (function app$main$ui$settings$access_tokens$access_token_actions(props_66569){
var map__66570 = rumext.v2.util.wrap_props(props_66569);
var map__66570__$1 = cljs.core.__destructure_map(map__66570);
var on_delete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66570__$1,new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355));
var local = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false], null));
var show_QMARK_ = new cljs.core.Keyword(null,"menu-open","menu-open",1430293295).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(local));
var options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_delete)],(function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.delete"),new cljs.core.Keyword(null,"id","id",-1388402092),"access-token-delete",new cljs.core.Keyword(null,"handler","handler",-195596612),on_delete], null)], null);
}));
var menu_ref = rumext.v2.use_ref();
var on_menu_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local,cljs.core.assoc,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
}));
var on_menu_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local,cljs.core.assoc,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),true);
}));
var on_keydown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_menu_click)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
app.util.dom.stop_propagation(event);

return (on_menu_click.cljs$core$IFn$_invoke$arity$1 ? on_menu_click.cljs$core$IFn$_invoke$arity$1(event) : on_menu_click.call(null,event));
} else {
return null;
}
}));
return rumext.v2.jsxs("button",{'tabIndex':"0",'ref':menu_ref,'onClick':on_menu_click,'onKeyDown':on_keydown,'className':"main_ui_settings_access_tokens__menu-btn",'children':[app.main.ui.settings.access_tokens.menu_icon,rumext.v2.jsx(app.main.ui.components.context_menu_a11y.context_menu_STAR_,{'onClose':on_menu_close,'show':show_QMARK_,'fixed':true,'minWidth':true,'top':"auto",'left':"auto",'options':options})]});
});

(app.main.ui.settings.access_tokens.access_token_actions.displayName = "access-token-actions");

app.main.ui.settings.access_tokens.access_token_item = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$settings$access_tokens$access_token_item(props_66571){
var map__66572 = rumext.v2.util.wrap_props(props_66571);
var map__66572__$1 = cljs.core.__destructure_map(map__66572);
var props = map__66572__$1;
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66572__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var expires_at = new cljs.core.Keyword(null,"expires-at","expires-at",1654982210).cljs$core$IFn$_invoke$arity$1(token);
var expires_txt = (function (){var G__66573 = expires_at;
if((G__66573 == null)){
return null;
} else {
return app.common.time.format_inst.cljs$core$IFn$_invoke$arity$2(G__66573,"PPP");
}
})();
var expired_QMARK_ = (((!((expires_at == null)))) && ((app.common.time.now() > expires_at)));
var delete_fn = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token)],(function (){
var params = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token)], null);
var mdata = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.profile.fetch_access_tokens());
})], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.profile.delete_access_token(cljs.core.with_meta(params,mdata)));
}));
var on_delete = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(delete_fn)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-acces-token.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-acces-token.message"),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-acces-token.accept"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),delete_fn], null)));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_settings_access_tokens__table-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_settings_access_tokens__table-field main_ui_settings_access_tokens__field-name",'children':cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token))}),rumext.v2.jsx("div",{'className':"main_ui_settings_access_tokens__expiration-date"+" "+((expired_QMARK_)?"main_ui_settings_access_tokens__expired":""),'children':(((expires_at == null))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.access-tokens.no-expiration"):((expired_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.access-tokens.expired-on",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expires_txt], 0)):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.access-tokens.expires-on",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([expires_txt], 0))
))}),rumext.v2.jsx("div",{'className':"main_ui_settings_access_tokens__table-field main_ui_settings_access_tokens__actions",'children':rumext.v2.jsx(app.main.ui.settings.access_tokens.access_token_actions,{'on-delete':on_delete})})]});
}));

(app.main.ui.settings.access_tokens.access_token_item.displayName = "access-token-item");

app.main.ui.settings.access_tokens.access_tokens_page = (function app$main$ui$settings$access_tokens$access_tokens_page(props_66578){
var tokens = rumext.v2.deref(app.main.ui.settings.access_tokens.tokens_ref);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
app.util.dom.set_html_title(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("title.settings.access-tokens"));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.profile.fetch_access_tokens());
}));

return rumext.v2.jsxs("div",{'className':"main_ui_settings_access_tokens__dashboard-access-tokens",'children':[rumext.v2.jsx(app.main.ui.settings.access_tokens.access_tokens_hero,{}),((cljs.core.empty_QMARK_(tokens))?rumext.v2.jsxs("div",{'className':"main_ui_settings_access_tokens__access-tokens-empty",'children':[rumext.v2.jsx("div",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.access-tokens.empty.no-access-tokens")}),rumext.v2.jsx("div",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.access-tokens.empty.add-one")})]}):rumext.v2.jsx("div",{'className':"main_ui_settings_access_tokens__dashboard-table",'children':rumext.v2.jsx("div",{'className':"main_ui_settings_access_tokens__table-rows",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,token){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.settings.access_tokens.access_token_item,{'token':token},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token)));

return out_arr__35152__auto__;
}),[],tokens)})}))]});
});

(app.main.ui.settings.access_tokens.access_tokens_page.displayName = "access-tokens-page");


//# sourceMappingURL=app.main.ui.settings.access_tokens.js.map
