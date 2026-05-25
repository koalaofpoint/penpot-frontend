import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.data.workspace.colors.js";
import "./app.main.data.workspace.selection.js";
import "./app.main.data.workspace.tokens.application.js";
import "./app.main.store.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.workspace.sidebar.options.rows.color_row.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.color_selection');
/**
 * Prepares and groups extracted color information from shapes.
 *   Input:
 *     - shapes: vector of shape maps
 *     - file-id: current file UUID
 *     - libraries: shared color libraries
 * 
 *   Output:
 *     {:groups            explained below
 *      :all-colors        vector of all color maps (unique attrs)
 *      :colors            vector of normal colors (without ref-id or token)
 *      :library-colors    vector of colors linked to libraries (with ref-id)
 *      :token-colors      vector of colors linked to applied tokens
 *      :tokens            placeholder for future token data}
 * 
 * :groups structure
 * 
 * A map where:
 *   - Each **key** is a color descriptor map representing a unique color instance.
 *     Depending on the color type, it can contain:
 *       • :color  → hex string (e.g. "#9f2929")
 *       • :opacity → numeric value between 0-1
 *       • :ref-id and :ref-file → if the color comes from a library
 *       • :token-name "some-token" → if the color
 *         originates from an applied token
 * 
 *   - Each **value** is a vector of one or more maps describing *where* that
 *     color is used. Each entry corresponds to a specific shape and color
 *     property in the document:
 *       • :prop      → the property type (:fill, :stroke, :shadow, etc.)
 *       • :shape-id  → the UUID of the shape using this color
 *       • :index     → index of the color in the shape's fill/stroke list
 * 
 * Example of groups:
 * {
 *   {:color "#9f2929", :opacity 0.3,  :token-name "asd2" :has-token-applied true}
 *   [{:prop :fill, :shape-id #uuid "d0231035-25c9-80d5-8006-eae4c3dff32e", :index 0}]
 * 
 *   {:color "#1b54b6", :opacity 1}
 *   [{:prop :fill, :shape-id #uuid "aab34f9a-98c1-801a-8006-eae5e8236f1b", :index 0}]
 * }
 * 
 * This structure allows fast lookups of all shapes using the same visual color,
 * regardless of whether it comes from local fills, strokes or shadow-colors.
 */
app.main.ui.workspace.sidebar.options.menus.color_selection.prepare_colors = (function app$main$ui$workspace$sidebar$options$menus$color_selection$prepare_colors(shapes,file_id,libraries){
var data = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.remove.cljs$core$IFn$_invoke$arity$1(cljs.core.nil_QMARK_),app.main.data.workspace.colors.extract_all_colors(shapes,file_id,libraries));
var groups = app.common.data.group_by.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),(function (p1__55848_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__55848_SHARP_,new cljs.core.Keyword(null,"attrs","attrs",-2090668713));
}),data);
var all_colors = cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"attrs","attrs",-2090668713),data));
var library_colors = cljs.core.filterv(new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),all_colors);
var token_colors = cljs.core.filterv(new cljs.core.Keyword(null,"token-name","token-name",1766556933),all_colors);
var colors = cljs.core.filterv((function (p1__55849_SHARP_){
return (((new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884).cljs$core$IFn$_invoke$arity$1(p1__55849_SHARP_) == null)) && (cljs.core.not(new cljs.core.Keyword(null,"token-name","token-name",1766556933).cljs$core$IFn$_invoke$arity$1(p1__55849_SHARP_))));
}),all_colors);
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"groups","groups",-136896102),groups,new cljs.core.Keyword(null,"all-colors","all-colors",541687080),all_colors,new cljs.core.Keyword(null,"colors","colors",1157174732),colors,new cljs.core.Keyword(null,"token-colors","token-colors",-1209312666),token_colors,new cljs.core.Keyword(null,"library-colors","library-colors",-1244860886),library_colors], null);
});
app.main.ui.workspace.sidebar.options.menus.color_selection.xf_COLON_map_shape_id = cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"shape-id","shape-id",981169327));
app.main.ui.workspace.sidebar.options.menus.color_selection.retrieve_color_operations = (function app$main$ui$workspace$sidebar$options$menus$color_selection$retrieve_color_operations(groups,old_color,prev_colors){
var old_color__$1 = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(old_color,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path","path",-188191168)], 0)));
var prev_color = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(cljs.core.get,groups),prev_colors);
var color_operations_old = cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups,old_color__$1);
var color_operations_prev = cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups,prev_colors);
var color_operations = (function (){var or__5025__auto__ = color_operations_prev;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return color_operations_old;
}
})();
var old_color__$2 = (function (){var or__5025__auto__ = prev_color;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return old_color__$1;
}
})();
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [color_operations,old_color__$2], null);
});
app.main.ui.workspace.sidebar.options.menus.color_selection.color_selection_menu_STAR_ = (function (p1__55850_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__55850_SHARP_,(function (new_props_55866,old_props_55867){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_55866.shapes,old_props_55867.shapes);
}));
})((function app$main$ui$workspace$sidebar$options$menus$color_selection$color_selection_menu_STAR_(props_55865){
var shapes = props_55865.shapes;
var file_id = props_55865.fileId;
var libraries = props_55865.libraries;
var map__55868 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(shapes),rumext.v2.adapt(libraries)],(function (){
return app.main.ui.workspace.sidebar.options.menus.color_selection.prepare_colors(shapes,file_id,libraries);
}));
var map__55868__$1 = cljs.core.__destructure_map(map__55868);
var groups = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55868__$1,new cljs.core.Keyword(null,"groups","groups",-136896102));
var library_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55868__$1,new cljs.core.Keyword(null,"library-colors","library-colors",-1244860886));
var colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55868__$1,new cljs.core.Keyword(null,"colors","colors",1157174732));
var token_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55868__$1,new cljs.core.Keyword(null,"token-colors","token-colors",-1209312666));
var open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(true);
var open_QMARK_ = cljs.core.deref(open_STAR_);
var has_colors_QMARK_ = (((!((cljs.core.seq(colors) == null)))) || ((!((cljs.core.seq(library_colors) == null)))));
var toggle_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_STAR_,cljs.core.not);
}));
var expand_lib_color = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var expand_color = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var expand_token_color = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var prev_colors_ref = rumext.v2.use_ref(null);
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(groups)],(function (old_color,new_color,from_picker_QMARK_){
var prev_colors = rumext.v2.ref_val(prev_colors_ref);
var vec__55874 = app.main.ui.workspace.sidebar.options.menus.color_selection.retrieve_color_operations(groups,old_color,prev_colors);
var color_operations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55874,(0),null);
var old_color__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55874,(1),null);
if(cljs.core.truth_(from_picker_QMARK_)){
var color_55916 = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new_color,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path","path",-188191168)], 0)));
rumext.v2.set_ref_val_BANG_(prev_colors_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_colors,color_55916));
} else {
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.change_color_in_selected(color_operations,new_color,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(old_color__$1,new cljs.core.Keyword(null,"token-name","token-name",1766556933),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"has-token-applied","has-token-applied",-2051558353)], 0))));
}));
var on_open = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return rumext.v2.set_ref_val_BANG_(prev_colors_ref,cljs.core.PersistentVector.EMPTY);
}));
var on_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return rumext.v2.set_ref_val_BANG_(prev_colors_ref,cljs.core.PersistentVector.EMPTY);
}));
var on_detach = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(groups)],(function (color){
var color_operations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups,color);
var color_SINGLEQUOTE_ = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(color,new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref-file","ref-file",255004238)], 0));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.change_color_in_selected(color_operations,color_SINGLEQUOTE_,color));
}));
var on_detach_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token_colors),rumext.v2.adapt(groups)],(function (token_name){
var prev_colors = rumext.v2.ref_val(prev_colors_ref);
var token_color = cljs.core.some((function (p1__55851_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"token-name","token-name",1766556933).cljs$core$IFn$_invoke$arity$1(p1__55851_SHARP_),token_name)){
return p1__55851_SHARP_;
} else {
return null;
}
}),token_colors);
var vec__55884 = app.main.ui.workspace.sidebar.options.menus.color_selection.retrieve_color_operations(groups,token_color,prev_colors);
var color_operations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55884,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55884,(1),null);
var seq__55890 = cljs.core.seq(color_operations);
var chunk__55891 = null;
var count__55892 = (0);
var i__55893 = (0);
while(true){
if((i__55893 < count__55892)){
var op = chunk__55891.cljs$core$IIndexed$_nth$arity$2(null,i__55893);
var attr_55917 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prop","prop",-515168332).cljs$core$IFn$_invoke$arity$1(op),new cljs.core.Keyword(null,"stroke","stroke",1741823555)))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),null], null), null):new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),null], null), null));
var color_55918 = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(token_color,new cljs.core.Keyword(null,"token-name","token-name",1766556933),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"has-token-applied","has-token-applied",-2051558353)], 0)));
rumext.v2.set_ref_val_BANG_(prev_colors_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_colors,color_55918));

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.unapply_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),token_name,new cljs.core.Keyword(null,"attributes","attributes",-74013604),attr_55917,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327).cljs$core$IFn$_invoke$arity$1(op)], null)], null)));


var G__55919 = seq__55890;
var G__55920 = chunk__55891;
var G__55921 = count__55892;
var G__55922 = (i__55893 + (1));
seq__55890 = G__55919;
chunk__55891 = G__55920;
count__55892 = G__55921;
i__55893 = G__55922;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__55890);
if(temp__5825__auto__){
var seq__55890__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__55890__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__55890__$1);
var G__55923 = cljs.core.chunk_rest(seq__55890__$1);
var G__55924 = c__5548__auto__;
var G__55925 = cljs.core.count(c__5548__auto__);
var G__55926 = (0);
seq__55890 = G__55923;
chunk__55891 = G__55924;
count__55892 = G__55925;
i__55893 = G__55926;
continue;
} else {
var op = cljs.core.first(seq__55890__$1);
var attr_55927 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"prop","prop",-515168332).cljs$core$IFn$_invoke$arity$1(op),new cljs.core.Keyword(null,"stroke","stroke",1741823555)))?new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),null], null), null):new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),null], null), null));
var color_55928 = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(token_color,new cljs.core.Keyword(null,"token-name","token-name",1766556933),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"has-token-applied","has-token-applied",-2051558353)], 0)));
rumext.v2.set_ref_val_BANG_(prev_colors_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_colors,color_55928));

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.unapply_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),token_name,new cljs.core.Keyword(null,"attributes","attributes",-74013604),attr_55927,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shape-id","shape-id",981169327).cljs$core$IFn$_invoke$arity$1(op)], null)], null)));


var G__55930 = cljs.core.next(seq__55890__$1);
var G__55931 = null;
var G__55932 = (0);
var G__55933 = (0);
seq__55890 = G__55930;
chunk__55891 = G__55931;
count__55892 = G__55932;
i__55893 = G__55933;
continue;
}
} else {
return null;
}
}
break;
}
}));
var select_only = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(groups)],(function (color){
var color_operations = cljs.core.get.cljs$core$IFn$_invoke$arity$2(groups,color);
var ids = cljs.core.into.cljs$core$IFn$_invoke$arity$3(app.common.data.ordered_set.cljs$core$IFn$_invoke$arity$0(),app.main.ui.workspace.sidebar.options.menus.color_selection.xf_COLON_map_shape_id,color_operations);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.selection.select_shapes(ids));
}));
var on_token_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(groups)],(function (_,token,old_color){
var prev_colors = rumext.v2.ref_val(prev_colors_ref);
var resolved_value = new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626).cljs$core$IFn$_invoke$arity$1(token);
var new_color = app.main.data.workspace.tokens.application.value__GT_color(resolved_value);
var color = app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(new_color,new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"path","path",-188191168)], 0)));
var vec__55898 = app.main.ui.workspace.sidebar.options.menus.color_selection.retrieve_color_operations(groups,old_color,prev_colors);
var color_operations = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55898,(0),null);
var ___$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55898,(1),null);
rumext.v2.set_ref_val_BANG_(prev_colors_ref,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(prev_colors,color));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.apply_token_on_selected(color_operations,token));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_color_selection__element-set",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_color_selection__element-title",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':has_colors_QMARK_,'collapsed':cljs.core.not(open_QMARK_),'onCollapsed':toggle_content,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.selection-color"),'className':(((!(has_colors_QMARK_)))?"main_ui_workspace_sidebar_options_menus_color_selection__title-spacing-selected-colors":"")})}),(cljs.core.truth_(open_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_color_selection__element-content",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_color_selection__selected-color-group",'children':[(function (){var library_colors_extract = (function (){var G__55901 = library_colors;
if(cljs.core.not(cljs.core.deref(expand_lib_color))){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),G__55901);
} else {
return G__55901;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55902){
var vec__55903 = p__55902;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55903,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55903,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.options.rows.color_row.color_row_STAR_,{'origin':new cljs.core.Keyword(null,"color-selection","color-selection",923516039),'onClose':on_close,'index':index,'onChange':(function (p1__55853_SHARP_,p2__55854_SHARP_){
return (on_change.cljs$core$IFn$_invoke$arity$3 ? on_change.cljs$core$IFn$_invoke$arity$3(color,p1__55853_SHARP_,p2__55854_SHARP_) : on_change.call(null,color,p1__55853_SHARP_,p2__55854_SHARP_));
}),'onTokenChange':(function (p1__55855_SHARP_,p2__55856_SHARP_){
return (on_token_change.cljs$core$IFn$_invoke$arity$3 ? on_token_change.cljs$core$IFn$_invoke$arity$3(p1__55855_SHARP_,p2__55856_SHARP_,color) : on_token_change.call(null,p1__55855_SHARP_,p2__55856_SHARP_,color));
}),'onDetach':(function (p1__55852_SHARP_){
return (on_detach.cljs$core$IFn$_invoke$arity$2 ? on_detach.cljs$core$IFn$_invoke$arity$2(color,p1__55852_SHARP_) : on_detach.call(null,color,p1__55852_SHARP_));
}),'selectOnly':select_only,'color':color,'onOpen':on_open},index));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(library_colors_extract));
})(),((((cljs.core.deref(expand_lib_color) === false) && (((3) < cljs.core.count(library_colors)))))?rumext.v2.jsx("button",{'onClick':(function (){
return cljs.core.reset_BANG_(expand_lib_color,true);
}),'className':"main_ui_workspace_sidebar_options_menus_color_selection__more-colors-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.more-lib-colors")}):null)]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_color_selection__selected-color-group",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55906){
var vec__55907 = p__55906;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55907,(0),null);
var color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55907,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.options.rows.color_row.color_row_STAR_,{'onTokenChange':(function (p1__55859_SHARP_,p2__55860_SHARP_){
return (on_token_change.cljs$core$IFn$_invoke$arity$3 ? on_token_change.cljs$core$IFn$_invoke$arity$3(p1__55859_SHARP_,p2__55860_SHARP_,color) : on_token_change.call(null,p1__55859_SHARP_,p2__55860_SHARP_,color));
}),'selectOnly':select_only,'color':color,'index':index,'onClose':on_close,'origin':new cljs.core.Keyword(null,"color-selection","color-selection",923516039),'onChange':(function (p1__55857_SHARP_,p2__55858_SHARP_){
return (on_change.cljs$core$IFn$_invoke$arity$3 ? on_change.cljs$core$IFn$_invoke$arity$3(color,p1__55857_SHARP_,p2__55858_SHARP_) : on_change.call(null,color,p1__55857_SHARP_,p2__55858_SHARP_));
}),'onOpen':on_open},index));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1((function (){var G__55910 = colors;
if(cljs.core.not(cljs.core.deref(expand_color))){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),G__55910);
} else {
return G__55910;
}
})())),((((cljs.core.deref(expand_color) === false) && (((3) < cljs.core.count(colors)))))?rumext.v2.jsx("button",{'onClick':(function (){
return cljs.core.reset_BANG_(expand_color,true);
}),'className':"main_ui_workspace_sidebar_options_menus_color_selection__more-colors-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.more-colors")}):null)]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_color_selection__selected-color-group",'children':[(function (){var token_color_extract = (function (){var G__55911 = token_colors;
if(cljs.core.not(cljs.core.deref(expand_token_color))){
return cljs.core.take.cljs$core$IFn$_invoke$arity$2((3),G__55911);
} else {
return G__55911;
}
})();
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55912){
var vec__55913 = p__55912;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55913,(0),null);
var token_color = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55913,(1),null);
out_arr__35152__auto__.push((function (){var color = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(token_color),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(token_color)], null);
return rumext.v2.jsx(app.main.ui.workspace.sidebar.options.rows.color_row.color_row_STAR_,{'origin':new cljs.core.Keyword(null,"color-selection","color-selection",923516039),'onClose':on_close,'index':index,'onChange':(function (p1__55861_SHARP_,p2__55862_SHARP_){
return (on_change.cljs$core$IFn$_invoke$arity$3 ? on_change.cljs$core$IFn$_invoke$arity$3(token_color,p1__55861_SHARP_,p2__55862_SHARP_) : on_change.call(null,token_color,p1__55861_SHARP_,p2__55862_SHARP_));
}),'onTokenChange':(function (p1__55863_SHARP_,p2__55864_SHARP_){
return (on_token_change.cljs$core$IFn$_invoke$arity$3 ? on_token_change.cljs$core$IFn$_invoke$arity$3(p1__55863_SHARP_,p2__55864_SHARP_,token_color) : on_token_change.call(null,p1__55863_SHARP_,p2__55864_SHARP_,token_color));
}),'onDetachToken':on_detach_token,'appliedToken':new cljs.core.Keyword(null,"token-name","token-name",1766556933).cljs$core$IFn$_invoke$arity$1(token_color),'selectOnly':select_only,'color':color,'onOpen':on_open},index);
})());

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(token_color_extract));
})(),((((cljs.core.deref(expand_token_color) === false) && (((3) < cljs.core.count(token_colors)))))?rumext.v2.jsx("button",{'onClick':(function (){
return cljs.core.reset_BANG_(expand_token_color,true);
}),'className':"main_ui_workspace_sidebar_options_menus_color_selection__more-colors-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.more-token-colors")}):null)]})]}):null)]});
}));

(app.main.ui.workspace.sidebar.options.menus.color_selection.color_selection_menu_STAR_.displayName = "color-selection-menu*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.color_selection.js.map
