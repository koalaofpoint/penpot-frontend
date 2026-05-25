import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.types.color.js";
import "./app.common.types.shape.attrs.js";
import "./app.common.types.token.js";
import "./app.config.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.colors.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.color_input.js";
import "./app.main.ui.components.numeric_input.js";
import "./app.main.ui.components.reorder_handler.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.tooltip.tooltip.js";
import "./app.main.ui.ds.utilities.swatch.js";
import "./app.main.ui.formats.js";
import "./app.main.ui.hooks.js";
import "./app.util.color.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.rows.color_row');
app.main.ui.workspace.sidebar.options.rows.color_row.opacity__GT_string = (function app$main$ui$workspace$sidebar$options$rows$color_row$opacity__GT_string(opacity){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(opacity,new cljs.core.Keyword(null,"multiple","multiple",1244445549))){
return "";
} else {
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1((app.common.data.coalesce(opacity,(1)) * (100))));
}
});
app.main.ui.workspace.sidebar.options.rows.color_row.color_info_wrapper_STAR_ = (function app$main$ui$workspace$sidebar$options$rows$color_row$color_info_wrapper_STAR_(props_54768){
var handle_click_color = props_54768.handleClickColor;
var children = props_54768.children;
var select_on_focus = props_54768.selectOnFocus;
var color = props_54768.color;
var on_focus = props_54768.onFocus;
var on_blur = props_54768.onBlur;
var on_opacity_change = props_54768.onOpacityChange;
var opacity = props_54768.opacity;
var class$ = props_54768.className;
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_rows_color_row__color-info",'children':[rumext.v2.jsxs("div",{'className':class$,'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_rows_color_row__color-bullet-wrapper",'children':rumext.v2.jsx(app.main.ui.ds.utilities.swatch.swatch_STAR_,{'background':color,'onClick':handle_click_color,'size':"small"})}),children]}),(cljs.core.truth_(opacity)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_rows_color_row__opacity-element-wrapper",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_rows_color_row__icon-text",'children':"%"}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'min':(0),'onChange':on_opacity_change,'className':"main_ui_workspace_sidebar_options_rows_color_row__opacity-input",'placeholder':"--",'selectOnFocus':select_on_focus,'max':(100),'data-testid':"opacity-input",'value':app.main.ui.workspace.sidebar.options.rows.color_row.opacity__GT_string(new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color)),'onFocus':on_focus,'onBlur':on_blur,'default':(100)})]}):null)]});
});

(app.main.ui.workspace.sidebar.options.rows.color_row.color_info_wrapper_STAR_.displayName = "color-info-wrapper*");

app.main.ui.workspace.sidebar.options.rows.color_row.color_token_row_STAR_ = (function app$main$ui$workspace$sidebar$options$rows$color_row$color_token_row_STAR_(props_54770){
var detach_token = props_54770.detachToken;
var color = props_54770.color;
var applied_token_name = props_54770.appliedTokenName;
var on_swatch_click_token = props_54770.onSwatchClickToken;
var open_modal_from_token = props_54770.openModalFromToken;
var active_tokens = props_54770.activeTokens;
var active_tokens__$1 = ((cljs.core.delay_QMARK_(active_tokens))?cljs.core.deref(active_tokens):active_tokens);
var active_color_tokens = new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(active_tokens__$1);
var token = cljs.core.some((function (p1__54769_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__54769_SHARP_),applied_token_name)){
return p1__54769_SHARP_;
} else {
return null;
}
}),active_color_tokens);
var on_detach_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(detach_token),rumext.v2.adapt(token),rumext.v2.adapt(applied_token_name)],(function (){
var token_name = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return applied_token_name;
}
})();
return (detach_token.cljs$core$IFn$_invoke$arity$1 ? detach_token.cljs$core$IFn$_invoke$arity$1(token_name) : detach_token.call(null,token_name));
}));
var has_errors = (!((new cljs.core.Keyword(null,"errors","errors",-908790718).cljs$core$IFn$_invoke$arity$1(token) == null)));
var token_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token);
var resolved = new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626).cljs$core$IFn$_invoke$arity$1(token);
var not_active = ((cljs.core.empty_QMARK_(active_tokens__$1)) || ((token == null)));
var id = ""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token) ?? "")+"-name";
var token_name_ref = rumext.v2.use_ref(null);
var swatch_tooltip_content = ((not_active)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.inputs.token-field.no-active-token-option"):((has_errors)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("color-row.token-color-row.deleted-token"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.resolved-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resolved], 0))
));
var name_tooltip_content = ((not_active)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.inputs.token-field.no-active-token-option"):((has_errors)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("color-row.token-color-row.deleted-token"):(function (){
return rumext.v2.jsxs("div",{'children':[rumext.v2.jsx("span",{'children':""+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.token-name") ?? "")+": "}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_rows_color_row__token-name-tooltip",'children':applied_token_name})]});
})
));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_rows_color_row__color-info",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_rows_color_row__token-color-wrapper"+" "+((has_errors)?"main_ui_workspace_sidebar_options_rows_color_row__token-color-with-errors":"")+" "+((not_active)?"main_ui_workspace_sidebar_options_rows_color_row__token-color-not-active":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_rows_color_row__color-bullet-wrapper",'children':[((((has_errors) || (not_active)))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_rows_color_row__error-dot"}):null),rumext.v2.jsx(app.main.ui.ds.utilities.swatch.swatch_STAR_,{'background':color,'tooltipContent':swatch_tooltip_content,'onClick':on_swatch_click_token,'hasErrors':((has_errors) || (not_active)),'size':"small"})]}),rumext.v2.jsx(app.main.ui.ds.tooltip.tooltip.tooltip_STAR_,{'content':name_tooltip_content,'id':id,'aria-label':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.token-name")),": ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(applied_token_name)].join(''),'triggerRef':token_name_ref,'className':"main_ui_workspace_sidebar_options_rows_color_row__token-tooltip",'children':rumext.v2.jsx("div",{'ref':token_name_ref,'aria-labelledby':id,'className':"main_ui_workspace_sidebar_options_rows_color_row__token-name",'children':(function (){var or__5025__auto__ = token_name;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return applied_token_name;
}
})()})}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_rows_color_row__token-actions",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"action",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.inputs.token-field.detach-token"),'onClick':on_detach_token,'icon':app.main.ui.ds.foundations.assets.icon.detach}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"action",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.inputs.numeric-input.open-token-list-dropdown"),'onClick':open_modal_from_token,'icon':app.main.ui.ds.foundations.assets.icon.tokens})]})]})});
});

(app.main.ui.workspace.sidebar.options.rows.color_row.color_token_row_STAR_.displayName = "color-token-row*");

app.main.ui.workspace.sidebar.options.rows.color_row.color_row_STAR_ = (function app$main$ui$workspace$sidebar$options$rows$color_row$color_row_STAR_(props_54795){
var on_change = props_54795.onChange;
var on_remove = props_54795.onRemove;
var on_open = props_54795.onOpen;
var on_detach_token = props_54795.onDetachToken;
var disable_picker = props_54795.disablePicker;
var disable_gradient = props_54795.disableGradient;
var disable_opacity = props_54795.disableOpacity;
var on_token_change = props_54795.onTokenChange;
var select_on_focus = props_54795.selectOnFocus;
var select_only = props_54795.selectOnly;
var index = props_54795.index;
var color = props_54795.color;
var disable_image = props_54795.disableImage;
var on_close = props_54795.onClose;
var disable_drag = props_54795.disableDrag;
var on_focus = props_54795.onFocus;
var on_blur = props_54795.onBlur;
var applied_token = props_54795.appliedToken;
var on_reorder = props_54795.onReorder;
var class$ = props_54795.className;
var hidden = props_54795.hidden;
var on_detach = props_54795.onDetach;
var origin = props_54795.origin;
var token_color = cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"token-color","token-color",875683372));
var libraries = rumext.v2.deref(app.main.refs.files);
var color_without_hash = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color)],(function (){
return app.common.types.color.remove_hash(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color));
}));
var file_id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"ref-file","ref-file",255004238).cljs$core$IFn$_invoke$arity$1(color);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(color);
}
})();
var color_id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884).cljs$core$IFn$_invoke$arity$1(color);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color);
}
})();
var src_colors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,file_id),new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"colors","colors",1157174732));
var color_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(src_colors,color_id),new cljs.core.Keyword(null,"name","name",1843675177));
var has_multiple_colors = app.util.color.multiple_QMARK_(color);
var library_color_QMARK_ = (function (){var and__5023__auto__ = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884).cljs$core$IFn$_invoke$arity$1(color);
}
})();
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = color_name;
if(cljs.core.truth_(and__5023__auto____$1)){
return (!(has_multiple_colors));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
var gradient_color_QMARK_ = (function (){var and__5023__auto__ = (!(has_multiple_colors));
if(and__5023__auto__){
var and__5023__auto____$1 = new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color);
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"gradient","gradient",-1983908971)),new cljs.core.Keyword(null,"type","type",1174270348));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
var image_color_QMARK_ = (function (){var and__5023__auto__ = (!(has_multiple_colors));
if(and__5023__auto__){
return new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(color);
} else {
return and__5023__auto__;
}
})();
var editing_text_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var is_editing_text = cljs.core.deref(editing_text_STAR_);
var active_tokens_STAR_ = rumext.v2.use_ctx(app.main.ui.context.active_tokens_by_type);
var tokens = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(active_tokens_STAR_),rumext.v2.adapt(origin)],(function (){
var origin__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"color-selection","color-selection",923516039),origin))?new cljs.core.Keyword(null,"fill","fill",883462889):origin);
return (new cljs.core.Delay((function (){
return cljs.core.not_empty(cljs.core.select_keys(cljs.core.deref(active_tokens_STAR_),cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.token.tokens_by_input,origin__$1)));
}),null));
}));
var on_focus_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_focus)],(function (_){
cljs.core.reset_BANG_(editing_text_STAR_,true);

if(cljs.core.truth_(on_focus)){
return (on_focus.cljs$core$IFn$_invoke$arity$0 ? on_focus.cljs$core$IFn$_invoke$arity$0() : on_focus.call(null));
} else {
return null;
}
}));
var on_blur_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_blur)],(function (_){
cljs.core.reset_BANG_(editing_text_STAR_,false);

if(cljs.core.truth_(on_blur)){
return (on_blur.cljs$core$IFn$_invoke$arity$0 ? on_blur.cljs$core$IFn$_invoke$arity$0() : on_blur.call(null));
} else {
return null;
}
}));
var parse_color = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (color__$1){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(color__$1,new cljs.core.Keyword(null,"color","color",1011675173),(function (p1__54777_SHARP_){
var or__5025__auto__ = p1__54777_SHARP_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(color__$1);
}
}));
}));
var detach_value = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_detach),rumext.v2.adapt(index),rumext.v2.adapt(color)],(function (_){
if(cljs.core.truth_(on_detach)){
return (on_detach.cljs$core$IFn$_invoke$arity$2 ? on_detach.cljs$core$IFn$_invoke$arity$2(index,color) : on_detach.call(null,index,color));
} else {
return null;
}
}));
var handle_select = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(select_only),rumext.v2.adapt(color),rumext.v2.adapt(applied_token)],(function (){
var color__$1 = (cljs.core.truth_(applied_token)?cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(color,new cljs.core.Keyword(null,"has-token-applied","has-token-applied",-2051558353),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"token-name","token-name",1766556933),applied_token], 0)):color);
return (select_only.cljs$core$IFn$_invoke$arity$1 ? select_only.cljs$core$IFn$_invoke$arity$1(color__$1) : select_only.call(null,color__$1));
}));
var on_color_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color),rumext.v2.adapt(index),rumext.v2.adapt(on_change)],(function (value,_event){
var color__$1 = cljs.core.select_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(color,new cljs.core.Keyword(null,"color","color",1011675173),value),new cljs.core.Keyword(null,"gradient","gradient",-1983908971)),app.common.types.color.color_attrs);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.colors.add_recent_color(color__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(color__$1,index) : on_change.call(null,color__$1,index))], 0));
}));
var on_opacity_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color),rumext.v2.adapt(index),rumext.v2.adapt(on_change)],(function (value){
var color__$1 = cljs.core.select_keys(cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(color,new cljs.core.Keyword(null,"opacity","opacity",397153780),(value / (100))),new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref-file","ref-file",255004238)], 0)),app.common.types.color.color_attrs);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.colors.add_recent_color(color__$1),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(color__$1,index) : on_change.call(null,color__$1,index))], 0));
}));
var open_modal = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(disable_gradient),rumext.v2.adapt(disable_opacity),rumext.v2.adapt(disable_image),rumext.v2.adapt(disable_picker),rumext.v2.adapt(on_change),rumext.v2.adapt(on_close),rumext.v2.adapt(on_open),rumext.v2.adapt(tokens),rumext.v2.adapt(index),rumext.v2.adapt(applied_token)],(function (color__$1,pos,tab){
var color__$2 = ((has_multiple_colors)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),app.common.types.shape.attrs.default_color,new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color__$1)))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(color__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)):color__$1
));
var props = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"disable-gradient","disable-gradient",669966752),new cljs.core.Keyword(null,"on-token-change","on-token-change",-504087325),new cljs.core.Keyword(null,"disable-opacity","disable-opacity",1547998851),new cljs.core.Keyword(null,"disable-image","disable-image",-1920778139),new cljs.core.Keyword(null,"on-close","on-close",-761178394),new cljs.core.Keyword(null,"applied-token","applied-token",-1808287379),new cljs.core.Keyword(null,"active-tokens","active-tokens",1939368755),new cljs.core.Keyword(null,"color-origin","color-origin",-216238828),new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"on-change","on-change",-732046149),new cljs.core.Keyword(null,"tab","tab",-559583621),new cljs.core.Keyword(null,"data","data",-232669377)],[new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos),disable_gradient,on_token_change,disable_opacity,disable_image,(function (value,opacity,id,file_id__$1){
if(cljs.core.truth_(on_close)){
return (on_close.cljs$core$IFn$_invoke$arity$4 ? on_close.cljs$core$IFn$_invoke$arity$4(value,opacity,id,file_id__$1) : on_close.call(null,value,opacity,id,file_id__$1));
} else {
return null;
}
}),applied_token,tokens,origin,new cljs.core.Keyword(null,"sidebar","sidebar",35784458),new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos),(function (p1__54783_SHARP_){
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(p1__54783_SHARP_,index) : on_change.call(null,p1__54783_SHARP_,index));
}),tab,color__$2]);
if(cljs.core.fn_QMARK_(on_open)){
(on_open.cljs$core$IFn$_invoke$arity$1 ? on_open.cljs$core$IFn$_invoke$arity$1(color__$2) : on_open.call(null,color__$2));
} else {
}

if(cljs.core.truth_(disable_picker)){
return null;
} else {
return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),props);
}
}));
var handle_click_color = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(open_modal)],(function (color__$1,event){
var cpos = app.util.dom.get_client_position(event);
return (open_modal.cljs$core$IFn$_invoke$arity$3 ? open_modal.cljs$core$IFn$_invoke$arity$3(color__$1,cpos,null) : open_modal.call(null,color__$1,cpos,null));
}));
var open_modal_from_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(open_modal),rumext.v2.adapt(color)],(function (event){
var cpos = app.util.dom.get_client_position(event);
var x = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(cpos);
var y = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(cpos);
var pos = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"x","x",2099068185),(x - (215)),new cljs.core.Keyword(null,"y","y",-1757859776),y], null);
return (open_modal.cljs$core$IFn$_invoke$arity$3 ? open_modal.cljs$core$IFn$_invoke$arity$3(color,pos,new cljs.core.Keyword(null,"token-color","token-color",875683372)) : open_modal.call(null,color,pos,new cljs.core.Keyword(null,"token-color","token-color",875683372)));
}));
var on_swatch_click_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(open_modal)],(function (color__$1,event){
var cpos = app.util.dom.get_client_position(event);
return (open_modal.cljs$core$IFn$_invoke$arity$3 ? open_modal.cljs$core$IFn$_invoke$arity$3(color__$1,cpos,new cljs.core.Keyword(null,"token-color","token-color",875683372)) : open_modal.call(null,color__$1,cpos,new cljs.core.Keyword(null,"token-color","token-color",875683372)));
}));
var detach_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_detach_token)],(function (token){
if(cljs.core.truth_(on_detach_token)){
return (on_detach_token.cljs$core$IFn$_invoke$arity$1 ? on_detach_token.cljs$core$IFn$_invoke$arity$1(token) : on_detach_token.call(null,token));
} else {
return null;
}
}));
var on_remove_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(on_remove)],(function (_){
if(cljs.core.truth_(on_remove)){
return (on_remove.cljs$core$IFn$_invoke$arity$1 ? on_remove.cljs$core$IFn$_invoke$arity$1(index) : on_remove.call(null,index));
} else {
return null;
}
}));
var prev_color = app.main.ui.hooks.use_previous(color);
var on_drop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_reorder),rumext.v2.adapt(index)],(function (relative_pos,data){
var from_pos = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(data);
var to_space_between_pos = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(relative_pos,new cljs.core.Keyword(null,"bot","bot",-950896508)))?(index + (1)):index);
return (on_reorder.cljs$core$IFn$_invoke$arity$2 ? on_reorder.cljs$core$IFn$_invoke$arity$2(from_pos,to_space_between_pos) : on_reorder.call(null,from_pos,to_space_between_pos));
}));
var vec__54799 = (((!((on_reorder == null))))?app.main.ui.hooks.use_sortable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data-type","data-type",-326421468),"penpot/color-row",new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),on_drop,new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disable_drag,new cljs.core.Keyword(null,"detect-center?","detect-center?",1398000690),false,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),index], null)], 0)):new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,null], null));
var dprops = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54799,(0),null);
var dref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54799,(1),null);
var row_class = "main_ui_workspace_sidebar_options_rows_color_row__color-data"+" "+(cljs.core.truth_(hidden)?"main_ui_workspace_sidebar_options_rows_color_row__hidden":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"top","top",-1856271961)))?"main_ui_workspace_sidebar_options_rows_color_row__dnd-over-top":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"bot","bot",-950896508)))?"main_ui_workspace_sidebar_options_rows_color_row__dnd-over-bot":"");
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color),rumext.v2.adapt(prev_color),rumext.v2.adapt(disable_picker)],(function (){
if(((cljs.core.not(disable_picker)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(prev_color,color)))){
return app.main.data.modal.update_props_BANG_(new cljs.core.Keyword(null,"colorpicker","colorpicker",-1310754644),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"data","data",-232669377),(parse_color.cljs$core$IFn$_invoke$arity$1 ? parse_color.cljs$core$IFn$_invoke$arity$1(color) : parse_color.call(null,color))], null));
} else {
return null;
}
}));

return rumext.v2.jsxs("div",{'className':(class$ ?? "")+" "+(row_class ?? ""),'children':[(((!((on_reorder == null))))?rumext.v2.jsx(app.main.ui.components.reorder_handler.reorder_handler_STAR_,{'ref':dref}):null),(cljs.core.truth_((function (){var and__5023__auto__ = token_color;
if(and__5023__auto__){
return applied_token;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.rows.color_row.color_token_row_STAR_,{'activeTokens':tokens,'appliedTokenName':applied_token,'color':cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(color,new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref-file","ref-file",255004238)], 0)),'onSwatchClickToken':on_swatch_click_token,'detachToken':detach_token,'openModalFromToken':open_modal_from_token}):(cljs.core.truth_(library_color_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.rows.color_row.color_info_wrapper_STAR_,{'className':"main_ui_workspace_sidebar_options_rows_color_row__color-name-wrapper"+" "+"main_ui_workspace_sidebar_options_rows_color_row__library-name-wrapper",'handleClickColor':handle_click_color,'opacity':false,'color':color,'children':rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'title':cljs.core.str.cljs$core$IFn$_invoke$arity$1(color_name),'className':"main_ui_workspace_sidebar_options_rows_color_row__color-name",'children':cljs.core.str.cljs$core$IFn$_invoke$arity$1(color_name)}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'className':"main_ui_workspace_sidebar_options_rows_color_row__detach-btn",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.detach"),'onClick':detach_value,'icon':app.main.ui.ds.foundations.assets.icon.detach})]})}):(cljs.core.truth_(gradient_color_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.rows.color_row.color_info_wrapper_STAR_,{'className':"main_ui_workspace_sidebar_options_rows_color_row__color-name-wrapper"+" "+((disable_opacity)?"main_ui_workspace_sidebar_options_rows_color_row__no-opacity":"")+" "+"main_ui_workspace_sidebar_options_rows_color_row__gradient-name-wrapper",'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_rows_color_row__color-name",'children':app.util.color.gradient_type__GT_string(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.Keyword(null,"gradient","gradient",-1983908971)),new cljs.core.Keyword(null,"type","type",1174270348)))}),'selectOnFocus':select_on_focus,'onFocus':on_focus_SINGLEQUOTE_,'onOpacityChange':on_opacity_change,'onBlur':on_blur_SINGLEQUOTE_,'handleClickColor':handle_click_color,'color':color,'opacity':(!(disable_opacity))}):(cljs.core.truth_(image_color_QMARK_)?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.rows.color_row.color_info_wrapper_STAR_,{'className':"main_ui_workspace_sidebar_options_rows_color_row__color-name-wrapper"+" "+((disable_opacity)?"main_ui_workspace_sidebar_options_rows_color_row__no-opacity":""),'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_rows_color_row__color-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("media.image")}),'selectOnFocus':select_on_focus,'onFocus':on_focus_SINGLEQUOTE_,'onOpacityChange':on_opacity_change,'onBlur':on_blur_SINGLEQUOTE_,'handleClickColor':handle_click_color,'color':color,'opacity':(!(disable_opacity))}):rumext.v2.jsx(app.main.ui.workspace.sidebar.options.rows.color_row.color_info_wrapper_STAR_,{'className':"main_ui_workspace_sidebar_options_rows_color_row__color-name-wrapper"+" "+((((disable_opacity) || (has_multiple_colors)))?"main_ui_workspace_sidebar_options_rows_color_row__no-opacity":"")+" "+(cljs.core.truth_(is_editing_text)?"main_ui_workspace_sidebar_options_rows_color_row__editing":""),'children':rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_rows_color_row__color-input-wrapper",'children':rumext.v2.jsx(app.main.ui.components.color_input.color_input_STAR_,{'value':((has_multiple_colors)?"":color_without_hash),'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"),'data-index':index,'className':"main_ui_workspace_sidebar_options_rows_color_row__color-input",'onFocus':on_focus_SINGLEQUOTE_,'onBlur':on_blur_SINGLEQUOTE_,'onChange':on_color_change})}),'selectOnFocus':select_on_focus,'onFocus':on_focus_SINGLEQUOTE_,'onOpacityChange':on_opacity_change,'onBlur':on_blur_SINGLEQUOTE_,'handleClickColor':handle_click_color,'color':color,'opacity':(!(((disable_opacity) || (has_multiple_colors))))})
)))),(((!((on_remove == null))))?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.remove-color"),'onClick':on_remove_SINGLEQUOTE_,'icon':app.main.ui.ds.foundations.assets.icon.remove}):null),(cljs.core.truth_(select_only)?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.select-this-color"),'onClick':handle_select,'icon':app.main.ui.ds.foundations.assets.icon.move}):null)]});
});

(app.main.ui.workspace.sidebar.options.rows.color_row.color_row_STAR_.displayName = "color-row*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.rows.color_row.js.map
