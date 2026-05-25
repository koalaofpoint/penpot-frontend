import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.tokens.js";
import "./app.common.path_names.js";
import "./app.common.types.token.js";
import "./app.config.js";
import "./app.main.data.workspace.tokens.application.js";
import "./app.main.data.workspace.tokens.color.js";
import "./app.main.data.workspace.tokens.format.js";
import "./app.main.refs.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.foundations.utilities.token.token_status.js";
import "./app.main.ui.ds.utilities.swatch.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./clojure.set.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.management.token_pill');
app.main.ui.workspace.tokens.management.token_pill.attribute_dictionary = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"p2","p2",905500641),new cljs.core.Keyword(null,"p4","p4",-1090126814),new cljs.core.Keyword(null,"p3","p3",1731040739),new cljs.core.Keyword(null,"rotation","rotation",-1728051644),new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),new cljs.core.Keyword(null,"fill","fill",883462889),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),new cljs.core.Keyword(null,"column-gap","column-gap",384822863),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"r4","r4",1134323163),new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537)],["Y","Right","Left","Bottom","Rotation","Stroke Color","Fill","Width","Top Right","Top","Max Width","Column Gap","Bottom Right","Stroke Width","Top Left","Opacity","Min Width","X","Bottom Left","Min Height","Max Height","Height","Row Gap"]);
app.main.ui.workspace.tokens.management.token_pill.dimensions_dictionary = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"p2","p2",905500641),new cljs.core.Keyword(null,"p4","p4",-1090126814),new cljs.core.Keyword(null,"p3","p3",1731040739),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"p1","p1",-936759954),new cljs.core.Keyword(null,"layout-item-max-w","layout-item-max-w",1954460366),new cljs.core.Keyword(null,"column-gap","column-gap",384822863),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"layout-item-min-w","layout-item-min-w",-504161548),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"r4","r4",1134323163),new cljs.core.Keyword(null,"layout-item-min-h","layout-item-min-h",200739548),new cljs.core.Keyword(null,"layout-item-max-h","layout-item-max-h",-1762118307),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537)],[new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"spacing","spacing",204422175),new cljs.core.Keyword(null,"spacing","spacing",204422175),new cljs.core.Keyword(null,"spacing","spacing",204422175),new cljs.core.Keyword(null,"sizing","sizing",-1868029885),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"spacing","spacing",204422175),new cljs.core.Keyword(null,"sizing","sizing",-1868029885),new cljs.core.Keyword(null,"spacing","spacing",204422175),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"sizing","sizing",-1868029885),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"border-radius","border-radius",419594011),new cljs.core.Keyword(null,"sizing","sizing",-1868029885),new cljs.core.Keyword(null,"sizing","sizing",-1868029885),new cljs.core.Keyword(null,"sizing","sizing",-1868029885),new cljs.core.Keyword(null,"spacing","spacing",204422175)]);
/**
 * Translates partially applied attributes based on the dictionary.
 */
app.main.ui.workspace.tokens.management.token_pill.partially_applied_attr = (function app$main$ui$workspace$tokens$management$token_pill$partially_applied_attr(app_token_keys,is_applied,p__56228){
var map__56229 = p__56228;
var map__56229__$1 = cljs.core.__destructure_map(map__56229);
var attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56229__$1,new cljs.core.Keyword(null,"attributes","attributes",-74013604));
var all_attributes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56229__$1,new cljs.core.Keyword(null,"all-attributes","all-attributes",-1495901763));
var filtered_keys = (cljs.core.truth_(all_attributes)?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56226_SHARP_){
return cljs.core.contains_QMARK_(all_attributes,p1__56226_SHARP_);
}),app_token_keys):cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56227_SHARP_){
return cljs.core.contains_QMARK_(attributes,p1__56227_SHARP_);
}),app_token_keys));
if(cljs.core.truth_(is_applied)){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.tokens.management.token_pill.attribute_dictionary,filtered_keys));
} else {
return null;
}
});
/**
 * Translates and formats grouped values by category.
 */
app.main.ui.workspace.tokens.management.token_pill.translate_and_format = (function app$main$ui$workspace$tokens$management$token_pill$translate_and_format(grouped_values){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56230){
var vec__56231 = p__56230;
var category = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56231,(0),null);
var values = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56231,(1),null);
if(cljs.core.truth_((function (){var fexpr__56234 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"y","y",-1757859776),null,new cljs.core.Keyword(null,"x","x",2099068185),null], null), null);
return (fexpr__56234.cljs$core$IFn$_invoke$arity$1 ? fexpr__56234.cljs$core$IFn$_invoke$arity$1(category) : fexpr__56234.call(null,category));
})())){
return ""+"- "+((app.main.data.workspace.tokens.format.category_dictionary.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.tokens.format.category_dictionary.cljs$core$IFn$_invoke$arity$1(category) : app.main.data.workspace.tokens.format.category_dictionary.call(null,category)) ?? "");
} else {
return ""+"- "+((app.main.data.workspace.tokens.format.category_dictionary.cljs$core$IFn$_invoke$arity$1 ? app.main.data.workspace.tokens.format.category_dictionary.cljs$core$IFn$_invoke$arity$1(category) : app.main.data.workspace.tokens.format.category_dictionary.call(null,category)) ?? "")+": "+(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.tokens.management.token_pill.attribute_dictionary,values)) ?? "")+".";
}
}),grouped_values));
});
/**
 * Generates a tooltip for a given token
 */
app.main.ui.workspace.tokens.management.token_pill.generate_tooltip = (function app$main$ui$workspace$tokens$management$token_pill$generate_tooltip(is_viewer,shape,theme_token,token,half_applied,no_valid_value,ref_not_in_active_set){
var map__56235 = token;
var map__56235__$1 = cljs.core.__destructure_map(map__56235);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56235__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56235__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var resolved_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56235__$1,new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56235__$1,new cljs.core.Keyword(null,"value","value",305978217));
var resolved_value_theme = new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626).cljs$core$IFn$_invoke$arity$1(theme_token);
var resolved_value__$1 = (function (){var or__5025__auto__ = resolved_value_theme;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return resolved_value;
}
})();
var map__56236 = app.main.data.workspace.tokens.application.get_token_properties(theme_token);
var map__56236__$1 = cljs.core.__destructure_map(map__56236);
var token_props = map__56236__$1;
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56236__$1,new cljs.core.Keyword(null,"title","title",636505583));
var applied_tokens = new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871).cljs$core$IFn$_invoke$arity$1(shape);
var app_token_vals = cljs.core.set(cljs.core.vals(applied_tokens));
var app_token_keys = cljs.core.keys(applied_tokens);
var is_applied_QMARK_ = cljs.core.contains_QMARK_(app_token_vals,name);
var applied_to = (cljs.core.truth_(half_applied)?app.main.ui.workspace.tokens.management.token_pill.partially_applied_attr(app_token_keys,is_applied_QMARK_,token_props):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.all"));
var grouped_values = cljs.core.group_by(app.main.ui.workspace.tokens.management.token_pill.dimensions_dictionary,app_token_keys);
var base_title = ""+"Token: "+(name ?? "")+"\n"+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.original-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.tokens.format.format_token_value(value)], 0)) ?? "")+"\n"+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.resolved-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.tokens.format.format_token_value(resolved_value__$1)], 0)) ?? "")+(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token),new cljs.core.Keyword(null,"number","number",1570378438)))?""+"\n"+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.more-options") ?? ""):null) ?? "");
if(cljs.core.truth_(ref_not_in_active_set)){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.ref-not-valid");
} else {
if(cljs.core.truth_(no_valid_value)){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.value-not-valid");
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = is_applied_QMARK_;
if(and__5023__auto__){
return is_viewer;
} else {
return and__5023__auto__;
}
})())){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("\n",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_title,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.applied-to"),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),type))?app.main.ui.workspace.tokens.management.token_pill.translate_and_format(grouped_values):["- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(title),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(applied_to)].join(''))], null));
} else {
return base_title;

}
}
}
});
/**
 * Extracts the value between `{}` in a string and checks if it's in the provided vector.
 */
app.main.ui.workspace.tokens.management.token_pill.contains_reference_value_QMARK_ = (function app$main$ui$workspace$tokens$management$token_pill$contains_reference_value_QMARK_(text,active_tokens){
var match = cljs.core.second(cljs.core.re_find(/\{([^}]+)\}/,text));
return cljs.core.contains_QMARK_(active_tokens,match);
});
app.main.ui.workspace.tokens.management.token_pill.xf_COLON_map_id = cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092));
app.main.ui.workspace.tokens.management.token_pill.applied_all_attributes_QMARK_ = (function app$main$ui$workspace$tokens$management$token_pill$applied_all_attributes_QMARK_(token,selected_shapes,attributes){
var ids_by_attributes = app.common.files.tokens.shapes_ids_by_applied_attributes(token,selected_shapes,attributes);
var shape_ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,app.main.ui.workspace.tokens.management.token_pill.xf_COLON_map_id,selected_shapes);
return app.common.files.tokens.shapes_applied_all_QMARK_(ids_by_attributes,shape_ids,attributes);
});
app.main.ui.workspace.tokens.management.token_pill.attributes_match_selection_QMARK_ = (function app$main$ui$workspace$tokens$management$token_pill$attributes_match_selection_QMARK_(var_args){
var args__5755__auto__ = [];
var len__5749__auto___56259 = arguments.length;
var i__5750__auto___56260 = (0);
while(true){
if((i__5750__auto___56260 < len__5749__auto___56259)){
args__5755__auto__.push((arguments[i__5750__auto___56260]));

var G__56261 = (i__5750__auto___56260 + (1));
i__5750__auto___56260 = G__56261;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return app.main.ui.workspace.tokens.management.token_pill.attributes_match_selection_QMARK_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(app.main.ui.workspace.tokens.management.token_pill.attributes_match_selection_QMARK_.cljs$core$IFn$_invoke$arity$variadic = (function (selected_shapes,attrs,p__56240){
var map__56241 = p__56240;
var map__56241__$1 = cljs.core.__destructure_map(map__56241);
var selected_inside_layout_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56241__$1,new cljs.core.Keyword(null,"selected-inside-layout?","selected-inside-layout?",-1748414769));
var or__5025__auto__ = (function (){var and__5023__auto__ = selected_inside_layout_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return clojure.set.subset_QMARK_(app.common.types.token.spacing_margin_keys,attrs);
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.some((function (shape){
return app.common.types.token.any_appliable_attr_for_shape_QMARK_(attrs,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(shape));
}),selected_shapes);
}
}));

(app.main.ui.workspace.tokens.management.token_pill.attributes_match_selection_QMARK_.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(app.main.ui.workspace.tokens.management.token_pill.attributes_match_selection_QMARK_.cljs$lang$applyTo = (function (seq56237){
var G__56238 = cljs.core.first(seq56237);
var seq56237__$1 = cljs.core.next(seq56237);
var G__56239 = cljs.core.first(seq56237__$1);
var seq56237__$2 = cljs.core.next(seq56237__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__56238,G__56239,seq56237__$2);
}));

app.main.ui.workspace.tokens.management.token_pill.token_types_with_status_icon = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"sizing","sizing",-1868029885),null,new cljs.core.Keyword(null,"rotation","rotation",-1728051644),null,new cljs.core.Keyword(null,"color","color",1011675173),null,new cljs.core.Keyword(null,"dimensions","dimensions",-254818097),null,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null,new cljs.core.Keyword(null,"opacity","opacity",397153780),null,new cljs.core.Keyword(null,"border-radius","border-radius",419594011),null,new cljs.core.Keyword(null,"spacing","spacing",204422175),null], null), null);
app.main.ui.workspace.tokens.management.token_pill.token_pill_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$tokens$management$token_pill$token_pill_STAR_(props_56248){
var active_theme_tokens = props_56248.activeThemeTokens;
var selected_shapes = props_56248.selectedShapes;
var is_selected_inside_layout = props_56248.isSelectedInsideLayout;
var on_context_menu = props_56248.onContextMenu;
var on_click = props_56248.onClick;
var token = props_56248.token;
var map__56250 = token;
var map__56250__$1 = cljs.core.__destructure_map(map__56250);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56250__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56250__$1,new cljs.core.Keyword(null,"value","value",305978217));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56250__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var resolved_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_theme_tokens,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token));
var errors = new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(resolved_token);
var has_selected_QMARK_ = (cljs.core.count(selected_shapes) > (0));
var is_reference_QMARK_ = app.common.files.tokens.is_reference_QMARK_(token);
var contains_path_QMARK_ = cuerdas.core.includes_QMARK_(name,".");
var attributes = (function (){var $ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.tokens.application.token_properties,type);
return app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all-attributes","all-attributes",-1495901763).cljs$core$IFn$_invoke$arity$1($),new cljs.core.Keyword(null,"attributes","attributes",-74013604).cljs$core$IFn$_invoke$arity$1($));
})();
var full_applied_QMARK_ = ((has_selected_QMARK_)?app.main.ui.workspace.tokens.management.token_pill.applied_all_attributes_QMARK_(token,selected_shapes,attributes):true);
var applied_QMARK_ = ((has_selected_QMARK_)?app.common.files.tokens.shapes_token_applied_QMARK_(token,selected_shapes,attributes):false);
var half_applied_QMARK_ = (function (){var and__5023__auto__ = applied_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (!(full_applied_QMARK_));
} else {
return and__5023__auto__;
}
})();
var disabled_QMARK_ = ((has_selected_QMARK_) && (((cljs.core.not(applied_QMARK_)) && (((cljs.core.not(half_applied_QMARK_)) && (cljs.core.not(app.main.ui.workspace.tokens.management.token_pill.attributes_match_selection_QMARK_.cljs$core$IFn$_invoke$arity$variadic(selected_shapes,attributes,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"selected-inside-layout?","selected-inside-layout?",-1748414769),is_selected_inside_layout], null)], 0)))))))));
var can_edit_QMARK_ = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.refs.permissions));
var is_viewer_QMARK_ = cljs.core.not(can_edit_QMARK_);
var ref_not_in_active_set = ((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500)))?cljs.core.seq(new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(resolved_token)):(function (){var and__5023__auto__ = is_reference_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (!(app.main.ui.workspace.tokens.management.token_pill.contains_reference_value_QMARK_(value,active_theme_tokens)));
} else {
return and__5023__auto__;
}
})());
var no_valid_value = cljs.core.seq(errors);
var errors_QMARK_ = (function (){var or__5025__auto__ = ref_not_in_active_set;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return no_valid_value;
}
})();
var color = ((app.common.files.tokens.color_token_QMARK_(token))?(function (){var or__5025__auto__ = app.main.data.workspace.tokens.color.resolved_token_bullet_color(resolved_token);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.workspace.tokens.color.resolved_token_bullet_color(token);
}
})():null);
var status_icon_QMARK_ = cljs.core.contains_QMARK_(app.main.ui.workspace.tokens.management.token_pill.token_types_with_status_icon,type);
var on_click__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(errors_QMARK_),rumext.v2.adapt(on_click),rumext.v2.adapt(token)],(function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(cljs.core.seq(errors));
if(and__5023__auto__){
return on_click;
} else {
return and__5023__auto__;
}
})())){
return (on_click.cljs$core$IFn$_invoke$arity$2 ? on_click.cljs$core$IFn$_invoke$arity$2(event,token) : on_click.call(null,event,token));
} else {
return null;
}
}));
var token_status_id = (cljs.core.truth_(half_applied_QMARK_)?"token-status-partial":((full_applied_QMARK_)?"token-status-full":"token-status-non-applied"
));
var on_context_menu__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(can_edit_QMARK_),rumext.v2.adapt(on_context_menu),rumext.v2.adapt(token)],(function (e){
app.util.dom.stop_propagation(e);

if(cljs.core.truth_(can_edit_QMARK_)){
return (on_context_menu.cljs$core$IFn$_invoke$arity$2 ? on_context_menu.cljs$core$IFn$_invoke$arity$2(e,token) : on_context_menu.call(null,e,token));
} else {
return null;
}
}));
var on_click__$2 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(errors_QMARK_),rumext.v2.adapt(on_click__$1)],(function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.truth_((function (){var and__5023__auto__ = can_edit_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = cljs.core.not(cljs.core.seq(errors));
if(and__5023__auto____$1){
return on_click__$1;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return (on_click__$1.cljs$core$IFn$_invoke$arity$1 ? on_click__$1.cljs$core$IFn$_invoke$arity$1(event) : on_click__$1.call(null,event));
} else {
return null;
}
}));
var on_hover = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_shapes),rumext.v2.adapt(is_viewer_QMARK_),rumext.v2.adapt(active_theme_tokens),rumext.v2.adapt(token),rumext.v2.adapt(half_applied_QMARK_),rumext.v2.adapt(no_valid_value),rumext.v2.adapt(ref_not_in_active_set)],(function (event){
var node = app.util.dom.get_current_target(event);
var theme_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(active_theme_tokens,name);
var title = app.main.ui.workspace.tokens.management.token_pill.generate_tooltip(is_viewer_QMARK_,cljs.core.first(selected_shapes),theme_token,token,half_applied_QMARK_,no_valid_value,ref_not_in_active_set);
return app.util.dom.set_attribute_BANG_(node,"title",title);
}));
return rumext.v2.jsxs("button",{'type':"button",'onFocus':on_hover,'onClick':on_click__$2,'onMouseEnter':on_hover,'onContextMenu':on_context_menu__$1,'className':"main_ui_workspace_tokens_management_token_pill__token-pill"+" "+(((((!(status_icon_QMARK_))) && (cljs.core.not(errors_QMARK_))))?"main_ui_workspace_tokens_management_token_pill__token-pill-no-icon":"")+" "+(cljs.core.truth_(can_edit_QMARK_)?"main_ui_workspace_tokens_management_token_pill__token-pill-default":"")+" "+((disabled_QMARK_)?"main_ui_workspace_tokens_management_token_pill__token-pill-disabled":"")+" "+(cljs.core.truth_((function (){var and__5023__auto__ = can_edit_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = has_selected_QMARK_;
if(and__5023__auto____$1){
var or__5025__auto__ = half_applied_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return full_applied_QMARK_;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?"main_ui_workspace_tokens_management_token_pill__token-pill-applied":"")+" "+(cljs.core.truth_((function (){var and__5023__auto__ = can_edit_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return errors_QMARK_;
} else {
return and__5023__auto__;
}
})())?"main_ui_workspace_tokens_management_token_pill__token-pill-invalid":"")+" "+(cljs.core.truth_((function (){var and__5023__auto__ = full_applied_QMARK_;
if(and__5023__auto__){
var and__5023__auto____$1 = errors_QMARK_;
if(cljs.core.truth_(and__5023__auto____$1)){
return can_edit_QMARK_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?"main_ui_workspace_tokens_management_token_pill__token-pill-invalid-applied":"")+" "+((is_viewer_QMARK_)?"main_ui_workspace_tokens_management_token_pill__token-pill-viewer":"")+" "+(cljs.core.truth_((function (){var and__5023__auto__ = is_viewer_QMARK_;
if(and__5023__auto__){
var and__5023__auto____$1 = has_selected_QMARK_;
if(and__5023__auto____$1){
var or__5025__auto__ = half_applied_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return full_applied_QMARK_;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?"main_ui_workspace_tokens_management_token_pill__token-pill-applied-viewer":"")+" "+(cljs.core.truth_((function (){var and__5023__auto__ = is_viewer_QMARK_;
if(and__5023__auto__){
return errors_QMARK_;
} else {
return and__5023__auto__;
}
})())?"main_ui_workspace_tokens_management_token_pill__token-pill-invalid-viewer":"")+" "+(cljs.core.truth_((function (){var and__5023__auto__ = is_viewer_QMARK_;
if(and__5023__auto__){
var and__5023__auto____$1 = full_applied_QMARK_;
if(and__5023__auto____$1){
return errors_QMARK_;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?"main_ui_workspace_tokens_management_token_pill__token-pill-invalid-applied-viewer":""),'children':[(cljs.core.truth_(errors_QMARK_)?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.broken_link,'className':"main_ui_workspace_tokens_management_token_pill__token-pill-icon",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.missing-reference")}):(cljs.core.truth_(color)?rumext.v2.jsx(app.main.ui.ds.utilities.swatch.swatch_STAR_,{'background':color,'size':"small"}):((status_icon_QMARK_)?rumext.v2.jsx(app.main.ui.ds.foundations.utilities.token.token_status.token_status_icon_STAR_,{'iconId':token_status_id,'className':"main_ui_workspace_tokens_management_token_pill__token-pill-icon"}):null))),(cljs.core.truth_(contains_path_QMARK_)?(function (){var vec__56256 = app.common.path_names.split_by_last_period(name);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56256,(0),null);
var last_part = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56256,(1),null);
return rumext.v2.jsx("span",{'aria-label':name,'className':"main_ui_workspace_tokens_management_token_pill__divided-name-wrapper",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_tokens_management_token_pill__last-name-wrapper",'children':last_part})});
})():rumext.v2.jsx("span",{'aria-label':name,'className':"main_ui_workspace_tokens_management_token_pill__name-wrapper",'children':name}))]});
}));

(app.main.ui.workspace.tokens.management.token_pill.token_pill_STAR_.displayName = "token-pill*");


//# sourceMappingURL=app.main.ui.workspace.tokens.management.token_pill.js.map
