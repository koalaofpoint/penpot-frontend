import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.uuid.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.store.js";
import "./app.main.ui.components.numeric_input.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.icons.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.blur');
app.main.ui.workspace.sidebar.options.menus.blur.blur_attrs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",-453500461)], null);
app.main.ui.workspace.sidebar.options.menus.blur.create_blur = (function app$main$ui$workspace$sidebar$options$menus$blur$create_blur(){
var id = app.common.uuid.next();
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"layer-blur","layer-blur",2003227989),new cljs.core.Keyword(null,"value","value",305978217),(4),new cljs.core.Keyword(null,"hidden","hidden",-312506092),false], null);
});
app.main.ui.workspace.sidebar.options.menus.blur.blur_menu = (function app$main$ui$workspace$sidebar$options$menus$blur$blur_menu(props_55496){
var map__55501 = rumext.v2.util.wrap_props(props_55496);
var map__55501__$1 = cljs.core.__destructure_map(map__55501);
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55501__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55501__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55501__$1,new cljs.core.Keyword(null,"values","values",372645556));
var blur = new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(values);
var has_value_QMARK_ = (!((blur == null)));
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-content","show-content",-878000465),true,new cljs.core.Keyword(null,"show-more-options","show-more-options",-1066587564),false], null));
var state = cljs.core.deref(state_STAR_);
var open_QMARK_ = new cljs.core.Keyword(null,"show-content","show-content",-878000465).cljs$core$IFn$_invoke$arity$1(state);
var more_options_QMARK_ = new cljs.core.Keyword(null,"show-more-options","show-more-options",-1066587564).cljs$core$IFn$_invoke$arity$1(state);
var toggle_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"show-content","show-content",-878000465),cljs.core.not);
}));
var toggle_more_options = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"show-more-options","show-more-options",-1066587564),cljs.core.not);
}));
var hidden_QMARK_ = new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(blur);
var change_BANG_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (update_fn){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids,update_fn));
}));
var handle_add = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(change_BANG_),rumext.v2.adapt(ids)],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

var G__55518 = (function (p1__55491_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55491_SHARP_,new cljs.core.Keyword(null,"blur","blur",-453500461),app.main.ui.workspace.sidebar.options.menus.blur.create_blur());
});
return (change_BANG_.cljs$core$IFn$_invoke$arity$1 ? change_BANG_.cljs$core$IFn$_invoke$arity$1(G__55518) : change_BANG_.call(null,G__55518));
}));
var handle_delete = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(change_BANG_),rumext.v2.adapt(ids)],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

var G__55525 = (function (p1__55492_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__55492_SHARP_,new cljs.core.Keyword(null,"blur","blur",-453500461));
});
return (change_BANG_.cljs$core$IFn$_invoke$arity$1 ? change_BANG_.cljs$core$IFn$_invoke$arity$1(G__55525) : change_BANG_.call(null,G__55525));
}));
var handle_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(change_BANG_),rumext.v2.adapt(ids)],(function (value){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

var G__55530 = (function (p1__55493_SHARP_){
var G__55531 = p1__55493_SHARP_;
var G__55531__$1 = (((!(cljs.core.contains_QMARK_(p1__55493_SHARP_,new cljs.core.Keyword(null,"blur","blur",-453500461)))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55531,new cljs.core.Keyword(null,"blur","blur",-453500461),app.main.ui.workspace.sidebar.options.menus.blur.create_blur()):G__55531);
return cljs.core.assoc_in(G__55531__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"value","value",305978217)], null),value);

});
return (change_BANG_.cljs$core$IFn$_invoke$arity$1 ? change_BANG_.cljs$core$IFn$_invoke$arity$1(G__55530) : change_BANG_.call(null,G__55530));
}));
var handle_toggle_visibility = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(change_BANG_),rumext.v2.adapt(ids)],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

var G__55537 = (function (p1__55494_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__55494_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"blur","blur",-453500461),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null),cljs.core.not);
});
return (change_BANG_.cljs$core$IFn$_invoke$arity$1 ? change_BANG_.cljs$core$IFn$_invoke$arity$1(G__55537) : change_BANG_.call(null,G__55537));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_blur__element-set",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_blur__element-title",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':has_value_QMARK_,'collapsed':cljs.core.not(open_QMARK_),'onCollapsed':toggle_content,'title':(function (){var G__55540 = type;
var G__55540__$1 = (((G__55540 instanceof cljs.core.Keyword))?G__55540.fqn:null);
switch (G__55540__$1) {
case "multiple":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.blur-options.title.multiple");

break;
case "group":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.blur-options.title.group");

break;
default:
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.blur-options.title");

}
})(),'className':(((!(has_value_QMARK_)))?"main_ui_workspace_sidebar_options_menus_blur__title-spacing-blur":""),'children':((has_value_QMARK_)?null:rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.blur-options.add-blur"),'onClick':handle_add,'icon':app.main.ui.ds.foundations.assets.icon.add,'data-testid':"add-blur"}))})}),(cljs.core.truth_((function (){var and__5023__auto__ = open_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return has_value_QMARK_;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_blur__element-set-content",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_blur__first-row"+" "+(cljs.core.truth_(hidden_QMARK_)?"main_ui_workspace_sidebar_options_menus_blur__hidden":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_blur__blur-info",'children':[rumext.v2.jsx("button",{'onClick':toggle_more_options,'className':"main_ui_workspace_sidebar_options_menus_blur__show-more"+" "+(cljs.core.truth_(more_options_QMARK_)?"main_ui_workspace_sidebar_options_menus_blur__selected":""),'children':app.main.ui.icons.menu}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_blur__label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.blur-options.title")})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_blur__actions",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.blur-options.toggle-blur"),'onClick':handle_toggle_visibility,'icon':(cljs.core.truth_(hidden_QMARK_)?app.main.ui.ds.foundations.assets.icon.hide:app.main.ui.ds.foundations.assets.icon.shown)}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.blur-options.remove-blur"),'onClick':handle_delete,'icon':app.main.ui.ds.foundations.assets.icon.remove})]})]}),(cljs.core.truth_(more_options_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_blur__second-row",'children':[rumext.v2.jsx("label",{'htmlFor':"blur-input-sidebar",'className':"main_ui_workspace_sidebar_options_menus_blur__label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.blur.value")}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'className':"main_ui_workspace_sidebar_options_menus_blur__numeric-input",'placeholder':"--",'id':"blur-input-sidebar",'min':"0",'onChange':handle_change,'value':new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(blur)})]}):null)]}):null)]});
});

(app.main.ui.workspace.sidebar.options.menus.blur.blur_menu.displayName = "blur-menu");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.blur.js.map
