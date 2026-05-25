import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.types.color.js";
import "./app.common.types.fills.js";
import "./app.common.types.shape.attrs.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.colors.js";
import "./app.main.data.workspace.tokens.application.js";
import "./app.main.features.js";
import "./app.main.store.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.workspace.sidebar.options.rows.color_row.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.fill');
app.main.ui.workspace.sidebar.options.menus.fill.fill_attrs = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"hide-fill-on-export","hide-fill-on-export",-1674607391),null,new cljs.core.Keyword(null,"fills","fills",902966780),null], null), null);
app.main.ui.workspace.sidebar.options.menus.fill.xf_COLON_process_fills = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (index,item){
var color = app.common.types.fills.fill__GT_color(item);
return cljs.core.with_meta(item,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"color","color",1011675173),color], null));
}));
/**
 * Internal helper hook that prepares fills
 */
app.main.ui.workspace.sidebar.options.menus.fill.prepare_fills = (function app$main$ui$workspace$sidebar$options$menus$fill$prepare_fills(fills){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),fills)){
return fills;
} else {
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.main.ui.workspace.sidebar.options.menus.fill.xf_COLON_process_fills,fills));
}
});
/**
 * A fills-menu specific memoize check function that only checks if
 *   specific values are changed on provided props. This allows pass the
 *   whole shape as values without adding additional rerenders when other
 *   shape properties changes.
 */
app.main.ui.workspace.sidebar.options.menus.fill.check_props = (function app$main$ui$workspace$sidebar$options$menus$fill$check_props(n_props,o_props){
var and__5023__auto__ = ((n_props["ids"]) === (o_props["ids"]));
if(and__5023__auto__){
var o_vals = (o_props["values"]);
var n_vals = (n_props["values"]);
var o_fills = cljs.core.get.cljs$core$IFn$_invoke$arity$2(o_vals,new cljs.core.Keyword(null,"fills","fills",902966780));
var n_fills = cljs.core.get.cljs$core$IFn$_invoke$arity$2(n_vals,new cljs.core.Keyword(null,"fills","fills",902966780));
var o_applied_tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(o_vals,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871));
var n_applied_tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(n_vals,new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871));
var o_hide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(o_vals,new cljs.core.Keyword(null,"hide-fill-on-export","hide-fill-on-export",-1674607391));
var n_hide = cljs.core.get.cljs$core$IFn$_invoke$arity$2(n_vals,new cljs.core.Keyword(null,"hide-fill-on-export","hide-fill-on-export",-1674607391));
return (((o_hide === n_hide)) && ((((o_applied_tokens === n_applied_tokens)) && ((o_fills === n_fills)))));
} else {
return and__5023__auto__;
}
});
app.main.ui.workspace.sidebar.options.menus.fill.fill_menu_STAR_ = (function (p1__55674_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__55674_SHARP_,app.main.ui.workspace.sidebar.options.menus.fill.check_props);
})((function app$main$ui$workspace$sidebar$options$menus$fill$fill_menu_STAR_(props_55675){
var ids = props_55675.ids;
var type = props_55675.type;
var values = props_55675.values;
var applied_tokens = props_55675.appliedTokens;
var fills = cljs.core.get.cljs$core$IFn$_invoke$arity$2(values,new cljs.core.Keyword(null,"fills","fills",902966780));
var hide_on_export = cljs.core.get.cljs$core$IFn$_invoke$arity$3(values,new cljs.core.Keyword(null,"hide-fill-on-export","hide-fill-on-export",-1674607391),false);
var fill_token_applied = new cljs.core.Keyword(null,"fill","fill",883462889).cljs$core$IFn$_invoke$arity$1(applied_tokens);
var render_wasm_QMARK_ = app.main.features.use_feature("render-wasm/v1");
var multiple_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),fills);
var fills__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(fills)],(function (){
return app.main.ui.workspace.sidebar.options.menus.fill.prepare_fills(fills);
}));
var has_fills_QMARK_ = ((multiple_QMARK_) || ((!((fills__$1 == null)))));
var empty_fills_QMARK_ = (((!(multiple_QMARK_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),cljs.core.count(fills__$1))));
var open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(has_fills_QMARK_);
var open_QMARK_ = cljs.core.deref(open_STAR_);
var toggle_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(open_STAR_,cljs.core.not);
}));
var open_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(open_STAR_,true);
}));
var close_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(open_STAR_,false);
}));
var checkbox_ref = rumext.v2.use_ref();
var can_add_fills_QMARK_ = ((render_wasm_QMARK_)?(((!(multiple_QMARK_))) && ((cljs.core.count(fills__$1) < app.common.types.fills.MAX_FILLS))):(!(multiple_QMARK_)));
var label = (function (){var G__55679 = type;
var G__55679__$1 = (((G__55679 instanceof cljs.core.Keyword))?G__55679.fqn:null);
switch (G__55679__$1) {
case "multiple":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.selection-fill");

break;
case "group":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.group-fill");

break;
default:
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.fill");

}
})();
var on_add = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids),rumext.v2.adapt(multiple_QMARK_),rumext.v2.adapt(empty_fills_QMARK_)],(function (_){
if(can_add_fills_QMARK_){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids));

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.add_fill.cljs$core$IFn$_invoke$arity$2(ids,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),app.common.types.shape.attrs.default_color,new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null)));

if(((multiple_QMARK_) || (empty_fills_QMARK_))){
return (open_content.cljs$core$IFn$_invoke$arity$0 ? open_content.cljs$core$IFn$_invoke$arity$0() : open_content.call(null));
} else {
return null;
}
} else {
return null;
}
}));
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (color,index){
var color__$1 = cljs.core.select_keys(color,app.common.types.color.color_attrs);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.change_fill.cljs$core$IFn$_invoke$arity$3(ids,color__$1,index));
}));
var on_reorder = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (from_pos,to_space_between_pos){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.reorder_fills(ids,from_pos,to_space_between_pos));
}));
var on_remove = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids),rumext.v2.adapt(multiple_QMARK_),rumext.v2.adapt(empty_fills_QMARK_)],(function (index,_event){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.remove_fill.cljs$core$IFn$_invoke$arity$2(ids,index));

if(((multiple_QMARK_) || (empty_fills_QMARK_))){
return (close_content.cljs$core$IFn$_invoke$arity$0 ? close_content.cljs$core$IFn$_invoke$arity$0() : close_content.call(null));
} else {
return null;
}
}));
var on_remove_all = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.remove_all_fills.cljs$core$IFn$_invoke$arity$1(ids));
}));
var on_detach = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (index,_event){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.detach_fill.cljs$core$IFn$_invoke$arity$2(ids,index));
}));
var on_change_show_on_export = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (event){
var value = app.util.dom.checked_QMARK_(app.util.dom.get_target(event));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.change_hide_fill_on_export(ids,cljs.core.not(value)));
}));
var disable_drag_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var disable_drag_QMARK_ = cljs.core.deref(disable_drag_STAR_);
var on_focus = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(disable_drag_STAR_,true);
}));
var on_blur = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(disable_drag_STAR_,false);
}));
var on_token_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (_,token){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.toggle_token(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),null], null), null),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids,new cljs.core.Keyword(null,"expand-with-children","expand-with-children",-1923116463),true], null)));
}));
var on_detach_token = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (token_name){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.unapply_token(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"token-name","token-name",1766556933),token_name,new cljs.core.Keyword(null,"attributes","attributes",-74013604),new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"fill","fill",883462889),null], null), null),new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),ids], null)));
}));
rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(hide_on_export)],(function (){
var temp__5825__auto__ = rumext.v2.ref_val(checkbox_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var checkbox = temp__5825__auto__;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hide_on_export,new cljs.core.Keyword(null,"multiple","multiple",1244445549))){
return app.util.dom.set_attribute_BANG_(checkbox,"indeterminate",true);
} else {
return app.util.dom.remove_attribute_BANG_(checkbox,"indeterminate");
}
} else {
return null;
}
}));

return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_fill__fill-section",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_fill__fill-title",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':has_fills_QMARK_,'collapsed':cljs.core.not(open_QMARK_),'onCollapsed':toggle_content,'title':label,'className':(((!(has_fills_QMARK_)))?"main_ui_workspace_sidebar_options_menus_fill__fill-title-bar":""),'children':(((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),fills__$1))))?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.fill.add-fill"),'onClick':on_add,'data-testid':"add-fill",'disabled':(!(can_add_fills_QMARK_)),'icon':app.main.ui.ds.foundations.assets.icon.add}):null)})}),(cljs.core.truth_(open_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_fill__fill-content",'children':[((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),fills__$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),fill_token_applied))))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_fill__fill-multiple",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_fill__fill-multiple-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple")}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.fill.remove-fill"),'onClick':on_remove_all,'icon':app.main.ui.ds.foundations.assets.icon.remove})]}):(((!((fills__$1 == null))))?rumext.v2.jsx(app.main.ui.hooks.sortable_container_STAR_,{'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,value){
out_arr__35152__auto__.push((function (){var mdata = cljs.core.meta(value);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mdata,new cljs.core.Keyword(null,"index","index",-1531685915));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(mdata,new cljs.core.Keyword(null,"color","color",1011675173));
return rumext.v2.jsx(app.main.ui.workspace.sidebar.options.rows.color_row.color_row_STAR_,{'onRemove':on_remove,'origin':new cljs.core.Keyword(null,"fill","fill",883462889),'index':index,'onChange':on_change,'selectOnFocus':cljs.core.not(disable_drag_QMARK_),'onReorder':on_reorder,'onTokenChange':on_token_change,'disableDrag':disable_drag_QMARK_,'onDetachToken':on_detach_token,'appliedToken':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(index,(0)))?fill_token_applied:null),'onFocus':on_focus,'onDetach':on_detach,'onBlur':on_blur,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.fill"),'color':color},index);
})());

return out_arr__35152__auto__;
}),[],fills__$1)}):null)),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"frame","frame",-1711082588))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"multiple","multiple",1244445549))) && ((!((hide_on_export == null))))))))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_fill__fill-checkbox",'children':rumext.v2.jsxs("label",{'htmlFor':"show-fill-on-export",'className':((cljs.core.not(hide_on_export))?"checked":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_fill__check-mark"+" "+((cljs.core.not(hide_on_export))?"main_ui_workspace_sidebar_options_menus_fill__checked":""),'children':((cljs.core.not(hide_on_export))?app.main.ui.icons.status_tick:null)}),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.show-fill-on-export"),rumext.v2.jsx("input",{'type':"checkbox",'id':"show-fill-on-export",'ref':checkbox_ref,'checked':cljs.core.not(hide_on_export),'onChange':on_change_show_on_export})]})}):null)]}):null)]});
}));

(app.main.ui.workspace.sidebar.options.menus.fill.fill_menu_STAR_.displayName = "fill-menu*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.fill.js.map
