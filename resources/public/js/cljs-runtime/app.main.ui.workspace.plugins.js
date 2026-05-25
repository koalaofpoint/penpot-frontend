import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.config.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.data.plugins.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.search_bar.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.icons.js";
import "./app.plugins.register.js";
import "./app.util.avatars.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.plugins');
app.main.ui.workspace.plugins.close_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_workspace_plugins__close-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-close"})});
/**
 * Creates an sanitizes de icon URL to display
 */
app.main.ui.workspace.plugins.icon_url = (function app$main$ui$workspace$plugins$icon_url(host,icon){
return ""+(host ?? "")+((((((!(cuerdas.core.ends_with_QMARK_(host,"/")))) && ((!(cuerdas.core.starts_with_QMARK_(icon,"/"))))))?"/":"") ?? "")+(icon ?? "");
});
app.main.ui.workspace.plugins.plugin_entry = (function app$main$ui$workspace$plugins$plugin_entry(props_51642){
var map__51660 = rumext.v2.util.wrap_props(props_51642);
var map__51660__$1 = cljs.core.__destructure_map(map__51660);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51660__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var manifest = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51660__$1,new cljs.core.Keyword(null,"manifest","manifest",-1386791956));
var user_can_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51660__$1,new cljs.core.Keyword(null,"user-can-edit","user-can-edit",-477003905));
var on_open_plugin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51660__$1,new cljs.core.Keyword(null,"on-open-plugin","on-open-plugin",-1345349261));
var on_remove_plugin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51660__$1,new cljs.core.Keyword(null,"on-remove-plugin","on-remove-plugin",-58459040));
var map__51667 = manifest;
var map__51667__$1 = cljs.core.__destructure_map(map__51667);
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51667__$1,new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51667__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51667__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51667__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51667__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51667__$1,new cljs.core.Keyword(null,"permissions","permissions",67803075));
var plugins_permissions_peek = cljs.core.deref(app.main.refs.plugins_permissions_peek);
var permissions__$1 = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(plugins_permissions_peek,plugin_id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return permissions;
}
})();
var is_edition_plugin_QMARK_ = ((cljs.core.contains_QMARK_(permissions__$1,"content:write")) || (cljs.core.contains_QMARK_(permissions__$1,"library:write")));
var can_open_QMARK_ = (function (){var or__5025__auto__ = user_can_edit;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (!(is_edition_plugin_QMARK_));
}
})();
var handle_open_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(manifest),rumext.v2.adapt(on_open_plugin),rumext.v2.adapt(can_open_QMARK_)],(function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = can_open_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return on_open_plugin;
} else {
return and__5023__auto__;
}
})())){
return (on_open_plugin.cljs$core$IFn$_invoke$arity$1 ? on_open_plugin.cljs$core$IFn$_invoke$arity$1(manifest) : on_open_plugin.call(null,manifest));
} else {
return null;
}
}));
var handle_delete_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(on_remove_plugin)],(function (){
if(cljs.core.truth_(on_remove_plugin)){
return (on_remove_plugin.cljs$core$IFn$_invoke$arity$1 ? on_remove_plugin.cljs$core$IFn$_invoke$arity$1(index) : on_remove_plugin.call(null,index));
} else {
return null;
}
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__plugins-list-element",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__plugin-icon",'children':rumext.v2.jsx("img",{'src':(((!((icon == null))))?app.main.ui.workspace.plugins.icon_url(host,icon):app.util.avatars.generate(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null)))})}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__plugin-description",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__plugin-title",'children':name}),rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__plugin-summary",'children':app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(description,"")})]}),rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'className':"main_ui_workspace_plugins__open-button",'variant':"secondary",'type':"button",'onClick':handle_open_click,'title':(cljs.core.truth_(can_open_QMARK_)?null:app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.error.need-editor")),'disabled':cljs.core.not(can_open_QMARK_),'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.button-open")}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.remove-plugin"),'onClick':handle_delete_click,'icon':app.main.ui.ds.foundations.assets.icon.delete$})]});
});

(app.main.ui.workspace.plugins.plugin_entry.displayName = "plugin-entry");

app.main.ui.workspace.plugins.plugin_management_dialog = (function app$main$ui$workspace$plugins$plugin_management_dialog(props_51686){
var plugins_state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return app.plugins.register.plugins_list();
}));
var plugins_state = cljs.core.deref(plugins_state_STAR_);
var plugin_url_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("");
var plugin_url = cljs.core.deref(plugin_url_STAR_);
var fetching_manifest_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var input_status_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var input_status = cljs.core.deref(input_status_STAR_);
var error_url_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error-url","error-url",-1022635896),input_status);
var error_manifest_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"error-manifest","error-manifest",617632861),input_status);
var error_QMARK_ = ((error_url_QMARK_) || (error_manifest_QMARK_));
var user_can_edit_QMARK_ = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.refs.permissions));
var handle_url_input = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (value){
cljs.core.reset_BANG_(input_status_STAR_,null);

return cljs.core.reset_BANG_(plugin_url_STAR_,value);
}));
var handle_install_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(plugins_state),rumext.v2.adapt(plugin_url)],(function (){
cljs.core.reset_BANG_(fetching_manifest_QMARK_,true);

return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (plugin){
cljs.core.reset_BANG_(fetching_manifest_QMARK_,false);

if(cljs.core.truth_(plugin)){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"install-plugin",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin),new cljs.core.Keyword(null,"url","url",276297046),plugin_url], null)));

app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugin-permissions","plugin-permissions",-1579203559),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"plugin","plugin",-1688841923),plugin,new cljs.core.Keyword(null,"on-accept","on-accept",705439955),(function (){
app.plugins.register.install_plugin_BANG_(plugin);

return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugin-management","plugin-management",-1941842397),cljs.core.PersistentArrayMap.EMPTY);
})], null));

cljs.core.reset_BANG_(input_status_STAR_,new cljs.core.Keyword(null,"success","success",1890645906));

return cljs.core.reset_BANG_(plugin_url_STAR_,"");
} else {
return cljs.core.reset_BANG_(input_status_STAR_,new cljs.core.Keyword(null,"error-manifest","error-manifest",617632861));
}
}),(function (err){
console.error(err);

cljs.core.reset_BANG_(fetching_manifest_QMARK_,false);

return cljs.core.reset_BANG_(input_status_STAR_,new cljs.core.Keyword(null,"error-url","error-url",-1022635896));
}),app.main.data.plugins.fetch_manifest(plugin_url));
}));
var handle_open_plugin = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (manifest){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"start-plugin",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:plugins",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(manifest),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(manifest)], null)));

app.main.data.plugins.open_plugin_BANG_(manifest,user_can_edit_QMARK_);

return app.main.data.modal.hide_BANG_();
}));
var handle_remove_plugin = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(plugins_state)],(function (plugin_index){
var plugins_list = app.plugins.register.plugins_list();
var plugin = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(plugins_list,plugin_index);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"remove-plugin",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(plugin)], null)));

app.main.data.plugins.close_plugin_BANG_(plugin);

app.plugins.register.remove_plugin_BANG_(plugin);

return cljs.core.reset_BANG_(plugins_state_STAR_,app.plugins.register.plugins_list());
}));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__modal-dialog main_ui_workspace_plugins__plugin-management",'children':[rumext.v2.jsx("button",{'onClick':app.main.data.modal.hide_BANG_,'className':"main_ui_workspace_plugins__close-btn",'children':app.main.ui.workspace.plugins.close_icon}),rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.title")}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__modal-content",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__top-bar",'children':[rumext.v2.jsx(app.main.ui.components.search_bar.search_bar_STAR_,{'onChange':handle_url_input,'value':plugin_url,'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.search-placeholder"),'className':((error_QMARK_)?"main_ui_workspace_plugins__input-error":"")}),rumext.v2.jsx("button",{'disabled':cljs.core.deref(fetching_manifest_QMARK_),'onClick':handle_install_click,'className':"main_ui_workspace_plugins__primary-button",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.install")})]}),((error_url_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__info"+" "+((error_QMARK_)?"main_ui_workspace_plugins__error":""),'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.error.url")}):null),((error_manifest_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__info"+" "+((error_QMARK_)?"main_ui_workspace_plugins__error":""),'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.error.manifest")}):null),((cljs.core.empty_QMARK_(plugins_state))?null:rumext.v2.jsx(app.util.i18n.tr_html_STAR_,{'className':"main_ui_workspace_plugins__discover",'onClick':(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"open-plugins-list"], null)));
}),'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.plugins.discover",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.plugins_list_uri], 0))})),rumext.v2.jsx("hr",{}),((cljs.core.empty_QMARK_(plugins_state))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__plugins-empty",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__plugins-empty-logo",'children':app.main.ui.icons.puzzle}),rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__plugins-empty-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.empty-plugins")}),rumext.v2.jsxs("a",{'href':app.config.plugins_list_uri,'target':"_blank",'onClick':(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"open-plugins-list"], null)));
}),'className':"main_ui_workspace_plugins__plugins-link",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.plugin-list-link"),app.main.ui.icons.external_link]})]}):rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':false,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.installed-plugins")}),rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__plugins-list",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__51742){
var vec__51743 = p__51742;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51743,(0),null);
var manifest = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__51743,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.plugins.plugin_entry,{'index':idx,'manifest':manifest,'user-can-edit':user_can_edit_QMARK_,'on-open-plugin':handle_open_plugin,'on-remove-plugin':handle_remove_plugin},""+"plugin-"+(idx ?? "")));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(plugins_state))})]}))]})]})});
});

(app.main.ui.workspace.plugins.plugin_management_dialog.displayName = "plugin-management-dialog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"plugin-management","plugin-management",-1941842397),app.main.ui.workspace.plugins.plugin_management_dialog);
}));
app.main.ui.workspace.plugins.plugins_permission_list = (function app$main$ui$workspace$plugins$plugins_permission_list(props_51785){
var map__51796 = rumext.v2.util.wrap_props(props_51785);
var map__51796__$1 = cljs.core.__destructure_map(map__51796);
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51796__$1,new cljs.core.Keyword(null,"permissions","permissions",67803075));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__permissions-list",'children':[((cljs.core.contains_QMARK_(permissions,"content:write"))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__permissions-list-entry",'children':[app.main.ui.icons.oauth_1,rumext.v2.jsx("p",{'className':"main_ui_workspace_plugins__permissions-list-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.permissions.content-write")})]}):((cljs.core.contains_QMARK_(permissions,"content:read"))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__permissions-list-entry",'children':[app.main.ui.icons.oauth_1,rumext.v2.jsx("p",{'className':"main_ui_workspace_plugins__permissions-list-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.permissions.content-read")})]}):null)),((cljs.core.contains_QMARK_(permissions,"user:read"))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__permissions-list-entry",'children':[app.main.ui.icons.oauth_2,rumext.v2.jsx("p",{'className':"main_ui_workspace_plugins__permissions-list-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.permissions.user-read")})]}):null),((cljs.core.contains_QMARK_(permissions,"library:write"))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__permissions-list-entry",'children':[app.main.ui.icons.oauth_3,rumext.v2.jsx("p",{'className':"main_ui_workspace_plugins__permissions-list-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.permissions.library-write")})]}):((cljs.core.contains_QMARK_(permissions,"library:read"))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__permissions-list-entry",'children':[app.main.ui.icons.oauth_3,rumext.v2.jsx("p",{'className':"main_ui_workspace_plugins__permissions-list-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.permissions.library-read")})]}):null)),((cljs.core.contains_QMARK_(permissions,"comment:write"))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__permissions-list-entry",'children':[app.main.ui.icons.oauth_1,rumext.v2.jsx("p",{'className':"main_ui_workspace_plugins__permissions-list-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.permissions.comment-write")})]}):((cljs.core.contains_QMARK_(permissions,"comment:read"))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__permissions-list-entry",'children':[app.main.ui.icons.oauth_1,rumext.v2.jsx("p",{'className':"main_ui_workspace_plugins__permissions-list-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.permissions.comment-read")})]}):null)),((cljs.core.contains_QMARK_(permissions,"allow:downloads"))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__permissions-list-entry",'children':[app.main.ui.icons.oauth_1,rumext.v2.jsx("p",{'className':"main_ui_workspace_plugins__permissions-list-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.permissions.allow-download")})]}):null),((cljs.core.contains_QMARK_(permissions,"allow:localstorage"))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__permissions-list-entry",'children':[app.main.ui.icons.oauth_1,rumext.v2.jsx("p",{'className':"main_ui_workspace_plugins__permissions-list-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.permissions.allow-localstorage")})]}):null)]});
});

(app.main.ui.workspace.plugins.plugins_permission_list.displayName = "plugins-permission-list");

app.main.ui.workspace.plugins.plugins_permissions_dialog = (function app$main$ui$workspace$plugins$plugins_permissions_dialog(props_51823){
var map__51834 = rumext.v2.util.wrap_props(props_51823);
var map__51834__$1 = cljs.core.__destructure_map(map__51834);
var plugin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51834__$1,new cljs.core.Keyword(null,"plugin","plugin",-1688841923));
var on_accept = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51834__$1,new cljs.core.Keyword(null,"on-accept","on-accept",705439955));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51834__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var map__51835 = plugin;
var map__51835__$1 = cljs.core.__destructure_map(map__51835);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51835__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51835__$1,new cljs.core.Keyword(null,"permissions","permissions",67803075));
var permissions__$1 = cljs.core.set(permissions);
var handle_accept_dialog = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"allow-plugin-permissions",new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"permissions","permissions",67803075),cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",permissions__$1)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide()], 0));

if(cljs.core.truth_(on_accept)){
return (on_accept.cljs$core$IFn$_invoke$arity$0 ? on_accept.cljs$core$IFn$_invoke$arity$0() : on_accept.call(null));
} else {
return null;
}
}));
var handle_close_dialog = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"reject-plugin-permissions",new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"permissions","permissions",67803075),cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",permissions__$1)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide()], 0));

if(cljs.core.truth_(on_close)){
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__modal-dialog main_ui_workspace_plugins__plugin-permissions",'children':[rumext.v2.jsx("button",{'onClick':handle_close_dialog,'className':"main_ui_workspace_plugins__close-btn",'children':app.main.ui.workspace.plugins.close_icon}),rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.plugins.permissions.title",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cuerdas.core.upper(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin))], 0))}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__modal-content",'children':[rumext.v2.jsx(app.main.ui.workspace.plugins.plugins_permission_list,{'permissions':permissions__$1}),((cljs.core.contains_QMARK_(app.config.plugins_whitelist,host))?null:rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__permissions-disclaimer",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.permissions.disclaimer")}))]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__modal-footer",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__action-buttons",'children':[rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.confirm-cancel"),'onClick':handle_close_dialog,'className':"main_ui_workspace_plugins__cancel-button main_ui_workspace_plugins__button-expand"}),rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.confirm-allow"),'onClick':handle_accept_dialog,'className':"main_ui_workspace_plugins__primary-button main_ui_workspace_plugins__button-expand"})]})})]})});
});

(app.main.ui.workspace.plugins.plugins_permissions_dialog.displayName = "plugins-permissions-dialog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"plugin-permissions","plugin-permissions",-1579203559),app.main.ui.workspace.plugins.plugins_permissions_dialog);
}));
app.main.ui.workspace.plugins.plugins_permissions_updated_dialog = (function app$main$ui$workspace$plugins$plugins_permissions_updated_dialog(props_51848){
var map__51850 = rumext.v2.util.wrap_props(props_51848);
var map__51850__$1 = cljs.core.__destructure_map(map__51850);
var plugin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51850__$1,new cljs.core.Keyword(null,"plugin","plugin",-1688841923));
var on_accept = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51850__$1,new cljs.core.Keyword(null,"on-accept","on-accept",705439955));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51850__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var map__51852 = plugin;
var map__51852__$1 = cljs.core.__destructure_map(map__51852);
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51852__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51852__$1,new cljs.core.Keyword(null,"permissions","permissions",67803075));
var permissions__$1 = cljs.core.set(permissions);
var handle_accept_dialog = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"allow-plugin-permissions",new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"permissions","permissions",67803075),cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",permissions__$1)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide()], 0));

if(cljs.core.truth_(on_accept)){
return (on_accept.cljs$core$IFn$_invoke$arity$0 ? on_accept.cljs$core$IFn$_invoke$arity$0() : on_accept.call(null));
} else {
return null;
}
}));
var handle_close_dialog = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"reject-plugin-permissions",new cljs.core.Keyword(null,"host","host",-1558485167),host,new cljs.core.Keyword(null,"permissions","permissions",67803075),cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",permissions__$1)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide()], 0));

if(cljs.core.truth_(on_close)){
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__modal-dialog main_ui_workspace_plugins__plugin-permissions",'children':[rumext.v2.jsx("button",{'onClick':handle_close_dialog,'className':"main_ui_workspace_plugins__close-btn",'children':app.main.ui.workspace.plugins.close_icon}),rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.plugins.permissions-update.title",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cuerdas.core.upper(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin))], 0))}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__modal-content",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__modal-paragraph",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.permissions-update.warning")}),rumext.v2.jsx(app.main.ui.workspace.plugins.plugins_permission_list,{'permissions':permissions__$1})]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__modal-footer",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__action-buttons",'children':[rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.confirm-cancel"),'onClick':handle_close_dialog,'className':"main_ui_workspace_plugins__cancel-button main_ui_workspace_plugins__button-expand"}),rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.confirm-allow"),'onClick':handle_accept_dialog,'className':"main_ui_workspace_plugins__primary-button main_ui_workspace_plugins__button-expand"})]})})]})});
});

(app.main.ui.workspace.plugins.plugins_permissions_updated_dialog.displayName = "plugins-permissions-updated-dialog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"plugin-permissions-update","plugin-permissions-update",-1916481193),app.main.ui.workspace.plugins.plugins_permissions_updated_dialog);
}));
app.main.ui.workspace.plugins.plugins_try_out_dialog = (function app$main$ui$workspace$plugins$plugins_try_out_dialog(props_51864){
var map__51867 = rumext.v2.util.wrap_props(props_51864);
var map__51867__$1 = cljs.core.__destructure_map(map__51867);
var plugin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51867__$1,new cljs.core.Keyword(null,"plugin","plugin",-1688841923));
var on_accept = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51867__$1,new cljs.core.Keyword(null,"on-accept","on-accept",705439955));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51867__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var map__51870 = plugin;
var map__51870__$1 = cljs.core.__destructure_map(map__51870);
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51870__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51870__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51870__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var handle_accept_dialog = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"try-out-accept"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide()], 0));

if(cljs.core.truth_(on_accept)){
return (on_accept.cljs$core$IFn$_invoke$arity$0 ? on_accept.cljs$core$IFn$_invoke$arity$0() : on_accept.call(null));
} else {
return null;
}
}));
var handle_close_dialog = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"try-out-cancel"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide()], 0));

if(cljs.core.truth_(on_close)){
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__modal-dialog main_ui_workspace_plugins__plugin-try-out",'children':[rumext.v2.jsx("button",{'onClick':handle_close_dialog,'className':"main_ui_workspace_plugins__close-btn",'children':app.main.ui.workspace.plugins.close_icon}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__modal-title",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__plugin-icon",'children':rumext.v2.jsx("img",{'src':(((!((icon == null))))?app.main.ui.workspace.plugins.icon_url(host,icon):app.util.avatars.generate(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null)))})}),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.plugins.try-out.title",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cuerdas.core.upper(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin))], 0))]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__modal-content",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__modal-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.try-out.message")})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_plugins__modal-footer",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_plugins__action-buttons",'children':[rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.try-out.cancel"),'onClick':handle_close_dialog,'className':"main_ui_workspace_plugins__cancel-button main_ui_workspace_plugins__button-expand"}),rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.try-out.try"),'onClick':handle_accept_dialog,'className':"main_ui_workspace_plugins__primary-button main_ui_workspace_plugins__button-expand"})]})})]})});
});

(app.main.ui.workspace.plugins.plugins_try_out_dialog.displayName = "plugins-try-out-dialog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"plugin-try-out","plugin-try-out",235173416),app.main.ui.workspace.plugins.plugins_try_out_dialog);
}));

//# sourceMappingURL=app.main.ui.workspace.plugins.js.map
