import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.changes.js";
import "./app.common.schema.js";
import "./app.common.time.js";
import "./app.common.uuid.js";
import "./app.main.data.changes.js";
import "./app.main.data.common.js";
import "./app.main.data.helpers.js";
import "./app.main.data.modal.js";
import "./app.main.data.plugins.js";
import "./app.main.data.websocket.js";
import "./app.main.data.workspace.common.js";
import "./app.main.data.workspace.edition.js";
import "./app.main.data.workspace.layout.js";
import "./app.main.data.workspace.libraries.js";
import "./app.main.data.workspace.texts.js";
import "./app.main.router.js";
import "./app.util.globals.js";
import "./app.util.mouse.js";
import "./app.util.object.js";
import "./app.util.rxops.js";
import "./beicon.v2.core.js";
import "./clojure.set.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.notifications');
app.main.data.workspace.notifications.initialize = (function app$main$data$workspace$notifications$initialize(team_id,file_id){
if((typeof app.main.data.workspace.notifications.initialize_50701 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.notifications.initialize_50701 = (function (team_id,file_id,meta50702){
this.team_id = team_id;
this.file_id = file_id;
this.meta50702 = meta50702;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.notifications.initialize_50701.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.notifications.initialize_50701.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.notifications","initialize","app.main.data.workspace.notifications/initialize",-1561873434);
}));

(app.main.data.workspace.notifications.initialize_50701.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50703,meta50702__$1){
var self__ = this;
var _50703__$1 = this;
return (new app.main.data.workspace.notifications.initialize_50701(self__.team_id,self__.file_id,meta50702__$1));
}));

(app.main.data.workspace.notifications.initialize_50701.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50703){
var self__ = this;
var _50703__$1 = this;
return self__.meta50702;
}));

(app.main.data.workspace.notifications.initialize_50701.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.notifications.initialize_50701.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var stopper = beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.notifications","finalize","app.main.data.workspace.notifications/finalize",834117202)),stream);
var profile_id = new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(state);
var initmsg = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"subscribe-file","subscribe-file",-646014766),new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"version","version",425292698),app.util.object.get.cljs$core$IFn$_invoke$arity$2(app.util.globals.global,"penpotVersion")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"subscribe-team","subscribe-team",1911996188),new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id], null)], null);
var endmsg = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unsubscribe-file","unsubscribe-file",-130369757),new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id], null);
var stream__$1 = beicon.v2.core.take_until(stopper,beicon.v2.core.merge(beicon.v2.core.map(app.main.data.websocket.send,beicon.v2.core.from(initmsg)),beicon.v2.core.map(app.main.data.workspace.notifications.process_message,beicon.v2.core.filter((function (p__50704){
var map__50705 = p__50704;
var map__50705__$1 = cljs.core.__destructure_map(map__50705);
var msg = map__50705__$1;
var topic = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50705__$1,new cljs.core.Keyword(null,"topic","topic",-1960480691));
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,app.common.uuid.zero)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,profile_id)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,self__.team_id)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(topic,self__.file_id)))))));
}),beicon.v2.core.map(cljs.core.deref,beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.websocket","message","app.main.data.websocket/message",-2128948247)),stream)))),beicon.v2.core.mapcat((function (){
return beicon.v2.core.map(app.main.data.websocket.send,beicon.v2.core.from(initmsg));
}),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.websocket","opened","app.main.data.websocket/opened",1251993736)),stream)),beicon.v2.core.of((function (){var G__50706 = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"connect","connect",1232828233),new cljs.core.Keyword(null,"session-id","session-id",-1147060351),new cljs.core.Keyword(null,"session-id","session-id",-1147060351).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"profile-id","profile-id",1866572309),new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(state)], null);
return (app.main.data.workspace.notifications.handle_presence.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.notifications.handle_presence.cljs$core$IFn$_invoke$arity$1(G__50706) : app.main.data.workspace.notifications.handle_presence.call(null,G__50706));
})()),beicon.v2.core.map((function (p1__50700_SHARP_){
var G__50707 = self__.file_id;
var G__50708 = new cljs.core.Keyword(null,"pt","pt",556460867).cljs$core$IFn$_invoke$arity$1(p1__50700_SHARP_);
return (app.main.data.workspace.notifications.handle_pointer_send.cljs$core$IFn$_invoke$arity$2 ? app.main.data.workspace.notifications.handle_pointer_send.cljs$core$IFn$_invoke$arity$2(G__50707,G__50708) : app.main.data.workspace.notifications.handle_pointer_send.call(null,G__50707,G__50708));
}),beicon.v2.core.pipe(app.util.rxops.throttle((50)),beicon.v2.core.filter((function (p1__50696_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"viewport","viewport",443342715),app.util.mouse.get_pointer_source(p1__50696_SHARP_));
}),beicon.v2.core.filter(app.util.mouse.pointer_event_QMARK_,stream))))));
return beicon.v2.core.concat(stream__$1,beicon.v2.core.of(app.main.data.websocket.send(endmsg)));
}));
}

return (new app.main.data.workspace.notifications.initialize_50701(team_id,file_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.notifications.handle_change_team_role = (function app$main$data$workspace$notifications$handle_change_team_role(p__50709){
var map__50713 = p__50709;
var map__50713__$1 = cljs.core.__destructure_map(map__50713);
var msg = map__50713__$1;
var role = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50713__$1,new cljs.core.Keyword(null,"role","role",-736691072));
if((typeof app.main.data.workspace.notifications.handle_change_team_role_50714 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.notifications.handle_change_team_role_50714 = (function (p__50709,map__50713,msg,role,meta50715){
this.p__50709 = p__50709;
this.map__50713 = map__50713;
this.msg = msg;
this.role = role;
this.meta50715 = meta50715;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.notifications.handle_change_team_role_50714.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.notifications.handle_change_team_role_50714.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.notifications","handle-change-team-role","app.main.data.workspace.notifications/handle-change-team-role",210963290);
}));

(app.main.data.workspace.notifications.handle_change_team_role_50714.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50716,meta50715__$1){
var self__ = this;
var _50716__$1 = this;
return (new app.main.data.workspace.notifications.handle_change_team_role_50714(self__.p__50709,self__.map__50713,self__.msg,self__.role,meta50715__$1));
}));

(app.main.data.workspace.notifications.handle_change_team_role_50714.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50716){
var self__ = this;
var _50716__$1 = this;
return self__.meta50715;
}));

(app.main.data.workspace.notifications.handle_change_team_role_50714.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.notifications.handle_change_team_role_50714.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.concat(beicon.v2.core.of(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178),app.main.data.workspace.edition.clear_edition_mode(),app.main.data.workspace.common.set_workspace_read_only(false)),beicon.v2.core.delay((100),beicon.v2.core.of(app.main.data.common.change_team_role(self__.msg),new cljs.core.Keyword("app.main.data.workspace.texts","update-editor-state","app.main.data.workspace.texts/update-editor-state",1174660022))),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"viewer","viewer",-783949853),self__.role))?beicon.v2.core.of(app.main.data.modal.hide(),app.main.data.workspace.layout.set_options_mode(new cljs.core.Keyword(null,"inspect","inspect",688794057)),app.main.data.plugins.close_current_plugin.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"close-only-edition-plugins?","close-only-edition-plugins?",1950979027),true], null)], 0))):beicon.v2.core.of(app.main.data.workspace.layout.set_options_mode(new cljs.core.Keyword(null,"design","design",1241338903)))));
}));
}

return (new app.main.data.workspace.notifications.handle_change_team_role_50714(p__50709,map__50713__$1,msg,role,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.notifications.process_message = (function app$main$data$workspace$notifications$process_message(p__50722){
var map__50723 = p__50722;
var map__50723__$1 = cljs.core.__destructure_map(map__50723);
var msg = map__50723__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50723__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__50724 = type;
var G__50724__$1 = (((G__50724 instanceof cljs.core.Keyword))?G__50724.fqn:null);
switch (G__50724__$1) {
case "join-file":
return (app.main.data.workspace.notifications.handle_presence.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.notifications.handle_presence.cljs$core$IFn$_invoke$arity$1(msg) : app.main.data.workspace.notifications.handle_presence.call(null,msg));

break;
case "leave-file":
return (app.main.data.workspace.notifications.handle_presence.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.notifications.handle_presence.cljs$core$IFn$_invoke$arity$1(msg) : app.main.data.workspace.notifications.handle_presence.call(null,msg));

break;
case "presence":
return (app.main.data.workspace.notifications.handle_presence.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.notifications.handle_presence.cljs$core$IFn$_invoke$arity$1(msg) : app.main.data.workspace.notifications.handle_presence.call(null,msg));

break;
case "disconnect":
return (app.main.data.workspace.notifications.handle_presence.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.notifications.handle_presence.cljs$core$IFn$_invoke$arity$1(msg) : app.main.data.workspace.notifications.handle_presence.call(null,msg));

break;
case "pointer-update":
return (app.main.data.workspace.notifications.handle_pointer_update.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.notifications.handle_pointer_update.cljs$core$IFn$_invoke$arity$1(msg) : app.main.data.workspace.notifications.handle_pointer_update.call(null,msg));

break;
case "file-change":
return (app.main.data.workspace.notifications.handle_file_change.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.notifications.handle_file_change.cljs$core$IFn$_invoke$arity$1(msg) : app.main.data.workspace.notifications.handle_file_change.call(null,msg));

break;
case "file-deleted":
return (app.main.data.workspace.notifications.handle_file_deleted.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.notifications.handle_file_deleted.cljs$core$IFn$_invoke$arity$1(msg) : app.main.data.workspace.notifications.handle_file_deleted.call(null,msg));

break;
case "file-restore":
return (app.main.data.workspace.notifications.handle_file_restore.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.notifications.handle_file_restore.cljs$core$IFn$_invoke$arity$1(msg) : app.main.data.workspace.notifications.handle_file_restore.call(null,msg));

break;
case "library-change":
return (app.main.data.workspace.notifications.handle_library_change.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.notifications.handle_library_change.cljs$core$IFn$_invoke$arity$1(msg) : app.main.data.workspace.notifications.handle_library_change.call(null,msg));

break;
case "notification":
return app.main.data.common.handle_notification(msg);

break;
case "team-role-change":
return app.main.data.workspace.notifications.handle_change_team_role(msg);

break;
case "team-membership-change":
return app.main.data.common.team_membership_change(msg);

break;
default:
return null;

}
});
app.main.data.workspace.notifications.handle_pointer_send = (function app$main$data$workspace$notifications$handle_pointer_send(file_id,point){
if((typeof app.main.data.workspace.notifications.handle_pointer_send_50726 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.notifications.handle_pointer_send_50726 = (function (file_id,point,meta50727){
this.file_id = file_id;
this.point = point;
this.meta50727 = meta50727;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.notifications.handle_pointer_send_50726.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.notifications.handle_pointer_send_50726.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.notifications","handle-pointer-send","app.main.data.workspace.notifications/handle-pointer-send",-1463250994);
}));

(app.main.data.workspace.notifications.handle_pointer_send_50726.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50728,meta50727__$1){
var self__ = this;
var _50728__$1 = this;
return (new app.main.data.workspace.notifications.handle_pointer_send_50726(self__.file_id,self__.point,meta50727__$1));
}));

(app.main.data.workspace.notifications.handle_pointer_send_50726.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50728){
var self__ = this;
var _50728__$1 = this;
return self__.meta50727;
}));

(app.main.data.workspace.notifications.handle_pointer_send_50726.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.notifications.handle_pointer_send_50726.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var local = new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699).cljs$core$IFn$_invoke$arity$1(state);
var message = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"pointer-update","pointer-update",508088975),new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(local),new cljs.core.Keyword(null,"zoom-inverse","zoom-inverse",-1760246179),new cljs.core.Keyword(null,"zoom-inverse","zoom-inverse",-1760246179).cljs$core$IFn$_invoke$arity$1(local),new cljs.core.Keyword(null,"vbox","vbox",-492787765),new cljs.core.Keyword(null,"vbox","vbox",-492787765).cljs$core$IFn$_invoke$arity$1(local),new cljs.core.Keyword(null,"vport","vport",-1317419022),new cljs.core.Keyword(null,"vport","vport",-1317419022).cljs$core$IFn$_invoke$arity$1(local),new cljs.core.Keyword(null,"position","position",-2011731912),self__.point], null);
return beicon.v2.core.of(app.main.data.websocket.send(message));
}));
}

return (new app.main.data.workspace.notifications.handle_pointer_send_50726(file_id,point,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.notifications.finalize = (function app$main$data$workspace$notifications$finalize(_){
if((typeof app.main.data.workspace.notifications.finalize_50729 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.notifications.finalize_50729 = (function (_,meta50730){
this._ = _;
this.meta50730 = meta50730;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.notifications.finalize_50729.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.notifications.finalize_50729.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.notifications","finalize","app.main.data.workspace.notifications/finalize",834117202);
}));

(app.main.data.workspace.notifications.finalize_50729.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50731,meta50730__$1){
var self__ = this;
var _50731__$1 = this;
return (new app.main.data.workspace.notifications.finalize_50729(self__._,meta50730__$1));
}));

(app.main.data.workspace.notifications.finalize_50729.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50731){
var self__ = this;
var _50731__$1 = this;
return self__.meta50730;
}));
}

return (new app.main.data.workspace.notifications.finalize_50729(_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.notifications.presence_palette = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 9, ["#dee563",null,"#faa6b7",null,"#f49ef7",null,"#fdcf79",null,"#a9bdfa",null,"#75cafc",null,"#cbaaff",null,"#b1e96f",null,"#f9b489",null], null), null);
app.main.data.workspace.notifications.handle_presence = (function app$main$data$workspace$notifications$handle_presence(p__50733){
var map__50734 = p__50733;
var map__50734__$1 = cljs.core.__destructure_map(map__50734);
var message = map__50734__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50734__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var session_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50734__$1,new cljs.core.Keyword(null,"session-id","session-id",-1147060351));
var profile_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50734__$1,new cljs.core.Keyword(null,"profile-id","profile-id",1866572309));
var version = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50734__$1,new cljs.core.Keyword(null,"version","version",425292698));
var get_next_color = (function app$main$data$workspace$notifications$handle_presence_$_get_next_color(presence){
var xfm = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second),cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"color","color",1011675173)),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_));
var used = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,xfm,presence);
var avail = clojure.set.difference.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.notifications.presence_palette,used);
var or__5025__auto__ = cljs.core.first(avail);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "#dee563";
}
});
var update_color = (function app$main$data$workspace$notifications$handle_presence_$_update_color(color,presence){
if((!((color == null)))){
return color;
} else {
return get_next_color(presence);
}
});
var update_session = (function app$main$data$workspace$notifications$handle_presence_$_update_session(session,presence){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(session,new cljs.core.Keyword(null,"id","id",-1388402092),session_id),new cljs.core.Keyword(null,"profile-id","profile-id",1866572309),profile_id),new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),app.common.time.now()),new cljs.core.Keyword(null,"version","version",425292698),version),new cljs.core.Keyword(null,"color","color",1011675173),update_color,presence),new cljs.core.Keyword(null,"text-color","text-color",1728708298),"#000000");
});
var update_presence = (function app$main$data$workspace$notifications$handle_presence_$_update_presence(presence){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.update.cljs$core$IFn$_invoke$arity$4(presence,session_id,update_session,presence));
});
if((typeof app.main.data.workspace.notifications.handle_presence_50736 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.notifications.handle_presence_50736 = (function (version,update_color,message,session_id,p__50733,map__50734,get_next_color,update_session,type,profile_id,update_presence,meta50737){
this.version = version;
this.update_color = update_color;
this.message = message;
this.session_id = session_id;
this.p__50733 = p__50733;
this.map__50734 = map__50734;
this.get_next_color = get_next_color;
this.update_session = update_session;
this.type = type;
this.profile_id = profile_id;
this.update_presence = update_presence;
this.meta50737 = meta50737;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.notifications.handle_presence_50736.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.notifications.handle_presence_50736.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.notifications","handle-presence","app.main.data.workspace.notifications/handle-presence",1491898407);
}));

(app.main.data.workspace.notifications.handle_presence_50736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50738,meta50737__$1){
var self__ = this;
var _50738__$1 = this;
return (new app.main.data.workspace.notifications.handle_presence_50736(self__.version,self__.update_color,self__.message,self__.session_id,self__.p__50733,self__.map__50734,self__.get_next_color,self__.update_session,self__.type,self__.profile_id,self__.update_presence,meta50737__$1));
}));

(app.main.data.workspace.notifications.handle_presence_50736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50738){
var self__ = this;
var _50738__$1 = this;
return self__.meta50737;
}));

(app.main.data.workspace.notifications.handle_presence_50736.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.notifications.handle_presence_50736.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"disconnect","disconnect",-132009289),self__.type)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"leave-file","leave-file",1593548461),self__.type)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"workspace-presence","workspace-presence",-919312096),cljs.core.dissoc,self__.session_id);
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-presence","workspace-presence",-919312096),self__.update_presence);
}
}));
}

return (new app.main.data.workspace.notifications.handle_presence_50736(version,update_color,message,session_id,p__50733,map__50734__$1,get_next_color,update_session,type,profile_id,update_presence,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.notifications.handle_pointer_update = (function app$main$data$workspace$notifications$handle_pointer_update(p__50739){
var map__50740 = p__50739;
var map__50740__$1 = cljs.core.__destructure_map(map__50740);
var msg = map__50740__$1;
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50740__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var session_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50740__$1,new cljs.core.Keyword(null,"session-id","session-id",-1147060351));
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50740__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50740__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var zoom_inverse = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50740__$1,new cljs.core.Keyword(null,"zoom-inverse","zoom-inverse",-1760246179));
var vbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50740__$1,new cljs.core.Keyword(null,"vbox","vbox",-492787765));
var vport = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50740__$1,new cljs.core.Keyword(null,"vport","vport",-1317419022));
if((typeof app.main.data.workspace.notifications.handle_pointer_update_50741 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.notifications.handle_pointer_update_50741 = (function (zoom_inverse,session_id,zoom,p__50739,map__50740,vbox,msg,page_id,vport,position,meta50742){
this.zoom_inverse = zoom_inverse;
this.session_id = session_id;
this.zoom = zoom;
this.p__50739 = p__50739;
this.map__50740 = map__50740;
this.vbox = vbox;
this.msg = msg;
this.page_id = page_id;
this.vport = vport;
this.position = position;
this.meta50742 = meta50742;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.notifications.handle_pointer_update_50741.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.notifications.handle_pointer_update_50741.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.notifications","handle-pointer-update","app.main.data.workspace.notifications/handle-pointer-update",614124289);
}));

(app.main.data.workspace.notifications.handle_pointer_update_50741.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50743,meta50742__$1){
var self__ = this;
var _50743__$1 = this;
return (new app.main.data.workspace.notifications.handle_pointer_update_50741(self__.zoom_inverse,self__.session_id,self__.zoom,self__.p__50739,self__.map__50740,self__.vbox,self__.msg,self__.page_id,self__.vport,self__.position,meta50742__$1));
}));

(app.main.data.workspace.notifications.handle_pointer_update_50741.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50743){
var self__ = this;
var _50743__$1 = this;
return self__.meta50742;
}));

(app.main.data.workspace.notifications.handle_pointer_update_50741.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.notifications.handle_pointer_update_50741.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-presence","workspace-presence",-919312096),self__.session_id], null),(function (session){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(session,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),self__.zoom,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"zoom-inverse","zoom-inverse",-1760246179),self__.zoom_inverse,new cljs.core.Keyword(null,"vbox","vbox",-492787765),self__.vbox,new cljs.core.Keyword(null,"vport","vport",-1317419022),self__.vport,new cljs.core.Keyword(null,"point","point",1813198264),self__.position,new cljs.core.Keyword(null,"updated-at","updated-at",-1592622336),app.common.time.now(),new cljs.core.Keyword(null,"page-id","page-id",-872941168),self__.page_id], 0));
}));
}));
}

return (new app.main.data.workspace.notifications.handle_pointer_update_50741(zoom_inverse,session_id,zoom,p__50739,map__50740__$1,vbox,msg,page_id,vport,position,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.notifications.schema_COLON_handle_file_change = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"handle-file-change"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile-id","profile-id",1866572309),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"revn","revn",-633391765),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vern","vern",2071435888),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changes","changes",1492088),app.common.files.changes.schema_COLON_changes], null)], null);
app.main.data.workspace.notifications.check_file_change_params_BANG_ = app.common.schema.check_fn(app.main.data.workspace.notifications.schema_COLON_handle_file_change);
app.main.data.workspace.notifications.handle_file_change = (function app$main$data$workspace$notifications$handle_file_change(p__50747){
var map__50748 = p__50747;
var map__50748__$1 = cljs.core.__destructure_map(map__50748);
var msg = map__50748__$1;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50748__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50748__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
var revn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50748__$1,new cljs.core.Keyword(null,"revn","revn",-633391765));
var vern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50748__$1,new cljs.core.Keyword(null,"vern","vern",2071435888));
app.common.data.macros.runtime_assert("expected valid parameters",(function (){
return app.main.data.workspace.notifications.check_file_change_params_BANG_(msg);
}));

if((typeof app.main.data.workspace.notifications.handle_file_change_50749 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.notifications.handle_file_change_50749 = (function (p__50747,map__50748,msg,file_id,changes,revn,vern,meta50750){
this.p__50747 = p__50747;
this.map__50748 = map__50748;
this.msg = msg;
this.file_id = file_id;
this.changes = changes;
this.revn = revn;
this.vern = vern;
this.meta50750 = meta50750;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.notifications.handle_file_change_50749.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.notifications.handle_file_change_50749.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.notifications","handle-file-change","app.main.data.workspace.notifications/handle-file-change",-1600731558);
}));

(app.main.data.workspace.notifications.handle_file_change_50749.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50751,meta50750__$1){
var self__ = this;
var _50751__$1 = this;
return (new app.main.data.workspace.notifications.handle_file_change_50749(self__.p__50747,self__.map__50748,self__.msg,self__.file_id,self__.changes,self__.revn,self__.vern,meta50750__$1));
}));

(app.main.data.workspace.notifications.handle_file_change_50749.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50751){
var self__ = this;
var _50751__$1 = this;
return self__.meta50750;
}));

(app.main.data.workspace.notifications.handle_file_change_50749.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"changes","changes",1492088),self__.changes], null);
}));

(app.main.data.workspace.notifications.handle_file_change_50749.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.notifications.handle_file_change_50749.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.changes.commit(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"file-revn","file-revn",1919013210),self__.revn,new cljs.core.Keyword(null,"file-vern","file-vern",336101510),self__.vern,new cljs.core.Keyword(null,"save-undo?","save-undo?",-1533746853),false,new cljs.core.Keyword(null,"source","source",-433931539),new cljs.core.Keyword(null,"remote","remote",-1593576576),new cljs.core.Keyword(null,"redo-changes","redo-changes",974223824),cljs.core.vec(self__.changes),new cljs.core.Keyword(null,"undo-changes","undo-changes",794837692),cljs.core.PersistentVector.EMPTY], null)));
}));
}

return (new app.main.data.workspace.notifications.handle_file_change_50749(p__50747,map__50748__$1,msg,file_id,changes,revn,vern,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.notifications.handle_file_deleted = (function app$main$data$workspace$notifications$handle_file_deleted(p__50764){
var map__50765 = p__50764;
var map__50765__$1 = cljs.core.__destructure_map(map__50765);
var msg = map__50765__$1;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50765__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
if((typeof app.main.data.workspace.notifications.handle_file_deleted_50766 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.notifications.handle_file_deleted_50766 = (function (p__50764,map__50765,msg,file_id,meta50767){
this.p__50764 = p__50764;
this.map__50765 = map__50765;
this.msg = msg;
this.file_id = file_id;
this.meta50767 = meta50767;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.notifications.handle_file_deleted_50766.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.notifications.handle_file_deleted_50766.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.notifications","handle-file-deleted","app.main.data.workspace.notifications/handle-file-deleted",152988797);
}));

(app.main.data.workspace.notifications.handle_file_deleted_50766.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50768,meta50767__$1){
var self__ = this;
var _50768__$1 = this;
return (new app.main.data.workspace.notifications.handle_file_deleted_50766(self__.p__50764,self__.map__50765,self__.msg,self__.file_id,meta50767__$1));
}));

(app.main.data.workspace.notifications.handle_file_deleted_50766.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50768){
var self__ = this;
var _50768__$1 = this;
return self__.meta50767;
}));

(app.main.data.workspace.notifications.handle_file_deleted_50766.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.notifications.handle_file_deleted_50766.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var curr_file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.file_id,curr_file_id)){
return beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dashboard-recent","dashboard-recent",-1541043167),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.notifications.handle_file_deleted_50766(p__50764,map__50765__$1,msg,file_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.notifications.schema_COLON_handle_file_restore = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"handle-file-restore"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vern","vern",2071435888),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null);
app.main.data.workspace.notifications.check_file_restore_params = app.common.schema.check_fn(app.main.data.workspace.notifications.schema_COLON_handle_file_restore);
app.main.data.workspace.notifications.handle_file_restore = (function app$main$data$workspace$notifications$handle_file_restore(p__50770){
var map__50771 = p__50770;
var map__50771__$1 = cljs.core.__destructure_map(map__50771);
var msg = map__50771__$1;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50771__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var vern = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50771__$1,new cljs.core.Keyword(null,"vern","vern",2071435888));
if(cljs.core.truth_(app.main.data.workspace.notifications.check_file_restore_params(msg))){
} else {
throw (new Error(["Assert failed: ","expected valid parameters","\n","(check-file-restore-params msg)"].join('')));
}

if((typeof app.main.data.workspace.notifications.handle_file_restore_50772 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.notifications.handle_file_restore_50772 = (function (p__50770,map__50771,msg,file_id,vern,meta50773){
this.p__50770 = p__50770;
this.map__50771 = map__50771;
this.msg = msg;
this.file_id = file_id;
this.vern = vern;
this.meta50773 = meta50773;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.notifications.handle_file_restore_50772.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.notifications.handle_file_restore_50772.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.notifications","handle-file-restore","app.main.data.workspace.notifications/handle-file-restore",306294204);
}));

(app.main.data.workspace.notifications.handle_file_restore_50772.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50774,meta50773__$1){
var self__ = this;
var _50774__$1 = this;
return (new app.main.data.workspace.notifications.handle_file_restore_50772(self__.p__50770,self__.map__50771,self__.msg,self__.file_id,self__.vern,meta50773__$1));
}));

(app.main.data.workspace.notifications.handle_file_restore_50772.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50774){
var self__ = this;
var _50774__$1 = this;
return self__.meta50773;
}));

(app.main.data.workspace.notifications.handle_file_restore_50772.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.notifications.handle_file_restore_50772.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var curr_file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var file = app.main.data.helpers.lookup_file.cljs$core$IFn$_invoke$arity$2(state,curr_file_id);
var curr_vern = new cljs.core.Keyword(null,"vern","vern",2071435888).cljs$core$IFn$_invoke$arity$1(file);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.file_id,curr_file_id)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(self__.vern,curr_vern)))){
return beicon.v2.core.of(potok.v2.core.event.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace","reload-current-file","app.main.data.workspace/reload-current-file",-807745136)));
} else {
return null;
}
}));
}

return (new app.main.data.workspace.notifications.handle_file_restore_50772(p__50770,map__50771__$1,msg,file_id,vern,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.notifications.schema_COLON_handle_library_change = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"handle-library-change"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile-id","profile-id",1866572309),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"session-id","session-id",-1147060351),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"revn","revn",-633391765),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"changes","changes",1492088),app.common.files.changes.schema_COLON_changes], null)], null);
app.main.data.workspace.notifications.check_library_change_params = app.common.schema.check_fn(app.main.data.workspace.notifications.schema_COLON_handle_library_change);
app.main.data.workspace.notifications.handle_library_change = (function app$main$data$workspace$notifications$handle_library_change(p__50778){
var map__50779 = p__50778;
var map__50779__$1 = cljs.core.__destructure_map(map__50779);
var msg = map__50779__$1;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50779__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var modified_at = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50779__$1,new cljs.core.Keyword(null,"modified-at","modified-at",-932048179));
var changes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50779__$1,new cljs.core.Keyword(null,"changes","changes",1492088));
var revn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50779__$1,new cljs.core.Keyword(null,"revn","revn",-633391765));
if(cljs.core.truth_(app.main.data.workspace.notifications.check_library_change_params(msg))){
} else {
throw (new Error(["Assert failed: ","expected valid arguments","\n","(check-library-change-params msg)"].join('')));
}

if((typeof app.main.data.workspace.notifications.handle_library_change_50780 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.notifications.handle_library_change_50780 = (function (p__50778,map__50779,msg,file_id,modified_at,changes,revn,meta50781){
this.p__50778 = p__50778;
this.map__50779 = map__50779;
this.msg = msg;
this.file_id = file_id;
this.modified_at = modified_at;
this.changes = changes;
this.revn = revn;
this.meta50781 = meta50781;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.notifications.handle_library_change_50780.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.notifications.handle_library_change_50780.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.notifications","handle-library-change","app.main.data.workspace.notifications/handle-library-change",1098362084);
}));

(app.main.data.workspace.notifications.handle_library_change_50780.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50782,meta50781__$1){
var self__ = this;
var _50782__$1 = this;
return (new app.main.data.workspace.notifications.handle_library_change_50780(self__.p__50778,self__.map__50779,self__.msg,self__.file_id,self__.modified_at,self__.changes,self__.revn,meta50781__$1));
}));

(app.main.data.workspace.notifications.handle_library_change_50780.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50782){
var self__ = this;
var _50782__$1 = this;
return self__.meta50781;
}));

(app.main.data.workspace.notifications.handle_library_change_50780.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.notifications.handle_library_change_50780.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(state),self__.file_id)){
return beicon.v2.core.of(app.main.data.workspace.libraries.ext_library_changed(self__.file_id,self__.modified_at,self__.revn,self__.changes),app.main.data.workspace.libraries.notify_sync_file());
} else {
return null;
}
}));
}

return (new app.main.data.workspace.notifications.handle_library_change_50780(p__50778,map__50779__$1,msg,file_id,modified_at,changes,revn,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.notifications.js.map
