import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.refs.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.icons.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.text_palette_ctx_menu');
app.main.ui.workspace.text_palette_ctx_menu.text_palette_ctx_menu = (function app$main$ui$workspace$text_palette_ctx_menu$text_palette_ctx_menu(props_77977){
var map__77978 = rumext.v2.util.wrap_props(props_77977);
var map__77978__$1 = cljs.core.__destructure_map(map__77978);
var show_menu_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77978__$1,new cljs.core.Keyword(null,"show-menu?","show-menu?",1239088094));
var close_menu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77978__$1,new cljs.core.Keyword(null,"close-menu","close-menu",1433041309));
var on_select_palette = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77978__$1,new cljs.core.Keyword(null,"on-select-palette","on-select-palette",-1960461941));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77978__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var typographies = rumext.v2.deref(app.main.refs.workspace_file_typography);
var libraries = rumext.v2.deref(app.main.refs.libraries);
return rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':show_menu_QMARK_,'on-close':close_menu,'children':rumext.v2.jsxs("ul",{'className':"main_ui_workspace_text_palette_ctx_menu__text-context-menu",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__77979){
var vec__77980 = p__77979;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77980,(0),null);
var cur_library = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__77980,(1),null);
out_arr__46744__auto__.push((function (){var typographies__$1 = cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cur_library,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"typographies","typographies",-482095730)], null)));
return rumext.v2.jsxs("li",{'onClick':(function (){
return (on_select_palette.cljs$core$IFn$_invoke$arity$1 ? on_select_palette.cljs$core$IFn$_invoke$arity$1(cur_library) : on_select_palette.call(null,cur_library));
}),'className':"main_ui_workspace_text_palette_ctx_menu__palette-library"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cur_library)))?"main_ui_workspace_text_palette_ctx_menu__selected":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_text_palette_ctx_menu__library-name",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_text_palette_ctx_menu__lib-name",'children':""+(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cur_library) ?? "")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_text_palette_ctx_menu__lib-num",'children':""+"("+(cljs.core.count(typographies__$1) ?? "")+")"})]}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cur_library)))?rumext.v2.jsx("span",{'className':"main_ui_workspace_text_palette_ctx_menu__icon-wrapper",'children':app.main.ui.icons.tick}):null)]},["library-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(idx)].join(''));
})());

return out_arr__46744__auto__;
}),[],cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,cljs.core.vals(libraries))),rumext.v2.jsxs("li",{'onClick':(function (){
return (on_select_palette.cljs$core$IFn$_invoke$arity$1 ? on_select_palette.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"file","file",-1269645878)) : on_select_palette.call(null,new cljs.core.Keyword(null,"file","file",-1269645878)));
}),'className':"main_ui_workspace_text_palette_ctx_menu__file-library"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.Keyword(null,"file","file",-1269645878)))?"main_ui_workspace_text_palette_ctx_menu__selected":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_text_palette_ctx_menu__library-name",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_text_palette_ctx_menu__lib-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.colors.file-library")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_text_palette_ctx_menu__lib-num",'children':""+"("+(cljs.core.count(typographies) ?? "")+")"})]}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.Keyword(null,"file","file",-1269645878)))?rumext.v2.jsx("span",{'className':"main_ui_workspace_text_palette_ctx_menu__icon-wrapper",'children':app.main.ui.icons.tick}):null)]})]})});
});

(app.main.ui.workspace.text_palette_ctx_menu.text_palette_ctx_menu.displayName = "text-palette-ctx-menu");


//# sourceMappingURL=app.main.ui.workspace.text_palette_ctx_menu.js.map
