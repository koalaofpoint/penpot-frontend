import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.main.data.workspace.bool.js";
import "./app.main.data.workspace.path.shapes_to_path.js";
import "./app.main.data.workspace.shortcuts.js";
import "./app.main.features.js";
import "./app.main.store.js";
import "./app.main.ui.components.radio_buttons.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.icons.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.bool');
app.main.ui.workspace.sidebar.options.menus.bool.flatten_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_workspace_sidebar_options_menus_bool__flatten-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-boolean-flatten"})});
app.main.ui.workspace.sidebar.options.menus.bool.bool_options_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$bool$bool_options_STAR_(props_55362){
var shapes_with_children = props_55362.shapesWithChildren;
var shapes = props_55362.shapes;
var total_selected = props_55362.totalSelected;
var head = cljs.core.first(shapes);
var head_id = (head?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(head,new cljs.core.Keyword(null,"id","id",-1388402092)));
var is_group_QMARK_ = app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(head);
var is_bool_QMARK_ = app.common.files.helpers.bool_shape_QMARK_(head);
var head_bool_type = (function (){var and__5023__auto__ = is_bool_QMARK_;
if(and__5023__auto__){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(head,new cljs.core.Keyword(null,"bool-type","bool-type",-1094918459));
} else {
return and__5023__auto__;
}
})();
var render_wasm_enabled_QMARK_ = app.main.features.use_feature("render-wasm/v1");
var has_invalid_shapes_QMARK_ = cljs.core.some(((render_wasm_enabled_QMARK_)?app.common.files.helpers.frame_shape_QMARK_:(function (p1__55361_SHARP_){
return ((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__55361_SHARP_)) || (app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(p1__55361_SHARP_)));
})),shapes_with_children);
var head_not_group_like_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total_selected)) && ((((!(is_group_QMARK_))) && ((!(is_bool_QMARK_))))));
var disabled_bool_btns = (function (){var or__5025__auto__ = (total_selected === (0));
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = has_invalid_shapes_QMARK_;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return head_not_group_like_QMARK_;
}
}
})();
var disabled_flatten = (function (){var or__5025__auto__ = (total_selected === (0));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return has_invalid_shapes_QMARK_;
}
})();
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(total_selected),rumext.v2.adapt(is_group_QMARK_),rumext.v2.adapt(is_bool_QMARK_),rumext.v2.adapt(head_id),rumext.v2.adapt(head_bool_type)],(function (bool_type){
var bool_type__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(bool_type);
if((total_selected > (1))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.bool.create_bool(bool_type__$1));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total_selected,(1))) && (is_group_QMARK_))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.bool.group_to_bool(head_id,bool_type__$1));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(total_selected,(1))) && (is_bool_QMARK_))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(head_bool_type,bool_type__$1)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.bool.bool_to_group(head_id));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.bool.change_bool_type(head_id,bool_type__$1));
}
} else {
return null;
}
}
}
}));
var flatten_objects = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.path.shapes_to_path.convert_selected_to_path.cljs$core$IFn$_invoke$arity$0());
}));
if(cljs.core.not((function (){var and__5023__auto__ = disabled_bool_btns;
if(cljs.core.truth_(and__5023__auto__)){
return disabled_flatten;
} else {
return and__5023__auto__;
}
})())){
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_bool__boolean-options",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_bool__bool-group",'children':rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':app.common.data.name(head_bool_type),'class':"main_ui_workspace_sidebar_options_menus_bool__boolean-radio-btn",'on-change':on_change,'name':"bool-options",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.boolean_union,'value':"union",'disabled':disabled_bool_btns,'title':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.union"))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"bool-union","bool-union",-400530038))),")"].join(''),'id':"bool-opt-union"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.boolean_difference,'value':"difference",'disabled':disabled_bool_btns,'title':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.difference"))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"bool-difference","bool-difference",1638220619))),")"].join(''),'id':"bool-opt-differente"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.boolean_intersection,'value':"intersection",'disabled':disabled_bool_btns,'title':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.intersection"))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"bool-intersection","bool-intersection",2106050785))),")"].join(''),'id':"bool-opt-intersection"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.boolean_exclude,'value':"exclude",'disabled':disabled_bool_btns,'title':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.exclude"))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shortcuts.get_tooltip(new cljs.core.Keyword(null,"bool-exclude","bool-exclude",906557011))),")"].join(''),'id':"bool-opt-exclude"})]})}),rumext.v2.jsx("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.flatten"),'disabled':disabled_flatten,'onClick':flatten_objects,'className':"main_ui_workspace_sidebar_options_menus_bool__flatten-button"+" "+(cljs.core.truth_(disabled_flatten)?"main_ui_workspace_sidebar_options_menus_bool__disabled":""),'children':app.main.ui.workspace.sidebar.options.menus.bool.flatten_icon})]});
} else {
return null;
}
});

(app.main.ui.workspace.sidebar.options.menus.bool.bool_options_STAR_.displayName = "bool-options*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.bool.js.map
