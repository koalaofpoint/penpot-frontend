import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.types.modifiers.js";
import "./app.common.types.page.js";
import "./app.common.uuid.js";
import "./app.main.data.comments.js";
import "./app.main.data.viewer.js";
import "./app.main.store.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.viewer.shapes.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./goog.events.events.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.viewer.interactions');
app.main.ui.viewer.interactions.prepare_objects = (function app$main$ui$viewer$interactions$prepare_objects(frame,size,delta,objects){
var frame_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame);
var vector = app.common.geom.point.negate(app.common.geom.point.add(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(size),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(size)),delta));
var update_fn = (function (p1__54214_SHARP_,p2__54215_SHARP_){
return app.common.data.update_when.cljs$core$IFn$_invoke$arity$variadic(p1__54214_SHARP_,p2__54215_SHARP_,app.common.geom.shapes.transform_shape,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.modifiers.move_modifiers.cljs$core$IFn$_invoke$arity$1(vector)], 0));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(update_fn,objects,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_id], null),app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,frame_id)));
});
app.main.ui.viewer.interactions.get_fixed_ids = (function app$main$ui$viewer$interactions$get_fixed_ids(objects){
var fixed_ids = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.fixed_scroll_QMARK_,cljs.core.vals(objects));
var fixed_children_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__54216_SHARP_){
return app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54216_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fixed_ids], 0)));
var parent_children_ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54218_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__54218_SHARP_,app.common.uuid.zero);
}),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__54217_SHARP_){
return cljs.core.cons(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54217_SHARP_),app.common.files.helpers.get_parent_ids(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54217_SHARP_)));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fixed_ids], 0)));
var fixed_ids__$1 = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(fixed_children_ids,parent_children_ids);
return fixed_ids__$1;
});
app.main.ui.viewer.interactions.viewport_svg = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$viewer$interactions$viewport_svg(props_54221){
var props = props_54221;
var page = (props["page"]);
var frame = (props["frame"]);
var base = (props["base"]);
var offset = (props["offset"]);
var size = (props["size"]);
var fixed_QMARK_ = (props["fixed?"]);
var delta = (function (){var or__5025__auto__ = (props["delta"]);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0));
}
})();
var vbox = new cljs.core.Keyword(null,"vbox","vbox",-492787765).cljs$core$IFn$_invoke$arity$1(size);
var frame__$1 = (function (){var G__54222 = frame;
if(cljs.core.truth_(fixed_QMARK_)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54222,new cljs.core.Keyword(null,"fixed-scroll","fixed-scroll",-83520691),true);
} else {
return G__54222;
}
})();
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page);
var objects__$1 = (function (){var G__54223 = objects;
if(cljs.core.truth_(fixed_QMARK_)){
return cljs.core.assoc_in(G__54223,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame__$1),new cljs.core.Keyword(null,"fixed-scroll","fixed-scroll",-83520691)], null),true);
} else {
return G__54223;
}
})();
var fixed_ids = app.main.ui.viewer.interactions.get_fixed_ids(objects__$1);
var not_fixed_ids = cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54219_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__54219_SHARP_,app.common.uuid.zero);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.set(fixed_ids),cljs.core.keys(objects__$1)));
var calculate_objects = (function (ids){
return app.main.ui.viewer.interactions.prepare_objects(frame__$1,size,delta,app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame__$1], null),cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects__$1),ids))));
});
var objects_fixed = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(fixed_ids),rumext.v2.adapt(page),rumext.v2.adapt(frame__$1),rumext.v2.adapt(size),rumext.v2.adapt(delta)],(function (){
return calculate_objects(fixed_ids);
}));
var objects_not_fixed = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(not_fixed_ids),rumext.v2.adapt(page),rumext.v2.adapt(frame__$1),rumext.v2.adapt(size),rumext.v2.adapt(delta)],(function (){
return calculate_objects(not_fixed_ids);
}));
var all_objects = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects_fixed),rumext.v2.adapt(objects_not_fixed)],(function (){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([objects_fixed,objects_not_fixed], 0));
}));
var wrapper_fixed = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(page),rumext.v2.adapt(frame__$1),rumext.v2.adapt(size)],(function (){
return app.main.ui.viewer.shapes.frame_container_factory(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(objects_fixed,new cljs.core.Keyword("app.main.ui.viewer.interactions","fixed","app.main.ui.viewer.interactions/fixed",-173194267),true),all_objects);
}));
var wrapper_not_fixed = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects_not_fixed)],(function (){
return app.main.ui.viewer.shapes.frame_container_factory(objects_not_fixed,all_objects);
}));
var frame__$2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame__$1));
var base__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(all_objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(base));
var non_delay_interactions = cljs.core.filterv((function (p1__54220_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(p1__54220_SHARP_),new cljs.core.Keyword(null,"after-delay","after-delay",-2054763582));
}),new cljs.core.Keyword(null,"interactions","interactions",550841811).cljs$core$IFn$_invoke$arity$1(frame__$2));
var fixed_frame = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(frame__$2,new cljs.core.Keyword(null,"fills","fills",902966780)),new cljs.core.Keyword(null,"interactions","interactions",550841811),non_delay_interactions);
return rumext.v2.jsx(rumext.v2.provider(app.main.ui.viewer.shapes.base_frame_ctx),{'value':base__$1,'children':rumext.v2.jsx(rumext.v2.provider(app.main.ui.viewer.shapes.frame_offset_ctx),{'value':offset,'children':(cljs.core.truth_(fixed_QMARK_)?rumext.v2.jsx("svg",{'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size),'xmlns':"http://www.w3.org/2000/svg",'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(size),'className':"main_ui_viewer_interactions__fixed",'children':rumext.v2.jsx(wrapper_not_fixed,{'shape':frame__$2,'view-box':vbox}),'viewBox':vbox,'xmlnsXlink':"http://www.w3.org/1999/xlink",'fill':"none",'version':"1.1"}):rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("svg",{'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size),'xmlns':"http://www.w3.org/2000/svg",'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(size),'className':"main_ui_viewer_interactions__fixed",'children':rumext.v2.jsx(wrapper_fixed,{'shape':fixed_frame,'view-box':vbox}),'viewBox':vbox,'style':{'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size),'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(size),'zIndex':(1)},'xmlnsXlink':"http://www.w3.org/1999/xlink",'fill':"none",'version':"1.1"}),rumext.v2.jsx("svg",{'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size),'xmlns':"http://www.w3.org/2000/svg",'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(size),'className':"main_ui_viewer_interactions__not-fixed",'children':rumext.v2.jsx(wrapper_not_fixed,{'shape':frame__$2,'view-box':vbox}),'viewBox':vbox,'xmlnsXlink':"http://www.w3.org/1999/xlink",'fill':"none",'version':"1.1"})]}))})});
}));

(app.main.ui.viewer.interactions.viewport_svg.displayName = "viewport-svg");

app.main.ui.viewer.interactions.viewport = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$viewer$interactions$viewport(props_54224){
var props = props_54224;
var mode = app.main.ui.hooks.use_equal_memo((props["interactions-mode"]));
var offset = app.main.ui.hooks.use_equal_memo((props["frame-offset"]));
var size = app.main.ui.hooks.use_equal_memo((props["size"]));
var delta = (props["delta"]);
var page = (props["page"]);
var frame = (props["frame"]);
var base = (props["base-frame"]);
var fixed_QMARK_ = (props["fixed?"]);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(mode)],(function (){
var on_click = (function (_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(mode,new cljs.core.Keyword(null,"show-on-click","show-on-click",1549930356))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.flash_interactions());
} else {
return null;
}
});
var on_mouse_wheel = (function (event){
if(app.util.keyboard.mod_QMARK_(event)){
app.util.dom.prevent_default(event);

var event__$1 = app.util.dom.event__GT_browser_event(event);
var delta__$1 = (event__$1.deltaY + event__$1.deltaX);
if((delta__$1 > (0))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.decrease_zoom);
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.increase_zoom);
}
} else {
return null;
}
});
var on_key_down = (function (event){
if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.comments.close_thread());
} else {
return null;
}
});
var key1 = goog.events.listen(goog.global,"wheel",on_mouse_wheel,({"passive": false}));
var key2 = goog.events.listen(goog.global,"keydown",on_key_down);
var key3 = goog.events.listen(goog.global,"click",on_click);
return (function (){
goog.events.unlistenByKey(key1);

goog.events.unlistenByKey(key2);

return goog.events.unlistenByKey(key3);
});
}));

return rumext.v2.jsx(app.main.ui.viewer.interactions.viewport_svg,{'page':page,'frame':frame,'base':base,'offset':offset,'size':size,'delta':delta,'fixed?':fixed_QMARK_});
}));

(app.main.ui.viewer.interactions.viewport.displayName = "viewport");

app.main.ui.viewer.interactions.flows_menu_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$viewer$interactions$flows_menu_STAR_(props_54225){
var index = props_54225.index;
var page = props_54225.page;
var flows = cljs.core.not_empty(new cljs.core.Keyword(null,"flows","flows",-1369576628).cljs$core$IFn$_invoke$arity$1(page));
var frames = new cljs.core.Keyword(null,"frames","frames",1765687497).cljs$core$IFn$_invoke$arity$1(page);
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(frames,index);
var frame_id = (frame?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.Keyword(null,"id","id",-1388402092)));
var current_flow_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return app.common.types.page.get_frame_flow(flows,frame_id);
}));
var current_flow = cljs.core.deref(current_flow_STAR_);
var show_dropdown_QMARK__STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var show_dropdown_QMARK_ = cljs.core.deref(show_dropdown_QMARK__STAR_);
var toggle_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_dropdown_QMARK__STAR_,cljs.core.not);
}));
var hide_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_dropdown_QMARK__STAR_,false);
}));
var select_flow = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var flow = app.common.data.read_string(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
cljs.core.reset_BANG_(current_flow_STAR_,flow);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.go_to_frame.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"starting-frame","starting-frame",-1907986271).cljs$core$IFn$_invoke$arity$1(flow)));
}));
if(cljs.core.truth_(flows)){
return rumext.v2.jsxs("div",{'onClick':toggle_dropdown,'className':"main_ui_viewer_interactions__view-options",'children':[rumext.v2.jsx("span",{'className':"main_ui_viewer_interactions__icon",'children':app.main.ui.icons.play}),rumext.v2.jsx("span",{'className':"main_ui_viewer_interactions__dropdown-title",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(current_flow)}),rumext.v2.jsx("span",{'className':"main_ui_viewer_interactions__icon-dropdown",'children':app.main.ui.icons.arrow}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':show_dropdown_QMARK_,'on-close':hide_dropdown,'children':rumext.v2.jsx("ul",{'className':"main_ui_viewer_interactions__dropdown",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__54226){
var vec__54227 = p__54226;
var flow_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54227,(0),null);
var flow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54227,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsxs("li",{'data-value':cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([flow], 0)),'onClick':select_flow,'className':"main_ui_viewer_interactions__dropdown-element"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(flow_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current_flow)))?"main_ui_viewer_interactions__selected":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_viewer_interactions__label",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(flow)}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(flow_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current_flow)))?rumext.v2.jsx("span",{'className':"main_ui_viewer_interactions__icon",'children':app.main.ui.icons.tick}):null)]},""+"flow-"+(flow_id ?? "")));

return out_arr__35152__auto__;
}),[],flows)})})]});
} else {
return null;
}
}));

(app.main.ui.viewer.interactions.flows_menu_STAR_.displayName = "flows-menu*");

app.main.ui.viewer.interactions.interactions_menu_STAR_ = (function app$main$ui$viewer$interactions$interactions_menu_STAR_(props_54230){
var interactions_mode = props_54230.interactionsMode;
var show_dropdown_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var toggle_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_dropdown_QMARK_,cljs.core.not);
}));
var hide_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_dropdown_QMARK_,false);
}));
var select_mode = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var mode = (function (){var G__54231 = app.util.dom.get_current_target(event);
var G__54231__$1 = (((G__54231 == null))?null:app.util.dom.get_data(G__54231,"mode"));
if((G__54231__$1 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__54231__$1);
}
})();
app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.set_interactions_mode(mode));
}));
return rumext.v2.jsxs("div",{'onClick':toggle_dropdown,'className':"main_ui_viewer_interactions__view-options",'children':[rumext.v2.jsx("span",{'className':"main_ui_viewer_interactions__dropdown-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("viewer.header.interactions")}),rumext.v2.jsx("span",{'className':"main_ui_viewer_interactions__icon-dropdown",'children':app.main.ui.icons.arrow}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':cljs.core.deref(show_dropdown_QMARK_),'on-close':hide_dropdown,'children':rumext.v2.jsxs("ul",{'className':"main_ui_viewer_interactions__dropdown",'children':[rumext.v2.jsxs("li",{'onClick':select_mode,'data-mode':"hide",'className':"main_ui_viewer_interactions__dropdown-element"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(interactions_mode,new cljs.core.Keyword(null,"hide","hide",-596913169)))?"main_ui_viewer_interactions__selected":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_viewer_interactions__label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("viewer.header.dont-show-interactions")}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(interactions_mode,new cljs.core.Keyword(null,"hide","hide",-596913169)))?rumext.v2.jsx("span",{'className':"main_ui_viewer_interactions__icon",'children':app.main.ui.icons.tick}):null)]}),rumext.v2.jsxs("li",{'onClick':select_mode,'data-mode':"show",'className':"main_ui_viewer_interactions__dropdown-element"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(interactions_mode,new cljs.core.Keyword(null,"show","show",-576705889)))?"main_ui_viewer_interactions__selected":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_viewer_interactions__label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("viewer.header.show-interactions")}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(interactions_mode,new cljs.core.Keyword(null,"show","show",-576705889)))?rumext.v2.jsx("span",{'className':"main_ui_viewer_interactions__icon",'children':app.main.ui.icons.tick}):null)]}),rumext.v2.jsxs("li",{'onClick':select_mode,'data-mode':"show-on-click",'className':"main_ui_viewer_interactions__dropdown-element"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(interactions_mode,new cljs.core.Keyword(null,"show-on-click","show-on-click",1549930356)))?"main_ui_viewer_interactions__selected":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_viewer_interactions__label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("viewer.header.show-interactions-on-click")}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(interactions_mode,new cljs.core.Keyword(null,"show-on-click","show-on-click",1549930356)))?rumext.v2.jsx("span",{'className':"main_ui_viewer_interactions__icon",'children':app.main.ui.icons.tick}):null)]})]})})]});
});

(app.main.ui.viewer.interactions.interactions_menu_STAR_.displayName = "interactions-menu*");

app.main.ui.viewer.interactions.animate_go_to_frame = (function app$main$ui$viewer$interactions$animate_go_to_frame(animation,current_viewport,orig_viewport,current_size,orig_size,wrapper_size){
var G__54232 = new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230).cljs$core$IFn$_invoke$arity$1(animation);
var G__54232__$1 = (((G__54232 instanceof cljs.core.Keyword))?G__54232.fqn:null);
switch (G__54232__$1) {
case "dissolve":
app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$3(orig_viewport,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"opacity": "100%"}),({"opacity": "0%"}),({"opacity": "0%"})], null),({"delay": (new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation) / (3)), "duration": (((2) * new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation)) / (3)), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}));

return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(current_viewport,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"opacity": "0%"}),({"opacity": "100%"}),({"opacity": "100%"})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.complete_animation());
}));

break;
case "slide":
var G__54233 = new cljs.core.Keyword(null,"way","way",1564954669).cljs$core$IFn$_invoke$arity$1(animation);
var G__54233__$1 = (((G__54233 instanceof cljs.core.Keyword))?G__54233.fqn:null);
switch (G__54233__$1) {
case "in":
var G__54234 = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(animation);
var G__54234__$1 = (((G__54234 instanceof cljs.core.Keyword))?G__54234.fqn:null);
switch (G__54234__$1) {
case "right":
var offset = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(current_size) + ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(wrapper_size) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(current_size)) / (2)));
app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(current_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"left": ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join('')}),({"left": "0"})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.complete_animation());
}));

if(cljs.core.truth_(new cljs.core.Keyword(null,"offset-effect","offset-effect",1997999208).cljs$core$IFn$_invoke$arity$1(animation))){
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$3(orig_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"left": "0", "opacity": "100%"}),({"left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1((offset * 0.2)),"px"].join(''), "opacity": "0"})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}));
} else {
return null;
}

break;
case "left":
var offset = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(current_size) + ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(wrapper_size) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(current_size)) / (2)));
app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(current_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"right": ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join('')}),({"right": "0"})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.complete_animation());
}));

if(cljs.core.truth_(new cljs.core.Keyword(null,"offset-effect","offset-effect",1997999208).cljs$core$IFn$_invoke$arity$1(animation))){
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$3(orig_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"right": "0", "opacity": "100%"}),({"right": [cljs.core.str.cljs$core$IFn$_invoke$arity$1((offset * 0.2)),"px"].join(''), "opacity": "0"})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}));
} else {
return null;
}

break;
case "up":
var offset = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(current_size) + ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(wrapper_size) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(current_size)) / (2)));
app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(current_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"bottom": ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join('')}),({"bottom": "0"})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.complete_animation());
}));

if(cljs.core.truth_(new cljs.core.Keyword(null,"offset-effect","offset-effect",1997999208).cljs$core$IFn$_invoke$arity$1(animation))){
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$3(orig_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"bottom": "0", "opacity": "100%"}),({"bottom": [cljs.core.str.cljs$core$IFn$_invoke$arity$1((offset * 0.2)),"px"].join(''), "opacity": "0"})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}));
} else {
return null;
}

break;
case "down":
var offset = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(current_size) + ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(wrapper_size) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(current_size)) / (2)));
app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(current_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"top": ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join('')}),({"top": "0"})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.complete_animation());
}));

if(cljs.core.truth_(new cljs.core.Keyword(null,"offset-effect","offset-effect",1997999208).cljs$core$IFn$_invoke$arity$1(animation))){
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$3(orig_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"top": "0", "opacity": "100%"}),({"top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1((offset * 0.2)),"px"].join(''), "opacity": "0"})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}));
} else {
return null;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54234__$1)].join('')));

}

break;
case "out":
var G__54239 = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(animation);
var G__54239__$1 = (((G__54239 instanceof cljs.core.Keyword))?G__54239.fqn:null);
switch (G__54239__$1) {
case "right":
var offset = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(orig_size) + ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(wrapper_size) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(orig_size)) / (2)));
app.util.dom.set_css_property_BANG_(orig_viewport,"z-index",(10000));

app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(orig_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"right": "0"}),({"right": ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join('')})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.complete_animation());
}));

if(cljs.core.truth_(new cljs.core.Keyword(null,"offset-effect","offset-effect",1997999208).cljs$core$IFn$_invoke$arity$1(animation))){
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$3(current_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"right": [cljs.core.str.cljs$core$IFn$_invoke$arity$1((offset * 0.2)),"px"].join(''), "opacity": "0"}),({"right": "0", "opacity": "100%"})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}));
} else {
return null;
}

break;
case "left":
var offset = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(orig_size) + ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(wrapper_size) - new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(orig_size)) / (2)));
app.util.dom.set_css_property_BANG_(orig_viewport,"z-index",(10000));

app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(orig_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"left": "0"}),({"left": ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join('')})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.complete_animation());
}));

if(cljs.core.truth_(new cljs.core.Keyword(null,"offset-effect","offset-effect",1997999208).cljs$core$IFn$_invoke$arity$1(animation))){
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$3(current_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1((offset * 0.2)),"px"].join(''), "opacity": "0"}),({"left": "0", "opacity": "100%"})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}));
} else {
return null;
}

break;
case "up":
var offset = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(orig_size) + ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(wrapper_size) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(orig_size)) / (2)));
app.util.dom.set_css_property_BANG_(orig_viewport,"z-index",(10000));

app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(orig_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"top": "0"}),({"top": ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join('')})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.complete_animation());
}));

if(cljs.core.truth_(new cljs.core.Keyword(null,"offset-effect","offset-effect",1997999208).cljs$core$IFn$_invoke$arity$1(animation))){
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$3(current_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1((offset * 0.2)),"px"].join(''), "opacity": "0"}),({"top": "0", "opacity": "100%"})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}));
} else {
return null;
}

break;
case "down":
var offset = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(orig_size) + ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(wrapper_size) - new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(orig_size)) / (2)));
app.util.dom.set_css_property_BANG_(orig_viewport,"z-index",(10000));

app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(orig_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"bottom": "0"}),({"bottom": ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join('')})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.complete_animation());
}));

if(cljs.core.truth_(new cljs.core.Keyword(null,"offset-effect","offset-effect",1997999208).cljs$core$IFn$_invoke$arity$1(animation))){
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$3(current_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"bottom": [cljs.core.str.cljs$core$IFn$_invoke$arity$1((offset * 0.2)),"px"].join(''), "opacity": "0"}),({"bottom": "0", "opacity": "100%"})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}));
} else {
return null;
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54239__$1)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54233__$1)].join('')));

}

break;
case "push":
var G__54244 = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(animation);
var G__54244__$1 = (((G__54244 instanceof cljs.core.Keyword))?G__54244.fqn:null);
switch (G__54244__$1) {
case "right":
var offset = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(wrapper_size);
app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(current_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"left": ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join('')}),({"left": "0"})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.complete_animation());
}));

return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$3(orig_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"left": "0"}),({"left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join('')})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}));

break;
case "left":
var offset = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(wrapper_size);
app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(current_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"right": ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join('')}),({"right": "0"})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.complete_animation());
}));

return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$3(orig_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"right": "0"}),({"right": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join('')})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}));

break;
case "up":
var offset = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(wrapper_size);
app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(current_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"bottom": ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join('')}),({"bottom": "0"})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.complete_animation());
}));

return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$3(orig_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"bottom": "0"}),({"bottom": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join('')})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}));

break;
case "down":
var offset = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(wrapper_size);
app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(current_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"top": ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join('')}),({"top": "0"})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.complete_animation());
}));

return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$3(orig_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"top": "0"}),({"top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(offset),"px"].join('')})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54244__$1)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54232__$1)].join('')));

}
});
app.main.ui.viewer.interactions.animate_open_overlay = (function app$main$ui$viewer$interactions$animate_open_overlay(animation,overlay_viewport,wrapper_size,overlay_size,overlay_position){
if((!((overlay_viewport == null)))){
var G__54253 = new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230).cljs$core$IFn$_invoke$arity$1(animation);
var G__54253__$1 = (((G__54253 instanceof cljs.core.Keyword))?G__54253.fqn:null);
switch (G__54253__$1) {
case "dissolve":
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(overlay_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"opacity": "0"}),({"opacity": "100"})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.complete_animation());
}));

break;
case "slide":
var G__54258 = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(animation);
var G__54258__$1 = (((G__54258 instanceof cljs.core.Keyword))?G__54258.fqn:null);
switch (G__54258__$1) {
case "right":
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(overlay_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"left": ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(overlay_size)),"px"].join('')}),({"left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(overlay_position)),"px"].join('')})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.complete_animation());
}));

break;
case "left":
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(overlay_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(wrapper_size)),"px"].join('')}),({"left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(overlay_position)),"px"].join('')})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.complete_animation());
}));

break;
case "up":
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(overlay_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(wrapper_size)),"px"].join('')}),({"top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(overlay_position)),"px"].join('')})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.complete_animation());
}));

break;
case "down":
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(overlay_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"top": ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(overlay_size)),"px"].join('')}),({"top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(overlay_position)),"px"].join('')})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.complete_animation());
}));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54258__$1)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54253__$1)].join('')));

}
} else {
return null;
}
});
app.main.ui.viewer.interactions.animate_close_overlay = (function app$main$ui$viewer$interactions$animate_close_overlay(animation,overlay_viewport,wrapper_size,overlay_size,overlay_position,overlay_id){
if((!((overlay_viewport == null)))){
var G__54262 = new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230).cljs$core$IFn$_invoke$arity$1(animation);
var G__54262__$1 = (((G__54262 instanceof cljs.core.Keyword))?G__54262.fqn:null);
switch (G__54262__$1) {
case "dissolve":
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(overlay_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"opacity": "100"}),({"opacity": "0"})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.viewer.complete_animation(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.viewer.close_overlay.cljs$core$IFn$_invoke$arity$1(overlay_id)], 0));
}));

break;
case "slide":
var G__54263 = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(animation);
var G__54263__$1 = (((G__54263 instanceof cljs.core.Keyword))?G__54263.fqn:null);
switch (G__54263__$1) {
case "right":
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(overlay_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(overlay_position)),"px"].join('')}),({"left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(wrapper_size)),"px"].join('')})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.viewer.complete_animation(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.viewer.close_overlay.cljs$core$IFn$_invoke$arity$1(overlay_id)], 0));
}));

break;
case "left":
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(overlay_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"left": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(overlay_position)),"px"].join('')}),({"left": ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(overlay_size)),"px"].join('')})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.viewer.complete_animation(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.viewer.close_overlay.cljs$core$IFn$_invoke$arity$1(overlay_id)], 0));
}));

break;
case "up":
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(overlay_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(overlay_position)),"px"].join('')}),({"top": ["-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(overlay_size)),"px"].join('')})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.viewer.complete_animation(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.viewer.close_overlay.cljs$core$IFn$_invoke$arity$1(overlay_id)], 0));
}));

break;
case "down":
return app.util.dom.animate_BANG_.cljs$core$IFn$_invoke$arity$4(overlay_viewport,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [({"top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(overlay_position)),"px"].join('')}),({"top": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(wrapper_size)),"px"].join('')})], null),({"duration": new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(animation), "easing": cljs.core.name(new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(animation))}),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.viewer.complete_animation(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.viewer.close_overlay.cljs$core$IFn$_invoke$arity$1(overlay_id)], 0));
}));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54263__$1)].join('')));

}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54262__$1)].join('')));

}
} else {
return null;
}
});

//# sourceMappingURL=app.main.ui.viewer.interactions.js.map
