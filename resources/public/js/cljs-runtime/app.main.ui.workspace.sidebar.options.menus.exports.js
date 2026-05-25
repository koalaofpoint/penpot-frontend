import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.data.exports.assets.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.select.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.exports.assets.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.exports');
/**
 * Shape attrs that corresponds to exports. Used in other namespaces.
 */
app.main.ui.workspace.sidebar.options.menus.exports.exports_attrs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exports","exports",-745008272)], null);
app.main.ui.workspace.sidebar.options.menus.exports.check_exports_menu_props = (function app$main$ui$workspace$sidebar$options$menus$exports$check_exports_menu_props(old_props,new_props){
return ((((old_props["ids"]) === (new_props["ids"]))) && (((((old_props["type"]) === (new_props["type"]))) && (((((old_props["pageId"]) === (new_props["pageId"]))) && (((((old_props["fileId"]) === (new_props["fileId"]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((old_props["values"]),(new_props["values"]))))))))));
});
app.main.ui.workspace.sidebar.options.menus.exports.exports_menu_STAR_ = (function (p1__55606_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__55606_SHARP_,app.main.ui.workspace.sidebar.options.menus.exports.check_exports_menu_props);
})((function app$main$ui$workspace$sidebar$options$menus$exports$exports_menu_STAR_(props_55608){
var shapes = props_55608.shapes;
var file_id = props_55608.fileId;
var ids = props_55608.ids;
var type = props_55608.type;
var page_id = props_55608.pageId;
var values = props_55608.values;
var exports__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(values,new cljs.core.Keyword(null,"exports","exports",-745008272),cljs.core.PersistentVector.EMPTY);
var open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(true);
var open_QMARK_ = cljs.core.deref(open_STAR_);
var state = rumext.v2.deref(app.main.refs.export$);
var in_progress_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"in-progress","in-progress",2126442630));
var has_exports_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),exports__$1)) || ((!((cljs.core.seq(exports__$1) == null)))));
var toggle_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_STAR_,cljs.core.not);
}));
var shapes_with_exports = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.seq,new cljs.core.Keyword(null,"exports","exports",-745008272)),shapes);
}));
var sname = ((cljs.core.seqable_QMARK_(exports__$1))?(function (){var sname = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(shapes_with_exports));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(cljs.core.first(exports__$1));
var G__55634 = sname;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(exports__$1))) && ((!((suffix == null)))))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55634),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
} else {
return G__55634;
}
})():null);
var scale_enabled_QMARK_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (export$){
var G__55636 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(export$);
var fexpr__55635 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"png","png",551930691),null,new cljs.core.Keyword(null,"webp","webp",1501869900),null,new cljs.core.Keyword(null,"jpeg","jpeg",-646816934),null], null), null);
return (fexpr__55635.cljs$core$IFn$_invoke$arity$1 ? fexpr__55635.cljs$core$IFn$_invoke$arity$1(G__55636) : fexpr__55635.call(null,G__55636));
}));
var on_download = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids),rumext.v2.adapt(page_id),rumext.v2.adapt(file_id),rumext.v2.adapt(exports__$1)],(function (event){
app.util.dom.prevent_default(event);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),type)){
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(shapes_with_exports))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(new cljs.core.Keyword(null,"exports","exports",-745008272).cljs$core$IFn$_invoke$arity$1(cljs.core.first(shapes_with_exports))))))){
var shape = cljs.core.first(shapes_with_exports);
var export$ = cljs.core.first(new cljs.core.Keyword(null,"exports","exports",-745008272).cljs$core$IFn$_invoke$arity$1(shape));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(export$);
var sname__$1 = (function (){var G__55643 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape);
if((!((suffix == null)))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55643),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
} else {
return G__55643;
}
})();
var defaults = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"name","name",1843675177),sname__$1,new cljs.core.Keyword(null,"object-id","object-id",-754527291),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(shapes_with_exports))], null);
var full_export = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([export$,defaults], 0));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.exports.assets.request_simple_export(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"export","export",214356590),full_export], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.exports.assets.export_shapes_event(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [full_export], null),"workspace:sidebar")], 0));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.exports.assets.show_workspace_export_dialog(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),cljs.core.reverse(ids),new cljs.core.Keyword(null,"origin","origin",1037372088),"workspace:sidebar"], null)));
}
} else {
var defaults = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"name","name",1843675177),sname,new cljs.core.Keyword(null,"object-id","object-id",-754527291),cljs.core.first(ids)], null);
var exports__$2 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__55607_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__55607_SHARP_,defaults], 0));
}),exports__$1);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.exports.assets.request_export(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exports","exports",-745008272),exports__$2], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.exports.assets.export_shapes_event(exports__$2,"workspace:sidebar")], 0));
}
}));
var add_export = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (){
var xspec = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"png","png",551930691),new cljs.core.Keyword(null,"suffix","suffix",367373057),"",new cljs.core.Keyword(null,"scale","scale",-230427353),(1)], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids,(function (shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"exports","exports",-745008272),cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [xspec], null),new cljs.core.Keyword(null,"exports","exports",-745008272).cljs$core$IFn$_invoke$arity$1(shape)));
})));
}));
var delete_export = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (event){
var value = app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
var remove_fill_by_index = (function (values__$1,index){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filterv((function (p__55645){
var vec__55646 = p__55645;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55646,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55646,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(idx,index);
}),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(values__$1)));
});
var remove = (function (shape){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(shape,new cljs.core.Keyword(null,"exports","exports",-745008272),remove_fill_by_index,value);
});
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids,remove));
}));
var on_scale_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (index,event){
var scale = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(event);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids,(function (shape){
return cljs.core.assoc_in(shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exports","exports",-745008272),index,new cljs.core.Keyword(null,"scale","scale",-230427353)], null),scale);
})));
}));
var on_suffix_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (event){
var value = app.util.dom.get_target_val(event);
var index = app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids,(function (shape){
return cljs.core.assoc_in(shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exports","exports",-745008272),index,new cljs.core.Keyword(null,"suffix","suffix",367373057)], null),value);
})));
}));
var on_type_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (index,event){
var type__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids,(function (shape){
return cljs.core.assoc_in(shape,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"exports","exports",-745008272),index,new cljs.core.Keyword(null,"type","type",1174270348)], null),type__$1);
})));
}));
var on_remove_all = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids,(function (shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"exports","exports",-745008272),cljs.core.PersistentVector.EMPTY);
})));
}));
var manage_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var esc_QMARK_ = app.util.keyboard.esc_QMARK_(event);
if(cljs.core.truth_(esc_QMARK_)){
return app.util.dom.blur_BANG_(app.util.dom.get_target(event));
} else {
return null;
}
}));
var size_options = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"0.5",new cljs.core.Keyword(null,"label","label",1718410804),"0.5x"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"0.75",new cljs.core.Keyword(null,"label","label",1718410804),"0.75x"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"label","label",1718410804),"1x"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"1.5",new cljs.core.Keyword(null,"label","label",1718410804),"1.5x"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"2",new cljs.core.Keyword(null,"label","label",1718410804),"2x"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"4",new cljs.core.Keyword(null,"label","label",1718410804),"4x"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"6",new cljs.core.Keyword(null,"label","label",1718410804),"6x"], null)], null);
var format_options = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"png",new cljs.core.Keyword(null,"label","label",1718410804),"PNG"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"jpeg",new cljs.core.Keyword(null,"label","label",1718410804),"JPG"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"webp",new cljs.core.Keyword(null,"label","label",1718410804),"WEBP"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"svg",new cljs.core.Keyword(null,"label","label",1718410804),"SVG"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"pdf",new cljs.core.Keyword(null,"label","label",1718410804),"PDF"], null)], null);
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_exports__element-set",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_exports__element-title",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':has_exports_QMARK_,'collapsed':cljs.core.not(open_QMARK_),'onCollapsed':toggle_content,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1((((cljs.core.count(ids) > (1)))?"workspace.options.export-multiple":"workspace.options.export")),'className':(((!(has_exports_QMARK_)))?"main_ui_workspace_sidebar_options_menus_exports__title-spacing-export":""),'children':rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.export.add-export"),'onClick':add_export,'icon':app.main.ui.ds.foundations.assets.icon.add})})}),(cljs.core.truth_(open_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_exports__element-set-content",'children':[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),exports__$1))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_exports__multiple-exports",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_exports__label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple")}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_exports__actions",'children':rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.export.remove-export"),'onClick':on_remove_all,'icon':app.main.ui.ds.foundations.assets.icon.remove})})]}):((cljs.core.seq(exports__$1))?rumext.v2.jsx(rumext.v2.Fragment,{'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55653){
var vec__55654 = p__55653;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55654,(0),null);
var export$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55654,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_exports__element-group",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_exports__input-wrapper",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_exports__format-select",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':app.common.data.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(export$)),'options':format_options,'dropdown-class':"main_ui_workspace_sidebar_options_menus_exports__dropdown-upwards",'on-change':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_type_change,index)})}),(cljs.core.truth_((scale_enabled_QMARK_.cljs$core$IFn$_invoke$arity$1 ? scale_enabled_QMARK_.cljs$core$IFn$_invoke$arity$1(export$) : scale_enabled_QMARK_.call(null,export$)))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_exports__size-select",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(export$)),'options':size_options,'dropdown-class':"main_ui_workspace_sidebar_options_menus_exports__dropdown-upwards",'on-change':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_scale_change,index)})}):null),rumext.v2.jsx("label",{'htmlFor':"suffix-export-input",'className':"main_ui_workspace_sidebar_options_menus_exports__suffix-input",'children':rumext.v2.jsx("input",{'id':"suffix-export-input",'type':"text",'value':new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(export$),'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.export.suffix"),'data-value':cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),'onChange':on_suffix_change,'onKeyDown':manage_key_down,'className':"main_ui_workspace_sidebar_options_menus_exports__type-input"})})]}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.export.remove-export"),'onClick':delete_export,'data-value':index,'icon':app.main.ui.ds.foundations.assets.icon.remove})]},index));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(exports__$1))}):null)),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),exports__$1)) || (cljs.core.seq(exports__$1))))?rumext.v2.jsx("button",{'onClick':(cljs.core.truth_(in_progress_QMARK_)?null:on_download),'disabled':in_progress_QMARK_,'className':"main_ui_workspace_sidebar_options_menus_exports__export-btn"+" "+(cljs.core.truth_(in_progress_QMARK_)?"main_ui_workspace_sidebar_options_menus_exports__btn-disabled":""),'children':(cljs.core.truth_(in_progress_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.exporting-object"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.options.export-object",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(cljs.core.count(shapes_with_exports))], 0)))}):null)]}):null)]});
}));

(app.main.ui.workspace.sidebar.options.menus.exports.exports_menu_STAR_.displayName = "exports-menu*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.exports.js.map
