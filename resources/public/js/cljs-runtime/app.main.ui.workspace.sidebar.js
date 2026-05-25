import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.types.tokens_lib.js";
import "./app.config.js";
import "./app.main.constants.js";
import "./app.main.data.common.js";
import "./app.main.data.event.js";
import "./app.main.data.style_dictionary.js";
import "./app.main.data.tokenscript.js";
import "./app.main.data.workspace.js";
import "./app.main.features.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.layout.tab_switcher.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.hooks.resize.js";
import "./app.main.ui.workspace.comments.js";
import "./app.main.ui.workspace.left_header.js";
import "./app.main.ui.workspace.right_header.js";
import "./app.main.ui.workspace.sidebar.assets.js";
import "./app.main.ui.workspace.sidebar.debug.js";
import "./app.main.ui.workspace.sidebar.debug_shape_info.js";
import "./app.main.ui.workspace.sidebar.history.js";
import "./app.main.ui.workspace.sidebar.layers.js";
import "./app.main.ui.workspace.sidebar.options.js";
import "./app.main.ui.workspace.sidebar.shortcuts.js";
import "./app.main.ui.workspace.sidebar.sitemap.js";
import "./app.main.ui.workspace.sidebar.versions.js";
import "./app.main.ui.workspace.tokens.sidebar.js";
import "./app.util.debug.js";
import "./app.util.i18n.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar');
app.main.ui.workspace.sidebar.toggle_collapse_left_sidebar = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.store.emit_BANG_,app.main.data.workspace.toggle_layout_flag(new cljs.core.Keyword(null,"collapse-left-sidebar","collapse-left-sidebar",-1883177143)));
app.main.ui.workspace.sidebar.collapse_button_STAR_ = (function app$main$ui$workspace$sidebar$collapse_button_STAR_(props_56388){
return rumext.v2.jsx("button",{'onClick':app.main.ui.workspace.sidebar.toggle_collapse_left_sidebar,'className':"main_ui_workspace_sidebar__collapse-sidebar-button",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow,'size':"s",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.collapse")})});
});

(app.main.ui.workspace.sidebar.collapse_button_STAR_.displayName = "collapse-button*");

app.main.ui.workspace.sidebar.collapsed_button_STAR_ = rumext.v2.memo_SINGLEQUOTE_((function app$main$ui$workspace$sidebar$collapsed_button_STAR_(props_56389){
return rumext.v2.jsx("div",{'id':"left-sidebar-aside",'data-width':"0",'className':"main_ui_workspace_sidebar__collapsed-sidebar",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar__collapsed-title",'children':rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.expand"),'onClick':app.main.ui.workspace.sidebar.toggle_collapse_left_sidebar,'className':"main_ui_workspace_sidebar__collapsed-button",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow,'size':"s",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.expand")})})})});
}));

(app.main.ui.workspace.sidebar.collapsed_button_STAR_.displayName = "collapsed-button*");

app.main.ui.workspace.sidebar.layers_content_STAR_ = rumext.v2.memo_SINGLEQUOTE_((function app$main$ui$workspace$sidebar$layers_content_STAR_(props_56394){
var layout = props_56394.layout;
var width = props_56394.width;
var map__56395 = app.main.ui.hooks.resize.use_resize_hook.cljs$core$IFn$_invoke$arity$7(new cljs.core.Keyword(null,"sitemap","sitemap",-1803284096),(200),(38),"0.6",new cljs.core.Keyword(null,"y","y",-1757859776),false,null);
var map__56395__$1 = cljs.core.__destructure_map(map__56395);
var on_pointer_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56395__$1,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138));
var on_lost_pointer_capture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56395__$1,new cljs.core.Keyword(null,"on-lost-pointer-capture","on-lost-pointer-capture",-1554883134));
var on_pointer_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56395__$1,new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56395__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var sitemap_collapsed_STAR_ = app.main.ui.hooks.use_persisted_state(new cljs.core.Keyword("app.main.ui.workspace.sidebar","sitemap-collapsed","app.main.ui.workspace.sidebar/sitemap-collapsed",-1053391535),false);
var sitemap_collapsed_QMARK_ = cljs.core.deref(sitemap_collapsed_STAR_);
var on_toggle_sitemap_collapsed = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(sitemap_collapsed_STAR_,cljs.core.not);
}));
var sitemap_height = (cljs.core.truth_(sitemap_collapsed_QMARK_)?(32):height);
return rumext.v2.jsxs("article",{'style':{'--height':""+(height ?? "")+"px"},'className':"main_ui_workspace_sidebar__layers-tab",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.sitemap.sitemap_STAR_,{'layout':layout,'height':sitemap_height,'collapsed':sitemap_collapsed_QMARK_,'onToggleCollapsed':on_toggle_sitemap_collapsed}),((sitemap_collapsed_QMARK_)?null:rumext.v2.jsx("div",{'onPointerDown':on_pointer_down,'onLostPointerCapture':on_lost_pointer_capture,'onPointerMove':on_pointer_move,'className':"main_ui_workspace_sidebar__resize-area-horiz",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar__resize-handle-horiz"})})),rumext.v2.jsx(app.main.ui.workspace.sidebar.layers.layers_toolbox_STAR_,{'sizeParent':width})]});
}));

(app.main.ui.workspace.sidebar.layers_content_STAR_.displayName = "layers-content*");

app.main.ui.workspace.sidebar.left_sidebar_STAR_ = rumext.v2.memo_SINGLEQUOTE_((function app$main$ui$workspace$sidebar$left_sidebar_STAR_(props_56396){
var layout = props_56396.layout;
var resolved_active_tokens = props_56396.resolvedActiveTokens;
var file = props_56396.file;
var page_id = props_56396.pageId;
var active_tokens = props_56396.activeTokens;
var tokens_lib = props_56396.tokensLib;
var options_mode = rumext.v2.deref(app.main.refs.options_mode_global);
var project = rumext.v2.deref(app.main.refs.project);
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"id","id",-1388402092));
var design_tokens_QMARK_ = app.main.features.use_feature("design-tokens/v1");
var mode_inspect_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(options_mode,new cljs.core.Keyword(null,"inspect","inspect",688794057));
var shortcuts_QMARK_ = cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"shortcuts","shortcuts",1717107810));
var show_debug_QMARK_ = cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"debug-panel","debug-panel",-1624930518));
var section = ((((mode_inspect_QMARK_) || (cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"layers","layers",1944875032)))))?new cljs.core.Keyword(null,"layers","layers",1944875032):((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"assets","assets",210278279)))?new cljs.core.Keyword(null,"assets","assets",210278279):((cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"tokens","tokens",-818939304)))?new cljs.core.Keyword(null,"tokens","tokens",-818939304):null)));
var map__56397 = app.main.ui.hooks.resize.use_resize_hook.cljs$core$IFn$_invoke$arity$7(new cljs.core.Keyword(null,"left-sidebar","left-sidebar",-1413634357),app.main.constants.left_sidebar_default_width,app.main.constants.left_sidebar_default_width,app.main.constants.left_sidebar_default_max_width,new cljs.core.Keyword(null,"x","x",2099068185),false,new cljs.core.Keyword(null,"left","left",-399115937));
var map__56397__$1 = cljs.core.__destructure_map(map__56397);
var on_pointer_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56397__$1,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138));
var on_lost_pointer_capture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56397__$1,new cljs.core.Keyword(null,"on-lost-pointer-capture","on-lost-pointer-capture",-1554883134));
var on_pointer_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56397__$1,new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695));
var parent_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56397__$1,new cljs.core.Keyword(null,"parent-ref","parent-ref",-860935235));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56397__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var on_tab_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (id){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"layout","layout",-2120940921),cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(id)], 0)));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,"tokens")){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"open-tokens-tab"], null)));
} else {
return null;
}
}));
var tabs = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(mode_inspect_QMARK_),rumext.v2.adapt(design_tokens_QMARK_)],(function (){
if(mode_inspect_QMARK_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.layers"),new cljs.core.Keyword(null,"id","id",-1388402092),"layers"], null)], null);
} else {
if(design_tokens_QMARK_){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.layers"),new cljs.core.Keyword(null,"id","id",-1388402092),"layers"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.toolbar.assets"),new cljs.core.Keyword(null,"id","id",-1388402092),"assets"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Tokens",new cljs.core.Keyword(null,"id","id",-1388402092),"tokens"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.layers"),new cljs.core.Keyword(null,"id","id",-1388402092),"layers"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.toolbar.assets"),new cljs.core.Keyword(null,"id","id",-1388402092),"assets"], null)], null);
}
}
}));
var aside_class = "main_ui_workspace_sidebar__left-settings-bar"+" "+(((width <= (300)))?"two-row":"")+" "+(((((width > (300))) && ((width <= (400)))))?"three-row":"")+" "+(((width > (400)))?"four-row":"");
var tabs_action_button = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return rumext.v2.jsx(app.main.ui.workspace.sidebar.collapse_button_STAR_,{});
}));
return rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.sidebar),{'value':new cljs.core.Keyword(null,"left","left",-399115937),'children':rumext.v2.jsxs("aside",{'ref':parent_ref,'id':"left-sidebar-aside",'data-testid':"left-sidebar",'data-width':cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),'style':{'--left-sidebar-width':""+(width ?? "")+"px"},'className':aside_class,'children':[rumext.v2.jsx(app.main.ui.workspace.left_header.left_header_STAR_,{'file':file,'layout':layout,'project':project,'pageId':page_id,'className':"main_ui_workspace_sidebar__left-header"}),rumext.v2.jsx("div",{'onPointerDown':on_pointer_down,'onLostPointerCapture':on_lost_pointer_capture,'onPointerMove':on_pointer_move,'className':"main_ui_workspace_sidebar__resize-area"}),((shortcuts_QMARK_ === true)?rumext.v2.jsx(app.main.ui.workspace.sidebar.shortcuts.shortcuts_container_STAR_,{'className':"main_ui_workspace_sidebar__settings-bar-content"}):((show_debug_QMARK_ === true)?rumext.v2.jsx(app.main.ui.workspace.sidebar.debug.debug_panel_STAR_,{'className':"main_ui_workspace_sidebar__settings-bar-content"}):rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar__settings-bar-content",'children':rumext.v2.jsx(app.main.ui.ds.layout.tab_switcher.tab_switcher_STAR_,{'tabs':tabs,'default':"layers",'selected':cljs.core.name(section),'onChange':on_tab_change,'className':"main_ui_workspace_sidebar__left-sidebar-tabs",'actionButtonPosition':"start",'actionButton':tabs_action_button,'children':(function (){var G__56399 = section;
var G__56399__$1 = (((G__56399 instanceof cljs.core.Keyword))?G__56399.fqn:null);
switch (G__56399__$1) {
case "assets":
return rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.assets_toolbox_STAR_,{'size':(width - (58)),'fileId':file_id});

break;
case "tokens":
return rumext.v2.jsx(app.main.ui.workspace.tokens.sidebar.tokens_sidebar_tab_STAR_,{'tokensLib':tokens_lib,'activeTokens':active_tokens,'resolvedActiveTokens':resolved_active_tokens});

break;
case "layers":
return rumext.v2.jsx(app.main.ui.workspace.sidebar.layers_content_STAR_,{'layout':layout,'width':width});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56399__$1)].join('')));

}
})()})})
))]})});
}));

(app.main.ui.workspace.sidebar.left_sidebar_STAR_.displayName = "left-sidebar*");

app.main.ui.workspace.sidebar.on_close_document_history = (function app$main$ui$workspace$sidebar$on_close_document_history(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.remove_layout_flag(new cljs.core.Keyword(null,"document-history","document-history",1908608999)));
});
app.main.ui.workspace.sidebar.history_content_STAR_ = rumext.v2.memo_SINGLEQUOTE_((function app$main$ui$workspace$sidebar$history_content_STAR_(props_56401){
var selected_STAR_ = app.main.ui.hooks.use_persisted_state(new cljs.core.Keyword("app.main.ui.workspace.sidebar","history-sidebar","app.main.ui.workspace.sidebar/history-sidebar",214720554),"history");
var selected = cljs.core.deref(selected_STAR_);
var on_change_tab = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p1__56400_SHARP_){
return cljs.core.reset_BANG_(selected_STAR_,p1__56400_SHARP_);
}));
var tabs = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.versions.tab.history"),new cljs.core.Keyword(null,"id","id",-1388402092),"history"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.versions.tab.actions"),new cljs.core.Keyword(null,"id","id",-1388402092),"actions"], null)], null);
}));
var button = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close"),'onClick':app.main.ui.workspace.sidebar.on_close_document_history,'icon':app.main.ui.ds.foundations.assets.icon.close});
}));
return rumext.v2.jsx(app.main.ui.ds.layout.tab_switcher.tab_switcher_STAR_,{'tabs':tabs,'selected':selected,'onChange':on_change_tab,'className':"main_ui_workspace_sidebar__left-sidebar-tabs",'actionButtonPosition':"end",'actionButton':button,'children':(function (){var G__56403 = selected;
switch (G__56403) {
case "history":
return rumext.v2.jsx("article",{'className':"main_ui_workspace_sidebar__history-tab",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.versions.versions_toolbox_STAR_,{})});

break;
case "actions":
return rumext.v2.jsx("article",{'className':"main_ui_workspace_sidebar__versions-tab",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.history.history_toolbox_STAR_,{})});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__56403)].join('')));

}
})()});
}));

(app.main.ui.workspace.sidebar.history_content_STAR_.displayName = "history-content*");

app.main.ui.workspace.sidebar.right_sidebar_STAR_ = (function app$main$ui$workspace$sidebar$right_sidebar_STAR_(props_56405){
var drawing_tool = props_56405.drawingTool;
var layout = props_56405.layout;
var file = props_56405.file;
var section = props_56405.section;
var page_id = props_56405.pageId;
var active_tokens = props_56405.activeTokens;
var props = props_56405;
var is_comments_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(drawing_tool,new cljs.core.Keyword(null,"comments","comments",-293346423));
var is_history_QMARK_ = cljs.core.contains_QMARK_(layout,new cljs.core.Keyword(null,"document-history","document-history",1908608999));
var is_inspect_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"inspect","inspect",688794057));
var dbg_shape_panel_QMARK_ = app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"shape-panel","shape-panel",-2139910340));
var current_section_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"info","info",-317069002));
var current_section = cljs.core.deref(current_section_STAR_);
var can_be_expanded_QMARK_ = ((dbg_shape_panel_QMARK_) || ((((!(is_comments_QMARK_))) && ((((!(is_history_QMARK_))) && (((is_inspect_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_section,new cljs.core.Keyword(null,"code","code",1586293142))))))))));
var map__56406 = app.main.ui.hooks.resize.use_resize_hook.cljs$core$IFn$_invoke$arity$7(new cljs.core.Keyword(null,"code","code",1586293142),app.main.constants.right_sidebar_default_width,app.main.constants.right_sidebar_default_width,app.main.constants.right_sidebar_default_max_width,new cljs.core.Keyword(null,"x","x",2099068185),true,new cljs.core.Keyword(null,"right","right",-452581833));
var map__56406__$1 = cljs.core.__destructure_map(map__56406);
var on_pointer_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56406__$1,new cljs.core.Keyword(null,"on-pointer-down","on-pointer-down",573334138));
var on_lost_pointer_capture = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56406__$1,new cljs.core.Keyword(null,"on-lost-pointer-capture","on-lost-pointer-capture",-1554883134));
var on_pointer_move = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56406__$1,new cljs.core.Keyword(null,"on-pointer-move","on-pointer-move",-775121695));
var set_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56406__$1,new cljs.core.Keyword(null,"set-size","set-size",-1037159587));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56406__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var on_change_section = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p1__56404_SHARP_){
return cljs.core.reset_BANG_(current_section_STAR_,p1__56404_SHARP_);
}));
var on_expand = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(width),rumext.v2.adapt(set_width)],(function (){
var G__56407 = (((width > app.main.constants.right_sidebar_default_width))?app.main.constants.right_sidebar_default_width:app.main.constants.right_sidebar_default_max_width);
return (set_width.cljs$core$IFn$_invoke$arity$1 ? set_width.cljs$core$IFn$_invoke$arity$1(G__56407) : set_width.call(null,G__56407));
}));
var active_tokens_by_type = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(active_tokens)],(function (){
return (new cljs.core.Delay((function (){
return app.common.types.tokens_lib.group_by_type(active_tokens);
}),null));
}));
return rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.sidebar),{'value':new cljs.core.Keyword(null,"right","right",-452581833),'children':rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.active_tokens_by_type),{'value':active_tokens_by_type,'children':rumext.v2.jsxs("aside",{'id':"right-sidebar-aside",'data-testid':"right-sidebar",'data-size':cljs.core.str.cljs$core$IFn$_invoke$arity$1(width),'style':{'--right-sidebar-width':((can_be_expanded_QMARK_)?""+(width ?? "")+"px":""+(app.main.constants.right_sidebar_default_width ?? "")+"px")},'className':"main_ui_workspace_sidebar__right-settings-bar"+" "+(((!(can_be_expanded_QMARK_)))?"main_ui_workspace_sidebar__not-expand":"")+" "+(((width > app.main.constants.right_sidebar_default_width))?"main_ui_workspace_sidebar__expanded":""),'children':[((can_be_expanded_QMARK_)?rumext.v2.jsx("div",{'onPointerDown':on_pointer_down,'onLostPointerCapture':on_lost_pointer_capture,'onPointerMove':on_pointer_move,'className':"main_ui_workspace_sidebar__resize-area"}):null),rumext.v2.jsx(app.main.ui.workspace.right_header.right_header_STAR_,{'file':file,'layout':layout,'pageId':page_id}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar__settings-bar-inside",'children':((dbg_shape_panel_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.sidebar.debug_shape_info.debug_shape_info_STAR_,{}):((is_comments_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.comments.comments_sidebar_STAR_,{}):((is_history_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.sidebar.history_content_STAR_,{}):(function (){var props__$1 = {...props, 'onChangeSection':on_change_section,'onExpand':on_expand};
return rumext.v2.create_element(app.main.ui.workspace.sidebar.options.options_toolbox_STAR_,props__$1);
})()
)))})]})})});
});

(app.main.ui.workspace.sidebar.right_sidebar_STAR_.displayName = "right-sidebar*");

app.main.ui.workspace.sidebar.sidebar_STAR_ = (function app$main$ui$workspace$sidebar$sidebar_STAR_(props_56408){
var drawing_tool = props_56408.drawingTool;
var selected = props_56408.selected;
var file_id = props_56408.fileId;
var layout = props_56408.layout;
var file = props_56408.file;
var section = props_56408.section;
var page_id = props_56408.pageId;
var tokens_lib = rumext.v2.deref(app.main.refs.tokens_lib);
var active_tokens = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens_lib)],(function (){
if(cljs.core.truth_(tokens_lib)){
return app.common.types.tokens_lib.get_tokens_in_active_sets(tokens_lib);
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
var tokenscript_QMARK_ = cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500));
var tokenscript_resolved_active_tokens = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens_lib),rumext.v2.adapt(tokenscript_QMARK_)],(function (){
if(tokenscript_QMARK_){
return app.main.data.tokenscript.resolve_tokens(active_tokens);
} else {
return null;
}
}));
var resolved_active_tokens = app.main.data.style_dictionary.use_resolved_tokens_STAR_(active_tokens);
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_(new cljs.core.Keyword(null,"collapse-left-sidebar","collapse-left-sidebar",-1883177143).cljs$core$IFn$_invoke$arity$1(layout))?rumext.v2.jsx(app.main.ui.workspace.sidebar.collapsed_button_STAR_,{}):rumext.v2.jsx(app.main.ui.workspace.sidebar.left_sidebar_STAR_,{'layout':layout,'file':file,'pageId':page_id,'tokensLib':tokens_lib,'activeTokens':active_tokens,'resolvedActiveTokens':((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500)))?tokenscript_resolved_active_tokens:resolved_active_tokens)})),rumext.v2.jsx(app.main.ui.workspace.sidebar.right_sidebar_STAR_,{'pageId':page_id,'selected':selected,'tokensLib':tokens_lib,'section':section,'activeTokens':resolved_active_tokens,'layout':layout,'drawingTool':drawing_tool,'file':file,'fileId':file_id})]});
});

(app.main.ui.workspace.sidebar.sidebar_STAR_.displayName = "sidebar*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.js.map
