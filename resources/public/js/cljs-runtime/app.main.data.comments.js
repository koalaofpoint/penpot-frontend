import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.schema.js";
import "./app.common.time.js";
import "./app.common.types.shape_tree.js";
import "./app.common.uuid.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.data.notifications.js";
import "./app.main.data.team.js";
import "./app.main.repo.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.comments');
app.main.data.comments.schema_COLON_comment_thread = new cljs.core.PersistentVector(null, 19, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"CommentThread"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"owner-id","owner-id",-58940392),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"owner-fullname","owner-fullname",882997923),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"owner-email","owner-email",-2131394980),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","email","app.common.schema/email",2070921211)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-name","page-name",974981762),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-name","file-name",-1654217259),new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"seqn","seqn",406413591),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"participants","participants",673603367),new cljs.core.Keyword("app.common.schema","set-of-uuid","app.common.schema/set-of-uuid",-313818768)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("app.common.geom.point","point","app.common.geom.point/point",1811057644)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count-unread-comments","count-unread-comments",1085002472),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"count-comments","count-comments",2017472395),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null)], null);
app.main.data.comments.schema_COLON_comment = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"Comment"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"thread-id","thread-id",895608538),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"owner-id","owner-id",-58940392),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"owner-fullname","owner-fullname",882997923),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"owner-email","owner-email",-2131394980),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","email","app.common.schema/email",2070921211)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"modified-at","modified-at",-932048179),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
app.main.data.comments.check_comment_thread_BANG_ = app.common.schema.check_fn(app.main.data.comments.schema_COLON_comment_thread);
app.main.data.comments.check_comment_BANG_ = app.common.schema.check_fn(app.main.data.comments.schema_COLON_comment);
app.main.data.comments.r_mentions = /@\[([^\]]*)\]\(([^\)]*)\)/;
/**
 * Retrieves the mentions in the content as an array of uuids
 */
app.main.data.comments.extract_mentions = (function app$main$data$comments$extract_mentions(content){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__48243){
var vec__48244 = p__48243;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48244,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48244,(1),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48244,(2),null);
return app.common.uuid.parse(id);
}),cljs.core.re_seq(app.main.data.comments.r_mentions,content));
});
/**
 * Updates the params object with the mentiosn
 */
app.main.data.comments.update_mentions = (function app$main$data$comments$update_mentions(p__48247){
var map__48248 = p__48247;
var map__48248__$1 = cljs.core.__destructure_map(map__48248);
var props = map__48248__$1;
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48248__$1,new cljs.core.Keyword(null,"content","content",15833224));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"mentions","mentions",-1355741087),app.main.data.comments.extract_mentions(content));
});
app.main.data.comments.created_thread_on_workspace = (function app$main$data$comments$created_thread_on_workspace(var_args){
var G__48251 = arguments.length;
switch (G__48251) {
case 1:
return app.main.data.comments.created_thread_on_workspace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.comments.created_thread_on_workspace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.comments.created_thread_on_workspace.cljs$core$IFn$_invoke$arity$1 = (function (params){
return app.main.data.comments.created_thread_on_workspace.cljs$core$IFn$_invoke$arity$2(params,true);
}));

(app.main.data.comments.created_thread_on_workspace.cljs$core$IFn$_invoke$arity$2 = (function (p__48252,open_QMARK_){
var map__48253 = p__48252;
var map__48253__$1 = cljs.core.__destructure_map(map__48253);
var thread = map__48253__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48253__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var comment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48253__$1,new cljs.core.Keyword(null,"comment","comment",532206069));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48253__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
if((typeof app.main.data.comments.created_thread_on_workspace_48254 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.created_thread_on_workspace_48254 = (function (p__48252,open_QMARK_,map__48253,thread,id,comment,page_id,meta48255){
this.p__48252 = p__48252;
this.open_QMARK_ = open_QMARK_;
this.map__48253 = map__48253;
this.thread = thread;
this.id = id;
this.comment = comment;
this.page_id = page_id;
this.meta48255 = meta48255;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.created_thread_on_workspace_48254.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.created_thread_on_workspace_48254.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","created-thread-on-workspace","app.main.data.comments/created-thread-on-workspace",-653179153);
}));

(app.main.data.comments.created_thread_on_workspace_48254.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48256,meta48255__$1){
var self__ = this;
var _48256__$1 = this;
return (new app.main.data.comments.created_thread_on_workspace_48254(self__.p__48252,self__.open_QMARK_,self__.map__48253,self__.thread,self__.id,self__.comment,self__.page_id,meta48255__$1));
}));

(app.main.data.comments.created_thread_on_workspace_48254.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48256){
var self__ = this;
var _48256__$1 = this;
return self__.meta48255;
}));

(app.main.data.comments.created_thread_on_workspace_48254.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.created_thread_on_workspace_48254.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var position = cljs.core.select_keys(self__.thread,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072)], null));
var page_id__$1 = (function (){var or__5025__auto__ = self__.page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
}
})();
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5((function (){var G__48259 = app.main.data.helpers.update_page.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179),cljs.core.assoc,self__.id,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.thread,new cljs.core.Keyword(null,"comment","comment",532206069))),page_id__$1,(function (p1__48249_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(p1__48249_SHARP_,new cljs.core.Keyword(null,"comment-thread-positions","comment-thread-positions",1712485078),cljs.core.assoc,self__.id,position);
}));
if(cljs.core.truth_(self__.open_QMARK_)){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(G__48259,new cljs.core.Keyword(null,"comments-local","comments-local",-777921181),cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),self__.id);
} else {
return G__48259;
}
})(),new cljs.core.Keyword(null,"comments-local","comments-local",-777921181),cljs.core.assoc,new cljs.core.Keyword(null,"options","options",99638489),null),new cljs.core.Keyword(null,"comments-local","comments-local",-777921181),cljs.core.dissoc,new cljs.core.Keyword(null,"draft","draft",1421831058)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments","comments",-293346423),self__.id], null),cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.comment),self__.comment);
}));

(app.main.data.comments.created_thread_on_workspace_48254.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.created_thread_on_workspace_48254.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"create-comment-thread",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace",new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"content-size","content-size",-78683431),cljs.core.count(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(self__.comment))], null)));
}));
}

return (new app.main.data.comments.created_thread_on_workspace_48254(p__48252,open_QMARK_,map__48253__$1,thread,id,comment,page_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.comments.created_thread_on_workspace.cljs$lang$maxFixedArity = 2);

app.main.data.comments.schema_COLON_create_thread_on_workspace = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"created-thread-on-workspace"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("app.common.geom.point","point","app.common.geom.point/point",1811057644)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
app.main.data.comments.create_thread_on_workspace = (function app$main$data$comments$create_thread_on_workspace(var_args){
var G__48268 = arguments.length;
switch (G__48268) {
case 1:
return app.main.data.comments.create_thread_on_workspace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return app.main.data.comments.create_thread_on_workspace.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.comments.create_thread_on_workspace.cljs$core$IFn$_invoke$arity$1 = (function (params){
return app.main.data.comments.create_thread_on_workspace.cljs$core$IFn$_invoke$arity$3(params,cljs.core.identity,true);
}));

(app.main.data.comments.create_thread_on_workspace.cljs$core$IFn$_invoke$arity$3 = (function (params,on_thread_created,open_QMARK_){
app.common.data.macros.runtime_assert("expr assert: (sm/check schema:create-thread-on-workspace params)",(function (){
return app.common.schema.check(app.main.data.comments.schema_COLON_create_thread_on_workspace,params);
}));

if((typeof app.main.data.comments.create_thread_on_workspace_48270 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.create_thread_on_workspace_48270 = (function (params,on_thread_created,open_QMARK_,meta48271){
this.params = params;
this.on_thread_created = on_thread_created;
this.open_QMARK_ = open_QMARK_;
this.meta48271 = meta48271;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.create_thread_on_workspace_48270.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.create_thread_on_workspace_48270.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","create-thread-on-workspace","app.main.data.comments/create-thread-on-workspace",558477768);
}));

(app.main.data.comments.create_thread_on_workspace_48270.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48272,meta48271__$1){
var self__ = this;
var _48272__$1 = this;
return (new app.main.data.comments.create_thread_on_workspace_48270(self__.params,self__.on_thread_created,self__.open_QMARK_,meta48271__$1));
}));

(app.main.data.comments.create_thread_on_workspace_48270.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48272){
var self__ = this;
var _48272__$1 = this;
return self__.meta48271;
}));

(app.main.data.comments.create_thread_on_workspace_48270.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.create_thread_on_workspace_48270.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var frame_id = app.common.types.shape_tree.get_frame_id_by_position.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(self__.params));
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.main.data.comments.update_mentions(self__.params),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id);
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (p__48276){
var map__48277 = p__48276;
var map__48277__$1 = cljs.core.__destructure_map(map__48277);
var cause = map__48277__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48277__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48277__$1,new cljs.core.Keyword(null,"code","code",1586293142));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"restriction","restriction",-1380234912))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.Keyword(null,"max-quote-reached","max-quote-reached",183086757))))){
return beicon.v2.core.throw$(cause);
} else {
return beicon.v2.core.throw$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment-error","comment-error",371413856)], null));
}
}),beicon.v2.core.map((function (p1__48266_SHARP_){
return app.main.data.comments.created_thread_on_workspace.cljs$core$IFn$_invoke$arity$2(p1__48266_SHARP_,self__.open_QMARK_);
}),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(self__.on_thread_created,beicon.v2.core.mapcat((function (p1__48265_SHARP_){
return app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-comment-thread","get-comment-thread",-378373473),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(p1__48265_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__48265_SHARP_)], null));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-comment-thread","create-comment-thread",11123715),params__$1)))));
}));
}

return (new app.main.data.comments.create_thread_on_workspace_48270(params,on_thread_created,open_QMARK_,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.comments.create_thread_on_workspace.cljs$lang$maxFixedArity = 3);

app.main.data.comments.created_thread_on_viewer = (function app$main$data$comments$created_thread_on_viewer(p__48281){
var map__48282 = p__48281;
var map__48282__$1 = cljs.core.__destructure_map(map__48282);
var thread = map__48282__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48282__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var comment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48282__$1,new cljs.core.Keyword(null,"comment","comment",532206069));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48282__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
if((typeof app.main.data.comments.created_thread_on_viewer_48283 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.created_thread_on_viewer_48283 = (function (p__48281,map__48282,thread,id,comment,page_id,meta48284){
this.p__48281 = p__48281;
this.map__48282 = map__48282;
this.thread = thread;
this.id = id;
this.comment = comment;
this.page_id = page_id;
this.meta48284 = meta48284;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.created_thread_on_viewer_48283.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.created_thread_on_viewer_48283.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","created-thread-on-viewer","app.main.data.comments/created-thread-on-viewer",-1700234781);
}));

(app.main.data.comments.created_thread_on_viewer_48283.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48285,meta48284__$1){
var self__ = this;
var _48285__$1 = this;
return (new app.main.data.comments.created_thread_on_viewer_48283(self__.p__48281,self__.map__48282,self__.thread,self__.id,self__.comment,self__.page_id,meta48284__$1));
}));

(app.main.data.comments.created_thread_on_viewer_48283.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48285){
var self__ = this;
var _48285__$1 = this;
return self__.meta48284;
}));

(app.main.data.comments.created_thread_on_viewer_48283.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.created_thread_on_viewer_48283.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var position = cljs.core.select_keys(self__.thread,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072)], null));
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179),cljs.core.assoc,self__.id,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(self__.thread,new cljs.core.Keyword(null,"comment","comment",532206069))),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.Keyword(null,"pages","pages",-285406513),self__.page_id,new cljs.core.Keyword(null,"comment-thread-positions","comment-thread-positions",1712485078)], null),cljs.core.assoc,self__.id,position),new cljs.core.Keyword(null,"comments-local","comments-local",-777921181),cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),self__.id),new cljs.core.Keyword(null,"comments-local","comments-local",-777921181),cljs.core.assoc,new cljs.core.Keyword(null,"options","options",99638489),null),new cljs.core.Keyword(null,"comments-local","comments-local",-777921181),cljs.core.dissoc,new cljs.core.Keyword(null,"draft","draft",1421831058)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments","comments",-293346423),self__.id], null),cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.comment),self__.comment);
}));

(app.main.data.comments.created_thread_on_viewer_48283.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.created_thread_on_viewer_48283.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"create-comment-thread",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"viewer",new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"content-size","content-size",-78683431),cljs.core.count(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(self__.comment))], null)));
}));
}

return (new app.main.data.comments.created_thread_on_viewer_48283(p__48281,map__48282__$1,thread,id,comment,page_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.schema_COLON_create_thread_on_viewer = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"created-thread-on-viewer"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("app.common.geom.point","point","app.common.geom.point/point",1811057644)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null);
app.main.data.comments.create_thread_on_viewer = (function app$main$data$comments$create_thread_on_viewer(params){
app.common.data.macros.runtime_assert("expr assert: (sm/check schema:create-thread-on-viewer params)",(function (){
return app.common.schema.check(app.main.data.comments.schema_COLON_create_thread_on_viewer,params);
}));

if((typeof app.main.data.comments.create_thread_on_viewer_48292 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.create_thread_on_viewer_48292 = (function (params,meta48293){
this.params = params;
this.meta48293 = meta48293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.create_thread_on_viewer_48292.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.create_thread_on_viewer_48292.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","create-thread-on-viewer","app.main.data.comments/create-thread-on-viewer",166744307);
}));

(app.main.data.comments.create_thread_on_viewer_48292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48294,meta48293__$1){
var self__ = this;
var _48294__$1 = this;
return (new app.main.data.comments.create_thread_on_viewer_48292(self__.params,meta48293__$1));
}));

(app.main.data.comments.create_thread_on_viewer_48292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48294){
var self__ = this;
var _48294__$1 = this;
return self__.meta48293;
}));

(app.main.data.comments.create_thread_on_viewer_48292.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.create_thread_on_viewer_48292.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var share_id = new cljs.core.Keyword(null,"share-id","share-id",795821204).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498).cljs$core$IFn$_invoke$arity$1(state));
var frame_id = new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(self__.params);
var params__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(app.main.data.comments.update_mentions(self__.params),new cljs.core.Keyword(null,"share-id","share-id",795821204),share_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id], 0));
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (p__48298){
var map__48299 = p__48298;
var map__48299__$1 = cljs.core.__destructure_map(map__48299);
var cause = map__48299__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48299__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48299__$1,new cljs.core.Keyword(null,"code","code",1586293142));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"restriction","restriction",-1380234912))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.Keyword(null,"max-quote-reached","max-quote-reached",183086757))))){
return beicon.v2.core.throw$(cause);
} else {
return beicon.v2.core.throw$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment-error","comment-error",371413856)], null));
}
}),beicon.v2.core.map(app.main.data.comments.created_thread_on_viewer,beicon.v2.core.mapcat((function (p1__48290_SHARP_){
return app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-comment-thread","get-comment-thread",-378373473),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(p1__48290_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__48290_SHARP_),new cljs.core.Keyword(null,"share-id","share-id",795821204),share_id], null));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-comment-thread","create-comment-thread",11123715),params__$1))));
}));
}

return (new app.main.data.comments.create_thread_on_viewer_48292(params,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.update_comment_thread_status = (function app$main$data$comments$update_comment_thread_status(thread_id){
if((typeof app.main.data.comments.update_comment_thread_status_48301 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.update_comment_thread_status_48301 = (function (thread_id,meta48302){
this.thread_id = thread_id;
this.meta48302 = meta48302;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.update_comment_thread_status_48301.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.update_comment_thread_status_48301.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","update-comment-thread-status","app.main.data.comments/update-comment-thread-status",1362543344);
}));

(app.main.data.comments.update_comment_thread_status_48301.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48303,meta48302__$1){
var self__ = this;
var _48303__$1 = this;
return (new app.main.data.comments.update_comment_thread_status_48301(self__.thread_id,meta48302__$1));
}));

(app.main.data.comments.update_comment_thread_status_48301.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48303){
var self__ = this;
var _48303__$1 = this;
return self__.meta48302;
}));

(app.main.data.comments.update_comment_thread_status_48301.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.update_comment_thread_status_48301.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var done = (function (p1__48300_SHARP_){
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(p1__48300_SHARP_,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179),self__.thread_id], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"count-unread-comments","count-unread-comments",1085002472),(0)], 0));
});
var share_id = new cljs.core.Keyword(null,"share-id","share-id",795821204).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498).cljs$core$IFn$_invoke$arity$1(state));
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){
return beicon.v2.core.throw$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment-error","comment-error",371413856)], null));
}),beicon.v2.core.map(cljs.core.constantly(done),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-comment-thread-status","update-comment-thread-status",1793106048),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.thread_id,new cljs.core.Keyword(null,"share-id","share-id",795821204),share_id], null))));
}));
}

return (new app.main.data.comments.update_comment_thread_status_48301(thread_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.update_comment_thread = (function app$main$data$comments$update_comment_thread(p__48305){
var map__48306 = p__48305;
var map__48306__$1 = cljs.core.__destructure_map(map__48306);
var thread = map__48306__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48306__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var is_resolved = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48306__$1,new cljs.core.Keyword(null,"is-resolved","is-resolved",403882551));
app.common.data.macros.runtime_assert("expected valid comment thread",(function (){
return app.main.data.comments.check_comment_thread_BANG_(thread);
}));

if((typeof app.main.data.comments.update_comment_thread_48307 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IDeref}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.update_comment_thread_48307 = (function (p__48305,map__48306,thread,id,is_resolved,meta48308){
this.p__48305 = p__48305;
this.map__48306 = map__48306;
this.thread = thread;
this.id = id;
this.is_resolved = is_resolved;
this.meta48308 = meta48308;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.update_comment_thread_48307.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.update_comment_thread_48307.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","update-comment-thread","app.main.data.comments/update-comment-thread",-2103195254);
}));

(app.main.data.comments.update_comment_thread_48307.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48309,meta48308__$1){
var self__ = this;
var _48309__$1 = this;
return (new app.main.data.comments.update_comment_thread_48307(self__.p__48305,self__.map__48306,self__.thread,self__.id,self__.is_resolved,meta48308__$1));
}));

(app.main.data.comments.update_comment_thread_48307.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48309){
var self__ = this;
var _48309__$1 = this;
return self__.meta48308;
}));

(app.main.data.comments.update_comment_thread_48307.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"is-resolved","is-resolved",403882551),self__.is_resolved], null);
}));

(app.main.data.comments.update_comment_thread_48307.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.update_comment_thread_48307.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179),self__.id], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"is-resolved","is-resolved",403882551),self__.is_resolved], 0));
}));

(app.main.data.comments.update_comment_thread_48307.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.update_comment_thread_48307.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var share_id = new cljs.core.Keyword(null,"share-id","share-id",795821204).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498).cljs$core$IFn$_invoke$arity$1(state));
return beicon.v2.core.concat((cljs.core.truth_(self__.is_resolved)?beicon.v2.core.of(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"resolve-comment-thread",new cljs.core.Keyword(null,"thread-id","thread-id",895608538),self__.id], null))):null),beicon.v2.core.ignore(beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (p__48310){
var map__48311 = p__48310;
var map__48311__$1 = cljs.core.__destructure_map(map__48311);
var cause = map__48311__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48311__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48311__$1,new cljs.core.Keyword(null,"code","code",1586293142));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"restriction","restriction",-1380234912))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.Keyword(null,"max-quote-reached","max-quote-reached",183086757))))){
return beicon.v2.core.throw$(cause);
} else {
return beicon.v2.core.throw$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment-error","comment-error",371413856)], null));
}
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-comment-thread","update-comment-thread",-1577949030),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"is-resolved","is-resolved",403882551),self__.is_resolved,new cljs.core.Keyword(null,"share-id","share-id",795821204),share_id], null)))));
}));
}

return (new app.main.data.comments.update_comment_thread_48307(p__48305,map__48306__$1,thread,id,is_resolved,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.add_comment = (function app$main$data$comments$add_comment(thread,content){
app.common.data.macros.runtime_assert("expected valid comment thread",(function (){
return app.main.data.comments.check_comment_thread_BANG_(thread);
}));

app.common.data.macros.runtime_assert("expected valid content",(function (){
return typeof content === 'string';
}));

if((typeof app.main.data.comments.create_comment_48312 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.create_comment_48312 = (function (thread,content,meta48313){
this.thread = thread;
this.content = content;
this.meta48313 = meta48313;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.create_comment_48312.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.create_comment_48312.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","create-comment","app.main.data.comments/create-comment",-1445923829);
}));

(app.main.data.comments.create_comment_48312.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48314,meta48313__$1){
var self__ = this;
var _48314__$1 = this;
return (new app.main.data.comments.create_comment_48312(self__.thread,self__.content,meta48313__$1));
}));

(app.main.data.comments.create_comment_48312.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48314){
var self__ = this;
var _48314__$1 = this;
return self__.meta48313;
}));

(app.main.data.comments.create_comment_48312.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.create_comment_48312.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"thread-id","thread-id",895608538),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.thread),new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(self__.thread),new cljs.core.Keyword(null,"content-size","content-size",-78683431),cljs.core.count(self__.content)], null);
}));

(app.main.data.comments.create_comment_48312.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.create_comment_48312.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var share_id = new cljs.core.Keyword(null,"share-id","share-id",795821204).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498).cljs$core$IFn$_invoke$arity$1(state));
var created = (function (comment,state__$1){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(state__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments","comments",-293346423),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.thread)], null),cljs.core.assoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(comment),comment);
});
var params = app.main.data.comments.update_mentions(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"thread-id","thread-id",895608538),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.thread),new cljs.core.Keyword(null,"content","content",15833224),self__.content,new cljs.core.Keyword(null,"share-id","share-id",795821204),share_id], null));
return beicon.v2.core.concat(beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (p__48318){
var map__48319 = p__48318;
var map__48319__$1 = cljs.core.__destructure_map(map__48319);
var cause = map__48319__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48319__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48319__$1,new cljs.core.Keyword(null,"code","code",1586293142));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"restriction","restriction",-1380234912))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.Keyword(null,"max-quote-reached","max-quote-reached",183086757))))){
return beicon.v2.core.throw$(cause);
} else {
return beicon.v2.core.throw$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment-error","comment-error",371413856)], null));
}
}),beicon.v2.core.map((function (comment){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(created,comment);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-comment","create-comment",1276859739),params))),beicon.v2.core.of((app.main.data.comments.refresh_comment_thread.cljs$core$IFn$_invoke$arity$1 ? app.main.data.comments.refresh_comment_thread.cljs$core$IFn$_invoke$arity$1(self__.thread) : app.main.data.comments.refresh_comment_thread.call(null,self__.thread))));
}));
}

return (new app.main.data.comments.create_comment_48312(thread,content,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.update_comment = (function app$main$data$comments$update_comment(p__48320){
var map__48321 = p__48320;
var map__48321__$1 = cljs.core.__destructure_map(map__48321);
var comment = map__48321__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48321__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var content = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48321__$1,new cljs.core.Keyword(null,"content","content",15833224));
var thread_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48321__$1,new cljs.core.Keyword(null,"thread-id","thread-id",895608538));
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48321__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
app.common.data.macros.runtime_assert("expected valid comment",(function (){
return app.main.data.comments.check_comment_BANG_(comment);
}));

if((typeof app.main.data.comments.update_comment_48322 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.update_comment_48322 = (function (p__48320,map__48321,comment,id,content,thread_id,file_id,meta48323){
this.p__48320 = p__48320;
this.map__48321 = map__48321;
this.comment = comment;
this.id = id;
this.content = content;
this.thread_id = thread_id;
this.file_id = file_id;
this.meta48323 = meta48323;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.update_comment_48322.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.update_comment_48322.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","update-comment","app.main.data.comments/update-comment",-1864826865);
}));

(app.main.data.comments.update_comment_48322.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48324,meta48323__$1){
var self__ = this;
var _48324__$1 = this;
return (new app.main.data.comments.update_comment_48322(self__.p__48320,self__.map__48321,self__.comment,self__.id,self__.content,self__.thread_id,self__.file_id,meta48323__$1));
}));

(app.main.data.comments.update_comment_48322.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48324){
var self__ = this;
var _48324__$1 = this;
return self__.meta48323;
}));

(app.main.data.comments.update_comment_48322.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.update_comment_48322.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"thread-id","thread-id",895608538),self__.thread_id,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"content-size","content-size",-78683431),cljs.core.count(self__.content)], null);
}));

(app.main.data.comments.update_comment_48322.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.update_comment_48322.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments","comments",-293346423),self__.thread_id,self__.id], null),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224),self__.content], 0));
}));

(app.main.data.comments.update_comment_48322.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.update_comment_48322.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var share_id = new cljs.core.Keyword(null,"share-id","share-id",795821204).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498).cljs$core$IFn$_invoke$arity$1(state));
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"content","content",15833224),self__.content,new cljs.core.Keyword(null,"share-id","share-id",795821204),share_id], null);
var params__$1 = app.main.data.comments.update_mentions(params);
return beicon.v2.core.map((function (){
return (app.main.data.comments.retrieve_comment_threads.cljs$core$IFn$_invoke$arity$1 ? app.main.data.comments.retrieve_comment_threads.cljs$core$IFn$_invoke$arity$1(self__.file_id) : app.main.data.comments.retrieve_comment_threads.call(null,self__.file_id));
}),beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){
return beicon.v2.core.throw$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment-error","comment-error",371413856)], null));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-comment","update-comment",-1347462369),params__$1)));
}));
}

return (new app.main.data.comments.update_comment_48322(p__48320,map__48321__$1,comment,id,content,thread_id,file_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.delete_comment_thread_on_workspace = (function app$main$data$comments$delete_comment_thread_on_workspace(var_args){
var G__48347 = arguments.length;
switch (G__48347) {
case 1:
return app.main.data.comments.delete_comment_thread_on_workspace.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.comments.delete_comment_thread_on_workspace.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.comments.delete_comment_thread_on_workspace.cljs$core$IFn$_invoke$arity$1 = (function (params){
return app.main.data.comments.delete_comment_thread_on_workspace.cljs$core$IFn$_invoke$arity$2(params,cljs.core.identity);
}));

(app.main.data.comments.delete_comment_thread_on_workspace.cljs$core$IFn$_invoke$arity$2 = (function (p__48349,on_delete){
var map__48350 = p__48349;
var map__48350__$1 = cljs.core.__destructure_map(map__48350);
var thread = map__48350__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48350__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
app.common.data.macros.runtime_assert("expr assert: (uuid? id)",(function (){
return cljs.core.uuid_QMARK_(id);
}));

if((typeof app.main.data.comments.delete_comment_thread_on_workspace_48351 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.delete_comment_thread_on_workspace_48351 = (function (p__48349,on_delete,map__48350,thread,id,meta48352){
this.p__48349 = p__48349;
this.on_delete = on_delete;
this.map__48350 = map__48350;
this.thread = thread;
this.id = id;
this.meta48352 = meta48352;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.delete_comment_thread_on_workspace_48351.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.delete_comment_thread_on_workspace_48351.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","delete-comment-thread-on-workspace","app.main.data.comments/delete-comment-thread-on-workspace",862132009);
}));

(app.main.data.comments.delete_comment_thread_on_workspace_48351.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48353,meta48352__$1){
var self__ = this;
var _48353__$1 = this;
return (new app.main.data.comments.delete_comment_thread_on_workspace_48351(self__.p__48349,self__.on_delete,self__.map__48350,self__.thread,self__.id,meta48352__$1));
}));

(app.main.data.comments.delete_comment_thread_on_workspace_48351.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48353){
var self__ = this;
var _48353__$1 = this;
return self__.meta48352;
}));

(app.main.data.comments.delete_comment_thread_on_workspace_48351.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.delete_comment_thread_on_workspace_48351.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(app.main.data.helpers.update_page.cljs$core$IFn$_invoke$arity$2(state,(function (p1__48332_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__48332_SHARP_,new cljs.core.Keyword(null,"comment-thread-positions","comment-thread-positions",1712485078),cljs.core.dissoc,self__.id);
})),new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.dissoc,self__.id),new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179),cljs.core.dissoc,self__.id);
}));

(app.main.data.comments.delete_comment_thread_on_workspace_48351.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.delete_comment_thread_on_workspace_48351.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return beicon.v2.core.concat(beicon.v2.core.ignore(beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2(self__.on_delete,beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){
return beicon.v2.core.throw$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment-error","comment-error",371413856)], null));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-comment-thread","delete-comment-thread",-1495575933),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null))))),beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"delete-comment-thread",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace",new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null))));
}));
}

return (new app.main.data.comments.delete_comment_thread_on_workspace_48351(p__48349,on_delete,map__48350__$1,thread,id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.comments.delete_comment_thread_on_workspace.cljs$lang$maxFixedArity = 2);

app.main.data.comments.delete_comment_thread_on_viewer = (function app$main$data$comments$delete_comment_thread_on_viewer(p__48367){
var map__48368 = p__48367;
var map__48368__$1 = cljs.core.__destructure_map(map__48368);
var thread = map__48368__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48368__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
app.common.data.macros.runtime_assert("expected valid comment thread",(function (){
return app.main.data.comments.check_comment_thread_BANG_(thread);
}));

if((typeof app.main.data.comments.delete_comment_thread_on_viewer_48369 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.delete_comment_thread_on_viewer_48369 = (function (p__48367,map__48368,thread,id,meta48370){
this.p__48367 = p__48367;
this.map__48368 = map__48368;
this.thread = thread;
this.id = id;
this.meta48370 = meta48370;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.delete_comment_thread_on_viewer_48369.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.delete_comment_thread_on_viewer_48369.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","delete-comment-thread-on-viewer","app.main.data.comments/delete-comment-thread-on-viewer",-2140755261);
}));

(app.main.data.comments.delete_comment_thread_on_viewer_48369.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48371,meta48370__$1){
var self__ = this;
var _48371__$1 = this;
return (new app.main.data.comments.delete_comment_thread_on_viewer_48369(self__.p__48367,self__.map__48368,self__.thread,self__.id,meta48370__$1));
}));

(app.main.data.comments.delete_comment_thread_on_viewer_48369.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48371){
var self__ = this;
var _48371__$1 = this;
return self__.meta48370;
}));

(app.main.data.comments.delete_comment_thread_on_viewer_48369.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.delete_comment_thread_on_viewer_48369.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"viewer","viewer",-783949853),new cljs.core.Keyword(null,"pages","pages",-285406513),page_id,new cljs.core.Keyword(null,"comment-thread-positions","comment-thread-positions",1712485078)], null),cljs.core.dissoc,self__.id),new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.dissoc,self__.id),new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179),cljs.core.dissoc,self__.id);
}));

(app.main.data.comments.delete_comment_thread_on_viewer_48369.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.delete_comment_thread_on_viewer_48369.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var share_id = new cljs.core.Keyword(null,"share-id","share-id",795821204).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498).cljs$core$IFn$_invoke$arity$1(state));
return beicon.v2.core.concat(beicon.v2.core.ignore(beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){
return beicon.v2.core.throw$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment-error","comment-error",371413856)], null));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-comment-thread","delete-comment-thread",-1495575933),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"share-id","share-id",795821204),share_id], null)))),beicon.v2.core.of(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"delete-comment-thread",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"viewer",new cljs.core.Keyword(null,"id","id",-1388402092),self__.id], null))));
}));
}

return (new app.main.data.comments.delete_comment_thread_on_viewer_48369(p__48367,map__48368__$1,thread,id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.delete_comment = (function app$main$data$comments$delete_comment(p__48372){
var map__48373 = p__48372;
var map__48373__$1 = cljs.core.__destructure_map(map__48373);
var comment = map__48373__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48373__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var thread_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48373__$1,new cljs.core.Keyword(null,"thread-id","thread-id",895608538));
app.common.data.macros.runtime_assert("expected valid comment",(function (){
return app.main.data.comments.check_comment_BANG_(comment);
}));

if((typeof app.main.data.comments.delete_comment_48374 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.delete_comment_48374 = (function (p__48372,map__48373,comment,id,thread_id,meta48375){
this.p__48372 = p__48372;
this.map__48373 = map__48373;
this.comment = comment;
this.id = id;
this.thread_id = thread_id;
this.meta48375 = meta48375;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.delete_comment_48374.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.delete_comment_48374.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","delete-comment","app.main.data.comments/delete-comment",-938163211);
}));

(app.main.data.comments.delete_comment_48374.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48376,meta48375__$1){
var self__ = this;
var _48376__$1 = this;
return (new app.main.data.comments.delete_comment_48374(self__.p__48372,self__.map__48373,self__.comment,self__.id,self__.thread_id,meta48375__$1));
}));

(app.main.data.comments.delete_comment_48374.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48376){
var self__ = this;
var _48376__$1 = this;
return self__.meta48375;
}));

(app.main.data.comments.delete_comment_48374.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.delete_comment_48374.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thread-id","thread-id",895608538),self__.thread_id], null);
}));

(app.main.data.comments.delete_comment_48374.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.delete_comment_48374.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.update_in_when(app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments","comments",-293346423),self__.thread_id], null),cljs.core.dissoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.id], 0)),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179),self__.thread_id,new cljs.core.Keyword(null,"count-comments","count-comments",2017472395)], null),cljs.core.dec);
}));

(app.main.data.comments.delete_comment_48374.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.delete_comment_48374.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var share_id = new cljs.core.Keyword(null,"share-id","share-id",795821204).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498).cljs$core$IFn$_invoke$arity$1(state));
return beicon.v2.core.ignore(beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){
return beicon.v2.core.throw$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment-error","comment-error",371413856)], null));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-comment","delete-comment",701145765),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"share-id","share-id",795821204),share_id], null))));
}));
}

return (new app.main.data.comments.delete_comment_48374(p__48372,map__48373__$1,comment,id,thread_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.refresh_comment_thread = (function app$main$data$comments$refresh_comment_thread(p__48379){
var map__48380 = p__48379;
var map__48380__$1 = cljs.core.__destructure_map(map__48380);
var thread = map__48380__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48380__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48380__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
app.common.data.macros.runtime_assert("expected valid comment thread",(function (){
return app.main.data.comments.check_comment_thread_BANG_(thread);
}));

var fetched = (function app$main$data$comments$refresh_comment_thread_$_fetched(thread__$1,state){
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179),id], null),thread__$1);
});
if((typeof app.main.data.comments.refresh_comment_thread_48381 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.refresh_comment_thread_48381 = (function (p__48379,map__48380,thread,id,file_id,fetched,meta48382){
this.p__48379 = p__48379;
this.map__48380 = map__48380;
this.thread = thread;
this.id = id;
this.file_id = file_id;
this.fetched = fetched;
this.meta48382 = meta48382;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.refresh_comment_thread_48381.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.refresh_comment_thread_48381.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","refresh-comment-thread","app.main.data.comments/refresh-comment-thread",1417625688);
}));

(app.main.data.comments.refresh_comment_thread_48381.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48383,meta48382__$1){
var self__ = this;
var _48383__$1 = this;
return (new app.main.data.comments.refresh_comment_thread_48381(self__.p__48379,self__.map__48380,self__.thread,self__.id,self__.file_id,self__.fetched,meta48382__$1));
}));

(app.main.data.comments.refresh_comment_thread_48381.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48383){
var self__ = this;
var _48383__$1 = this;
return self__.meta48382;
}));

(app.main.data.comments.refresh_comment_thread_48381.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.refresh_comment_thread_48381.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var share_id = new cljs.core.Keyword(null,"share-id","share-id",795821204).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498).cljs$core$IFn$_invoke$arity$1(state));
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){
return beicon.v2.core.throw$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment-error","comment-error",371413856)], null));
}),beicon.v2.core.map((function (p1__48378_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.fetched,p1__48378_SHARP_);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-comment-thread","get-comment-thread",-378373473),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"id","id",-1388402092),self__.id,new cljs.core.Keyword(null,"share-id","share-id",795821204),share_id], null))));
}));
}

return (new app.main.data.comments.refresh_comment_thread_48381(p__48379,map__48380__$1,thread,id,file_id,fetched,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.comment_threads_fetched = (function app$main$data$comments$comment_threads_fetched(threads){
if((typeof app.main.data.comments.comment_threads_fetched_48385 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.comment_threads_fetched_48385 = (function (threads,meta48386){
this.threads = threads;
this.meta48386 = meta48386;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.comment_threads_fetched_48385.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.comment_threads_fetched_48385.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","comment-threads-fetched","app.main.data.comments/comment-threads-fetched",-1874255683);
}));

(app.main.data.comments.comment_threads_fetched_48385.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48387,meta48386__$1){
var self__ = this;
var _48387__$1 = this;
return (new app.main.data.comments.comment_threads_fetched_48385(self__.threads,meta48386__$1));
}));

(app.main.data.comments.comment_threads_fetched_48385.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48387){
var self__ = this;
var _48387__$1 = this;
return self__.meta48386;
}));

(app.main.data.comments.comment_threads_fetched_48385.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.comment_threads_fetched_48385.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (state__$1,p__48388){
var map__48389 = p__48388;
var map__48389__$1 = cljs.core.__destructure_map(map__48389);
var thread = map__48389__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48389__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48389__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48389__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
return app.main.data.helpers.update_page.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state__$1,new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179),cljs.core.assoc,id,thread),file_id,page_id,(function (page){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(page,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comment-thread-positions","comment-thread-positions",1712485078),id], null),(function (state__$2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__$2,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(thread)),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(thread));
}));
}));
}),state,self__.threads);
}));
}

return (new app.main.data.comments.comment_threads_fetched_48385(threads,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.retrieve_comment_threads = (function app$main$data$comments$retrieve_comment_threads(file_id){
if((typeof app.main.data.comments.retrieve_comment_threads_48390 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.retrieve_comment_threads_48390 = (function (file_id,meta48391){
this.file_id = file_id;
this.meta48391 = meta48391;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.retrieve_comment_threads_48390.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.retrieve_comment_threads_48390.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","retrieve-comment-threads","app.main.data.comments/retrieve-comment-threads",-1073541648);
}));

(app.main.data.comments.retrieve_comment_threads_48390.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48392,meta48391__$1){
var self__ = this;
var _48392__$1 = this;
return (new app.main.data.comments.retrieve_comment_threads_48390(self__.file_id,meta48391__$1));
}));

(app.main.data.comments.retrieve_comment_threads_48390.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48392){
var self__ = this;
var _48392__$1 = this;
return self__.meta48391;
}));

(app.main.data.comments.retrieve_comment_threads_48390.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.retrieve_comment_threads_48390.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179));
}));

(app.main.data.comments.retrieve_comment_threads_48390.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.retrieve_comment_threads_48390.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var share_id = new cljs.core.Keyword(null,"share-id","share-id",795821204).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498).cljs$core$IFn$_invoke$arity$1(state));
return beicon.v2.core.merge(beicon.v2.core.map(app.main.data.comments.comment_threads_fetched,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-comment-threads","get-comment-threads",-138542175),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"share-id","share-id",795821204),share_id], null))),(cljs.core.truth_(new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699).cljs$core$IFn$_invoke$arity$1(state))?beicon.v2.core.of(app.main.data.team.fetch_members.cljs$core$IFn$_invoke$arity$0()):null));
}));
}

return (new app.main.data.comments.retrieve_comment_threads_48390(file_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.retrieve_comments = (function app$main$data$comments$retrieve_comments(thread_id){
app.common.data.macros.runtime_assert("expr assert: (uuid? thread-id)",(function (){
return cljs.core.uuid_QMARK_(thread_id);
}));

var fetched = (function app$main$data$comments$retrieve_comments_$_fetched(comments,state){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"comments","comments",-293346423),cljs.core.assoc,thread_id,app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),comments));
});
if((typeof app.main.data.comments.retrieve_comments_48394 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.retrieve_comments_48394 = (function (thread_id,fetched,meta48395){
this.thread_id = thread_id;
this.fetched = fetched;
this.meta48395 = meta48395;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.retrieve_comments_48394.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.retrieve_comments_48394.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","retrieve-comments","app.main.data.comments/retrieve-comments",-591535096);
}));

(app.main.data.comments.retrieve_comments_48394.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48396,meta48395__$1){
var self__ = this;
var _48396__$1 = this;
return (new app.main.data.comments.retrieve_comments_48394(self__.thread_id,self__.fetched,meta48395__$1));
}));

(app.main.data.comments.retrieve_comments_48394.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48396){
var self__ = this;
var _48396__$1 = this;
return self__.meta48395;
}));

(app.main.data.comments.retrieve_comments_48394.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.retrieve_comments_48394.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var share_id = new cljs.core.Keyword(null,"share-id","share-id",795821204).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498).cljs$core$IFn$_invoke$arity$1(state));
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){
return beicon.v2.core.throw$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment-error","comment-error",371413856)], null));
}),beicon.v2.core.map((function (p1__48393_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(self__.fetched,p1__48393_SHARP_);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-comments","get-comments",1914340167),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"thread-id","thread-id",895608538),self__.thread_id,new cljs.core.Keyword(null,"share-id","share-id",795821204),share_id], null))));
}));
}

return (new app.main.data.comments.retrieve_comments_48394(thread_id,fetched,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * A event used mainly in dashboard for retrieve all unread threads of a team.
 */
app.main.data.comments.retrieve_unread_comment_threads = (function app$main$data$comments$retrieve_unread_comment_threads(team_id){
app.common.data.macros.runtime_assert("expr assert: (uuid? team-id)",(function (){
return cljs.core.uuid_QMARK_(team_id);
}));

if((typeof app.main.data.comments.retrieve_unread_comment_threads_48405 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.retrieve_unread_comment_threads_48405 = (function (team_id,meta48406){
this.team_id = team_id;
this.meta48406 = meta48406;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.retrieve_unread_comment_threads_48405.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.retrieve_unread_comment_threads_48405.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","retrieve-unread-comment-threads","app.main.data.comments/retrieve-unread-comment-threads",-1975176127);
}));

(app.main.data.comments.retrieve_unread_comment_threads_48405.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48407,meta48406__$1){
var self__ = this;
var _48407__$1 = this;
return (new app.main.data.comments.retrieve_unread_comment_threads_48405(self__.team_id,meta48406__$1));
}));

(app.main.data.comments.retrieve_unread_comment_threads_48405.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48407){
var self__ = this;
var _48407__$1 = this;
return self__.meta48406;
}));

(app.main.data.comments.retrieve_unread_comment_threads_48405.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.retrieve_unread_comment_threads_48405.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var fetched_comments = (function (p1__48398_SHARP_,p2__48397_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__48397_SHARP_,new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179),app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),p1__48398_SHARP_));
});
var fetched_users = (function (p1__48400_SHARP_,p2__48399_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__48399_SHARP_,new cljs.core.Keyword(null,"current-team-comments-users","current-team-comments-users",430050833),p1__48400_SHARP_);
});
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){
return beicon.v2.core.throw$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment-error","comment-error",371413856)], null));
}),beicon.v2.core.merge_map((function (comments){
return beicon.v2.core.concat(beicon.v2.core.of(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fetched_comments,comments)),beicon.v2.core.map((function (p1__48404_SHARP_){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(fetched_users,p1__48404_SHARP_);
}),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3((function (p1__48402_SHARP_,p2__48403_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__48402_SHARP_,app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),p2__48403_SHARP_)], 0));
}),cljs.core.PersistentArrayMap.EMPTY,beicon.v2.core.merge_map((function (p1__48401_SHARP_){
return app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-profiles-for-file-comments","get-profiles-for-file-comments",-903478036),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),p1__48401_SHARP_], null));
}),beicon.v2.core.from(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"file-id","file-id",-811871323)),comments))))));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-unread-comment-threads","get-unread-comment-threads",1878932620),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),self__.team_id], null))));
}));
}

return (new app.main.data.comments.retrieve_unread_comment_threads_48405(team_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Mark all threads as read
 */
app.main.data.comments.mark_all_threads_as_read = (function app$main$data$comments$mark_all_threads_as_read(team_id){
if((typeof app.main.data.comments.mark_all_threads_as_read_48408 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.mark_all_threads_as_read_48408 = (function (team_id,meta48409){
this.team_id = team_id;
this.meta48409 = meta48409;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.mark_all_threads_as_read_48408.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.mark_all_threads_as_read_48408.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","mark-all-threads-as-read","app.main.data.comments/mark-all-threads-as-read",1535803927);
}));

(app.main.data.comments.mark_all_threads_as_read_48408.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48410,meta48409__$1){
var self__ = this;
var _48410__$1 = this;
return (new app.main.data.comments.mark_all_threads_as_read_48408(self__.team_id,meta48409__$1));
}));

(app.main.data.comments.mark_all_threads_as_read_48408.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48410){
var self__ = this;
var _48410__$1 = this;
return self__.meta48409;
}));

(app.main.data.comments.mark_all_threads_as_read_48408.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.mark_all_threads_as_read_48408.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.PersistentArrayMap.EMPTY;
}));

(app.main.data.comments.mark_all_threads_as_read_48408.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.mark_all_threads_as_read_48408.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var threads = cljs.core.vals(new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179).cljs$core$IFn$_invoke$arity$1(state));
return beicon.v2.core.concat(beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){
return beicon.v2.core.throw$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment-error","comment-error",371413856)], null));
}),beicon.v2.core.map((function (){
return app.main.data.comments.retrieve_unread_comment_threads(self__.team_id);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mark-all-threads-as-read","mark-all-threads-as-read",-1110285497),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"threads","threads",-1717798734),cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),threads)], null)))),beicon.v2.core.of(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.mark-all-as-read.success"),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(7000)], null))));
}));
}

return (new app.main.data.comments.mark_all_threads_as_read_48408(team_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.open_thread = (function app$main$data$comments$open_thread(p__48411){
var map__48412 = p__48411;
var map__48412__$1 = cljs.core.__destructure_map(map__48412);
var thread = map__48412__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48412__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
app.common.data.macros.runtime_assert("expected valid comment thread",(function (){
return app.main.data.comments.check_comment_thread_BANG_(thread);
}));

if((typeof app.main.data.comments.open_comment_thread_48413 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {app.main.data.event.Event}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.open_comment_thread_48413 = (function (p__48411,map__48412,thread,id,meta48414){
this.p__48411 = p__48411;
this.map__48412 = map__48412;
this.thread = thread;
this.id = id;
this.meta48414 = meta48414;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.open_comment_thread_48413.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.open_comment_thread_48413.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","open-comment-thread","app.main.data.comments/open-comment-thread",1097012576);
}));

(app.main.data.comments.open_comment_thread_48413.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48415,meta48414__$1){
var self__ = this;
var _48415__$1 = this;
return (new app.main.data.comments.open_comment_thread_48413(self__.p__48411,self__.map__48412,self__.thread,self__.id,meta48414__$1));
}));

(app.main.data.comments.open_comment_thread_48413.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48415){
var self__ = this;
var _48415__$1 = this;
return self__.meta48414;
}));

(app.main.data.comments.open_comment_thread_48413.prototype.app$main$data$event$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.open_comment_thread_48413.prototype.app$main$data$event$Event$_data$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"thread-id","thread-id",895608538),self__.id], null);
}));

(app.main.data.comments.open_comment_thread_48413.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.open_comment_thread_48413.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$5(cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"comments-local","comments-local",-777921181),cljs.core.assoc,new cljs.core.Keyword(null,"open","open",-1763596448),self__.id),new cljs.core.Keyword(null,"comments-local","comments-local",-777921181),cljs.core.assoc,new cljs.core.Keyword(null,"options","options",99638489),null),new cljs.core.Keyword(null,"comments-local","comments-local",-777921181),cljs.core.dissoc,new cljs.core.Keyword(null,"draft","draft",1421831058));
}));
}

return (new app.main.data.comments.open_comment_thread_48413(p__48411,map__48412__$1,thread,id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.close_thread = (function app$main$data$comments$close_thread(){
if((typeof app.main.data.comments.close_comment_thread_48416 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.close_comment_thread_48416 = (function (meta48417){
this.meta48417 = meta48417;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.close_comment_thread_48416.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.close_comment_thread_48416.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","close-comment-thread","app.main.data.comments/close-comment-thread",509630048);
}));

(app.main.data.comments.close_comment_thread_48416.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48418,meta48417__$1){
var self__ = this;
var _48418__$1 = this;
return (new app.main.data.comments.close_comment_thread_48416(meta48417__$1));
}));

(app.main.data.comments.close_comment_thread_48416.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48418){
var self__ = this;
var _48418__$1 = this;
return self__.meta48417;
}));

(app.main.data.comments.close_comment_thread_48416.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.close_comment_thread_48416.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$6(state,new cljs.core.Keyword(null,"comments-local","comments-local",-777921181),cljs.core.dissoc,new cljs.core.Keyword(null,"open","open",-1763596448),new cljs.core.Keyword(null,"draft","draft",1421831058),new cljs.core.Keyword(null,"options","options",99638489));
}));
}

return (new app.main.data.comments.close_comment_thread_48416(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.update_filters = (function app$main$data$comments$update_filters(p__48419){
var map__48420 = p__48419;
var map__48420__$1 = cljs.core.__destructure_map(map__48420);
var params = map__48420__$1;
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48420__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48420__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var list = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48420__$1,new cljs.core.Keyword(null,"list","list",765357683));
if((typeof app.main.data.comments.update_filters_48421 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.update_filters_48421 = (function (p__48419,map__48420,params,mode,show,list,meta48422){
this.p__48419 = p__48419;
this.map__48420 = map__48420;
this.params = params;
this.mode = mode;
this.show = show;
this.list = list;
this.meta48422 = meta48422;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.update_filters_48421.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.update_filters_48421.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","update-filters","app.main.data.comments/update-filters",-380440015);
}));

(app.main.data.comments.update_filters_48421.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48423,meta48422__$1){
var self__ = this;
var _48423__$1 = this;
return (new app.main.data.comments.update_filters_48421(self__.p__48419,self__.map__48420,self__.params,self__.mode,self__.show,self__.list,meta48422__$1));
}));

(app.main.data.comments.update_filters_48421.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48423){
var self__ = this;
var _48423__$1 = this;
return self__.meta48422;
}));

(app.main.data.comments.update_filters_48421.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.update_filters_48421.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"comments-local","comments-local",-777921181),(function (local){
var G__48424 = local;
var G__48424__$1 = (((!((self__.mode == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48424,new cljs.core.Keyword(null,"mode","mode",654403691),self__.mode):G__48424);
var G__48424__$2 = (((!((self__.show == null))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48424__$1,new cljs.core.Keyword(null,"show","show",-576705889),self__.show):G__48424__$1);
if((!((self__.list == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__48424__$2,new cljs.core.Keyword(null,"list","list",765357683),self__.list);
} else {
return G__48424__$2;
}
}));
}));
}

return (new app.main.data.comments.update_filters_48421(p__48419,map__48420__$1,params,mode,show,list,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.update_options = (function app$main$data$comments$update_options(params){
if((typeof app.main.data.comments.update_options_48425 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.update_options_48425 = (function (params,meta48426){
this.params = params;
this.meta48426 = meta48426;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.update_options_48425.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.update_options_48425.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","update-options","app.main.data.comments/update-options",1747043275);
}));

(app.main.data.comments.update_options_48425.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48427,meta48426__$1){
var self__ = this;
var _48427__$1 = this;
return (new app.main.data.comments.update_options_48425(self__.params,meta48426__$1));
}));

(app.main.data.comments.update_options_48425.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48427){
var self__ = this;
var _48427__$1 = this;
return self__.meta48426;
}));

(app.main.data.comments.update_options_48425.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.update_options_48425.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(state,new cljs.core.Keyword(null,"comments-local","comments-local",-777921181),cljs.core.merge,self__.params);
}));
}

return (new app.main.data.comments.update_options_48425(params,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.schema_COLON_create_draft = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"create-draft"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword("app.common.geom.point","point","app.common.geom.point/point",1811057644)], null)], null);
app.main.data.comments.create_draft = (function app$main$data$comments$create_draft(params){
app.common.data.macros.runtime_assert("expr assert: (sm/check schema:create-draft params)",(function (){
return app.common.schema.check(app.main.data.comments.schema_COLON_create_draft,params);
}));

if((typeof app.main.data.comments.create_draft_48428 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.create_draft_48428 = (function (params,meta48429){
this.params = params;
this.meta48429 = meta48429;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.create_draft_48428.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.create_draft_48428.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","create-draft","app.main.data.comments/create-draft",-1272674029);
}));

(app.main.data.comments.create_draft_48428.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48430,meta48429__$1){
var self__ = this;
var _48430__$1 = this;
return (new app.main.data.comments.create_draft_48428(self__.params,meta48429__$1));
}));

(app.main.data.comments.create_draft_48428.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48430){
var self__ = this;
var _48430__$1 = this;
return self__.meta48429;
}));

(app.main.data.comments.create_draft_48428.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.create_draft_48428.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"comments-local","comments-local",-777921181),cljs.core.assoc,new cljs.core.Keyword(null,"draft","draft",1421831058),self__.params);
}));
}

return (new app.main.data.comments.create_draft_48428(params,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.update_draft_thread = (function app$main$data$comments$update_draft_thread(data){
if((typeof app.main.data.comments.update_draft_thread_48431 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.update_draft_thread_48431 = (function (data,meta48432){
this.data = data;
this.meta48432 = meta48432;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.update_draft_thread_48431.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.update_draft_thread_48431.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","update-draft-thread","app.main.data.comments/update-draft-thread",-1440724778);
}));

(app.main.data.comments.update_draft_thread_48431.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48433,meta48432__$1){
var self__ = this;
var _48433__$1 = this;
return (new app.main.data.comments.update_draft_thread_48431(self__.data,meta48432__$1));
}));

(app.main.data.comments.update_draft_thread_48431.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48433){
var self__ = this;
var _48433__$1 = this;
return self__.meta48432;
}));

(app.main.data.comments.update_draft_thread_48431.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.update_draft_thread_48431.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return app.common.data.update_in_when.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments-local","comments-local",-777921181),new cljs.core.Keyword(null,"draft","draft",1421831058)], null),cljs.core.merge,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([self__.data], 0));
}));
}

return (new app.main.data.comments.update_draft_thread_48431(data,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.toggle_comment_options = (function app$main$data$comments$toggle_comment_options(comment_id){
if((typeof app.main.data.comments.toggle_comment_options_48435 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.toggle_comment_options_48435 = (function (comment_id,meta48436){
this.comment_id = comment_id;
this.meta48436 = meta48436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.toggle_comment_options_48435.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.toggle_comment_options_48435.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","toggle-comment-options","app.main.data.comments/toggle-comment-options",273894281);
}));

(app.main.data.comments.toggle_comment_options_48435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48437,meta48436__$1){
var self__ = this;
var _48437__$1 = this;
return (new app.main.data.comments.toggle_comment_options_48435(self__.comment_id,meta48436__$1));
}));

(app.main.data.comments.toggle_comment_options_48435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48437){
var self__ = this;
var _48437__$1 = this;
return self__.meta48436;
}));

(app.main.data.comments.toggle_comment_options_48435.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.toggle_comment_options_48435.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments-local","comments-local",-777921181),new cljs.core.Keyword(null,"options","options",99638489)], null),(function (p1__48434_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.comment_id,p1__48434_SHARP_)){
return null;
} else {
return self__.comment_id;
}
}));
}));
}

return (new app.main.data.comments.toggle_comment_options_48435(comment_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.hide_comment_options = (function app$main$data$comments$hide_comment_options(){
if((typeof app.main.data.comments.hide_comment_options_48438 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.hide_comment_options_48438 = (function (meta48439){
this.meta48439 = meta48439;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.hide_comment_options_48438.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.hide_comment_options_48438.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","hide-comment-options","app.main.data.comments/hide-comment-options",151145654);
}));

(app.main.data.comments.hide_comment_options_48438.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48440,meta48439__$1){
var self__ = this;
var _48440__$1 = this;
return (new app.main.data.comments.hide_comment_options_48438(meta48439__$1));
}));

(app.main.data.comments.hide_comment_options_48438.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48440){
var self__ = this;
var _48440__$1 = this;
return self__.meta48439;
}));

(app.main.data.comments.hide_comment_options_48438.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.hide_comment_options_48438.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comments-local","comments-local",-777921181),new cljs.core.Keyword(null,"options","options",99638489)], null),cljs.core.constantly(null));
}));
}

return (new app.main.data.comments.hide_comment_options_48438(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.comments.get_owner = (function app$main$data$comments$get_owner(thread_or_comment){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"owner-id","owner-id",-58940392).cljs$core$IFn$_invoke$arity$1(thread_or_comment),new cljs.core.Keyword(null,"fullname","fullname",1638772587),new cljs.core.Keyword(null,"owner-fullname","owner-fullname",882997923).cljs$core$IFn$_invoke$arity$1(thread_or_comment),new cljs.core.Keyword(null,"email","email",1415816706),new cljs.core.Keyword(null,"owner-email","owner-email",-2131394980).cljs$core$IFn$_invoke$arity$1(thread_or_comment),new cljs.core.Keyword(null,"photo-id","photo-id",108052797),new cljs.core.Keyword(null,"owner-photo-id","owner-photo-id",1979327434).cljs$core$IFn$_invoke$arity$1(thread_or_comment)], null);
});
app.main.data.comments.group_threads_by_page = (function app$main$data$comments$group_threads_by_page(threads){
var group_by_page = (function app$main$data$comments$group_threads_by_page_$_group_by_page(result,thread){
var current = cljs.core.first(result);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(current),new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(thread))){
return cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$4(current,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,thread),cljs.core.rest(result));
} else {
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(thread),new cljs.core.Keyword(null,"page-name","page-name",974981762),new cljs.core.Keyword(null,"page-name","page-name",974981762).cljs$core$IFn$_invoke$arity$1(thread),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread], null)], null),result);
}
});
return cljs.core.reverse(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(group_by_page,null,threads));
});
app.main.data.comments.group_threads_by_file_and_page = (function app$main$data$comments$group_threads_by_file_and_page(threads){
var group_by_file_and_page = (function app$main$data$comments$group_threads_by_file_and_page_$_group_by_file_and_page(result,thread){
var current = cljs.core.first(result);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(current),new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(thread))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(current),new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(thread))))){
return cljs.core.cons(cljs.core.update.cljs$core$IFn$_invoke$arity$4(current,new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.conj,thread),cljs.core.rest(result));
} else {
return cljs.core.cons(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(thread),new cljs.core.Keyword(null,"page-name","page-name",974981762),new cljs.core.Keyword(null,"page-name","page-name",974981762).cljs$core$IFn$_invoke$arity$1(thread),new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(thread),new cljs.core.Keyword(null,"file-name","file-name",-1654217259),new cljs.core.Keyword(null,"file-name","file-name",-1654217259).cljs$core$IFn$_invoke$arity$1(thread),new cljs.core.Keyword(null,"items","items",1031954938),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread], null)], null),result);
}
});
return cljs.core.reverse(cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(group_by_file_and_page,null,threads));
});
app.main.data.comments.apply_filters = (function app$main$data$comments$apply_filters(cstate,profile,threads){
var map__48443 = cstate;
var map__48443__$1 = cljs.core.__destructure_map(map__48443);
var show = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48443__$1,new cljs.core.Keyword(null,"show","show",-576705889));
var mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48443__$1,new cljs.core.Keyword(null,"mode","mode",654403691));
var G__48444 = threads;
var G__48444__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending","pending",-220036727),show))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.not,new cljs.core.Keyword(null,"is-resolved","is-resolved",403882551)),G__48444):G__48444);
var G__48444__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"yours","yours",289099402),mode))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48441_SHARP_){
return cljs.core.contains_QMARK_(new cljs.core.Keyword(null,"participants","participants",673603367).cljs$core$IFn$_invoke$arity$1(p1__48441_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(profile));
}),G__48444__$1):G__48444__$1);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"mentions","mentions",-1355741087),mode)){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__48442_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.set(new cljs.core.Keyword(null,"mentions","mentions",-1355741087).cljs$core$IFn$_invoke$arity$1(p1__48442_SHARP_)),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(profile));
}),G__48444__$2);
} else {
return G__48444__$2;
}
});
app.main.data.comments.update_comment_thread_frame = (function app$main$data$comments$update_comment_thread_frame(var_args){
var G__48446 = arguments.length;
switch (G__48446) {
case 1:
return app.main.data.comments.update_comment_thread_frame.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.data.comments.update_comment_thread_frame.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.comments.update_comment_thread_frame.cljs$core$IFn$_invoke$arity$1 = (function (thread){
return app.main.data.comments.update_comment_thread_frame.cljs$core$IFn$_invoke$arity$2(thread,app.common.uuid.zero);
}));

(app.main.data.comments.update_comment_thread_frame.cljs$core$IFn$_invoke$arity$2 = (function (thread,frame_id){
app.common.data.macros.runtime_assert("expected valid comment thread",(function (){
return app.main.data.comments.check_comment_thread_BANG_(thread);
}));

if((typeof app.main.data.comments.update_comment_thread_frame_48447 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.update_comment_thread_frame_48447 = (function (thread,frame_id,meta48448){
this.thread = thread;
this.frame_id = frame_id;
this.meta48448 = meta48448;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.update_comment_thread_frame_48447.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.update_comment_thread_frame_48447.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","update-comment-thread-frame","app.main.data.comments/update-comment-thread-frame",1186444445);
}));

(app.main.data.comments.update_comment_thread_frame_48447.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48449,meta48448__$1){
var self__ = this;
var _48449__$1 = this;
return (new app.main.data.comments.update_comment_thread_frame_48447(self__.thread,self__.frame_id,meta48448__$1));
}));

(app.main.data.comments.update_comment_thread_frame_48447.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48449){
var self__ = this;
var _48449__$1 = this;
return self__.meta48448;
}));

(app.main.data.comments.update_comment_thread_frame_48447.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.update_comment_thread_frame_48447.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var thread_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.thread);
return cljs.core.assoc_in(state,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179),thread_id,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072)], null),self__.frame_id);
}));

(app.main.data.comments.update_comment_thread_frame_48447.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.update_comment_thread_frame_48447.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var thread_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(self__.thread);
return beicon.v2.core.ignore(beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){
return beicon.v2.core.throw$(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"comment-error","comment-error",371413856),new cljs.core.Keyword(null,"code","code",1586293142),new cljs.core.Keyword(null,"update-comment-thread-frame","update-comment-thread-frame",-1416539315)], null));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-comment-thread-frame","update-comment-thread-frame",-1416539315),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),thread_id,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),self__.frame_id], null))));
}));
}

return (new app.main.data.comments.update_comment_thread_frame_48447(thread,frame_id,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.comments.update_comment_thread_frame.cljs$lang$maxFixedArity = 2);

/**
 * Detach comment threads that are inside a frame when that frame is deleted
 */
app.main.data.comments.detach_comment_thread = (function app$main$data$comments$detach_comment_thread(ids){
if(cljs.core.truth_(app.common.schema.check_coll_of_uuid(ids))){
} else {
throw (new Error("Assert failed: (sm/check-coll-of-uuid ids)"));
}

if((typeof app.main.data.comments.detach_comment_thread_48451 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.detach_comment_thread_48451 = (function (ids,meta48452){
this.ids = ids;
this.meta48452 = meta48452;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.detach_comment_thread_48451.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.detach_comment_thread_48451.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","detach-comment-thread","app.main.data.comments/detach-comment-thread",377501501);
}));

(app.main.data.comments.detach_comment_thread_48451.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48453,meta48452__$1){
var self__ = this;
var _48453__$1 = this;
return (new app.main.data.comments.detach_comment_thread_48451(self__.ids,meta48452__$1));
}));

(app.main.data.comments.detach_comment_thread_48451.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48453){
var self__ = this;
var _48453__$1 = this;
return self__.meta48452;
}));

(app.main.data.comments.detach_comment_thread_48451.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.detach_comment_thread_48451.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$1(state);
var is_frame_QMARK_ = (function (id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"type","type",1174270348)], null)));
});
var frame_ids_QMARK_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(is_frame_QMARK_),self__.ids);
return beicon.v2.core.from(cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.data.comments.update_comment_thread_frame,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (comment){
return cljs.core.some((function (p1__48450_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__48450_SHARP_,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(comment));
}),frame_ids_QMARK_);
}),cljs.core.vals(new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179).cljs$core$IFn$_invoke$arity$1(state)))));
}));
}

return (new app.main.data.comments.detach_comment_thread_48451(ids,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Fetch or refresh all profile data for comments of the current file
 */
app.main.data.comments.fetch_profiles = (function app$main$data$comments$fetch_profiles(){
if((typeof app.main.data.comments.fetch_profiles_48455 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.comments.fetch_profiles_48455 = (function (meta48456){
this.meta48456 = meta48456;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.comments.fetch_profiles_48455.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.fetch_profiles_48455.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.comments","fetch-profiles","app.main.data.comments/fetch-profiles",1482024457);
}));

(app.main.data.comments.fetch_profiles_48455.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48457,meta48456__$1){
var self__ = this;
var _48457__$1 = this;
return (new app.main.data.comments.fetch_profiles_48455(meta48456__$1));
}));

(app.main.data.comments.fetch_profiles_48455.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48457){
var self__ = this;
var _48457__$1 = this;
return self__.meta48456;
}));

(app.main.data.comments.fetch_profiles_48455.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.comments.fetch_profiles_48455.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var share_id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"share-id","share-id",795821204).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"viewer-local","viewer-local",1813008498).cljs$core$IFn$_invoke$arity$1(state));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"current-share-id","current-share-id",-280704217).cljs$core$IFn$_invoke$arity$1(state);
}
})();
return beicon.v2.core.map((function (profiles){
return (function (p1__48454_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__48454_SHARP_,new cljs.core.Keyword(null,"profiles","profiles",507634713),cljs.core.merge,app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),profiles));
});
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-profiles-for-file-comments","get-profiles-for-file-comments",-903478036),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"share-id","share-id",795821204),share_id], null)));
}));
}

return (new app.main.data.comments.fetch_profiles_48455(cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.comments.js.map
