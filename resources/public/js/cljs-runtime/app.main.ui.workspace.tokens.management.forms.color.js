import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.files.tokens.js";
import "./app.common.schema.js";
import "./app.main.ui.workspace.tokens.management.forms.controls.js";
import "./app.main.ui.workspace.tokens.management.forms.generic_form.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.management.forms.color');
app.main.ui.workspace.tokens.management.forms.color.form_STAR_ = (function app$main$ui$workspace$tokens$management$forms$color$form_STAR_(props_56498){
var token = props_56498.token;
var token_type = props_56498.tokenType;
var props = props_56498;
var initial = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token_type),rumext.v2.adapt(token)],(function (){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),token_type,new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(token,""),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$2(token,""),new cljs.core.Keyword(null,"description","description",-1428560544),new cljs.core.Keyword(null,"description","description",-1428560544).cljs$core$IFn$_invoke$arity$2(token,""),new cljs.core.Keyword(null,"color-result","color-result",-859632008),""], null);
}));
var props__$1 = {...props, 'makeSchema':(function (p1__56497_SHARP_){
return app.common.schema.assoc_key.cljs$core$IFn$_invoke$arity$3(app.common.schema.dissoc_key(app.common.files.tokens.make_token_schema(p1__56497_SHARP_,token_type),new cljs.core.Keyword(null,"id","id",-1388402092)),new cljs.core.Keyword(null,"color-result","color-result",-859632008),new cljs.core.Keyword(null,"string","string",-1989541586));
}),'initial':initial,'inputComponent':app.main.ui.workspace.tokens.management.forms.controls.color_input_STAR_};
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.generic_form.form_STAR_,props__$1);
});

(app.main.ui.workspace.tokens.management.forms.color.form_STAR_.displayName = "form*");


//# sourceMappingURL=app.main.ui.workspace.tokens.management.forms.color.js.map
