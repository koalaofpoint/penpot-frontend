import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.path_names.js";
import "./app.common.types.tokens_lib.js";
import "./app.main.data.workspace.tokens.library_edit.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.ds.layers.layer_button.js";
import "./app.main.ui.workspace.tokens.management.token_pill.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.management.token_tree');
app.main.ui.workspace.tokens.management.token_tree.schema_COLON_folder_node = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"node","node",581201198),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unfolded-token-paths","unfolded-token-paths",606197446),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-shapes","selected-shapes",-40235010),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-selected-inside-layout","is-selected-inside-layout",-932422043),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-theme-tokens","active-theme-tokens",835284954),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-token-set-id","selected-token-set-id",-1828640116),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-token-pill-click","on-token-pill-click",1393163883),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-pill-context-menu","on-pill-context-menu",-1219350799),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-node-context-menu","on-node-context-menu",-1095478030),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null)], null);
app.main.ui.workspace.tokens.management.token_tree.folder_node_STAR__validator = rumext.v2.validation.validator(app.main.ui.workspace.tokens.management.token_tree.schema_COLON_folder_node);

app.main.ui.workspace.tokens.management.token_tree.folder_node_STAR_ = (function app$main$ui$workspace$tokens$management$token_tree$folder_node_STAR_(props_56263){
// ===== start props checking =====;

var res__35513__auto___56265 = app.main.ui.workspace.tokens.management.token_tree.folder_node_STAR__validator(props_56263);
if((!((res__35513__auto___56265 == null)))){
var items__35514__auto___56266 = cljs.core.reduce_kv((function (result__35515__auto__,k__35516__auto__,v__35517__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__35515__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__35516__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__35517__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__35513__auto___56265);
var msg__35518__auto___56267 = ["invalid props on component folder-node*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__35514__auto___56266),"\n"].join('');
throw (new Error(msg__35518__auto___56267));
} else {
}

// ===== end props checking =====;

var active_theme_tokens = props_56263.activeThemeTokens;
var selected_shapes = props_56263.selectedShapes;
var is_selected_inside_layout = props_56263.isSelectedInsideLayout;
var unfolded_token_paths = props_56263.unfoldedTokenPaths;
var on_token_pill_click = props_56263.onTokenPillClick;
var selected_token_set_id = props_56263.selectedTokenSetId;
var type = props_56263.type;
var node = props_56263.node;
var on_pill_context_menu = props_56263.onPillContextMenu;
var on_node_context_menu = props_56263.onNodeContextMenu;
var tokens_lib = props_56263.tokensLib;
var full_path = [cljs.core.name(type),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(node))].join('');
var is_folder_expanded = cljs.core.contains_QMARK_(cljs.core.set((function (){var or__5025__auto__ = unfolded_token_paths;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})()),full_path);
var swap_folder_expanded = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(node)),rumext.v2.adapt(type)],(function (){
var path = [cljs.core.name(type),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(node))].join('');
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.toggle_token_path(path));
}));
var node_context_menu_prep = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_node_context_menu),rumext.v2.adapt(node)],(function (event){
if(cljs.core.truth_(on_node_context_menu)){
return (on_node_context_menu.cljs$core$IFn$_invoke$arity$2 ? on_node_context_menu.cljs$core$IFn$_invoke$arity$2(event,node) : on_node_context_menu.call(null,event,node));
} else {
return null;
}
}));
return rumext.v2.jsxs("li",{'className':"main_ui_workspace_tokens_management_token_tree__folder-node",'children':[rumext.v2.jsx(app.main.ui.ds.layers.layer_button.layer_button_STAR_,{'label':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(node),'expanded':is_folder_expanded,'aria-expanded':is_folder_expanded,'aria-controls':["folder-children-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(node))].join(''),'isExpandable':cljs.core.not(new cljs.core.Keyword(null,"leaf","leaf",1306118732).cljs$core$IFn$_invoke$arity$1(node)),'onToggleExpand':swap_folder_expanded,'onContextMenu':node_context_menu_prep}),((is_folder_expanded)?(function (){var children_fn = new cljs.core.Keyword(null,"children-fn","children-fn",-1407047987).cljs$core$IFn$_invoke$arity$1(node);
return rumext.v2.jsx("div",{'id':["folder-children-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(node))].join(''),'className':"main_ui_workspace_tokens_management_token_tree__folder-children-wrapper",'children':(cljs.core.truth_(children_fn)?(function (){var children = (children_fn.cljs$core$IFn$_invoke$arity$0 ? children_fn.cljs$core$IFn$_invoke$arity$0() : children_fn.call(null));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,child){
out_arr__35152__auto__.push(((cljs.core.not(new cljs.core.Keyword(null,"leaf","leaf",1306118732).cljs$core$IFn$_invoke$arity$1(child)))?rumext.v2.jsx("ul",{'className':"main_ui_workspace_tokens_management_token_tree__node-parent",'children':rumext.v2.jsx(app$main$ui$workspace$tokens$management$token_tree$folder_node_STAR_,{'tokensLib':tokens_lib,'onPillContextMenu':on_pill_context_menu,'onTokenPillClick':on_token_pill_click,'onNodeContextMenu':on_node_context_menu,'isSelectedInsideLayout':is_selected_inside_layout,'unfoldedTokenPaths':unfolded_token_paths,'type':type,'activeThemeTokens':active_theme_tokens,'selectedShapes':selected_shapes,'selectedTokenSetId':selected_token_set_id,'node':child})},new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(child)):(function (){var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"leaf","leaf",1306118732).cljs$core$IFn$_invoke$arity$1(child));
var token = app.common.types.tokens_lib.get_token(tokens_lib,selected_token_set_id,id);
return rumext.v2.jsx(app.main.ui.workspace.tokens.management.token_pill.token_pill_STAR_,{'token':token,'selectedShapes':selected_shapes,'isSelectedInsideLayout':is_selected_inside_layout,'activeThemeTokens':active_theme_tokens,'onClick':on_token_pill_click,'onContextMenu':on_pill_context_menu},id);
})()));

return out_arr__35152__auto__;
}),[],children);
})():null)});
})():null)]});
});

(app.main.ui.workspace.tokens.management.token_tree.folder_node_STAR_.displayName = "folder-node*");

app.main.ui.workspace.tokens.management.token_tree.schema_COLON_token_tree = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"unfolded-token-paths","unfolded-token-paths",606197446),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-shapes","selected-shapes",-40235010),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-selected-inside-layout","is-selected-inside-layout",-932422043),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-theme-tokens","active-theme-tokens",835284954),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-token-set-id","selected-token-set-id",-1828640116),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-token-pill-click","on-token-pill-click",1393163883),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-pill-context-menu","on-pill-context-menu",-1219350799),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-node-context-menu","on-node-context-menu",-1095478030),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null)], null);
app.main.ui.workspace.tokens.management.token_tree.token_tree_STAR__validator = rumext.v2.validation.validator(app.main.ui.workspace.tokens.management.token_tree.schema_COLON_token_tree);

app.main.ui.workspace.tokens.management.token_tree.token_tree_STAR_ = (function app$main$ui$workspace$tokens$management$token_tree$token_tree_STAR_(props_56264){
// ===== start props checking =====;

var res__35513__auto___56268 = app.main.ui.workspace.tokens.management.token_tree.token_tree_STAR__validator(props_56264);
if((!((res__35513__auto___56268 == null)))){
var items__35514__auto___56269 = cljs.core.reduce_kv((function (result__35515__auto__,k__35516__auto__,v__35517__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__35515__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__35516__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__35517__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__35513__auto___56268);
var msg__35518__auto___56270 = ["invalid props on component token-tree*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__35514__auto___56269),"\n"].join('');
throw (new Error(msg__35518__auto___56270));
} else {
}

// ===== end props checking =====;

var active_theme_tokens = props_56264.activeThemeTokens;
var selected_shapes = props_56264.selectedShapes;
var is_selected_inside_layout = props_56264.isSelectedInsideLayout;
var unfolded_token_paths = props_56264.unfoldedTokenPaths;
var on_token_pill_click = props_56264.onTokenPillClick;
var selected_token_set_id = props_56264.selectedTokenSetId;
var type = props_56264.type;
var on_pill_context_menu = props_56264.onPillContextMenu;
var on_node_context_menu = props_56264.onNodeContextMenu;
var tokens_lib = props_56264.tokensLib;
var tokens = props_56264.tokens;
var separator = ".";
var tree = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens)],(function (){
return app.common.path_names.build_tree_root(tokens,separator);
}));
var can_edit_QMARK_ = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.refs.permissions));
var on_node_context_menu__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(can_edit_QMARK_),rumext.v2.adapt(on_node_context_menu)],(function (event,node){
if(cljs.core.truth_(can_edit_QMARK_)){
return (on_node_context_menu.cljs$core$IFn$_invoke$arity$2 ? on_node_context_menu.cljs$core$IFn$_invoke$arity$2(event,node) : on_node_context_menu.call(null,event,node));
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_management_token_tree__token-tree-wrapper",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,node){
out_arr__35152__auto__.push((cljs.core.truth_(new cljs.core.Keyword(null,"leaf","leaf",1306118732).cljs$core$IFn$_invoke$arity$1(node))?(function (){var token = app.common.types.tokens_lib.get_token(tokens_lib,selected_token_set_id,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(node,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"leaf","leaf",1306118732),new cljs.core.Keyword(null,"id","id",-1388402092)], null)));
return rumext.v2.jsx(app.main.ui.workspace.tokens.management.token_pill.token_pill_STAR_,{'token':token,'selectedShapes':selected_shapes,'isSelectedInsideLayout':is_selected_inside_layout,'activeThemeTokens':active_theme_tokens,'onClick':on_token_pill_click,'onContextMenu':on_pill_context_menu},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"leaf","leaf",1306118732).cljs$core$IFn$_invoke$arity$1(node)));
})():rumext.v2.jsx("ul",{'className':"main_ui_workspace_tokens_management_token_tree__node-parent",'children':rumext.v2.jsx(app.main.ui.workspace.tokens.management.token_tree.folder_node_STAR_,{'tokensLib':tokens_lib,'onPillContextMenu':on_pill_context_menu,'onTokenPillClick':on_token_pill_click,'onNodeContextMenu':on_node_context_menu__$1,'isSelectedInsideLayout':is_selected_inside_layout,'unfoldedTokenPaths':unfolded_token_paths,'type':type,'activeThemeTokens':active_theme_tokens,'selectedShapes':selected_shapes,'selectedTokenSetId':selected_token_set_id,'node':node})},new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(node))));

return out_arr__35152__auto__;
}),[],tree)});
});

(app.main.ui.workspace.tokens.management.token_tree.token_tree_STAR_.displayName = "token-tree*");


//# sourceMappingURL=app.main.ui.workspace.tokens.management.token_tree.js.map
