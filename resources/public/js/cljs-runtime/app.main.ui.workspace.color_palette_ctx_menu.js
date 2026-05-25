import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.refs.js";
import "./app.main.ui.components.color_bullet.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.context.js";
import "./app.main.ui.icons.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.color_palette_ctx_menu');
app.main.ui.workspace.color_palette_ctx_menu.xf_COLON_sample_colors = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.val),cljs.core.take.cljs$core$IFn$_invoke$arity$1((7)));
app.main.ui.workspace.color_palette_ctx_menu.extract_colors = (function app$main$ui$workspace$color_palette_ctx_menu$extract_colors(p__77929){
var map__77930 = p__77929;
var map__77930__$1 = cljs.core.__destructure_map(map__77930);
var file = map__77930__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77930__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var colors = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.main.ui.workspace.color_palette_ctx_menu.xf_COLON_sample_colors,new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(data));
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file,new cljs.core.Keyword(null,"colors","colors",1157174732),colors),new cljs.core.Keyword(null,"data","data",-232669377));
});
app.main.ui.workspace.color_palette_ctx_menu.color_palette_ctx_menu_STAR_ = (function app$main$ui$workspace$color_palette_ctx_menu$color_palette_ctx_menu_STAR_(props_77931){
var show = props_77931.show;
var selected = props_77931.selected;
var on_close = props_77931.onClose;
var on_select = props_77931.onSelect;
var recent_colors = rumext.v2.deref(app.main.refs.recent_colors);
var libraries = rumext.v2.deref(app.main.refs.libraries);
var file_id = rumext.v2.use_ctx(app.main.ui.context.current_file_id);
var local_colors = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(libraries),rumext.v2.adapt(file_id)],(function (){
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,file_id),new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"colors","colors",1157174732));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.main.ui.workspace.color_palette_ctx_menu.xf_COLON_sample_colors,colors);
}));
var libraries__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(libraries),rumext.v2.adapt(file_id)],(function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.color_palette_ctx_menu.extract_colors,cljs.core.vals(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(libraries,file_id)));
}));
var recent_colors__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(recent_colors)],(function (){
return cljs.core.vec(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,color){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(color,new cljs.core.Keyword("app.main.ui.workspace.color-palette-ctx-menu","id","app.main.ui.workspace.color-palette-ctx-menu/id",-1642411096),""+(index ?? ""));
}),cljs.core.take.cljs$core$IFn$_invoke$arity$2((7),cljs.core.reverse(recent_colors))));
}));
return rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':show,'on-close':on_close,'children':rumext.v2.jsxs("ul",{'className':"main_ui_workspace_color_palette_ctx_menu__palette-menu",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__77933){
var map__77934 = p__77933;
var map__77934__$1 = cljs.core.__destructure_map(map__77934);
var library = map__77934__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77934__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__77934__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
out_arr__46744__auto__.push(rumext.v2.jsx("li",{'onClick':on_select,'data-palette':""+(id ?? ""),'className':"main_ui_workspace_color_palette_ctx_menu__palette-library"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,id))?"main_ui_workspace_color_palette_ctx_menu__selected":""),'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_color_palette_ctx_menu__option-wrapper",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_color_palette_ctx_menu__library-name",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_color_palette_ctx_menu__lib-name-wrapper",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_color_palette_ctx_menu__lib-name",'children':""+(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(library) ?? "")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_color_palette_ctx_menu__lib-num",'children':""+"("+(cljs.core.count(colors) ?? "")+")"})]}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,id))?rumext.v2.jsx("span",{'className':"main_ui_workspace_color_palette_ctx_menu__icon-wrapper",'children':app.main.ui.icons.tick}):null)]}),rumext.v2.jsx("div",{'style':{'--bullet-size':"20px"},'className':"main_ui_workspace_color_palette_ctx_menu__color-sample",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto____$1,color){
out_arr__46744__auto____$1.push(rumext.v2.jsx(app.main.ui.components.color_bullet.color_bullet,{'mini':true,'color':color},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color) ?? "")));

return out_arr__46744__auto____$1;
}),[],colors)})]})},""+"library-"+(id ?? "")));

return out_arr__46744__auto__;
}),[],libraries__$1),rumext.v2.jsx("li",{'onClick':on_select,'data-palette':"file",'className':"main_ui_workspace_color_palette_ctx_menu__file-library"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.Keyword(null,"file","file",-1269645878)))?"main_ui_workspace_color_palette_ctx_menu__selected":""),'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_color_palette_ctx_menu__option-wrapper",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_color_palette_ctx_menu__library-name",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_color_palette_ctx_menu__lib-name-wrapper",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_color_palette_ctx_menu__lib-name",'children':""+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.colors.file-library") ?? "")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_color_palette_ctx_menu__lib-num",'children':""+"("+(cljs.core.count(local_colors) ?? "")+")"})]}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.Keyword(null,"file","file",-1269645878)))?rumext.v2.jsx("span",{'className':"main_ui_workspace_color_palette_ctx_menu__icon-wrapper",'children':app.main.ui.icons.tick}):null)]}),rumext.v2.jsx("div",{'style':{'--bullet-size':"20px"},'className':"main_ui_workspace_color_palette_ctx_menu__color-sample",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,color){
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.components.color_bullet.color_bullet,{'mini':true,'color':color},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color) ?? "")));

return out_arr__46744__auto__;
}),[],local_colors)})]})}),rumext.v2.jsx("li",{'onClick':on_select,'data-palette':"recent",'className':"main_ui_workspace_color_palette_ctx_menu__recent-colors main_ui_workspace_color_palette_ctx_menu__selected",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_color_palette_ctx_menu__option-wrapper",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_color_palette_ctx_menu__library-name",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_color_palette_ctx_menu__lib-name-wrapper",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_color_palette_ctx_menu__lib-name",'children':""+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.colors.recent-colors") ?? "")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_color_palette_ctx_menu__lib-num",'children':""+"("+(cljs.core.count(recent_colors__$1) ?? "")+")"})]}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.Keyword(null,"recent","recent",449517715)))?rumext.v2.jsx("span",{'className':"main_ui_workspace_color_palette_ctx_menu__icon-wrapper",'children':app.main.ui.icons.tick}):null)]}),rumext.v2.jsx("div",{'style':{'--bullet-size':"20px"},'className':"main_ui_workspace_color_palette_ctx_menu__color-sample",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,color){
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.components.color_bullet.color_bullet,{'mini':true,'color':color},""+(new cljs.core.Keyword("app.main.ui.workspace.color-palette-ctx-menu","id","app.main.ui.workspace.color-palette-ctx-menu/id",-1642411096).cljs$core$IFn$_invoke$arity$1(color) ?? "")));

return out_arr__46744__auto__;
}),[],recent_colors__$1)})]})})]})});
});

(app.main.ui.workspace.color_palette_ctx_menu.color_palette_ctx_menu_STAR_.displayName = "color-palette-ctx-menu*");


//# sourceMappingURL=app.main.ui.workspace.color_palette_ctx_menu.js.map
