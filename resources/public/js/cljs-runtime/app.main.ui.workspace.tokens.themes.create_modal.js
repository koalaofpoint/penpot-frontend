import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.tokens.js";
import "./app.common.logic.tokens.js";
import "./app.common.schema.js";
import "./app.common.types.tokens_lib.js";
import "./app.main.constants.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.tokens.library_edit.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.controls.combobox.js";
import "./app.main.ui.ds.controls.input.js";
import "./app.main.ui.ds.controls.switch.js";
import "./app.main.ui.ds.controls.utilities.label.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.foundations.typography.heading.js";
import "./app.main.ui.ds.foundations.typography.text.js";
import "./app.main.ui.workspace.tokens.sets.lists.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.themes.create_modal');
app.main.ui.workspace.tokens.themes.create_modal.empty_themes = (function app$main$ui$workspace$tokens$themes$create_modal$empty_themes(props_56592){
var map__56596 = rumext.v2.util.wrap_props(props_56592);
var map__56596__$1 = cljs.core.__destructure_map(map__56596);
var change_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56596__$1,new cljs.core.Keyword(null,"change-view","change-view",-1206699831));
var create_theme = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(change_view)],(function (){
return (change_view.cljs$core$IFn$_invoke$arity$1 ? change_view.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"create-theme","create-theme",279233432)) : change_view.call(null,new cljs.core.Keyword(null,"create-theme","create-theme",279233432)));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_themes_create_modal__themes-modal-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.heading.heading_STAR_,{'level':(2),'typography':"headline-medium",'className':"main_ui_workspace_tokens_themes_create_modal__themes-modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.themes-list")}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_themes_create_modal__empty-themes-wrapper",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_themes_create_modal__empty-themes-message",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':"title-medium",'className':"main_ui_workspace_tokens_themes_create_modal__empty-theme-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.no-themes-currently")}),rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'className':"main_ui_workspace_tokens_themes_create_modal__empty-theme-subtitle",'typography':"body-medium",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.create-new-theme")})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_themes_create_modal__button-footer",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"secondary",'type':"button",'onClick':app.main.data.modal.hide_BANG_,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close")}),rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"primary",'type':"button",'onClick':create_theme,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.add-new-theme")})]})]})]});
});

(app.main.ui.workspace.tokens.themes.create_modal.empty_themes.displayName = "empty-themes");

app.main.ui.workspace.tokens.themes.create_modal.themes_overview = (function app$main$ui$workspace$tokens$themes$create_modal$themes_overview(props_56606){
var map__56613 = rumext.v2.util.wrap_props(props_56606);
var map__56613__$1 = cljs.core.__destructure_map(map__56613);
var change_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56613__$1,new cljs.core.Keyword(null,"change-view","change-view",-1206699831));
var active_theme_paths = rumext.v2.deref(app.main.refs.workspace_active_theme_paths);
var themes_groups = rumext.v2.deref(app.main.refs.workspace_token_theme_tree_no_hidden);
var create_theme = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(change_view)],(function (e){
app.util.dom.prevent_default(e);

app.util.dom.stop_propagation(e);

return (change_view.cljs$core$IFn$_invoke$arity$1 ? change_view.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"create-theme","create-theme",279233432)) : change_view.call(null,new cljs.core.Keyword(null,"create-theme","create-theme",279233432)));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_themes_create_modal__themes-modal-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.heading.heading_STAR_,{'level':(2),'typography':"headline-medium",'className':"main_ui_workspace_tokens_themes_create_modal__themes-modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.themes-list")}),rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"div",'typography':"body-medium",'className':"main_ui_workspace_tokens_themes_create_modal__themes-modal-description",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.themes-description")}),rumext.v2.jsx("ul",{'className':"main_ui_workspace_tokens_themes_create_modal__theme-group-wrapper",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__56614){
var vec__56615 = p__56614;
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56615,(0),null);
var themes = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56615,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsxs("li",{'children':[((cljs.core.seq(group))?rumext.v2.jsx(app.main.ui.ds.foundations.typography.heading.heading_STAR_,{'level':(3),'className':"main_ui_workspace_tokens_themes_create_modal__theme-group-label",'typography':"body-large",'children':rumext.v2.jsxs("div",{'title':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.group-name")),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(group)].join(''),'className':"main_ui_workspace_tokens_themes_create_modal__group-title",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.group,'className':"main_ui_workspace_tokens_themes_create_modal__group-title-icon"}),rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':"body-medium",'className':"main_ui_workspace_tokens_themes_create_modal__group-title-name",'children':group})]})}):null),rumext.v2.jsx("ul",{'className':"main_ui_workspace_tokens_themes_create_modal__theme-group-rows-wrapper",'children':cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function app$main$ui$workspace$tokens$themes$create_modal$themes_overview_$_iter__56618(s__56619){
return (new cljs.core.LazySeq(null,(function (){
var s__56619__$1 = s__56619;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56619__$1);
if(temp__5825__auto__){
var s__56619__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56619__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__56619__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__56621 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__56620 = (0);
while(true){
if((i__56620 < size__5502__auto__)){
var vec__56622 = cljs.core._nth(c__5501__auto__,i__56620);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56622,(0),null);
var map__56625 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56622,(1),null);
var map__56625__$1 = cljs.core.__destructure_map(map__56625);
var theme = map__56625__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56625__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56625__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var theme_path = app.common.types.tokens_lib.get_theme_path(theme);
var selected_QMARK_ = (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_theme_paths,theme_path) == null)));
var delete_theme = ((function (i__56620,theme_path,selected_QMARK_,vec__56622,_,map__56625,map__56625__$1,theme,id,name,c__5501__auto__,size__5502__auto__,b__56621,s__56619__$2,temp__5825__auto__,vec__56615,group,themes,active_theme_paths,themes_groups,create_theme,map__56613,map__56613__$1,change_view){
return (function (e){
app.util.dom.prevent_default(e);

app.util.dom.stop_propagation(e);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.delete_token_theme(id));
});})(i__56620,theme_path,selected_QMARK_,vec__56622,_,map__56625,map__56625__$1,theme,id,name,c__5501__auto__,size__5502__auto__,b__56621,s__56619__$2,temp__5825__auto__,vec__56615,group,themes,active_theme_paths,themes_groups,create_theme,map__56613,map__56613__$1,change_view))
;
var on_switch_theme = ((function (i__56620,theme_path,selected_QMARK_,delete_theme,vec__56622,_,map__56625,map__56625__$1,theme,id,name,c__5501__auto__,size__5502__auto__,b__56621,s__56619__$2,temp__5825__auto__,vec__56615,group,themes,active_theme_paths,themes_groups,create_theme,map__56613,map__56613__$1,change_view){
return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.toggle_token_theme_active(id));
});})(i__56620,theme_path,selected_QMARK_,delete_theme,vec__56622,_,map__56625,map__56625__$1,theme,id,name,c__5501__auto__,size__5502__auto__,b__56621,s__56619__$2,temp__5825__auto__,vec__56615,group,themes,active_theme_paths,themes_groups,create_theme,map__56613,map__56613__$1,change_view))
;
var on_edit_theme = ((function (i__56620,theme_path,selected_QMARK_,delete_theme,on_switch_theme,vec__56622,_,map__56625,map__56625__$1,theme,id,name,c__5501__auto__,size__5502__auto__,b__56621,s__56619__$2,temp__5825__auto__,vec__56615,group,themes,active_theme_paths,themes_groups,create_theme,map__56613,map__56613__$1,change_view){
return (function (e){
app.util.dom.prevent_default(e);

app.util.dom.stop_propagation(e);

var G__56626 = new cljs.core.Keyword(null,"edit-theme","edit-theme",1508129664);
var G__56627 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme-info","theme-info",1015163604),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(theme),new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(theme),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(theme)], null)], null);
return (change_view.cljs$core$IFn$_invoke$arity$2 ? change_view.cljs$core$IFn$_invoke$arity$2(G__56626,G__56627) : change_view.call(null,G__56626,G__56627));
});})(i__56620,theme_path,selected_QMARK_,delete_theme,on_switch_theme,vec__56622,_,map__56625,map__56625__$1,theme,id,name,c__5501__auto__,size__5502__auto__,b__56621,s__56619__$2,temp__5825__auto__,vec__56615,group,themes,active_theme_paths,themes_groups,create_theme,map__56613,map__56613__$1,change_view))
;
cljs.core.chunk_append(b__56621,rumext.v2.jsxs("li",{'className':"main_ui_workspace_tokens_themes_create_modal__theme-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_themes_create_modal__theme-switch-row",'children':rumext.v2.jsx(app.main.ui.ds.controls.switch$.switch_STAR_,{'id':name,'label':name,'onChange':on_switch_theme,'defaultChecked':selected_QMARK_})}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_themes_create_modal__theme-actions-row",'children':[(function (){var sets_count = (function (){var G__56628 = theme;
var G__56628__$1 = (((G__56628 == null))?null:new cljs.core.Keyword(null,"sets","sets",400955582).cljs$core$IFn$_invoke$arity$1(G__56628));
var G__56628__$2 = (((G__56628__$1 == null))?null:cljs.core.seq(G__56628__$1));
if((G__56628__$2 == null)){
return null;
} else {
return cljs.core.count(G__56628__$2);
}
})();
return rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'className':(cljs.core.truth_(sets_count)?"main_ui_workspace_tokens_themes_create_modal__sets-count-button":"")+" "+((cljs.core.not(sets_count))?"main_ui_workspace_tokens_themes_create_modal__sets-count-empty-button":""),'variant':"secondary",'type':"button",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.sets-hint"),'onClick':on_edit_theme,'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_themes_create_modal__label-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':"body-medium",'children':(cljs.core.truth_(sets_count)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.num-active-sets",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sets_count], 0)):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.no-active-sets"))}),rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow_right})]})});
})(),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'onClick':delete_theme,'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.delete-theme-title"),'icon':app.main.ui.ds.foundations.assets.icon.delete$})]})]},theme_path));

var G__56656 = (i__56620 + (1));
i__56620 = G__56656;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56621),app$main$ui$workspace$tokens$themes$create_modal$themes_overview_$_iter__56618(cljs.core.chunk_rest(s__56619__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56621),null);
}
} else {
var vec__56629 = cljs.core.first(s__56619__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56629,(0),null);
var map__56632 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56629,(1),null);
var map__56632__$1 = cljs.core.__destructure_map(map__56632);
var theme = map__56632__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56632__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56632__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var theme_path = app.common.types.tokens_lib.get_theme_path(theme);
var selected_QMARK_ = (!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_theme_paths,theme_path) == null)));
var delete_theme = ((function (theme_path,selected_QMARK_,vec__56629,_,map__56632,map__56632__$1,theme,id,name,s__56619__$2,temp__5825__auto__,vec__56615,group,themes,active_theme_paths,themes_groups,create_theme,map__56613,map__56613__$1,change_view){
return (function (e){
app.util.dom.prevent_default(e);

app.util.dom.stop_propagation(e);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.delete_token_theme(id));
});})(theme_path,selected_QMARK_,vec__56629,_,map__56632,map__56632__$1,theme,id,name,s__56619__$2,temp__5825__auto__,vec__56615,group,themes,active_theme_paths,themes_groups,create_theme,map__56613,map__56613__$1,change_view))
;
var on_switch_theme = ((function (theme_path,selected_QMARK_,delete_theme,vec__56629,_,map__56632,map__56632__$1,theme,id,name,s__56619__$2,temp__5825__auto__,vec__56615,group,themes,active_theme_paths,themes_groups,create_theme,map__56613,map__56613__$1,change_view){
return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.toggle_token_theme_active(id));
});})(theme_path,selected_QMARK_,delete_theme,vec__56629,_,map__56632,map__56632__$1,theme,id,name,s__56619__$2,temp__5825__auto__,vec__56615,group,themes,active_theme_paths,themes_groups,create_theme,map__56613,map__56613__$1,change_view))
;
var on_edit_theme = ((function (theme_path,selected_QMARK_,delete_theme,on_switch_theme,vec__56629,_,map__56632,map__56632__$1,theme,id,name,s__56619__$2,temp__5825__auto__,vec__56615,group,themes,active_theme_paths,themes_groups,create_theme,map__56613,map__56613__$1,change_view){
return (function (e){
app.util.dom.prevent_default(e);

app.util.dom.stop_propagation(e);

var G__56633 = new cljs.core.Keyword(null,"edit-theme","edit-theme",1508129664);
var G__56634 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"theme-info","theme-info",1015163604),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(theme),new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(theme),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(theme)], null)], null);
return (change_view.cljs$core$IFn$_invoke$arity$2 ? change_view.cljs$core$IFn$_invoke$arity$2(G__56633,G__56634) : change_view.call(null,G__56633,G__56634));
});})(theme_path,selected_QMARK_,delete_theme,on_switch_theme,vec__56629,_,map__56632,map__56632__$1,theme,id,name,s__56619__$2,temp__5825__auto__,vec__56615,group,themes,active_theme_paths,themes_groups,create_theme,map__56613,map__56613__$1,change_view))
;
return cljs.core.cons(rumext.v2.jsxs("li",{'className':"main_ui_workspace_tokens_themes_create_modal__theme-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_themes_create_modal__theme-switch-row",'children':rumext.v2.jsx(app.main.ui.ds.controls.switch$.switch_STAR_,{'id':name,'label':name,'onChange':on_switch_theme,'defaultChecked':selected_QMARK_})}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_themes_create_modal__theme-actions-row",'children':[(function (){var sets_count = (function (){var G__56635 = theme;
var G__56635__$1 = (((G__56635 == null))?null:new cljs.core.Keyword(null,"sets","sets",400955582).cljs$core$IFn$_invoke$arity$1(G__56635));
var G__56635__$2 = (((G__56635__$1 == null))?null:cljs.core.seq(G__56635__$1));
if((G__56635__$2 == null)){
return null;
} else {
return cljs.core.count(G__56635__$2);
}
})();
return rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'className':(cljs.core.truth_(sets_count)?"main_ui_workspace_tokens_themes_create_modal__sets-count-button":"")+" "+((cljs.core.not(sets_count))?"main_ui_workspace_tokens_themes_create_modal__sets-count-empty-button":""),'variant':"secondary",'type':"button",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.sets-hint"),'onClick':on_edit_theme,'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_themes_create_modal__label-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':"body-medium",'children':(cljs.core.truth_(sets_count)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.num-active-sets",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sets_count], 0)):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.no-active-sets"))}),rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow_right})]})});
})(),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'onClick':delete_theme,'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.delete-theme-title"),'icon':app.main.ui.ds.foundations.assets.icon.delete$})]})]},theme_path),app$main$ui$workspace$tokens$themes$create_modal$themes_overview_$_iter__56618(cljs.core.rest(s__56619__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(themes);
})())})]},""+"token-theme-group"+(group ?? "")));

return out_arr__35152__auto__;
}),[],themes_groups)}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_themes_create_modal__button-footer",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"secondary",'type':"button",'onClick':app.main.data.modal.hide_BANG_,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close")}),rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"primary",'type':"button",'onClick':create_theme,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.add-new-theme")})]})]});
});

(app.main.ui.workspace.tokens.themes.create_modal.themes_overview.displayName = "themes-overview");

app.main.ui.workspace.tokens.themes.create_modal.theme_inputs_STAR_ = (function app$main$ui$workspace$tokens$themes$create_modal$theme_inputs_STAR_(props_56636){
var theme = props_56636.theme;
var on_change_field = props_56636.onChangeField;
var tokens_lib = rumext.v2.deref(app.main.refs.tokens_lib);
var theme_groups = rumext.v2.deref(app.main.refs.workspace_token_theme_groups);
var theme_name_ref = rumext.v2.use_ref(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(theme));
var options = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (group){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),group,new cljs.core.Keyword(null,"id","id",-1388402092),group], null);
}),theme_groups);
var current_group_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(theme));
var current_group = cljs.core.deref(current_group_STAR_);
var current_name_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(theme));
var current_name = cljs.core.deref(current_name_STAR_);
var group_errors_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var group_errors = cljs.core.deref(group_errors_STAR_);
var name_errors_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var name_errors = cljs.core.deref(name_errors_STAR_);
var on_update_group = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_field),rumext.v2.adapt(tokens_lib),rumext.v2.adapt(current_name)],(function (value){
var errors = app.common.schema.validation_errors(value,app.common.files.tokens.make_token_theme_group_schema(tokens_lib,current_name,app.common.types.tokens_lib.get_id(theme)));
cljs.core.reset_BANG_(group_errors_STAR_,errors);

if(cljs.core.empty_QMARK_(errors)){
cljs.core.reset_BANG_(current_group_STAR_,value);

return (on_change_field.cljs$core$IFn$_invoke$arity$2 ? on_change_field.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),value) : on_change_field.call(null,new cljs.core.Keyword(null,"group","group",582596132),value));
} else {
return (on_change_field.cljs$core$IFn$_invoke$arity$2 ? on_change_field.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),"") : on_change_field.call(null,new cljs.core.Keyword(null,"group","group",582596132),""));
}
}));
var on_update_name = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_field),rumext.v2.adapt(tokens_lib),rumext.v2.adapt(current_group)],(function (event){
var value = app.util.dom.get_value(app.util.dom.get_target(event));
var errors = app.common.schema.validation_errors(value,app.common.files.tokens.make_token_theme_name_schema(tokens_lib,current_group,app.common.types.tokens_lib.get_id(theme)));
cljs.core.reset_BANG_(name_errors_STAR_,errors);

rumext.v2.set_ref_val_BANG_(theme_name_ref,value);

if(cljs.core.empty_QMARK_(errors)){
cljs.core.reset_BANG_(current_name_STAR_,value);

return (on_change_field.cljs$core$IFn$_invoke$arity$2 ? on_change_field.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),value) : on_change_field.call(null,new cljs.core.Keyword(null,"name","name",1843675177),value));
} else {
return (on_change_field.cljs$core$IFn$_invoke$arity$2 ? on_change_field.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),"") : on_change_field.call(null,new cljs.core.Keyword(null,"name","name",1843675177),""));
}
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_themes_create_modal__edit-theme-inputs-wrapper",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_themes_create_modal__group-input-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.controls.utilities.label.label_STAR_,{'htmlFor':"groups-dropdown",'isOptional':true,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.label.group")}),rumext.v2.jsx(app.main.ui.ds.controls.combobox.combobox_STAR_,{'id':""+"groups-dropdown",'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.label.group-placeholder"),'defaultSelected':new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(theme),'options':cljs.core.clj__GT_js(options),'hasError':app.common.data.not_empty_QMARK_(group_errors),'onChange':on_update_group})]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_themes_create_modal__group-input-wrapper",'children':rumext.v2.jsx(app.main.ui.ds.controls.input.input_STAR_,{'onChange':on_update_name,'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.label.theme-placeholder"),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.label.theme"),'hintType':((cljs.core.empty_QMARK_(name_errors))?null:"error"),'hintMessage':cljs.core.first(name_errors),'maxLength':app.main.constants.max_input_length,'defaultValue':rumext.v2.ref_val(theme_name_ref),'variant':"comfortable",'autoFocus':true})})]});
});

(app.main.ui.workspace.tokens.themes.create_modal.theme_inputs_STAR_.displayName = "theme-inputs*");

app.main.ui.workspace.tokens.themes.create_modal.theme_modal_buttons_STAR_ = (function app$main$ui$workspace$tokens$themes$create_modal$theme_modal_buttons_STAR_(props_56637){
var disabled_QMARK_ = (props_56637["disabled?"]);
var close_modal = props_56637.closeModal;
var on_save_form = props_56637.onSaveForm;
var props = props_56637;
var handle_key_down_cancel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(close_modal)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (close_modal.cljs$core$IFn$_invoke$arity$1 ? close_modal.cljs$core$IFn$_invoke$arity$1(event) : close_modal.call(null,event));
} else {
return null;
}
}));
var handle_key_down_save = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_save_form)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_save_form.cljs$core$IFn$_invoke$arity$1 ? on_save_form.cljs$core$IFn$_invoke$arity$1(event) : on_save_form.call(null,event));
} else {
return null;
}
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"secondary",'type':"button",'onClick':close_modal,'onKeyDown':handle_key_down_cancel,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.cancel")}),rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"primary",'type':"submit",'onClick':on_save_form,'onKeyDown':handle_key_down_save,'disabled':disabled_QMARK_,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.save-theme")})]});
});

(app.main.ui.workspace.tokens.themes.create_modal.theme_modal_buttons_STAR_.displayName = "theme-modal-buttons*");

app.main.ui.workspace.tokens.themes.create_modal.make_lib_with_theme = (function app$main$ui$workspace$tokens$themes$create_modal$make_lib_with_theme(theme,sets){
var tlib = app.common.types.tokens_lib.make_tokens_lib().app$common$types$tokens_lib$ITokenThemes$add_theme$arity$2(null,theme);
var tlib__$1 = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.types.tokens_lib.add_set,tlib,sets);
return app.common.types.tokens_lib.activate_theme(tlib__$1,app.common.types.tokens_lib.get_id(theme));
});
app.main.ui.workspace.tokens.themes.create_modal.edit_create_theme_STAR_ = (function app$main$ui$workspace$tokens$themes$create_modal$edit_create_theme_STAR_(props_56640){
var has_prev_view = props_56640.hasPrevView;
var change_view = props_56640.changeView;
var on_save = props_56640.onSave;
var theme = props_56640.theme;
var is_editing = props_56640.isEditing;
var ordered_token_sets = rumext.v2.deref(app.main.refs.workspace_ordered_token_sets);
var tokens_lib = rumext.v2.deref(app.main.refs.tokens_lib);
var token_sets = rumext.v2.deref(app.main.refs.workspace_token_sets_tree);
var current_theme_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(theme);
var current_theme = cljs.core.deref(current_theme_STAR_);
var lib = app.main.ui.workspace.tokens.themes.create_modal.make_lib_with_theme(current_theme,ordered_token_sets);
var on_back = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(change_view)],(function (){
return (change_view.cljs$core$IFn$_invoke$arity$1 ? change_view.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"themes-overview","themes-overview",1335300928)) : change_view.call(null,new cljs.core.Keyword(null,"themes-overview","themes-overview",1335300928)));
}));
var disabled_QMARK_ = cuerdas.core.empty_QMARK_(cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(current_theme)));
var on_change_field = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (field,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current_theme_STAR_,(function (p1__56638_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56638_SHARP_,field,value);
}));
}));
var on_save_form = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_theme),rumext.v2.adapt(on_save),rumext.v2.adapt(on_back)],(function (e){
app.util.dom.prevent_default(e);

var theme_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(current_theme,new cljs.core.Keyword(null,"name","name",1843675177),cuerdas.core.trim),new cljs.core.Keyword(null,"group","group",582596132),cuerdas.core.trim),new cljs.core.Keyword(null,"description","description",-1428560544),cuerdas.core.trim);
if(cuerdas.core.empty_QMARK_(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(theme_SINGLEQUOTE_))){
} else {
(on_save.cljs$core$IFn$_invoke$arity$1 ? on_save.cljs$core$IFn$_invoke$arity$1(theme_SINGLEQUOTE_) : on_save.call(null,theme_SINGLEQUOTE_));
}

return (on_back.cljs$core$IFn$_invoke$arity$0 ? on_back.cljs$core$IFn$_invoke$arity$0() : on_back.call(null));
}));
var close_modal = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
app.util.dom.prevent_default(e);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());
}));
var on_delete_theme = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_theme),rumext.v2.adapt(on_back)],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.delete_token_theme(app.common.types.tokens_lib.get_id(current_theme)));

return (on_back.cljs$core$IFn$_invoke$arity$0 ? on_back.cljs$core$IFn$_invoke$arity$0() : on_back.call(null));
}));
var token_set_group_active_QMARK_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_theme)],(function (group_path){
return app.common.types.tokens_lib.sets_at_path_all_active_QMARK_(lib,group_path);
}));
var token_set_active_QMARK_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_theme)],(function (name){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"sets","sets",400955582).cljs$core$IFn$_invoke$arity$1(current_theme),name);
}));
var on_toggle_token_set = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_theme)],(function (set_name){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current_theme_STAR_,(function (p1__56639_SHARP_){
return app.common.types.tokens_lib.toggle_set(p1__56639_SHARP_,set_name);
}));
}));
var on_toggle_token_set_group = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_theme),rumext.v2.adapt(ordered_token_sets)],(function (group_path){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(current_theme_STAR_,(function (theme_SINGLEQUOTE_){
var lib_SINGLEQUOTE_ = app.main.ui.workspace.tokens.themes.create_modal.make_lib_with_theme(theme_SINGLEQUOTE_,ordered_token_sets);
return app.common.logic.tokens.toggle_token_set_group(group_path,lib_SINGLEQUOTE_,theme_SINGLEQUOTE_);
}));
}));
var on_click_token_set = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_toggle_token_set)],(function (set_id){
var set = app.common.types.tokens_lib.get_set(lib,set_id);
var G__56641 = app.common.types.tokens_lib.get_name(set);
return (on_toggle_token_set.cljs$core$IFn$_invoke$arity$1 ? on_toggle_token_set.cljs$core$IFn$_invoke$arity$1(G__56641) : on_toggle_token_set.call(null,G__56641));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_themes_create_modal__themes-modal-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.heading.heading_STAR_,{'level':(2),'typography':"headline-medium",'className':"main_ui_workspace_tokens_themes_create_modal__themes-modal-title",'children':(cljs.core.truth_(is_editing)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.edit-theme-title"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.add-new-theme"))}),rumext.v2.jsx("form",{'onSubmit':on_save_form,'className':"main_ui_workspace_tokens_themes_create_modal__edit-theme-form",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_themes_create_modal__edit-theme-wrapper",'children':[(cljs.core.truth_(has_prev_view)?rumext.v2.jsxs("button",{'onClick':on_back,'type':"button",'className':"main_ui_workspace_tokens_themes_create_modal__back-btn",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow_left,'aria-hidden':true}),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.back-to-themes")]}):null),rumext.v2.jsx(app.main.ui.workspace.tokens.themes.create_modal.theme_inputs_STAR_,{'theme':current_theme,'onChangeField':on_change_field}),rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':"body-small",'className':"main_ui_workspace_tokens_themes_create_modal__select-sets-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.set-selection-theme")}),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_themes_create_modal__sets-list-wrapper",'children':rumext.v2.jsx(app.main.ui.workspace.tokens.sets.lists.controlled_sets_list_STAR_,{'tokenSets':token_sets,'origin':"theme-modal",'onToggleTokenSet':on_toggle_token_set,'tokensLib':tokens_lib,'isTokenSetActive':token_set_active_QMARK_,'canEdit':false,'onToggleTokenSetGroup':on_toggle_token_set_group,'onSelect':on_click_token_set,'isTokenSetGroupActive':token_set_group_active_QMARK_})}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_themes_create_modal__edit-theme-footer",'children':[(cljs.core.truth_(is_editing)?rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"secondary",'type':"button",'icon':app.main.ui.ds.foundations.assets.icon.delete$,'onClick':on_delete_theme,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.delete")}):null),rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_themes_create_modal__button-footer",'children':rumext.v2.jsx(app.main.ui.workspace.tokens.themes.create_modal.theme_modal_buttons_STAR_,{'closeModal':close_modal,'onSaveForm':on_save_form,'disabled?':disabled_QMARK_})})]})]})})]});
});

(app.main.ui.workspace.tokens.themes.create_modal.edit_create_theme_STAR_.displayName = "edit-create-theme*");

app.main.ui.workspace.tokens.themes.create_modal.has_prev_view = (function app$main$ui$workspace$tokens$themes$create_modal$has_prev_view(prev_view_type){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"themes-overview","themes-overview",1335300928),null,new cljs.core.Keyword(null,"empty-themes","empty-themes",-1383438187),null], null), null),prev_view_type);
});
app.main.ui.workspace.tokens.themes.create_modal.edit_theme = (function app$main$ui$workspace$tokens$themes$create_modal$edit_theme(props_56642){
var map__56643 = rumext.v2.util.wrap_props(props_56642);
var map__56643__$1 = cljs.core.__destructure_map(map__56643);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56643__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var change_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56643__$1,new cljs.core.Keyword(null,"change-view","change-view",-1206699831));
var map__56644 = state;
var map__56644__$1 = cljs.core.__destructure_map(map__56644);
var theme_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56644__$1,new cljs.core.Keyword(null,"theme-info","theme-info",1015163604));
var vec__56645 = theme_info;
var theme_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56645,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56645,(1),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56645,(2),null);
var theme = rumext.v2.deref(app.main.refs.workspace_token_theme(theme_id));
var has_prev_view = app.main.ui.workspace.tokens.themes.create_modal.has_prev_view(new cljs.core.Keyword(null,"prev-type","prev-type",212113111).cljs$core$IFn$_invoke$arity$1(state));
var on_save = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(theme)],(function (theme_SINGLEQUOTE_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.update_token_theme(app.common.types.tokens_lib.get_id(theme),theme_SINGLEQUOTE_));
}));
return rumext.v2.jsx(app.main.ui.workspace.tokens.themes.create_modal.edit_create_theme_STAR_,{'changeView':change_view,'theme':theme,'onSave':on_save,'isEditing':true,'hasPrevView':has_prev_view});
});

(app.main.ui.workspace.tokens.themes.create_modal.edit_theme.displayName = "edit-theme");

app.main.ui.workspace.tokens.themes.create_modal.create_theme = (function app$main$ui$workspace$tokens$themes$create_modal$create_theme(props_56648){
var map__56649 = rumext.v2.util.wrap_props(props_56648);
var map__56649__$1 = cljs.core.__destructure_map(map__56649);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56649__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var change_view = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56649__$1,new cljs.core.Keyword(null,"change-view","change-view",-1206699831));
var theme = app.common.types.tokens_lib.make_token_theme.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),""], 0));
var on_save = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (theme__$1){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"create-tokens-theme"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.tokens.library_edit.create_token_theme(theme__$1)], 0));
}));
var has_prev_view = app.main.ui.workspace.tokens.themes.create_modal.has_prev_view(new cljs.core.Keyword(null,"prev-type","prev-type",212113111).cljs$core$IFn$_invoke$arity$1(state));
return rumext.v2.jsx(app.main.ui.workspace.tokens.themes.create_modal.edit_create_theme_STAR_,{'changeView':change_view,'theme':theme,'onSave':on_save,'hasPrevView':has_prev_view});
});

(app.main.ui.workspace.tokens.themes.create_modal.create_theme.displayName = "create-theme");

app.main.ui.workspace.tokens.themes.create_modal.themes_modal_body_STAR_ = (function app$main$ui$workspace$tokens$themes$create_modal$themes_modal_body_STAR_(props_56650){
var themes = rumext.v2.deref(app.main.refs.workspace_token_themes_no_hidden);
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
if(cljs.core.empty_QMARK_(themes)){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"create-theme","create-theme",279233432)], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"themes-overview","themes-overview",1335300928)], null);
}
}));
var state = cljs.core.deref(state_STAR_);
var change_view = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function() { 
var G__56666__delegate = function (type,p__56651){
var map__56652 = p__56651;
var map__56652__$1 = cljs.core.__destructure_map(map__56652);
var theme_info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56652__$1,new cljs.core.Keyword(null,"theme-info","theme-info",1015163604));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_STAR_,(function (current_state){
var G__56653 = current_state;
var G__56653__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__56653,new cljs.core.Keyword(null,"type","type",1174270348),type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prev-type","prev-type",212113111),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(current_state)], 0))
;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__56653__$1,new cljs.core.Keyword(null,"theme-info","theme-info",1015163604),theme_info);

}));
};
var G__56666 = function (type,var_args){
var p__56651 = null;
if (arguments.length > 1) {
var G__56667__i = 0, G__56667__a = new Array(arguments.length -  1);
while (G__56667__i < G__56667__a.length) {G__56667__a[G__56667__i] = arguments[G__56667__i + 1]; ++G__56667__i;}
  p__56651 = new cljs.core.IndexedSeq(G__56667__a,0,null);
} 
return G__56666__delegate.call(this,type,p__56651);};
G__56666.cljs$lang$maxFixedArity = 1;
G__56666.cljs$lang$applyTo = (function (arglist__56668){
var type = cljs.core.first(arglist__56668);
var p__56651 = cljs.core.rest(arglist__56668);
return G__56666__delegate(type,p__56651);
});
G__56666.cljs$core$IFn$_invoke$arity$variadic = G__56666__delegate;
return G__56666;
})()
);
var component = (function (){var G__56654 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(state);
var G__56654__$1 = (((G__56654 instanceof cljs.core.Keyword))?G__56654.fqn:null);
switch (G__56654__$1) {
case "empty-themes":
return app.main.ui.workspace.tokens.themes.create_modal.empty_themes;

break;
case "themes-overview":
if(cljs.core.empty_QMARK_(themes)){
return app.main.ui.workspace.tokens.themes.create_modal.empty_themes;
} else {
return app.main.ui.workspace.tokens.themes.create_modal.themes_overview;
}

break;
case "edit-theme":
return app.main.ui.workspace.tokens.themes.create_modal.edit_theme;

break;
case "create-theme":
return app.main.ui.workspace.tokens.themes.create_modal.create_theme;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56654__$1)].join('')));

}
})();
return rumext.v2.jsx(component,{'state':state,'change-view':change_view});
});

(app.main.ui.workspace.tokens.themes.create_modal.themes_modal_body_STAR_.displayName = "themes-modal-body*");

app.main.ui.workspace.tokens.themes.create_modal.token_themes_modal = (function app$main$ui$workspace$tokens$themes$create_modal$token_themes_modal(props_56655){
return rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_themes_create_modal__modal-overlay",'children':rumext.v2.jsxs("div",{'data-testid':"token-theme-update-create-modal",'className':"main_ui_workspace_tokens_themes_create_modal__modal-dialog",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'className':"main_ui_workspace_tokens_themes_create_modal__close-btn",'onClick':app.main.data.modal.hide_BANG_,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close"),'variant':"action",'icon':app.main.ui.ds.foundations.assets.icon.close}),rumext.v2.jsx(app.main.ui.workspace.tokens.themes.create_modal.themes_modal_body_STAR_,{})]})});
});

(app.main.ui.workspace.tokens.themes.create_modal.token_themes_modal.displayName = "token-themes-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword("tokens","themes","tokens/themes",31381800),app.main.ui.workspace.tokens.themes.create_modal.token_themes_modal);
}));

//# sourceMappingURL=app.main.ui.workspace.tokens.themes.create_modal.js.map
