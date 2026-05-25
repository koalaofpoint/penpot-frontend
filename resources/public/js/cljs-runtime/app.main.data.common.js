import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.schema.js";
import "./app.common.time.js";
import "./app.common.types.team.js";
import "./app.main.data.helpers.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.repo.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.common');
app.main.data.common.share_link_created = (function app$main$data$common$share_link_created(link){
if((typeof app.main.data.common.share_link_created_37713 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.share_link_created_37713 = (function (link,meta37714){
this.link = link;
this.meta37714 = meta37714;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.share_link_created_37713.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.share_link_created_37713.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","share-link-created","app.main.data.common/share-link-created",-89040063);
}));

(app.main.data.common.share_link_created_37713.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37715,meta37714__$1){
var self__ = this;
var _37715__$1 = this;
return (new app.main.data.common.share_link_created_37713(self__.link,meta37714__$1));
}));

(app.main.data.common.share_link_created_37713.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37715){
var self__ = this;
var _37715__$1 = this;
return self__.meta37714;
}));

(app.main.data.common.share_link_created_37713.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.share_link_created_37713.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"share-links","share-links",-307384490),cljs.core.fnil.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.PersistentVector.EMPTY),self__.link);
}));
}

return (new app.main.data.common.share_link_created_37713(link,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.common.create_share_link = (function app$main$data$common$create_share_link(params){
if((typeof app.main.data.common.create_share_link_37730 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.create_share_link_37730 = (function (params,meta37731){
this.params = params;
this.meta37731 = meta37731;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.create_share_link_37730.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.create_share_link_37730.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","create-share-link","app.main.data.common/create-share-link",-190094570);
}));

(app.main.data.common.create_share_link_37730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37732,meta37731__$1){
var self__ = this;
var _37732__$1 = this;
return (new app.main.data.common.create_share_link_37730(self__.params,meta37731__$1));
}));

(app.main.data.common.create_share_link_37730.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37732){
var self__ = this;
var _37732__$1 = this;
return self__.meta37731;
}));

(app.main.data.common.create_share_link_37730.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.create_share_link_37730.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map(app.main.data.common.share_link_created,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-share-link","create-share-link",-2140545233),self__.params));
}));
}

return (new app.main.data.common.create_share_link_37730(params,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.common.delete_share_link = (function app$main$data$common$delete_share_link(p__37740){
var map__37741 = p__37740;
var map__37741__$1 = cljs.core.__destructure_map(map__37741);
var link = map__37741__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37741__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if((typeof app.main.data.common.delete_share_link_37742 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.delete_share_link_37742 = (function (p__37740,map__37741,link,id,meta37743){
this.p__37740 = p__37740;
this.map__37741 = map__37741;
this.link = link;
this.id = id;
this.meta37743 = meta37743;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.delete_share_link_37742.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.delete_share_link_37742.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","delete-share-link","app.main.data.common/delete-share-link",1582371551);
}));

(app.main.data.common.delete_share_link_37742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37744,meta37743__$1){
var self__ = this;
var _37744__$1 = this;
return (new app.main.data.common.delete_share_link_37742(self__.p__37740,self__.map__37741,self__.link,self__.id,meta37743__$1));
}));

(app.main.data.common.delete_share_link_37742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37744){
var self__ = this;
var _37744__$1 = this;
return self__.meta37743;
}));

(app.main.data.common.delete_share_link_37742.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.delete_share_link_37742.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"share-links","share-links",-307384490),(function (links){
return cljs.core.filterv((function (p1__37738_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(self__.id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__37738_SHARP_));
}),links);
}));
}));

(app.main.data.common.delete_share_link_37742.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.delete_share_link_37742.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.ignore(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-share-link","delete-share-link",454000514),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null)));
}));
}

return (new app.main.data.common.delete_share_link_37742(p__37740,map__37741__$1,link,id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.common.force_reload_BANG_ = (function app$main$data$common$force_reload_BANG_(){
return location.reload();
});
app.main.data.common.hide_notifications_BANG_ = (function app$main$data$common$hide_notifications_BANG_(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.hide());
});
app.main.data.common.handle_notification = (function app$main$data$common$handle_notification(p__37779){
var map__37780 = p__37779;
var map__37780__$1 = cljs.core.__destructure_map(map__37780);
var params = map__37780__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37780__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37780__$1,new cljs.core.Keyword(null,"code","code",1586293142));
if((typeof app.main.data.common.show_notification_37781 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.show_notification_37781 = (function (p__37779,map__37780,params,message,code,meta37782){
this.p__37779 = p__37779;
this.map__37780 = map__37780;
this.params = params;
this.message = message;
this.code = code;
this.meta37782 = meta37782;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.show_notification_37781.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.show_notification_37781.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","show-notification","app.main.data.common/show-notification",-598664195);
}));

(app.main.data.common.show_notification_37781.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37783,meta37782__$1){
var self__ = this;
var _37783__$1 = this;
return (new app.main.data.common.show_notification_37781(self__.p__37779,self__.map__37780,self__.params,self__.message,self__.code,meta37782__$1));
}));

(app.main.data.common.show_notification_37781.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37783){
var self__ = this;
var _37783__$1 = this;
return self__.meta37782;
}));

(app.main.data.common.show_notification_37781.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.show_notification_37781.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var G__37787 = self__.code;
var G__37787__$1 = (((G__37787 instanceof cljs.core.Keyword))?G__37787.fqn:null);
switch (G__37787__$1) {
case "upgrade-version":
return beicon.v2.core.of(app.main.data.notifications.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("notifications.by-code.upgrade-version"),new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.refresh"),new cljs.core.Keyword(null,"callback","callback",-705136228),app.main.data.common.force_reload_BANG_], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"notification","notification",-222338233)], 0)));

break;
case "maintenance":
return beicon.v2.core.of(app.main.data.notifications.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("notifications.by-code.maintenance"),new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.accept"),new cljs.core.Keyword(null,"callback","callback",-705136228),app.main.data.common.hide_notifications_BANG_], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"notification","notification",-222338233)], 0)));

break;
default:
return beicon.v2.core.of(app.main.data.notifications.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224),self__.message,new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close"),new cljs.core.Keyword(null,"callback","callback",-705136228),app.main.data.common.hide_notifications_BANG_], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"notification","notification",-222338233)], 0)));

}
}));
}

return (new app.main.data.common.show_notification_37781(p__37779,map__37780__$1,params,message,code,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.common.show_shared_dialog = (function app$main$data$common$show_shared_dialog(file_id,add_shared){
if((typeof app.main.data.common.show_shared_dialog_37788 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.show_shared_dialog_37788 = (function (file_id,add_shared,meta37789){
this.file_id = file_id;
this.add_shared = add_shared;
this.meta37789 = meta37789;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.show_shared_dialog_37788.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.show_shared_dialog_37788.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","show-shared-dialog","app.main.data.common/show-shared-dialog",-1265775444);
}));

(app.main.data.common.show_shared_dialog_37788.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37790,meta37789__$1){
var self__ = this;
var _37790__$1 = this;
return (new app.main.data.common.show_shared_dialog_37788(self__.file_id,self__.add_shared,meta37789__$1));
}));

(app.main.data.common.show_shared_dialog_37788.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37790){
var self__ = this;
var _37790__$1 = this;
return self__.meta37789;
}));

(app.main.data.common.show_shared_dialog_37788.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.show_shared_dialog_37788.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.map((function (summary){
var count = (((new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(summary)) + new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"graphics","graphics",-2079995979).cljs$core$IFn$_invoke$arity$1(summary))) + new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(summary))) + new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"typographies","typographies",-482095730).cljs$core$IFn$_invoke$arity$1(summary)));
return app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.add-shared-confirm.message",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(summary)], 0)),new cljs.core.Keyword(null,"message","message",-406056002),(((count === (0)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.add-shared-confirm-empty.hint"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.add-shared-confirm.hint")),new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551),(((count === (0)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.cancel"):new cljs.core.Keyword(null,"omit","omit",-1917972325)),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.add-shared-confirm.accept"),new cljs.core.Keyword(null,"accept-style","accept-style",630742659),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),self__.add_shared], null));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-file-summary","get-file-summary",-845116685),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.file_id], null)));
}));
}

return (new app.main.data.common.show_shared_dialog_37788(file_id,add_shared,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.common.schema_COLON_export_files = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"sequential","sequential",-1082983960),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Files"], null),new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"FileParam"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"is-shared","is-shared",2126511925),new cljs.core.Keyword("app.common.schema","boolean","app.common.schema/boolean",-727386221)], null)], null)], null);
app.main.data.common.check_export_files_BANG_ = app.common.schema.check_fn(app.main.data.common.schema_COLON_export_files);
app.main.data.common.valid_export_formats = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"binfile-v1","binfile-v1",1008484704),null,new cljs.core.Keyword(null,"legacy-zip","legacy-zip",1673362658),null,new cljs.core.Keyword(null,"binfile-v3","binfile-v3",-2038359825),null], null), null);
app.main.data.common.export_files = (function app$main$data$common$export_files(files,format){
app.common.data.macros.runtime_assert("expected valid files param",(function (){
return app.main.data.common.check_export_files_BANG_(files);
}));

app.common.data.macros.runtime_assert("expected valid format",(function (){
return cljs.core.contains_QMARK_(app.main.data.common.valid_export_formats,format);
}));

if((typeof app.main.data.common.export_files_37792 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.export_files_37792 = (function (files,format,meta37793){
this.files = files;
this.format = format;
this.meta37793 = meta37793;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.export_files_37792.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.export_files_37792.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","export-files","app.main.data.common/export-files",-1223649733);
}));

(app.main.data.common.export_files_37792.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37794,meta37793__$1){
var self__ = this;
var _37794__$1 = this;
return (new app.main.data.common.export_files_37792(self__.files,self__.format,meta37793__$1));
}));

(app.main.data.common.export_files_37792.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37794){
var self__ = this;
var _37794__$1 = this;
return self__.meta37793;
}));

(app.main.data.common.export_files_37792.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.export_files_37792.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var features__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"features","features",-1146962336));
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995));
return beicon.v2.core.map((function (files__$1){
return app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"export","export",214356590),new cljs.core.Keyword(null,"features","features",-1146962336),features__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"files","files",-472457450),files__$1,new cljs.core.Keyword(null,"format","format",-1306924766),self__.format], null));
}),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,beicon.v2.core.mapcat((function (file){
return beicon.v2.core.map((function (p1__37791_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file,new cljs.core.Keyword(null,"has-libraries","has-libraries",1869731297),p1__37791_SHARP_);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"has-file-libraries","has-file-libraries",183957263),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file)], null)));
}),beicon.v2.core.from(self__.files))));
}));
}

return (new app.main.data.common.export_files_37792(files,format,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.common.create_team_access_request = (function app$main$data$common$create_team_access_request(params){
if((typeof app.main.data.common.create_team_access_request_37795 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.create_team_access_request_37795 = (function (params,meta37796){
this.params = params;
this.meta37796 = meta37796;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.create_team_access_request_37795.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.create_team_access_request_37795.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","create-team-access-request","app.main.data.common/create-team-access-request",-1355196738);
}));

(app.main.data.common.create_team_access_request_37795.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37797,meta37796__$1){
var self__ = this;
var _37797__$1 = this;
return (new app.main.data.common.create_team_access_request_37795(self__.params,meta37796__$1));
}));

(app.main.data.common.create_team_access_request_37795.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37797){
var self__ = this;
var _37797__$1 = this;
return self__.meta37796;
}));

(app.main.data.common.create_team_access_request_37795.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.create_team_access_request_37795.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var map__37798 = cljs.core.meta(self__.params);
var map__37798__$1 = cljs.core.__destructure_map(map__37798);
var on_success = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37798__$1,new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.identity);
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__37798__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530),beicon.v2.core.throw$);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(on_error,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(on_success,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-team-access-request","create-team-access-request",1803920101),self__.params)));
}));
}

return (new app.main.data.common.create_team_access_request_37795(params,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.common.get_change_role_msg = (function app$main$data$common$get_change_role_msg(role){
var G__37799 = role;
var G__37799__$1 = (((G__37799 instanceof cljs.core.Keyword))?G__37799.fqn:null);
switch (G__37799__$1) {
case "viewer":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.permissions-change.viewer");

break;
case "editor":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.permissions-change.editor");

break;
case "admin":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.permissions-change.admin");

break;
case "owner":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.permissions-change.owner");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__37799__$1)].join('')));

}
});
app.main.data.common.change_team_role = (function app$main$data$common$change_team_role(p__37800){
var map__37801 = p__37800;
var map__37801__$1 = cljs.core.__destructure_map(map__37801);
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37801__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
var role = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37801__$1,new cljs.core.Keyword(null,"role","role",-736691072));
app.common.data.macros.runtime_assert("expr assert: (uuid? team-id)",(function (){
return cljs.core.uuid_QMARK_(team_id);
}));

app.common.data.macros.runtime_assert("expr assert: (contains? ctt/valid-roles role)",(function (){
return cljs.core.contains_QMARK_(app.common.types.team.valid_roles,role);
}));

if((typeof app.main.data.common.change_team_role_37802 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.change_team_role_37802 = (function (p__37800,map__37801,team_id,role,meta37803){
this.p__37800 = p__37800;
this.map__37801 = map__37801;
this.team_id = team_id;
this.role = role;
this.meta37803 = meta37803;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.change_team_role_37802.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.change_team_role_37802.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","change-team-role","app.main.data.common/change-team-role",-688549173);
}));

(app.main.data.common.change_team_role_37802.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37804,meta37803__$1){
var self__ = this;
var _37804__$1 = this;
return (new app.main.data.common.change_team_role_37802(self__.p__37800,self__.map__37801,self__.team_id,self__.role,meta37803__$1));
}));

(app.main.data.common.change_team_role_37802.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37804){
var self__ = this;
var _37804__$1 = this;
return self__.meta37803;
}));

(app.main.data.common.change_team_role_37802.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.change_team_role_37802.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.data.notifications.info.cljs$core$IFn$_invoke$arity$1(app.main.data.common.get_change_role_msg(self__.role)));
}));

(app.main.data.common.change_team_role_37802.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.change_team_role_37802.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.team.permissions_for_role,self__.role);
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"permissions","permissions",67803075),cljs.core.merge,permissions),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"permissions","permissions",67803075)], null),cljs.core.merge,permissions),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"teams","teams",1677714510),self__.team_id,new cljs.core.Keyword(null,"permissions","permissions",67803075)], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([permissions], 0));
}));
}

return (new app.main.data.common.change_team_role_37802(p__37800,map__37801__$1,team_id,role,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.common.team_membership_change = (function app$main$data$common$team_membership_change(p__37805){
var map__37806 = p__37805;
var map__37806__$1 = cljs.core.__destructure_map(map__37806);
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37806__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
var team_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37806__$1,new cljs.core.Keyword(null,"team-name","team-name",1475836072));
var change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37806__$1,new cljs.core.Keyword(null,"change","change",-1163046502));
app.common.data.macros.runtime_assert("expr assert: (uuid? team-id)",(function (){
return cljs.core.uuid_QMARK_(team_id);
}));

if((typeof app.main.data.common.team_membership_change_37807 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.team_membership_change_37807 = (function (p__37805,map__37806,team_id,team_name,change,meta37808){
this.p__37805 = p__37805;
this.map__37806 = map__37806;
this.team_id = team_id;
this.team_name = team_name;
this.change = change;
this.meta37808 = meta37808;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.team_membership_change_37807.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.team_membership_change_37807.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","team-membership-change","app.main.data.common/team-membership-change",1650446399);
}));

(app.main.data.common.team_membership_change_37807.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37809,meta37808__$1){
var self__ = this;
var _37809__$1 = this;
return (new app.main.data.common.team_membership_change_37807(self__.p__37805,self__.map__37806,self__.team_id,self__.team_name,self__.change,meta37808__$1));
}));

(app.main.data.common.team_membership_change_37807.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37809){
var self__ = this;
var _37809__$1 = this;
return self__.meta37808;
}));

(app.main.data.common.team_membership_change_37807.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.team_membership_change_37807.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"profile","profile",-545963874)),new cljs.core.Keyword(null,"default-team-id","default-team-id",1198639706)));
}));

(app.main.data.common.team_membership_change_37807.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.team_membership_change_37807.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"removed","removed",609626430),self__.change)){
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.removed-from-team",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.team_name], 0));
var team_id__$1 = new cljs.core.Keyword(null,"default-team-id","default-team-id",1198639706).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"profile","profile",-545963874).cljs$core$IFn$_invoke$arity$1(state));
return beicon.v2.core.concat(beicon.v2.core.of((app.main.data.common.go_to_dashboard_recent.cljs$core$IFn$_invoke$arity$2 ? app.main.data.common.go_to_dashboard_recent.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id__$1) : app.main.data.common.go_to_dashboard_recent.call(null,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id__$1))),beicon.v2.core.delay((250),beicon.v2.core.of(app.main.data.notifications.info.cljs$core$IFn$_invoke$arity$1(message))));
} else {
return null;
}
}));
}

return (new app.main.data.common.team_membership_change_37807(p__37805,map__37806__$1,team_id,team_name,change,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.common.noop_fn = cljs.core.constantly(null);
app.main.data.common.schema_COLON_progress_params = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Progress"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"index","index",-1531685915),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","int","app.common.schema/int",519552051)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword("app.common.schema","int","app.common.schema/int",519552051)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hints","hints",-991113151),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),cljs.core.fn_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"slow-progress-threshold","slow-progress-threshold",-1289590291),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","int","app.common.schema/int",519552051)], null)], null);
app.main.data.common.check_progress_params = app.common.schema.check_fn(app.main.data.common.schema_COLON_progress_params);
app.main.data.common.initialize_progress = (function app$main$data$common$initialize_progress(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37989 = arguments.length;
var i__5750__auto___37990 = (0);
while(true){
if((i__5750__auto___37990 < len__5749__auto___37989)){
args__5755__auto__.push((arguments[i__5750__auto___37990]));

var G__37991 = (i__5750__auto___37990 + (1));
i__5750__auto___37990 = G__37991;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.data.common.initialize_progress.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.data.common.initialize_progress.cljs$core$IFn$_invoke$arity$variadic = (function (p__37811){
var map__37812 = p__37811;
var map__37812__$1 = cljs.core.__destructure_map(map__37812);
var params = map__37812__$1;
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37812__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37812__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37812__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var hints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37812__$1,new cljs.core.Keyword(null,"hints","hints",-991113151));
var slow_progress_threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37812__$1,new cljs.core.Keyword(null,"slow-progress-threshold","slow-progress-threshold",-1289590291));
if(cljs.core.truth_(app.main.data.common.check_progress_params(params))){
} else {
throw (new Error("Assert failed: (check-progress-params params)"));
}

if((typeof app.main.data.common.initialize_progress_37813 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.initialize_progress_37813 = (function (p__37811,map__37812,params,key,index,total,hints,slow_progress_threshold,meta37814){
this.p__37811 = p__37811;
this.map__37812 = map__37812;
this.params = params;
this.key = key;
this.index = index;
this.total = total;
this.hints = hints;
this.slow_progress_threshold = slow_progress_threshold;
this.meta37814 = meta37814;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.initialize_progress_37813.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.initialize_progress_37813.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","initialize-progress","app.main.data.common/initialize-progress",-1910225354);
}));

(app.main.data.common.initialize_progress_37813.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37815,meta37814__$1){
var self__ = this;
var _37815__$1 = this;
return (new app.main.data.common.initialize_progress_37813(self__.p__37811,self__.map__37812,self__.params,self__.key,self__.index,self__.total,self__.hints,self__.slow_progress_threshold,meta37814__$1));
}));

(app.main.data.common.initialize_progress_37813.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37815){
var self__ = this;
var _37815__$1 = this;
return self__.meta37814;
}));

(app.main.data.common.initialize_progress_37813.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.initialize_progress_37813.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"progress","progress",244323547),(function (___$2){
var hint = (function (){var fexpr__37816 = new cljs.core.Keyword(null,"normal","normal",-1519123858).cljs$core$IFn$_invoke$arity$2(self__.hints,app.main.data.common.noop_fn);
return (fexpr__37816.cljs$core$IFn$_invoke$arity$1 ? fexpr__37816.cljs$core$IFn$_invoke$arity$1(self__.params) : fexpr__37816.call(null,self__.params));
})();
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"hints","hints",-991113151),new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"hint","hint",439639918),new cljs.core.Keyword(null,"threshold","threshold",204221583),new cljs.core.Keyword(null,"healthy","healthy",-215908271),new cljs.core.Keyword(null,"total","total",1916810418),new cljs.core.Keyword(null,"last-update","last-update",-983435406),new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"visible","visible",-1024216805)],[self__.hints,self__.key,hint,(function (){var or__5025__auto__ = self__.slow_progress_threshold;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (5000);
}
})(),true,self__.total,app.common.time.now(),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(self__.index,(0)),true]);
}));
}));
}

return (new app.main.data.common.initialize_progress_37813(p__37811,map__37812__$1,params,key,index,total,hints,slow_progress_threshold,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.common.initialize_progress.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.data.common.initialize_progress.cljs$lang$applyTo = (function (seq37810){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37810));
}));

app.main.data.common.update_progress = (function app$main$data$common$update_progress(p__37817){
var map__37818 = p__37817;
var map__37818__$1 = cljs.core.__destructure_map(map__37818);
var params = map__37818__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37818__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37818__$1,new cljs.core.Keyword(null,"total","total",1916810418));
if(cljs.core.truth_(app.main.data.common.check_progress_params(params))){
} else {
throw (new Error("Assert failed: (check-progress-params params)"));
}

if((typeof app.main.data.common.update_progress_37819 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.update_progress_37819 = (function (p__37817,map__37818,params,index,total,meta37820){
this.p__37817 = p__37817;
this.map__37818 = map__37818;
this.params = params;
this.index = index;
this.total = total;
this.meta37820 = meta37820;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.update_progress_37819.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.update_progress_37819.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","update-progress","app.main.data.common/update-progress",-591721569);
}));

(app.main.data.common.update_progress_37819.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37821,meta37820__$1){
var self__ = this;
var _37821__$1 = this;
return (new app.main.data.common.update_progress_37819(self__.p__37817,self__.map__37818,self__.params,self__.index,self__.total,meta37820__$1));
}));

(app.main.data.common.update_progress_37819.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37821){
var self__ = this;
var _37821__$1 = this;
return self__.meta37820;
}));

(app.main.data.common.update_progress_37819.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.update_progress_37819.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"progress","progress",244323547),(function (state__$1){
var last_update = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.Keyword(null,"last-update","last-update",-983435406));
var hints = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.Keyword(null,"hints","hints",-991113151));
var threshold = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state__$1,new cljs.core.Keyword(null,"slow-progress-threshold","slow-progress-threshold",-1289590291));
var time_diff = app.common.time.diff_ms(last_update,app.common.time.now());
var healthy_QMARK_ = (time_diff < threshold);
var hint = ((healthy_QMARK_)?(function (){var fexpr__37822 = new cljs.core.Keyword(null,"normal","normal",-1519123858).cljs$core$IFn$_invoke$arity$2(hints,app.main.data.common.noop_fn);
return (fexpr__37822.cljs$core$IFn$_invoke$arity$1 ? fexpr__37822.cljs$core$IFn$_invoke$arity$1(self__.params) : fexpr__37822.call(null,self__.params));
})():(function (){var fexpr__37823 = new cljs.core.Keyword(null,"slow","slow",120317203).cljs$core$IFn$_invoke$arity$2(hints,app.main.data.common.noop_fn);
return (fexpr__37823.cljs$core$IFn$_invoke$arity$1 ? fexpr__37823.cljs$core$IFn$_invoke$arity$1(self__.params) : fexpr__37823.call(null,self__.params));
})());
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"progress","progress",244323547),self__.index),new cljs.core.Keyword(null,"total","total",1916810418),self__.total),new cljs.core.Keyword(null,"last-update","last-update",-983435406),app.common.time.now()),new cljs.core.Keyword(null,"healthy","healthy",-215908271),healthy_QMARK_),new cljs.core.Keyword(null,"hint","hint",439639918),hint);
}));
}));
}

return (new app.main.data.common.update_progress_37819(p__37817,map__37818__$1,params,index,total,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.common.toggle_progress_visibility = (function app$main$data$common$toggle_progress_visibility(){
if((typeof app.main.data.common.toggle_progress_visibility_37824 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.toggle_progress_visibility_37824 = (function (meta37825){
this.meta37825 = meta37825;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.toggle_progress_visibility_37824.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.toggle_progress_visibility_37824.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","toggle-progress-visibility","app.main.data.common/toggle-progress-visibility",581576293);
}));

(app.main.data.common.toggle_progress_visibility_37824.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37826,meta37825__$1){
var self__ = this;
var _37826__$1 = this;
return (new app.main.data.common.toggle_progress_visibility_37824(meta37825__$1));
}));

(app.main.data.common.toggle_progress_visibility_37824.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37826){
var self__ = this;
var _37826__$1 = this;
return self__.meta37825;
}));

(app.main.data.common.toggle_progress_visibility_37824.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.toggle_progress_visibility_37824.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"progress","progress",244323547),(function (state__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state__$1,new cljs.core.Keyword(null,"visible","visible",-1024216805),cljs.core.not);
}));
}));
}

return (new app.main.data.common.toggle_progress_visibility_37824(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.common.clear_progress = (function app$main$data$common$clear_progress(){
if((typeof app.main.data.common.clear_progress_37827 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.clear_progress_37827 = (function (meta37828){
this.meta37828 = meta37828;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.clear_progress_37827.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.clear_progress_37827.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","clear-progress","app.main.data.common/clear-progress",910980633);
}));

(app.main.data.common.clear_progress_37827.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37829,meta37828__$1){
var self__ = this;
var _37829__$1 = this;
return (new app.main.data.common.clear_progress_37827(meta37828__$1));
}));

(app.main.data.common.clear_progress_37827.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37829){
var self__ = this;
var _37829__$1 = this;
return self__.meta37828;
}));

(app.main.data.common.clear_progress_37827.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.clear_progress_37827.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"progress","progress",244323547));
}));
}

return (new app.main.data.common.clear_progress_37827(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.common.go_to_feedback = (function app$main$data$common$go_to_feedback(){
if((typeof app.main.data.common.go_to_feedback_37830 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.go_to_feedback_37830 = (function (meta37831){
this.meta37831 = meta37831;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.go_to_feedback_37830.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_feedback_37830.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","go-to-feedback","app.main.data.common/go-to-feedback",-1510038275);
}));

(app.main.data.common.go_to_feedback_37830.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37832,meta37831__$1){
var self__ = this;
var _37832__$1 = this;
return (new app.main.data.common.go_to_feedback_37830(meta37831__$1));
}));

(app.main.data.common.go_to_feedback_37830.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37832){
var self__ = this;
var _37832__$1 = this;
return self__.meta37831;
}));

(app.main.data.common.go_to_feedback_37830.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_feedback_37830.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"settings-feedback","settings-feedback",-1884878904),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("app.main.router","new-window","app.main.router/new-window",1705407424),true,new cljs.core.Keyword("app.main.router","window-name","app.main.router/window-name",321663835),"penpot-feedback"], 0)));
}));
}

return (new app.main.data.common.go_to_feedback_37830(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.common.go_to_dashboard_files = (function app$main$data$common$go_to_dashboard_files(var_args){
var args__5755__auto__ = [];
var len__5749__auto___37998 = arguments.length;
var i__5750__auto___37999 = (0);
while(true){
if((i__5750__auto___37999 < len__5749__auto___37998)){
args__5755__auto__.push((arguments[i__5750__auto___37999]));

var G__38000 = (i__5750__auto___37999 + (1));
i__5750__auto___37999 = G__38000;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.data.common.go_to_dashboard_files.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.data.common.go_to_dashboard_files.cljs$core$IFn$_invoke$arity$variadic = (function (p__37834){
var map__37835 = p__37834;
var map__37835__$1 = cljs.core.__destructure_map(map__37835);
var options = map__37835__$1;
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37835__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307));
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37835__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
if((typeof app.main.data.common.go_to_dashboard_files_37836 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.go_to_dashboard_files_37836 = (function (p__37834,map__37835,options,project_id,team_id,meta37837){
this.p__37834 = p__37834;
this.map__37835 = map__37835;
this.options = options;
this.project_id = project_id;
this.team_id = team_id;
this.meta37837 = meta37837;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.go_to_dashboard_files_37836.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_files_37836.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","go-to-dashboard-files","app.main.data.common/go-to-dashboard-files",1138202340);
}));

(app.main.data.common.go_to_dashboard_files_37836.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37838,meta37837__$1){
var self__ = this;
var _37838__$1 = this;
return (new app.main.data.common.go_to_dashboard_files_37836(self__.p__37834,self__.map__37835,self__.options,self__.project_id,self__.team_id,meta37837__$1));
}));

(app.main.data.common.go_to_dashboard_files_37836.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37838){
var self__ = this;
var _37838__$1 = this;
return self__.meta37837;
}));

(app.main.data.common.go_to_dashboard_files_37836.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_files_37836.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"profile","profile",-545963874));
var team_id__$1 = (function (){var or__5025__auto__ = self__.team_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
}
})();
var project_id__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.project_id,new cljs.core.Keyword(null,"default","default",-1987822328)))?new cljs.core.Keyword(null,"default-project-id","default-project-id",-850768589).cljs$core$IFn$_invoke$arity$1(profile):self__.project_id);
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id__$1,new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id__$1], null);
return beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"dashboard-files","dashboard-files",-1779590854),params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.options], 0)));
}));
}

return (new app.main.data.common.go_to_dashboard_files_37836(p__37834,map__37835__$1,options,project_id,team_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.common.go_to_dashboard_files.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.data.common.go_to_dashboard_files.cljs$lang$applyTo = (function (seq37833){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37833));
}));

app.main.data.common.go_to_dashboard_search = (function app$main$data$common$go_to_dashboard_search(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38003 = arguments.length;
var i__5750__auto___38004 = (0);
while(true){
if((i__5750__auto___38004 < len__5749__auto___38003)){
args__5755__auto__.push((arguments[i__5750__auto___38004]));

var G__38008 = (i__5750__auto___38004 + (1));
i__5750__auto___38004 = G__38008;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.data.common.go_to_dashboard_search.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.data.common.go_to_dashboard_search.cljs$core$IFn$_invoke$arity$variadic = (function (p__37840){
var map__37841 = p__37840;
var map__37841__$1 = cljs.core.__destructure_map(map__37841);
var options = map__37841__$1;
var term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37841__$1,new cljs.core.Keyword(null,"term","term",-1817390416));
if((typeof app.main.data.common.go_to_dashboard_search_37842 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.go_to_dashboard_search_37842 = (function (p__37840,map__37841,options,term,meta37843){
this.p__37840 = p__37840;
this.map__37841 = map__37841;
this.options = options;
this.term = term;
this.meta37843 = meta37843;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.go_to_dashboard_search_37842.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_search_37842.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","go-to-dashboard-search","app.main.data.common/go-to-dashboard-search",1377924631);
}));

(app.main.data.common.go_to_dashboard_search_37842.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37844,meta37843__$1){
var self__ = this;
var _37844__$1 = this;
return (new app.main.data.common.go_to_dashboard_search_37842(self__.p__37840,self__.map__37841,self__.options,self__.term,meta37843__$1));
}));

(app.main.data.common.go_to_dashboard_search_37842.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37844){
var self__ = this;
var _37844__$1 = this;
return self__.meta37843;
}));

(app.main.data.common.go_to_dashboard_search_37842.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_search_37842.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.merge(beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dashboard-search","dashboard-search",-644447359),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"search-term","search-term",356193544),self__.term], null)),app.main.data.modal.hide())),beicon.v2.core.map((function (___$2){
return potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.util.dom","focus-element","app.util.dom/focus-element",899201855),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),"search-input"], null));
}),beicon.v2.core.take((1),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.router","navigated","app.main.router/navigated",-343379749)),stream))));
}));
}

return (new app.main.data.common.go_to_dashboard_search_37842(p__37840,map__37841__$1,options,term,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.common.go_to_dashboard_search.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.data.common.go_to_dashboard_search.cljs$lang$applyTo = (function (seq37839){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37839));
}));

app.main.data.common.go_to_dashboard_libraries = (function app$main$data$common$go_to_dashboard_libraries(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38013 = arguments.length;
var i__5750__auto___38014 = (0);
while(true){
if((i__5750__auto___38014 < len__5749__auto___38013)){
args__5755__auto__.push((arguments[i__5750__auto___38014]));

var G__38016 = (i__5750__auto___38014 + (1));
i__5750__auto___38014 = G__38016;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.data.common.go_to_dashboard_libraries.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.data.common.go_to_dashboard_libraries.cljs$core$IFn$_invoke$arity$variadic = (function (p__37846){
var map__37847 = p__37846;
var map__37847__$1 = cljs.core.__destructure_map(map__37847);
var options = map__37847__$1;
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37847__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
if((typeof app.main.data.common.go_to_dashboard_libraries_37848 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.go_to_dashboard_libraries_37848 = (function (p__37846,map__37847,options,team_id,meta37849){
this.p__37846 = p__37846;
this.map__37847 = map__37847;
this.options = options;
this.team_id = team_id;
this.meta37849 = meta37849;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.go_to_dashboard_libraries_37848.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_libraries_37848.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","go-to-dashboard-libraries","app.main.data.common/go-to-dashboard-libraries",-165601239);
}));

(app.main.data.common.go_to_dashboard_libraries_37848.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37850,meta37849__$1){
var self__ = this;
var _37850__$1 = this;
return (new app.main.data.common.go_to_dashboard_libraries_37848(self__.p__37846,self__.map__37847,self__.options,self__.team_id,meta37849__$1));
}));

(app.main.data.common.go_to_dashboard_libraries_37848.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37850){
var self__ = this;
var _37850__$1 = this;
return self__.meta37849;
}));

(app.main.data.common.go_to_dashboard_libraries_37848.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_libraries_37848.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id__$1 = (function (){var or__5025__auto__ = self__.team_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
}
})();
return beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dashboard-libraries","dashboard-libraries",-1057436771),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id__$1], null)));
}));
}

return (new app.main.data.common.go_to_dashboard_libraries_37848(p__37846,map__37847__$1,options,team_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.common.go_to_dashboard_libraries.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.data.common.go_to_dashboard_libraries.cljs$lang$applyTo = (function (seq37845){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37845));
}));

app.main.data.common.go_to_dashboard_fonts = (function app$main$data$common$go_to_dashboard_fonts(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38022 = arguments.length;
var i__5750__auto___38023 = (0);
while(true){
if((i__5750__auto___38023 < len__5749__auto___38022)){
args__5755__auto__.push((arguments[i__5750__auto___38023]));

var G__38024 = (i__5750__auto___38023 + (1));
i__5750__auto___38023 = G__38024;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.data.common.go_to_dashboard_fonts.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.data.common.go_to_dashboard_fonts.cljs$core$IFn$_invoke$arity$variadic = (function (p__37852){
var map__37853 = p__37852;
var map__37853__$1 = cljs.core.__destructure_map(map__37853);
var options = map__37853__$1;
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37853__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
if((typeof app.main.data.common.go_to_dashboard_fonts_37854 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.go_to_dashboard_fonts_37854 = (function (p__37852,map__37853,options,team_id,meta37855){
this.p__37852 = p__37852;
this.map__37853 = map__37853;
this.options = options;
this.team_id = team_id;
this.meta37855 = meta37855;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.go_to_dashboard_fonts_37854.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_fonts_37854.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","go-to-dashboard-fonts","app.main.data.common/go-to-dashboard-fonts",-1567195956);
}));

(app.main.data.common.go_to_dashboard_fonts_37854.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37856,meta37855__$1){
var self__ = this;
var _37856__$1 = this;
return (new app.main.data.common.go_to_dashboard_fonts_37854(self__.p__37852,self__.map__37853,self__.options,self__.team_id,meta37855__$1));
}));

(app.main.data.common.go_to_dashboard_fonts_37854.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37856){
var self__ = this;
var _37856__$1 = this;
return self__.meta37855;
}));

(app.main.data.common.go_to_dashboard_fonts_37854.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_fonts_37854.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id__$1 = (function (){var or__5025__auto__ = self__.team_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
}
})();
return beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dashboard-fonts","dashboard-fonts",-1313435498),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id__$1], null)));
}));
}

return (new app.main.data.common.go_to_dashboard_fonts_37854(p__37852,map__37853__$1,options,team_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.common.go_to_dashboard_fonts.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.data.common.go_to_dashboard_fonts.cljs$lang$applyTo = (function (seq37851){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37851));
}));

app.main.data.common.go_to_dashboard_recent = (function app$main$data$common$go_to_dashboard_recent(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38028 = arguments.length;
var i__5750__auto___38029 = (0);
while(true){
if((i__5750__auto___38029 < len__5749__auto___38028)){
args__5755__auto__.push((arguments[i__5750__auto___38029]));

var G__38030 = (i__5750__auto___38029 + (1));
i__5750__auto___38029 = G__38030;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.data.common.go_to_dashboard_recent.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.data.common.go_to_dashboard_recent.cljs$core$IFn$_invoke$arity$variadic = (function (p__37858){
var map__37859 = p__37858;
var map__37859__$1 = cljs.core.__destructure_map(map__37859);
var options = map__37859__$1;
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37859__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
if((typeof app.main.data.common.go_to_dashboard_recent_37860 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.go_to_dashboard_recent_37860 = (function (p__37858,map__37859,options,team_id,meta37861){
this.p__37858 = p__37858;
this.map__37859 = map__37859;
this.options = options;
this.team_id = team_id;
this.meta37861 = meta37861;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.go_to_dashboard_recent_37860.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_recent_37860.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","go-to-dashboard-recent","app.main.data.common/go-to-dashboard-recent",-1889345749);
}));

(app.main.data.common.go_to_dashboard_recent_37860.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37862,meta37861__$1){
var self__ = this;
var _37862__$1 = this;
return (new app.main.data.common.go_to_dashboard_recent_37860(self__.p__37858,self__.map__37859,self__.options,self__.team_id,meta37861__$1));
}));

(app.main.data.common.go_to_dashboard_recent_37860.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37862){
var self__ = this;
var _37862__$1 = this;
return self__.meta37861;
}));

(app.main.data.common.go_to_dashboard_recent_37860.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_recent_37860.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"profile","profile",-545963874));
var team_id__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),self__.team_id))?new cljs.core.Keyword(null,"default-team-id","default-team-id",1198639706).cljs$core$IFn$_invoke$arity$1(profile):((cljs.core.uuid_QMARK_(self__.team_id))?self__.team_id:new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state)
));
var params = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id__$1], null);
return beicon.v2.core.of(app.main.data.modal.hide(),app.main.router.nav.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"dashboard-recent","dashboard-recent",-1541043167),params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.options], 0)));
}));
}

return (new app.main.data.common.go_to_dashboard_recent_37860(p__37858,map__37859__$1,options,team_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.common.go_to_dashboard_recent.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.data.common.go_to_dashboard_recent.cljs$lang$applyTo = (function (seq37857){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37857));
}));

app.main.data.common.go_to_dashboard_members = (function app$main$data$common$go_to_dashboard_members(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38032 = arguments.length;
var i__5750__auto___38033 = (0);
while(true){
if((i__5750__auto___38033 < len__5749__auto___38032)){
args__5755__auto__.push((arguments[i__5750__auto___38033]));

var G__38034 = (i__5750__auto___38033 + (1));
i__5750__auto___38033 = G__38034;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.data.common.go_to_dashboard_members.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.data.common.go_to_dashboard_members.cljs$core$IFn$_invoke$arity$variadic = (function (p__37864){
var map__37865 = p__37864;
var map__37865__$1 = cljs.core.__destructure_map(map__37865);
var options = map__37865__$1;
if((typeof app.main.data.common.go_to_dashboard_members_37866 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.go_to_dashboard_members_37866 = (function (p__37864,map__37865,options,meta37867){
this.p__37864 = p__37864;
this.map__37865 = map__37865;
this.options = options;
this.meta37867 = meta37867;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.go_to_dashboard_members_37866.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_members_37866.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","go-to-dashboard-members","app.main.data.common/go-to-dashboard-members",-434330469);
}));

(app.main.data.common.go_to_dashboard_members_37866.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37868,meta37867__$1){
var self__ = this;
var _37868__$1 = this;
return (new app.main.data.common.go_to_dashboard_members_37866(self__.p__37864,self__.map__37865,self__.options,meta37867__$1));
}));

(app.main.data.common.go_to_dashboard_members_37866.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37868){
var self__ = this;
var _37868__$1 = this;
return self__.meta37867;
}));

(app.main.data.common.go_to_dashboard_members_37866.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_members_37866.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dashboard-members","dashboard-members",726788044),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null)));
}));
}

return (new app.main.data.common.go_to_dashboard_members_37866(p__37864,map__37865__$1,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.common.go_to_dashboard_members.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.data.common.go_to_dashboard_members.cljs$lang$applyTo = (function (seq37863){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37863));
}));

app.main.data.common.go_to_dashboard_invitations = (function app$main$data$common$go_to_dashboard_invitations(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38053 = arguments.length;
var i__5750__auto___38054 = (0);
while(true){
if((i__5750__auto___38054 < len__5749__auto___38053)){
args__5755__auto__.push((arguments[i__5750__auto___38054]));

var G__38055 = (i__5750__auto___38054 + (1));
i__5750__auto___38054 = G__38055;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.data.common.go_to_dashboard_invitations.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.data.common.go_to_dashboard_invitations.cljs$core$IFn$_invoke$arity$variadic = (function (p__37870){
var map__37871 = p__37870;
var map__37871__$1 = cljs.core.__destructure_map(map__37871);
var options = map__37871__$1;
if((typeof app.main.data.common.go_to_dashboard_invitations_37872 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.go_to_dashboard_invitations_37872 = (function (p__37870,map__37871,options,meta37873){
this.p__37870 = p__37870;
this.map__37871 = map__37871;
this.options = options;
this.meta37873 = meta37873;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.go_to_dashboard_invitations_37872.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_invitations_37872.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","go-to-dashboard-invitations","app.main.data.common/go-to-dashboard-invitations",-1542734327);
}));

(app.main.data.common.go_to_dashboard_invitations_37872.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37874,meta37873__$1){
var self__ = this;
var _37874__$1 = this;
return (new app.main.data.common.go_to_dashboard_invitations_37872(self__.p__37870,self__.map__37871,self__.options,meta37873__$1));
}));

(app.main.data.common.go_to_dashboard_invitations_37872.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37874){
var self__ = this;
var _37874__$1 = this;
return self__.meta37873;
}));

(app.main.data.common.go_to_dashboard_invitations_37872.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_invitations_37872.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dashboard-invitations","dashboard-invitations",-357467805),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null)));
}));
}

return (new app.main.data.common.go_to_dashboard_invitations_37872(p__37870,map__37871__$1,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.common.go_to_dashboard_invitations.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.data.common.go_to_dashboard_invitations.cljs$lang$applyTo = (function (seq37869){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37869));
}));

app.main.data.common.go_to_dashboard_webhooks = (function app$main$data$common$go_to_dashboard_webhooks(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38068 = arguments.length;
var i__5750__auto___38069 = (0);
while(true){
if((i__5750__auto___38069 < len__5749__auto___38068)){
args__5755__auto__.push((arguments[i__5750__auto___38069]));

var G__38070 = (i__5750__auto___38069 + (1));
i__5750__auto___38069 = G__38070;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.data.common.go_to_dashboard_webhooks.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.data.common.go_to_dashboard_webhooks.cljs$core$IFn$_invoke$arity$variadic = (function (p__37876){
var map__37877 = p__37876;
var map__37877__$1 = cljs.core.__destructure_map(map__37877);
var options = map__37877__$1;
if((typeof app.main.data.common.go_to_dashboard_webhooks_37878 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.go_to_dashboard_webhooks_37878 = (function (p__37876,map__37877,options,meta37879){
this.p__37876 = p__37876;
this.map__37877 = map__37877;
this.options = options;
this.meta37879 = meta37879;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.go_to_dashboard_webhooks_37878.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_webhooks_37878.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","go-to-dashboard-webhooks","app.main.data.common/go-to-dashboard-webhooks",-1984277947);
}));

(app.main.data.common.go_to_dashboard_webhooks_37878.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37880,meta37879__$1){
var self__ = this;
var _37880__$1 = this;
return (new app.main.data.common.go_to_dashboard_webhooks_37878(self__.p__37876,self__.map__37877,self__.options,meta37879__$1));
}));

(app.main.data.common.go_to_dashboard_webhooks_37878.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37880){
var self__ = this;
var _37880__$1 = this;
return self__.meta37879;
}));

(app.main.data.common.go_to_dashboard_webhooks_37878.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_webhooks_37878.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dashboard-webhooks","dashboard-webhooks",-1830316512),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null)));
}));
}

return (new app.main.data.common.go_to_dashboard_webhooks_37878(p__37876,map__37877__$1,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.common.go_to_dashboard_webhooks.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.data.common.go_to_dashboard_webhooks.cljs$lang$applyTo = (function (seq37875){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37875));
}));

app.main.data.common.go_to_dashboard_settings = (function app$main$data$common$go_to_dashboard_settings(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38079 = arguments.length;
var i__5750__auto___38080 = (0);
while(true){
if((i__5750__auto___38080 < len__5749__auto___38079)){
args__5755__auto__.push((arguments[i__5750__auto___38080]));

var G__38081 = (i__5750__auto___38080 + (1));
i__5750__auto___38080 = G__38081;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.data.common.go_to_dashboard_settings.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.data.common.go_to_dashboard_settings.cljs$core$IFn$_invoke$arity$variadic = (function (p__37886){
var map__37887 = p__37886;
var map__37887__$1 = cljs.core.__destructure_map(map__37887);
var options = map__37887__$1;
if((typeof app.main.data.common.go_to_dashboard_settings_37888 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.go_to_dashboard_settings_37888 = (function (p__37886,map__37887,options,meta37889){
this.p__37886 = p__37886;
this.map__37887 = map__37887;
this.options = options;
this.meta37889 = meta37889;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.go_to_dashboard_settings_37888.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_settings_37888.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","go-to-dashboard-settings","app.main.data.common/go-to-dashboard-settings",-658677935);
}));

(app.main.data.common.go_to_dashboard_settings_37888.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37890,meta37889__$1){
var self__ = this;
var _37890__$1 = this;
return (new app.main.data.common.go_to_dashboard_settings_37888(self__.p__37886,self__.map__37887,self__.options,meta37889__$1));
}));

(app.main.data.common.go_to_dashboard_settings_37888.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37890){
var self__ = this;
var _37890__$1 = this;
return self__.meta37889;
}));

(app.main.data.common.go_to_dashboard_settings_37888.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_settings_37888.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dashboard-settings","dashboard-settings",1232740502),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null)));
}));
}

return (new app.main.data.common.go_to_dashboard_settings_37888(p__37886,map__37887__$1,options,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.common.go_to_dashboard_settings.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.data.common.go_to_dashboard_settings.cljs$lang$applyTo = (function (seq37881){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37881));
}));

app.main.data.common.go_to_workspace = (function app$main$data$common$go_to_workspace(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38083 = arguments.length;
var i__5750__auto___38085 = (0);
while(true){
if((i__5750__auto___38085 < len__5749__auto___38083)){
args__5755__auto__.push((arguments[i__5750__auto___38085]));

var G__38086 = (i__5750__auto___38085 + (1));
i__5750__auto___38085 = G__38086;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic = (function (p__37901){
var map__37903 = p__37901;
var map__37903__$1 = cljs.core.__destructure_map(map__37903);
var options = map__37903__$1;
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37903__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37903__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37903__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37903__$1,new cljs.core.Keyword(null,"layout","layout",-2120940921));
if((typeof app.main.data.common.go_to_workspace_37908 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.go_to_workspace_37908 = (function (p__37901,map__37903,options,team_id,file_id,page_id,layout,meta37909){
this.p__37901 = p__37901;
this.map__37903 = map__37903;
this.options = options;
this.team_id = team_id;
this.file_id = file_id;
this.page_id = page_id;
this.layout = layout;
this.meta37909 = meta37909;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.go_to_workspace_37908.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_workspace_37908.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","go-to-workspace","app.main.data.common/go-to-workspace",1683786268);
}));

(app.main.data.common.go_to_workspace_37908.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37910,meta37909__$1){
var self__ = this;
var _37910__$1 = this;
return (new app.main.data.common.go_to_workspace_37908(self__.p__37901,self__.map__37903,self__.options,self__.team_id,self__.file_id,self__.page_id,self__.layout,meta37909__$1));
}));

(app.main.data.common.go_to_workspace_37908.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37910){
var self__ = this;
var _37910__$1 = this;
return self__.meta37909;
}));

(app.main.data.common.go_to_workspace_37908.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_workspace_37908.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var team_id__$1 = (function (){var or__5025__auto__ = self__.team_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state);
}
})();
var file_id__$1 = (function (){var or__5025__auto__ = self__.file_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
}
})();
var page_id__$1 = (function (){var or__5025__auto__ = self__.page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return cljs.core.first(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,file_id__$1),new cljs.core.Keyword(null,"pages","pages",-285406513)));
}
}
})();
var params = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.main.router.get_params(state),new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id__$1),new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id__$1),new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id__$1),new cljs.core.Keyword(null,"layout","layout",-2120940921),(function (p1__37894_SHARP_){
var or__5025__auto__ = self__.layout;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return p1__37894_SHARP_;
}
})));
return beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"workspace","workspace",-1096735709),params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.options], 0)));
}));
}

return (new app.main.data.common.go_to_workspace_37908(p__37901,map__37903__$1,options,team_id,file_id,page_id,layout,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.common.go_to_workspace.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.data.common.go_to_workspace.cljs$lang$applyTo = (function (seq37897){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37897));
}));

app.main.data.common.go_to_viewer = (function app$main$data$common$go_to_viewer(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38100 = arguments.length;
var i__5750__auto___38101 = (0);
while(true){
if((i__5750__auto___38101 < len__5749__auto___38100)){
args__5755__auto__.push((arguments[i__5750__auto___38101]));

var G__38102 = (i__5750__auto___38101 + (1));
i__5750__auto___38101 = G__38102;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.data.common.go_to_viewer.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.data.common.go_to_viewer.cljs$core$IFn$_invoke$arity$variadic = (function (p__37915){
var map__37916 = p__37915;
var map__37916__$1 = cljs.core.__destructure_map(map__37916);
var options = map__37916__$1;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37916__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37916__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37916__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37916__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37916__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if((typeof app.main.data.common.go_to_viewer_37917 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.go_to_viewer_37917 = (function (p__37915,map__37916,options,file_id,page_id,section,frame_id,index,meta37918){
this.p__37915 = p__37915;
this.map__37916 = map__37916;
this.options = options;
this.file_id = file_id;
this.page_id = page_id;
this.section = section;
this.frame_id = frame_id;
this.index = index;
this.meta37918 = meta37918;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.go_to_viewer_37917.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_viewer_37917.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","go-to-viewer","app.main.data.common/go-to-viewer",1637454289);
}));

(app.main.data.common.go_to_viewer_37917.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37919,meta37918__$1){
var self__ = this;
var _37919__$1 = this;
return (new app.main.data.common.go_to_viewer_37917(self__.p__37915,self__.map__37916,self__.options,self__.file_id,self__.page_id,self__.section,self__.frame_id,self__.index,meta37918__$1));
}));

(app.main.data.common.go_to_viewer_37917.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37919){
var self__ = this;
var _37919__$1 = this;
return self__.meta37918;
}));

(app.main.data.common.go_to_viewer_37917.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_viewer_37917.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id__$1 = (function (){var or__5025__auto__ = self__.page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
}
})();
var file_id__$1 = (function (){var or__5025__auto__ = self__.file_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
}
})();
var section__$1 = (function (){var or__5025__auto__ = self__.section;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"interactions","interactions",550841811);
}
})();
var params = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id__$1,new cljs.core.Keyword(null,"section","section",-300141526),section__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),self__.frame_id,new cljs.core.Keyword(null,"index","index",-1531685915),self__.index], null);
var params__$1 = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(params);
var name = ""+"viewer-"+(file_id__$1 ?? "");
var options__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.router","new-window","app.main.router/new-window",1705407424),true,new cljs.core.Keyword("app.main.router","window-name","app.main.router/window-name",321663835),name], null),self__.options], 0));
return beicon.v2.core.of(new cljs.core.Keyword("app.main.data.persistence","force-persist","app.main.data.persistence/force-persist",-1937686199),app.main.router.nav.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"viewer","viewer",-783949853),params__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([options__$1], 0)));
}));
}

return (new app.main.data.common.go_to_viewer_37917(p__37915,map__37916__$1,options,file_id,page_id,section,frame_id,index,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.common.go_to_viewer.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.data.common.go_to_viewer.cljs$lang$applyTo = (function (seq37914){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37914));
}));

app.main.data.common.go_to_dashboard_deleted = (function app$main$data$common$go_to_dashboard_deleted(var_args){
var args__5755__auto__ = [];
var len__5749__auto___38107 = arguments.length;
var i__5750__auto___38108 = (0);
while(true){
if((i__5750__auto___38108 < len__5749__auto___38107)){
args__5755__auto__.push((arguments[i__5750__auto___38108]));

var G__38109 = (i__5750__auto___38108 + (1));
i__5750__auto___38108 = G__38109;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.data.common.go_to_dashboard_deleted.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.data.common.go_to_dashboard_deleted.cljs$core$IFn$_invoke$arity$variadic = (function (p__37925){
var map__37926 = p__37925;
var map__37926__$1 = cljs.core.__destructure_map(map__37926);
var options = map__37926__$1;
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__37926__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
if((typeof app.main.data.common.go_to_dashboard_deleted_37927 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.common.go_to_dashboard_deleted_37927 = (function (p__37925,map__37926,options,team_id,meta37928){
this.p__37925 = p__37925;
this.map__37926 = map__37926;
this.options = options;
this.team_id = team_id;
this.meta37928 = meta37928;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.common.go_to_dashboard_deleted_37927.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_deleted_37927.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.common","go-to-dashboard-deleted","app.main.data.common/go-to-dashboard-deleted",-1309149964);
}));

(app.main.data.common.go_to_dashboard_deleted_37927.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_37929,meta37928__$1){
var self__ = this;
var _37929__$1 = this;
return (new app.main.data.common.go_to_dashboard_deleted_37927(self__.p__37925,self__.map__37926,self__.options,self__.team_id,meta37928__$1));
}));

(app.main.data.common.go_to_dashboard_deleted_37927.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_37929){
var self__ = this;
var _37929__$1 = this;
return self__.meta37928;
}));

(app.main.data.common.go_to_dashboard_deleted_37927.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.common.go_to_dashboard_deleted_37927.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"profile","profile",-545963874));
var team_id__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default","default",-1987822328),self__.team_id))?new cljs.core.Keyword(null,"default-team-id","default-team-id",1198639706).cljs$core$IFn$_invoke$arity$1(profile):((cljs.core.uuid_QMARK_(self__.team_id))?self__.team_id:new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(state)
));
var params = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id__$1], null);
return beicon.v2.core.of(app.main.data.modal.hide(),app.main.router.nav.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"dashboard-deleted","dashboard-deleted",-551384632),params,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.options], 0)));
}));
}

return (new app.main.data.common.go_to_dashboard_deleted_37927(p__37925,map__37926__$1,options,team_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.common.go_to_dashboard_deleted.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.data.common.go_to_dashboard_deleted.cljs$lang$applyTo = (function (seq37923){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq37923));
}));


//# sourceMappingURL=app.main.data.common.js.map
