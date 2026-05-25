import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.data.workspace.tokens.library_edit.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.dropdown.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.sets.context_menu');
app.main.ui.workspace.tokens.sets.context_menu.ref_COLON_token_sets_context_menu = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token-set-context-menu","token-set-context-menu",1640583502),app.main.refs.workspace_tokens);
app.main.ui.workspace.tokens.sets.context_menu.prevent_default = (function app$main$ui$workspace$tokens$sets$context_menu$prevent_default(event){
app.util.dom.prevent_default(event);

return app.util.dom.stop_propagation(event);
});
app.main.ui.workspace.tokens.sets.context_menu.menu_entry_STAR_ = (function app$main$ui$workspace$tokens$sets$context_menu$menu_entry_STAR_(props_56329){
var value = props_56329.value;
var title = props_56329.title;
var on_click = props_56329.onClick;
return rumext.v2.jsx("li",{'data-value':value,'onClick':on_click,'className':"main_ui_workspace_tokens_sets_context_menu__context-menu-item",'children':title});
});

(app.main.ui.workspace.tokens.sets.context_menu.menu_entry_STAR_.displayName = "menu-entry*");

app.main.ui.workspace.tokens.sets.context_menu.menu_STAR_ = (function app$main$ui$workspace$tokens$sets$context_menu$menu_STAR_(props_56330){
var path = props_56330.path;
var is_group = props_56330.isGroup;
var id = props_56330.id;
var create_set_at_path = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(path)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.start_token_set_creation(path));
}));
var on_edit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.start_token_set_edition(id));
}));
var on_duplicate = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_group),rumext.v2.adapt(id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.duplicate_token_set(id));
}));
var on_delete = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_group),rumext.v2.adapt(path)],(cljs.core.truth_(is_group)?(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.delete_token_set_group(path));
}):(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.delete_token_set(id));
})));
return rumext.v2.jsxs("ul",{'className':"main_ui_workspace_tokens_sets_context_menu__context-list",'children':[(cljs.core.truth_(is_group)?rumext.v2.jsx(app.main.ui.workspace.tokens.sets.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.add-set-to-group"),'onClick':create_set_at_path}):null),rumext.v2.jsx(app.main.ui.workspace.tokens.sets.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.rename"),'onClick':on_edit}),(cljs.core.truth_(is_group)?null:rumext.v2.jsx(app.main.ui.workspace.tokens.sets.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.duplicate"),'onClick':on_duplicate})),rumext.v2.jsx(app.main.ui.workspace.tokens.sets.context_menu.menu_entry_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.delete"),'onClick':on_delete})]});
});

(app.main.ui.workspace.tokens.sets.context_menu.menu_STAR_.displayName = "menu*");

app.main.ui.workspace.tokens.sets.context_menu.token_set_context_menu_STAR_ = (function app$main$ui$workspace$tokens$sets$context_menu$token_set_context_menu_STAR_(props_56331){
var map__56332 = rumext.v2.deref(app.main.ui.workspace.tokens.sets.context_menu.ref_COLON_token_sets_context_menu);
var map__56332__$1 = cljs.core.__destructure_map(map__56332);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56332__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var is_group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56332__$1,new cljs.core.Keyword(null,"is-group","is-group",1574418960));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56332__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56332__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var position_top = ((position?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"y","y",-1757859776))) + (5));
var position_left = ((position?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"x","x",2099068185))) + (5));
var on_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.assign_token_set_context_menu(null));
}));
return rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':(!((position == null))),'on-close':on_close,'children':rumext.v2.jsx("div",{'data-testid':"tokens-context-menu-for-set",'style':{'top':position_top,'left':position_left},'onContextMenu':app.main.ui.workspace.tokens.sets.context_menu.prevent_default,'className':"main_ui_workspace_tokens_sets_context_menu__token-set-context-menu",'children':rumext.v2.jsx(app.main.ui.workspace.tokens.sets.context_menu.menu_STAR_,{'isGroup':is_group,'id':id,'path':path})})});
});

(app.main.ui.workspace.tokens.sets.context_menu.token_set_context_menu_STAR_.displayName = "token-set-context-menu*");


//# sourceMappingURL=app.main.ui.workspace.tokens.sets.context_menu.js.map
