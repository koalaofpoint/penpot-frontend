import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.files.tokens.js";
import "./app.common.schema.js";
import "./app.common.types.tokens_lib.js";
import "./app.main.data.event.js";
import "./app.main.data.notifications.js";
import "./app.main.data.workspace.tokens.library_edit.js";
import "./app.main.store.js";
import "./app.util.i18n.js";
import "./potok.v2.core.js";
goog.provide('app.main.ui.workspace.tokens.sets.helpers');
app.main.ui.workspace.tokens.sets.helpers.on_update_token_set = (function app$main$ui$workspace$tokens$sets$helpers$on_update_token_set(tokens_lib,token_set,name){
var name__$1 = app.common.types.tokens_lib.normalize_set_name.cljs$core$IFn$_invoke$arity$2(name,app.common.types.tokens_lib.get_name(token_set));
var errors = app.common.schema.validation_errors(name__$1,app.common.files.tokens.make_token_set_name_schema(tokens_lib,app.common.types.tokens_lib.get_id(token_set)));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.clear_token_set_edition());

if(cljs.core.empty_QMARK_(errors)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.rename_token_set(token_set,name__$1));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.token-set-already-exists"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(9000)], null)));
}
});
app.main.ui.workspace.tokens.sets.helpers.on_update_token_set_group = (function app$main$ui$workspace$tokens$sets$helpers$on_update_token_set_group(path,name){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.tokens.library_edit.clear_token_set_edition(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.tokens.library_edit.rename_token_set_group(path,name)], 0));
});
app.main.ui.workspace.tokens.sets.helpers.on_create_token_set = (function app$main$ui$workspace$tokens$sets$helpers$on_create_token_set(tokens_lib,parent_set,name){
var name__$1 = app.common.types.tokens_lib.make_child_name(parent_set,name);
var errors = app.common.schema.validation_errors(name__$1,app.common.files.tokens.make_token_set_name_schema(tokens_lib,null));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"create-token-set",new cljs.core.Keyword(null,"name","name",1843675177),name__$1], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.tokens.library_edit.clear_token_set_creation()], 0));

if(cljs.core.empty_QMARK_(errors)){
var token_set = app.common.types.tokens_lib.make_token_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),name__$1], 0));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.create_token_set(token_set));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.token-set-already-exists"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(9000)], null)));
}
});

//# sourceMappingURL=app.main.ui.workspace.tokens.sets.helpers.js.map
