import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.shapes.js";
import "./app.main.data.viewer.js";
import "./app.main.render.js";
import "./app.main.store.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.object.js";
import "./app.util.timers.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.viewer.thumbnails');
app.main.ui.viewer.thumbnails.thumbnails_content = (function app$main$ui$viewer$thumbnails$thumbnails_content(props_58656){
var map__58657 = rumext.v2.util.wrap_props(props_58656);
var map__58657__$1 = cljs.core.__destructure_map(map__58657);
var props = map__58657__$1;
var children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58657__$1,new cljs.core.Keyword(null,"children","children",-940561982));
var expanded_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58657__$1,new cljs.core.Keyword(null,"expanded?","expanded?",2055832296));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58657__$1,new cljs.core.Keyword(null,"total","total",1916810418));
var container = rumext.v2.use_ref();
var width = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(document.documentElement.clientWidth);
var element_width = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1((152));
var offset = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((0));
var on_left_arrow_click = (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(offset,(function (v){
if((v > (0))){
return (v - (1));
} else {
return v;
}
}));
});
var on_right_arrow_click = (function (_){
var visible = (cljs.core.deref(width) / cljs.core.deref(element_width));
var max_val = (total - visible);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(offset,(function (v){
if((v < max_val)){
return (v + (1));
} else {
return v;
}
}));
});
var on_scroll = (function (event){
var event__$1 = app.util.dom.event__GT_native_event(event);
if((event__$1.deltaY > (0))){
return on_right_arrow_click(event__$1);
} else {
return on_left_arrow_click(event__$1);
}
});
var on_mount = (function (){
var dom = rumext.v2.ref_val(container);
return cljs.core.reset_BANG_(width,app.util.object.get.cljs$core$IFn$_invoke$arity$2(dom,"clientWidth"));
});
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1(on_mount);

if(cljs.core.truth_(expanded_QMARK_)){
return rumext.v2.jsx("div",{'className':"main_ui_viewer_thumbnails__thumbnails-content",'children':rumext.v2.jsx("div",{'className':"main_ui_viewer_thumbnails__thumbnails-list-expanded",'children':children})});
} else {
return rumext.v2.jsxs("div",{'className':"main_ui_viewer_thumbnails__thumbnails-content",'children':[rumext.v2.jsx("button",{'onClick':on_left_arrow_click,'className':"main_ui_viewer_thumbnails__left-scroll-handler",'children':app.main.ui.icons.arrow}),rumext.v2.jsx("button",{'onClick':on_right_arrow_click,'className':"main_ui_viewer_thumbnails__right-scroll-handler",'children':app.main.ui.icons.arrow}),rumext.v2.jsx("div",{'ref':container,'onWheel':on_scroll,'className':"main_ui_viewer_thumbnails__thumbnails-list",'children':rumext.v2.jsx("div",{'style':{'right':[cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.deref(offset) * (152))),"px"].join('')},'className':"main_ui_viewer_thumbnails__thumbnails-list-inside",'children':children})})]});
}
});

(app.main.ui.viewer.thumbnails.thumbnails_content.displayName = "thumbnails-content");

app.main.ui.viewer.thumbnails.thumbnails_summary = (function app$main$ui$viewer$thumbnails$thumbnails_summary(props_58658){
var map__58659 = rumext.v2.util.wrap_props(props_58658);
var map__58659__$1 = cljs.core.__destructure_map(map__58659);
var props = map__58659__$1;
var on_toggle_expand = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58659__$1,new cljs.core.Keyword(null,"on-toggle-expand","on-toggle-expand",227315372));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58659__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58659__$1,new cljs.core.Keyword(null,"total","total",1916810418));
return rumext.v2.jsxs("div",{'className':"main_ui_viewer_thumbnails__thumbnails-summary",'children':[rumext.v2.jsx("span",{'className':"main_ui_viewer_thumbnails__counter",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("labels.num-of-frames",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(total)], 0))}),rumext.v2.jsxs("span",{'className':"main_ui_viewer_thumbnails__actions",'children':[rumext.v2.jsx("button",{'onClick':on_toggle_expand,'className':"main_ui_viewer_thumbnails__expand-btn",'children':app.main.ui.icons.arrow}),rumext.v2.jsx("button",{'onClick':on_close,'className':"main_ui_viewer_thumbnails__close-btn",'children':app.main.ui.icons.close})]})]});
});

(app.main.ui.viewer.thumbnails.thumbnails_summary.displayName = "thumbnails-summary");

app.main.ui.viewer.thumbnails.thumbnail_item = (function (p1__58660_SHARP_){
return rumext.v2.deferred.cljs$core$IFn$_invoke$arity$2(p1__58660_SHARP_,app.util.timers.idle_then_raf);
})(rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$viewer$thumbnails$thumbnail_item(props_58662){
var map__58663 = rumext.v2.util.wrap_props(props_58662);
var map__58663__$1 = cljs.core.__destructure_map(map__58663);
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58663__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58663__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var on_click = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58663__$1,new cljs.core.Keyword(null,"on-click","on-click",1632826543));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58663__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58663__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58663__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var thumbnail_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58663__$1,new cljs.core.Keyword(null,"thumbnail-data","thumbnail-data",-924635553));
var children_ids = app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame));
var children_bounds = app.common.geom.shapes.shapes__GT_rect(cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame], null),cljs.core.keep.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),children_ids)));
return rumext.v2.jsxs("button",{'onClick':(function (p1__58661_SHARP_){
return (on_click.cljs$core$IFn$_invoke$arity$2 ? on_click.cljs$core$IFn$_invoke$arity$2(p1__58661_SHARP_,index) : on_click.call(null,p1__58661_SHARP_,index));
}),'className':"main_ui_viewer_thumbnails__thumbnail-item",'children':[rumext.v2.jsx("div",{'className':"main_ui_viewer_thumbnails__thumbnail-preview"+" "+(cljs.core.truth_(selected_QMARK_)?"main_ui_viewer_thumbnails__selected":""),'children':rumext.v2.jsx(app.main.render.frame_svg,{'frame':cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(frame,new cljs.core.Keyword(null,"thumbnail","thumbnail",-867906798),cljs.core.get.cljs$core$IFn$_invoke$arity$2(thumbnail_data,""+(page_id ?? "")+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame) ?? ""))),new cljs.core.Keyword(null,"children-bounds","children-bounds",-1464963835),children_bounds),'objects':objects,'use-thumbnails':true})}),rumext.v2.jsx("div",{'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(frame),'className':"main_ui_viewer_thumbnails__thumbnail-info",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(frame)})]});
})));

(app.main.ui.viewer.thumbnails.thumbnail_item.displayName = "thumbnail-item");

app.main.ui.viewer.thumbnails.thumbnails_panel = (function app$main$ui$viewer$thumbnails$thumbnails_panel(props_58664){
var map__58665 = rumext.v2.util.wrap_props(props_58664);
var map__58665__$1 = cljs.core.__destructure_map(map__58665);
var props = map__58665__$1;
var frames = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58665__$1,new cljs.core.Keyword(null,"frames","frames",1765687497));
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58665__$1,new cljs.core.Keyword(null,"page","page",849072397));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58665__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var show_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58665__$1,new cljs.core.Keyword(null,"show?","show?",1543842127));
var thumbnail_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58665__$1,new cljs.core.Keyword(null,"thumbnail-data","thumbnail-data",-924635553));
var expanded_state = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var expanded_QMARK_ = cljs.core.deref(expanded_state);
var container = rumext.v2.use_ref();
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page);
var on_close = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.toggle_thumbnails_panel);
});
var selected = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(false);
var on_item_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(expanded_QMARK_)],(function (_,index__$1){
cljs.core.compare_and_set_BANG_(selected,false,true);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.go_to_frame_by_index(index__$1));

if(cljs.core.truth_(expanded_QMARK_)){
return on_close();
} else {
return null;
}
}));
var toggle_expand = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(expanded_state,cljs.core.not);
}));
return rumext.v2.jsxs("section",{'style':{'display':((cljs.core.not(show_QMARK_))?"none":null)},'ref':container,'className':"main_ui_viewer_thumbnails__viewer-thumbnails"+" "+(cljs.core.truth_(expanded_QMARK_)?"main_ui_viewer_thumbnails__expanded":""),'children':[rumext.v2.jsx(app.main.ui.viewer.thumbnails.thumbnails_summary,{'on-toggle-expand':toggle_expand,'on-close':on_close,'total':cljs.core.count(frames)}),rumext.v2.jsx(app.main.ui.viewer.thumbnails.thumbnails_content,{'expanded?':expanded_QMARK_,'total':cljs.core.count(frames),'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__58666){
var vec__58667 = p__58666;
var i = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58667,(0),null);
var frame = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58667,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.viewer.thumbnails.thumbnail_item,{'index':i,'frame':frame,'page-id':new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(page),'objects':objects,'on-click':on_item_click,'selected?':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(i,index),'thumbnail-data':thumbnail_data},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame) ?? "")+"-"+(i ?? "")));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(frames))})]});
});

(app.main.ui.viewer.thumbnails.thumbnails_panel.displayName = "thumbnails-panel");


//# sourceMappingURL=app.main.ui.viewer.thumbnails.js.map
