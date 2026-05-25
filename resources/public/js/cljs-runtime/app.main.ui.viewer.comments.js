import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.main.data.comments.js";
import "./app.main.data.event.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.comments.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.workspace.comments.js";
import "./app.main.ui.workspace.viewport.utils.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.viewer.comments');
app.main.ui.viewer.comments.comments_menu = rumext.v2.memo_SINGLEQUOTE_((function app$main$ui$viewer$comments$comments_menu(props_53247){
var state = rumext.v2.deref(app.main.refs.comments_local);
var cmode = new cljs.core.Keyword(null,"mode","mode",654403691).cljs$core$IFn$_invoke$arity$1(state);
var cshow = new cljs.core.Keyword(null,"show","show",-576705889).cljs$core$IFn$_invoke$arity$1(state);
var show_sidebar_QMARK_ = new cljs.core.Keyword(null,"show-sidebar?","show-sidebar?",-1548438810).cljs$core$IFn$_invoke$arity$2(state,false);
var show_dropdown_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var toggle_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_dropdown_QMARK_,cljs.core.not);
}));
var hide_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_dropdown_QMARK_,false);
}));
var update_mode = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var mode = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.update_filters(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mode","mode",654403691),mode], null)));
}));
var update_show = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var mode = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
var mode__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending","pending",-220036727),mode))?new cljs.core.Keyword(null,"all","all",892129742):new cljs.core.Keyword(null,"pending","pending",-220036727));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.update_filters(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show","show",-576705889),mode__$1], null)));
}));
var update_options = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var mode = cljs.core.parse_boolean(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.update_options(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-sidebar?","show-sidebar?",-1548438810),cljs.core.not(mode)], null)));
}));
return rumext.v2.jsxs("div",{'data-testid':"viewer-comments-dropdown",'onClick':toggle_dropdown,'className':"main_ui_viewer_comments__view-options",'children':[rumext.v2.jsx("span",{'className':"main_ui_viewer_comments__dropdown-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.comments")}),rumext.v2.jsx("span",{'className':"main_ui_viewer_comments__icon-dropdown",'children':app.main.ui.icons.arrow}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':cljs.core.deref(show_dropdown_QMARK_),'on-close':hide_dropdown,'children':rumext.v2.jsxs("ul",{'className':"main_ui_viewer_comments__dropdown",'children':[rumext.v2.jsxs("li",{'data-value':"all",'onClick':update_mode,'className':"main_ui_viewer_comments__dropdown-element"+" "+((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),cmode)) || ((cmode == null))))?"main_ui_viewer_comments__selected":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_viewer_comments__label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.show-all-comments")}),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),cmode)) || ((cmode == null))))?rumext.v2.jsx("span",{'className':"main_ui_viewer_comments__icon",'children':app.main.ui.icons.tick}):null)]}),rumext.v2.jsxs("li",{'data-value':"yours",'onClick':update_mode,'className':"main_ui_viewer_comments__dropdown-element"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"yours","yours",289099402),cmode))?"main_ui_viewer_comments__selected":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_viewer_comments__label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.show-your-comments")}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"yours","yours",289099402),cmode))?rumext.v2.jsx("span",{'className':"main_ui_viewer_comments__icon",'children':app.main.ui.icons.tick}):null)]}),rumext.v2.jsx("li",{'className':"main_ui_viewer_comments__separator"}),rumext.v2.jsxs("li",{'data-value':app.common.data.name(cshow),'onClick':update_show,'className':"main_ui_viewer_comments__dropdown-element"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending","pending",-220036727),cshow))?"main_ui_viewer_comments__selected":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_viewer_comments__label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.hide-resolved-comments")}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"pending","pending",-220036727),cshow))?rumext.v2.jsx("span",{'className':"main_ui_viewer_comments__icon",'children':app.main.ui.icons.tick}):null)]}),rumext.v2.jsx("li",{'className':"main_ui_viewer_comments__separator"}),rumext.v2.jsxs("li",{'data-value':""+(show_sidebar_QMARK_ ?? ""),'onClick':update_options,'className':"main_ui_viewer_comments__dropdown-element"+" "+(cljs.core.truth_(show_sidebar_QMARK_)?"main_ui_viewer_comments__selected":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_viewer_comments__label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.show-comments-list")}),(cljs.core.truth_(show_sidebar_QMARK_)?rumext.v2.jsx("span",{'className':"main_ui_viewer_comments__icon",'children':app.main.ui.icons.tick}):null)]})]})})]});
}));

(app.main.ui.viewer.comments.comments_menu.displayName = "comments-menu");

app.main.ui.viewer.comments.update_thread_position = (function app$main$ui$viewer$comments$update_thread_position(positions,p__53263){
var map__53264 = p__53263;
var map__53264__$1 = cljs.core.__destructure_map(map__53264);
var thread = map__53264__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53264__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var temp__5823__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(positions,id);
if(cljs.core.truth_(temp__5823__auto__)){
var data = temp__5823__auto__;
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(thread,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(data)),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(data));
} else {
return thread;
}
});
app.main.ui.viewer.comments.comments_layer = (function app$main$ui$viewer$comments$comments_layer(props_53268){
var zoom = props_53268.zoom;
var frame = props_53268.frame;
var file = props_53268.file;
var page = props_53268.page;
var profile = rumext.v2.deref(app.main.refs.profile);
var local = rumext.v2.deref(app.main.refs.comments_local);
var cursor = app.main.ui.workspace.viewport.utils.get_cursor(new cljs.core.Keyword(null,"comments","comments",-293346423));
var open_thread_id = new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(local);
var page_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page);
var file_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file);
var frame_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame);
var vsize = new cljs.core.Keyword(null,"viewport-size","viewport-size",-1787032748).cljs$core$IFn$_invoke$arity$1(rumext.v2.deref(app.main.refs.viewer_local));
var tpos_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(page_id)],(function (){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.in$(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages","pages",-285406513),page_id,new cljs.core.Keyword(null,"comment-thread-positions","comment-thread-positions",1712485078)], null)),app.main.refs.viewer_data);
}));
var positions = rumext.v2.deref(tpos_ref);
var threads_map = rumext.v2.deref(app.main.refs.comment_threads);
var frame_corner = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame)],(function (){
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(app.common.geom.rect.points__GT_rect(new cljs.core.Keyword(null,"points","points",-1486596883).cljs$core$IFn$_invoke$arity$1(frame)));
}));
var modifier1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame_corner)],(function (){
return app.common.geom.matrix.translate(app.common.geom.matrix.matrix.cljs$core$IFn$_invoke$arity$0(),app.common.geom.point.negate(frame_corner));
}));
var modifier2 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame_corner)],(function (){
return app.common.geom.matrix.translate_matrix.cljs$core$IFn$_invoke$arity$1(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$1(frame_corner));
}));
var threads = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(threads_map),rumext.v2.adapt(positions),rumext.v2.adapt(frame),rumext.v2.adapt(local),rumext.v2.adapt(profile)],(function (){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__53275){
var map__53276 = p__53275;
var map__53276__$1 = cljs.core.__destructure_map(map__53276);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53276__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return app.common.geom.shapes.has_point_QMARK_(frame,position);
}),app.main.data.comments.apply_filters(local,profile,cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53265_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(p1__53265_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.viewer.comments.update_thread_position,positions),cljs.core.vals(threads_map)))));
}));
var on_bubble_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(open_thread_id)],(function (p__53277){
var map__53278 = p__53277;
var map__53278__$1 = cljs.core.__destructure_map(map__53278);
var thread = map__53278__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53278__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(open_thread_id,id))?app.main.data.comments.close_thread():cljs.core.with_meta(app.main.data.comments.open_thread(thread),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"viewer"], null))));
}));
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(open_thread_id),rumext.v2.adapt(zoom),rumext.v2.adapt(page_id),rumext.v2.adapt(file_id),rumext.v2.adapt(modifier2)],(function (event){
app.util.dom.stop_propagation(event);

if((!((open_thread_id == null)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.close_thread());
} else {
var event__$1 = app.util.dom.event__GT_native_event(event);
var position = app.common.geom.point.transform(cljs.core.update.cljs$core$IFn$_invoke$arity$3(cljs.core.update.cljs$core$IFn$_invoke$arity$3(app.util.dom.get_offset_position(event__$1),new cljs.core.Keyword(null,"x","x",2099068185),(function (p1__53266_SHARP_){
return (p1__53266_SHARP_ / zoom);
})),new cljs.core.Keyword(null,"y","y",-1757859776),(function (p1__53267_SHARP_){
return (p1__53267_SHARP_ / zoom);
})),modifier2);
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"page-id","page-id",-872941168),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file)], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.create_draft(params));
}
}));
var on_draft_cancel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.close_thread());
}));
var on_draft_submit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame_id),rumext.v2.adapt(modifier2)],(function (draft){
var params = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(draft,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.comments.create_thread_on_viewer(params),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.comments.close_thread()], 0));
}));
return rumext.v2.jsx("div",{'onClick':on_click,'className':"main_ui_viewer_comments__comments-section",'children':rumext.v2.jsx("div",{'className':""+(cursor ?? "")+" "+("main_ui_viewer_comments__viewer-comments-container" ?? ""),'children':rumext.v2.jsxs("div",{'className':"main_ui_viewer_comments__threads",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,item){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.comments.comment_floating_bubble_STAR_,{'thread':item,'positionModifier':modifier1,'zoom':zoom,'onClick':on_bubble_click,'isOpen':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(local)),'origin':new cljs.core.Keyword(null,"viewer","viewer",-783949853)},new cljs.core.Keyword(null,"seqn","seqn",406413591).cljs$core$IFn$_invoke$arity$1(item)));

return out_arr__35152__auto__;
}),[],threads),(function (){var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(threads_map,open_thread_id);
if(cljs.core.truth_(temp__5825__auto__)){
var thread = temp__5825__auto__;
return rumext.v2.jsx(app.main.ui.comments.comment_floating_thread_STAR_,{'thread':thread,'positionModifier':modifier1,'viewport':new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),(0),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),(0),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vsize),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vsize)], null),'zoom':zoom});
} else {
return null;
}
})(),(function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"draft","draft",1421831058).cljs$core$IFn$_invoke$arity$1(local);
if(cljs.core.truth_(temp__5825__auto__)){
var draft = temp__5825__auto__;
return rumext.v2.jsx(app.main.ui.comments.comment_floating_thread_draft_STAR_,{'draft':draft,'positionModifier':modifier1,'onCancel':on_draft_cancel,'onSubmit':on_draft_submit,'viewport':null,'zoom':zoom});
} else {
return null;
}
})()]})})});
});

(app.main.ui.viewer.comments.comments_layer.displayName = "comments-layer");

app.main.ui.viewer.comments.comments_sidebar_STAR_ = (function app$main$ui$viewer$comments$comments_sidebar_STAR_(props_53297){
var profiles = props_53297.profiles;
var frame = props_53297.frame;
var page = props_53297.page;
var profile = rumext.v2.deref(app.main.refs.profile);
var local = rumext.v2.deref(app.main.refs.comments_local);
var threads_map = rumext.v2.deref(app.main.refs.comment_threads);
var threads = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__53300){
var map__53301 = p__53300;
var map__53301__$1 = cljs.core.__destructure_map(map__53301);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53301__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
return app.common.geom.shapes.has_point_QMARK_(frame,position);
}),app.main.data.comments.apply_filters(local,profile,cljs.core.vals(threads_map)));
return rumext.v2.jsx("aside",{'className':"main_ui_viewer_comments__comments-sidebar",'children':rumext.v2.jsx("div",{'className':"main_ui_viewer_comments__settings-bar-inside",'children':rumext.v2.jsx(app.main.ui.workspace.comments.comments_sidebar_STAR_,{'fromViewer':true,'profiles':profiles,'threads':threads,'pageId':new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page)})})});
});

(app.main.ui.viewer.comments.comments_sidebar_STAR_.displayName = "comments-sidebar*");


//# sourceMappingURL=app.main.ui.viewer.comments.js.map
