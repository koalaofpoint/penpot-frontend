import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.types.tokens_lib.js";
import "./app.config.js";
import "./app.main.data.modal.js";
import "./app.main.refs.js";
import "./app.main.ui.components.dropdown_menu.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.hooks.resize.js";
import "./app.main.ui.workspace.tokens.management.js";
import "./app.main.ui.workspace.tokens.sets.js";
import "./app.main.ui.workspace.tokens.sets.context_menu.js";
import "./app.main.ui.workspace.tokens.sets.lists.js";
import "./app.main.ui.workspace.tokens.themes.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
import "./shadow.resource.js";
goog.provide('app.main.ui.workspace.tokens.sidebar');
app.main.ui.workspace.tokens.sidebar.token_sets_list_STAR_ = (function app$main$ui$workspace$tokens$sidebar$token_sets_list_STAR_(props_56376){
var tokens_lib = props_56376.tokensLib;
var token_sets = (function (){var G__56378 = tokens_lib;
if((G__56378 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_set_tree(G__56378);
}
})();
var selected_token_set_id = rumext.v2.deref(app.main.refs.selected_token_set_id);
var map__56377 = rumext.v2.deref(app.main.refs.workspace_tokens);
var map__56377__$1 = cljs.core.__destructure_map(map__56377);
var token_set_edition_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56377__$1,new cljs.core.Keyword(null,"token-set-edition-id","token-set-edition-id",-457766729));
var token_set_new_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56377__$1,new cljs.core.Keyword(null,"token-set-new-path","token-set-new-path",-718647152));
if(((cljs.core.empty_QMARK_(token_sets)) && (cljs.core.not(token_set_new_path)))){
if(cljs.core.truth_(token_set_new_path)){
return null;
} else {
return rumext.v2.jsx(app.main.ui.workspace.tokens.sets.lists.inline_add_button_STAR_,{});
}
} else {
return rumext.v2.jsx(app.main.ui.hooks.sortable_container_STAR_,{'children':rumext.v2.jsx(app.main.ui.workspace.tokens.sets.sets_list_STAR_,{'tokensLib':tokens_lib,'newPath':token_set_new_path,'editionId':token_set_edition_id,'selected':selected_token_set_id})});
}
});

(app.main.ui.workspace.tokens.sidebar.token_sets_list_STAR_.displayName = "token-sets-list*");

app.main.ui.workspace.tokens.sidebar.token_management_section_STAR_ = (function app$main$ui$workspace$tokens$sidebar$token_management_section_STAR_(props_56379){
var resize_height = props_56379.resizeHeight;
var props = props_56379;
var can_edit_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.can_edit_QMARK_);
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.tokens.sets.context_menu.token_set_context_menu_STAR_,{}),rumext.v2.jsxs("section",{'data-testid':"token-management-sidebar",'style':{'--resize-height':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(resize_height),"px"].join('')},'className':"main_ui_workspace_tokens_sidebar__token-management-section-wrapper",'children':[rumext.v2.jsx(app.main.ui.workspace.tokens.themes.themes_header_STAR_,{}),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_sidebar__sidebar-header",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.sets"),'children':(cljs.core.truth_(can_edit_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.tokens.sets.lists.add_button_STAR_,{}):null)})}),rumext.v2.create_element(app.main.ui.workspace.tokens.sidebar.token_sets_list_STAR_,props)]})]});
});

(app.main.ui.workspace.tokens.sidebar.token_management_section_STAR_.displayName = "token-management-section*");

app.main.ui.workspace.tokens.sidebar.import_export_button_STAR_ = (function app$main$ui$workspace$tokens$sidebar$import_export_button_STAR_(props_56380){
var show_menu_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var show_menu_QMARK_ = cljs.core.deref(show_menu_STAR_);
var can_edit_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.can_edit_QMARK_);
var open_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return cljs.core.reset_BANG_(show_menu_STAR_,true);
}));
var close_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return cljs.core.reset_BANG_(show_menu_STAR_,false);
}));
var on_export = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tokens","export","tokens/export",-125347700),cljs.core.PersistentArrayMap.EMPTY);
}));
var on_modal_show = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tokens","import","tokens/import",-1680554363),cljs.core.PersistentArrayMap.EMPTY);
}));
var open_settings_modal = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tokens","settings","tokens/settings",150998605),cljs.core.PersistentArrayMap.EMPTY);
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_sidebar__import-export-button-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'onClick':open_menu,'type':"button",'icon':app.main.ui.ds.foundations.assets.icon.import_export,'variant':"secondary",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.tools")}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_STAR_,{'show':show_menu_QMARK_,'onClose':close_menu,'id':"tokens-menu",'className':"main_ui_workspace_tokens_sidebar__import-export-menu",'children':[(cljs.core.truth_(can_edit_QMARK_)?rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_tokens_sidebar__import-export-menu-item",'onClick':on_modal_show,'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_sidebar__import-menu-item",'children':rumext.v2.jsx("div",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.import")})})}):null),rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_workspace_tokens_sidebar__import-export-menu-item",'onClick':on_export,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.export")})]}),(cljs.core.truth_((function (){var and__5023__auto__ = can_edit_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"token-base-font-size","token-base-font-size",-1444587637));
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"secondary",'icon':app.main.ui.ds.foundations.assets.icon.settings,'aria-label':"Settings",'onClick':open_settings_modal}):null)]});
});

(app.main.ui.workspace.tokens.sidebar.import_export_button_STAR_.displayName = "import-export-button*");

app.main.ui.workspace.tokens.sidebar.tokens_sidebar_tab_STAR_ = (function app$main$ui$workspace$tokens$sidebar$tokens_sidebar_tab_STAR_(props_56381){
var tokens_lib = props_56381.tokensLib;
var props = props_56381;
var map__56382 = app.main.ui.hooks.resize.use_resize_hook.cljs$core$IFn$_invoke$arity$7(new cljs.core.Keyword(null,"tokens","tokens",-818939304),(200),(38),"0.6",new cljs.core.Keyword(null,"y","y",-1757859776),false,null);
var map__56382__$1 = cljs.core.__destructure_map(map__56382);
var on_pointer_down_pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56382__$1,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138));
var on_lost_pointer_capture_pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56382__$1,new cljs.core.Keyword(null,"on-lost-pointer-capture","on-lost-pointer-capture",-1554883134));
var on_pointer_move_pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56382__$1,new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695));
var size_pages_opened = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56382__$1,new cljs.core.Keyword(null,"size","size",1098693007));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_sidebar__sidebar-wrapper",'children':[rumext.v2.jsx(app.main.ui.workspace.tokens.sidebar.token_management_section_STAR_,{'resizeHeight':size_pages_opened,'tokensLib':tokens_lib}),rumext.v2.jsxs("article",{'data-testid':"tokens-sidebar",'className':"main_ui_workspace_tokens_sidebar__tokens-section-wrapper",'children':[rumext.v2.jsx("div",{'onPointerDown':on_pointer_down_pages,'onLostPointerCapture':on_lost_pointer_capture_pages,'onPointerMove':on_pointer_move_pages,'className':"main_ui_workspace_tokens_sidebar__resize-area-horiz",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_sidebar__resize-handle-horiz"})}),rumext.v2.create_element(app.main.ui.workspace.tokens.management.tokens_section_STAR_,props)]}),rumext.v2.jsx(app.main.ui.workspace.tokens.sidebar.import_export_button_STAR_,{})]});
});

(app.main.ui.workspace.tokens.sidebar.tokens_sidebar_tab_STAR_.displayName = "tokens-sidebar-tab*");


//# sourceMappingURL=app.main.ui.workspace.tokens.sidebar.js.map
