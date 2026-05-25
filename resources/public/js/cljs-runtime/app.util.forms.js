import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.schema.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
import "./malli.core.js";
import "./rumext.v2.js";
goog.provide('app.util.forms');
app.util.forms.translate_code = (function app$util$forms$translate_code(code){
if(cljs.core.vector_QMARK_(code)){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(code,(0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(code,(1)))], 0));
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1(code);
}
});
app.util.forms.handle_error_fn = (function app$util$forms$handle_error_fn(props,problem){
var v_fn = new cljs.core.Keyword("error","fn","error/fn",-1263293860).cljs$core$IFn$_invoke$arity$1(props);
var result = (v_fn.cljs$core$IFn$_invoke$arity$1 ? v_fn.cljs$core$IFn$_invoke$arity$1(problem) : v_fn.call(null,problem));
if(typeof result === 'string'){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),result], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),(function (){var or__5025__auto__ = (function (){var G__73363 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword(null,"code","code",1586293142));
if((G__73363 == null)){
return null;
} else {
return app.util.forms.translate_code(G__73363);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(result,new cljs.core.Keyword(null,"message","message",-406056002));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.invalid-data");
}
}
})()], null);
}
});
app.util.forms.handle_error_message = (function app$util$forms$handle_error_message(props){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword("error","message","error/message",-502809098))], null);
});
app.util.forms.handle_error_code = (function app$util$forms$handle_error_code(props){
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(props,new cljs.core.Keyword("error","code","error/code",-1740032098));
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),app.util.forms.translate_code(code)], null);
});
app.util.forms.interpret_schema_problem = (function app$util$forms$interpret_schema_problem(acc,p__73364){
var map__73365 = p__73364;
var map__73365__$1 = cljs.core.__destructure_map(map__73365);
var problem = map__73365__$1;
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73365__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var in$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73365__$1,new cljs.core.Keyword(null,"in","in",-1531184865));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73365__$1,new cljs.core.Keyword(null,"value","value",305978217));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73365__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var props = malli.core.properties.cljs$core$IFn$_invoke$arity$1(schema);
var tprops = malli.core.type_properties.cljs$core$IFn$_invoke$arity$1(schema);
var field = (function (){var or__5025__auto__ = new cljs.core.Keyword("error","field","error/field",-1330531468).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return in$;
}
})();
var field__$1 = ((cljs.core.vector_QMARK_(field))?field:new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [field], null));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(field__$1))) && (cljs.core.contains_QMARK_(acc,cljs.core.first(field__$1))))){
return acc;
} else {
if((((field__$1 == null)) || (cljs.core.empty_QMARK_(field__$1)))){
return acc;
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword("malli.core","missing-key","malli.core/missing-key",1439107666))) || ((value == null)))){
return cljs.core.assoc_in(acc,field__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.field-missing")], null));
} else {
if(cljs.core.contains_QMARK_(props,new cljs.core.Keyword("error","fn","error/fn",-1263293860))){
return cljs.core.assoc_in(acc,field__$1,app.util.forms.handle_error_fn(props,problem));
} else {
if(cljs.core.contains_QMARK_(props,new cljs.core.Keyword("error","message","error/message",-502809098))){
return cljs.core.assoc_in(acc,field__$1,app.util.forms.handle_error_message(props));
} else {
if(cljs.core.contains_QMARK_(props,new cljs.core.Keyword("error","code","error/code",-1740032098))){
return cljs.core.assoc_in(acc,field__$1,app.util.forms.handle_error_code(props));
} else {
if(cljs.core.contains_QMARK_(tprops,new cljs.core.Keyword("error","fn","error/fn",-1263293860))){
return cljs.core.assoc_in(acc,field__$1,app.util.forms.handle_error_fn(tprops,problem));
} else {
if(cljs.core.contains_QMARK_(tprops,new cljs.core.Keyword("error","message","error/message",-502809098))){
return cljs.core.assoc_in(acc,field__$1,app.util.forms.handle_error_message(tprops));
} else {
if(cljs.core.contains_QMARK_(tprops,new cljs.core.Keyword("error","code","error/code",-1740032098))){
return cljs.core.assoc_in(acc,field__$1,app.util.forms.handle_error_code(tprops));
} else {
return cljs.core.assoc_in(acc,field__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.invalid-data")], null));

}
}
}
}
}
}
}
}
}
});
app.util.forms.use_rerender_fn = (function app$util$forms$use_rerender_fn(){
var state = rumext.v2.useState((0));
var render_fn = (state[(1)]);
return rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(render_fn)],(function (){
return (render_fn.cljs$core$IFn$_invoke$arity$1 ? render_fn.cljs$core$IFn$_invoke$arity$1(cljs.core.inc) : render_fn.call(null,cljs.core.inc));
}));
});
app.util.forms.apply_validators = (function app$util$forms$apply_validators(validators,state,errors){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (errors__$1,validator_fn){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([errors__$1,(function (){var G__73367 = errors__$1;
var G__73368 = new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(state);
return (validator_fn.cljs$core$IFn$_invoke$arity$2 ? validator_fn.cljs$core$IFn$_invoke$arity$2(G__73367,G__73368) : validator_fn.call(null,G__73367,G__73368));
})()], 0));
}),errors,validators);
});
app.util.forms.collect_schema_errors = (function app$util$forms$collect_schema_errors(schema,validators,state){
var explain = app.common.schema.explain(schema,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(state));
var errors = app.util.forms.apply_validators(validators,state,cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.util.forms.interpret_schema_problem,cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(explain)));
return cljs.core.not_empty(app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(state),errors], 0))));
});
app.util.forms.wrap_update_schema_fn = (function app$util$forms$wrap_update_schema_fn(f,p__73369){
var map__73370 = p__73369;
var map__73370__$1 = cljs.core.__destructure_map(map__73370);
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73370__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var validators = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73370__$1,new cljs.core.Keyword(null,"validators","validators",-1973346672));
return (function() { 
var G__73390__delegate = function (args){
var state = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(f,args);
var cleaned = app.common.schema.decode.cljs$core$IFn$_invoke$arity$3(schema,new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(state),app.common.schema.json_transformer);
var valid_QMARK_ = app.common.schema.validate(schema,cleaned);
var errors = (cljs.core.truth_(valid_QMARK_)?null:app.util.forms.collect_schema_errors(schema,validators,state));
var extra_errors = cljs.core.not_empty(new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434).cljs$core$IFn$_invoke$arity$1(state));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"errors","errors",-908790718),errors,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"clean-data","clean-data",1601974651),(cljs.core.truth_(valid_QMARK_)?cleaned:null),new cljs.core.Keyword(null,"valid","valid",155614240),(function (){var and__5023__auto__ = cljs.core.not(errors);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.not(extra_errors);
if(and__5023__auto____$1){
return valid_QMARK_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})()], 0));
};
var G__73390 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__73392__i = 0, G__73392__a = new Array(arguments.length -  0);
while (G__73392__i < G__73392__a.length) {G__73392__a[G__73392__i] = arguments[G__73392__i + 0]; ++G__73392__i;}
  args = new cljs.core.IndexedSeq(G__73392__a,0,null);
} 
return G__73390__delegate.call(this,args);};
G__73390.cljs$lang$maxFixedArity = 0;
G__73390.cljs$lang$applyTo = (function (arglist__73393){
var args = cljs.core.seq(arglist__73393);
return G__73390__delegate(args);
});
G__73390.cljs$core$IFn$_invoke$arity$variadic = G__73390__delegate;
return G__73390;
})()
;
});
app.util.forms.make_initial_state = (function app$util$forms$make_initial_state(initial_data){
var initial = ((cljs.core.fn_QMARK_(initial_data))?(initial_data.cljs$core$IFn$_invoke$arity$0 ? initial_data.cljs$core$IFn$_invoke$arity$0() : initial_data.call(null)):initial_data);
var initial__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(initial,cljs.core.PersistentArrayMap.EMPTY);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"initial","initial",1854648214),initial__$1,new cljs.core.Keyword(null,"data","data",-232669377),initial__$1,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"touched","touched",-609134419),cljs.core.PersistentArrayMap.EMPTY], null);
});

/**
* @constructor
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
app.util.forms.t_app$util$forms73372 = (function (internal_state,rerender_fn,wrap_update_fn,opts,meta73373){
this.internal_state = internal_state;
this.rerender_fn = rerender_fn;
this.wrap_update_fn = wrap_update_fn;
this.opts = opts;
this.meta73373 = meta73373;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 98304;
});
(app.util.forms.t_app$util$forms73372.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_73374,meta73373__$1){
var self__ = this;
var _73374__$1 = this;
return (new app.util.forms.t_app$util$forms73372(self__.internal_state,self__.rerender_fn,self__.wrap_update_fn,self__.opts,meta73373__$1));
}));

(app.util.forms.t_app$util$forms73372.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_73374){
var self__ = this;
var _73374__$1 = this;
return self__.meta73373;
}));

(app.util.forms.t_app$util$forms73372.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return rumext.v2.ref_val(self__.internal_state);
}));

(app.util.forms.t_app$util$forms73372.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (_,new_value){
var self__ = this;
var ___$1 = this;
if((new_value == null)){
var initial_73395 = app.util.forms.make_initial_state(cljs.core.get.cljs$core$IFn$_invoke$arity$2(rumext.v2.ref_val(self__.internal_state),new cljs.core.Keyword(null,"initial","initial",1854648214)));
rumext.v2.set_ref_val_BANG_(self__.internal_state,initial_73395);
} else {
rumext.v2.set_ref_val_BANG_(self__.internal_state,new_value);
}

return (self__.rerender_fn.cljs$core$IFn$_invoke$arity$0 ? self__.rerender_fn.cljs$core$IFn$_invoke$arity$0() : self__.rerender_fn.call(null));
}));

(app.util.forms.t_app$util$forms73372.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (_,f){
var self__ = this;
var ___$1 = this;
var f__$1 = (self__.wrap_update_fn.cljs$core$IFn$_invoke$arity$2 ? self__.wrap_update_fn.cljs$core$IFn$_invoke$arity$2(f,self__.opts) : self__.wrap_update_fn.call(null,f,self__.opts));
rumext.v2.set_ref_val_BANG_(self__.internal_state,(function (){var G__73376 = rumext.v2.ref_val(self__.internal_state);
return (f__$1.cljs$core$IFn$_invoke$arity$1 ? f__$1.cljs$core$IFn$_invoke$arity$1(G__73376) : f__$1.call(null,G__73376));
})());

return (self__.rerender_fn.cljs$core$IFn$_invoke$arity$0 ? self__.rerender_fn.cljs$core$IFn$_invoke$arity$0() : self__.rerender_fn.call(null));
}));

(app.util.forms.t_app$util$forms73372.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (_,f,x){
var self__ = this;
var ___$1 = this;
var f__$1 = (self__.wrap_update_fn.cljs$core$IFn$_invoke$arity$2 ? self__.wrap_update_fn.cljs$core$IFn$_invoke$arity$2(f,self__.opts) : self__.wrap_update_fn.call(null,f,self__.opts));
rumext.v2.set_ref_val_BANG_(self__.internal_state,(function (){var G__73377 = rumext.v2.ref_val(self__.internal_state);
var G__73378 = x;
return (f__$1.cljs$core$IFn$_invoke$arity$2 ? f__$1.cljs$core$IFn$_invoke$arity$2(G__73377,G__73378) : f__$1.call(null,G__73377,G__73378));
})());

return (self__.rerender_fn.cljs$core$IFn$_invoke$arity$0 ? self__.rerender_fn.cljs$core$IFn$_invoke$arity$0() : self__.rerender_fn.call(null));
}));

(app.util.forms.t_app$util$forms73372.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (_,f,x,y){
var self__ = this;
var ___$1 = this;
var f__$1 = (self__.wrap_update_fn.cljs$core$IFn$_invoke$arity$2 ? self__.wrap_update_fn.cljs$core$IFn$_invoke$arity$2(f,self__.opts) : self__.wrap_update_fn.call(null,f,self__.opts));
rumext.v2.set_ref_val_BANG_(self__.internal_state,(function (){var G__73379 = rumext.v2.ref_val(self__.internal_state);
var G__73380 = x;
var G__73381 = y;
return (f__$1.cljs$core$IFn$_invoke$arity$3 ? f__$1.cljs$core$IFn$_invoke$arity$3(G__73379,G__73380,G__73381) : f__$1.call(null,G__73379,G__73380,G__73381));
})());

return (self__.rerender_fn.cljs$core$IFn$_invoke$arity$0 ? self__.rerender_fn.cljs$core$IFn$_invoke$arity$0() : self__.rerender_fn.call(null));
}));

(app.util.forms.t_app$util$forms73372.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (_,f,x,y,more){
var self__ = this;
var ___$1 = this;
var f__$1 = (self__.wrap_update_fn.cljs$core$IFn$_invoke$arity$2 ? self__.wrap_update_fn.cljs$core$IFn$_invoke$arity$2(f,self__.opts) : self__.wrap_update_fn.call(null,f,self__.opts));
rumext.v2.set_ref_val_BANG_(self__.internal_state,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f__$1,rumext.v2.ref_val(self__.internal_state),x,y,more));

return (self__.rerender_fn.cljs$core$IFn$_invoke$arity$0 ? self__.rerender_fn.cljs$core$IFn$_invoke$arity$0() : self__.rerender_fn.call(null));
}));

(app.util.forms.t_app$util$forms73372.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"internal-state","internal-state",-1238410293,null),new cljs.core.Symbol(null,"rerender-fn","rerender-fn",780237048,null),new cljs.core.Symbol(null,"wrap-update-fn","wrap-update-fn",774367609,null),new cljs.core.Symbol(null,"opts","opts",1795607228,null),new cljs.core.Symbol(null,"meta73373","meta73373",1341449941,null)], null);
}));

(app.util.forms.t_app$util$forms73372.cljs$lang$type = true);

(app.util.forms.t_app$util$forms73372.cljs$lang$ctorStr = "app.util.forms/t_app$util$forms73372");

(app.util.forms.t_app$util$forms73372.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.util.forms/t_app$util$forms73372");
}));

/**
 * Positional factory function for app.util.forms/t_app$util$forms73372.
 */
app.util.forms.__GT_t_app$util$forms73372 = (function app$util$forms$__GT_t_app$util$forms73372(internal_state,rerender_fn,wrap_update_fn,opts,meta73373){
return (new app.util.forms.t_app$util$forms73372(internal_state,rerender_fn,wrap_update_fn,opts,meta73373));
});


app.util.forms.create_form_mutator = (function app$util$forms$create_form_mutator(internal_state,rerender_fn,wrap_update_fn,opts){
return (new app.util.forms.t_app$util$forms73372(internal_state,rerender_fn,wrap_update_fn,opts,cljs.core.PersistentArrayMap.EMPTY));
});
app.util.forms.use_form = (function app$util$forms$use_form(var_args){
var args__5755__auto__ = [];
var len__5749__auto___73398 = arguments.length;
var i__5750__auto___73399 = (0);
while(true){
if((i__5750__auto___73399 < len__5749__auto___73398)){
args__5755__auto__.push((arguments[i__5750__auto___73399]));

var G__73400 = (i__5750__auto___73399 + (1));
i__5750__auto___73399 = G__73400;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.util.forms.use_form.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.util.forms.use_form.cljs$core$IFn$_invoke$arity$variadic = (function (p__73383){
var map__73384 = p__73383;
var map__73384__$1 = cljs.core.__destructure_map(map__73384);
var opts = map__73384__$1;
var initial = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73384__$1,new cljs.core.Keyword(null,"initial","initial",1854648214));
var schema = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73384__$1,new cljs.core.Keyword(null,"schema","schema",-1582001791));
var validators = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73384__$1,new cljs.core.Keyword(null,"validators","validators",-1973346672));
var rerender_fn = app.util.forms.use_rerender_fn();
var initial__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(initial)],(function (){
return app.util.forms.make_initial_state(initial);
}));
var internal_state = rumext.v2.use_ref(initial__$1);
var form_mutator = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(schema),rumext.v2.adapt(validators)],(function (){
var mutator = app.util.forms.create_form_mutator(internal_state,rerender_fn,app.util.forms.wrap_update_schema_fn,cljs.core.select_keys(opts,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"schema","schema",-1582001791),new cljs.core.Keyword(null,"validators","validators",-1973346672)], null)));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(mutator,cljs.core.identity);

return mutator;
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return rumext.v2.set_ref_val_BANG_(internal_state,initial__$1);
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(initial__$1)],(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(form_mutator,app.common.data.deep_merge,initial__$1);
}));

return form_mutator;
}));

(app.util.forms.use_form.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.util.forms.use_form.cljs$lang$applyTo = (function (seq73382){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq73382));
}));

app.util.forms.on_input_change = (function app$util$forms$on_input_change(var_args){
var G__73386 = arguments.length;
switch (G__73386) {
case 3:
return app.util.forms.on_input_change.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.util.forms.on_input_change.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.forms.on_input_change.cljs$core$IFn$_invoke$arity$3 = (function (form,field,value){
return app.util.forms.on_input_change.cljs$core$IFn$_invoke$arity$4(form,field,value,false);
}));

(app.util.forms.on_input_change.cljs$core$IFn$_invoke$arity$4 = (function (form,field,value,trim_QMARK_){
var clean_errors = (function app$util$forms$clean_errors(errors){
return cljs.core.not_empty(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(errors,field));
});
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(form,(function (state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc_in(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),field], null),true),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),field], null),(cljs.core.truth_(trim_QMARK_)?cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(value):value)),new cljs.core.Keyword(null,"errors","errors",-908790718),clean_errors),new cljs.core.Keyword(null,"extra-errors","extra-errors",876684434),clean_errors);
}));
}));

(app.util.forms.on_input_change.cljs$lang$maxFixedArity = 4);

app.util.forms.update_input_value_BANG_ = (function app$util$forms$update_input_value_BANG_(form,field,value){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(form,(function (state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),field], null),value),new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.dissoc,field);
}));
});
app.util.forms.on_input_blur = (function app$util$forms$on_input_blur(form,field){
return (function (_){
var touched = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.Keyword(null,"touched","touched",-609134419));
if(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(touched,field))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"touched","touched",-609134419),field], null),true);
}
});
});
app.util.forms.error_class = (function app$util$forms$error_class(form,field){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Keyword(null,"errors","errors",-908790718)),field);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(form,new cljs.core.Keyword(null,"touched","touched",-609134419)),field);
} else {
return and__5023__auto__;
}
})())){
return "invalid";
} else {
return null;
}
});

//# sourceMappingURL=app.util.forms.js.map
