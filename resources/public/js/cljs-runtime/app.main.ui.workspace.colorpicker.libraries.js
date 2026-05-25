import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.types.color.js";
import "./app.common.uuid.js";
import "./app.main.data.event.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.colors.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.color_bullet.js";
import "./app.main.ui.components.select.js";
import "./app.main.ui.context.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.hooks.resize.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.colorpicker.libraries');
app.main.ui.workspace.colorpicker.libraries.libraries = (function app$main$ui$workspace$colorpicker$libraries$libraries(props_54764){
var map__54765 = rumext.v2.util.wrap_props(props_54764);
var map__54765__$1 = cljs.core.__destructure_map(map__54765);
var state = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54765__$1,new cljs.core.Keyword(null,"state","state",-1988618099));
var on_select_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54765__$1,new cljs.core.Keyword(null,"on-select-color","on-select-color",1794516753));
var on_add_library_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54765__$1,new cljs.core.Keyword(null,"on-add-library-color","on-add-library-color",1810204545));
var disable_gradient = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54765__$1,new cljs.core.Keyword(null,"disable-gradient","disable-gradient",669966752));
var disable_opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54765__$1,new cljs.core.Keyword(null,"disable-opacity","disable-opacity",1547998851));
var disable_image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54765__$1,new cljs.core.Keyword(null,"disable-image","disable-image",-1920778139));
var selected_STAR_ = app.main.ui.hooks.use_shared_state(new cljs.core.Keyword("app.main.data.workspace.colors","colorpicker-selected","app.main.data.workspace.colors/colorpicker-selected",284549186),new cljs.core.Keyword(null,"recent","recent",449517715));
var selected = cljs.core.deref(selected_STAR_);
var file_id = rumext.v2.use_ctx(app.main.ui.context.current_file_id);
var current_colors_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentVector.EMPTY);
var current_colors = cljs.core.deref(current_colors_STAR_);
var libraries__$1 = rumext.v2.deref(app.main.refs.libraries);
var recent_colors = rumext.v2.deref(app.main.refs.recent_colors);
var recent_colors__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(recent_colors)],(function (){
return cljs.core.filterv(app.common.types.color.valid_color_QMARK_,recent_colors);
}));
var library_options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"recent",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.colors.recent-colors")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"file",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.colors.file-library")], null)], null);
}));
var options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(library_options),rumext.v2.adapt(libraries__$1),rumext.v2.adapt(file_id)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(library_options,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.val),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (lib){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),app.common.data.name(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(lib)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(lib)], null);
}))),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(libraries__$1,file_id));
}));
var on_library_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
return cljs.core.reset_BANG_(selected_STAR_,((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,"recent")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(event,"file"))))?cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(event):app.common.uuid.parse(event)));
}));
var valid_color_QMARK_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(disable_gradient),rumext.v2.adapt(disable_opacity),rumext.v2.adapt(disable_image)],(function (color){
return ((((cljs.core.not(disable_gradient)) || (cljs.core.not(new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color))))) && (((((cljs.core.not(disable_opacity)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color))))) && (((cljs.core.not(disable_image)) || (cljs.core.not(new cljs.core.Keyword(null,"image","image",-58725096).cljs$core$IFn$_invoke$arity$1(color))))))));
}));
var toggle_palette = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected)],(function (){
app.main.ui.hooks.resize.set_resize_type_BANG_(new cljs.core.Keyword(null,"bottom","bottom",-1550509018));

app.util.dom.add_class_BANG_(app.util.dom.get_element_by_class.cljs$core$IFn$_invoke$arity$1("color-palette"),"fade-out-down");

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.remove_layout_flag(new cljs.core.Keyword(null,"textpalette","textpalette",-1296342868)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(app.main.data.workspace.colors.show_palette(selected),cljs.core.assoc,new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace-colorpicker")], 0));
}));
var on_color_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(state),rumext.v2.adapt(selected),rumext.v2.adapt(on_select_color)],(function (event){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"recent","recent",449517715),selected)){
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"use-library-color",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"colorpicker",new cljs.core.Keyword(null,"external-library","external-library",93332093),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file","file",-1269645878),selected)], null)));
}

return (on_select_color.cljs$core$IFn$_invoke$arity$2 ? on_select_color.cljs$core$IFn$_invoke$arity$2(state,event) : on_select_color.call(null,state,event));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected),rumext.v2.adapt(recent_colors__$1),rumext.v2.adapt(libraries__$1),rumext.v2.adapt(file_id),rumext.v2.adapt(valid_color_QMARK_)],(function (){
var file_id__$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.Keyword(null,"file","file",-1269645878)))?file_id:selected);
var colors = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.Keyword(null,"recent","recent",449517715)))?cljs.core.sort.cljs$core$IFn$_invoke$arity$2(app.common.types.color.sort_colors,cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,color){
var color__$1 = ((cljs.core.map_QMARK_(color))?color:new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"color","color",1011675173),color], null));
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(color__$1,cljs.core.assoc,new cljs.core.Keyword("app.main.ui.workspace.colorpicker.libraries","id","app.main.ui.workspace.colorpicker.libraries/id",-2085412349),""+(index ?? ""));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(valid_color_QMARK_,cljs.core.reverse(recent_colors__$1)))):cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,color){
return cljs.core.vary_meta.cljs$core$IFn$_invoke$arity$4(color,cljs.core.assoc,new cljs.core.Keyword("app.main.ui.workspace.colorpicker.libraries","id","app.main.ui.workspace.colorpicker.libraries/id",-2085412349),""+(index ?? ""));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54763_SHARP_){
return app.common.types.color.library_color__GT_color(p1__54763_SHARP_,file_id__$1);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(valid_color_QMARK_,cljs.core.vals(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries__$1,file_id__$1),new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"colors","colors",1157174732))))))));
return cljs.core.reset_BANG_(current_colors_STAR_,colors);
}));

return rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_libraries__libraries",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_colorpicker_libraries__select-wrapper",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'class':"main_ui_workspace_colorpicker_libraries__shadow-type-select",'data-direction':"up",'default-value':(function (){var or__5025__auto__ = app.common.data.name(selected);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "recent";
}
})(),'options':options,'on-change':on_library_change})}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_colorpicker_libraries__selected-colors",'children':[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.Keyword(null,"file","file",-1269645878)))?rumext.v2.jsx("button",{'onClick':on_add_library_color,'className':"main_ui_workspace_colorpicker_libraries__add-color-btn",'children':app.main.ui.icons.add}):null),rumext.v2.jsx("button",{'onClick':toggle_palette,'className':"main_ui_workspace_colorpicker_libraries__palette-btn",'children':app.main.ui.icons.swatches}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,color){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.components.color_bullet.color_bullet,{'color':color,'on-click':on_color_click},new cljs.core.Keyword("app.main.ui.workspace.colorpicker.libraries","id","app.main.ui.workspace.colorpicker.libraries/id",-2085412349).cljs$core$IFn$_invoke$arity$1(cljs.core.meta(color))));

return out_arr__35152__auto__;
}),[],current_colors)]})]});
});

(app.main.ui.workspace.colorpicker.libraries.libraries.displayName = "libraries");


//# sourceMappingURL=app.main.ui.workspace.colorpicker.libraries.js.map
