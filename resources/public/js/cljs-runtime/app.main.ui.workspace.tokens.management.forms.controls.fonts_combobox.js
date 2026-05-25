import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.types.token.js";
import "./app.common.types.tokens_lib.js";
import "./app.config.js";
import "./app.main.data.style_dictionary.js";
import "./app.main.data.tokenscript.js";
import "./app.main.data.workspace.tokens.errors.js";
import "./app.main.fonts.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.controls.input.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.forms.js";
import "./app.main.ui.workspace.sidebar.options.menus.typography.js";
import "./app.util.dom.js";
import "./app.util.forms.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.management.forms.controls.fonts_combobox');
app.main.ui.workspace.tokens.management.forms.controls.fonts_combobox.resolve_value = (function app$main$ui$workspace$tokens$management$forms$controls$fonts_combobox$resolve_value(tokens,prev_token,_token_name,value){
var tmp_value = app.common.types.token.split_font_family(value);
var tmp_name = "__PENPOT__FONT_FAMILY__PLACEHOLDER__";
var token = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),tmp_name,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"value","value",305978217),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(prev_token),new cljs.core.Keyword(null,"typography","typography",-399568138)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prev_token),new cljs.core.Keyword(null,"font-family","font-family",-667419874),tmp_value):tmp_value)], null);
var tokens__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(tokens,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token),(function (p1__56443_SHARP_){
return app.common.types.tokens_lib.make_token.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__56443_SHARP_,prev_token,token], 0))], 0));
}));
return beicon.v2.core.mapcat((function (resolved_tokens){
var map__56444 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(resolved_tokens,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token));
var map__56444__$1 = cljs.core.__destructure_map(map__56444);
var resolved_token = map__56444__$1;
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56444__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var resolved_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56444__$1,new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626));
var resolved_value__$1 = ((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500)))?app.main.data.tokenscript.tokenscript_symbols__GT_penpot_unit(resolved_value):resolved_value);
if(cljs.core.truth_(resolved_value__$1)){
return beicon.v2.core.of(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),resolved_value__$1], null));
} else {
return beicon.v2.core.of(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.first(errors)], null));
}
}),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500)))?beicon.v2.core.of(app.main.data.tokenscript.resolve_tokens(tokens__$1)):app.main.data.style_dictionary.resolve_tokens_interactive(tokens__$1)));
});
app.main.ui.workspace.tokens.management.forms.controls.fonts_combobox.fonts_combobox_STAR_ = (function app$main$ui$workspace$tokens$management$forms$controls$fonts_combobox$fonts_combobox_STAR_(props_56445){
var name = undefined;
var token = undefined;
var tokens = undefined;
var props = undefined;
var {"token": token, "tokens": tokens, "name": name, ...props} = props_56445;

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
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),input_name], null),"");
var font = app.main.fonts.find_font_family(value);
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
var font_selector_open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var font_selector_open_QMARK_ = cljs.core.deref(font_selector_open_STAR_);
var on_click_dropdown_button = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(font_selector_open_QMARK_)],(function (e){
app.util.dom.prevent_default(e);

return cljs.core.reset_BANG_(font_selector_open_STAR_,cljs.core.not(font_selector_open_QMARK_));
}));
var font_selector_button = rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'onClick':on_click_dropdown_button,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.token-font-family-select"),'icon':app.main.ui.ds.foundations.assets.icon.arrow_down,'variant':"action",'type':"button"});
var on_close_font_selector = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(font_selector_open_STAR_,false);
}));
var on_select_font = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(font)],(function (p__56446){
var map__56447 = p__56446;
var map__56447__$1 = cljs.core.__destructure_map(map__56447);
var font__$1 = map__56447__$1;
var family = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56447__$1,new cljs.core.Keyword(null,"family","family",-1313145692));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,family)){
app.util.forms.on_input_change.cljs$core$IFn$_invoke$arity$4(form,input_name,family,true);

return resolve_stream.next(family);
} else {
return null;
}
}));
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(resolve_stream),rumext.v2.adapt(input_name)],(function (event){
var value__$1 = app.util.dom.get_input_value(app.util.dom.get_target(event));
app.util.forms.on_input_change.cljs$core$IFn$_invoke$arity$4(form,input_name,value__$1,false);

return resolve_stream.next(value__$1);
}));
var props__$1 = {...props, 'onChange':on_change,'value':(function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),'hintMessage':new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(hint),'slotEnd':font_selector_button,'variant':"comfortable",'hintType':new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(hint)};
var props__$2 = (cljs.core.truth_((function (){var and__5023__auto__ = error;
if(cljs.core.truth_(and__5023__auto__)){
return touched_QMARK_;
} else {
return and__5023__auto__;
}
})())?{...props__$1, 'hintType':"error",'hintMessage':new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error)}:props__$1);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(resolve_stream),rumext.v2.adapt(tokens),rumext.v2.adapt(token),rumext.v2.adapt(input_name),rumext.v2.adapt(touched_QMARK_),rumext.v2.adapt(token_name)],(function (){
var subs = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p__56448){
var map__56449 = p__56448;
var map__56449__$1 = cljs.core.__destructure_map(map__56449);
var error__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56449__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56449__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(touched_QMARK_)){
if(cljs.core.truth_(error__$1)){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),input_name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error__$1], null));

return cljs.core.reset_BANG_(hint_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),error__$1,new cljs.core.Keyword(null,"type","type",1174270348),"error"], null));
} else {
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.resolved-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__$1], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update,new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_name], 0));

return cljs.core.reset_BANG_(hint_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"type","type",1174270348),"hint"], null));
}
} else {
return null;
}
}),beicon.v2.core.map((function (result){
return app.common.data.update_when(result,new cljs.core.Keyword(null,"error","error",-978969032),app.main.data.workspace.tokens.errors.resolve_error_message);
}),beicon.v2.core.mapcat(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(app.main.ui.workspace.tokens.management.forms.controls.fonts_combobox.resolve_value,tokens,token,token_name),beicon.v2.core.debounce((300),resolve_stream))));
return (function (){
return beicon.v2.core.dispose_BANG_(subs);
});
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.create_element(app.main.ui.ds.controls.input.input_STAR_,props__$2),(cljs.core.truth_(font_selector_open_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_controls_fonts_combobox__font-select-wrapper",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.typography.font_selector_STAR_,{'currentFont':font,'onSelect':on_select_font,'onClose':on_close_font_selector,'fullSize':true})}):null)]});
});

(app.main.ui.workspace.tokens.management.forms.controls.fonts_combobox.fonts_combobox_STAR_.displayName = "fonts-combobox*");

app.main.ui.workspace.tokens.management.forms.controls.fonts_combobox.on_composite_combobox_token_change = (function app$main$ui$workspace$tokens$management$forms$controls$fonts_combobox$on_composite_combobox_token_change(var_args){
var G__56451 = arguments.length;
switch (G__56451) {
case 3:
return app.main.ui.workspace.tokens.management.forms.controls.fonts_combobox.on_composite_combobox_token_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.ui.workspace.tokens.management.forms.controls.fonts_combobox.on_composite_combobox_token_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.workspace.tokens.management.forms.controls.fonts_combobox.on_composite_combobox_token_change.cljs$core$IFn$_invoke$arity$3 = (function (form,field,value){
return app.main.ui.workspace.tokens.management.forms.controls.fonts_combobox.on_composite_combobox_token_change.cljs$core$IFn$_invoke$arity$4(form,field,value,false);
}));

(app.main.ui.workspace.tokens.management.forms.controls.fonts_combobox.on_composite_combobox_token_change.cljs$core$IFn$_invoke$arity$4 = (function (form,field,value,trim_QMARK_){
var clean_errors = (function app$main$ui$workspace$tokens$management$forms$controls$fonts_combobox$clean_errors(errors){
return cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(errors,field));
});
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(form,(function (state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),field], null),(cljs.core.truth_(trim_QMARK_)?cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(value):value)),new cljs.core.Keyword(null,"errors","errors",-908790718),clean_errors),new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),clean_errors);
}));
}));

(app.main.ui.workspace.tokens.management.forms.controls.fonts_combobox.on_composite_combobox_token_change.cljs$lang$maxFixedArity = 4);

app.main.ui.workspace.tokens.management.forms.controls.fonts_combobox.composite_fonts_combobox_STAR_ = (function app$main$ui$workspace$tokens$management$forms$controls$fonts_combobox$composite_fonts_combobox_STAR_(props_56452){
var name = undefined;
var token = undefined;
var tokens = undefined;
var props = undefined;
var {"token": token, "tokens": tokens, "name": name, ...props} = props_56452;

var form = rumext.v2.use_ctx(app.main.ui.forms.context);
var input_name = name;
var token_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null),null);
var error = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"value","value",305978217),input_name], null));
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),input_name], null),"");
var font = app.main.fonts.find_font_family(value);
var resolve_stream = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token)],(function (){
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),input_name], null));
if(cljs.core.truth_(temp__5823__auto__)){
var value__$1 = temp__5823__auto__;
return beicon.v2.core.behavior_subject(value__$1);
} else {
return beicon.v2.core.subject();
}
}));
var hint_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hint = cljs.core.deref(hint_STAR_);
var font_selector_open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var font_selector_open_QMARK_ = cljs.core.deref(font_selector_open_STAR_);
var on_click_dropdown_button = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(font_selector_open_QMARK_)],(function (e){
app.util.dom.prevent_default(e);

return cljs.core.reset_BANG_(font_selector_open_STAR_,cljs.core.not(font_selector_open_QMARK_));
}));
var font_selector_button = rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'onClick':on_click_dropdown_button,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.token-font-family-select"),'icon':app.main.ui.ds.foundations.assets.icon.arrow_down,'variant':"action",'type':"button"});
var on_close_font_selector = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(font_selector_open_STAR_,false);
}));
var on_select_font = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(font)],(function (p__56453){
var map__56454 = p__56453;
var map__56454__$1 = cljs.core.__destructure_map(map__56454);
var font__$1 = map__56454__$1;
var family = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56454__$1,new cljs.core.Keyword(null,"family","family",-1313145692));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,family)){
app.main.ui.workspace.tokens.management.forms.controls.fonts_combobox.on_composite_combobox_token_change.cljs$core$IFn$_invoke$arity$4(form,input_name,family,true);

return resolve_stream.next(family);
} else {
return null;
}
}));
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(resolve_stream),rumext.v2.adapt(input_name)],(function (event){
var value__$1 = app.util.dom.get_input_value(app.util.dom.get_target(event));
app.main.ui.workspace.tokens.management.forms.controls.fonts_combobox.on_composite_combobox_token_change.cljs$core$IFn$_invoke$arity$4(form,input_name,value__$1,false);

return resolve_stream.next(value__$1);
}));
var props__$1 = {...props, 'onChange':on_change,'value':(function (){var or__5025__auto__ = value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),'hintMessage':new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(hint),'slotEnd':font_selector_button,'variant':"comfortable",'hintType':new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(hint)};
var props__$2 = (cljs.core.truth_(error)?{...props__$1, 'hintType':"error",'hintMessage':new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error)}:props__$1);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(resolve_stream),rumext.v2.adapt(tokens),rumext.v2.adapt(token),rumext.v2.adapt(input_name),rumext.v2.adapt(token_name)],(function (){
var subs = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p__56455){
var map__56456 = p__56455;
var map__56456__$1 = cljs.core.__destructure_map(map__56456);
var error__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56456__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56456__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5023__auto__ = error__$1;
if(cljs.core.truth_(and__5023__auto__)){
return cuerdas.core.empty_QMARK_(new cljs.core.Keyword("error","value","error/value",420466049).cljs$core$IFn$_invoke$arity$1(error__$1));
} else {
return and__5023__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_name], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217)], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_name], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update,new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));

return cljs.core.reset_BANG_(hint_STAR_,cljs.core.PersistentArrayMap.EMPTY);
} else {
if((!((error__$1 == null)))){
var error_SINGLEQUOTE_ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),new cljs.core.Keyword(null,"value","value",305978217),input_name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error_SINGLEQUOTE_], null));

return cljs.core.reset_BANG_(hint_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),error_SINGLEQUOTE_,new cljs.core.Keyword(null,"type","type",1174270348),"error"], null));
} else {
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.resolved-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([value__$1], 0));
var input_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),input_name], null),"");
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update,new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));

if(((cljs.core.empty_QMARK_(value__$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_value,value__$1)))){
return cljs.core.reset_BANG_(hint_STAR_,cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.reset_BANG_(hint_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"type","type",1174270348),"hint"], null));
}

}
}
}),beicon.v2.core.map((function (result){
return app.common.data.update_when(result,new cljs.core.Keyword(null,"error","error",-978969032),app.main.data.workspace.tokens.errors.resolve_error_message);
}),beicon.v2.core.mapcat(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(app.main.ui.workspace.tokens.management.forms.controls.fonts_combobox.resolve_value,tokens,token,token_name),beicon.v2.core.debounce((300),resolve_stream))));
return (function (){
return beicon.v2.core.dispose_BANG_(subs);
});
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.create_element(app.main.ui.ds.controls.input.input_STAR_,props__$2),(cljs.core.truth_(font_selector_open_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_forms_controls_fonts_combobox__font-select-wrapper",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.typography.font_selector_STAR_,{'currentFont':font,'onSelect':on_select_font,'onClose':on_close_font_selector,'fullSize':true})}):null)]});
});

(app.main.ui.workspace.tokens.management.forms.controls.fonts_combobox.composite_fonts_combobox_STAR_.displayName = "composite-fonts-combobox*");


//# sourceMappingURL=app.main.ui.workspace.tokens.management.forms.controls.fonts_combobox.js.map
