import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.logging.js";
import "./app.main.data.profile.js";
import "./app.main.data.workspace.layout.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.common');
app.common.logging.loggers.set("app.main.data.workspace.common",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"warn","warn",-436710552)));
/**
 * Check if the state is properly initialized in a workspace. This means
 *   it has the `:current-page-id` and `:current-file-id` properly set.
 */
app.main.data.workspace.common.initialized_QMARK_ = (function app$main$data$workspace$common$initialized_QMARK_(state){
return ((cljs.core.uuid_QMARK_(new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state))) && (cljs.core.uuid_QMARK_(new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state))));
});
app.main.data.workspace.common.interrupt_QMARK_ = (function app$main$data$workspace$common$interrupt_QMARK_(e){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(e,new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178));
});
app.main.data.workspace.common.set_workspace_visited = (function app$main$data$workspace$common$set_workspace_visited(){
if((typeof app.main.data.workspace.common.set_workspace_visited_48315 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.common.set_workspace_visited_48315 = (function (meta48316){
this.meta48316 = meta48316;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.common.set_workspace_visited_48315.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.common.set_workspace_visited_48315.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.common","set-workspace-visited","app.main.data.workspace.common/set-workspace-visited",-1135725929);
}));

(app.main.data.workspace.common.set_workspace_visited_48315.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48317,meta48316__$1){
var self__ = this;
var _48317__$1 = this;
return (new app.main.data.workspace.common.set_workspace_visited_48315(meta48316__$1));
}));

(app.main.data.workspace.common.set_workspace_visited_48315.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48317){
var self__ = this;
var _48317__$1 = this;
return self__.meta48316;
}));

(app.main.data.workspace.common.set_workspace_visited_48315.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.common.set_workspace_visited_48315.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var profile = new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(state);
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(profile,new cljs.core.Keyword(null,"props","props",453281727));
if(cljs.core.not(new cljs.core.Keyword(null,"workspace-visited","workspace-visited",479274314).cljs$core$IFn$_invoke$arity$1(props))){
return beicon.v2.core.of(app.main.data.profile.update_profile_props(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"workspace-visited","workspace-visited",479274314),true], null)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.common.set_workspace_visited_48315(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.common.hide_toolbar = (function app$main$data$workspace$common$hide_toolbar(){
if((typeof app.main.data.workspace.common.hide_toolbar_48326 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.common.hide_toolbar_48326 = (function (meta48327){
this.meta48327 = meta48327;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.common.hide_toolbar_48326.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.common.hide_toolbar_48326.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.common","hide-toolbar","app.main.data.workspace.common/hide-toolbar",-571096346);
}));

(app.main.data.workspace.common.hide_toolbar_48326.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48328,meta48327__$1){
var self__ = this;
var _48328__$1 = this;
return (new app.main.data.workspace.common.hide_toolbar_48326(meta48327__$1));
}));

(app.main.data.workspace.common.hide_toolbar_48326.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48328){
var self__ = this;
var _48328__$1 = this;
return self__.meta48327;
}));

(app.main.data.workspace.common.hide_toolbar_48326.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.common.hide_toolbar_48326.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"hide-toolbar","hide-toolbar",-1320052666)], null),true);
}));
}

return (new app.main.data.workspace.common.hide_toolbar_48326(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.common.show_toolbar = (function app$main$data$workspace$common$show_toolbar(){
if((typeof app.main.data.workspace.common.show_toolbar_48329 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.common.show_toolbar_48329 = (function (meta48330){
this.meta48330 = meta48330;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.common.show_toolbar_48329.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.common.show_toolbar_48329.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.common","show-toolbar","app.main.data.workspace.common/show-toolbar",-1535177689);
}));

(app.main.data.workspace.common.show_toolbar_48329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48331,meta48330__$1){
var self__ = this;
var _48331__$1 = this;
return (new app.main.data.workspace.common.show_toolbar_48329(meta48330__$1));
}));

(app.main.data.workspace.common.show_toolbar_48329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48331){
var self__ = this;
var _48331__$1 = this;
return self__.meta48330;
}));

(app.main.data.workspace.common.show_toolbar_48329.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.common.show_toolbar_48329.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"hide-toolbar","hide-toolbar",-1320052666)], null),false);
}));
}

return (new app.main.data.workspace.common.show_toolbar_48329(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.common.toggle_toolbar_visibility = (function app$main$data$workspace$common$toggle_toolbar_visibility(){
if((typeof app.main.data.workspace.common.toggle_toolbar_visibility_48337 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.common.toggle_toolbar_visibility_48337 = (function (meta48338){
this.meta48338 = meta48338;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.common.toggle_toolbar_visibility_48337.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.common.toggle_toolbar_visibility_48337.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.common","toggle-toolbar-visibility","app.main.data.workspace.common/toggle-toolbar-visibility",-924303789);
}));

(app.main.data.workspace.common.toggle_toolbar_visibility_48337.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48339,meta48338__$1){
var self__ = this;
var _48339__$1 = this;
return (new app.main.data.workspace.common.toggle_toolbar_visibility_48337(meta48338__$1));
}));

(app.main.data.workspace.common.toggle_toolbar_visibility_48337.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48339){
var self__ = this;
var _48339__$1 = this;
return self__.meta48338;
}));

(app.main.data.workspace.common.toggle_toolbar_visibility_48337.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.common.toggle_toolbar_visibility_48337.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"hide-toolbar","hide-toolbar",-1320052666)], null),cljs.core.not);
}));
}

return (new app.main.data.workspace.common.toggle_toolbar_visibility_48337(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.common.set_workspace_read_only = (function app$main$data$workspace$common$set_workspace_read_only(read_only_QMARK_){
if((typeof app.main.data.workspace.common.set_workspace_read_only_48344 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.common.set_workspace_read_only_48344 = (function (read_only_QMARK_,meta48345){
this.read_only_QMARK_ = read_only_QMARK_;
this.meta48345 = meta48345;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.common.set_workspace_read_only_48344.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.common.set_workspace_read_only_48344.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.common","set-workspace-read-only","app.main.data.workspace.common/set-workspace-read-only",685254856);
}));

(app.main.data.workspace.common.set_workspace_read_only_48344.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48346,meta48345__$1){
var self__ = this;
var _48346__$1 = this;
return (new app.main.data.workspace.common.set_workspace_read_only_48344(self__.read_only_QMARK_,meta48345__$1));
}));

(app.main.data.workspace.common.set_workspace_read_only_48344.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48346){
var self__ = this;
var _48346__$1 = this;
return self__.meta48345;
}));

(app.main.data.workspace.common.set_workspace_read_only_48344.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.common.set_workspace_read_only_48344.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),cljs.core.assoc,new cljs.core.Keyword(null,"read-only?","read-only?",-770285386),self__.read_only_QMARK_);
}));

(app.main.data.workspace.common.set_workspace_read_only_48344.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.common.set_workspace_read_only_48344.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
if(cljs.core.truth_(self__.read_only_QMARK_)){
return beicon.v2.core.of(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178),app.main.data.workspace.layout.remove_layout_flag(new cljs.core.Keyword(null,"colorpalette","colorpalette",-2142723517)),app.main.data.workspace.layout.remove_layout_flag(new cljs.core.Keyword(null,"textpalette","textpalette",-1296342868)));
} else {
return beicon.v2.core.empty();
}
}));
}

return (new app.main.data.workspace.common.set_workspace_read_only_48344(read_only_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.common.js.map
