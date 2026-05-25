import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.files.tokens.js";
import "./app.common.schema.js";
import "./app.common.types.token.js";
import "./app.main.data.workspace.tokens.errors.js";
import "./app.main.ui.workspace.tokens.management.forms.controls.js";
import "./app.main.ui.workspace.tokens.management.forms.generic_form.js";
import "./app.main.ui.workspace.tokens.management.forms.validators.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.management.forms.font_family');
app.main.ui.workspace.tokens.management.forms.font_family.check_font_family_token_self_reference = (function app$main$ui$workspace$tokens$management$forms$font_family$check_font_family_token_self_reference(token){
return app.main.ui.workspace.tokens.management.forms.validators.check_coll_self_reference(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token));
});
app.main.ui.workspace.tokens.management.forms.font_family.validate_font_family_token = (function app$main$ui$workspace$tokens$management$forms$font_family$validate_font_family_token(props){
return app.main.ui.workspace.tokens.management.forms.validators.default_validate_token(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"token-value","token-value",1433419008),app.common.types.token.split_font_family),new cljs.core.Keyword(null,"validators","validators",-1973346672),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(function (token){
if(cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token))){
return app.main.data.workspace.tokens.errors.get_error_code(new cljs.core.Keyword("error.token","empty-input","error.token/empty-input",-1506425915));
} else {
return null;
}
}),app.main.ui.workspace.tokens.management.forms.font_family.check_font_family_token_self_reference], null)));
});
app.main.ui.workspace.tokens.management.forms.font_family.form_STAR_ = (function app$main$ui$workspace$tokens$management$forms$font_family$form_STAR_(props_56500){
var token = undefined;
var token_type = undefined;
var props = undefined;
var {"token": token, "tokenType": token_type, ...props} = props_56500;

var token__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token)],(function (){
if(cljs.core.truth_(token)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(token,new cljs.core.Keyword(null,"value","value",305978217),app.common.types.token.join_font_family);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),token_type], null);
}
}));
var props__$1 = {...props, 'token':token__$1,'tokenType':token_type,'makeSchema':(function (p1__56499_SHARP_){
return app.common.schema.assoc_key.cljs$core$IFn$_invoke$arity$3(app.common.schema.dissoc_key(app.common.files.tokens.make_token_schema(p1__56499_SHARP_,token_type),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"value","value",305978217),app.common.files.tokens.schema_COLON_token_value_generic);
}),'validator':app.main.ui.workspace.tokens.management.forms.font_family.validate_font_family_token,'inputComponent':app.main.ui.workspace.tokens.management.forms.controls.fonts_combobox_STAR_};
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.generic_form.form_STAR_,props__$1);
});

(app.main.ui.workspace.tokens.management.forms.font_family.form_STAR_.displayName = "form*");


//# sourceMappingURL=app.main.ui.workspace.tokens.management.forms.font_family.js.map
