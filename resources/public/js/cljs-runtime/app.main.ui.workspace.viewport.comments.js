import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.data.comments.js";
import "./app.main.data.workspace.comments.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.comments.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.comments');
app.main.ui.workspace.viewport.comments.comments_layer_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$viewport$comments$comments_layer_STAR_(props_56889){
var zoom = props_56889.zoom;
var file_id = props_56889.fileId;
var vbox = props_56889.vbox;
var page_id = props_56889.pageId;
var vport = props_56889.vport;
var vbox_x = (vbox?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(vbox,new cljs.core.Keyword(null,"x","x",2099068185)));
var vbox_y = (vbox?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(vbox,new cljs.core.Keyword(null,"y","y",-1757859776)));
var vport_w = (vport?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(vport,new cljs.core.Keyword(null,"width","width",-384071477)));
var vport_h = (vport?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(vport,new cljs.core.Keyword(null,"height","height",1025178622)));
var pos_x = ((- vbox_x) * zoom);
var pos_y = ((- vbox_y) * zoom);
var profile = rumext.v2.deref(app.main.refs.profile);
var local = rumext.v2.deref(app.main.refs.comments_local);
var threads_map = rumext.v2.deref(app.main.refs.threads);
var threads = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(threads_map),rumext.v2.adapt(local),rumext.v2.adapt(profile),rumext.v2.adapt(page_id)],(function (){
return app.main.data.comments.apply_filters(local,profile,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56888_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(p1__56888_SHARP_),page_id);
}),cljs.core.vals(threads_map)));
}));
var viewport = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(vport,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),pos_x,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),pos_y], 0));
var on_draft_cancel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178));
}));
var on_draft_submit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (draft){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.create_thread_on_workspace.cljs$core$IFn$_invoke$arity$1(draft));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.comments.initialize_comments(file_id));

return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.comments","finalize","app.main.data.workspace.comments/finalize",1021332360));
});
}));

return rumext.v2.jsx("div",{'className':"main_ui_workspace_viewport_comments__comments-section",'children':rumext.v2.jsx("div",{'id':"comments",'style':{'width':""+(vport_w ?? "")+"px",'height':""+(vport_h ?? "")+"px"},'className':"main_ui_workspace_viewport_comments__workspace-comments-container",'children':rumext.v2.jsxs("div",{'style':{'transform':""+"translate("+(pos_x ?? "")+"px, "+(pos_y ?? "")+"px)"},'className':"main_ui_workspace_viewport_comments__threads",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,thread_group){
out_arr__35152__auto__.push((function (){var group_QMARK_ = (cljs.core.count(thread_group) > (1));
var thread = cljs.core.first(thread_group);
if(group_QMARK_){
return rumext.v2.jsx(app.main.ui.comments.comment_floating_group_STAR_,{'threadGroup':thread_group,'zoom':zoom},new cljs.core.Keyword(null,"seqn","seqn",406413591).cljs$core$IFn$_invoke$arity$1(thread));
} else {
return rumext.v2.jsx(app.main.ui.comments.comment_floating_bubble_STAR_,{'thread':thread,'zoom':zoom,'isOpen':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(thread),new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(local))},new cljs.core.Keyword(null,"seqn","seqn",406413591).cljs$core$IFn$_invoke$arity$1(thread));
}
})());

return out_arr__35152__auto__;
}),[],app.main.ui.comments.group_bubbles.cljs$core$IFn$_invoke$arity$2(zoom,threads)),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(local);
if(cljs.core.truth_(temp__5825__auto__)){
var id = temp__5825__auto__;
var temp__5825__auto____$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(threads_map,id);
if(cljs.core.truth_(temp__5825__auto____$1)){
var thread = temp__5825__auto____$1;
if(cljs.core.seq(app.main.data.comments.apply_filters(local,profile,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [thread], null)))){
return rumext.v2.jsx(app.main.ui.comments.comment_floating_thread_STAR_,{'thread':thread,'viewport':viewport,'zoom':zoom});
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})(),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"draft","draft",1421831058).cljs$core$IFn$_invoke$arity$1(local);
if(cljs.core.truth_(temp__5825__auto__)){
var draft = temp__5825__auto__;
return rumext.v2.jsx(app.main.ui.comments.comment_floating_thread_draft_STAR_,{'draft':draft,'onCancel':on_draft_cancel,'onSubmit':on_draft_submit,'viewport':viewport,'zoom':zoom});
} else {
return null;
}
})()]})})});
}));

(app.main.ui.workspace.viewport.comments.comments_layer_STAR_.displayName = "comments-layer*");


//# sourceMappingURL=app.main.ui.workspace.viewport.comments.js.map
