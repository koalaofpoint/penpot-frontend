import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.logging.js";
import "./app.common.thumbnails.js";
import "./app.common.time.js";
import "./app.common.types.component.js";
import "./app.common.uuid.js";
import "./app.main.data.changes.js";
import "./app.main.data.helpers.js";
import "./app.main.rasterizer.js";
import "./app.main.refs.js";
import "./app.main.render.js";
import "./app.main.repo.js";
import "./app.util.queue.js";
import "./app.util.timers.js";
import "./app.util.webapi.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.thumbnails');
app.common.logging.loggers.set("app.main.data.workspace.thumbnails",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"warn","warn",-436710552)));
app.main.data.workspace.thumbnails.find_request = (function app$main$data$workspace$thumbnails$find_request(params,item){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((params["file-id"]),(item["file-id"]))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((params["page-id"]),(item["page-id"]))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((params["shape-id"]),(item["shape-id"]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((params["tag"]),(item["tag"]))))))));
});
/**
 * Creates a request to generate a thumbnail for the given ids.
 */
app.main.data.workspace.thumbnails.create_request = (function app$main$data$workspace$thumbnails$create_request(file_id,page_id,shape_id,tag){
return ({"file-id": file_id, "page-id": page_id, "shape-id": shape_id, "tag": tag});
});
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.data !== 'undefined') && (typeof app.main.data.workspace !== 'undefined') && (typeof app.main.data.workspace.thumbnails !== 'undefined') && (typeof app.main.data.workspace.thumbnails.queue !== 'undefined')){
} else {
app.main.data.workspace.thumbnails.queue = app.util.queue.create(app.main.data.workspace.thumbnails.find_request,((1000) / (30)));
}
app.main.data.workspace.thumbnails.clear_queue_BANG_ = (function app$main$data$workspace$thumbnails$clear_queue_BANG_(){
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.thumbnails",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"clearing thumbnail queue"], null)], null);
}),null)),null,null,"app.main.data.workspace.thumbnails",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


return app.util.queue.clear_BANG_(app.main.data.workspace.thumbnails.queue);
});
/**
 * Returns the thumbnail for the given ids
 */
app.main.data.workspace.thumbnails.render_thumbnail = (function app$main$data$workspace$thumbnails$render_thumbnail(state,file_id,page_id,frame_id,tag){
var object_id = app.common.thumbnails.fmt_object_id.cljs$core$IFn$_invoke$arity$4(file_id,page_id,frame_id,tag);
var tp = app.common.time.tpoint_ms();
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(app.main.data.helpers.get_page(app.main.data.helpers.lookup_file_data.cljs$core$IFn$_invoke$arity$2(state,file_id),page_id));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
return beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (){
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.thumbnails",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"thumbnail rendered"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),""+(tp() ?? "")+"ms"], null)], null);
}),null)),null,null,"app.main.data.workspace.thumbnails",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}

return null;
}),beicon.v2.core.mapcat(app.main.rasterizer.render,beicon.v2.core.filter(cljs.core.some_QMARK_,beicon.v2.core.take((1),app.main.render.render_frame.cljs$core$IFn$_invoke$arity$3(objects,shape,object_id)))));
});
/**
 * Enqueues a request to generate a thumbnail for the given ids.
 */
app.main.data.workspace.thumbnails.request_thumbnail = (function app$main$data$workspace$thumbnails$request_thumbnail(state,file_id,page_id,shape_id,tag){
var request = app.main.data.workspace.thumbnails.create_request(file_id,page_id,shape_id,tag);
return app.util.queue.enqueue_unique(app.main.data.workspace.thumbnails.queue,request,cljs.core.partial.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.thumbnails.render_thumbnail,state,file_id,page_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shape_id,tag], 0)));
});
app.main.data.workspace.thumbnails.clear_thumbnail = (function app$main$data$workspace$thumbnails$clear_thumbnail(var_args){
var G__48614 = arguments.length;
switch (G__48614) {
case 4:
return app.main.data.workspace.thumbnails.clear_thumbnail.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 2:
return app.main.data.workspace.thumbnails.clear_thumbnail.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.thumbnails.clear_thumbnail.cljs$core$IFn$_invoke$arity$4 = (function (file_id,page_id,frame_id,tag){
return app.main.data.workspace.thumbnails.clear_thumbnail.cljs$core$IFn$_invoke$arity$2(file_id,app.common.thumbnails.fmt_object_id.cljs$core$IFn$_invoke$arity$4(file_id,page_id,frame_id,tag));
}));

(app.main.data.workspace.thumbnails.clear_thumbnail.cljs$core$IFn$_invoke$arity$2 = (function (file_id,object_id){
var pending = cljs.core.volatile_BANG_(false);
if((typeof app.main.data.workspace.thumbnails.clear_thumbnail_48619 !== 'undefined')){
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
app.main.data.workspace.thumbnails.clear_thumbnail_48619 = (function (file_id,object_id,pending,meta48620){
this.file_id = file_id;
this.object_id = object_id;
this.pending = pending;
this.meta48620 = meta48620;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.thumbnails.clear_thumbnail_48619.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.thumbnails.clear_thumbnail_48619.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.thumbnails","clear-thumbnail","app.main.data.workspace.thumbnails/clear-thumbnail",1788875739);
}));

(app.main.data.workspace.thumbnails.clear_thumbnail_48619.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48621,meta48620__$1){
var self__ = this;
var _48621__$1 = this;
return (new app.main.data.workspace.thumbnails.clear_thumbnail_48619(self__.file_id,self__.object_id,self__.pending,meta48620__$1));
}));

(app.main.data.workspace.thumbnails.clear_thumbnail_48619.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48621){
var self__ = this;
var _48621__$1 = this;
return self__.meta48620;
}));

(app.main.data.workspace.thumbnails.clear_thumbnail_48619.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.object_id;
}));

(app.main.data.workspace.thumbnails.clear_thumbnail_48619.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.thumbnails.clear_thumbnail_48619.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572),(function (thumbs){
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(thumbs,self__.object_id);
if(cljs.core.truth_(temp__5823__auto__)){
var uri = temp__5823__auto__;
cljs.core.vreset_BANG_(self__.pending,uri);

return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(thumbs,self__.object_id);
} else {
return thumbs;
}
}));
}));

(app.main.data.workspace.thumbnails.clear_thumbnail_48619.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.thumbnails.clear_thumbnail_48619.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
var temp__5823__auto__ = cljs.core.deref(self__.pending);
if(cljs.core.truth_(temp__5823__auto__)){
var uri = temp__5823__auto__;
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.thumbnails",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"clear-thumbnail"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uri","uri",-774711847),uri], null)], null);
}),null)),null,null,"app.main.data.workspace.thumbnails",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


if(cuerdas.core.starts_with_QMARK_(uri,"blob:")){
app.util.timers.schedule_on_idle.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.util.webapi.revoke_uri,uri));
} else {
}

var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"object-id","object-id",-754527291),self__.object_id], null);
return beicon.v2.core.ignore(beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(beicon.v2.core.empty,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-file-object-thumbnail","delete-file-object-thumbnail",1757594590),params)));
} else {
return beicon.v2.core.empty();
}
}));
}

return (new app.main.data.workspace.thumbnails.clear_thumbnail_48619(file_id,object_id,pending,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.thumbnails.clear_thumbnail.cljs$lang$maxFixedArity = 4);

app.main.data.workspace.thumbnails.assoc_thumbnail = (function app$main$data$workspace$thumbnails$assoc_thumbnail(object_id,uri){
var prev_uri_STAR_ = cljs.core.volatile_BANG_(null);
if((typeof app.main.data.workspace.thumbnails.assoc_thumbnail_48630 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {potok.v2.core.EffectEvent}
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.thumbnails.assoc_thumbnail_48630 = (function (object_id,uri,prev_uri_STAR_,meta48631){
this.object_id = object_id;
this.uri = uri;
this.prev_uri_STAR_ = prev_uri_STAR_;
this.meta48631 = meta48631;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.thumbnails.assoc_thumbnail_48630.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.thumbnails.assoc_thumbnail_48630.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.thumbnails","assoc-thumbnail","app.main.data.workspace.thumbnails/assoc-thumbnail",1159203426);
}));

(app.main.data.workspace.thumbnails.assoc_thumbnail_48630.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48632,meta48631__$1){
var self__ = this;
var _48632__$1 = this;
return (new app.main.data.workspace.thumbnails.assoc_thumbnail_48630(self__.object_id,self__.uri,self__.prev_uri_STAR_,meta48631__$1));
}));

(app.main.data.workspace.thumbnails.assoc_thumbnail_48630.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48632){
var self__ = this;
var _48632__$1 = this;
return self__.meta48631;
}));

(app.main.data.workspace.thumbnails.assoc_thumbnail_48630.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.thumbnails.assoc_thumbnail_48630.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var prev_uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572)),self__.object_id);
var G__48634_48800 = prev_uri;
if((G__48634_48800 == null)){
} else {
cljs.core.vreset_BANG_(self__.prev_uri_STAR_,G__48634_48800);
}

if(app.common.logging.enabled_QMARK_("app.main.data.workspace.thumbnails",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"assoc thumbnail"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object-id","object-id",-754527291),self__.object_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uri","uri",-774711847),self__.uri], null)], null);
}),null)),null,null,"app.main.data.workspace.thumbnails",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}


return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572),cljs.core.assoc,self__.object_id,self__.uri);
}));

(app.main.data.workspace.thumbnails.assoc_thumbnail_48630.prototype.potok$v2$core$EffectEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.thumbnails.assoc_thumbnail_48630.prototype.potok$v2$core$EffectEvent$effect$arity$3 = (function (_,___$1,___$2){
var self__ = this;
var ___$3 = this;
return app.util.timers.schedule_on_idle.cljs$core$IFn$_invoke$arity$1((function (){
var temp__5825__auto__ = cljs.core.deref(self__.prev_uri_STAR_);
if(cljs.core.truth_(temp__5825__auto__)){
var uri__$1 = temp__5825__auto__;
return app.util.webapi.revoke_uri(uri__$1);
} else {
return null;
}
}));
}));
}

return (new app.main.data.workspace.thumbnails.assoc_thumbnail_48630(object_id,uri,prev_uri_STAR_,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.thumbnails.duplicate_thumbnail = (function app$main$data$workspace$thumbnails$duplicate_thumbnail(old_id,new_id){
if((typeof app.main.data.workspace.thumbnails.duplicate_thumbnail_48635 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.thumbnails.duplicate_thumbnail_48635 = (function (old_id,new_id,meta48636){
this.old_id = old_id;
this.new_id = new_id;
this.meta48636 = meta48636;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.thumbnails.duplicate_thumbnail_48635.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.thumbnails.duplicate_thumbnail_48635.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.thumbnails","duplicate-thumbnail","app.main.data.workspace.thumbnails/duplicate-thumbnail",243573314);
}));

(app.main.data.workspace.thumbnails.duplicate_thumbnail_48635.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48637,meta48636__$1){
var self__ = this;
var _48637__$1 = this;
return (new app.main.data.workspace.thumbnails.duplicate_thumbnail_48635(self__.old_id,self__.new_id,meta48636__$1));
}));

(app.main.data.workspace.thumbnails.duplicate_thumbnail_48635.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48637){
var self__ = this;
var _48637__$1 = this;
return self__.meta48636;
}));

(app.main.data.workspace.thumbnails.duplicate_thumbnail_48635.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.thumbnails.duplicate_thumbnail_48635.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
var old_id__$1 = ""+(self__.old_id ?? "");
var new_id__$1 = ""+(self__.new_id ?? "");
var thumbnail = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572)),old_id__$1);
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(state,new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572),cljs.core.assoc,new_id__$1,thumbnail);
}));
}

return (new app.main.data.workspace.thumbnails.duplicate_thumbnail_48635(old_id,new_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Updates the thumbnail information for the given `id`
 */
app.main.data.workspace.thumbnails.update_thumbnail = (function app$main$data$workspace$thumbnails$update_thumbnail(file_id,page_id,frame_id,tag,requester){
var object_id = app.common.thumbnails.fmt_object_id.cljs$core$IFn$_invoke$arity$4(file_id,page_id,frame_id,tag);
if((typeof app.main.data.workspace.thumbnails.update_thumbnail_48640 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.thumbnails.update_thumbnail_48640 = (function (file_id,page_id,frame_id,tag,requester,object_id,meta48641){
this.file_id = file_id;
this.page_id = page_id;
this.frame_id = frame_id;
this.tag = tag;
this.requester = requester;
this.object_id = object_id;
this.meta48641 = meta48641;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.thumbnails.update_thumbnail_48640.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.thumbnails.update_thumbnail_48640.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.thumbnails","update-thumbnail","app.main.data.workspace.thumbnails/update-thumbnail",-250727281);
}));

(app.main.data.workspace.thumbnails.update_thumbnail_48640.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48642,meta48641__$1){
var self__ = this;
var _48642__$1 = this;
return (new app.main.data.workspace.thumbnails.update_thumbnail_48640(self__.file_id,self__.page_id,self__.frame_id,self__.tag,self__.requester,self__.object_id,meta48641__$1));
}));

(app.main.data.workspace.thumbnails.update_thumbnail_48640.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48642){
var self__ = this;
var _48642__$1 = this;
return self__.meta48641;
}));

(app.main.data.workspace.thumbnails.update_thumbnail_48640.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.object_id;
}));

(app.main.data.workspace.thumbnails.update_thumbnail_48640.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.thumbnails.update_thumbnail_48640.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,stream){
var self__ = this;
var ___$1 = this;
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.thumbnails",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"update thumbnail"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"requester","requester",2032946161),self__.requester], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"object-id","object-id",-754527291),self__.object_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tag","tag",-1290361223),self__.tag], null)], null);
}),null)),null,null,"app.main.data.workspace.thumbnails",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}


var tp = app.common.time.tpoint_ms();
return beicon.v2.core.take_until(beicon.v2.core.filter((function (p1__48639_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(p1__48639_SHARP_),self__.object_id);
}),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.thumbnails","clear-thumbnail","app.main.data.workspace.thumbnails/clear-thumbnail",1788875739)),stream)),beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (){
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.thumbnails",new cljs.core.Keyword(null,"debug","debug",-1608172596))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"thumbnail updated"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"elapsed","elapsed",-1293489698),""+(tp() ?? "")+"ms"], null)], null);
}),null)),null,null,"app.main.data.workspace.thumbnails",new cljs.core.Keyword(null,"debug","debug",-1608172596),false);
} else {
}

return null;
}),beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (cause){
console.error(cause);

return beicon.v2.core.empty();
}),beicon.v2.core.mapcat((function (blob){
var uri = app.util.webapi.create_uri(blob);
var params = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),self__.file_id,new cljs.core.Keyword(null,"object-id","object-id",-754527291),self__.object_id,new cljs.core.Keyword(null,"media","media",-1066138403),blob,new cljs.core.Keyword(null,"tag","tag",-1290361223),(function (){var or__5025__auto__ = self__.tag;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "frame";
}
})()], null);
return beicon.v2.core.merge(beicon.v2.core.of(app.main.data.workspace.thumbnails.assoc_thumbnail(self__.object_id,uri)),beicon.v2.core.ignore(beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2(beicon.v2.core.empty,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-file-object-thumbnail","create-file-object-thumbnail",-1990532944),params))));
}),app.main.data.workspace.thumbnails.request_thumbnail(state,self__.file_id,self__.page_id,self__.frame_id,self__.tag)))));
}));
}

return (new app.main.data.workspace.thumbnails.update_thumbnail_48640(file_id,page_id,frame_id,tag,requester,object_id,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Process a changes set in a commit to extract the frames that are changing
 */
app.main.data.workspace.thumbnails.extract_frame_changes = (function app$main$data$workspace$thumbnails$extract_frame_changes(page_id,p__48655){
var vec__48656 = p__48655;
var event = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48656,(0),null);
var vec__48659 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48656,(1),null);
var old_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48659,(0),null);
var new_data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48659,(1),null);
var changes = new cljs.core.Keyword(null,"changes","changes",1492088).cljs$core$IFn$_invoke$arity$1(event);
var frame_id_cache = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var lookup_data_objects = (function app$main$data$workspace$thumbnails$extract_frame_changes_$_lookup_data_objects(data,page_id__$1){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145)),page_id__$1),new cljs.core.Keyword(null,"objects","objects",2099713734));
});
var extract_ids = (function app$main$data$workspace$thumbnails$extract_frame_changes_$_extract_ids(p__48758){
var map__48759 = p__48758;
var map__48759__$1 = cljs.core.__destructure_map(map__48759);
var change = map__48759__$1;
var page_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48759__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__48759__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var G__48760 = type;
var G__48760__$1 = (((G__48760 instanceof cljs.core.Keyword))?G__48760.fqn:null);
switch (G__48760__$1) {
case "add-obj":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_id__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(change)], null)], null);

break;
case "mod-obj":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_id__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(change)], null)], null);

break;
case "del-obj":
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [page_id__$1,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(change)], null)], null);

break;
case "mov-objects":
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__48652_SHARP_){
return (new cljs.core.PersistentVector(null,2,(5),cljs.core.PersistentVector.EMPTY_NODE,[page_id__$1,p1__48652_SHARP_],null));
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(change));

break;
default:
return cljs.core.PersistentVector.EMPTY;

}
});
var get_frame_ids = (function app$main$data$workspace$thumbnails$extract_frame_changes_$_get_frame_ids(id){
var old_objects = lookup_data_objects(old_data,page_id);
var new_objects = lookup_data_objects(new_data,page_id);
var new_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new_objects,id);
var old_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(old_objects,id);
var old_frame_id = ((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(old_shape))?id:new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(old_shape));
var new_frame_id = ((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(new_shape))?id:new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(new_shape));
var root_frame_old_QMARK_ = app.common.files.helpers.root_frame_QMARK_.cljs$core$IFn$_invoke$arity$2(old_objects,old_frame_id);
var root_frame_new_QMARK_ = app.common.files.helpers.root_frame_QMARK_.cljs$core$IFn$_invoke$arity$2(new_objects,new_frame_id);
var instance_root_QMARK_ = app.common.types.component.instance_root_QMARK_(new_shape);
var local_result = (function (){var G__48766 = cljs.core.PersistentHashSet.EMPTY;
var G__48766__$1 = (cljs.core.truth_(root_frame_old_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48766,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["frame",old_frame_id], null)):G__48766);
var G__48766__$2 = (cljs.core.truth_(root_frame_new_QMARK_)?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48766__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["frame",new_frame_id], null)):G__48766__$1);
if(instance_root_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__48766__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["component",id], null));
} else {
return G__48766__$2;
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frame_id_cache,cljs.core.assoc,id,local_result);

var result = (function (){var G__48767 = local_result;
var G__48767__$1 = ((((cljs.core.uuid_QMARK_(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(old_shape))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(old_shape))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(old_shape)))))))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__48767,get_frame_ids_cached(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(old_shape))):G__48767);
if(((cljs.core.uuid_QMARK_(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(new_shape))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(app.common.uuid.zero,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(new_shape))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(new_shape))))))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(G__48767__$1,get_frame_ids_cached(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(new_shape)));
} else {
return G__48767__$1;
}
})();
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(frame_id_cache,cljs.core.assoc,id,result);

return result;
});
var get_frame_ids_cached = (function app$main$data$workspace$thumbnails$extract_frame_changes_$_get_frame_ids_cached(id){
if(cljs.core.contains_QMARK_(cljs.core.deref(frame_id_cache),id)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(frame_id_cache),id);
} else {
return get_frame_ids(id);
}
});
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(extract_ids),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p__48769){
var vec__48770 = p__48769;
var page_id_SINGLEQUOTE_ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48770,(0),null);
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(page_id,page_id_SINGLEQUOTE_);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p__48777){
var vec__48778 = p__48777;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48778,(0),null);
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48778,(1),null);
return id;
})),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(get_frame_ids_cached)], 0)),changes);
});
/**
 * Watch the state for changes inside frames. If a change is detected will force a rendering
 *   of the frame data so the thumbnail can be updated.
 */
app.main.data.workspace.thumbnails.watch_state_changes = (function app$main$data$workspace$thumbnails$watch_state_changes(file_id,page_id){
if((typeof app.main.data.workspace.thumbnails.watch_state_changes_48783 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.thumbnails.watch_state_changes_48783 = (function (file_id,page_id,meta48784){
this.file_id = file_id;
this.page_id = page_id;
this.meta48784 = meta48784;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.thumbnails.watch_state_changes_48783.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.thumbnails.watch_state_changes_48783.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.thumbnails","watch-state-changes","app.main.data.workspace.thumbnails/watch-state-changes",1728738579);
}));

(app.main.data.workspace.thumbnails.watch_state_changes_48783.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_48785,meta48784__$1){
var self__ = this;
var _48785__$1 = this;
return (new app.main.data.workspace.thumbnails.watch_state_changes_48783(self__.file_id,self__.page_id,meta48784__$1));
}));

(app.main.data.workspace.thumbnails.watch_state_changes_48783.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_48785){
var self__ = this;
var _48785__$1 = this;
return self__.meta48784;
}));

(app.main.data.workspace.thumbnails.watch_state_changes_48783.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.thumbnails.watch_state_changes_48783.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
var stopper_s = beicon.v2.core.filter((function (event){
var type = potok.v2.core.type(event);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.pages","finalize-page","app.main.data.workspace.pages/finalize-page",526513034),type)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.thumbnails","watch-state-changes","app.main.data.workspace.thumbnails/watch-state-changes",1728738579),type)));
}),stream);
var workspace_data_s = beicon.v2.core.share(beicon.v2.core.buffer.cljs$core$IFn$_invoke$arity$3((2),(1),beicon.v2.core.concat(beicon.v2.core.of(null),beicon.v2.core.from_atom.cljs$core$IFn$_invoke$arity$2(app.main.refs.workspace_data,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"emit-current-value?","emit-current-value?",56289147),true], null)))));
var all_commits_s = beicon.v2.core.share(beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (p1__48781_SHARP_){
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.thumbnails",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"inconming change"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"origin","origin",1037372088),"all"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),""+(p1__48781_SHARP_ ?? "")], null)], null);
}),null)),null,null,"app.main.data.workspace.thumbnails",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}

return null;
}),beicon.v2.core.merge_map(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.thumbnails.extract_frame_changes,self__.page_id),beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2(workspace_data_s,beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.map(cljs.core.deref,beicon.v2.core.filter(app.main.data.changes.commit_QMARK_,stream)))))));
var notifier_s = beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (){
if(app.common.logging.enabled_QMARK_("app.main.data.workspace.thumbnails",new cljs.core.Keyword(null,"trace","trace",-1082747415))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"buffer initialized"], null)], null);
}),null)),null,null,"app.main.data.workspace.thumbnails",new cljs.core.Keyword(null,"trace","trace",-1082747415),false);
} else {
}

return null;
}),beicon.v2.core.debounce((5000),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.persistence","commit-persisted","app.main.data.persistence/commit-persisted",-1619235892)),stream)));
return beicon.v2.core.take_until(stopper_s,beicon.v2.core.merge(beicon.v2.core.mapcat((function (p__48790){
var vec__48791 = p__48790;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48791,(0),null);
var frame_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48791,(1),null);
return beicon.v2.core.of(app.main.data.workspace.thumbnails.clear_thumbnail.cljs$core$IFn$_invoke$arity$4(self__.file_id,self__.page_id,frame_id,tag));
}),all_commits_s),beicon.v2.core.map((function (p__48794){
var vec__48795 = p__48794;
var tag = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48795,(0),null);
var frame_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__48795,(1),null);
return app.main.data.workspace.thumbnails.update_thumbnail(self__.file_id,self__.page_id,frame_id,tag,"watch-state-changes");
}),beicon.v2.core.mapcat((function (p1__48782_SHARP_){
return cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,p1__48782_SHARP_);
}),beicon.v2.core.buffer_until(notifier_s,all_commits_s)))));
}));
}

return (new app.main.data.workspace.thumbnails.watch_state_changes_48783(file_id,page_id,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.thumbnails.js.map
