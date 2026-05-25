import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.schema.js";
import "./app.common.types.shape.layout.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.shape_layout.js";
import "./app.main.data.workspace.tokens.application.js";
import "./app.main.features.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.numeric_input.js";
import "./app.main.ui.components.radio_buttons.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.js";
import "./app.main.ui.workspace.sidebar.options.menus.layout_container.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.layout_item');
app.main.ui.workspace.sidebar.options.menus.layout_item.layout_item_attrs = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.Keyword(null,"layout-item-margin-type","layout-item-margin-type",-1313230390),new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),new cljs.core.Keyword(null,"layout-item-align-self","layout-item-align-self",-1976194692),new cljs.core.Keyword(null,"layout-item-absolute","layout-item-absolute",1832387265),new cljs.core.Keyword(null,"layout-item-z-index","layout-item-z-index",728479455)], null);
app.main.ui.workspace.sidebar.options.menus.layout_item.select_margins = (function app$main$ui$workspace$sidebar$options$menus$layout_item$select_margins(m1_QMARK_,m2_QMARK_,m3_QMARK_,m4_QMARK_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_margins_selected(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"m1","m1",-108094626),m1_QMARK_,new cljs.core.Keyword(null,"m2","m2",-587003306),m2_QMARK_,new cljs.core.Keyword(null,"m3","m3",-703635357),m3_QMARK_,new cljs.core.Keyword(null,"m4","m4",-1624571215),m4_QMARK_], null)));
});
app.main.ui.workspace.sidebar.options.menus.layout_item.select_margin = (function app$main$ui$workspace$sidebar$options$menus$layout_item$select_margin(prop){
return app.main.ui.workspace.sidebar.options.menus.layout_item.select_margins(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop,new cljs.core.Keyword(null,"m1","m1",-108094626)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop,new cljs.core.Keyword(null,"m2","m2",-587003306)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop,new cljs.core.Keyword(null,"m3","m3",-703635357)),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop,new cljs.core.Keyword(null,"m4","m4",-1624571215)));
});
app.main.ui.workspace.sidebar.options.menus.layout_item.margin_simple_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$layout_item$margin_simple_STAR_(props_55715){
var on_change = props_55715.onChange;
var value = props_55715.value;
var on_blur = props_55715.onBlur;
var ids = props_55715.ids;
var applied_tokens = props_55715.appliedTokens;
var token_numeric_inputs = app.main.features.use_feature("tokens/numeric-input");
var m1 = new cljs.core.Keyword(null,"m1","m1",-108094626).cljs$core$IFn$_invoke$arity$1(value);
var m2 = new cljs.core.Keyword(null,"m2","m2",-587003306).cljs$core$IFn$_invoke$arity$1(value);
var m3 = new cljs.core.Keyword(null,"m3","m3",-703635357).cljs$core$IFn$_invoke$arity$1(value);
var m4 = new cljs.core.Keyword(null,"m4","m4",-1624571215).cljs$core$IFn$_invoke$arity$1(value);
var m1__$1 = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"multiple","multiple",1244445549))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m1,m3))))?m1:null);
var m2__$1 = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"multiple","multiple",1244445549))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m2,m4))))?m2:null);
var token_applied_m1 = new cljs.core.Keyword(null,"m1","m1",-108094626).cljs$core$IFn$_invoke$arity$1(applied_tokens);
var token_applied_m2 = new cljs.core.Keyword(null,"m2","m2",-587003306).cljs$core$IFn$_invoke$arity$1(applied_tokens);
var token_applied_m3 = new cljs.core.Keyword(null,"m3","m3",-703635357).cljs$core$IFn$_invoke$arity$1(applied_tokens);
var token_applied_m4 = new cljs.core.Keyword(null,"m4","m4",-1624571215).cljs$core$IFn$_invoke$arity$1(applied_tokens);
var token_applied_m1__$1 = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"multiple","multiple",1244445549))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token_applied_m1,token_applied_m3))))?token_applied_m1:new cljs.core.Keyword(null,"multiple","multiple",1244445549));
var token_applied_m2__$1 = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"multiple","multiple",1244445549))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token_applied_m2,token_applied_m4))))?token_applied_m2:new cljs.core.Keyword(null,"multiple","multiple",1244445549));
var m1_placeholder = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"multiple","multiple",1244445549))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m1__$1,m3)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token_applied_m1__$1,token_applied_m3))))))?"--":app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"));
var m2_placeholder = ((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"multiple","multiple",1244445549))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(m2__$1,m4)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(token_applied_m2__$1,token_applied_m4))))))?"--":app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"));
var on_focus = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(app.main.ui.workspace.sidebar.options.menus.layout_item.select_margins)],(function (attr,event){
var G__55716_55748 = attr;
var G__55716_55749__$1 = (((G__55716_55748 instanceof cljs.core.Keyword))?G__55716_55748.fqn:null);
switch (G__55716_55749__$1) {
case "m1":
app.main.ui.workspace.sidebar.options.menus.layout_item.select_margins(true,false,true,false);

break;
case "m2":
app.main.ui.workspace.sidebar.options.menus.layout_item.select_margins(false,true,false,true);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55716_55749__$1)].join('')));

}

return app.util.dom.select_target(event);
}));
var on_detach_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (token_name,attr){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.unapply_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),token_name,new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.PersistentHashSet.createAsIfByAssoc([attr]),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}));
var on_detach_horizontal = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_detach_token)],(function (token){
return cljs.core.run_BANG_((function (p1__55711_SHARP_){
return (on_detach_token.cljs$core$IFn$_invoke$arity$2 ? on_detach_token.cljs$core$IFn$_invoke$arity$2(token,p1__55711_SHARP_) : on_detach_token.call(null,token,p1__55711_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m2","m2",-587003306),new cljs.core.Keyword(null,"m4","m4",-1624571215)], null));
}));
var on_detach_vertical = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_detach_token)],(function (token){
return cljs.core.run_BANG_((function (p1__55712_SHARP_){
return (on_detach_token.cljs$core$IFn$_invoke$arity$2 ? on_detach_token.cljs$core$IFn$_invoke$arity$2(token,p1__55712_SHARP_) : on_detach_token.call(null,token,p1__55712_SHARP_));
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m1","m1",-108094626),new cljs.core.Keyword(null,"m3","m3",-703635357)], null));
}));
var on_change_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change),rumext.v2.adapt(ids)],(function (value__$1,attr){
if(((typeof value__$1 === 'string') || (typeof value__$1 === 'number'))){
return (on_change.cljs$core$IFn$_invoke$arity$3 ? on_change.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"simple","simple",-581868663),attr,value__$1) : on_change.call(null,new cljs.core.Keyword(null,"simple","simple",-581868663),attr,value__$1));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.toggle_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.first(value__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"m1","m1",-108094626),attr))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"m3","m3",-703635357),null,new cljs.core.Keyword(null,"m1","m1",-108094626),null], null), null):new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"m4","m4",-1624571215),null,new cljs.core.Keyword(null,"m2","m2",-587003306),null], null), null)),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}
}));
var on_focus_m1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_focus)],(function (){
return (on_focus.cljs$core$IFn$_invoke$arity$1 ? on_focus.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"m1","m1",-108094626)) : on_focus.call(null,new cljs.core.Keyword(null,"m1","m1",-108094626)));
}));
var on_focus_m2 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_focus)],(function (){
return (on_focus.cljs$core$IFn$_invoke$arity$1 ? on_focus.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"m2","m2",-587003306)) : on_focus.call(null,new cljs.core.Keyword(null,"m2","m2",-587003306)));
}));
var on_m1_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_SINGLEQUOTE_)],(function (p1__55713_SHARP_){
return (on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(p1__55713_SHARP_,new cljs.core.Keyword(null,"m1","m1",-108094626)) : on_change_SINGLEQUOTE_.call(null,p1__55713_SHARP_,new cljs.core.Keyword(null,"m1","m1",-108094626)));
}));
var on_m2_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_SINGLEQUOTE_)],(function (p1__55714_SHARP_){
return (on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(p1__55714_SHARP_,new cljs.core.Keyword(null,"m2","m2",-587003306)) : on_change_SINGLEQUOTE_.call(null,p1__55714_SHARP_,new cljs.core.Keyword(null,"m2","m2",-587003306)));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__margin-simple",'children':[((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'onChange':on_m1_change,'className':"main_ui_workspace_sidebar_options_menus_layout_item__vertical-margin-wrapper",'placeholder':m1_placeholder,'inputType':new cljs.core.Keyword(null,"vertical-margin","vertical-margin",629210288),'attr':new cljs.core.Keyword(null,"m1","m1",-108094626),'appliedToken':token_applied_m1__$1,'value':m1__$1,'onFocus':on_focus_m1,'onDetach':on_detach_vertical,'property':"Vertical margin ",'onBlur':on_blur,'nillable':true,'icon':app.main.ui.ds.foundations.assets.icon.margin_top_bottom}):rumext.v2.jsxs("div",{'title':"Vertical margin",'className':"main_ui_workspace_sidebar_options_menus_layout_item__vertical-margin",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__icon",'children':app.main.ui.icons.margin_top_bottom}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'className':"main_ui_workspace_sidebar_options_menus_layout_item__numeric-input",'placeholder':m1_placeholder,'data-name':"m1",'onFocus':on_focus_m1,'onChange':on_m1_change,'onBlur':on_blur,'nillable':true,'value':m1__$1})]})),((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'align':new cljs.core.Keyword(null,"right","right",-452581833),'onChange':on_m2_change,'className':"main_ui_workspace_sidebar_options_menus_layout_item__horizontal-margin-wrapper",'placeholder':m2_placeholder,'inputType':new cljs.core.Keyword(null,"horizontal-margin","horizontal-margin",1659318629),'attr':new cljs.core.Keyword(null,"m2","m2",-587003306),'appliedToken':token_applied_m2__$1,'value':m2__$1,'onFocus':on_focus_m2,'onDetach':on_detach_horizontal,'property':"Horizontal margin",'onBlur':on_blur,'nillable':true,'icon':app.main.ui.ds.foundations.assets.icon.margin_left_right}):rumext.v2.jsxs("div",{'title':"Horizontal margin",'className':"main_ui_workspace_sidebar_options_menus_layout_item__horizontal-margin",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__icon",'children':app.main.ui.icons.margin_left_right}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'className':"main_ui_workspace_sidebar_options_menus_layout_item__numeric-input",'placeholder':m2_placeholder,'data-name':"m2",'onFocus':on_focus_m2,'onChange':on_m2_change,'onBlur':on_blur,'nillable':true,'value':m2__$1})]}))]});
});

(app.main.ui.workspace.sidebar.options.menus.layout_item.margin_simple_STAR_.displayName = "margin-simple*");

app.main.ui.workspace.sidebar.options.menus.layout_item.margin_multiple_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$layout_item$margin_multiple_STAR_(props_55721){
var on_change = props_55721.onChange;
var value = props_55721.value;
var on_blur = props_55721.onBlur;
var ids = props_55721.ids;
var applied_tokens = props_55721.appliedTokens;
var token_numeric_inputs = app.main.features.use_feature("tokens/numeric-input");
var m1 = new cljs.core.Keyword(null,"m1","m1",-108094626).cljs$core$IFn$_invoke$arity$1(value);
var m2 = new cljs.core.Keyword(null,"m2","m2",-587003306).cljs$core$IFn$_invoke$arity$1(value);
var m3 = new cljs.core.Keyword(null,"m3","m3",-703635357).cljs$core$IFn$_invoke$arity$1(value);
var m4 = new cljs.core.Keyword(null,"m4","m4",-1624571215).cljs$core$IFn$_invoke$arity$1(value);
var applied_token_to_m1 = new cljs.core.Keyword(null,"m1","m1",-108094626).cljs$core$IFn$_invoke$arity$1(applied_tokens);
var applied_token_to_m2 = new cljs.core.Keyword(null,"m2","m2",-587003306).cljs$core$IFn$_invoke$arity$1(applied_tokens);
var applied_token_to_m3 = new cljs.core.Keyword(null,"m3","m3",-703635357).cljs$core$IFn$_invoke$arity$1(applied_tokens);
var applied_token_to_m4 = new cljs.core.Keyword(null,"m4","m4",-1624571215).cljs$core$IFn$_invoke$arity$1(applied_tokens);
var on_detach_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (token_name,attr){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.unapply_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),token_name,new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.PersistentHashSet.createAsIfByAssoc([attr]),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}));
var on_focus = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(app.main.ui.workspace.sidebar.options.menus.layout_item.select_margin)],(function (attr,event){
app.main.ui.workspace.sidebar.options.menus.layout_item.select_margin(attr);

return app.util.dom.select_target(event);
}));
var on_focus_m1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_focus)],(function (){
return (on_focus.cljs$core$IFn$_invoke$arity$1 ? on_focus.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"m1","m1",-108094626)) : on_focus.call(null,new cljs.core.Keyword(null,"m1","m1",-108094626)));
}));
var on_focus_m2 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_focus)],(function (){
return (on_focus.cljs$core$IFn$_invoke$arity$1 ? on_focus.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"m2","m2",-587003306)) : on_focus.call(null,new cljs.core.Keyword(null,"m2","m2",-587003306)));
}));
var on_focus_m3 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_focus)],(function (){
return (on_focus.cljs$core$IFn$_invoke$arity$1 ? on_focus.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"m1","m1",-108094626)) : on_focus.call(null,new cljs.core.Keyword(null,"m1","m1",-108094626)));
}));
var on_focus_m4 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_focus)],(function (){
return (on_focus.cljs$core$IFn$_invoke$arity$1 ? on_focus.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"m2","m2",-587003306)) : on_focus.call(null,new cljs.core.Keyword(null,"m2","m2",-587003306)));
}));
var on_change_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change),rumext.v2.adapt(ids)],(function (value__$1,attr){
if(((typeof value__$1 === 'string') || (typeof value__$1 === 'number'))){
return (on_change.cljs$core$IFn$_invoke$arity$3 ? on_change.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"multiple","multiple",1244445549),attr,value__$1) : on_change.call(null,new cljs.core.Keyword(null,"multiple","multiple",1244445549),attr,value__$1));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.toggle_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.first(value__$1),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentHashSet.createAsIfByAssoc([attr]),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}
}));
var on_m1_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_SINGLEQUOTE_)],(function (p1__55717_SHARP_){
return (on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(p1__55717_SHARP_,new cljs.core.Keyword(null,"m1","m1",-108094626)) : on_change_SINGLEQUOTE_.call(null,p1__55717_SHARP_,new cljs.core.Keyword(null,"m1","m1",-108094626)));
}));
var on_m2_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_SINGLEQUOTE_)],(function (p1__55718_SHARP_){
return (on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(p1__55718_SHARP_,new cljs.core.Keyword(null,"m2","m2",-587003306)) : on_change_SINGLEQUOTE_.call(null,p1__55718_SHARP_,new cljs.core.Keyword(null,"m2","m2",-587003306)));
}));
var on_m3_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_SINGLEQUOTE_)],(function (p1__55719_SHARP_){
return (on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(p1__55719_SHARP_,new cljs.core.Keyword(null,"m3","m3",-703635357)) : on_change_SINGLEQUOTE_.call(null,p1__55719_SHARP_,new cljs.core.Keyword(null,"m3","m3",-703635357)));
}));
var on_m4_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change_SINGLEQUOTE_)],(function (p1__55720_SHARP_){
return (on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2 ? on_change_SINGLEQUOTE_.cljs$core$IFn$_invoke$arity$2(p1__55720_SHARP_,new cljs.core.Keyword(null,"m4","m4",-1624571215)) : on_change_SINGLEQUOTE_.call(null,p1__55720_SHARP_,new cljs.core.Keyword(null,"m4","m4",-1624571215)));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__margin-multiple",'children':[((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'onChange':on_m1_change,'className':"main_ui_workspace_sidebar_options_menus_layout_item__top-margin-wrapper",'inputType':new cljs.core.Keyword(null,"vertical-margin","vertical-margin",629210288),'attr':new cljs.core.Keyword(null,"m1","m1",-108094626),'appliedToken':applied_token_to_m1,'value':m1,'onFocus':on_focus_m1,'onDetach':on_detach_token,'property':"Top margin",'onBlur':on_blur,'nillable':true,'icon':app.main.ui.ds.foundations.assets.icon.margin_top}):rumext.v2.jsxs("div",{'title':"Top margin",'className':"main_ui_workspace_sidebar_options_menus_layout_item__top-margin",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__icon",'children':app.main.ui.icons.margin_top}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'className':"main_ui_workspace_sidebar_options_menus_layout_item__numeric-input",'placeholder':"--",'data-name':"m1",'onFocus':on_focus_m1,'onChange':on_m1_change,'onBlur':on_blur,'nillable':true,'value':m1})]})),((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'align':new cljs.core.Keyword(null,"right","right",-452581833),'onChange':on_m2_change,'className':"main_ui_workspace_sidebar_options_menus_layout_item__right-margin-wrapper",'inputType':new cljs.core.Keyword(null,"horizontal-margin","horizontal-margin",1659318629),'attr':new cljs.core.Keyword(null,"m2","m2",-587003306),'appliedToken':applied_token_to_m2,'value':m2,'onFocus':on_focus_m2,'onDetach':on_detach_token,'property':"Right margin",'onBlur':on_blur,'nillable':true,'icon':app.main.ui.ds.foundations.assets.icon.margin_right}):rumext.v2.jsxs("div",{'title':"Right margin",'className':"main_ui_workspace_sidebar_options_menus_layout_item__right-margin",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__icon",'children':app.main.ui.icons.margin_right}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'className':"main_ui_workspace_sidebar_options_menus_layout_item__numeric-input",'placeholder':"--",'data-name':"m2",'onFocus':on_focus_m2,'onChange':on_m2_change,'onBlur':on_blur,'nillable':true,'value':m2})]})),((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'align':new cljs.core.Keyword(null,"right","right",-452581833),'onChange':on_m3_change,'className':"main_ui_workspace_sidebar_options_menus_layout_item__bottom-margin-wrapper",'inputType':new cljs.core.Keyword(null,"vertical-margin","vertical-margin",629210288),'attr':new cljs.core.Keyword(null,"m3","m3",-703635357),'appliedToken':applied_token_to_m3,'value':m3,'onFocus':on_focus_m3,'onDetach':on_detach_token,'property':"Bottom margin",'onBlur':on_blur,'nillable':true,'icon':app.main.ui.ds.foundations.assets.icon.margin_bottom}):rumext.v2.jsxs("div",{'title':"Bottom margin",'className':"main_ui_workspace_sidebar_options_menus_layout_item__bottom-margin",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__icon",'children':app.main.ui.icons.margin_bottom}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'className':"main_ui_workspace_sidebar_options_menus_layout_item__numeric-input",'placeholder':"--",'data-name':"m3",'onFocus':on_focus_m3,'onChange':on_m3_change,'onBlur':on_blur,'nillable':true,'value':m3})]})),((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'onChange':on_m4_change,'className':"main_ui_workspace_sidebar_options_menus_layout_item__left-margin-wrapper",'inputType':new cljs.core.Keyword(null,"horizontal-margin","horizontal-margin",1659318629),'attr':new cljs.core.Keyword(null,"m4","m4",-1624571215),'appliedToken':applied_token_to_m4,'value':m4,'onFocus':on_focus_m4,'onDetach':on_detach_token,'property':"Left margin",'onBlur':on_blur,'nillable':true,'icon':app.main.ui.ds.foundations.assets.icon.margin_left}):rumext.v2.jsxs("div",{'title':"Left margin",'className':"main_ui_workspace_sidebar_options_menus_layout_item__left-margin",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__icon",'children':app.main.ui.icons.margin_left}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'className':"main_ui_workspace_sidebar_options_menus_layout_item__numeric-input",'placeholder':"--",'data-name':"m4",'onFocus':on_focus_m4,'onChange':on_m4_change,'onBlur':on_blur,'nillable':true,'value':m4})]}))]});
});

(app.main.ui.workspace.sidebar.options.menus.layout_item.margin_multiple_STAR_.displayName = "margin-multiple*");

app.main.ui.workspace.sidebar.options.menus.layout_item.margin_section_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$layout_item$margin_section_STAR_(props_55723){
var type = props_55723.type;
var on_type_change = props_55723.onTypeChange;
var props = props_55723;
var type__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"simple","simple",-581868663));
var on_blur = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(app.main.ui.workspace.sidebar.options.menus.layout_item.select_margins)],(function (){
return app.main.ui.workspace.sidebar.options.menus.layout_item.select_margins(false,false,false,false);
}));
var props__$1 = {...props, 'onBlur':on_blur};
var on_type_change_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(type__$1),rumext.v2.adapt(on_type_change)],(function (_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,new cljs.core.Keyword(null,"multiple","multiple",1244445549))){
return (on_type_change.cljs$core$IFn$_invoke$arity$1 ? on_type_change.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"simple","simple",-581868663)) : on_type_change.call(null,new cljs.core.Keyword(null,"simple","simple",-581868663)));
} else {
return (on_type_change.cljs$core$IFn$_invoke$arity$1 ? on_type_change.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"multiple","multiple",1244445549)) : on_type_change.call(null,new cljs.core.Keyword(null,"multiple","multiple",1244445549)));
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return (function (){
return (on_blur.cljs$core$IFn$_invoke$arity$0 ? on_blur.cljs$core$IFn$_invoke$arity$0() : on_blur.call(null));
});
}));

return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__margin-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__inputs-wrapper",'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,new cljs.core.Keyword(null,"simple","simple",-581868663)))?rumext.v2.create_element(app.main.ui.workspace.sidebar.options.menus.layout_item.margin_simple_STAR_,props__$1):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?rumext.v2.create_element(app.main.ui.workspace.sidebar.options.menus.layout_item.margin_multiple_STAR_,props__$1):null))}),rumext.v2.jsx("button",{'title':"Margin - multiple",'onClick':on_type_change_SINGLEQUOTE_,'className':"main_ui_workspace_sidebar_options_menus_layout_item__margin-mode"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type__$1,new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?"main_ui_workspace_sidebar_options_menus_layout_item__selected":""),'children':app.main.ui.icons.margin})]});
});

(app.main.ui.workspace.sidebar.options.menus.layout_item.margin_section_STAR_.displayName = "margin-section*");

app.main.ui.workspace.sidebar.options.menus.layout_item.element_behaviour_horizontal = (function app$main$ui$workspace$sidebar$options$menus$layout_item$element_behaviour_horizontal(props_55724){
var on_change = (props_55724["on-change"]);
var value = props_55724.value;
var is_auto = (props_55724["is-auto"]);
var has_fill = (props_55724["has-fill"]);
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__horizontal-behaviour"+" "+(((((!(has_fill))) && ((!(is_auto)))))?"main_ui_workspace_sidebar_options_menus_layout_item__one-element":"")+" "+((((has_fill) || (is_auto)))?"main_ui_workspace_sidebar_options_menus_layout_item__two-element":"")+" "+((((has_fill) && (is_auto)))?"main_ui_workspace_sidebar_options_menus_layout_item__three-element":""),'children':rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':app.common.data.name(value),'decode-fn':cljs.core.keyword,'on-change':on_change,'name':"flex-behaviour-h",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"fix",'icon':app.main.ui.ds.foundations.assets.icon.fixed_width,'title':"Fix width",'id':"behaviour-h-fix"}),((has_fill)?rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"fill",'icon':app.main.ui.ds.foundations.assets.icon.fill_content,'title':"Width 100%",'id':"behaviour-h-fill"}):null),((is_auto)?rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"auto",'icon':app.main.ui.ds.foundations.assets.icon.hug_content,'title':"Fit content (Horizontal)",'id':"behaviour-h-auto"}):null)]})});
});

(app.main.ui.workspace.sidebar.options.menus.layout_item.element_behaviour_horizontal.displayName = "element-behaviour-horizontal");

app.main.ui.workspace.sidebar.options.menus.layout_item.element_behaviour_vertical = (function app$main$ui$workspace$sidebar$options$menus$layout_item$element_behaviour_vertical(props_55725){
var on_change = (props_55725["on-change"]);
var value = props_55725.value;
var is_auto = (props_55725["is-auto"]);
var has_fill = (props_55725["has-fill"]);
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__vertical-behaviour"+" "+(((((!(has_fill))) && ((!(is_auto)))))?"main_ui_workspace_sidebar_options_menus_layout_item__one-element":"")+" "+((((has_fill) || (is_auto)))?"main_ui_workspace_sidebar_options_menus_layout_item__two-element":"")+" "+((((has_fill) && (is_auto)))?"main_ui_workspace_sidebar_options_menus_layout_item__three-element":""),'children':rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':app.common.data.name(value),'decode-fn':cljs.core.keyword,'on-change':on_change,'name':"flex-behaviour-v",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"fix",'icon':app.main.ui.ds.foundations.assets.icon.fixed_width,'icon-class':"main_ui_workspace_sidebar_options_menus_layout_item__rotated",'title':"Fix height",'id':"behaviour-v-fix"}),((has_fill)?rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"fill",'icon':app.main.ui.ds.foundations.assets.icon.fill_content,'icon-class':"main_ui_workspace_sidebar_options_menus_layout_item__rotated",'title':"Height 100%",'id':"behaviour-v-fill"}):null),((is_auto)?rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"auto",'icon':app.main.ui.ds.foundations.assets.icon.hug_content,'icon-class':"main_ui_workspace_sidebar_options_menus_layout_item__rotated",'title':"Fit content (Vertical)",'id':"behaviour-v-auto"}):null)]})});
});

(app.main.ui.workspace.sidebar.options.menus.layout_item.element_behaviour_vertical.displayName = "element-behaviour-vertical");

app.main.ui.workspace.sidebar.options.menus.layout_item.align_self_row = (function app$main$ui$workspace$sidebar$options$menus$layout_item$align_self_row(props_55726){
var on_change = (props_55726["on-change"]);
var value = props_55726.value;
var is_col = (props_55726["is-col"]);
return rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':app.common.data.name(value),'decode-fn':cljs.core.keyword,'on-change':on_change,'name':"flex-align-self",'allow-empty':true,'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"start",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_flex_icon(new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"start","start",-355208981),is_col),'title':"Align self start",'id':"align-self-start"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"center",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_flex_icon(new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"center","center",-748944368),is_col),'title':"Align self center",'id':"align-self-center"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"end",'icon':app.main.ui.workspace.sidebar.options.menus.layout_container.get_layout_flex_icon(new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"end","end",-268185958),is_col),'title':"Align self end",'id':"align-self-end"})]});
});

(app.main.ui.workspace.sidebar.options.menus.layout_item.align_self_row.displayName = "align-self-row");

app.main.ui.workspace.sidebar.options.menus.layout_item.schema_COLON_layout_item_props_schema = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m1","m1",-108094626),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m2","m2",-587003306),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m3","m3",-703635357),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"m4","m4",-1624571215),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-margin-type","layout-item-margin-type",-1313230390),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),new cljs.core.Keyword(null,"float","float",-1732389368),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null)], null);
app.main.ui.workspace.sidebar.options.menus.layout_item.schema_COLON_layout_size_constraints = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"values","values",372645556),app.main.ui.workspace.sidebar.options.menus.layout_item.schema_COLON_layout_item_props_schema], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ids","ids",-998535796),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","vec","app.common.schema/vec",801005460),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null)], null);
app.main.ui.workspace.sidebar.options.menus.layout_item.layout_size_constraints_STAR__validator = rumext.v2.validation.validator(app.common.schema.schema(app.main.ui.workspace.sidebar.options.menus.layout_item.schema_COLON_layout_size_constraints));

app.main.ui.workspace.sidebar.options.menus.layout_item.layout_size_constraints_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$layout_item$layout_size_constraints_STAR_(props_55733){
// ===== start props checking =====;

var res__35513__auto___55751 = app.main.ui.workspace.sidebar.options.menus.layout_item.layout_size_constraints_STAR__validator(props_55733);
if((!((res__35513__auto___55751 == null)))){
var items__35514__auto___55752 = cljs.core.reduce_kv((function (result__35515__auto__,k__35516__auto__,v__35517__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__35515__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__35516__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__35517__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__35513__auto___55751);
var msg__35518__auto___55753 = ["invalid props on component layout-size-constraints*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__35514__auto___55752),"\n"].join('');
throw (new Error(msg__35518__auto___55753));
} else {
}

// ===== end props checking =====;

var ids = props_55733.ids;
var values = props_55733.values;
var applied_tokens = props_55733.appliedTokens;
var props = props_55733;
var token_numeric_inputs = app.main.features.use_feature("tokens/numeric-input");
var v_sizing = new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(values);
var min_w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548));
var max_w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366));
var min_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548));
var max_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307));
var applied_token_to_min_w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548));
var applied_token_to_max_w = cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366));
var applied_token_to_min_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548));
var applied_token_to_max_h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307));
var on_detach_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (token_name,attr){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.unapply_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),token_name,new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.PersistentHashSet.createAsIfByAssoc([attr]),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}));
var on_size_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value,attr){
if(((typeof value === 'string') || (typeof value === 'number'))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(ids,cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value])));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.toggle_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.first(value),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentHashSet.createAsIfByAssoc([attr]),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}
}));
var on_layout_item_min_w_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_size_change)],(function (p1__55727_SHARP_){
return (on_size_change.cljs$core$IFn$_invoke$arity$2 ? on_size_change.cljs$core$IFn$_invoke$arity$2(p1__55727_SHARP_,new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548)) : on_size_change.call(null,p1__55727_SHARP_,new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548)));
}));
var on_layout_item_max_w_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_size_change)],(function (p1__55728_SHARP_){
return (on_size_change.cljs$core$IFn$_invoke$arity$2 ? on_size_change.cljs$core$IFn$_invoke$arity$2(p1__55728_SHARP_,new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366)) : on_size_change.call(null,p1__55728_SHARP_,new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366)));
}));
var on_layout_item_min_h_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_size_change)],(function (p1__55729_SHARP_){
return (on_size_change.cljs$core$IFn$_invoke$arity$2 ? on_size_change.cljs$core$IFn$_invoke$arity$2(p1__55729_SHARP_,new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548)) : on_size_change.call(null,p1__55729_SHARP_,new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548)));
}));
var on_layout_item_max_h_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_size_change)],(function (p1__55730_SHARP_){
return (on_size_change.cljs$core$IFn$_invoke$arity$2 ? on_size_change.cljs$core$IFn$_invoke$arity$2(p1__55730_SHARP_,new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307)) : on_size_change.call(null,p1__55730_SHARP_,new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307)));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__advanced-options",'children':[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(values),new cljs.core.Keyword(null,"fill","fill",883462889)))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__horizontal-fill",'children':[((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'onChange':on_layout_item_min_w_change,'inputType':new cljs.core.Keyword(null,"min-width","min-width",1926193728),'attr':new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),'appliedToken':applied_token_to_min_w,'value':min_w,'onDetach':on_detach_token,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layout-item.layout-item-min-w"),'nillable':true,'textIcon':"MIN W",'tooltipClass':"main_ui_workspace_sidebar_options_menus_layout_item__tooltip-wrapper"}):rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layout-item.layout-item-min-w"),'className':"main_ui_workspace_sidebar_options_menus_layout_item__layout-item-min-w",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__icon-text",'children':"MIN W"}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'noValidate':true,'min':(0),'onChange':on_layout_item_min_w_change,'className':"main_ui_workspace_sidebar_options_menus_layout_item__numeric-input",'placeholder':"--",'value':cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548)),'onFocus':app.util.dom.select_target,'data-wrap':true,'nillable':true,'data-attr':"layout-item-min-w"})]})),((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'align':new cljs.core.Keyword(null,"right","right",-452581833),'onChange':on_layout_item_max_w_change,'inputType':new cljs.core.Keyword(null,"max-width","max-width",-1939924051),'attr':new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),'appliedToken':applied_token_to_max_w,'value':max_w,'onDetach':on_detach_token,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layout-item.layout-item-max-w"),'nillable':true,'textIcon':"MAX W",'tooltipClass':"main_ui_workspace_sidebar_options_menus_layout_item__tooltip-wrapper"}):rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layout-item.layout-item-max-w"),'className':"main_ui_workspace_sidebar_options_menus_layout_item__layout-item-max-w",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__icon-text",'children':"MAX W"}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'noValidate':true,'min':(0),'onChange':on_layout_item_max_w_change,'className':"main_ui_workspace_sidebar_options_menus_layout_item__numeric-input",'placeholder':"--",'value':cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366)),'onFocus':app.util.dom.select_target,'data-wrap':true,'nillable':true,'data-attr':"layout-item-max-w"})]}))]}):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_sizing,new cljs.core.Keyword(null,"fill","fill",883462889)))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__vertical-fill",'children':[((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'onChange':on_layout_item_min_h_change,'inputType':new cljs.core.Keyword(null,"max-height","max-height",-612563804),'attr':new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),'appliedToken':applied_token_to_min_h,'value':min_h,'onDetach':on_detach_token,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layout-item.layout-item-min-h"),'nillable':true,'textIcon':"MIN H",'tooltipClass':"main_ui_workspace_sidebar_options_menus_layout_item__tooltip-wrapper"}):rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layout-item.layout-item-min-h"),'className':"main_ui_workspace_sidebar_options_menus_layout_item__layout-item-min-h",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__icon-text",'children':"MIN H"}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'noValidate':true,'min':(0),'onChange':on_layout_item_min_h_change,'className':"main_ui_workspace_sidebar_options_menus_layout_item__numeric-input",'placeholder':"--",'value':cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548)),'onFocus':app.util.dom.select_target,'data-wrap':true,'nillable':true,'data-attr':"layout-item-min-h"})]})),((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'align':new cljs.core.Keyword(null,"right","right",-452581833),'onChange':on_layout_item_max_h_change,'inputType':new cljs.core.Keyword(null,"max-height","max-height",-612563804),'attr':new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),'appliedToken':applied_token_to_max_h,'value':max_h,'onDetach':on_detach_token,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layout-item.layout-item-max-h"),'nillable':true,'textIcon':"MAX H",'tooltipClass':"main_ui_workspace_sidebar_options_menus_layout_item__tooltip-wrapper"}):rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layout-item.layout-item-max-h"),'className':"main_ui_workspace_sidebar_options_menus_layout_item__layout-item-max-h",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__icon-text",'children':"MAX H"}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'noValidate':true,'min':(0),'onChange':on_layout_item_max_h_change,'className':"main_ui_workspace_sidebar_options_menus_layout_item__numeric-input",'placeholder':"--",'value':cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307)),'onFocus':app.util.dom.select_target,'data-wrap':true,'nillable':true,'data-attr':"layout-item-max-h"})]}))]}):null)]});
});

(app.main.ui.workspace.sidebar.options.menus.layout_item.layout_size_constraints_STAR_.displayName = "layout-size-constraints*");

app.main.ui.workspace.sidebar.options.menus.layout_item.layout_item_menu = (function (component__35533__auto__){
return rumext.v2.memo_SINGLEQUOTE_(component__35533__auto__,(function (new_props_55746,old_props_55747){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props_55746["is-flex-parent?"]),(old_props_55747["is-flex-parent?"]))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props_55746["is-grid-layout?"]),(old_props_55747["is-grid-layout?"]))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_55746.ids,old_props_55747.ids)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_55746.type,old_props_55747.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_55746.values,old_props_55747.values)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props_55746["applied-tokens"]),(old_props_55747["applied-tokens"]))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props_55746["is-grid-parent"]),(old_props_55747["is-grid-parent"]))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props_55746["is-flex-layout?"]),(old_props_55747["is-flex-layout?"]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props_55746["is-layout-child?"]),(old_props_55747["is-layout-child?"]))))))))))))))))));
}));
})((function app$main$ui$workspace$sidebar$options$menus$layout_item$layout_item_menu(props_55745){
var is_flex_layout_QMARK_ = (props_55745["is-flex-layout?"]);
var is_layout_child_QMARK_ = (props_55745["is-layout-child?"]);
var is_layout_container_QMARK_ = (props_55745["is-layout-container?"]);
var is_flex_parent_QMARK_ = (props_55745["is-flex-parent?"]);
var is_grid_layout_QMARK_ = (props_55745["is-grid-layout?"]);
var is_grid_parent_QMARK_ = (props_55745["is-grid-parent?"]);
var ids = props_55745.ids;
var values = props_55745.values;
var applied_tokens = (props_55745["applied-tokens"]);
var selection_parents_STAR_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (){
return app.main.refs.parents_by_ids(ids);
}));
var selection_parents = rumext.v2.deref(selection_parents_STAR_);
var is_absolute_QMARK_ = new cljs.core.Keyword(null,"layout-item-absolute","layout-item-absolute",1832387265).cljs$core$IFn$_invoke$arity$1(values);
var is_col_QMARK_ = cljs.core.every_QMARK_(app.common.types.shape.layout.col_QMARK_,selection_parents);
var is_layout_child_QMARK___$1 = ((is_layout_child_QMARK_) && ((!(is_absolute_QMARK_))));
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(true);
var open_QMARK_ = cljs.core.deref(state_STAR_);
var toggle_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_STAR_,cljs.core.not);
}));
var has_content_QMARK_ = ((is_layout_child_QMARK___$1) || (((is_flex_parent_QMARK_) || (((is_grid_parent_QMARK_) || (is_layout_container_QMARK_))))));
var align_self = new cljs.core.Keyword(null,"layout-item-align-self","layout-item-align-self",-1976194692).cljs$core$IFn$_invoke$arity$1(values);
var h_sizing = new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(values);
var v_sizing = new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(values);
var title = ((((is_layout_container_QMARK_) && (((is_flex_layout_QMARK_) && ((!(is_layout_child_QMARK___$1)))))))?"Flex board":((((is_layout_container_QMARK_) && (((is_grid_layout_QMARK_) && ((!(is_layout_child_QMARK___$1)))))))?"Grid board":((((is_layout_container_QMARK_) && ((!(is_layout_child_QMARK___$1)))))?"Layout board":((is_flex_parent_QMARK_)?"Flex element":((is_grid_parent_QMARK_)?"Grid element":"Layout element"
)))));
var on_align_self_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids),rumext.v2.adapt(align_self)],(function (value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(align_self,value)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-align-self","layout-item-align-self",-1976194692),null], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-align-self","layout-item-align-self",-1976194692),value], null)));
}
}));
var on_margin_type_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (type){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-margin-type","layout-item-margin-type",-1313230390),type], null)));
}));
var on_margin_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (type,prop,val){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"simple","simple",-581868663))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop,new cljs.core.Keyword(null,"m1","m1",-108094626))))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"m1","m1",-108094626),val,new cljs.core.Keyword(null,"m3","m3",-703635357),val], null)], null)));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"simple","simple",-581868663))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prop,new cljs.core.Keyword(null,"m2","m2",-587003306))))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"m2","m2",-587003306),val,new cljs.core.Keyword(null,"m4","m4",-1624571215),val], null)], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708),cljs.core.PersistentArrayMap.createAsIfByAssoc([prop,val])], null)));

}
}
}));
var on_behaviour_h_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527),value], null)));
}));
var on_behaviour_v_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641),value], null)));
}));
var on_change_position = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"static","static",1214358571))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-z-index","layout-item-z-index",728479455),null], null)));
} else {
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-absolute","layout-item-absolute",1832387265),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"absolute","absolute",1655386478))], null)));
}));
var on_change_z_index = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_layout_child.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-z-index","layout-item-z-index",728479455),value], null)));
}));
return rumext.v2.jsxs("section",{'aria-label':"layout item menu",'className':"main_ui_workspace_sidebar_options_menus_layout_item__element-set",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__element-title",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':has_content_QMARK_,'collapsed':cljs.core.not(open_QMARK_),'onCollapsed':toggle_content,'title':title,'className':"main_ui_workspace_sidebar_options_menus_layout_item__title-spacing-layout-element"+" "+(((!(has_content_QMARK_)))?"main_ui_workspace_sidebar_options_menus_layout_item__title-spacing-empty":"")})}),(cljs.core.truth_(open_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__flex-element-menu",'children':[((((is_layout_child_QMARK___$1) || (is_absolute_QMARK_)))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__position-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__position-options",'children':rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':((is_absolute_QMARK_)?"absolute":"static"),'decode-fn':cljs.core.keyword,'on-change':on_change_position,'name':"layout-style",'wide':true,'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"static",'id':new cljs.core.Keyword(null,"static-position","static-position",-2066619638)}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"absolute",'id':new cljs.core.Keyword(null,"absolute-position","absolute-position",397125855)})]})}),rumext.v2.jsxs("div",{'title':"z-index",'className':"main_ui_workspace_sidebar_options_menus_layout_item__z-index-wrapper",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__icon-text",'children':"Z"}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'className':"main_ui_workspace_sidebar_options_menus_layout_item__numeric-input",'placeholder':"--",'onFocus':(function (p1__55743_SHARP_){
return app.util.dom.select_target(p1__55743_SHARP_);
}),'onChange':(function (p1__55744_SHARP_){
return (on_change_z_index.cljs$core$IFn$_invoke$arity$1 ? on_change_z_index.cljs$core$IFn$_invoke$arity$1(p1__55744_SHARP_) : on_change_z_index.call(null,p1__55744_SHARP_));
}),'nillable':true,'value':new cljs.core.Keyword(null,"layout-item-z-index","layout-item-z-index",728479455).cljs$core$IFn$_invoke$arity$1(values)})]})]}):null),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__behavior-row",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__behaviour-menu"+" "+((((is_layout_child_QMARK___$1) && (is_layout_container_QMARK_)))?"main_ui_workspace_sidebar_options_menus_layout_item__wrap":""),'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_item.element_behaviour_horizontal,{'is-auto':is_layout_container_QMARK_,'has-fill':is_layout_child_QMARK___$1,'value':new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(values),'on-change':on_behaviour_h_change}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_item.element_behaviour_vertical,{'is-auto':is_layout_container_QMARK_,'has-fill':is_layout_child_QMARK___$1,'value':new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(values),'on-change':on_behaviour_v_change})]})}),((((is_layout_child_QMARK___$1) && (is_flex_parent_QMARK_)))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layout_item__align-row",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_item.align_self_row,{'is-col':is_col_QMARK_,'value':align_self,'on-change':on_align_self_change})}):null),((is_layout_child_QMARK___$1)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_item.margin_section_STAR_,{'value':new cljs.core.Keyword(null,"layout-item-margin","layout-item-margin",1666327708).cljs$core$IFn$_invoke$arity$1(values),'type':new cljs.core.Keyword(null,"layout-item-margin-type","layout-item-margin-type",-1313230390).cljs$core$IFn$_invoke$arity$1(values),'onTypeChange':on_margin_type_change,'appliedTokens':applied_tokens,'ids':ids,'onChange':on_margin_change}):null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(h_sizing,new cljs.core.Keyword(null,"fill","fill",883462889))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(v_sizing,new cljs.core.Keyword(null,"fill","fill",883462889)))))?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.layout_item.layout_size_constraints_STAR_,{'ids':ids,'values':values,'appliedTokens':applied_tokens}):null)]}):null)]});
}));

(app.main.ui.workspace.sidebar.options.menus.layout_item.layout_item_menu.displayName = "layout-item-menu");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.layout_item.js.map
