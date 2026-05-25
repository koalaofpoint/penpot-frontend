import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.files.variant.js";
import "./app.common.path_names.js";
import "./app.common.types.component.js";
import "./app.common.types.components_list.js";
import "./app.common.types.file.js";
import "./app.common.types.variant.js";
import "./app.common.uuid.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.libraries.js";
import "./app.main.data.workspace.specialized_panel.js";
import "./app.main.data.workspace.variants.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.components.radio_buttons.js";
import "./app.main.ui.components.reorder_handler.js";
import "./app.main.ui.components.search_bar.js";
import "./app.main.ui.components.select.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.controls.combobox.js";
import "./app.main.ui.ds.controls.select.js";
import "./app.main.ui.ds.controls.switch.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.product.input_with_meta.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.workspace.sidebar.assets.common.js";
import "./app.main.ui.workspace.sidebar.options.menus.variants_help_modal.js";
import "./app.util.debug.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.timers.js";
import "./cuerdas.core.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.component');
app.main.ui.workspace.sidebar.options.menus.component.ref_COLON_annotations_state = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-annotations","workspace-annotations",-1857761670),app.main.store.state);
app.main.ui.workspace.sidebar.options.menus.component.component_annotation_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$component$component_annotation_STAR_(props_55379){
var component = props_55379.component;
var rerender_fn = props_55379.rerenderFn;
var id = props_55379.id;
var shape = props_55379.shape;
var main_instance_QMARK_ = new cljs.core.Keyword(null,"main-instance","main-instance",476264761).cljs$core$IFn$_invoke$arity$1(shape);
var component_id = new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape);
var annotation = new cljs.core.Keyword(null,"annotation","annotation",-344661666).cljs$core$IFn$_invoke$arity$1(component);
var shape_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
var editing_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var editing_QMARK_ = cljs.core.deref(editing_STAR_);
var invalid_text_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return cuerdas.core.blank_QMARK_(annotation);
}));
var invalid_text_QMARK_ = cljs.core.deref(invalid_text_STAR_);
var size_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.count(annotation);
}));
var size = cljs.core.deref(size_STAR_);
var textarea_ref = rumext.v2.use_ref();
var state = rumext.v2.deref(app.main.ui.workspace.sidebar.options.menus.component.ref_COLON_annotations_state);
var expanded_QMARK_ = new cljs.core.Keyword(null,"expanded","expanded",-3020742).cljs$core$IFn$_invoke$arity$1(state);
var create_id = new cljs.core.Keyword(null,"id-for-create","id-for-create",1988159458).cljs$core$IFn$_invoke$arity$1(state);
var creating_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(id,create_id);
var adjust_textarea_size = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
var temp__5825__auto__ = rumext.v2.ref_val(textarea_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var textarea = temp__5825__auto__;
var text = app.util.dom.get_value(textarea);
cljs.core.reset_BANG_(invalid_text_STAR_,cuerdas.core.blank_QMARK_(text));

cljs.core.reset_BANG_(size_STAR_,cljs.core.count(text));

var parent = textarea.parentNode;
var dataset = parent.dataset;
return (dataset.replicatedValue = text);
} else {
return null;
}
}));
var on_toggle_expand = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(expanded_QMARK_),rumext.v2.adapt(editing_QMARK_),rumext.v2.adapt(creating_QMARK_)],(function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_annotations_expanded(cljs.core.not(expanded_QMARK_)));
}));
var on_discard = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(adjust_textarea_size),rumext.v2.adapt(creating_QMARK_)],(function (event){
app.util.dom.stop_propagation(event);

(rerender_fn.cljs$core$IFn$_invoke$arity$0 ? rerender_fn.cljs$core$IFn$_invoke$arity$0() : rerender_fn.call(null));

var temp__5825__auto__ = rumext.v2.ref_val(textarea_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var textarea = temp__5825__auto__;
app.util.dom.set_value_BANG_(textarea,annotation);

cljs.core.reset_BANG_(editing_STAR_,false);

if(creating_QMARK_){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_annotations_id_for_create(null));
} else {
}

(adjust_textarea_size.cljs$core$IFn$_invoke$arity$0 ? adjust_textarea_size.cljs$core$IFn$_invoke$arity$0() : adjust_textarea_size.call(null));

return (rerender_fn.cljs$core$IFn$_invoke$arity$0 ? rerender_fn.cljs$core$IFn$_invoke$arity$0() : rerender_fn.call(null));
} else {
return null;
}
}));
var on_edit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

(rerender_fn.cljs$core$IFn$_invoke$arity$0 ? rerender_fn.cljs$core$IFn$_invoke$arity$0() : rerender_fn.call(null));

if(main_instance_QMARK_){
var temp__5825__auto__ = rumext.v2.ref_val(textarea_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var textarea = temp__5825__auto__;
cljs.core.reset_BANG_(editing_STAR_,true);

app.util.dom.focus_BANG_(textarea);

return (rerender_fn.cljs$core$IFn$_invoke$arity$0 ? rerender_fn.cljs$core$IFn$_invoke$arity$0() : rerender_fn.call(null));
} else {
return null;
}
} else {
return null;
}
}));
var on_save = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(creating_QMARK_)],(function (event){
app.util.dom.stop_propagation(event);

(rerender_fn.cljs$core$IFn$_invoke$arity$0 ? rerender_fn.cljs$core$IFn$_invoke$arity$0() : rerender_fn.call(null));

var temp__5825__auto__ = rumext.v2.ref_val(textarea_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var textarea = temp__5825__auto__;
var text = app.util.dom.get_value(textarea);
if(cuerdas.core.blank_QMARK_(text)){
return null;
} else {
cljs.core.reset_BANG_(editing_STAR_,false);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_component_annotation(component_id,text));

if(creating_QMARK_){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_annotations_id_for_create(null));
} else {
}

return (rerender_fn.cljs$core$IFn$_invoke$arity$0 ? rerender_fn.cljs$core$IFn$_invoke$arity$0() : rerender_fn.call(null));
}
} else {
return null;
}
}));
var on_delete_annotation = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id),rumext.v2.adapt(component_id),rumext.v2.adapt(creating_QMARK_)],(function (event){
app.util.dom.stop_propagation(event);

var on_accept = (function (){
(rerender_fn.cljs$core$IFn$_invoke$arity$0 ? rerender_fn.cljs$core$IFn$_invoke$arity$0() : rerender_fn.call(null));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(((creating_QMARK_)?app.main.data.workspace.set_annotations_id_for_create(null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.update_component_annotation(component_id,null),(rerender_fn.cljs$core$IFn$_invoke$arity$0 ? rerender_fn.cljs$core$IFn$_invoke$arity$0() : rerender_fn.call(null))], 0));
});
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-component-annotation.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-component-annotation.message"),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.confirm-ok"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),on_accept], null)));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id),rumext.v2.adapt(state),rumext.v2.adapt(create_id),rumext.v2.adapt(creating_QMARK_)],(function (){
var temp__5825__auto___55558 = rumext.v2.ref_val(textarea_ref);
if(cljs.core.truth_(temp__5825__auto___55558)){
var textarea_55559 = temp__5825__auto___55558;
app.util.dom.set_value_BANG_(textarea_55559,annotation);

(adjust_textarea_size.cljs$core$IFn$_invoke$arity$0 ? adjust_textarea_size.cljs$core$IFn$_invoke$arity$0() : adjust_textarea_size.call(null));
} else {
}

if((((!(creating_QMARK_))) && ((!((create_id == null)))))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_annotations_id_for_create(null));
} else {
}

return (function (){
if(creating_QMARK_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_annotations_id_for_create(null));
} else {
return null;
}
});
}));

if(cljs.core.truth_((function (){var or__5025__auto__ = creating_QMARK_;
if(or__5025__auto__){
return or__5025__auto__;
} else {
return annotation;
}
})())){
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__annotation"+" "+(cljs.core.truth_(editing_QMARK_)?"main_ui_workspace_sidebar_options_menus_component__editing":"")+" "+((creating_QMARK_)?"main_ui_workspace_sidebar_options_menus_component__creating":""),'children':[rumext.v2.jsxs("div",{'onClick':on_toggle_expand,'className':"main_ui_workspace_sidebar_options_menus_component__annotation-title"+" "+((cljs.core.not((function (){var or__5025__auto__ = editing_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return creating_QMARK_;
}
})()))?"main_ui_workspace_sidebar_options_menus_component__expandeable":"")+" "+(cljs.core.truth_(expanded_QMARK_)?"main_ui_workspace_sidebar_options_menus_component__expanded":""),'children':[(cljs.core.truth_((function (){var or__5025__auto__ = editing_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return creating_QMARK_;
}
})())?rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_component__annotation-title-name",'children':(cljs.core.truth_(editing_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.edit-annotation"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.create-annotation"))}):rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':(cljs.core.truth_(expanded_QMARK_)?app.main.ui.ds.foundations.assets.icon.arrow_down:app.main.ui.ds.foundations.assets.icon.arrow_right),'className':"main_ui_workspace_sidebar_options_menus_component__annotation-title-icon-arrow",'size':"s"}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_component__annotation-title-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.annotation")})]})),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__annotation-title-actions",'children':((((main_instance_QMARK_) && (expanded_QMARK_)))?((((editing_QMARK_) || (creating_QMARK_)))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'title':((creating_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.create"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.save")),'onClick':on_save,'className':"main_ui_workspace_sidebar_options_menus_component__annotation-title-icon-action",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.tick,'className':"main_ui_workspace_sidebar_options_menus_component__annotation-title-icon-ok"+" "+(cljs.core.truth_(invalid_text_QMARK_)?"main_ui_workspace_sidebar_options_menus_component__disabled":"")})}),rumext.v2.jsx("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.discard"),'onClick':on_discard,'className':"main_ui_workspace_sidebar_options_menus_component__annotation-title-icon-action",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.close,'className':"main_ui_workspace_sidebar_options_menus_component__annotation-title-icon-nok"})})]}):rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.edit"),'onClick':on_edit,'className':"main_ui_workspace_sidebar_options_menus_component__annotation-title-icon-action",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.curve,'className':"main_ui_workspace_sidebar_options_menus_component__annotation-title-icon-ok"})}),rumext.v2.jsx("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.delete"),'onClick':on_delete_annotation,'className':"main_ui_workspace_sidebar_options_menus_component__annotation-title-icon-action",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.delete$,'className':"main_ui_workspace_sidebar_options_menus_component__annotation-title-icon-nok"})})]})):null)})]}),rumext.v2.jsxs("div",{'className':((cljs.core.not(expanded_QMARK_))?"main_ui_workspace_sidebar_options_menus_component__annotation-body-hidden":""),'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__annotation-body",'children':rumext.v2.jsx("textarea",{'data-debug':annotation,'onInput':adjust_textarea_size,'className':"main_ui_workspace_sidebar_options_menus_component__annotation-textarea",'id':"annotation-textarea",'maxLength':(300),'readOnly':cljs.core.not((function (){var or__5025__auto__ = creating_QMARK_;
if(or__5025__auto__){
return or__5025__auto__;
} else {
return editing_QMARK_;
}
})()),'ref':textarea_ref,'defaultValue':annotation,'autoFocus':(function (){var or__5025__auto__ = editing_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return creating_QMARK_;
}
})()})}),(cljs.core.truth_((function (){var or__5025__auto__ = editing_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return creating_QMARK_;
}
})())?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__annotation-counter",'children':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"/300"].join('')}):null)]})]});
} else {
return null;
}
});

(app.main.ui.workspace.sidebar.options.menus.component.component_annotation_STAR_.displayName = "component-annotation*");

/**
 * Receive a list of booleans, one for each selected variant, indicating if that variant
 * is malformed, and generate a warning message accordingly
 */
app.main.ui.workspace.sidebar.options.menus.component.get_variant_malformed_warning_message = (function app$main$ui$workspace$sidebar$options$menus$component$get_variant_malformed_warning_message(malformed_list){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(malformed_list),(1))) && ((!((cljs.core.first(malformed_list) == null)))))){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.variant.malformed.single.one");
} else {
if(((cljs.core.seq(malformed_list)) && (cljs.core.every_QMARK_(cljs.core.some_QMARK_,malformed_list)))){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.variant.malformed.single.all");
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.seq(malformed_list);
if(and__5023__auto__){
return cljs.core.some(cljs.core.some_QMARK_,malformed_list);
} else {
return and__5023__auto__;
}
})())){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.variant.malformed.single.some");
} else {
return null;

}
}
}
});
/**
 * Receive a list of booleans, one for each selected variant, indicating if that variant
 * is duplicated, and generate a warning message accordingly
 */
app.main.ui.workspace.sidebar.options.menus.component.get_variant_duplicated_warning_message = (function app$main$ui$workspace$sidebar$options$menus$component$get_variant_duplicated_warning_message(duplicated_list){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(duplicated_list),(1))) && ((!((cljs.core.first(duplicated_list) == null)))))){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.variant.duplicated.single.one");
} else {
if(((cljs.core.seq(duplicated_list)) && (cljs.core.every_QMARK_(cljs.core.some_QMARK_,duplicated_list)))){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.variant.duplicated.single.all");
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.seq(duplicated_list);
if(and__5023__auto__){
return cljs.core.some(cljs.core.some_QMARK_,duplicated_list);
} else {
return and__5023__auto__;
}
})())){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.variant.duplicated.single.some");
} else {
return null;

}
}
}
});
/**
 * Get a list of components whose property names and values are duplicated
 */
app.main.ui.workspace.sidebar.options.menus.component.get_components_with_duplicated_variant_props_and_values = (function app$main$ui$workspace$sidebar$options$menus$component$get_components_with_duplicated_variant_props_and_values(components){
var duplicated_props = cljs.core.set(cljs.core.keys(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55380_SHARP_){
return (cljs.core.val(p1__55380_SHARP_) > (1));
}),cljs.core.frequencies(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),components)))));
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55381_SHARP_){
var G__55382 = new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(p1__55381_SHARP_);
return (duplicated_props.cljs$core$IFn$_invoke$arity$1 ? duplicated_props.cljs$core$IFn$_invoke$arity$1(G__55382) : duplicated_props.call(null,G__55382));
}),components);
});
/**
 * Get a list of component main ids whose property names and values are duplicated
 */
app.main.ui.workspace.sidebar.options.menus.component.get_main_ids_with_duplicated_variant_props_and_values = (function app$main$ui$workspace$sidebar$options$menus$component$get_main_ids_with_duplicated_variant_props_and_values(components){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372),app.main.ui.workspace.sidebar.options.menus.component.get_components_with_duplicated_variant_props_and_values(components));
});
/**
 * Get variant options for a given property name
 */
app.main.ui.workspace.sidebar.options.menus.component.get_variant_options = (function app$main$ui$workspace$sidebar$options$menus$component$get_variant_options(prop_name,prop_vals){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (val){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),val,new cljs.core.Keyword(null,"label","label",1718410804),((cuerdas.core.blank_QMARK_(val))?["(",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.empty")),")"].join(''):val)], null);
}),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55383_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__55383_SHARP_),prop_name);
}),prop_vals))));
});
app.main.ui.workspace.sidebar.options.menus.component.component_variant_property_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$component$component_variant_property_STAR_(props_55384){
var options = props_55384.options;
var on_prop_value_change = props_55384.onPropValueChange;
var pos = props_55384.pos;
var on_reorder = props_55384.onReorder;
var on_prop_name_blur = props_55384.onPropNameBlur;
var prop = props_55384.prop;
var on_drop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (relative_pos,data){
var from_pos = new cljs.core.Keyword(null,"from-pos","from-pos",1141953080).cljs$core$IFn$_invoke$arity$1(data);
var to_space_between_pos = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(relative_pos,new cljs.core.Keyword(null,"bot","bot",-950896508)))?(pos + (1)):pos);
return (on_reorder.cljs$core$IFn$_invoke$arity$2 ? on_reorder.cljs$core$IFn$_invoke$arity$2(from_pos,to_space_between_pos) : on_reorder.call(null,from_pos,to_space_between_pos));
}));
var on_prop_value_change__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_prop_value_change),rumext.v2.adapt(pos)],(function (value){
return (on_prop_value_change.cljs$core$IFn$_invoke$arity$2 ? on_prop_value_change.cljs$core$IFn$_invoke$arity$2(pos,value) : on_prop_value_change.call(null,pos,value));
}));
var vec__55385 = app.main.ui.hooks.use_sortable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data-type","data-type",-326421468),"penpot/variant-property",new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),on_drop,new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),true,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from-pos","from-pos",1141953080),pos], null)], 0));
var dprops = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55385,(0),null);
var dref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55385,(1),null);
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-property"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"top","top",-1856271961)))?"main_ui_workspace_sidebar_options_menus_component__dnd-over-top":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"bot","bot",-950896508)))?"main_ui_workspace_sidebar_options_menus_component__dnd-over-bot":""),'children':[(((!((on_reorder == null))))?rumext.v2.jsx(app.main.ui.components.reorder_handler.reorder_handler_STAR_,{'ref':dref}):null),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-property-container",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-property-name-wrapper",'children':rumext.v2.jsx(app.main.ui.ds.product.input_with_meta.input_with_meta_STAR_,{'value':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prop),'isEditing':new cljs.core.Keyword(null,"editing?","editing?",1646440800).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(prop)),'maxLength':app.common.types.variant.property_max_length,'data-position':pos,'onBlur':on_prop_name_blur})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-property-value-wrapper",'children':(function (){var mixed_value_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prop),false);
return rumext.v2.jsx(app.main.ui.ds.controls.combobox.combobox_STAR_,{'id':["variant-prop-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos)].join(''),'placeholder':((mixed_value_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'defaultSelected':((mixed_value_QMARK_)?"":new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prop)),'options':options,'emptyToEnd':true,'maxLength':app.common.types.variant.property_max_length,'onChange':on_prop_value_change__$1});
})()})]})]});
});

(app.main.ui.workspace.sidebar.options.menus.component.component_variant_property_STAR_.displayName = "component-variant-property*");

app.main.ui.workspace.sidebar.options.menus.component.component_variant_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$component$component_variant_STAR_(props_55388){
var data = props_55388.data;
var shapes = props_55388.shapes;
var components = props_55388.components;
var component = cljs.core.first(components);
var variant_id = new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(component);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.get_page(data,new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component)),new cljs.core.Keyword(null,"objects","objects",2099713734));
var props_list = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),components);
var component_ids = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(components)],(function (){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),components);
}));
var properties = (((cljs.core.count(component_ids) > (1)))?app.common.types.variant.compare_properties.cljs$core$IFn$_invoke$arity$2(props_list,false):cljs.core.first(props_list));
var malformed_list = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variant-error","variant-error",-42521934),shapes);
var malformed_msg = app.main.ui.workspace.sidebar.options.menus.component.get_variant_malformed_warning_message(malformed_list);
var duplicated_ids = cljs.core.set(app.main.ui.workspace.sidebar.options.menus.component.get_main_ids_with_duplicated_variant_props_and_values(app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$3(data,objects,variant_id)));
var duplicated_list = cljs.core.map.cljs$core$IFn$_invoke$arity$2(duplicated_ids,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372),components));
var duplicated_msg = app.main.ui.workspace.sidebar.options.menus.component.get_variant_duplicated_warning_message(duplicated_list);
var prop_vals = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(data),rumext.v2.adapt(objects),rumext.v2.adapt(variant_id)],(function (){
return app.common.files.variant.extract_properties_values(data,objects,variant_id);
}));
var get_options = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(prop_vals)],(function (prop_name){
return app.main.ui.workspace.sidebar.options.menus.component.get_variant_options(prop_name,prop_vals);
}));
var update_property_value = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(component_ids)],(function (pos,value){
var value__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(value),"");
var seq__55389 = cljs.core.seq(component_ids);
var chunk__55390 = null;
var count__55391 = (0);
var i__55392 = (0);
while(true){
if((i__55392 < count__55391)){
var id = chunk__55390.cljs$core$IIndexed$_nth$arity$2(null,i__55392);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"variant-edit-property-value",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:combo-design-tab"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.variants.update_property_value(id,pos,value__$1)], 0));

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.variants.update_error.cljs$core$IFn$_invoke$arity$1(id));


var G__55571 = seq__55389;
var G__55572 = chunk__55390;
var G__55573 = count__55391;
var G__55574 = (i__55392 + (1));
seq__55389 = G__55571;
chunk__55390 = G__55572;
count__55391 = G__55573;
i__55392 = G__55574;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__55389);
if(temp__5825__auto__){
var seq__55389__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55389__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__55389__$1);
var G__55575 = cljs.core.chunk_rest(seq__55389__$1);
var G__55576 = c__5548__auto__;
var G__55577 = cljs.core.count(c__5548__auto__);
var G__55578 = (0);
seq__55389 = G__55575;
chunk__55390 = G__55576;
count__55391 = G__55577;
i__55392 = G__55578;
continue;
} else {
var id = cljs.core.first(seq__55389__$1);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"variant-edit-property-value",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:combo-design-tab"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.variants.update_property_value(id,pos,value__$1)], 0));

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.variants.update_error.cljs$core$IFn$_invoke$arity$1(id));


var G__55580 = cljs.core.next(seq__55389__$1);
var G__55581 = null;
var G__55582 = (0);
var G__55583 = (0);
seq__55389 = G__55580;
chunk__55390 = G__55581;
count__55391 = G__55582;
i__55392 = G__55583;
continue;
}
} else {
return null;
}
}
break;
}
}));
var update_property_name = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(variant_id)],(function (event){
var value = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_target_val(event));
var pos = (app.util.dom.get_data(app.util.dom.get_current_target(event),"position") | (0));
if(cljs.core.seq(value)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.variants.update_property_name(variant_id,pos,value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger","trigger",103466139),"workspace:design-tab-variant"], null)));
} else {
return null;
}
}));
var reorder_properties = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(variant_id)],(function (from_pos,to_space_between_pos){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.variants.reorder_variant_poperties(variant_id,from_pos,to_space_between_pos));
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.hooks.sortable_container_STAR_,{'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-property-list",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55393){
var vec__55394 = p__55393;
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55394,(0),null);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55394,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.component.component_variant_property_STAR_,{'pos':pos,'prop':prop,'options':(function (){var G__55397 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prop);
return (get_options.cljs$core$IFn$_invoke$arity$1 ? get_options.cljs$core$IFn$_invoke$arity$1(G__55397) : get_options.call(null,G__55397));
})(),'onPropNameBlur':update_property_name,'onPropValueChange':update_property_value,'onReorder':reorder_properties},[cljs.core.str.cljs$core$IFn$_invoke$arity$1(variant_id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos)].join('')));

return out_arr__35152__auto__;
}),[],cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,properties))})}),(cljs.core.truth_(malformed_msg)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.msg_neutral,'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning-darken"}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning-highlight",'children':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(malformed_msg)," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.variant.malformed.structure.title"))].join('')}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning-darken",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.variant.malformed.structure.example")})]}):(cljs.core.truth_(duplicated_msg)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.msg_neutral,'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning-darken"}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning-highlight",'children':cljs.core.str.cljs$core$IFn$_invoke$arity$1(duplicated_msg)})]}):null))]});
});

(app.main.ui.workspace.sidebar.options.menus.component.component_variant_STAR_.displayName = "component-variant*");

app.main.ui.workspace.sidebar.options.menus.component.component_variant_copy_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$component$component_variant_copy_STAR_(props_55400){
var shapes = props_55400.shapes;
var component_file_data = props_55400.componentFileData;
var components = props_55400.components;
var current_file_id = props_55400.currentFileId;
var component = cljs.core.first(components);
var shape = cljs.core.first(shapes);
var properties = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490),components);
var props_first = new cljs.core.Keyword(null,"variant-properties","variant-properties",749060490).cljs$core$IFn$_invoke$arity$1(component);
var variant_id = new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(component);
var component_page_objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.get_page(component_file_data,new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component)),new cljs.core.Keyword(null,"objects","objects",2099713734));
var variant_comps = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(component_file_data),rumext.v2.adapt(component_page_objects),rumext.v2.adapt(variant_id)],(function (){
return app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$3(component_file_data,component_page_objects,variant_id);
}));
var duplicated_comps = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(variant_comps)],(function (){
return app.main.ui.workspace.sidebar.options.menus.component.get_components_with_duplicated_variant_props_and_values(variant_comps);
}));
var malformed_comps = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(variant_comps)],(function (){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55398_SHARP_){
return new cljs.core.Keyword(null,"variant-error","variant-error",-42521934).cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(component_page_objects,new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(p1__55398_SHARP_)));
}),variant_comps);
}));
var prop_vals = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(component_file_data),rumext.v2.adapt(component_page_objects),rumext.v2.adapt(variant_id)],(function (){
return app.common.files.variant.extract_properties_values(component_file_data,component_page_objects,variant_id);
}));
var get_options = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(prop_vals)],(function (prop_name){
return app.main.ui.workspace.sidebar.options.menus.component.get_variant_options(prop_name,prop_vals);
}));
var select_duplicated_comps = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_file_id),rumext.v2.adapt(shape),rumext.v2.adapt(duplicated_comps)],(function (){
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),duplicated_comps);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_file_id,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.go_to_local_component.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.first(ids),new cljs.core.Keyword(null,"additional-ids","additional-ids",1987201277),cljs.core.rest(ids)], null)], 0)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.go_to_component_file(new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape),cljs.core.first(duplicated_comps),false));
}
}));
var select_malformed_comps = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_file_id),rumext.v2.adapt(shape),rumext.v2.adapt(malformed_comps)],(function (){
var ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),malformed_comps);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_file_id,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.go_to_local_component.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.first(ids),new cljs.core.Keyword(null,"additional-ids","additional-ids",1987201277),cljs.core.rest(ids)], 0)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.go_to_component_file(new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape),cljs.core.first(malformed_comps),false));
}
}));
var key_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(app.common.uuid.next());
var key = cljs.core.deref(key_STAR_);
var mixed_label = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple");
var switch_component = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (pos,val){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(val,mixed_label)){
return cljs.core.reset_BANG_(key_STAR_,app.common.uuid.next());
} else {
var error_msg = (((cljs.core.count(shapes) > (1)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.component.switch.loop-error-multi"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.component.swap.loop-error"));
var mdata = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-error","on-error",1728533530),(function (){
cljs.core.reset_BANG_(key_STAR_,app.common.uuid.next());

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.warn.cljs$core$IFn$_invoke$arity$1(error_msg));
})], null);
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),shapes,new cljs.core.Keyword(null,"pos","pos",-864607220),pos,new cljs.core.Keyword(null,"val","val",128701612),val], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.variants.variants_switch(cljs.core.with_meta(params,mdata)));
}
}));
var switch_component_toggle = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (pos,boolean_pair,val){
var inverted_boolean_pair = app.common.data.invert_map(boolean_pair);
var val__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(inverted_boolean_pair,val);
return (switch_component.cljs$core$IFn$_invoke$arity$2 ? switch_component.cljs$core$IFn$_invoke$arity$2(pos,val__$1) : switch_component.call(null,pos,val__$1));
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-property-list",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55401){
var vec__55402 = p__55401;
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55402,(0),null);
var prop = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55402,(1),null);
out_arr__35152__auto__.push((function (){var mixed_value_QMARK_ = cljs.core.not_every_QMARK_((function (p1__55399_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prop),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(cljs.core.nth.cljs$core$IFn$_invoke$arity$2(p1__55399_SHARP_,pos)));
}),properties);
var options = (function (){var G__55405 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prop);
return (get_options.cljs$core$IFn$_invoke$arity$1 ? get_options.cljs$core$IFn$_invoke$arity$1(G__55405) : get_options.call(null,G__55405));
})();
var boolean_pair = app.common.types.variant.find_boolean_pair(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),options));
var options__$1 = (function (){var G__55406 = options;
if(mixed_value_QMARK_){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__55406,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),mixed_label,new cljs.core.Keyword(null,"label","label",1718410804),mixed_label,new cljs.core.Keyword(null,"dimmed","dimmed",-791586346),true], null));
} else {
return G__55406;
}
})();
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-property-container",'children':[rumext.v2.jsx("div",{'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prop),'className':"main_ui_workspace_sidebar_options_menus_component__variant-property-name-wrapper",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-property-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(prop)})}),(cljs.core.truth_(boolean_pair)?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-property-value-switch-wrapper",'children':rumext.v2.jsx(app.main.ui.ds.controls.switch$.switch_STAR_,{'defaultChecked':((mixed_value_QMARK_)?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(boolean_pair,new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prop))),'onChange':cljs.core.partial.cljs$core$IFn$_invoke$arity$3(switch_component_toggle,pos,boolean_pair)},[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prop)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''))}):rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-property-value-wrapper",'children':rumext.v2.jsx(app.main.ui.ds.controls.select.select_STAR_,{'defaultSelected':((mixed_value_QMARK_)?mixed_label:new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prop)),'options':options__$1,'emptyToEnd':true,'onChange':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(switch_component,pos)},[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(prop)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(key)].join(''))}))]},[cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos),cljs.core.str.cljs$core$IFn$_invoke$arity$1(mixed_value_QMARK_)].join(''));
})());

return out_arr__35152__auto__;
}),[],cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,props_first))}),((cljs.core.seq(malformed_comps))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.msg_neutral,'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning-darken"}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning-highlight",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.variant.malformed.copy")}),rumext.v2.jsx("button",{'onClick':select_malformed_comps,'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning-button",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.variant.malformed.locate")})]}):((cljs.core.seq(duplicated_comps))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.msg_neutral,'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning-darken"}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning-highlight",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.variant.duplicated.copy.title")}),rumext.v2.jsx("button",{'onClick':select_duplicated_comps,'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning-button",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.variant.duplicated.copy.locate")})]}):null))]});
});

(app.main.ui.workspace.sidebar.options.menus.component.component_variant_copy_STAR_.displayName = "component-variant-copy*");

app.main.ui.workspace.sidebar.options.menus.component.component_swap_item_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$component$component_swap_item_STAR_(props_55407){
var is_search = props_55407.isSearch;
var shapes = props_55407.shapes;
var listing_thumbs = props_55407.listingThumbs;
var file_id = props_55407.fileId;
var root_shape = props_55407.rootShape;
var num_variants = props_55407.numVariants;
var item = props_55407.item;
var loop = props_55407.loop;
var container = props_55407.container;
var component_id = props_55407.componentId;
var on_select = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes),rumext.v2.adapt(file_id),rumext.v2.adapt(item)],(function (){
if(cljs.core.truth_(loop)){
return null;
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.libraries.component_multi_swap(shapes,file_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.specialized_panel.clear_specialized_panel()], 0));
}
}));
var item_ref = rumext.v2.use_ref();
var visible_QMARK_ = app.main.ui.hooks.use_visible.cljs$core$IFn$_invoke$arity$variadic(item_ref,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"once?","once?",-872881597),true], 0));
return rumext.v2.jsxs("button",{'ref':item_ref,'onClick':on_select,'disabled':loop,'className':((cljs.core.not(listing_thumbs))?"main_ui_workspace_sidebar_options_menus_component__swap-item-list":"")+" "+(cljs.core.truth_(listing_thumbs)?"main_ui_workspace_sidebar_options_menus_component__swap-item-grid":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),component_id))?"main_ui_workspace_sidebar_options_menus_component__selected":""),'children':[(cljs.core.truth_(visible_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.common.component_item_thumbnail_STAR_,{'fileId':new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(item),'className':"main_ui_workspace_sidebar_options_menus_component__swap-item-thumbnail",'rootShape':root_shape,'component':item,'container':container}):null),rumext.v2.jsx("span",{'title':(cljs.core.truth_(is_search)?new cljs.core.Keyword(null,"full-name","full-name",408178550).cljs$core$IFn$_invoke$arity$1(item):new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)),'className':"main_ui_workspace_sidebar_options_menus_component__swap-item-name",'children':(cljs.core.truth_(is_search)?new cljs.core.Keyword(null,"full-name","full-name",408178550).cljs$core$IFn$_invoke$arity$1(item):new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item))}),((app.common.types.component.is_variant_QMARK_(item))?rumext.v2.jsx("span",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.assets.components.num-variants",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([num_variants], 0)),'className':"main_ui_workspace_sidebar_options_menus_component__swap-item-variant-icon",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.variant,'size':"s"})}):null)]},["swap-item-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))].join(''));
});

(app.main.ui.workspace.sidebar.options.menus.component.component_swap_item_STAR_.displayName = "component-swap-item*");

app.main.ui.workspace.sidebar.options.menus.component.component_swap_group_title_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$component$component_swap_group_title_STAR_(props_55408){
var on_enter_group = props_55408.onEnterGroup;
var item = props_55408.item;
var group_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item);
var on_group_click = (function (){
return (on_enter_group.cljs$core$IFn$_invoke$arity$1 ? on_enter_group.cljs$core$IFn$_invoke$arity$1(group_name) : on_enter_group.call(null,group_name));
});
return rumext.v2.jsxs("div",{'onClick':on_group_click,'title':group_name,'className':"main_ui_workspace_sidebar_options_menus_component__swap-group",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_component__swap-group-name",'children':app.common.path_names.last_path(group_name)}),rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'className':"main_ui_workspace_sidebar_options_menus_component__swap-group-icon",'variant':"ghost",'iconId':app.main.ui.ds.foundations.assets.icon.arrow_right,'size':"s"})]});
});

(app.main.ui.workspace.sidebar.options.menus.component.component_swap_group_title_STAR_.displayName = "component-swap-group-title*");

app.main.ui.workspace.sidebar.options.menus.component.find_common_path = (function app$main$ui$workspace$sidebar$options$menus$component$find_common_path(var_args){
var G__55413 = arguments.length;
switch (G__55413) {
case 1:
return app.main.ui.workspace.sidebar.options.menus.component.find_common_path.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return app.main.ui.workspace.sidebar.options.menus.component.find_common_path.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.workspace.sidebar.options.menus.component.find_common_path.cljs$core$IFn$_invoke$arity$1 = (function (components){
var paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(app.common.path_names.split_path,new cljs.core.Keyword(null,"path","path",-188191168)),components);
return app.main.ui.workspace.sidebar.options.menus.component.find_common_path.cljs$core$IFn$_invoke$arity$3(paths,cljs.core.PersistentVector.EMPTY,(0));
}));

(app.main.ui.workspace.sidebar.options.menus.component.find_common_path.cljs$core$IFn$_invoke$arity$3 = (function (paths,path,n){
var current = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(cljs.core.first(paths),n,null);
if((((current == null)) || ((!(cljs.core.every_QMARK_((function (p1__55411_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current,cljs.core.nth.cljs$core$IFn$_invoke$arity$3(p1__55411_SHARP_,n,null));
}),paths)))))){
return path;
} else {
return app.main.ui.workspace.sidebar.options.menus.component.find_common_path.cljs$core$IFn$_invoke$arity$3(paths,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path,current),(n + (1)));
}
}));

(app.main.ui.workspace.sidebar.options.menus.component.find_common_path.cljs$lang$maxFixedArity = 3);

app.main.ui.workspace.sidebar.options.menus.component.same_component_file_QMARK_ = (function app$main$ui$workspace$sidebar$options$menus$component$same_component_file_QMARK_(shape_a,shape_b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape_a),new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape_b));
});
app.main.ui.workspace.sidebar.options.menus.component.same_component_QMARK_ = (function app$main$ui$workspace$sidebar$options$menus$component$same_component_QMARK_(shape_a,shape_b){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape_a),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape_b));
});
app.main.ui.workspace.sidebar.options.menus.component.component_swap_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$component$component_swap_STAR_(props_55423){
var shapes = props_55423.shapes;
var single_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(shapes));
var shape = cljs.core.first(shapes);
var current_file_id = rumext.v2.use_ctx(app.main.ui.context.current_file_id);
var libraries = rumext.v2.deref(app.main.refs.libraries);
var objects = rumext.v2.deref(app.main.refs.workspace_page_objects);
var every_same_file_QMARK_ = cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.sidebar.options.menus.component.same_component_file_QMARK_,shape),shapes);
var component_id = ((cljs.core.every_QMARK_(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.sidebar.options.menus.component.same_component_QMARK_,shape),shapes))?new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape):null);
var file_id = ((every_same_file_QMARK_)?new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape):current_file_id);
var components = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55414_SHARP_){
return app.common.types.file.get_component(libraries,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(p1__55414_SHARP_),new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(p1__55414_SHARP_));
}),shapes);
var path = ((single_QMARK_)?new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(cljs.core.first(components)):app.common.path_names.join_path((((!(every_same_file_QMARK_)))?"":app.main.ui.workspace.sidebar.options.menus.component.find_common_path.cljs$core$IFn$_invoke$arity$1(components))));
var filters_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"term","term",-1817390416),"",new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"path","path",-188191168),(function (){var or__5025__auto__ = path;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),new cljs.core.Keyword(null,"listing-thumbs?","listing-thumbs?",1714462360),false], null));
var filters = cljs.core.deref(filters_STAR_);
var search_QMARK_ = (!(cuerdas.core.blank_QMARK_(new cljs.core.Keyword(null,"term","term",-1817390416).cljs$core$IFn$_invoke$arity$1(filters))));
var current_library_id = ((cljs.core.contains_QMARK_(libraries,new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(filters)))?new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(filters):current_file_id);
var current_lib_name = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_library_id,current_file_id))?cuerdas.core.upper(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.local-library")):cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,current_library_id),new cljs.core.Keyword(null,"name","name",1843675177)));
var current_lib_data = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(libraries),rumext.v2.adapt(current_library_id)],(function (){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_library_id,new cljs.core.Keyword(null,"data","data",-232669377)], null));
}));
var current_lib_counts = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_lib_data)],(function (){
return cljs.core.update_vals(cljs.core.group_by(new cljs.core.Keyword(null,"variant-id","variant-id",1171818270),app.common.types.components_list.components_seq(current_lib_data)),cljs.core.count);
}));
var components__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55417_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__55417_SHARP_,new cljs.core.Keyword(null,"full-name","full-name",408178550),app.common.path_names.merge_path_item_with_dot(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__55417_SHARP_),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__55417_SHARP_)));
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55416_SHARP_){
return app.common.files.variant.is_secondary_variant_QMARK_(p1__55416_SHARP_,current_lib_data);
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__55415_SHARP_){
return new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(p1__55415_SHARP_) === true;
}),cljs.core.vals(new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(current_lib_data)))));
var count_variants = (function (component){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(current_lib_counts,new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(component));
});
var get_subgroups = (function (path__$1){
var split_path = app.common.path_names.split_path(path__$1);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,dir){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.last(acc))," / ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(dir)].join(''));
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.first(split_path)], null),cljs.core.rest(split_path));
});
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$variadic(cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"path","path",-188191168)),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1(get_subgroups),cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cuerdas.core.empty_QMARK_),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_),cljs.core.distinct.cljs$core$IFn$_invoke$arity$0(),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__55418_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.common.path_names.butlast_path(p1__55418_SHARP_),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(filters));
}))], 0));
var groups = ((search_QMARK_)?null:cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (name){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
}),cljs.core.sort.cljs$core$IFn$_invoke$arity$1(cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(xform,components__$1))));
var components__$2 = ((search_QMARK_)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55419_SHARP_){
return cuerdas.core.includes_QMARK_(cuerdas.core.lower(new cljs.core.Keyword(null,"full-name","full-name",408178550).cljs$core$IFn$_invoke$arity$1(p1__55419_SHARP_)),cuerdas.core.lower(new cljs.core.Keyword(null,"term","term",-1817390416).cljs$core$IFn$_invoke$arity$1(filters)));
}),components__$1):cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55420_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(p1__55420_SHARP_),new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(filters));
}),components__$1));
var items = (cljs.core.truth_((function (){var or__5025__auto__ = search_QMARK_;
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"listing-thumbs?","listing-thumbs?",1714462360).cljs$core$IFn$_invoke$arity$1(filters);
}
})())?cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"full-name","full-name",408178550),components__$2):cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(groups,components__$2)));
var find_parent_components = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (shape__$1){
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-id","component-id",1551113783),app.common.files.helpers.get_parents(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape__$1))));
}));
var parent_components = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(find_parent_components,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([shapes], 0));
var libraries_options = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (library){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(library),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(library)], null);
}),cljs.core.vals(libraries));
var on_library_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(filters_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"file-id","file-id",-811871323),id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"term","term",-1817390416),"",new cljs.core.Keyword(null,"path","path",-188191168),""], 0));
}));
var on_search_term_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (term){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filters_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"term","term",-1817390416),term);
}));
var on_search_clear_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filters_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"term","term",-1817390416),"");
}));
var on_go_back = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(filters))],(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filters_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"path","path",-188191168),app.common.path_names.butlast_path(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(filters)));
}));
var on_enter_group = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p1__55421_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filters_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"path","path",-188191168),p1__55421_SHARP_);
}));
var toggle_list_style = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (style){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(filters_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"listing-thumbs?","listing-thumbs?",1714462360),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(style,"grid"));
}));
var filter_path_with_dots = app.common.path_names.join_path_with_dot(app.common.path_names.split_path(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(filters)));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__swap",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__swap-title",'children':rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.swap")})}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__swap-content",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__swap-filters",'children':[rumext.v2.jsx(app.main.ui.components.search_bar.search_bar_STAR_,{'id':"swap-component-search-filter",'iconId':app.main.ui.ds.foundations.assets.icon.search,'value':new cljs.core.Keyword(null,"term","term",-1817390416).cljs$core$IFn$_invoke$arity$1(filters),'placeholder':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.search"))," ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_library_id,new cljs.core.Keyword(null,"name","name",1843675177)], null)))].join(''),'onChange':on_search_term_change,'onClear':on_search_clear_click}),rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':current_library_id,'options':libraries_options,'on-change':on_library_change})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__swap-library",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__swap-library-title",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__swap-library-name",'children':current_lib_name}),rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':(cljs.core.truth_(new cljs.core.Keyword(null,"listing-thumbs?","listing-thumbs?",1714462360).cljs$core$IFn$_invoke$arity$1(filters))?"grid":"list"),'on-change':toggle_list_style,'name':"swap-listing-style",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.view_as_list,'value':"list",'id':"swap-opt-list"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.flex_grid,'value':"grid",'id':"swap-opt-grid"})]})]}),((((search_QMARK_) || (cuerdas.core.empty_QMARK_(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(filters)))))?null:rumext.v2.jsxs("button",{'onClick':on_go_back,'title':filter_path_with_dots,'className':"main_ui_workspace_sidebar_options_menus_component__swap-library-back",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow_left,'size':"s"}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_component__swap-library-back-name",'children':filter_path_with_dots})]})),((cljs.core.empty_QMARK_(items))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__swap-library-empty",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.swap.empty")}):null),(cljs.core.truth_(new cljs.core.Keyword(null,"listing-thumbs?","listing-thumbs?",1714462360).cljs$core$IFn$_invoke$arity$1(filters))?rumext.v2.jsx("div",{'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,item){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.component.component_swap_group_title_STAR_,{'item':item,'onEnterGroup':on_enter_group}));

return out_arr__35152__auto__;
}),[],groups)}):null),rumext.v2.jsx("div",{'className':(cljs.core.truth_(new cljs.core.Keyword(null,"listing-thumbs?","listing-thumbs?",1714462360).cljs$core$IFn$_invoke$arity$1(filters))?"main_ui_workspace_sidebar_options_menus_component__swap-library-grid":"")+" "+((cljs.core.not(new cljs.core.Keyword(null,"listing-thumbs?","listing-thumbs?",1714462360).cljs$core$IFn$_invoke$arity$1(filters)))?"main_ui_workspace_sidebar_options_menus_component__swap-library-list":""),'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,item){
out_arr__35152__auto__.push((cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))?(function (){var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,current_library_id),new cljs.core.Keyword(null,"data","data",-232669377));
var container = app.common.types.file.get_component_page(data,item);
var root_shape = app.common.types.file.get_component_root(data,item);
var components__$3 = cljs.core.set(cljs.core.keep.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"component-id","component-id",1551113783),app.common.files.helpers.get_children_with_self(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root_shape))));
var loop_QMARK_ = cljs.core.some((function (p1__55422_SHARP_){
return cljs.core.contains_QMARK_(components__$3,p1__55422_SHARP_);
}),parent_components);
return rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.component.component_swap_item_STAR_,{'loop':loop_QMARK_,'isSearch':search_QMARK_,'componentId':component_id,'listingThumbs':new cljs.core.Keyword(null,"listing-thumbs?","listing-thumbs?",1714462360).cljs$core$IFn$_invoke$arity$1(filters),'numVariants':count_variants(item),'rootShape':root_shape,'shapes':shapes,'item':item,'fileId':current_library_id,'container':container},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item) ?? ""));
})():rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.component.component_swap_group_title_STAR_,{'item':item,'onEnterGroup':on_enter_group},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item))));

return out_arr__35152__auto__;
}),[],items)})]})]})]});
});

(app.main.ui.workspace.sidebar.options.menus.component.component_swap_STAR_.displayName = "component-swap*");

app.main.ui.workspace.sidebar.options.menus.component.component_pill_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$component$component_pill_STAR_(props_55463){
var text = props_55463.text;
var disabled = props_55463.disabled;
var menu_entries = props_55463.menuEntries;
var icon = props_55463.icon;
var on_click = props_55463.onClick;
var subtext = props_55463.subtext;
var menu_open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var menu_open_QMARK_ = cljs.core.deref(menu_open_STAR_);
var menu_entries_QMARK_ = cljs.core.seq(menu_entries);
var on_menu_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(menu_open_STAR_),rumext.v2.adapt(menu_open_QMARK_)],(function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

return cljs.core.reset_BANG_(menu_open_STAR_,cljs.core.not(menu_open_QMARK_));
}));
var on_menu_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(menu_open_STAR_)],(function (){
return cljs.core.reset_BANG_(menu_open_STAR_,false);
}));
var do_action = (function (action,event){
app.util.dom.stop_propagation(event);

(action.cljs$core$IFn$_invoke$arity$0 ? action.cljs$core$IFn$_invoke$arity$0() : action.call(null));

return (on_menu_close.cljs$core$IFn$_invoke$arity$0 ? on_menu_close.cljs$core$IFn$_invoke$arity$0() : on_menu_close.call(null));
});
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__pill",'children':[rumext.v2.jsxs("button",{'data-testid':"component-pill-button",'onClick':on_click,'disabled':disabled,'className':"main_ui_workspace_sidebar_options_menus_component__pill-btn"+" "+((menu_entries_QMARK_)?"main_ui_workspace_sidebar_options_menus_component__with-menu":""),'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__pill-btn-icon",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'size':"s",'iconId':icon})}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__pill-btn-name",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__pill-btn-text",'children':text}),(cljs.core.truth_(subtext)?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__pill-btn-subtext",'children':subtext}):null)]})]}),((menu_entries_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__pill-actions",'children':[rumext.v2.jsx("button",{'onClick':on_menu_click,'className':"main_ui_workspace_sidebar_options_menus_component__pill-actions-btn"+" "+(cljs.core.truth_(menu_open_QMARK_)?"main_ui_workspace_sidebar_options_menus_component__selected":""),'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.menu})}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':menu_open_QMARK_,'on-close':on_menu_close,'children':rumext.v2.jsx("ul",{'className':"main_ui_workspace_sidebar_options_menus_component__pill-actions-dropdown"+" "+(cljs.core.truth_(subtext)?"main_ui_workspace_sidebar_options_menus_component__extended":""),'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55483){
var map__55484 = p__55483;
var map__55484__$1 = cljs.core.__destructure_map(map__55484);
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55484__$1,new cljs.core.Keyword(null,"title","title",636505583));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55484__$1,new cljs.core.Keyword(null,"action","action",-811238024));
out_arr__35152__auto__.push((((!((title == null))))?rumext.v2.jsx("li",{'onClick':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(do_action,action),'className':"main_ui_workspace_sidebar_options_menus_component__pill-actions-dropdown-item",'children':rumext.v2.jsx("span",{'children':title})},title):null));

return out_arr__35152__auto__;
}),[],menu_entries)})})]}):null)]});
});

(app.main.ui.workspace.sidebar.options.menus.component.component_pill_STAR_.displayName = "component-pill*");

app.main.ui.workspace.sidebar.options.menus.component.component_menu_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$component$component_menu_STAR_(props_55486){
var shapes = props_55486.shapes;
var is_swap_opened = props_55486.isSwapOpened;
var current_file_id = rumext.v2.use_ctx(app.main.ui.context.current_file_id);
var libraries = rumext.v2.deref(app.main.refs.files);
var current_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,current_file_id);
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-content","show-content",-878000465),true,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false], null);
}));
var state = cljs.core.deref(state_STAR_);
var open_QMARK_ = new cljs.core.Keyword(null,"show-content","show-content",-878000465).cljs$core$IFn$_invoke$arity$1(state);
var shapes__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.types.component.instance_head_QMARK_,shapes);
var multi = (cljs.core.count(shapes__$1) > (1));
var copies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.types.component.in_component_copy_QMARK_,shapes__$1);
var can_swap_QMARK_ = cljs.core.boolean$(cljs.core.seq(copies));
var all_main_QMARK_ = cljs.core.every_QMARK_(app.common.types.component.main_instance_QMARK_,shapes__$1);
var any_variant_QMARK_ = cljs.core.some(app.common.types.component.is_variant_QMARK_,shapes__$1);
var components = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55485_SHARP_){
return app.common.types.file.resolve_component.cljs$core$IFn$_invoke$arity$variadic(p1__55485_SHARP_,current_file,libraries,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),true], null)], 0));
}),shapes__$1);
var same_variant_QMARK_ = app.common.types.variant.same_variant_QMARK_(components);
var shape = cljs.core.first(shapes__$1);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
var shape_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape);
var component = cljs.core.first(components);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"data","data",-232669377));
var is_variant_QMARK_ = app.common.types.component.is_variant_QMARK_(component);
var main_instance_QMARK_ = app.common.types.component.main_instance_QMARK_(shape);
var toggle_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"show-content","show-content",-878000465),cljs.core.not);
}));
var on_click_variant_title_help = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"variants-help-modal","variants-help-modal",1413487149)], null));

return app.main.data.modal.allow_click_outside_BANG_();
}));
var on_component_back = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace.specialized-panel","interrupt","app.main.data.workspace.specialized-panel/interrupt",-2063805375));
}));
var open_component_panel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(can_swap_QMARK_),rumext.v2.adapt(shapes__$1)],(function (){
var search_id = "swap-component-search-filter";
if(can_swap_QMARK_){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.specialized_panel.open_specialized_panel(new cljs.core.Keyword(null,"component-swap","component-swap",-190693695)));
} else {
}

return app.util.timers.schedule_on_idle.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.dom.focus_BANG_(app.util.dom.get_element(search_id));
}));
}));
var transform_into_variant = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.variants.transform_in_variant.cljs$core$IFn$_invoke$arity$1(id));
}));
var create_variant = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-new-variant",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:button-design-tab-variant"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.variants.add_new_variant.cljs$core$IFn$_invoke$arity$1(id)], 0));
}));
var add_new_property = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-new-property",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:button-design-tab-variant"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.variants.add_new_property.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(shape),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property-value","property-value",1516163307),"Value 1",new cljs.core.Keyword(null,"editing?","editing?",1646440800),true], null)], 0))], 0));
}));
var on_combine_as_variants = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.variants.combine_selected_as_variants(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger","trigger",103466139),"workspace:button-design-tab"], null)));
}));
var rerender_fn = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"render","render",-1408033454),cljs.core.inc);
}));
var menu_entries = app.main.ui.workspace.sidebar.assets.common.generate_components_menu_entries.cljs$core$IFn$_invoke$arity$variadic(shapes__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"for-design-tab?","for-design-tab?",-900372392),true], null)], 0));
var path = app.common.path_names.join_path_with_dot(app.common.path_names.split_path(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(component)));
if(cljs.core.seq(shapes__$1)){
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__component-section",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__component-title",'children':(cljs.core.truth_(is_swap_opened)?rumext.v2.jsxs("button",{'onClick':on_component_back,'className':"main_ui_workspace_sidebar_options_menus_component__component-title-swap",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow_left,'size':"s"}),rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component")})]}):rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':true,'collapsed':cljs.core.not(open_QMARK_),'onCollapsed':toggle_content,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component"),'className':"main_ui_workspace_sidebar_options_menus_component__component-title-bar",'titleClass':"main_ui_workspace_sidebar_options_menus_component__component-title-bar-title",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_component__component-title-bar-type",'children':((main_instance_QMARK_)?((is_variant_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.variant"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.main")):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.copy"))})}),((is_variant_QMARK_)?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.variants-help-modal.title"),'onClick':on_click_variant_title_help,'icon':app.main.ui.ds.foundations.assets.icon.help}):null),((main_instance_QMARK_)?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.add-variant"),'onClick':((is_variant_QMARK_)?create_variant:transform_into_variant),'icon':app.main.ui.ds.foundations.assets.icon.variant}):null)]}))}),(cljs.core.truth_(open_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__component-content",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__component-pill",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.component.component_pill_STAR_,{'icon':((main_instance_QMARK_)?((is_variant_QMARK_)?app.main.ui.ds.foundations.assets.icon.variant:app.main.ui.ds.foundations.assets.icon.component):app.main.ui.ds.foundations.assets.icon.component_copy),'text':((((multi) && (cljs.core.not(same_variant_QMARK_))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):app.common.path_names.last_path(shape_name)),'subtext':(cljs.core.truth_((function (){var and__5023__auto__ = can_swap_QMARK_;
if(and__5023__auto__){
var or__5025__auto__ = (!(multi));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return same_variant_QMARK_;
}
} else {
return and__5023__auto__;
}
})())?(cljs.core.truth_(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.unlinked"):app.common.path_names.merge_path_item_with_dot(path,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component))):null),'onClick':open_component_panel,'disabled':(function (){var or__5025__auto__ = is_swap_opened;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (!(can_swap_QMARK_));
}
})(),'menuEntries':menu_entries}),((((is_variant_QMARK_) && (main_instance_QMARK_)))?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.add-variant-property"),'onClick':add_new_property,'icon':app.main.ui.ds.foundations.assets.icon.add}):null)]}),(cljs.core.truth_(is_swap_opened)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.component.component_swap_STAR_,{'shapes':copies}):null),(cljs.core.truth_((function (){var and__5023__auto__ = is_variant_QMARK_;
if(and__5023__auto__){
var and__5023__auto____$1 = (!(main_instance_QMARK_));
if(and__5023__auto____$1){
var and__5023__auto____$2 = cljs.core.not(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component));
if(and__5023__auto____$2){
var and__5023__auto____$3 = cljs.core.not(is_swap_opened);
if(and__5023__auto____$3){
var or__5025__auto__ = (!(multi));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return same_variant_QMARK_;
}
} else {
return and__5023__auto____$3;
}
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.component.component_variant_copy_STAR_,{'currentFileId':current_file_id,'components':components,'shapes':shapes__$1,'componentFileData':data}):null),(cljs.core.truth_((function (){var and__5023__auto__ = is_variant_QMARK_;
if(and__5023__auto__){
var and__5023__auto____$1 = main_instance_QMARK_;
if(and__5023__auto____$1){
var and__5023__auto____$2 = same_variant_QMARK_;
if(cljs.core.truth_(and__5023__auto____$2)){
return cljs.core.not(is_swap_opened);
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.component.component_variant_STAR_,{'components':components,'shapes':shapes__$1,'data':data}):null),((((cljs.core.not(is_swap_opened)) && ((!(multi)))))?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.component.component_annotation_STAR_,{'id':id,'shape':shape,'component':component,'rerenderFn':rerender_fn}):null),((((multi) && (((all_main_QMARK_) && (cljs.core.not(any_variant_QMARK_))))))?rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"secondary",'type':"button",'className':"main_ui_workspace_sidebar_options_menus_component__component-combine",'onClick':on_combine_as_variants,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.combine-as-variants")}):null),((app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"display-touched","display-touched",-1742826950)))?rumext.v2.jsxs("div",{'children':[":touched ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"touched","touched",-609134419).cljs$core$IFn$_invoke$arity$1(shape))]}):null)]}):null)]});
} else {
return null;
}
});

(app.main.ui.workspace.sidebar.options.menus.component.component_menu_STAR_.displayName = "component-menu*");

/**
 * Creates a new vector with the empty items at the end
 */
app.main.ui.workspace.sidebar.options.menus.component.move_empty_items_to_end = (function app$main$ui$workspace$sidebar$options$menus$component$move_empty_items_to_end(v){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.empty_QMARK_),v),cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.empty_QMARK_),v);
});
app.main.ui.workspace.sidebar.options.menus.component.component_variant_main_property_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$component$component_variant_main_property_STAR_(props_55504){
var on_remove = props_55504.onRemove;
var property = props_55504.property;
var on_blur = props_55504.onBlur;
var pos = props_55504.pos;
var on_reorder = props_55504.onReorder;
var is_remove_disabled = props_55504.isRemoveDisabled;
var values = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.replace.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 1, ["","--"], null),app.main.ui.workspace.sidebar.options.menus.component.move_empty_items_to_end(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(property))));
var on_drop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (relative_pos,data){
var from_pos = new cljs.core.Keyword(null,"from-pos","from-pos",1141953080).cljs$core$IFn$_invoke$arity$1(data);
var to_space_between_pos = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(relative_pos,new cljs.core.Keyword(null,"bot","bot",-950896508)))?(pos + (1)):pos);
return (on_reorder.cljs$core$IFn$_invoke$arity$2 ? on_reorder.cljs$core$IFn$_invoke$arity$2(from_pos,to_space_between_pos) : on_reorder.call(null,from_pos,to_space_between_pos));
}));
var vec__55506 = app.main.ui.hooks.use_sortable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data-type","data-type",-326421468),"penpot/variant-main-property",new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),on_drop,new cljs.core.Keyword(null,"draggable?","draggable?",-236042740),true,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"from-pos","from-pos",1141953080),pos], null)], 0));
var dprops = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55506,(0),null);
var dref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55506,(1),null);
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-property"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"top","top",-1856271961)))?"main_ui_workspace_sidebar_options_menus_component__dnd-over-top":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"bot","bot",-950896508)))?"main_ui_workspace_sidebar_options_menus_component__dnd-over-bot":""),'children':[(((!((on_reorder == null))))?rumext.v2.jsx(app.main.ui.components.reorder_handler.reorder_handler_STAR_,{'ref':dref}):null),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-property-row",'children':[rumext.v2.jsx(app.main.ui.ds.product.input_with_meta.input_with_meta_STAR_,{'value':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(property),'data-position':pos,'meta':values,'isEditing':new cljs.core.Keyword(null,"editing?","editing?",1646440800).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(property)),'maxLength':app.common.types.variant.property_max_length,'onBlur':on_blur}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'icon':app.main.ui.ds.foundations.assets.icon.remove,'data-position':pos,'aria-label':(cljs.core.truth_(is_remove_disabled)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.remove-variant-property.last-property"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.remove-variant-property")),'onClick':on_remove,'disabled':is_remove_disabled})]})]});
});

(app.main.ui.workspace.sidebar.options.menus.component.component_variant_main_property_STAR_.displayName = "component-variant-main-property*");

app.main.ui.workspace.sidebar.options.menus.component.component_variant_main_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$component$component_variant_main_STAR_(props_55517){
var shapes = props_55517.shapes;
var multi_QMARK_ = (cljs.core.count(shapes) > (1));
var shape = cljs.core.first(shapes);
var shape_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape);
var libraries = cljs.core.deref(app.main.refs.libraries);
var current_file_id = rumext.v2.use_ctx(app.main.ui.context.current_file_id);
var current_page_id = rumext.v2.use_ctx(app.main.ui.context.current_page_id);
var data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_file_id,new cljs.core.Keyword(null,"data","data",-232669377)], null));
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.get_page(data,current_page_id),new cljs.core.Keyword(null,"objects","objects",2099713734));
var variants = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55513_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__55513_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
var variant_id = new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(cljs.core.first(variants));
var variant_components = app.common.files.variant.find_variant_components.cljs$core$IFn$_invoke$arity$3(data,objects,variant_id);
var malformed_ids = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.filterv((function (p1__55514_SHARP_){
return (!((new cljs.core.Keyword(null,"variant-error","variant-error",-42521934).cljs$core$IFn$_invoke$arity$1(p1__55514_SHARP_) == null)));
}),variants));
var malformed_QMARK_ = app.common.data.not_empty_QMARK_(malformed_ids);
var duplicated_ids = app.main.ui.workspace.sidebar.options.menus.component.get_main_ids_with_duplicated_variant_props_and_values(variant_components);
var duplicated_QMARK_ = app.common.data.not_empty_QMARK_(duplicated_ids);
var properties = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(data),rumext.v2.adapt(objects),rumext.v2.adapt(variant_id)],(function (){
return app.common.files.variant.extract_properties_values(data,objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
}));
var single_property_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(properties),(1));
var open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(true);
var open_QMARK_ = cljs.core.deref(open_STAR_);
var show_in_assets_panel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(variants)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.show_component_in_assets(new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(cljs.core.first(variants))));
}));
var create_variant = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (trigger){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-new-variant",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),trigger], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.variants.add_new_variant.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))], 0));
}));
var add_new_property = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(variant_id)],(function (trigger){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-new-property",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),trigger], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.variants.add_new_property.cljs$core$IFn$_invoke$arity$variadic(variant_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property-value","property-value",1516163307),"Value 1",new cljs.core.Keyword(null,"editing?","editing?",1646440800),true], null)], 0))], 0));
}));
var menu_entries = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.show-in-assets"),new cljs.core.Keyword(null,"action","action",-811238024),show_in_assets_panel], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.add-variant"),new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(create_variant,"workspace:design-tab-menu-component")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.add-variant-property"),new cljs.core.Keyword(null,"action","action",-811238024),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(add_new_property,"workspace:design-tab-menu-component")], null)], null);
var toggle_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_STAR_,cljs.core.not);
}));
var on_click_variant_title_help = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"variants-help-modal","variants-help-modal",1413487149)], null));

return app.main.data.modal.allow_click_outside_BANG_();
}));
var update_property_name = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(variant_id)],(function (event){
var value = app.util.dom.get_target_val(event);
var pos = (app.util.dom.get_data(app.util.dom.get_current_target(event),"position") | (0));
if(cljs.core.seq(value)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.variants.update_property_name(variant_id,pos,value,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"trigger","trigger",103466139),"workspace:design-tab-component"], null)));
} else {
return null;
}
}));
var remove_property = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(variant_id),rumext.v2.adapt(properties)],(function (event){
var pos = (app.util.dom.get_data(app.util.dom.get_current_target(event),"position") | (0));
if((cljs.core.count(properties) > (1))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"variant-remove-property",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:button-design-tab"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.variants.remove_property(variant_id,pos)], 0));
} else {
return null;
}
}));
var reorder_properties = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(variant_id)],(function (from_pos,to_space_between_pos){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.variants.reorder_variant_poperties(variant_id,from_pos,to_space_between_pos));
}));
var select_shapes_with_malformed = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(malformed_ids)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.select_shapes(cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),malformed_ids)));
}));
var select_shapes_with_duplicated = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(duplicated_ids)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.select_shapes(cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),duplicated_ids)));
}));
if(cljs.core.seq(shapes)){
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__component-section",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__component-title",'children':rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':true,'collapsed':cljs.core.not(open_QMARK_),'onCollapsed':toggle_content,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component"),'className':"main_ui_workspace_sidebar_options_menus_component__component-title-bar",'titleClass':"main_ui_workspace_sidebar_options_menus_component__component-title-bar-title",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_component__component-title-bar-type",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.main")})}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.variants-help-modal.title"),'onClick':on_click_variant_title_help,'icon':app.main.ui.ds.foundations.assets.icon.help}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.add-variant"),'onClick':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(create_variant,"workspace:button-design-tab-component"),'icon':app.main.ui.ds.foundations.assets.icon.variant})]})}),(cljs.core.truth_(open_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__component-content",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__component-pill",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.component.component_pill_STAR_,{'icon':app.main.ui.ds.foundations.assets.icon.component,'text':((multi_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):app.common.path_names.last_path(shape_name)),'disabled':true,'menuEntries':menu_entries}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.add-variant-property"),'onClick':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(add_new_property,"workspace:button-design-tab-component"),'icon':app.main.ui.ds.foundations.assets.icon.add})]}),((multi_QMARK_)?null:rumext.v2.jsx(app.main.ui.hooks.sortable_container_STAR_,{'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-property-list",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55533){
var vec__55534 = p__55533;
var pos = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55534,(0),null);
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55534,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.component.component_variant_main_property_STAR_,{'pos':pos,'property':property,'isRemoveDisabled':single_property_QMARK_,'onRemove':remove_property,'onBlur':update_property_name,'onReorder':reorder_properties},[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),cljs.core.str.cljs$core$IFn$_invoke$arity$1(pos)].join('')));

return out_arr__35152__auto__;
}),[],cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,properties))})})),((malformed_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.msg_neutral,'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning-darken"}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning-highlight",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.variant.malformed.group.title")}),rumext.v2.jsx("button",{'onClick':select_shapes_with_malformed,'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning-button",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.variant.malformed.group.locate")})]}):((duplicated_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.msg_neutral,'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning-darken"}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning-highlight",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.variant.duplicated.group.title")}),rumext.v2.jsx("button",{'onClick':select_shapes_with_duplicated,'className':"main_ui_workspace_sidebar_options_menus_component__variant-warning-button",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.component.variant.duplicated.group.locate")})]}):null))]}):null)]});
} else {
return null;
}
});

(app.main.ui.workspace.sidebar.options.menus.component.component_variant_main_STAR_.displayName = "component-variant-main*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.component.js.map
