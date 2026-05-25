import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.types.tokens_lib.js";
import "./app.main.data.helpers.js";
goog.provide('app.main.data.workspace.tokens.selected_set');
app.main.data.workspace.tokens.selected_set.get_selected_token_set_id = (function app$main$data$workspace$tokens$selected_set$get_selected_token_set_id(state){
var or__5025__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-tokens","workspace-tokens",-15136920),new cljs.core.Keyword(null,"selected-token-set-id","selected-token-set-id",-1828640116)], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var G__51453 = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var G__51453__$1 = (((G__51453 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__51453,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991)));
var G__51453__$2 = (((G__51453__$1 == null))?null:app.common.types.tokens_lib.get_sets(G__51453__$1));
var G__51453__$3 = (((G__51453__$2 == null))?null:cljs.core.first(G__51453__$2));
if((G__51453__$3 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_id(G__51453__$3);
}
}
});
app.main.data.workspace.tokens.selected_set.get_selected_token_set = (function app$main$data$workspace$tokens$selected_set$get_selected_token_set(state){
var temp__5825__auto__ = app.main.data.workspace.tokens.selected_set.get_selected_token_set_id(state);
if(cljs.core.truth_(temp__5825__auto__)){
var set_id = temp__5825__auto__;
var G__51465 = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var G__51465__$1 = (((G__51465 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__51465,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991)));
if((G__51465__$1 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_set(G__51465__$1,set_id);
}
} else {
return null;
}
});
app.main.data.workspace.tokens.selected_set.get_token_in_selected_set = (function app$main$data$workspace$tokens$selected_set$get_token_in_selected_set(state,token_id){
var temp__5825__auto__ = app.main.data.workspace.tokens.selected_set.get_selected_token_set_id(state);
if(cljs.core.truth_(temp__5825__auto__)){
var set_id = temp__5825__auto__;
var G__51468 = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var G__51468__$1 = (((G__51468 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__51468,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991)));
if((G__51468__$1 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_token(G__51468__$1,set_id,token_id);
}
} else {
return null;
}
});
app.main.data.workspace.tokens.selected_set.get_all_tokens_in_selected_set = (function app$main$data$workspace$tokens$selected_set$get_all_tokens_in_selected_set(state){
var temp__5825__auto__ = app.main.data.workspace.tokens.selected_set.get_selected_token_set_id(state);
if(cljs.core.truth_(temp__5825__auto__)){
var set_id = temp__5825__auto__;
var G__51471 = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var G__51471__$1 = (((G__51471 == null))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(G__51471,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991)));
if((G__51471__$1 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_tokens(G__51471__$1,set_id);
}
} else {
return null;
}
});

//# sourceMappingURL=app.main.data.workspace.tokens.selected_set.js.map
