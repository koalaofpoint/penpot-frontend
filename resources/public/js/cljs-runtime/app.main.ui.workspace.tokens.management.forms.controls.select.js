import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.ds.controls.select.js";
import "./app.main.ui.forms.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.management.forms.controls.select');
app.main.ui.workspace.tokens.management.forms.controls.select.select_indexed_STAR_ = (function app$main$ui$workspace$tokens$management$forms$controls$select$select_indexed_STAR_(props_79686){
var index = undefined;
var name = undefined;
var indexed_type = undefined;
var props = undefined;
var {"name": name, "index": index, "indexedType": indexed_type, ...props} = props_79686;

var form = rumext.v2.use_ctx(app.main.ui.forms.context);
var input_name = name;
var value = cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(cljs.core.deref(form),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),indexed_type,index,input_name], null),false);
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(input_name)],(function (id){
var is_inner_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,"inner");
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"value","value",305978217),indexed_type,index,input_name], null),is_inner_QMARK_);
}));
var props__$1 = {...props, 'defaultSelected':(cljs.core.truth_(value)?"inner":"drop"),'variant':"ghost",'onChange':on_change};
return rumext.v2.create_element(app.main.ui.ds.controls.select.select_STAR_,props__$1);
});

(app.main.ui.workspace.tokens.management.forms.controls.select.select_indexed_STAR_.displayName = "select-indexed*");


//# sourceMappingURL=app.main.ui.workspace.tokens.management.forms.controls.select.js.map
