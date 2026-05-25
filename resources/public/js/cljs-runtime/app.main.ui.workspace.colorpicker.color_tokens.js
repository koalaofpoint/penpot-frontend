import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.main.constants.js";
import "./app.main.data.common.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.tokens.application.js";
import "./app.main.data.workspace.tokens.library_edit.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.controls.input.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.tooltip.js";
import "./app.main.ui.ds.utilities.swatch.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.colorpicker.color_tokens');
app.main.ui.workspace.colorpicker.color_tokens.token_empty_state_STAR_ = (function app$main$ui$workspace$colorpicker$color_tokens$token_empty_state_STAR_(props_54751){
return rumext.v2.jsx("div",{'className':"main_ui_workspace_colorpicker_color_tokens__color-token-empty-state",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("color-token.empty-state")});
});

(app.main.ui.workspace.colorpicker.color_tokens.token_empty_state_STAR_.displayName = "token-empty-state*");

app.main.ui.workspace.colorpicker.color_tokens.list_item_STAR_ = (function app$main$ui$workspace$colorpicker$color_tokens$list_item_STAR_(props_54757){
var selected = undefined;
var on_token_pill_click = undefined;
var token = undefined;
var props = undefined;
var {"token": token, "onTokenPillClick": on_token_pill_click, "selected": selected, ...props} = props_54757;

var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token),rumext.v2.adapt(on_token_pill_click)],(function (event){
return (on_token_pill_click.cljs$core$IFn$_invoke$arity$2 ? on_token_pill_click.cljs$core$IFn$_invoke$arity$2(event,token) : on_token_pill_click.call(null,event,token));
}));
var id_tooltip = rumext.v2.use_id();
var resolved = new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626).cljs$core$IFn$_invoke$arity$1(token);
var color_value = app.main.data.workspace.tokens.application.value__GT_color(resolved);
var item_ref = rumext.v2.use_ref(null);
return rumext.v2.jsx(app.main.ui.ds.tooltip.tooltip_STAR_,{'id':id_tooltip,'style':{'width':"100%"},'triggerRef':item_ref,'content':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token),'children':rumext.v2.jsxs("button",{'ref':item_ref,'aria-labelledby':id_tooltip,'onClick':on_click,'className':"main_ui_workspace_colorpicker_color_tokens__color-token-item"+" "+(cljs.core.truth_(selected)?"main_ui_workspace_colorpicker_color_tokens__color-token-selected":""),'children':[rumext.v2.jsx(app.main.ui.ds.utilities.swatch.swatch_STAR_,{'background':color_value,'tooltipContent':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.resolved-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resolved], 0)),'size':"small"}),rumext.v2.jsx("div",{'className':"main_ui_workspace_colorpicker_color_tokens__token-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token)}),(cljs.core.truth_(selected)?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.tick,'size':"s",'className':"main_ui_workspace_colorpicker_color_tokens__token-selected-icon"}):null)]})});
});

(app.main.ui.workspace.colorpicker.color_tokens.list_item_STAR_.displayName = "list-item*");

app.main.ui.workspace.colorpicker.color_tokens.grid_item_STAR_ = (function app$main$ui$workspace$colorpicker$color_tokens$grid_item_STAR_(props_54767){
var selected = undefined;
var on_token_pill_click = undefined;
var token = undefined;
var props = undefined;
var {"token": token, "onTokenPillClick": on_token_pill_click, "selected": selected, ...props} = props_54767;

var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(token),rumext.v2.adapt(on_token_pill_click)],(function (event){
return (on_token_pill_click.cljs$core$IFn$_invoke$arity$2 ? on_token_pill_click.cljs$core$IFn$_invoke$arity$2(event,token) : on_token_pill_click.call(null,event,token));
}));
var resolved = new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626).cljs$core$IFn$_invoke$arity$1(token);
var token_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token);
var color_value = app.main.data.workspace.tokens.application.value__GT_color(resolved);
return rumext.v2.jsx("div",{'className':"main_ui_workspace_colorpicker_color_tokens__color-token-item-grid"+" "+(cljs.core.truth_(selected)?"main_ui_workspace_colorpicker_color_tokens__color-token-selected-grid":""),'children':rumext.v2.jsx(app.main.ui.ds.utilities.swatch.swatch_STAR_,{'background':color_value,'tooltipContent':rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'children':[rumext.v2.jsx("span",{'children':""+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.token-name") ?? "")+": "}),rumext.v2.jsx("span",{'className':"main_ui_workspace_colorpicker_color_tokens__token-name",'children':token_name})]}),rumext.v2.jsx("div",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.resolved-value",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([resolved], 0))})]}),'onClick':on_click,'size':"medium"})});
});

(app.main.ui.workspace.colorpicker.color_tokens.grid_item_STAR_.displayName = "grid-item*");

/**
 * Given a map with :group string (slash-separated), returns a set of vectors
 * representing the cumulative group hierarchy.
 * 
 * Example:
 * {:group "test/gracia"}
 * => #{["test"] ["test" "gracia"]}
 */
app.main.ui.workspace.colorpicker.color_tokens.group__GT_paths = (function app$main$ui$workspace$colorpicker$color_tokens$group__GT_paths(m){
var parts = (function (){var temp__5825__auto__ = new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5825__auto__)){
var g = temp__5825__auto__;
return cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(g,/\//);
} else {
return null;
}
})();
if(cljs.core.seq(parts)){
return cljs.core.set(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (i){
return cljs.core.vec(cljs.core.take.cljs$core$IFn$_invoke$arity$2(i,parts));
}),cljs.core.range.cljs$core$IFn$_invoke$arity$2((1),(cljs.core.count(parts) + (1)))));
} else {
return cljs.core.PersistentHashSet.EMPTY;
}
});
app.main.ui.workspace.colorpicker.color_tokens.set_section_STAR_ = (function app$main$ui$workspace$colorpicker$color_tokens$set_section_STAR_(props_54776){
var on_token_change = undefined;
var collapsed = undefined;
var name = undefined;
var applied_token = undefined;
var toggle_sets_open = undefined;
var group_or_set = undefined;
var color_origin = undefined;
var props = undefined;
var {"collapsed": collapsed, "toggleSetsOpen": toggle_sets_open, "groupOrSet": group_or_set, "name": name, "colorOrigin": color_origin, "onTokenChange": on_token_change, "appliedToken": applied_token, ...props} = props_54776;

var list_style_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"list","list",765357683));
var list_style = cljs.core.deref(list_style_STAR_);
var toggle_list_style = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(list_style)],(function (){
var new_style = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"list","list",765357683),list_style))?new cljs.core.Keyword(null,"grid","grid",402978600):new cljs.core.Keyword(null,"list","list",765357683));
return cljs.core.reset_BANG_(list_style_STAR_,new_style);
}));
var toggle_set = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(name),rumext.v2.adapt(toggle_sets_open)],(function (){
return (toggle_sets_open.cljs$core$IFn$_invoke$arity$1 ? toggle_sets_open.cljs$core$IFn$_invoke$arity$1(name) : toggle_sets_open.call(null,name));
}));
var objects = rumext.v2.deref(app.main.refs.workspace_page_objects);
var selected = rumext.v2.deref(app.main.refs.selected_shapes);
var selected_shapes = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected),rumext.v2.adapt(objects)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(app.common.data.getf(objects)),selected);
}));
var first_shape = cljs.core.first(selected_shapes);
var applied_tokens = new cljs.core.Keyword(null,"applied-tokens","applied-tokens",1937742871).cljs$core$IFn$_invoke$arity$1(first_shape);
var has_color_tokens_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"fill","fill",883462889));
var has_stroke_tokens_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(applied_tokens,new cljs.core.Keyword(null,"stroke-color","stroke-color",-1089418937));
var on_token_pill_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_shapes)],(function (event,token){
app.util.dom.stop_propagation(event);

if(cljs.core.seq(selected_shapes)){
return (on_token_change.cljs$core$IFn$_invoke$arity$2 ? on_token_change.cljs$core$IFn$_invoke$arity$2(event,token) : on_token_change.call(null,event,token));
} else {
return null;
}
}));
var create_token_on_set = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(group_or_set)],(function (_){
var path_set = app.main.ui.workspace.colorpicker.color_tokens.group__GT_paths(group_or_set);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.first(new cljs.core.Keyword(null,"sets","sets",400955582).cljs$core$IFn$_invoke$arity$1(group_or_set)));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"layout","layout",-2120940921),new cljs.core.Keyword(null,"tokens","tokens",-818939304)], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(path_set)?potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expand-token-sets","expand-token-sets",1253386),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"paths","paths",-1807389588),path_set], null)):null),app.main.data.workspace.tokens.library_edit.set_selected_token_set_id(id),(function (){var map__54780 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.workspace.tokens.application.token_properties,new cljs.core.Keyword(null,"color","color",1011675173));
var map__54780__$1 = cljs.core.__destructure_map(map__54780);
var modal = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54780__$1,new cljs.core.Keyword(null,"modal","modal",-1031880850));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54780__$1,new cljs.core.Keyword(null,"title","title",636505583));
var window_size = app.util.dom.get_window_size();
var left_sidebar = app.util.dom.get_element("left-sidebar-aside");
var x_size = app.util.dom.get_data(left_sidebar,"width");
var modal_height = (392);
var x = ((x_size | (0)) - (30));
var y = ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(window_size) / (2)) - (modal_height / (2)));
return app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"key","key",-1516042587).cljs$core$IFn$_invoke$arity$1(modal),new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"x","x",2099068185),x,new cljs.core.Keyword(null,"y","y",-1757859776),y,new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"fields","fields",-1932066230),new cljs.core.Keyword(null,"fields","fields",-1932066230).cljs$core$IFn$_invoke$arity$1(modal),new cljs.core.Keyword(null,"title","title",636505583),title,new cljs.core.Keyword(null,"action","action",-811238024),"create",new cljs.core.Keyword(null,"token-type","token-type",-835337612),new cljs.core.Keyword(null,"color","color",1011675173)], null));
})()], 0));
}));
var icon_id = (cljs.core.truth_(collapsed)?app.main.ui.ds.foundations.assets.icon.arrow_right:app.main.ui.ds.foundations.assets.icon.arrow_down);
return rumext.v2.jsxs("article",{'className':"main_ui_workspace_colorpicker_color_tokens__color-token-set",'children':[rumext.v2.jsxs("header",{'className':"main_ui_workspace_colorpicker_color_tokens__set-title-bar",'children':[rumext.v2.jsxs("button",{'aria-controls':["set-panel-",app.common.data.name(name)].join(''),'aria-expanded':cljs.core.not(collapsed),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("inspect.tabs.styles.toggle-style",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([name], 0)),'onClick':toggle_set,'className':"main_ui_workspace_colorpicker_color_tokens__set-title-btn",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':icon_id,'size':"s",'className':"main_ui_workspace_colorpicker_color_tokens__set-title-icon"}),rumext.v2.jsx("span",{'className':"main_ui_workspace_colorpicker_color_tokens__set-title",'children':name})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_color_tokens__set-title-actions"+" "+(cljs.core.truth_(collapsed)?"main_ui_workspace_colorpicker_color_tokens__set-title-action-hidden":""),'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'onClick':toggle_list_style,'variant':"action",'aria-label':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"list","list",765357683),list_style))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.grid-view"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.list-view")),'icon':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"list","list",765357683),list_style))?app.main.ui.ds.foundations.assets.icon.flex_grid:app.main.ui.ds.foundations.assets.icon.view_as_list)}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'onClick':create_token_on_set,'variant':"action",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.add-token",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["color"], 0)),'icon':app.main.ui.ds.foundations.assets.icon.add})]})]}),((cljs.core.not(collapsed))?rumext.v2.jsx("div",{'id':["set-panel-",app.common.data.name(name)].join(''),'className':"main_ui_workspace_colorpicker_color_tokens__color-token-list"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(list_style,new cljs.core.Keyword(null,"list","list",765357683)))?"main_ui_workspace_colorpicker_color_tokens__list-view":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(list_style,new cljs.core.Keyword(null,"grid","grid",402978600)))?"main_ui_workspace_colorpicker_color_tokens__grid-view":""),'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,token){
out_arr__35152__auto__.push((function (){var selected_QMARK_ = (function (){var G__54785 = color_origin;
var G__54785__$1 = (((G__54785 instanceof cljs.core.Keyword))?G__54785.fqn:null);
switch (G__54785__$1) {
case "fill":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(has_color_tokens_QMARK_,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token));

break;
case "stroke-color":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(has_stroke_tokens_QMARK_,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token));

break;
case "color-selection":
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(applied_token,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token));

break;
default:
return false;

}
})();
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"grid","grid",402978600),list_style)){
return rumext.v2.jsx(app.main.ui.workspace.colorpicker.color_tokens.grid_item_STAR_,{'onTokenPillClick':on_token_pill_click,'selected':selected_QMARK_,'token':token},["token-grid-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token))].join(''));
} else {
return rumext.v2.jsx(app.main.ui.workspace.colorpicker.color_tokens.list_item_STAR_,{'onTokenPillClick':on_token_pill_click,'selected':selected_QMARK_,'token':token},["token-list-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(token))].join(''));
}
})());

return out_arr__35152__auto__;
}),[],new cljs.core.Keyword(null,"tokens","tokens",-818939304).cljs$core$IFn$_invoke$arity$1(group_or_set))}):null)]});
});

(app.main.ui.workspace.colorpicker.color_tokens.set_section_STAR_.displayName = "set-section*");

app.main.ui.workspace.colorpicker.color_tokens.label_group_or_set = (function app$main$ui$workspace$colorpicker$color_tokens$label_group_or_set(p__54787){
var map__54788 = p__54787;
var map__54788__$1 = cljs.core.__destructure_map(map__54788);
var group = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54788__$1,new cljs.core.Keyword(null,"group","group",582596132));
var sets = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54788__$1,new cljs.core.Keyword(null,"sets","sets",400955582));
if(cljs.core.truth_(group)){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(group)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),sets))),")"].join('');
} else {
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(cljs.core.first(sets));
}
});
/**
 * Filters the combined-tokens structure by token name.
 * Removes sets or groups if they end up with no tokens.
 * 
 * Input:
 * [{:group "brand", :sets ["light" "dark"], :tokens [{:name "background"} {:name "foreground"}]}
 *  {:group nil, :sets ["primitivos"], :tokens [{:name "blue-100"} {:name "red-100"}]}]
 * 
 * (filter-combined-tokens ... "blue")
 * Output:
 * [{:group nil, :sets ["primitivos"], :tokens [{:name "blue-100"}]}]
 * => keeps only tokens matching "blue", and removes sets/groups if no tokens match.
 */
app.main.ui.workspace.colorpicker.color_tokens.filter_combined_tokens = (function app$main$ui$workspace$colorpicker$color_tokens$filter_combined_tokens(combined_tokens,term){
var term__$1 = cuerdas.core.lower(cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(term));
if(cuerdas.core.blank_QMARK_(term__$1)){
return combined_tokens;
} else {
return cljs.core.remove.cljs$core$IFn$_invoke$arity$2(cljs.core.nil_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__54790){
var map__54792 = p__54790;
var map__54792__$1 = cljs.core.__destructure_map(map__54792);
var entry = map__54792__$1;
var tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54792__$1,new cljs.core.Keyword(null,"tokens","tokens",-818939304));
var filtered = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54789_SHARP_){
return cuerdas.core.includes_QMARK_(cuerdas.core.lower(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__54789_SHARP_)),term__$1);
}),tokens);
if(cljs.core.seq(filtered)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entry,new cljs.core.Keyword(null,"tokens","tokens",-818939304),filtered);
} else {
return null;
}
}),combined_tokens));
}
});
/**
 * Sorts tokens alphabetically by :name inside each group/set.
 * Input:
 * [{:group "brand", :sets ["light" "dark"], :tokens [{:name "foreground"} {:name "background"}]}]
 * 
 * Output:
 * [{:group "brand", :sets ["light" "dark"], :tokens [{:name "background"} {:name "foreground"}]}]
 */
app.main.ui.workspace.colorpicker.color_tokens.sort_combined_tokens = (function app$main$ui$workspace$colorpicker$color_tokens$sort_combined_tokens(combined_tokens){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (entry){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(entry,new cljs.core.Keyword(null,"tokens","tokens",-818939304),(function (p1__54793_SHARP_){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),p1__54793_SHARP_);
}));
}),combined_tokens);
});
app.main.ui.workspace.colorpicker.color_tokens.token_section_STAR_ = (function app$main$ui$workspace$colorpicker$color_tokens$token_section_STAR_(props_54794){
var on_token_change = undefined;
var combined_tokens = undefined;
var applied_token = undefined;
var color_origin = undefined;
var props = undefined;
var {"combinedTokens": combined_tokens, "colorOrigin": color_origin, "onTokenChange": on_token_change, "appliedToken": applied_token, ...props} = props_54794;

var sets = cljs.core.set(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.colorpicker.color_tokens.label_group_or_set,combined_tokens));
var filter_term_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("");
var filter_term = cljs.core.deref(filter_term_STAR_);
var open_sets_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(sets);
var open_sets = cljs.core.deref(open_sets_STAR_);
var toggle_sets_open = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(open_sets)],(function (name){
if(cljs.core.contains_QMARK_(open_sets,name)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(open_sets_STAR_,cljs.core.disj,name);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(open_sets_STAR_,cljs.core.conj,name);
}
}));
var on_filter_tokens = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(filter_term)],(function (event){
var value = app.util.dom.get_value(app.util.dom.get_target(event));
cljs.core.reset_BANG_(filter_term_STAR_,value);

return cljs.core.reset_BANG_(open_sets_STAR_,sets);
}));
var filtered_combined = app.main.ui.workspace.colorpicker.color_tokens.filter_combined_tokens(combined_tokens,filter_term);
var sorted_tokens = app.main.ui.workspace.colorpicker.color_tokens.sort_combined_tokens(filtered_combined);
if(cljs.core.seq(combined_tokens)){
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_color_tokens__color-tokens-section",'children':[rumext.v2.jsx(app.main.ui.ds.controls.input.input_STAR_,{'placeholder':"Search by token name",'icon':app.main.ui.ds.foundations.assets.icon.search,'maxLength':app.main.constants.max_input_length,'variant':"comfortable",'className':"main_ui_workspace_colorpicker_color_tokens__search-input",'defaultValue':filter_term,'onChange':on_filter_tokens}),((cljs.core.seq(sorted_tokens))?rumext.v2.jsx("div",{'className':"main_ui_workspace_colorpicker_color_tokens__color-tokens-inputs",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,combined_sets){
out_arr__35152__auto__.push((function (){var name = app.main.ui.workspace.colorpicker.color_tokens.label_group_or_set(combined_sets);
return rumext.v2.jsx(app.main.ui.workspace.colorpicker.color_tokens.set_section_STAR_,{'collapsed':(!(cljs.core.contains_QMARK_(open_sets,name))),'toggleSetsOpen':toggle_sets_open,'colorOrigin':color_origin,'onTokenChange':on_token_change,'name':name,'appliedToken':applied_token,'groupOrSet':combined_sets},["set-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(name)].join(''));
})());

return out_arr__35152__auto__;
}),[],sorted_tokens)}):rumext.v2.jsx(app.main.ui.workspace.colorpicker.color_tokens.token_empty_state_STAR_,{}))]});
} else {
return rumext.v2.jsx(app.main.ui.workspace.colorpicker.color_tokens.token_empty_state_STAR_,{});
}
});

(app.main.ui.workspace.colorpicker.color_tokens.token_section_STAR_.displayName = "token-section*");


//# sourceMappingURL=app.main.ui.workspace.colorpicker.color_tokens.js.map
