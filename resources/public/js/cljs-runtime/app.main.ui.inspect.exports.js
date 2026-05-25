import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.data.exports.assets.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.select.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.exports');
app.main.ui.inspect.exports.exports = (function (p1__53084_SHARP_){
return rumext.v2.memo.cljs$core$IFn$_invoke$arity$2(p1__53084_SHARP_,cljs.core._EQ_);
})((function app$main$ui$inspect$exports$exports(props_53087){
var map__53088 = rumext.v2.util.wrap_props(props_53087);
var map__53088__$1 = cljs.core.__destructure_map(map__53088);
var props = map__53088__$1;
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53088__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53088__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53088__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var share_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53088__$1,new cljs.core.Keyword(null,"share-id","share-id",795821204));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53088__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var exports__$1 = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var xstate = rumext.v2.deref(app.main.refs.export$);
var vstate = rumext.v2.deref(app.main.refs.viewer_data);
var page = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(vstate,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pages","pages",-285406513),page_id], null));
var filename = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(shapes),(1)))?(function (){var sname = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(shapes));
var suffix = new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.deref(exports__$1)));
var G__53089 = sname;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(cljs.core.deref(exports__$1)))) && ((!((suffix == null)))))){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53089),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
} else {
return G__53089;
}
})():new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(page));
var scale_enabled_QMARK_ = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (export$){
var G__53091 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(export$);
var fexpr__53090 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"png","png",551930691),null,new cljs.core.Keyword(null,"webp","webp",1501869900),null,new cljs.core.Keyword(null,"jpeg","jpeg",-646816934),null], null), null);
return (fexpr__53090.cljs$core$IFn$_invoke$arity$1 ? fexpr__53090.cljs$core$IFn$_invoke$arity$1(G__53091) : fexpr__53090.call(null,G__53091));
}));
var in_progress_QMARK_ = new cljs.core.Keyword(null,"in-progress","in-progress",2126442630).cljs$core$IFn$_invoke$arity$1(xstate);
var on_download = (function (event){
app.util.dom.prevent_default(event);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),type)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.exports.assets.show_viewer_export_dialog(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"shapes","shapes",1897594879),shapes,new cljs.core.Keyword(null,"exports","exports",-745008272),cljs.core.deref(exports__$1),new cljs.core.Keyword(null,"filename","filename",-1428840783),filename,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"share-id","share-id",795821204),share_id], null)));
} else {
var defaults = (function (){var G__53092 = new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"name","name",1843675177),filename,new cljs.core.Keyword(null,"object-id","object-id",-754527291),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(shapes))], null);
if(cljs.core.truth_(share_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53092,new cljs.core.Keyword(null,"share-id","share-id",795821204),share_id);
} else {
return G__53092;
}
})();
var exports__$2 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__53085_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__53085_SHARP_,defaults], 0));
}),cljs.core.deref(exports__$1));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.exports.assets.request_export(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"exports","exports",-745008272),exports__$2], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.exports.assets.export_shapes_event(exports__$2,"viewer")], 0));
}
});
var add_export = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (){
var xspec = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"png","png",551930691),new cljs.core.Keyword(null,"suffix","suffix",367373057),"",new cljs.core.Keyword(null,"scale","scale",-230427353),(1)], null);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(exports__$1,cljs.core.conj,xspec);
}));
var delete_export = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (index){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(exports__$1,(function (exports__$2){
var vec__53093 = cljs.core.split_at(index,exports__$2);
var before = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53093,(0),null);
var after = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53093,(1),null);
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(before,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.rest(after)], 0));
}));
}));
var on_scale_change = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (index,event){
var scale = app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(event);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(exports__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"scale","scale",-230427353)], null),scale);
}));
var on_suffix_change = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (event){
var value = app.util.dom.get_target_val(event);
var index = app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(exports__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"suffix","suffix",367373057)], null),value);
}));
var on_type_change = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (index,event){
var type__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(exports__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"type","type",1174270348)], null),type__$1);
}));
var manage_key_down = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
var esc_QMARK_ = app.util.keyboard.esc_QMARK_(event);
if(cljs.core.truth_(esc_QMARK_)){
return app.util.dom.blur_BANG_(app.util.dom.get_target(event));
} else {
return null;
}
}));
var size_options = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"0.5",new cljs.core.Keyword(null,"label","label",1718410804),"0.5x"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"0.75",new cljs.core.Keyword(null,"label","label",1718410804),"0.75x"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"1",new cljs.core.Keyword(null,"label","label",1718410804),"1x"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"1.5",new cljs.core.Keyword(null,"label","label",1718410804),"1.5x"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"2",new cljs.core.Keyword(null,"label","label",1718410804),"2x"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"4",new cljs.core.Keyword(null,"label","label",1718410804),"4x"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"6",new cljs.core.Keyword(null,"label","label",1718410804),"6x"], null)], null);
var format_options = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"png",new cljs.core.Keyword(null,"label","label",1718410804),"PNG"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"jpeg",new cljs.core.Keyword(null,"label","label",1718410804),"JPG"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"webp",new cljs.core.Keyword(null,"label","label",1718410804),"WEBP"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"svg",new cljs.core.Keyword(null,"label","label",1718410804),"SVG"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"pdf",new cljs.core.Keyword(null,"label","label",1718410804),"PDF"], null)], null);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes)],(function (){
return cljs.core.reset_BANG_(exports__$1,cljs.core.vec(cljs.core.distinct.cljs$core$IFn$_invoke$arity$1(cljs.core.flatten(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__53086_SHARP_){
return new cljs.core.Keyword(null,"exports","exports",-745008272).cljs$core$IFn$_invoke$arity$2(p1__53086_SHARP_,cljs.core.PersistentVector.EMPTY);
}),shapes)))));
}));

return rumext.v2.jsxs("div",{'className':"main_ui_inspect_exports__element-set",'children':[rumext.v2.jsx("div",{'className':"main_ui_inspect_exports__element-title",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':false,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.export"),'className':"main_ui_inspect_exports__title-spacing-export-viewer",'children':rumext.v2.jsx("button",{'onClick':add_export,'className':"main_ui_inspect_exports__add-export",'children':app.main.ui.icons.add})})}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),exports__$1))?rumext.v2.jsxs("div",{'className':"main_ui_inspect_exports__multiple-exports",'children':[rumext.v2.jsx("div",{'className':"main_ui_inspect_exports__label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple")}),rumext.v2.jsx("div",{'className':"main_ui_inspect_exports__actions",'children':rumext.v2.jsx("button",{'onClick':cljs.core.List.EMPTY,'className':"main_ui_inspect_exports__action-btn",'children':app.main.ui.icons.remove_icon})})]}):((cljs.core.seq(cljs.core.deref(exports__$1)))?rumext.v2.jsx("div",{'className':"main_ui_inspect_exports__element-set-content",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__53096){
var vec__53097 = p__53096;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53097,(0),null);
var export$ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53097,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsxs("div",{'className':"main_ui_inspect_exports__element-group",'children':[rumext.v2.jsxs("div",{'className':"main_ui_inspect_exports__input-wrapper",'children':[rumext.v2.jsx("div",{'className':"main_ui_inspect_exports__format-select",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':app.common.data.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(export$)),'options':format_options,'dropdown-class':"main_ui_inspect_exports__dropdown-upwards",'on-change':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_type_change,index)})}),(cljs.core.truth_((scale_enabled_QMARK_.cljs$core$IFn$_invoke$arity$1 ? scale_enabled_QMARK_.cljs$core$IFn$_invoke$arity$1(export$) : scale_enabled_QMARK_.call(null,export$)))?rumext.v2.jsx("div",{'className':"main_ui_inspect_exports__size-select",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(export$)),'options':size_options,'dropdown-class':"main_ui_inspect_exports__dropdown-upwards",'on-change':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_scale_change,index)})}):null),rumext.v2.jsx("label",{'htmlFor':"suffix-export-input",'className':"main_ui_inspect_exports__suffix-input",'children':rumext.v2.jsx("input",{'id':"suffix-export-input",'type':"text",'value':new cljs.core.Keyword(null,"suffix","suffix",367373057).cljs$core$IFn$_invoke$arity$1(export$),'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.export.suffix"),'data-value':cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),'onChange':on_suffix_change,'onKeyDown':manage_key_down,'className':"main_ui_inspect_exports__type-input"})})]}),rumext.v2.jsx("button",{'onClick':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(delete_export,index),'className':"main_ui_inspect_exports__action-btn",'children':app.main.ui.icons.remove_icon})]},index));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(exports__$1)))}):null)),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),exports__$1)) || (cljs.core.seq(cljs.core.deref(exports__$1)))))?rumext.v2.jsx("button",{'onClick':(cljs.core.truth_(in_progress_QMARK_)?null:on_download),'disabled':in_progress_QMARK_,'className':"main_ui_inspect_exports__export-btn"+" "+(cljs.core.truth_(in_progress_QMARK_)?"main_ui_inspect_exports__btn-disabled":""),'children':(cljs.core.truth_(in_progress_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.exporting-object"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.options.export-object",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(cljs.core.count(shapes))], 0)))}):null)]});
}));

(app.main.ui.inspect.exports.exports.displayName = "exports");


//# sourceMappingURL=app.main.ui.inspect.exports.js.map
