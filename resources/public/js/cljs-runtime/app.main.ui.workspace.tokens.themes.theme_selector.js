import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.types.tokens_lib.js";
import "./app.common.uuid.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.tokens.library_edit.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.foundations.typography.text.js";
import "./app.main.ui.hooks.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.themes.theme_selector');
app.main.ui.workspace.tokens.themes.theme_selector.themes_list = (function app$main$ui$workspace$tokens$themes$theme_selector$themes_list(props_56333){
var map__56345 = rumext.v2.util.wrap_props(props_56333);
var map__56345__$1 = cljs.core.__destructure_map(map__56345);
var themes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56345__$1,new cljs.core.Keyword(null,"themes","themes",-702786642));
var active_theme_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56345__$1,new cljs.core.Keyword(null,"active-theme-paths","active-theme-paths",283904967));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56345__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var grouped_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56345__$1,new cljs.core.Keyword(null,"grouped?","grouped?",531080948));
if(cljs.core.seq(themes)){
return rumext.v2.jsx("ul",{'className':"main_ui_workspace_tokens_themes_theme_selector__theme-options",'children':cljs.core.into_array.cljs$core$IFn$_invoke$arity$1((function (){var iter__5503__auto__ = (function app$main$ui$workspace$tokens$themes$theme_selector$themes_list_$_iter__56347(s__56348){
return (new cljs.core.LazySeq(null,(function (){
var s__56348__$1 = s__56348;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__56348__$1);
if(temp__5825__auto__){
var s__56348__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__56348__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__56348__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__56350 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__56349 = (0);
while(true){
if((i__56349 < size__5502__auto__)){
var vec__56351 = cljs.core._nth(c__5501__auto__,i__56349);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56351,(0),null);
var map__56354 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56351,(1),null);
var map__56354__$1 = cljs.core.__destructure_map(map__56354);
var theme = map__56354__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56354__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56354__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var theme_id = app.common.types.tokens_lib.get_theme_path(theme);
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_theme_paths,theme_id);
var select_theme = ((function (i__56349,theme_id,selected_QMARK_,vec__56351,_,map__56354,map__56354__$1,theme,id,name,c__5501__auto__,size__5502__auto__,b__56350,s__56348__$2,temp__5825__auto__,map__56345,map__56345__$1,themes,active_theme_paths,on_close,grouped_QMARK_){
return (function (e){
app.util.dom.stop_propagation(e);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.toggle_token_theme_active(id));

return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
});})(i__56349,theme_id,selected_QMARK_,vec__56351,_,map__56354,map__56354__$1,theme,id,name,c__5501__auto__,size__5502__auto__,b__56350,s__56348__$2,temp__5825__auto__,map__56345,map__56345__$1,themes,active_theme_paths,on_close,grouped_QMARK_))
;
cljs.core.chunk_append(b__56350,rumext.v2.jsxs("li",{'role':"option",'aria-selected':selected_QMARK_,'onClick':select_theme,'className':"main_ui_workspace_tokens_themes_theme_selector__checked-element"+" "+(cljs.core.truth_(grouped_QMARK_)?"main_ui_workspace_tokens_themes_theme_selector__sub-item":"")+" "+(cljs.core.truth_(selected_QMARK_)?"main_ui_workspace_tokens_themes_theme_selector__is-selected":""),'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':"body-small",'className':"main_ui_workspace_tokens_themes_theme_selector__label",'title':name,'children':name}),rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.tick,'aria-hidden':true,'className':"main_ui_workspace_tokens_themes_theme_selector__check-icon"+" "+(cljs.core.truth_(selected_QMARK_)?"main_ui_workspace_tokens_themes_theme_selector__check-icon-visible":"")})]},theme_id));

var G__56374 = (i__56349 + (1));
i__56349 = G__56374;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__56350),app$main$ui$workspace$tokens$themes$theme_selector$themes_list_$_iter__56347(cljs.core.chunk_rest(s__56348__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__56350),null);
}
} else {
var vec__56355 = cljs.core.first(s__56348__$2);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56355,(0),null);
var map__56358 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56355,(1),null);
var map__56358__$1 = cljs.core.__destructure_map(map__56358);
var theme = map__56358__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56358__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56358__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var theme_id = app.common.types.tokens_lib.get_theme_path(theme);
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_theme_paths,theme_id);
var select_theme = ((function (theme_id,selected_QMARK_,vec__56355,_,map__56358,map__56358__$1,theme,id,name,s__56348__$2,temp__5825__auto__,map__56345,map__56345__$1,themes,active_theme_paths,on_close,grouped_QMARK_){
return (function (e){
app.util.dom.stop_propagation(e);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.toggle_token_theme_active(id));

return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
});})(theme_id,selected_QMARK_,vec__56355,_,map__56358,map__56358__$1,theme,id,name,s__56348__$2,temp__5825__auto__,map__56345,map__56345__$1,themes,active_theme_paths,on_close,grouped_QMARK_))
;
return cljs.core.cons(rumext.v2.jsxs("li",{'role':"option",'aria-selected':selected_QMARK_,'onClick':select_theme,'className':"main_ui_workspace_tokens_themes_theme_selector__checked-element"+" "+(cljs.core.truth_(grouped_QMARK_)?"main_ui_workspace_tokens_themes_theme_selector__sub-item":"")+" "+(cljs.core.truth_(selected_QMARK_)?"main_ui_workspace_tokens_themes_theme_selector__is-selected":""),'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':"body-small",'className':"main_ui_workspace_tokens_themes_theme_selector__label",'title':name,'children':name}),rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.tick,'aria-hidden':true,'className':"main_ui_workspace_tokens_themes_theme_selector__check-icon"+" "+(cljs.core.truth_(selected_QMARK_)?"main_ui_workspace_tokens_themes_theme_selector__check-icon-visible":"")})]},theme_id),app$main$ui$workspace$tokens$themes$theme_selector$themes_list_$_iter__56347(cljs.core.rest(s__56348__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(themes);
})())});
} else {
return null;
}
});

(app.main.ui.workspace.tokens.themes.theme_selector.themes_list.displayName = "themes-list");

app.main.ui.workspace.tokens.themes.theme_selector.open_tokens_theme_modal = (function app$main$ui$workspace$tokens$themes$theme_selector$open_tokens_theme_modal(){
return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("tokens","themes","tokens/themes",31381800),cljs.core.PersistentArrayMap.EMPTY);
});
app.main.ui.workspace.tokens.themes.theme_selector.theme_options = (function app$main$ui$workspace$tokens$themes$theme_selector$theme_options(props_56359){
var map__56364 = rumext.v2.util.wrap_props(props_56359);
var map__56364__$1 = cljs.core.__destructure_map(map__56364);
var active_theme_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56364__$1,new cljs.core.Keyword(null,"active-theme-paths","active-theme-paths",283904967));
var themes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56364__$1,new cljs.core.Keyword(null,"themes","themes",-702786642));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56364__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
return rumext.v2.jsxs("ul",{'role':"listbox",'className':"main_ui_workspace_tokens_themes_theme_selector__theme-options main_ui_workspace_tokens_themes_theme_selector__custom-select-dropdown",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__56365){
var vec__56366 = p__56365;
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56366,(0),null);
var themes__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56366,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsxs("li",{'aria-labelledby':""+(group ?? "")+"-label",'role':"group",'children':[((cljs.core.seq(group))?rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':"headline-small",'className':"main_ui_workspace_tokens_themes_theme_selector__group",'id':""+(cuerdas.core.kebab(group) ?? "")+"-label",'title':group,'children':group}):null),rumext.v2.jsx(app.main.ui.workspace.tokens.themes.theme_selector.themes_list,{'themes':themes__$1,'active-theme-paths':active_theme_paths,'on-close':on_close,'grouped?':true})]},group));

return out_arr__35152__auto__;
}),[],themes),rumext.v2.jsx("li",{'aria-hidden':true,'className':"main_ui_workspace_tokens_themes_theme_selector__separator"}),rumext.v2.jsxs("li",{'role':"option",'onClick':app.main.ui.workspace.tokens.themes.theme_selector.open_tokens_theme_modal,'className':"main_ui_workspace_tokens_themes_theme_selector__checked-element"+" "+"main_ui_workspace_tokens_themes_theme_selector__checked-element-button",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':"body-small",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.edit-themes")}),rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow_right,'aria-hidden':true})]})]});
});

(app.main.ui.workspace.tokens.themes.theme_selector.theme_options.displayName = "theme-options");

app.main.ui.workspace.tokens.themes.theme_selector.theme_selector = (function app$main$ui$workspace$tokens$themes$theme_selector$theme_selector(props_56371){
var map__56372 = rumext.v2.util.wrap_props(props_56371);
var map__56372__$1 = cljs.core.__destructure_map(map__56372);
var active_theme_paths = rumext.v2.deref(app.main.refs.workspace_active_theme_paths_no_hidden);
var active_themes_count = cljs.core.count(active_theme_paths);
var themes = rumext.v2.deref(app.main.refs.workspace_token_theme_tree_no_hidden);
var can_edit_QMARK_ = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.refs.permissions));
var current_label = (((active_themes_count > (1)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.active-themes",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([active_themes_count], 0)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_themes_count,(1)))?(function (){var G__56373 = cljs.core.first(active_theme_paths);
var G__56373__$1 = (((G__56373 == null))?null:app.common.types.tokens_lib.split_theme_path(G__56373));
var G__56373__$2 = (((G__56373__$1 == null))?null:cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.empty_QMARK_,G__56373__$1));
if((G__56373__$2 == null)){
return null;
} else {
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" / ",G__56373__$2);
}
})():app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.no-active-theme")
));
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next(),new cljs.core.Keyword(null,"is-open?","is-open?",-319226511),false,new cljs.core.Keyword(null,"rect","rect",-108902628),null], null);
}));
var state = cljs.core.deref(state_STAR_);
var is_open_QMARK_ = new cljs.core.Keyword(null,"is-open?","is-open?",-319226511).cljs$core$IFn$_invoke$arity$1(state);
var rect = new cljs.core.Keyword(null,"rect","rect",-108902628).cljs$core$IFn$_invoke$arity$1(state);
var on_close_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"is-open?","is-open?",-319226511),false);
}));
var on_open_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(can_edit_QMARK_)],(function (event){
if(cljs.core.truth_(can_edit_QMARK_)){
var temp__5825__auto__ = app.util.dom.get_current_target(event);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
var rect__$1 = app.util.dom.get_bounding_rect(node);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"is-open?","is-open?",-319226511),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"rect","rect",-108902628),rect__$1], 0));
} else {
return null;
}
} else {
return null;
}
}));
var container = app.main.ui.hooks.use_portal_container.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"popup","popup",635890211));
return rumext.v2.jsxs("div",{'role':"combobox",'aria-expanded':is_open_QMARK_,'tabIndex':"0",'className':"main_ui_workspace_tokens_themes_theme_selector__custom-select"+" "+((cljs.core.not(can_edit_QMARK_))?"main_ui_workspace_tokens_themes_theme_selector__disabled-select":""),'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':"body-small",'className':"main_ui_workspace_tokens_themes_theme_selector__current-label",'children':current_label}),rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow_down,'className':"main_ui_workspace_tokens_themes_theme_selector__dropdown-button",'aria-hidden':true}),(cljs.core.truth_(is_open_QMARK_)?rumext.v2.portal(rumext.v2.jsx("div",{'data-testid':"theme-select-dropdown",'style':{'top':new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(rect),'left':new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(rect),'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(rect)},'className':"main_ui_workspace_tokens_themes_theme_selector__dropdown-portal",'children':rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':is_open_QMARK_,'on-close':on_close_dropdown,'children':rumext.v2.jsx(app.main.ui.workspace.tokens.themes.theme_selector.theme_options,{'active-theme-paths':active_theme_paths,'themes':themes,'on-close':on_close_dropdown})})}),container):null)],'data-testid':"theme-select",'aria-haspopup':"listbox",'onClick':on_open_dropdown,'disabled':cljs.core.not(can_edit_QMARK_)});
});

(app.main.ui.workspace.tokens.themes.theme_selector.theme_selector.displayName = "theme-selector");


//# sourceMappingURL=app.main.ui.workspace.tokens.themes.theme_selector.js.map
