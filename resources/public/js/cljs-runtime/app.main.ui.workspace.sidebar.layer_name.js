import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.types.variant.js";
import "./app.main.data.workspace.js";
import "./app.main.store.js";
import "./app.util.debug.js";
import "./app.util.dom.js";
import "./app.util.keyboard.js";
import "./cuerdas.core.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.layer_name');
app.main.ui.workspace.sidebar.layer_name.space_for_icons = (110);
app.main.ui.workspace.sidebar.layer_name.lens_COLON_shape_for_rename = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.in$(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"shape-for-rename","shape-for-rename",2104336641)], null)),app.main.store.state);
app.main.ui.workspace.sidebar.layer_name.layer_name_STAR_ = rumext.v2.forward_ref((function app$main$ui$workspace$sidebar$layer_name$layer_name_STAR_(props_52942,external_ref){
var type_comp = props_52942.typeComp;
var is_blocked = props_52942.isBlocked;
var variant_id = props_52942.variantId;
var type_frame = props_52942.typeFrame;
var shape_name = props_52942.shapeName;
var disabled_double_click = props_52942.disabledDoubleClick;
var is_shape_touched = props_52942.isShapeTouched;
var is_selected = props_52942.isSelected;
var on_start_edit = props_52942.onStartEdit;
var on_stop_edit = props_52942.onStopEdit;
var variant_name = props_52942.variantName;
var variant_properties = props_52942.variantProperties;
var shape_id = props_52942.shapeId;
var variant_error = props_52942.variantError;
var is_hidden = props_52942.isHidden;
var component_id = props_52942.componentId;
var parent_size = props_52942.parentSize;
var depth = props_52942.depth;
var edition_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var edition_QMARK_ = cljs.core.deref(edition_STAR_);
var local_ref = rumext.v2.use_ref();
var ref = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(external_ref,local_ref);
var shape_for_rename = rumext.v2.deref(app.main.ui.workspace.sidebar.layer_name.lens_COLON_shape_for_rename);
var shape_name__$1 = (cljs.core.truth_(variant_id)?app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(variant_error,variant_name):shape_name);
var default_value = (cljs.core.truth_(variant_id)?(function (){var or__5025__auto__ = variant_error;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.types.variant.properties_map__GT_formula(variant_properties);
}
})():shape_name__$1);
var has_path_QMARK_ = cuerdas.core.includes_QMARK_(shape_name__$1,"/");
var start_edit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(disabled_double_click),rumext.v2.adapt(on_start_edit),rumext.v2.adapt(shape_id),rumext.v2.adapt(is_blocked)],(function (){
if(((cljs.core.not(is_blocked)) && (cljs.core.not(disabled_double_click)))){
(on_start_edit.cljs$core$IFn$_invoke$arity$0 ? on_start_edit.cljs$core$IFn$_invoke$arity$0() : on_start_edit.call(null));

cljs.core.reset_BANG_(edition_STAR_,true);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.start_rename_shape(shape_id));
} else {
return null;
}
}));
var accept_edit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id),rumext.v2.adapt(on_stop_edit),rumext.v2.adapt(component_id),rumext.v2.adapt(variant_id),rumext.v2.adapt(variant_name),rumext.v2.adapt(variant_properties)],(function (){
var name_input = rumext.v2.ref_val(ref);
var name = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_value(name_input));
(on_stop_edit.cljs$core$IFn$_invoke$arity$0 ? on_stop_edit.cljs$core$IFn$_invoke$arity$0() : on_stop_edit.call(null));

cljs.core.reset_BANG_(edition_STAR_,false);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.rename_shape_or_variant.cljs$core$IFn$_invoke$arity$2(shape_id,name));
}));
var cancel_edit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id),rumext.v2.adapt(on_stop_edit)],(function (){
(on_stop_edit.cljs$core$IFn$_invoke$arity$0 ? on_stop_edit.cljs$core$IFn$_invoke$arity$0() : on_stop_edit.call(null));

cljs.core.reset_BANG_(edition_STAR_,false);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.end_rename_shape.cljs$core$IFn$_invoke$arity$2(shape_id,null));
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
var parent_size__$1 = ""+((parent_size - app.main.ui.workspace.sidebar.layer_name.space_for_icons) ?? "")+"px";
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_for_rename),rumext.v2.adapt(edition_QMARK_),rumext.v2.adapt(start_edit),rumext.v2.adapt(shape_id)],(function (){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(shape_for_rename,shape_id)) && ((!(edition_QMARK_))))){
return (start_edit.cljs$core$IFn$_invoke$arity$0 ? start_edit.cljs$core$IFn$_invoke$arity$0() : start_edit.call(null));
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(edition_QMARK_)],(function (){
if(cljs.core.truth_(edition_QMARK_)){
var G__52946_52948 = rumext.v2.ref_val(ref);
if((G__52946_52948 == null)){
} else {
app.util.dom.select_text_BANG_(G__52946_52948);
}

return null;
} else {
return null;
}
}));

if(edition_QMARK_){
return rumext.v2.jsx("input",{'className':"main_ui_workspace_sidebar_layer_name__element-name main_ui_workspace_sidebar_layer_name__element-name-input main_ui_workspace_sidebar_layer_name__selected",'id':""+"layer-name-"+(shape_id ?? ""),'style':{'--depth':depth,'--parent-size':parent_size__$1},'onBlur':accept_edit,'type':"text",'ref':ref,'defaultValue':app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(default_value,""),'onKeyDown':on_key_down,'autoFocus':true});
} else {
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("span",{'id':""+"layer-name-"+(shape_id ?? ""),'style':{'--depth':depth,'--parent-size':parent_size__$1},'ref':ref,'onDoubleClick':start_edit,'className':"main_ui_workspace_sidebar_layer_name__element-name"+" "+(cljs.core.truth_(has_path_QMARK_)?"main_ui_workspace_sidebar_layer_name__left-ellipsis":"")+" "+(cljs.core.truth_(is_selected)?"main_ui_workspace_sidebar_layer_name__selected":"")+" "+(cljs.core.truth_(is_hidden)?"main_ui_workspace_sidebar_layer_name__hidden":"")+" "+(cljs.core.truth_(type_comp)?"main_ui_workspace_sidebar_layer_name__type-comp":"")+" "+(cljs.core.truth_(type_frame)?"main_ui_workspace_sidebar_layer_name__type-frame":""),'children':((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"show-ids","show-ids",1853916915)))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(shape_name__$1,""))," | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(shape_id),(24)))].join(''):app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(shape_name__$1,""))}),((((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"show-touched","show-touched",2135884991))) && (is_shape_touched)))?rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_layer_name__element-name-touched",'children':"*"}):null)]});
}
}));

(app.main.ui.workspace.sidebar.layer_name.layer_name_STAR_.displayName = "layer-name*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.layer_name.js.map
