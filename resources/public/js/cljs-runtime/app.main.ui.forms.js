import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.ds.controls.input.js";
import "./app.util.dom.js";
import "./app.util.forms.js";
import "./app.util.keyboard.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.forms');
app.main.ui.forms.context = rumext.v2.create_context(null);
app.main.ui.forms.form_input_STAR_ = (function app$main$ui$forms$form_input_STAR_(props_79630){
var name = undefined;
var trim = undefined;
var props = undefined;
var {"name": name, "trim": trim, ...props} = props_79630;

var form = rumext.v2.use_ctx(app.main.ui.forms.context);
var input_name = name;
var touched_QMARK_ = (function (){var and__5023__auto__ = cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)),input_name);
if(and__5023__auto__){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),input_name], null));
} else {
return and__5023__auto__;
}
})();
var error = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),input_name], null));
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),input_name], null),"");
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(input_name)],(function (event){
var value__$1 = app.util.dom.get_input_value(app.util.dom.get_target(event));
return app.util.forms.on_input_change.cljs$core$IFn$_invoke$arity$4(form,input_name,value__$1,trim);
}));
var props__$1 = {...props, 'onChange':on_change,'value':value};
var props__$2 = (cljs.core.truth_((function (){var and__5023__auto__ = error;
if(cljs.core.truth_(and__5023__auto__)){
return touched_QMARK_;
} else {
return and__5023__auto__;
}
})())?{...props__$1, 'hintType':"error",'hintMessage':new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(error)}:props__$1);
return rumext.v2.create_element(app.main.ui.ds.controls.input.input_STAR_,props__$2);
});

(app.main.ui.forms.form_input_STAR_.displayName = "form-input*");

app.main.ui.forms.form_submit_STAR_ = (function app$main$ui$forms$form_submit_STAR_(props_79631){
var disabled = undefined;
var on_submit = undefined;
var props = undefined;
var {"disabled": disabled, "onSubmit": on_submit, ...props} = props_79631;

var form = rumext.v2.use_ctx(app.main.ui.forms.context);
var disabled_QMARK_ = (((((!((form == null)))) && (((cljs.core.not(new cljs.core.Keyword(null,"valid","valid",155614240).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))) || (((cljs.core.seq(new cljs.core.Keyword(null,"async-errors","async-errors",-1865115559).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))) || (cljs.core.seq(new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))))))))) || (disabled === true));
var handle_key_down_save = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_submit),rumext.v2.adapt(form)],(function (e){
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.keyboard.enter_QMARK_(e);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.keyboard.space_QMARK_(e);
}
})())){
app.util.dom.prevent_default(e);

return (on_submit.cljs$core$IFn$_invoke$arity$2 ? on_submit.cljs$core$IFn$_invoke$arity$2(form,e) : on_submit.call(null,form,e));
} else {
return null;
}
}));
var props__$1 = {...props, 'disabled':disabled_QMARK_,'onKeyDown':handle_key_down_save,'type':"submit"};
return rumext.v2.create_element(app.main.ui.ds.buttons.button.button_STAR_,props__$1);
});

(app.main.ui.forms.form_submit_STAR_.displayName = "form-submit*");

app.main.ui.forms.form_STAR_ = (function app$main$ui$forms$form_STAR_(props_79633){
var form = props_79633.form;
var children = props_79633.children;
var class$ = props_79633.className;
var on_submit = props_79633.onSubmit;
var on_submit_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_submit)],(function (event){
app.util.dom.prevent_default(event);

if(cljs.core.fn_QMARK_(on_submit)){
return (on_submit.cljs$core$IFn$_invoke$arity$2 ? on_submit.cljs$core$IFn$_invoke$arity$2(form,event) : on_submit.call(null,form,event));
} else {
return null;
}
}));
return rumext.v2.jsx(rumext.v2.provider(app.main.ui.forms.context),{'value':form,'children':rumext.v2.jsx("form",{'onSubmit':on_submit_SINGLEQUOTE_,'className':class$,'children':children})});
});

(app.main.ui.forms.form_STAR_.displayName = "form*");


//# sourceMappingURL=app.main.ui.forms.js.map
