import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.data.workspace.tokens.library_edit.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.hooks.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.management.node_context_menu');
app.main.ui.workspace.tokens.management.node_context_menu.schema_COLON_token_node_context_menu = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-delete-node","on-delete-node",-26752319),cljs.core.fn_QMARK_], null)], null);
app.main.ui.workspace.tokens.management.node_context_menu.tokens_node_menu_ref = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token-node-context-menu","token-node-context-menu",-107694707),app.main.refs.workspace_tokens);
app.main.ui.workspace.tokens.management.node_context_menu.prevent_default = (function app$main$ui$workspace$tokens$management$node_context_menu$prevent_default(event){
app.util.dom.prevent_default(event);

return app.util.dom.stop_propagation(event);
});
app.main.ui.workspace.tokens.management.node_context_menu.token_node_context_menu_STAR__validator = rumext.v2.validation.validator(app.main.ui.workspace.tokens.management.node_context_menu.schema_COLON_token_node_context_menu);

app.main.ui.workspace.tokens.management.node_context_menu.token_node_context_menu_STAR_ = (function app$main$ui$workspace$tokens$management$node_context_menu$token_node_context_menu_STAR_(props_56279){
// ===== start props checking =====;

var res__35513__auto___56280 = app.main.ui.workspace.tokens.management.node_context_menu.token_node_context_menu_STAR__validator(props_56279);
if((!((res__35513__auto___56280 == null)))){
var items__35514__auto___56281 = cljs.core.reduce_kv((function (result__35515__auto__,k__35516__auto__,v__35517__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__35515__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__35516__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__35517__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__35513__auto___56280);
var msg__35518__auto___56282 = ["invalid props on component token-node-context-menu*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__35514__auto___56281),"\n"].join('');
throw (new Error(msg__35518__auto___56282));
} else {
}

// ===== end props checking =====;

var on_delete_node = props_56279.onDeleteNode;
var mdata = rumext.v2.deref(app.main.ui.workspace.tokens.management.node_context_menu.tokens_node_menu_ref);
var is_open_QMARK_ = cljs.core.boolean$(mdata);
var dropdown_ref = rumext.v2.use_ref();
var dropdown_action = rumext.v2.use_ref();
var dropdown_direction_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("down");
var dropdown_direction = cljs.core.deref(dropdown_direction_STAR_);
var dropdown_direction_change_STAR_ = rumext.v2.use_ref((0));
var top = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"y","y",-1757859776)], null)) + (5));
var left = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"x","x",2099068185)], null)) + (5));
var container = app.main.ui.hooks.use_portal_container.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"popup","popup",635890211));
var delete_node = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(mdata)],(function (){
var node = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mdata,new cljs.core.Keyword(null,"node","node",581201198));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mdata,new cljs.core.Keyword(null,"type","type",1174270348));
if(cljs.core.truth_(node)){
return (on_delete_node.cljs$core$IFn$_invoke$arity$2 ? on_delete_node.cljs$core$IFn$_invoke$arity$2(node,type) : on_delete_node.call(null,node,type));
} else {
return null;
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_open_QMARK_)],(function (){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),rumext.v2.ref_val(dropdown_direction_change_STAR_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,is_open_QMARK_)))){
cljs.core.reset_BANG_(dropdown_direction_STAR_,"down");

return rumext.v2.set_ref_val_BANG_(dropdown_direction_change_STAR_,(0));
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_open_QMARK_),rumext.v2.adapt(dropdown_ref),rumext.v2.adapt(dropdown_action)],(function (){
var dropdown_element = rumext.v2.ref_val(dropdown_ref);
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),rumext.v2.ref_val(dropdown_direction_change_STAR_));
if(and__5023__auto__){
return dropdown_element;
} else {
return and__5023__auto__;
}
})())){
var is_outside_QMARK_ = app.util.dom.is_element_outside_QMARK_(dropdown_element);
cljs.core.reset_BANG_(dropdown_direction_STAR_,((is_outside_QMARK_)?"up":"down"));

return rumext.v2.set_ref_val_BANG_(dropdown_direction_change_STAR_,(rumext.v2.ref_val(dropdown_direction_change_STAR_) + (1)));
} else {
return null;
}
}));

if(is_open_QMARK_){
return rumext.v2.portal(rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':is_open_QMARK_,'on-close':(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.assign_token_node_context_menu(null));
}),'children':rumext.v2.jsx("div",{'data-testid':"tokens-context-menu-for-token-node",'ref':dropdown_ref,'data-direction':dropdown_direction,'style':{'--bottom':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dropdown_direction,"up"))?"40px":"unset"),'--top':""+(top ?? "")+"px",'left':""+(left ?? "")+"px"},'onContextMenu':app.main.ui.workspace.tokens.management.node_context_menu.prevent_default,'className':"main_ui_workspace_tokens_management_node_context_menu__token-node-context-menu",'children':(cljs.core.truth_(mdata)?rumext.v2.jsx("ul",{'className':"main_ui_workspace_tokens_management_node_context_menu__token-node-context-menu-list",'children':rumext.v2.jsx("li",{'className':"main_ui_workspace_tokens_management_node_context_menu__token-node-context-menu-listitem",'children':rumext.v2.jsx("button",{'type':"button",'onClick':delete_node,'className':"main_ui_workspace_tokens_management_node_context_menu__token-node-context-menu-action",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.delete")})})}):null)})}),container);
} else {
return null;
}
});

(app.main.ui.workspace.tokens.management.node_context_menu.token_node_context_menu_STAR_.displayName = "token-node-context-menu*");


//# sourceMappingURL=app.main.ui.workspace.tokens.management.node_context_menu.js.map
