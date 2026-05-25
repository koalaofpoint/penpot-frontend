import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.shortcuts.js";
import "./app.main.store.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.align');
app.main.ui.workspace.sidebar.options.menus.align.align_options_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$align$align_options_STAR_(props_55363){
var shapes = props_55363.shapes;
var objects = props_55363.objects;
var disabled_align = (!(app.main.data.workspace.can_align_QMARK_(shapes,objects)));
var disabled_distribute = (!(app.main.data.workspace.can_distribute_QMARK_(shapes)));
var align_objects = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var value = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.align_objects.cljs$core$IFn$_invoke$arity$1(value));
}));
var distribute_objects = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var value = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.distribute_objects.cljs$core$IFn$_invoke$arity$1(value));
}));
if(((disabled_align) && (disabled_distribute))){
return null;
} else {
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_align__align-options",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_align__align-group-horizontal",'children':[rumext.v2.jsx("button",{'disabled':disabled_align,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.align.hleft",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"align-left","align-left",-412752091))], 0)),'data-value':"hleft",'onClick':align_objects,'className':"main_ui_workspace_sidebar_options_menus_align__align-button"+" "+((disabled_align)?"main_ui_workspace_sidebar_options_menus_align__disabled":""),'children':app.main.ui.icons.align_left}),rumext.v2.jsx("button",{'disabled':disabled_align,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.align.hcenter",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"align-hcenter","align-hcenter",369876664))], 0)),'data-value':"hcenter",'onClick':align_objects,'className':"main_ui_workspace_sidebar_options_menus_align__align-button"+" "+((disabled_align)?"main_ui_workspace_sidebar_options_menus_align__disabled":""),'children':app.main.ui.icons.align_horizontal_center}),rumext.v2.jsx("button",{'disabled':disabled_align,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.align.hright",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"align-right","align-right",-189896040))], 0)),'data-value':"hright",'onClick':align_objects,'className':"main_ui_workspace_sidebar_options_menus_align__align-button"+" "+((disabled_align)?"main_ui_workspace_sidebar_options_menus_align__disabled":""),'children':app.main.ui.icons.align_right}),rumext.v2.jsx("button",{'disabled':disabled_distribute,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.align.hdistribute",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"h-distribute","h-distribute",1044416837))], 0)),'data-value':"horizontal",'onClick':distribute_objects,'className':"main_ui_workspace_sidebar_options_menus_align__align-button"+" "+((disabled_distribute)?"main_ui_workspace_sidebar_options_menus_align__disabled":""),'children':app.main.ui.icons.distribute_horizontally})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_align__align-group-vertical",'children':[rumext.v2.jsx("button",{'disabled':disabled_align,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.align.vtop",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"align-top","align-top",576330652))], 0)),'data-value':"vtop",'onClick':align_objects,'className':"main_ui_workspace_sidebar_options_menus_align__align-button"+" "+((disabled_align)?"main_ui_workspace_sidebar_options_menus_align__disabled":""),'children':app.main.ui.icons.align_top}),rumext.v2.jsx("button",{'disabled':disabled_align,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.align.vcenter",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"align-vcenter","align-vcenter",-2036108737))], 0)),'data-value':"vcenter",'onClick':align_objects,'className':"main_ui_workspace_sidebar_options_menus_align__align-button"+" "+((disabled_align)?"main_ui_workspace_sidebar_options_menus_align__disabled":""),'children':app.main.ui.icons.align_vertical_center}),rumext.v2.jsx("button",{'disabled':disabled_align,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.align.vbottom",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"align-bottom","align-bottom",612864893))], 0)),'data-value':"vbottom",'onClick':align_objects,'className':"main_ui_workspace_sidebar_options_menus_align__align-button"+" "+((disabled_align)?"main_ui_workspace_sidebar_options_menus_align__disabled":""),'children':app.main.ui.icons.align_bottom}),rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.align.vdistribute",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"v-distribute","v-distribute",1681287974))], 0)),'disabled':disabled_distribute,'data-value':"vertical",'onClick':distribute_objects,'className':"main_ui_workspace_sidebar_options_menus_align__align-button"+" "+((disabled_distribute)?"main_ui_workspace_sidebar_options_menus_align__disabled":""),'children':app.main.ui.icons.distribute_vertical_spacing})]})]});
}
});

(app.main.ui.workspace.sidebar.options.menus.align.align_options_STAR_.displayName = "align-options*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.align.js.map
