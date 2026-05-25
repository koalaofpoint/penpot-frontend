import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.schema.js";
import "./app.common.types.shape_tree.js";
import "./app.main.data.comments.js";
import "./app.main.data.common.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.data.workspace.common.js";
import "./app.main.data.workspace.drawing.js";
import "./app.main.data.workspace.edition.js";
import "./app.main.data.workspace.selection.js";
import "./app.main.data.workspace.zoom.js";
import "./app.main.repo.js";
import "./app.main.router.js";
import "./app.main.streams.js";
import "./app.util.mouse.js";
import "./beicon.v2.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.data.workspace.comments');
app.main.data.workspace.comments.initialize_comments = (function app$main$data$workspace$comments$initialize_comments(file_id){
if((typeof app.main.data.workspace.comments.initialize_comments_50329 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.comments.initialize_comments_50329 = (function (file_id,meta50331){
this.file_id = file_id;
this.meta50331 = meta50331;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.comments.initialize_comments_50329.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.initialize_comments_50329.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.comments","initialize-comments","app.main.data.workspace.comments/initialize-comments",1789582778);
}));

(app.main.data.workspace.comments.initialize_comments_50329.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50332,meta50331__$1){
var self__ = this;
var _50332__$1 = this;
return (new app.main.data.workspace.comments.initialize_comments_50329(self__.file_id,meta50331__$1));
}));

(app.main.data.workspace.comments.initialize_comments_50329.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50332){
var self__ = this;
var _50332__$1 = this;
return self__.meta50331;
}));

(app.main.data.workspace.comments.initialize_comments_50329.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.initialize_comments_50329.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
var stopper_s = beicon.v2.core.filter((function (p1__50324_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.workspace.comments","finalize","app.main.data.workspace.comments/finalize",1021332360),p1__50324_SHARP_);
}),stream);
return beicon.v2.core.take_until(stopper_s,beicon.v2.core.merge(beicon.v2.core.of(app.main.data.comments.retrieve_comment_threads(self__.file_id)),beicon.v2.core.map(app.main.data.workspace.comments.handle_comment_layer_click,beicon.v2.core.map(cljs.core.first,beicon.v2.core.filter((function (p__50353){
var vec__50354 = p__50353;
var ___$3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50354,(0),null);
var space = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50354,(1),null);
return cljs.core.not(space);
}),beicon.v2.core.with_latest_from.cljs$core$IFn$_invoke$arity$2(app.main.streams.keyboard_space,beicon.v2.core.switch_map((function (){
return beicon.v2.core.take((1),app.main.streams.mouse_position);
}),beicon.v2.core.filter(app.util.mouse.mouse_click_event_QMARK_,beicon.v2.core.filter(app.util.mouse.mouse_event_QMARK_,stream))))))),beicon.v2.core.map(app.main.data.workspace.comments.handle_interrupt,beicon.v2.core.filter(app.main.data.workspace.common.interrupt_QMARK_,stream))));
}));
}

return (new app.main.data.workspace.comments.initialize_comments_50329(file_id,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.comments.handle_interrupt = (function app$main$data$workspace$comments$handle_interrupt(){
if((typeof app.main.data.workspace.comments.handle_interrupt_50363 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.comments.handle_interrupt_50363 = (function (meta50364){
this.meta50364 = meta50364;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.comments.handle_interrupt_50363.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.handle_interrupt_50363.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.comments","handle-interrupt","app.main.data.workspace.comments/handle-interrupt",-1367914269);
}));

(app.main.data.workspace.comments.handle_interrupt_50363.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50365,meta50364__$1){
var self__ = this;
var _50365__$1 = this;
return (new app.main.data.workspace.comments.handle_interrupt_50363(meta50364__$1));
}));

(app.main.data.workspace.comments.handle_interrupt_50363.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50365){
var self__ = this;
var _50365__$1 = this;
return self__.meta50364;
}));

(app.main.data.workspace.comments.handle_interrupt_50363.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.handle_interrupt_50363.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var local = new cljs.core.Keyword(null,"comments-local","comments-local",-777921181).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(new cljs.core.Keyword(null,"draft","draft",1421831058).cljs$core$IFn$_invoke$arity$1(local))){
return beicon.v2.core.of(app.main.data.comments.close_thread());
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(local))){
return beicon.v2.core.of(app.main.data.comments.close_thread());
} else {
return beicon.v2.core.of(app.main.data.workspace.edition.clear_edition_mode(),app.main.data.workspace.selection.deselect_all.cljs$core$IFn$_invoke$arity$1(true));

}
}
}));
}

return (new app.main.data.workspace.comments.handle_interrupt_50363(cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.comments.handle_comment_layer_click = (function app$main$data$workspace$comments$handle_comment_layer_click(position){
if((typeof app.main.data.workspace.comments.handle_comment_layer_click_50370 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.comments.handle_comment_layer_click_50370 = (function (position,meta50371){
this.position = position;
this.meta50371 = meta50371;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.comments.handle_comment_layer_click_50370.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.handle_comment_layer_click_50370.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.comments","handle-comment-layer-click","app.main.data.workspace.comments/handle-comment-layer-click",1482069432);
}));

(app.main.data.workspace.comments.handle_comment_layer_click_50370.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50372,meta50371__$1){
var self__ = this;
var _50372__$1 = this;
return (new app.main.data.workspace.comments.handle_comment_layer_click_50370(self__.position,meta50371__$1));
}));

(app.main.data.workspace.comments.handle_comment_layer_click_50370.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50372){
var self__ = this;
var _50372__$1 = this;
return self__.meta50371;
}));

(app.main.data.workspace.comments.handle_comment_layer_click_50370.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.handle_comment_layer_click_50370.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var local = new cljs.core.Keyword(null,"comments-local","comments-local",-777921181).cljs$core$IFn$_invoke$arity$1(state);
if((!((new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(local) == null)))){
return beicon.v2.core.of(app.main.data.comments.close_thread());
} else {
var page_id = new cljs.core.Keyword(null,"current-page-id","current-page-id",310685425).cljs$core$IFn$_invoke$arity$1(state);
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),self__.position,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id], null);
return beicon.v2.core.of(app.main.data.comments.create_draft(params));
}
}));
}

return (new app.main.data.workspace.comments.handle_comment_layer_click_50370(position,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.comments.center_to_comment_thread = (function app$main$data$workspace$comments$center_to_comment_thread(p__50411){
var map__50413 = p__50411;
var map__50413__$1 = cljs.core.__destructure_map(map__50413);
var thread = map__50413__$1;
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50413__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
app.common.data.macros.runtime_assert("expected valid comment thread",(function (){
return app.main.data.comments.check_comment_thread_BANG_(thread);
}));

if((typeof app.main.data.workspace.comments.center_to_comment_thread_50426 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.UpdateEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.comments.center_to_comment_thread_50426 = (function (p__50411,map__50413,thread,position,meta50427){
this.p__50411 = p__50411;
this.map__50413 = map__50413;
this.thread = thread;
this.position = position;
this.meta50427 = meta50427;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.comments.center_to_comment_thread_50426.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.center_to_comment_thread_50426.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.comments","center-to-comment-thread","app.main.data.workspace.comments/center-to-comment-thread",-1924511754);
}));

(app.main.data.workspace.comments.center_to_comment_thread_50426.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50428,meta50427__$1){
var self__ = this;
var _50428__$1 = this;
return (new app.main.data.workspace.comments.center_to_comment_thread_50426(self__.p__50411,self__.map__50413,self__.thread,self__.position,meta50427__$1));
}));

(app.main.data.workspace.comments.center_to_comment_thread_50426.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50428){
var self__ = this;
var _50428__$1 = this;
return self__.meta50427;
}));

(app.main.data.workspace.comments.center_to_comment_thread_50426.prototype.potok$v2$core$UpdateEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.center_to_comment_thread_50426.prototype.potok$v2$core$UpdateEvent$update$arity$2 = (function (_,state){
var self__ = this;
var ___$1 = this;
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),(function (p__50434){
var map__50435 = p__50434;
var map__50435__$1 = cljs.core.__destructure_map(map__50435);
var local = map__50435__$1;
var vbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50435__$1,new cljs.core.Keyword(null,"vbox","vbox",-492787765));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50435__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var pw = ((160) / zoom);
var ph = ((160) / zoom);
var nw = ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vbox) / (2)) - pw);
var nh = ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vbox) / (2)) - ph);
var nx = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(self__.position) - nw);
var ny = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(self__.position) - nh);
return cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(local,new cljs.core.Keyword(null,"vbox","vbox",-492787765),cljs.core.assoc,new cljs.core.Keyword(null,"x","x",2099068185),nx,new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([ny], 0));
}));
}));
}

return (new app.main.data.workspace.comments.center_to_comment_thread_50426(p__50411,map__50413__$1,thread,position,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.comments.update_comment_thread_position = (function app$main$data$workspace$comments$update_comment_thread_position(var_args){
var G__50445 = arguments.length;
switch (G__50445) {
case 2:
return app.main.data.workspace.comments.update_comment_thread_position.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.main.data.workspace.comments.update_comment_thread_position.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.data.workspace.comments.update_comment_thread_position.cljs$core$IFn$_invoke$arity$2 = (function (thread,p__50447){
var vec__50451 = p__50447;
var new_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50451,(0),null);
var new_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50451,(1),null);
return app.main.data.workspace.comments.update_comment_thread_position.cljs$core$IFn$_invoke$arity$3(thread,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_x,new_y], null),null);
}));

(app.main.data.workspace.comments.update_comment_thread_position.cljs$core$IFn$_invoke$arity$3 = (function (thread,p__50455,frame_id){
var vec__50456 = p__50455;
var new_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50456,(0),null);
var new_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__50456,(1),null);
app.common.data.macros.runtime_assert("expected valid comment thread",(function (){
return app.main.data.comments.check_comment_thread_BANG_(thread);
}));

if((typeof app.main.data.workspace.comments.update_comment_thread_position_50465 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.comments.update_comment_thread_position_50465 = (function (thread,p__50455,frame_id,vec__50456,new_x,new_y,meta50466){
this.thread = thread;
this.p__50455 = p__50455;
this.frame_id = frame_id;
this.vec__50456 = vec__50456;
this.new_x = new_x;
this.new_y = new_y;
this.meta50466 = meta50466;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.comments.update_comment_thread_position_50465.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.update_comment_thread_position_50465.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.comments","update-comment-thread-position","app.main.data.workspace.comments/update-comment-thread-position",-88675764);
}));

(app.main.data.workspace.comments.update_comment_thread_position_50465.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50467,meta50466__$1){
var self__ = this;
var _50467__$1 = this;
return (new app.main.data.workspace.comments.update_comment_thread_position_50465(self__.thread,self__.p__50455,self__.frame_id,self__.vec__50456,self__.new_x,self__.new_y,meta50466__$1));
}));

(app.main.data.workspace.comments.update_comment_thread_position_50465.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50467){
var self__ = this;
var _50467__$1 = this;
return self__.meta50466;
}));

(app.main.data.workspace.comments.update_comment_thread_position_50465.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.update_comment_thread_position_50465.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(state);
var page_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page);
var objects = app.main.data.helpers.lookup_page_objects.cljs$core$IFn$_invoke$arity$2(state,page_id);
var frame_id__$1 = (((self__.frame_id == null))?app.common.types.shape_tree.get_frame_id_by_position.cljs$core$IFn$_invoke$arity$2(objects,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(self__.new_x,self__.new_y)):new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(self__.thread));
var thread__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(self__.thread,new cljs.core.Keyword(null,"position","position",-2011731912),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(self__.new_x,self__.new_y)),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id__$1);
var thread_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(thread__$1);
return beicon.v2.core.concat(beicon.v2.core.of((function (p1__50442_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$5(p1__50442_SHARP_,new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179),cljs.core.assoc,thread_id,thread__$1);
})),beicon.v2.core.ignore(beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (){
return beicon.v2.core.throw$(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"update-comment-thread-position","update-comment-thread-position",2101265859)], null));
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-comment-thread-position","update-comment-thread-position",2101265859),thread__$1))));
}));
}

return (new app.main.data.workspace.comments.update_comment_thread_position_50465(thread,p__50455,frame_id,vec__50456,new_x,new_y,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.main.data.workspace.comments.update_comment_thread_position.cljs$lang$maxFixedArity = 3);

app.main.data.workspace.comments.move_frame_comment_threads = (function app$main$data$workspace$comments$move_frame_comment_threads(ids,transforms){
if(cljs.core.truth_(app.common.schema.check_coll_of_uuid(ids))){
} else {
throw (new Error("Assert failed: (sm/check-coll-of-uuid ids)"));
}

if((typeof app.main.data.workspace.comments.move_frame_comment_threads_50500 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.comments.move_frame_comment_threads_50500 = (function (ids,transforms,meta50501){
this.ids = ids;
this.transforms = transforms;
this.meta50501 = meta50501;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.comments.move_frame_comment_threads_50500.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.move_frame_comment_threads_50500.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.comments","move-frame-comment-threads","app.main.data.workspace.comments/move-frame-comment-threads",-1863105348);
}));

(app.main.data.workspace.comments.move_frame_comment_threads_50500.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50502,meta50501__$1){
var self__ = this;
var _50502__$1 = this;
return (new app.main.data.workspace.comments.move_frame_comment_threads_50500(self__.ids,self__.transforms,meta50501__$1));
}));

(app.main.data.workspace.comments.move_frame_comment_threads_50500.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50502){
var self__ = this;
var _50502__$1 = this;
return self__.meta50501;
}));

(app.main.data.workspace.comments.move_frame_comment_threads_50500.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.move_frame_comment_threads_50500.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var page = app.main.data.helpers.lookup_page.cljs$core$IFn$_invoke$arity$1(state);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"objects","objects",2099713734));
var is_frame_QMARK_ = (function (id){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame","frame",-1711082588),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [id,new cljs.core.Keyword(null,"type","type",1174270348)], null)));
});
var frame_ids_QMARK_ = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.filter.cljs$core$IFn$_invoke$arity$1(is_frame_QMARK_),self__.ids);
var threads_position_map = cljs.core.get.cljs$core$IFn$_invoke$arity$2(page,new cljs.core.Keyword(null,"comment-thread-positions","comment-thread-positions",1712485078));
var object_modifiers = new cljs.core.Keyword(null,"workspace-modifiers","workspace-modifiers",1432219828).cljs$core$IFn$_invoke$arity$1(state);
var build_move_event = (function (comment_thread){
var frame_id = new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(comment_thread);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
var modifiers = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(object_modifiers,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_id,new cljs.core.Keyword(null,"modifiers","modifiers",50378834)], null));
var transform = cljs.core.get.cljs$core$IFn$_invoke$arity$2(self__.transforms,frame_id);
var frame_SINGLEQUOTE_ = (function (){var G__50512 = frame;
var G__50512__$1 = (((!((modifiers == null))))?app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(G__50512,modifiers):G__50512);
if((!((transform == null)))){
return app.common.geom.shapes.apply_transform(G__50512__$1,transform);
} else {
return G__50512__$1;
}
})();
var moved = app.common.geom.point.to_vec(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame)),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(frame_SINGLEQUOTE_),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(frame_SINGLEQUOTE_)));
var position = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(threads_position_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(comment_thread),new cljs.core.Keyword(null,"position","position",-2011731912)], null));
var new_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(position) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(moved));
var new_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(position) + new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(moved));
return app.main.data.workspace.comments.update_comment_thread_position.cljs$core$IFn$_invoke$arity$3(comment_thread,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new_x,new_y], null),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame));
});
return beicon.v2.core.from(cljs.core.map.cljs$core$IFn$_invoke$arity$2(build_move_event,cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(frame_ids_QMARK_,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50494_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50494_SHARP_,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(threads_position_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__50494_SHARP_),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072)], null)));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50493_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__50493_SHARP_,new cljs.core.Keyword(null,"position","position",-2011731912),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(threads_position_map,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__50493_SHARP_),new cljs.core.Keyword(null,"position","position",-2011731912)], null)));
}),cljs.core.vals(new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179).cljs$core$IFn$_invoke$arity$1(state)))))));
}));
}

return (new app.main.data.workspace.comments.move_frame_comment_threads_50500(ids,transforms,cljs.core.PersistentArrayMap.EMPTY));
});
potok.v2.core.resolve.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("app.main.data.workspace.comments","move-frame-comment-threads","app.main.data.workspace.comments/move-frame-comment-threads",-1863105348),(function (_,ids_or_transforms){
if(app.common.data.not_empty_QMARK_(ids_or_transforms)){
return app.main.data.workspace.comments.move_frame_comment_threads(((cljs.core.map_QMARK_(ids_or_transforms))?cljs.core.keys(ids_or_transforms):ids_or_transforms),((cljs.core.map_QMARK_(ids_or_transforms))?ids_or_transforms:null));
} else {
return null;
}
}));
/**
 * Detect if two bubbles overlap
 */
app.main.data.workspace.comments.overlap_bubbles_QMARK_ = (function app$main$data$workspace$comments$overlap_bubbles_QMARK_(zoom,thread_1,thread_2){
var distance = app.common.geom.point.distance(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(thread_1),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(thread_2));
var distance_zoom = (distance * zoom);
var distance_overlap = (32);
return (distance_zoom < distance_overlap);
});
/**
 * Calculate the minimum zoom scale needed to keep the current bubble ungrouped from the rest
 */
app.main.data.workspace.comments.calculate_zoom_scale_to_ungroup_current_bubble = (function app$main$data$workspace$comments$calculate_zoom_scale_to_ungroup_current_bubble(zoom,thread,threads){
var threads_rest = cljs.core.filterv((function (p1__50517_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__50517_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(thread));
}),threads);
var zoom_scale_step = 1.75;
if(cljs.core.truth_(cljs.core.some((function (p1__50518_SHARP_){
return app.main.data.workspace.comments.overlap_bubbles_QMARK_(zoom,thread,p1__50518_SHARP_);
}),threads_rest))){
var G__50521 = (zoom * zoom_scale_step);
var G__50522 = thread;
var G__50523 = threads;
return (app.main.data.workspace.comments.calculate_zoom_scale_to_ungroup_current_bubble.cljs$core$IFn$_invoke$arity$3 ? app.main.data.workspace.comments.calculate_zoom_scale_to_ungroup_current_bubble.cljs$core$IFn$_invoke$arity$3(G__50521,G__50522,G__50523) : app.main.data.workspace.comments.calculate_zoom_scale_to_ungroup_current_bubble.call(null,G__50521,G__50522,G__50523));
} else {
return zoom;
}
});
app.main.data.workspace.comments.set_zoom_to_separate_grouped_bubbles = (function app$main$data$workspace$comments$set_zoom_to_separate_grouped_bubbles(thread){
app.common.data.macros.runtime_assert("zoom-to-separate-bubbles",(function (){
return app.main.data.comments.check_comment_thread_BANG_(thread);
}));

if((typeof app.main.data.workspace.comments.set_zoom_to_separate_grouped_bubbles_50526 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.comments.set_zoom_to_separate_grouped_bubbles_50526 = (function (thread,meta50527){
this.thread = thread;
this.meta50527 = meta50527;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.comments.set_zoom_to_separate_grouped_bubbles_50526.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.set_zoom_to_separate_grouped_bubbles_50526.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.comments","set-zoom-to-separate-grouped-bubbles","app.main.data.workspace.comments/set-zoom-to-separate-grouped-bubbles",-1713480086);
}));

(app.main.data.workspace.comments.set_zoom_to_separate_grouped_bubbles_50526.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50528,meta50527__$1){
var self__ = this;
var _50528__$1 = this;
return (new app.main.data.workspace.comments.set_zoom_to_separate_grouped_bubbles_50526(self__.thread,meta50527__$1));
}));

(app.main.data.workspace.comments.set_zoom_to_separate_grouped_bubbles_50526.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50528){
var self__ = this;
var _50528__$1 = this;
return self__.meta50527;
}));

(app.main.data.workspace.comments.set_zoom_to_separate_grouped_bubbles_50526.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.set_zoom_to_separate_grouped_bubbles_50526.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var local = new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699).cljs$core$IFn$_invoke$arity$1(state);
var zoom = new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(local);
var page_id = new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(self__.thread);
var threads_map = new cljs.core.Keyword(null,"comment-threads","comment-threads",1951187179).cljs$core$IFn$_invoke$arity$1(state);
var threads_all = cljs.core.vals(threads_map);
var threads = cljs.core.filterv((function (p1__50524_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__50524_SHARP_),page_id);
}),threads_all);
var updated_zoom = app.main.data.workspace.comments.calculate_zoom_scale_to_ungroup_current_bubble(zoom,self__.thread,threads);
var scale_zoom = (updated_zoom / zoom);
return beicon.v2.core.of(app.main.data.workspace.zoom.set_zoom.cljs$core$IFn$_invoke$arity$1(scale_zoom));
}));
}

return (new app.main.data.workspace.comments.set_zoom_to_separate_grouped_bubbles_50526(thread,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.comments.navigate_to_comment_from_dashboard = (function app$main$data$workspace$comments$navigate_to_comment_from_dashboard(thread){
app.common.data.macros.runtime_assert("expected valid comment thread",(function (){
return app.main.data.comments.check_comment_thread_BANG_(thread);
}));

if((typeof app.main.data.workspace.comments.navigate_to_comment_from_dashboard_50532 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.comments.navigate_to_comment_from_dashboard_50532 = (function (thread,meta50533){
this.thread = thread;
this.meta50533 = meta50533;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.comments.navigate_to_comment_from_dashboard_50532.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.navigate_to_comment_from_dashboard_50532.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.comments","navigate-to-comment-from-dashboard","app.main.data.workspace.comments/navigate-to-comment-from-dashboard",-1454602969);
}));

(app.main.data.workspace.comments.navigate_to_comment_from_dashboard_50532.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50534,meta50533__$1){
var self__ = this;
var _50534__$1 = this;
return (new app.main.data.workspace.comments.navigate_to_comment_from_dashboard_50532(self__.thread,meta50533__$1));
}));

(app.main.data.workspace.comments.navigate_to_comment_from_dashboard_50532.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50534){
var self__ = this;
var _50534__$1 = this;
return self__.meta50533;
}));

(app.main.data.workspace.comments.navigate_to_comment_from_dashboard_50532.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.navigate_to_comment_from_dashboard_50532.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,___$1,stream){
var self__ = this;
var ___$2 = this;
return beicon.v2.core.merge(beicon.v2.core.of(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(self__.thread),new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(self__.thread)], 0))),beicon.v2.core.mapcat((function (){
return beicon.v2.core.of(app.main.data.workspace.drawing.select_for_drawing(new cljs.core.Keyword(null,"comments","comments",-293346423)),app.main.data.workspace.comments.set_zoom_to_separate_grouped_bubbles(self__.thread),app.main.data.workspace.comments.center_to_comment_thread(self__.thread),cljs.core.with_meta(app.main.data.comments.open_thread(self__.thread),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace"], null)));
}),beicon.v2.core.take((1),beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.filter(potok.v2.core.type_QMARK_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace","workspace-initialized","app.main.data.workspace/workspace-initialized",647513818)),stream)))));
}));
}

return (new app.main.data.workspace.comments.navigate_to_comment_from_dashboard_50532(thread,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.comments.navigate_to_comment = (function app$main$data$workspace$comments$navigate_to_comment(thread){
if((typeof app.main.data.workspace.comments.navigate_to_comment_50542 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.comments.navigate_to_comment_50542 = (function (thread,meta50543){
this.thread = thread;
this.meta50543 = meta50543;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.comments.navigate_to_comment_50542.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.navigate_to_comment_50542.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.comments","navigate-to-comment","app.main.data.workspace.comments/navigate-to-comment",1412820367);
}));

(app.main.data.workspace.comments.navigate_to_comment_50542.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50544,meta50543__$1){
var self__ = this;
var _50544__$1 = this;
return (new app.main.data.workspace.comments.navigate_to_comment_50542(self__.thread,meta50543__$1));
}));

(app.main.data.workspace.comments.navigate_to_comment_50542.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50544){
var self__ = this;
var _50544__$1 = this;
return self__.meta50543;
}));

(app.main.data.workspace.comments.navigate_to_comment_50542.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.navigate_to_comment_50542.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
return beicon.v2.core.concat((((!((self__.thread == null))))?beicon.v2.core.of(app.main.router.nav.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"workspace","workspace",-1096735709),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.main.router.get_params(state),new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(self__.thread)),new cljs.core.Keyword(null,"comment-id","comment-id",-1387285800)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.router","replace","app.main.router/replace",466128885),true], null)], 0))):beicon.v2.core.empty()),beicon.v2.core.observe_on(new cljs.core.Keyword(null,"async","async",1050769601),beicon.v2.core.of(app.main.data.workspace.drawing.select_for_drawing(new cljs.core.Keyword(null,"comments","comments",-293346423)),app.main.data.workspace.comments.set_zoom_to_separate_grouped_bubbles(self__.thread),app.main.data.workspace.comments.center_to_comment_thread(self__.thread),cljs.core.with_meta(app.main.data.comments.open_thread(self__.thread),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace"], null)))));
}));
}

return (new app.main.data.workspace.comments.navigate_to_comment_50542(thread,cljs.core.PersistentArrayMap.EMPTY));
});
app.main.data.workspace.comments.navigate_to_comment_id = (function app$main$data$workspace$comments$navigate_to_comment_id(thread_id){
if((typeof app.main.data.workspace.comments.navigate_to_comment_id_50573 !== 'undefined')){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {potok.v2.core.WatchEvent}
 * @implements {cljs.core.IWithMeta}
 * @implements {potok.v2.core.Event}
*/
app.main.data.workspace.comments.navigate_to_comment_id_50573 = (function (thread_id,meta50574){
this.thread_id = thread_id;
this.meta50574 = meta50574;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.main.data.workspace.comments.navigate_to_comment_id_50573.prototype.potok$v2$core$Event$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.navigate_to_comment_id_50573.prototype.potok$v2$core$Event$_type$arity$1 = (function (___34968__auto__){
var self__ = this;
var ___34968__auto____$1 = this;
return new cljs.core.Keyword("app.main.data.workspace.comments","navigate-to-comment-id","app.main.data.workspace.comments/navigate-to-comment-id",-1941017349);
}));

(app.main.data.workspace.comments.navigate_to_comment_id_50573.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_50575,meta50574__$1){
var self__ = this;
var _50575__$1 = this;
return (new app.main.data.workspace.comments.navigate_to_comment_id_50573(self__.thread_id,meta50574__$1));
}));

(app.main.data.workspace.comments.navigate_to_comment_id_50573.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_50575){
var self__ = this;
var _50575__$1 = this;
return self__.meta50574;
}));

(app.main.data.workspace.comments.navigate_to_comment_id_50573.prototype.potok$v2$core$WatchEvent$ = cljs.core.PROTOCOL_SENTINEL);

(app.main.data.workspace.comments.navigate_to_comment_id_50573.prototype.potok$v2$core$WatchEvent$watch$arity$3 = (function (_,state,___$1){
var self__ = this;
var ___$2 = this;
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(state);
return beicon.v2.core.map(app.main.data.workspace.comments.navigate_to_comment,beicon.v2.core.map((function (p1__50572_SHARP_){
return app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p__50576){
var map__50577 = p__50576;
var map__50577__$1 = cljs.core.__destructure_map(map__50577);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50577__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.thread_id,id);
}),p1__50572_SHARP_);
}),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-comment-threads","get-comment-threads",-138542175),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id], null))));
}));
}

return (new app.main.data.workspace.comments.navigate_to_comment_id_50573(thread_id,cljs.core.PersistentArrayMap.EMPTY));
});

//# sourceMappingURL=app.main.data.workspace.comments.js.map
