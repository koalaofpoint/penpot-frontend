import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.types.shape.layout.js";
import "./app.common.types.tokens_lib.js";
import "./app.config.js";
import "./app.main.data.style_dictionary.js";
import "./app.main.data.workspace.tokens.application.js";
import "./app.main.data.workspace.tokens.library_edit.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.foundations.typography.text.js";
import "./app.main.ui.workspace.tokens.management.context_menu.js";
import "./app.main.ui.workspace.tokens.management.group.js";
import "./app.main.ui.workspace.tokens.management.node_context_menu.js";
import "./app.util.array.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.management');
/**
 * Separate token-types into groups of `empty` or `filled` depending if
 *   tokens exist for that type. Sort each group alphabetically (by their type).
 */
app.main.ui.workspace.tokens.management.get_sorted_token_groups = (function app$main$ui$workspace$tokens$management$get_sorted_token_groups(tokens_by_type){
var token_shadow_QMARK_ = cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"token-shadow","token-shadow",-67613663));
var all_types = (function (){var G__56283 = app.main.data.workspace.tokens.application.token_properties;
if((!(token_shadow_QMARK_))){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(G__56283,new cljs.core.Keyword(null,"shadow","shadow",873231803));
} else {
return G__56283;
}
})();
var all_types__$1 = cljs.core.seq(cljs.core.keys(all_types));
var empty = [];
var filled = [];
var types = all_types__$1;
while(true){
var temp__5823__auto__ = cljs.core.first(types);
if(cljs.core.truth_(temp__5823__auto__)){
var type = temp__5823__auto__;
if(cljs.core.truth_(cljs.core.not_empty(cljs.core.get.cljs$core$IFn$_invoke$arity$2(tokens_by_type,type)))){
var G__56300 = empty;
var G__56301 = app.util.array.conj_BANG_.cljs$core$IFn$_invoke$arity$2(filled,type);
var G__56302 = cljs.core.rest(types);
empty = G__56300;
filled = G__56301;
types = G__56302;
continue;
} else {
var G__56303 = app.util.array.conj_BANG_.cljs$core$IFn$_invoke$arity$2(empty,type);
var G__56304 = filled;
var G__56305 = cljs.core.rest(types);
empty = G__56303;
filled = G__56304;
types = G__56305;
continue;
}
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.seq(app.util.array.sort_BANG_(empty)),cljs.core.seq(app.util.array.sort_BANG_(filled))], null);
}
break;
}
});
app.main.ui.workspace.tokens.management.selected_set_info_STAR_ = (function app$main$ui$workspace$tokens$management$selected_set_info_STAR_(props_56284){
var selected_token_set_id = props_56284.selectedTokenSetId;
var tokens_lib = props_56284.tokensLib;
var selected_token_set = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens_lib),rumext.v2.adapt(selected_token_set_id)],(function (){
if(cljs.core.truth_(selected_token_set_id)){
var G__56285 = tokens_lib;
if((G__56285 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_set(G__56285,selected_token_set_id);
}
} else {
return null;
}
}));
var active_token_sets_names = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens_lib)],(function (){
var G__56286 = tokens_lib;
if((G__56286 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_active_themes_set_names(G__56286);
}
}));
var token_set_active_QMARK_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(active_token_sets_names)],(function (name){
return cljs.core.contains_QMARK_(active_token_sets_names,name);
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_management__sets-header-container",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':"headline-small",'className':"main_ui_workspace_tokens_management__sets-header",'data-testid':"active-token-set-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.tokens-section-title",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.tokens_lib.get_name(selected_token_set)], 0))}),(((((!((selected_token_set_id == null)))) && (cljs.core.not((function (){var G__56287 = app.common.types.tokens_lib.get_name(selected_token_set);
return (token_set_active_QMARK_.cljs$core$IFn$_invoke$arity$1 ? token_set_active_QMARK_.cljs$core$IFn$_invoke$arity$1(G__56287) : token_set_active_QMARK_.call(null,G__56287));
})()))))?rumext.v2.jsx("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.inactive-set-description"),'className':"main_ui_workspace_tokens_management__sets-header-status",'children':rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'className':"main_ui_workspace_tokens_management__sets-header-status-icon",'iconId':app.main.ui.ds.foundations.assets.icon.eye_off}),rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':"body-small",'className':"main_ui_workspace_tokens_management__sets-header-status-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.inactive-set")})]})}):null)]});
});

(app.main.ui.workspace.tokens.management.selected_set_info_STAR_.displayName = "selected-set-info*");

app.main.ui.workspace.tokens.management.tokens_section_STAR_ = (function app$main$ui$workspace$tokens$management$tokens_section_STAR_(props_56289){
var resolved_active_tokens = props_56289.resolvedActiveTokens;
var active_tokens = props_56289.activeTokens;
var tokens_lib = props_56289.tokensLib;
var objects = rumext.v2.deref(app.main.refs.workspace_page_objects);
var selected = rumext.v2.deref(app.main.refs.selected_shapes);
var selected_shapes = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected),rumext.v2.adapt(objects)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),selected);
}));
var is_selected_inside_layout = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_shapes),rumext.v2.adapt(objects)],(function (){
return cljs.core.some((function (p1__56288_SHARP_){
return app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,p1__56288_SHARP_);
}),selected_shapes);
}));
var selected_token_set_id = rumext.v2.deref(app.main.refs.selected_token_set_id);
var selected_token_set_tokens = (cljs.core.truth_(selected_token_set_id)?(function (){var G__56293 = tokens_lib;
if((G__56293 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_tokens(G__56293,selected_token_set_id);
}
})():null);
var tokens = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(active_tokens),rumext.v2.adapt(selected_token_set_tokens)],(function (){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([active_tokens,selected_token_set_tokens], 0));
}));
var tokens__$1 = app.main.data.style_dictionary.use_resolved_tokens_STAR_(tokens);
var tokens_by_type = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens__$1),rumext.v2.adapt(selected_token_set_tokens)],(function (){
var tokens__$2 = cljs.core.reduce_kv((function (tokens__$2,k,_){
if(cljs.core.contains_QMARK_(selected_token_set_tokens,k)){
return tokens__$2;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(tokens__$2,k);
}
}),tokens__$1,tokens__$1);
return app.common.types.tokens_lib.group_by_type(tokens__$2);
}));
var vec__56290 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens_by_type)],(function (){
return app.main.ui.workspace.tokens.management.get_sorted_token_groups(tokens_by_type);
}));
var empty_group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56290,(0),null);
var filled_group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56290,(1),null);
var filter_tokens_by_path_ids = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_token_set_tokens)],(function (type,path){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (token){
var vec__56294 = token;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56294,(0),null);
var token_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56294,(1),null);
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token_value);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (token){
var vec__56297 = token;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56297,(0),null);
var token_value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56297,(1),null);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token_value),type)) && (cuerdas.core.starts_with_QMARK_(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token_value),path)));
}),selected_token_set_tokens));
}));
var remaining_tokens_of_type_in_set_QMARK_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (selected_token_set_tokens__$1,tokens_in_path_ids){
var token_ids = cljs.core.set(tokens_in_path_ids);
var remaining_tokens = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (token){
return (!(cljs.core.contains_QMARK_(token_ids,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token))));
}),selected_token_set_tokens__$1);
return cljs.core.seq(remaining_tokens);
}));
var delete_token = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_token_set_tokens),rumext.v2.adapt(selected_token_set_id)],(function (){
return (function (token){
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token);
var type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token);
var path = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token);
var tokens_by_type__$1 = app.common.types.tokens_lib.group_by_type(selected_token_set_tokens);
var tokens_filtered_by_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tokens_by_type__$1,type);
var tokens_in_path_ids = (filter_tokens_by_path_ids.cljs$core$IFn$_invoke$arity$2 ? filter_tokens_by_path_ids.cljs$core$IFn$_invoke$arity$2(type,path) : filter_tokens_by_path_ids.call(null,type,path));
var remaining_tokens_QMARK_ = (remaining_tokens_of_type_in_set_QMARK_.cljs$core$IFn$_invoke$arity$2 ? remaining_tokens_of_type_in_set_QMARK_.cljs$core$IFn$_invoke$arity$2(tokens_filtered_by_type,tokens_in_path_ids) : remaining_tokens_of_type_in_set_QMARK_.call(null,tokens_filtered_by_type,tokens_in_path_ids));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.delete_token(selected_token_set_id,id));

if(cljs.core.truth_(remaining_tokens_QMARK_)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.toggle_token_path([cljs.core.name(type),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('')));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.toggle_token_path(cljs.core.name(type)));
}
});
}));
var delete_node = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_token_set_tokens),rumext.v2.adapt(selected_token_set_id)],(function (){
return (function (node,type){
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(node);
var tokens_by_type__$1 = app.common.types.tokens_lib.group_by_type(selected_token_set_tokens);
var tokens_filtered_by_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tokens_by_type__$1,type);
var tokens_in_path_ids = (filter_tokens_by_path_ids.cljs$core$IFn$_invoke$arity$2 ? filter_tokens_by_path_ids.cljs$core$IFn$_invoke$arity$2(type,path) : filter_tokens_by_path_ids.call(null,type,path));
var remaining_tokens_QMARK_ = (remaining_tokens_of_type_in_set_QMARK_.cljs$core$IFn$_invoke$arity$2 ? remaining_tokens_of_type_in_set_QMARK_.cljs$core$IFn$_invoke$arity$2(tokens_filtered_by_type,tokens_in_path_ids) : remaining_tokens_of_type_in_set_QMARK_.call(null,tokens_filtered_by_type,tokens_in_path_ids));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.bulk_delete_tokens(selected_token_set_id,tokens_in_path_ids));

if(cljs.core.truth_(remaining_tokens_QMARK_)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.toggle_token_path([cljs.core.name(type),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join('')));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.toggle_token_path(cljs.core.name(type)));
}
});
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens_lib),rumext.v2.adapt(selected_token_set_id)],(function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = tokens_lib;
if(cljs.core.truth_(and__5023__auto__)){
var or__5025__auto__ = (selected_token_set_id == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto____$1 = selected_token_set_id;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not(app.common.types.tokens_lib.get_set(tokens_lib,selected_token_set_id));
} else {
return and__5023__auto____$1;
}
}
} else {
return and__5023__auto__;
}
})())){
var match = cljs.core.first(app.common.types.tokens_lib.get_sets(tokens_lib));
if(cljs.core.truth_(match)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.set_selected_token_set_id(app.common.types.tokens_lib.get_id(match)));
} else {
return null;
}
} else {
return null;
}
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.tokens.management.context_menu.token_context_menu,{'on-delete-token':delete_token}),rumext.v2.jsx(app.main.ui.workspace.tokens.management.node_context_menu.token_node_context_menu_STAR_,{'onDeleteNode':delete_node}),rumext.v2.jsx(app.main.ui.workspace.tokens.management.selected_set_info_STAR_,{'tokensLib':tokens_lib,'selectedTokenSetId':selected_token_set_id}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,type){
out_arr__35152__auto__.push((function (){var tokens__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(tokens_by_type,type);
return rumext.v2.jsx(app.main.ui.workspace.tokens.management.group.token_group_STAR_,{'isSelectedInsideLayout':is_selected_inside_layout,'type':type,'selectedTokenSetId':selected_token_set_id,'selectedIds':selected,'tokensLib':tokens_lib,'tokens':tokens__$2,'activeThemeTokens':resolved_active_tokens,'selectedShapes':selected_shapes},cljs.core.name(type));
})());

return out_arr__35152__auto__;
}),[],filled_group),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,type){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.tokens.management.group.token_group_STAR_,{'tokens':cljs.core.PersistentVector.EMPTY,'type':type,'selectedShapes':selected_shapes,'isSelectedInsideLayout':is_selected_inside_layout,'activeThemeTokens':resolved_active_tokens},cljs.core.name(type)));

return out_arr__35152__auto__;
}),[],empty_group)]});
});

(app.main.ui.workspace.tokens.management.tokens_section_STAR_.displayName = "tokens-section*");


//# sourceMappingURL=app.main.ui.workspace.tokens.management.js.map
