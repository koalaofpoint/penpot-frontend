import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.tokens.js";
import "./app.common.types.shape.layout.js";
import "./app.common.types.token.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.shape_layout.js";
import "./app.main.data.workspace.tokens.application.js";
import "./app.main.data.workspace.tokens.library_edit.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.hooks.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.timers.js";
import "./clojure.set.js";
import "./okulary.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.management.context_menu');
app.main.ui.workspace.tokens.management.context_menu.key_in_map_QMARK_ = (function app$main$ui$workspace$tokens$management$context_menu$key_in_map_QMARK_(ks,m){
return cljs.core.some((function (p1__56189_SHARP_){
return cljs.core.contains_QMARK_(m,p1__56189_SHARP_);
}),ks);
});
/**
 * Cleans up `:separator` inside of `items` with these rules:
 *  - Clean consecutive items like `[:separator :separator {}]`
 *  - Returns nil for lists consisting only of `:separator` items.
 *  - Removes `:separator` at the beginning of the `items`
 */
app.main.ui.workspace.tokens.management.context_menu.clean_separators = (function app$main$ui$workspace$tokens$management$context_menu$clean_separators(items){
var items_SINGLEQUOTE_ = cljs.core.drop_while.cljs$core$IFn$_invoke$arity$2((function (p1__56190_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__56190_SHARP_,new cljs.core.Keyword(null,"separator","separator",-1628749125));
}),cljs.core.dedupe.cljs$core$IFn$_invoke$arity$1(items));
if(cljs.core.every_QMARK_((function (p1__56191_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__56191_SHARP_,new cljs.core.Keyword(null,"separator","separator",-1628749125));
}),items_SINGLEQUOTE_)){
return null;
} else {
return items_SINGLEQUOTE_;
}
});
app.main.ui.workspace.tokens.management.context_menu.attribute_actions = (function app$main$ui$workspace$tokens$management$context_menu$attribute_actions(token,selected_shapes,attributes){
var ids_by_attributes = app.common.files.tokens.shapes_ids_by_applied_attributes(token,selected_shapes,attributes);
var shape_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),selected_shapes));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"all-selected?","all-selected?",998306472),app.common.files.tokens.shapes_applied_all_QMARK_(ids_by_attributes,shape_ids,attributes),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),shape_ids,new cljs.core.Keyword(null,"selected-pred","selected-pred",-1733167808),(function (p1__56193_SHARP_){
return cljs.core.seq((p1__56193_SHARP_.cljs$core$IFn$_invoke$arity$1 ? p1__56193_SHARP_.cljs$core$IFn$_invoke$arity$1(ids_by_attributes) : p1__56193_SHARP_.call(null,ids_by_attributes)));
})], null);
});
app.main.ui.workspace.tokens.management.context_menu.generic_attribute_actions = (function app$main$ui$workspace$tokens$management$context_menu$generic_attribute_actions(attributes,title,p__56194){
var map__56195 = p__56194;
var map__56195__$1 = cljs.core.__destructure_map(map__56195);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56195__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var selected_shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56195__$1,new cljs.core.Keyword(null,"selected-shapes","selected-shapes",-40235010));
var on_update_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56195__$1,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523));
var hint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56195__$1,new cljs.core.Keyword(null,"hint","hint",439639918));
var allowed_shape_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56195__$1,new cljs.core.Keyword(null,"allowed-shape-attributes","allowed-shape-attributes",-11621484));
var allowed_attributes = clojure.set.intersection.cljs$core$IFn$_invoke$arity$2(attributes,allowed_shape_attributes);
var on_update_shape_fn = (function (){var or__5025__auto__ = on_update_shape;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.workspace.tokens.application.get_update_shape_fn(token);
}
})();
var map__56196 = app.main.ui.workspace.tokens.management.context_menu.attribute_actions(token,selected_shapes,allowed_attributes);
var map__56196__$1 = cljs.core.__destructure_map(map__56196);
var selected_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56196__$1,new cljs.core.Keyword(null,"selected-pred","selected-pred",-1733167808));
var shape_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56196__$1,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806));
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (attribute){
var selected_QMARK_ = (selected_pred.cljs$core$IFn$_invoke$arity$1 ? selected_pred.cljs$core$IFn$_invoke$arity$1(attribute) : selected_pred.call(null,attribute));
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.PersistentHashSet.createAsIfByAssoc([attribute]),new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),shape_ids], null);
var unnaply_props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.PersistentHashSet.createAsIfByAssoc([attribute]),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),shape_ids], null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"hint","hint",439639918),hint,new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_,new cljs.core.Keyword(null,"action","action",-811238024),(function (){
if(cljs.core.truth_(selected_QMARK_)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.unapply_token(unnaply_props));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.apply_token(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),on_update_shape_fn)));
}
})], null);
}),allowed_attributes);
});
app.main.ui.workspace.tokens.management.context_menu.all_or_separate_actions = (function app$main$ui$workspace$tokens$management$context_menu$all_or_separate_actions(p__56197,p__56198){
var map__56199 = p__56197;
var map__56199__$1 = cljs.core.__destructure_map(map__56199);
var attribute_labels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56199__$1,new cljs.core.Keyword(null,"attribute-labels","attribute-labels",-1728954592));
var on_update_shape_all = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56199__$1,new cljs.core.Keyword(null,"on-update-shape-all","on-update-shape-all",421199428));
var on_update_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56199__$1,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523));
var hint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56199__$1,new cljs.core.Keyword(null,"hint","hint",439639918));
var map__56200 = p__56198;
var map__56200__$1 = cljs.core.__destructure_map(map__56200);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56200__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var selected_shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56200__$1,new cljs.core.Keyword(null,"selected-shapes","selected-shapes",-40235010));
var allowed_shape_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56200__$1,new cljs.core.Keyword(null,"allowed-shape-attributes","allowed-shape-attributes",-11621484));
var temp__5825__auto__ = cljs.core.seq(cljs.core.select_keys(attribute_labels,allowed_shape_attributes));
if(temp__5825__auto__){
var attribute_labels__$1 = temp__5825__auto__;
var attributes = cljs.core.set(cljs.core.keys(attribute_labels__$1));
var map__56201 = app.main.ui.workspace.tokens.management.context_menu.attribute_actions(token,selected_shapes,attributes);
var map__56201__$1 = cljs.core.__destructure_map(map__56201);
var all_selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56201__$1,new cljs.core.Keyword(null,"all-selected?","all-selected?",998306472));
var selected_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56201__$1,new cljs.core.Keyword(null,"selected-pred","selected-pred",-1733167808));
var shape_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56201__$1,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806));
var all_action = (function (){var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),attributes,new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),shape_ids], null);
var unnaply_props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"attributes","attributes",-74013604),attributes,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),shape_ids], null);
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.all"),new cljs.core.Keyword(null,"selected?","selected?",-742502788),all_selected_QMARK_,new cljs.core.Keyword(null,"hint","hint",439639918),hint,new cljs.core.Keyword(null,"action","action",-811238024),(function (){
if(cljs.core.truth_(all_selected_QMARK_)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.unapply_token(unnaply_props));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.apply_token(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),(function (){var or__5025__auto__ = on_update_shape_all;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return on_update_shape;
}
})())));
}
})], null);
})();
var single_actions = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56202){
var vec__56203 = p__56202;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56203,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56203,(1),null);
var selected_QMARK_ = (selected_pred.cljs$core$IFn$_invoke$arity$1 ? selected_pred.cljs$core$IFn$_invoke$arity$1(attr) : selected_pred.call(null,attr));
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"selected?","selected?",-742502788),(function (){var and__5023__auto__ = cljs.core.not(all_selected_QMARK_);
if(and__5023__auto__){
return selected_QMARK_;
} else {
return and__5023__auto__;
}
})(),new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.PersistentHashSet.createAsIfByAssoc([attr]),new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),shape_ids], null);
var unnaply_props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.PersistentHashSet.createAsIfByAssoc([attr]),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),shape_ids], null);
var event = (cljs.core.truth_(all_selected_QMARK_)?app.main.data.workspace.tokens.application.apply_token(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"attributes-to-remove","attributes-to-remove",1017662650),attributes)):(cljs.core.truth_(selected_QMARK_)?app.main.data.workspace.tokens.application.unapply_token(unnaply_props):app.main.data.workspace.tokens.application.apply_token(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),on_update_shape))
));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(event);
})], null);
}),attribute_labels__$1);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2((cljs.core.truth_(all_action)?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [all_action], null):null),single_actions);
} else {
return null;
}
});
app.main.ui.workspace.tokens.management.context_menu.layout_spacing_items = (function app$main$ui$workspace$tokens$management$context_menu$layout_spacing_items(p__56206){
var map__56207 = p__56206;
var map__56207__$1 = cljs.core.__destructure_map(map__56207);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56207__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var selected_shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56207__$1,new cljs.core.Keyword(null,"selected-shapes","selected-shapes",-40235010));
var all_attr_labels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56207__$1,new cljs.core.Keyword(null,"all-attr-labels","all-attr-labels",-1560265704));
var horizontal_attr_labels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56207__$1,new cljs.core.Keyword(null,"horizontal-attr-labels","horizontal-attr-labels",641068751));
var vertical_attr_labels = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56207__$1,new cljs.core.Keyword(null,"vertical-attr-labels","vertical-attr-labels",1255704246));
var on_update_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56207__$1,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523));
var hint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56207__$1,new cljs.core.Keyword(null,"hint","hint",439639918));
var horizontal_attrs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(horizontal_attr_labels));
var vertical_attrs = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(vertical_attr_labels));
var attrs = clojure.set.union.cljs$core$IFn$_invoke$arity$2(horizontal_attrs,vertical_attrs);
var map__56208 = app.main.ui.workspace.tokens.management.context_menu.attribute_actions(token,selected_shapes,attrs);
var map__56208__$1 = cljs.core.__destructure_map(map__56208);
var all_selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56208__$1,new cljs.core.Keyword(null,"all-selected?","all-selected?",998306472));
var selected_pred = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56208__$1,new cljs.core.Keyword(null,"selected-pred","selected-pred",-1733167808));
var shape_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56208__$1,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806));
var horizontal_selected_QMARK_ = ((cljs.core.not(all_selected_QMARK_)) && (cljs.core.every_QMARK_(selected_pred,horizontal_attrs)));
var vertical_selected_QMARK_ = ((cljs.core.not(all_selected_QMARK_)) && (cljs.core.every_QMARK_(selected_pred,vertical_attrs)));
var multi_items = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.all"),new cljs.core.Keyword(null,"selected?","selected?",-742502788),all_selected_QMARK_,new cljs.core.Keyword(null,"hint","hint",439639918),hint,new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),attrs,new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),shape_ids], null);
var unnaply_props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"attributes","attributes",-74013604),attrs,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),shape_ids], null);
if(cljs.core.truth_(all_selected_QMARK_)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.unapply_token(unnaply_props));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.apply_token(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),on_update_shape)));
}
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Horizontal",new cljs.core.Keyword(null,"selected?","selected?",-742502788),horizontal_selected_QMARK_,new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),shape_ids], null);
var event = (cljs.core.truth_(all_selected_QMARK_)?app.main.data.workspace.tokens.application.apply_token(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"attributes-to-remove","attributes-to-remove",1017662650),vertical_attrs)):((horizontal_selected_QMARK_)?app.main.data.workspace.tokens.application.apply_token(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"attributes-to-remove","attributes-to-remove",1017662650),horizontal_attrs)):app.main.data.workspace.tokens.application.apply_token(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"attributes","attributes",-74013604),horizontal_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),on_update_shape], 0)))
));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(event);
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),"Vertical",new cljs.core.Keyword(null,"selected?","selected?",-742502788),vertical_selected_QMARK_,new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var props = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),shape_ids], null);
var event = (cljs.core.truth_(all_selected_QMARK_)?app.main.data.workspace.tokens.application.apply_token(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"attributes-to-remove","attributes-to-remove",1017662650),horizontal_attrs)):((vertical_selected_QMARK_)?app.main.data.workspace.tokens.application.apply_token(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"attributes-to-remove","attributes-to-remove",1017662650),vertical_attrs)):app.main.data.workspace.tokens.application.apply_token(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(props,new cljs.core.Keyword(null,"attributes","attributes",-74013604),vertical_attrs,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),on_update_shape], 0)))
));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(event);
})], null)], null);
var single_items = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56209){
var vec__56210 = p__56209;
var attr = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56210,(0),null);
var title = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56210,(1),null);
var same_axis_selected_QMARK_ = (cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(horizontal_attrs,attr))?horizontal_selected_QMARK_:(cljs.core.truth_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(vertical_attrs,attr))?vertical_selected_QMARK_:true
));
var selected_QMARK_ = (function (){var and__5023__auto__ = cljs.core.not(all_selected_QMARK_);
if(and__5023__auto__){
var and__5023__auto____$1 = (!(same_axis_selected_QMARK_));
if(and__5023__auto____$1){
return (selected_pred.cljs$core$IFn$_invoke$arity$1 ? selected_pred.cljs$core$IFn$_invoke$arity$1(attr) : selected_pred.call(null,attr));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"selected?","selected?",-742502788),selected_QMARK_,new cljs.core.Keyword(null,"action","action",-811238024),(function (){
var props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.PersistentHashSet.createAsIfByAssoc([attr]),new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),shape_ids], null);
var unnaply_props = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"attributes","attributes",-74013604),cljs.core.PersistentHashSet.createAsIfByAssoc([attr]),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),shape_ids], null);
var event = (cljs.core.truth_(all_selected_QMARK_)?app.main.data.workspace.tokens.application.apply_token(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"attributes-to-remove","attributes-to-remove",1017662650),attrs)):(cljs.core.truth_(selected_QMARK_)?app.main.data.workspace.tokens.application.unapply_token(unnaply_props):app.main.data.workspace.tokens.application.apply_token(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),on_update_shape))
));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(event);
})], null);
}),all_attr_labels);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(multi_items,single_items);
});
app.main.ui.workspace.tokens.management.context_menu.update_shape_layout_padding = (function app$main$ui$workspace$tokens$management$context_menu$update_shape_layout_padding(value,shape_ids,attributes){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(attributes),(1)))?app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(shape_ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-padding-type","layout-padding-type",-1407674837),new cljs.core.Keyword(null,"multiple","multiple",1244445549)], null)):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.tokens.application.update_layout_padding.cljs$core$IFn$_invoke$arity$3(value,shape_ids,attributes)], 0));
});
app.main.ui.workspace.tokens.management.context_menu.update_shape_layout_margin = (function app$main$ui$workspace$tokens$management$context_menu$update_shape_layout_margin(value,shape_ids,attributes){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(attributes),(1)))?app.main.data.workspace.shape_layout.update_layout.cljs$core$IFn$_invoke$arity$2(shape_ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"layout-item-margin-type","layout-item-margin-type",-1313230390),new cljs.core.Keyword(null,"multiple","multiple",1244445549)], null)):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.tokens.application.update_layout_item_margin.cljs$core$IFn$_invoke$arity$3(value,shape_ids,attributes)], 0));
});
app.main.ui.workspace.tokens.management.context_menu.spacing_attribute_actions = (function app$main$ui$workspace$tokens$management$context_menu$spacing_attribute_actions(p__56215){
var map__56216 = p__56215;
var map__56216__$1 = cljs.core.__destructure_map(map__56216);
var context_data = map__56216__$1;
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56216__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var selected_shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56216__$1,new cljs.core.Keyword(null,"selected-shapes","selected-shapes",-40235010));
var allowed_shape_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56216__$1,new cljs.core.Keyword(null,"allowed-shape-attributes","allowed-shape-attributes",-11621484));
var is_selected_inside_layout = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56216__$1,new cljs.core.Keyword(null,"is-selected-inside-layout","is-selected-inside-layout",-932422043));
var padding_attr_labels = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p1","p1",-936759954),"Padding top",new cljs.core.Keyword(null,"p2","p2",905500641),"Padding right",new cljs.core.Keyword(null,"p3","p3",1731040739),"Padding bottom",new cljs.core.Keyword(null,"p4","p4",-1090126814),"Padding left"], null);
var padding_items = (cljs.core.truth_(app.main.ui.workspace.tokens.management.context_menu.key_in_map_QMARK_(allowed_shape_attributes,padding_attr_labels))?app.main.ui.workspace.tokens.management.context_menu.layout_spacing_items(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"selected-shapes","selected-shapes",-40235010),selected_shapes,new cljs.core.Keyword(null,"all-attr-labels","all-attr-labels",-1560265704),padding_attr_labels,new cljs.core.Keyword(null,"hint","hint",439639918),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.paddings"),new cljs.core.Keyword(null,"horizontal-attr-labels","horizontal-attr-labels",641068751),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p2","p2",905500641),"Padding right",new cljs.core.Keyword(null,"p4","p4",-1090126814),"Padding left"], null),new cljs.core.Keyword(null,"vertical-attr-labels","vertical-attr-labels",1255704246),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p1","p1",-936759954),"Padding top",new cljs.core.Keyword(null,"p3","p3",1731040739),"Padding bottom"], null),new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.ui.workspace.tokens.management.context_menu.update_shape_layout_padding], null)):null);
var margin_attr_labels = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"m1","m1",-108094626),"Margin top",new cljs.core.Keyword(null,"m2","m2",-587003306),"Margin right",new cljs.core.Keyword(null,"m3","m3",-703635357),"Margin bottom",new cljs.core.Keyword(null,"m4","m4",-1624571215),"Margin left"], null);
var margin_items = (cljs.core.truth_((function (){var or__5025__auto__ = is_selected_inside_layout;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.ui.workspace.tokens.management.context_menu.key_in_map_QMARK_(allowed_shape_attributes,margin_attr_labels);
}
})())?app.main.ui.workspace.tokens.management.context_menu.layout_spacing_items(new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"selected-shapes","selected-shapes",-40235010),selected_shapes,new cljs.core.Keyword(null,"all-attr-labels","all-attr-labels",-1560265704),margin_attr_labels,new cljs.core.Keyword(null,"hint","hint",439639918),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.margins"),new cljs.core.Keyword(null,"horizontal-attr-labels","horizontal-attr-labels",641068751),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"m2","m2",-587003306),"Margin right",new cljs.core.Keyword(null,"m4","m4",-1624571215),"Margin left"], null),new cljs.core.Keyword(null,"vertical-attr-labels","vertical-attr-labels",1255704246),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"m1","m1",-108094626),"Margin top",new cljs.core.Keyword(null,"m3","m3",-703635357),"Margin bottom"], null),new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.ui.workspace.tokens.management.context_menu.update_shape_layout_margin], null)):null);
var gap_items = app.main.ui.workspace.tokens.management.context_menu.all_or_separate_actions(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribute-labels","attribute-labels",-1728954592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"column-gap","column-gap",384822863),"Column Gap",new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537),"Row Gap"], null),new cljs.core.Keyword(null,"hint","hint",439639918),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.gaps"),new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_layout_gap], null),context_data);
return app.main.ui.workspace.tokens.management.context_menu.clean_separators(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(gap_items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([padding_items,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125)], null),margin_items], 0)));
});
app.main.ui.workspace.tokens.management.context_menu.sizing_attribute_actions = (function app$main$ui$workspace$tokens$management$context_menu$sizing_attribute_actions(context_data){
return app.main.ui.workspace.tokens.management.context_menu.clean_separators(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(app.main.ui.workspace.tokens.management.context_menu.all_or_separate_actions(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribute-labels","attribute-labels",-1728954592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),"Width",new cljs.core.Keyword(null,"height","height",1025178622),"Height"], null),new cljs.core.Keyword(null,"hint","hint",439639918),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.size"),new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.apply_dimensions_token], null),context_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.ui.workspace.tokens.management.context_menu.all_or_separate_actions(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribute-labels","attribute-labels",-1728954592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),"Min Width",new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),"Min Height"], null),new cljs.core.Keyword(null,"hint","hint",439639918),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.min-size"),new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_layout_sizing_limits], null),context_data),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125)], null),app.main.ui.workspace.tokens.management.context_menu.all_or_separate_actions(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"attribute-labels","attribute-labels",-1728954592),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),"Max Width",new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),"Max Height"], null),new cljs.core.Keyword(null,"hint","hint",439639918),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.max-size"),new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_layout_sizing_limits], null),context_data)], 0)));
});
app.main.ui.workspace.tokens.management.context_menu.update_shape_radius_for_corners = (function app$main$ui$workspace$tokens$management$context_menu$update_shape_radius_for_corners(value,shape_ids,attributes){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"expand-border-radius","expand-border-radius",-352780098)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.tokens.application.update_shape_radius_for_corners.cljs$core$IFn$_invoke$arity$3(value,shape_ids,attributes)], 0));
});
app.main.ui.workspace.tokens.management.context_menu.shape_attribute_actions_map = (function (){var stroke_width = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.workspace.tokens.management.context_menu.generic_attribute_actions,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null], null), null),"Stroke Width");
var font_size = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.workspace.tokens.management.context_menu.generic_attribute_actions,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),null], null), null),"Font Size");
var letter_spacing = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.workspace.tokens.management.context_menu.generic_attribute_actions,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),null], null), null),"Letter Spacing");
var font_family = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.workspace.tokens.management.context_menu.generic_attribute_actions,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-family","font-family",-667419874),null], null), null),"Font Family");
var line_height = (function (p1__56217_SHARP_){
return app.main.ui.workspace.tokens.management.context_menu.generic_attribute_actions(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"line-height","line-height",1870784992),null], null), null),"Line Height",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56217_SHARP_,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_line_height));
});
var text_case = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.workspace.tokens.management.context_menu.generic_attribute_actions,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-case","text-case",1049419399),null], null), null),"Text Case");
var text_decoration = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.workspace.tokens.management.context_menu.generic_attribute_actions,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),null], null), null),"Text Decoration");
var font_weight = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.workspace.tokens.management.context_menu.generic_attribute_actions,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),null], null), null),"Font Weight");
var typography = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.workspace.tokens.management.context_menu.generic_attribute_actions,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"typography","typography",-399568138),null], null), null),"Typography");
var border_radius = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.tokens.management.context_menu.all_or_separate_actions,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"attribute-labels","attribute-labels",-1728954592),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r1","r1",690974900),"Top Left",new cljs.core.Keyword(null,"r2","r2",252844174),"Top Right",new cljs.core.Keyword(null,"r4","r4",1134323163),"Bottom Left",new cljs.core.Keyword(null,"r3","r3",-2027148174),"Bottom Right"], null),new cljs.core.Keyword(null,"hint","hint",439639918),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.radius"),new cljs.core.Keyword(null,"on-update-shape-all","on-update-shape-all",421199428),app.main.data.workspace.tokens.application.update_shape_radius_all,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.ui.workspace.tokens.management.context_menu.update_shape_radius_for_corners], null));
var shadow__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.workspace.tokens.management.context_menu.generic_attribute_actions,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"shadow","shadow",873231803),null], null), null),"Shadow");
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"line-height","line-height",1870784992),new cljs.core.Keyword(null,"sizing","sizing",-1868029885),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"number","number",1570378438),new cljs.core.Keyword(null,"font-size","font-size",-1847940346),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"text-case","text-case",1049419399),new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"typography","typography",-399568138),new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767),new cljs.core.Keyword(null,"shadow","shadow",873231803),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"spacing","spacing",204422175)],[line_height,app.main.ui.workspace.tokens.management.context_menu.sizing_attribute_actions,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.workspace.tokens.management.context_menu.generic_attribute_actions,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null], null), null),"Rotation"),(function (context_data){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.tokens.management.context_menu.generic_attribute_actions(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),null], null), null),"Fill",cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(context_data,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_fill,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hint","hint",439639918),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.color")], 0))),app.main.ui.workspace.tokens.management.context_menu.generic_attribute_actions(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),null], null), null),"Stroke",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_data,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_stroke_color)));
}),(function (context_data){
return cljs.core.concat.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.tokens.management.context_menu.generic_attribute_actions(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null], null), null),"Rotation",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_data,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_rotation)),(function (){var line_height__$1 = line_height(context_data);
if(cljs.core.seq(line_height__$1)){
return line_height__$1;
} else {
return null;
}
})());
}),font_size,font_weight,text_case,(function (context_data){
return app.main.ui.workspace.tokens.management.context_menu.clean_separators(cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(((cljs.core.seq(app.main.ui.workspace.tokens.management.context_menu.sizing_attribute_actions(context_data)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Sizing",new cljs.core.Keyword(null,"submenu","submenu",2142563344),new cljs.core.Keyword(null,"sizing","sizing",-1868029885)], null)], null):null),((cljs.core.seq(app.main.ui.workspace.tokens.management.context_menu.spacing_attribute_actions(context_data)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Spacing",new cljs.core.Keyword(null,"submenu","submenu",2142563344),new cljs.core.Keyword(null,"spacing","spacing",204422175)], null)], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125)], null),((cljs.core.seq(border_radius(context_data)))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),"Border Radius",new cljs.core.Keyword(null,"submenu","submenu",2142563344),new cljs.core.Keyword(null,"border-radius","border-radius",419594011)], null)], null):null),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125)], null),stroke_width(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_data,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_stroke_width)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125)], null),app.main.ui.workspace.tokens.management.context_menu.generic_attribute_actions(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"x","x",2099068185),null], null), null),"X",cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(context_data,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_shape_position,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"hint","hint",439639918),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.axis")], 0))),app.main.ui.workspace.tokens.management.context_menu.generic_attribute_actions(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"y","y",-1757859776),null], null), null),"Y",cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_data,new cljs.core.Keyword(null,"on-update-shape","on-update-shape",-489369523),app.main.data.workspace.tokens.application.update_shape_position))], 0)));
}),stroke_width,cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.workspace.tokens.management.context_menu.generic_attribute_actions,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"opacity","opacity",397153780),null], null), null),"Opacity"),typography,text_decoration,letter_spacing,shadow__$1,border_radius,font_family,app.main.ui.workspace.tokens.management.context_menu.spacing_attribute_actions]);
})();
app.main.ui.workspace.tokens.management.context_menu.default_actions = (function app$main$ui$workspace$tokens$management$context_menu$default_actions(p__56218){
var map__56219 = p__56218;
var map__56219__$1 = cljs.core.__destructure_map(map__56219);
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56219__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var selected_token_set_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56219__$1,new cljs.core.Keyword(null,"selected-token-set-id","selected-token-set-id",-1828640116));
var on_delete_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56219__$1,new cljs.core.Keyword(null,"on-delete-token","on-delete-token",-1548486919));
var map__56220 = app.main.data.workspace.tokens.application.get_token_properties(token);
var map__56220__$1 = cljs.core.__destructure_map(map__56220);
var modal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56220__$1,new cljs.core.Keyword(null,"modal","modal",-1031880850));
var on_duplicate_token = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.duplicate_token(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token)));
});
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.edit"),new cljs.core.Keyword(null,"no-selectable","no-selectable",-504485148),true,new cljs.core.Keyword(null,"action","action",-811238024),(function (event){
var map__56221 = modal;
var map__56221__$1 = cljs.core.__destructure_map(map__56221);
var key = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56221__$1,new cljs.core.Keyword(null,"key","key",-1516042587));
var fields = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56221__$1,new cljs.core.Keyword(null,"fields","fields",-1932066230));
app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.tokens.library_edit.assign_token_context_menu(null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(key,new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),event.clientX,new cljs.core.Keyword(null,"y","y",-1757859776),event.clientY,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"fields","fields",-1932066230),fields,new cljs.core.Keyword(null,"action","action",-811238024),"edit",new cljs.core.Keyword(null,"selected-token-set-id","selected-token-set-id",-1828640116),selected_token_set_id,new cljs.core.Keyword(null,"token","token",-1211463215),token], null))], 0));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.duplicate"),new cljs.core.Keyword(null,"no-selectable","no-selectable",-504485148),true,new cljs.core.Keyword(null,"action","action",-811238024),on_duplicate_token], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.delete"),new cljs.core.Keyword(null,"no-selectable","no-selectable",-504485148),true,new cljs.core.Keyword(null,"action","action",-811238024),(function (){
return (on_delete_token.cljs$core$IFn$_invoke$arity$1 ? on_delete_token.cljs$core$IFn$_invoke$arity$1(token) : on_delete_token.call(null,token));
})], null)], null);
});
app.main.ui.workspace.tokens.management.context_menu.allowed_shape_attributes = (function app$main$ui$workspace$tokens$management$context_menu$allowed_shape_attributes(shapes){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.into,cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56222_SHARP_){
return app.common.types.token.shape_type__GT_attributes(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__56222_SHARP_),new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(p1__56222_SHARP_));
}),shapes));
});
app.main.ui.workspace.tokens.management.context_menu.menu_actions = (function app$main$ui$workspace$tokens$management$context_menu$menu_actions(p__56223){
var map__56224 = p__56223;
var map__56224__$1 = cljs.core.__destructure_map(map__56224);
var context_data = map__56224__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56224__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56224__$1,new cljs.core.Keyword(null,"token","token",-1211463215));
var selected_shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56224__$1,new cljs.core.Keyword(null,"selected-shapes","selected-shapes",-40235010));
var context_data__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_data,new cljs.core.Keyword(null,"allowed-shape-attributes","allowed-shape-attributes",-11621484),app.main.ui.workspace.tokens.management.context_menu.allowed_shape_attributes(selected_shapes));
var with_actions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.tokens.management.context_menu.shape_attribute_actions_map,(function (){var or__5025__auto__ = type;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token);
}
})());
var attribute_actions = (cljs.core.truth_(with_actions)?(with_actions.cljs$core$IFn$_invoke$arity$1 ? with_actions.cljs$core$IFn$_invoke$arity$1(context_data__$1) : with_actions.call(null,context_data__$1)):cljs.core.PersistentVector.EMPTY);
return attribute_actions;
});
app.main.ui.workspace.tokens.management.context_menu.selection_actions = (function app$main$ui$workspace$tokens$management$context_menu$selection_actions(context_data){
var attribute_actions = app.main.ui.workspace.tokens.management.context_menu.menu_actions(context_data);
return cljs.core.concat.cljs$core$IFn$_invoke$arity$variadic(attribute_actions,((cljs.core.seq(attribute_actions))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"separator","separator",-1628749125)], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.ui.workspace.tokens.management.context_menu.default_actions(context_data)], 0));
});
app.main.ui.workspace.tokens.management.context_menu.submenu_actions_selection_actions = (function app$main$ui$workspace$tokens$management$context_menu$submenu_actions_selection_actions(context_data){
return app.main.ui.workspace.tokens.management.context_menu.menu_actions(context_data);
});
app.main.ui.workspace.tokens.management.context_menu.tokens_menu_ref = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token-context-menu","token-context-menu",1588110807),app.main.refs.workspace_tokens);
app.main.ui.workspace.tokens.management.context_menu.prevent_default = (function app$main$ui$workspace$tokens$management$context_menu$prevent_default(event){
app.util.dom.prevent_default(event);

return app.util.dom.stop_propagation(event);
});
app.main.ui.workspace.tokens.management.context_menu.menu_entry = (function app$main$ui$workspace$tokens$management$context_menu$menu_entry(props_56225){
var selected_QMARK_ = (props_56225["selected?"]);
var children = props_56225.children;
var no_selectable = (props_56225["no-selectable"]);
var value = props_56225.value;
var hint = props_56225.hint;
var submenu_offset = (props_56225["submenu-offset"]);
var title = props_56225.title;
var on_click = (props_56225["on-click"]);
var submenu_ref = rumext.v2.use_ref(null);
var hovering_QMARK_ = rumext.v2.use_ref(false);
var parent_menu_dom_element_pos_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var parent_menu_dom_element_pos = cljs.core.deref(parent_menu_dom_element_pos_STAR_);
var is_submenu_outside_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var is_submenu_outside_QMARK_ = cljs.core.deref(is_submenu_outside_STAR_);
var hint_QMARK_ = (function (){var and__5023__auto__ = hint;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.seq(hint);
} else {
return and__5023__auto__;
}
})();
var on_pointer_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_submenu_outside_QMARK_)],(function (){
rumext.v2.set_ref_val_BANG_(hovering_QMARK_,true);

var temp__5825__auto__ = rumext.v2.ref_val(submenu_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var submenu_node = temp__5825__auto__;
app.util.dom.set_css_property_BANG_(submenu_node,"display","block");

return cljs.core.reset_BANG_(is_submenu_outside_STAR_,app.util.dom.is_element_outside_QMARK_(submenu_node));
} else {
return null;
}
}));
var on_pointer_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_submenu_outside_QMARK_)],(function (){
rumext.v2.set_ref_val_BANG_(hovering_QMARK_,false);

var temp__5825__auto__ = rumext.v2.ref_val(submenu_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var submenu_node = temp__5825__auto__;
return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((50),(function (){
if(cljs.core.truth_(rumext.v2.ref_val(hovering_QMARK_))){
return null;
} else {
app.util.dom.set_css_property_BANG_(submenu_node,"display","none");

return cljs.core.reset_BANG_(is_submenu_outside_STAR_,false);
}
}));
} else {
return null;
}
}));
var get_parent_menu_entry_position = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (parent_menu_dom_element){
if((!((parent_menu_dom_element == null)))){
return cljs.core.reset_BANG_(parent_menu_dom_element_pos_STAR_,""+(parent_menu_dom_element.offsetTop ?? "")+"px");
} else {
return null;
}
}));
return rumext.v2.jsxs("li",{'ref':get_parent_menu_entry_position,'data-value':value,'onClick':on_click,'onPointerEnter':on_pointer_enter,'onPointerLeave':on_pointer_leave,'className':"main_ui_workspace_tokens_management_context_menu__context-menu-item"+" "+(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(no_selectable);
if(and__5023__auto__){
return selected_QMARK_;
} else {
return and__5023__auto__;
}
})())?"main_ui_workspace_tokens_management_context_menu__context-menu-item-selected":"")+" "+((((cljs.core.not(no_selectable)) && (cljs.core.not(selected_QMARK_))))?"main_ui_workspace_tokens_management_context_menu__context-menu-item-unselected":"")+" "+(cljs.core.truth_(hint_QMARK_)?"main_ui_workspace_tokens_management_context_menu__context-menu-item-hint-wrapper":""),'children':[(cljs.core.truth_(hint)?rumext.v2.jsx("span",{'className':"main_ui_workspace_tokens_management_context_menu__context-menu-item-hint",'children':hint}):null),((cljs.core.not(no_selectable))?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.tick,'size':"s",'className':"main_ui_workspace_tokens_management_context_menu__icon-wrapper"}):null),rumext.v2.jsx("span",{'className':"main_ui_workspace_tokens_management_context_menu__item-text",'children':title}),(cljs.core.truth_(children)?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow,'size':"s"}),rumext.v2.jsx("ul",{'ref':submenu_ref,'style':{'left':""+(submenu_offset ?? "")+"px",'top':(cljs.core.truth_(is_submenu_outside_QMARK_)?"unset":parent_menu_dom_element_pos)},'onContextMenu':app.main.ui.workspace.tokens.management.context_menu.prevent_default,'className':"main_ui_workspace_tokens_management_context_menu__token-context-submenu"+" "+(cljs.core.truth_(is_submenu_outside_QMARK_)?"main_ui_workspace_tokens_management_context_menu__token-context-submenu-top":""),'children':children})]}):null)]});
});

(app.main.ui.workspace.tokens.management.context_menu.menu_entry.displayName = "menu-entry");

app.main.ui.workspace.tokens.management.context_menu.menu_tree = (function app$main$ui$workspace$tokens$management$context_menu$menu_tree(props_56242){
var map__56243 = rumext.v2.util.wrap_props(props_56242);
var map__56243__$1 = cljs.core.__destructure_map(map__56243);
var context_data = map__56243__$1;
var selected_shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56243__$1,new cljs.core.Keyword(null,"selected-shapes","selected-shapes",-40235010));
var submenu_offset = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56243__$1,new cljs.core.Keyword(null,"submenu-offset","submenu-offset",1888650638));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56243__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56243__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var shape_types = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348),selected_shapes));
var editing_ref = rumext.v2.deref(app.main.refs.workspace_editor_state);
var not_editing_QMARK_ = cljs.core.empty_QMARK_(editing_ref);
var entries = (((((!((!((errors == null)))))) && (((cljs.core.seq(selected_shapes)) && (((not_editing_QMARK_) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(shape_types,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"group","group",582596132),null], null), null)))))))))?(((!((type == null))))?app.main.ui.workspace.tokens.management.context_menu.submenu_actions_selection_actions(context_data):app.main.ui.workspace.tokens.management.context_menu.selection_actions(context_data)):app.main.ui.workspace.tokens.management.context_menu.default_actions(context_data));
var entries__$1 = app.main.ui.workspace.tokens.management.context_menu.clean_separators(entries);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__56244){
var vec__56245 = p__56244;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56245,(0),null);
var map__56249 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56245,(1),null);
var map__56249__$1 = cljs.core.__destructure_map(map__56249);
var entry = map__56249__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56249__$1,new cljs.core.Keyword(null,"title","title",636505583));
var action = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56249__$1,new cljs.core.Keyword(null,"action","action",-811238024));
var selected_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56249__$1,new cljs.core.Keyword(null,"selected?","selected?",-742502788));
var hint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56249__$1,new cljs.core.Keyword(null,"hint","hint",439639918));
var submenu = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56249__$1,new cljs.core.Keyword(null,"submenu","submenu",2142563344));
var no_selectable = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56249__$1,new cljs.core.Keyword(null,"no-selectable","no-selectable",-504485148));
out_arr__35152__auto__.push(rumext.v2.jsx(rumext.v2.Fragment,{'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"separator","separator",-1628749125),entry))?rumext.v2.jsx("li",{'className':"main_ui_workspace_tokens_management_context_menu__separator"}):(cljs.core.truth_(submenu)?rumext.v2.jsx(app.main.ui.workspace.tokens.management.context_menu.menu_entry,{'title':title,'hint':hint,'no-selectable':true,'submenu-offset':submenu_offset,'children':rumext.v2.create_element(app$main$ui$workspace$tokens$management$context_menu$menu_tree,rumext.v2.util.map__GT_obj(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(context_data,new cljs.core.Keyword(null,"type","type",1174270348),submenu)))}):rumext.v2.jsx(app.main.ui.workspace.tokens.management.context_menu.menu_entry,{'title':title,'on-click':action,'hint':hint,'no-selectable':no_selectable,'selected?':selected_QMARK_})
))},""+(title ?? "")+" "+(index ?? "")));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(entries__$1));
});

(app.main.ui.workspace.tokens.management.context_menu.menu_tree.displayName = "menu-tree");

app.main.ui.workspace.tokens.management.context_menu.token_context_menu_tree = (function app$main$ui$workspace$tokens$management$context_menu$token_context_menu_tree(props_56252){
var map__56253 = rumext.v2.util.wrap_props(props_56252);
var map__56253__$1 = cljs.core.__destructure_map(map__56253);
var mdata = map__56253__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56253__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56253__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var on_delete_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56253__$1,new cljs.core.Keyword(null,"on-delete-token","on-delete-token",-1548486919));
var objects = rumext.v2.deref(app.main.refs.workspace_page_objects);
var selected = rumext.v2.deref(app.main.refs.selected_shapes);
var token_id = new cljs.core.Keyword(null,"token-id","token-id",-764089526).cljs$core$IFn$_invoke$arity$1(mdata);
var token = rumext.v2.deref(app.main.refs.workspace_token_in_selected_set(token_id));
var token_type = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token);
var selected_token_set_id = rumext.v2.deref(app.main.refs.selected_token_set_id);
var selected_shapes = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected),rumext.v2.adapt(objects)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),selected);
}));
var is_selected_inside_layout = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token_type),rumext.v2.adapt(selected_shapes),rumext.v2.adapt(objects)],(function (){
if(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null,new cljs.core.Keyword(null,"spacing","spacing",204422175),null], null), null),token_type)){
return cljs.core.some((function (p1__56251_SHARP_){
return app.common.types.shape.layout.any_layout_immediate_child_QMARK_(objects,p1__56251_SHARP_);
}),selected_shapes);
} else {
return null;
}
}));
return rumext.v2.jsx("ul",{'className':"main_ui_workspace_tokens_management_context_menu__context-list",'children':rumext.v2.jsx(app.main.ui.workspace.tokens.management.context_menu.menu_tree,{'submenu-offset':width,'token':token,'errors':errors,'selected-token-set-id':selected_token_set_id,'selected-shapes':selected_shapes,'is-selected-inside-layout':is_selected_inside_layout,'on-delete-token':on_delete_token})});
});

(app.main.ui.workspace.tokens.management.context_menu.token_context_menu_tree.displayName = "token-context-menu-tree");

app.main.ui.workspace.tokens.management.context_menu.token_context_menu = (function app$main$ui$workspace$tokens$management$context_menu$token_context_menu(props_56254){
var map__56255 = rumext.v2.util.wrap_props(props_56254);
var map__56255__$1 = cljs.core.__destructure_map(map__56255);
var on_delete_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56255__$1,new cljs.core.Keyword(null,"on-delete-token","on-delete-token",-1548486919));
var mdata = rumext.v2.deref(app.main.ui.workspace.tokens.management.context_menu.tokens_menu_ref);
var is_open_QMARK_ = cljs.core.boolean$(mdata);
var width = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((0));
var dropdown_ref = rumext.v2.use_ref();
var dropdown_direction_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("down");
var dropdown_direction = cljs.core.deref(dropdown_direction_STAR_);
var dropdown_direction_change_STAR_ = rumext.v2.use_ref((0));
var top = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"y","y",-1757859776)], null)) + (5));
var left = (cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(mdata,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"x","x",2099068185)], null)) + (5));
var container = app.main.ui.hooks.use_portal_container.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"popup","popup",635890211));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_open_QMARK_)],(function (){
var temp__5825__auto__ = rumext.v2.ref_val(dropdown_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
return cljs.core.reset_BANG_(width,node.offsetWidth);
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_open_QMARK_)],(function (){
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),rumext.v2.ref_val(dropdown_direction_change_STAR_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(false,is_open_QMARK_)))){
cljs.core.reset_BANG_(dropdown_direction_STAR_,"down");

return rumext.v2.set_ref_val_BANG_(dropdown_direction_change_STAR_,(0));
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_open_QMARK_),rumext.v2.adapt(dropdown_ref)],(function (){
var dropdown_element = rumext.v2.ref_val(dropdown_ref);
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),rumext.v2.ref_val(dropdown_direction_change_STAR_));
if(and__5023__auto__){
return dropdown_element;
} else {
return and__5023__auto__;
}
})())){
var is_outside_QMARK_ = app.util.dom.is_element_outside_QMARK_(dropdown_element);
cljs.core.reset_BANG_(dropdown_direction_STAR_,((is_outside_QMARK_)?"up":"down"));

return rumext.v2.set_ref_val_BANG_(dropdown_direction_change_STAR_,(rumext.v2.ref_val(dropdown_direction_change_STAR_) + (1)));
} else {
return null;
}
}));

if(is_open_QMARK_){
return rumext.v2.portal(rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':is_open_QMARK_,'on-close':(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.assign_token_context_menu(null));
}),'children':rumext.v2.jsx("div",{'data-testid':"tokens-context-menu-for-token",'ref':dropdown_ref,'data-direction':dropdown_direction,'style':{'--bottom':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(dropdown_direction,"up"))?"40px":"unset"),'--top':""+(top ?? "")+"px",'left':""+(left ?? "")+"px"},'onContextMenu':app.main.ui.workspace.tokens.management.context_menu.prevent_default,'className':"main_ui_workspace_tokens_management_context_menu__token-context-menu",'children':(cljs.core.truth_(mdata)?rumext.v2.create_element(app.main.ui.workspace.tokens.management.context_menu.token_context_menu_tree,rumext.v2.util.map__GT_obj(cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(mdata,new cljs.core.Keyword(null,"width","width",-384071477),cljs.core.deref(width),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"on-delete-token","on-delete-token",-1548486919),on_delete_token], 0)))):null)})}),container);
} else {
return null;
}
});

(app.main.ui.workspace.tokens.management.context_menu.token_context_menu.displayName = "token-context-menu");


//# sourceMappingURL=app.main.ui.workspace.tokens.management.context_menu.js.map
