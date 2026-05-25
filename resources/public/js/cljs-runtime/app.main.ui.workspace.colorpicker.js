import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.matrix.js";
import "./app.common.geom.point.js";
import "./app.common.types.color.js";
import "./app.common.types.fills.js";
import "./app.common.types.tokens_lib.js";
import "./app.config.js";
import "./app.main.data.modal.js";
import "./app.main.data.shortcuts.js";
import "./app.main.data.workspace.colors.js";
import "./app.main.data.workspace.libraries.js";
import "./app.main.data.workspace.media.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.features.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.file_uploader.js";
import "./app.main.ui.components.numeric_input.js";
import "./app.main.ui.components.radio_buttons.js";
import "./app.main.ui.components.select.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.layout.tab_switcher.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.workspace.colorpicker.color_inputs.js";
import "./app.main.ui.workspace.colorpicker.color_tokens.js";
import "./app.main.ui.workspace.colorpicker.gradients.js";
import "./app.main.ui.workspace.colorpicker.harmony.js";
import "./app.main.ui.workspace.colorpicker.hsva.js";
import "./app.main.ui.workspace.colorpicker.libraries.js";
import "./app.main.ui.workspace.colorpicker.ramp.js";
import "./app.main.ui.workspace.colorpicker.shortcuts.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.timers.js";
import "./cuerdas.core.js";
import "./okulary.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
import "./rumext.v2.util.js";
goog.provide('app.main.ui.workspace.colorpicker');
app.main.ui.workspace.colorpicker.picking_color_QMARK_ = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"picking-color?","picking-color?",-819672832),app.main.refs.workspace_global);
app.main.ui.workspace.colorpicker.picked_color = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"picked-color","picked-color",-1962236902),app.main.refs.workspace_global);
app.main.ui.workspace.colorpicker.picked_color_select = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"picked-color-select","picked-color-select",-1074320132),app.main.refs.workspace_global);
app.main.ui.workspace.colorpicker.viewport = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"vport","vport",-1317419022),app.main.refs.workspace_local);
app.main.ui.workspace.colorpicker.opacity__GT_string = (function app$main$ui$workspace$colorpicker$opacity__GT_string(opacity){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(opacity,new cljs.core.Keyword(null,"multiple","multiple",1244445549))){
return ""+((app.common.data.coalesce(opacity,(1)) * (100)) ?? "");
} else {
return new cljs.core.Keyword(null,"multiple","multiple",1244445549);
}
});
app.main.ui.workspace.colorpicker.use_color_picker_css_variables_BANG_ = (function app$main$ui$workspace$colorpicker$use_color_picker_css_variables_BANG_(node_ref,current_color){
return rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_color)],(function (){
var node = rumext.v2.ref_val(node_ref);
var map__54873 = current_color;
var map__54873__$1 = cljs.core.__destructure_map(map__54873);
var r = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54873__$1,new cljs.core.Keyword(null,"r","r",-471384190));
var g = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54873__$1,new cljs.core.Keyword(null,"g","g",1738089905));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54873__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var h = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54873__$1,new cljs.core.Keyword(null,"h","h",1109658740));
var v = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54873__$1,new cljs.core.Keyword(null,"v","v",21465059));
var rgb = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null);
var hue_rgb = app.common.types.color.hsv__GT_rgb(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,1.0,(255)], null));
var hsl_from = app.common.types.color.hsv__GT_hsl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,0.0,v], null));
var hsl_to = app.common.types.color.hsv__GT_hsl(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [h,1.0,v], null));
var format_hsl = (function (p__54874){
var vec__54875 = p__54874;
var h__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54875,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54875,(1),null);
var l = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54875,(2),null);
var G__54878 = "hsl(%s, %s, %s)";
var G__54879 = h__$1;
var G__54880 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((s * (100))),"%"].join('');
var G__54881 = [cljs.core.str.cljs$core$IFn$_invoke$arity$1((l * (100))),"%"].join('');
return (cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$4 ? cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$4(G__54878,G__54879,G__54880,G__54881) : cuerdas.core.fmt.call(null,G__54878,G__54879,G__54880,G__54881));
});
app.util.dom.set_css_property_BANG_(node,"--color",cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",rgb));

app.util.dom.set_css_property_BANG_(node,"--hue-rgb",cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",hue_rgb));

app.util.dom.set_css_property_BANG_(node,"--saturation-grad-from",format_hsl(hsl_from));

return app.util.dom.set_css_property_BANG_(node,"--saturation-grad-to",format_hsl(hsl_to));
}));
});
app.main.ui.workspace.colorpicker.colorpicker = (function app$main$ui$workspace$colorpicker$colorpicker(props_54887){
var map__54888 = rumext.v2.util.wrap_props(props_54887);
var map__54888__$1 = cljs.core.__destructure_map(map__54888);
var tab = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54888__$1,new cljs.core.Keyword(null,"tab","tab",-559583621));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54888__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54888__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var disable_gradient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54888__$1,new cljs.core.Keyword(null,"disable-gradient","disable-gradient",669966752));
var disable_opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54888__$1,new cljs.core.Keyword(null,"disable-opacity","disable-opacity",1547998851));
var on_token_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54888__$1,new cljs.core.Keyword(null,"on-token-change","on-token-change",-504087325));
var combined_tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54888__$1,new cljs.core.Keyword(null,"combined-tokens","combined-tokens",879038436));
var disable_image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54888__$1,new cljs.core.Keyword(null,"disable-image","disable-image",-1920778139));
var applied_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54888__$1,new cljs.core.Keyword(null,"applied-token","applied-token",-1808287379));
var on_accept = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54888__$1,new cljs.core.Keyword(null,"on-accept","on-accept",705439955));
var color_origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54888__$1,new cljs.core.Keyword(null,"color-origin","color-origin",-216238828));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54888__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var state = rumext.v2.deref(app.main.refs.colorpicker);
var node_ref = rumext.v2.use_ref();
var should_update_QMARK_ = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(true);
var token_color = cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"token-color","token-color",875683372));
var color_style_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(tab,new cljs.core.Keyword(null,"direct-color","direct-color",1226799117)));
var color_style = cljs.core.deref(color_style_STAR_);
var toggle_token_color = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color_style)],(function (){
var new_style = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"direct-color","direct-color",1226799117),color_style))?new cljs.core.Keyword(null,"token-color","token-color",875683372):new cljs.core.Keyword(null,"direct-color","direct-color",1226799117));
return cljs.core.reset_BANG_(color_style_STAR_,new_style);
}));
var picking_color_QMARK_ = rumext.v2.deref(app.main.ui.workspace.colorpicker.picking_color_QMARK_);
var picked_color = rumext.v2.deref(app.main.ui.workspace.colorpicker.picked_color);
var picked_color_select = rumext.v2.deref(app.main.ui.workspace.colorpicker.picked_color_select);
var current_color = new cljs.core.Keyword(null,"current-color","current-color",1731984119).cljs$core$IFn$_invoke$arity$1(state);
var active_fill_tab = (cljs.core.truth_(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(data))?new cljs.core.Keyword(null,"image","image",-58725096):(function (){var temp__5823__auto__ = new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(temp__5823__auto__)){
var gradient = temp__5823__auto__;
var G__54890 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(gradient);
var G__54890__$1 = (((G__54890 instanceof cljs.core.Keyword))?G__54890.fqn:null);
switch (G__54890__$1) {
case "linear":
return new cljs.core.Keyword(null,"linear-gradient","linear-gradient",1752751047);

break;
case "radial":
return new cljs.core.Keyword(null,"radial-gradient","radial-gradient",-635026259);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54890__$1)].join('')));

}
} else {
return new cljs.core.Keyword(null,"color","color",1011675173);
}
})());
var active_color_tab_STAR_ = app.main.ui.hooks.use_persisted_state(new cljs.core.Keyword("app.main.ui.workspace.colorpicker","color-tab","app.main.ui.workspace.colorpicker/color-tab",-1957999841),"ramp");
var active_color_tab = cljs.core.deref(active_color_tab_STAR_);
var drag_QMARK__STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var drag_QMARK_ = cljs.core.deref(drag_QMARK__STAR_);
var type = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(active_color_tab,"hsva"))?new cljs.core.Keyword(null,"hsv","hsv",1279089070):new cljs.core.Keyword(null,"rgb","rgb",1432123467));
var fill_image_ref = rumext.v2.use_ref(null);
var color_type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"color","color",1011675173));
var selected_mode = (function (){var G__54891 = color_type;
var G__54891__$1 = (((G__54891 instanceof cljs.core.Keyword))?G__54891.fqn:null);
switch (G__54891__$1) {
case "linear-gradient":
case "radial-gradient":
return new cljs.core.Keyword(null,"gradient","gradient",-1983908971);

break;
default:
return color_type;

}
})();
var disabled_color_accept_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_mode,new cljs.core.Keyword(null,"image","image",-58725096))) && (cljs.core.not(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(current_color))));
var on_fill_image_success = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (image){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.update_colorpicker_color(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"image","image",-58725096),cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.select_keys(image,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"mtype","mtype",-1724656120),new cljs.core.Keyword(null,"name","name",1843675177)], null)),new cljs.core.Keyword(null,"keep-aspect-ratio","keep-aspect-ratio",-475848727),true)], null),cljs.core.not(drag_QMARK_)));
}));
var on_fill_image_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.dom.click(rumext.v2.ref_val(fill_image_ref));
}));
var on_fill_image_selected = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (file){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.media.upload_fill_image(file,on_fill_image_success));
}));
var handle_change_keep_aspect_ratio = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_color)],(function (){
var keep_aspect_ratio_QMARK_ = cljs.core.not(new cljs.core.Keyword(null,"keep-aspect-ratio","keep-aspect-ratio",-475848727).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(current_color)));
var image = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(current_color),new cljs.core.Keyword(null,"keep-aspect-ratio","keep-aspect-ratio",-475848727),keep_aspect_ratio_QMARK_);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.colors.update_colorpicker_color(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"image","image",-58725096),image], null),true),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"toggle-image-aspect-ratio",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:colorpicker",new cljs.core.Keyword(null,"checked","checked",-50955819),keep_aspect_ratio_QMARK_], null))], 0));
}));
var on_change_tab = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p1__54882_SHARP_){
return cljs.core.reset_BANG_(active_color_tab_STAR_,p1__54882_SHARP_);
}));
var handle_change_mode = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (value){
var G__54897 = value;
var G__54897__$1 = (((G__54897 instanceof cljs.core.Keyword))?G__54897.fqn:null);
switch (G__54897__$1) {
case "color":
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.activate_colorpicker_color());

break;
case "gradient":
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.activate_colorpicker_gradient(new cljs.core.Keyword(null,"linear-gradient","linear-gradient",1752751047)));

break;
case "image":
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.activate_colorpicker_image());

break;
default:
return null;

}
}));
var handle_change_color = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_color),rumext.v2.adapt(drag_QMARK_)],(function (color){
var color__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([current_color,color], 0));
var color__$2 = app.main.data.workspace.colors.materialize_color_components(color__$1);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.update_colorpicker_color(color__$2,cljs.core.not(drag_QMARK_)));
}));
var handle_click_picker = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(picking_color_QMARK_)],(function (){
if(cljs.core.truth_(picking_color_QMARK_)){
app.main.data.modal.disallow_click_outside_BANG_();

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.stop_picker());
} else {
app.main.data.modal.allow_click_outside_BANG_();

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.start_picker());
}
}));
var on_select_library_color = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(data),rumext.v2.adapt(handle_change_color)],(function (_,color){
if((((!((new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color) == null)))) && ((!((new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(data) == null)))))){
var G__54901 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hex","hex",41691346),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"alpha","alpha",-1574982441),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color)], null);
return (handle_change_color.cljs$core$IFn$_invoke$arity$1 ? handle_change_color.cljs$core$IFn$_invoke$arity$1(G__54901) : handle_change_color.call(null,G__54901));
} else {
var color__$1 = app.common.data.without_qualified.cljs$core$IFn$_invoke$arity$1(color);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.colors.add_recent_color(color__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.colors.apply_color_from_colorpicker(color__$1)], 0));

return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(color__$1) : on_change.call(null,color__$1));
}
}));
var on_add_library_color = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(state)],(function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.add_color.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.get_color_from_colorpicker_state(state)));
}));
var on_start_drag = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(drag_QMARK__STAR_),rumext.v2.adapt(node_ref)],(function (){
cljs.core.reset_BANG_(should_update_QMARK_,false);

cljs.core.reset_BANG_(drag_QMARK__STAR_,true);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.start_undo_transaction(rumext.v2.ref_val(node_ref)));
}));
var on_finish_drag = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(drag_QMARK__STAR_),rumext.v2.adapt(node_ref)],(function (){
cljs.core.reset_BANG_(should_update_QMARK_,true);

cljs.core.reset_BANG_(drag_QMARK__STAR_,false);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.commit_undo_transaction(rumext.v2.ref_val(node_ref)));
}));
var on_color_accept = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(state)],(function (){
var G__54902_55028 = app.main.data.workspace.colors.get_color_from_colorpicker_state(state);
(on_accept.cljs$core$IFn$_invoke$arity$1 ? on_accept.cljs$core$IFn$_invoke$arity$1(G__54902_55028) : on_accept.call(null,G__54902_55028));

return app.main.data.modal.hide_BANG_();
}));
var options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_mode),rumext.v2.adapt(disable_gradient),rumext.v2.adapt(disable_image)],(function (){
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("media.solid")], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((cljs.core.not(disable_gradient))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"gradient","gradient",-1983908971),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("media.gradient")], null)], null):null),((cljs.core.not(disable_image))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("media.image")], null)], null):null)], 0));
}));
var handle_change_gradient_selected_stop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (index){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.select_colorpicker_gradient_stop(index));
}));
var handle_change_gradient_type = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (type__$1){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.activate_colorpicker_gradient(type__$1));
}));
var handle_gradient_change_stop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(state)],(function (prev_stop,new_stop){
var stops = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54883_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__54883_SHARP_,prev_stop)){
return new_stop;
} else {
return p1__54883_SHARP_;
}
}),new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(state));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.update_colorpicker_stops(stops));
}));
var handle_gradient_add_stop_auto = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.update_colorpicker_add_auto());
}));
var handle_gradient_add_stop_preview = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (offset){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.update_colorpicker_add_stop(offset));
}));
var handle_gradient_remove_stop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (index){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.remove_gradient_stop.cljs$core$IFn$_invoke$arity$1(index));
}));
var handle_stop_edit_start = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(should_update_QMARK_,false);
}));
var handle_stop_edit_finish = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
cljs.core.reset_BANG_(should_update_QMARK_,true);

return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.sort_colorpicker_stops());
}));
}));
var handle_rotate_stops = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(state)],(function (){
var gradient = new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(state);
var mtx = app.common.geom.matrix.rotate_matrix.cljs$core$IFn$_invoke$arity$2((90),app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(0.5,0.5));
var start_p = app.common.geom.point.transform(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-x","start-x",-193941684).cljs$core$IFn$_invoke$arity$1(gradient),new cljs.core.Keyword(null,"start-y","start-y",-771244577).cljs$core$IFn$_invoke$arity$1(gradient)),mtx);
var end_p = app.common.geom.point.transform(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"end-x","end-x",-1323983821).cljs$core$IFn$_invoke$arity$1(gradient),new cljs.core.Keyword(null,"end-y","end-y",859881965).cljs$core$IFn$_invoke$arity$1(gradient)),mtx);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.update_colorpicker_gradient(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"start-x","start-x",-193941684),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(start_p),new cljs.core.Keyword(null,"start-y","start-y",-771244577),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(start_p),new cljs.core.Keyword(null,"end-x","end-x",-1323983821),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(end_p),new cljs.core.Keyword(null,"end-y","end-y",859881965),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(end_p)], null)));
}));
var handle_reverse_stops = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(state))],(function (){
var stops = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"offset","offset",296498311),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (it){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(it,new cljs.core.Keyword(null,"offset","offset",296498311),(function (p1__54884_SHARP_){
return ((1) + ((-1) * p1__54884_SHARP_));
}));
}),new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(state))));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.update_colorpicker_stops(stops));
}));
var handle_reorder_stops = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(state))],(function (from_index,to_index){
var stops = new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(state);
var new_stops = app.common.data.insert_at_index(stops,to_index,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.get.cljs$core$IFn$_invoke$arity$2(stops,from_index)], null));
var stops__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$3((function (p1__54886_SHARP_,p2__54885_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p2__54885_SHARP_,new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(p1__54886_SHARP_));
}),stops,new_stops);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.update_colorpicker_stops(stops__$1));
}));
var handle_change_gradient_opacity = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.update_colorpicker_gradient_opacity((value / (100))));
}));
var render_wasm_QMARK_ = app.main.features.use_feature("render-wasm/v1");
var tabs = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.colors.rgba"),new cljs.core.Keyword(null,"icon","icon",1679606541),app.main.ui.ds.foundations.assets.icon.rgba,new cljs.core.Keyword(null,"id","id",-1388402092),"ramp"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"Harmony",new cljs.core.Keyword(null,"icon","icon",1679606541),app.main.ui.ds.foundations.assets.icon.rgba_complementary,new cljs.core.Keyword(null,"id","id",-1388402092),"harmony"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"aria-label","aria-label",455891514),"HSVA",new cljs.core.Keyword(null,"icon","icon",1679606541),app.main.ui.ds.foundations.assets.icon.hsva,new cljs.core.Keyword(null,"id","id",-1388402092),"hsva"], null)], null);
}));
var show_tokens_QMARK_ = cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color-selection","color-selection",923516039),null,new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),null,new cljs.core.Keyword(null,"fill","fill",883462889),null], null), null),color_origin);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.initialize_colorpicker(on_change,active_fill_tab));

return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.store.emit_BANG_,app.main.data.workspace.colors.finalize_colorpicker());
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(data)],(function (){
if(cljs.core.truth_(cljs.core.deref(should_update_QMARK_))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.update_colorpicker(data));
} else {
return null;
}
}));

app.main.ui.workspace.colorpicker.use_color_picker_css_variables_BANG_(node_ref,current_color);

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(picking_color_QMARK_),rumext.v2.adapt(picked_color),rumext.v2.adapt(picked_color_select)],(function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = picking_color_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = picked_color;
if(cljs.core.truth_(and__5023__auto____$1)){
return picked_color_select;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
var vec__54905 = picked_color;
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54905,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54905,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54905,(2),null);
var alpha = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54905,(3),null);
var hex = app.common.types.color.rgb__GT_hex(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [r,g,b], null));
var vec__54908 = app.common.types.color.hex__GT_hsv(hex);
var h = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54908,(0),null);
var s = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54908,(1),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54908,(2),null);
var G__54911 = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"hex","hex",41691346),hex,new cljs.core.Keyword(null,"r","r",-471384190),r,new cljs.core.Keyword(null,"g","g",1738089905),g,new cljs.core.Keyword(null,"b","b",1482224470),b,new cljs.core.Keyword(null,"h","h",1109658740),h,new cljs.core.Keyword(null,"s","s",1705939918),s,new cljs.core.Keyword(null,"v","v",21465059),v,new cljs.core.Keyword(null,"alpha","alpha",-1574982441),(alpha / (255))], null);
return (handle_change_color.cljs$core$IFn$_invoke$arity$1 ? handle_change_color.cljs$core$IFn$_invoke$arity$1(G__54911) : handle_change_color.call(null,G__54911));
} else {
return null;
}
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'ref':node_ref,'style':{'touchAction':"none"},'className':"main_ui_workspace_colorpicker__colorpicker",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker__top-actions",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker__top-actions-right",'children':[((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color_style,new cljs.core.Keyword(null,"direct-color","direct-color",1226799117))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"gradient","gradient",-1983908971),selected_mode))))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker__opacity-input-wrapper",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_colorpicker__icon-text",'children':"%"}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'value':app.main.ui.workspace.colorpicker.opacity__GT_string(new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(data)),'onChange':handle_change_gradient_opacity,'default':(100),'data-testid':"opacity-global-input",'min':(0),'max':(100)})]}):null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color_style,new cljs.core.Keyword(null,"direct-color","direct-color",1226799117))) && (((cljs.core.not(disable_gradient)) || (cljs.core.not(disable_image))))))?rumext.v2.jsx("div",{'className':"main_ui_workspace_colorpicker__select",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':selected_mode,'options':options,'on-change':handle_change_mode})}):null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"sidebar","sidebar",35784458))) && (((show_tokens_QMARK_) && (token_color)))))?rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':color_style,'on-change':toggle_token_color,'name':"color-style",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.swatches,'value':new cljs.core.Keyword(null,"direct-color","direct-color",1226799117),'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.color"),'id':"opt-color"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.tokens,'value':new cljs.core.Keyword(null,"token-color","token-color",875683372),'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.colorpicker.color-tokens"),'id':"opt-token-color"})]}):null)]}),((((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_mode,new cljs.core.Keyword(null,"image","image",-58725096))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color_style,new cljs.core.Keyword(null,"direct-color","direct-color",1226799117)))))?rumext.v2.jsx("button",{'onClick':handle_click_picker,'className':"main_ui_workspace_colorpicker__picker-btn"+" "+(cljs.core.truth_(picking_color_QMARK_)?"main_ui_workspace_colorpicker__selected":""),'children':app.main.ui.icons.picker}):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color_style,new cljs.core.Keyword(null,"token-color","token-color",875683372)))?rumext.v2.jsx("div",{'className':"main_ui_workspace_colorpicker__token-color-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.colorpicker.color-tokens")}):null)]}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(color_style,new cljs.core.Keyword(null,"direct-color","direct-color",1226799117)))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_mode,new cljs.core.Keyword(null,"gradient","gradient",-1983908971)))?rumext.v2.jsx(app.main.ui.workspace.colorpicker.gradients.gradients_STAR_,{'stops':((render_wasm_QMARK_)?cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(app.common.types.fills.MAX_GRADIENT_STOPS,new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(state))):new cljs.core.Keyword(null,"stops","stops",-1205459005).cljs$core$IFn$_invoke$arity$1(state)),'onSelectStop':handle_change_gradient_selected_stop,'onStopEditStart':handle_stop_edit_start,'onReverseStops':handle_reverse_stops,'onAddStopPreview':handle_gradient_add_stop_preview,'onChangeStop':handle_gradient_change_stop,'onStopEditFinish':handle_stop_edit_finish,'editingStop':new cljs.core.Keyword(null,"editing-stop","editing-stop",-775668616).cljs$core$IFn$_invoke$arity$1(state),'onChangeType':handle_change_gradient_type,'onReorderStops':handle_reorder_stops,'type':new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(state),'onRemoveStop':handle_gradient_remove_stop,'onAddStopAuto':handle_gradient_add_stop_auto,'onRotateStops':handle_rotate_stops}):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected_mode,new cljs.core.Keyword(null,"image","image",-58725096)))?(function (){var uri = app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(current_color));
var keep_aspect_ratio_QMARK_ = new cljs.core.Keyword(null,"keep-aspect-ratio","keep-aspect-ratio",-475848727).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(current_color));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker__select-image",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_colorpicker__content",'children':(cljs.core.truth_(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(current_color))?rumext.v2.jsx("img",{'src':uri}):null)}),(((!((new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(current_color) == null))))?rumext.v2.jsx("div",{'className':"main_ui_workspace_colorpicker__checkbox-option",'children':rumext.v2.jsxs("label",{'htmlFor':"keep-aspect-ratio",'className':(cljs.core.truth_(keep_aspect_ratio_QMARK_)?"checked":""),'children':[rumext.v2.jsx("span",{'className':(cljs.core.truth_(keep_aspect_ratio_QMARK_)?"checked":""),'children':(cljs.core.truth_(keep_aspect_ratio_QMARK_)?app.main.ui.icons.status_tick:null)}),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("media.keep-aspect-ratio"),rumext.v2.jsx("input",{'type':"checkbox",'id':"keep-aspect-ratio",'checked':keep_aspect_ratio_QMARK_,'onChange':handle_change_keep_aspect_ratio})]})}):null),rumext.v2.jsxs("button",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("media.choose-image"),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("media.choose-image"),'onClick':on_fill_image_click,'className':"main_ui_workspace_colorpicker__choose-image",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("media.choose-image"),rumext.v2.jsx(app.main.ui.components.file_uploader.file_uploader,{'input-id':"fill-image-upload",'accept':"image/jpeg,image/png",'multi':false,'ref':fill_image_ref,'on-selected':on_fill_image_selected})]})]});
})():rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_colorpicker__colorpicker-tabs",'children':rumext.v2.jsx(app.main.ui.ds.layout.tab_switcher.tab_switcher_STAR_,{'tabs':tabs,'selected':active_color_tab,'onChange':on_change_tab,'children':(cljs.core.truth_(picking_color_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker__picker-detail-wrapper",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_colorpicker__center-circle"}),rumext.v2.jsx("canvas",{'id':"picker-detail",'width':(256),'height':(140),'className':"main_ui_workspace_colorpicker__picker-detail"})]}):(function (){var G__54920 = active_color_tab;
switch (G__54920) {
case "ramp":
return rumext.v2.jsx(app.main.ui.workspace.colorpicker.ramp.ramp_selector_STAR_,{'color':current_color,'disableOpacity':disable_opacity,'onChange':handle_change_color,'onStartDrag':on_start_drag,'onFinishDrag':on_finish_drag});

break;
case "harmony":
return rumext.v2.jsx(app.main.ui.workspace.colorpicker.harmony.harmony_selector,{'color':current_color,'disable-opacity':disable_opacity,'on-change':handle_change_color,'on-start-drag':on_start_drag});

break;
case "hsva":
return rumext.v2.jsx(app.main.ui.workspace.colorpicker.hsva.hsva_selector,{'color':current_color,'disable-opacity':disable_opacity,'on-change':handle_change_color,'on-start-drag':on_start_drag,'on-finish-drag':on_finish_drag});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54920)].join('')));

}
})())})}),rumext.v2.jsx(app.main.ui.workspace.colorpicker.color_inputs.color_inputs,{'type':type,'disable-opacity':disable_opacity,'color':current_color,'on-change':handle_change_color}),rumext.v2.jsx(app.main.ui.workspace.colorpicker.libraries.libraries,{'state':state,'current-color':current_color,'disable-gradient':disable_gradient,'disable-opacity':disable_opacity,'disable-image':disable_image,'on-select-color':on_select_library_color,'on-add-library-color':on_add_library_color})]}))]}):rumext.v2.jsx(app.main.ui.workspace.colorpicker.color_tokens.token_section_STAR_,{'combinedTokens':combined_tokens,'onTokenChange':on_token_change,'appliedToken':applied_token,'colorOrigin':color_origin}))]}),((cljs.core.fn_QMARK_(on_accept))?rumext.v2.jsx("div",{'className':"main_ui_workspace_colorpicker__actions",'children':rumext.v2.jsx("button",{'onClick':on_color_accept,'disabled':disabled_color_accept_QMARK_,'className':"main_ui_workspace_colorpicker__accept-color"+" "+((disabled_color_accept_QMARK_)?"main_ui_workspace_colorpicker__btn-disabled":""),'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.colors.save-color")})}):null)]});
});

(app.main.ui.workspace.colorpicker.colorpicker.displayName = "colorpicker");

/**
 * Calculates the style properties for the given coordinates and position
 */
app.main.ui.workspace.colorpicker.calculate_position = (function app$main$ui$workspace$colorpicker$calculate_position(p__54923,position,x,y,gradient_QMARK_){
var map__54924 = p__54923;
var map__54924__$1 = cljs.core.__destructure_map(map__54924);
var vh = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54924__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var h = (cljs.core.truth_(gradient_QMARK_)?(820):(510));
var w = (284);
var max_y = (vh - h);
var rulers_QMARK_ = rumext.v2.deref(app.main.refs.rulers_QMARK_);
var left_offset = (cljs.core.truth_(rulers_QMARK_)?(40):(18));
var right_offset = (w + (40));
var top_offset = ""+((y - (70)) ?? "")+"px";
var bottom_offset = "1rem";
var max_height_top = ["calc(100vh - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(top_offset)].join('');
var max_height_bottom = ["calc(100vh -",bottom_offset].join('');
if((((x == null)) || ((y == null)))){
return ({"left": "auto", "right": "16rem", "top": "4rem", "maxHeight": "calc(100vh - 4rem)"});
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"left","left",-399115937))){
if((y > max_y)){
return ({"left": ""+((x - right_offset) ?? "")+"px", "bottom": bottom_offset, "maxHeight": max_height_bottom});
} else {
return ({"left": ""+((x - right_offset) ?? "")+"px", "top": top_offset, "maxHeight": max_height_top});
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"right","right",-452581833))){
if((y > max_y)){
return ({"left": ""+((x + (80)) ?? "")+"px", "bottom": bottom_offset, "maxHeight": max_height_bottom});
} else {
return ({"left": ""+((x + (80)) ?? "")+"px", "top": top_offset, "maxHeight": max_height_top});
}
} else {
if((y > max_y)){
return ({"left": ""+((x + left_offset) ?? "")+"px", "bottom": bottom_offset, "maxHeight": max_height_bottom});
} else {
return ({"left": ""+((x + left_offset) ?? "")+"px", "top": top_offset, "maxHeight": max_height_top});
}

}
}
}
});
/**
 * Groups sets by their parent path (everything before the last '/') if present.
 * The set name is always the last part of the path.
 * 
 * Input:
 * [{:set "brand/subgroup/one" :tokens [{:name "background"}]}
 *  {:set "brand/subgroup/two" :tokens [{:name "foreground"}]}
 *  {:set "primitives" :tokens [{:name "blue-100"}]}]
 * 
 * Output:
 * [{:group "brand/subgroup"
 *   :sets  ["one" "two"]
 *   :tokens ["background" "foreground"]}
 *  {:group nil
 *   :sets  ["primitives"]
 *   :tokens ["blue-100"]}]
 */
app.main.ui.workspace.colorpicker.group_sets = (function app$main$ui$workspace$colorpicker$group_sets(sets){
return cljs.core.flatten(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54928){
var vec__54929 = p__54928;
var group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54929,(0),null);
var grouped_sets = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54929,(1),null);
if(cljs.core.truth_(group)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"sets","sets",400955582),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54933){
var map__54934 = p__54933;
var map__54934__$1 = cljs.core.__destructure_map(map__54934);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54934__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54934__$1,new cljs.core.Keyword(null,"set","set",304602554));
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.last(cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(set,/\//))], null);
}),grouped_sets),new cljs.core.Keyword(null,"tokens","tokens",-818939304),cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"tokens","tokens",-818939304),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([grouped_sets], 0))))], null);
} else {
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54943){
var map__54945 = p__54943;
var map__54945__$1 = cljs.core.__destructure_map(map__54945);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54945__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54945__$1,new cljs.core.Keyword(null,"set","set",304602554));
var tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54945__$1,new cljs.core.Keyword(null,"tokens","tokens",-818939304));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),null,new cljs.core.Keyword(null,"sets","sets",400955582),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),id,new cljs.core.Keyword(null,"name","name",1843675177),set], null)], null),new cljs.core.Keyword(null,"tokens","tokens",-818939304),cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),tokens)], null);
}),grouped_sets);
}
}),cljs.core.group_by((function (p__54947){
var map__54948 = p__54947;
var map__54948__$1 = cljs.core.__destructure_map(map__54948);
var set = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54948__$1,new cljs.core.Keyword(null,"set","set",304602554));
if(cljs.core.truth_(cuerdas.core.includes_QMARK_(set,"/"))){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.butlast(cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(set,/\//)));
} else {
return null;
}
}),sets)));
});
/**
 * Replaces token names in grouped sets with their full resolved token objects.
 * 
 *   Input:
 *   - groups: [{:group "brand"
 *               :sets ["light" "dark"]
 *               :tokens ["background" "foreground"]} ...]
 *   - resolved-tokens: [{:name "background" :type "color" :value "{red-100}" ...} ...]
 * 
 *   Output:
 *   [{:group "brand"
 *     :sets ["light" "dark"]
 *     :tokens [{:name "background" :type "color" :value "{red-100}" ...}
 *              {:name "foreground" :type "color" :value "{green-100}" ...}]}]
 */
app.main.ui.workspace.colorpicker.combine_groups_with_resolved = (function app$main$ui$workspace$colorpicker$combine_groups_with_resolved(groups,resolved_tokens){
var token_map = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentArrayMap.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.identity),resolved_tokens));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54960){
var map__54961 = p__54960;
var map__54961__$1 = cljs.core.__destructure_map(map__54961);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54961__$1,new cljs.core.Keyword(null,"group","group",582596132));
var sets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54961__$1,new cljs.core.Keyword(null,"sets","sets",400955582));
var tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54961__$1,new cljs.core.Keyword(null,"tokens","tokens",-818939304));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"group","group",582596132),group,new cljs.core.Keyword(null,"sets","sets",400955582),sets,new cljs.core.Keyword(null,"tokens","tokens",-818939304),cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__54954_SHARP_){
var or__5025__auto__ = (p1__54954_SHARP_ == null);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(p1__54954_SHARP_);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626).cljs$core$IFn$_invoke$arity$1(p1__54954_SHARP_) == null);
}
}
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54952_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(token_map,p1__54952_SHARP_);
}),tokens)))], null);
}),groups);
});
/**
 * Removes sets that have no tokens.
 * 
 * Input:
 * [{:set "brand/light" :tokens []}
 *  {:set "brand/dark"  :tokens [{:name "background"}]}]
 * 
 * Output:
 * [{:set "brand/dark" :tokens [{:name "background"}]}]
 */
app.main.ui.workspace.colorpicker.filter_non_empty_sets = (function app$main$ui$workspace$colorpicker$filter_non_empty_sets(sets){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p__54966){
var map__54967 = p__54966;
var map__54967__$1 = cljs.core.__destructure_map(map__54967);
var tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54967__$1,new cljs.core.Keyword(null,"tokens","tokens",-818939304));
return cljs.core.some((function (p1__54964_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__54964_SHARP_),new cljs.core.Keyword(null,"color","color",1011675173));
}),tokens);
}),sets);
});
/**
 * Extracts set name and its tokens from raw set objects.
 * 
 *   Input:
 *   A vector of set objects (raw domain type), each compatible with:
 *   {:id ... :name "brand/light" :tokens {...}}
 * 
 *   Output:
 *   A vector of simplified maps:
 *   [{:set "brand/light" :tokens [{:name "background" ...} ...]}]
 */
app.main.ui.workspace.colorpicker.add_tokens_to_sets = (function app$main$ui$workspace$colorpicker$add_tokens_to_sets(sets){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (s){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"set","set",304602554),app.common.types.tokens_lib.get_name(s),new cljs.core.Keyword(null,"id","id",-1388402092),app.common.types.tokens_lib.get_id(s),new cljs.core.Keyword(null,"tokens","tokens",-818939304),cljs.core.vals(app.common.types.tokens_lib.get_tokens_(s))], null);
}),sets);
});
/**
 * Filters sets to only include those whose :set value is in active-set-names.
 * 
 *   Input:
 *   - sets: [{:set "brand/light" :tokens [...]},
 *            {:set "brand/dark" :tokens [...]},
 *            {:set "primitivos" :tokens [...]},
 *            ...]
 *   - active-set-names: #{"brand/light" "primitivos"}
 * 
 *   Output:
 *   [{:set "brand/light" :tokens [...]}
 *    {:set "primitivos" :tokens [...]}]
 */
app.main.ui.workspace.colorpicker.filter_active_sets = (function app$main$ui$workspace$colorpicker$filter_active_sets(sets,active_set_names){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54976_SHARP_){
return cljs.core.contains_QMARK_(active_set_names,new cljs.core.Keyword(null,"set","set",304602554).cljs$core$IFn$_invoke$arity$1(p1__54976_SHARP_));
}),sets);
});
app.main.ui.workspace.colorpicker.colorpicker_modal = (function app$main$ui$workspace$colorpicker$colorpicker_modal(props_54979){
var x = props_54979.x;
var tab = props_54979.tab;
var on_change = (props_54979["on-change"]);
var data = props_54979.data;
var y = props_54979.y;
var disable_gradient = (props_54979["disable-gradient"]);
var disable_opacity = (props_54979["disable-opacity"]);
var on_token_change = (props_54979["on-token-change"]);
var disable_image = (props_54979["disable-image"]);
var on_close = (props_54979["on-close"]);
var applied_token = (props_54979["applied-token"]);
var active_tokens = (props_54979["active-tokens"]);
var on_accept = (props_54979["on-accept"]);
var color_origin = (props_54979["color-origin"]);
var origin = props_54979.origin;
var position = props_54979.position;
var vport = rumext.v2.deref(app.main.ui.workspace.colorpicker.viewport);
var dirty_QMARK_ = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(false);
var last_change = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
var position__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(position,new cljs.core.Keyword(null,"left","left",-399115937));
var style = app.main.ui.workspace.colorpicker.calculate_position(vport,position__$1,x,y,(!((new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(data) == null))));
var active_tokens__$1 = ((cljs.core.object_QMARK_(active_tokens))?rumext.v2.util.bean(active_tokens):active_tokens);
var on_change_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change)],(function (new_data){
cljs.core.reset_BANG_(dirty_QMARK_,cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(data,new_data));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_data,cljs.core.deref(last_change))){
cljs.core.reset_BANG_(last_change,new_data);

if(cljs.core.fn_QMARK_(on_change)){
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(new_data) : on_change.call(null,new_data));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.update_colorpicker(new_data));
}
} else {
return null;
}
}));
var tokens_lib = rumext.v2.deref(app.main.refs.tokens_lib);
var active_sets_names = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens_lib)],(function (){
var G__54985 = tokens_lib;
if((G__54985 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_active_themes_set_names(G__54985);
}
}));
var active_tokens__$2 = ((cljs.core.delay_QMARK_(active_tokens__$1))?cljs.core.deref(active_tokens__$1):active_tokens__$1);
var color_tokens = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(active_tokens__$2);
var grouped_tokens_by_set = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens_lib),rumext.v2.adapt(active_sets_names),rumext.v2.adapt(color_tokens)],(function (){
var G__54988 = tokens_lib;
var G__54988__$1 = (((G__54988 == null))?null:app.common.types.tokens_lib.get_sets(G__54988));
var G__54988__$2 = (((G__54988__$1 == null))?null:app.main.ui.workspace.colorpicker.add_tokens_to_sets(G__54988__$1));
var G__54988__$3 = (((G__54988__$2 == null))?null:app.main.ui.workspace.colorpicker.filter_active_sets(G__54988__$2,active_sets_names));
var G__54988__$4 = (((G__54988__$3 == null))?null:app.main.ui.workspace.colorpicker.filter_non_empty_sets(G__54988__$3));
var G__54988__$5 = (((G__54988__$4 == null))?null:app.main.ui.workspace.colorpicker.group_sets(G__54988__$4));
if((G__54988__$5 == null)){
return null;
} else {
return app.main.ui.workspace.colorpicker.combine_groups_with_resolved(G__54988__$5,color_tokens);
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.shortcuts.push_shortcuts(new cljs.core.Keyword("app.main.ui.workspace.colorpicker","colorpicker","app.main.ui.workspace.colorpicker/colorpicker",1197429294),app.main.ui.workspace.colorpicker.shortcuts.shortcuts)));

return (function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.shortcuts.pop_shortcuts(new cljs.core.Keyword("app.main.ui.workspace.colorpicker","colorpicker","app.main.ui.workspace.colorpicker/colorpicker",1197429294)));

if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.deref(dirty_QMARK_);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = cljs.core.deref(last_change);
if(cljs.core.truth_(and__5023__auto____$1)){
return on_close;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
var G__54992 = cljs.core.deref(last_change);
return (on_close.cljs$core$IFn$_invoke$arity$1 ? on_close.cljs$core$IFn$_invoke$arity$1(G__54992) : on_close.call(null,G__54992));
} else {
return null;
}
});
}));

return rumext.v2.jsx("div",{'data-testid':"colorpicker",'style':style,'className':"main_ui_workspace_colorpicker__colorpicker-tooltip",'children':rumext.v2.jsx(app.main.ui.workspace.colorpicker.colorpicker,{'disable-gradient':disable_gradient,'on-token-change':on_token_change,'disable-opacity':disable_opacity,'combined-tokens':grouped_tokens_by_set,'disable-image':disable_image,'applied-token':applied_token,'on-accept':on_accept,'color-origin':color_origin,'origin':origin,'on-change':on_change_SINGLEQUOTE_,'tab':tab,'data':data})});
});

(app.main.ui.workspace.colorpicker.colorpicker_modal.displayName = "colorpicker-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),app.main.ui.workspace.colorpicker.colorpicker_modal);
}));

//# sourceMappingURL=app.main.ui.workspace.colorpicker.js.map
