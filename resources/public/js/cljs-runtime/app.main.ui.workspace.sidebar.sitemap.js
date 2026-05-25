import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.main.data.common.js";
import "./app.main.data.helpers.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.js";
import "./app.main.features.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.notifications.badge.js";
import "./app.render_wasm.api.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./app.util.timers.js";
import "./cuerdas.core.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.sitemap');
/**
 * A derived state of the current file, without data with the
 *   exception of list of pages
 */
app.main.ui.workspace.sidebar.sitemap.ref_COLON_file_with_pages = okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (p__56135){
var map__56136 = p__56135;
var map__56136__$1 = cljs.core.__destructure_map(map__56136);
var file = map__56136__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56136__$1,new cljs.core.Keyword(null,"data","data",-232669377));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"pages","pages",-285406513),new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(data));
}),app.main.refs.file,cljs.core._EQ_);
/**
 * Create a derived state that poins to a page identified by `page-id`
 *   without including the page objects (mainly for avoid rerender on
 *   each object change)
 */
app.main.ui.workspace.sidebar.sitemap.make_page_ref = (function app$main$ui$workspace$sidebar$sitemap$make_page_ref(page_id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3((function (fdata){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.get_page(fdata,page_id),new cljs.core.Keyword(null,"objects","objects",2099713734));
}),app.main.refs.workspace_data,cljs.core._EQ_);
});
app.main.ui.workspace.sidebar.sitemap.page_item = (function app$main$ui$workspace$sidebar$sitemap$page_item(props_56138){
var selected_QMARK_ = (props_56138["selected?"]);
var editing_QMARK_ = (props_56138["editing?"]);
var hovering_QMARK_ = (props_56138["hovering?"]);
var index = props_56138.index;
var deletable_QMARK_ = (props_56138["deletable?"]);
var page = props_56138.page;
var current_page_id = (props_56138["current-page-id"]);
var input_ref = rumext.v2.use_ref();
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page);
var delete_fn = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.delete_page(id));
}));
var navigate_fn = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"page-id","page-id",-872941168),id], 0))], 0));
}));
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id),rumext.v2.adapt(current_page_id)],(function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1");
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,current_page_id);
} else {
return and__5023__auto__;
}
})())){
(app.render_wasm.api.capture_canvas_pixels.cljs$core$IFn$_invoke$arity$0 ? app.render_wasm.api.capture_canvas_pixels.cljs$core$IFn$_invoke$arity$0() : app.render_wasm.api.capture_canvas_pixels.call(null));

app.render_wasm.api.apply_canvas_blur();

return app.util.timers.raf((function (){
return app.util.timers.raf(navigate_fn);
}));
} else {
return (navigate_fn.cljs$core$IFn$_invoke$arity$0 ? navigate_fn.cljs$core$IFn$_invoke$arity$0() : navigate_fn.call(null));
}
}));
var on_delete = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-page.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-page.body"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),delete_fn], null)));
}));
var on_double_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(read_only_QMARK_)],(function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

if(cljs.core.truth_(read_only_QMARK_)){
return null;
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.start_rename_page_item(id));
}
}));
var on_blur = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var name = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_target_val(event));
if(cuerdas.core.empty_QMARK_(name)){
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.rename_page(id,name));
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.stop_rename_page_item());
}));
var on_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_blur.cljs$core$IFn$_invoke$arity$1 ? on_blur.cljs$core$IFn$_invoke$arity$1(event) : on_blur.call(null,event));
} else {
if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.stop_rename_page_item());
} else {
return null;
}
}
}));
var on_drop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id),rumext.v2.adapt(index)],(function (side,p__56144){
var map__56145 = p__56144;
var map__56145__$1 = cljs.core.__destructure_map(map__56145);
var data = map__56145__$1;
var id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56145__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var index__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bot","bot",-950896508),side))?(index + (1)):index);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.relocate_page(id__$1,index__$1));
}));
var vec__56139 = app.main.ui.hooks.use_sortable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data-type","data-type",-326421468),"penpot/page",new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),on_drop,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(page)], null),new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),((cljs.core.not(read_only_QMARK_)) && (cljs.core.not(editing_QMARK_)))], 0));
var dprops = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56139,(0),null);
var dref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56139,(1),null);
var on_context_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id),rumext.v2.adapt(read_only_QMARK_)],(function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

if(cljs.core.truth_(read_only_QMARK_)){
return null;
} else {
var position = app.util.dom.get_client_position(event);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.show_page_item_context_menu(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"page","page",849072397),page,new cljs.core.Keyword(null,"deletable?","deletable?",2134719819),deletable_QMARK_], null)));
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_QMARK_)],(function (){
if(cljs.core.truth_(selected_QMARK_)){
var node = rumext.v2.ref_val(dref);
return app.util.dom.scroll_into_view_if_needed_BANG_.cljs$core$IFn$_invoke$arity$1(node);
} else {
return null;
}
}));

rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(editing_QMARK_)],(function (){
if(cljs.core.truth_(editing_QMARK_)){
var edit_input_56160 = rumext.v2.ref_val(input_ref);
app.util.dom.select_text_BANG_(edit_input_56160);

return null;
} else {
return null;
}
}));

return rumext.v2.jsx("li",{'ref':dref,'className':"main_ui_workspace_sidebar_sitemap__page-element"+" "+(cljs.core.truth_(selected_QMARK_)?"main_ui_workspace_sidebar_sitemap__selected":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"top","top",-1856271961)))?"main_ui_workspace_sidebar_sitemap__dnd-over-top":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"bot","bot",-950896508)))?"main_ui_workspace_sidebar_sitemap__dnd-over-bot":""),'children':rumext.v2.jsxs("div",{'data-testid':""+"page-"+(id ?? ""),'tabIndex':"0",'onClick':on_click,'onDoubleClick':on_double_click,'onContextMenu':on_context_menu,'className':"main_ui_workspace_sidebar_sitemap__element-list-body"+" "+(cljs.core.truth_(hovering_QMARK_)?"main_ui_workspace_sidebar_sitemap__hover":"")+" "+(cljs.core.truth_(selected_QMARK_)?"main_ui_workspace_sidebar_sitemap__selected":""),'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_sitemap__page-icon",'children':app.main.ui.icons.document}),(cljs.core.truth_(editing_QMARK_)?rumext.v2.jsx(rumext.v2.Fragment,{'children':rumext.v2.jsx("input",{'type':"text",'ref':input_ref,'onBlur':on_blur,'onKeyDown':on_key_down,'autoFocus':true,'defaultValue':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(page,""),'className':"main_ui_workspace_sidebar_sitemap__element-name"})}):rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("span",{'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(page),'data-testid':"page-name",'className':"main_ui_workspace_sidebar_sitemap__page-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(page)}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_sitemap__page-actions",'children':(cljs.core.truth_((function (){var and__5023__auto__ = deletable_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(read_only_QMARK_);
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("button",{'onClick':on_delete,'children':app.main.ui.icons.delete$}):null)})]}))]})});
});

(app.main.ui.workspace.sidebar.sitemap.page_item.displayName = "page-item");

app.main.ui.workspace.sidebar.sitemap.page_item_wrapper = (function app$main$ui$workspace$sidebar$sitemap$page_item_wrapper(props_56147){
var selected_QMARK_ = (props_56147["selected?"]);
var editing_QMARK_ = (props_56147["editing?"]);
var index = props_56147.index;
var deletable_QMARK_ = (props_56147["deletable?"]);
var page_id = (props_56147["page-id"]);
var current_page_id = (props_56147["current-page-id"]);
var page_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(page_id)],(function (){
return app.main.ui.workspace.sidebar.sitemap.make_page_ref(page_id);
}));
var page = rumext.v2.deref(page_ref);
return rumext.v2.jsx(app.main.ui.workspace.sidebar.sitemap.page_item,{'page':page,'index':index,'current-page-id':current_page_id,'deletable?':deletable_QMARK_,'selected?':selected_QMARK_,'editing?':editing_QMARK_});
});

(app.main.ui.workspace.sidebar.sitemap.page_item_wrapper.displayName = "page-item-wrapper");

app.main.ui.workspace.sidebar.sitemap.pages_list_STAR_ = (function app$main$ui$workspace$sidebar$sitemap$pages_list_STAR_(props_56148){
var file = props_56148.file;
var pages = new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(file);
var deletable_QMARK_ = (cljs.core.count(pages) > (1));
var editing_page_id = rumext.v2.deref(app.main.refs.editing_page_item);
var current_page_id = rumext.v2.use_ctx(app.main.ui.context.current_page_id);
return rumext.v2.jsx("ul",{'className':"main_ui_workspace_sidebar_sitemap__page-list",'children':rumext.v2.jsx(app.main.ui.hooks.sortable_container_STAR_,{'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__56150){
var vec__56151 = p__56150;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56151,(0),null);
var page_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56151,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.sitemap.page_item_wrapper,{'page-id':page_id,'index':index,'deletable?':deletable_QMARK_,'editing?':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,editing_page_id),'selected?':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,current_page_id),'current-page-id':current_page_id},page_id));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(pages))})});
});

(app.main.ui.workspace.sidebar.sitemap.pages_list_STAR_.displayName = "pages-list*");

app.main.ui.workspace.sidebar.sitemap.sitemap_STAR_ = (function app$main$ui$workspace$sidebar$sitemap$sitemap_STAR_(props_56154){
var height = props_56154.height;
var collapsed = props_56154.collapsed;
var on_toggle_collapsed = props_56154.onToggleCollapsed;
var file = rumext.v2.deref(app.main.ui.workspace.sidebar.sitemap.ref_COLON_file_with_pages);
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"id","id",-1388402092));
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"project-id","project-id",206449307));
var on_create = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(project_id)],(function (event){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.create_page(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id], null)));

return app.util.dom.blur_BANG_(app.util.dom.get_current_target(event));
}));
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var permissions = rumext.v2.use_ctx(app.main.ui.context.permissions);
return rumext.v2.jsxs("div",{'style':{'--height':""+(height ?? "")+"px"},'className':"main_ui_workspace_sidebar_sitemap__sitemap",'children':[rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':true,'collapsed':collapsed,'onCollapsed':on_toggle_collapsed,'allClickable':true,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.sitemap"),'className':"main_ui_workspace_sidebar_sitemap__title-spacing-sitemap",'children':((read_only_QMARK_)?((new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(permissions))?rumext.v2.jsx(app.main.ui.notifications.badge.badge_notification,{'is-focus':true,'size':new cljs.core.Keyword(null,"small","small",2133478704),'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.view-only")}):null):rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'className':"main_ui_workspace_sidebar_sitemap__add-page",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.sitemap.add-page"),'onClick':on_create,'icon':app.main.ui.ds.foundations.assets.icon.add}))}),((collapsed)?null:rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_sitemap__tool-window-content",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.sitemap.pages_list_STAR_,{'file':file},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file) ?? ""))}))]});
});

(app.main.ui.workspace.sidebar.sitemap.sitemap_STAR_.displayName = "sitemap*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.sitemap.js.map
