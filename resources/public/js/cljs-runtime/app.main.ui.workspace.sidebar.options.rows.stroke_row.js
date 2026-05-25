import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.types.color.js";
import "./app.main.data.workspace.tokens.application.js";
import "./app.main.features.js";
import "./app.main.store.js";
import "./app.main.ui.components.numeric_input.js";
import "./app.main.ui.components.reorder_handler.js";
import "./app.main.ui.components.select.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.js";
import "./app.main.ui.workspace.sidebar.options.rows.color_row.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.rows.stroke_row');
app.main.ui.workspace.sidebar.options.rows.stroke_row.stroke_row_STAR_ = (function app$main$ui$workspace$sidebar$options$rows$stroke_row$stroke_row_STAR_(props_55789){
var on_remove = props_55789.onRemove;
var on_detach_token = props_55789.onDetachToken;
var on_stroke_style_change = props_55789.onStrokeStyleChange;
var stroke = props_55789.stroke;
var select_on_focus = props_55789.selectOnFocus;
var index = props_55789.index;
var on_stroke_alignment_change = props_55789.onStrokeAlignmentChange;
var disable_stroke_style = props_55789.disableStrokeStyle;
var disable_drag = props_55789.disableDrag;
var on_focus = props_55789.onFocus;
var on_stroke_width_change = props_55789.onStrokeWidthChange;
var on_blur = props_55789.onBlur;
var ids = props_55789.ids;
var on_stroke_cap_start_change = props_55789.onStrokeCapStartChange;
var title = props_55789.title;
var on_reorder = props_55789.onReorder;
var on_color_change = props_55789.onColorChange;
var on_stroke_cap_switch = props_55789.onStrokeCapSwitch;
var show_caps = props_55789.showCaps;
var on_stroke_cap_end_change = props_55789.onStrokeCapEndChange;
var applied_tokens = props_55789.appliedTokens;
var on_color_detach = props_55789.onColorDetach;
var token_numeric_inputs = app.main.features.use_feature("tokens/numeric-input");
var on_drop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_reorder),rumext.v2.adapt(index)],(function (relative_pos,data){
var from_pos = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(data);
var to_space_between_pos = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(relative_pos,new cljs.core.Keyword(null,"bot","bot",-950896508)))?(index + (1)):index);
return (on_reorder.cljs$core$IFn$_invoke$arity$2 ? on_reorder.cljs$core$IFn$_invoke$arity$2(from_pos,to_space_between_pos) : on_reorder.call(null,from_pos,to_space_between_pos));
}));
var vec__55790 = (((!((on_reorder == null))))?app.main.ui.hooks.use_sortable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data-type","data-type",-326421468),"penpot/stroke-row",new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),on_drop,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),cljs.core.deref(disable_drag),new cljs.core.Keyword(null,"detect-center?","detect-center?",1398000690),false,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),index], null)], 0)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var dprops = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55790,(0),null);
var dref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55790,(1),null);
var stroke_color_token = new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937).cljs$core$IFn$_invoke$arity$1(applied_tokens);
var on_color_change_refactor = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(on_color_change)],(function (color){
return (on_color_change.cljs$core$IFn$_invoke$arity$2 ? on_color_change.cljs$core$IFn$_invoke$arity$2(index,color) : on_color_change.call(null,index,color));
}));
var on_color_detach__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(on_color_detach)],(function (_,color){
return (on_color_detach.cljs$core$IFn$_invoke$arity$2 ? on_color_detach.cljs$core$IFn$_invoke$arity$2(index,color) : on_color_detach.call(null,index,color));
}));
var on_remove__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(on_remove)],(function (){
return (on_remove.cljs$core$IFn$_invoke$arity$1 ? on_remove.cljs$core$IFn$_invoke$arity$1(index) : on_remove.call(null,index));
}));
var stroke_width = new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$1(stroke);
var on_width_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(on_stroke_width_change)],(function (value){
if(((typeof value === 'string') || (typeof value === 'number'))){
return (on_stroke_width_change.cljs$core$IFn$_invoke$arity$2 ? on_stroke_width_change.cljs$core$IFn$_invoke$arity$2(index,value) : on_stroke_width_change.call(null,index,value));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.toggle_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token","token",-1211463215),cljs.core.first(value),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null], null), null),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}
}));
var stroke_alignment = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340).cljs$core$IFn$_invoke$arity$1(stroke);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"center","center",-748944368);
}
})();
var stroke_alignment_options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(stroke_alignment)],(function (){
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),stroke_alignment))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"label","label",1718410804),"--"], null)], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke.center")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"inner","inner",-1383171215),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke.inner")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"outer","outer",-375185956),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke.outer")], null)], null)], 0));
}));
var on_alignment_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(on_stroke_alignment_change)],(function (p1__55785_SHARP_){
var G__55793 = index;
var G__55794 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__55785_SHARP_);
return (on_stroke_alignment_change.cljs$core$IFn$_invoke$arity$2 ? on_stroke_alignment_change.cljs$core$IFn$_invoke$arity$2(G__55793,G__55794) : on_stroke_alignment_change.call(null,G__55793,G__55794));
}));
var on_token_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (_,token){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.toggle_token(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),null], null), null),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids,new cljs.core.Keyword(null,"expand-with-children","expand-with-children",-1923116463),true], null)));
}));
var stroke_style = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146).cljs$core$IFn$_invoke$arity$1(stroke);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"solid","solid",-2023773691);
}
})();
var stroke_style_options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(stroke_style)],(function (){
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),stroke_style))?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"label","label",1718410804),"--"], null)], null):null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"solid","solid",-2023773691),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke.solid")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"dotted","dotted",-1504510307),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke.dotted")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"dashed","dashed",-1449249319),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke.dashed")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"mixed","mixed",737211760),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke.mixed")], null)], null)], 0));
}));
var on_style_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(on_stroke_style_change)],(function (p1__55786_SHARP_){
var G__55795 = index;
var G__55796 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__55786_SHARP_);
return (on_stroke_style_change.cljs$core$IFn$_invoke$arity$2 ? on_stroke_style_change.cljs$core$IFn$_invoke$arity$2(G__55795,G__55796) : on_stroke_style_change.call(null,G__55795,G__55796));
}));
var on_caps_start_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(on_stroke_cap_start_change)],(function (p1__55787_SHARP_){
var G__55797 = index;
var G__55798 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__55787_SHARP_);
return (on_stroke_cap_start_change.cljs$core$IFn$_invoke$arity$2 ? on_stroke_cap_start_change.cljs$core$IFn$_invoke$arity$2(G__55797,G__55798) : on_stroke_cap_start_change.call(null,G__55797,G__55798));
}));
var on_caps_end_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(on_stroke_cap_end_change)],(function (p1__55788_SHARP_){
var G__55799 = index;
var G__55800 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(p1__55788_SHARP_);
return (on_stroke_cap_end_change.cljs$core$IFn$_invoke$arity$2 ? on_stroke_cap_end_change.cljs$core$IFn$_invoke$arity$2(G__55799,G__55800) : on_stroke_cap_end_change.call(null,G__55799,G__55800));
}));
var on_detach_token_color = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_detach_token)],(function (token){
var G__55801 = token;
var G__55802 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),null], null), null);
return (on_detach_token.cljs$core$IFn$_invoke$arity$2 ? on_detach_token.cljs$core$IFn$_invoke$arity$2(G__55801,G__55802) : on_detach_token.call(null,G__55801,G__55802));
}));
var on_detach_token_width = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_detach_token)],(function (token){
var G__55803 = cljs.core.first(token);
var G__55804 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),null], null), null);
return (on_detach_token.cljs$core$IFn$_invoke$arity$2 ? on_detach_token.cljs$core$IFn$_invoke$arity$2(G__55803,G__55804) : on_detach_token.call(null,G__55803,G__55804));
}));
var stroke_caps_options = new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke-cap.none")], null),new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"line-arrow","line-arrow",-1440558012),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke-cap.line-arrow-short"),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"stroke-arrow","stroke-arrow",-1800437183)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"triangle-arrow","triangle-arrow",270775124),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke-cap.triangle-arrow-short"),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"stroke-triangle","stroke-triangle",850121987)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"square-marker","square-marker",-789240803),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke-cap.square-marker-short"),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"stroke-rectangle","stroke-rectangle",-1801371204)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"circle-marker","circle-marker",-241178759),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke-cap.circle-marker-short"),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"stroke-circle","stroke-circle",-305167974)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"diamond-marker","diamond-marker",-496524178),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke-cap.diamond-marker-short"),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"stroke-diamond","stroke-diamond",1245033185)], null),new cljs.core.Keyword(null,"separator","separator",-1628749125),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"round","round",2009433328),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke-cap.round"),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"stroke-rounded","stroke-rounded",-1649675426)], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"square","square",812434677),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke-cap.square"),new cljs.core.Keyword(null,"icon","icon",1679606541),new cljs.core.Keyword(null,"stroke-squared","stroke-squared",1558407903)], null)], null);
var on_cap_switch = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(on_stroke_cap_switch)],(function (){
return (on_stroke_cap_switch.cljs$core$IFn$_invoke$arity$1 ? on_stroke_cap_switch.cljs$core$IFn$_invoke$arity$1(index) : on_stroke_cap_switch.call(null,index));
}));
return rumext.v2.jsxs("div",{'aria-label':["stroke-row-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join(''),'className':"main_ui_workspace_sidebar_options_rows_stroke_row__stroke-data"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"top","top",-1856271961)))?"main_ui_workspace_sidebar_options_rows_stroke_row__dnd-over-top":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"bot","bot",-950896508)))?"main_ui_workspace_sidebar_options_rows_stroke_row__dnd-over-bot":""),'children':[(((!((on_reorder == null))))?rumext.v2.jsx(app.main.ui.components.reorder_handler.reorder_handler_STAR_,{'ref':dref}):null),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.rows.color_row.color_row_STAR_,{'onRemove':on_remove__$1,'origin':new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),'index':index,'onChange':on_color_change_refactor,'selectOnFocus':select_on_focus,'onTokenChange':on_token_change,'disableDrag':disable_drag,'onDetachToken':on_detach_token_color,'appliedToken':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(0)))?stroke_color_token:null),'onFocus':on_focus,'onDetach':on_color_detach__$1,'onBlur':on_blur,'title':title,'color':app.common.types.color.stroke__GT_color(stroke)}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_rows_stroke_row__stroke-options",'children':[((token_numeric_inputs)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.input_wrapper_tokens.numeric_input_wrapper_STAR_,{'min':(0),'onChange':on_width_change,'className':"main_ui_workspace_sidebar_options_rows_stroke_row__numeric-input-wrapper",'attr':new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),'appliedToken':cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435)),'value':stroke_width,'onFocus':on_focus,'onDetach':on_detach_token_width,'property':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke-width"),'onBlur':on_blur,'icon':app.main.ui.ds.foundations.assets.icon.stroke_size}):rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke-width"),'className':"main_ui_workspace_sidebar_options_rows_stroke_row__stroke-width-input",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.stroke_size,'size':"s"}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'value':stroke_width,'min':(0),'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"),'onChange':on_width_change,'onFocus':on_focus,'selectOnFocus':select_on_focus,'onBlur':on_blur})]})),rumext.v2.jsx("div",{'data-testid':"stroke.alignment",'className':"main_ui_workspace_sidebar_options_rows_stroke_row__stroke-alignment-select",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':stroke_alignment,'options':stroke_alignment_options,'on-change':on_alignment_change})}),(cljs.core.truth_(disable_stroke_style)?null:rumext.v2.jsx("div",{'data-testid':"stroke.style",'className':"main_ui_workspace_sidebar_options_rows_stroke_row__stroke-style-select",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':stroke_style,'options':stroke_style_options,'on-change':on_style_change})}))]}),(cljs.core.truth_(show_caps)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_rows_stroke_row__stroke-caps-options",'children':[rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':new cljs.core.Keyword(null,"stroke-cap-start","stroke-cap-start",-2018645757).cljs$core$IFn$_invoke$arity$1(stroke),'options':stroke_caps_options,'on-change':on_caps_start_change}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"secondary",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.switch"),'onClick':on_cap_switch,'icon':app.main.ui.ds.foundations.assets.icon.switch$}),rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':new cljs.core.Keyword(null,"stroke-cap-end","stroke-cap-end",-411370737).cljs$core$IFn$_invoke$arity$1(stroke),'options':stroke_caps_options,'on-change':on_caps_end_change})]}):null)]});
});

(app.main.ui.workspace.sidebar.options.rows.stroke_row.stroke_row_STAR_.displayName = "stroke-row*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.rows.stroke_row.js.map
