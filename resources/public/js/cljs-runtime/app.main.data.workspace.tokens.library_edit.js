import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes_builder.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.logic.tokens.js";
import "./app.common.path_names.js";
import "./app.common.types.shape.js";
import "./app.common.types.tokens_lib.js";
import "./app.common.uuid.js";
import "./app.main.data.changes.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.data.notifications.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.tokens.propagation.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.tokens.library_edit');
app.main.data.workspace.tokens.library_edit.get_tokens_lib = (function app$main$data$workspace$tokens$library_edit$get_tokens_lib(state){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991));
});
app.main.data.workspace.tokens.library_edit.lookup_token_set = (function app$main$data$workspace$tokens$library_edit$lookup_token_set(var_args){
var G__52443 = arguments.length;
switch (G__52443) {
case 1:
return app.main.data.workspace.tokens.library_edit.lookup_token_set.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.tokens.library_edit.lookup_token_set.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.library_edit.lookup_token_set.cljs$core$IFn$_invoke$arity$1 = (function (state){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-tokens","workspace-tokens",-15136920)),new cljs.core.Keyword(null,"selected-token-set-id","selected-token-set-id",-1828640116));
if(cljs.core.truth_(temp__5825__auto__)){
var selected = temp__5825__auto__;
return app.main.data.workspace.tokens.library_edit.lookup_token_set.cljs$core$IFn$_invoke$arity$2(state,selected);
} else {
return null;
}
}));

(app.main.data.workspace.tokens.library_edit.lookup_token_set.cljs$core$IFn$_invoke$arity$2 = (function (state,id){
var G__52444 = app.main.data.workspace.tokens.library_edit.get_tokens_lib(state);
if((G__52444 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_set(G__52444,id);
}
}));

(app.main.data.workspace.tokens.library_edit.lookup_token_set.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.tokens.library_edit.update_shape = (function app$main$data$workspace$tokens$library_edit$update_shape(id,attrs){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","expected valid uuid for `id`","\n","(uuid? id)"].join('')));
}

var attrs__$1 = app.common.types.shape.check_shape_attrs(attrs);
if((typeof app.main.data.workspace.tokens.library_edit.update_shape_52446 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.update_shape_52446 = (function (id,attrs,meta52447){
this.id = id;
this.attrs = attrs;
this.meta52447 = meta52447;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.update_shape_52446.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.update_shape_52446.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","update-shape","app.main.data.workspace.tokens.library-edit/update-shape",1117364162);
}));

(app.main.data.workspace.tokens.library_edit.update_shape_52446.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52448,meta52447__$1){
var self__ = this;
var _52448__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.update_shape_52446(self__.id,self__.attrs,meta52447__$1));
}));

(app.main.data.workspace.tokens.library_edit.update_shape_52446.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52448){
var self__ = this;
var _52448__$1 = this;
return self__.meta52447;
}));

(app.main.data.workspace.tokens.library_edit.update_shape_52446.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.update_shape_52446.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [self__.id], null),(function (p1__52445_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__52445_SHARP_,self__.attrs], 0));
})));
}));
}

return (new app.main.data.workspace.tokens.library_edit.update_shape_52446(id,attrs__$1,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.remove_paths_recursively = (function app$main$data$workspace$tokens$library_edit$remove_paths_recursively(path,paths){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__52454_SHARP_){
return cuerdas.core.starts_with_QMARK_(p1__52454_SHARP_,cljs.core.str.cljs$core$IFn$_invoke$arity$1(path));
}),paths));
});
app.main.data.workspace.tokens.library_edit.add_path = (function app$main$data$workspace$tokens$library_edit$add_path(path,paths){
var split_path = app.common.path_names.split_path.cljs$core$IFn$_invoke$arity$variadic(path,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"separator","separator",-1628749125),"."], 0));
var partial_paths = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,segment){
var new_acc = ((cljs.core.empty_QMARK_(acc))?segment:[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(acc)),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(segment)].join(''));
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new_acc);
}),cljs.core.PersistentVector.EMPTY,split_path);
return cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.into.cljs$core$IFn$_invoke$arity$2(partial_paths,paths)));
});
app.main.data.workspace.tokens.library_edit.clear_tokens_paths = (function app$main$data$workspace$tokens$library_edit$clear_tokens_paths(){
if((typeof app.main.data.workspace.tokens.library_edit.clear_tokens_paths_52458 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.clear_tokens_paths_52458 = (function (meta52459){
this.meta52459 = meta52459;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.clear_tokens_paths_52458.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.clear_tokens_paths_52458.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","clear-tokens-paths","app.main.data.workspace.tokens.library-edit/clear-tokens-paths",711179200);
}));

(app.main.data.workspace.tokens.library_edit.clear_tokens_paths_52458.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52460,meta52459__$1){
var self__ = this;
var _52460__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.clear_tokens_paths_52458(meta52459__$1));
}));

(app.main.data.workspace.tokens.library_edit.clear_tokens_paths_52458.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52460){
var self__ = this;
var _52460__$1 = this;
return self__.meta52459;
}));

(app.main.data.workspace.tokens.library_edit.clear_tokens_paths_52458.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.clear_tokens_paths_52458.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-tokens","workspace-tokens",-15136920),new cljs.core.Keyword(null,"unfolded-token-paths","unfolded-token-paths",606197446)], null),cljs.core.PersistentVector.EMPTY);
}));
}

return (new app.main.data.workspace.tokens.library_edit.clear_tokens_paths_52458(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.toggle_token_path = (function app$main$data$workspace$tokens$library_edit$toggle_token_path(path){
if((typeof app.main.data.workspace.tokens.library_edit.toggle_token_path_52472 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.toggle_token_path_52472 = (function (path,meta52473){
this.path = path;
this.meta52473 = meta52473;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.toggle_token_path_52472.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.toggle_token_path_52472.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","toggle-token-path","app.main.data.workspace.tokens.library-edit/toggle-token-path",-1177603494);
}));

(app.main.data.workspace.tokens.library_edit.toggle_token_path_52472.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52474,meta52473__$1){
var self__ = this;
var _52474__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.toggle_token_path_52472(self__.path,meta52473__$1));
}));

(app.main.data.workspace.tokens.library_edit.toggle_token_path_52472.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52474){
var self__ = this;
var _52474__$1 = this;
return self__.meta52473;
}));

(app.main.data.workspace.tokens.library_edit.toggle_token_path_52472.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.toggle_token_path_52472.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-tokens","workspace-tokens",-15136920),new cljs.core.Keyword(null,"unfolded-token-paths","unfolded-token-paths",606197446)], null),(function (paths){
var paths__$1 = (function (){var or__5025__auto__ = paths;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentVector.EMPTY;
}
})();
if(cljs.core.truth_(cljs.core.some((function (p1__52468_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__52468_SHARP_,self__.path);
}),paths__$1))){
return app.main.data.workspace.tokens.library_edit.remove_paths_recursively(self__.path,paths__$1);
} else {
return app.main.data.workspace.tokens.library_edit.add_path(self__.path,paths__$1);
}
}));
}));
}

return (new app.main.data.workspace.tokens.library_edit.toggle_token_path_52472(path,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.create_token_theme = (function app$main$data$workspace$tokens$library_edit$create_token_theme(token_theme){
var new_token_theme = token_theme;
if((typeof app.main.data.workspace.tokens.library_edit.create_token_theme_52475 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.create_token_theme_52475 = (function (token_theme,new_token_theme,meta52476){
this.token_theme = token_theme;
this.new_token_theme = new_token_theme;
this.meta52476 = meta52476;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.create_token_theme_52475.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.create_token_theme_52475.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","create-token-theme","app.main.data.workspace.tokens.library-edit/create-token-theme",-581595599);
}));

(app.main.data.workspace.tokens.library_edit.create_token_theme_52475.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52477,meta52476__$1){
var self__ = this;
var _52477__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.create_token_theme_52475(self__.token_theme,self__.new_token_theme,meta52476__$1));
}));

(app.main.data.workspace.tokens.library_edit.create_token_theme_52475.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52477){
var self__ = this;
var _52477__$1 = this;
return self__.meta52476;
}));

(app.main.data.workspace.tokens.library_edit.create_token_theme_52475.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.create_token_theme_52475.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var tokens_lib = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991));
if(cljs.core.truth_((function (){var and__5023__auto__ = tokens_lib;
if(cljs.core.truth_(and__5023__auto__)){
return app.common.types.tokens_lib.get_theme(tokens_lib,app.common.types.tokens_lib.get_id(self__.token_theme));
} else {
return and__5023__auto__;
}
})())){
return beicon.v2.core.of(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.token-theme-already-exists"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(9000)], null)));
} else {
var changes = app.common.files.changes_builder.set_token_theme(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),app.common.types.tokens_lib.get_id(self__.new_token_theme),self__.new_token_theme);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}
}));
}

return (new app.main.data.workspace.tokens.library_edit.create_token_theme_52475(token_theme,new_token_theme,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.update_token_theme = (function app$main$data$workspace$tokens$library_edit$update_token_theme(id,token_theme){
if((typeof app.main.data.workspace.tokens.library_edit.update_token_theme_52479 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.update_token_theme_52479 = (function (id,token_theme,meta52480){
this.id = id;
this.token_theme = token_theme;
this.meta52480 = meta52480;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.update_token_theme_52479.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.update_token_theme_52479.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","update-token-theme","app.main.data.workspace.tokens.library-edit/update-token-theme",1725915766);
}));

(app.main.data.workspace.tokens.library_edit.update_token_theme_52479.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52481,meta52480__$1){
var self__ = this;
var _52481__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.update_token_theme_52479(self__.id,self__.token_theme,meta52480__$1));
}));

(app.main.data.workspace.tokens.library_edit.update_token_theme_52479.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52481){
var self__ = this;
var _52481__$1 = this;
return self__.meta52480;
}));

(app.main.data.workspace.tokens.library_edit.update_token_theme_52479.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.update_token_theme_52479.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var tokens_lib = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991));
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(self__.id,app.common.types.tokens_lib.get_id(self__.token_theme));
if(and__5023__auto__){
return app.common.types.tokens_lib.get_theme(tokens_lib,app.common.types.tokens_lib.get_id(self__.token_theme));
} else {
return and__5023__auto__;
}
})())){
return beicon.v2.core.of(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.token-theme-already-exists"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(9000)], null)));
} else {
var changes = app.common.files.changes_builder.set_token_theme(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),app.common.types.tokens_lib.get_id(self__.token_theme),self__.token_theme);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}
}));
}

return (new app.main.data.workspace.tokens.library_edit.update_token_theme_52479(id,token_theme,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.set_token_theme_active = (function app$main$data$workspace$tokens$library_edit$set_token_theme_active(id,active_QMARK_){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","expected a uuid for `id`","\n","(uuid? id)"].join('')));
}

if(cljs.core.boolean_QMARK_(active_QMARK_)){
} else {
throw (new Error(["Assert failed: ","expected a boolean for `active?`","\n","(boolean? active?)"].join('')));
}

if((typeof app.main.data.workspace.tokens.library_edit.set_token_theme_active_52482 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.set_token_theme_active_52482 = (function (id,active_QMARK_,meta52483){
this.id = id;
this.active_QMARK_ = active_QMARK_;
this.meta52483 = meta52483;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.set_token_theme_active_52482.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.set_token_theme_active_52482.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","set-token-theme-active","app.main.data.workspace.tokens.library-edit/set-token-theme-active",1867802601);
}));

(app.main.data.workspace.tokens.library_edit.set_token_theme_active_52482.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52484,meta52483__$1){
var self__ = this;
var _52484__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.set_token_theme_active_52482(self__.id,self__.active_QMARK_,meta52483__$1));
}));

(app.main.data.workspace.tokens.library_edit.set_token_theme_active_52482.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52484){
var self__ = this;
var _52484__$1 = this;
return self__.meta52483;
}));

(app.main.data.workspace.tokens.library_edit.set_token_theme_active_52482.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.set_token_theme_active_52482.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var tokens_lib = app.main.data.workspace.tokens.library_edit.get_tokens_lib(state);
var changes = app.common.logic.tokens.generate_set_active_token_theme(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$0(),data),tokens_lib,self__.id,self__.active_QMARK_);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),app.main.data.workspace.tokens.propagation.propagate_workspace_tokens());
}));
}

return (new app.main.data.workspace.tokens.library_edit.set_token_theme_active_52482(id,active_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.toggle_token_theme_active = (function app$main$data$workspace$tokens$library_edit$toggle_token_theme_active(id){
if((typeof app.main.data.workspace.tokens.library_edit.toggle_token_theme_active_52485 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.toggle_token_theme_active_52485 = (function (id,meta52486){
this.id = id;
this.meta52486 = meta52486;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.toggle_token_theme_active_52485.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.toggle_token_theme_active_52485.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","toggle-token-theme-active","app.main.data.workspace.tokens.library-edit/toggle-token-theme-active",-57455161);
}));

(app.main.data.workspace.tokens.library_edit.toggle_token_theme_active_52485.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52487,meta52486__$1){
var self__ = this;
var _52487__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.toggle_token_theme_active_52485(self__.id,meta52486__$1));
}));

(app.main.data.workspace.tokens.library_edit.toggle_token_theme_active_52485.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52487){
var self__ = this;
var _52487__$1 = this;
return self__.meta52486;
}));

(app.main.data.workspace.tokens.library_edit.toggle_token_theme_active_52485.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.toggle_token_theme_active_52485.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var tokens_lib = app.main.data.workspace.tokens.library_edit.get_tokens_lib(state);
var changes = app.common.logic.tokens.generate_toggle_token_theme(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),tokens_lib,self__.id);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),app.main.data.workspace.tokens.propagation.propagate_workspace_tokens());
}));
}

return (new app.main.data.workspace.tokens.library_edit.toggle_token_theme_active_52485(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.delete_token_theme = (function app$main$data$workspace$tokens$library_edit$delete_token_theme(id){
if((typeof app.main.data.workspace.tokens.library_edit.delete_token_theme_52488 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.delete_token_theme_52488 = (function (id,meta52489){
this.id = id;
this.meta52489 = meta52489;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.delete_token_theme_52488.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.delete_token_theme_52488.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","delete-token-theme","app.main.data.workspace.tokens.library-edit/delete-token-theme",-1311408142);
}));

(app.main.data.workspace.tokens.library_edit.delete_token_theme_52488.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52490,meta52489__$1){
var self__ = this;
var _52490__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.delete_token_theme_52488(self__.id,meta52489__$1));
}));

(app.main.data.workspace.tokens.library_edit.delete_token_theme_52488.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52490){
var self__ = this;
var _52490__$1 = this;
return self__.meta52489;
}));

(app.main.data.workspace.tokens.library_edit.delete_token_theme_52488.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.delete_token_theme_52488.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var changes = app.common.files.changes_builder.set_token_theme(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),self__.id,null);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),app.main.data.workspace.tokens.propagation.propagate_workspace_tokens());
}));
}

return (new app.main.data.workspace.tokens.library_edit.delete_token_theme_52488(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.create_token_set = (function app$main$data$workspace$tokens$library_edit$create_token_set(token_set){
if(app.common.types.tokens_lib.token_set_QMARK_(token_set)){
} else {
throw (new Error(["Assert failed: ","a token set is required","\n","(ctob/token-set? token-set)"].join('')));
}

if((typeof app.main.data.workspace.tokens.library_edit.create_token_set_52491 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.create_token_set_52491 = (function (token_set,meta52492){
this.token_set = token_set;
this.meta52492 = meta52492;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.create_token_set_52491.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.create_token_set_52491.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","create-token-set","app.main.data.workspace.tokens.library-edit/create-token-set",-1509240223);
}));

(app.main.data.workspace.tokens.library_edit.create_token_set_52491.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52493,meta52492__$1){
var self__ = this;
var _52493__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.create_token_set_52491(self__.token_set,meta52492__$1));
}));

(app.main.data.workspace.tokens.library_edit.create_token_set_52491.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52493){
var self__ = this;
var _52493__$1 = this;
return self__.meta52492;
}));

(app.main.data.workspace.tokens.library_edit.create_token_set_52491.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.create_token_set_52491.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var changes = app.common.files.changes_builder.set_token_set(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),app.common.types.tokens_lib.get_id(self__.token_set),self__.token_set);
return beicon.v2.core.of((function (){var G__52494 = app.common.types.tokens_lib.get_id(self__.token_set);
return (app.main.data.workspace.tokens.library_edit.set_selected_token_set_id.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.tokens.library_edit.set_selected_token_set_id.cljs$core$IFn$_invoke$arity$1(G__52494) : app.main.data.workspace.tokens.library_edit.set_selected_token_set_id.call(null,G__52494));
})(),app.main.data.changes.commit_changes(changes));
}));
}

return (new app.main.data.workspace.tokens.library_edit.create_token_set_52491(token_set,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.rename_token_set = (function app$main$data$workspace$tokens$library_edit$rename_token_set(token_set,new_name){
if(app.common.types.tokens_lib.token_set_QMARK_(token_set)){
} else {
throw (new Error(["Assert failed: ","a token set is required","\n","(ctob/token-set? token-set)"].join('')));
}

if(typeof new_name === 'string'){
} else {
throw (new Error(["Assert failed: ","a new name is required","\n","(string? new-name)"].join('')));
}

if((typeof app.main.data.workspace.tokens.library_edit.update_token_set_52495 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.update_token_set_52495 = (function (token_set,new_name,meta52496){
this.token_set = token_set;
this.new_name = new_name;
this.meta52496 = meta52496;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.update_token_set_52495.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.update_token_set_52495.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","update-token-set","app.main.data.workspace.tokens.library-edit/update-token-set",-854753157);
}));

(app.main.data.workspace.tokens.library_edit.update_token_set_52495.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52497,meta52496__$1){
var self__ = this;
var _52497__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.update_token_set_52495(self__.token_set,self__.new_name,meta52496__$1));
}));

(app.main.data.workspace.tokens.library_edit.update_token_set_52495.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52497){
var self__ = this;
var _52497__$1 = this;
return self__.meta52496;
}));

(app.main.data.workspace.tokens.library_edit.update_token_set_52495.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.update_token_set_52495.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var changes = app.common.files.changes_builder.rename_token_set(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),app.common.types.tokens_lib.get_id(self__.token_set),self__.new_name);
return beicon.v2.core.of((function (){var G__52498 = app.common.types.tokens_lib.get_id(self__.token_set);
return (app.main.data.workspace.tokens.library_edit.set_selected_token_set_id.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.tokens.library_edit.set_selected_token_set_id.cljs$core$IFn$_invoke$arity$1(G__52498) : app.main.data.workspace.tokens.library_edit.set_selected_token_set_id.call(null,G__52498));
})(),app.main.data.changes.commit_changes(changes));
}));
}

return (new app.main.data.workspace.tokens.library_edit.update_token_set_52495(token_set,new_name,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.rename_token_set_group = (function app$main$data$workspace$tokens$library_edit$rename_token_set_group(set_group_path,set_group_fname){
if((typeof app.main.data.workspace.tokens.library_edit.rename_token_set_group_52499 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.rename_token_set_group_52499 = (function (set_group_path,set_group_fname,meta52500){
this.set_group_path = set_group_path;
this.set_group_fname = set_group_fname;
this.meta52500 = meta52500;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.rename_token_set_group_52499.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.rename_token_set_group_52499.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","rename-token-set-group","app.main.data.workspace.tokens.library-edit/rename-token-set-group",-1614537215);
}));

(app.main.data.workspace.tokens.library_edit.rename_token_set_group_52499.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52501,meta52500__$1){
var self__ = this;
var _52501__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.rename_token_set_group_52499(self__.set_group_path,self__.set_group_fname,meta52500__$1));
}));

(app.main.data.workspace.tokens.library_edit.rename_token_set_group_52499.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52501){
var self__ = this;
var _52501__$1 = this;
return self__.meta52500;
}));

(app.main.data.workspace.tokens.library_edit.rename_token_set_group_52499.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.rename_token_set_group_52499.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,_state,_){
var self__ = this;
var it__$1 = this;
var changes = app.common.files.changes_builder.rename_token_set_group(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),self__.set_group_path,self__.set_group_fname);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}));
}

return (new app.main.data.workspace.tokens.library_edit.rename_token_set_group_52499(set_group_path,set_group_fname,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.duplicate_token_set = (function app$main$data$workspace$tokens$library_edit$duplicate_token_set(id){
if((typeof app.main.data.workspace.tokens.library_edit.duplicate_token_set_52508 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.duplicate_token_set_52508 = (function (id,meta52509){
this.id = id;
this.meta52509 = meta52509;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.duplicate_token_set_52508.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.duplicate_token_set_52508.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","duplicate-token-set","app.main.data.workspace.tokens.library-edit/duplicate-token-set",-1673643418);
}));

(app.main.data.workspace.tokens.library_edit.duplicate_token_set_52508.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52510,meta52509__$1){
var self__ = this;
var _52510__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.duplicate_token_set_52508(self__.id,meta52509__$1));
}));

(app.main.data.workspace.tokens.library_edit.duplicate_token_set_52508.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52510){
var self__ = this;
var _52510__$1 = this;
return self__.meta52509;
}));

(app.main.data.workspace.tokens.library_edit.duplicate_token_set_52508.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.duplicate_token_set_52508.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var tokens_lib = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991));
var suffix = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.duplicate-suffix");
var temp__5825__auto__ = app.common.types.tokens_lib.duplicate_set.cljs$core$IFn$_invoke$arity$variadic(self__.id,tokens_lib,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"suffix","suffix",367373057),suffix], null)], 0));
if(cljs.core.truth_(temp__5825__auto__)){
var token_set = temp__5825__auto__;
var changes = app.common.files.changes_builder.set_token_set(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),app.common.types.tokens_lib.get_id(token_set),token_set);
return beicon.v2.core.of((function (){var G__52511 = app.common.types.tokens_lib.get_id(token_set);
return (app.main.data.workspace.tokens.library_edit.set_selected_token_set_id.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.tokens.library_edit.set_selected_token_set_id.cljs$core$IFn$_invoke$arity$1(G__52511) : app.main.data.workspace.tokens.library_edit.set_selected_token_set_id.call(null,G__52511));
})(),app.main.data.changes.commit_changes(changes));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.tokens.library_edit.duplicate_token_set_52508(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.set_enabled_token_set = (function app$main$data$workspace$tokens$library_edit$set_enabled_token_set(name,enabled_QMARK_){
if(typeof name === 'string'){
} else {
throw (new Error(["Assert failed: ","expected a string for `name`","\n","(string? name)"].join('')));
}

if(cljs.core.boolean_QMARK_(enabled_QMARK_)){
} else {
throw (new Error(["Assert failed: ","expected a boolean for `enabled?`","\n","(boolean? enabled?)"].join('')));
}

if((typeof app.main.data.workspace.tokens.library_edit.set_enabled_token_set_52512 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.set_enabled_token_set_52512 = (function (name,enabled_QMARK_,meta52513){
this.name = name;
this.enabled_QMARK_ = enabled_QMARK_;
this.meta52513 = meta52513;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.set_enabled_token_set_52512.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.set_enabled_token_set_52512.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","set-enabled-token-set","app.main.data.workspace.tokens.library-edit/set-enabled-token-set",-866264668);
}));

(app.main.data.workspace.tokens.library_edit.set_enabled_token_set_52512.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52514,meta52513__$1){
var self__ = this;
var _52514__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.set_enabled_token_set_52512(self__.name,self__.enabled_QMARK_,meta52513__$1));
}));

(app.main.data.workspace.tokens.library_edit.set_enabled_token_set_52512.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52514){
var self__ = this;
var _52514__$1 = this;
return self__.meta52513;
}));

(app.main.data.workspace.tokens.library_edit.set_enabled_token_set_52512.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.set_enabled_token_set_52512.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var tlib = app.main.data.workspace.tokens.library_edit.get_tokens_lib(state);
var changes = app.common.logic.tokens.generate_set_enabled_token_set(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$0(),data),tlib,self__.name,self__.enabled_QMARK_);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),app.main.data.workspace.tokens.propagation.propagate_workspace_tokens());
}));
}

return (new app.main.data.workspace.tokens.library_edit.set_enabled_token_set_52512(name,enabled_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.toggle_token_set = (function app$main$data$workspace$tokens$library_edit$toggle_token_set(name){
if(typeof name === 'string'){
} else {
throw (new Error(["Assert failed: ","expected a string for `name`","\n","(string? name)"].join('')));
}

if((typeof app.main.data.workspace.tokens.library_edit.toggle_token_set_52519 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.toggle_token_set_52519 = (function (name,meta52520){
this.name = name;
this.meta52520 = meta52520;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.toggle_token_set_52519.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.toggle_token_set_52519.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","toggle-token-set","app.main.data.workspace.tokens.library-edit/toggle-token-set",126220304);
}));

(app.main.data.workspace.tokens.library_edit.toggle_token_set_52519.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52521,meta52520__$1){
var self__ = this;
var _52521__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.toggle_token_set_52519(self__.name,meta52520__$1));
}));

(app.main.data.workspace.tokens.library_edit.toggle_token_set_52519.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52521){
var self__ = this;
var _52521__$1 = this;
return self__.meta52520;
}));

(app.main.data.workspace.tokens.library_edit.toggle_token_set_52519.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.toggle_token_set_52519.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var tlib = app.main.data.workspace.tokens.library_edit.get_tokens_lib(state);
var changes = app.common.logic.tokens.generate_toggle_token_set(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$0(),data),tlib,self__.name);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),app.main.data.workspace.tokens.propagation.propagate_workspace_tokens());
}));
}

return (new app.main.data.workspace.tokens.library_edit.toggle_token_set_52519(name,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.toggle_token_set_group = (function app$main$data$workspace$tokens$library_edit$toggle_token_set_group(group_path){
if((typeof app.main.data.workspace.tokens.library_edit.toggle_token_set_group_52522 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.toggle_token_set_group_52522 = (function (group_path,meta52523){
this.group_path = group_path;
this.meta52523 = meta52523;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.toggle_token_set_group_52522.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.toggle_token_set_group_52522.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","toggle-token-set-group","app.main.data.workspace.tokens.library-edit/toggle-token-set-group",132799458);
}));

(app.main.data.workspace.tokens.library_edit.toggle_token_set_group_52522.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52524,meta52523__$1){
var self__ = this;
var _52524__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.toggle_token_set_group_52522(self__.group_path,meta52523__$1));
}));

(app.main.data.workspace.tokens.library_edit.toggle_token_set_group_52522.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52524){
var self__ = this;
var _52524__$1 = this;
return self__.meta52523;
}));

(app.main.data.workspace.tokens.library_edit.toggle_token_set_group_52522.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.toggle_token_set_group_52522.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var changes = app.common.logic.tokens.generate_toggle_token_set_group(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$0(),data),app.main.data.workspace.tokens.library_edit.get_tokens_lib(state),self__.group_path);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),app.main.data.workspace.tokens.propagation.propagate_workspace_tokens());
}));
}

return (new app.main.data.workspace.tokens.library_edit.toggle_token_set_group_52522(group_path,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.import_tokens_lib = (function app$main$data$workspace$tokens$library_edit$import_tokens_lib(lib){
if((typeof app.main.data.workspace.tokens.library_edit.import_tokens_lib_52525 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.import_tokens_lib_52525 = (function (lib,meta52526){
this.lib = lib;
this.meta52526 = meta52526;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.import_tokens_lib_52525.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.import_tokens_lib_52525.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","import-tokens-lib","app.main.data.workspace.tokens.library-edit/import-tokens-lib",-907896943);
}));

(app.main.data.workspace.tokens.library_edit.import_tokens_lib_52525.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52527,meta52526__$1){
var self__ = this;
var _52527__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.import_tokens_lib_52525(self__.lib,meta52526__$1));
}));

(app.main.data.workspace.tokens.library_edit.import_tokens_lib_52525.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52527){
var self__ = this;
var _52527__$1 = this;
return self__.meta52526;
}));

(app.main.data.workspace.tokens.library_edit.import_tokens_lib_52525.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.import_tokens_lib_52525.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var changes = app.common.files.changes_builder.set_tokens_lib(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),self__.lib);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),app.main.data.workspace.tokens.propagation.propagate_workspace_tokens());
}));
}

return (new app.main.data.workspace.tokens.library_edit.import_tokens_lib_52525(lib,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.delete_token_set = (function app$main$data$workspace$tokens$library_edit$delete_token_set(id){
if((typeof app.main.data.workspace.tokens.library_edit.delete_token_set_52528 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.delete_token_set_52528 = (function (id,meta52529){
this.id = id;
this.meta52529 = meta52529;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.delete_token_set_52528.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.delete_token_set_52528.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","delete-token-set","app.main.data.workspace.tokens.library-edit/delete-token-set",-546870967);
}));

(app.main.data.workspace.tokens.library_edit.delete_token_set_52528.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52530,meta52529__$1){
var self__ = this;
var _52530__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.delete_token_set_52528(self__.id,meta52529__$1));
}));

(app.main.data.workspace.tokens.library_edit.delete_token_set_52528.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52530){
var self__ = this;
var _52530__$1 = this;
return self__.meta52529;
}));

(app.main.data.workspace.tokens.library_edit.delete_token_set_52528.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.delete_token_set_52528.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var changes = app.common.files.changes_builder.set_token_set(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),self__.id,null);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),app.main.data.workspace.tokens.propagation.propagate_workspace_tokens());
}));
}

return (new app.main.data.workspace.tokens.library_edit.delete_token_set_52528(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.delete_token_set_group = (function app$main$data$workspace$tokens$library_edit$delete_token_set_group(path){
if((typeof app.main.data.workspace.tokens.library_edit.delete_token_set_group_52531 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.delete_token_set_group_52531 = (function (path,meta52532){
this.path = path;
this.meta52532 = meta52532;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.delete_token_set_group_52531.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.delete_token_set_group_52531.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","delete-token-set-group","app.main.data.workspace.tokens.library-edit/delete-token-set-group",1613518656);
}));

(app.main.data.workspace.tokens.library_edit.delete_token_set_group_52531.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52533,meta52532__$1){
var self__ = this;
var _52533__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.delete_token_set_group_52531(self__.path,meta52532__$1));
}));

(app.main.data.workspace.tokens.library_edit.delete_token_set_group_52531.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52533){
var self__ = this;
var _52533__$1 = this;
return self__.meta52532;
}));

(app.main.data.workspace.tokens.library_edit.delete_token_set_group_52531.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.delete_token_set_group_52531.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var changes = app.common.logic.tokens.generate_delete_token_set_group(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),app.main.data.workspace.tokens.library_edit.get_tokens_lib(state),self__.path);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),app.main.data.workspace.tokens.propagation.propagate_workspace_tokens());
}));
}

return (new app.main.data.workspace.tokens.library_edit.delete_token_set_group_52531(path,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.drop_error = (function app$main$data$workspace$tokens$library_edit$drop_error(p__52534){
var map__52535 = p__52534;
var map__52535__$1 = cljs.core.__destructure_map(map__52535);
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52535__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var to_path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52535__$1,new cljs.core.Keyword(null,"to-path","to-path",-1087845742));
if((typeof app.main.data.workspace.tokens.library_edit.drop_error_52536 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.drop_error_52536 = (function (p__52534,map__52535,error,to_path,meta52537){
this.p__52534 = p__52534;
this.map__52535 = map__52535;
this.error = error;
this.to_path = to_path;
this.meta52537 = meta52537;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.drop_error_52536.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.drop_error_52536.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","drop-error","app.main.data.workspace.tokens.library-edit/drop-error",-1605070531);
}));

(app.main.data.workspace.tokens.library_edit.drop_error_52536.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52538,meta52537__$1){
var self__ = this;
var _52538__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.drop_error_52536(self__.p__52534,self__.map__52535,self__.error,self__.to_path,meta52537__$1));
}));

(app.main.data.workspace.tokens.library_edit.drop_error_52536.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52538){
var self__ = this;
var _52538__$1 = this;
return self__.meta52537;
}));

(app.main.data.workspace.tokens.library_edit.drop_error_52536.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.drop_error_52536.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var content = (function (){var G__52539 = self__.error;
var G__52539__$1 = (((G__52539 instanceof cljs.core.Keyword))?G__52539.fqn:null);
switch (G__52539__$1) {
case "path-exists":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.token-set-exists-on-drop",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.to_path], 0));

break;
case "parent-to-child":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.drop-token-set-parent-to-child");

break;
default:
return null;

}
})();
if(cljs.core.truth_(content)){
return beicon.v2.core.of(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),content,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(9000)], null)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.tokens.library_edit.drop_error_52536(p__52534,map__52535__$1,error,to_path,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.drop_token_set_group = (function app$main$data$workspace$tokens$library_edit$drop_token_set_group(drop_opts){
if((typeof app.main.data.workspace.tokens.library_edit.drop_token_set_group_52540 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.drop_token_set_group_52540 = (function (drop_opts,meta52541){
this.drop_opts = drop_opts;
this.meta52541 = meta52541;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.drop_token_set_group_52540.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.drop_token_set_group_52540.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","drop-token-set-group","app.main.data.workspace.tokens.library-edit/drop-token-set-group",1403859113);
}));

(app.main.data.workspace.tokens.library_edit.drop_token_set_group_52540.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52542,meta52541__$1){
var self__ = this;
var _52542__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.drop_token_set_group_52540(self__.drop_opts,meta52541__$1));
}));

(app.main.data.workspace.tokens.library_edit.drop_token_set_group_52540.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52542){
var self__ = this;
var _52542__$1 = this;
return self__.meta52541;
}));

(app.main.data.workspace.tokens.library_edit.drop_token_set_group_52540.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.drop_token_set_group_52540.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
try{var temp__5825__auto__ = app.common.logic.tokens.generate_move_token_set_group(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),app.main.data.workspace.tokens.library_edit.get_tokens_lib(state),self__.drop_opts);
if(cljs.core.truth_(temp__5825__auto__)){
var changes = temp__5825__auto__;
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),app.main.data.workspace.tokens.propagation.propagate_workspace_tokens());
} else {
return null;
}
}catch (e52543){var e = e52543;
return beicon.v2.core.of(app.main.data.workspace.tokens.library_edit.drop_error(cljs.core.ex_data(e)));
}}));
}

return (new app.main.data.workspace.tokens.library_edit.drop_token_set_group_52540(drop_opts,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.drop_token_set = (function app$main$data$workspace$tokens$library_edit$drop_token_set(params){
if((typeof app.main.data.workspace.tokens.library_edit.drop_token_set_52544 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.drop_token_set_52544 = (function (params,meta52545){
this.params = params;
this.meta52545 = meta52545;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.drop_token_set_52544.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.drop_token_set_52544.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","drop-token-set","app.main.data.workspace.tokens.library-edit/drop-token-set",1538739186);
}));

(app.main.data.workspace.tokens.library_edit.drop_token_set_52544.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52546,meta52545__$1){
var self__ = this;
var _52546__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.drop_token_set_52544(self__.params,meta52545__$1));
}));

(app.main.data.workspace.tokens.library_edit.drop_token_set_52544.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52546){
var self__ = this;
var _52546__$1 = this;
return self__.meta52545;
}));

(app.main.data.workspace.tokens.library_edit.drop_token_set_52544.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.drop_token_set_52544.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
try{var tokens_lib = app.main.data.workspace.tokens.library_edit.get_tokens_lib(state);
var changes = app.common.logic.tokens.generate_move_token_set(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),tokens_lib,self__.params);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),app.main.data.workspace.tokens.propagation.propagate_workspace_tokens());
}catch (e52547){var cause = e52547;
return beicon.v2.core.of(app.main.data.workspace.tokens.library_edit.drop_error(cljs.core.ex_data(cause)));
}}));
}

return (new app.main.data.workspace.tokens.library_edit.drop_token_set_52544(params,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * A special case when a first token is created and no set exists
 */
app.main.data.workspace.tokens.library_edit.create_token_with_set = (function app$main$data$workspace$tokens$library_edit$create_token_with_set(token){
if((typeof app.main.data.workspace.tokens.library_edit.create_token_and_set_52548 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.create_token_and_set_52548 = (function (token,meta52549){
this.token = token;
this.meta52549 = meta52549;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.create_token_and_set_52548.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.create_token_and_set_52548.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","create-token-and-set","app.main.data.workspace.tokens.library-edit/create-token-and-set",811480295);
}));

(app.main.data.workspace.tokens.library_edit.create_token_and_set_52548.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52550,meta52549__$1){
var self__ = this;
var _52550__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.create_token_and_set_52548(self__.token,meta52549__$1));
}));

(app.main.data.workspace.tokens.library_edit.create_token_and_set_52548.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52550){
var self__ = this;
var _52550__$1 = this;
return self__.meta52549;
}));

(app.main.data.workspace.tokens.library_edit.create_token_and_set_52548.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.create_token_and_set_52548.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var set_name = "Global";
var token_set = app.common.types.tokens_lib.make_token_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177),set_name], 0));
var hidden_theme = app.common.types.tokens_lib.make_hidden_theme();
var hidden_theme_with_set = hidden_theme.app$common$types$tokens_lib$ITokenTheme$enable_set$arity$2(null,set_name);
var changes = app.common.files.changes_builder.set_active_token_themes(app.common.files.changes_builder.set_token_theme(app.common.files.changes_builder.set_token(app.common.files.changes_builder.set_token_set(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$0(),data),token_set.app$common$types$tokens_lib$INamedItem$get_id$arity$1(null),token_set),token_set.app$common$types$tokens_lib$INamedItem$get_id$arity$1(null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.token),self__.token),hidden_theme.app$common$types$tokens_lib$INamedItem$get_id$arity$1(null),hidden_theme_with_set),cljs.core.PersistentHashSet.createAsIfByAssoc([app.common.types.tokens_lib.hidden_theme_path]));
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),(function (){var G__52552 = token_set.app$common$types$tokens_lib$INamedItem$get_id$arity$1(null);
return (app.main.data.workspace.tokens.library_edit.set_selected_token_set_id.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.tokens.library_edit.set_selected_token_set_id.cljs$core$IFn$_invoke$arity$1(G__52552) : app.main.data.workspace.tokens.library_edit.set_selected_token_set_id.call(null,G__52552));
})());
}));
}

return (new app.main.data.workspace.tokens.library_edit.create_token_and_set_52548(token,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.create_token = (function app$main$data$workspace$tokens$library_edit$create_token(var_args){
var G__52554 = arguments.length;
switch (G__52554) {
case 1:
return app.main.data.workspace.tokens.library_edit.create_token.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.workspace.tokens.library_edit.create_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.library_edit.create_token.cljs$core$IFn$_invoke$arity$1 = (function (token){
return app.main.data.workspace.tokens.library_edit.create_token.cljs$core$IFn$_invoke$arity$2(null,token);
}));

(app.main.data.workspace.tokens.library_edit.create_token.cljs$core$IFn$_invoke$arity$2 = (function (set_id,token){
if((typeof app.main.data.workspace.tokens.library_edit.create_token_52555 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.create_token_52555 = (function (set_id,token,meta52556){
this.set_id = set_id;
this.token = token;
this.meta52556 = meta52556;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.create_token_52555.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.create_token_52555.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","create-token","app.main.data.workspace.tokens.library-edit/create-token",486532545);
}));

(app.main.data.workspace.tokens.library_edit.create_token_52555.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52557,meta52556__$1){
var self__ = this;
var _52557__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.create_token_52555(self__.set_id,self__.token,meta52556__$1));
}));

(app.main.data.workspace.tokens.library_edit.create_token_52555.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52557){
var self__ = this;
var _52557__$1 = this;
return self__.meta52556;
}));

(app.main.data.workspace.tokens.library_edit.create_token_52555.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.create_token_52555.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var temp__5823__auto__ = (cljs.core.truth_(self__.set_id)?app.main.data.workspace.tokens.library_edit.lookup_token_set.cljs$core$IFn$_invoke$arity$2(state,self__.set_id):app.main.data.workspace.tokens.library_edit.lookup_token_set.cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(temp__5823__auto__)){
var token_set = temp__5823__auto__;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var token_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(self__.token);
var changes = app.common.files.changes_builder.set_token(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),app.common.types.tokens_lib.get_id(token_set),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.token),self__.token);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"create-token",new cljs.core.Keyword(null,"type","type",1174270348),token_type], null)));
} else {
return beicon.v2.core.of(app.main.data.workspace.tokens.library_edit.create_token_with_set(self__.token));
}
}));
}

return (new app.main.data.workspace.tokens.library_edit.create_token_52555(set_id,token,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.tokens.library_edit.create_token.cljs$lang$maxFixedArity = 2);

app.main.data.workspace.tokens.library_edit.update_token = (function app$main$data$workspace$tokens$library_edit$update_token(var_args){
var G__52559 = arguments.length;
switch (G__52559) {
case 2:
return app.main.data.workspace.tokens.library_edit.update_token.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.tokens.library_edit.update_token.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.tokens.library_edit.update_token.cljs$core$IFn$_invoke$arity$2 = (function (id,params){
return app.main.data.workspace.tokens.library_edit.update_token.cljs$core$IFn$_invoke$arity$3(null,id,params);
}));

(app.main.data.workspace.tokens.library_edit.update_token.cljs$core$IFn$_invoke$arity$3 = (function (set_id,id,params){
if(cljs.core.uuid_QMARK_(id)){
} else {
throw (new Error(["Assert failed: ","expected uuid for `id`","\n","(uuid? id)"].join('')));
}

if((typeof app.main.data.workspace.tokens.library_edit.update_token_52563 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.update_token_52563 = (function (set_id,id,params,meta52564){
this.set_id = set_id;
this.id = id;
this.params = params;
this.meta52564 = meta52564;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.update_token_52563.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.update_token_52563.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","update-token","app.main.data.workspace.tokens.library-edit/update-token",-1175110034);
}));

(app.main.data.workspace.tokens.library_edit.update_token_52563.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52565,meta52564__$1){
var self__ = this;
var _52565__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.update_token_52563(self__.set_id,self__.id,self__.params,meta52564__$1));
}));

(app.main.data.workspace.tokens.library_edit.update_token_52563.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52565){
var self__ = this;
var _52565__$1 = this;
return self__.meta52564;
}));

(app.main.data.workspace.tokens.library_edit.update_token_52563.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.update_token_52563.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var token_set = (cljs.core.truth_(self__.set_id)?app.main.data.workspace.tokens.library_edit.lookup_token_set.cljs$core$IFn$_invoke$arity$2(state,self__.set_id):app.main.data.workspace.tokens.library_edit.lookup_token_set.cljs$core$IFn$_invoke$arity$1(state));
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var token = app.common.types.tokens_lib.get_token(app.main.data.workspace.tokens.library_edit.get_tokens_lib(state),app.common.types.tokens_lib.get_id(token_set),self__.id);
var token_SINGLEQUOTE_ = app.common.types.tokens_lib.make_token.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([token,self__.params], 0)))], 0));
var token_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token);
var changes = app.common.files.changes_builder.set_token(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),app.common.types.tokens_lib.get_id(token_set),self__.id,token_SINGLEQUOTE_);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"edit-token",new cljs.core.Keyword(null,"type","type",1174270348),token_type], null)));
}));
}

return (new app.main.data.workspace.tokens.library_edit.update_token_52563(set_id,id,params,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.tokens.library_edit.update_token.cljs$lang$maxFixedArity = 3);

app.main.data.workspace.tokens.library_edit.delete_token = (function app$main$data$workspace$tokens$library_edit$delete_token(set_id,token_id){
app.common.data.macros.runtime_assert("expr assert: (uuid? set-id)",(function (){
return cljs.core.uuid_QMARK_(set_id);
}));

app.common.data.macros.runtime_assert("expr assert: (uuid? token-id)",(function (){
return cljs.core.uuid_QMARK_(token_id);
}));

if((typeof app.main.data.workspace.tokens.library_edit.delete_token_52573 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.delete_token_52573 = (function (set_id,token_id,meta52574){
this.set_id = set_id;
this.token_id = token_id;
this.meta52574 = meta52574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.delete_token_52573.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.delete_token_52573.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","delete-token","app.main.data.workspace.tokens.library-edit/delete-token",-1773722969);
}));

(app.main.data.workspace.tokens.library_edit.delete_token_52573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52575,meta52574__$1){
var self__ = this;
var _52575__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.delete_token_52573(self__.set_id,self__.token_id,meta52574__$1));
}));

(app.main.data.workspace.tokens.library_edit.delete_token_52573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52575){
var self__ = this;
var _52575__$1 = this;
return self__.meta52574;
}));

(app.main.data.workspace.tokens.library_edit.delete_token_52573.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.delete_token_52573.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var token_set = (cljs.core.truth_(self__.set_id)?app.main.data.workspace.tokens.library_edit.lookup_token_set.cljs$core$IFn$_invoke$arity$2(state,self__.set_id):app.main.data.workspace.tokens.library_edit.lookup_token_set.cljs$core$IFn$_invoke$arity$1(state));
var token = app.common.types.tokens_lib.get_token(app.main.data.workspace.tokens.library_edit.get_tokens_lib(state),app.common.types.tokens_lib.get_id(token_set),self__.token_id);
var token_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token);
var changes = app.common.files.changes_builder.set_token(app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),self__.set_id,self__.token_id,null);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"delete-token",new cljs.core.Keyword(null,"type","type",1174270348),token_type], null)));
}));
}

return (new app.main.data.workspace.tokens.library_edit.delete_token_52573(set_id,token_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.bulk_delete_tokens = (function app$main$data$workspace$tokens$library_edit$bulk_delete_tokens(set_id,token_ids){
app.common.data.macros.runtime_assert("expr assert: (uuid? set-id)",(function (){
return cljs.core.uuid_QMARK_(set_id);
}));

app.common.data.macros.runtime_assert("expr assert: (every? uuid? token-ids)",(function (){
return cljs.core.every_QMARK_(cljs.core.uuid_QMARK_,token_ids);
}));

if((typeof app.main.data.workspace.tokens.library_edit.bulk_delete_tokens_52576 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.bulk_delete_tokens_52576 = (function (set_id,token_ids,meta52577){
this.set_id = set_id;
this.token_ids = token_ids;
this.meta52577 = meta52577;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.bulk_delete_tokens_52576.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.bulk_delete_tokens_52576.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","bulk-delete-tokens","app.main.data.workspace.tokens.library-edit/bulk-delete-tokens",1951039856);
}));

(app.main.data.workspace.tokens.library_edit.bulk_delete_tokens_52576.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52578,meta52577__$1){
var self__ = this;
var _52578__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.bulk_delete_tokens_52576(self__.set_id,self__.token_ids,meta52577__$1));
}));

(app.main.data.workspace.tokens.library_edit.bulk_delete_tokens_52576.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52578){
var self__ = this;
var _52578__$1 = this;
return self__.meta52577;
}));

(app.main.data.workspace.tokens.library_edit.bulk_delete_tokens_52576.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.bulk_delete_tokens_52576.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var data = app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$1(state);
var changes = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (changes,token_id){
return app.common.files.changes_builder.set_token(changes,self__.set_id,token_id,null);
}),app.common.files.changes_builder.with_library_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),data),self__.token_ids);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"delete-token-node"], null)));
}));
}

return (new app.main.data.workspace.tokens.library_edit.bulk_delete_tokens_52576(set_id,token_ids,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.duplicate_token = (function app$main$data$workspace$tokens$library_edit$duplicate_token(token_id){
app.common.data.macros.runtime_assert("expr assert: (uuid? token-id)",(function (){
return cljs.core.uuid_QMARK_(token_id);
}));

if((typeof app.main.data.workspace.tokens.library_edit.duplicate_token_52584 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.duplicate_token_52584 = (function (token_id,meta52585){
this.token_id = token_id;
this.meta52585 = meta52585;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.duplicate_token_52584.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.duplicate_token_52584.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","duplicate-token","app.main.data.workspace.tokens.library-edit/duplicate-token",2037386924);
}));

(app.main.data.workspace.tokens.library_edit.duplicate_token_52584.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52586,meta52585__$1){
var self__ = this;
var _52586__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.duplicate_token_52584(self__.token_id,meta52585__$1));
}));

(app.main.data.workspace.tokens.library_edit.duplicate_token_52584.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52586){
var self__ = this;
var _52586__$1 = this;
return self__.meta52585;
}));

(app.main.data.workspace.tokens.library_edit.duplicate_token_52584.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.duplicate_token_52584.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var temp__5825__auto__ = app.main.data.workspace.tokens.library_edit.lookup_token_set.cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5825__auto__)){
var token_set = temp__5825__auto__;
var temp__5825__auto____$1 = app.main.data.workspace.tokens.library_edit.get_tokens_lib(state);
if(cljs.core.truth_(temp__5825__auto____$1)){
var tokens_lib = temp__5825__auto____$1;
var temp__5825__auto____$2 = app.common.types.tokens_lib.get_token(tokens_lib,app.common.types.tokens_lib.get_id(token_set),self__.token_id);
if(cljs.core.truth_(temp__5825__auto____$2)){
var token = temp__5825__auto____$2;
var tokens = cljs.core.vals(app.common.types.tokens_lib.get_tokens(tokens_lib,app.common.types.tokens_lib.get_id(token_set)));
var unames = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),tokens);
var suffix = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.duplicate-suffix");
var copy_name = app.common.files.helpers.generate_unique_name.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token),unames,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"suffix","suffix",367373057),suffix], 0));
var new_token = app.common.types.tokens_lib.rename(app.common.types.tokens_lib.reid(token,app.common.uuid.next()),copy_name);
return beicon.v2.core.of(app.main.data.workspace.tokens.library_edit.create_token.cljs$core$IFn$_invoke$arity$1(new_token));
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
}));
}

return (new app.main.data.workspace.tokens.library_edit.duplicate_token_52584(token_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.assign_token_context_menu = (function app$main$data$workspace$tokens$library_edit$assign_token_context_menu(p__52587){
var map__52588 = p__52587;
var map__52588__$1 = cljs.core.__destructure_map(map__52588);
var params = map__52588__$1;
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52588__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if(cljs.core.truth_(params)){
if(app.common.geom.point.point_QMARK_(position)){
} else {
throw (new Error(["Assert failed: ","expected a point instance for `position` param","\n","(gpt/point? position)"].join('')));
}
} else {
}

if((typeof app.main.data.workspace.tokens.library_edit.show_token_context_menu_52589 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.show_token_context_menu_52589 = (function (p__52587,map__52588,params,position,meta52590){
this.p__52587 = p__52587;
this.map__52588 = map__52588;
this.params = params;
this.position = position;
this.meta52590 = meta52590;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.show_token_context_menu_52589.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.show_token_context_menu_52589.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","show-token-context-menu","app.main.data.workspace.tokens.library-edit/show-token-context-menu",-762808545);
}));

(app.main.data.workspace.tokens.library_edit.show_token_context_menu_52589.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52591,meta52590__$1){
var self__ = this;
var _52591__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.show_token_context_menu_52589(self__.p__52587,self__.map__52588,self__.params,self__.position,meta52590__$1));
}));

(app.main.data.workspace.tokens.library_edit.show_token_context_menu_52589.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52591){
var self__ = this;
var _52591__$1 = this;
return self__.meta52590;
}));

(app.main.data.workspace.tokens.library_edit.show_token_context_menu_52589.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.show_token_context_menu_52589.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.params)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"workspace-tokens","workspace-tokens",-15136920),cljs.core.assoc,new cljs.core.Keyword(null,"token-context-menu","token-context-menu",1588110807),self__.params);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"workspace-tokens","workspace-tokens",-15136920),cljs.core.dissoc,new cljs.core.Keyword(null,"token-context-menu","token-context-menu",1588110807));
}
}));
}

return (new app.main.data.workspace.tokens.library_edit.show_token_context_menu_52589(p__52587,map__52588__$1,params,position,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.assign_token_node_context_menu = (function app$main$data$workspace$tokens$library_edit$assign_token_node_context_menu(p__52592){
var map__52593 = p__52592;
var map__52593__$1 = cljs.core.__destructure_map(map__52593);
var params = map__52593__$1;
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52593__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if(cljs.core.truth_(params)){
if(app.common.geom.point.point_QMARK_(position)){
} else {
throw (new Error(["Assert failed: ","expected a point instance for `position` param","\n","(gpt/point? position)"].join('')));
}
} else {
}

if((typeof app.main.data.workspace.tokens.library_edit.show_token_node_context_menu_52594 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.show_token_node_context_menu_52594 = (function (p__52592,map__52593,params,position,meta52595){
this.p__52592 = p__52592;
this.map__52593 = map__52593;
this.params = params;
this.position = position;
this.meta52595 = meta52595;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.show_token_node_context_menu_52594.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.show_token_node_context_menu_52594.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","show-token-node-context-menu","app.main.data.workspace.tokens.library-edit/show-token-node-context-menu",-627556815);
}));

(app.main.data.workspace.tokens.library_edit.show_token_node_context_menu_52594.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52596,meta52595__$1){
var self__ = this;
var _52596__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.show_token_node_context_menu_52594(self__.p__52592,self__.map__52593,self__.params,self__.position,meta52595__$1));
}));

(app.main.data.workspace.tokens.library_edit.show_token_node_context_menu_52594.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52596){
var self__ = this;
var _52596__$1 = this;
return self__.meta52595;
}));

(app.main.data.workspace.tokens.library_edit.show_token_node_context_menu_52594.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.show_token_node_context_menu_52594.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.params)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"workspace-tokens","workspace-tokens",-15136920),cljs.core.assoc,new cljs.core.Keyword(null,"token-node-context-menu","token-node-context-menu",-107694707),self__.params);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"workspace-tokens","workspace-tokens",-15136920),cljs.core.dissoc,new cljs.core.Keyword(null,"token-node-context-menu","token-node-context-menu",-107694707));
}
}));
}

return (new app.main.data.workspace.tokens.library_edit.show_token_node_context_menu_52594(p__52592,map__52593__$1,params,position,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.assign_token_set_context_menu = (function app$main$data$workspace$tokens$library_edit$assign_token_set_context_menu(p__52597){
var map__52598 = p__52597;
var map__52598__$1 = cljs.core.__destructure_map(map__52598);
var params = map__52598__$1;
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52598__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
if(cljs.core.truth_(params)){
if(app.common.geom.point.point_QMARK_(position)){
} else {
throw (new Error(["Assert failed: ","expected valid point for `position` param","\n","(gpt/point? position)"].join('')));
}
} else {
}

if((typeof app.main.data.workspace.tokens.library_edit.assign_token_set_context_menu_52599 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.assign_token_set_context_menu_52599 = (function (p__52597,map__52598,params,position,meta52600){
this.p__52597 = p__52597;
this.map__52598 = map__52598;
this.params = params;
this.position = position;
this.meta52600 = meta52600;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.assign_token_set_context_menu_52599.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.assign_token_set_context_menu_52599.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","assign-token-set-context-menu","app.main.data.workspace.tokens.library-edit/assign-token-set-context-menu",473661719);
}));

(app.main.data.workspace.tokens.library_edit.assign_token_set_context_menu_52599.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52601,meta52600__$1){
var self__ = this;
var _52601__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.assign_token_set_context_menu_52599(self__.p__52597,self__.map__52598,self__.params,self__.position,meta52600__$1));
}));

(app.main.data.workspace.tokens.library_edit.assign_token_set_context_menu_52599.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52601){
var self__ = this;
var _52601__$1 = this;
return self__.meta52600;
}));

(app.main.data.workspace.tokens.library_edit.assign_token_set_context_menu_52599.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.assign_token_set_context_menu_52599.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.params)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"workspace-tokens","workspace-tokens",-15136920),cljs.core.assoc,new cljs.core.Keyword(null,"token-set-context-menu","token-set-context-menu",1640583502),self__.params);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"workspace-tokens","workspace-tokens",-15136920),cljs.core.dissoc,new cljs.core.Keyword(null,"token-set-context-menu","token-set-context-menu",1640583502));
}
}));
}

return (new app.main.data.workspace.tokens.library_edit.assign_token_set_context_menu_52599(p__52597,map__52598__$1,params,position,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.set_selected_token_set_id = (function app$main$data$workspace$tokens$library_edit$set_selected_token_set_id(id){
if((typeof app.main.data.workspace.tokens.library_edit.set_selected_token_set_id_52602 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.set_selected_token_set_id_52602 = (function (id,meta52603){
this.id = id;
this.meta52603 = meta52603;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.set_selected_token_set_id_52602.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.set_selected_token_set_id_52602.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","set-selected-token-set-id","app.main.data.workspace.tokens.library-edit/set-selected-token-set-id",1953220092);
}));

(app.main.data.workspace.tokens.library_edit.set_selected_token_set_id_52602.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52604,meta52603__$1){
var self__ = this;
var _52604__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.set_selected_token_set_id_52602(self__.id,meta52603__$1));
}));

(app.main.data.workspace.tokens.library_edit.set_selected_token_set_id_52602.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52604){
var self__ = this;
var _52604__$1 = this;
return self__.meta52603;
}));

(app.main.data.workspace.tokens.library_edit.set_selected_token_set_id_52602.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.set_selected_token_set_id_52602.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"workspace-tokens","workspace-tokens",-15136920),cljs.core.assoc,new cljs.core.Keyword(null,"selected-token-set-id","selected-token-set-id",-1828640116),self__.id);
}));
}

return (new app.main.data.workspace.tokens.library_edit.set_selected_token_set_id_52602(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.start_token_set_edition = (function app$main$data$workspace$tokens$library_edit$start_token_set_edition(edition_id){
if(((typeof edition_id === 'string') || (cljs.core.uuid_QMARK_(edition_id)))){
} else {
throw (new Error(["Assert failed: ","expected a string or uuid for `edition-id`","\n","(or (string? edition-id) (uuid? edition-id))"].join('')));
}

if((typeof app.main.data.workspace.tokens.library_edit.start_token_set_edition_52605 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.start_token_set_edition_52605 = (function (edition_id,meta52606){
this.edition_id = edition_id;
this.meta52606 = meta52606;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.start_token_set_edition_52605.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.start_token_set_edition_52605.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","start-token-set-edition","app.main.data.workspace.tokens.library-edit/start-token-set-edition",-1181165769);
}));

(app.main.data.workspace.tokens.library_edit.start_token_set_edition_52605.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52607,meta52606__$1){
var self__ = this;
var _52607__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.start_token_set_edition_52605(self__.edition_id,meta52606__$1));
}));

(app.main.data.workspace.tokens.library_edit.start_token_set_edition_52605.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52607){
var self__ = this;
var _52607__$1 = this;
return self__.meta52606;
}));

(app.main.data.workspace.tokens.library_edit.start_token_set_edition_52605.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.start_token_set_edition_52605.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"workspace-tokens","workspace-tokens",-15136920),cljs.core.assoc,new cljs.core.Keyword(null,"token-set-edition-id","token-set-edition-id",-457766729),self__.edition_id);
}));
}

return (new app.main.data.workspace.tokens.library_edit.start_token_set_edition_52605(edition_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.start_token_set_creation = (function app$main$data$workspace$tokens$library_edit$start_token_set_creation(path){
if(cljs.core.vector_QMARK_(path)){
} else {
throw (new Error(["Assert failed: ","expected a vector for `path`","\n","(vector? path)"].join('')));
}

if((typeof app.main.data.workspace.tokens.library_edit.start_token_set_creation_52608 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.start_token_set_creation_52608 = (function (path,meta52609){
this.path = path;
this.meta52609 = meta52609;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.start_token_set_creation_52608.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.start_token_set_creation_52608.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","start-token-set-creation","app.main.data.workspace.tokens.library-edit/start-token-set-creation",-2023312002);
}));

(app.main.data.workspace.tokens.library_edit.start_token_set_creation_52608.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52610,meta52609__$1){
var self__ = this;
var _52610__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.start_token_set_creation_52608(self__.path,meta52609__$1));
}));

(app.main.data.workspace.tokens.library_edit.start_token_set_creation_52608.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52610){
var self__ = this;
var _52610__$1 = this;
return self__.meta52609;
}));

(app.main.data.workspace.tokens.library_edit.start_token_set_creation_52608.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.start_token_set_creation_52608.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"workspace-tokens","workspace-tokens",-15136920),cljs.core.assoc,new cljs.core.Keyword(null,"token-set-new-path","token-set-new-path",-718647152),self__.path);
}));
}

return (new app.main.data.workspace.tokens.library_edit.start_token_set_creation_52608(path,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.clear_token_set_edition = (function app$main$data$workspace$tokens$library_edit$clear_token_set_edition(){
if((typeof app.main.data.workspace.tokens.library_edit.clear_token_set_edition_52611 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.clear_token_set_edition_52611 = (function (meta52612){
this.meta52612 = meta52612;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.clear_token_set_edition_52611.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.clear_token_set_edition_52611.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","clear-token-set-edition","app.main.data.workspace.tokens.library-edit/clear-token-set-edition",-1445403962);
}));

(app.main.data.workspace.tokens.library_edit.clear_token_set_edition_52611.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52613,meta52612__$1){
var self__ = this;
var _52613__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.clear_token_set_edition_52611(meta52612__$1));
}));

(app.main.data.workspace.tokens.library_edit.clear_token_set_edition_52611.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52613){
var self__ = this;
var _52613__$1 = this;
return self__.meta52612;
}));

(app.main.data.workspace.tokens.library_edit.clear_token_set_edition_52611.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.clear_token_set_edition_52611.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"workspace-tokens","workspace-tokens",-15136920),cljs.core.dissoc,new cljs.core.Keyword(null,"token-set-edition-id","token-set-edition-id",-457766729));
}));
}

return (new app.main.data.workspace.tokens.library_edit.clear_token_set_edition_52611(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.tokens.library_edit.clear_token_set_creation = (function app$main$data$workspace$tokens$library_edit$clear_token_set_creation(){
if((typeof app.main.data.workspace.tokens.library_edit.clear_token_set_creation_52614 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.tokens.library_edit.clear_token_set_creation_52614 = (function (meta52615){
this.meta52615 = meta52615;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.tokens.library_edit.clear_token_set_creation_52614.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.clear_token_set_creation_52614.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.tokens.library-edit","clear-token-set-creation","app.main.data.workspace.tokens.library-edit/clear-token-set-creation",-574025068);
}));

(app.main.data.workspace.tokens.library_edit.clear_token_set_creation_52614.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_52616,meta52615__$1){
var self__ = this;
var _52616__$1 = this;
return (new app.main.data.workspace.tokens.library_edit.clear_token_set_creation_52614(meta52615__$1));
}));

(app.main.data.workspace.tokens.library_edit.clear_token_set_creation_52614.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_52616){
var self__ = this;
var _52616__$1 = this;
return self__.meta52615;
}));

(app.main.data.workspace.tokens.library_edit.clear_token_set_creation_52614.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.tokens.library_edit.clear_token_set_creation_52614.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"workspace-tokens","workspace-tokens",-15136920),cljs.core.dissoc,new cljs.core.Keyword(null,"token-set-new-path","token-set-new-path",-718647152));
}));
}

return (new app.main.data.workspace.tokens.library_edit.clear_token_set_creation_52614(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.tokens.library_edit.js.map
