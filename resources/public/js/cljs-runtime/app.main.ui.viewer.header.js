import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.data.modal.js";
import "./app.main.data.shortcuts.js";
import "./app.main.data.viewer.js";
import "./app.main.data.viewer.shortcuts.js";
import "./app.main.store.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.exports.assets.js";
import "./app.main.ui.formats.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.viewer.comments.js";
import "./app.main.ui.viewer.interactions.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.viewer.header');
app.main.ui.viewer.header.fullscreen_ref = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498)),new cljs.core.Keyword(null,"fullscreen?","fullscreen?",-1171717820));
}),app.main.store.state);
app.main.ui.viewer.header.open_login_dialog = (function app$main$ui$viewer$header$open_login_dialog(){
return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"login-register","login-register",1592630494),cljs.core.PersistentArrayMap.EMPTY);
});
app.main.ui.viewer.header.zoom_widget = rumext.v2.memo_SINGLEQUOTE_((function app$main$ui$viewer$header$zoom_widget(props_54424){
var on_fullscreen = (props_54424["on-fullscreen"]);
var on_zoom_reset = (props_54424["on-zoom-reset"]);
var zoom = props_54424.zoom;
var on_zoom_fit = (props_54424["on-zoom-fit"]);
var on_zoom_fill = (props_54424["on-zoom-fill"]);
var on_decrease = (props_54424["on-decrease"]);
var on_increase = (props_54424["on-increase"]);
var props = props_54424;
var open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var open_QMARK_ = cljs.core.deref(open_STAR_);
var open_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return cljs.core.reset_BANG_(open_STAR_,true);
}));
var close_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return cljs.core.reset_BANG_(open_STAR_,false);
}));
var on_increase__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_increase)],(function (event){
app.util.dom.stop_propagation(event);

return (on_increase.cljs$core$IFn$_invoke$arity$0 ? on_increase.cljs$core$IFn$_invoke$arity$0() : on_increase.call(null));
}));
var on_decrease__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_decrease)],(function (event){
app.util.dom.stop_propagation(event);

return (on_decrease.cljs$core$IFn$_invoke$arity$0 ? on_decrease.cljs$core$IFn$_invoke$arity$0() : on_decrease.call(null));
}));
return rumext.v2.jsxs("div",{'onClick':open_dropdown,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.zoom"),'className':"main_ui_viewer_header__zoom-widget"+" "+(cljs.core.truth_(open_QMARK_)?"main_ui_viewer_header__selected":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_viewer_header__label",'children':app.main.ui.formats.format_percent.cljs$core$IFn$_invoke$arity$1(zoom)}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':open_QMARK_,'on-close':close_dropdown,'children':rumext.v2.jsxs("ul",{'className':"main_ui_viewer_header__dropdown",'children':[rumext.v2.jsxs("li",{'className':"main_ui_viewer_header__basic-zoom-bar",'children':[rumext.v2.jsxs("span",{'className':"main_ui_viewer_header__zoom-btns",'children':[rumext.v2.jsx("button",{'onClick':on_decrease__$1,'className':"main_ui_viewer_header__zoom-btn",'children':rumext.v2.jsx("span",{'className':"main_ui_viewer_header__zoom-icon",'children':app.main.ui.icons.remove_icon})}),rumext.v2.jsx("p",{'className':"main_ui_viewer_header__zoom-text",'children':app.main.ui.formats.format_percent.cljs$core$IFn$_invoke$arity$1(zoom)}),rumext.v2.jsx("button",{'onClick':on_increase__$1,'className':"main_ui_viewer_header__zoom-btn",'children':rumext.v2.jsx("span",{'className':"main_ui_viewer_header__zoom-icon",'children':app.main.ui.icons.add})})]}),rumext.v2.jsx("button",{'onClick':on_zoom_reset,'className':"main_ui_viewer_header__reset-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.reset-zoom")})]}),rumext.v2.jsxs("li",{'onClick':on_zoom_fit,'className':"main_ui_viewer_header__zoom-option",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.zoom-fit"),rumext.v2.jsx("span",{'className':"main_ui_viewer_header__shortcuts",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_viewer_header__shortcut-key",'children':sc},""+"zoom-fit-"+(sc ?? "")));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.viewer.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-zoom-style","toggle-zoom-style",-1590983685))))})]}),rumext.v2.jsxs("li",{'onClick':on_zoom_fill,'className':"main_ui_viewer_header__zoom-option",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.zoom-fill"),rumext.v2.jsx("span",{'className':"main_ui_viewer_header__shortcuts",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_viewer_header__shortcut-key",'children':sc},""+"zoom-fill-"+(sc ?? "")));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.viewer.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-zoom-style","toggle-zoom-style",-1590983685))))})]}),rumext.v2.jsxs("li",{'onClick':on_fullscreen,'className':"main_ui_viewer_header__zoom-option",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.zoom-full-screen"),rumext.v2.jsx("span",{'className':"main_ui_viewer_header__shortcuts",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,sc){
out_arr__35152__auto__.push(rumext.v2.jsx("span",{'className':"main_ui_viewer_header__shortcut-key",'children':sc},""+"zoom-fullscreen-"+(sc ?? "")));

return out_arr__35152__auto__;
}),[],app.main.data.shortcuts.split_sc(app.main.data.viewer.shortcuts.get_tooltip(new cljs.core.Keyword(null,"toggle-fullscreen","toggle-fullscreen",-1647254833))))})]})]})})]});
}));

(app.main.ui.viewer.header.zoom_widget.displayName = "zoom-widget");

app.main.ui.viewer.header.header_options = (function app$main$ui$viewer$header$header_options(props_54425){
var map__54426 = rumext.v2.util.wrap_props(props_54425);
var map__54426__$1 = cljs.core.__destructure_map(map__54426);
var section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54426__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54426__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54426__$1,new cljs.core.Keyword(null,"page","page",849072397));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54426__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54426__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54426__$1,new cljs.core.Keyword(null,"permissions","permissions",67803075));
var interactions_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54426__$1,new cljs.core.Keyword(null,"interactions-mode","interactions-mode",-1234827377));
var share = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54426__$1,new cljs.core.Keyword(null,"share","share",-589433933));
var fullscreen_QMARK_ = rumext.v2.deref(app.main.ui.viewer.header.fullscreen_ref);
var toggle_fullscreen = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.toggle_fullscreen);
}));
var go_to_workspace = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(page)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.go_to_workspace.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page)));
}));
var open_share_dialog = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(page)],(function (){
app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"share-link","share-link",1324379138),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"file","file",-1269645878),file], null));

return app.main.data.modal.disallow_click_outside_BANG_();
}));
var handle_increase = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.increase_zoom);
}));
var handle_decrease = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.decrease_zoom);
}));
var handle_zoom_reset = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.reset_zoom);
}));
var handle_zoom_fill = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.zoom_to_fill);
}));
var handle_zoom_fit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.zoom_to_fit);
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(permissions),rumext.v2.adapt(share)],(function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"in-team","in-team",1291962061).cljs$core$IFn$_invoke$arity$1(permissions);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = new cljs.core.Keyword(null,"is-admin","is-admin",-1352205216).cljs$core$IFn$_invoke$arity$1(permissions);
if(cljs.core.truth_(and__5023__auto____$1)){
return share;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return (open_share_dialog.cljs$core$IFn$_invoke$arity$0 ? open_share_dialog.cljs$core$IFn$_invoke$arity$0() : open_share_dialog.call(null));
} else {
return null;
}
}));

return rumext.v2.jsxs("div",{'className':"main_ui_viewer_header__options-zone",'children':[rumext.v2.jsx(app.main.ui.exports.assets.progress_widget,{}),(function (){var G__54427 = section;
var G__54427__$1 = (((G__54427 instanceof cljs.core.Keyword))?G__54427.fqn:null);
switch (G__54427__$1) {
case "interactions":
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_(index)?rumext.v2.jsx(app.main.ui.viewer.interactions.flows_menu_STAR_,{'page':page,'index':index}):null),rumext.v2.jsx(app.main.ui.viewer.interactions.interactions_menu_STAR_,{'interactionsMode':interactions_mode})]});

break;
case "comments":
return rumext.v2.jsx(app.main.ui.viewer.comments.comments_menu,{});

break;
default:
return rumext.v2.jsx("div",{'className':"main_ui_viewer_header__view-options"});

}
})(),rumext.v2.jsx(app.main.ui.viewer.header.zoom_widget,{'zoom':zoom,'on-increase':handle_increase,'on-decrease':handle_decrease,'on-zoom-reset':handle_zoom_reset,'on-zoom-fill':handle_zoom_fill,'on-zoom-fit':handle_zoom_fit,'on-fullscreen':toggle_fullscreen}),(cljs.core.truth_(new cljs.core.Keyword(null,"in-team","in-team",1291962061).cljs$core$IFn$_invoke$arity$1(permissions))?rumext.v2.jsx("span",{'onClick':go_to_workspace,'className':"main_ui_viewer_header__edit-btn",'children':app.main.ui.icons.curve}):null),rumext.v2.jsx("span",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("viewer.header.fullscreen"),'onClick':toggle_fullscreen,'className':"main_ui_viewer_header__fullscreen-btn"+" "+(cljs.core.truth_(fullscreen_QMARK_)?"main_ui_viewer_header__selected":""),'children':app.main.ui.icons.expand}),(cljs.core.truth_(new cljs.core.Keyword(null,"in-team","in-team",1291962061).cljs$core$IFn$_invoke$arity$1(permissions))?rumext.v2.jsx("button",{'onClick':open_share_dialog,'className':"main_ui_viewer_header__share-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.share")}):null),(cljs.core.truth_(new cljs.core.Keyword(null,"is-logged","is-logged",702589853).cljs$core$IFn$_invoke$arity$1(permissions))?null:rumext.v2.jsx("span",{'onClick':app.main.ui.viewer.header.open_login_dialog,'className':"main_ui_viewer_header__go-log-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.log-or-sign")}))]});
});

(app.main.ui.viewer.header.header_options.displayName = "header-options");

app.main.ui.viewer.header.header_sitemap = (function app$main$ui$viewer$header$header_sitemap(props_54428){
var map__54429 = rumext.v2.util.wrap_props(props_54428);
var map__54429__$1 = cljs.core.__destructure_map(map__54429);
var props = map__54429__$1;
var project = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54429__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54429__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54429__$1,new cljs.core.Keyword(null,"page","page",849072397));
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54429__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var toggle_thumbnails = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54429__$1,new cljs.core.Keyword(null,"toggle-thumbnails","toggle-thumbnails",-1994383704));
var project_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project);
var file_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file);
var page_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(page);
var page_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page);
var frame_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(frame);
var show_dropdown_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var open_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_dropdown_QMARK_,true);
}));
var close_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_dropdown_QMARK_,false);
}));
var navigate_to = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (page_id__$1){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.go_to_page(page_id__$1));

return cljs.core.reset_BANG_(show_dropdown_QMARK_,false);
}));
return rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("viewer.header.sitemap"),'className':"main_ui_viewer_header__sitemap-zone",'children':[rumext.v2.jsx("span",{'className':"main_ui_viewer_header__project-name",'children':project_name}),rumext.v2.jsxs("div",{'className':"main_ui_viewer_header__sitemap-text",'children':[rumext.v2.jsxs("div",{'onClick':open_dropdown,'className':"main_ui_viewer_header__breadcrumb",'children':[rumext.v2.jsx("span",{'className':"main_ui_viewer_header__breadcrumb-text",'children':""+(file_name ?? "")+" / "+(page_name ?? "")}),rumext.v2.jsx("span",{'className':"main_ui_viewer_header__icon",'children':app.main.ui.icons.arrow}),rumext.v2.jsx("span",{'children':"/"}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':cljs.core.deref(show_dropdown_QMARK_),'on-close':close_dropdown,'children':rumext.v2.jsx("ul",{'className':"main_ui_viewer_header__dropdown-sitemap",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,id){
out_arr__35152__auto__.push(rumext.v2.jsxs("li",{'id':""+(id ?? ""),'onClick':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(navigate_to,id),'className':"main_ui_viewer_header__dropdown-element"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,id))?"main_ui_viewer_header__selected":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_viewer_header__label",'children':cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145),id,new cljs.core.Keyword(null,"name","name",1843675177)], null))}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,id))?rumext.v2.jsx("span",{'className':"main_ui_viewer_header__icon-check",'children':app.main.ui.icons.tick}):null)]},""+(id ?? "")));

return out_arr__35152__auto__;
}),[],cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"pages","pages",-285406513)], null)))})})]}),rumext.v2.jsxs("div",{'id':"current-frame",'onClick':toggle_thumbnails,'className':"main_ui_viewer_header__current-frame",'children':[rumext.v2.jsx("span",{'className':"main_ui_viewer_header__frame-name",'children':frame_name}),rumext.v2.jsx("span",{'className':"main_ui_viewer_header__icon",'children':app.main.ui.icons.arrow})]})]})]});
});

(app.main.ui.viewer.header.header_sitemap.displayName = "header-sitemap");

app.main.ui.viewer.header.penpot_logo_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_viewer_header__logo-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-penpot-logo-icon"})});
app.main.ui.viewer.header.header = (function app$main$ui$viewer$header$header(props_54436){
var map__54437 = rumext.v2.util.wrap_props(props_54436);
var map__54437__$1 = cljs.core.__destructure_map(map__54437);
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54437__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54437__$1,new cljs.core.Keyword(null,"permissions","permissions",67803075));
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54437__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54437__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54437__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54437__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var shown_thumbnails = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54437__$1,new cljs.core.Keyword(null,"shown-thumbnails","shown-thumbnails",-749491477));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54437__$1,new cljs.core.Keyword(null,"page","page",849072397));
var interactions_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54437__$1,new cljs.core.Keyword(null,"interactions-mode","interactions-mode",-1234827377));
var project = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54437__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var share = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54437__$1,new cljs.core.Keyword(null,"share","share",-589433933));
var go_to_dashboard = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.go_to_dashboard());
}));
var go_to_inspect = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(permissions)],(function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"is-logged","is-logged",702589853).cljs$core$IFn$_invoke$arity$1(permissions))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.viewer.close_thumbnails_panel,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.viewer.go_to_section(new cljs.core.Keyword(null,"inspect","inspect",688794057))], 0));
} else {
return app.main.ui.viewer.header.open_login_dialog();
}
}));
var navigate = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(permissions)],(function (event){
var section__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section__$1,new cljs.core.Keyword(null,"interactions","interactions",550841811));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"is-logged","is-logged",702589853).cljs$core$IFn$_invoke$arity$1(permissions);
}
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.go_to_section(section__$1));
} else {
return app.main.ui.viewer.header.open_login_dialog();
}
}));
var toggle_thumbnails = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.toggle_thumbnails_panel);
}));
var close_thumbnails = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shown_thumbnails)],(function (_){
if(cljs.core.truth_(shown_thumbnails)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.close_thumbnails_panel);
} else {
return null;
}
}));
return rumext.v2.jsxs("header",{'onClick':close_thumbnails,'className':"main_ui_viewer_header__viewer-header"+" "+(cljs.core.truth_(rumext.v2.deref(app.main.ui.viewer.header.fullscreen_ref))?"main_ui_viewer_header__fullscreen":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_viewer_header__nav-zone",'children':[rumext.v2.jsx("a",{'onClick':go_to_dashboard,'data-testid':"penpot-logo-link",'style':{'cursor':(cljs.core.truth_(new cljs.core.Keyword(null,"in-team","in-team",1291962061).cljs$core$IFn$_invoke$arity$1(permissions))?null:"auto"),'pointerEvents':(cljs.core.truth_(new cljs.core.Keyword(null,"in-team","in-team",1291962061).cljs$core$IFn$_invoke$arity$1(permissions))?null:"none")},'className':"main_ui_viewer_header__home-link",'children':app.main.ui.viewer.header.penpot_logo_icon}),rumext.v2.jsx(app.main.ui.viewer.header.header_sitemap,{'project':project,'file':file,'page':page,'frame':frame,'toggle-thumbnails':toggle_thumbnails,'index':index})]}),rumext.v2.jsxs("div",{'className':"main_ui_viewer_header__mode-zone",'children':[rumext.v2.jsx("button",{'onClick':navigate,'data-value':"interactions",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("viewer.header.interactions-section",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.viewer.shortcuts.get_tooltip(new cljs.core.Keyword(null,"open-interactions","open-interactions",674426882))], 0)),'className':"main_ui_viewer_header__mode-zone-btn"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"interactions","interactions",550841811)))?"main_ui_viewer_header__selected":""),'children':app.main.ui.icons.play}),(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"in-team","in-team",1291962061).cljs$core$IFn$_invoke$arity$1(permissions);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"who-comment","who-comment",-313192010).cljs$core$IFn$_invoke$arity$1(permissions),"all");
}
})())?rumext.v2.jsx("button",{'onClick':navigate,'data-value':"comments",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("viewer.header.comments-section",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.viewer.shortcuts.get_tooltip(new cljs.core.Keyword(null,"open-comments","open-comments",-198204701))], 0)),'className':"main_ui_viewer_header__mode-zone-btn"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"comments","comments",-293346423)))?"main_ui_viewer_header__selected":""),'children':app.main.ui.icons.comments}):null),(cljs.core.truth_((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"in-team","in-team",1291962061).cljs$core$IFn$_invoke$arity$1(permissions);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(permissions),new cljs.core.Keyword(null,"share-link","share-link",1324379138))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"who-inspect","who-inspect",525863768).cljs$core$IFn$_invoke$arity$1(permissions),"all")));
}
})())?rumext.v2.jsx("button",{'onClick':go_to_inspect,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("viewer.header.inspect-section",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.viewer.shortcuts.get_tooltip(new cljs.core.Keyword(null,"open-inspect","open-inspect",-59540794))], 0)),'className':"main_ui_viewer_header__mode-zone-btn"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"inspect","inspect",688794057)))?"main_ui_viewer_header__selected":""),'children':app.main.ui.icons.code}):null)]}),rumext.v2.jsx(app.main.ui.viewer.header.header_options,{'section':section,'permissions':permissions,'page':page,'file':file,'index':index,'zoom':zoom,'interactions-mode':interactions_mode,'share':share})]});
});

(app.main.ui.viewer.header.header.displayName = "header");


//# sourceMappingURL=app.main.ui.viewer.header.js.map
