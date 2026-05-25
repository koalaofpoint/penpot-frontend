import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.schema.js";
import "./app.common.types.token.js";
import "./app.common.types.tokens_lib.js";
import "./app.config.js";
import "./app.main.data.style_dictionary.js";
import "./app.main.data.tokenscript.js";
import "./app.main.data.workspace.tokens.errors.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
goog.provide('app.main.ui.workspace.tokens.management.forms.validators');
app.main.ui.workspace.tokens.management.forms.validators.check_empty_value = (function app$main$ui$workspace$tokens$management$forms$validators$check_empty_value(token){
var token_value = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.empty_QMARK_(cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(token_value))){
return app.main.data.workspace.tokens.errors.get_error_code(new cljs.core.Keyword("error.token","empty-input","error.token/empty-input",-1506425915));
} else {
return null;
}
});
app.main.ui.workspace.tokens.management.forms.validators.check_self_reference = (function app$main$ui$workspace$tokens$management$forms$validators$check_self_reference(token_name,token_value){
if(app.common.types.token.token_value_self_reference_QMARK_(token_name,token_value)){
return app.main.data.workspace.tokens.errors.get_error_code(new cljs.core.Keyword("error.token","direct-self-reference","error.token/direct-self-reference",1855619343));
} else {
return null;
}
});
app.main.ui.workspace.tokens.management.forms.validators.validate_resolve_token = (function app$main$ui$workspace$tokens$management$forms$validators$validate_resolve_token(token,prev_token,tokens){
var token__$1 = (function (){var G__79735 = token;
if(cljs.core.not(app.common.schema.valid_QMARK_(app.common.types.token.schema_COLON_token_name,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__79735,new cljs.core.Keyword(null,"name","name",1843675177),"__PENPOT__TOKEN__NAME__PLACEHOLDER__");
} else {
return G__79735;
}
})();
var tokens_SINGLEQUOTE_ = (function (){var G__79736 = tokens;
var G__79736__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token__$1),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prev_token)))?cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__79736,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prev_token)):G__79736);
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__79736__$1,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token__$1),(function (p1__79734_SHARP_){
return app.common.types.tokens_lib.make_token.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__79734_SHARP_,prev_token,token__$1], 0))], 0));
}));

})();
return beicon.v2.core.mapcat((function (resolved_tokens){
var resolved_token = (function (){var G__79737 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(resolved_tokens,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token__$1));
if(cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__79737,new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626),app.main.data.tokenscript.tokenscript_symbols__GT_penpot_unit);
} else {
return G__79737;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626).cljs$core$IFn$_invoke$arity$1(resolved_token))){
return beicon.v2.core.of(resolved_token);
} else {
return beicon.v2.core.throw$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),(function (){var or__5025__auto__ = cljs.core.seq(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(resolved_token));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.data.workspace.tokens.errors.get_error_code(new cljs.core.Keyword("error","unknown-error","error/unknown-error",843694167))], null);
}
})()], null));

}
}),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500)))?beicon.v2.core.of(app.main.data.tokenscript.resolve_tokens(tokens_SINGLEQUOTE_)):app.main.data.style_dictionary.resolve_tokens_interactive(tokens_SINGLEQUOTE_)));
});
app.main.ui.workspace.tokens.management.forms.validators.validate_token_with = (function app$main$ui$workspace$tokens$management$forms$validators$validate_token_with(token,validators){
var temp__5823__auto__ = cljs.core.some((function (validate){
return (validate.cljs$core$IFn$_invoke$arity$1 ? validate.cljs$core$IFn$_invoke$arity$1(token) : validate.call(null,token));
}),validators);
if(cljs.core.truth_(temp__5823__auto__)){
var error = temp__5823__auto__;
return beicon.v2.core.throw$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [error], null)], null));
} else {
return beicon.v2.core.of(token);
}
});
app.main.ui.workspace.tokens.management.forms.validators.default_validators = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.main.ui.workspace.tokens.management.forms.validators.check_empty_value,app.main.ui.workspace.tokens.management.forms.validators.check_self_reference], null);
/**
 * Validates a token by confirming a list of `validator` predicates and
 *   resolving the token using `tokens` with StyleDictionary.  Returns rx
 *   stream of either a valid resolved token or an errors map.
 * 
 *   Props:
 *   token-name, token-value, token-description: Values from the form inputs
 *   prev-token: The existing token currently being edited
 *   tokens: tokens map keyed by token-name
 *        Used to look up the editing token & resolving step.
 * 
 *   validators: A list of predicates that will be used to do simple validation on the unresolved token map.
 *            The validators get the token map as input and should either return:
 *              - An errors map .e.g: {:errors []}
 *              - nil (valid token predicate)
 *            Mostly used to do simple checks like invalidating empy token `:name`.
 *            Will default to `default-validators`.
 */
app.main.ui.workspace.tokens.management.forms.validators.default_validate_token = (function app$main$ui$workspace$tokens$management$forms$validators$default_validate_token(p__79740){
var map__79741 = p__79740;
var map__79741__$1 = cljs.core.__destructure_map(map__79741);
var token_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79741__$1,new cljs.core.Keyword(null,"token-name","token-name",1766556933));
var token_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79741__$1,new cljs.core.Keyword(null,"token-value","token-value",1433419008));
var token_description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79741__$1,new cljs.core.Keyword(null,"token-description","token-description",-1559156482));
var prev_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79741__$1,new cljs.core.Keyword(null,"prev-token","prev-token",2072559436));
var tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79741__$1,new cljs.core.Keyword(null,"tokens","tokens",-818939304));
var validators = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__79741__$1,new cljs.core.Keyword(null,"validators","validators",-1973346672),app.main.ui.workspace.tokens.management.forms.validators.default_validators);
var token = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),token_name,new cljs.core.Keyword(null,"value","value",305978217),token_value,new cljs.core.Keyword(null,"description","description",-1428560544),token_description], null));
return beicon.v2.core.mapcat((function (p1__79739_SHARP_){
return app.main.ui.workspace.tokens.management.forms.validators.validate_resolve_token(p1__79739_SHARP_,prev_token,tokens);
}),beicon.v2.core.mapcat((function (p1__79738_SHARP_){
return app.main.ui.workspace.tokens.management.forms.validators.validate_token_with(p1__79738_SHARP_,validators);
}),beicon.v2.core.of(token)));
});
/**
 * Invalidate a collection of `token-vals` for a self-refernce against `token-name`.,
 */
app.main.ui.workspace.tokens.management.forms.validators.check_coll_self_reference = (function app$main$ui$workspace$tokens$management$forms$validators$check_coll_self_reference(token_name,token_vals){
if(cljs.core.truth_(cljs.core.some((function (p1__79742_SHARP_){
return app.common.types.token.token_value_self_reference_QMARK_(token_name,p1__79742_SHARP_);
}),token_vals))){
return app.main.data.workspace.tokens.errors.get_error_code(new cljs.core.Keyword("error.token","direct-self-reference","error.token/direct-self-reference",1855619343));
} else {
return null;
}
});

//# sourceMappingURL=app.main.ui.workspace.tokens.management.forms.validators.js.map
