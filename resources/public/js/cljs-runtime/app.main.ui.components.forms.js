import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.main.ui.components.select.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.forms.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
import "./rumext.v2.util.js";
goog.provide('app.main.ui.components.forms');
app.main.ui.components.forms.form_ctx = rumext.v2.create_context(null);
app.main.ui.components.forms.use_form = app.util.forms.use_form;
app.main.ui.components.forms.input = (function app$main$ui$components$forms$input(props_73391){
var map__73394 = rumext.v2.util.wrap_props(props_73391);
var map__73394__$1 = cljs.core.__destructure_map(map__73394);
var props = map__73394__$1;
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73394__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73394__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var placeholder = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73394__$1,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083));
var show_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73394__$1,new cljs.core.Keyword(null,"show-error","show-error",-664946683),true);
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73394__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var on_change_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73394__$1,new cljs.core.Keyword(null,"on-change-value","on-change-value",-922771799));
var show_success_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73394__$1,new cljs.core.Keyword(null,"show-success?","show-success?",-529629397));
var hint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73394__$1,new cljs.core.Keyword(null,"hint","hint",439639918));
var data_testid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73394__$1,new cljs.core.Keyword(null,"data-testid","data-testid",102116723));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73394__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var trim = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73394__$1,new cljs.core.Keyword(null,"trim","trim",774319767));
var help_icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73394__$1,new cljs.core.Keyword(null,"help-icon","help-icon",765943608));
var input_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"type","type",1174270348),"text");
var input_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"name","name",1843675177));
var more_classes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996));
var auto_focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"auto-focus?","auto-focus?",1021654593),false);
var data_testid__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(data_testid,input_name);
var form__$1 = (function (){var or__5025__auto__ = form;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return rumext.v2.use_ctx(app.main.ui.components.forms.form_ctx);
}
})();
var type_SINGLEQUOTE_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(input_type);
var focus_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var is_checkbox_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(type_SINGLEQUOTE_),"checkbox");
var is_radio_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(type_SINGLEQUOTE_),"radio");
var is_text_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(type_SINGLEQUOTE_),"password")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(type_SINGLEQUOTE_),"text")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(type_SINGLEQUOTE_),"email")))));
var placeholder__$1 = ((is_text_QMARK_)?(function (){var or__5025__auto__ = placeholder;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return label;
}
})():null);
var touched_QMARK_ = (function (){var and__5023__auto__ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form__$1)),input_name);
if(and__5023__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),input_name], null));
} else {
return and__5023__auto__;
}
})();
var error = (function (){var or__5025__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),input_name], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),input_name], null));
}
})();
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),input_name], null),"");
var help_icon_SINGLEQUOTE_ = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_type,"password")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(type_SINGLEQUOTE_),"password"))))?app.main.ui.icons.shown:((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(input_type,"password")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(type_SINGLEQUOTE_),"text"))))?app.main.ui.icons.hide:help_icon
));
var on_change_value__$1 = (function (){var or__5025__auto__ = on_change_value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.constantly(null);
}
})();
var swap_text_password = (function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(type_SINGLEQUOTE_,(function (input_type__$1){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("password",input_type__$1)){
return "text";
} else {
return "password";
}
}));
});
var on_focus = (function (){
return cljs.core.reset_BANG_(focus_QMARK_,true);
});
var on_change = (function (event){
var value__$1 = app.util.dom.get_input_value(app.util.dom.get_target(event));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),input_name], null),true);

app.util.forms.on_input_change.cljs$core$IFn$_invoke$arity$4(form__$1,input_name,value__$1,trim);

return (on_change_value__$1.cljs$core$IFn$_invoke$arity$2 ? on_change_value__$1.cljs$core$IFn$_invoke$arity$2(cljs.core.name,value__$1) : on_change_value__$1.call(null,cljs.core.name,value__$1));
});
var on_blur = (function (_){
return cljs.core.reset_BANG_(focus_QMARK_,false);
});
var on_click = (function (_){
if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),input_name], null)))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),input_name], null),true);
}
});
var props__$1 = rumext.v2.util.map__GT_props.cljs$core$IFn$_invoke$arity$1((function (){var G__73396 = (function (){var G__73397 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"help-icon","help-icon",765943608),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"trim","trim",774319767),new cljs.core.Keyword(null,"children","children",-940561982),new cljs.core.Keyword(null,"show-success?","show-success?",-529629397),new cljs.core.Keyword(null,"auto-focus?","auto-focus?",1021654593),new cljs.core.Keyword(null,"label","label",1718410804)], 0)),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.name(input_name),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"value","value",305978217),value,new cljs.core.Keyword(null,"auto-focus","auto-focus",1250006231),auto_focus_QMARK_,new cljs.core.Keyword(null,"on-click","on-click",1632826543),((((is_radio_QMARK_) || (is_checkbox_QMARK_)))?on_click:null),new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),on_focus,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),on_blur,new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),placeholder__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change,new cljs.core.Keyword(null,"type","type",1174270348),cljs.core.deref(type_SINGLEQUOTE_),new cljs.core.Keyword(null,"tab-index","tab-index",895755393),"0"], 0));
if(cljs.core.truth_((function (){var and__5023__auto__ = value;
if(cljs.core.truth_(and__5023__auto__)){
return is_checkbox_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__73397,new cljs.core.Keyword(null,"default-checked","default-checked",1039965863),value);
} else {
return G__73397;
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = touched_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error);
} else {
return and__5023__auto__;
}
})())){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__73396,"aria-invalid","true",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["aria-describedby",""+"error-"+(input_name ?? "")], 0));
} else {
return G__73396;
}
})());
var checked_QMARK_ = ((is_checkbox_QMARK_) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,true)));
var show_valid_QMARK_ = (function (){var and__5023__auto__ = show_success_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = touched_QMARK_;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not(error);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
var show_invalid_QMARK_ = (function (){var and__5023__auto__ = touched_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return error;
} else {
return and__5023__auto__;
}
})();
return rumext.v2.jsx("div",{'className':""+(more_classes ?? "")+" "+("main_ui_components_forms__input-wrapper"+" "+(cljs.core.truth_(show_valid_QMARK_)?"main_ui_components_forms__valid":"")+" "+(cljs.core.truth_(show_invalid_QMARK_)?"main_ui_components_forms__invalid":"")+" "+((is_checkbox_QMARK_)?"main_ui_components_forms__checkbox":"")+" "+(cljs.core.truth_(disabled)?"main_ui_components_forms__disabled":"") ?? ""),'children':rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(((!((label == null))))?rumext.v2.jsxs("label",{'tabIndex':"-1",'htmlFor':cljs.core.name(input_name),'className':(((!(is_checkbox_QMARK_)))?"main_ui_components_forms__input-with-label-form":"")+" "+((is_text_QMARK_)?"main_ui_components_forms__input-label":"")+" "+((is_radio_QMARK_)?"main_ui_components_forms__radio-label":"")+" "+((is_checkbox_QMARK_)?"main_ui_components_forms__checkbox-label":""),'children':[label,((is_checkbox_QMARK_)?rumext.v2.jsx("span",{'className':((checked_QMARK_)?"checked":""),'children':((checked_QMARK_)?app.main.ui.icons.status_tick:null)}):null),((is_checkbox_QMARK_)?rumext.v2.create_element("input",props__$1):rumext.v2.jsxs("div",{'className':"main_ui_components_forms__input-and-icon",'children':[rumext.v2.create_element("input",props__$1),(cljs.core.truth_(help_icon_SINGLEQUOTE_)?rumext.v2.jsx("span",{'onClick':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("password",input_type))?swap_text_password:null),'className':"main_ui_components_forms__help-icon",'children':help_icon_SINGLEQUOTE_}):null),(cljs.core.truth_(show_valid_QMARK_)?rumext.v2.jsx("span",{'className':"main_ui_components_forms__valid-icon",'children':app.main.ui.icons.tick}):null),(cljs.core.truth_(show_invalid_QMARK_)?rumext.v2.jsx("span",{'className':"main_ui_components_forms__invalid-icon",'children':app.main.ui.icons.close}):null)]}))]}):(((!((children == null))))?rumext.v2.jsxs("label",{'htmlFor':cljs.core.name(input_name),'children':[rumext.v2.create_element("input",props__$1),children]}):null)),(cljs.core.truth_((function (){var and__5023__auto__ = touched_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(and__5023__auto____$1)){
return show_error;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?(function (){var message = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error);
return rumext.v2.jsx("div",{'id':""+"error-"+(input_name ?? ""),'data-testid':""+(data_testid__$1 ?? "")+"-error",'className':"main_ui_components_forms__error",'children':message});
})():(cljs.core.truth_((function (){var and__5023__auto__ = touched_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(and__5023__auto____$1)){
return show_error;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?(function (){var code = new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error);
return rumext.v2.jsx("div",{'id':""+"error-"+(input_name ?? ""),'data-testid':""+(data_testid__$1 ?? "")+"-error",'className':"main_ui_components_forms__error",'children':((cljs.core.vector_QMARK_(code))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(code,(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(code,(1)))], 0)):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1(code))});
})():((typeof hint === 'string')?rumext.v2.jsx("div",{'className':"main_ui_components_forms__hint",'children':hint}):null)))]})});
});

(app.main.ui.components.forms.input.displayName = "input");

app.main.ui.components.forms.textarea = (function app$main$ui$components$forms$textarea(props_73401){
var map__73402 = rumext.v2.util.wrap_props(props_73401);
var map__73402__$1 = cljs.core.__destructure_map(map__73402);
var props = map__73402__$1;
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73402__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73402__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73402__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var hint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73402__$1,new cljs.core.Keyword(null,"hint","hint",439639918));
var trim = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73402__$1,new cljs.core.Keyword(null,"trim","trim",774319767));
var input_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"name","name",1843675177));
var form__$1 = (function (){var or__5025__auto__ = form;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return rumext.v2.use_ctx(app.main.ui.components.forms.form_ctx);
}
})();
var focus_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var touched_QMARK_ = (function (){var and__5023__auto__ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form__$1)),input_name);
if(and__5023__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),input_name], null));
} else {
return and__5023__auto__;
}
})();
var error = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),input_name], null));
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),input_name], null),"");
var klass = app.util.dom.classnames.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"focus","focus",234677911),cljs.core.deref(focus_QMARK_),new cljs.core.Keyword(null,"valid","valid",155614240),(function (){var and__5023__auto__ = touched_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(error);
} else {
return and__5023__auto__;
}
})(),new cljs.core.Keyword(null,"invalid","invalid",412869516),(function (){var and__5023__auto__ = touched_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return error;
} else {
return and__5023__auto__;
}
})(),new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled], 0));
var on_focus = (function (){
return cljs.core.reset_BANG_(focus_QMARK_,true);
});
var on_change = (function (event){
var target = app.util.dom.get_target(event);
var value__$1 = app.util.dom.get_value(target);
return app.util.forms.on_input_change.cljs$core$IFn$_invoke$arity$4(form__$1,input_name,value__$1,trim);
});
var on_blur = (function (_){
cljs.core.reset_BANG_(focus_QMARK_,false);

if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),input_name], null)))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),input_name], null),true);
}
});
var props__$1 = rumext.v2.util.map__GT_props.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"help-icon","help-icon",765943608),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.Keyword(null,"trim","trim",774319767)], 0)),new cljs.core.Keyword(null,"value","value",305978217),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-focus","on-focus",-13737624),on_focus,new cljs.core.Keyword(null,"on-blur","on-blur",814300747),on_blur,new cljs.core.Keyword(null,"on-change","on-change",-732046149),on_change], 0)));
return rumext.v2.jsxs("div",{'className':""+(klass ?? "")+" "+("main_ui_components_forms__textarea-wrapper" ?? ""),'children':[rumext.v2.jsx("label",{'className':"main_ui_components_forms__textarea-label",'children':label}),rumext.v2.create_element("textarea",props__$1),(cljs.core.truth_((function (){var and__5023__auto__ = touched_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error);
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("span",{'className':"main_ui_components_forms__error",'children':new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error)}):(cljs.core.truth_((function (){var and__5023__auto__ = touched_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error);
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("span",{'className':"main_ui_components_forms__error",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(error))}):((typeof hint === 'string')?rumext.v2.jsx("span",{'className':"main_ui_components_forms__hint",'children':hint}):null)))]});
});

(app.main.ui.components.forms.textarea.displayName = "textarea");

app.main.ui.components.forms.select = (function app$main$ui$components$forms$select(props_73404){
var map__73405 = rumext.v2.util.wrap_props(props_73404);
var map__73405__$1 = cljs.core.__destructure_map(map__73405);
var props = map__73405__$1;
var options = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73405__$1,new cljs.core.Keyword(null,"options","options",99638489));
var disabled = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73405__$1,new cljs.core.Keyword(null,"disabled","disabled",-1529784218));
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73405__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var default$ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__73405__$1,new cljs.core.Keyword(null,"default","default",-1987822328),"");
var dropdown_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73405__$1,new cljs.core.Keyword(null,"dropdown-class","dropdown-class",-1809197876));
var select_class = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73405__$1,new cljs.core.Keyword(null,"select-class","select-class",238488449));
var input_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"name","name",1843675177));
var form__$1 = (function (){var or__5025__auto__ = form;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return rumext.v2.use_ctx(app.main.ui.components.forms.form_ctx);
}
})();
var value = (function (){var or__5025__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),input_name], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default$;
}
})();
var handle_change = (function (event){
var value__$1 = ((typeof event === 'string')?event:app.util.dom.get_target_val(event));
return app.util.forms.on_input_change.cljs$core$IFn$_invoke$arity$3(form__$1,input_name,value__$1);
});
return rumext.v2.jsx("div",{'className':"main_ui_components_forms__select-wrapper",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':value,'disabled':disabled,'options':options,'class':select_class,'dropdown-class':dropdown_class,'on-change':handle_change})});
});

(app.main.ui.components.forms.select.displayName = "select");

app.main.ui.components.forms.radio_buttons = (function app$main$ui$components$forms$radio_buttons(props_73406){
var props = props_73406;
var form = (function (){var or__5025__auto__ = (props["form"]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return rumext.v2.use_ctx(app.main.ui.components.forms.form_ctx);
}
})();
var name = (props["name"]);
var image = (props["image"]);
var current_value = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.Keyword(null,"data","data",-232669377)),name,"");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (props["value"]);
}
})();
var on_change = (props["on-change"]);
var options = (props["options"]);
var trim_QMARK_ = (props["trim"]);
var class$ = (props["class"]);
var encode_fn = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((props["encode-fn"]),cljs.core.identity);
var decode_fn = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((props["decode-fn"]),cljs.core.identity);
var on_change_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change),rumext.v2.adapt(form),rumext.v2.adapt(name)],(function (event){
var value = (function (){var G__73407 = app.util.dom.get_value(app.util.dom.get_target(event));
return (decode_fn.cljs$core$IFn$_invoke$arity$1 ? decode_fn.cljs$core$IFn$_invoke$arity$1(G__73407) : decode_fn.call(null,G__73407));
})();
if((!((form == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),name], null),true);

app.util.forms.on_input_change.cljs$core$IFn$_invoke$arity$4(form,name,value,trim_QMARK_);
} else {
}

if(cljs.core.fn_QMARK_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(name,value) : on_change.call(null,name,value));
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'className':(cljs.core.truth_(image)?class$:""+(class$ ?? "")+" "+("main_ui_components_forms__custom-radio" ?? "")),'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__73408){
var map__73409 = p__73408;
var map__73409__$1 = cljs.core.__destructure_map(map__73409);
var image__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73409__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73409__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73409__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73409__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var area = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73409__$1,new cljs.core.Keyword(null,"area","area",472007256));
out_arr__46744__auto__.push((function (){var image_QMARK_ = (!((image__$1 == null)));
var icon_QMARK_ = (!((icon == null)));
var value_SINGLEQUOTE_ = (encode_fn.cljs$core$IFn$_invoke$arity$1 ? encode_fn.cljs$core$IFn$_invoke$arity$1(value) : encode_fn.call(null,value));
var checked_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,current_value);
var key = ""+(app.common.data.name(name) ?? "")+"-"+(app.common.data.name(value_SINGLEQUOTE_) ?? "");
return rumext.v2.jsxs("label",{'htmlFor':key,'style':{'gridArea':area},'className':"main_ui_components_forms__radio-label"+" "+((checked_QMARK_)?"checked":"")+" "+((((image_QMARK_) || (icon_QMARK_)))?"main_ui_components_forms__with-image":""),'children':[((image_QMARK_)?rumext.v2.jsx("span",{'style':{'backgroundImage':""+"url("+(image__$1 ?? "")+")"},'className':"main_ui_components_forms__image-inside"}):((icon_QMARK_)?rumext.v2.jsx("span",{'className':"main_ui_components_forms__icon-inside",'children':icon}):rumext.v2.jsx("span",{'className':"main_ui_components_forms__radio-icon"+" "+((checked_QMARK_)?"checked":""),'children':((checked_QMARK_)?rumext.v2.jsx("span",{'className':"main_ui_components_forms__radio-dot"}):null)})
)),label,rumext.v2.jsx("input",{'onChange':on_change_SINGLEQUOTE_,'type':"radio",'id':key,'name':name,'value':value_SINGLEQUOTE_,'checked':checked_QMARK_,'className':"main_ui_components_forms__radio-input"})]},key);
})());

return out_arr__46744__auto__;
}),[],options)});
});

(app.main.ui.components.forms.radio_buttons.displayName = "radio-buttons");

app.main.ui.components.forms.image_radio_buttons = (function app$main$ui$components$forms$image_radio_buttons(props_73410){
var props = props_73410;
var form = (function (){var or__5025__auto__ = (props["form"]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return rumext.v2.use_ctx(app.main.ui.components.forms.form_ctx);
}
})();
var name = (props["name"]);
var image = (props["image"]);
var img_height = (props["img-height"]);
var img_width = (props["img-width"]);
var current_value = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.Keyword(null,"data","data",-232669377)),name,"");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (props["value"]);
}
})();
var on_change = (props["on-change"]);
var options = (props["options"]);
var trim_QMARK_ = (props["trim"]);
var class$ = (props["class"]);
var encode_fn = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((props["encode-fn"]),cljs.core.identity);
var decode_fn = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2((props["decode-fn"]),cljs.core.identity);
var on_change_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change),rumext.v2.adapt(form),rumext.v2.adapt(name)],(function (event){
var value = (function (){var G__73411 = app.util.dom.get_value(app.util.dom.get_target(event));
return (decode_fn.cljs$core$IFn$_invoke$arity$1 ? decode_fn.cljs$core$IFn$_invoke$arity$1(G__73411) : decode_fn.call(null,G__73411));
})();
if((!((form == null)))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),name], null),true);

app.util.forms.on_input_change.cljs$core$IFn$_invoke$arity$4(form,name,value,trim_QMARK_);
} else {
}

if(cljs.core.fn_QMARK_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(name,value) : on_change.call(null,name,value));
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'className':(cljs.core.truth_(image)?class$:""+(class$ ?? "")+" "+("main_ui_components_forms__custom-radio" ?? "")),'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__73412){
var map__73413 = p__73412;
var map__73413__$1 = cljs.core.__destructure_map(map__73413);
var image__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73413__$1,new cljs.core.Keyword(null,"image","image",-58725096));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73413__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73413__$1,new cljs.core.Keyword(null,"value","value",305978217));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73413__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var area = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73413__$1,new cljs.core.Keyword(null,"area","area",472007256));
out_arr__46744__auto__.push((function (){var icon_QMARK_ = (!((icon == null)));
var value_SINGLEQUOTE_ = (encode_fn.cljs$core$IFn$_invoke$arity$1 ? encode_fn.cljs$core$IFn$_invoke$arity$1(value) : encode_fn.call(null,value));
var checked_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,current_value);
var key = ""+(app.common.data.name(name) ?? "")+"-"+(app.common.data.name(value_SINGLEQUOTE_) ?? "");
return rumext.v2.jsxs("label",{'htmlFor':key,'style':{'gridArea':area},'className':"main_ui_components_forms__radio-label-image"+" "+((checked_QMARK_)?"checked":""),'children':[((icon_QMARK_)?rumext.v2.jsx("span",{'style':{'height':img_height,'width':img_width},'className':"main_ui_components_forms__icon-inside",'children':icon}):rumext.v2.jsx("span",{'style':{'backgroundImage':""+"url("+(image__$1 ?? "")+")",'height':img_height,'width':img_width},'className':"main_ui_components_forms__image-inside"})
),rumext.v2.jsx("span",{'className':"main_ui_components_forms__image-text",'children':label}),rumext.v2.jsx("input",{'onChange':on_change_SINGLEQUOTE_,'type':"radio",'id':key,'name':name,'value':value_SINGLEQUOTE_,'checked':checked_QMARK_,'className':"main_ui_components_forms__radio-input"})]},key);
})());

return out_arr__46744__auto__;
}),[],options)});
});

(app.main.ui.components.forms.image_radio_buttons.displayName = "image-radio-buttons");

app.main.ui.components.forms.submit_button_STAR_ = (function app$main$ui$components$forms$submit_button_STAR_(props_73414){
var form = props_73414.form;
var children = props_73414.children;
var disabled = props_73414.disabled;
var name = props_73414.name;
var on_click = props_73414.onClick;
var label = props_73414.label;
var class$ = props_73414.className;
var props = props_73414;
var form__$1 = (function (){var or__5025__auto__ = form;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return rumext.v2.use_ctx(app.main.ui.components.forms.form_ctx);
}
})();
var disabled_QMARK_ = (((((!((form__$1 == null)))) && (cljs.core.not(new cljs.core.Keyword(null,"valid","valid",155614240).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form__$1)))))) || (disabled === true));
var class$__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(class$,"main_ui_components_forms__button-submit");
var name__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(name,"submit");
var on_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_click)],(function (event){
if(cljs.core.truth_((function (){var and__5023__auto__ = app.util.keyboard.enter_QMARK_(event);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.fn_QMARK_(on_click);
} else {
return and__5023__auto__;
}
})())){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
return null;
}
}));
var props__$1 = {...props, 'children':rumext.v2.undefined,'disabled':disabled_QMARK_,'onKeyDown':on_key_down,'name':name__$1,'labek':rumext.v2.undefined,'className':class$__$1,'type':"submit"};
return rumext.v2.create_element("button",props__$1,(((!((children == null))))?children:rumext.v2.jsx("span",{'children':label})));
});

(app.main.ui.components.forms.submit_button_STAR_.displayName = "submit-button*");

app.main.ui.components.forms.form = (function app$main$ui$components$forms$form(props_73415){
var form__$1 = props_73415.form;
var children = props_73415.children;
var class$ = props_73415.class;
var on_submit = (props_73415["on-submit"]);
var on_submit_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_submit)],(function (event){
app.util.dom.prevent_default(event);

if(cljs.core.fn_QMARK_(on_submit)){
return (on_submit.cljs$core$IFn$_invoke$arity$2 ? on_submit.cljs$core$IFn$_invoke$arity$2(form__$1,event) : on_submit.call(null,form__$1,event));
} else {
return null;
}
}));
return rumext.v2.jsx(rumext.v2.provider(app.main.ui.components.forms.form_ctx),{'value':form__$1,'children':rumext.v2.jsx("form",{'onSubmit':on_submit_SINGLEQUOTE_,'className':class$,'children':children})});
});

(app.main.ui.components.forms.form.displayName = "form");

/**
 * A helper that adds item into a vector and removes possible
 *   duplicates. This is not very efficient implementation but is ok for
 *   handling form input that will have a small number of items.
 */
app.main.ui.components.forms.conj_dedup = (function app$main$ui$components$forms$conj_dedup(coll,item){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.distinct.cljs$core$IFn$_invoke$arity$0(),cljs.core.conj.cljs$core$IFn$_invoke$arity$2(coll,item));
});
app.main.ui.components.forms.multi_input = (function app$main$ui$components$forms$multi_input(props_73418){
var map__73419 = rumext.v2.util.wrap_props(props_73418);
var map__73419__$1 = cljs.core.__destructure_map(map__73419);
var props = map__73419__$1;
var form = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73419__$1,new cljs.core.Keyword(null,"form","form",-1624062471));
var label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73419__$1,new cljs.core.Keyword(null,"label","label",1718410804));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73419__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73419__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var trim = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73419__$1,new cljs.core.Keyword(null,"trim","trim",774319767));
var valid_item_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73419__$1,new cljs.core.Keyword(null,"valid-item-fn","valid-item-fn",-2057807375));
var caution_item_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73419__$1,new cljs.core.Keyword(null,"caution-item-fn","caution-item-fn",-331091117));
var on_submit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73419__$1,new cljs.core.Keyword(null,"on-submit","on-submit",1227871159));
var form__$1 = (function (){var or__5025__auto__ = form;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return rumext.v2.use_ctx(app.main.ui.components.forms.form_ctx);
}
})();
var input_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"name","name",1843675177));
var touched_QMARK_ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),input_name], null));
var error = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),input_name], null));
var focus_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var auto_focus_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"auto-focus?","auto-focus?",1021654593),false);
var items = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
var initial = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),input_name], null));
if(((cljs.core.vector_QMARK_(initial)) || (cljs.core.set_QMARK_(initial)))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (val){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),val,new cljs.core.Keyword(null,"valid","valid",155614240),(valid_item_fn.cljs$core$IFn$_invoke$arity$1 ? valid_item_fn.cljs$core$IFn$_invoke$arity$1(val) : valid_item_fn.call(null,val)),new cljs.core.Keyword(null,"caution","caution",1823615934),(caution_item_fn.cljs$core$IFn$_invoke$arity$1 ? caution_item_fn.cljs$core$IFn$_invoke$arity$1(val) : caution_item_fn.call(null,val))], null);
}),initial);
} else {
return cljs.core.PersistentVector.EMPTY;
}
}));
var value = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("");
var result = app.main.ui.hooks.use_equal_memo(cljs.core.deref(items));
var empty_QMARK_ = ((cuerdas.core.empty_QMARK_(cljs.core.deref(value))) && ((cljs.core.count(cljs.core.deref(items)) === (0))));
var klass = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword(null,"class","class",-2030961996)))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.deref(focus_QMARK_))?"main_ui_components_forms__focus":"")+" "+(cljs.core.truth_((function (){var and__5023__auto__ = touched_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(error);
} else {
return and__5023__auto__;
}
})())?"main_ui_components_forms__valid":"")+" "+(cljs.core.truth_((function (){var and__5023__auto__ = touched_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return error;
} else {
return and__5023__auto__;
}
})())?"main_ui_components_forms__invalid":"")+" "+((empty_QMARK_)?"main_ui_components_forms__empty":"")+" "+"main_ui_components_forms__custom-multi-input")].join('');
var in_klass = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1("main_ui_components_forms__inside-input"+" "+(((cljs.core.count(cljs.core.deref(items)) > (0)))?"main_ui_components_forms__no-padding":"")+" "+(cljs.core.truth_((function (){var and__5023__auto__ = (!((valid_item_fn == null)));
if(and__5023__auto__){
var and__5023__auto____$1 = touched_QMARK_;
if(cljs.core.truth_(and__5023__auto____$1)){
return (((!(cuerdas.core.empty_QMARK_(cljs.core.deref(value))))) && (cljs.core.not((function (){var G__73421 = cljs.core.deref(value);
return (valid_item_fn.cljs$core$IFn$_invoke$arity$1 ? valid_item_fn.cljs$core$IFn$_invoke$arity$1(G__73421) : valid_item_fn.call(null,G__73421));
})())));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?"main_ui_components_forms__invalid":""))].join('');
var on_focus = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(focus_QMARK_,true);
}));
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var content = app.util.dom.get_input_value(app.util.dom.get_target(event));
return cljs.core.reset_BANG_(value,content);
}));
var update_form_BANG_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(form__$1)],(function (items__$1){
var value__$1 = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),items__$1));
return app.util.forms.update_input_value_BANG_(form__$1,input_name,value__$1);
}));
var on_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(value))],(function (event){
var val = (function (){var G__73422 = cljs.core.deref(value);
if(cljs.core.truth_(trim)){
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(G__73422);
} else {
return G__73422;
}
})();
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.keyboard.enter_QMARK_(event);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.util.keyboard.comma_QMARK_(event);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return app.util.keyboard.space_QMARK_(event);
}
}
})())){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),input_name], null),true);

if(cljs.core.truth_((function (){var and__5023__auto__ = app.util.keyboard.enter_QMARK_(event);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = cuerdas.core.empty_QMARK_(cljs.core.deref(value));
if(and__5023__auto____$1){
return cljs.core.not_empty(cljs.core.deref(items));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
if(cljs.core.fn_QMARK_(on_submit)){
(on_submit.cljs$core$IFn$_invoke$arity$2 ? on_submit.cljs$core$IFn$_invoke$arity$2(form__$1,event) : on_submit.call(null,form__$1,event));
} else {
}
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = (valid_item_fn.cljs$core$IFn$_invoke$arity$1 ? valid_item_fn.cljs$core$IFn$_invoke$arity$1(val) : valid_item_fn.call(null,val));
if(cljs.core.truth_(and__5023__auto__)){
return (!(cuerdas.core.empty_QMARK_(cljs.core.deref(value))));
} else {
return and__5023__auto__;
}
})())){
cljs.core.reset_BANG_(value,"");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),input_name], null),false);

var seq__73423 = cljs.core.seq(cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(val,/,|\s+/));
var chunk__73424 = null;
var count__73425 = (0);
var i__73426 = (0);
while(true){
if((i__73426 < count__73425)){
var val__$1 = chunk__73424.cljs$core$IIndexed$_nth$arity$2(null,i__73426);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(items,app.main.ui.components.forms.conj_dedup,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(val__$1),new cljs.core.Keyword(null,"valid","valid",155614240),(valid_item_fn.cljs$core$IFn$_invoke$arity$1 ? valid_item_fn.cljs$core$IFn$_invoke$arity$1(val__$1) : valid_item_fn.call(null,val__$1)),new cljs.core.Keyword(null,"caution","caution",1823615934),(caution_item_fn.cljs$core$IFn$_invoke$arity$1 ? caution_item_fn.cljs$core$IFn$_invoke$arity$1(val__$1) : caution_item_fn.call(null,val__$1))], null));


var G__73436 = seq__73423;
var G__73437 = chunk__73424;
var G__73438 = count__73425;
var G__73439 = (i__73426 + (1));
seq__73423 = G__73436;
chunk__73424 = G__73437;
count__73425 = G__73438;
i__73426 = G__73439;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__73423);
if(temp__5825__auto__){
var seq__73423__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__73423__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__73423__$1);
var G__73440 = cljs.core.chunk_rest(seq__73423__$1);
var G__73441 = c__5548__auto__;
var G__73442 = cljs.core.count(c__5548__auto__);
var G__73443 = (0);
seq__73423 = G__73440;
chunk__73424 = G__73441;
count__73425 = G__73442;
i__73426 = G__73443;
continue;
} else {
var val__$1 = cljs.core.first(seq__73423__$1);
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(items,app.main.ui.components.forms.conj_dedup,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"text","text",-1790561697),cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(val__$1),new cljs.core.Keyword(null,"valid","valid",155614240),(valid_item_fn.cljs$core$IFn$_invoke$arity$1 ? valid_item_fn.cljs$core$IFn$_invoke$arity$1(val__$1) : valid_item_fn.call(null,val__$1)),new cljs.core.Keyword(null,"caution","caution",1823615934),(caution_item_fn.cljs$core$IFn$_invoke$arity$1 ? caution_item_fn.cljs$core$IFn$_invoke$arity$1(val__$1) : caution_item_fn.call(null,val__$1))], null));


var G__73444 = cljs.core.next(seq__73423__$1);
var G__73445 = null;
var G__73446 = (0);
var G__73447 = (0);
seq__73423 = G__73444;
chunk__73424 = G__73445;
count__73425 = G__73446;
i__73426 = G__73447;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = app.util.keyboard.backspace_QMARK_(event);
if(cljs.core.truth_(and__5023__auto__)){
return cuerdas.core.empty_QMARK_(cljs.core.deref(value));
} else {
return and__5023__auto__;
}
})())){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(items,(function (items__$1){
if(cljs.core.empty_QMARK_(items__$1)){
return items__$1;
} else {
return cljs.core.pop(items__$1);
}
}));
} else {
return null;
}
}
}));
var on_blur = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
cljs.core.reset_BANG_(focus_QMARK_,false);

if(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form__$1),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),input_name], null)))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),input_name], null),true);
}
}));
var remove_item_BANG_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (item){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(items,(function (p1__73416_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (x){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(x,item);
})),p1__73416_SHARP_);
}));
}));
var manage_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (item,event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (remove_item_BANG_.cljs$core$IFn$_invoke$arity$1 ? remove_item_BANG_.cljs$core$IFn$_invoke$arity$1(item) : remove_item_BANG_.call(null,item));
} else {
return null;
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(result),rumext.v2.adapt(cljs.core.deref(value))],(function (){
var val = (function (){var G__73427 = cljs.core.deref(value);
if(cljs.core.truth_(trim)){
return cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(G__73427);
} else {
return G__73427;
}
})();
var values = app.main.ui.components.forms.conj_dedup(result,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"text","text",-1790561697),val,new cljs.core.Keyword(null,"valid","valid",155614240),(valid_item_fn.cljs$core$IFn$_invoke$arity$1 ? valid_item_fn.cljs$core$IFn$_invoke$arity$1(val) : valid_item_fn.call(null,val))], null));
var values__$1 = cljs.core.filterv((function (p1__73417_SHARP_){
return new cljs.core.Keyword(null,"valid","valid",155614240).cljs$core$IFn$_invoke$arity$1(p1__73417_SHARP_);
}),values);
return (update_form_BANG_.cljs$core$IFn$_invoke$arity$1 ? update_form_BANG_.cljs$core$IFn$_invoke$arity$1(values__$1) : update_form_BANG_.call(null,values__$1));
}));

return rumext.v2.jsxs("div",{'className':klass,'children':[rumext.v2.jsx("input",{'onChange':on_change,'className':in_klass,'placeholder':((empty_QMARK_)?label:null),'id':(name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(input_name) : name.call(null,input_name)),'value':cljs.core.deref(value),'onFocus':on_focus,'onBlur':on_blur,'type':"text",'onKeyDown':on_key_down,'autoFocus':auto_focus_QMARK_}),rumext.v2.jsx("label",{'htmlFor':(name.cljs$core$IFn$_invoke$arity$1 ? name.cljs$core$IFn$_invoke$arity$1(input_name) : name.call(null,input_name)),'children':label}),(function (){var temp__5825__auto__ = cljs.core.seq(cljs.core.deref(items));
if(temp__5825__auto__){
var items__$1 = temp__5825__auto__;
return rumext.v2.jsx("div",{'className':"main_ui_components_forms__selected-items",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,item){
out_arr__46744__auto__.push(rumext.v2.jsx("div",{'tabIndex':"0",'onKeyDown':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(manage_key_down,item),'className':"main_ui_components_forms__selected-item",'children':rumext.v2.jsxs("span",{'className':"main_ui_components_forms__around"+" "+((cljs.core.not(new cljs.core.Keyword(null,"valid","valid",155614240).cljs$core$IFn$_invoke$arity$1(item)))?"main_ui_components_forms__invalid":"")+" "+(cljs.core.truth_(new cljs.core.Keyword(null,"caution","caution",1823615934).cljs$core$IFn$_invoke$arity$1(item))?"main_ui_components_forms__caution":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_components_forms__text",'children':new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(item)}),rumext.v2.jsx("button",{'onClick':(function (){
return (remove_item_BANG_.cljs$core$IFn$_invoke$arity$1 ? remove_item_BANG_.cljs$core$IFn$_invoke$arity$1(item) : remove_item_BANG_.call(null,item));
}),'className':"main_ui_components_forms__icon",'children':app.main.ui.icons.close})]})},new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(item)));

return out_arr__46744__auto__;
}),[],items__$1)});
} else {
return null;
}
})()]});
});

(app.main.ui.components.forms.multi_input.displayName = "multi-input");


//# sourceMappingURL=app.main.ui.components.forms.js.map
