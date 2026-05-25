import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.types.tokens_lib.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.data.workspace.tokens.application.js";
import "./app.main.data.workspace.tokens.library_edit.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.layers.layer_button.js";
import "./app.main.ui.workspace.tokens.management.token_tree.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.management.group');
app.main.ui.workspace.tokens.management.group.ref_COLON_unfolded_token_paths = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.key(new cljs.core.Keyword(null,"unfolded-token-paths","unfolded-token-paths",606197446)),app.main.refs.workspace_tokens);
app.main.ui.workspace.tokens.management.group.token_section_icon = (function app$main$ui$workspace$tokens$management$group$token_section_icon(type){
var G__56271 = type;
var G__56271__$1 = (((G__56271 instanceof cljs.core.Keyword))?G__56271.fqn:null);
switch (G__56271__$1) {
case "border-radius":
return app.main.ui.ds.foundations.assets.icon.corner_radius;

break;
case "color":
return app.main.ui.ds.foundations.assets.icon.drop;

break;
case "boolean":
return app.main.ui.ds.foundations.assets.icon.boolean_difference;

break;
case "font-family":
return app.main.ui.ds.foundations.assets.icon.text_font_family;

break;
case "font-size":
return app.main.ui.ds.foundations.assets.icon.text_font_size;

break;
case "letter-spacing":
return app.main.ui.ds.foundations.assets.icon.text_letterspacing;

break;
case "text-case":
return app.main.ui.ds.foundations.assets.icon.text_mixed;

break;
case "text-decoration":
return app.main.ui.ds.foundations.assets.icon.text_underlined;

break;
case "font-weight":
return app.main.ui.ds.foundations.assets.icon.text_font_weight;

break;
case "typography":
return app.main.ui.ds.foundations.assets.icon.text_typography;

break;
case "opacity":
return app.main.ui.ds.foundations.assets.icon.percentage;

break;
case "number":
return app.main.ui.ds.foundations.assets.icon.number;

break;
case "rotation":
return app.main.ui.ds.foundations.assets.icon.rotation;

break;
case "spacing":
return app.main.ui.ds.foundations.assets.icon.padding_extended;

break;
case "string":
return app.main.ui.ds.foundations.assets.icon.text_mixed;

break;
case "stroke-width":
return app.main.ui.ds.foundations.assets.icon.stroke_size;

break;
case "dimensions":
return app.main.ui.ds.foundations.assets.icon.expand;

break;
case "sizing":
return app.main.ui.ds.foundations.assets.icon.expand;

break;
case "shadow":
return app.main.ui.ds.foundations.assets.icon.drop_shadow;

break;
default:
return "add";

}
});
app.main.ui.workspace.tokens.management.group.schema_COLON_token_group = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tokens","tokens",-818939304),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-shapes","selected-shapes",-40235010),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-selected-inside-layout","is-selected-inside-layout",-932422043),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"active-theme-tokens","active-theme-tokens",835284954),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"selected-token-set-id","selected-token-set-id",-1828640116),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-token-pill-click","on-token-pill-click",1393163883),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"on-context-menu","on-context-menu",-1330744340),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),cljs.core.fn_QMARK_], null)], null);
app.main.ui.workspace.tokens.management.group.token_group_STAR__validator = rumext.v2.validation.validator(app.main.ui.workspace.tokens.management.group.schema_COLON_token_group);

app.main.ui.workspace.tokens.management.group.token_group_STAR_ = (function app$main$ui$workspace$tokens$management$group$token_group_STAR_(props_56272){
// ===== start props checking =====;

var res__35513__auto___56276 = app.main.ui.workspace.tokens.management.group.token_group_STAR__validator(props_56272);
if((!((res__35513__auto___56276 == null)))){
var items__35514__auto___56277 = cljs.core.reduce_kv((function (result__35515__auto__,k__35516__auto__,v__35517__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__35515__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__35516__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__35517__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__35513__auto___56276);
var msg__35518__auto___56278 = ["invalid props on component token-group*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__35514__auto___56277),"\n"].join('');
throw (new Error(msg__35518__auto___56278));
} else {
}

// ===== end props checking =====;

var active_theme_tokens = props_56272.activeThemeTokens;
var selected_shapes = props_56272.selectedShapes;
var is_selected_inside_layout = props_56272.isSelectedInsideLayout;
var selected_token_set_id = props_56272.selectedTokenSetId;
var type = props_56272.type;
var selected_ids = props_56272.selectedIds;
var tokens_lib = props_56272.tokensLib;
var tokens = props_56272.tokens;
var map__56273 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.tokens.application.token_properties,type);
var map__56273__$1 = cljs.core.__destructure_map(map__56273);
var modal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56273__$1,new cljs.core.Keyword(null,"modal","modal",-1031880850));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56273__$1,new cljs.core.Keyword(null,"title","title",636505583));
var unfolded_token_paths = rumext.v2.deref(app.main.ui.workspace.tokens.management.group.ref_COLON_unfolded_token_paths);
var is_type_unfolded = cljs.core.contains_QMARK_(cljs.core.set(unfolded_token_paths),cljs.core.name(type));
var editing_ref = rumext.v2.deref(app.main.refs.workspace_editor_state);
var edition = rumext.v2.deref(app.main.refs.selected_edition);
var objects = rumext.v2.deref(app.main.refs.workspace_page_objects);
var not_editing_QMARK_ = ((cljs.core.empty_QMARK_(editing_ref)) && ((!((((!((edition == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,edition)))))))));
var can_edit_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.can_edit_QMARK_);
var is_selected_inside_layout__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(is_selected_inside_layout,false);
var tokens__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens)],(function (){
return cljs.core.vec(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),tokens));
}));
var expandable_QMARK_ = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(cljs.core.seq(tokens__$1),false);
var on_pill_context_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event,token){
app.util.dom.prevent_default(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.assign_token_context_menu(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"token","token",-1211463215),new cljs.core.Keyword(null,"position","position",-2011731912),app.util.dom.get_client_position(event),new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"token-id","token-id",-764089526),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token)], null)));
}));
var on_node_context_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event,node){
app.util.dom.prevent_default(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.assign_token_node_context_menu(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"node","node",581201198),node,new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"position","position",-2011731912),app.util.dom.get_client_position(event)], null)));
}));
var on_toggle_open_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(type),rumext.v2.adapt(expandable_QMARK_)],(function (){
if(cljs.core.truth_(expandable_QMARK_)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.toggle_token_path(cljs.core.name(type)));
} else {
return null;
}
}));
var on_popover_open_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(type),rumext.v2.adapt(title),rumext.v2.adapt(modal)],(function (event){
app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1((function (){var pos = app.util.dom.get_client_position(event);
return app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(modal),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(modal),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"action","action",-811238024),"create",new cljs.core.Keyword(null,"token-type","token-type",-835337612),type], null));
})());
}));
var on_token_pill_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(not_editing_QMARK_),rumext.v2.adapt(selected_ids),rumext.v2.adapt(tokens_lib)],(function (event,token){
var token__$1 = app.common.types.tokens_lib.get_token(tokens_lib,selected_token_set_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token));
app.util.dom.stop_propagation(event);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token__$1),new cljs.core.Keyword(null,"number","number",1570378438))){
if(((not_editing_QMARK_) && (cljs.core.seq(selected_shapes)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.toggle_token(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),token__$1,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),selected_ids], null)));
} else {
if(cljs.core.seq(selected_shapes)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.error-text-edition"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"warning","warning",-1685650671),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(3000)], null)));
} else {
return null;
}
}
} else {
return null;
}
}));
return rumext.v2.jsxs("div",{'data-testid':""+"section-"+(cljs.core.name(type) ?? ""),'className':"main_ui_workspace_tokens_management_group__token-section-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.layers.layer_button.layer_button_STAR_,{'aria-expanded':is_type_unfolded,'isExpandable':expandable_QMARK_,'label':title,'children':(cljs.core.truth_(can_edit_QMARK_)?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'id':["add-token-button-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title)].join(''),'icon':"add",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.add-token",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([title], 0)),'variant':"ghost",'onClick':on_popover_open_click,'className':"main_ui_workspace_tokens_management_group__token-section-icon"}):null),'onToggleExpand':on_toggle_open_click,'aria-controls':""+"token-tree-"+(cljs.core.name(type) ?? ""),'expanded':is_type_unfolded,'description':(cljs.core.truth_(expandable_QMARK_)?""+(cljs.core.count(tokens__$1) ?? ""):null),'icon':app.main.ui.workspace.tokens.management.group.token_section_icon(type)}),((is_type_unfolded)?rumext.v2.jsx(app.main.ui.workspace.tokens.management.token_tree.token_tree_STAR_,{'tokensLib':tokens_lib,'onPillContextMenu':on_pill_context_menu,'onTokenPillClick':on_token_pill_click,'onNodeContextMenu':on_node_context_menu,'id':""+"token-tree-"+(cljs.core.name(type) ?? ""),'isSelectedInsideLayout':is_selected_inside_layout__$1,'unfoldedTokenPaths':unfolded_token_paths,'type':type,'activeThemeTokens':active_theme_tokens,'selectedShapes':selected_shapes,'selectedTokenSetId':selected_token_set_id,'tokens':tokens__$1}):null)]});
});

(app.main.ui.workspace.tokens.management.group.token_group_STAR_.displayName = "token-group*");


//# sourceMappingURL=app.main.ui.workspace.tokens.management.group.js.map
