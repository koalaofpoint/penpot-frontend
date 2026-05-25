import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.types.color.js";
import "./app.main.data.exports.assets.js";
import "./app.main.data.modal.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.workspace.shapes.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.strings.js";
import "./app.util.theme.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.exports.assets');
app.main.ui.exports.assets.neutral_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_exports_assets__icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-msg-neutral"})});
app.main.ui.exports.assets.error_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_exports_assets__icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-delete-text"})});
app.main.ui.exports.assets.close_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_exports_assets__close-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-close"})});
app.main.ui.exports.assets.export_multiple_dialog_STAR_ = (function app$main$ui$exports$assets$export_multiple_dialog_STAR_(props_52858){
var cmd = props_52858.cmd;
var title = props_52858.title;
var no_selection = props_52858.noSelection;
var exports__$1 = props_52858.exports;
var origin = props_52858.origin;
var lstate = rumext.v2.deref(app.main.refs.export$);
var in_progress_QMARK_ = new cljs.core.Keyword(null,"in-progress","in-progress",2126442630).cljs$core$IFn$_invoke$arity$1(lstate);
var exports__$2 = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(exports__$1);
var all_exports = cljs.core.deref(exports__$2);
var all_checked_QMARK_ = cljs.core.every_QMARK_(new cljs.core.Keyword(null,"enabled","enabled",1195909756),all_exports);
var all_unchecked_QMARK_ = cljs.core.every_QMARK_(cljs.core.complement(new cljs.core.Keyword(null,"enabled","enabled",1195909756)),all_exports);
var enabled_exports = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"enabled","enabled",1195909756)),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__52855_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(p1__52855_SHARP_,new cljs.core.Keyword(null,"shape","shape",1190694006),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"enabled","enabled",1195909756)], 0));
}))),all_exports);
var cancel_fn = (function (event){
app.util.dom.prevent_default(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());
});
var accept_fn = (function (event){
app.util.dom.prevent_default(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.modal.hide(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.exports.assets.request_multiple_export(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"exports","exports",-745008272),enabled_exports,new cljs.core.Keyword(null,"cmd","cmd",-302931143),cmd], null)),app.main.data.exports.assets.export_shapes_event(enabled_exports,origin)], 0));
});
var on_toggle_enabled = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(exports__$2)],(function (event){
var index = app.common.data.parse_integer.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
if((!((index == null)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(exports__$2,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [index,new cljs.core.Keyword(null,"enabled","enabled",1195909756)], null),cljs.core.not);
} else {
return null;
}
}));
var change_all = (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(exports__$2,(function (exports__$3){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__52856_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__52856_SHARP_,new cljs.core.Keyword(null,"enabled","enabled",1195909756),(!(all_checked_QMARK_)));
}),exports__$3);
}));
});
return rumext.v2.jsx("div",{'className':"main_ui_exports_assets__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_exports_assets__modal-container"+" "+((cljs.core.empty_QMARK_(all_exports))?"main_ui_exports_assets__empty":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_exports_assets__modal-header",'children':[rumext.v2.jsx("h2",{'className':"main_ui_exports_assets__modal-title",'children':title}),rumext.v2.jsx("button",{'onClick':cancel_fn,'className':"main_ui_exports_assets__modal-close-btn",'children':app.main.ui.icons.close})]}),rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'className':"main_ui_exports_assets__modal-content",'children':(((cljs.core.count(all_exports) > (0)))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_exports_assets__selection-header",'children':[rumext.v2.jsx("button",{'onClick':change_all,'className':"main_ui_exports_assets__selection-btn",'children':rumext.v2.jsx("span",{'className':"main_ui_exports_assets__checkbox-wrapper",'children':((all_checked_QMARK_)?rumext.v2.jsx("span",{'className':"main_ui_exports_assets__checkobox-tick"+" "+"checked",'children':app.main.ui.icons.tick}):((all_unchecked_QMARK_)?rumext.v2.jsx("span",{'className':"main_ui_exports_assets__checkobox-tick"+" "+"uncheked"}):rumext.v2.jsx("span",{'className':"main_ui_exports_assets__checkobox-tick"+" "+"intermediate",'children':app.main.ui.icons.remove_icon})
))})}),rumext.v2.jsx("div",{'className':"main_ui_exports_assets__selection-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.export-multiple.selected",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(cljs.core.count(enabled_exports)),app.util.i18n.c(cljs.core.count(all_exports))], 0))})]}),rumext.v2.jsx("div",{'className':"main_ui_exports_assets__selection-wrapper",'children':rumext.v2.jsx("div",{'className':"main_ui_exports_assets__selection-list"+" "+(((cljs.core.count(all_exports) > (8)))?"main_ui_exports_assets__selection-shadow":""),'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__52886){
var vec__52887 = p__52886;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52887,(0),null);
var map__52890 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__52887,(1),null);
var map__52890__$1 = cljs.core.__destructure_map(map__52890);
var export$ = map__52890__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52890__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var suffix = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52890__$1,new cljs.core.Keyword(null,"suffix","suffix",367373057));
out_arr__35152__auto__.push((function (){var map__52891 = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape);
var map__52891__$1 = cljs.core.__destructure_map(map__52891);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52891__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52891__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52891__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52891__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return rumext.v2.jsx("div",{'className':"main_ui_exports_assets__selection-row",'children':rumext.v2.jsxs("button",{'data-value':cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),'onClick':on_toggle_enabled,'className':"main_ui_exports_assets__selection-btn",'children':[rumext.v2.jsx("span",{'className':"main_ui_exports_assets__checkbox-wrapper",'children':(cljs.core.truth_(new cljs.core.Keyword(null,"enabled","enabled",1195909756).cljs$core$IFn$_invoke$arity$1(export$))?rumext.v2.jsx("span",{'className':"main_ui_exports_assets__checkobox-tick"+" "+"checked",'children':app.main.ui.icons.tick}):rumext.v2.jsx("span",{'className':"main_ui_exports_assets__checkobox-tick"+" "+"uncheked"}))}),rumext.v2.jsx("div",{'className':"main_ui_exports_assets__image-wrapper",'children':(((!((new cljs.core.Keyword(null,"thumbnail","thumbnail",-867906798).cljs$core$IFn$_invoke$arity$1(shape) == null))))?rumext.v2.jsx("img",{'src':new cljs.core.Keyword(null,"thumbnail","thumbnail",-867906798).cljs$core$IFn$_invoke$arity$1(shape)}):rumext.v2.jsx("svg",{'width':(24),'xmlns':"http://www.w3.org/2000/svg",'height':(20),'children':rumext.v2.jsx(app.main.ui.workspace.shapes.shape_wrapper,{'shape':shape}),'viewBox':""+(x ?? "")+" "+(y ?? "")+" "+(width ?? "")+" "+(height ?? ""),'style':{'WebkitPrintColorAdjust':new cljs.core.Keyword(null,"exact","exact",1438022323)},'xmlnsXlink':"http://www.w3.org/1999/xlink",'fill':"none",'version':"1.1"}))}),rumext.v2.jsx("div",{'className':"main_ui_exports_assets__selection-name",'children':(function (){var G__52893 = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(suffix)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52893),cljs.core.str.cljs$core$IFn$_invoke$arity$1(suffix)].join('');
} else {
return G__52893;
}
})()}),(cljs.core.truth_(new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(export$))?rumext.v2.jsx("div",{'className':"main_ui_exports_assets__selection-scale",'children':""+(app.util.strings.format_precision((width * new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(export$)),(2)) ?? "")+"x"+(app.util.strings.format_precision((height * new cljs.core.Keyword(null,"scale","scale",-230427353).cljs$core$IFn$_invoke$arity$1(export$)),(2)) ?? "")}):null),(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(export$))?rumext.v2.jsx("div",{'className':"main_ui_exports_assets__selection-extension",'children':cuerdas.core.upper(app.common.data.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(export$)))}):null)]})},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape));
})());

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(cljs.core.deref(exports__$2)))})})]}):rumext.v2.jsx(no_selection,{}))}),(((cljs.core.count(all_exports) > (0)))?rumext.v2.jsx("div",{'className':"main_ui_exports_assets__modal-footer",'children':rumext.v2.jsxs("div",{'className':"main_ui_exports_assets__action-buttons",'children':[rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.cancel"),'onClick':cancel_fn,'className':"main_ui_exports_assets__cancel-button"}),rumext.v2.jsx("input",{'disabled':(function (){var or__5025__auto__ = in_progress_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return all_unchecked_QMARK_;
}
})(),'type':"button",'value':(cljs.core.truth_(in_progress_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.exporting-object"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.export")),'onClick':(cljs.core.truth_(in_progress_QMARK_)?null:accept_fn),'className':"main_ui_exports_assets__accept-btn"+" "+(cljs.core.truth_((function (){var or__5025__auto__ = in_progress_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return all_unchecked_QMARK_;
}
})())?"main_ui_exports_assets__btn-disabled":"")})]})}):null)]})]})});
});

(app.main.ui.exports.assets.export_multiple_dialog_STAR_.displayName = "export-multiple-dialog*");

app.main.ui.exports.assets.shapes_no_selection = (function app$main$ui$exports$assets$shapes_no_selection(props_52894){
return rumext.v2.jsxs("div",{'className':"main_ui_exports_assets__no-selection",'children':[rumext.v2.jsx("p",{'className':"main_ui_exports_assets__modal-msg",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.export-shapes.no-elements")}),rumext.v2.jsx("p",{'className':"main_ui_exports_assets__modal-scd-msg",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.export-shapes.how-to")}),rumext.v2.jsx("a",{'target':"_blank",'href':"https://help.penpot.app/user-guide/exporting/ ",'className':"main_ui_exports_assets__modal-link",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.export-shapes.how-to-link")})]});
});

(app.main.ui.exports.assets.shapes_no_selection.displayName = "shapes-no-selection");

app.main.ui.exports.assets.export_shapes_dialog = (function app$main$ui$exports$assets$export_shapes_dialog(props_52924){
var map__52925 = rumext.v2.util.wrap_props(props_52924);
var map__52925__$1 = cljs.core.__destructure_map(map__52925);
var exports__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52925__$1,new cljs.core.Keyword(null,"exports","exports",-745008272));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52925__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var title = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.export-shapes.title");
return rumext.v2.jsx(app.main.ui.exports.assets.export_multiple_dialog_STAR_,{'exports':exports__$1,'title':title,'cmd':new cljs.core.Keyword(null,"export-shapes","export-shapes",341502938),'noSelection':app.main.ui.exports.assets.shapes_no_selection,'origin':origin});
});

(app.main.ui.exports.assets.export_shapes_dialog.displayName = "export-shapes-dialog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"export-shapes","export-shapes",341502938),app.main.ui.exports.assets.export_shapes_dialog);
}));
app.main.ui.exports.assets.export_frames = (function app$main$ui$exports$assets$export_frames(props_52929){
var map__52930 = rumext.v2.util.wrap_props(props_52929);
var map__52930__$1 = cljs.core.__destructure_map(map__52930);
var exports__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52930__$1,new cljs.core.Keyword(null,"exports","exports",-745008272));
var origin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52930__$1,new cljs.core.Keyword(null,"origin","origin",1037372088));
var title = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.export-frames.title");
return rumext.v2.jsx(app.main.ui.exports.assets.export_multiple_dialog_STAR_,{'exports':exports__$1,'title':title,'cmd':new cljs.core.Keyword(null,"export-frames","export-frames",-511225256),'origin':origin});
});

(app.main.ui.exports.assets.export_frames.displayName = "export-frames");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"export-frames","export-frames",-511225256),app.main.ui.exports.assets.export_frames);
}));
app.main.ui.exports.assets.progress_widget = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$exports$assets$progress_widget(props_52931){
var state = rumext.v2.deref(app.main.refs.export$);
var profile = rumext.v2.deref(app.main.refs.profile);
var theme = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(profile);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "dark";
}
})();
var is_default_theme_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("dark",theme);
var error_QMARK_ = new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(state);
var healthy_QMARK_ = new cljs.core.Keyword(null,"healthy?","healthy?",1027593366).cljs$core$IFn$_invoke$arity$1(state);
var detail_visible_QMARK_ = new cljs.core.Keyword(null,"detail-visible","detail-visible",-1852231289).cljs$core$IFn$_invoke$arity$1(state);
var widget_visible_QMARK_ = new cljs.core.Keyword(null,"widget-visible","widget-visible",939047906).cljs$core$IFn$_invoke$arity$1(state);
var progress = new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(state);
var items = new cljs.core.Keyword(null,"exports","exports",-745008272).cljs$core$IFn$_invoke$arity$1(state);
var total = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(state);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.count(items);
}
})();
var complete_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(progress,total);
var circ = (((2) * Math.PI) * (12));
var pct = (((total === (0)))?circ:(circ - (circ * (progress / total))));
var pwidth = (cljs.core.truth_(error_QMARK_)?(280):((progress * (280)) / total));
var color = (cljs.core.truth_(error_QMARK_)?"#ff3277":(cljs.core.truth_(healthy_QMARK_)?((is_default_theme_QMARK_)?"#7efff5":"#6911d4"):((cljs.core.not(healthy_QMARK_))?"#fe4811":null)));
var background_clr = ((is_default_theme_QMARK_)?"#2e3434":"#eef0f2");
var title = (cljs.core.truth_(error_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.exporting-object-error"):((complete_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.exporting-complete"):(cljs.core.truth_(healthy_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.exporting-object"):((cljs.core.not(healthy_QMARK_))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.exporting-object-slow"):null))));
var retry_last_operation = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.exports.assets.retry_last_export());
}));
var toggle_detail_visibility = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.exports.assets.toggle_detail_visibililty());
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_(widget_visible_QMARK_)?rumext.v2.jsx("div",{'onClick':toggle_detail_visibility,'className':"main_ui_exports_assets__export-progress-widget",'children':rumext.v2.jsxs("svg",{'width':"24",'height':"24",'children':[rumext.v2.jsx("circle",{'r':"10",'cx':"12",'cy':"12",'fill':"transparent",'stroke':background_clr,'strokeWidth':"4"}),rumext.v2.jsx("circle",{'cy':"12",'transform':"rotate(-90 12,12)",'strokeDasharray':""+(circ ?? "")+" "+(circ ?? ""),'stroke':color,'style':{'transition':"stroke-dashoffset 1s ease-in-out"},'fill':"transparent",'strokeWidth':"4",'r':"10",'strokeDashoffset':pct,'cx':"12"})]})}):null),(cljs.core.truth_(detail_visible_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_exports_assets__export-progress-modal"+" "+(cljs.core.truth_(error_QMARK_)?"main_ui_exports_assets__has-error":""),'children':[(cljs.core.truth_(error_QMARK_)?app.main.ui.exports.assets.error_icon:app.main.ui.exports.assets.neutral_icon),rumext.v2.jsxs("div",{'className':"main_ui_exports_assets__export-progress-title",'children':[rumext.v2.jsx("div",{'className':"main_ui_exports_assets__title-text",'children':title}),(cljs.core.truth_(error_QMARK_)?rumext.v2.jsx("button",{'onClick':retry_last_operation,'className':"main_ui_exports_assets__retry-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.retry")}):rumext.v2.jsx("span",{'className':"main_ui_exports_assets__progress",'children':""+(progress ?? "")+" / "+(total ?? "")}))]}),rumext.v2.jsx("button",{'onClick':toggle_detail_visibility,'className':"main_ui_exports_assets__progress-close-button",'children':app.main.ui.exports.assets.close_icon}),(cljs.core.truth_(error_QMARK_)?null:rumext.v2.jsx("svg",{'height':(4),'width':(280),'className':"main_ui_exports_assets__progress-bar",'children':rumext.v2.jsxs("g",{'children':[rumext.v2.jsx("path",{'d':"M0 0 L280 0",'stroke':background_clr,'strokeWidth':(30)}),rumext.v2.jsx("path",{'d':""+"M0 0 L280 0",'stroke':color,'strokeWidth':(30),'fill':"transparent",'strokeDasharray':(280),'strokeDashoffset':((280) - pwidth),'style':{'transition':"stroke-dashoffset 1s ease-in-out"}})]})}))]}):null)]});
}));

(app.main.ui.exports.assets.progress_widget.displayName = "progress-widget");


//# sourceMappingURL=app.main.ui.exports.assets.js.map
