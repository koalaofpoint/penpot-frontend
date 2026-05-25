import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.constants.js";
import "./app.main.data.workspace.drawing.js";
import "./app.main.store.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.components.radio_buttons.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.drawing.frame');
app.main.ui.workspace.sidebar.options.drawing.frame.options_STAR_ = (function app$main$ui$workspace$sidebar$options$drawing$frame$options_STAR_(props_55326){
var drawing_state = props_55326.drawingState;
var show_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var show_QMARK_ = cljs.core.deref(show_STAR_);
var selected_preset_name_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var selected_preset_name = cljs.core.deref(selected_preset_name_STAR_);
var on_open = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_STAR_,true);
}));
var on_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_STAR_,false);
}));
var on_preset_selected = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var target = app.util.dom.get_current_target(event);
var name = app.util.dom.get_data(target,"name");
var width = app.common.data.read_string(app.util.dom.get_data(target,"width"));
var height = app.common.data.read_string(app.util.dom.get_data(target,"height"));
cljs.core.reset_BANG_(selected_preset_name_STAR_,name);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.drawing.set_default_size(width,height));
}));
var orientation = (cljs.core.truth_(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(drawing_state))?(((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(drawing_state) > new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(drawing_state)))?new cljs.core.Keyword(null,"horizontal","horizontal",2062109475):new cljs.core.Keyword(null,"vertical","vertical",718696748)):null);
var on_orientation_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (orientation__$1){
var orientation__$2 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(orientation__$1);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.drawing.change_orientation(orientation__$2));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_drawing_frame__presets",'children':[rumext.v2.jsxs("div",{'onClick':on_open,'className':"main_ui_workspace_sidebar_options_drawing_frame__presets-wrapper"+" "+(cljs.core.truth_(show_QMARK_)?"main_ui_workspace_sidebar_options_drawing_frame__opened":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_drawing_frame__select-name",'children':(function (){var or__5025__auto__ = selected_preset_name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.size-presets");
}
})()}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_drawing_frame__collapsed-icon",'children':app.main.ui.icons.arrow}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':show_QMARK_,'on-close':on_close,'children':rumext.v2.jsx("ul",{'className':"main_ui_workspace_sidebar_options_drawing_frame__custom-select-dropdown",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,preset){
out_arr__35152__auto__.push(((cljs.core.not(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(preset)))?rumext.v2.jsx("li",{'className':"main_ui_workspace_sidebar_options_drawing_frame__dropdown-element"+" "+"main_ui_workspace_sidebar_options_drawing_frame__disabled",'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_drawing_frame__preset-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(preset)})},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(preset)):(function (){var preset_match = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(preset),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(drawing_state))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(preset),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(drawing_state))));
return rumext.v2.jsxs("li",{'data-width':cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(preset)),'data-height':cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(preset)),'data-name':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(preset),'onClick':on_preset_selected,'className':"main_ui_workspace_sidebar_options_drawing_frame__dropdown-element"+" "+((preset_match)?"main_ui_workspace_sidebar_options_drawing_frame__match":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_drawing_frame__name-wrapper",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_drawing_frame__preset-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(preset)}),rumext.v2.jsxs("span",{'className':"main_ui_workspace_sidebar_options_drawing_frame__preset-size",'children':[new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(preset)," x ",new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(preset)]})]}),((preset_match)?rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_drawing_frame__check-icon",'children':app.main.ui.icons.tick}):null)]},new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(preset));
})()));

return out_arr__35152__auto__;
}),[],app.main.constants.size_presets)})})]}),rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':(function (){var or__5025__auto__ = app.common.data.name(orientation);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),'on-change':on_orientation_change,'name':"frame-orientation",'wide':true,'class':"main_ui_workspace_sidebar_options_drawing_frame__radio-buttons",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.size_vertical,'value':"vertical",'id':"size-vertical"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.size_horizontal,'value':"horizontal",'id':"size-horizontal"})]})]});
});

(app.main.ui.workspace.sidebar.options.drawing.frame.options_STAR_.displayName = "options*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.drawing.frame.js.map
