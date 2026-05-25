import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.logging.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.common.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.refs.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.ui.components.select.js";
import "./app.main.ui.icons.js";
import "./app.util.clipboard.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.viewer.share_link');
app.common.logging.loggers.set("app.main.ui.viewer.share-link",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"warn","warn",-436710552)));
app.main.ui.viewer.share_link.prepare_params = (function app$main$ui$viewer$share_link$prepare_params(p__58638){
var map__58639 = p__58638;
var map__58639__$1 = cljs.core.__destructure_map(map__58639);
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58639__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var who_comment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58639__$1,new cljs.core.Keyword(null,"who-comment","who-comment",-313192010));
var who_inspect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58639__$1,new cljs.core.Keyword(null,"who-inspect","who-inspect",525863768));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"pages","pages",-285406513),pages,new cljs.core.Keyword(null,"who-comment","who-comment",-313192010),who_comment,new cljs.core.Keyword(null,"who-inspect","who-inspect",525863768),who_inspect], null);
});
app.main.ui.viewer.share_link.share_link_dialog = (function app$main$ui$viewer$share_link$share_link_dialog(props_58646){
var file = props_58646.file;
var page = props_58646.page;
var current_page = page;
var current_page_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page);
var slinks = rumext.v2.deref(app.main.refs.share_links);
var router = rumext.v2.deref(app.main.refs.router);
var route = rumext.v2.deref(app.main.refs.route);
var zoom_type = rumext.v2.deref(app.main.refs.viewer_zoom_type);
var page_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"pages","pages",-285406513));
var perms_visible_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var perms_visible_QMARK_ = cljs.core.deref(perms_visible_STAR_);
var confirm_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var confirm_QMARK_ = cljs.core.deref(confirm_STAR_);
var options_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"pages-mode","pages-mode",1390854462),"current",new cljs.core.Keyword(null,"all-pages","all-pages",1017563062),false,new cljs.core.Keyword(null,"pages","pages",-285406513),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page)]),new cljs.core.Keyword(null,"who-comment","who-comment",-313192010),"team",new cljs.core.Keyword(null,"who-inspect","who-inspect",525863768),"team"], null));
var options = cljs.core.deref(options_STAR_);
var current_link = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(slinks),rumext.v2.adapt(options),rumext.v2.adapt(page_ids)],(function (){
var map__58647 = app.main.ui.viewer.share_link.prepare_params(options);
var map__58647__$1 = cljs.core.__destructure_map(map__58647);
var params = map__58647__$1;
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58647__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var who_comment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58647__$1,new cljs.core.Keyword(null,"who-comment","who-comment",-313192010));
var who_inspect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58647__$1,new cljs.core.Keyword(null,"who-inspect","who-inspect",525863768));
var slink = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__58640_SHARP_){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"who-inspect","who-inspect",525863768).cljs$core$IFn$_invoke$arity$1(p1__58640_SHARP_),who_inspect)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"who-comment","who-comment",-313192010).cljs$core$IFn$_invoke$arity$1(p1__58640_SHARP_),who_comment)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(p1__58640_SHARP_),pages)))));
}),slinks);
if(cljs.core.truth_(slink)){
var page_id = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__58641_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(slink),p1__58641_SHARP_);
}),page_ids);
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(route),new cljs.core.Keyword(null,"share-id","share-id",795821204),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(slink)),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id),new cljs.core.Keyword(null,"index","index",-1531685915),"0");
var params__$2 = (((zoom_type == null))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(params__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038)):cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),zoom_type));
var href = app.main.router.resolve.cljs$core$IFn$_invoke$arity$3(router,new cljs.core.Keyword(null,"viewer","viewer",-783949853),params__$2);
return ""+(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.config.public_uri,new cljs.core.Keyword(null,"fragment","fragment",826775688),href) ?? "");
} else {
return null;
}
}));
var on_close = (function (event){
app.util.dom.prevent_default(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());

return app.main.data.modal.disallow_click_outside_BANG_();
});
var on_toggle_all = (function (_event){
cljs.core.reset_BANG_(confirm_STAR_,false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(options_STAR_,(function (state){
if(new cljs.core.Keyword(null,"all-pages","all-pages",1017563062).cljs$core$IFn$_invoke$arity$1(state) === true){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062),false),new cljs.core.Keyword(null,"pages","pages",-285406513),cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page)]));
} else {
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"all-pages","all-pages",1017563062),true),new cljs.core.Keyword(null,"pages","pages",-285406513),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"pages","pages",-285406513)], null))));
}
}));
});
var on_mark_checked_page = (function (event){
var target = app.util.dom.get_target(event);
var checked_QMARK_ = app.util.dom.checked_QMARK_(target);
var page_id = app.common.uuid.parse(app.util.dom.get_data(target,"page-id"));
var dif_pages_QMARK_ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(page_id,cljs.core.first(new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(options)));
var no_one_page = ((1) < cljs.core.count(new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(options)));
var should_change_QMARK_ = ((no_one_page) || (dif_pages_QMARK_));
if(should_change_QMARK_){
cljs.core.reset_BANG_(confirm_STAR_,false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(options_STAR_,(function (p__58648){
var map__58649 = p__58648;
var map__58649__$1 = cljs.core.__destructure_map(map__58649);
var state = map__58649__$1;
var pages = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58649__$1,new cljs.core.Keyword(null,"pages","pages",-285406513));
var pages__$1 = (cljs.core.truth_(checked_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(pages,page_id):cljs.core.disj.cljs$core$IFn$_invoke$arity$2(pages,page_id));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"pages","pages",-285406513),pages__$1),new cljs.core.Keyword(null,"all-pages","all-pages",1017563062),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(pages__$1),cljs.core.count(page_ids)));
}));
} else {
return null;
}
});
var create_link = (function (_){
var params = app.main.ui.viewer.share_link.prepare_params(options);
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(params,new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.common.create_share_link(params__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"create-share-link",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"viewer",new cljs.core.Keyword(null,"can-comment","can-comment",718623455),new cljs.core.Keyword(null,"who-comment","who-comment",-313192010).cljs$core$IFn$_invoke$arity$1(params__$1),new cljs.core.Keyword(null,"can-inspect-code","can-inspect-code",-411585714),new cljs.core.Keyword(null,"who-inspect","who-inspect",525863768).cljs$core$IFn$_invoke$arity$1(params__$1)], null))], 0));
});
var copy_link = (function (_){
app.util.clipboard.to_clipboard(current_link);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.share-link.link-copied-success"),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(1000)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"copy-share-link",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"viewer"], null))], 0));
});
var try_delete_link = (function (_){
return cljs.core.reset_BANG_(confirm_STAR_,true);
});
var delete_link = (function (_){
var params = app.main.ui.viewer.share_link.prepare_params(options);
var slink = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__58642_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(p1__58642_SHARP_),new cljs.core.Keyword(null,"flags","flags",1775418075).cljs$core$IFn$_invoke$arity$1(params));
}),slinks);
cljs.core.reset_BANG_(confirm_STAR_,false);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.delete_share_link(slink));
});
var toggle_perms_visibility = (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(perms_visible_STAR_,cljs.core.not);
});
var on_inspect_change = (function (value){
cljs.core.reset_BANG_(confirm_STAR_,false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(options_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"who-inspect","who-inspect",525863768),value);
});
var on_comment_change = (function (value){
cljs.core.reset_BANG_(confirm_STAR_,false);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(options_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"who-comment","who-comment",-313192010),value);
});
return rumext.v2.jsx("div",{'className':"main_ui_viewer_share_link__share-modal",'children':rumext.v2.jsxs("div",{'className':"main_ui_viewer_share_link__share-link-dialog",'children':[rumext.v2.jsxs("div",{'className':"main_ui_viewer_share_link__share-link-header",'children':[rumext.v2.jsx("h2",{'className':"main_ui_viewer_share_link__share-link-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.share-link.title")}),rumext.v2.jsx("button",{'onClick':on_close,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close"),'className':"main_ui_viewer_share_link__modal-close-button",'children':app.main.ui.icons.close})]}),rumext.v2.jsxs("div",{'className':"main_ui_viewer_share_link__modal-content",'children':[rumext.v2.jsxs("div",{'className':"main_ui_viewer_share_link__share-link-section",'children':[((((cljs.core.not(confirm_QMARK_)) && ((!((current_link == null))))))?rumext.v2.jsxs("div",{'className':"main_ui_viewer_share_link__custon-input-wrapper",'children':[rumext.v2.jsx("input",{'type':"text",'value':(function (){var or__5025__auto__ = current_link;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.share-link.placeholder"),'readOnly':true,'className':"main_ui_viewer_share_link__input-text"}),rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("viewer.header.share.copy-link"),'onClick':copy_link,'className':"main_ui_viewer_share_link__copy-button",'children':app.main.ui.icons.clipboard})]}):null),rumext.v2.jsxs("div",{'className':"main_ui_viewer_share_link__hint-wrapper",'children':[(((!(confirm_QMARK_)))?rumext.v2.jsx("div",{'className':"main_ui_viewer_share_link__hint",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.share-link.permissions-hint")}):null),((confirm_QMARK_ === true)?rumext.v2.jsxs("div",{'className':"main_ui_viewer_share_link__confirm-dialog",'children':[rumext.v2.jsx("div",{'className':"main_ui_viewer_share_link__description",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.share-link.confirm-deletion-link-description")}),rumext.v2.jsxs("div",{'className':"main_ui_viewer_share_link__actions",'children':[rumext.v2.jsx("input",{'type':"button",'onClick':(function (){
return cljs.core.reset_BANG_(confirm_STAR_,false);
}),'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.cancel"),'className':"main_ui_viewer_share_link__button-cancel"}),rumext.v2.jsx("input",{'type':"button",'onClick':delete_link,'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.share-link.destroy-link"),'className':"main_ui_viewer_share_link__button-danger"})]})]}):(((!((current_link == null))))?rumext.v2.jsx("input",{'type':"button",'onClick':try_delete_link,'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.share-link.destroy-link"),'className':"main_ui_viewer_share_link__button-danger"}):rumext.v2.jsx("input",{'type':"button",'onClick':create_link,'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.share-link.get-link"),'className':"main_ui_viewer_share_link__button-active"})
))]})]}),(((!(confirm_QMARK_)))?rumext.v2.jsxs("div",{'className':"main_ui_viewer_share_link__permissions-section",'children':[rumext.v2.jsxs("button",{'onClick':toggle_perms_visibility,'className':"main_ui_viewer_share_link__manage-permissions",'children':[rumext.v2.jsx("span",{'className':"main_ui_viewer_share_link__icon"+" "+(cljs.core.truth_(perms_visible_QMARK_)?"main_ui_viewer_share_link__rotated":""),'children':app.main.ui.icons.arrow}),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.share-link.manage-ops")]}),((perms_visible_QMARK_)?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(function (){var all_selected_QMARK_ = new cljs.core.Keyword(null,"all-pages","all-pages",1017563062).cljs$core$IFn$_invoke$arity$1(options);
var pages = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__58643_SHARP_){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),p1__58643_SHARP_], null));
}),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"pages","pages",-285406513)], null)));
var selected = new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(options);
return rumext.v2.jsxs("div",{'className':"main_ui_viewer_share_link__view-mode",'children':[rumext.v2.jsx("div",{'className':"main_ui_viewer_share_link__subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.share-link.permissions-pages")}),rumext.v2.jsx("div",{'className':"main_ui_viewer_share_link__items",'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(pages)))?rumext.v2.jsxs("div",{'className':"main_ui_viewer_share_link__checkbox-wrapper",'children':[rumext.v2.jsxs("label",{'htmlFor':["page-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_page_id)].join(''),'className':"checked",'children':[rumext.v2.jsx("span",{'className':"main_ui_viewer_share_link__checked",'children':app.main.ui.icons.status_tick}),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(current_page)]}),rumext.v2.jsx("input",{'type':"checkbox",'id':""+"page-"+(current_page_id ?? ""),'data-page-id':""+(current_page_id ?? ""),'onChange':on_mark_checked_page,'checked':true}),rumext.v2.jsx("span",{'children':[" ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.share-link.current-tag"))].join('')})]}):rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_viewer_share_link__select-all-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_viewer_share_link__checkbox-wrapper",'children':rumext.v2.jsxs("label",{'htmlFor':"view-all",'className':"main_ui_viewer_share_link__select-all-label",'children':[rumext.v2.jsx("span",{'className':(cljs.core.truth_(all_selected_QMARK_)?"checked":""),'children':(cljs.core.truth_(all_selected_QMARK_)?app.main.ui.icons.status_tick:null)}),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.share-link.view-all"),rumext.v2.jsx("input",{'type':"checkbox",'id':"view-all",'checked':all_selected_QMARK_,'name':"pages-mode",'onChange':on_toggle_all})]})}),rumext.v2.jsx("span",{'className':"main_ui_viewer_share_link__count-pages",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("common.share-link.page-shared",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(cljs.core.count(selected))], 0))})]}),rumext.v2.jsx("ul",{'className':"main_ui_viewer_share_link__pages-selection",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__58650){
var map__58651 = p__58650;
var map__58651__$1 = cljs.core.__destructure_map(map__58651);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58651__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58651__$1,new cljs.core.Keyword(null,"name","name",1843675177));
out_arr__35152__auto__.push(rumext.v2.jsx("li",{'className':"main_ui_viewer_share_link__checkbox-wrapper",'children':rumext.v2.jsxs("label",{'htmlFor':""+"page-"+(id ?? ""),'children':[rumext.v2.jsx("span",{'className':((cljs.core.contains_QMARK_(selected,id))?"checked":""),'children':((cljs.core.contains_QMARK_(selected,id))?app.main.ui.icons.status_tick:null)}),name,((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_page_id,id))?rumext.v2.jsx("div",{'className':"main_ui_viewer_share_link__current-tag",'children':""+" "+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.share-link.current-tag") ?? "")}):null),rumext.v2.jsx("input",{'type':"checkbox",'id':""+"page-"+(id ?? ""),'data-page-id':""+(id ?? ""),'onChange':on_mark_checked_page,'checked':cljs.core.contains_QMARK_(selected,id)})]})},""+(id ?? "")));

return out_arr__35152__auto__;
}),[],pages)})]}))})]});
})(),rumext.v2.jsxs("div",{'className':"main_ui_viewer_share_link__access-mode",'children':[rumext.v2.jsx("div",{'className':"main_ui_viewer_share_link__subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.share-link.permissions-can-comment")}),rumext.v2.jsx("div",{'className':"main_ui_viewer_share_link__items",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'class':"main_ui_viewer_share_link__who-comment-select",'default-value':""+(new cljs.core.Keyword(null,"who-comment","who-comment",-313192010).cljs$core$IFn$_invoke$arity$1(options) ?? ""),'options':new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"team",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.share-link.team-members")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"all",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.share-link.all-users")], null)], null),'on-change':on_comment_change})})]}),rumext.v2.jsxs("div",{'className':"main_ui_viewer_share_link__inspect-mode",'children':[rumext.v2.jsx("div",{'className':"main_ui_viewer_share_link__subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.share-link.permissions-can-inspect")}),rumext.v2.jsx("div",{'className':"main_ui_viewer_share_link__items",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'class':"main_ui_viewer_share_link__who-inspect-select",'default-value':""+(new cljs.core.Keyword(null,"who-inspect","who-inspect",525863768).cljs$core$IFn$_invoke$arity$1(options) ?? ""),'options':new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"team",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.share-link.team-members")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"all",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("common.share-link.all-users")], null)], null),'on-change':on_inspect_change})})]})]}):null)]}):null)]})]})});
});

(app.main.ui.viewer.share_link.share_link_dialog.displayName = "share-link-dialog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"share-link","share-link",1324379138),app.main.ui.viewer.share_link.share_link_dialog);
}));

//# sourceMappingURL=app.main.ui.viewer.share_link.js.map
