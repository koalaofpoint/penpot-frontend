import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.tokens.application.js";
import "./app.main.features.js";
import "./app.main.store.js";
import "./app.main.ui.components.numeric_input.js";
import "./app.main.ui.components.select.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.js";
import "./app.render_wasm.api.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.layer');
app.main.ui.workspace.sidebar.options.menus.layer.layer_attrs = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224),new cljs.core.Keyword(null,"blocked","blocked",181326681),new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null);
app.main.ui.workspace.sidebar.options.menus.layer.opacity__GT_string = (function app$main$ui$workspace$sidebar$options$menus$layer$opacity__GT_string(opacity){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(opacity,new cljs.core.Keyword(null,"multiple","multiple",1244445549))){
return ""+((app.common.data.coalesce(opacity,(1)) * (100)) ?? "");
} else {
return new cljs.core.Keyword(null,"multiple","multiple",1244445549);
}
});
app.main.ui.workspace.sidebar.options.menus.layer.on_change = (function app$main$ui$workspace$sidebar$options$menus$layer$on_change(ids,prop,value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids,(function (p1__55682_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55682_SHARP_,prop,value);
})));
});
app.main.ui.workspace.sidebar.options.menus.layer.check_layer_menu_props = (function app$main$ui$workspace$sidebar$options$menus$layer$check_layer_menu_props(old_props,new_props){
var old_values = (old_props["values"]);
var new_values = (new_props["values"]);
var old_applied_tokens = (old_props["appliedTokens"]);
var new_applied_tokens = (new_props["appliedTokens"]);
return ((((old_props["class"]) === (new_props["class"]))) && (((((old_props["ids"]) === (new_props["ids"]))) && ((((old_applied_tokens === new_applied_tokens)) && ((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_values,new cljs.core.Keyword(null,"opacity","opacity",397153780)) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_values,new cljs.core.Keyword(null,"opacity","opacity",397153780)))) && ((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_values,new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224)) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_values,new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224)))) && ((((cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_values,new cljs.core.Keyword(null,"blocked","blocked",181326681)) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_values,new cljs.core.Keyword(null,"blocked","blocked",181326681)))) && ((cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_values,new cljs.core.Keyword(null,"hidden","hidden",-312506092)) === cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_values,new cljs.core.Keyword(null,"hidden","hidden",-312506092)))))))))))))));
});
app.main.ui.workspace.sidebar.options.menus.layer.layer_menu_STAR_ = (function (p1__55683_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__55683_SHARP_,app.main.ui.workspace.sidebar.options.menus.layer.check_layer_menu_props);
})((function app$main$ui$workspace$sidebar$options$menus$layer$layer_menu_STAR_(props_55684){
var ids = props_55684.ids;
var values = props_55684.values;
var applied_tokens = props_55684.appliedTokens;
var token_numeric_inputs = app.main.features.use_feature("tokens/numeric-input");
var hidden_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"hidden","hidden",-312506092));
var blocked_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"blocked","blocked",181326681));
var on_detach_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (token_name,attr){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.unapply_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),token_name,new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.PersistentHashSet.createAsIfByAssoc([attr]),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}));
var current_blend_mode = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"normal","normal",-1519123858);
}
})();
var current_opacity = app.main.ui.workspace.sidebar.options.menus.layer.opacity__GT_string(new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(values));
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected-blend-mode","selected-blend-mode",67585278),current_blend_mode,new cljs.core.Keyword(null,"option-highlighted?","option-highlighted?",2074036831),false,new cljs.core.Keyword(null,"preview-complete?","preview-complete?",-1244024070),true], null);
}));
var state = cljs.core.deref(state_STAR_);
var selected_blend_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"selected-blend-mode","selected-blend-mode",67585278));
var option_highlighted_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"option-highlighted?","option-highlighted?",2074036831));
var preview_complete_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"preview-complete?","preview-complete?",-1244024070));
var wasm_renderer_enabled_QMARK_ = app.main.features.use_feature("render-wasm/v1");
var handle_change_blend_mode = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"selected-blend-mode","selected-blend-mode",67585278),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"option-highlighted?","option-highlighted?",2074036831),false,new cljs.core.Keyword(null,"preview-complete?","preview-complete?",-1244024070),true], 0));

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.unset_preview_blend_mode(ids));

return app.main.ui.workspace.sidebar.options.menus.layer.on_change(ids,new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224),value);
}));
var handle_blend_mode_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids),rumext.v2.adapt(current_blend_mode)],(function (value){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"preview-complete?","preview-complete?",-1244024070),false,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"option-highlighted?","option-highlighted?",2074036831),true], 0));

if(wasm_renderer_enabled_QMARK_){
var seq__55686_55690 = cljs.core.seq(ids);
var chunk__55687_55691 = null;
var count__55688_55692 = (0);
var i__55689_55693 = (0);
while(true){
if((i__55689_55693 < count__55688_55692)){
var id_55694 = chunk__55687_55691.cljs$core$IIndexed$_nth$arity$2(null,i__55689_55693);
app.render_wasm.api.use_shape(id_55694);

app.render_wasm.api.set_shape_blend_mode(value);

app.render_wasm.api.request_render("preview-blend-mode");


var G__55695 = seq__55686_55690;
var G__55696 = chunk__55687_55691;
var G__55697 = count__55688_55692;
var G__55698 = (i__55689_55693 + (1));
seq__55686_55690 = G__55695;
chunk__55687_55691 = G__55696;
count__55688_55692 = G__55697;
i__55689_55693 = G__55698;
continue;
} else {
var temp__5825__auto___55699 = cljs.core.seq(seq__55686_55690);
if(temp__5825__auto___55699){
var seq__55686_55700__$1 = temp__5825__auto___55699;
if(cljs.core.chunked_seq_QMARK_(seq__55686_55700__$1)){
var c__5548__auto___55701 = cljs.core.chunk_first(seq__55686_55700__$1);
var G__55702 = cljs.core.chunk_rest(seq__55686_55700__$1);
var G__55703 = c__5548__auto___55701;
var G__55704 = cljs.core.count(c__5548__auto___55701);
var G__55705 = (0);
seq__55686_55690 = G__55702;
chunk__55687_55691 = G__55703;
count__55688_55692 = G__55704;
i__55689_55693 = G__55705;
continue;
} else {
var id_55706 = cljs.core.first(seq__55686_55700__$1);
app.render_wasm.api.use_shape(id_55706);

app.render_wasm.api.set_shape_blend_mode(value);

app.render_wasm.api.request_render("preview-blend-mode");


var G__55707 = cljs.core.next(seq__55686_55700__$1);
var G__55708 = null;
var G__55709 = (0);
var G__55710 = (0);
seq__55686_55690 = G__55707;
chunk__55687_55691 = G__55708;
count__55688_55692 = G__55709;
i__55689_55693 = G__55710;
continue;
}
} else {
}
}
break;
}
} else {
}

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_preview_blend_mode(ids,value));
}));
var handle_blend_mode_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (_value){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"preview-complete?","preview-complete?",-1244024070),true);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.unset_preview_blend_mode(ids));
}));
var handle_opacity_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

var value__$1 = (value / (100));
return app.main.ui.workspace.sidebar.options.menus.layer.on_change(ids,new cljs.core.Keyword(null,"opacity","opacity",397153780),value__$1);
}));
var on_opacity_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(app.main.ui.workspace.sidebar.options.menus.layer.on_change),rumext.v2.adapt(handle_opacity_change)],(function (value){
if(((typeof value === 'string') || (typeof value === 'number'))){
return (handle_opacity_change.cljs$core$IFn$_invoke$arity$1 ? handle_opacity_change.cljs$core$IFn$_invoke$arity$1(value) : handle_opacity_change.call(null,value));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.toggle_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.first(value),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),null], null), null),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}
}));
var handle_set_hidden = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (_){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

return app.main.ui.workspace.sidebar.options.menus.layer.on_change(ids,new cljs.core.Keyword(null,"hidden","hidden",-312506092),true);
}));
var handle_set_visible = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (_){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

return app.main.ui.workspace.sidebar.options.menus.layer.on_change(ids,new cljs.core.Keyword(null,"hidden","hidden",-312506092),false);
}));
var handle_set_blocked = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (_){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

return app.main.ui.workspace.sidebar.options.menus.layer.on_change(ids,new cljs.core.Keyword(null,"blocked","blocked",181326681),true);
}));
var handle_set_unblocked = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (_){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

return app.main.ui.workspace.sidebar.options.menus.layer.on_change(ids,new cljs.core.Keyword(null,"blocked","blocked",181326681),false);
}));
var options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_blend_mode)],(function (){
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),current_blend_mode))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"label","label",1718410804),"--"], null)], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"normal","normal",-1519123858),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layer-options.blend-mode.normal")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"darken","darken",1770242949),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layer-options.blend-mode.darken")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"multiply","multiply",-1036907048),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layer-options.blend-mode.multiply")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"color-burn","color-burn",-540235169),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layer-options.blend-mode.color-burn")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"lighten","lighten",-234464980),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layer-options.blend-mode.lighten")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"screen","screen",1990059748),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layer-options.blend-mode.screen")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"color-dodge","color-dodge",-1461064835),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layer-options.blend-mode.color-dodge")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"overlay","overlay",-139131598),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layer-options.blend-mode.overlay")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"soft-light","soft-light",513207899),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layer-options.blend-mode.soft-light")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"hard-light","hard-light",-37591145),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layer-options.blend-mode.hard-light")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"difference","difference",1916101396),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layer-options.blend-mode.difference")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"exclusion","exclusion",531897910),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layer-options.blend-mode.exclusion")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"hue","hue",-508078848),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layer-options.blend-mode.hue")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"saturation","saturation",-14247929),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layer-options.blend-mode.saturation")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layer-options.blend-mode.color")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"luminosity","luminosity",-483901643),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layer-options.blend-mode.luminosity")], null)], null)], 0));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_blend_mode),rumext.v2.adapt(option_highlighted_QMARK_),rumext.v2.adapt(preview_complete_QMARK_)],(function (){
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.not(option_highlighted_QMARK_);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = option_highlighted_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return preview_complete_QMARK_;
} else {
return and__5023__auto__;
}
}
})())){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"selected-blend-mode","selected-blend-mode",67585278),current_blend_mode);
} else {
return null;
}
}));

return rumext.v2.jsxs("section",{'aria-label':"layer-menu-section",'className':"main_ui_workspace_sidebar_options_menus_layer__element-set-content"+" "+(cljs.core.truth_(hidden_QMARK_)?"main_ui_workspace_sidebar_options_menus_layer__hidden":""),'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_layer__select",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':selected_blend_mode,'options':options,'on-change':handle_change_blend_mode,'is-open?':option_highlighted_QMARK_,'class':(cljs.core.truth_(hidden_QMARK_)?"main_ui_workspace_sidebar_options_menus_layer__hidden-select":""),'on-pointer-enter-option':handle_blend_mode_enter,'on-pointer-leave-option':handle_blend_mode_leave})}),((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'align':new cljs.core.Keyword(null,"right","right",-452581833),'onChange':on_opacity_change,'className':"main_ui_workspace_sidebar_options_menus_layer__numeric-input-wrapper",'placeholder':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"opacity","opacity",397153780)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),(function (){var or__5025__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"opacity","opacity",397153780));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (1);
}
})()))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'max':(100),'attr':new cljs.core.Keyword(null,"opacity","opacity",397153780),'appliedToken':cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"opacity","opacity",397153780)),'value':((100) * (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"opacity","opacity",397153780));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})()),'onDetach':on_detach_token,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.opacity"),'icon':app.main.ui.ds.foundations.assets.icon.percentage}):rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.opacity"),'className':"main_ui_workspace_sidebar_options_menus_layer__input",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_layer__icon",'children':"%"}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'value':current_opacity,'placeholder':"--",'onChange':handle_opacity_change,'min':(0),'max':(100),'className':"main_ui_workspace_sidebar_options_menus_layer__numeric-input"})]})),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_layer__actions",'children':[((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),hidden_QMARK_)) || (cljs.core.not(hidden_QMARK_))))?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layer-options.toggle-layer"),'onClick':handle_set_hidden,'icon':app.main.ui.ds.foundations.assets.icon.shown}):rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.layer-options.toggle-layer"),'onClick':handle_set_visible,'icon':app.main.ui.ds.foundations.assets.icon.hide})
),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),blocked_QMARK_)) || (cljs.core.not(blocked_QMARK_))))?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.lock"),'onClick':handle_set_blocked,'icon':app.main.ui.ds.foundations.assets.icon.unlock}):rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.unlock"),'onClick':handle_set_unblocked,'icon':app.main.ui.ds.foundations.assets.icon.lock})
)]})]});
}));

(app.main.ui.workspace.sidebar.options.menus.layer.layer_menu_STAR_.displayName = "layer-menu*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.layer.js.map
