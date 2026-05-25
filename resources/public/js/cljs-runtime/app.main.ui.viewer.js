import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.exceptions.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.bounds.js";
import "./app.common.types.shape.interactions.js";
import "./app.common.types.text.js";
import "./app.main.data.comments.js";
import "./app.main.data.viewer.js";
import "./app.main.data.viewer.shortcuts.js";
import "./app.main.fonts.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.product.loader.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.modal.js";
import "./app.main.ui.viewer.comments.js";
import "./app.main.ui.viewer.header.js";
import "./app.main.ui.viewer.inspect.js";
import "./app.main.ui.viewer.interactions.js";
import "./app.main.ui.viewer.login.js";
import "./app.main.ui.viewer.share_link.js";
import "./app.main.ui.viewer.thumbnails.js";
import "./app.util.dom.js";
import "./app.util.dom.normalize_wheel.js";
import "./app.util.globals.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./app.util.object.js";
import "./app.util.webapi.js";
import "./cuerdas.core.js";
import "./goog.events.events.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.viewer');
app.main.ui.viewer.current_animations_ref = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"viewer-animations","viewer-animations",-575904375),app.main.store.state);
app.main.ui.viewer.current_overlays_ref = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"viewer-overlays","viewer-overlays",-1841198928),app.main.store.state);
/**
 * Calculate the total size we must reserve for the frame, including possible paddings
 * added because shadows or blur.
 */
app.main.ui.viewer.calculate_size = (function app$main$ui$viewer$calculate_size(objects,frame,zoom){
var map__58670 = app.common.geom.shapes.bounds.get_object_bounds.cljs$core$IFn$_invoke$arity$2(objects,frame);
var map__58670__$1 = cljs.core.__destructure_map(map__58670);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58670__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58670__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58670__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58670__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"base-width","base-width",127450703),width,new cljs.core.Keyword(null,"base-height","base-height",1012620781),height,new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"width","width",-384071477),(width * zoom),new cljs.core.Keyword(null,"height","height",1025178622),(height * zoom),new cljs.core.Keyword(null,"vbox","vbox",-492787765),""+((0) ?? "")+" "+((0) ?? "")+" "+(width ?? "")+" "+(height ?? "")], null);
});
/**
 * Calculate the displacement we need to apply so that the original selrect appears in the
 * same position as if it had no extra paddings, depending on the side the frame will
 * be snapped to.
 */
app.main.ui.viewer.calculate_delta = (function app$main$ui$viewer$calculate_delta(size,selrect,p__58671,zoom){
var vec__58672 = p__58671;
var snap_v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58672,(0),null);
var snap_h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58672,(1),null);
var delta_x = (function (){var G__58675 = snap_h;
var G__58675__$1 = (((G__58675 instanceof cljs.core.Keyword))?G__58675.fqn:null);
switch (G__58675__$1) {
case "left":
return (new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(selrect) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(size));

break;
case "right":
return (new cljs.core.Keyword(null,"x2","x2",-1362513475).cljs$core$IFn$_invoke$arity$1(selrect) - (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(size) + (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size) / zoom)));

break;
case "center":
return (((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(selrect) - (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size) / zoom)) / (2)) - (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(size) - new cljs.core.Keyword(null,"x1","x1",-1863922247).cljs$core$IFn$_invoke$arity$1(selrect)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58675__$1)].join('')));

}
})();
var delta_y = (function (){var G__58676 = snap_v;
var G__58676__$1 = (((G__58676 instanceof cljs.core.Keyword))?G__58676.fqn:null);
switch (G__58676__$1) {
case "top":
return (new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(selrect) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(size));

break;
case "bottom":
return (new cljs.core.Keyword(null,"y2","y2",-718691301).cljs$core$IFn$_invoke$arity$1(selrect) - (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(size) + (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(size) / zoom)));

break;
case "center":
return (((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selrect) - (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(size) / zoom)) / (2)) - (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(size) - new cljs.core.Keyword(null,"y1","y1",589123466).cljs$core$IFn$_invoke$arity$1(selrect)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58676__$1)].join('')));

}
})();
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((delta_x * zoom),(delta_y * zoom));
});
app.main.ui.viewer.calculate_wrapper = (function app$main$ui$viewer$calculate_wrapper(size1,size2,zoom){
if((size1 == null)){
return size2;
} else {
if((size2 == null)){
return size1;
} else {
var width = (function (){var x__5110__auto__ = new cljs.core.Keyword(null,"base-width","base-width",127450703).cljs$core$IFn$_invoke$arity$1(size1);
var y__5111__auto__ = new cljs.core.Keyword(null,"base-width","base-width",127450703).cljs$core$IFn$_invoke$arity$1(size2);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
var height = (function (){var x__5110__auto__ = new cljs.core.Keyword(null,"base-height","base-height",1012620781).cljs$core$IFn$_invoke$arity$1(size1);
var y__5111__auto__ = new cljs.core.Keyword(null,"base-height","base-height",1012620781).cljs$core$IFn$_invoke$arity$1(size2);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"width","width",-384071477),(width * zoom),new cljs.core.Keyword(null,"height","height",1025178622),(height * zoom),new cljs.core.Keyword(null,"vbox","vbox",-492787765),["0 0 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(width)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(height)].join('')], null);

}
}
});
app.main.ui.viewer.viewer_pagination = (function app$main$ui$viewer$viewer_pagination(props_58677){
var map__58681 = rumext.v2.util.wrap_props(props_58677);
var map__58681__$1 = cljs.core.__destructure_map(map__58681);
var props = map__58681__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var num_frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword(null,"num-frames","num-frames",1569426540));
var left_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword(null,"left-bar","left-bar",569281306));
var right_bar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword(null,"right-bar","right-bar",149870584));
var comment_sidebar = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58681__$1,new cljs.core.Keyword(null,"comment-sidebar","comment-sidebar",-717905737));
var go_prev_frame = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.select_prev_frame);
}));
var go_next_frame = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.select_next_frame);
}));
var go_first_frame = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.select_first_frame);
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(((index > (0)))?rumext.v2.jsx("button",{'onClick':go_prev_frame,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.previous"),'className':"main_ui_viewer__viewer-go-prev"+" "+(cljs.core.truth_(left_bar)?"main_ui_viewer__left-bar":""),'children':app.main.ui.icons.arrow}):null),((((index + (1)) < num_frames))?rumext.v2.jsx("button",{'onClick':go_next_frame,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.next"),'className':"main_ui_viewer__viewer-go-next"+" "+(cljs.core.truth_(comment_sidebar)?"main_ui_viewer__comment-sidebar":"")+" "+(cljs.core.truth_(right_bar)?"main_ui_viewer__right-bar":""),'children':app.main.ui.icons.arrow}):null),rumext.v2.jsxs("div",{'className':"main_ui_viewer__viewer-bottom"+" "+(cljs.core.truth_(left_bar)?"main_ui_viewer__left-bar":""),'children':[rumext.v2.jsx("button",{'onClick':go_first_frame,'className':"main_ui_viewer__reset-button",'children':app.main.ui.icons.reload}),rumext.v2.jsx("span",{'className':"main_ui_viewer__counter",'children':cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" / ",new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [(index + (1)),num_frames], null))}),rumext.v2.jsx("span",{})]})]});
});

(app.main.ui.viewer.viewer_pagination.displayName = "viewer-pagination");

app.main.ui.viewer.viewer_pagination_and_sidebar = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$viewer$viewer_pagination_and_sidebar(props_58682){
var map__58683 = rumext.v2.util.wrap_props(props_58682);
var map__58683__$1 = cljs.core.__destructure_map(map__58683);
var section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58683__$1,new cljs.core.Keyword(null,"section","section",-300141526));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58683__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var users = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58683__$1,new cljs.core.Keyword(null,"users","users",-713552705));
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58683__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58683__$1,new cljs.core.Keyword(null,"page","page",849072397));
var comments_local = rumext.v2.deref(app.main.refs.comments_local);
var show_sidebar_QMARK_ = (function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"comments","comments",-293346423));
if(and__5023__auto__){
return new cljs.core.Keyword(null,"show-sidebar?","show-sidebar?",-1548438810).cljs$core$IFn$_invoke$arity$1(comments_local);
} else {
return and__5023__auto__;
}
})();
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.viewer.viewer_pagination,{'index':index,'num-frames':cljs.core.count(new cljs.core.Keyword(null,"frames","frames",1765687497).cljs$core$IFn$_invoke$arity$1(page)),'comment-sidebar':show_sidebar_QMARK_}),(cljs.core.truth_(show_sidebar_QMARK_)?rumext.v2.jsx(app.main.ui.viewer.comments.comments_sidebar_STAR_,{'profiles':users,'frame':frame,'page':page}):null)]});
}));

(app.main.ui.viewer.viewer_pagination_and_sidebar.displayName = "viewer-pagination-and-sidebar");

app.main.ui.viewer.viewer_overlay = (function app$main$ui$viewer$viewer_overlay(props_58684){
var map__58685 = rumext.v2.util.wrap_props(props_58684);
var map__58685__$1 = cljs.core.__destructure_map(map__58685);
var overlay = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword(null,"overlay","overlay",-139131598));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword(null,"page","page",849072397));
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var wrapper_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword(null,"wrapper-size","wrapper-size",-1999142846));
var interactions_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58685__$1,new cljs.core.Keyword(null,"interactions-mode","interactions-mode",-1234827377));
var close_click_outside_QMARK_ = new cljs.core.Keyword(null,"close-click-outside","close-click-outside",1133482612).cljs$core$IFn$_invoke$arity$1(overlay);
var background_overlay_QMARK_ = new cljs.core.Keyword(null,"background-overlay","background-overlay",1186220424).cljs$core$IFn$_invoke$arity$1(overlay);
var overlay_frame = new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(overlay);
var overlay_position = new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(overlay);
var fixed_base_QMARK_ = new cljs.core.Keyword(null,"fixed-source?","fixed-source?",1767450450).cljs$core$IFn$_invoke$arity$1(overlay);
var size = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(page),rumext.v2.adapt(overlay),rumext.v2.adapt(zoom)],(function (){
return app.main.ui.viewer.calculate_size(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(overlay),zoom);
}));
var delta = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(size),rumext.v2.adapt(overlay_frame),rumext.v2.adapt(overlay),rumext.v2.adapt(zoom)],(function (){
return app.main.ui.viewer.calculate_delta(size,new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(overlay_frame),new cljs.core.Keyword(null,"snap-to","snap-to",922955891).cljs$core$IFn$_invoke$arity$1(overlay),zoom);
}));
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(overlay),rumext.v2.adapt(close_click_outside_QMARK_)],(function (_){
if(cljs.core.truth_(close_click_outside_QMARK_)){
var temp__5823__auto__ = new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(overlay);
if(cljs.core.truth_(temp__5823__auto__)){
var animation = temp__5823__auto__;
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.close_overlay.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(overlay),app.common.types.shape.interactions.invert_direction(animation)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.close_overlay.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(overlay)));
}
} else {
return null;
}
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_((function (){var or__5025__auto__ = close_click_outside_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return background_overlay_QMARK_;
}
})())?rumext.v2.jsx("div",{'style':{'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(wrapper_size),'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(wrapper_size),'position':"absolute",'left':(0),'top':(0)},'onClick':on_click,'className':"main_ui_viewer__viewer-overlay-background"+" "+(cljs.core.truth_(background_overlay_QMARK_)?"main_ui_viewer__visible":"")}):null),(cljs.core.truth_(fixed_base_QMARK_)?rumext.v2.jsx("div",{'style':{'position':"absolute",'left':(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(overlay_position) * zoom),'top':(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(overlay_position) * zoom),'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size),'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(size),'zIndex':(2)},'className':"main_ui_viewer__viewport-container-wrapper",'children':rumext.v2.jsx("div",{'id':""+"overlay-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(overlay_frame) ?? ""),'style':{'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size),'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(size),'position':"fixed"},'className':"main_ui_viewer__viewer-overlay main_ui_viewer__viewport-container",'children':rumext.v2.jsx(app.main.ui.viewer.interactions.viewport,{'frame':overlay_frame,'base-frame':frame,'frame-offset':overlay_position,'size':size,'delta':delta,'page':page,'interactions-mode':interactions_mode})})}):rumext.v2.jsx("div",{'id':""+"overlay-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(overlay_frame) ?? ""),'style':{'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size),'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(size),'left':(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(overlay_position) * zoom),'top':(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(overlay_position) * zoom)},'className':"main_ui_viewer__viewer-overlay main_ui_viewer__viewport-container",'children':rumext.v2.jsx(app.main.ui.viewer.interactions.viewport,{'frame':overlay_frame,'base-frame':frame,'frame-offset':overlay_position,'size':size,'delta':delta,'page':page,'interactions-mode':interactions_mode})}))]});
});

(app.main.ui.viewer.viewer_overlay.displayName = "viewer-overlay");

app.main.ui.viewer.viewer_wrapper = (function app$main$ui$viewer$viewer_wrapper(props_58686){
var users = props_58686.users;
var overlays = props_58686.overlays;
var zoom = props_58686.zoom;
var wrapper_size = (props_58686["wrapper-size"]);
var frame = props_58686.frame;
var orig_frame = (props_58686["orig-frame"]);
var index = props_58686.index;
var file = props_58686.file;
var orig_viewport_ref = (props_58686["orig-viewport-ref"]);
var section = props_58686.section;
var orig_size = (props_58686["orig-size"]);
var current_viewport_ref = (props_58686["current-viewport-ref"]);
var page = props_58686.page;
var interactions_mode = (props_58686["interactions-mode"]);
var size = props_58686.size;
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.viewer.viewer_pagination_and_sidebar,{'section':section,'index':index,'page':page,'users':users,'frame':frame,'interactions-mode':interactions_mode}),rumext.v2.jsxs("div",{'style':{'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(wrapper_size),'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(wrapper_size)},'className':"main_ui_viewer__viewer-wrapper",'children':[rumext.v2.jsxs("div",{'className':"main_ui_viewer__viewer-clipper",'children':[(cljs.core.truth_(orig_frame)?rumext.v2.jsx("div",{'ref':orig_viewport_ref,'style':{'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(orig_size),'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(orig_size),'position':"relative"},'className':"main_ui_viewer__viewport-container",'children':rumext.v2.jsx(app.main.ui.viewer.interactions.viewport,{'frame':orig_frame,'base-frame':orig_frame,'frame-offset':app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0)),'size':orig_size,'page':page,'users':users,'interactions-mode':interactions_mode})}):null),rumext.v2.jsxs("div",{'ref':current_viewport_ref,'style':{'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size),'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(size),'position':"relative"},'className':"main_ui_viewer__viewport-container",'children':[rumext.v2.jsx(app.main.ui.viewer.interactions.viewport,{'frame':frame,'base-frame':frame,'frame-offset':app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0)),'size':size,'page':page,'interactions-mode':interactions_mode}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,overlay){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.viewer.viewer_overlay,{'overlay':overlay,'page':page,'frame':frame,'zoom':zoom,'wrapper-size':wrapper_size,'interactions-mode':interactions_mode},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(overlay) ?? "")));

return out_arr__35152__auto__;
}),[],overlays)]})]}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"comments","comments",-293346423)))?rumext.v2.jsx(app.main.ui.viewer.comments.comments_layer,{'file':file,'users':users,'frame':frame,'page':page,'zoom':zoom}):null)]})]});
});

(app.main.ui.viewer.viewer_wrapper.displayName = "viewer-wrapper");

app.main.ui.viewer.viewer_content_STAR_ = (function app$main$ui$viewer$viewer_content_STAR_(props_58692){
var data = props_58692.data;
var index = props_58692.index;
var section = props_58692.section;
var interactions_mode = props_58692.interactionsMode;
var page_id = props_58692.pageId;
var share = props_58692.share;
var share_id = props_58692.shareId;
var map__58693 = data;
var map__58693__$1 = cljs.core.__destructure_map(map__58693);
var file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var users = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword(null,"users","users",-713552705));
var project = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58693__$1,new cljs.core.Keyword(null,"permissions","permissions",67803075));
var allowed = (function (){var or__5025__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"interactions","interactions",550841811));
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = (function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"comments","comments",-293346423));
if(and__5023__auto__){
var or__5025__auto____$1 = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(permissions);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return ((new cljs.core.Keyword(null,"is-logged","is-logged",702589853).cljs$core$IFn$_invoke$arity$1(permissions) === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"who-comment","who-comment",-313192010).cljs$core$IFn$_invoke$arity$1(permissions),"all")));
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"inspect","inspect",688794057));
if(and__5023__auto__){
var or__5025__auto____$2 = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(permissions);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return ((new cljs.core.Keyword(null,"is-logged","is-logged",702589853).cljs$core$IFn$_invoke$arity$1(permissions) === true) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"who-inspect","who-inspect",525863768).cljs$core$IFn$_invoke$arity$1(permissions),"all")));
}
} else {
return and__5023__auto__;
}
}
}
})();
var local = rumext.v2.deref(app.main.refs.viewer_local);
var nav_scroll = new cljs.core.Keyword(null,"nav-scroll","nav-scroll",1125136089).cljs$core$IFn$_invoke$arity$1(local);
var orig_viewport_ref = rumext.v2.use_ref(null);
var current_viewport_ref = rumext.v2.use_ref(null);
var viewer_section_ref = rumext.v2.use_ref(null);
var current_animations = rumext.v2.deref(app.main.ui.viewer.current_animations_ref);
var page_id__$1 = (function (){var or__5025__auto__ = page_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.first(new cljs.core.Keyword(null,"pages","pages",-285406513).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(file)));
}
})();
var page = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(data),rumext.v2.adapt(page_id__$1)],(function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages","pages",-285406513),page_id__$1], null));
}));
var text_shapes = app.main.ui.hooks.use_equal_memo(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.text_shape_QMARK_,cljs.core.vals(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page))));
var zoom = new cljs.core.Keyword(null,"zoom","zoom",-1827487038).cljs$core$IFn$_invoke$arity$1(local);
var zoom_type = new cljs.core.Keyword(null,"zoom-type","zoom-type",-1936775769).cljs$core$IFn$_invoke$arity$1(local);
var frames = new cljs.core.Keyword(null,"frames","frames",1765687497).cljs$core$IFn$_invoke$arity$1(page);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frames,index);
var fullscreen_QMARK_ = rumext.v2.deref(app.main.ui.viewer.header.fullscreen_ref);
var overlays = rumext.v2.deref(app.main.ui.viewer.current_overlays_ref);
var orig_frame = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_animations)],(function (){
var animation_with_origin = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"orig-frame-id","orig-frame-id",525378580),cljs.core.vals(current_animations));
if(cljs.core.truth_(animation_with_origin)){
return app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__58687_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__58687_SHARP_),new cljs.core.Keyword(null,"orig-frame-id","orig-frame-id",525378580).cljs$core$IFn$_invoke$arity$1(animation_with_origin));
}),frames);
} else {
return null;
}
}));
var size = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame),rumext.v2.adapt(zoom)],(function (){
if(cljs.core.truth_(frame)){
return app.main.ui.viewer.calculate_size(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),frame,zoom);
} else {
return null;
}
}));
var orig_size = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(orig_frame),rumext.v2.adapt(zoom)],(function (){
if(cljs.core.truth_(orig_frame)){
return app.main.ui.viewer.calculate_size(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),orig_frame,zoom);
} else {
return null;
}
}));
var wrapper_size = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(size),rumext.v2.adapt(orig_size),rumext.v2.adapt(zoom)],(function (){
return app.main.ui.viewer.calculate_wrapper(size,orig_size,zoom);
}));
var click_on_screen = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var origin = app.util.dom.get_target(event);
var over_section_QMARK_ = app.util.dom.get_data(origin,"viewer-section");
var layout = app.util.dom.get_element("viewer-layout");
var has_force_QMARK_ = app.util.dom.get_data(layout,"force-visible");
if(cljs.core.truth_(over_section_QMARK_)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(has_force_QMARK_,"true")){
return app.util.dom.set_data_BANG_(layout,"force-visible",false);
} else {
return app.util.dom.set_data_BANG_(layout,"force-visible",true);
}
} else {
return null;
}
}));
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(section)],(function (_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"comments","comments",-293346423))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.close_thread());
} else {
return null;
}
}));
var set_up_new_size = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
var viewer_section = app.util.dom.get_element("viewer-section");
var size__$1 = app.util.dom.get_client_size(viewer_section);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.set_viewport_size(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"size","size",1098693007),size__$1], null)));
}));
var on_wheel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var event__$1 = event.getBrowserEvent();
var wrapper = app.util.dom.get_element("inspect-svg-wrapper");
var section__$1 = app.util.dom.get_element("inspect-svg-container");
var target = event__$1.target;
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.dom.child_QMARK_(target,wrapper);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.dom.id_QMARK_(target,"inspect-svg-container");
}
})())){
var norm_event = app.util.dom.normalize_wheel.normalize_wheel(event__$1);
var mod_QMARK_ = app.util.keyboard.mod_QMARK_(event__$1);
var shift_QMARK_ = app.util.keyboard.shift_QMARK_(event__$1);
var delta = norm_event.pixelY;
var scroll_pos = ((shift_QMARK_)?app.util.dom.get_h_scroll_pos(section__$1):app.util.dom.get_scroll_pos(section__$1));
var new_scroll_pos = (scroll_pos + delta);
if(mod_QMARK_){
return null;
} else {
app.util.dom.prevent_default(event__$1);

app.util.dom.stop_propagation(event__$1);

if(shift_QMARK_){
return app.util.dom.set_h_scroll_pos_BANG_(section__$1,new_scroll_pos);
} else {
return app.util.dom.set_scroll_pos_BANG_(section__$1,new_scroll_pos);
}
}
} else {
return null;
}
}));
var on_thumbnails_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.close_thumbnails_panel);
}));
var on_exit_fullscreen = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
if((!(app.util.dom.fullscreen_QMARK_()))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.exit_fullscreen());
} else {
return null;
}
}));
app.main.ui.hooks.use_shortcuts(new cljs.core.Keyword("app.main.ui.viewer","viewer","app.main.ui.viewer/viewer",-223008833),app.main.data.viewer.shortcuts.shortcuts);

if((page == null)){
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3("not-found",cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"not-found","not-found",-629079980)], null),null], 0)),null);
} else {
}

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
if(cljs.core.not(allowed)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.go_to_section(new cljs.core.Keyword(null,"interactions","interactions",550841811)));
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file))],(function (){
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file);
return app.util.dom.set_html_title(["\u25B6 ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("title.viewer",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0)))].join(''));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var events = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [goog.events.listen(app.util.globals.window,"click",on_click),goog.events.listen(rumext.v2.ref_val(viewer_section_ref),"wheel",on_wheel,({"passive": false}))], null);
var seq__58698_58770 = cljs.core.seq(app.util.dom.fullscreen_events);
var chunk__58699_58771 = null;
var count__58700_58772 = (0);
var i__58701_58773 = (0);
while(true){
if((i__58701_58773 < count__58700_58772)){
var event_58774 = chunk__58699_58771.cljs$core$IIndexed$_nth$arity$2(null,i__58701_58773);
app.util.globals.document.addEventListener(event_58774,on_exit_fullscreen,false);


var G__58775 = seq__58698_58770;
var G__58776 = chunk__58699_58771;
var G__58777 = count__58700_58772;
var G__58778 = (i__58701_58773 + (1));
seq__58698_58770 = G__58775;
chunk__58699_58771 = G__58776;
count__58700_58772 = G__58777;
i__58701_58773 = G__58778;
continue;
} else {
var temp__5825__auto___58779 = cljs.core.seq(seq__58698_58770);
if(temp__5825__auto___58779){
var seq__58698_58780__$1 = temp__5825__auto___58779;
if(cljs.core.chunked_seq_QMARK_(seq__58698_58780__$1)){
var c__5548__auto___58781 = cljs.core.chunk_first(seq__58698_58780__$1);
var G__58782 = cljs.core.chunk_rest(seq__58698_58780__$1);
var G__58783 = c__5548__auto___58781;
var G__58784 = cljs.core.count(c__5548__auto___58781);
var G__58785 = (0);
seq__58698_58770 = G__58782;
chunk__58699_58771 = G__58783;
count__58700_58772 = G__58784;
i__58701_58773 = G__58785;
continue;
} else {
var event_58786 = cljs.core.first(seq__58698_58780__$1);
app.util.globals.document.addEventListener(event_58786,on_exit_fullscreen,false);


var G__58787 = cljs.core.next(seq__58698_58780__$1);
var G__58788 = null;
var G__58789 = (0);
var G__58790 = (0);
seq__58698_58770 = G__58787;
chunk__58699_58771 = G__58788;
count__58700_58772 = G__58789;
i__58701_58773 = G__58790;
continue;
}
} else {
}
}
break;
}

return (function (){
var seq__58702_58791 = cljs.core.seq(events);
var chunk__58703_58792 = null;
var count__58704_58793 = (0);
var i__58705_58794 = (0);
while(true){
if((i__58705_58794 < count__58704_58793)){
var key_58795 = chunk__58703_58792.cljs$core$IIndexed$_nth$arity$2(null,i__58705_58794);
goog.events.unlistenByKey(key_58795);


var G__58796 = seq__58702_58791;
var G__58797 = chunk__58703_58792;
var G__58798 = count__58704_58793;
var G__58799 = (i__58705_58794 + (1));
seq__58702_58791 = G__58796;
chunk__58703_58792 = G__58797;
count__58704_58793 = G__58798;
i__58705_58794 = G__58799;
continue;
} else {
var temp__5825__auto___58800 = cljs.core.seq(seq__58702_58791);
if(temp__5825__auto___58800){
var seq__58702_58801__$1 = temp__5825__auto___58800;
if(cljs.core.chunked_seq_QMARK_(seq__58702_58801__$1)){
var c__5548__auto___58802 = cljs.core.chunk_first(seq__58702_58801__$1);
var G__58803 = cljs.core.chunk_rest(seq__58702_58801__$1);
var G__58804 = c__5548__auto___58802;
var G__58805 = cljs.core.count(c__5548__auto___58802);
var G__58806 = (0);
seq__58702_58791 = G__58803;
chunk__58703_58792 = G__58804;
count__58704_58793 = G__58805;
i__58705_58794 = G__58806;
continue;
} else {
var key_58807 = cljs.core.first(seq__58702_58801__$1);
goog.events.unlistenByKey(key_58807);


var G__58808 = cljs.core.next(seq__58702_58801__$1);
var G__58809 = null;
var G__58810 = (0);
var G__58811 = (0);
seq__58702_58791 = G__58808;
chunk__58703_58792 = G__58809;
count__58704_58793 = G__58810;
i__58705_58794 = G__58811;
continue;
}
} else {
}
}
break;
}

var seq__58707 = cljs.core.seq(app.util.dom.fullscreen_events);
var chunk__58708 = null;
var count__58709 = (0);
var i__58710 = (0);
while(true){
if((i__58710 < count__58709)){
var event = chunk__58708.cljs$core$IIndexed$_nth$arity$2(null,i__58710);
app.util.globals.document.removeEventListener(event,on_exit_fullscreen);


var G__58812 = seq__58707;
var G__58813 = chunk__58708;
var G__58814 = count__58709;
var G__58815 = (i__58710 + (1));
seq__58707 = G__58812;
chunk__58708 = G__58813;
count__58709 = G__58814;
i__58710 = G__58815;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__58707);
if(temp__5825__auto__){
var seq__58707__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58707__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__58707__$1);
var G__58816 = cljs.core.chunk_rest(seq__58707__$1);
var G__58817 = c__5548__auto__;
var G__58818 = cljs.core.count(c__5548__auto__);
var G__58819 = (0);
seq__58707 = G__58816;
chunk__58708 = G__58817;
count__58709 = G__58818;
i__58710 = G__58819;
continue;
} else {
var event = cljs.core.first(seq__58707__$1);
app.util.globals.document.removeEventListener(event,on_exit_fullscreen);


var G__58820 = cljs.core.next(seq__58707__$1);
var G__58821 = null;
var G__58822 = (0);
var G__58823 = (0);
seq__58707 = G__58820;
chunk__58708 = G__58821;
count__58709 = G__58822;
i__58710 = G__58823;
continue;
}
} else {
return null;
}
}
break;
}
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
(set_up_new_size.cljs$core$IFn$_invoke$arity$0 ? set_up_new_size.cljs$core$IFn$_invoke$arity$0() : set_up_new_size.call(null));

window.addEventListener("resize",set_up_new_size);

return (function (){
return window.removeEventListener("resize",set_up_new_size);
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(nav_scroll)],(function (){
if(typeof nav_scroll === 'number'){
var viewer_section = app.util.dom.get_element("viewer-section");
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.reset_nav_scroll());

return app.util.dom.set_scroll_pos_BANG_(viewer_section,nav_scroll);
} else {
return null;
}
}));

rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(fullscreen_QMARK_)],(function (){
var wrapper = app.util.dom.get_element("viewer-layout");
var fullscreen_dom_QMARK_ = app.util.dom.fullscreen_QMARK_();
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(fullscreen_QMARK_,fullscreen_dom_QMARK_)){
if(cljs.core.truth_(fullscreen_QMARK_)){
var layout = app.util.dom.get_element("viewer-layout");
app.util.dom.set_data_BANG_(layout,"force-visible",false);

return app.util.webapi.request_fullscreen(wrapper);
} else {
return app.util.webapi.exit_fullscreen();
}
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(zoom_type)],(function (){
var G__58713 = zoom_type;
var G__58713__$1 = (((G__58713 instanceof cljs.core.Keyword))?G__58713.fqn:null);
switch (G__58713__$1) {
case "fit":
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.zoom_to_fit);

break;
case "fill":
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.zoom_to_fill);

break;
default:
return null;

}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(current_animations),rumext.v2.adapt(zoom_type)],(function (){
var G__58714_58825 = zoom_type;
var G__58714_58826__$1 = (((G__58714_58825 instanceof cljs.core.Keyword))?G__58714_58825.fqn:null);
switch (G__58714_58826__$1) {
case "fit":
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.zoom_to_fit);

break;
case "fill":
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.zoom_to_fill);

break;
default:

}

var nav_animation = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__58688_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(p1__58688_SHARP_),new cljs.core.Keyword(null,"go-to-frame","go-to-frame",466960655));
}),cljs.core.vals(current_animations));
if(cljs.core.truth_(nav_animation)){
var orig_viewport = rumext.v2.ref_val(orig_viewport_ref);
var current_viewport = rumext.v2.ref_val(current_viewport_ref);
return app.main.ui.viewer.interactions.animate_go_to_frame(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(nav_animation),current_viewport,orig_viewport,size,orig_size,wrapper_size);
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_animations)],(function (){
if(cljs.core.truth_(current_animations)){
var seq__58715 = cljs.core.seq(current_animations);
var chunk__58716 = null;
var count__58717 = (0);
var i__58718 = (0);
while(true){
if((i__58718 < count__58717)){
var vec__58728 = chunk__58716.cljs$core$IIndexed$_nth$arity$2(null,i__58718);
var overlay_frame_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58728,(0),null);
var animation_vals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58728,(1),null);
var overlay_viewport_58828 = app.util.dom.get_element(["overlay-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"overlay-id","overlay-id",-1525970518).cljs$core$IFn$_invoke$arity$1(animation_vals))].join(''));
var overlay_58829 = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(((function (seq__58715,chunk__58716,count__58717,i__58718,overlay_viewport_58828,vec__58728,overlay_frame_id,animation_vals,map__58693,map__58693__$1,file,users,project,permissions,allowed,local,nav_scroll,orig_viewport_ref,current_viewport_ref,viewer_section_ref,current_animations,page_id__$1,page,text_shapes,zoom,zoom_type,frames,frame,fullscreen_QMARK_,overlays,orig_frame,size,orig_size,wrapper_size,click_on_screen,on_click,set_up_new_size,on_wheel,on_thumbnails_close,on_exit_fullscreen,data,index,section,interactions_mode,page_id,share,share_id){
return (function (p1__58689_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(p1__58689_SHARP_)),overlay_frame_id);
});})(seq__58715,chunk__58716,count__58717,i__58718,overlay_viewport_58828,vec__58728,overlay_frame_id,animation_vals,map__58693,map__58693__$1,file,users,project,permissions,allowed,local,nav_scroll,orig_viewport_ref,current_viewport_ref,viewer_section_ref,current_animations,page_id__$1,page,text_shapes,zoom,zoom_type,frames,frame,fullscreen_QMARK_,overlays,orig_frame,size,orig_size,wrapper_size,click_on_screen,on_click,set_up_new_size,on_wheel,on_thumbnails_close,on_exit_fullscreen,data,index,section,interactions_mode,page_id,share,share_id))
,overlays);
var overlay_size_58830 = app.main.ui.viewer.calculate_size(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(overlay_58829),zoom);
var overlay_position_58831 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(overlay_58829)) * zoom),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(overlay_58829)) * zoom)], null);
var orig_frame_58832__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"orig-frame-id","orig-frame-id",525378580).cljs$core$IFn$_invoke$arity$1(animation_vals))?app.common.data.seek.cljs$core$IFn$_invoke$arity$2(((function (seq__58715,chunk__58716,count__58717,i__58718,overlay_viewport_58828,overlay_58829,overlay_size_58830,overlay_position_58831,vec__58728,overlay_frame_id,animation_vals,map__58693,map__58693__$1,file,users,project,permissions,allowed,local,nav_scroll,orig_viewport_ref,current_viewport_ref,viewer_section_ref,current_animations,page_id__$1,page,text_shapes,zoom,zoom_type,frames,frame,fullscreen_QMARK_,overlays,orig_frame,size,orig_size,wrapper_size,click_on_screen,on_click,set_up_new_size,on_wheel,on_thumbnails_close,on_exit_fullscreen,data,index,section,interactions_mode,page_id,share,share_id){
return (function (p1__58690_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__58690_SHARP_),new cljs.core.Keyword(null,"orig-frame-id","orig-frame-id",525378580).cljs$core$IFn$_invoke$arity$1(animation_vals));
});})(seq__58715,chunk__58716,count__58717,i__58718,overlay_viewport_58828,overlay_58829,overlay_size_58830,overlay_position_58831,vec__58728,overlay_frame_id,animation_vals,map__58693,map__58693__$1,file,users,project,permissions,allowed,local,nav_scroll,orig_viewport_ref,current_viewport_ref,viewer_section_ref,current_animations,page_id__$1,page,text_shapes,zoom,zoom_type,frames,frame,fullscreen_QMARK_,overlays,orig_frame,size,orig_size,wrapper_size,click_on_screen,on_click,set_up_new_size,on_wheel,on_thumbnails_close,on_exit_fullscreen,data,index,section,interactions_mode,page_id,share,share_id))
,frames):null);
var size_58833__$1 = app.main.ui.viewer.calculate_size(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),frame,zoom);
var orig_size_58834__$1 = (cljs.core.truth_(orig_frame_58832__$1)?app.main.ui.viewer.calculate_size(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),orig_frame_58832__$1,zoom):null);
var wrapper_size_58835__$1 = app.main.ui.viewer.calculate_wrapper(size_58833__$1,orig_size_58834__$1,zoom);
var G__58732_58836 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(animation_vals);
var G__58732_58837__$1 = (((G__58732_58836 instanceof cljs.core.Keyword))?G__58732_58836.fqn:null);
switch (G__58732_58837__$1) {
case "open-overlay":
app.main.ui.viewer.interactions.animate_open_overlay(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(animation_vals),overlay_viewport_58828,wrapper_size_58835__$1,overlay_size_58830,overlay_position_58831);

break;
case "close-overlay":
app.main.ui.viewer.interactions.animate_close_overlay(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(animation_vals),overlay_viewport_58828,wrapper_size_58835__$1,overlay_size_58830,overlay_position_58831,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(overlay_58829)));

break;
default:

}


var G__58839 = seq__58715;
var G__58840 = chunk__58716;
var G__58841 = count__58717;
var G__58842 = (i__58718 + (1));
seq__58715 = G__58839;
chunk__58716 = G__58840;
count__58717 = G__58841;
i__58718 = G__58842;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__58715);
if(temp__5825__auto__){
var seq__58715__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__58715__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__58715__$1);
var G__58843 = cljs.core.chunk_rest(seq__58715__$1);
var G__58844 = c__5548__auto__;
var G__58845 = cljs.core.count(c__5548__auto__);
var G__58846 = (0);
seq__58715 = G__58843;
chunk__58716 = G__58844;
count__58717 = G__58845;
i__58718 = G__58846;
continue;
} else {
var vec__58733 = cljs.core.first(seq__58715__$1);
var overlay_frame_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58733,(0),null);
var animation_vals = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58733,(1),null);
var overlay_viewport_58847 = app.util.dom.get_element(["overlay-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"overlay-id","overlay-id",-1525970518).cljs$core$IFn$_invoke$arity$1(animation_vals))].join(''));
var overlay_58848 = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(((function (seq__58715,chunk__58716,count__58717,i__58718,overlay_viewport_58847,vec__58733,overlay_frame_id,animation_vals,seq__58715__$1,temp__5825__auto__,map__58693,map__58693__$1,file,users,project,permissions,allowed,local,nav_scroll,orig_viewport_ref,current_viewport_ref,viewer_section_ref,current_animations,page_id__$1,page,text_shapes,zoom,zoom_type,frames,frame,fullscreen_QMARK_,overlays,orig_frame,size,orig_size,wrapper_size,click_on_screen,on_click,set_up_new_size,on_wheel,on_thumbnails_close,on_exit_fullscreen,data,index,section,interactions_mode,page_id,share,share_id){
return (function (p1__58689_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(p1__58689_SHARP_)),overlay_frame_id);
});})(seq__58715,chunk__58716,count__58717,i__58718,overlay_viewport_58847,vec__58733,overlay_frame_id,animation_vals,seq__58715__$1,temp__5825__auto__,map__58693,map__58693__$1,file,users,project,permissions,allowed,local,nav_scroll,orig_viewport_ref,current_viewport_ref,viewer_section_ref,current_animations,page_id__$1,page,text_shapes,zoom,zoom_type,frames,frame,fullscreen_QMARK_,overlays,orig_frame,size,orig_size,wrapper_size,click_on_screen,on_click,set_up_new_size,on_wheel,on_thumbnails_close,on_exit_fullscreen,data,index,section,interactions_mode,page_id,share,share_id))
,overlays);
var overlay_size_58849 = app.main.ui.viewer.calculate_size(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(overlay_58848),zoom);
var overlay_position_58850 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(overlay_58848)) * zoom),new cljs.core.Keyword(null,"y","y",-1757859776),(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"position","position",-2011731912).cljs$core$IFn$_invoke$arity$1(overlay_58848)) * zoom)], null);
var orig_frame_58851__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"orig-frame-id","orig-frame-id",525378580).cljs$core$IFn$_invoke$arity$1(animation_vals))?app.common.data.seek.cljs$core$IFn$_invoke$arity$2(((function (seq__58715,chunk__58716,count__58717,i__58718,overlay_viewport_58847,overlay_58848,overlay_size_58849,overlay_position_58850,vec__58733,overlay_frame_id,animation_vals,seq__58715__$1,temp__5825__auto__,map__58693,map__58693__$1,file,users,project,permissions,allowed,local,nav_scroll,orig_viewport_ref,current_viewport_ref,viewer_section_ref,current_animations,page_id__$1,page,text_shapes,zoom,zoom_type,frames,frame,fullscreen_QMARK_,overlays,orig_frame,size,orig_size,wrapper_size,click_on_screen,on_click,set_up_new_size,on_wheel,on_thumbnails_close,on_exit_fullscreen,data,index,section,interactions_mode,page_id,share,share_id){
return (function (p1__58690_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__58690_SHARP_),new cljs.core.Keyword(null,"orig-frame-id","orig-frame-id",525378580).cljs$core$IFn$_invoke$arity$1(animation_vals));
});})(seq__58715,chunk__58716,count__58717,i__58718,overlay_viewport_58847,overlay_58848,overlay_size_58849,overlay_position_58850,vec__58733,overlay_frame_id,animation_vals,seq__58715__$1,temp__5825__auto__,map__58693,map__58693__$1,file,users,project,permissions,allowed,local,nav_scroll,orig_viewport_ref,current_viewport_ref,viewer_section_ref,current_animations,page_id__$1,page,text_shapes,zoom,zoom_type,frames,frame,fullscreen_QMARK_,overlays,orig_frame,size,orig_size,wrapper_size,click_on_screen,on_click,set_up_new_size,on_wheel,on_thumbnails_close,on_exit_fullscreen,data,index,section,interactions_mode,page_id,share,share_id))
,frames):null);
var size_58852__$1 = app.main.ui.viewer.calculate_size(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),frame,zoom);
var orig_size_58853__$1 = (cljs.core.truth_(orig_frame_58851__$1)?app.main.ui.viewer.calculate_size(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page),orig_frame_58851__$1,zoom):null);
var wrapper_size_58854__$1 = app.main.ui.viewer.calculate_wrapper(size_58852__$1,orig_size_58853__$1,zoom);
var G__58737_58855 = new cljs.core.Keyword(null,"kind","kind",-717265803).cljs$core$IFn$_invoke$arity$1(animation_vals);
var G__58737_58856__$1 = (((G__58737_58855 instanceof cljs.core.Keyword))?G__58737_58855.fqn:null);
switch (G__58737_58856__$1) {
case "open-overlay":
app.main.ui.viewer.interactions.animate_open_overlay(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(animation_vals),overlay_viewport_58847,wrapper_size_58854__$1,overlay_size_58849,overlay_position_58850);

break;
case "close-overlay":
app.main.ui.viewer.interactions.animate_close_overlay(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(animation_vals),overlay_viewport_58847,wrapper_size_58854__$1,overlay_size_58849,overlay_position_58850,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame","frame",-1711082588).cljs$core$IFn$_invoke$arity$1(overlay_58848)));

break;
default:

}


var G__58858 = cljs.core.next(seq__58715__$1);
var G__58859 = null;
var G__58860 = (0);
var G__58861 = (0);
seq__58715 = G__58858;
chunk__58716 = G__58859;
count__58717 = G__58860;
i__58718 = G__58861;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(text_shapes)],(function (){
var text_nodes = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__58691_SHARP_){
return app.common.types.text.node_seq.cljs$core$IFn$_invoke$arity$2(app.common.types.text.is_text_node_QMARK_,new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(p1__58691_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([text_shapes], 0));
var fonts = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"font-id","font-id",-390084123)),text_nodes);
return cljs.core.run_BANG_(app.main.fonts.ensure_loaded_BANG_,fonts);
}));

return rumext.v2.jsxs("div",{'id':"viewer-layout",'data-fullscreen':fullscreen_QMARK_,'data-force-visible':new cljs.core.Keyword(null,"show-thumbnails","show-thumbnails",405341805).cljs$core$IFn$_invoke$arity$1(local),'className':(cljs.core.truth_(new cljs.core.Keyword(null,"show-thumbnails","show-thumbnails",405341805).cljs$core$IFn$_invoke$arity$1(local))?"main_ui_viewer__force-visible":"")+" "+((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"inspect","inspect",688794057)))?"main_ui_viewer__viewer-layout":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"inspect","inspect",688794057)))?"main_ui_viewer__inspect-layout":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_viewer__viewer-content",'children':[rumext.v2.jsx("button",{'onClick':on_thumbnails_close,'className':"main_ui_viewer__thumbnails-close"+" "+((cljs.core.not(new cljs.core.Keyword(null,"show-thumbnails","show-thumbnails",405341805).cljs$core$IFn$_invoke$arity$2(local,false)))?"main_ui_viewer__invisible":"")}),rumext.v2.jsx(app.main.ui.viewer.thumbnails.thumbnails_panel,{'frames':frames,'show?':new cljs.core.Keyword(null,"show-thumbnails","show-thumbnails",405341805).cljs$core$IFn$_invoke$arity$2(local,false),'page':page,'index':index,'thumbnail-data':new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572).cljs$core$IFn$_invoke$arity$1(file)}),rumext.v2.jsx("section",{'id':"viewer-section",'ref':viewer_section_ref,'data-viewer-section':true,'onClick':click_on_screen,'className':"main_ui_viewer__viewer-section"+" "+(cljs.core.truth_(fullscreen_QMARK_)?"main_ui_viewer__fullscreen":""),'children':((cljs.core.empty_QMARK_(frames))?rumext.v2.jsx("section",{'className':"main_ui_viewer__empty-state",'children':rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("viewer.empty-state")})}):(((frame == null))?rumext.v2.jsx("section",{'className':"main_ui_viewer__empty-state",'children':(((!((index == null))))?rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("viewer.frame-not-found")}):null)}):(((!((frame == null))))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"inspect","inspect",688794057),section))?rumext.v2.jsx(app.main.ui.viewer.inspect.viewport,{'viewer-pagination':app.main.ui.viewer.viewer_pagination,'frame':frame,'index':index,'section':section,'file':file,'page':page,'size':size,'interactions-mode':interactions_mode,'share-id':share_id,'local':local}):rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.current_zoom),{'value':zoom,'children':rumext.v2.jsx(app.main.ui.viewer.viewer_wrapper,{'overlays':overlays,'wrapper-size':wrapper_size,'zoom':zoom,'orig-frame':orig_frame,'frame':frame,'index':index,'section':section,'file':file,'orig-viewport-ref':orig_viewport_ref,'orig-size':orig_size,'current-viewport-ref':current_viewport_ref,'page':page,'size':size,'interactions-mode':interactions_mode,'users':users})})):null)))})]}),rumext.v2.jsx(app.main.ui.viewer.header.header,{'zoom':zoom,'permissions':permissions,'frame':frame,'index':index,'section':section,'file':file,'shown-thumbnails':new cljs.core.Keyword(null,"show-thumbnails","show-thumbnails",405341805).cljs$core$IFn$_invoke$arity$1(local),'page':page,'interactions-mode':interactions_mode,'project':project,'share':share})]});
});

(app.main.ui.viewer.viewer_content_STAR_.displayName = "viewer-content*");

app.main.ui.viewer.viewer_STAR_ = (function app$main$ui$viewer$viewer_STAR_(props_58745){
var file_id = props_58745.fileId;
var page_id = props_58745.pageId;
var share_id = props_58745.shareId;
var props = props_58745;
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(page_id),rumext.v2.adapt(share_id)],(function (){
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"share-id","share-id",795821204),share_id], null);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.initialize(params));

return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.finalize(params));
});
}));

var temp__5823__auto__ = rumext.v2.deref(app.main.refs.viewer_data);
if(cljs.core.truth_(temp__5823__auto__)){
var data = temp__5823__auto__;
var props__$1 = app.util.object.merge.cljs$core$IFn$_invoke$arity$2(props,({"data": data, "key": ""+(file_id ?? "")}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.modal.modal_container_STAR_,{}),rumext.v2.create_element(app.main.ui.viewer.viewer_content_STAR_,props__$1)]});
} else {
return rumext.v2.jsx(app.main.ui.ds.product.loader.loader_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.loading"),'overlay':true});
}
});

(app.main.ui.viewer.viewer_STAR_.displayName = "viewer*");

app.main.ui.viewer.viewer_page_STAR_ = (function app$main$ui$viewer$viewer_page_STAR_(props_58747){
var props = props_58747;
return rumext.v2.create_element(app.main.ui.viewer.viewer_STAR_,props);
});

(app.main.ui.viewer.viewer_page_STAR_.displayName = "viewer-page*");


//# sourceMappingURL=app.main.ui.viewer.js.map
