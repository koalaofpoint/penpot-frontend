import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.types.tokens_lib.js";
import "./app.main.refs.js";
import "./app.main.ui.workspace.tokens.management.forms.color.js";
import "./app.main.ui.workspace.tokens.management.forms.font_family.js";
import "./app.main.ui.workspace.tokens.management.forms.generic_form.js";
import "./app.main.ui.workspace.tokens.management.forms.shadow.js";
import "./app.main.ui.workspace.tokens.management.forms.typography.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.management.forms.form_container');
app.main.ui.workspace.tokens.management.forms.form_container.form_container_STAR_ = (function app$main$ui$workspace$tokens$management$forms$form_container$form_container_STAR_(props_56552){
var token = undefined;
var token_type = undefined;
var props = undefined;
var {"token": token, "tokenType": token_type, ...props} = props_56552;

var token_type__$1 = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return token_type;
}
})();
var tokens_in_selected_set = rumext.v2.deref(app.main.refs.workspace_all_tokens_in_selected_set);
var token_path = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token)],(function (){
return app.common.types.tokens_lib.get_token_path(token);
}));
var tokens_tree_in_selected_set = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token_path),rumext.v2.adapt(tokens_in_selected_set)],(function (){
return app.common.data.dissoc_in(app.common.types.tokens_lib.tokens_tree(tokens_in_selected_set),token_path);
}));
var props__$1 = {...props, 'tokenType':token_type__$1,'tokensTreeInSelectedSet':tokens_tree_in_selected_set,'token':token};
var text_case_props = {...props__$1, 'inputValuePlaceholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.text-case-value-enter")};
var text_decoration_props = {...props__$1, 'inputValuePlaceholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.text-decoration-value-enter")};
var font_weight_props = {...props__$1, 'inputValuePlaceholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.font-weight-value-enter")};
var G__56553 = token_type__$1;
var G__56553__$1 = (((G__56553 instanceof cljs.core.Keyword))?G__56553.fqn:null);
switch (G__56553__$1) {
case "color":
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.color.form_STAR_,props__$1);

break;
case "typography":
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.typography.form_STAR_,props__$1);

break;
case "shadow":
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.shadow.form_STAR_,props__$1);

break;
case "font-family":
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.font_family.form_STAR_,props__$1);

break;
case "text-case":
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.generic_form.form_STAR_,text_case_props);

break;
case "text-decoration":
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.generic_form.form_STAR_,text_decoration_props);

break;
case "font-weight":
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.generic_form.form_STAR_,font_weight_props);

break;
default:
return rumext.v2.create_element(app.main.ui.workspace.tokens.management.forms.generic_form.form_STAR_,props__$1);

}
});

(app.main.ui.workspace.tokens.management.forms.form_container.form_container_STAR_.displayName = "form-container*");


//# sourceMappingURL=app.main.ui.workspace.tokens.management.forms.form_container.js.map
