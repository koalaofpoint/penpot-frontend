import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.store.js";
import "./app.main.ui.components.numeric_input.js";
import "./app.main.ui.components.reorder_handler.js";
import "./app.main.ui.components.select.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.workspace.sidebar.options.common.js";
import "./app.main.ui.workspace.sidebar.options.rows.color_row.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.rows.shadow_row');
app.main.ui.workspace.sidebar.options.rows.shadow_row.shadow_row_STAR_ = (function app$main$ui$workspace$sidebar$options$rows$shadow_row$shadow_row_STAR_(props_55755){
var shadow__$1 = props_55755.shadow;
var on_remove = props_55755.onRemove;
var is_open = props_55755.isOpen;
var index = props_55755.index;
var on_toggle_open = props_55755.onToggleOpen;
var on_detach_color = props_55755.onDetachColor;
var on_reorder = props_55755.onReorder;
var on_update = props_55755.onUpdate;
var on_toggle_visibility = props_55755.onToggleVisibility;
var shadow_style = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(shadow__$1);
var shadow_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shadow__$1);
var hidden_QMARK_ = new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(shadow__$1);
var on_drop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_reorder),rumext.v2.adapt(index)],(function (relative_pos,data){
var from_pos = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(data);
var to_space_between_pos = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(relative_pos,new cljs.core.Keyword(null,"bot","bot",-950896508)))?(index + (1)):index);
return (on_reorder.cljs$core$IFn$_invoke$arity$2 ? on_reorder.cljs$core$IFn$_invoke$arity$2(from_pos,to_space_between_pos) : on_reorder.call(null,from_pos,to_space_between_pos));
}));
var vec__55756 = app.main.ui.hooks.use_sortable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"data-type","data-type",-326421468),"penpot/shadow-entry",new cljs.core.Keyword(null,"on-drop","on-drop",1867868491),on_drop,new cljs.core.Keyword(null,"detect-center?","detect-center?",1398000690),false,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"index","index",-1531685915),index], null)], 0));
var dprops = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55756,(0),null);
var dref = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55756,(1),null);
var on_remove__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index)],(function (){
return (on_remove.cljs$core$IFn$_invoke$arity$1 ? on_remove.cljs$core$IFn$_invoke$arity$1(index) : on_remove.call(null,index));
}));
var trigger_bounding_box_cloaking = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shadow_id)],(function (){
if(cljs.core.truth_(shadow_id)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shadow_id], null)));
} else {
return null;
}
}));
var on_update_offset_x = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(trigger_bounding_box_cloaking)],(function (value){
(trigger_bounding_box_cloaking.cljs$core$IFn$_invoke$arity$0 ? trigger_bounding_box_cloaking.cljs$core$IFn$_invoke$arity$0() : trigger_bounding_box_cloaking.call(null));

return (on_update.cljs$core$IFn$_invoke$arity$3 ? on_update.cljs$core$IFn$_invoke$arity$3(index,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),value) : on_update.call(null,index,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),value));
}));
var on_update_offset_y = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(trigger_bounding_box_cloaking)],(function (value){
(trigger_bounding_box_cloaking.cljs$core$IFn$_invoke$arity$0 ? trigger_bounding_box_cloaking.cljs$core$IFn$_invoke$arity$0() : trigger_bounding_box_cloaking.call(null));

return (on_update.cljs$core$IFn$_invoke$arity$3 ? on_update.cljs$core$IFn$_invoke$arity$3(index,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),value) : on_update.call(null,index,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),value));
}));
var on_update_spread = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(trigger_bounding_box_cloaking)],(function (value){
(trigger_bounding_box_cloaking.cljs$core$IFn$_invoke$arity$0 ? trigger_bounding_box_cloaking.cljs$core$IFn$_invoke$arity$0() : trigger_bounding_box_cloaking.call(null));

return (on_update.cljs$core$IFn$_invoke$arity$3 ? on_update.cljs$core$IFn$_invoke$arity$3(index,new cljs.core.Keyword(null,"spread","spread",862337191),value) : on_update.call(null,index,new cljs.core.Keyword(null,"spread","spread",862337191),value));
}));
var on_update_blur = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(trigger_bounding_box_cloaking)],(function (value){
(trigger_bounding_box_cloaking.cljs$core$IFn$_invoke$arity$0 ? trigger_bounding_box_cloaking.cljs$core$IFn$_invoke$arity$0() : trigger_bounding_box_cloaking.call(null));

return (on_update.cljs$core$IFn$_invoke$arity$3 ? on_update.cljs$core$IFn$_invoke$arity$3(index,new cljs.core.Keyword(null,"blur","blur",-453500461),value) : on_update.call(null,index,new cljs.core.Keyword(null,"blur","blur",-453500461),value));
}));
var on_update_color = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(on_update),rumext.v2.adapt(trigger_bounding_box_cloaking)],(function (color){
(trigger_bounding_box_cloaking.cljs$core$IFn$_invoke$arity$0 ? trigger_bounding_box_cloaking.cljs$core$IFn$_invoke$arity$0() : trigger_bounding_box_cloaking.call(null));

return (on_update.cljs$core$IFn$_invoke$arity$3 ? on_update.cljs$core$IFn$_invoke$arity$3(index,new cljs.core.Keyword(null,"color","color",1011675173),color) : on_update.call(null,index,new cljs.core.Keyword(null,"color","color",1011675173),color));
}));
var on_detach_color__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index)],(function (){
return (on_detach_color.cljs$core$IFn$_invoke$arity$1 ? on_detach_color.cljs$core$IFn$_invoke$arity$1(index) : on_detach_color.call(null,index));
}));
var on_style_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(trigger_bounding_box_cloaking)],(function (value){
(trigger_bounding_box_cloaking.cljs$core$IFn$_invoke$arity$0 ? trigger_bounding_box_cloaking.cljs$core$IFn$_invoke$arity$0() : trigger_bounding_box_cloaking.call(null));

var G__55759 = index;
var G__55760 = new cljs.core.Keyword(null,"style","style",-496642736);
var G__55761 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
return (on_update.cljs$core$IFn$_invoke$arity$3 ? on_update.cljs$core$IFn$_invoke$arity$3(G__55759,G__55760,G__55761) : on_update.call(null,G__55759,G__55760,G__55761));
}));
var on_toggle_visibility__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(index),rumext.v2.adapt(trigger_bounding_box_cloaking)],(function (){
(trigger_bounding_box_cloaking.cljs$core$IFn$_invoke$arity$0 ? trigger_bounding_box_cloaking.cljs$core$IFn$_invoke$arity$0() : trigger_bounding_box_cloaking.call(null));

return (on_toggle_visibility.cljs$core$IFn$_invoke$arity$1 ? on_toggle_visibility.cljs$core$IFn$_invoke$arity$1(index) : on_toggle_visibility.call(null,index));
}));
var on_toggle_open__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shadow_id),rumext.v2.adapt(on_toggle_open)],(function (){
return (on_toggle_open.cljs$core$IFn$_invoke$arity$1 ? on_toggle_open.cljs$core$IFn$_invoke$arity$1(shadow_id) : on_toggle_open.call(null,shadow_id));
}));
var type_options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"drop-shadow",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.drop-shadow")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"inner-shadow",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.inner-shadow")], null)], null);
}));
var on_open_row = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.start_undo_transaction(new cljs.core.Keyword(null,"color-row","color-row",804190296)));
}));
var on_close_row = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.commit_undo_transaction(new cljs.core.Keyword(null,"color-row","color-row",804190296)));
}));
return rumext.v2.jsxs("div",{'className':"shadow-option"+" "+"main_ui_workspace_sidebar_options_rows_shadow_row__shadow-element"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"top","top",-1856271961)))?"main_ui_workspace_sidebar_options_rows_shadow_row__dnd-over-top":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"over","over",192553051).cljs$core$IFn$_invoke$arity$1(dprops),new cljs.core.Keyword(null,"bot","bot",-950896508)))?"main_ui_workspace_sidebar_options_rows_shadow_row__dnd-over-bot":""),'children':[(((!((on_reorder == null))))?rumext.v2.jsx(app.main.ui.components.reorder_handler.reorder_handler_STAR_,{'ref':dref}):null),rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_rows_shadow_row__shadow-basic",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_rows_shadow_row__shadow-basic-info",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"secondary",'icon':app.main.ui.ds.foundations.assets.icon.menu,'className':"main_ui_workspace_sidebar_options_rows_shadow_row__shadow-basic-button"+" "+(cljs.core.truth_(is_open)?"main_ui_workspace_sidebar_options_rows_shadow_row__selected":""),'aria-label':"open more options",'disabled':hidden_QMARK_,'onClick':on_toggle_open__$1}),rumext.v2.jsx(app.main.ui.components.select.select,{'class':"main_ui_workspace_sidebar_options_rows_shadow_row__shadow-basic-select",'default-value':app.common.data.name(shadow_style),'options':type_options,'disabled':hidden_QMARK_,'on-change':on_style_change})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_rows_shadow_row__shadow-basic-actions",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.toggle-shadow"),'onClick':on_toggle_visibility__$1,'icon':(cljs.core.truth_(hidden_QMARK_)?"hide":"shown")}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.remove-shadow"),'onClick':on_remove__$1,'icon':app.main.ui.ds.foundations.assets.icon.remove})]})]}),(cljs.core.truth_(is_open)?rumext.v2.jsxs(app.main.ui.workspace.sidebar.options.common.advanced_options_STAR_,{'className':"main_ui_workspace_sidebar_options_rows_shadow_row__shadow-advanced",'isVisible':is_open,'onClose':on_toggle_open__$1,'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_rows_shadow_row__shadow-advanced-row",'children':[rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.offsetx"),'className':"main_ui_workspace_sidebar_options_rows_shadow_row__shadow-advanced-offset-x",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_rows_shadow_row__shadow-advanced-label",'children':"X"}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'noValidate':true,'placeholder':"--",'onChange':on_update_offset_x,'value':new cljs.core.Keyword(null,"offset-x","offset-x",1036466230).cljs$core$IFn$_invoke$arity$1(shadow__$1)})]}),rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.blur"),'className':"main_ui_workspace_sidebar_options_rows_shadow_row__shadow-advanced-blur",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_rows_shadow_row__shadow-advanced-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.blur")}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'noValidate':true,'placeholder':"--",'onChange':on_update_blur,'min':(0),'value':new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(shadow__$1)})]}),rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.spread"),'className':"main_ui_workspace_sidebar_options_rows_shadow_row__shadow-advanced-spread",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_rows_shadow_row__shadow-advanced-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.spread")}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'noValidate':true,'placeholder':"--",'onChange':on_update_spread,'value':new cljs.core.Keyword(null,"spread","spread",862337191).cljs$core$IFn$_invoke$arity$1(shadow__$1)})]})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_rows_shadow_row__shadow-advanced-row",'children':[rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.offsety"),'className':"main_ui_workspace_sidebar_options_rows_shadow_row__shadow-advanced-offset-y",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_rows_shadow_row__shadow-advanced-label",'children':"Y"}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'noValidate':true,'placeholder':"--",'onChange':on_update_offset_y,'value':new cljs.core.Keyword(null,"offset-y","offset-y",2076844008).cljs$core$IFn$_invoke$arity$1(shadow__$1)})]}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.rows.color_row.color_row_STAR_,{'origin':new cljs.core.Keyword(null,"shadow","shadow",873231803),'onClose':on_close_row,'onChange':on_update_color,'className':"main_ui_workspace_sidebar_options_rows_shadow_row__shadow-advanced-color",'onDetach':on_detach_color__$1,'disableGradient':true,'disableImage':true,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.color"),'color':new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(shadow__$1),'onOpen':on_open_row})]})]}):null)]})]});
});

(app.main.ui.workspace.sidebar.options.rows.shadow_row.shadow_row_STAR_.displayName = "shadow-row*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.rows.shadow_row.js.map
