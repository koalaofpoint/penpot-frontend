import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.common.js";
import "./app.main.data.event.js";
import "./app.main.data.exports.assets.js";
import "./app.main.data.exports.files.js";
import "./app.main.data.modal.js";
import "./app.main.data.plugins.js";
import "./app.main.data.profile.js";
import "./app.main.data.shortcuts.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.libraries.js";
import "./app.main.data.workspace.shortcuts.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.data.workspace.versions.js";
import "./app.main.features.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.dropdown_menu.js";
import "./app.main.ui.context.js";
import "./app.main.ui.dashboard.subscription.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.hooks.resize.js";
import "./app.main.ui.icons.js";
import "./app.plugins.register.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.main_menu');
app.main.ui.workspace.main_menu.help_info_menu_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$main_menu$help_info_menu_STAR_(props_55055){
var on_close = props_55055.onClose;
var layout = props_55055.layout;
var nav_to_helpc_center = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"explore-help-center-click",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace-menu:in-app"], null)));

return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1("https://help.penpot.app");
}));
var nav_to_community = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"explore-community-click",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace-menu:in-app"], null)));

return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1("https://community.penpot.app");
}));
var nav_to_youtube = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"explore-tutorials-click",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace-menu:in-app"], null)));

return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1("https://www.youtube.com/c/Penpot");
}));
var nav_to_templates = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"explore-libraries-click",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace"], null)));

return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1("https://penpot.app/libraries-templates");
}));
var nav_to_github = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"explore-github-repository-click",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace-menu:in-app"], null)));

return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1("https://github.com/penpot/penpot");
}));
var nav_to_terms = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"explore-terms-service-click",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace-menu:in-app"], null)));

return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1("https://penpot.app/terms");
}));
var nav_to_feedback = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_feedback());
}));
var plugins_QMARK_ = app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"plugins/runtime");
var show_shortcuts = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(layout)],(function (){
if(cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"collapse-left-sidebar","collapse-left-sidebar",-1883177143))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.toggle_layout_flag(new cljs.core.Keyword(null,"collapse-left-sidebar","collapse-left-sidebar",-1883177143)));
} else {
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(app.main.data.workspace.toggle_layout_flag(new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810)),cljs.core.assoc,new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace-header"));
}));
var show_release_notes = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var version = new cljs.core.Keyword(null,"main","main",-2117802661).cljs$core$IFn$_invoke$arity$1(app.config.version);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"show-release-notes",new cljs.core.Keyword(null,"version","version",425292698),version], null)));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([version], 0));

if(((app.util.keyboard.alt_QMARK_(event)) && (app.util.keyboard.mod_QMARK_(event)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"onboarding","onboarding",-1622662800)], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"release-notes","release-notes",1238210686),new cljs.core.Keyword(null,"version","version",425292698),version], null)));
}
}));
return rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_STAR_,{'show':true,'onClose':on_close,'className':"main_ui_workspace_main_menu__sub-menu"+" "+(cljs.core.truth_(plugins_QMARK_)?"main_ui_workspace_main_menu__help-info":"")+" "+((cljs.core.not(plugins_QMARK_))?"main_ui_workspace_main_menu__help-info-old":""),'children':[rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':nav_to_helpc_center,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (nav_to_helpc_center.cljs$core$IFn$_invoke$arity$1 ? nav_to_helpc_center.cljs$core$IFn$_invoke$arity$1(event) : nav_to_helpc_center.call(null,event));
} else {
return null;
}
}),'id':"file-menu-help-center",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.help-center")})}),rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':nav_to_community,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (nav_to_community.cljs$core$IFn$_invoke$arity$1 ? nav_to_community.cljs$core$IFn$_invoke$arity$1(event) : nav_to_community.call(null,event));
} else {
return null;
}
}),'id':"file-menu-community",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.community")})}),rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':nav_to_youtube,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (nav_to_youtube.cljs$core$IFn$_invoke$arity$1 ? nav_to_youtube.cljs$core$IFn$_invoke$arity$1(event) : nav_to_youtube.call(null,event));
} else {
return null;
}
}),'id':"file-menu-youtube",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.tutorials")})}),rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':show_release_notes,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (show_release_notes.cljs$core$IFn$_invoke$arity$1 ? show_release_notes.cljs$core$IFn$_invoke$arity$1(event) : show_release_notes.call(null,event));
} else {
return null;
}
}),'id':"file-menu-release-notes",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.release-notes")})}),rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':nav_to_templates,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (nav_to_templates.cljs$core$IFn$_invoke$arity$1 ? nav_to_templates.cljs$core$IFn$_invoke$arity$1(event) : nav_to_templates.call(null,event));
} else {
return null;
}
}),'id':"file-menu-templates",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.libraries-and-templates")})}),rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':nav_to_github,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (nav_to_github.cljs$core$IFn$_invoke$arity$1 ? nav_to_github.cljs$core$IFn$_invoke$arity$1(event) : nav_to_github.call(null,event));
} else {
return null;
}
}),'id':"file-menu-github",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.github-repo")})}),rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':nav_to_terms,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (nav_to_terms.cljs$core$IFn$_invoke$arity$1 ? nav_to_terms.cljs$core$IFn$_invoke$arity$1(event) : nav_to_terms.call(null,event));
} else {
return null;
}
}),'id':"file-menu-terms",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.terms-of-service")})}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':show_shortcuts,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (show_shortcuts.cljs$core$IFn$_invoke$arity$1 ? show_shortcuts.cljs$core$IFn$_invoke$arity$1(event) : show_shortcuts.call(null,event));
} else {
return null;
}
}),'id':"file-menu-shortcuts",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("label.shortcuts")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut-key",'children':sc},sc));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"show-shortcuts","show-shortcuts",749740024))))})]}),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"user-feedback","user-feedback",89199827)))?rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':nav_to_feedback,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (nav_to_feedback.cljs$core$IFn$_invoke$arity$1 ? nav_to_feedback.cljs$core$IFn$_invoke$arity$1(event) : nav_to_feedback.call(null,event));
} else {
return null;
}
}),'id':"file-menu-feedback",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__feedback"+" "+"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.give-feedback")})}):null)]});
}));

(app.main.ui.workspace.main_menu.help_info_menu_STAR_.displayName = "help-info-menu*");

app.main.ui.workspace.main_menu.preferences_menu_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$main_menu$preferences_menu_STAR_(props_55068){
var toggle_theme = props_55068.toggleTheme;
var profile = props_55068.profile;
var on_close = props_55068.onClose;
var layout = props_55068.layout;
var toggle_flag = props_55068.toggleFlag;
var show_nudge_options = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"nudge-option","nudge-option",-726591721)], null));
}));
return rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_STAR_,{'show':true,'className':"main_ui_workspace_main_menu__sub-menu"+" "+"main_ui_workspace_main_menu__preferences",'onClose':on_close,'children':[rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':toggle_flag,'className':"main_ui_workspace_main_menu__submenu-item",'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (toggle_flag.cljs$core$IFn$_invoke$arity$1 ? toggle_flag.cljs$core$IFn$_invoke$arity$1(event) : toggle_flag.call(null,event));
} else {
return null;
}
}),'data-testid':"scale-text",'id':"file-menu-scale-text",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"scale-text","scale-text",302781380)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.disable-scale-content"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.enable-scale-content"))}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut-key",'children':sc},sc));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"scale","scale",-230427353))))})]}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':toggle_flag,'className':"main_ui_workspace_main_menu__submenu-item",'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (toggle_flag.cljs$core$IFn$_invoke$arity$1 ? toggle_flag.cljs$core$IFn$_invoke$arity$1(event) : toggle_flag.call(null,event));
} else {
return null;
}
}),'data-testid':"snap-ruler-guides",'id':"file-menu-snap-ruler-guides",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"snap-ruler-guides","snap-ruler-guides",-1478768942)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.disable-snap-ruler-guides"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.enable-snap-ruler-guides"))}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut-key",'children':sc},sc));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-snap-ruler-guide","toggle-snap-ruler-guide",-1040178651))))})]}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':toggle_flag,'className':"main_ui_workspace_main_menu__submenu-item",'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (toggle_flag.cljs$core$IFn$_invoke$arity$1 ? toggle_flag.cljs$core$IFn$_invoke$arity$1(event) : toggle_flag.call(null,event));
} else {
return null;
}
}),'data-testid':"snap-guides",'id':"file-menu-snap-guides",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"snap-guides","snap-guides",-1395069816)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.disable-snap-guides"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.enable-snap-guides"))}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut-key",'children':sc},sc));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-snap-guides","toggle-snap-guides",1054346098))))})]}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':toggle_flag,'className':"main_ui_workspace_main_menu__submenu-item",'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (toggle_flag.cljs$core$IFn$_invoke$arity$1 ? toggle_flag.cljs$core$IFn$_invoke$arity$1(event) : toggle_flag.call(null,event));
} else {
return null;
}
}),'data-testid':"dynamic-alignment",'id':"file-menu-dynamic-alignment",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"dynamic-alignment","dynamic-alignment",-1699946765)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.disable-dynamic-alignment"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.enable-dynamic-alignment"))}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut-key",'children':sc},sc));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-alignment","toggle-alignment",-428434056))))})]}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':toggle_flag,'className':"main_ui_workspace_main_menu__submenu-item",'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (toggle_flag.cljs$core$IFn$_invoke$arity$1 ? toggle_flag.cljs$core$IFn$_invoke$arity$1(event) : toggle_flag.call(null,event));
} else {
return null;
}
}),'data-testid':"snap-pixel-grid",'id':"file-menu-pixel-grid",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"snap-pixel-grid","snap-pixel-grid",-1263132602)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.disable-snap-pixel-grid"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.enable-snap-pixel-grid"))}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut-key",'children':sc},sc));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"snap-pixel-grid","snap-pixel-grid",-1263132602))))})]}),rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':show_nudge_options,'className':"main_ui_workspace_main_menu__submenu-item",'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (show_nudge_options.cljs$core$IFn$_invoke$arity$1 ? show_nudge_options.cljs$core$IFn$_invoke$arity$1(event) : show_nudge_options.call(null,event));
} else {
return null;
}
}),'data-testid':"snap-pixel-grid",'id':"file-menu-nudge",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.nudge-title")})}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':toggle_theme,'className':"main_ui_workspace_main_menu__submenu-item",'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (toggle_theme.cljs$core$IFn$_invoke$arity$1 ? toggle_theme.cljs$core$IFn$_invoke$arity$1(event) : toggle_theme.call(null,event));
} else {
return null;
}
}),'data-testid':"toggle-theme",'id':"file-menu-toggle-theme",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':(function (){var G__55069 = new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(profile);
switch (G__55069) {
case "dark":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.toggle-light-theme");

break;
case "light":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.toggle-system-theme");

break;
case "system":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.toggle-dark-theme");

break;
default:
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.toggle-light-theme");

}
})()}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut-key",'children':sc},sc));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-theme","toggle-theme",-91905156))))})]})]});
}));

(app.main.ui.workspace.main_menu.preferences_menu_STAR_.displayName = "preferences-menu*");

app.main.ui.workspace.main_menu.view_menu_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$main_menu$view_menu_STAR_(props_55070){
var on_close = props_55070.onClose;
var layout = props_55070.layout;
var toggle_flag = props_55070.toggleFlag;
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var toggle_color_palette = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.ui.hooks.resize.set_resize_type_BANG_(new cljs.core.Keyword(null,"bottom","bottom",-1550509018));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.remove_layout_flag(new cljs.core.Keyword(null,"textpalette","textpalette",-1296342868)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(app.main.data.workspace.toggle_layout_flag(new cljs.core.Keyword(null,"colorpalette","colorpalette",-2142723517)),cljs.core.assoc,new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace-menu")], 0));
}));
var toggle_text_palette = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.ui.hooks.resize.set_resize_type_BANG_(new cljs.core.Keyword(null,"bottom","bottom",-1550509018));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.remove_layout_flag(new cljs.core.Keyword(null,"colorpalette","colorpalette",-2142723517)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(app.main.data.workspace.toggle_layout_flag(new cljs.core.Keyword(null,"textpalette","textpalette",-1296342868)),cljs.core.assoc,new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace-menu")], 0));
}));
return rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_STAR_,{'show':true,'className':"main_ui_workspace_main_menu__sub-menu"+" "+"main_ui_workspace_main_menu__view",'onClose':on_close,'children':[rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':toggle_flag,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (toggle_flag.cljs$core$IFn$_invoke$arity$1 ? toggle_flag.cljs$core$IFn$_invoke$arity$1(event) : toggle_flag.call(null,event));
} else {
return null;
}
}),'data-testid':"rulers",'id':"file-menu-rulers",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"rulers","rulers",756731282)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.hide-rules"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.show-rules"))}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut-key",'children':sc},sc));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-rulers","toggle-rulers",228269563))))})]}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':toggle_flag,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (toggle_flag.cljs$core$IFn$_invoke$arity$1 ? toggle_flag.cljs$core$IFn$_invoke$arity$1(event) : toggle_flag.call(null,event));
} else {
return null;
}
}),'data-testid':"display-guides",'id':"file-menu-guides",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"display-guides","display-guides",-1025684907)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.hide-guides"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.show-guides"))}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut-key",'children':sc},sc));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-guides","toggle-guides",-17172503))))})]}),((read_only_QMARK_)?null:rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':toggle_color_palette,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (toggle_color_palette.cljs$core$IFn$_invoke$arity$1 ? toggle_color_palette.cljs$core$IFn$_invoke$arity$1(event) : toggle_color_palette.call(null,event));
} else {
return null;
}
}),'id':"file-menu-color-palette",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"colorpalette","colorpalette",-2142723517)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.hide-palette"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.show-palette"))}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut-key",'children':sc},sc));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-colorpalette","toggle-colorpalette",-172926492))))})]}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':toggle_text_palette,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (toggle_text_palette.cljs$core$IFn$_invoke$arity$1 ? toggle_text_palette.cljs$core$IFn$_invoke$arity$1(event) : toggle_text_palette.call(null,event));
} else {
return null;
}
}),'id':"file-menu-text-palette",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"textpalette","textpalette",-1296342868)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.hide-textpalette"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.show-textpalette"))}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut-key",'children':sc},sc));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-textpalette","toggle-textpalette",-1581028492))))})]})]})),rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':toggle_flag,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (toggle_flag.cljs$core$IFn$_invoke$arity$1 ? toggle_flag.cljs$core$IFn$_invoke$arity$1(event) : toggle_flag.call(null,event));
} else {
return null;
}
}),'data-testid':"display-artboard-names",'id':"file-menu-artboards",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"display-artboard-names","display-artboard-names",-579016150)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.hide-artboard-names"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.show-artboard-names"))})}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':toggle_flag,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (toggle_flag.cljs$core$IFn$_invoke$arity$1 ? toggle_flag.cljs$core$IFn$_invoke$arity$1(event) : toggle_flag.call(null,event));
} else {
return null;
}
}),'data-testid':"show-pixel-grid",'id':"file-menu-pixel-grid",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"show-pixel-grid","show-pixel-grid",-247932281)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.hide-pixel-grid"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.show-pixel-grid"))}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut-key",'children':sc},sc));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"show-pixel-grid","show-pixel-grid",-247932281))))})]}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':toggle_flag,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (toggle_flag.cljs$core$IFn$_invoke$arity$1 ? toggle_flag.cljs$core$IFn$_invoke$arity$1(event) : toggle_flag.call(null,event));
} else {
return null;
}
}),'data-testid':"hide-ui",'id':"file-menu-hide-ui",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.hide-ui")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut-key",'children':sc},sc));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"hide-ui","hide-ui",834012905))))})]})]});
}));

(app.main.ui.workspace.main_menu.view_menu_STAR_.displayName = "view-menu*");

app.main.ui.workspace.main_menu.edit_menu_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$main_menu$edit_menu_STAR_(props_55071){
var on_close = props_55071.onClose;
var select_all = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.select_all());
}));
var undo = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.undo);
}));
var redo = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.redo);
}));
var perms = rumext.v2.use_ctx(app.main.ui.context.permissions);
var can_edit = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(perms);
return rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_STAR_,{'show':true,'className':"main_ui_workspace_main_menu__sub-menu"+" "+"main_ui_workspace_main_menu__edit",'onClose':on_close,'children':[rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':select_all,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (select_all.cljs$core$IFn$_invoke$arity$1 ? select_all.cljs$core$IFn$_invoke$arity$1(event) : select_all.call(null,event));
} else {
return null;
}
}),'id':"file-menu-select-all",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.select-all")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut-key",'children':sc},sc));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"select-all","select-all",-1382041584))))})]}),(cljs.core.truth_(can_edit)?rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':undo,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (undo.cljs$core$IFn$_invoke$arity$1 ? undo.cljs$core$IFn$_invoke$arity$1(event) : undo.call(null,event));
} else {
return null;
}
}),'id':"file-menu-undo",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.undo")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut-key",'children':sc},sc));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"undo","undo",-1818036302))))})]}):null),(cljs.core.truth_(can_edit)?rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':redo,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (redo.cljs$core$IFn$_invoke$arity$1 ? redo.cljs$core$IFn$_invoke$arity$1(event) : redo.call(null,event));
} else {
return null;
}
}),'id':"file-menu-redo",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.redo")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut-key",'children':sc},sc));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"redo","redo",501190664))))})]}):null)]});
}));

(app.main.ui.workspace.main_menu.edit_menu_STAR_.displayName = "edit-menu*");

app.main.ui.workspace.main_menu.file_menu_STAR_ = (function app$main$ui$workspace$main_menu$file_menu_STAR_(props_55078){
var on_close = props_55078.onClose;
var file = props_55078.file;
var file_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file);
var shared_QMARK_ = new cljs.core.Keyword(null,"is-shared","is-shared",2126511925).cljs$core$IFn$_invoke$arity$1(file);
var objects = rumext.v2.deref(app.main.refs.workspace_page_objects);
var selected = rumext.v2.deref(app.main.refs.selected_shapes);
var all_frames = cljs.core.filterv(app.common.files.helpers.frame_shape_QMARK_,app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$2(objects,app.common.uuid.zero));
var selected_frames = cljs.core.filterv((function (p1__55077_SHARP_){
return cljs.core.contains_QMARK_(selected,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55077_SHARP_));
}),all_frames);
var frames = ((cljs.core.seq(selected_frames))?selected_frames:all_frames);
var perms = rumext.v2.use_ctx(app.main.ui.context.permissions);
var can_edit = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(perms);
var on_remove_shared = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"delete-shared-libraries","delete-shared-libraries",769506220),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"unpublish","unpublish",-1397708862),new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.PersistentHashSet.createAsIfByAssoc([file_id]),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.set_file_shared(file_id,false));
}),new cljs.core.Keyword(null,"count-libraries","count-libraries",-1908764886),(1)], null));
}));
var on_remove_shared_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_remove_shared)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_remove_shared.cljs$core$IFn$_invoke$arity$1 ? on_remove_shared.cljs$core$IFn$_invoke$arity$1(event) : on_remove_shared.call(null,event));
} else {
return null;
}
}));
var on_add_shared = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (_event){
var on_accept = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.set_file_shared(file_id,true));
});
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.show_shared_dialog(file_id,on_accept));
}));
var on_add_shared_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_add_shared)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_add_shared.cljs$core$IFn$_invoke$arity$1 ? on_add_shared.cljs$core$IFn$_invoke$arity$1(event) : on_add_shared.call(null,event));
} else {
return null;
}
}));
var on_show_version_history = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.toggle_layout_flag(new cljs.core.Keyword(null,"document-history","document-history",1908608999)));
}));
var on_show_version_history_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_show_version_history)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_show_version_history.cljs$core$IFn$_invoke$arity$1 ? on_show_version_history.cljs$core$IFn$_invoke$arity$1(event) : on_show_version_history.call(null,event));
} else {
return null;
}
}));
var on_pin_version = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.versions.create_version());
}));
var on_pin_version_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_pin_version)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_pin_version.cljs$core$IFn$_invoke$arity$1 ? on_pin_version.cljs$core$IFn$_invoke$arity$1(event) : on_pin_version.call(null,event));
} else {
return null;
}
}));
var on_export_shapes = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.exports.assets.show_workspace_export_dialog(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"origin","origin",1037372088),"workspace:menu"], null)));
}));
var on_export_shapes_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_export_shapes)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_export_shapes.cljs$core$IFn$_invoke$arity$1 ? on_export_shapes.cljs$core$IFn$_invoke$arity$1(event) : on_export_shapes.call(null,event));
} else {
return null;
}
}));
var on_export_file = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file)],(function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(app.main.data.exports.files.open_export_dialog(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file], null)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace"], null)));
}));
var on_export_file_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_export_file)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_export_file.cljs$core$IFn$_invoke$arity$1 ? on_export_file.cljs$core$IFn$_invoke$arity$1(event) : on_export_file.call(null,event));
} else {
return null;
}
}));
var on_export_frames = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frames)],(function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.exports.assets.show_workspace_export_frames_dialog(cljs.core.reverse(frames)));
}));
var on_export_frames_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_export_frames)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_export_frames.cljs$core$IFn$_invoke$arity$1 ? on_export_frames.cljs$core$IFn$_invoke$arity$1(event) : on_export_frames.call(null,event));
} else {
return null;
}
}));
return rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_STAR_,{'show':true,'className':"main_ui_workspace_main_menu__sub-menu"+" "+"main_ui_workspace_main_menu__file",'onClose':on_close,'children':[((shared_QMARK_)?(cljs.core.truth_(can_edit)?rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':on_remove_shared,'onKeyDown':on_remove_shared_key_down,'id':"file-menu-remove-shared",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.unpublish-shared")})}):null):(cljs.core.truth_(can_edit)?rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':on_add_shared,'onKeyDown':on_add_shared_key_down,'id':"file-menu-add-shared",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.add-shared")})}):null)),(cljs.core.truth_(can_edit)?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_main_menu__separator"}),rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':on_pin_version,'onKeyDown':on_pin_version_key_down,'id':"file-menu-create-version",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.create-version-menu")})}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':on_show_version_history,'onKeyDown':on_show_version_history_key_down,'id':"file-menu-show-version-history",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.show-version-history")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut-key",'children':sc},sc));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-history","toggle-history",-1813993552))))})]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_main_menu__separator"})]}):null),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':on_export_shapes,'onKeyDown':on_export_shapes_key_down,'id':"file-menu-export-shapes",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.export-shapes")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut-key",'children':sc},sc));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"export-shapes","export-shapes",341502938))))})]}),rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':on_export_file,'onKeyDown':on_export_file_key_down,'data-format':"binfile-v3",'id':"file-menu-binary-file",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.download-binary-file")})}),((cljs.core.seq(frames))?rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__submenu-item",'onClick':on_export_frames,'onKeyDown':on_export_frames_key_down,'id':"file-menu-export-frames",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.export-frames")})}):null)]});
});

(app.main.ui.workspace.main_menu.file_menu_STAR_.displayName = "file-menu*");

app.main.ui.workspace.main_menu.plugins_menu_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$main_menu$plugins_menu_STAR_(props_55079){
var open_plugins = props_55079.openPlugins;
var on_close = props_55079.onClose;
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"plugins/runtime"))){
var plugins = app.plugins.register.plugins_list();
var user_can_edit_QMARK_ = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.refs.permissions));
var permissions_peek = cljs.core.deref(app.main.refs.plugins_permissions_peek);
return rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_STAR_,{'show':true,'className':"main_ui_workspace_main_menu__sub-menu"+" "+"main_ui_workspace_main_menu__plugins",'onClose':on_close,'children':[rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':open_plugins,'className':"main_ui_workspace_main_menu__submenu-item",'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (open_plugins.cljs$core$IFn$_invoke$arity$1 ? open_plugins.cljs$core$IFn$_invoke$arity$1(event) : open_plugins.call(null,event));
} else {
return null;
}
}),'data-testid':"open-plugins",'id':"file-menu-open-plugins",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.menu.plugins-manager")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__shortcut-key",'children':sc},sc));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"plugins","plugins",1900073717))))})]}),((app.common.data.not_empty_QMARK_(plugins))?rumext.v2.jsx("div",{'className':"main_ui_workspace_main_menu__separator"}):null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55080){
var vec__55081 = p__55080;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55081,(0),null);
var map__55084 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55081,(1),null);
var map__55084__$1 = cljs.core.__destructure_map(map__55084);
var manifest = map__55084__$1;
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55084__$1,new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55084__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55084__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55084__$1,new cljs.core.Keyword(null,"permissions","permissions",67803075));
out_arr__35152__auto__.push((function (){var permissions__$1 = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(permissions_peek,plugin_id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return permissions;
}
})();
var is_edition_plugin_QMARK_ = ((cljs.core.contains_QMARK_(permissions__$1,"content:write")) || (cljs.core.contains_QMARK_(permissions__$1,"library:write")));
var can_open_QMARK_ = (function (){var or__5025__auto__ = user_can_edit_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (!(is_edition_plugin_QMARK_));
}
})();
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(can_open_QMARK_),rumext.v2.adapt(name),rumext.v2.adapt(host),rumext.v2.adapt(manifest),rumext.v2.adapt(user_can_edit_QMARK_)],(function (event){
if(cljs.core.truth_(can_open_QMARK_)){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"start-plugin",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:menu",new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"host","host",-1558485167),host], null)));

return app.main.data.plugins.open_plugin_BANG_(manifest,user_can_edit_QMARK_);
} else {
return app.util.dom.stop_propagation(event);
}
}));
var on_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(can_open_QMARK_),rumext.v2.adapt(name),rumext.v2.adapt(host),rumext.v2.adapt(manifest),rumext.v2.adapt(user_can_edit_QMARK_)],(function (event){
if(cljs.core.truth_(can_open_QMARK_)){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"start-plugin",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:menu",new cljs.core.Keyword(null,"name","name",1843675177),name,new cljs.core.Keyword(null,"host","host",-1558485167),host], null)));

return app.main.data.plugins.open_plugin_BANG_(manifest,user_can_edit_QMARK_);
} else {
return null;
}
} else {
return null;
}
}));
return rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':on_click,'className':"main_ui_workspace_main_menu__submenu-item"+" "+((cljs.core.not(can_open_QMARK_))?"main_ui_workspace_main_menu__menu-disabled":""),'onKeyDown':on_key_down,'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':name}),(cljs.core.truth_(can_open_QMARK_)?null:rumext.v2.jsx("span",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.error.need-editor"),'className':"main_ui_workspace_main_menu__item-icon",'children':app.main.ui.icons.help}))]},""+"plugins-menu-"+(idx ?? ""));
})());

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(plugins))]});
} else {
return null;
}
}));

(app.main.ui.workspace.main_menu.plugins_menu_STAR_.displayName = "plugins-menu*");

app.main.ui.workspace.main_menu.menu = (function app$main$ui$workspace$main_menu$menu(props_55086){
var profile = props_55086.profile;
var layout = props_55086.layout;
var file = props_55086.file;
var show_menu_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var show_menu_QMARK_ = cljs.core.deref(show_menu_STAR_);
var sub_menu_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var sub_menu = cljs.core.deref(sub_menu_STAR_);
var open_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return cljs.core.reset_BANG_(show_menu_STAR_,true);
}));
var close_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return cljs.core.reset_BANG_(show_menu_STAR_,false);
}));
var close_sub_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return cljs.core.reset_BANG_(sub_menu_STAR_,null);
}));
var close_all_menus = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
cljs.core.reset_BANG_(show_menu_STAR_,false);

return cljs.core.reset_BANG_(sub_menu_STAR_,null);
}));
var on_menu_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

var menu__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"testid"));
return cljs.core.reset_BANG_(sub_menu_STAR_,menu__$1);
}));
var on_power_up_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"explore-pricing-click",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace-menu"], null)));

return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1("https://penpot.app/pricing");
}));
var toggle_flag = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

var flag = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"testid"));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(app.main.data.workspace.toggle_layout_flag(flag),cljs.core.assoc,new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace-menu"));

cljs.core.reset_BANG_(show_menu_STAR_,false);

return cljs.core.reset_BANG_(sub_menu_STAR_,null);
}));
var toggle_theme = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.profile.toggle_theme());
}));
var open_plugins_manager = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

cljs.core.reset_BANG_(show_menu_STAR_,false);

cljs.core.reset_BANG_(sub_menu_STAR_,null);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"open-plugins-manager",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:menu"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugin-management","plugin-management",-1941842397),cljs.core.PersistentArrayMap.EMPTY)], 0));
}));
var subscription = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(profile));
var subscription_type = app.main.ui.dashboard.subscription.get_subscription_type(subscription);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var disposable = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2(close_all_menus,beicon.v2.core.filter((function (p1__55085_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178),p1__55085_SHARP_);
}),app.main.store.stream));
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(beicon.v2.core.dispose_BANG_,disposable);
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("shortcut-subsection.main-menu"),'onClick':open_menu,'icon':app.main.ui.ds.foundations.assets.icon.menu}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_STAR_,{'show':show_menu_QMARK_,'id':"workspace-menu",'onClose':close_menu,'className':"main_ui_workspace_main_menu__menu",'children':[rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__menu-item",'onClick':on_menu_click,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_menu_click.cljs$core$IFn$_invoke$arity$1 ? on_menu_click.cljs$core$IFn$_invoke$arity$1(event) : on_menu_click.call(null,event));
} else {
return null;
}
}),'onPointerEnter':on_menu_click,'data-testid':"file",'id':"file-menu-file",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.option.file")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__open-arrow",'children':app.main.ui.icons.arrow})]}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__menu-item",'onClick':on_menu_click,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_menu_click.cljs$core$IFn$_invoke$arity$1 ? on_menu_click.cljs$core$IFn$_invoke$arity$1(event) : on_menu_click.call(null,event));
} else {
return null;
}
}),'onPointerEnter':on_menu_click,'data-testid':"edit",'id':"file-menu-edit",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.option.edit")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__open-arrow",'children':app.main.ui.icons.arrow})]}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__menu-item",'onClick':on_menu_click,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_menu_click.cljs$core$IFn$_invoke$arity$1 ? on_menu_click.cljs$core$IFn$_invoke$arity$1(event) : on_menu_click.call(null,event));
} else {
return null;
}
}),'onPointerEnter':on_menu_click,'data-testid':"view",'id':"file-menu-view",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.option.view")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__open-arrow",'children':app.main.ui.icons.arrow})]}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__menu-item",'onClick':on_menu_click,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_menu_click.cljs$core$IFn$_invoke$arity$1 ? on_menu_click.cljs$core$IFn$_invoke$arity$1(event) : on_menu_click.call(null,event));
} else {
return null;
}
}),'onPointerEnter':on_menu_click,'data-testid':"preferences",'id':"file-menu-preferences",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.option.preferences")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__open-arrow",'children':app.main.ui.icons.arrow})]}),(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"plugins/runtime"))?rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__menu-item",'onClick':on_menu_click,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_menu_click.cljs$core$IFn$_invoke$arity$1 ? on_menu_click.cljs$core$IFn$_invoke$arity$1(event) : on_menu_click.call(null,event));
} else {
return null;
}
}),'onPointerEnter':on_menu_click,'data-testid':"plugins",'id':"file-menu-plugins",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.menu.title")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__open-arrow",'children':app.main.ui.icons.arrow})]}):null),rumext.v2.jsx("div",{'className':"main_ui_workspace_main_menu__separator"}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__menu-item",'onClick':on_menu_click,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_menu_click.cljs$core$IFn$_invoke$arity$1 ? on_menu_click.cljs$core$IFn$_invoke$arity$1(event) : on_menu_click.call(null,event));
} else {
return null;
}
}),'onPointerEnter':on_menu_click,'data-testid':"help-info",'id':"file-menu-help-info",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.menu.option.help-info")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__open-arrow",'children':app.main.ui.icons.arrow})]}),((((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("enterprise",subscription_type))))?rumext.v2.jsx(app.main.ui.dashboard.subscription.main_menu_power_up_STAR_,{'closeSubMenu':close_sub_menu}):null),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"subscriptions-old","subscriptions-old",-338159584)))?rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_main_menu__menu-item",'onClick':on_power_up_click,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_power_up_click.cljs$core$IFn$_invoke$arity$0 ? on_power_up_click.cljs$core$IFn$_invoke$arity$0() : on_power_up_click.call(null));
} else {
return null;
}
}),'onPointerEnter':close_sub_menu,'id':"file-menu-power-up",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_main_menu__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.workspace.header.menu.option.power-up")})}):null)]}),(function (){var G__55087 = sub_menu;
var G__55087__$1 = (((G__55087 instanceof cljs.core.Keyword))?G__55087.fqn:null);
switch (G__55087__$1) {
case "file":
return rumext.v2.jsx(app.main.ui.workspace.main_menu.file_menu_STAR_,{'file':file,'onClose':close_sub_menu});

break;
case "edit":
return rumext.v2.jsx(app.main.ui.workspace.main_menu.edit_menu_STAR_,{'onClose':close_sub_menu});

break;
case "view":
return rumext.v2.jsx(app.main.ui.workspace.main_menu.view_menu_STAR_,{'layout':layout,'toggleFlag':toggle_flag,'onClose':close_sub_menu});

break;
case "preferences":
return rumext.v2.jsx(app.main.ui.workspace.main_menu.preferences_menu_STAR_,{'layout':layout,'profile':profile,'toggleFlag':toggle_flag,'toggleTheme':toggle_theme,'onClose':close_sub_menu});

break;
case "plugins":
return rumext.v2.jsx(app.main.ui.workspace.main_menu.plugins_menu_STAR_,{'openPlugins':open_plugins_manager,'onClose':close_sub_menu});

break;
case "help-info":
return rumext.v2.jsx(app.main.ui.workspace.main_menu.help_info_menu_STAR_,{'layout':layout,'onClose':close_sub_menu});

break;
default:
return null;

}
})()]});
});

(app.main.ui.workspace.main_menu.menu.displayName = "menu");


//# sourceMappingURL=app.main.ui.workspace.main_menu.js.map
