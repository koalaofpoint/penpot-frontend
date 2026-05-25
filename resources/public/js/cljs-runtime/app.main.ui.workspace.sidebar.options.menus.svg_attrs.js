import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.store.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.functions.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.svg_attrs');
app.main.ui.workspace.sidebar.options.menus.svg_attrs.attribute_value = (function app$main$ui$workspace$sidebar$options$menus$svg_attrs$attribute_value(props_55818){
var map__55819 = rumext.v2.util.wrap_props(props_55818);
var map__55819__$1 = cljs.core.__destructure_map(map__55819);
var props = map__55819__$1;
var attr = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55819__$1,new cljs.core.Keyword(null,"attr","attr",-604132353));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55819__$1,new cljs.core.Keyword(null,"value","value",305978217));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55819__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var on_delete = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55819__$1,new cljs.core.Keyword(null,"on-delete","on-delete",-1882190355));
var last_value = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(value);
var handle_change_STAR_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1(app.util.functions.debounce.cljs$core$IFn$_invoke$arity$2((function (val){
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(attr,val) : on_change.call(null,attr,val));
}),(300)));
var handle_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(attr),rumext.v2.adapt(on_change),rumext.v2.adapt(handle_change_STAR_)],(function (event){
cljs.core.reset_BANG_(last_value,app.util.dom.get_target_val(event));

var G__55820 = app.util.dom.get_target_val(event);
return (handle_change_STAR_.cljs$core$IFn$_invoke$arity$1 ? handle_change_STAR_.cljs$core$IFn$_invoke$arity$1(G__55820) : handle_change_STAR_.call(null,G__55820));
}));
var handle_delete = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(attr),rumext.v2.adapt(on_delete)],(function (){
return (on_delete.cljs$core$IFn$_invoke$arity$1 ? on_delete.cljs$core$IFn$_invoke$arity$1(attr) : on_delete.call(null,attr));
}));
var label = app.common.data.name(cljs.core.last(attr));
return rumext.v2.jsx(rumext.v2.Fragment,{'children':((typeof value === 'string')?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_svg_attrs__attr-content",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_svg_attrs__attr-name",'children':label}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_svg_attrs__attr-input",'children':rumext.v2.jsx("input",{'value':cljs.core.deref(last_value),'onChange':handle_change})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_svg_attrs__attr-actions",'children':rumext.v2.jsx("button",{'onClick':handle_delete,'className':"main_ui_workspace_sidebar_options_menus_svg_attrs__attr-action-btn",'children':app.main.ui.icons.remove_icon})})]}):rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_svg_attrs__attr-nested-content",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_svg_attrs__attr-title",'children':cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.common.data.name(cljs.core.last(attr)))}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55821){
var vec__55822 = p__55821;
var key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55822,(0),null);
var value__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55822,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_svg_attrs__attr-row",'children':rumext.v2.jsx(app$main$ui$workspace$sidebar$options$menus$svg_attrs$attribute_value,{'attr':cljs.core.conj.cljs$core$IFn$_invoke$arity$2(attr,key),'value':value__$1,'on-change':on_change,'on-delete':on_delete},key)},key));

return out_arr__35152__auto__;
}),[],value)]}))});
});

(app.main.ui.workspace.sidebar.options.menus.svg_attrs.attribute_value.displayName = "attribute-value");

app.main.ui.workspace.sidebar.options.menus.svg_attrs.svg_attrs_menu = (function app$main$ui$workspace$sidebar$options$menus$svg_attrs$svg_attrs_menu(props_55825){
var map__55826 = rumext.v2.util.wrap_props(props_55825);
var map__55826__$1 = cljs.core.__destructure_map(map__55826);
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55826__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55826__$1,new cljs.core.Keyword(null,"values","values",372645556));
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(true);
var open_QMARK_ = cljs.core.deref(state_STAR_);
var attrs = new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772).cljs$core$IFn$_invoke$arity$1(values);
var has_attributes_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),attrs)) || ((!((cljs.core.seq(attrs) == null)))));
var toggle_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_STAR_,cljs.core.not);
}));
var handle_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (attr,value){
var update_fn = (function (shape){
return cljs.core.assoc_in(shape,cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)], null),attr),value);
});
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids,update_fn));
}));
var handle_delete = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (attr){
var update_fn = (function (shape){
var update_path = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772)], null),cljs.core.butlast(attr));
var shape__$1 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(shape,update_path,cljs.core.dissoc,cljs.core.last(attr));
var shape__$2 = (function (){var G__55827 = shape__$1;
if(cljs.core.empty_QMARK_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),new cljs.core.Keyword(null,"style","style",-496642736)], null)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(G__55827,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772),cljs.core.dissoc,new cljs.core.Keyword(null,"style","style",-496642736));
} else {
return G__55827;
}
})();
return shape__$2;
});
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids,update_fn));
}));
if(cljs.core.empty_QMARK_(attrs)){
return null;
} else {
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_svg_attrs__element-set",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_svg_attrs__element-set-title",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':has_attributes_QMARK_,'collapsed':cljs.core.not(open_QMARK_),'onCollapsed':toggle_content,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sidebar.options.svg-attrs.title"),'className':(((!(has_attributes_QMARK_)))?"main_ui_workspace_sidebar_options_menus_svg_attrs__title-spacing-svg-attrs":"")})}),(cljs.core.truth_(open_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_svg_attrs__element-set-content",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55828){
var vec__55829 = p__55828;
var attr_key = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55829,(0),null);
var attr_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55829,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.svg_attrs.attribute_value,{'attr':new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr_key], null),'value':attr_value,'on-change':handle_change,'on-delete':handle_delete},attr_key));

return out_arr__35152__auto__;
}),[],attrs)}):null)]});
}
});

(app.main.ui.workspace.sidebar.options.menus.svg_attrs.svg_attrs_menu.displayName = "svg-attrs-menu");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.svg_attrs.js.map
