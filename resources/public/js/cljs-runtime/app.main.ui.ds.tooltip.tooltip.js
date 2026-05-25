import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.ui.hooks.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./app.util.timers.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.ds.tooltip.tooltip');
app.main.ui.ds.tooltip.tooltip.overlay_offset = (32);
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.ui !== 'undefined') && (typeof app.main.ui.ds !== 'undefined') && (typeof app.main.ui.ds.tooltip !== 'undefined') && (typeof app.main.ui.ds.tooltip.tooltip !== 'undefined') && (typeof app.main.ui.ds.tooltip.tooltip.active_tooltip !== 'undefined')){
} else {
app.main.ui.ds.tooltip.tooltip.active_tooltip = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
app.main.ui.ds.tooltip.tooltip.clear_schedule = (function app$main$ui$ds$tooltip$tooltip$clear_schedule(ref){
var temp__5825__auto__ = rumext.v2.ref_val(ref);
if(cljs.core.truth_(temp__5825__auto__)){
var schedule = temp__5825__auto__;
app.util.timers.dispose_BANG_(schedule);

return rumext.v2.set_ref_val_BANG_(ref,null);
} else {
return null;
}
});
app.main.ui.ds.tooltip.tooltip.add_schedule = (function app$main$ui$ds$tooltip$tooltip$add_schedule(ref,delay,f){
return rumext.v2.set_ref_val_BANG_(ref,app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2(delay,f));
});
/**
 * Given a placement, calcultates the bounding rect for it taking in
 *   account provided tooltip bounding rect and the origin bounding
 *   rect.
 */
app.main.ui.ds.tooltip.tooltip.calculate_placement_bounding_rect = (function app$main$ui$ds$tooltip$tooltip$calculate_placement_bounding_rect(placement,tooltip_brect,origin_brect,offset){
var map__72313 = origin_brect;
var map__72313__$1 = cljs.core.__destructure_map(map__72313);
var trigger_top = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72313__$1,new cljs.core.Keyword(null,"top","top",-1856271961));
var trigger_left = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72313__$1,new cljs.core.Keyword(null,"left","left",-399115937));
var trigger_right = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72313__$1,new cljs.core.Keyword(null,"right","right",-452581833));
var trigger_bottom = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72313__$1,new cljs.core.Keyword(null,"bottom","bottom",-1550509018));
var trigger_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72313__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var trigger_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72313__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var map__72314 = tooltip_brect;
var map__72314__$1 = cljs.core.__destructure_map(map__72314);
var tooltip_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72314__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var tooltip_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__72314__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var offset__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(offset,(2));
var G__72315 = placement;
switch (G__72315) {
case "bottom":
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),(trigger_bottom + offset__$1),new cljs.core.Keyword(null,"left","left",-399115937),((trigger_left + (trigger_width / (2))) - (tooltip_width / (2))),new cljs.core.Keyword(null,"right","right",-452581833),((trigger_left + (trigger_width / (2))) + (tooltip_width / (2))),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),((trigger_bottom - offset__$1) + tooltip_height),new cljs.core.Keyword(null,"width","width",-384071477),tooltip_width,new cljs.core.Keyword(null,"height","height",1025178622),tooltip_height], null);

break;
case "left":
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),((trigger_top + (trigger_height / (2))) - (tooltip_height / (2))),new cljs.core.Keyword(null,"left","left",-399115937),(trigger_left - tooltip_width),new cljs.core.Keyword(null,"right","right",-452581833),((trigger_left - tooltip_width) + tooltip_width),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(((trigger_top + (trigger_height / (2))) - (tooltip_height / (2))) + tooltip_height),new cljs.core.Keyword(null,"width","width",-384071477),tooltip_width,new cljs.core.Keyword(null,"height","height",1025178622),tooltip_height], null);

break;
case "right":
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),((trigger_top + (trigger_height / (2))) - (tooltip_height / (2))),new cljs.core.Keyword(null,"left","left",-399115937),(trigger_right + offset__$1),new cljs.core.Keyword(null,"right","right",-452581833),((trigger_right + offset__$1) + tooltip_width),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(((trigger_top + (trigger_height / (2))) - (tooltip_height / (2))) + tooltip_height),new cljs.core.Keyword(null,"width","width",-384071477),tooltip_width,new cljs.core.Keyword(null,"height","height",1025178622),tooltip_height], null);

break;
case "bottom-right":
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),(trigger_bottom + offset__$1),new cljs.core.Keyword(null,"left","left",-399115937),(trigger_right - (32)),new cljs.core.Keyword(null,"right","right",-452581833),((trigger_right - (32)) + tooltip_width),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),((trigger_bottom - offset__$1) + tooltip_height),new cljs.core.Keyword(null,"width","width",-384071477),tooltip_width,new cljs.core.Keyword(null,"height","height",1025178622),tooltip_height], null);

break;
case "bottom-left":
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),(trigger_bottom + offset__$1),new cljs.core.Keyword(null,"left","left",-399115937),((trigger_left - tooltip_width) + (32)),new cljs.core.Keyword(null,"right","right",-452581833),(trigger_left + (32)),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),((trigger_bottom - offset__$1) + tooltip_height),new cljs.core.Keyword(null,"width","width",-384071477),tooltip_width,new cljs.core.Keyword(null,"height","height",1025178622),tooltip_height], null);

break;
case "top-right":
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),((trigger_top - offset__$1) - tooltip_height),new cljs.core.Keyword(null,"left","left",-399115937),(trigger_right - (32)),new cljs.core.Keyword(null,"right","right",-452581833),((trigger_right - (32)) + tooltip_width),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(trigger_top - offset__$1),new cljs.core.Keyword(null,"width","width",-384071477),tooltip_width,new cljs.core.Keyword(null,"height","height",1025178622),tooltip_height], null);

break;
case "top-left":
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),((trigger_top - offset__$1) - tooltip_height),new cljs.core.Keyword(null,"left","left",-399115937),((trigger_left - tooltip_width) + (32)),new cljs.core.Keyword(null,"right","right",-452581833),(trigger_left + (32)),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(trigger_top - offset__$1),new cljs.core.Keyword(null,"width","width",-384071477),tooltip_width,new cljs.core.Keyword(null,"height","height",1025178622),tooltip_height], null);

break;
default:
return new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"top","top",-1856271961),((trigger_top - offset__$1) - tooltip_height),new cljs.core.Keyword(null,"left","left",-399115937),((trigger_left + (trigger_width / (2))) - (tooltip_width / (2))),new cljs.core.Keyword(null,"right","right",-452581833),(((trigger_left + (trigger_width / (2))) - (tooltip_width / (2))) + tooltip_width),new cljs.core.Keyword(null,"bottom","bottom",-1550509018),(trigger_top - offset__$1),new cljs.core.Keyword(null,"width","width",-384071477),tooltip_width,new cljs.core.Keyword(null,"height","height",1025178622),tooltip_height], null);

}
});
/**
 * Get a vector of placement followed with ordered fallback pacements
 *   for the specified placement
 */
app.main.ui.ds.tooltip.tooltip.get_fallback_order = (function app$main$ui$ds$tooltip$tooltip$get_fallback_order(placement){
var G__72317 = placement;
switch (G__72317) {
case "top":
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top","right","bottom","left","top-right","bottom-right","bottom-left","top-left"], null);

break;
case "bottom":
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bottom","left","top","right","bottom-right","bottom-left","top-left","top-right"], null);

break;
case "left":
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["left","top","right","bottom","top-left","top-right","bottom-right","bottom-left"], null);

break;
case "right":
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["right","bottom","left","top","bottom-left","top-left","top-right","bottom-right"], null);

break;
case "top-right":
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top-right","right","bottom","left","top","bottom-right","bottom-left","top-left"], null);

break;
case "bottom-right":
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bottom-right","bottom","left","top","right","bottom-left","top-left","top-right"], null);

break;
case "bottom-left":
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bottom-left","left","top","right","bottom","top-left","top-right","bottom-right"], null);

break;
case "top-left":
return new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, ["top-left","top","right","bottom","left","bottom-left","top-right","bottom-right"], null);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__72317)].join('')));

}
});
/**
 * Algorithm for find a correct placement and placement-brect for the
 *   provided placement, if the current placement does not matches, it
 *   uses the predefined fallbacks. Returns an array of matched placement
 *   and its bounding rect.
 */
app.main.ui.ds.tooltip.tooltip.find_matching_placement = (function app$main$ui$ds$tooltip$tooltip$find_matching_placement(placement,tooltip_brect,origin_brect,window_size,offset){
var placements = cljs.core.seq(app.main.ui.ds.tooltip.tooltip.get_fallback_order(placement));
while(true){
var temp__5825__auto__ = cljs.core.first(placements);
if(cljs.core.truth_(temp__5825__auto__)){
var placement__$1 = temp__5825__auto__;
var placement_brect = app.main.ui.ds.tooltip.tooltip.calculate_placement_bounding_rect(placement__$1,tooltip_brect,origin_brect,offset);
if(app.util.dom.is_bounding_rect_outside_QMARK_(placement_brect,window_size)){
var G__72332 = cljs.core.rest(placements);
placements = G__72332;
continue;
} else {
return [placement__$1,placement_brect];
}
} else {
return null;
}
break;
}
});
app.main.ui.ds.tooltip.tooltip.schema_COLON_tooltip = new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"class","class",-2030961996),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"string","string",-1989541586)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"offset","offset",296498311),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"delay","delay",-574225219),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword(null,"int","int",-1741416922)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"or","or",235744169),cljs.core.fn_QMARK_,new cljs.core.Keyword(null,"string","string",-1989541586),cljs.core.map_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"trigger-ref","trigger-ref",1688669745),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"placement","placement",768366651),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"top","bottom","left","right","top-right","bottom-right","bottom-left","top-left"], null)], null)], null)], null);
app.main.ui.ds.tooltip.tooltip.tooltip_STAR__validator = rumext.v2.validation.validator(app.main.ui.ds.tooltip.tooltip.schema_COLON_tooltip);

app.main.ui.ds.tooltip.tooltip.tooltip_STAR_ = (function app$main$ui$ds$tooltip$tooltip$tooltip_STAR_(props_72319){
// ===== start props checking =====;

var res__47117__auto___72333 = app.main.ui.ds.tooltip.tooltip.tooltip_STAR__validator(props_72319);
if((!((res__47117__auto___72333 == null)))){
var items__47118__auto___72334 = cljs.core.reduce_kv((function (result__47119__auto__,k__47120__auto__,v__47121__auto__){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result__47119__auto__,["  -> '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(k__47120__auto__),"' ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(v__47121__auto__),""].join(''));
}),cljs.core.PersistentVector.EMPTY,res__47117__auto___72333);
var msg__47122__auto___72335 = ["invalid props on component tooltip*\n\n",clojure.string.join.cljs$core$IFn$_invoke$arity$2("\n",items__47118__auto___72334),"\n"].join('');
throw (new Error(msg__47122__auto___72335));
} else {
}

// ===== end props checking =====;

var aria_label = undefined;
var placement = undefined;
var delay = undefined;
var children = undefined;
var offset = undefined;
var content = undefined;
var trigger_ref = undefined;
var id = undefined;
var class$ = undefined;
var props = undefined;
var {"aria-label": aria_label, "placement": placement, "delay": delay, "children": children, "offset": offset, "content": content, "triggerRef": trigger_ref, "id": id, "className": class$, ...props} = props_72319;

var internal_id = rumext.v2.use_id();
var internal_trigger_ref = rumext.v2.use_ref(null);
var trigger_ref__$1 = (function (){var or__5025__auto__ = trigger_ref;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return internal_trigger_ref;
}
})();
var tooltip_ref = rumext.v2.use_ref(null);
var container = app.main.ui.hooks.use_portal_container.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058));
var id__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(id,internal_id);
var tooltip_id = rumext.v2.use_id();
var placement_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(placement,"top");
}));
var placement__$1 = cljs.core.deref(placement_STAR_);
var delay__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(delay,(300));
var schedule_ref = rumext.v2.use_ref(null);
var visible_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var visible = cljs.core.deref(visible_STAR_);
var on_show = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tooltip_id),rumext.v2.adapt(delay__$1)],(function (_){
var trigger_el = rumext.v2.ref_val(trigger_ref__$1);
app.main.ui.ds.tooltip.tooltip.clear_schedule(schedule_ref);

return app.main.ui.ds.tooltip.tooltip.add_schedule(schedule_ref,app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(delay__$1,(300)),(function (){
var temp__5825__auto___72339 = cljs.core.deref(app.main.ui.ds.tooltip.tooltip.active_tooltip);
if(cljs.core.truth_(temp__5825__auto___72339)){
var active_72340 = temp__5825__auto___72339;
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(active_72340),tooltip_id)){
var temp__5825__auto___72341__$1 = app.util.dom.get_element(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(active_72340));
if(cljs.core.truth_(temp__5825__auto___72341__$1)){
var tooltip_el_72342 = temp__5825__auto___72341__$1;
app.util.dom.set_css_property_BANG_(tooltip_el_72342,"display","none");
} else {
}

cljs.core.reset_BANG_(app.main.ui.ds.tooltip.tooltip.active_tooltip,null);
} else {
}
} else {
}

cljs.core.reset_BANG_(app.main.ui.ds.tooltip.tooltip.active_tooltip,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),tooltip_id,new cljs.core.Keyword(null,"trigger","trigger",103466139),trigger_el], null));

return cljs.core.reset_BANG_(visible_STAR_,true);
}));
}));
var on_hide = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tooltip_id)],(function (){
app.main.ui.ds.tooltip.tooltip.clear_schedule(schedule_ref);

cljs.core.reset_BANG_(visible_STAR_,false);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.ui.ds.tooltip.tooltip.active_tooltip)),tooltip_id)){
return cljs.core.reset_BANG_(app.main.ui.ds.tooltip.tooltip.active_tooltip,null);
} else {
return null;
}
}));
var handle_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_hide)],(function (event){
if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
return (on_hide.cljs$core$IFn$_invoke$arity$0 ? on_hide.cljs$core$IFn$_invoke$arity$0() : on_hide.call(null));
} else {
return null;
}
}));
var tooltip_class = "main_ui_ds_tooltip_tooltip__tooltip-content-wrapper"+" "+(((placement__$1 === "top"))?"main_ui_ds_tooltip_tooltip__tooltip-top":"")+" "+(((placement__$1 === "bottom"))?"main_ui_ds_tooltip_tooltip__tooltip-bottom":"")+" "+(((placement__$1 === "left"))?"main_ui_ds_tooltip_tooltip__tooltip-left":"")+" "+(((placement__$1 === "right"))?"main_ui_ds_tooltip_tooltip__tooltip-right":"")+" "+(((placement__$1 === "top-right"))?"main_ui_ds_tooltip_tooltip__tooltip-top-right":"")+" "+(((placement__$1 === "bottom-right"))?"main_ui_ds_tooltip_tooltip__tooltip-bottom-right":"")+" "+(((placement__$1 === "bottom-left"))?"main_ui_ds_tooltip_tooltip__tooltip-bottom-left":"")+" "+(((placement__$1 === "top-left"))?"main_ui_ds_tooltip_tooltip__tooltip-top-left":"");
var content__$1 = ((cljs.core.fn_QMARK_(content))?(content.cljs$core$IFn$_invoke$arity$0 ? content.cljs$core$IFn$_invoke$arity$0() : content.call(null)):content);
var props__$1 = {...props, 'aria-label':((typeof content__$1 === 'string')?content__$1:aria_label),'className':(class$ ?? "")+" "+("main_ui_ds_tooltip_tooltip__tooltip-trigger" ?? ""),'id':id__$1,'onMouseLeave':on_hide,'onFocus':on_show,'onBlur':on_hide,'onMouseEnter':on_show,'ref':internal_trigger_ref,'onKeyDown':handle_key_down};
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(visible),rumext.v2.adapt(placement__$1),rumext.v2.adapt(offset)],(function (){
if(cljs.core.truth_(visible)){
var trigger_el = rumext.v2.ref_val(trigger_ref__$1);
var tooltip_el = rumext.v2.ref_val(tooltip_ref);
if(cljs.core.truth_((function (){var and__5023__auto__ = trigger_el;
if(cljs.core.truth_(and__5023__auto__)){
return tooltip_el;
} else {
return and__5023__auto__;
}
})())){
return requestAnimationFrame((function (){
var origin_brect = app.util.dom.get_bounding_rect(trigger_el);
var tooltip_brect = app.util.dom.get_bounding_rect(tooltip_el);
var window_size = app.util.dom.get_window_size();
var temp__5825__auto__ = app.main.ui.ds.tooltip.tooltip.find_matching_placement(placement__$1,tooltip_brect,origin_brect,window_size,offset);
if(cljs.core.truth_(temp__5825__auto__)){
var vec__72325 = temp__5825__auto__;
var new_placement = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72325,(0),null);
var placement_rect = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__72325,(1),null);
app.util.dom.set_css_property_BANG_(tooltip_el,"inset-block-start",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(placement_rect)),"px"].join(''));

app.util.dom.set_css_property_BANG_(tooltip_el,"inset-inline-start",[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(placement_rect)),"px"].join(''));

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new_placement,placement__$1)){
return cljs.core.reset_BANG_(placement_STAR_,new_placement);
} else {
return null;
}
} else {
return null;
}
}));
} else {
return null;
}
} else {
return null;
}
}));

return rumext.v2.create_element("div",props__$1,children,(cljs.core.truth_(visible)?rumext.v2.portal(rumext.v2.jsx("div",{'role':"tooltip",'id':tooltip_id,'ref':tooltip_ref,'className':"main_ui_ds_tooltip_tooltip__tooltip",'children':rumext.v2.jsxs("div",{'className':tooltip_class,'children':[rumext.v2.jsx("div",{'className':"main_ui_ds_tooltip_tooltip__tooltip-content",'children':content__$1}),rumext.v2.jsx("div",{'id':"tooltip-arrow",'className':"main_ui_ds_tooltip_tooltip__tooltip-arrow"})]})}),container):null));
});

(app.main.ui.ds.tooltip.tooltip.tooltip_STAR_.displayName = "tooltip*");


//# sourceMappingURL=app.main.ui.ds.tooltip.tooltip.js.map
