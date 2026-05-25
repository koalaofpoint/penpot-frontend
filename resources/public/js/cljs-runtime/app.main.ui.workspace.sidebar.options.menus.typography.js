import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$react_virtualized.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.exceptions.js";
import "./app.common.types.text.js";
import "./app.main.constants.js";
import "./app.main.data.common.js";
import "./app.main.data.fonts.js";
import "./app.main.data.shortcuts.js";
import "./app.main.features.js";
import "./app.main.fonts.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.editable_select.js";
import "./app.main.ui.components.numeric_input.js";
import "./app.main.ui.components.radio_buttons.js";
import "./app.main.ui.components.search_bar.js";
import "./app.main.ui.components.select.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./app.util.strings.js";
import "./app.util.timers.js";
import "./cuerdas.core.js";
import "./goog.events.events.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.typography');
app.main.ui.workspace.sidebar.options.menus.typography.attr__GT_string = (function app$main$ui$workspace$sidebar$options$menus$typography$attr__GT_string(value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,new cljs.core.Keyword(null,"multiple","multiple",1244445549))){
return "";
} else {
return app.util.strings.format_precision(value,(2));
}
});
app.main.ui.workspace.sidebar.options.menus.typography.get_next_font = (function app$main$ui$workspace$sidebar$options$menus$typography$get_next_font(p__55114,fonts){
var map__55115 = p__55114;
var map__55115__$1 = cljs.core.__destructure_map(map__55115);
var current = map__55115__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55115__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.seq(fonts)){
var index = app.common.data.index_of_pred(fonts,(function (p1__55113_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55113_SHARP_),id);
}));
var index__$1 = (function (){var or__5025__auto__ = index;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (-1);
}
})();
var next = (function (){try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(fonts,(index__$1 + (1)));
}catch (e55116){var e__32694__auto__ = e55116;
return null;
}})();
var or__5025__auto__ = next;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.first(fonts);
}
} else {
return current;
}
});
app.main.ui.workspace.sidebar.options.menus.typography.get_prev_font = (function app$main$ui$workspace$sidebar$options$menus$typography$get_prev_font(p__55118,fonts){
var map__55119 = p__55118;
var map__55119__$1 = cljs.core.__destructure_map(map__55119);
var current = map__55119__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55119__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
if(cljs.core.seq(fonts)){
var index = app.common.data.index_of_pred(fonts,(function (p1__55117_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55117_SHARP_),id);
}));
var next = (function (){try{return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(fonts,(index - (1)));
}catch (e55120){var e__32694__auto__ = e55120;
return null;
}})();
var or__5025__auto__ = next;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.peek(fonts);
}
} else {
return current;
}
});
app.main.ui.workspace.sidebar.options.menus.typography.font_item_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$sidebar$options$menus$typography$font_item_STAR_(props_55121){
var is_current = props_55121.isCurrent;
var on_click = props_55121.onClick;
var font = props_55121.font;
var style = props_55121.style;
var item_ref = rumext.v2.use_ref();
var on_click__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(font)],(function (){
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(font) : on_click.call(null,font));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(is_current)],(function (){
if(cljs.core.truth_(is_current)){
var element = rumext.v2.ref_val(item_ref);
if(cljs.core.truth_(app.util.dom.is_in_viewport_QMARK_(element))){
return null;
} else {
return app.util.dom.scroll_into_view_BANG_.cljs$core$IFn$_invoke$arity$1(element);
}
} else {
return null;
}
}));

return rumext.v2.jsx("div",{'style':style,'ref':item_ref,'onClick':on_click__$1,'className':"main_ui_workspace_sidebar_options_menus_typography__font-wrapper",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__font-item"+" "+(cljs.core.truth_(is_current)?"main_ui_workspace_sidebar_options_menus_typography__selected":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_typography__label",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(font)}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_typography__icon",'children':(cljs.core.truth_(is_current)?app.main.ui.icons.tick:null)})]})});
}));

(app.main.ui.workspace.sidebar.options.menus.typography.font_item_STAR_.displayName = "font-item*");

app.main.ui.workspace.sidebar.options.menus.typography.filter_fonts = (function app$main$ui$workspace$sidebar$options$menus$typography$filter_fonts(p__55124,fonts){
var map__55125 = p__55124;
var map__55125__$1 = cljs.core.__destructure_map(map__55125);
var term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55125__$1,new cljs.core.Keyword(null,"term","term",-1817390416));
var backends = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55125__$1,new cljs.core.Keyword(null,"backends","backends",-1041162533));
var term__$1 = cuerdas.core.lower(term);
var xform = (function (){var G__55126 = cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.identity);
var G__55126__$1 = ((cljs.core.seq(term__$1))?cljs.core.comp.cljs$core$IFn$_invoke$arity$2(G__55126,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__55122_SHARP_){
return cuerdas.core.includes_QMARK_(cuerdas.core.lower(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__55122_SHARP_)),term__$1);
}))):G__55126);
if(cljs.core.seq(backends)){
return cljs.core.comp.cljs$core$IFn$_invoke$arity$2(G__55126__$1,cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__55123_SHARP_){
return cljs.core.contains_QMARK_(backends,new cljs.core.Keyword(null,"backend","backend",-847489124).cljs$core$IFn$_invoke$arity$1(p1__55123_SHARP_));
})));
} else {
return G__55126__$1;
}
})();
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xform,fonts);
});
app.main.ui.workspace.sidebar.options.menus.typography.font_selector_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$typography$font_selector_STAR_(props_55129){
var current_font = props_55129.currentFont;
var on_close = props_55129.onClose;
var show_recent = props_55129.showRecent;
var full_size = props_55129.fullSize;
var on_select = props_55129.onSelect;
var selected = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(current_font);
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"term","term",-1817390416),"",new cljs.core.Keyword(null,"backends","backends",-1041162533),cljs.core.PersistentHashSet.EMPTY], null);
}));
var state = cljs.core.deref(state_STAR_);
var flist = rumext.v2.use_ref();
var input = rumext.v2.use_ref();
var fonts = rumext.v2.deref(app.main.fonts.fonts);
var fonts__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(state),rumext.v2.adapt(fonts)],(function (){
return app.main.ui.workspace.sidebar.options.menus.typography.filter_fonts(state,fonts);
}));
var recent_fonts = rumext.v2.deref(app.main.refs.recent_fonts);
var recent_fonts__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(state),rumext.v2.adapt(recent_fonts)],(function (){
return app.main.ui.workspace.sidebar.options.menus.typography.filter_fonts(state,recent_fonts);
}));
var full_size_QMARK_ = cljs.core.boolean$((function (){var and__5023__auto__ = full_size;
if(cljs.core.truth_(and__5023__auto__)){
return show_recent;
} else {
return and__5023__auto__;
}
})());
var select_next = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(fonts__$1)],(function (event){
app.util.dom.stop_propagation(event);

app.util.dom.prevent_default(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(selected,app.main.ui.workspace.sidebar.options.menus.typography.get_next_font,fonts__$1);
}));
var select_prev = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(fonts__$1)],(function (event){
app.util.dom.stop_propagation(event);

app.util.dom.prevent_default(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(selected,app.main.ui.workspace.sidebar.options.menus.typography.get_prev_font,fonts__$1);
}));
var on_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(fonts__$1)],(function (event){
if(cljs.core.truth_(app.util.keyboard.up_arrow_QMARK_(event))){
return (select_prev.cljs$core$IFn$_invoke$arity$1 ? select_prev.cljs$core$IFn$_invoke$arity$1(event) : select_prev.call(null,event));
} else {
if(cljs.core.truth_(app.util.keyboard.down_arrow_QMARK_(event))){
return (select_next.cljs$core$IFn$_invoke$arity$1 ? select_next.cljs$core$IFn$_invoke$arity$1(event) : select_next.call(null,event));
} else {
if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else {
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
} else {
return app.util.dom.focus_BANG_(rumext.v2.ref_val(input));

}
}
}
}
}));
var on_filter_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"term","term",-1817390416),event);
}));
var on_select_and_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_select),rumext.v2.adapt(on_close)],(function (font){
(on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(font) : on_select.call(null,font));

return (on_close.cljs$core$IFn$_invoke$arity$0 ? on_close.cljs$core$IFn$_invoke$arity$0() : on_close.call(null));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(fonts__$1)],(function (){
var key = goog.events.listen(document,"keydown",on_key_down);
return (function (){
return goog.events.unlistenByKey(key);
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(selected))],(function (){
var temp__5825__auto__ = rumext.v2.ref_val(flist);
if(cljs.core.truth_(temp__5825__auto__)){
var inst = temp__5825__auto__;
var temp__5825__auto____$1 = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected));
if(cljs.core.truth_(temp__5825__auto____$1)){
var index = temp__5825__auto____$1;
return inst.scrollToRow(index);
} else {
return null;
}
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(selected))],(function (){
var G__55136 = cljs.core.deref(selected);
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(G__55136) : on_select.call(null,G__55136));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.shortcuts.push_shortcuts(new cljs.core.Keyword(null,"typography","typography",-399568138),cljs.core.PersistentArrayMap.EMPTY));

return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.shortcuts.pop_shortcuts(new cljs.core.Keyword(null,"typography","typography",-399568138)));
});
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var index = app.common.data.index_of_pred(fonts__$1,(function (p1__55127_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55127_SHARP_),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current_font));
}));
var inst = rumext.v2.ref_val(flist);
return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
var offset = inst.getOffsetForRow(({"alignment": "center", "index": index}));
return inst.scrollToPosition(offset);
}));
}));

return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__font-selector",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__font-selector-dropdown"+" "+((full_size_QMARK_)?"main_ui_workspace_sidebar_options_menus_typography__font-selector-dropdown-full-size":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__header",'children':[rumext.v2.jsx(app.main.ui.components.search_bar.search_bar_STAR_,{'onChange':on_filter_change,'value':new cljs.core.Keyword(null,"term","term",-1817390416).cljs$core$IFn$_invoke$arity$1(state),'autoFocus':true,'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.search-font")}),(cljs.core.truth_((function (){var and__5023__auto__ = recent_fonts__$1;
if(cljs.core.truth_(and__5023__auto__)){
return show_recent;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsxs("section",{'className':"main_ui_workspace_sidebar_options_menus_typography__show-recent",'children':[rumext.v2.jsx("p",{'className':"main_ui_workspace_sidebar_options_menus_typography__title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.recent-fonts")}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55139){
var vec__55140 = p__55139;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55140,(0),null);
var font = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55140,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.typography.font_item_STAR_,{'font':font,'style':{},'onClick':on_select_and_close,'isCurrent':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(font),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(selected)))},""+"font-"+(idx ?? "")));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(recent_fonts__$1))]}):null)]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__fonts-list"+" "+((full_size_QMARK_)?"main_ui_workspace_sidebar_options_menus_typography__fonts-list-full-size":""),'children':rumext.v2.jsx(shadow.js.shim.module$react_virtualized.AutoSizer,{'children':(function (props){
var width = (props["width"]);
var height = (props["height"]);
var render = (function (p1__55128_SHARP_){
var G__55146 = fonts__$1;
var G__55147 = cljs.core.deref(selected);
var G__55148 = on_select_and_close;
var G__55149 = p1__55128_SHARP_;
return (app.main.ui.workspace.sidebar.options.menus.typography.row_renderer.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.workspace.sidebar.options.menus.typography.row_renderer.cljs$core$IFn$_invoke$arity$4(G__55146,G__55147,G__55148,G__55149) : app.main.ui.workspace.sidebar.options.menus.typography.row_renderer.call(null,G__55146,G__55147,G__55148,G__55149));
});
return rumext.v2.create_element(shadow.js.shim.module$react_virtualized.List,({"height": height, "ref": flist, "width": width, "rowCount": cljs.core.count(fonts__$1), "rowHeight": (36), "rowRenderer": render}));
})})})]})});
});

(app.main.ui.workspace.sidebar.options.menus.typography.font_selector_STAR_.displayName = "font-selector*");

app.main.ui.workspace.sidebar.options.menus.typography.row_renderer = (function app$main$ui$workspace$sidebar$options$menus$typography$row_renderer(fonts,selected,on_select,props){
var index = (props["index"]);
var key = (props["key"]);
var style = (props["style"]);
var font = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(fonts,index);
return rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.typography.font_item_STAR_,{'font':font,'style':style,'onClick':on_select,'isCurrent':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(font),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(selected))},key);
});
app.main.ui.workspace.sidebar.options.menus.typography.font_options = (function app$main$ui$workspace$sidebar$options$menus$typography$font_options(props_55163){
var on_change = (props_55163["on-change"]);
var full_size_selector = (props_55163["full-size-selector"]);
var on_blur = (props_55163["on-blur"]);
var show_recent = (props_55163["show-recent"]);
var values = props_55163.values;
var map__55164 = values;
var map__55164__$1 = cljs.core.__destructure_map(map__55164);
var font_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55164__$1,new cljs.core.Keyword(null,"font-id","font-id",-390084123));
var font_size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55164__$1,new cljs.core.Keyword(null,"font-size","font-size",-1847940346));
var font_variant_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55164__$1,new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718));
var font_id__$1 = (function (){var or__5025__auto__ = font_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(app.common.types.text.default_typography);
}
})();
var font_size__$1 = (function (){var or__5025__auto__ = font_size;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(app.common.types.text.default_typography);
}
})();
var font_variant_id__$1 = (function (){var or__5025__auto__ = font_variant_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718).cljs$core$IFn$_invoke$arity$1(app.common.types.text.default_typography);
}
})();
var fonts = rumext.v2.deref(app.main.fonts.fontsdb);
var font = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fonts,font_id__$1);
var last_font = rumext.v2.use_ref(null);
var open_selector_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var change_font = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change),rumext.v2.adapt(fonts)],(function (new_font_id){
var map__55165 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fonts,new_font_id);
var map__55165__$1 = cljs.core.__destructure_map(map__55165);
var font__$1 = map__55165__$1;
var family = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55165__$1,new cljs.core.Keyword(null,"family","family",-1313145692));
var map__55166 = app.main.fonts.get_default_variant(font__$1);
var map__55166__$1 = cljs.core.__destructure_map(map__55166);
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55166__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55166__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var weight = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55166__$1,new cljs.core.Keyword(null,"weight","weight",-1262796205));
var style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55166__$1,new cljs.core.Keyword(null,"style","style",-496642736));
var G__55167_55203 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),new_font_id,new cljs.core.Keyword(null,"font-family","font-family",-667419874),family,new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),(function (){var or__5025__auto__ = id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return name;
}
})(),new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),weight,new cljs.core.Keyword(null,"font-style","font-style",-773672352),style], null);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55167_55203) : on_change.call(null,G__55167_55203));

return rumext.v2.set_ref_val_BANG_(last_font,font__$1);
}));
var on_font_size_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change)],(function (new_font_size){
if(cuerdas.core.empty_QMARK_(new_font_size)){
return null;
} else {
var G__55168 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"font-size","font-size",-1847940346),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new_font_size)], null);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55168) : on_change.call(null,G__55168));
}
}));
var on_font_variant_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(font),rumext.v2.adapt(on_change)],(function (new_variant_id){
var variant = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__55162_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_variant_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__55162_SHARP_));
}),new cljs.core.Keyword(null,"variants","variants",-176391100).cljs$core$IFn$_invoke$arity$1(font));
if((variant == null)){
} else {
var G__55169_55204 = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"font-id","font-id",-390084123),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(font),new cljs.core.Keyword(null,"font-family","font-family",-667419874),new cljs.core.Keyword(null,"family","family",-1313145692).cljs$core$IFn$_invoke$arity$1(font),new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718),new_variant_id,new cljs.core.Keyword(null,"font-weight","font-weight",2085804583),new cljs.core.Keyword(null,"weight","weight",-1262796205).cljs$core$IFn$_invoke$arity$1(variant),new cljs.core.Keyword(null,"font-style","font-style",-773672352),new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$1(variant)], null);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55169_55204) : on_change.call(null,G__55169_55204));
}

if((!((on_blur == null)))){
return (on_blur.cljs$core$IFn$_invoke$arity$0 ? on_blur.cljs$core$IFn$_invoke$arity$0() : on_blur.call(null));
} else {
return null;
}
}));
var on_font_select = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(change_font)],(function (font_STAR_){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(font,font_STAR_)){
var G__55171_55205 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(font_STAR_);
(change_font.cljs$core$IFn$_invoke$arity$1 ? change_font.cljs$core$IFn$_invoke$arity$1(G__55171_55205) : change_font.call(null,G__55171_55205));
} else {
}

if((!((on_blur == null)))){
return (on_blur.cljs$core$IFn$_invoke$arity$0 ? on_blur.cljs$core$IFn$_invoke$arity$0() : on_blur.call(null));
} else {
return null;
}
}));
var on_font_selector_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
cljs.core.reset_BANG_(open_selector_QMARK_,false);

if((!((on_blur == null)))){
(on_blur.cljs$core$IFn$_invoke$arity$0 ? on_blur.cljs$core$IFn$_invoke$arity$0() : on_blur.call(null));
} else {
}

if(cljs.core.truth_(rumext.v2.ref_val(last_font))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.fonts.add_recent_font(rumext.v2.ref_val(last_font)));
} else {
return null;
}
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_(cljs.core.deref(open_selector_QMARK_))?rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.typography.font_selector_STAR_,{'currentFont':font,'onClose':on_font_selector_close,'onSelect':on_font_select,'fullSize':full_size_selector,'showRecent':show_recent}):null),rumext.v2.jsx("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.typography.font-family"),'onClick':(function (){
return cljs.core.reset_BANG_(open_selector_QMARK_,true);
}),'className':"main_ui_workspace_sidebar_options_menus_typography__font-option",'children':((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),font_id__$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("mixed",font_id__$1))))?"--":(((!((font == null))))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_typography__name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(font)}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_typography__icon",'children':app.main.ui.icons.arrow})]}):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.fonts.deleted-placeholder")
))}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__font-modifiers",'children':[rumext.v2.jsx("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.typography.font-size"),'className':"main_ui_workspace_sidebar_options_menus_typography__font-size-options",'children':(function (){var size_options = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(8),(9),(10),(11),(12),(14),(16),(18),(24),(36),(48),(72)], null);
var size_options__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(font_size__$1,new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [""], null),size_options):size_options);
return rumext.v2.jsx(app.main.ui.components.editable_select.editable_select,{'min':(3),'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"),'value':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(font_size__$1,new cljs.core.Keyword(null,"multiple","multiple",1244445549)))?new cljs.core.Keyword(null,"multiple","multiple",1244445549):app.main.ui.workspace.sidebar.options.menus.typography.attr__GT_string(font_size__$1)),'on-blur':on_blur,'type':"number",'input-class':"main_ui_workspace_sidebar_options_menus_typography__numeric-input",'max':(1000),'class':"main_ui_workspace_sidebar_options_menus_typography__font-size-select",'options':size_options__$1,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.typography.font-size"),'on-change':on_font_size_change});
})()}),rumext.v2.jsx("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.typography.font-style"),'className':"main_ui_workspace_sidebar_options_menus_typography__font-variant-options",'children':(function (){var basic_variant_options = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (variant){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(variant),new cljs.core.Keyword(null,"key","key",-1516042587),cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([variant], 0)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(variant)], null);
}),new cljs.core.Keyword(null,"variants","variants",-176391100).cljs$core$IFn$_invoke$arity$1(font));
var variant_options = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(font_variant_id__$1,new cljs.core.Keyword(null,"multiple","multiple",1244445549))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(font_variant_id__$1,"mixed"))))?cljs.core.conj.cljs$core$IFn$_invoke$arity$2(basic_variant_options,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"key","key",-1516042587),new cljs.core.Keyword(null,"multiple-variants","multiple-variants",-1555709443),new cljs.core.Keyword(null,"label","label",1718410804),"--"], null)):basic_variant_options);
var font_variant_value = app.main.ui.workspace.sidebar.options.menus.typography.attr__GT_string(font_variant_id__$1);
var font_variant_value__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(font_variant_value,"mixed"))?"":font_variant_value);
return rumext.v2.jsx(app.main.ui.components.select.select,{'class':"main_ui_workspace_sidebar_options_menus_typography__font-variant-select",'default-value':font_variant_value__$1,'options':variant_options,'on-change':on_font_variant_change,'on-blur':on_blur});
})()})]})]});
});

(app.main.ui.workspace.sidebar.options.menus.typography.font_options.displayName = "font-options");

app.main.ui.workspace.sidebar.options.menus.typography.spacing_options = (function app$main$ui$workspace$sidebar$options$menus$typography$spacing_options(props_55174){
var on_change = (props_55174["on-change"]);
var on_blur = (props_55174["on-blur"]);
var values = props_55174.values;
var map__55175 = values;
var map__55175__$1 = cljs.core.__destructure_map(map__55175);
var line_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55175__$1,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
var letter_spacing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55175__$1,new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767));
var line_height__$1 = (function (){var or__5025__auto__ = line_height;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "1.2";
}
})();
var letter_spacing__$1 = (function (){var or__5025__auto__ = letter_spacing;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "0";
}
})();
var handle_change = (function (value,attr){
var G__55176 = cljs.core.PersistentArrayMap.createAsIfByAssoc([attr,cljs.core.str.cljs$core$IFn$_invoke$arity$1(value)]);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55176) : on_change.call(null,G__55176));
});
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__spacing-options",'children':[rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.typography.line-height"),'className':"main_ui_workspace_sidebar_options_menus_typography__line-height",'children':[rumext.v2.jsx("span",{'alt':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.text-options.line-height"),'className':"main_ui_workspace_sidebar_options_menus_typography__icon",'children':app.main.ui.icons.text_lineheight}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'min':(-200),'onChange':(function (p1__55172_SHARP_){
return handle_change(p1__55172_SHARP_,new cljs.core.Keyword(null,"line-height","line-height",1870784992));
}),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.typography.line-height"),'className':"main_ui_workspace_sidebar_options_menus_typography__line-height-input",'placeholder':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),line_height__$1))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'max':(200),'value':app.main.ui.workspace.sidebar.options.menus.typography.attr__GT_string(line_height__$1),'onBlur':on_blur,'nillable':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),line_height__$1),'defaultValue':"1.2",'step':0.1})]}),rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.typography.letter-spacing"),'className':"main_ui_workspace_sidebar_options_menus_typography__letter-spacing",'children':[rumext.v2.jsx("span",{'alt':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.text-options.letter-spacing"),'className':"main_ui_workspace_sidebar_options_menus_typography__icon",'children':app.main.ui.icons.text_letterspacing}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'min':(-200),'onChange':(function (p1__55173_SHARP_){
return handle_change(p1__55173_SHARP_,new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767));
}),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.typography.letter-spacing"),'className':"main_ui_workspace_sidebar_options_menus_typography__letter-spacing-input",'placeholder':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),letter_spacing__$1))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple"):"--"),'max':(200),'value':app.main.ui.workspace.sidebar.options.menus.typography.attr__GT_string(letter_spacing__$1),'onBlur':on_blur,'nillable':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),letter_spacing__$1),'defaultValue':"0",'step':0.1})]})]});
});

(app.main.ui.workspace.sidebar.options.menus.typography.spacing_options.displayName = "spacing-options");

app.main.ui.workspace.sidebar.options.menus.typography.text_transform_options = (function app$main$ui$workspace$sidebar$options$menus$typography$text_transform_options(props_55179){
var on_change = (props_55179["on-change"]);
var on_blur = (props_55179["on-blur"]);
var values = props_55179.values;
var text_transform = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"text-transform","text-transform",1685000676).cljs$core$IFn$_invoke$arity$1(values);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "none";
}
})();
var unset_value = (cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"text-editor/v2"))?"none":"unset");
var handle_change = (function (type){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(text_transform,type)){
var G__55184_55206 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),unset_value], null);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55184_55206) : on_change.call(null,G__55184_55206));
} else {
var G__55185_55207 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"text-transform","text-transform",1685000676),type], null);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55185_55207) : on_change.call(null,G__55185_55207));
}

if((!((on_blur == null)))){
return (on_blur.cljs$core$IFn$_invoke$arity$0 ? on_blur.cljs$core$IFn$_invoke$arity$0() : on_blur.call(null));
} else {
return null;
}
});
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__text-transform",'children':rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':text_transform,'on-change':handle_change,'name':"text-transform",'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.text_uppercase,'type':"checkbox",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.typography.text-transform.uppercase"),'value':"uppercase",'id':"text-transform-uppercase"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.text_mixed,'type':"checkbox",'value':"capitalize",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.typography.text-transform.capitalize"),'id':"text-transform-capitalize"}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'icon':app.main.ui.ds.foundations.assets.icon.text_lowercase,'type':"checkbox",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("inspect.attributes.typography.text-transform.lowercase"),'value':"lowercase",'id':"text-transform-lowercase"})]})});
});

(app.main.ui.workspace.sidebar.options.menus.typography.text_transform_options.displayName = "text-transform-options");

app.main.ui.workspace.sidebar.options.menus.typography.text_options = (function app$main$ui$workspace$sidebar$options$menus$typography$text_options(props_55188){
var on_change = (props_55188["on-change"]);
var on_blur = (props_55188["on-blur"]);
var show_recent = (props_55188["show-recent"]);
var ids = props_55188.ids;
var values = props_55188.values;
var editor = props_55188.editor;
var full_size_selector_QMARK_ = (function (){var and__5023__auto__ = show_recent;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(rumext.v2.use_ctx(app.main.ui.context.sidebar),new cljs.core.Keyword(null,"right","right",-452581833));
} else {
return and__5023__auto__;
}
})();
var opts = ({"editor": editor, "ids": ids, "values": values, "on-change": on_change, "on-blur": on_blur, "show-recent": show_recent, "full-size-selector": full_size_selector_QMARK_});
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__text-options"+" "+(cljs.core.truth_(full_size_selector_QMARK_)?"main_ui_workspace_sidebar_options_menus_typography__text-options-full-size":""),'children':[rumext.v2.create_element(app.main.ui.workspace.sidebar.options.menus.typography.font_options,opts),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__typography-variations",'children':[rumext.v2.create_element(app.main.ui.workspace.sidebar.options.menus.typography.spacing_options,opts),rumext.v2.create_element(app.main.ui.workspace.sidebar.options.menus.typography.text_transform_options,opts)]})]});
});

(app.main.ui.workspace.sidebar.options.menus.typography.text_options.displayName = "text-options");

app.main.ui.workspace.sidebar.options.menus.typography.typography_advanced_options = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$sidebar$options$menus$typography$typography_advanced_options(props_55189){
var map__55194 = rumext.v2.util.wrap_props(props_55189);
var map__55194__$1 = cljs.core.__destructure_map(map__55194);
var name_input_ref = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55194__$1,new cljs.core.Keyword(null,"name-input-ref","name-input-ref",-188911910));
var on_key_down = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55194__$1,new cljs.core.Keyword(null,"on-key-down","on-key-down",-1374733765));
var on_change = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55194__$1,new cljs.core.Keyword(null,"on-change","on-change",-732046149));
var navigate_to_library = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55194__$1,new cljs.core.Keyword(null,"navigate-to-library","navigate-to-library",184349536));
var on_name_blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55194__$1,new cljs.core.Keyword(null,"on-name-blur","on-name-blur",64241635));
var visible_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55194__$1,new cljs.core.Keyword(null,"visible?","visible?",2129863715));
var on_close = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55194__$1,new cljs.core.Keyword(null,"on-close","on-close",-761178394));
var local_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55194__$1,new cljs.core.Keyword(null,"local?","local?",-1422786101));
var editable_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55194__$1,new cljs.core.Keyword(null,"editable?","editable?",-1805477333));
var typography = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55194__$1,new cljs.core.Keyword(null,"typography","typography",-399568138));
var ref = rumext.v2.use_ref(null);
var font_data = app.main.fonts.get_font_data(new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(typography));
app.main.fonts.ensure_loaded_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(typography));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(visible_QMARK_)],(function (){
var temp__5825__auto__ = rumext.v2.ref_val(ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
if(cljs.core.truth_(visible_QMARK_)){
return app.util.dom.scroll_into_view_if_needed_BANG_.cljs$core$IFn$_invoke$arity$1(node);
} else {
return null;
}
} else {
return null;
}
}));

if(cljs.core.truth_(visible_QMARK_)){
return rumext.v2.jsx("div",{'ref':ref,'className':"main_ui_workspace_sidebar_options_menus_typography__advanced-options-wrapper",'children':((editable_QMARK_)?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__font-name-wrapper",'children':[rumext.v2.jsx("div",{'style':{'fontFamily':new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(typography),'fontWeight':new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(typography),'fontStyle':new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(typography)},'className':"main_ui_workspace_sidebar_options_menus_typography__typography-sample-input",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.typography.sample")}),rumext.v2.jsx("input",{'type':"text",'ref':name_input_ref,'defaultValue':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(typography),'maxLength':app.main.constants.max_input_length,'onKeyDown':on_key_down,'onBlur':on_name_blur,'className':"main_ui_workspace_sidebar_options_menus_typography__adv-typography-name"}),rumext.v2.jsx("div",{'onClick':on_close,'className':"main_ui_workspace_sidebar_options_menus_typography__action-btn",'children':app.main.ui.icons.tick})]}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.typography.text_options,{'values':typography,'on-change':on_change,'show-recent':false})]}):rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__typography-info-wrapper",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__typography-name-wrapper",'children':[rumext.v2.jsx("div",{'style':{'fontFamily':new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(typography),'fontWeight':new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(typography),'fontStyle':new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(typography)},'className':"main_ui_workspace_sidebar_options_menus_typography__typography-sample",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.typography.sample")}),rumext.v2.jsx("div",{'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(typography),'className':"main_ui_workspace_sidebar_options_menus_typography__typography-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(typography)}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_typography__typography-font",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(font_data)}),rumext.v2.jsx("div",{'onClick':on_close,'className':"main_ui_workspace_sidebar_options_menus_typography__action-btn",'children':app.main.ui.icons.menu})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__info-row",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_typography__info-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.typography.font-style")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_typography__info-content",'children':new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718).cljs$core$IFn$_invoke$arity$1(typography)})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__info-row",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_typography__info-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.typography.font-size")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_typography__info-content",'children':new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(typography)})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__info-row",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_typography__info-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.typography.line-height")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_typography__info-content",'children':new cljs.core.Keyword(null,"line-height","line-height",1870784992).cljs$core$IFn$_invoke$arity$1(typography)})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__info-row",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_typography__info-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.typography.letter-spacing")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_typography__info-content",'children':new cljs.core.Keyword(null,"letter-spacing","letter-spacing",-948993767).cljs$core$IFn$_invoke$arity$1(typography)})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__info-row",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_typography__info-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.typography.text-transform")}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_typography__info-content",'children':new cljs.core.Keyword(null,"text-transform","text-transform",1685000676).cljs$core$IFn$_invoke$arity$1(typography)})]}),(cljs.core.truth_(local_QMARK_)?null:rumext.v2.jsx("a",{'onClick':navigate_to_library,'className':"main_ui_workspace_sidebar_options_menus_typography__link-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.typography.go-to-edit")}))]}))});
} else {
return null;
}
}));

(app.main.ui.workspace.sidebar.options.menus.typography.typography_advanced_options.displayName = "typography-advanced-options");

app.main.ui.workspace.sidebar.options.menus.typography.typography_entry = (function app$main$ui$workspace$sidebar$options$menus$typography$typography_entry(props_55201){
var on_change = (props_55201["on-change"]);
var selected_QMARK_ = (props_55201["selected?"]);
var editing_QMARK_ = (props_55201["editing?"]);
var focus_name_QMARK_ = (props_55201["focus-name?"]);
var file_id = (props_55201["file-id"]);
var external_open_STAR_ = (props_55201["external-open*"]);
var renaming_QMARK_ = (props_55201["renaming?"]);
var local_QMARK_ = (props_55201["local?"]);
var on_context_menu = (props_55201["on-context-menu"]);
var on_click = (props_55201["on-click"]);
var typography = props_55201.typography;
var on_detach = (props_55201["on-detach"]);
var name_input_ref = rumext.v2.use_ref();
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var editable_QMARK_ = (function (){var and__5023__auto__ = local_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(read_only_QMARK_);
} else {
return and__5023__auto__;
}
})();
var open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(editing_QMARK_);
var open_QMARK_ = cljs.core.deref(open_STAR_);
var font_data = app.main.fonts.get_font_data(new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(typography));
var name_only_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(typography),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(font_data));
var on_name_blur = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change)],(function (event){
var name = app.util.dom.get_target_val(event);
if(cuerdas.core.blank_QMARK_(name)){
return null;
} else {
var G__55202_55209 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55202_55209) : on_change.call(null,G__55202_55209));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1((function (p1__55200_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__55200_SHARP_,new cljs.core.Keyword(null,"workspace-global","workspace-global",-1341112178),cljs.core.dissoc,new cljs.core.Keyword(null,"rename-typography","rename-typography",-1476102726));
}));
}
}));
var on_open = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(open_STAR_,true);
}));
var on_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(open_STAR_,false);
}));
var navigate_to_library = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (){
if(cljs.core.truth_(file_id)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id], 0)));
} else {
return null;
}
}));
var on_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var enter_QMARK_ = app.util.keyboard.enter_QMARK_(event);
var esc_QMARK_ = app.util.keyboard.esc_QMARK_(event);
var input_node = app.util.dom.get_target(event);
if(enter_QMARK_){
app.util.dom.blur_BANG_(input_node);
} else {
}

if(esc_QMARK_){
return app.util.dom.blur_BANG_(input_node);
} else {
return null;
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(editing_QMARK_)],(function (){
if(cljs.core.truth_(editing_QMARK_)){
return cljs.core.reset_BANG_(open_STAR_,editing_QMARK_);
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(open_QMARK_)],(function (){
if((!((external_open_STAR_ == null)))){
return cljs.core.reset_BANG_(external_open_STAR_,open_QMARK_);
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(focus_name_QMARK_)],(function (){
if(cljs.core.truth_(focus_name_QMARK_)){
return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
var temp__5825__auto__ = rumext.v2.ref_val(name_input_ref);
if(cljs.core.truth_(temp__5825__auto__)){
var node = temp__5825__auto__;
app.util.dom.focus_BANG_(node);

return app.util.dom.select_text_BANG_(node);
} else {
return null;
}
}));
} else {
return null;
}
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'style':{'display':((open_QMARK_)?"none":null)},'className':"main_ui_workspace_sidebar_options_menus_typography__typography-entry"+" "+((selected_QMARK_)?"main_ui_workspace_sidebar_options_menus_typography__selected":""),'children':[(cljs.core.truth_(renaming_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__font-name-wrapper",'children':[rumext.v2.jsx("div",{'style':{'fontFamily':new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(typography),'fontWeight':new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(typography),'fontStyle':new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(typography)},'className':"main_ui_workspace_sidebar_options_menus_typography__typography-sample-input",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.typography.sample")}),rumext.v2.jsx("input",{'type':"text",'ref':name_input_ref,'defaultValue':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(typography),'maxLength':app.main.constants.max_input_length,'onKeyDown':on_key_down,'onBlur':on_name_blur,'className':"main_ui_workspace_sidebar_options_menus_typography__adv-typography-name"})]}):rumext.v2.jsxs("div",{'onClick':on_click,'onContextMenu':on_context_menu,'className':"main_ui_workspace_sidebar_options_menus_typography__typography-selection-wrapper"+" "+((on_click)?"main_ui_workspace_sidebar_options_menus_typography__is-selectable":""),'children':[rumext.v2.jsx("div",{'style':{'fontFamily':new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(typography),'fontWeight':new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(typography),'fontStyle':new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(typography)},'className':"main_ui_workspace_sidebar_options_menus_typography__typography-sample",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.typography.sample")}),rumext.v2.jsx("div",{'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(typography),'className':"main_ui_workspace_sidebar_options_menus_typography__typography-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(typography)}),((name_only_QMARK_)?null:rumext.v2.jsx("div",{'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(font_data),'className':"main_ui_workspace_sidebar_options_menus_typography__typography-font",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(font_data)}))]})),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_typography__element-set-actions",'children':[((on_detach)?rumext.v2.jsx("button",{'onClick':on_detach,'className':"main_ui_workspace_sidebar_options_menus_typography__element-set-actions-button",'children':app.main.ui.icons.detach}):null),rumext.v2.jsx("button",{'onClick':on_open,'className':"main_ui_workspace_sidebar_options_menus_typography__menu-btn",'children':app.main.ui.icons.menu})]})]}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.typography.typography_advanced_options,{'navigate-to-library':navigate_to_library,'visible?':open_QMARK_,'on-name-blur':on_name_blur,'on-close':on_close,'local?':local_QMARK_,'editable?':editable_QMARK_,'typography':typography,'name-input-ref':name_input_ref,'on-change':on_change,'on-key-down':on_key_down})]});
});

(app.main.ui.workspace.sidebar.options.menus.typography.typography_entry.displayName = "typography-entry");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.typography.js.map
