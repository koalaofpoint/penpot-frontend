import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.logic.shapes.js";
import "./app.common.types.shape.layout.js";
import "./app.main.constants.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.interactions.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.data.workspace.tokens.application.js";
import "./app.main.data.workspace.transforms.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.features.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.components.numeric_input.js";
import "./app.main.ui.components.radio_buttons.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.workspace.sidebar.options.menus.border_radius.js";
import "./app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./clojure.set.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.measures');
app.main.ui.workspace.sidebar.options.menus.measures.measure_attrs = new cljs.core.PersistentVector(null, 16, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"ox","ox",571335403),new cljs.core.Keyword(null,"oy","oy",-831335459),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r4","r4",1134323163),new cljs.core.Keyword(null,"selrect","selrect",1966287292),new cljs.core.Keyword(null,"points","points",-1486596883),new cljs.core.Keyword(null,"show-content","show-content",-878000465),new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312)], null);
app.main.ui.workspace.sidebar.options.menus.measures.generic_options = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"position","position",-2011731912),null], null), null);
app.main.ui.workspace.sidebar.options.menus.measures.rect_options = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"radius","radius",-2073122258),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"position","position",-2011731912),null], null), null);
app.main.ui.workspace.sidebar.options.menus.measures.frame_options = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"show-in-viewer","show-in-viewer",1111782209),null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"clip-content","clip-content",-1393212533),null,new cljs.core.Keyword(null,"radius","radius",-2073122258),null,new cljs.core.Keyword(null,"size","size",1098693007),null,new cljs.core.Keyword(null,"presets","presets",-345857391),null,new cljs.core.Keyword(null,"position","position",-2011731912),null], null), null);
app.main.ui.workspace.sidebar.options.menus.measures.type__GT_options = (function app$main$ui$workspace$sidebar$options$menus$measures$type__GT_options(type){
var G__55754 = type;
var G__55754__$1 = (((G__55754 instanceof cljs.core.Keyword))?G__55754.fqn:null);
switch (G__55754__$1) {
case "bool":
return app.main.ui.workspace.sidebar.options.menus.measures.generic_options;

break;
case "circle":
return app.main.ui.workspace.sidebar.options.menus.measures.generic_options;

break;
case "frame":
return app.main.ui.workspace.sidebar.options.menus.measures.frame_options;

break;
case "group":
return app.main.ui.workspace.sidebar.options.menus.measures.generic_options;

break;
case "path":
return app.main.ui.workspace.sidebar.options.menus.measures.generic_options;

break;
case "rect":
return app.main.ui.workspace.sidebar.options.menus.measures.rect_options;

break;
case "svg-raw":
return app.main.ui.workspace.sidebar.options.menus.measures.generic_options;

break;
case "text":
return app.main.ui.workspace.sidebar.options.menus.measures.generic_options;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55754__$1)].join('')));

}
});
/**
 * Consider some shapes can be drawn from bottom to top or from left to right
 */
app.main.ui.workspace.sidebar.options.menus.measures.select_measure_keys = (function app$main$ui$workspace$sidebar$options$menus$measures$select_measure_keys(shape){
var flip_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"flip-x","flip-x",891276861));
var flip_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"flip-y","flip-y",935998815));
var shape__$1 = (cljs.core.truth_((function (){var and__5023__auto__ = flip_x;
if(cljs.core.truth_(and__5023__auto__)){
return flip_y;
} else {
return and__5023__auto__;
}
})())?clojure.set.rename_keys(shape,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r4","r4",1134323163),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"r4","r4",1134323163),new cljs.core.Keyword(null,"r2","r2",252844174)], null)):(cljs.core.truth_(flip_x)?clojure.set.rename_keys(shape,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r4","r4",1134323163),new cljs.core.Keyword(null,"r4","r4",1134323163),new cljs.core.Keyword(null,"r3","r3",-2027148174)], null)):(cljs.core.truth_(flip_y)?clojure.set.rename_keys(shape,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"r4","r4",1134323163),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r4","r4",1134323163),new cljs.core.Keyword(null,"r1","r1",690974900)], null)):shape
)));
return cljs.core.select_keys(shape__$1,app.main.ui.workspace.sidebar.options.menus.measures.measure_attrs);
});
app.main.ui.workspace.sidebar.options.menus.measures.xf_COLON_map_type = cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"type","type",1174270348));
app.main.ui.workspace.sidebar.options.menus.measures.xf_COLON_mapcat_type_to_options = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(app.main.ui.workspace.sidebar.options.menus.measures.type__GT_options);
app.main.ui.workspace.sidebar.options.menus.measures.measures_menu_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$measures$measures_menu_STAR_(props_55768){
var shapes = props_55768.shapes;
var ids = props_55768.ids;
var type = props_55768.type;
var values = props_55768.values;
var applied_tokens = props_55768.appliedTokens;
var token_numeric_inputs = app.main.features.use_feature("tokens/numeric-input");
var all_types = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(type),rumext.v2.adapt(shapes)],(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"multiple","multiple",1244445549))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,app.main.ui.workspace.sidebar.options.menus.measures.xf_COLON_map_type,shapes);
} else {
return null;
}
}));
var options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(type),rumext.v2.adapt(all_types)],(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"multiple","multiple",1244445549))){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,app.main.ui.workspace.sidebar.options.menus.measures.xf_COLON_mapcat_type_to_options,all_types);
} else {
return app.main.ui.workspace.sidebar.options.menus.measures.type__GT_options(type);
}
}));
var frames = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (){
var objects = cljs.core.deref(app.main.refs.workspace_page_objects);
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"frame-id","frame-id",-636372072)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects))),shapes);
}));
var selection_parents_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (){
return app.main.refs.parents_by_ids(ids);
}));
var selection_parents = rumext.v2.deref(selection_parents_ref);
var shape = cljs.core.first(shapes);
var flex_child_QMARK_ = cljs.core.some(app.common.types.shape.layout.flex_layout_QMARK_,selection_parents);
var absolute_QMARK_ = app.common.types.shape.layout.item_absolute_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var flex_container_QMARK_ = app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var flex_auto_width_QMARK_ = app.common.types.shape.layout.auto_width_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var flex_fill_width_QMARK_ = app.common.types.shape.layout.fill_width_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var flex_auto_height_QMARK_ = app.common.types.shape.layout.auto_height_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var flex_fill_height_QMARK_ = app.common.types.shape.layout.fill_height_QMARK_.cljs$core$IFn$_invoke$arity$1(shape);
var disabled_position_QMARK_ = (function (){var and__5023__auto__ = flex_child_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (!(absolute_QMARK_));
} else {
return and__5023__auto__;
}
})();
var disabled_width_sizing_QMARK_ = (function (){var and__5023__auto__ = (function (){var or__5025__auto__ = flex_child_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return flex_container_QMARK_;
}
})();
if(cljs.core.truth_(and__5023__auto__)){
return ((((flex_auto_width_QMARK_) || (flex_fill_width_QMARK_))) && ((!(absolute_QMARK_))));
} else {
return and__5023__auto__;
}
})();
var disabled_height_sizing_QMARK_ = (function (){var and__5023__auto__ = (function (){var or__5025__auto__ = flex_child_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return flex_container_QMARK_;
}
})();
if(cljs.core.truth_(and__5023__auto__)){
return ((((flex_auto_height_QMARK_) || (flex_fill_height_QMARK_))) && ((!(absolute_QMARK_))));
} else {
return and__5023__auto__;
}
})();
var shapes__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes),rumext.v2.adapt(frames)],(function (){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3(app.common.geom.shapes.translate_to_frame,shapes,frames);
}));
var shape__$1 = cljs.core.first(shapes__$1);
var values__$1 = (function (){var rect = app.common.geom.rect.points__GT_rect(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"points","points",-1486596883)));
var val_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"x","x",2099068185));
var val_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"y","y",-1757859776));
var G__55769 = values;
var G__55769__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val_x,new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55769,new cljs.core.Keyword(null,"x","x",2099068185),(rect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"x","x",2099068185)))):G__55769);
var G__55769__$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(val_y,new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55769__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(rect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(rect,new cljs.core.Keyword(null,"y","y",-1757859776)))):G__55769__$1);
var G__55769__$3 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val_x,new cljs.core.Keyword(null,"multiple","multiple",1244445549))) && ((!((new cljs.core.Keyword(null,"ox","ox",571335403).cljs$core$IFn$_invoke$arity$1(values) == null))))))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55769__$2,new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"ox","ox",571335403).cljs$core$IFn$_invoke$arity$1(values)):G__55769__$2);
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val_y,new cljs.core.Keyword(null,"multiple","multiple",1244445549))) && ((!((new cljs.core.Keyword(null,"oy","oy",-831335459).cljs$core$IFn$_invoke$arity$1(values) == null)))))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55769__$3,new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"oy","oy",-831335459).cljs$core$IFn$_invoke$arity$1(values));
} else {
return G__55769__$3;
}
})();
var values__$2 = (function (){var selrect = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var rotation = cljs.core.get.cljs$core$IFn$_invoke$arity$3(shape__$1,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),(0));
var G__55770 = values__$1;
var G__55770__$1 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(values__$1),new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55770,new cljs.core.Keyword(null,"width","width",-384071477),(selrect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"width","width",-384071477)))):G__55770);
var G__55770__$2 = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(values__$1),new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55770__$1,new cljs.core.Keyword(null,"height","height",1025178622),(selrect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"height","height",1025178622)))):G__55770__$1);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(values__$1),new cljs.core.Keyword(null,"multiple","multiple",1244445549))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55770__$2,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),rotation);
} else {
return G__55770__$2;
}
})();
var proportion_lock = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values__$2,new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127));
var clip_content_ref = rumext.v2.use_ref(null);
var show_in_viewer_ref = rumext.v2.use_ref(null);
var preset_state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var show_presets_dropdown_QMARK_ = cljs.core.deref(preset_state_STAR_);
var open_presets = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(show_presets_dropdown_QMARK_)],(function (){
return cljs.core.reset_BANG_(preset_state_STAR_,true);
}));
var close_presets = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(show_presets_dropdown_QMARK_)],(function (){
return cljs.core.reset_BANG_(preset_state_STAR_,false);
}));
var on_preset_selected = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (event){
var width = app.common.data.read_string(app.util.dom.get_data(app.util.dom.get_current_target(event),"width"));
var height = app.common.data.read_string(app.util.dom.get_data(app.util.dom.get_current_target(event),"height"));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.update_dimensions.cljs$core$IFn$_invoke$arity$3(ids,new cljs.core.Keyword(null,"width","width",-384071477),width),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.update_dimensions.cljs$core$IFn$_invoke$arity$3(ids,new cljs.core.Keyword(null,"height","height",1025178622),height)], 0));
}));
var orientation = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"frame","frame",-1711082588)))?(((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(values__$2) > new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(values__$2)))?new cljs.core.Keyword(null,"horiz","horiz",-776322169):new cljs.core.Keyword(null,"vert","vert",-360932977)):null);
var on_orientation_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (orientation__$1){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.change_orientation(ids,cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(orientation__$1)));
}));
var on_size_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids),rumext.v2.adapt(shapes__$1)],(function (value,attr){
if(((typeof value === 'string') || (typeof value === 'number'))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.trigger_bounding_box_cloaking(ids),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.update_dimensions.cljs$core$IFn$_invoke$arity$3(ids,attr,value)], 0));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.trigger_bounding_box_cloaking(ids),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.tokens.application.toggle_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.first(value),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentHashSet.createAsIfByAssoc([attr]),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null))], 0));
}
}));
var on_proportion_lock_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids),rumext.v2.adapt(proportion_lock)],(function (_){
var new_lock = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(proportion_lock,new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?true:cljs.core.not(proportion_lock));
return cljs.core.run_BANG_((function (p1__55762_SHARP_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_shape_proportion_lock(p1__55762_SHARP_,new_lock));
}),ids);
}));
var on_position_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value,attr){
if(((typeof value === 'string') || (typeof value === 'number'))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_positions.cljs$core$IFn$_invoke$arity$2(ids,cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,value])));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.trigger_bounding_box_cloaking(ids),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.tokens.application.toggle_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.first(value),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),cljs.core.PersistentHashSet.createAsIfByAssoc([attr]),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null))], 0));
}
}));
var on_rotation_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (value){
if(((typeof value === 'string') || (typeof value === 'number'))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.increase_rotation.cljs$core$IFn$_invoke$arity$2(ids,value));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.trigger_bounding_box_cloaking(ids),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.tokens.application.toggle_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.first(value),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null], null), null),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null))], 0));
}
}));
var on_width_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_size_change)],(function (p1__55763_SHARP_){
return (on_size_change.cljs$core$IFn$_invoke$arity$2 ? on_size_change.cljs$core$IFn$_invoke$arity$2(p1__55763_SHARP_,new cljs.core.Keyword(null,"width","width",-384071477)) : on_size_change.call(null,p1__55763_SHARP_,new cljs.core.Keyword(null,"width","width",-384071477)));
}));
var on_height_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_size_change)],(function (p1__55764_SHARP_){
return (on_size_change.cljs$core$IFn$_invoke$arity$2 ? on_size_change.cljs$core$IFn$_invoke$arity$2(p1__55764_SHARP_,new cljs.core.Keyword(null,"height","height",1025178622)) : on_size_change.call(null,p1__55764_SHARP_,new cljs.core.Keyword(null,"height","height",1025178622)));
}));
var on_pos_x_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_position_change)],(function (p1__55765_SHARP_){
return (on_position_change.cljs$core$IFn$_invoke$arity$2 ? on_position_change.cljs$core$IFn$_invoke$arity$2(p1__55765_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185)) : on_position_change.call(null,p1__55765_SHARP_,new cljs.core.Keyword(null,"x","x",2099068185)));
}));
var on_pos_y_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_position_change)],(function (p1__55766_SHARP_){
return (on_position_change.cljs$core$IFn$_invoke$arity$2 ? on_position_change.cljs$core$IFn$_invoke$arity$2(p1__55766_SHARP_,new cljs.core.Keyword(null,"y","y",-1757859776)) : on_position_change.call(null,p1__55766_SHARP_,new cljs.core.Keyword(null,"y","y",-1757859776)));
}));
var on_detach_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (token_name,attr){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.unapply_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),token_name,new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.PersistentHashSet.createAsIfByAssoc([attr]),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}));
var on_change_clip_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (event){
var value = app.util.dom.checked_QMARK_(app.util.dom.get_target(event));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids,(function (shape__$2){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape__$2,new cljs.core.Keyword(null,"show-content","show-content",-878000465),cljs.core.not(value));
})));
}));
var on_change_show_in_viewer = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (event){
var value = app.util.dom.checked_QMARK_(app.util.dom.get_target(event));
var undo_id = Symbol();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.undo.start_undo_transaction(undo_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids,(function (shape__$2){
return app.common.logic.shapes.change_show_in_viewer(shape__$2,cljs.core.not(value));
}))], 0));

if(cljs.core.truth_(value)){
} else {
cljs.core.run_BANG_(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55767_SHARP_){
return app.main.data.workspace.interactions.remove_all_interactions_nav_to(p1__55767_SHARP_);
}),ids));
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.commit_undo_transaction(undo_id));
}));
var handle_fit_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.transforms.selected_fit_content());
}));
return rumext.v2.jsxs("section",{'aria-label':"shape-measures-section",'className':"main_ui_workspace_sidebar_options_menus_measures__element-set",'children':[(cljs.core.truth_((function (){var and__5023__auto__ = (options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"presets","presets",-345857391)) : options.call(null,new cljs.core.Keyword(null,"presets","presets",-345857391)));
if(cljs.core.truth_(and__5023__auto__)){
return (((all_types == null)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(all_types),(1))));
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_measures__presets",'children':[rumext.v2.jsxs("div",{'onClick':open_presets,'className':"main_ui_workspace_sidebar_options_menus_measures__presets-wrapper"+" "+(cljs.core.truth_(show_presets_dropdown_QMARK_)?"main_ui_workspace_sidebar_options_menus_measures__opened":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_measures__select-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.size-presets")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_measures__collapsed-icon",'children':app.main.ui.icons.arrow}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':show_presets_dropdown_QMARK_,'on-close':close_presets,'children':rumext.v2.jsx("ul",{'className':"main_ui_workspace_sidebar_options_menus_measures__custom-select-dropdown",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,size_preset){
out_arr__35152__auto__.push(((cljs.core.not(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size_preset)))?rumext.v2.jsx("li",{'className':"main_ui_workspace_sidebar_options_menus_measures__dropdown-element"+" "+"main_ui_workspace_sidebar_options_menus_measures__disabled",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_measures__preset-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(size_preset)})},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(size_preset)):(function (){var preset_match = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size_preset),app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(values__$2),(0)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(size_preset),app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(values__$2),(0)))));
return rumext.v2.jsxs("li",{'data-width':cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size_preset)),'data-height':cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(size_preset)),'onClick':on_preset_selected,'className':"main_ui_workspace_sidebar_options_menus_measures__dropdown-element"+" "+((preset_match)?"main_ui_workspace_sidebar_options_menus_measures__match":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_measures__name-wrapper",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_measures__preset-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(size_preset)}),rumext.v2.jsxs("span",{'className':"main_ui_workspace_sidebar_options_menus_measures__preset-size",'children':[new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size_preset)," x ",new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(size_preset)]})]}),((preset_match)?rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_measures__check-icon",'children':app.main.ui.icons.tick}):null)]},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(size_preset));
})()));

return out_arr__35152__auto__;
}),[],app.main.constants.size_presets)})})]}),rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':(function (){var or__5025__auto__ = app.common.data.name(orientation);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),'on-change':on_orientation_change,'name':"frame-orientation",'wide':true,'class':"main_ui_workspace_sidebar_options_menus_measures__radio-buttons",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.size_vertical,'value':"vert",'id':"size-vertical"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.size_horizontal,'value':"horiz",'id':"size-horizontal"})]}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.fit-content"),'onPointerDown':handle_fit_content,'icon':app.main.ui.ds.foundations.assets.icon.fit_content})]}):null),(cljs.core.truth_((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"size","size",1098693007)) : options.call(null,new cljs.core.Keyword(null,"size","size",1098693007))))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_measures__size",'children':[((token_numeric_inputs)?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':0.01,'onChange':on_width_change,'placeholder':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"width","width",-384071477)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values__$2,new cljs.core.Keyword(null,"width","width",-384071477))))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'attr':new cljs.core.Keyword(null,"width","width",-384071477),'appliedToken':cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"width","width",-384071477)),'value':cljs.core.get.cljs$core$IFn$_invoke$arity$2(values__$2,new cljs.core.Keyword(null,"width","width",-384071477)),'onDetach':on_detach_token,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.width"),'disabled':disabled_width_sizing_QMARK_,'icon':app.main.ui.ds.foundations.assets.icon.character_w}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':0.01,'align':new cljs.core.Keyword(null,"right","right",-452581833),'onChange':on_height_change,'attr':new cljs.core.Keyword(null,"height","height",1025178622),'appliedToken':cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"height","height",1025178622)),'value':cljs.core.get.cljs$core$IFn$_invoke$arity$2(values__$2,new cljs.core.Keyword(null,"height","height",1025178622)),'onDetach':on_detach_token,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.height"),'disabled':disabled_height_sizing_QMARK_,'icon':app.main.ui.ds.foundations.assets.icon.character_h})]}):rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.width"),'className':"main_ui_workspace_sidebar_options_menus_measures__width"+" "+(cljs.core.truth_(disabled_width_sizing_QMARK_)?"main_ui_workspace_sidebar_options_menus_measures__disabled":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_measures__icon-text",'children':"W"}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'min':0.01,'noValidate':true,'placeholder':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(values__$2)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'onChange':on_width_change,'disabled':disabled_width_sizing_QMARK_,'className':"main_ui_workspace_sidebar_options_menus_measures__numeric-input",'value':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(values__$2)})]}),rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.height"),'className':"main_ui_workspace_sidebar_options_menus_measures__height"+" "+(cljs.core.truth_(disabled_height_sizing_QMARK_)?"main_ui_workspace_sidebar_options_menus_measures__disabled":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_measures__icon-text",'children':"H"}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'min':0.01,'noValidate':true,'placeholder':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(values__$2)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'onChange':on_height_change,'disabled':disabled_height_sizing_QMARK_,'className':"main_ui_workspace_sidebar_options_menus_measures__numeric-input",'value':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(values__$2)})]})]})),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'tooltipPlacement':"top-left",'icon':(cljs.core.truth_(proportion_lock)?"lock":"unlock"),'className':((proportion_lock === true)?"main_ui_workspace_sidebar_options_menus_measures__selected":""),'disabled':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(proportion_lock,new cljs.core.Keyword(null,"multiple","multiple",1244445549)),'aria-label':(cljs.core.truth_(proportion_lock)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.size.unlock"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.size.lock")),'onClick':on_proportion_lock_change})]}):null),(cljs.core.truth_((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"position","position",-2011731912)) : options.call(null,new cljs.core.Keyword(null,"position","position",-2011731912))))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_measures__position",'children':((token_numeric_inputs)?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'onChange':on_pos_x_change,'placeholder':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"x","x",2099068185)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values__$2,new cljs.core.Keyword(null,"x","x",2099068185))))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'attr':new cljs.core.Keyword(null,"x","x",2099068185),'appliedToken':cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"x","x",2099068185)),'value':cljs.core.get.cljs$core$IFn$_invoke$arity$2(values__$2,new cljs.core.Keyword(null,"x","x",2099068185)),'onDetach':on_detach_token,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.x"),'disabled':disabled_position_QMARK_,'icon':app.main.ui.ds.foundations.assets.icon.character_x}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'align':new cljs.core.Keyword(null,"right","right",-452581833),'onChange':on_pos_y_change,'placeholder':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"y","y",-1757859776)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values__$2,new cljs.core.Keyword(null,"y","y",-1757859776))))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'attr':new cljs.core.Keyword(null,"y","y",-1757859776),'appliedToken':cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"y","y",-1757859776)),'value':cljs.core.get.cljs$core$IFn$_invoke$arity$2(values__$2,new cljs.core.Keyword(null,"y","y",-1757859776)),'onDetach':on_detach_token,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.y"),'disabled':disabled_position_QMARK_,'icon':app.main.ui.ds.foundations.assets.icon.character_y})]}):rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.x"),'className':"main_ui_workspace_sidebar_options_menus_measures__x-position"+" "+(cljs.core.truth_(disabled_position_QMARK_)?"main_ui_workspace_sidebar_options_menus_measures__disabled":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_measures__icon-text",'children':"X"}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'noValidate':true,'placeholder':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(values__$2)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'onChange':on_pos_x_change,'disabled':disabled_position_QMARK_,'className':"main_ui_workspace_sidebar_options_menus_measures__numeric-input",'value':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(values__$2)})]}),rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.y"),'className':"main_ui_workspace_sidebar_options_menus_measures__y-position"+" "+(cljs.core.truth_(disabled_position_QMARK_)?"main_ui_workspace_sidebar_options_menus_measures__disabled":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_measures__icon-text",'children':"Y"}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'noValidate':true,'placeholder':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(values__$2)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'disabled':disabled_position_QMARK_,'onChange':on_pos_y_change,'className':"main_ui_workspace_sidebar_options_menus_measures__numeric-input",'value':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(values__$2)})]})]}))}):null),(cljs.core.truth_((function (){var or__5025__auto__ = (options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rotation","rotation",-1728051644)) : options.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"radius","radius",-2073122258)) : options.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258)));
}
})())?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_measures__rotation-radius",'children':[(cljs.core.truth_((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"rotation","rotation",-1728051644)) : options.call(null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644))))?((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(-359),'onChange':on_rotation_change,'placeholder':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),cljs.core.get.cljs$core$IFn$_invoke$arity$2(values__$2,new cljs.core.Keyword(null,"rotation","rotation",-1728051644))))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'max':(359),'attr':new cljs.core.Keyword(null,"rotation","rotation",-1728051644),'appliedToken':cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)),'value':cljs.core.get.cljs$core$IFn$_invoke$arity$2(values__$2,new cljs.core.Keyword(null,"rotation","rotation",-1728051644)),'onDetach':on_detach_token,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.rotation"),'icon':app.main.ui.ds.foundations.assets.icon.rotation}):rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.rotation"),'data-testid':"rotation",'className':"main_ui_workspace_sidebar_options_menus_measures__rotation",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_measures__icon",'children':app.main.ui.icons.rotation}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'noValidate':true,'min':(-359),'max':(359),'data-wrap':true,'placeholder':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(values__$2)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'onChange':on_rotation_change,'className':"main_ui_workspace_sidebar_options_menus_measures__numeric-input",'value':new cljs.core.Keyword(null,"rotation","rotation",-1728051644).cljs$core$IFn$_invoke$arity$1(values__$2)})]})):null),(cljs.core.truth_((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"radius","radius",-2073122258)) : options.call(null,new cljs.core.Keyword(null,"radius","radius",-2073122258))))?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.border_radius.border_radius_menu_STAR_,{'className':"main_ui_workspace_sidebar_options_menus_measures__border-radius",'ids':ids,'values':values__$2,'appliedTokens':applied_tokens}):null)]}):null),(cljs.core.truth_((function (){var or__5025__auto__ = (options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clip-content","clip-content",-1393212533)) : options.call(null,new cljs.core.Keyword(null,"clip-content","clip-content",-1393212533)));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"show-in-viewer","show-in-viewer",1111782209)) : options.call(null,new cljs.core.Keyword(null,"show-in-viewer","show-in-viewer",1111782209)));
}
})())?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_measures__clip-show",'children':[(cljs.core.truth_((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clip-content","clip-content",-1393212533)) : options.call(null,new cljs.core.Keyword(null,"clip-content","clip-content",-1393212533))))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_measures__clip-content",'children':[rumext.v2.jsx("input",{'type':"checkbox",'id':"clip-content",'ref':clip_content_ref,'checked':cljs.core.not(new cljs.core.Keyword(null,"show-content","show-content",-878000465).cljs$core$IFn$_invoke$arity$1(values__$2)),'onChange':on_change_clip_content,'className':"main_ui_workspace_sidebar_options_menus_measures__clip-content-input"}),rumext.v2.jsx("label",{'htmlFor':"clip-content",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.clip-content"),'className':"main_ui_workspace_sidebar_options_menus_measures__clip-content-label"+" "+((cljs.core.not(new cljs.core.Keyword(null,"show-content","show-content",-878000465).cljs$core$IFn$_invoke$arity$1(values__$2)))?"main_ui_workspace_sidebar_options_menus_measures__selected":""),'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.clip_content})})]}):null),(cljs.core.truth_((options.cljs$core$IFn$_invoke$arity$1 ? options.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"show-in-viewer","show-in-viewer",1111782209)) : options.call(null,new cljs.core.Keyword(null,"show-in-viewer","show-in-viewer",1111782209))))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_measures__show-in-viewer",'children':[rumext.v2.jsx("input",{'type':"checkbox",'id':"show-in-viewer",'ref':show_in_viewer_ref,'checked':cljs.core.not(new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312).cljs$core$IFn$_invoke$arity$1(values__$2)),'onChange':on_change_show_in_viewer,'className':"main_ui_workspace_sidebar_options_menus_measures__clip-content-input"}),rumext.v2.jsx("label",{'htmlFor':"show-in-viewer",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.show-in-viewer"),'className':"main_ui_workspace_sidebar_options_menus_measures__clip-content-label"+" "+((cljs.core.not(new cljs.core.Keyword(null,"hide-in-viewer","hide-in-viewer",1478442312).cljs$core$IFn$_invoke$arity$1(values__$2)))?"main_ui_workspace_sidebar_options_menus_measures__selected":""),'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.play})})]}):null)]}):null)]});
});

(app.main.ui.workspace.sidebar.options.menus.measures.measures_menu_STAR_.displayName = "measures-menu*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.measures.js.map
