import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.types.tokens_lib.js";
import "./app.main.data.workspace.tokens.library_edit.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.context.js";
import "./app.main.ui.workspace.tokens.sets.helpers.js";
import "./app.main.ui.workspace.tokens.sets.lists.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.sets');
app.main.ui.workspace.tokens.sets.on_select_token_set_click = (function app$main$ui$workspace$tokens$sets$on_select_token_set_click(id){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.clear_tokens_paths());

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.set_selected_token_set_id(id));
});
app.main.ui.workspace.tokens.sets.on_toggle_token_set_click = (function app$main$ui$workspace$tokens$sets$on_toggle_token_set_click(name){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.toggle_token_set(name));
});
app.main.ui.workspace.tokens.sets.on_toggle_token_set_group_click = (function app$main$ui$workspace$tokens$sets$on_toggle_token_set_group_click(path){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.toggle_token_set_group(path));
});
app.main.ui.workspace.tokens.sets.sets_list_STAR_ = (function app$main$ui$workspace$tokens$sets$sets_list_STAR_(props_56334){
var new_path = props_56334.newPath;
var selected = props_56334.selected;
var edition_id = props_56334.editionId;
var tokens_lib = props_56334.tokensLib;
var token_sets = (function (){var G__56335 = tokens_lib;
if((G__56335 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_set_tree(G__56335);
}
})();
var can_edit_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.can_edit_QMARK_);
var token_set_active_QMARK_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens_lib)],(function (name){
if(cljs.core.truth_(tokens_lib)){
return app.common.types.tokens_lib.token_set_active_QMARK_(tokens_lib,name);
} else {
return null;
}
}));
var token_set_group_active_QMARK_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (group_path){
return cljs.core.deref(app.main.refs.token_sets_at_path_all_active(group_path));
}));
var on_reset_edition = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(can_edit_QMARK_)],(function (_){
if(cljs.core.truth_(can_edit_QMARK_)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.tokens.library_edit.clear_token_set_edition(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.tokens.library_edit.clear_token_set_creation()], 0));
} else {
return null;
}
}));
var on_start_edition = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(can_edit_QMARK_)],(function (id){
if(cljs.core.truth_(can_edit_QMARK_)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.start_token_set_edition(id));
} else {
return null;
}
}));
return rumext.v2.jsx(app.main.ui.workspace.tokens.sets.lists.controlled_sets_list_STAR_,{'onResetEdition':on_reset_edition,'tokenSets':token_sets,'onCreateTokenSet':app.main.ui.workspace.tokens.sets.helpers.on_create_token_set,'selected':selected,'onUpdateTokenSetGroup':app.main.ui.workspace.tokens.sets.helpers.on_update_token_set_group,'origin':"set-panel",'onToggleTokenSet':app.main.ui.workspace.tokens.sets.on_toggle_token_set_click,'onUpdateTokenSet':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.tokens.sets.helpers.on_update_token_set,tokens_lib),'tokensLib':tokens_lib,'onStartEdition':on_start_edition,'newPath':new_path,'isTokenSetActive':token_set_active_QMARK_,'canEdit':can_edit_QMARK_,'onToggleTokenSetGroup':app.main.ui.workspace.tokens.sets.on_toggle_token_set_group_click,'editionId':edition_id,'onSelect':app.main.ui.workspace.tokens.sets.on_select_token_set_click,'isTokenSetGroupActive':token_set_group_active_QMARK_});
});

(app.main.ui.workspace.tokens.sets.sets_list_STAR_.displayName = "sets-list*");


//# sourceMappingURL=app.main.ui.workspace.tokens.sets.js.map
