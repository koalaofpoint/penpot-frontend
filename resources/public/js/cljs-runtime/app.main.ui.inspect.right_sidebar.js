import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.types.component.js";
import "./app.config.js";
import "./app.main.data.event.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.ds.controls.select.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.layout.tab_switcher.js";
import "./app.main.ui.ds.product.empty_state.js";
import "./app.main.ui.inspect.attributes.js";
import "./app.main.ui.inspect.code.js";
import "./app.main.ui.inspect.selection_feedback.js";
import "./app.main.ui.inspect.styles.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.shape_icon.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.right_sidebar');
/**
 * Retrieve all libraries, including the local file, on workspace or viewer
 */
app.main.ui.inspect.right_sidebar.get_libraries = (function app$main$ui$inspect$right_sidebar$get_libraries(from){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,new cljs.core.Keyword(null,"workspace","workspace",-1096735709))){
return cljs.core.deref(app.main.refs.libraries);
} else {
var viewer_data = cljs.core.deref(app.main.refs.viewer_data);
var local = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(viewer_data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"data","data",-232669377)], null));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(local,new cljs.core.Keyword(null,"id","id",-1388402092));
var libraries = new cljs.core.Keyword(null,"libraries","libraries",-303286011).cljs$core$IFn$_invoke$arity$1(viewer_data);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(libraries,id,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"data","data",-232669377),local], null));
}
});
app.main.ui.inspect.right_sidebar.right_sidebar_STAR_ = (function app$main$ui$inspect$right_sidebar$right_sidebar_STAR_(props_53128){
var on_expand = props_53128.onExpand;
var shapes = props_53128.shapes;
var on_change_section = props_53128.onChangeSection;
var selected = props_53128.selected;
var frame = props_53128.frame;
var file_id = props_53128.fileId;
var objects = props_53128.objects;
var file = props_53128.file;
var page = props_53128.page;
var page_id = props_53128.pageId;
var from = props_53128.from ?? new cljs.core.Keyword(null,"viewer","viewer",-783949853);
var share_id = props_53128.shareId;
var color_space_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("hex");
var color_space = cljs.core.deref(color_space_STAR_);
var section = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
if(cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"inspect-styles","inspect-styles",1359737423))){
return new cljs.core.Keyword(null,"styles","styles",1954480375);
} else {
return new cljs.core.Keyword(null,"info","info",-317069002);
}
}));
var objects__$1 = (function (){var or__5025__auto__ = objects;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page);
}
})();
var shapes__$1 = (function (){var or__5025__auto__ = shapes;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.ui.inspect.selection_feedback.resolve_shapes(objects__$1,selected);
}
})();
var first_shape = cljs.core.first(shapes__$1);
var page_id__$1 = (function (){var or__5025__auto__ = page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page);
}
})();
var file_id__$1 = (function (){var or__5025__auto__ = file_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file);
}
})();
var libraries = app.main.ui.inspect.right_sidebar.get_libraries(from);
var main_instance_QMARK_ = app.common.types.component.main_instance_QMARK_(first_shape);
var subtitle = (cljs.core.truth_((function (){var or__5025__auto__ = app.common.types.component.is_variant_container_QMARK_(first_shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (((!(app.common.types.component.is_variant_QMARK_(first_shape)))) && (main_instance_QMARK_));
}
})())?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.subtitle.main"):((((app.common.types.component.is_variant_QMARK_(first_shape)) && (main_instance_QMARK_)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.variant"):((app.common.types.component.instance_head_QMARK_(first_shape))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.subtitle.copy"):null)));
var handle_change_tab = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(from),rumext.v2.adapt(on_change_section)],(function (new_section){
cljs.core.reset_BANG_(section,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_section));

if(cljs.core.truth_(on_change_section)){
var G__53130_53140 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(new_section);
(on_change_section.cljs$core$IFn$_invoke$arity$1 ? on_change_section.cljs$core$IFn$_invoke$arity$1(G__53130_53140) : on_change_section.call(null,G__53130_53140));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"change-inspect-tab",new cljs.core.Keyword(null,"tab","tab",-559583621),new_section], null)));
} else {
return null;
}
}));
var handle_expand = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_expand)],(function (){
if(cljs.core.truth_(on_expand)){
return (on_expand.cljs$core$IFn$_invoke$arity$0 ? on_expand.cljs$core$IFn$_invoke$arity$0() : on_expand.call(null));
} else {
return null;
}
}));
var navigate_to_help = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1("https://help.penpot.app/user-guide/inspect/");
}));
var handle_change_color_space = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (color_space__$1){
return cljs.core.reset_BANG_(color_space_STAR_,color_space__$1);
}));
var color_spaces = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.color.hex"),new cljs.core.Keyword(null,"id","id",-1388402092),"hex"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.color.rgba"),new cljs.core.Keyword(null,"id","id",-1388402092),"rgba"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.color.hsla"),new cljs.core.Keyword(null,"id","id",-1388402092),"hsla"], null)], null);
}));
var tabs = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
if(cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"inspect-styles","inspect-styles",1359737423))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.styles"),new cljs.core.Keyword(null,"id","id",-1388402092),"styles"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.computed"),new cljs.core.Keyword(null,"id","id",-1388402092),"computed"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.code"),new cljs.core.Keyword(null,"data-testid","data-testid",102116723),"code",new cljs.core.Keyword(null,"id","id",-1388402092),"code"], null)], null);
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.info"),new cljs.core.Keyword(null,"id","id",-1388402092),"info"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.code"),new cljs.core.Keyword(null,"data-testid","data-testid",102116723),"code",new cljs.core.Keyword(null,"id","id",-1388402092),"code"], null)], null);
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes__$1),rumext.v2.adapt(handle_change_tab)],(function (){
if(cljs.core.seq(shapes__$1)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"inspect-mode-click-element"], null)));
} else {
var G__53131 = ((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"inspect-styles","inspect-styles",1359737423)))?new cljs.core.Keyword(null,"styles","styles",1954480375):new cljs.core.Keyword(null,"info","info",-317069002));
return (handle_change_tab.cljs$core$IFn$_invoke$arity$1 ? handle_change_tab.cljs$core$IFn$_invoke$arity$1(G__53131) : handle_change_tab.call(null,G__53131));
}
}));

return rumext.v2.jsx("aside",{'className':"main_ui_inspect_right_sidebar__settings-bar-right"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from,new cljs.core.Keyword(null,"viewer","viewer",-783949853)))?"main_ui_inspect_right_sidebar__viewer-code":""),'children':((cljs.core.seq(shapes__$1))?rumext.v2.jsxs("div",{'className':"main_ui_inspect_right_sidebar__tool-windows",'children':[rumext.v2.jsx("div",{'className':"main_ui_inspect_right_sidebar__shape-info"+" "+(((!((subtitle == null))))?"main_ui_inspect_right_sidebar__shape-info-subtitle":""),'children':(((cljs.core.count(shapes__$1) > (1)))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'className':"main_ui_inspect_right_sidebar__layers-icon",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.layers,'size':"s"})}),rumext.v2.jsx("span",{'className':"main_ui_inspect_right_sidebar__layer-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("inspect.multiple-selected",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(shapes__$1)], 0))})]}):rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'className':"main_ui_inspect_right_sidebar__shape-icon",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.util.shape_icon.get_shape_icon(first_shape),'size':"s"})}),rumext.v2.jsx("div",{'children':(((!((subtitle == null))))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'className':"main_ui_inspect_right_sidebar__layer-title main_ui_inspect_right_sidebar__layer-title-with-subtitle",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(first_shape)}),rumext.v2.jsx("div",{'className':"main_ui_inspect_right_sidebar__layer-subtitle",'children':subtitle})]}):rumext.v2.jsx("div",{'children':rumext.v2.jsx("div",{'className':"main_ui_inspect_right_sidebar__layer-title",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(first_shape)})}))})]}))}),rumext.v2.jsxs("div",{'className':"main_ui_inspect_right_sidebar__inspect-content",'children':[((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"inspect-styles","inspect-styles",1359737423)))?rumext.v2.jsxs("div",{'className':"main_ui_inspect_right_sidebar__inspect-tab-switcher",'children':[rumext.v2.jsx("span",{'className':"main_ui_inspect_right_sidebar__inspect-tab-switcher-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.layer-info")}),rumext.v2.jsxs("div",{'className':"main_ui_inspect_right_sidebar__inspect-tab-switcher-controls",'children':[rumext.v2.jsx("div",{'className':"main_ui_inspect_right_sidebar__inspect-tab-switcher-controls-color-space",'children':rumext.v2.jsx(app.main.ui.ds.controls.select.select_STAR_,{'className':"main_ui_inspect_right_sidebar__inspect-tab-switcher-controls-color-space-select",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.color-space-label"),'options':color_spaces,'defaultSelected':"hex",'variant':"ghost",'onChange':handle_change_color_space})}),rumext.v2.jsx("div",{'className':"main_ui_inspect_right_sidebar__inspect-tab-switcher-controls-tab",'children':rumext.v2.jsx(app.main.ui.ds.controls.select.select_STAR_,{'options':tabs,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.tabs-switcher-label"),'defaultSelected':cljs.core.name(cljs.core.deref(section)),'onChange':handle_change_tab})})]})]}):null),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"inspect-styles","inspect-styles",1359737423)))?rumext.v2.jsx("div",{'className':"main_ui_inspect_right_sidebar__inspect-tab main_ui_inspect_right_sidebar__viewer-tab-switcher main_ui_inspect_right_sidebar__viewer-tab-switcher-layout",'children':(function (){var G__53135 = cljs.core.deref(section);
var G__53135__$1 = (((G__53135 instanceof cljs.core.Keyword))?G__53135.fqn:null);
switch (G__53135__$1) {
case "styles":
return rumext.v2.jsx(app.main.ui.inspect.styles.styles_tab_STAR_,{'colorSpace':color_space,'objects':objects__$1,'shapes':shapes__$1,'from':from,'libraries':libraries,'fileId':file_id__$1});

break;
case "computed":
return rumext.v2.jsx(app.main.ui.inspect.attributes.attributes_STAR_,{'pageId':page_id__$1,'libraries':libraries,'objects':objects__$1,'shareId':share_id,'shapes':shapes__$1,'colorSpace':color_space,'from':from,'frame':frame,'fileId':file_id__$1});

break;
case "code":
return rumext.v2.jsx(app.main.ui.inspect.code.code_STAR_,{'frame':frame,'shapes':shapes__$1,'onExpand':handle_expand,'from':from});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53135__$1)].join('')));

}
})()}):rumext.v2.jsx(app.main.ui.ds.layout.tab_switcher.tab_switcher_STAR_,{'tabs':tabs,'selected':cljs.core.name(cljs.core.deref(section)),'onChange':handle_change_tab,'className':"main_ui_inspect_right_sidebar__viewer-tab-switcher",'children':(function (){var G__53137 = cljs.core.deref(section);
var G__53137__$1 = (((G__53137 instanceof cljs.core.Keyword))?G__53137.fqn:null);
switch (G__53137__$1) {
case "info":
return rumext.v2.jsx(app.main.ui.inspect.attributes.attributes_STAR_,{'pageId':page_id__$1,'objects':objects__$1,'fileId':file_id__$1,'frame':frame,'shapes':shapes__$1,'from':from,'libraries':libraries,'shareId':share_id});

break;
case "code":
return rumext.v2.jsx(app.main.ui.inspect.code.code_STAR_,{'frame':frame,'shapes':shapes__$1,'onExpand':handle_expand,'from':from});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53137__$1)].join('')));

}
})()}))]})]}):rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_inspect_right_sidebar__empty",'children':[rumext.v2.jsx(app.main.ui.ds.product.empty_state.empty_state_STAR_,{'icon':app.main.ui.ds.foundations.assets.icon.code,'text':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.empty.select")}),rumext.v2.jsx(app.main.ui.ds.product.empty_state.empty_state_STAR_,{'icon':app.main.ui.ds.foundations.assets.icon.help,'text':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.empty.help")})]}),rumext.v2.jsx("div",{'className':"main_ui_inspect_right_sidebar__empty-button",'children':rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"secondary",'onClick':navigate_to_help,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.empty.more")})})]}))});
});

(app.main.ui.inspect.right_sidebar.right_sidebar_STAR_.displayName = "right-sidebar*");


//# sourceMappingURL=app.main.ui.inspect.right_sidebar.js.map
