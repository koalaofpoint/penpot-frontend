import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.comments.js";
import "./app.main.data.event.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.comments.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.comments.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.product.empty_state.js";
import "./app.main.ui.ds.product.panel_title.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.comments');
app.main.ui.workspace.comments.sidebar_options = (function app$main$ui$workspace$comments$sidebar_options(props_52297){
var from_viewer = (props_52297["from-viewer"]);
var map__52301 = rumext.v2.deref(app.main.refs.comments_local);
var map__52301__$1 = cljs.core.__destructure_map(map__52301);
var cmode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52301__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var cshow = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52301__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var update_mode = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var mode = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.update_filters(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),mode], null)));
}));
var update_show = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cshow)],(function (){
var mode = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending","pending",-220036727),cshow))?new cljs.core.Keyword(null,"all","all",892129742):new cljs.core.Keyword(null,"pending","pending",-220036727));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.update_filters(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",-576705889),mode], null)));
}));
return rumext.v2.jsxs("ul",{'className':"main_ui_workspace_comments__comment-mode-dropdown"+" "+(cljs.core.truth_(from_viewer)?"main_ui_workspace_comments__viewer-dropdown":""),'children':[rumext.v2.jsxs("li",{'data-value':"all",'onClick':update_mode,'className':"main_ui_workspace_comments__dropdown-item"+" "+((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),cmode)) || ((cmode == null))))?"main_ui_workspace_comments__selected":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_comments__label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.show-all-comments")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_comments__icon",'children':app.main.ui.icons.tick})]}),rumext.v2.jsxs("li",{'data-value':"yours",'onClick':update_mode,'className':"main_ui_workspace_comments__dropdown-item"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"yours","yours",289099402),cmode))?"main_ui_workspace_comments__selected":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_comments__label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.show-your-comments")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_comments__icon",'children':app.main.ui.icons.tick})]}),rumext.v2.jsxs("li",{'data-value':"mentions",'onClick':update_mode,'className':"main_ui_workspace_comments__dropdown-item"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mentions","mentions",-1355741087),cmode))?"main_ui_workspace_comments__selected":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_comments__label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.show-mentions")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_comments__icon",'children':app.main.ui.icons.tick})]}),rumext.v2.jsx("li",{'className':"main_ui_workspace_comments__separator"}),rumext.v2.jsxs("li",{'onClick':update_show,'className':"main_ui_workspace_comments__dropdown-item"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending","pending",-220036727),cshow))?"main_ui_workspace_comments__selected":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_comments__label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.hide-resolved-comments")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_comments__icon",'children':app.main.ui.icons.tick})]})]});
});

(app.main.ui.workspace.comments.sidebar_options.displayName = "sidebar-options");

app.main.ui.workspace.comments.comments_sidebar_STAR_ = (function app$main$ui$workspace$comments$comments_sidebar_STAR_(props_52305){
var profiles = props_52305.profiles;
var from_viewer = props_52305.fromViewer;
var page_id = props_52305.pageId;
var threads = props_52305.threads;
var threads_map = rumext.v2.deref(app.main.refs.threads);
var profile = rumext.v2.deref(app.main.refs.profile);
var profiles_SINGLEQUOTE_ = rumext.v2.deref(app.main.refs.profiles);
var profiles__$1 = (function (){var or__5025__auto__ = profiles;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return profiles_SINGLEQUOTE_;
}
})();
var local = rumext.v2.deref(app.main.refs.comments_local);
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var options_QMARK_ = cljs.core.deref(state_STAR_);
var threads__$1 = (((threads == null))?app.main.data.comments.apply_filters(local,profile,cljs.core.reverse(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),cljs.core.vals(threads_map)))):threads);
var close_section = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(from_viewer)],(function (){
if(cljs.core.truth_(from_viewer)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.update_options(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-sidebar?","show-sidebar?",-1548438810),false], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.clear_edition_mode(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.deselect_all.cljs$core$IFn$_invoke$arity$1(true)], 0));
}
}));
var tgroups = app.main.data.comments.group_threads_by_page(threads__$1);
var page_id__$1 = (function (){var or__5025__auto__ = page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return rumext.v2.use_ctx(app.main.ui.context.current_page_id);
}
})();
var toggle_mode_selector = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_STAR_,cljs.core.not);
}));
var on_thread_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(page_id__$1),rumext.v2.adapt(from_viewer)],(function (thread){
if(cljs.core.truth_(from_viewer)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(app.main.data.comments.open_thread(thread),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"viewer"], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.comments.navigate_to_comment(thread));
}
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_comments__comments-section"+" "+(cljs.core.truth_(from_viewer)?"main_ui_workspace_comments__from-viewer":""),'children':[rumext.v2.jsx(app.main.ui.ds.product.panel_title.panel_title_STAR_,{'className':"main_ui_workspace_comments__comments-title",'text':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.comments"),'onClose':close_section}),rumext.v2.jsxs("button",{'onClick':toggle_mode_selector,'className':"main_ui_workspace_comments__mode-dropdown-wrapper",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_comments__mode-label",'children':(function (){var G__52317 = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(local);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__52317)){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.show-all-comments");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),G__52317)){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.show-all-comments");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"yours","yours",289099402),G__52317)){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.show-your-comments");
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mentions","mentions",-1355741087),G__52317)){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.show-mentions");
} else {
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52317)].join('')));

}
}
}
}
})()}),rumext.v2.jsx("div",{'className':"main_ui_workspace_comments__arrow-icon",'children':app.main.ui.icons.arrow})]}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':options_QMARK_,'on-close':(function (){
return cljs.core.reset_BANG_(state_STAR_,false);
}),'children':rumext.v2.jsx(app.main.ui.workspace.comments.sidebar_options,{'local':local,'from-viewer':from_viewer})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_comments__comments-section-content",'children':((cljs.core.seq(tgroups))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_comments__thread-groups",'children':[rumext.v2.jsx(app.main.ui.comments.comment_sidebar_thread_group_STAR_,{'group':cljs.core.first(tgroups),'onThreadClick':on_thread_click,'profiles':profiles__$1}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,tgroup){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.comments.comment_sidebar_thread_group_STAR_,{'group':tgroup,'onThreadClick':on_thread_click,'profiles':profiles__$1},new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(tgroup)));

return out_arr__35152__auto__;
}),[],cljs.core.rest(tgroups))]}):rumext.v2.jsx("div",{'className':"main_ui_workspace_comments__thread-group-placeholder",'children':rumext.v2.jsx(app.main.ui.ds.product.empty_state.empty_state_STAR_,{'icon':app.main.ui.ds.foundations.assets.icon.comments,'text':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.no-comments-available")})}))})]});
});

(app.main.ui.workspace.comments.comments_sidebar_STAR_.displayName = "comments-sidebar*");


//# sourceMappingURL=app.main.ui.workspace.comments.js.map
