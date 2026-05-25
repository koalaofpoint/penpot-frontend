import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.types.component.js";
import "./app.common.types.container.js";
import "./app.common.types.shape_tree.js";
import "./app.common.types.shape.layout.js";
import "./app.common.uuid.js";
import "./app.main.data.common.js";
import "./app.main.data.workspace.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.streams.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.workspace.viewport.utils.js";
import "./app.util.debug.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./app.util.timers.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.viewport.widgets');
app.main.ui.workspace.viewport.widgets.pixel_grid_STAR_ = (function app$main$ui$workspace$viewport$widgets$pixel_grid_STAR_(props_57248){
var zoom = props_57248.zoom;
var vbox = props_57248.vbox;
return rumext.v2.jsxs("g",{'className':"pixel-grid",'children':[rumext.v2.jsx("defs",{'children':rumext.v2.jsx("pattern",{'id':"pixel-grid",'viewBox':"0 0 1 1",'width':(1),'height':(1),'patternUnits':"userSpaceOnUse",'children':rumext.v2.jsx("path",{'d':"M 1 0 L 0 0 0 1",'style':{'fill':"none",'stroke':((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"pixel-grid","pixel-grid",-148102857)))?"red":"var(--status-color-info-500)"),'strokeOpacity':((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"pixel-grid","pixel-grid",-148102857)))?(1):"0.2"),'strokeWidth':cljs.core.str.cljs$core$IFn$_invoke$arity$1(((1) / zoom))}})})}),rumext.v2.jsx("rect",{'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox),'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox),'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vbox),'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vbox),'fill':"url(#pixel-grid)",'style':{'pointerEvents':"none"}})]});
});

(app.main.ui.workspace.viewport.widgets.pixel_grid_STAR_.displayName = "pixel-grid*");

app.main.ui.workspace.viewport.widgets.cursor_tooltip_STAR_ = (function app$main$ui$workspace$viewport$widgets$cursor_tooltip_STAR_(props_57249){
var tooltip = props_57249.tooltip;
var zoom = props_57249.zoom;
var coords = (function (){var G__57250 = app.main.ui.hooks.use_rxsub(app.main.streams.mouse_position);
if((G__57250 == null)){
return null;
} else {
return app.common.geom.point.divide(G__57250,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(zoom,zoom));
}
})();
var pos_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(coords) - (100));
var pos_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(coords) + (30));
return rumext.v2.jsx("g",{'transform':["translate(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos_x),",",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos_y),")"].join(''),'children':rumext.v2.jsx("foreignObject",{'width':(200),'height':(100),'style':{'textAlign':"center"},'children':rumext.v2.jsx("span",{'children':tooltip})})});
});

(app.main.ui.workspace.viewport.widgets.cursor_tooltip_STAR_.displayName = "cursor-tooltip*");

app.main.ui.workspace.viewport.widgets.selection_rect_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$viewport$widgets$selection_rect_STAR_(props_57251){
var data = props_57251.data;
var zoom = props_57251.zoom;
if(cljs.core.truth_(data)){
return rumext.v2.jsx("rect",{'className':"selection-rect",'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(data),'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(data),'data-testid':"workspace-selection-rect",'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(data),'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(data),'style':{'fill':"var(--color-accent-tertiary-muted)",'stroke':"var(--color-accent-tertiary)",'strokeWidth':((1) / zoom)}});
} else {
return null;
}
}));

(app.main.ui.workspace.viewport.widgets.selection_rect_STAR_.displayName = "selection-rect*");

app.main.ui.workspace.viewport.widgets.frame_title = (function (p1__57252_SHARP_){
return rumext.v2.deferred.cljs$core$IFn$_invoke$arity$2(p1__57252_SHARP_,app.util.timers.raf);
})(rumext.v2.memo.cljs$core$IFn$_invoke$arity$1(rumext.v2.forward_ref((function app$main$ui$workspace$viewport$widgets$frame_title(props_57253,external_ref){
var map__57254 = rumext.v2.util.wrap_props(props_57253);
var map__57254__$1 = cljs.core.__destructure_map(map__57254);
var is_grid_edition = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57254__$1,new cljs.core.Keyword(null,"is-grid-edition","is-grid-edition",-1875178500));
var is_show_artboard_names = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57254__$1,new cljs.core.Keyword(null,"is-show-artboard-names","is-show-artboard-names",1177899260));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57254__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038));
var is_show_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57254__$1,new cljs.core.Keyword(null,"is-show-id","is-show-id",-2011614269));
var on_frame_select = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57254__$1,new cljs.core.Keyword(null,"on-frame-select","on-frame-select",-1813582940));
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57254__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var on_frame_enter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57254__$1,new cljs.core.Keyword(null,"on-frame-enter","on-frame-enter",-1721032251));
var on_frame_leave = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57254__$1,new cljs.core.Keyword(null,"on-frame-leave","on-frame-leave",-1225882137));
var is_selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57254__$1,new cljs.core.Keyword(null,"is-selected","is-selected",-334199992));
var workspace_read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var objects = cljs.core.deref(app.main.refs.workspace_page_objects);
var color = (cljs.core.truth_(is_selected)?(cljs.core.truth_((function (){var or__5025__auto__ = app.common.types.container.in_any_component_QMARK_(objects,frame);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.component.is_variant_container_QMARK_(frame);
}
})())?"var(--assets-component-hightlight)":"var(--color-accent-tertiary)"):"#8f9da3");
var blocked_QMARK_ = new cljs.core.Keyword(null,"blocked","blocked",181326681).cljs$core$IFn$_invoke$arity$1(frame);
var on_pointer_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame)),rumext.v2.adapt(on_frame_select),rumext.v2.adapt(workspace_read_only_QMARK_),rumext.v2.adapt(blocked_QMARK_)],(function (event){
if(((app.util.dom.left_mouse_QMARK_(event)) && (cljs.core.not(blocked_QMARK_)))){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

var G__57255 = event;
var G__57256 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame);
return (on_frame_select.cljs$core$IFn$_invoke$arity$2 ? on_frame_select.cljs$core$IFn$_invoke$arity$2(G__57255,G__57256) : on_frame_select.call(null,G__57255,G__57256));
} else {
return null;
}
}));
var on_context_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame),rumext.v2.adapt(workspace_read_only_QMARK_)],(function (bevent){
var event = app.util.dom.event__GT_native_event(bevent);
var position = app.util.dom.get_client_position(event);
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

if(cljs.core.truth_(workspace_read_only_QMARK_)){
return null;
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.show_shape_context_menu(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"position","position",-2011731912),position,new cljs.core.Keyword(null,"shape","shape",1190694006),frame], null)));
}
}));
var on_pointer_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame)),rumext.v2.adapt(on_frame_enter)],(function (_){
var G__57257 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame);
return (on_frame_enter.cljs$core$IFn$_invoke$arity$1 ? on_frame_enter.cljs$core$IFn$_invoke$arity$1(G__57257) : on_frame_enter.call(null,G__57257));
}));
var on_pointer_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame)),rumext.v2.adapt(on_frame_leave)],(function (_){
var G__57258 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame);
return (on_frame_leave.cljs$core$IFn$_invoke$arity$1 ? on_frame_leave.cljs$core$IFn$_invoke$arity$1(G__57258) : on_frame_leave.call(null,G__57258));
}));
var main_instance_QMARK_ = app.common.types.component.main_instance_QMARK_(frame);
var is_variant_QMARK_ = new cljs.core.Keyword(null,"is-variant-container","is-variant-container",-1294533822).cljs$core$IFn$_invoke$arity$1(frame);
var text_width = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(frame) * zoom);
var show_icon_QMARK_ = (function (){var and__5023__auto__ = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"use-for-thumbnail","use-for-thumbnail",1921212442).cljs$core$IFn$_invoke$arity$1(frame);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = is_grid_edition;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = main_instance_QMARK_;
if(or__5025__auto____$2){
return or__5025__auto____$2;
} else {
return is_variant_QMARK_;
}
}
}
})();
if(cljs.core.truth_(and__5023__auto__)){
return (!((text_width <= (15))));
} else {
return and__5023__auto__;
}
})();
var text_pos_x = (cljs.core.truth_(show_icon_QMARK_)?(15):(0));
var edition_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var edition_QMARK_ = cljs.core.deref(edition_STAR_);
var local_ref = rumext.v2.use_ref();
var ref = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(external_ref,local_ref);
var frame_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame);
var start_edit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame_id),rumext.v2.adapt(edition_QMARK_),rumext.v2.adapt(blocked_QMARK_),rumext.v2.adapt(workspace_read_only_QMARK_)],(function (){
if(((cljs.core.not(blocked_QMARK_)) && (cljs.core.not(workspace_read_only_QMARK_)))){
if(cljs.core.not(edition_QMARK_)){
return cljs.core.reset_BANG_(edition_STAR_,true);
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.start_rename_shape(frame_id));
}
} else {
return null;
}
}));
var accept_edit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame_id)],(function (){
var name_input = rumext.v2.ref_val(ref);
var name = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_value(name_input));
cljs.core.reset_BANG_(edition_STAR_,false);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.end_rename_shape.cljs$core$IFn$_invoke$arity$2(frame_id,name));

return (on_frame_leave.cljs$core$IFn$_invoke$arity$1 ? on_frame_leave.cljs$core$IFn$_invoke$arity$1(frame_id) : on_frame_leave.call(null,frame_id));
}));
var cancel_edit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame_id)],(function (){
cljs.core.reset_BANG_(edition_STAR_,false);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.end_rename_shape.cljs$core$IFn$_invoke$arity$2(frame_id,null));

return (on_frame_leave.cljs$core$IFn$_invoke$arity$1 ? on_frame_leave.cljs$core$IFn$_invoke$arity$1(frame_id) : on_frame_leave.call(null,frame_id));
}));
var on_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(accept_edit),rumext.v2.adapt(cancel_edit)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
(accept_edit.cljs$core$IFn$_invoke$arity$0 ? accept_edit.cljs$core$IFn$_invoke$arity$0() : accept_edit.call(null));
} else {
}

if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
return (cancel_edit.cljs$core$IFn$_invoke$arity$0 ? cancel_edit.cljs$core$IFn$_invoke$arity$0() : cancel_edit.call(null));
} else {
return null;
}
}));
if(cljs.core.not(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(frame))){
return rumext.v2.jsxs("g",{'className':"frame-title",'id':""+"frame-title-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame) ?? ""),'data-edit-grid':is_grid_edition,'transform':app.main.ui.workspace.viewport.utils.title_transform(frame,zoom,is_grid_edition),'pointerEvents':(cljs.core.truth_(new cljs.core.Keyword(null,"blocked","blocked",181326681).cljs$core$IFn$_invoke$arity$1(frame))?"none":null),'children':[(cljs.core.truth_(show_icon_QMARK_)?rumext.v2.jsx("svg",{'x':(0),'y':(-9),'width':(12),'height':(12),'style':{'stroke':color,'fill':"none"},'visibility':(cljs.core.truth_(is_show_artboard_names)?"visible":"hidden"),'className':"workspace-frame-icon",'children':(cljs.core.truth_(new cljs.core.Keyword(null,"use-for-thumbnail","use-for-thumbnail",1921212442).cljs$core$IFn$_invoke$arity$1(frame))?rumext.v2.jsx("use",{'href':"#icon-boards-thumbnail"}):(cljs.core.truth_(is_grid_edition)?rumext.v2.jsx("use",{'href':"#icon-grid"}):((main_instance_QMARK_)?rumext.v2.jsx("use",{'href':"#icon-component"}):(cljs.core.truth_(is_variant_QMARK_)?rumext.v2.jsx("use",{'href':"#icon-component"}):null))))}):null),((edition_QMARK_)?rumext.v2.jsx("foreignObject",{'x':text_pos_x,'y':(-15),'width':(function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (text_width - text_pos_x);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})(),'height':(22),'style':{'fill':color},'visibility':(cljs.core.truth_(is_show_artboard_names)?"visible":"hidden"),'className':"main_ui_workspace_viewport_widgets__frame-title-wrapper",'children':rumext.v2.jsx("input",{'type':"text",'style':{'color':color},'autoFocus':true,'onKeyDown':on_key_down,'ref':ref,'defaultValue':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(frame),'onBlur':accept_edit,'className':"main_ui_workspace_viewport_widgets__frame-title-label main_ui_workspace_viewport_widgets__frame-title-input"})}):rumext.v2.jsx("foreignObject",{'x':text_pos_x,'y':(-11),'width':(function (){var x__5110__auto__ = (0);
var y__5111__auto__ = (text_width - text_pos_x);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})(),'height':(20),'style':{'fill':color},'visibility':(cljs.core.truth_(is_show_artboard_names)?"visible":"hidden"),'className':"main_ui_workspace_viewport_widgets__frame-title-wrapper",'children':rumext.v2.jsx("div",{'onDoubleClick':start_edit,'className':"main_ui_workspace_viewport_widgets__frame-title-label",'children':(cljs.core.truth_(is_show_id)?""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame) ?? "")+" - "+(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(frame) ?? ""):new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(frame)),'onContextMenu':on_context_menu,'style':{'color':color},'ref':ref,'onPointerDown':on_pointer_down,'onPointerLeave':on_pointer_leave,'onPointerEnter':on_pointer_enter})}))]});
} else {
return null;
}
}))));

(app.main.ui.workspace.viewport.widgets.frame_title.displayName = "frame-title");

app.main.ui.workspace.viewport.widgets.frame_titles_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$viewport$widgets$frame_titles_STAR_(props_57260){
var is_show_artboard_names = props_57260.isShowArtboardNames;
var zoom = props_57260.zoom;
var selected = props_57260.selected;
var on_frame_select = props_57260.onFrameSelect;
var on_frame_enter = props_57260.onFrameEnter;
var objects = props_57260.objects;
var on_frame_leave = props_57260.onFrameLeave;
var focus = props_57260.focus;
var selected__$1 = (function (){var or__5025__auto__ = selected;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
})();
var shapes = app.common.types.shape_tree.get_frames.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"skip-copies?","skip-copies?",1278015996),true], null));
var shapes__$1 = ((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"shape-titles","shape-titles",959632283)))?cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.set(shapes),cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),selected__$1):shapes);
var edition = rumext.v2.deref(app.main.refs.selected_edition);
var grid_edition_QMARK_ = app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,edition);
return rumext.v2.jsx("g",{'className':"frame-titles blurrable",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__57265){
var map__57266 = p__57265;
var map__57266__$1 = cljs.core.__destructure_map(map__57266);
var shape = map__57266__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57266__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var parent_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57266__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131));
out_arr__35152__auto__.push(((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,app.common.uuid.zero)) && (((((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"shape-titles","shape-titles",959632283))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(parent_id,app.common.uuid.zero)))) && (((cljs.core.empty_QMARK_(focus)) || (cljs.core.contains_QMARK_(focus,id))))))))?rumext.v2.jsx(app.main.ui.workspace.viewport.widgets.frame_title,{'zoom':zoom,'is-show-id':app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"shape-titles","shape-titles",959632283)),'on-frame-select':on_frame_select,'frame':shape,'on-frame-enter':on_frame_enter,'on-frame-leave':on_frame_leave,'is-selected':cljs.core.contains_QMARK_(selected__$1,id),'is-show-artboard-names':is_show_artboard_names,'is-grid-edition':(function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,edition);
if(and__5023__auto__){
return grid_edition_QMARK_;
} else {
return and__5023__auto__;
}
})()},""+"frame-title-"+(id ?? "")):null));

return out_arr__35152__auto__;
}),[],shapes__$1)});
}));

(app.main.ui.workspace.viewport.widgets.frame_titles_STAR_.displayName = "frame-titles*");

app.main.ui.workspace.viewport.widgets.frame_flow_STAR_ = (function app$main$ui$workspace$viewport$widgets$frame_flow_STAR_(props_57267){
var zoom = props_57267.zoom;
var on_frame_select = props_57267.onFrameSelect;
var frame = props_57267.frame;
var on_frame_enter = props_57267.onFrameEnter;
var on_frame_leave = props_57267.onFrameLeave;
var flow = props_57267.flow;
var is_selected = props_57267.isSelected;
var x = (frame?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (frame?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.Keyword(null,"y","y",-1757859776)));
var pos = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,(y - ((35) / zoom)));
var frame_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame);
var flow_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(flow);
var on_pointer_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame_id),rumext.v2.adapt(on_frame_select)],(function (event){
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"section","section",-300141526),"interactions",new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id], null);
if(app.util.dom.left_mouse_QMARK_(event)){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_viewer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([params], 0)));
} else {
return null;
}
}));
var on_pointer_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame_id),rumext.v2.adapt(on_frame_enter)],(function (_){
if(cljs.core.fn_QMARK_(on_frame_enter)){
return (on_frame_enter.cljs$core$IFn$_invoke$arity$1 ? on_frame_enter.cljs$core$IFn$_invoke$arity$1(frame_id) : on_frame_enter.call(null,frame_id));
} else {
return null;
}
}));
var on_pointer_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame_id),rumext.v2.adapt(on_frame_leave)],(function (_){
if(cljs.core.fn_QMARK_(on_frame_leave)){
return (on_frame_leave.cljs$core$IFn$_invoke$arity$1 ? on_frame_leave.cljs$core$IFn$_invoke$arity$1(frame_id) : on_frame_leave.call(null,frame_id));
} else {
return null;
}
}));
return rumext.v2.jsx("foreignObject",{'x':(0),'y':(-15),'width':(100000),'height':(24),'transform':app.main.ui.workspace.viewport.utils.text_transform(pos,zoom),'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_viewport_widgets__frame-flow-badge-wrapper",'children':rumext.v2.jsxs("div",{'onPointerDown':on_pointer_down,'onPointerEnter':on_pointer_enter,'onPointerLeave':on_pointer_leave,'className':"main_ui_workspace_viewport_widgets__frame-flow-badge-content"+" "+(cljs.core.truth_(is_selected)?"main_ui_workspace_viewport_widgets__selected":""),'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.play,'size':"s"}),rumext.v2.jsx("span",{'children':flow_name})]})})});
});

(app.main.ui.workspace.viewport.widgets.frame_flow_STAR_.displayName = "frame-flow*");

app.main.ui.workspace.viewport.widgets.frame_flows_STAR_ = (function app$main$ui$workspace$viewport$widgets$frame_flows_STAR_(props_57268){
var zoom = props_57268.zoom;
var selected = props_57268.selected;
var on_frame_select = props_57268.onFrameSelect;
var on_frame_enter = props_57268.onFrameEnter;
var objects = props_57268.objects;
var on_frame_leave = props_57268.onFrameLeave;
var flows = props_57268.flows;
return rumext.v2.jsx("g",{'className':"frame-flows",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__57269){
var vec__57270 = p__57269;
var flow_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57270,(0),null);
var flow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__57270,(1),null);
out_arr__35152__auto__.push((function (){var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"starting-frame","starting-frame",-1907986271).cljs$core$IFn$_invoke$arity$1(flow));
var frame_id = (frame?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(frame,new cljs.core.Keyword(null,"id","id",-1388402092)));
return rumext.v2.jsx(app.main.ui.workspace.viewport.widgets.frame_flow_STAR_,{'flow':flow,'frame':frame,'isSelected':cljs.core.contains_QMARK_(selected,frame_id),'zoom':zoom,'onFrameEnter':on_frame_enter,'onFrameLeave':on_frame_leave,'onFrameSelect':on_frame_select},""+(frame_id ?? "")+"-"+(flow_id ?? ""));
})());

return out_arr__35152__auto__;
}),[],flows)});
});

(app.main.ui.workspace.viewport.widgets.frame_flows_STAR_.displayName = "frame-flows*");

app.main.ui.workspace.viewport.widgets.button_add_STAR_ = (function app$main$ui$workspace$viewport$widgets$button_add_STAR_(props_57273){
var zoom = props_57273.zoom;
var on_click = props_57273.onClick;
var shape = props_57273.shape;
var map__57274 = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape);
var map__57274__$1 = cljs.core.__destructure_map(map__57274);
var x2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57274__$1,new cljs.core.Keyword(null,"x2","x2",-1362513475));
var y2 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57274__$1,new cljs.core.Keyword(null,"y2","y2",-718691301));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__57274__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var center_x = (x2 + ((22) / zoom));
var center_y = (y2 - (height / (2)));
var rect_x = (center_x - ((16) / zoom));
var rect_y = (center_y - ((16) / zoom));
var rect_sz = ((32) / zoom);
var rect_r = ((8) / zoom);
var icon_x = (center_x - ((8) / zoom));
var icon_y = (center_y - ((8) / zoom));
var icon_sz = ((16) / zoom);
var handle_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_click)],(function (){
if(cljs.core.fn_QMARK_(on_click)){
return (on_click.cljs$core$IFn$_invoke$arity$0 ? on_click.cljs$core$IFn$_invoke$arity$0() : on_click.call(null));
} else {
return null;
}
}));
return rumext.v2.jsxs("g",{'onClick':handle_click,'className':"main_ui_workspace_viewport_widgets__button-add-wrapper",'children':[rumext.v2.jsx("rect",{'x':rect_x,'y':rect_y,'width':rect_sz,'height':rect_sz,'rx':rect_r,'ry':rect_r}),rumext.v2.jsx("use",{'x':icon_x,'y':icon_y,'width':icon_sz,'height':icon_sz,'href':"#icon-add",'className':"main_ui_workspace_viewport_widgets__button-add-icon"})]});
});

(app.main.ui.workspace.viewport.widgets.button_add_STAR_.displayName = "button-add*");


//# sourceMappingURL=app.main.ui.workspace.viewport.widgets.js.map
