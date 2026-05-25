import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.files.helpers.js";
import "./app.common.types.text.js";
import "./app.main.data.shortcuts.js";
import "./app.main.data.workspace.texts.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.features.js";
import "./app.main.fonts.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./cuerdas.core.js";
import "./okulary.core.js";
goog.provide('app.main.data.workspace.text.shortcuts');
app.main.data.workspace.text.shortcuts.is_bold_QMARK_ = (function app$main$data$workspace$text$shortcuts$is_bold_QMARK_(variant_id){
return cljs.core.some((function (p1__51319_SHARP_){
return cuerdas.core.includes_QMARK_(variant_id,p1__51319_SHARP_);
}),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bold","black","700"], null));
});
app.main.data.workspace.text.shortcuts.is_italic_QMARK_ = (function app$main$data$workspace$text$shortcuts$is_italic_QMARK_(variant_id){
return cljs.core.some((function (p1__51320_SHARP_){
return cuerdas.core.includes_QMARK_(variant_id,p1__51320_SHARP_);
}),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["italic","cursive"], null));
});
app.main.data.workspace.text.shortcuts.generate_variant_props = (function app$main$data$workspace$text$shortcuts$generate_variant_props(text_values,variant_id){
var first_intersection = (function (list1,list2){
return cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.set(list1),list2));
});
var current_variant = new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718).cljs$core$IFn$_invoke$arity$1(text_values);
var bold_options = (cljs.core.truth_(cuerdas.core.includes_QMARK_(current_variant,"black"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["black","bold","700"], null):(cljs.core.truth_(cuerdas.core.includes_QMARK_(current_variant,"700"))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["700","black","bold"], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bold","black","700"], null)
));
var current_variant_no_italic = (cljs.core.truth_(cuerdas.core.includes_QMARK_(current_variant,"italic"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(current_variant,(0),(cljs.core.count(current_variant) - (6))):(cljs.core.truth_(cuerdas.core.includes_QMARK_(current_variant,"cursive"))?cljs.core.subs.cljs$core$IFn$_invoke$arity$3(current_variant,(0),(cljs.core.count(current_variant) - (7))):null
));
var regular_options = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [current_variant_no_italic,"regular","normal","400"], null);
var italic_options = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [((((cljs.core.not(cuerdas.core.includes_QMARK_(current_variant,"bold"))) && (((cljs.core.not(cuerdas.core.includes_QMARK_(current_variant,"black"))) && (cljs.core.not(cuerdas.core.includes_QMARK_(current_variant,"700")))))))?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(current_variant),"italic"].join(''):null),"italic","cursive"], null);
var bold_italic_options = (cljs.core.truth_(cuerdas.core.includes_QMARK_(current_variant,"black"))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["blackitalic","blackcursive","bolditalic","700italic","boldcursive","700cursive"], null):(cljs.core.truth_(cuerdas.core.includes_QMARK_(current_variant,"700"))?new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["700italic","700cursive","bolditalic","blackitalic","boldcursive","blackcursive"], null):new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, ["bolditalic","700italic","blackitalic","boldcursive","700cursive","blackcursive"], null)
));
var font_id = new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(text_values);
var fonts = cljs.core.deref(app.main.fonts.fontsdb);
var font = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fonts,font_id);
var variants = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"variants","variants",-176391100).cljs$core$IFn$_invoke$arity$1(font));
var choose_regular = (function (){
return first_intersection(variants,regular_options);
});
var choose_bold = (function (){
return first_intersection(variants,bold_options);
});
var choose_italic = (function (){
return first_intersection(variants,italic_options);
});
var choose_bold_italic = (function (){
var or__5025__auto__ = first_intersection(variants,bold_italic_options);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return choose_bold();
}
});
var choose_italic_bold = (function (){
var or__5025__auto__ = first_intersection(variants,bold_italic_options);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return choose_italic();
}
});
var new_variant = (function (){var bold_QMARK_ = app.main.data.workspace.text.shortcuts.is_bold_QMARK_(current_variant);
var italic_QMARK_ = app.main.data.workspace.text.shortcuts.is_italic_QMARK_(current_variant);
var add_bold_QMARK_ = ((cljs.core.not(bold_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant_id,"add-bold")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant_id,"toggle-bold")))));
var remove_bold_QMARK_ = (function (){var and__5023__auto__ = bold_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant_id,"remove-bold")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant_id,"toggle-bold")));
} else {
return and__5023__auto__;
}
})();
var add_italic_QMARK_ = ((cljs.core.not(italic_QMARK_)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant_id,"add-italic")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant_id,"toggle-italic")))));
var remove_italic_QMARK_ = (function (){var and__5023__auto__ = italic_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant_id,"remove-italic")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(variant_id,"toggle-italic")));
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = add_bold_QMARK_;
if(and__5023__auto__){
return italic_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return choose_bold_italic();
} else {
if(((add_bold_QMARK_) && (cljs.core.not(italic_QMARK_)))){
return choose_bold();
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = remove_bold_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return italic_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return choose_italic();
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = remove_bold_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(italic_QMARK_);
} else {
return and__5023__auto__;
}
})())){
return choose_regular();
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = add_italic_QMARK_;
if(and__5023__auto__){
return bold_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return choose_italic_bold();
} else {
if(((add_italic_QMARK_) && (cljs.core.not(bold_QMARK_)))){
return choose_italic();
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = remove_italic_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return bold_QMARK_;
} else {
return and__5023__auto__;
}
})())){
return choose_bold();
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = remove_italic_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(bold_QMARK_);
} else {
return and__5023__auto__;
}
})())){
return choose_regular();
} else {
return null;
}
}
}
}
}
}
}
}
})();
var new_variant__$1 = (cljs.core.truth_(new_variant)?cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__51324_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__51324_SHARP_),new_variant);
}),new cljs.core.Keyword(null,"variants","variants",-176391100).cljs$core$IFn$_invoke$arity$1(font))):null);
if(cljs.core.truth_(new_variant__$1)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(new_variant__$1),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(new_variant__$1),new cljs.core.Keyword(null,"font-style","font-style",-773672352),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(new_variant__$1)], null);
} else {
return null;
}
});
app.main.data.workspace.text.shortcuts.calculate_text_values = (function app$main$data$workspace$text$shortcuts$calculate_text_values(shape){
var state_map = (cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"text-editor/v2"))?cljs.core.deref(app.main.refs.workspace_v2_editor_state):cljs.core.deref(app.main.refs.workspace_editor_state));
var editor_state = (cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"text-editor/v2"))?null:cljs.core.get.cljs$core$IFn$_invoke$arity$2(state_map,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));
var editor_instance = (cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"text-editor/v2"))?cljs.core.deref(app.main.refs.workspace_editor):null);
return app.common.data.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.texts.current_root_values(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"shape","shape",1190694006),shape,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),app.common.types.text.root_attrs], null)),app.main.data.workspace.texts.current_paragraph_values(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editor-state","editor-state",579582138),editor_state,new cljs.core.Keyword(null,"editor-instance","editor-instance",-1602615018),editor_instance,new cljs.core.Keyword(null,"shape","shape",1190694006),shape,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),app.common.types.text.paragraph_attrs], null)),app.main.data.workspace.texts.current_text_values(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"editor-state","editor-state",579582138),editor_state,new cljs.core.Keyword(null,"editor-instance","editor-instance",-1602615018),editor_instance,new cljs.core.Keyword(null,"shape","shape",1190694006),shape,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),app.common.types.text.text_node_attrs], null))], 0));
});
app.main.data.workspace.text.shortcuts.update_attrs = (function app$main$data$workspace$text$shortcuts$update_attrs(shape,props){
var text_values = app.main.data.workspace.text.shortcuts.calculate_text_values(shape);
var font_size = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(text_values));
var props__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"font-size-inc","font-size-inc",1041720707).cljs$core$IFn$_invoke$arity$1(props))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),cljs.core.str.cljs$core$IFn$_invoke$arity$1((font_size + (1)))], null):(cljs.core.truth_(new cljs.core.Keyword(null,"font-size-dec","font-size-dec",-1007348714).cljs$core$IFn$_invoke$arity$1(props))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),cljs.core.str.cljs$core$IFn$_invoke$arity$1((font_size - (1)))], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207).cljs$core$IFn$_invoke$arity$1(props),"toggle-underline"))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207).cljs$core$IFn$_invoke$arity$1(text_values),"underline"))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207).cljs$core$IFn$_invoke$arity$1(props),"toggle-line-through"))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207).cljs$core$IFn$_invoke$arity$1(text_values),"line-through"))?new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none"], null):new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through"], null)):(cljs.core.truth_(new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718).cljs$core$IFn$_invoke$arity$1(props))?app.main.data.workspace.text.shortcuts.generate_variant_props(text_values,new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718).cljs$core$IFn$_invoke$arity$1(props)):props
)))));
if(cljs.core.truth_((function (){var and__5023__auto__ = shape;
if(cljs.core.truth_(and__5023__auto__)){
return props__$1;
} else {
return and__5023__auto__;
}
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_attrs(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),props__$1));
} else {
return null;
}
});
app.main.data.workspace.text.shortcuts.blend_props = (function app$main$data$workspace$text$shortcuts$blend_props(shapes,props){
var text_values = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.text.shortcuts.calculate_text_values,shapes);
var all_underline_QMARK_ = cljs.core.every_QMARK_((function (p1__51342_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207).cljs$core$IFn$_invoke$arity$1(p1__51342_SHARP_),"underline");
}),text_values);
var all_line_through_QMARK_ = cljs.core.every_QMARK_((function (p1__51343_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207).cljs$core$IFn$_invoke$arity$1(p1__51343_SHARP_),"line-through");
}),text_values);
var all_bold_QMARK_ = cljs.core.every_QMARK_((function (p1__51344_SHARP_){
return app.main.data.workspace.text.shortcuts.is_bold_QMARK_(new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718).cljs$core$IFn$_invoke$arity$1(p1__51344_SHARP_));
}),text_values);
var all_italic_QMARK_ = cljs.core.every_QMARK_((function (p1__51345_SHARP_){
return app.main.data.workspace.text.shortcuts.is_italic_QMARK_(new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718).cljs$core$IFn$_invoke$arity$1(p1__51345_SHARP_));
}),text_values);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207).cljs$core$IFn$_invoke$arity$1(props),"toggle-underline")){
if(all_underline_QMARK_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"underline"], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207).cljs$core$IFn$_invoke$arity$1(props),"toggle-line-through")){
if(all_line_through_QMARK_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"none"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"line-through"], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718).cljs$core$IFn$_invoke$arity$1(props),"toggle-bold")){
if(all_bold_QMARK_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"remove-bold"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"add-bold"], null);
}
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718).cljs$core$IFn$_invoke$arity$1(props),"toggle-italic")){
if(all_italic_QMARK_){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"remove-italic"], null);
} else {
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"add-italic"], null);
}
} else {
return props;

}
}
}
}
});
/**
 * A derived state that resolves to a lazy sequence of all selected
 *   shapes and its children.
 */
app.main.data.workspace.text.shortcuts.selected_shapes_with_children = okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (p__51350){
var map__51351 = p__51350;
var map__51351__$1 = cljs.core.__destructure_map(map__51351);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51351__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__51351__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__51346_SHARP_){
return app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,p1__51346_SHARP_);
})));
var shapes = cljs.core.into.cljs$core$IFn$_invoke$arity$3(selected,xform,selected);
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),shapes);
}),cljs.core.deref(new cljs.core.Var(function(){return app.main.refs.selected_shapes_data;},new cljs.core.Symbol("app.main.refs","selected-shapes-data","app.main.refs/selected-shapes-data",416940216,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"app.main.refs","app.main.refs",-748762075,null),new cljs.core.Symbol(null,"selected-shapes-data","selected-shapes-data",-1378388112,null),"app/main/refs.cljs",(36),(1),(165),(165),cljs.core.List.EMPTY,null,(cljs.core.truth_(app.main.refs.selected_shapes_data)?app.main.refs.selected_shapes_data.cljs$lang$test:null)]))));
app.main.data.workspace.text.shortcuts.update_attrs_when_no_readonly = (function app$main$data$workspace$text$shortcuts$update_attrs_when_no_readonly(props){
var undo_id = Symbol();
var can_edit_QMARK_ = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.refs.permissions));
var read_only_QMARK_ = cljs.core.deref(app.main.refs.workspace_read_only_QMARK_);
var text_shapes = cljs.core.not_empty(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.text_shape_QMARK_,cljs.core.deref(app.main.data.workspace.text.shortcuts.selected_shapes_with_children)));
var props__$1 = (((cljs.core.count(text_shapes) > (1)))?app.main.data.workspace.text.shortcuts.blend_props(text_shapes,props):props);
if(cljs.core.truth_((function (){var and__5023__auto__ = can_edit_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.not(read_only_QMARK_)) && ((!((text_shapes == null)))));
} else {
return and__5023__auto__;
}
})())){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.start_undo_transaction(undo_id));

cljs.core.run_BANG_((function (p1__51356_SHARP_){
return app.main.data.workspace.text.shortcuts.update_attrs(p1__51356_SHARP_,props__$1);
}),text_shapes);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.commit_undo_transaction(undo_id));
} else {
return null;
}
});
app.main.data.workspace.text.shortcuts.shortcuts = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"underline","underline",2018066703),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.meta("U"),new cljs.core.Keyword(null,"command","command",-894540724),app.main.data.shortcuts.c_mod("u"),new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-editor","text-editor",-767771325)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.data.workspace.text.shortcuts.update_attrs_when_no_readonly(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"toggle-underline"], null));
})], null),new cljs.core.Keyword(null,"line-through","line-through",-250988971),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.alt(app.main.data.shortcuts.meta_shift("5")),new cljs.core.Keyword(null,"command","command",-894540724),"alt+shift+5",new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-editor","text-editor",-767771325)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.data.workspace.text.shortcuts.update_attrs_when_no_readonly(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-decoration","text-decoration",1836813207),"toggle-line-through"], null));
})], null),new cljs.core.Keyword(null,"font-size-inc","font-size-inc",1041720707),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.meta_shift(">"),new cljs.core.Keyword(null,"command","command",-894540724),app.main.data.shortcuts.c_mod("shift+."),new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-editor","text-editor",-767771325)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.data.workspace.text.shortcuts.update_attrs_when_no_readonly(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size-inc","font-size-inc",1041720707),true], null));
})], null),new cljs.core.Keyword(null,"font-size-dec","font-size-dec",-1007348714),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.meta_shift("<"),new cljs.core.Keyword(null,"command","command",-894540724),app.main.data.shortcuts.c_mod("shift+,"),new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-editor","text-editor",-767771325)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.data.workspace.text.shortcuts.update_attrs_when_no_readonly(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size-dec","font-size-dec",-1007348714),true], null));
})], null),new cljs.core.Keyword(null,"bold","bold",-116809535),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.meta("b"),new cljs.core.Keyword(null,"command","command",-894540724),app.main.data.shortcuts.c_mod("b"),new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-editor","text-editor",-767771325)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.data.workspace.text.shortcuts.update_attrs_when_no_readonly(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"toggle-bold"], null));
})], null),new cljs.core.Keyword(null,"italic","italic",32599196),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"tooltip","tooltip",-1809677058),app.main.data.shortcuts.meta("i"),new cljs.core.Keyword(null,"command","command",-894540724),app.main.data.shortcuts.c_mod("i"),new cljs.core.Keyword(null,"subsections","subsections",689265297),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"text-editor","text-editor",-767771325)], null),new cljs.core.Keyword(null,"fn","fn",-1175266204),(function (){
return app.main.data.workspace.text.shortcuts.update_attrs_when_no_readonly(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),"toggle-italic"], null));
})], null)], null);

//# sourceMappingURL=app.main.data.workspace.text.shortcuts.js.map
