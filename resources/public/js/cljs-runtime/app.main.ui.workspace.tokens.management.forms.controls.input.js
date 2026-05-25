import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.tokens.js";
import "./app.common.types.token.js";
import "./app.common.types.tokens_lib.js";
import "./app.config.js";
import "./app.main.data.style_dictionary.js";
import "./app.main.data.tokenscript.js";
import "./app.main.data.workspace.tokens.errors.js";
import "./app.main.data.workspace.tokens.format.js";
import "./app.main.ui.ds.controls.input.js";
import "./app.main.ui.forms.js";
import "./app.util.dom.js";
import "./app.util.forms.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.management.forms.controls.input');
app.main.ui.workspace.tokens.management.forms.controls.input.resolve_value_tokenscript = (function app$main$ui$workspace$tokens$management$forms$controls$input$resolve_value_tokenscript(tokens,prev_token,value){
var result = app.main.data.tokenscript.update_token(tokens,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(prev_token,new cljs.core.Keyword(null,"value","value",305978217),value));
var token_result = result.resolved;
return beicon.v2.core.of(((app.main.data.tokenscript.processor_error_QMARK_(token_result))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","missing-reference","error.style-dictionary/missing-reference",599665942),(function (){var G__79649 = token_result.dependencyChain;
var G__79649__$1 = (((G__79649 == null))?null:cljs.core.seq(G__79649));
if((G__79649__$1 == null)){
return null;
} else {
return cljs.core.rest(G__79649__$1);
}
})())], null):(((token_result instanceof Error))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),app.main.data.workspace.tokens.errors.error_with_value(new cljs.core.Keyword("error.style-dictionary","invalid-token-value","error.style-dictionary/invalid-token-value",2098581256),value)], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),token_result], null)
)));
});
app.main.ui.workspace.tokens.management.forms.controls.input.resolve_value = (function app$main$ui$workspace$tokens$management$forms$controls$input$resolve_value(tokens,prev_token,token_name,value){
var valid_token_name_QMARK_ = (function (){var and__5023__auto__ = typeof token_name === 'string';
if(and__5023__auto__){
return cljs.core.re_matches(app.common.types.token.token_name_validation_regex,token_name);
} else {
return and__5023__auto__;
}
})();
var token = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"name","name",1843675177),((((cljs.core.not(valid_token_name_QMARK_)) || (cuerdas.core.blank_QMARK_(token_name))))?"__PENPOT__TOKEN__NAME__PLACEHOLDER__":token_name)], null);
var tokens__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tokens,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prev_token)),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token),(function (p1__79650_SHARP_){
return app.common.types.tokens_lib.make_token.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__79650_SHARP_,prev_token,token], 0))], 0));
}));
return beicon.v2.core.mapcat((function (resolved_tokens){
var map__79651 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(resolved_tokens,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token));
var map__79651__$1 = cljs.core.__destructure_map(map__79651);
var resolved_token = map__79651__$1;
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79651__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var resolved_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79651__$1,new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626));
var resolved_value__$1 = ((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500)))?app.main.data.tokenscript.tokenscript_symbols__GT_penpot_unit(resolved_value):resolved_value);
if(cljs.core.truth_(resolved_value__$1)){
return beicon.v2.core.of(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),resolved_value__$1], null));
} else {
return beicon.v2.core.of(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.first(errors)], null));
}
}),app.main.data.style_dictionary.resolve_tokens_interactive(tokens__$1));
});
app.main.ui.workspace.tokens.management.forms.controls.input.input_STAR_ = (function app$main$ui$workspace$tokens$management$forms$controls$input$input_STAR_(props_79652){
var name = undefined;
var token = undefined;
var tokens = undefined;
var props = undefined;
var {"name": name, "tokens": tokens, "token": token, ...props} = props_79652;

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
var resolve_stream = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token)],(function (){
if(cljs.core.contains_QMARK_(token,new cljs.core.Keyword(null,"value","value",305978217))){
return beicon.v2.core.behavior_subject(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token));
} else {
return beicon.v2.core.subject();
}
}));
var hint_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hint = cljs.core.deref(hint_STAR_);
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(resolve_stream),rumext.v2.adapt(input_name)],(function (event){
var value__$1 = app.util.dom.get_input_value(app.util.dom.get_target(event));
app.util.forms.on_input_change.cljs$core$IFn$_invoke$arity$4(form,input_name,value__$1,true);

return resolve_stream.next(value__$1);
}));
var props__$1 = {...props, 'onChange':on_change,'defaultValue':value,'variant':"comfortable",'hintMessage':new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(hint),'hintType':new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(hint)};
var props__$2 = (cljs.core.truth_((function (){var and__5023__auto__ = error;
if(cljs.core.truth_(and__5023__auto__)){
return touched_QMARK_;
} else {
return and__5023__auto__;
}
})())?{...props__$1, 'hintType':"error",'hintMessage':new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error)}:props__$1);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(resolve_stream),rumext.v2.adapt(tokens),rumext.v2.adapt(token),rumext.v2.adapt(input_name),rumext.v2.adapt(token_name)],(function (){
var resolve_value = ((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500)))?app.main.ui.workspace.tokens.management.forms.controls.input.resolve_value_tokenscript:app.main.ui.workspace.tokens.management.forms.controls.input.resolve_value);
var subs = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p__79654){
var map__79655 = p__79654;
var map__79655__$1 = cljs.core.__destructure_map(map__79655);
var error__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79655__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79655__$1,new cljs.core.Keyword(null,"value","value",305978217));
var touched_QMARK___$1 = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),input_name], null));
if(cljs.core.truth_(touched_QMARK___$1)){
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
}),beicon.v2.core.mapcat(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(resolve_value,tokens,token,token_name),beicon.v2.core.debounce((300),resolve_stream))));
return (function (){
return beicon.v2.core.dispose_BANG_(subs);
});
}));

return rumext.v2.create_element(app.main.ui.ds.controls.input.input_STAR_,props__$2);
});

(app.main.ui.workspace.tokens.management.forms.controls.input.input_STAR_.displayName = "input*");

app.main.ui.workspace.tokens.management.forms.controls.input.on_composite_input_change = (function app$main$ui$workspace$tokens$management$forms$controls$input$on_composite_input_change(var_args){
var G__79660 = arguments.length;
switch (G__79660) {
case 3:
return app.main.ui.workspace.tokens.management.forms.controls.input.on_composite_input_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.ui.workspace.tokens.management.forms.controls.input.on_composite_input_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.workspace.tokens.management.forms.controls.input.on_composite_input_change.cljs$core$IFn$_invoke$arity$3 = (function (form,field,value){
return app.main.ui.workspace.tokens.management.forms.controls.input.on_composite_input_change.cljs$core$IFn$_invoke$arity$4(form,field,value,false);
}));

(app.main.ui.workspace.tokens.management.forms.controls.input.on_composite_input_change.cljs$core$IFn$_invoke$arity$4 = (function (form,field,value,trim_QMARK_){
var clean_errors = (function app$main$ui$workspace$tokens$management$forms$controls$input$clean_errors(errors){
var G__79662 = errors;
var G__79662__$1 = (((G__79662 == null))?null:cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__79662,new cljs.core.Keyword(null,"value","value",305978217),(function (p1__79656_SHARP_){
if(cljs.core.map_QMARK_(p1__79656_SHARP_)){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__79656_SHARP_,field);
} else {
return null;
}
})));
var G__79662__$2 = (((G__79662__$1 == null))?null:cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__79662__$1,new cljs.core.Keyword(null,"value","value",305978217),(function (p1__79657_SHARP_){
if(cljs.core.seq(p1__79657_SHARP_)){
return p1__79657_SHARP_;
} else {
return null;
}
})));
if((G__79662__$2 == null)){
return null;
} else {
return cljs.core.not_empty(G__79662__$2);
}
});
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(form,(function (state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),field], null),(cljs.core.truth_(trim_QMARK_)?cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(value):value)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.Keyword(null,"value","value",305978217),field], null),true),new cljs.core.Keyword(null,"errors","errors",-908790718),clean_errors),new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),clean_errors);
}));
}));

(app.main.ui.workspace.tokens.management.forms.controls.input.on_composite_input_change.cljs$lang$maxFixedArity = 4);

app.main.ui.workspace.tokens.management.forms.controls.input.input_composite_STAR_ = (function app$main$ui$workspace$tokens$management$forms$controls$input$input_composite_STAR_(props_79663){
var name = undefined;
var token = undefined;
var tokens = undefined;
var props = undefined;
var {"name": name, "tokens": tokens, "token": token, ...props} = props_79663;

var form = rumext.v2.use_ctx(app.main.ui.forms.context);
var input_name = name;
var token_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null),null);
var error = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"value","value",305978217),input_name], null));
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),input_name], null),"");
var touched_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),new cljs.core.Keyword(null,"value","value",305978217),input_name], null));
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
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(resolve_stream),rumext.v2.adapt(input_name)],(function (event){
var value__$1 = app.util.dom.get_input_value(app.util.dom.get_target(event));
app.main.ui.workspace.tokens.management.forms.controls.input.on_composite_input_change.cljs$core$IFn$_invoke$arity$4(form,input_name,value__$1,true);

return resolve_stream.next(value__$1);
}));
var props__$1 = {...props, 'onChange':on_change,'defaultValue':value,'variant':"comfortable",'hintMessage':new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(hint),'hintType':new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(hint)};
var props__$2 = (cljs.core.truth_((function (){var and__5023__auto__ = touched_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return error;
} else {
return and__5023__auto__;
}
})())?{...props__$1, 'hintType':"error",'hintMessage':new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error)}:props__$1);
var props__$3 = ((((cljs.core.not(error)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_name,new cljs.core.Keyword(null,"reference","reference",-1711695023)))))?{...props__$2, 'hintFormated':true}:props__$2);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(resolve_stream),rumext.v2.adapt(tokens),rumext.v2.adapt(token),rumext.v2.adapt(input_name),rumext.v2.adapt(name),rumext.v2.adapt(token_name)],(function (){
var subs = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p__79667){
var map__79668 = p__79667;
var map__79668__$1 = cljs.core.__destructure_map(map__79668);
var error__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79668__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79668__$1,new cljs.core.Keyword(null,"value","value",305978217));
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
var input_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),input_name], null),"");
var resolved_value = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(name,new cljs.core.Keyword(null,"line-height","line-height",1870784992)))?(function (){var temp__5825__auto__ = app.common.files.tokens.parse_token_value(input_value);
if(cljs.core.truth_(temp__5825__auto__)){
var map__79669 = temp__5825__auto__;
var map__79669__$1 = cljs.core.__destructure_map(map__79669);
var unit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79669__$1,new cljs.core.Keyword(null,"unit","unit",375175175));
var value__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79669__$1,new cljs.core.Keyword(null,"value","value",305978217));
var font_size = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"font-size","font-size",-1847940346)], null),"");
var calculated = (function (){var G__79670 = unit;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("%",G__79670)){
return (app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(value__$2) / (100));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("px",G__79670)){
return (app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(value__$2) / app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(font_size));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(null,G__79670)){
return value__$2;
} else {
return null;

}
}
}
})();
return app.main.data.workspace.tokens.format.format_token_value(calculated);
} else {
return null;
}
})():app.main.data.workspace.tokens.format.format_token_value(value__$1));
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.resolved-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(function (){var or__5025__auto__ = resolved_value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return value__$1;
}
})()], 0));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update,new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update,new cljs.core.Keyword(null,"async-errors","async-errors",-1865115559),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reference","reference",-1711695023)], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_value,cljs.core.str.cljs$core$IFn$_invoke$arity$1(resolved_value))){
return cljs.core.reset_BANG_(hint_STAR_,cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.reset_BANG_(hint_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"type","type",1174270348),"hint"], null));
}

}
}
}),beicon.v2.core.map((function (result){
return app.common.data.update_when(result,new cljs.core.Keyword(null,"error","error",-978969032),app.main.data.workspace.tokens.errors.resolve_error_assoc_message);
}),beicon.v2.core.mapcat(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(app.main.ui.workspace.tokens.management.forms.controls.input.resolve_value,tokens,token,token_name),beicon.v2.core.debounce((300),resolve_stream))));
return (function (){
return beicon.v2.core.dispose_BANG_(subs);
});
}));

return rumext.v2.create_element(app.main.ui.ds.controls.input.input_STAR_,props__$3);
});

(app.main.ui.workspace.tokens.management.forms.controls.input.input_composite_STAR_.displayName = "input-composite*");

app.main.ui.workspace.tokens.management.forms.controls.input.on_indexed_input_change = (function app$main$ui$workspace$tokens$management$forms$controls$input$on_indexed_input_change(var_args){
var G__79674 = arguments.length;
switch (G__79674) {
case 5:
return app.main.ui.workspace.tokens.management.forms.controls.input.on_indexed_input_change.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return app.main.ui.workspace.tokens.management.forms.controls.input.on_indexed_input_change.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.workspace.tokens.management.forms.controls.input.on_indexed_input_change.cljs$core$IFn$_invoke$arity$5 = (function (form,field,index,value,value_subfield){
return app.main.ui.workspace.tokens.management.forms.controls.input.on_indexed_input_change.cljs$core$IFn$_invoke$arity$6(form,field,index,value,value_subfield,false);
}));

(app.main.ui.workspace.tokens.management.forms.controls.input.on_indexed_input_change.cljs$core$IFn$_invoke$arity$6 = (function (form,field,index,value,value_subfield,trim_QMARK_){
var clean_errors = (function app$main$ui$workspace$tokens$management$forms$controls$input$clean_errors(errors){
return cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(errors,field));
});
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(form,(function (state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index,field], null),(cljs.core.truth_(trim_QMARK_)?cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(value):value)),new cljs.core.Keyword(null,"errors","errors",-908790718),clean_errors),new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),clean_errors);
}));
}));

(app.main.ui.workspace.tokens.management.forms.controls.input.on_indexed_input_change.cljs$lang$maxFixedArity = 6);

app.main.ui.workspace.tokens.management.forms.controls.input.input_indexed_STAR_ = (function app$main$ui$workspace$tokens$management$forms$controls$input$input_indexed_STAR_(props_79675){
var index = undefined;
var name = undefined;
var token = undefined;
var value_subfield = undefined;
var tokens = undefined;
var props = undefined;
var {"name": name, "tokens": tokens, "token": token, "index": index, "valueSubfield": value_subfield, ...props} = props_79675;

var form = rumext.v2.use_ctx(app.main.ui.forms.context);
var input_name = name;
var token_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null),null);
var error = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index,input_name], null));
var value_from_form = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index,input_name], null),"");
var resolve_stream = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token),rumext.v2.adapt(index),rumext.v2.adapt(input_name)],(function (){
var temp__5823__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(token,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index,input_name], null));
if(cljs.core.truth_(temp__5823__auto__)){
var value = temp__5823__auto__;
return beicon.v2.core.behavior_subject(value);
} else {
return beicon.v2.core.subject();
}
}));
var hint_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var hint = cljs.core.deref(hint_STAR_);
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(resolve_stream),rumext.v2.adapt(input_name),rumext.v2.adapt(index)],(function (event){
var value = app.util.dom.get_input_value(app.util.dom.get_target(event));
app.main.ui.workspace.tokens.management.forms.controls.input.on_indexed_input_change.cljs$core$IFn$_invoke$arity$6(form,input_name,index,value,value_subfield,true);

return resolve_stream.next(value);
}));
var props__$1 = {...props, 'onChange':on_change,'value':value_from_form,'variant':"comfortable",'hintMessage':new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(hint),'hintType':new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(hint)};
var props__$2 = (cljs.core.truth_(error)?{...props__$1, 'hintType':"error",'hintMessage':new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error)}:props__$1);
var props__$3 = ((((cljs.core.not(error)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_name,new cljs.core.Keyword(null,"reference","reference",-1711695023)))))?{...props__$2, 'hintFormated':true}:props__$2);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(resolve_stream),rumext.v2.adapt(tokens),rumext.v2.adapt(token),rumext.v2.adapt(input_name),rumext.v2.adapt(index),rumext.v2.adapt(value_subfield),rumext.v2.adapt(token_name)],(function (){
var subs = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p__79680){
var map__79681 = p__79680;
var map__79681__$1 = cljs.core.__destructure_map(map__79681);
var error__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79681__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79681__$1,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_((function (){var and__5023__auto__ = error__$1;
if(cljs.core.truth_(and__5023__auto__)){
return cuerdas.core.empty_QMARK_(new cljs.core.Keyword("error","value","error/value",420466049).cljs$core$IFn$_invoke$arity$1(error__$1));
} else {
return and__5023__auto__;
}
})())){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_name], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update_in,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([input_name], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update,new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));

return cljs.core.reset_BANG_(hint_STAR_,cljs.core.PersistentArrayMap.EMPTY);
} else {
if((!((error__$1 == null)))){
var error_SINGLEQUOTE_ = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index,input_name], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),error_SINGLEQUOTE_], null));

return cljs.core.reset_BANG_(hint_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),error_SINGLEQUOTE_,new cljs.core.Keyword(null,"type","type",1174270348),"error"], null));
} else {
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.resolved-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.tokens.format.format_token_value(value)], 0));
var input_value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),value_subfield,index,input_name], null),"");
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update,new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217)], 0));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_value,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value))){
return cljs.core.reset_BANG_(hint_STAR_,cljs.core.PersistentArrayMap.EMPTY);
} else {
return cljs.core.reset_BANG_(hint_STAR_,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"type","type",1174270348),"hint"], null));
}

}
}
}),beicon.v2.core.map((function (result){
return app.common.data.update_when(result,new cljs.core.Keyword(null,"error","error",-978969032),app.main.data.workspace.tokens.errors.resolve_error_assoc_message);
}),beicon.v2.core.mapcat(cljs.core.partial.cljs$core$IFn$_invoke$arity$4(app.main.ui.workspace.tokens.management.forms.controls.input.resolve_value,tokens,token,token_name),beicon.v2.core.debounce((300),resolve_stream))));
return (function (){
return beicon.v2.core.dispose_BANG_(subs);
});
}));

return rumext.v2.create_element(app.main.ui.ds.controls.input.input_STAR_,props__$3);
});

(app.main.ui.workspace.tokens.management.forms.controls.input.input_indexed_STAR_.displayName = "input-indexed*");


//# sourceMappingURL=app.main.ui.workspace.tokens.management.forms.controls.input.js.map
