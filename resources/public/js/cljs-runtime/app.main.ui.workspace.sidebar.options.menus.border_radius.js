import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.types.shape.radius.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.tokens.application.js";
import "./app.main.features.js";
import "./app.main.store.js";
import "./app.main.ui.components.numeric_input.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.border_radius');
app.main.ui.workspace.sidebar.options.menus.border_radius.all_equal_QMARK_ = (function app$main$ui$workspace$sidebar$options$menus$border_radius$all_equal_QMARK_(shape){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"r1","r1",690974900).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"r2","r2",252844174).cljs$core$IFn$_invoke$arity$1(shape),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"r3","r3",-2027148174).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"r4","r4",1134323163).cljs$core$IFn$_invoke$arity$1(shape)], 0));
});
app.main.ui.workspace.sidebar.options.menus.border_radius.check_border_radius_menu_props = (function app$main$ui$workspace$sidebar$options$menus$border_radius$check_border_radius_menu_props(old_props,new_props){
var old_values = (old_props["values"]);
var new_values = (new_props["values"]);
var old_applied_tokens = (old_props["appliedTokens"]);
var new_applied_tokens = (new_props["appliedTokens"]);
return ((((old_props["class"]) === (new_props["class"]))) && (((((old_props["ids"]) === (new_props["ids"]))) && (((((old_props["shapes"]) === (new_props["shapes"]))) && ((((old_applied_tokens === new_applied_tokens)) && ((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_values,new cljs.core.Keyword(null,"r1","r1",690974900)) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_values,new cljs.core.Keyword(null,"r1","r1",690974900)))) && ((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_values,new cljs.core.Keyword(null,"r2","r2",252844174)) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_values,new cljs.core.Keyword(null,"r2","r2",252844174)))) && ((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_values,new cljs.core.Keyword(null,"r3","r3",-2027148174)) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_values,new cljs.core.Keyword(null,"r3","r3",-2027148174)))) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_values,new cljs.core.Keyword(null,"r4","r4",1134323163)) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_values,new cljs.core.Keyword(null,"r4","r4",1134323163)))))))))))))))));
});
app.main.ui.workspace.sidebar.options.menus.border_radius.border_radius_menu_STAR_ = (function (p1__55731_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__55731_SHARP_,app.main.ui.workspace.sidebar.options.menus.border_radius.check_border_radius_menu_props);
})((function app$main$ui$workspace$sidebar$options$menus$border_radius$border_radius_menu_STAR_(props_55739){
var ids = props_55739.ids;
var class$ = props_55739.className;
var values = props_55739.values;
var applied_tokens = props_55739.appliedTokens;
var token_numeric_inputs = app.main.features.use_feature("tokens/numeric-input");
var all_values_equal_QMARK_ = app.main.ui.workspace.sidebar.options.menus.border_radius.all_equal_QMARK_(values);
var all_token_equal_QMARK_ = ((cljs.core.seq(applied_tokens)) && (app.main.ui.workspace.sidebar.options.menus.border_radius.all_equal_QMARK_(applied_tokens)));
var radius_expanded_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var radius_expanded = cljs.core.deref(radius_expanded_STAR_);
var on_detach_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (token_name,attr){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.unapply_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),token_name,new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.PersistentHashSet.createAsIfByAssoc([attr]),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}));
var on_detach_all = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_detach_token)],(function (token){
return cljs.core.run_BANG_((function (p1__55732_SHARP_){
return (on_detach_token.cljs$core$IFn$_invoke$arity$2 ? on_detach_token.cljs$core$IFn$_invoke$arity$2(token,p1__55732_SHARP_) : on_detach_token.call(null,token,p1__55732_SHARP_));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r4","r4",1134323163)], null));
}));
var on_detach_r1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_detach_token)],(function (token){
return (on_detach_token.cljs$core$IFn$_invoke$arity$2 ? on_detach_token.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.Keyword(null,"r1","r1",690974900)) : on_detach_token.call(null,token,new cljs.core.Keyword(null,"r1","r1",690974900)));
}));
var on_detach_r2 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_detach_token)],(function (token){
return (on_detach_token.cljs$core$IFn$_invoke$arity$2 ? on_detach_token.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.Keyword(null,"r2","r2",252844174)) : on_detach_token.call(null,token,new cljs.core.Keyword(null,"r2","r2",252844174)));
}));
var on_detach_r3 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_detach_token)],(function (token){
return (on_detach_token.cljs$core$IFn$_invoke$arity$2 ? on_detach_token.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.Keyword(null,"r3","r3",-2027148174)) : on_detach_token.call(null,token,new cljs.core.Keyword(null,"r3","r3",-2027148174)));
}));
var on_detach_r4 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_detach_token)],(function (token){
return (on_detach_token.cljs$core$IFn$_invoke$arity$2 ? on_detach_token.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.Keyword(null,"r4","r4",1134323163)) : on_detach_token.call(null,token,new cljs.core.Keyword(null,"r4","r4",1134323163)));
}));
var change_radius = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (update_fn){
return app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(ids,(function (shape){
if(app.common.types.shape.radius.has_radius_QMARK_(shape)){
return (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(shape) : update_fn.call(null,shape));
} else {
return shape;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reg-objects?","reg-objects?",-195730116),true,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r4","r4",1134323163)], null)], null));
}));
var change_one_radius = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (update_fn,attr){
return app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$3(ids,(function (shape){
if(app.common.types.shape.radius.has_radius_QMARK_(shape)){
return (update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(shape) : update_fn.call(null,shape));
} else {
return shape;
}
}),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"reg-objects?","reg-objects?",-195730116),true,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [attr], null)], null));
}));
var toggle_radius_mode = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(radius_expanded)],(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(radius_expanded_STAR_,cljs.core.not);
}));
var on_all_radius_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(change_radius),rumext.v2.adapt(ids)],(function (value){
if(((typeof value === 'string') || (typeof value === 'number'))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1((function (){var G__55740 = (function (shape){
return app.common.types.shape.radius.set_radius_to_all_corners(shape,value);
});
return (change_radius.cljs$core$IFn$_invoke$arity$1 ? change_radius.cljs$core$IFn$_invoke$arity$1(G__55740) : change_radius.call(null,G__55740));
})());
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.toggle_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.first(value),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r2","r2",252844174),null,new cljs.core.Keyword(null,"r3","r3",-2027148174),null,new cljs.core.Keyword(null,"r1","r1",690974900),null,new cljs.core.Keyword(null,"r4","r4",1134323163),null], null), null),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}
}));
var on_single_radius_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(change_one_radius),rumext.v2.adapt(ids)],(function (value,attr){
if(((typeof value === 'string') || (typeof value === 'number'))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1((function (){var G__55741 = (function (p1__55734_SHARP_){
return app.common.types.shape.radius.set_radius_to_single_corner(p1__55734_SHARP_,attr,value);
});
var G__55742 = attr;
return (change_one_radius.cljs$core$IFn$_invoke$arity$2 ? change_one_radius.cljs$core$IFn$_invoke$arity$2(G__55741,G__55742) : change_one_radius.call(null,G__55741,G__55742));
})());
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.toggle_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.first(value),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentHashSet.createAsIfByAssoc([attr]),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null))));
}
}));
var on_radius_r1_change = (function (p1__55735_SHARP_){
return (on_single_radius_change.cljs$core$IFn$_invoke$arity$2 ? on_single_radius_change.cljs$core$IFn$_invoke$arity$2(p1__55735_SHARP_,new cljs.core.Keyword(null,"r1","r1",690974900)) : on_single_radius_change.call(null,p1__55735_SHARP_,new cljs.core.Keyword(null,"r1","r1",690974900)));
});
var on_radius_r2_change = (function (p1__55736_SHARP_){
return (on_single_radius_change.cljs$core$IFn$_invoke$arity$2 ? on_single_radius_change.cljs$core$IFn$_invoke$arity$2(p1__55736_SHARP_,new cljs.core.Keyword(null,"r2","r2",252844174)) : on_single_radius_change.call(null,p1__55736_SHARP_,new cljs.core.Keyword(null,"r2","r2",252844174)));
});
var on_radius_r3_change = (function (p1__55737_SHARP_){
return (on_single_radius_change.cljs$core$IFn$_invoke$arity$2 ? on_single_radius_change.cljs$core$IFn$_invoke$arity$2(p1__55737_SHARP_,new cljs.core.Keyword(null,"r3","r3",-2027148174)) : on_single_radius_change.call(null,p1__55737_SHARP_,new cljs.core.Keyword(null,"r3","r3",-2027148174)));
});
var on_radius_r4_change = (function (p1__55738_SHARP_){
return (on_single_radius_change.cljs$core$IFn$_invoke$arity$2 ? on_single_radius_change.cljs$core$IFn$_invoke$arity$2(p1__55738_SHARP_,new cljs.core.Keyword(null,"r4","r4",1134323163)) : on_single_radius_change.call(null,p1__55738_SHARP_,new cljs.core.Keyword(null,"r4","r4",1134323163)));
});
var expand_stream = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"expand-border-radius","expand-border-radius",-352780098)),app.main.store.stream);
}));
app.main.ui.hooks.use_stream.cljs$core$IFn$_invoke$arity$2(expand_stream,(function (){
return cljs.core.reset_BANG_(radius_expanded_STAR_,true);
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (){
return cljs.core.reset_BANG_(radius_expanded_STAR_,false);
}));

return rumext.v2.jsxs("section",{'aria-label':"border-radius-section",'className':""+(class$ ?? "")+" "+("main_ui_workspace_sidebar_options_menus_border_radius__radius" ?? ""),'children':[((cljs.core.not(radius_expanded))?((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'align':new cljs.core.Keyword(null,"right","right",-452581833),'onChange':on_all_radius_change,'placeholder':(((((!(all_values_equal_QMARK_))) || ((!(all_token_equal_QMARK_)))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"
),'attr':new cljs.core.Keyword(null,"border-radius","border-radius",419594011),'appliedToken':((cljs.core.not(cljs.core.seq(applied_tokens)))?null:(((((!(all_values_equal_QMARK_))) || ((!(all_token_equal_QMARK_)))))?new cljs.core.Keyword(null,"multiple","multiple",1244445549):cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"r1","r1",690974900))
)),'value':((all_values_equal_QMARK_)?(((new cljs.core.Keyword(null,"r1","r1",690974900).cljs$core$IFn$_invoke$arity$1(values) == null))?(0):new cljs.core.Keyword(null,"r1","r1",690974900).cljs$core$IFn$_invoke$arity$1(values)):null),'onDetach':on_detach_all,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.radius"),'nillable':true,'icon':app.main.ui.ds.foundations.assets.icon.corner_radius}):rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.radius"),'className':"main_ui_workspace_sidebar_options_menus_border_radius__radius-1",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.corner_radius,'size':"s",'className':"main_ui_workspace_sidebar_options_menus_border_radius__icon"}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'placeholder':(((!(all_values_equal_QMARK_)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"r1","r1",690974900).cljs$core$IFn$_invoke$arity$1(values)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"
)),'min':(0),'nillable':true,'onChange':on_all_radius_change,'value':((all_values_equal_QMARK_)?(((new cljs.core.Keyword(null,"r1","r1",690974900).cljs$core$IFn$_invoke$arity$1(values) == null))?(0):new cljs.core.Keyword(null,"r1","r1",690974900).cljs$core$IFn$_invoke$arity$1(values)):null)})]})):((token_numeric_inputs)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_border_radius__radius-4",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'align':new cljs.core.Keyword(null,"right","right",-452581833),'onChange':on_radius_r1_change,'className':"main_ui_workspace_sidebar_options_menus_border_radius__dropdown-offset",'placeholder':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"r1","r1",690974900)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"r1","r1",690974900))))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"
),'innerClass':"main_ui_workspace_sidebar_options_menus_border_radius__no-icon-input",'attr':new cljs.core.Keyword(null,"border-radius","border-radius",419594011),'appliedToken':cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"r1","r1",690974900)),'value':new cljs.core.Keyword(null,"r1","r1",690974900).cljs$core$IFn$_invoke$arity$1(values),'onDetach':on_detach_r1,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.radius-top-left")}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'align':new cljs.core.Keyword(null,"right","right",-452581833),'onChange':on_radius_r2_change,'placeholder':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"r2","r2",252844174)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"r2","r2",252844174))))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"
),'innerClass':"main_ui_workspace_sidebar_options_menus_border_radius__no-icon-input",'attr':new cljs.core.Keyword(null,"border-radius","border-radius",419594011),'appliedToken':cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"r2","r2",252844174)),'value':new cljs.core.Keyword(null,"r2","r2",252844174).cljs$core$IFn$_invoke$arity$1(values),'onDetach':on_detach_r2,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.radius-top-right"),'nillable':true}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'align':new cljs.core.Keyword(null,"right","right",-452581833),'onChange':on_radius_r4_change,'className':"main_ui_workspace_sidebar_options_menus_border_radius__dropdown-offset",'placeholder':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"r4","r4",1134323163)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"r4","r4",1134323163))))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"
),'innerClass':"main_ui_workspace_sidebar_options_menus_border_radius__no-icon-input",'attr':new cljs.core.Keyword(null,"border-radius","border-radius",419594011),'appliedToken':cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"r4","r4",1134323163)),'value':new cljs.core.Keyword(null,"r4","r4",1134323163).cljs$core$IFn$_invoke$arity$1(values),'onDetach':on_detach_r4,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.radius-bottom-left"),'nillable':true}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'align':new cljs.core.Keyword(null,"right","right",-452581833),'onChange':on_radius_r3_change,'className':"main_ui_workspace_sidebar_options_menus_border_radius__radius-wrapper",'placeholder':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"r3","r3",-2027148174)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"r3","r3",-2027148174))))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"
),'innerClass':"main_ui_workspace_sidebar_options_menus_border_radius__no-icon-input",'attr':new cljs.core.Keyword(null,"border-radius","border-radius",419594011),'appliedToken':cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"r3","r3",-2027148174)),'value':new cljs.core.Keyword(null,"r3","r3",-2027148174).cljs$core$IFn$_invoke$arity$1(values),'onDetach':on_detach_r3,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.radius-bottom-right"),'nillable':true})]}):rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_border_radius__radius-4",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_border_radius__small-input",'children':rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'placeholder':"--",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.radius-top-left"),'min':(0),'onChange':on_radius_r1_change,'value':new cljs.core.Keyword(null,"r1","r1",690974900).cljs$core$IFn$_invoke$arity$1(values)})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_border_radius__small-input",'children':rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'placeholder':"--",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.radius-top-right"),'min':(0),'onChange':on_radius_r2_change,'value':new cljs.core.Keyword(null,"r2","r2",252844174).cljs$core$IFn$_invoke$arity$1(values)})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_border_radius__small-input",'children':rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'placeholder':"--",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.radius-bottom-left"),'min':(0),'onChange':on_radius_r4_change,'value':new cljs.core.Keyword(null,"r4","r4",1134323163).cljs$core$IFn$_invoke$arity$1(values)})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_border_radius__small-input",'children':rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'placeholder':"--",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.radius-bottom-right"),'min':(0),'onChange':on_radius_r3_change,'value':new cljs.core.Keyword(null,"r3","r3",-2027148174).cljs$core$IFn$_invoke$arity$1(values)})})]}))),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'className':(cljs.core.truth_(radius_expanded)?"main_ui_workspace_sidebar_options_menus_border_radius__selected":""),'variant':"ghost",'onClick':toggle_radius_mode,'aria-label':(cljs.core.truth_(radius_expanded)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.radius.hide-all-corners"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.radius.show-single-corners")),'icon':app.main.ui.ds.foundations.assets.icon.corner_radius})]});
}));

(app.main.ui.workspace.sidebar.options.menus.border_radius.border_radius_menu_STAR_.displayName = "border-radius-menu*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.border_radius.js.map
