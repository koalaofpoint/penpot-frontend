import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.files.changes_builder.js";
import "./app.common.types.tokens_lib.js";
goog.provide('app.common.logic.tokens');
/**
 * Copy the active sets from the currently active themes and move them
 *   to the hidden token theme and update the theme with
 *   `update-theme-fn`.
 * 
 *   Use this for managing sets active state without having to modify a
 *   user created theme ("no themes selected" state in the ui).
 */
app.common.logic.tokens.generate_update_active_sets = (function app$common$logic$tokens$generate_update_active_sets(changes,tokens_lib,update_theme_fn){
var active_token_set_names = app.common.types.tokens_lib.get_active_themes_set_names(tokens_lib);
var hidden_theme = app.common.types.tokens_lib.get_hidden_theme(tokens_lib);
var hidden_theme_SINGLEQUOTE_ = (function (){var G__72083 = (function (){var G__72084 = hidden_theme;
if((G__72084 == null)){
return null;
} else {
return app.common.types.tokens_lib.set_sets(G__72084,active_token_set_names);
}
})();
return (update_theme_fn.cljs$core$IFn$_invoke$arity$1 ? update_theme_fn.cljs$core$IFn$_invoke$arity$1(G__72083) : update_theme_fn.call(null,G__72083));
})();
return app.common.files.changes_builder.set_token_theme(app.common.files.changes_builder.set_active_token_themes(changes,cljs.core.PersistentHashSet.createAsIfByAssoc([app.common.types.tokens_lib.get_theme_path(hidden_theme_SINGLEQUOTE_)])),app.common.types.tokens_lib.get_id(hidden_theme),hidden_theme_SINGLEQUOTE_);
});
/**
 * Enable or disable a token set at `set-name` in `tokens-lib` without modifying a user theme.
 */
app.common.logic.tokens.generate_set_enabled_token_set = (function app$common$logic$tokens$generate_set_enabled_token_set(changes,tokens_lib,set_name,enabled_QMARK_){
if(cljs.core.truth_(enabled_QMARK_)){
return app.common.logic.tokens.generate_update_active_sets(changes,tokens_lib,(function (p1__72087_SHARP_){
return app.common.types.tokens_lib.enable_set(p1__72087_SHARP_,set_name);
}));
} else {
return app.common.logic.tokens.generate_update_active_sets(changes,tokens_lib,(function (p1__72088_SHARP_){
return app.common.types.tokens_lib.disable_set(p1__72088_SHARP_,set_name);
}));
}
});
/**
 * Toggle a token set at `set-name` in `tokens-lib` without modifying a user theme.
 */
app.common.logic.tokens.generate_toggle_token_set = (function app$common$logic$tokens$generate_toggle_token_set(changes,tokens_lib,set_name){
return app.common.logic.tokens.generate_update_active_sets(changes,tokens_lib,(function (p1__72094_SHARP_){
return app.common.types.tokens_lib.toggle_set(p1__72094_SHARP_,set_name);
}));
});
/**
 * Change the active state of a theme in `tokens-lib`. If after the change there is
 * any active theme other than the hidden one, deactivate the hidden theme.
 */
app.common.logic.tokens.generate_update_active_token_theme = (function app$common$logic$tokens$generate_update_active_token_theme(changes,tokens_lib,update_fn){
var active_token_themes = (function (){var G__72106 = tokens_lib;
var G__72106__$1 = (((G__72106 == null))?null:(update_fn.cljs$core$IFn$_invoke$arity$1 ? update_fn.cljs$core$IFn$_invoke$arity$1(G__72106) : update_fn.call(null,G__72106)));
if((G__72106__$1 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_active_theme_paths(G__72106__$1);
}
})();
var active_token_themes_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_token_themes,cljs.core.PersistentHashSet.createAsIfByAssoc([app.common.types.tokens_lib.hidden_theme_path])))?active_token_themes:cljs.core.disj.cljs$core$IFn$_invoke$arity$2(active_token_themes,app.common.types.tokens_lib.hidden_theme_path));
return app.common.files.changes_builder.set_active_token_themes(changes,active_token_themes_SINGLEQUOTE_);
});
/**
 * Activate or deactivate a token theme in `tokens-lib`.
 */
app.common.logic.tokens.generate_set_active_token_theme = (function app$common$logic$tokens$generate_set_active_token_theme(changes,tokens_lib,id,active_QMARK_){
if(cljs.core.truth_(active_QMARK_)){
return app.common.logic.tokens.generate_update_active_token_theme(changes,tokens_lib,(function (p1__72113_SHARP_){
return app.common.types.tokens_lib.activate_theme(p1__72113_SHARP_,id);
}));
} else {
return app.common.logic.tokens.generate_update_active_token_theme(changes,tokens_lib,(function (p1__72114_SHARP_){
return app.common.types.tokens_lib.deactivate_theme(p1__72114_SHARP_,id);
}));
}
});
/**
 * Toggle the active state of a token theme in `tokens-lib`.
 */
app.common.logic.tokens.generate_toggle_token_theme = (function app$common$logic$tokens$generate_toggle_token_theme(changes,tokens_lib,id){
return app.common.logic.tokens.generate_update_active_token_theme(changes,tokens_lib,(function (p1__72117_SHARP_){
return app.common.types.tokens_lib.toggle_theme_active(p1__72117_SHARP_,id);
}));
});
/**
 * Toggle a token set group at `group-path` in `tokens-lib` for a `tokens-lib-theme`.
 */
app.common.logic.tokens.toggle_token_set_group = (function app$common$logic$tokens$toggle_token_set_group(group_path,tokens_lib,tokens_lib_theme){
var deactivate_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"all","all",892129742),null,new cljs.core.Keyword(null,"partial","partial",241141745),null], null), null),app.common.types.tokens_lib.sets_at_path_all_active_QMARK_(tokens_lib,group_path));
var sets_names = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.types.tokens_lib.get_name,app.common.types.tokens_lib.get_sets_at_path(tokens_lib,group_path)));
if(deactivate_QMARK_){
return app.common.types.tokens_lib.disable_sets(tokens_lib_theme,sets_names);
} else {
return app.common.types.tokens_lib.enable_sets(tokens_lib_theme,sets_names);
}
});
/**
 * Toggle a token set group at `group-path` in `tokens-lib` without modifying a user theme.
 */
app.common.logic.tokens.generate_toggle_token_set_group = (function app$common$logic$tokens$generate_toggle_token_set_group(changes,tokens_lib,group_path){
return app.common.logic.tokens.generate_update_active_sets(changes,tokens_lib,(function (p1__72131_SHARP_){
return app.common.logic.tokens.toggle_token_set_group(group_path,tokens_lib,p1__72131_SHARP_);
}));
});
app.common.logic.tokens.vec_starts_with_QMARK_ = (function app$common$logic$tokens$vec_starts_with_QMARK_(v1,v2){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(v1,(0),(function (){var x__5113__auto__ = cljs.core.count(v1);
var y__5114__auto__ = cljs.core.count(v2);
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})()),v2);
});
app.common.logic.tokens.calculate_move_token_set_or_set_group = (function app$common$logic$tokens$calculate_move_token_set_or_set_group(tokens_lib,p__72134){
var map__72135 = p__72134;
var map__72135__$1 = cljs.core.__destructure_map(map__72135);
var from_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72135__$1,new cljs.core.Keyword(null,"from-index","from-index",242234713));
var to_index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72135__$1,new cljs.core.Keyword(null,"to-index","to-index",2106835987));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72135__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var collapsed_paths = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__72135__$1,new cljs.core.Keyword(null,"collapsed-paths","collapsed-paths",-841392049),cljs.core.PersistentHashSet.EMPTY);
var tree = app.common.types.tokens_lib.walk_sets_tree_seq.cljs$core$IFn$_invoke$arity$variadic(app.common.types.tokens_lib.get_set_tree(tokens_lib),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"skip-children-pred","skip-children-pred",663146554),(function (p1__72133_SHARP_){
return cljs.core.contains_QMARK_(collapsed_paths,p1__72133_SHARP_);
})], 0));
var from = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tree,from_index);
var to = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(tree,to_index);
var before = (function (){var G__72137 = position;
var G__72137__$1 = (((G__72137 instanceof cljs.core.Keyword))?G__72137.fqn:null);
switch (G__72137__$1) {
case "top":
return to;

break;
case "bot":
return cljs.core.nth.cljs$core$IFn$_invoke$arity$3(tree,(to_index + (1)),null);

break;
case "center":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72137__$1)].join('')));

}
})();
var prev_before = (cljs.core.truth_(new cljs.core.Keyword(null,"group?","group?",-1871629417).cljs$core$IFn$_invoke$arity$1(from))?cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (element){
return (new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(element) <= new cljs.core.Keyword(null,"depth","depth",1768663640).cljs$core$IFn$_invoke$arity$1(from));
}),cljs.core.drop.cljs$core$IFn$_invoke$arity$2((from_index + (1)),tree))):cljs.core.nth.cljs$core$IFn$_invoke$arity$3(tree,(from_index + (1)),null));
var drop_as_direct_group_child_QMARK_ = (function (){var or__5025__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"center","center",-748944368),position);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bot","bot",-950896508),position);
if(and__5023__auto__){
var and__5023__auto____$1 = new cljs.core.Keyword(null,"group?","group?",-1871629417).cljs$core$IFn$_invoke$arity$1(to);
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not(cljs.core.get.cljs$core$IFn$_invoke$arity$2(collapsed_paths,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(to)));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}
})();
var from_path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(from);
var to_parent_path = (cljs.core.truth_(drop_as_direct_group_child_QMARK_)?new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(to):cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.butlast(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(to))));
var to_path = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(to_parent_path,cljs.core.last(from_path));
var identical_QMARK_ = (function (){var or__5025__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from_index,to_index);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from_path,to_path);
if(and__5023__auto__){
var G__72141 = position;
var G__72141__$1 = (((G__72141 instanceof cljs.core.Keyword))?G__72141.fqn:null);
switch (G__72141__$1) {
case "top":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from_index,(to_index - (1)));

break;
case "bot":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(from_index,to_index);

break;
default:
return null;

}
} else {
return and__5023__auto__;
}
}
})();
var to_exists_QMARK_ = (function (){var and__5023__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent-path","parent-path",-2115866866).cljs$core$IFn$_invoke$arity$1(from),to_parent_path);
if(and__5023__auto__){
if(cljs.core.truth_(new cljs.core.Keyword(null,"group?","group?",-1871629417).cljs$core$IFn$_invoke$arity$1(from))){
return app.common.types.tokens_lib.set_group_path_exists_QMARK_(tokens_lib,to_path);
} else {
return app.common.types.tokens_lib.set_path_exists_QMARK_(tokens_lib,to_path);
}
} else {
return and__5023__auto__;
}
})();
var parent_to_child_drop_QMARK_ = (function (){var and__5023__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"parent-path","parent-path",-2115866866).cljs$core$IFn$_invoke$arity$1(from),to_parent_path);
if(and__5023__auto__){
var and__5023__auto____$1 = new cljs.core.Keyword(null,"group?","group?",-1871629417).cljs$core$IFn$_invoke$arity$1(from);
if(cljs.core.truth_(and__5023__auto____$1)){
return app.common.logic.tokens.vec_starts_with_QMARK_(to_path,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(from));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(identical_QMARK_)){
return null;
} else {
if(cljs.core.truth_(to_exists_QMARK_)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("move token set error: path exists",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"path-exists","path-exists",4854463),new cljs.core.Keyword(null,"path","path",-188191168),to_path], null));
} else {
if(cljs.core.truth_(parent_to_child_drop_QMARK_)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("move token set error: parent-to-child",new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"parent-to-child","parent-to-child",-698517616),new cljs.core.Keyword(null,"from-path","from-path",-1111581224),from_path,new cljs.core.Keyword(null,"to-path","to-path",-1087845742),to_path], null));
} else {
var G__72143 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"from-path","from-path",-1111581224),from_path,new cljs.core.Keyword(null,"to-path","to-path",-1087845742),to_path,new cljs.core.Keyword(null,"before-path","before-path",-1341220519),null,new cljs.core.Keyword(null,"before-group?","before-group?",1667453550),null], null);
var G__72143__$1 = (cljs.core.truth_(before)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__72143,new cljs.core.Keyword(null,"before-path","before-path",-1341220519),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(before),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"before-group?","before-group?",1667453550),new cljs.core.Keyword(null,"group?","group?",-1871629417).cljs$core$IFn$_invoke$arity$1(before)], 0)):G__72143);
if(cljs.core.truth_(prev_before)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__72143__$1,new cljs.core.Keyword(null,"prev-before-path","prev-before-path",788140603),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(prev_before),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prev-before-group?","prev-before-group?",1113354384),new cljs.core.Keyword(null,"group?","group?",-1871629417).cljs$core$IFn$_invoke$arity$1(prev_before)], 0));
} else {
return G__72143__$1;
}

}
}
}
});
/**
 * Create changes for dropping a token set or token set.
 *   Throws for impossible moves.
 */
app.common.logic.tokens.generate_move_token_set = (function app$common$logic$tokens$generate_move_token_set(changes,tokens_lib,params){
var temp__5823__auto__ = app.common.logic.tokens.calculate_move_token_set_or_set_group(tokens_lib,params);
if(cljs.core.truth_(temp__5823__auto__)){
var params__$1 = temp__5823__auto__;
return app.common.files.changes_builder.move_token_set(changes,params__$1);
} else {
return changes;
}
});
/**
 * Create changes for dropping a token set or token set group.
 *   Throws for impossible moves
 */
app.common.logic.tokens.generate_move_token_set_group = (function app$common$logic$tokens$generate_move_token_set_group(changes,tokens_lib,params){
var temp__5823__auto__ = app.common.logic.tokens.calculate_move_token_set_or_set_group(tokens_lib,params);
if(cljs.core.truth_(temp__5823__auto__)){
var params__$1 = temp__5823__auto__;
return app.common.files.changes_builder.move_token_set_group(changes,params__$1);
} else {
return changes;
}
});
/**
 * Create changes for deleting a token set group.
 */
app.common.logic.tokens.generate_delete_token_set_group = (function app$common$logic$tokens$generate_delete_token_set_group(changes,tokens_lib,path){
var sets = app.common.types.tokens_lib.get_sets_at_path(tokens_lib,path);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes__$1,set){
return app.common.files.changes_builder.set_token_set(changes__$1,app.common.types.tokens_lib.get_id(set),null);
}),changes,sets);
});

//# sourceMappingURL=app.common.logic.tokens.js.map
