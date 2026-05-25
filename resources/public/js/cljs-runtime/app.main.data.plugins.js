import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes_builder.js";
import "./app.common.time.js";
import "./app.main.data.changes.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.store.js";
import "./app.plugins.flags.js";
import "./app.plugins.register.js";
import "./app.util.globals.js";
import "./app.util.http.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.plugins');
app.main.data.plugins.save_plugin_permissions_peek = (function app$main$data$plugins$save_plugin_permissions_peek(id,permissions){
if((typeof app.main.data.plugins.save_plugin_permissions_peek_38035 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.plugins.save_plugin_permissions_peek_38035 = (function (id,permissions,meta38036){
this.id = id;
this.permissions = permissions;
this.meta38036 = meta38036;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.plugins.save_plugin_permissions_peek_38035.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.plugins.save_plugin_permissions_peek_38035.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.plugins","save-plugin-permissions-peek","app.main.data.plugins/save-plugin-permissions-peek",1462044449);
}));

(app.main.data.plugins.save_plugin_permissions_peek_38035.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38037,meta38036__$1){
var self__ = this;
var _38037__$1 = this;
return (new app.main.data.plugins.save_plugin_permissions_peek_38035(self__.id,self__.permissions,meta38036__$1));
}));

(app.main.data.plugins.save_plugin_permissions_peek_38035.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38037){
var self__ = this;
var _38037__$1 = this;
return self__.meta38036;
}));

(app.main.data.plugins.save_plugin_permissions_peek_38035.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.plugins.save_plugin_permissions_peek_38035.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugins-permissions-peek","plugins-permissions-peek",1646727084),new cljs.core.Keyword(null,"data","data",-232669377),self__.id], null),self__.permissions);
}));
}

return (new app.main.data.plugins.save_plugin_permissions_peek_38035(id,permissions,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.plugins.fetch_manifest = (function app$main$data$plugins$fetch_manifest(plugin_url){
return beicon.v2.core.map((function (p1__38043_SHARP_){
return app.plugins.register.parse_manifest(plugin_url,p1__38043_SHARP_);
}),beicon.v2.core.map(new cljs.core.Keyword(null,"body","body",-2049205669),app.util.http.send_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),plugin_url,new cljs.core.Keyword(null,"omit-default-headers","omit-default-headers",-2108409502),true,new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword(null,"json","json",1279968570)], null))));
});
app.main.data.plugins.save_current_plugin = (function app$main$data$plugins$save_current_plugin(id){
if((typeof app.main.data.plugins.save_current_plugin_38044 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.plugins.save_current_plugin_38044 = (function (id,meta38045){
this.id = id;
this.meta38045 = meta38045;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.plugins.save_current_plugin_38044.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.plugins.save_current_plugin_38044.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.plugins","save-current-plugin","app.main.data.plugins/save-current-plugin",-587981712);
}));

(app.main.data.plugins.save_current_plugin_38044.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38046,meta38045__$1){
var self__ = this;
var _38046__$1 = this;
return (new app.main.data.plugins.save_current_plugin_38044(self__.id,meta38045__$1));
}));

(app.main.data.plugins.save_current_plugin_38044.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38046){
var self__ = this;
var _38046__$1 = this;
return self__.meta38045;
}));

(app.main.data.plugins.save_current_plugin_38044.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.plugins.save_current_plugin_38044.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"open-plugins","open-plugins",-1053139426)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),self__.id);
}));
}

return (new app.main.data.plugins.save_current_plugin_38044(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.plugins.remove_current_plugin = (function app$main$data$plugins$remove_current_plugin(id){
if((typeof app.main.data.plugins.remove_current_plugin_38050 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.plugins.remove_current_plugin_38050 = (function (id,meta38051){
this.id = id;
this.meta38051 = meta38051;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.plugins.remove_current_plugin_38050.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.plugins.remove_current_plugin_38050.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.plugins","remove-current-plugin","app.main.data.plugins/remove-current-plugin",-488575711);
}));

(app.main.data.plugins.remove_current_plugin_38050.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38052,meta38051__$1){
var self__ = this;
var _38052__$1 = this;
return (new app.main.data.plugins.remove_current_plugin_38050(self__.id,meta38051__$1));
}));

(app.main.data.plugins.remove_current_plugin_38050.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38052){
var self__ = this;
var _38052__$1 = this;
return self__.meta38051;
}));

(app.main.data.plugins.remove_current_plugin_38050.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.plugins.remove_current_plugin_38050.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"open-plugins","open-plugins",-1053139426)], null),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.disj,cljs.core.PersistentHashSet.EMPTY),self__.id);
}));
}

return (new app.main.data.plugins.remove_current_plugin_38050(id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.plugins.load_plugin_BANG_ = (function app$main$data$plugins$load_plugin_BANG_(p__38056){
var map__38057 = p__38056;
var map__38057__$1 = cljs.core.__destructure_map(map__38057);
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38057__$1,new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38057__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var description = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38057__$1,new cljs.core.Keyword(null,"description","description",-1428560544));
var host = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38057__$1,new cljs.core.Keyword(null,"host","host",-1558485167));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38057__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var icon = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38057__$1,new cljs.core.Keyword(null,"icon","icon",1679606541));
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38057__$1,new cljs.core.Keyword(null,"permissions","permissions",67803075));
try{app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.plugins.flags.clear(plugin_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.plugins.save_current_plugin(plugin_id)], 0));

return app.util.globals.global.ɵloadPlugin(({"pluginId": plugin_id, "name": name, "description": description, "host": host, "code": code, "icon": icon, "permissions": cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,permissions)}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.plugins.remove_current_plugin(plugin_id));
}));
}catch (e38058){var e = e38058;
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.plugins.remove_current_plugin(plugin_id));

return console.error("Error",e);
}});
app.main.data.plugins.open_plugin_BANG_ = (function app$main$data$plugins$open_plugin_BANG_(p__38066,user_can_edit_QMARK_){
var map__38067 = p__38066;
var map__38067__$1 = cljs.core.__destructure_map(map__38067);
var manifest = map__38067__$1;
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38067__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(cljs.core.truth_(url)){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (new_manifest){
var new_manifest__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_manifest,cljs.core.select_keys(manifest,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395)], null))], 0));
var permissions = new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(new_manifest__$1);
var is_edition_plugin_QMARK_ = ((cljs.core.contains_QMARK_(permissions,"content:write")) || (cljs.core.contains_QMARK_(permissions,"library:write")));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.plugins.save_plugin_permissions_peek(new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395).cljs$core$IFn$_invoke$arity$1(new_manifest__$1),permissions));

if(((is_edition_plugin_QMARK_) && (cljs.core.not(user_can_edit_QMARK_)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.warn.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.plugins.error.need-editor")));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(new_manifest__$1),new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(manifest))){
return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"plugin-permissions-update","plugin-permissions-update",-1916481193),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"plugin","plugin",-1688841923),new_manifest__$1,new cljs.core.Keyword(null,"on-accept","on-accept",705439955),(function (){
app.plugins.register.install_plugin_BANG_(new_manifest__$1);

return app.main.data.plugins.load_plugin_BANG_(new_manifest__$1);
})], null));
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_manifest__$1,manifest)){
app.plugins.register.install_plugin_BANG_(new_manifest__$1);

return app.main.data.plugins.load_plugin_BANG_(manifest);
} else {
return app.main.data.plugins.load_plugin_BANG_(manifest);

}
}
}
}),(function (){
return app.main.data.plugins.load_plugin_BANG_(manifest);
}),app.main.data.plugins.fetch_manifest(url));
} else {
return app.main.data.plugins.load_plugin_BANG_(manifest);
}
});
app.main.data.plugins.close_plugin_BANG_ = (function app$main$data$plugins$close_plugin_BANG_(p__38071){
var map__38072 = p__38071;
var map__38072__$1 = cljs.core.__destructure_map(map__38072);
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38072__$1,new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395));
try{return app.util.globals.global.ɵunloadPlugin(plugin_id);
}catch (e38076){var e = e38076;
return console.error("Error",e);
}});
app.main.data.plugins.close_current_plugin = (function app$main$data$plugins$close_current_plugin(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38227 = arguments.length;
var i__5750__auto___38228 = (0);
while(true){
if((i__5750__auto___38228 < len__5749__auto___38227)){
args__5755__auto__.push((arguments[i__5750__auto___38228]));

var G__38234 = (i__5750__auto___38228 + (1));
i__5750__auto___38228 = G__38234;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.data.plugins.close_current_plugin.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.data.plugins.close_current_plugin.cljs$core$IFn$_invoke$arity$variadic = (function (p__38095){
var map__38096 = p__38095;
var map__38096__$1 = cljs.core.__destructure_map(map__38096);
var close_only_edition_plugins_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38096__$1,new cljs.core.Keyword(null,"close-only-edition-plugins?","close-only-edition-plugins?",1950979027));
if((typeof app.main.data.plugins.close_current_plugin_38097 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.plugins.close_current_plugin_38097 = (function (p__38095,map__38096,close_only_edition_plugins_QMARK_,meta38098){
this.p__38095 = p__38095;
this.map__38096 = map__38096;
this.close_only_edition_plugins_QMARK_ = close_only_edition_plugins_QMARK_;
this.meta38098 = meta38098;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.plugins.close_current_plugin_38097.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.plugins.close_current_plugin_38097.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.plugins","close-current-plugin","app.main.data.plugins/close-current-plugin",-1566988759);
}));

(app.main.data.plugins.close_current_plugin_38097.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38099,meta38098__$1){
var self__ = this;
var _38099__$1 = this;
return (new app.main.data.plugins.close_current_plugin_38097(self__.p__38095,self__.map__38096,self__.close_only_edition_plugins_QMARK_,meta38098__$1));
}));

(app.main.data.plugins.close_current_plugin_38097.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38099){
var self__ = this;
var _38099__$1 = this;
return self__.meta38098;
}));

(app.main.data.plugins.close_current_plugin_38097.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.plugins.close_current_plugin_38097.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699)),new cljs.core.Keyword(null,"open-plugins","open-plugins",-1053139426));
var seq__38103 = cljs.core.seq(ids);
var chunk__38104 = null;
var count__38105 = (0);
var i__38106 = (0);
while(true){
if((i__38106 < count__38105)){
var id = chunk__38104.cljs$core$IIndexed$_nth$arity$2(null,i__38106);
var plugin_38245 = app.plugins.register.get_plugin(id);
var permissions_38246 = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"plugins-permissions-peek","plugins-permissions-peek",1646727084)),new cljs.core.Keyword(null,"data","data",-232669377)),id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(plugin_38245);
}
})();
var is_edition_plugin_QMARK__38247 = ((cljs.core.contains_QMARK_(permissions_38246,"content:write")) || (cljs.core.contains_QMARK_(permissions_38246,"library:write")));
if(((cljs.core.not(self__.close_only_edition_plugins_QMARK_)) || (is_edition_plugin_QMARK__38247))){
app.main.data.plugins.close_plugin_BANG_(plugin_38245);
} else {
}


var G__38250 = seq__38103;
var G__38251 = chunk__38104;
var G__38252 = count__38105;
var G__38253 = (i__38106 + (1));
seq__38103 = G__38250;
chunk__38104 = G__38251;
count__38105 = G__38252;
i__38106 = G__38253;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__38103);
if(temp__5825__auto__){
var seq__38103__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__38103__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__38103__$1);
var G__38254 = cljs.core.chunk_rest(seq__38103__$1);
var G__38255 = c__5548__auto__;
var G__38256 = cljs.core.count(c__5548__auto__);
var G__38257 = (0);
seq__38103 = G__38254;
chunk__38104 = G__38255;
count__38105 = G__38256;
i__38106 = G__38257;
continue;
} else {
var id = cljs.core.first(seq__38103__$1);
var plugin_38258 = app.plugins.register.get_plugin(id);
var permissions_38259 = (function (){var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"plugins-permissions-peek","plugins-permissions-peek",1646727084)),new cljs.core.Keyword(null,"data","data",-232669377)),id);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(plugin_38258);
}
})();
var is_edition_plugin_QMARK__38260 = ((cljs.core.contains_QMARK_(permissions_38259,"content:write")) || (cljs.core.contains_QMARK_(permissions_38259,"library:write")));
if(((cljs.core.not(self__.close_only_edition_plugins_QMARK_)) || (is_edition_plugin_QMARK__38260))){
app.main.data.plugins.close_plugin_BANG_(plugin_38258);
} else {
}


var G__38261 = cljs.core.next(seq__38103__$1);
var G__38262 = null;
var G__38263 = (0);
var G__38264 = (0);
seq__38103 = G__38261;
chunk__38104 = G__38262;
count__38105 = G__38263;
i__38106 = G__38264;
continue;
}
} else {
return null;
}
}
break;
}
}));
}

return (new app.main.data.plugins.close_current_plugin_38097(p__38095,map__38096__$1,close_only_edition_plugins_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.plugins.close_current_plugin.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.data.plugins.close_current_plugin.cljs$lang$applyTo = (function (seq38084){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq38084));
}));

app.main.data.plugins.delay_open_plugin = (function app$main$data$plugins$delay_open_plugin(plugin){
if((typeof app.main.data.plugins.delay_open_plugin_38141 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.plugins.delay_open_plugin_38141 = (function (plugin,meta38142){
this.plugin = plugin;
this.meta38142 = meta38142;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.plugins.delay_open_plugin_38141.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.plugins.delay_open_plugin_38141.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.plugins","delay-open-plugin","app.main.data.plugins/delay-open-plugin",-1762960152);
}));

(app.main.data.plugins.delay_open_plugin_38141.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38143,meta38142__$1){
var self__ = this;
var _38143__$1 = this;
return (new app.main.data.plugins.delay_open_plugin_38141(self__.plugin,meta38142__$1));
}));

(app.main.data.plugins.delay_open_plugin_38141.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38143){
var self__ = this;
var _38143__$1 = this;
return self__.meta38142;
}));

(app.main.data.plugins.delay_open_plugin_38141.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.plugins.delay_open_plugin_38141.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword("app.main.data.plugins","open-plugin","app.main.data.plugins/open-plugin",77806160),new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395).cljs$core$IFn$_invoke$arity$1(self__.plugin));
}));
}

return (new app.main.data.plugins.delay_open_plugin_38141(plugin,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.plugins.check_open_plugin = (function app$main$data$plugins$check_open_plugin(){
if((typeof app.main.data.plugins.check_open_plugin_38153 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.plugins.check_open_plugin_38153 = (function (meta38154){
this.meta38154 = meta38154;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.plugins.check_open_plugin_38153.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.plugins.check_open_plugin_38153.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.plugins","check-open-plugin","app.main.data.plugins/check-open-plugin",-1802413529);
}));

(app.main.data.plugins.check_open_plugin_38153.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38155,meta38154__$1){
var self__ = this;
var _38155__$1 = this;
return (new app.main.data.plugins.check_open_plugin_38153(meta38154__$1));
}));

(app.main.data.plugins.check_open_plugin_38153.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38155){
var self__ = this;
var _38155__$1 = this;
return self__.meta38154;
}));

(app.main.data.plugins.check_open_plugin_38153.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.plugins.check_open_plugin_38153.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var user_can_edit_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"permissions","permissions",67803075)),new cljs.core.Keyword(null,"can-edit","can-edit",442089902));
var temp__5825__auto__ = new cljs.core.Keyword("app.main.data.plugins","open-plugin","app.main.data.plugins/open-plugin",77806160).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(temp__5825__auto__)){
var pid = temp__5825__auto__;
var plugin = app.plugins.register.get_plugin(pid);
app.main.data.plugins.open_plugin_BANG_(plugin,user_can_edit_QMARK_);

return beicon.v2.core.of(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"start-plugin",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace",new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin),new cljs.core.Keyword(null,"host","host",-1558485167),new cljs.core.Keyword(null,"host","host",-1558485167).cljs$core$IFn$_invoke$arity$1(plugin)], null)),(function (p1__38152_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__38152_SHARP_,new cljs.core.Keyword("app.main.data.plugins","open-plugin","app.main.data.plugins/open-plugin",77806160));
}));
} else {
return null;
}
}));
}

return (new app.main.data.plugins.check_open_plugin_38153(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.plugins.update_plugin_permissions_peek = (function app$main$data$plugins$update_plugin_permissions_peek(p__38161){
var map__38162 = p__38161;
var map__38162__$1 = cljs.core.__destructure_map(map__38162);
var plugin_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38162__$1,new cljs.core.Keyword(null,"plugin-id","plugin-id",-1788213395));
var url = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__38162__$1,new cljs.core.Keyword(null,"url","url",276297046));
if(cljs.core.truth_(url)){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (new_manifest){
var permissions = new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(new_manifest);
if(cljs.core.truth_(permissions)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.plugins.save_plugin_permissions_peek(plugin_id,permissions));
} else {
return null;
}
}),(function (_err){
return null;
}),app.main.data.plugins.fetch_manifest(url));
} else {
return null;
}
});
app.main.data.plugins.update_plugins_permissions_peek = (function app$main$data$plugins$update_plugins_permissions_peek(){
if((typeof app.main.data.plugins.update_plugins_permissions_peek_38167 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.plugins.update_plugins_permissions_peek_38167 = (function (meta38168){
this.meta38168 = meta38168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.plugins.update_plugins_permissions_peek_38167.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.plugins.update_plugins_permissions_peek_38167.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.plugins","update-plugins-permissions-peek","app.main.data.plugins/update-plugins-permissions-peek",443191422);
}));

(app.main.data.plugins.update_plugins_permissions_peek_38167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38169,meta38168__$1){
var self__ = this;
var _38169__$1 = this;
return (new app.main.data.plugins.update_plugins_permissions_peek_38167(meta38168__$1));
}));

(app.main.data.plugins.update_plugins_permissions_peek_38167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38169){
var self__ = this;
var _38169__$1 = this;
return self__.meta38168;
}));

(app.main.data.plugins.update_plugins_permissions_peek_38167.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.plugins.update_plugins_permissions_peek_38167.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var now = app.common.time.now();
var expiration = app.common.time.in_past(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"days","days",-1394072564),(1)], null));
var updated_at = cljs.core.get.cljs$core$IFn$_invoke$arity$3(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"plugins-permissions-peek","plugins-permissions-peek",1646727084)),new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),(0));
var expired_QMARK_ = (expiration > updated_at);
if(expired_QMARK_){
var plugins = app.plugins.register.plugins_list();
var seq__38176_38267 = cljs.core.seq(plugins);
var chunk__38178_38268 = null;
var count__38179_38269 = (0);
var i__38180_38270 = (0);
while(true){
if((i__38180_38270 < count__38179_38269)){
var plugin_38272 = chunk__38178_38268.cljs$core$IIndexed$_nth$arity$2(null,i__38180_38270);
app.main.data.plugins.update_plugin_permissions_peek(plugin_38272);


var G__38274 = seq__38176_38267;
var G__38275 = chunk__38178_38268;
var G__38276 = count__38179_38269;
var G__38277 = (i__38180_38270 + (1));
seq__38176_38267 = G__38274;
chunk__38178_38268 = G__38275;
count__38179_38269 = G__38276;
i__38180_38270 = G__38277;
continue;
} else {
var temp__5825__auto___38278 = cljs.core.seq(seq__38176_38267);
if(temp__5825__auto___38278){
var seq__38176_38279__$1 = temp__5825__auto___38278;
if(cljs.core.chunked_seq_QMARK_(seq__38176_38279__$1)){
var c__5548__auto___38280 = cljs.core.chunk_first(seq__38176_38279__$1);
var G__38281 = cljs.core.chunk_rest(seq__38176_38279__$1);
var G__38282 = c__5548__auto___38280;
var G__38283 = cljs.core.count(c__5548__auto___38280);
var G__38284 = (0);
seq__38176_38267 = G__38281;
chunk__38178_38268 = G__38282;
count__38179_38269 = G__38283;
i__38180_38270 = G__38284;
continue;
} else {
var plugin_38286 = cljs.core.first(seq__38176_38279__$1);
app.main.data.plugins.update_plugin_permissions_peek(plugin_38286);


var G__38287 = cljs.core.next(seq__38176_38279__$1);
var G__38288 = null;
var G__38289 = (0);
var G__38290 = (0);
seq__38176_38267 = G__38287;
chunk__38178_38268 = G__38288;
count__38179_38269 = G__38289;
i__38180_38270 = G__38290;
continue;
}
} else {
}
}
break;
}

return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"plugins-permissions-peek","plugins-permissions-peek",1646727084),new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336)], null),now);
} else {
return state;
}
}));
}

return (new app.main.data.plugins.update_plugins_permissions_peek_38167(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.plugins.set_plugin_data = (function app$main$data$plugins$set_plugin_data(var_args){
var G__38189 = arguments.length;
switch (G__38189) {
case 5:
return app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$5 = (function (file_id,type,namespace,key,value){
return app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$7(file_id,type,null,null,namespace,key,value);
}));

(app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$6 = (function (file_id,type,id,namespace,key,value){
return app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$7(file_id,type,id,null,namespace,key,value);
}));

(app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$7 = (function (file_id,type,id,page_id,namespace,key,value){
app.common.data.macros.runtime_assert("expr assert: (contains? #{:color :file :page :component :shape :typography} type)",(function (){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"file","file",-1269645878),null,new cljs.core.Keyword(null,"page","page",849072397),null,new cljs.core.Keyword(null,"component","component",1555936782),null,new cljs.core.Keyword(null,"shape","shape",1190694006),null,new cljs.core.Keyword(null,"typography","typography",-399568138),null], null), null),type);
}));

app.common.data.macros.runtime_assert("expr assert: (or (nil? id) (uuid? id))",(function (){
return (((id == null)) || (cljs.core.uuid_QMARK_(id)));
}));

app.common.data.macros.runtime_assert("expr assert: (or (nil? page-id) (uuid? page-id))",(function (){
return (((page_id == null)) || (cljs.core.uuid_QMARK_(page_id)));
}));

app.common.data.macros.runtime_assert("expr assert: (uuid? file-id)",(function (){
return cljs.core.uuid_QMARK_(file_id);
}));

app.common.data.macros.runtime_assert("expr assert: (keyword? namespace)",(function (){
return (namespace instanceof cljs.core.Keyword);
}));

app.common.data.macros.runtime_assert("expr assert: (string? key)",(function (){
return typeof key === 'string';
}));

app.common.data.macros.runtime_assert("expr assert: (or (nil? value) (string? value))",(function (){
return (((value == null)) || (typeof value === 'string'));
}));

if((typeof app.main.data.plugins.set_file_plugin_data_38197 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.plugins.set_file_plugin_data_38197 = (function (file_id,type,id,page_id,namespace,key,value,meta38198){
this.file_id = file_id;
this.type = type;
this.id = id;
this.page_id = page_id;
this.namespace = namespace;
this.key = key;
this.value = value;
this.meta38198 = meta38198;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.plugins.set_file_plugin_data_38197.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.plugins.set_file_plugin_data_38197.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.plugins","set-file-plugin-data","app.main.data.plugins/set-file-plugin-data",-1253379679);
}));

(app.main.data.plugins.set_file_plugin_data_38197.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_38199,meta38198__$1){
var self__ = this;
var _38199__$1 = this;
return (new app.main.data.plugins.set_file_plugin_data_38197(self__.file_id,self__.type,self__.id,self__.page_id,self__.namespace,self__.key,self__.value,meta38198__$1));
}));

(app.main.data.plugins.set_file_plugin_data_38197.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_38199){
var self__ = this;
var _38199__$1 = this;
return self__.meta38198;
}));

(app.main.data.plugins.set_file_plugin_data_38197.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.plugins.set_file_plugin_data_38197.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (it,state,_){
var self__ = this;
var it__$1 = this;
var file_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"files","files",-472457450)),self__.file_id),new cljs.core.Keyword(null,"data","data",-232669377));
var changes = app.common.files.changes_builder.set_plugin_data.cljs$core$IFn$_invoke$arity$7(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.files.changes_builder.with_file_data(app.common.files.changes_builder.empty_changes.cljs$core$IFn$_invoke$arity$1(it__$1),file_data),new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id),self__.type,self__.id,self__.page_id,self__.namespace,self__.key,self__.value);
return beicon.v2.core.of(app.main.data.changes.commit_changes(changes));
}));
}

return (new app.main.data.plugins.set_file_plugin_data_38197(file_id,type,id,page_id,namespace,key,value,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.plugins.set_plugin_data.cljs$lang$maxFixedArity = 7);


//# sourceMappingURL=app.main.data.plugins.js.map
