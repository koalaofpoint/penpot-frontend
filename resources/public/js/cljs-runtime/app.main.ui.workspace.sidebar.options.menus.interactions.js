import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.helpers.js";
import "./app.common.types.page.js";
import "./app.common.types.shape_tree.js";
import "./app.common.types.shape.interactions.js";
import "./app.common.uuid.js";
import "./app.main.data.common.js";
import "./app.main.data.workspace.interactions.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.radio_buttons.js";
import "./app.main.ui.components.select.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.controls.checkbox.js";
import "./app.main.ui.ds.controls.input.js";
import "./app.main.ui.ds.controls.numeric_input.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.product.empty_state.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.interactions');
app.main.ui.workspace.sidebar.options.menus.interactions.event_type_names = (function app$main$ui$workspace$sidebar$options$menus$interactions$event_type_names(){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"click","click",1912301393),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-on-click"),new cljs.core.Keyword(null,"mouse-enter","mouse-enter",678856303),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-mouse-enter"),new cljs.core.Keyword(null,"mouse-leave","mouse-leave",135558349),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-mouse-leave"),new cljs.core.Keyword(null,"after-delay","after-delay",-2054763582),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-after-delay")], null);
});
app.main.ui.workspace.sidebar.options.menus.interactions.event_type_name = (function app$main$ui$workspace$sidebar$options$menus$interactions$event_type_name(interaction){
return cljs.core.get.cljs$core$IFn$_invoke$arity$3(app.main.ui.workspace.sidebar.options.menus.interactions.event_type_names(),new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),"--");
});
app.main.ui.workspace.sidebar.options.menus.interactions.action_summary = (function app$main$ui$workspace$sidebar$options$menus$interactions$action_summary(interaction,destination){
var G__55409 = new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction);
var G__55409__$1 = (((G__55409 instanceof cljs.core.Keyword))?G__55409.fqn:null);
switch (G__55409__$1) {
case "navigate":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.options.interaction-navigate-to-dest",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$3(destination,new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-none"))], 0));

break;
case "open-overlay":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.options.interaction-open-overlay-dest",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$3(destination,new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-none"))], 0));

break;
case "toggle-overlay":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.options.interaction-toggle-overlay-dest",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$3(destination,new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-none"))], 0));

break;
case "close-overlay":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.options.interaction-close-overlay-dest",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.get.cljs$core$IFn$_invoke$arity$3(destination,new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-self"))], 0));

break;
case "prev-screen":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-prev-screen");

break;
case "open-url":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-open-url");

break;
default:
return "--";

}
});
app.main.ui.workspace.sidebar.options.menus.interactions.get_frames_options = (function app$main$ui$workspace$sidebar$options$menus$interactions$get_frames_options(frames,shape){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (frame){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(frame)], null);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55410_SHARP_){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55410_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55410_SHARP_),new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(shape))));
}),frames));
});
app.main.ui.workspace.sidebar.options.menus.interactions.get_shared_frames_options = (function app$main$ui$workspace$sidebar$options$menus$interactions$get_shared_frames_options(shared_frames){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (frame){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(frame)], null);
}),shared_frames);
});
app.main.ui.workspace.sidebar.options.menus.interactions.prototype_pill_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$interactions$prototype_pill_STAR_(props_55424,external_ref){
var on_change = props_55424.onChange;
var is_left_button_active = props_55424.isLeftButtonActive;
var description = props_55424.description;
var is_right_button_active = props_55424.isRightButtonActive;
var is_editable = props_55424.isEditable;
var right_button_icon_id = props_55424.rightButtonIconId;
var on_right_button_click = props_55424.onRightButtonClick;
var left_button_icon_id = props_55424.leftButtonIconId;
var right_button_tooltip = props_55424.rightButtonTooltip;
var title = props_55424.title;
var on_left_button_click = props_55424.onLeftButtonClick;
var left_button_tooltip = props_55424.leftButtonTooltip;
var local_ref = rumext.v2.use_ref();
var ref = (function (){var or__5025__auto__ = external_ref;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return local_ref;
}
})();
var handle_focus = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
var input_node = rumext.v2.ref_val(ref);
return app.util.dom.select_text_BANG_(input_node);
}));
var handle_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var input_node = rumext.v2.ref_val(ref);
var target = app.util.dom.get_target(event);
var value = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_value(target));
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.keyboard.esc_QMARK_(event);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.keyboard.enter_QMARK_(event);
}
})())){
app.util.dom.blur_BANG_(input_node);

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value) : on_change.call(null,value));
} else {
return null;
}
}));
var handle_blur = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var target = app.util.dom.get_target(event);
var value = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_value(target));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(value) : on_change.call(null,value));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__prototype-pill"+" "+(((!((description == null))))?"main_ui_workspace_sidebar_options_menus_interactions__double":""),'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"secondary",'className':"main_ui_workspace_sidebar_options_menus_interactions__prototype-pill-button main_ui_workspace_sidebar_options_menus_interactions__left",'aria-pressed':is_left_button_active,'icon':left_button_icon_id,'aria-label':left_button_tooltip,'onClick':on_left_button_click}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__prototype-pill-main",'children':[(cljs.core.truth_(is_editable)?rumext.v2.jsx("input",{'type':"text",'ref':ref,'defaultValue':title,'onFocus':handle_focus,'onKeyDown':handle_key_down,'onBlur':handle_blur,'className':"main_ui_workspace_sidebar_options_menus_interactions__prototype-pill-input"}):rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__prototype-pill-center",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__prototype-pill-info",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__prototype-pill-name",'children':title}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__prototype-pill-description",'children':description})]})})),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"secondary",'className':"main_ui_workspace_sidebar_options_menus_interactions__prototype-pill-button main_ui_workspace_sidebar_options_menus_interactions__right",'aria-pressed':is_right_button_active,'icon':right_button_icon_id,'aria-label':right_button_tooltip,'onClick':on_right_button_click})]})]});
});

(app.main.ui.workspace.sidebar.options.menus.interactions.prototype_pill_STAR_.displayName = "prototype-pill*");

app.main.ui.workspace.sidebar.options.menus.interactions.flow_item_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$interactions$flow_item_STAR_(props_55425){
var flow = props_55425.flow;
var start_flow = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(flow)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_viewer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"section","section",-300141526),"interactions",new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),new cljs.core.Keyword(null,"starting-frame","starting-frame",-1907986271).cljs$core$IFn$_invoke$arity$1(flow)], null)], 0)));
}));
var rename_flow = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(flow)],(function (value){
if(cuerdas.core.empty_QMARK_(value)){
return null;
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.interactions.rename_flow(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(flow),value));
}
}));
var remove_flow = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(flow)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.interactions.remove_flow.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(flow)));
}));
return rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.interactions.prototype_pill_STAR_,{'onChange':rename_flow,'leftButtonTooltip':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.flows.flow-start"),'leftButtonIconId':app.main.ui.ds.foundations.assets.icon.play,'onRightButtonClick':remove_flow,'onLeftButtonClick':start_flow,'rightButtonTooltip':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.remove"),'isEditable':true,'rightButtonIconId':app.main.ui.ds.foundations.assets.icon.remove,'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(flow,"")});
});

(app.main.ui.workspace.sidebar.options.menus.interactions.flow_item_STAR_.displayName = "flow-item*");

app.main.ui.workspace.sidebar.options.menus.interactions.interaction_item_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$interactions$interaction_item_STAR_(props_55444){
var update_interaction = props_55444.updateInteraction;
var index = props_55444.index;
var interaction = props_55444.interaction;
var remove_interaction = props_55444.removeInteraction;
var shape = props_55444.shape;
var objects = cljs.core.deref(app.main.refs.workspace_page_objects);
var destination = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction));
var frames = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.common.types.shape_tree.get_viewer_frames.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"all-frames?","all-frames?",-104533347),true], null));
}));
var shape_parent_ids = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.common.files.helpers.get_parent_ids(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
}));
var shape_parents = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frames),rumext.v2.adapt(shape)],(function (){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.set(shape_parent_ids),new cljs.core.Keyword(null,"id","id",-1388402092)),frames);
}));
var overlay_pos_type = new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455).cljs$core$IFn$_invoke$arity$1(interaction);
var close_click_outside_QMARK_ = new cljs.core.Keyword(null,"close-click-outside","close-click-outside",1133482612).cljs$core$IFn$_invoke$arity$2(interaction,false);
var background_overlay_QMARK_ = new cljs.core.Keyword(null,"background-overlay","background-overlay",1186220424).cljs$core$IFn$_invoke$arity$2(interaction,false);
var preserve_scroll_QMARK_ = new cljs.core.Keyword(null,"preserve-scroll","preserve-scroll",-1515148069).cljs$core$IFn$_invoke$arity$2(interaction,false);
var way = new cljs.core.Keyword(null,"way","way",1564954669).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction));
var direction = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction));
var open_extended_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var open_extended_QMARK_ = cljs.core.deref(open_extended_STAR_);
var ext_delay_ref = rumext.v2.use_ref(null);
var ext_duration_ref = rumext.v2.use_ref(null);
var toggle_extended = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_extended_STAR_,cljs.core.not);
}));
var change_event_type = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(update_interaction)],(function (event){
var value = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event);
var G__55445 = index;
var G__55446 = (function (p1__55426_SHARP_){
return app.common.types.shape.interactions.set_event_type(p1__55426_SHARP_,value,shape);
});
return (update_interaction.cljs$core$IFn$_invoke$arity$2 ? update_interaction.cljs$core$IFn$_invoke$arity$2(G__55445,G__55446) : update_interaction.call(null,G__55445,G__55446));
}));
var change_action_type = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(update_interaction)],(function (event){
var value = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event);
var G__55447 = index;
var G__55448 = (function (p1__55427_SHARP_){
return app.common.types.shape.interactions.set_action_type(p1__55427_SHARP_,value);
});
return (update_interaction.cljs$core$IFn$_invoke$arity$2 ? update_interaction.cljs$core$IFn$_invoke$arity$2(G__55447,G__55448) : update_interaction.call(null,G__55447,G__55448));
}));
var change_delay = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(update_interaction)],(function (value){
var G__55449 = index;
var G__55450 = (function (p1__55428_SHARP_){
return app.common.types.shape.interactions.set_delay(p1__55428_SHARP_,value);
});
return (update_interaction.cljs$core$IFn$_invoke$arity$2 ? update_interaction.cljs$core$IFn$_invoke$arity$2(G__55449,G__55450) : update_interaction.call(null,G__55449,G__55450));
}));
var change_destination = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(update_interaction)],(function (event){
var value = event;
var value__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,""))?app.common.uuid.parse(value):null);
var G__55451 = index;
var G__55452 = (function (p1__55429_SHARP_){
return app.common.types.shape.interactions.set_destination(p1__55429_SHARP_,value__$1);
});
return (update_interaction.cljs$core$IFn$_invoke$arity$2 ? update_interaction.cljs$core$IFn$_invoke$arity$2(G__55451,G__55452) : update_interaction.call(null,G__55451,G__55452));
}));
var change_position_relative_to = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(update_interaction)],(function (event){
var value = app.common.uuid.parse_STAR_(event);
var G__55453 = index;
var G__55454 = (function (p1__55430_SHARP_){
return app.common.types.shape.interactions.set_position_relative_to(p1__55430_SHARP_,value);
});
return (update_interaction.cljs$core$IFn$_invoke$arity$2 ? update_interaction.cljs$core$IFn$_invoke$arity$2(G__55453,G__55454) : update_interaction.call(null,G__55453,G__55454));
}));
var change_preserve_scroll = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(update_interaction)],(function (event){
var value = app.util.dom.checked_QMARK_(app.util.dom.get_target(event));
var G__55455 = index;
var G__55456 = (function (p1__55431_SHARP_){
return app.common.types.shape.interactions.set_preserve_scroll(p1__55431_SHARP_,value);
});
return (update_interaction.cljs$core$IFn$_invoke$arity$2 ? update_interaction.cljs$core$IFn$_invoke$arity$2(G__55455,G__55456) : update_interaction.call(null,G__55455,G__55456));
}));
var change_url = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(update_interaction)],(function (event){
var target = app.util.dom.get_target(event);
var value = app.util.dom.get_value(target);
var has_prefix_QMARK_ = ((cuerdas.core.starts_with_QMARK_(value,"http://")) || (cuerdas.core.starts_with_QMARK_(value,"https://")));
var value__$1 = ((has_prefix_QMARK_)?value:["http://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)].join(''));
if(has_prefix_QMARK_){
} else {
app.util.dom.set_value_BANG_(target,value__$1);
}

if(cljs.core.truth_(app.util.dom.valid_QMARK_(target))){
app.util.dom.remove_class_BANG_(target,"error");

var G__55457 = index;
var G__55458 = (function (p1__55432_SHARP_){
return app.common.types.shape.interactions.set_url(p1__55432_SHARP_,value__$1);
});
return (update_interaction.cljs$core$IFn$_invoke$arity$2 ? update_interaction.cljs$core$IFn$_invoke$arity$2(G__55457,G__55458) : update_interaction.call(null,G__55457,G__55458));
} else {
return app.util.dom.add_class_BANG_(target,"error");
}
}));
var change_overlay_pos_type = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape),rumext.v2.adapt(update_interaction)],(function (value){
var shape_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
var G__55459_55565 = index;
var G__55460_55566 = (function (p1__55433_SHARP_){
return app.common.types.shape.interactions.set_overlay_pos_type(p1__55433_SHARP_,value,shape,objects);
});
(update_interaction.cljs$core$IFn$_invoke$arity$2 ? update_interaction.cljs$core$IFn$_invoke$arity$2(G__55459_55565,G__55460_55566) : update_interaction.call(null,G__55459_55565,G__55460_55566));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"manual","manual",-237370608))){
var G__55461 = index;
var G__55462 = (function (p1__55434_SHARP_){
return app.common.types.shape.interactions.set_position_relative_to(p1__55434_SHARP_,shape_id);
});
return (update_interaction.cljs$core$IFn$_invoke$arity$2 ? update_interaction.cljs$core$IFn$_invoke$arity$2(G__55461,G__55462) : update_interaction.call(null,G__55461,G__55462));
} else {
return null;
}
}));
var toggle_overlay_pos_type = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(update_interaction)],(function (event){
var pos_type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
var G__55464 = index;
var G__55465 = (function (p1__55435_SHARP_){
return app.common.types.shape.interactions.toggle_overlay_pos_type(p1__55435_SHARP_,pos_type,shape,objects);
});
return (update_interaction.cljs$core$IFn$_invoke$arity$2 ? update_interaction.cljs$core$IFn$_invoke$arity$2(G__55464,G__55465) : update_interaction.call(null,G__55464,G__55465));
}));
var change_close_click_outside = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(update_interaction)],(function (event){
var value = app.util.dom.checked_QMARK_(app.util.dom.get_target(event));
var G__55466 = index;
var G__55467 = (function (p1__55436_SHARP_){
return app.common.types.shape.interactions.set_close_click_outside(p1__55436_SHARP_,value);
});
return (update_interaction.cljs$core$IFn$_invoke$arity$2 ? update_interaction.cljs$core$IFn$_invoke$arity$2(G__55466,G__55467) : update_interaction.call(null,G__55466,G__55467));
}));
var change_background_overlay = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(update_interaction)],(function (event){
var value = app.util.dom.checked_QMARK_(app.util.dom.get_target(event));
var G__55468 = index;
var G__55469 = (function (p1__55437_SHARP_){
return app.common.types.shape.interactions.set_background_overlay(p1__55437_SHARP_,value);
});
return (update_interaction.cljs$core$IFn$_invoke$arity$2 ? update_interaction.cljs$core$IFn$_invoke$arity$2(G__55468,G__55469) : update_interaction.call(null,G__55468,G__55469));
}));
var change_animation_type = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(update_interaction)],(function (event){
var value = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",event))?null:cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event));
var G__55470 = index;
var G__55471 = (function (p1__55438_SHARP_){
return app.common.types.shape.interactions.set_animation_type(p1__55438_SHARP_,value);
});
return (update_interaction.cljs$core$IFn$_invoke$arity$2 ? update_interaction.cljs$core$IFn$_invoke$arity$2(G__55470,G__55471) : update_interaction.call(null,G__55470,G__55471));
}));
var change_duration = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(update_interaction)],(function (value){
var G__55472 = index;
var G__55473 = (function (p1__55439_SHARP_){
return app.common.types.shape.interactions.set_duration(p1__55439_SHARP_,value);
});
return (update_interaction.cljs$core$IFn$_invoke$arity$2 ? update_interaction.cljs$core$IFn$_invoke$arity$2(G__55472,G__55473) : update_interaction.call(null,G__55472,G__55473));
}));
var change_easing = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(update_interaction)],(function (event){
var value = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event);
var G__55474 = index;
var G__55475 = (function (p1__55440_SHARP_){
return app.common.types.shape.interactions.set_easing(p1__55440_SHARP_,value);
});
return (update_interaction.cljs$core$IFn$_invoke$arity$2 ? update_interaction.cljs$core$IFn$_invoke$arity$2(G__55474,G__55475) : update_interaction.call(null,G__55474,G__55475));
}));
var change_way = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(update_interaction)],(function (event){
var value = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event);
var G__55476 = index;
var G__55477 = (function (p1__55441_SHARP_){
return app.common.types.shape.interactions.set_way(p1__55441_SHARP_,value);
});
return (update_interaction.cljs$core$IFn$_invoke$arity$2 ? update_interaction.cljs$core$IFn$_invoke$arity$2(G__55476,G__55477) : update_interaction.call(null,G__55476,G__55477));
}));
var change_direction = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(update_interaction)],(function (event){
var value = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event);
var G__55478 = index;
var G__55479 = (function (p1__55442_SHARP_){
return app.common.types.shape.interactions.set_direction(p1__55442_SHARP_,value);
});
return (update_interaction.cljs$core$IFn$_invoke$arity$2 ? update_interaction.cljs$core$IFn$_invoke$arity$2(G__55478,G__55479) : update_interaction.call(null,G__55478,G__55479));
}));
var change_offset_effect = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(update_interaction)],(function (event){
var value = app.util.dom.checked_QMARK_(app.util.dom.get_target(event));
var G__55480 = index;
var G__55481 = (function (p1__55443_SHARP_){
return app.common.types.shape.interactions.set_offset_effect(p1__55443_SHARP_,value);
});
return (update_interaction.cljs$core$IFn$_invoke$arity$2 ? update_interaction.cljs$core$IFn$_invoke$arity$2(G__55480,G__55481) : update_interaction.call(null,G__55480,G__55481));
}));
var event_type_options = (function (){var G__55482 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"click","click",1912301393),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-on-click")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mouse-enter","mouse-enter",678856303),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-mouse-enter")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mouse-leave","mouse-leave",135558349),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-mouse-leave")], null)], null);
if(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__55482,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"after-delay","after-delay",-2054763582),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-after-delay")], null));
} else {
return G__55482;
}
})();
var action_type_options = new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"navigate","navigate",657596805),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-navigate-to")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"open-overlay","open-overlay",-611391651),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-open-overlay")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"toggle-overlay","toggle-overlay",1195934961),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-toggle-overlay")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"close-overlay","close-overlay",1224325518),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-close-overlay")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"prev-screen","prev-screen",1175524591),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-prev-screen")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"open-url","open-url",-1504173381),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-open-url")], null)], null);
var frames_opts = app.main.ui.workspace.sidebar.options.menus.interactions.get_frames_options(frames,shape);
var default_opts = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"close-overlay","close-overlay",1224325518)))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-self")], null):new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-none")], null))], null);
var destination_options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frames_opts),rumext.v2.adapt(default_opts)],(function (){
var sorted_frames_opts = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"label","label",1718410804),frames_opts);
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(default_opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([sorted_frames_opts], 0));
}));
var shape_parents_opts = app.main.ui.workspace.sidebar.options.menus.interactions.get_shared_frames_options(shape_parents);
var relative_to_opts = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_parents_opts)],(function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455).cljs$core$IFn$_invoke$arity$1(interaction),new cljs.core.Keyword(null,"manual","manual",-237370608))){
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-auto")], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shape_parents_opts,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-self")),")"].join('')], null)], null)], 0));
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"label","label",1718410804),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-self")),")"].join('')], null)], null);
}
}));
var overlay_position_opts = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"manual","manual",-237370608),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-pos-manual")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-pos-center")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"top-left","top-left",-1396159636),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-pos-top-left")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"top-right","top-right",284698505),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-pos-top-right")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"top-center","top-center",1447995281),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-pos-top-center")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-pos-bottom-left")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-pos-bottom-right")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"bottom-center","bottom-center",1844600634),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-pos-bottom-center")], null)], null);
var basic_animation_opts = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-animation-none")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"dissolve","dissolve",-629896345),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-animation-dissolve")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"slide","slide",142491892),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-animation-slide")], null)], null);
var animation_opts = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(basic_animation_opts)],(function (){
if(app.common.types.shape.interactions.allow_push_QMARK_(new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction))){
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(basic_animation_opts,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"push","push",799791267),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-animation-push")], null)], null)], 0));
} else {
return basic_animation_opts;
}
}));
var easing_options = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"easing-linear","easing-linear",-1638484978),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"linear","linear",872268697),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-easing-linear")], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"easing-ease","easing-ease",-1909581280),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ease","ease",-1427802543),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-easing-ease")], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"easing-ease-in","easing-ease-in",-842794625),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ease-in","ease-in",-819423123),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-easing-ease-in")], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"easing-ease-out","easing-ease-out",-82935390),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ease-out","ease-out",1760664474),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-easing-ease-out")], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"easing-ease-in-out","easing-ease-in-out",33260603),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"ease-in-out","ease-in-out",1896519269),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-easing-ease-in-out")], null)], null);
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-item",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.interactions.prototype_pill_STAR_,{'isLeftButtonActive':open_extended_QMARK_,'leftButtonTooltip':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.options"),'leftButtonIconId':app.main.ui.ds.foundations.assets.icon.hsva,'onRightButtonClick':(function (){
return (remove_interaction.cljs$core$IFn$_invoke$arity$1 ? remove_interaction.cljs$core$IFn$_invoke$arity$1(index) : remove_interaction.call(null,index));
}),'onLeftButtonClick':toggle_extended,'rightButtonTooltip':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.remove"),'rightButtonIconId':app.main.ui.ds.foundations.assets.icon.remove,'title':app.main.ui.workspace.sidebar.options.menus.interactions.event_type_name(interaction),'description':app.main.ui.workspace.sidebar.options.menus.interactions.action_summary(interaction,destination)}),(cljs.core.truth_(open_extended_QMARK_)?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row",'children':[rumext.v2.jsx("label",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-label",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-trigger")})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-select",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':new cljs.core.Keyword(null,"event-type","event-type",319722813).cljs$core$IFn$_invoke$arity$1(interaction),'options':event_type_options,'on-change':change_event_type})})]}),((app.common.types.shape.interactions.has_delay(interaction))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-label",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-delay")})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-input",'children':rumext.v2.jsx(app.main.ui.ds.controls.numeric_input.numeric_input_STAR_,{'ref':ext_delay_ref,'icon':app.main.ui.ds.foundations.assets.icon.character_m,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-ms"),'onChange':change_delay,'value':new cljs.core.Keyword(null,"delay","delay",-574225219).cljs$core$IFn$_invoke$arity$1(interaction)})})]}):null),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-label",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-action")})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-select",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':new cljs.core.Keyword(null,"action-type","action-type",-1141667361).cljs$core$IFn$_invoke$arity$1(interaction),'options':action_type_options,'on-change':change_action_type})})]}),(cljs.core.truth_(app.common.types.shape.interactions.has_destination(interaction))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-label",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-destination")})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-select",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"destination","destination",-253872483).cljs$core$IFn$_invoke$arity$1(interaction)),'options':destination_options,'on-change':change_destination})})]}):null),((app.common.types.shape.interactions.has_preserve_scroll(interaction))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-checkbox",'children':rumext.v2.jsx(app.main.ui.ds.controls.checkbox.checkbox_STAR_,{'id':["preserve-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-preserve-scroll"),'checked':preserve_scroll_QMARK_,'onChange':change_preserve_scroll})})}):null),((app.common.types.shape.interactions.has_url(interaction))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-label",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-url")})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-input",'children':rumext.v2.jsx(app.main.ui.ds.controls.input.input_STAR_,{'type':"url",'placeholder':"http://example.com",'defaultValue':new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(interaction),'onBlur':change_url})})]}):null),(cljs.core.truth_(app.common.types.shape.interactions.has_overlay_opts(interaction))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-label",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-relative-to")})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-select",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"position-relative-to","position-relative-to",-1904679190).cljs$core$IFn$_invoke$arity$1(interaction)),'options':relative_to_opts,'on-change':change_position_relative_to})})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-label",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-position")})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-select",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':new cljs.core.Keyword(null,"overlay-pos-type","overlay-pos-type",-1941746455).cljs$core$IFn$_invoke$arity$1(interaction),'options':overlay_position_opts,'on-change':change_overlay_pos_type})})]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-position",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__center",'children':rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"secondary",'aria-pressed':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(overlay_pos_type,new cljs.core.Keyword(null,"center","center",-748944368)),'data-value':"center",'icon':app.main.ui.ds.foundations.assets.icon.corner_center,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-pos-center"),'onClick':toggle_overlay_pos_type})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__top-left",'children':rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"secondary",'aria-pressed':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(overlay_pos_type,new cljs.core.Keyword(null,"top-left","top-left",-1396159636)),'data-value':"top-left",'icon':app.main.ui.ds.foundations.assets.icon.corner_top_left,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-pos-top-left"),'onClick':toggle_overlay_pos_type})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__top-right",'children':rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"secondary",'aria-pressed':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(overlay_pos_type,new cljs.core.Keyword(null,"top-right","top-right",284698505)),'data-value':"top-right",'icon':app.main.ui.ds.foundations.assets.icon.corner_top_right,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-pos-top-right"),'onClick':toggle_overlay_pos_type})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__top-center",'children':rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"secondary",'aria-pressed':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(overlay_pos_type,new cljs.core.Keyword(null,"top-center","top-center",1447995281)),'data-value':"top-center",'icon':app.main.ui.ds.foundations.assets.icon.corner_top,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-pos-top-center"),'onClick':toggle_overlay_pos_type})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__bottom-left",'children':rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"secondary",'aria-pressed':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(overlay_pos_type,new cljs.core.Keyword(null,"bottom-left","bottom-left",1607421488)),'data-value':"bottom-left",'icon':app.main.ui.ds.foundations.assets.icon.corner_bottom_left,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-pos-bottom-left"),'onClick':toggle_overlay_pos_type})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__bottom-right",'children':rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"secondary",'aria-pressed':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(overlay_pos_type,new cljs.core.Keyword(null,"bottom-right","bottom-right",956401646)),'data-value':"bottom-right",'icon':app.main.ui.ds.foundations.assets.icon.corner_bottom_right,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-pos-bottom-right"),'onClick':toggle_overlay_pos_type})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__bottom-center",'children':rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"secondary",'aria-pressed':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(overlay_pos_type,new cljs.core.Keyword(null,"bottom-center","bottom-center",1844600634)),'data-value':"bottom-center",'icon':app.main.ui.ds.foundations.assets.icon.corner_bottom,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-pos-bottom-center"),'onClick':toggle_overlay_pos_type})})]})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-checkbox",'children':rumext.v2.jsx(app.main.ui.ds.controls.checkbox.checkbox_STAR_,{'id':["close-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-close-outside"),'checked':close_click_outside_QMARK_,'onChange':change_close_click_outside})})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-checkbox",'children':rumext.v2.jsx(app.main.ui.ds.controls.checkbox.checkbox_STAR_,{'id':["background-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-background"),'checked':background_overlay_QMARK_,'onChange':change_background_overlay})})})]}):null),(cljs.core.truth_(app.common.types.shape.interactions.has_animation_QMARK_(interaction))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-label",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-animation")})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-select",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'class':"main_ui_workspace_sidebar_options_menus_interactions__animation-select",'default-value':(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"animation-type","animation-type",-1444568230).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),'options':animation_opts,'on-change':change_animation_type})})]}),((app.common.types.shape.interactions.has_way_QMARK_(interaction))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-radio",'children':rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':app.common.data.name(way),'on-change':change_way,'name':"animation-way",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"in",'id':"animation-way-in"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'id':"animation-way-out",'value':"out"})]})})}):null),(cljs.core.truth_(app.common.types.shape.interactions.has_direction_QMARK_(interaction))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-radio",'children':rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':app.common.data.name(direction),'on-change':change_direction,'name':"animation-direction",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.row,'icon-class':"main_ui_workspace_sidebar_options_menus_interactions__right",'value':"right",'id':"animation-right"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.row_reverse,'icon-class':"main_ui_workspace_sidebar_options_menus_interactions__left",'id':"animation-left",'value':"left"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.column,'icon-class':"main_ui_workspace_sidebar_options_menus_interactions__down",'id':"animation-down",'value':"down"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.column_reverse,'icon-class':"main_ui_workspace_sidebar_options_menus_interactions__up",'id':"animation-up",'value':"up"})]})})}):null),(cljs.core.truth_(app.common.types.shape.interactions.has_duration_QMARK_(interaction))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-label",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-duration")})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-input",'children':rumext.v2.jsx(app.main.ui.ds.controls.numeric_input.numeric_input_STAR_,{'ref':ext_duration_ref,'icon':app.main.ui.ds.foundations.assets.icon.character_m,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-ms"),'onChange':change_duration,'value':new cljs.core.Keyword(null,"duration","duration",1444101068).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction))})})]}):null),(cljs.core.truth_(app.common.types.shape.interactions.has_easing_QMARK_(interaction))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-label",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-easing")})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-select",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'class':"main_ui_workspace_sidebar_options_menus_interactions__easing-select",'dropdown-class':"main_ui_workspace_sidebar_options_menus_interactions__dropdown-upwards",'default-value':new cljs.core.Keyword(null,"easing","easing",735372043).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction)),'options':easing_options,'on-change':change_easing})})]}):null),((app.common.types.shape.interactions.has_offset_effect_QMARK_(interaction))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__interaction-row-checkbox",'children':rumext.v2.jsx(app.main.ui.ds.controls.checkbox.checkbox_STAR_,{'id':["offset-effect-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interaction-offset-effect"),'checked':new cljs.core.Keyword(null,"offset-effect","offset-effect",1997999208).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"animation","animation",-1248293244).cljs$core$IFn$_invoke$arity$1(interaction)),'onChange':change_offset_effect})})}):null)]}):null)]}):null)]});
});

(app.main.ui.workspace.sidebar.options.menus.interactions.interaction_item_STAR_.displayName = "interaction-item*");

app.main.ui.workspace.sidebar.options.menus.interactions.page_flows_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$interactions$page_flows_STAR_(props_55487){
var flows = props_55487.flows;
var show_content_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(true);
var show_content_QMARK_ = cljs.core.deref(show_content_STAR_);
var toggle_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_content_STAR_,cljs.core.not);
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__section",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__title",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':(cljs.core.count(flows) > (0)),'collapsed':cljs.core.not(show_content_QMARK_),'onCollapsed':toggle_content,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.flows.flow-starts"),'className':"main_ui_workspace_sidebar_options_menus_interactions__title-bar"})}),(cljs.core.truth_(show_content_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__content",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55495){
var vec__55497 = p__55495;
var id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55497,(0),null);
var flow = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55497,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.interactions.flow_item_STAR_,{'flow':flow},id));

return out_arr__35152__auto__;
}),[],flows)}):null)]});
});

(app.main.ui.workspace.sidebar.options.menus.interactions.page_flows_STAR_.displayName = "page-flows*");

app.main.ui.workspace.sidebar.options.menus.interactions.shape_flows_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$interactions$shape_flows_STAR_(props_55502){
var flows = props_55502.flows;
var shape = props_55502.shape;
var show_content_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(true);
var show_content_QMARK_ = cljs.core.deref(show_content_STAR_);
var flow = app.common.types.page.get_frame_flow(flows,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
var toggle_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_content_STAR_,cljs.core.not);
}));
var add_flow = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.interactions.add_flow_selected_frame());
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__section",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__title",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':(!((flow == null))),'collapsed':cljs.core.not(show_content_QMARK_),'onCollapsed':toggle_content,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.flows.flow"),'className':"main_ui_workspace_sidebar_options_menus_interactions__title-bar",'children':(((flow == null))?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.flows.add-flow-start"),'onClick':add_flow,'icon':app.main.ui.ds.foundations.assets.icon.add}):null)})}),(cljs.core.truth_((function (){var and__5023__auto__ = show_content_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (!((flow == null)));
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__content",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.interactions.flow_item_STAR_,{'flow':flow},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(flow))}):null)]});
});

(app.main.ui.workspace.sidebar.options.menus.interactions.shape_flows_STAR_.displayName = "shape-flows*");

app.main.ui.workspace.sidebar.options.menus.interactions.interactions_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$interactions$interactions_STAR_(props_55527){
var interactions = props_55527.interactions;
var shape = props_55527.shape;
var show_content_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(true);
var show_content_QMARK_ = cljs.core.deref(show_content_STAR_);
var toggle_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_content_STAR_,cljs.core.not);
}));
var add_interaction = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.interactions.add_new_interaction.cljs$core$IFn$_invoke$arity$1(shape));
}));
var remove_interaction = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (index){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.interactions.remove_interaction.cljs$core$IFn$_invoke$arity$2(shape,index));
}));
var update_interaction = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (index,update_fn){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.interactions.update_interaction.cljs$core$IFn$_invoke$arity$3(shape,index,update_fn));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__section",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__title",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':(cljs.core.count(interactions) > (0)),'collapsed':cljs.core.not(show_content_QMARK_),'onCollapsed':toggle_content,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interactions"),'className':"main_ui_workspace_sidebar_options_menus_interactions__title-bar",'children':rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.interactions.add-interaction"),'onClick':add_interaction,'icon':app.main.ui.ds.foundations.assets.icon.add})})}),(cljs.core.truth_(show_content_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__content main_ui_workspace_sidebar_options_menus_interactions__content-interactions",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55541){
var vec__55542 = p__55541;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55542,(0),null);
var interaction = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55542,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.interactions.interaction_item_STAR_,{'index':index,'shape':shape,'interaction':interaction,'updateInteraction':update_interaction,'removeInteraction':remove_interaction},[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(interactions))}):null)]});
});

(app.main.ui.workspace.sidebar.options.menus.interactions.interactions_STAR_.displayName = "interactions*");

app.main.ui.workspace.sidebar.options.menus.interactions.interactions_menu_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$interactions$interactions_menu_STAR_(props_55548){
var shape = props_55548.shape;
var interactions = cljs.core.get.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"interactions","interactions",550841811),cljs.core.PersistentVector.EMPTY);
var flows = rumext.v2.deref(app.main.refs.workspace_page_flows);
var framed_shape_QMARK_ = (function (){var and__5023__auto__ = shape;
if(cljs.core.truth_(and__5023__auto__)){
return (!(app.common.files.helpers.unframed_shape_QMARK_(shape)));
} else {
return and__5023__auto__;
}
})();
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__wrapper",'children':[(cljs.core.truth_(shape)?((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.interactions.shape_flows_STAR_,{'flows':flows,'shape':shape}):null):(cljs.core.truth_(flows)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.interactions.page_flows_STAR_,{'flows':flows}):null)),(cljs.core.truth_(framed_shape_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.interactions.interactions_STAR_,{'interactions':interactions,'shape':shape}):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(interactions),(0)))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__section",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__content",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_interactions__empty",'children':[(cljs.core.truth_(framed_shape_QMARK_)?rumext.v2.jsx(app.main.ui.ds.product.empty_state.empty_state_STAR_,{'icon':app.main.ui.ds.foundations.assets.icon.add,'text':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.add-interaction")}):null),rumext.v2.jsx(app.main.ui.ds.product.empty_state.empty_state_STAR_,{'icon':app.main.ui.ds.foundations.assets.icon.interaction,'text':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.select-a-shape")}),rumext.v2.jsx(app.main.ui.ds.product.empty_state.empty_state_STAR_,{'icon':app.main.ui.ds.foundations.assets.icon.play,'text':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.use-play-button")})]})})}):null)]});
});

(app.main.ui.workspace.sidebar.options.menus.interactions.interactions_menu_STAR_.displayName = "interactions-menu*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.interactions.js.map
