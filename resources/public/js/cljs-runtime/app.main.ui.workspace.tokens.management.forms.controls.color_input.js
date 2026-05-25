import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.colors.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.types.color.js";
import "./app.common.types.token.js";
import "./app.common.types.tokens_lib.js";
import "./app.config.js";
import "./app.main.data.style_dictionary.js";
import "./app.main.data.tinycolor.js";
import "./app.main.data.tokenscript.js";
import "./app.main.data.workspace.tokens.errors.js";
import "./app.main.data.workspace.tokens.format.js";
import "./app.main.refs.js";
import "./app.main.ui.ds.controls.input.js";
import "./app.main.ui.ds.utilities.swatch.js";
import "./app.main.ui.forms.js";
import "./app.main.ui.workspace.colorpicker.js";
import "./app.main.ui.workspace.colorpicker.ramp.js";
import "./app.util.dom.js";
import "./app.util.forms.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.management.forms.controls.color_input');
app.main.ui.workspace.tokens.management.forms.controls.color_input.resolve_value = (function app$main$ui$workspace$tokens$management$forms$controls$color_input$resolve_value(tokens,prev_token,token_name,value){
var valid_token_name_QMARK_ = (function (){var and__5023__auto__ = typeof token_name === 'string';
if(and__5023__auto__){
return cljs.core.re_matches(app.common.types.token.token_name_validation_regex,token_name);
} else {
return and__5023__auto__;
}
})();
var token = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"name","name",1843675177),((((cljs.core.not(valid_token_name_QMARK_)) || (cuerdas.core.blank_QMARK_(token_name))))?"__PENPOT__TOKEN__NAME__PLACEHOLDER__":token_name)], null);
var tokens__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tokens,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prev_token)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token),(function (p1__56409_SHARP_){
return app.common.types.tokens_lib.make_token.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__56409_SHARP_,prev_token,token], 0))], 0));
}));
return beicon.v2.core.mapcat((function (resolved_tokens){
var map__56411 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(resolved_tokens,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token));
var map__56411__$1 = cljs.core.__destructure_map(map__56411);
var resolved_token = map__56411__$1;
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56411__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var resolved_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56411__$1,new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626));
var resolved_value__$1 = ((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500)))?app.main.data.tokenscript.tokenscript_symbols__GT_penpot_unit(resolved_value):resolved_value);
if(cljs.core.truth_(resolved_value__$1)){
return beicon.v2.core.of(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),resolved_value__$1], null));
} else {
return beicon.v2.core.of(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.first(errors)], null));
}
}),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500)))?beicon.v2.core.of(app.main.data.tokenscript.resolve_tokens(tokens__$1)):app.main.data.style_dictionary.resolve_tokens_interactive(tokens__$1)));
});
app.main.ui.workspace.tokens.management.forms.controls.color_input.hex__GT_color_obj = (function app$main$ui$workspace$tokens$management$forms$controls$color_input$hex__GT_color_obj(hex){
var temp__5825__auto__ = app.main.data.tinycolor.valid_color(hex);
if(cljs.core.truth_(temp__5825__auto__)){
var tc = temp__5825__auto__;
var hex__$1 = app.main.data.tinycolor.__GT_hex_string(tc);
var alpha = app.main.data.tinycolor.alpha(tc);
var vec__56413 = app.common.types.color.hex__GT_rgb(hex__$1);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56413,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56413,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56413,(2),null);
var vec__56416 = app.common.types.color.hex__GT_hsv(hex__$1);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56416,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56416,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56416,(2),null);
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"hex","hex",41691346),hex__$1,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"g","g",1738089905),g,new cljs.core.Keyword(null,"b","b",1482224470),b,new cljs.core.Keyword(null,"h","h",1109658740),h,new cljs.core.Keyword(null,"s","s",1705939918),s,new cljs.core.Keyword(null,"v","v",21465059),v,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),alpha], null);
} else {
return null;
}
});
app.main.ui.workspace.tokens.management.forms.controls.color_input.ramp_STAR_ = (function app$main$ui$workspace$tokens$management$forms$controls$color_input$ramp_STAR_(props_56419){
var on_change = props_56419.onChange;
var color = props_56419.color;
var wrapper_node_ref = rumext.v2.use_ref(null);
var dragging_ref = rumext.v2.use_ref(false);
var on_start_drag = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return rumext.v2.set_ref_val_BANG_(dragging_ref,true);
}));
var on_finish_drag = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return rumext.v2.set_ref_val_BANG_(dragging_ref,false);
}));
var internal_color_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.ui.workspace.tokens.management.forms.controls.color_input.hex__GT_color_obj(color);
}));
var internal_color = cljs.core.deref(internal_color_STAR_);
var on_change_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change)],(function (p__56420){
var map__56421 = p__56420;
var map__56421__$1 = cljs.core.__destructure_map(map__56421);
var selector_color = map__56421__$1;
var hex = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56421__$1,new cljs.core.Keyword(null,"hex","hex",41691346));
var alpha = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56421__$1,new cljs.core.Keyword(null,"alpha","alpha",-1574982441));
var dragging_QMARK_ = rumext.v2.ref_val(dragging_ref);
if(cljs.core.truth_((function (){var and__5023__auto__ = dragging_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return hex;
} else {
return and__5023__auto__;
}
})())){
return null;
} else {
cljs.core.reset_BANG_(internal_color_STAR_,selector_color);

return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(hex,alpha) : on_change.call(null,hex,alpha));
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color)],(function (){
var temp__5825__auto__ = app.main.data.tinycolor.valid_color(color);
if(cljs.core.truth_(temp__5825__auto__)){
var color__$1 = temp__5825__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.main.data.tinycolor.__GT_hex_string(color__$1),new cljs.core.Keyword(null,"hex","hex",41691346).cljs$core$IFn$_invoke$arity$1(internal_color))){
return null;
} else {
return cljs.core.reset_BANG_(internal_color_STAR_,app.main.ui.workspace.tokens.management.forms.controls.color_input.hex__GT_color_obj(color__$1));
}
} else {
return null;
}
}));

app.main.ui.workspace.colorpicker.use_color_picker_css_variables_BANG_(wrapper_node_ref,internal_color);

return rumext.v2.jsx("div",{'ref':wrapper_node_ref,'children':rumext.v2.jsx(app.main.ui.workspace.colorpicker.ramp.ramp_selector_STAR_,{'color':internal_color,'onStartDrag':on_start_drag,'onFinishDrag':on_finish_drag,'onChange':on_change_SINGLEQUOTE_})});
});

(app.main.ui.workspace.tokens.management.forms.controls.color_input.ramp_STAR_.displayName = "ramp*");

app.main.ui.workspace.tokens.management.forms.controls.color_input.color_input_STAR_ = (function app$main$ui$workspace$tokens$management$forms$controls$color_input$color_input_STAR_(props_56422){
var name = undefined;
var token = undefined;
var tokens = undefined;
var props = undefined;
var {"name": name, "tokens": tokens, "token": token, ...props} = props_56422;

var form = rumext.v2.use_ctx(app.main.ui.forms.context);
var input_name = name;
var token_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null),null);
var touched_QMARK_ = (function (){var and__5023__auto__ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),input_name);
if(and__5023__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),input_name], null));
} else {
return and__5023__auto__;
}
})();
var error = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),input_name], null));
var extra_error = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),input_name], null));
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),input_name], null),"");
var color_resolved = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"color-result","color-result",-859632008)], null),"");
var valid_color = (function (){var or__5025__auto__ = app.main.data.tinycolor.valid_color(value);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.tinycolor.valid_color(color_resolved);
}
})();
var profile = rumext.v2.deref(app.main.refs.profile);
var default_bullet_color = (function (){var G__56424 = new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(profile);
switch (G__56424) {
case "light":
return app.common.colors.background_quaternary_light;

break;
default:
return app.common.colors.background_quaternary;

}
})();
var hex = (cljs.core.truth_(valid_color)?app.main.data.tinycolor.__GT_hex_string(app.main.data.tinycolor.valid_color(valid_color)):default_bullet_color);
var alpha = (cljs.core.truth_(app.main.data.tinycolor.valid_color(valid_color))?app.main.data.tinycolor.alpha(app.main.data.tinycolor.valid_color(valid_color)):(1));
var resolve_stream = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token)],(function (){
var temp__5823__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(temp__5823__auto__)){
var value__$1 = temp__5823__auto__;
return beicon.v2.core.behavior_subject(value__$1);
} else {
return beicon.v2.core.subject();
}
}));
var hint_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hint = cljs.core.deref(hint_STAR_);
var color_ramp_open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var color_ramp_open_QMARK_ = cljs.core.deref(color_ramp_open_STAR_);
var on_click_swatch = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color_ramp_open_QMARK_)],(function (){
var open_QMARK_ = cljs.core.not(color_ramp_open_QMARK_);
return cljs.core.reset_BANG_(color_ramp_open_STAR_,open_QMARK_);
}));
var swatch = rumext.v2.jsx(app.main.ui.ds.utilities.swatch.swatch_STAR_,{'background':new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),hex,new cljs.core.Keyword(null,"opacity","opacity",397153780),alpha], null),'showTooltip':false,'data-testid':"token-form-color-bullet",'className':"main_ui_workspace_tokens_management_forms_controls_color_input__slot-start",'onClick':on_click_swatch});
var on_change_value = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(resolve_stream),rumext.v2.adapt(input_name),rumext.v2.adapt(value)],(function (hex__$1,alpha__$1){
var prev_input_color = (function (){var G__56425 = value;
if((G__56425 == null)){
return null;
} else {
return app.main.data.tinycolor.valid_color(G__56425);
}
})();
var prev_computed_color = (cljs.core.truth_(prev_input_color)?null:(function (){var G__56426 = value;
if((G__56426 == null)){
return null;
} else {
return app.main.data.tinycolor.valid_color(G__56426);
}
})());
var prev_format = (function (){var G__56427 = (function (){var or__5025__auto__ = prev_input_color;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return prev_computed_color;
}
})();
if((G__56427 == null)){
return null;
} else {
return app.main.data.tinycolor.color_format(G__56427);
}
})();
var to_rgba_QMARK_ = (((alpha__$1 < (1))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_format,"hex")) || (cljs.core.not(prev_format)))));
var to_hex_QMARK_ = ((cljs.core.not(prev_format)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(alpha__$1,(1))));
var format = ((to_rgba_QMARK_)?"rgba":((to_hex_QMARK_)?"hex":(cljs.core.truth_(prev_format)?prev_format:"hex"
)));
var color_value = app.main.data.tinycolor.__GT_string(app.main.data.tinycolor.set_alpha(app.main.data.tinycolor.valid_color(hex__$1),(function (){var or__5025__auto__ = alpha__$1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})()),format);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,color_value)){
app.util.forms.on_input_change.cljs$core$IFn$_invoke$arity$4(form,input_name,color_value,true);

return resolve_stream.next(color_value);
} else {
return null;
}
}));
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(resolve_stream),rumext.v2.adapt(input_name)],(function (event){
var raw_value = app.util.dom.get_input_value(app.util.dom.get_target(event));
var value__$1 = (cljs.core.truth_(app.main.data.tinycolor.hex_without_hash_prefix_QMARK_(raw_value))?""+"#"+(raw_value ?? ""):raw_value);
app.util.forms.on_input_change.cljs$core$IFn$_invoke$arity$4(form,input_name,value__$1,true);

return resolve_stream.next(value__$1);
}));
var props__$1 = {...props, 'onChange':on_change,'value':(function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),'hintMessage':new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(hint),'variant':"comfortable",'slotStart':swatch,'hintType':new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(hint)};
var props__$2 = (cljs.core.truth_((function (){var and__5023__auto__ = error;
if(cljs.core.truth_(and__5023__auto__)){
return touched_QMARK_;
} else {
return and__5023__auto__;
}
})())?{...props__$1, 'hintType':"error",'hintMessage':new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error)}:(cljs.core.truth_((function (){var and__5023__auto__ = extra_error;
if(cljs.core.truth_(and__5023__auto__)){
return touched_QMARK_;
} else {
return and__5023__auto__;
}
})())?{...props__$1, 'hintType':"error",'hintMessage':new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(extra_error)}:props__$1
));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(resolve_stream),rumext.v2.adapt(tokens),rumext.v2.adapt(token),rumext.v2.adapt(input_name),rumext.v2.adapt(token_name)],(function (){
var subs = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p__56428){
var map__56429 = p__56428;
var map__56429__$1 = cljs.core.__destructure_map(map__56429);
var error__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56429__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56429__$1,new cljs.core.Keyword(null,"value","value",305978217));
var touched_QMARK___$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),input_name], null));
if(cljs.core.truth_(touched_QMARK___$1)){
if(cljs.core.truth_(error__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),input_name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error__$1], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"color-result","color-result",-859632008)], null),"");

return cljs.core.reset_BANG_(hint_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),error__$1,new cljs.core.Keyword(null,"type","type",1174270348),"error"], null));
} else {
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.resolved-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.tokens.format.format_token_value(value__$1)], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update,new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_name], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"color-result","color-result",-859632008)], null),value__$1);

return cljs.core.reset_BANG_(hint_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"type","type",1174270348),"hint"], null));
}
} else {
return null;
}
}),beicon.v2.core.map((function (result){
return app.common.data.update_when(result,new cljs.core.Keyword(null,"error","error",-978969032),app.main.data.workspace.tokens.errors.resolve_error_message);
}),beicon.v2.core.mapcat(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(app.main.ui.workspace.tokens.management.forms.controls.color_input.resolve_value,tokens,token,token_name),beicon.v2.core.debounce((300),resolve_stream))));
return (function (){
return beicon.v2.core.dispose_BANG_(subs);
});
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.create_element(app.main.ui.ds.controls.input.input_STAR_,props__$2),(cljs.core.truth_(color_ramp_open_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.controls.color_input.ramp_STAR_,{'color':value,'onChange':on_change_value}):null)]});
});

(app.main.ui.workspace.tokens.management.forms.controls.color_input.color_input_STAR_.displayName = "color-input*");

app.main.ui.workspace.tokens.management.forms.controls.color_input.on_indexed_input_change = (function app$main$ui$workspace$tokens$management$forms$controls$color_input$on_indexed_input_change(var_args){
var G__56431 = arguments.length;
switch (G__56431) {
case 5:
return app.main.ui.workspace.tokens.management.forms.controls.color_input.on_indexed_input_change.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return app.main.ui.workspace.tokens.management.forms.controls.color_input.on_indexed_input_change.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.workspace.tokens.management.forms.controls.color_input.on_indexed_input_change.cljs$core$IFn$_invoke$arity$5 = (function (form,field,index,value,value_subfield){
return app.main.ui.workspace.tokens.management.forms.controls.color_input.on_indexed_input_change.cljs$core$IFn$_invoke$arity$6(form,field,index,value,value_subfield,false);
}));

(app.main.ui.workspace.tokens.management.forms.controls.color_input.on_indexed_input_change.cljs$core$IFn$_invoke$arity$6 = (function (form,field,index,value,value_subfield,trim_QMARK_){
var clean_errors = (function app$main$ui$workspace$tokens$management$forms$controls$color_input$clean_errors(errors){
return cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(errors,field));
});
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(form,(function (state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index,field], null),(cljs.core.truth_(trim_QMARK_)?cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(value):value)),new cljs.core.Keyword(null,"errors","errors",-908790718),clean_errors),new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),clean_errors);
}));
}));

(app.main.ui.workspace.tokens.management.forms.controls.color_input.on_indexed_input_change.cljs$lang$maxFixedArity = 6);

app.main.ui.workspace.tokens.management.forms.controls.color_input.indexed_color_input_STAR_ = (function app$main$ui$workspace$tokens$management$forms$controls$color_input$indexed_color_input_STAR_(props_56432){
var index = undefined;
var name = undefined;
var token = undefined;
var value_subfield = undefined;
var tokens = undefined;
var props = undefined;
var {"name": name, "tokens": tokens, "token": token, "index": index, "valueSubfield": value_subfield, ...props} = props_56432;

var form = rumext.v2.use_ctx(app.main.ui.forms.context);
var input_name = name;
var token_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null),null);
var error = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index,input_name], null));
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index,input_name], null),"");
var color_resolved = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index,new cljs.core.Keyword(null,"color-result","color-result",-859632008)], null),"");
var valid_color = (function (){var or__5025__auto__ = app.main.data.tinycolor.valid_color(value);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.tinycolor.valid_color(color_resolved);
}
})();
var profile = rumext.v2.deref(app.main.refs.profile);
var default_bullet_color = (function (){var G__56433 = new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(profile);
switch (G__56433) {
case "light":
return app.common.colors.background_quaternary_light;

break;
default:
return app.common.colors.background_quaternary;

}
})();
var hex = (cljs.core.truth_(valid_color)?app.main.data.tinycolor.__GT_hex_string(app.main.data.tinycolor.valid_color(valid_color)):default_bullet_color);
var alpha = (cljs.core.truth_(app.main.data.tinycolor.valid_color(valid_color))?app.main.data.tinycolor.alpha(app.main.data.tinycolor.valid_color(valid_color)):(1));
var resolve_stream = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token)],(function (){
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index,input_name], null));
if(cljs.core.truth_(temp__5823__auto__)){
var value__$1 = temp__5823__auto__;
return beicon.v2.core.behavior_subject(value__$1);
} else {
return beicon.v2.core.subject();
}
}));
var hint_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hint = cljs.core.deref(hint_STAR_);
var color_ramp_open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var color_ramp_open_QMARK_ = cljs.core.deref(color_ramp_open_STAR_);
var on_click_swatch = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color_ramp_open_QMARK_)],(function (){
var open_QMARK_ = cljs.core.not(color_ramp_open_QMARK_);
return cljs.core.reset_BANG_(color_ramp_open_STAR_,open_QMARK_);
}));
var swatch = rumext.v2.jsx(app.main.ui.ds.utilities.swatch.swatch_STAR_,{'background':new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),hex,new cljs.core.Keyword(null,"opacity","opacity",397153780),alpha], null),'showTooltip':false,'data-testid':"token-form-color-bullet",'className':"main_ui_workspace_tokens_management_forms_controls_color_input__slot-start",'onClick':on_click_swatch});
var on_change_value = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(resolve_stream),rumext.v2.adapt(input_name),rumext.v2.adapt(value),rumext.v2.adapt(index)],(function (hex__$1,alpha__$1){
var prev_input_color = (function (){var G__56434 = value;
if((G__56434 == null)){
return null;
} else {
return app.main.data.tinycolor.valid_color(G__56434);
}
})();
var prev_computed_color = (cljs.core.truth_(prev_input_color)?null:(function (){var G__56435 = value;
if((G__56435 == null)){
return null;
} else {
return app.main.data.tinycolor.valid_color(G__56435);
}
})());
var prev_format = (function (){var G__56436 = (function (){var or__5025__auto__ = prev_input_color;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return prev_computed_color;
}
})();
if((G__56436 == null)){
return null;
} else {
return app.main.data.tinycolor.color_format(G__56436);
}
})();
var to_rgba_QMARK_ = (((alpha__$1 < (1))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(prev_format,"hex")) || (cljs.core.not(prev_format)))));
var to_hex_QMARK_ = ((cljs.core.not(prev_format)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(alpha__$1,(1))));
var format = ((to_rgba_QMARK_)?"rgba":((to_hex_QMARK_)?"hex":(cljs.core.truth_(prev_format)?prev_format:"hex"
)));
var color_value = app.main.data.tinycolor.__GT_string(app.main.data.tinycolor.set_alpha(app.main.data.tinycolor.valid_color(hex__$1),(function (){var or__5025__auto__ = alpha__$1;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (1);
}
})()),format);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,color_value)){
app.main.ui.workspace.tokens.management.forms.controls.color_input.on_indexed_input_change.cljs$core$IFn$_invoke$arity$6(form,input_name,index,color_value,value_subfield,true);

return resolve_stream.next(color_value);
} else {
return null;
}
}));
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(resolve_stream),rumext.v2.adapt(input_name),rumext.v2.adapt(index)],(function (event){
var raw_value = app.util.dom.get_input_value(app.util.dom.get_target(event));
var value__$1 = (cljs.core.truth_(app.main.data.tinycolor.hex_without_hash_prefix_QMARK_(raw_value))?""+"#"+(raw_value ?? ""):raw_value);
app.main.ui.workspace.tokens.management.forms.controls.color_input.on_indexed_input_change.cljs$core$IFn$_invoke$arity$6(form,input_name,index,value__$1,value_subfield,true);

return resolve_stream.next(value__$1);
}));
var props__$1 = {...props, 'onChange':on_change,'value':(function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),'hintMessage':new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(hint),'slotStart':swatch,'hintType':new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(hint)};
var props__$2 = (cljs.core.truth_(error)?{...props__$1, 'hintType':"error",'hintMessage':new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error)}:props__$1);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(resolve_stream),rumext.v2.adapt(tokens),rumext.v2.adapt(token),rumext.v2.adapt(input_name),rumext.v2.adapt(index),rumext.v2.adapt(value_subfield),rumext.v2.adapt(token_name)],(function (){
var subs = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p__56437){
var map__56438 = p__56437;
var map__56438__$1 = cljs.core.__destructure_map(map__56438);
var error__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56438__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56438__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5023__auto__ = error__$1;
if(cljs.core.truth_(and__5023__auto__)){
return cuerdas.core.empty_QMARK_(new cljs.core.Keyword("error","value","error/value",420466049).cljs$core$IFn$_invoke$arity$1(error__$1));
} else {
return and__5023__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_name], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_name], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index,new cljs.core.Keyword(null,"color-result","color-result",-859632008)], null),"");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update,new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));

return cljs.core.reset_BANG_(hint_STAR_,cljs.core.PersistentArrayMap.EMPTY);
} else {
if((!((error__$1 == null)))){
var error_SINGLEQUOTE_ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index,input_name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error_SINGLEQUOTE_], null));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index,new cljs.core.Keyword(null,"color-result","color-result",-859632008)], null),"");

return cljs.core.reset_BANG_(hint_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),error_SINGLEQUOTE_,new cljs.core.Keyword(null,"type","type",1174270348),"error"], null));
} else {
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.resolved-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.tokens.format.format_token_value(value__$1)], 0));
var input_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index,input_name], null),"");
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update,new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index,new cljs.core.Keyword(null,"color-result","color-result",-859632008)], null),app.main.data.workspace.tokens.format.format_token_value(value__$1));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_value,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value__$1))){
return cljs.core.reset_BANG_(hint_STAR_,cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.reset_BANG_(hint_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"type","type",1174270348),"hint"], null));
}

}
}
}),beicon.v2.core.map((function (result){
return app.common.data.update_when(result,new cljs.core.Keyword(null,"error","error",-978969032),app.main.data.workspace.tokens.errors.resolve_error_assoc_message);
}),beicon.v2.core.mapcat(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(app.main.ui.workspace.tokens.management.forms.controls.color_input.resolve_value,tokens,token,token_name),beicon.v2.core.debounce((300),resolve_stream))));
return (function (){
return beicon.v2.core.dispose_BANG_(subs);
});
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.create_element(app.main.ui.ds.controls.input.input_STAR_,props__$2),(cljs.core.truth_(color_ramp_open_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.tokens.management.forms.controls.color_input.ramp_STAR_,{'color':value,'onChange':on_change_value}):null)]});
});

(app.main.ui.workspace.tokens.management.forms.controls.color_input.indexed_color_input_STAR_.displayName = "indexed-color-input*");


//# sourceMappingURL=app.main.ui.workspace.tokens.management.forms.controls.color_input.js.map
