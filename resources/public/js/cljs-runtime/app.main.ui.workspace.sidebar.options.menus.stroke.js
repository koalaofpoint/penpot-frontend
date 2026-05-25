import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.types.stroke.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.colors.js";
import "./app.main.data.workspace.tokens.application.js";
import "./app.main.store.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.workspace.sidebar.options.rows.stroke_row.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.stroke');
app.main.ui.workspace.sidebar.options.menus.stroke.stroke_attrs = new cljs.core.PersistentVector(null, 11, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952),new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146),new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340),new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937),new cljs.core.Keyword(null,"stroke-color-ref-id","stroke-color-ref-id",1785439761),new cljs.core.Keyword(null,"stroke-color-ref-file","stroke-color-ref-file",2014652279),new cljs.core.Keyword(null,"stroke-opacity","stroke-opacity",-1191543159),new cljs.core.Keyword(null,"stroke-color-gradient","stroke-color-gradient",-195812260),new cljs.core.Keyword(null,"stroke-cap-start","stroke-cap-start",-2018645757),new cljs.core.Keyword(null,"stroke-cap-end","stroke-cap-end",-411370737)], null);
app.main.ui.workspace.sidebar.options.menus.stroke.stroke_menu = (function (p1__55806_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__55806_SHARP_,(function (new_props_55808,old_props_55809){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_55808.ids,old_props_55809.ids)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_55808.values,old_props_55809.values)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_props_55808.type,old_props_55809.type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props_55808["show-caps"]),(old_props_55809["show-caps"]))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((new_props_55808["applied-tokens"]),(old_props_55809["applied-tokens"]))))))))));
}));
})((function app$main$ui$workspace$sidebar$options$menus$stroke$stroke_menu(props_55807){
var map__55810 = rumext.v2.util.wrap_props(props_55807);
var map__55810__$1 = cljs.core.__destructure_map(map__55810);
var props = map__55810__$1;
var ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55810__$1,new cljs.core.Keyword(null,"ids","ids",-998535796));
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55810__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var values = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55810__$1,new cljs.core.Keyword(null,"values","values",372645556));
var show_caps = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55810__$1,new cljs.core.Keyword(null,"show-caps","show-caps",-1147469133));
var disable_stroke_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55810__$1,new cljs.core.Keyword(null,"disable-stroke-style","disable-stroke-style",1447608775));
var applied_tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55810__$1,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871));
var shapes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55810__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879));
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55810__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var label = (function (){var G__55811 = type;
var G__55811__$1 = (((G__55811 instanceof cljs.core.Keyword))?G__55811.fqn:null);
switch (G__55811__$1) {
case "multiple":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.selection-stroke");

break;
case "group":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.group-stroke");

break;
default:
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.stroke");

}
})();
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(true);
var open_QMARK_ = cljs.core.deref(state_STAR_);
var toggle_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_STAR_,cljs.core.not);
}));
var open_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(state_STAR_,true);
}));
var strokes = new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(values);
var has_strokes_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),strokes)) || ((!((cljs.core.seq(strokes) == null)))));
var on_color_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (index,color){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.change_stroke_color.cljs$core$IFn$_invoke$arity$3(ids,color,index));
}));
var on_remove = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (index){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.remove_stroke(ids,index));
}));
var handle_remove_all = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (_){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.remove_all_strokes(ids));
}));
var on_color_detach = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (index,color){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

var color__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(color,new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref-file","ref-file",255004238)], 0));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.change_stroke_color.cljs$core$IFn$_invoke$arity$3(ids,color__$1,index));
}));
var handle_reorder = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (from_pos,to_space_between_pos){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.reorder_strokes(ids,from_pos,to_space_between_pos));
}));
var on_stroke_style_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (index,value){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.change_stroke_attrs.cljs$core$IFn$_invoke$arity$3(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-style","stroke-style",-1661861146),value], null),index));
}));
var on_stroke_alignment_change = (function (index,value){
if(cuerdas.core.empty_QMARK_(value)){
return null;
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.change_stroke_attrs.cljs$core$IFn$_invoke$arity$3(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340),value], null),index));
}
});
var on_stroke_width_change = (function (index,value){
if(cuerdas.core.empty_QMARK_(value)){
return null;
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.change_stroke_attrs.cljs$core$IFn$_invoke$arity$3(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435),value], null),index));
}
});
var open_caps_select = (function (caps_state){
return (function (event){
var window_size = app.util.dom.get_window_size();
var target = app.util.dom.get_current_target(event);
var rect = app.util.dom.get_bounding_rect(target);
var top = ((((new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(rect) + (320)) < new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(window_size)))?(new cljs.core.Keyword(null,"bottom","bottom",-1550509018).cljs$core$IFn$_invoke$arity$1(rect) + (5)):(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(window_size) - (325)));
var left = ((((new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(rect) + (200)) < new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(window_size)))?new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(rect):(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(window_size) - (205)));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(caps_state,cljs.core.assoc,new cljs.core.Keyword(null,"open?","open?",1238443125),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"left","left",-399115937),left,new cljs.core.Keyword(null,"top","top",-1856271961),top], 0));
});
});
var close_caps_select = (function (caps_state){
return (function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(caps_state,cljs.core.assoc,new cljs.core.Keyword(null,"open?","open?",1238443125),false);
});
});
var on_stroke_cap_start_change = (function (index,value){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.change_stroke_attrs.cljs$core$IFn$_invoke$arity$3(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-cap-start","stroke-cap-start",-2018645757),value], null),index));
});
var on_stroke_cap_end_change = (function (index,value){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.change_stroke_attrs.cljs$core$IFn$_invoke$arity$3(ids,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"stroke-cap-end","stroke-cap-end",-411370737),value], null),index));
});
var on_stroke_cap_switch = (function (index){
var stroke_cap_start = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952),index,new cljs.core.Keyword(null,"stroke-cap-start","stroke-cap-start",-2018645757)], null));
var stroke_cap_end = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"strokes","strokes",-1645650952),index,new cljs.core.Keyword(null,"stroke-cap-end","stroke-cap-end",-411370737)], null));
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stroke_cap_start,new cljs.core.Keyword(null,"multiple","multiple",1244445549))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(stroke_cap_end,new cljs.core.Keyword(null,"multiple","multiple",1244445549))))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.change_stroke_attrs.cljs$core$IFn$_invoke$arity$3(ids,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stroke-cap-start","stroke-cap-start",-2018645757),stroke_cap_end,new cljs.core.Keyword(null,"stroke-cap-end","stroke-cap-end",-411370737),stroke_cap_start], null),index));
} else {
return null;
}
});
var on_add_stroke = (function (_){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.add_stroke(ids,app.common.types.stroke.default_stroke));

if((!((!((cljs.core.seq(strokes) == null)))))){
return (open_content.cljs$core$IFn$_invoke$arity$0 ? open_content.cljs$core$IFn$_invoke$arity$0() : open_content.call(null));
} else {
return null;
}
});
var disable_drag = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var on_focus = (function (_){
return cljs.core.reset_BANG_(disable_drag,true);
});
var on_blur = (function (_){
return cljs.core.reset_BANG_(disable_drag,false);
});
var on_detach_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (token_name,attrs){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.unapply_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),token_name,new cljs.core.Keyword(null,"attributes","attributes",-74013604),attrs,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}));
return rumext.v2.jsxs("section",{'aria-label':"stroke-section",'className':"main_ui_workspace_sidebar_options_menus_stroke__stroke-section",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_stroke__stroke-title",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':has_strokes_QMARK_,'collapsed':cljs.core.not(open_QMARK_),'onCollapsed':toggle_content,'title':label,'className':(((!(has_strokes_QMARK_)))?"main_ui_workspace_sidebar_options_menus_stroke__stroke-title-bar":""),'children':(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),strokes))))?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke.add-stroke"),'onClick':on_add_stroke,'icon':app.main.ui.ds.foundations.assets.icon.add,'data-testid':"add-stroke"}):null)})}),(cljs.core.truth_(open_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_stroke__stroke-content"+" "+(((!(has_strokes_QMARK_)))?"main_ui_workspace_sidebar_options_menus_stroke__stroke-content-empty":""),'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),strokes))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_stroke__stroke-multiple",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_stroke__stroke-multiple-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple")}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke.remove-stroke"),'onClick':handle_remove_all,'icon':app.main.ui.ds.foundations.assets.icon.remove})]}):((cljs.core.seq(strokes))?rumext.v2.jsx(app.main.ui.hooks.sortable_container_STAR_,{'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55812){
var vec__55813 = p__55812;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55813,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55813,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.options.rows.stroke_row.stroke_row_STAR_,{'onStrokeStyleChange':on_stroke_style_change,'onRemove':on_remove,'index':index,'appliedTokens':applied_tokens,'closeCapsSelect':close_caps_select,'showCaps':show_caps,'onStrokeWidthChange':on_stroke_width_change,'onStrokeCapEndChange':on_stroke_cap_end_change,'selectOnFocus':cljs.core.not(cljs.core.deref(disable_drag)),'disableStrokeStyle':disable_stroke_style,'onStrokeCapSwitch':on_stroke_cap_switch,'objects':objects,'onReorder':handle_reorder,'disableDrag':disable_drag,'ids':ids,'onDetachToken':on_detach_token,'stroke':value,'onStrokeAlignmentChange':on_stroke_alignment_change,'onColorDetach':on_color_detach,'onFocus':on_focus,'shapes':shapes,'openCapsSelect':open_caps_select,'onColorChange':on_color_change,'onBlur':on_blur,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.stroke-color"),'onStrokeCapStartChange':on_stroke_cap_start_change},""+"stroke-"+(index ?? "")));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$2(values,cljs.core.PersistentVector.EMPTY)))}):null))}):null)]});
}));

(app.main.ui.workspace.sidebar.options.menus.stroke.stroke_menu.displayName = "stroke-menu");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.stroke.js.map
