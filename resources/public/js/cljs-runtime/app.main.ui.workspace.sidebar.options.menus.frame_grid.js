import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.geom.grid.js";
import "./app.common.types.grid.js";
import "./app.main.data.workspace.grid.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.editable_select.js";
import "./app.main.ui.components.numeric_input.js";
import "./app.main.ui.components.select.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.workspace.sidebar.options.common.js";
import "./app.main.ui.workspace.sidebar.options.rows.color_row.js";
import "./app.util.i18n.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.frame_grid');
app.main.ui.workspace.sidebar.options.menus.frame_grid.lens_COLON_default_grids = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default-grids","default-grids",-2097814871),app.main.refs.workspace_page);
app.main.ui.workspace.sidebar.options.menus.frame_grid.get_size_options = (function app$main$ui$workspace$sidebar$options$menus$frame_grid$get_size_options(){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),null,new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.auto")], null),new cljs.core.Keyword(null,"separator","separator",-1628749125),(18),(12),(10),(8),(6),(4),(3),(2)], null);
});
app.main.ui.workspace.sidebar.options.menus.frame_grid.grid_options = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$sidebar$options$menus$frame_grid$grid_options(props_55872){
var map__55873 = rumext.v2.util.wrap_props(props_55872);
var map__55873__$1 = cljs.core.__destructure_map(map__55873);
var shape_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55873__$1,new cljs.core.Keyword(null,"shape-id","shape-id",981169327));
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55873__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var grid = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55873__$1,new cljs.core.Keyword(null,"grid","grid",402978600));
var frame_width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55873__$1,new cljs.core.Keyword(null,"frame-width","frame-width",-1171477082));
var frame_height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55873__$1,new cljs.core.Keyword(null,"frame-height","frame-height",1932367973));
var default_grid_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55873__$1,new cljs.core.Keyword(null,"default-grid-params","default-grid-params",959189563));
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id),rumext.v2.adapt(index)],(function (p1__55869_SHARP_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.grid.set_frame_grid(shape_id,index,p1__55869_SHARP_));
}));
var on_remove = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id),rumext.v2.adapt(index)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.grid.remove_frame_grid(shape_id,index));
}));
var on_save_default = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p1__55870_SHARP_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.grid.set_default_grid(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__55870_SHARP_),new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(p1__55870_SHARP_)));
}));
var size_options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$1(app.main.ui.workspace.sidebar.options.menus.frame_grid.get_size_options);
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"show-advanced-options","show-advanced-options",-561220032),false,new cljs.core.Keyword(null,"show-more-options","show-more-options",-1066587564),false], null));
var state = cljs.core.deref(state_STAR_);
var open_QMARK_ = new cljs.core.Keyword(null,"show-advanced-options","show-advanced-options",-561220032).cljs$core$IFn$_invoke$arity$1(state);
var show_more_options_QMARK_ = new cljs.core.Keyword(null,"show-more-options","show-more-options",-1066587564).cljs$core$IFn$_invoke$arity$1(state);
var is_hidden_QMARK_ = cljs.core.not(new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(grid));
var map__55877 = grid;
var map__55877__$1 = cljs.core.__destructure_map(map__55877);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55877__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var display = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55877__$1,new cljs.core.Keyword(null,"display","display",242065432));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55877__$1,new cljs.core.Keyword(null,"params","params",710516235));
var toggle_advanced_options = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"show-advanced-options","show-advanced-options",-561220032),cljs.core.not);
}));
var toggle_more_options = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"show-more-options","show-more-options",-1066587564),cljs.core.not);
}));
var close_more_options = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"show-more-options","show-more-options",-1066587564),false);
}));
var handle_toggle_visibility = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(grid)],(function (_){
var G__55878 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(grid,new cljs.core.Keyword(null,"display","display",242065432),(function (p1__55871_SHARP_){
if((p1__55871_SHARP_ == null)){
return false;
} else {
return cljs.core.not(p1__55871_SHARP_);
}
}));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55878) : on_change.call(null,G__55878));
}));
var handle_change_type = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(grid)],(function (grid_type){
var defaults = (grid_type.cljs$core$IFn$_invoke$arity$1 ? grid_type.cljs$core$IFn$_invoke$arity$1(default_grid_params) : grid_type.call(null,default_grid_params));
var G__55879 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(grid,new cljs.core.Keyword(null,"type","type",1174270348),grid_type,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"params","params",710516235),defaults], 0));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55879) : on_change.call(null,G__55879));
}));
var handle_change = (function() { 
var G__55937__delegate = function (keys_path){
return (function (value){
var G__55880 = cljs.core.assoc_in(grid,keys_path,value);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55880) : on_change.call(null,G__55880));
});
};
var G__55937 = function (var_args){
var keys_path = null;
if (arguments.length > 0) {
var G__55938__i = 0, G__55938__a = new Array(arguments.length -  0);
while (G__55938__i < G__55938__a.length) {G__55938__a[G__55938__i] = arguments[G__55938__i + 0]; ++G__55938__i;}
  keys_path = new cljs.core.IndexedSeq(G__55938__a,0,null);
} 
return G__55937__delegate.call(this,keys_path);};
G__55937.cljs$lang$maxFixedArity = 0;
G__55937.cljs$lang$applyTo = (function (arglist__55939){
var keys_path = cljs.core.seq(arglist__55939);
return G__55937__delegate(keys_path);
});
G__55937.cljs$core$IFn$_invoke$arity$variadic = G__55937__delegate;
return G__55937;
})()
;
var handle_change_size = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(grid)],(function (size){
var map__55881 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(grid);
var map__55881__$1 = cljs.core.__destructure_map(map__55881);
var margin = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55881__$1,new cljs.core.Keyword(null,"margin","margin",-995903681));
var gutter = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55881__$1,new cljs.core.Keyword(null,"gutter","gutter",1047805662));
var item_length = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55881__$1,new cljs.core.Keyword(null,"item-length","item-length",-2094673604));
var frame_length = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(grid)))?frame_width:frame_height);
var item_length__$1 = (((size == null))?app.common.geom.grid.calculate_default_item_length(frame_length,margin,gutter):item_length);
var G__55882 = cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(grid,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc,new cljs.core.Keyword(null,"size","size",1098693007),size,new cljs.core.Keyword(null,"item-length","item-length",-2094673604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_length__$1], 0));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55882) : on_change.call(null,G__55882));
}));
var handle_change_item_length = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(grid)],(function (item_length){
var item_length__$1 = (((item_length === (0)))?null:item_length);
var size = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"size","size",1098693007)], null));
var size__$1 = (((((item_length__$1 == null)) && ((size == null))))?(12):size);
var G__55883 = cljs.core.update.cljs$core$IFn$_invoke$arity$variadic(grid,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc,new cljs.core.Keyword(null,"size","size",1098693007),size__$1,new cljs.core.Keyword(null,"item-length","item-length",-2094673604),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([item_length__$1], 0));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55883) : on_change.call(null,G__55883));
}));
var handle_change_color = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(grid)],(function (color){
var color__$1 = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(color,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file-id","file-id",-811871323)], 0));
var G__55887 = cljs.core.update.cljs$core$IFn$_invoke$arity$5(grid,new cljs.core.Keyword(null,"params","params",710516235),cljs.core.assoc,new cljs.core.Keyword(null,"color","color",1011675173),color__$1);
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55887) : on_change.call(null,G__55887));
}));
var handle_detach_color = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(grid)],(function (){
var G__55888 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$5(grid,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"color","color",1011675173)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"file-id","file-id",-811871323));
return (on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55888) : on_change.call(null,G__55888));
}));
var handle_use_default = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(grid)],(function (){
var params__$1 = (function (){var fexpr__55889 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(grid);
return (fexpr__55889.cljs$core$IFn$_invoke$arity$1 ? fexpr__55889.cljs$core$IFn$_invoke$arity$1(default_grid_params) : fexpr__55889.call(null,default_grid_params));
})();
var color = (function (){var or__5025__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(params__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"value","value",305978217)], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(params__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173)], null));
}
})();
var params__$2 = cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.assoc_in(params__$1,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173)], null),color),new cljs.core.Keyword(null,"color","color",1011675173),cljs.core.dissoc,new cljs.core.Keyword(null,"value","value",305978217));
if(cljs.core.truth_(on_change)){
var G__55894_55940 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(grid,new cljs.core.Keyword(null,"params","params",710516235),params__$2);
(on_change.cljs$core$IFn$_invoke$arity$1 ? on_change.cljs$core$IFn$_invoke$arity$1(G__55894_55940) : on_change.call(null,G__55894_55940));
} else {
}

return (close_more_options.cljs$core$IFn$_invoke$arity$0 ? close_more_options.cljs$core$IFn$_invoke$arity$0() : close_more_options.call(null));
}));
var handle_set_as_default = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(grid)],(function (){
(on_save_default.cljs$core$IFn$_invoke$arity$1 ? on_save_default.cljs$core$IFn$_invoke$arity$1(grid) : on_save_default.call(null,grid));

return (close_more_options.cljs$core$IFn$_invoke$arity$0 ? close_more_options.cljs$core$IFn$_invoke$arity$0() : close_more_options.call(null));
}));
var is_default = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(grid),(function (){var G__55895 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(grid);
return (default_grid_params.cljs$core$IFn$_invoke$arity$1 ? default_grid_params.cljs$core$IFn$_invoke$arity$1(G__55895) : default_grid_params.call(null,G__55895));
})());
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__grid-option",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__grid-title",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__option-row"+" "+((is_hidden_QMARK_)?"main_ui_workspace_sidebar_options_menus_frame_grid__hidden":""),'children':[rumext.v2.jsx("button",{'onClick':toggle_advanced_options,'className':"main_ui_workspace_sidebar_options_menus_frame_grid__show-options"+" "+(cljs.core.truth_(open_QMARK_)?"main_ui_workspace_sidebar_options_menus_frame_grid__selected":""),'children':app.main.ui.icons.menu}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__type-select-wrapper",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'class':"main_ui_workspace_sidebar_options_menus_frame_grid__grid-type-select",'default-value':type,'options':new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"square","square",812434677),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.square")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.column")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.row")], null)], null),'on-change':handle_change_type})}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"square","square",812434677)))?rumext.v2.jsx("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.size"),'className':"main_ui_workspace_sidebar_options_menus_frame_grid__grid-size",'children':rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'min':0.01,'value':(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),'noValidate':true,'className':"main_ui_workspace_sidebar_options_menus_frame_grid__numeric-input",'onChange':handle_change(new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"size","size",1098693007))})}):rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__editable-select-wrapper",'children':rumext.v2.jsx(app.main.ui.components.editable_select.editable_select,{'value':new cljs.core.Keyword(null,"size","size",1098693007).cljs$core$IFn$_invoke$arity$1(params),'type':"number",'class':"main_ui_workspace_sidebar_options_menus_frame_grid__column-select",'input-class':"main_ui_workspace_sidebar_options_menus_frame_grid__numeric-input",'min':(1),'options':size_options,'placeholder':"Auto",'on-change':handle_change_size})}))]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__actions",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.guides.toggle-guide"),'onClick':handle_toggle_visibility,'icon':(cljs.core.truth_(display)?"shown":"hide")}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.guides.remove-guide"),'onClick':on_remove,'icon':app.main.ui.ds.foundations.assets.icon.remove})]})]}),(cljs.core.truth_(new cljs.core.Keyword(null,"display","display",242065432).cljs$core$IFn$_invoke$arity$1(grid))?rumext.v2.jsxs(app.main.ui.workspace.sidebar.options.common.advanced_options_STAR_,{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__grid-advanced-options",'isVisible':open_QMARK_,'onClose':toggle_advanced_options,'children':[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"square","square",812434677),type))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__square-row",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__advanced-row",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.rows.color_row.color_row_STAR_,{'color':new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(params),'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.params.color"),'disableGradient':true,'disableImage':true,'origin':new cljs.core.Keyword(null,"guides","guides",-1398390510),'onChange':handle_change_color,'onDetach':handle_detach_color}),rumext.v2.jsx("button",{'onClick':toggle_more_options,'className':"main_ui_workspace_sidebar_options_menus_frame_grid__show-more-options"+" "+(cljs.core.truth_(show_more_options_QMARK_)?"main_ui_workspace_sidebar_options_menus_frame_grid__selected":""),'children':app.main.ui.icons.menu})]}),(cljs.core.truth_(show_more_options_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__second-row",'children':[rumext.v2.jsx("button",{'disabled':is_default,'onClick':handle_use_default,'className':"main_ui_workspace_sidebar_options_menus_frame_grid__btn-options"+" "+((is_default)?"main_ui_workspace_sidebar_options_menus_frame_grid__disabled":""),'children':rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.params.use-default")})}),rumext.v2.jsx("button",{'disabled':is_default,'onClick':handle_set_as_default,'className':"main_ui_workspace_sidebar_options_menus_frame_grid__btn-options"+" "+((is_default)?"main_ui_workspace_sidebar_options_menus_frame_grid__disabled":""),'children':rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.params.set-default")})})]}):null)]}):null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"column","column",2078222095),type)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),type))))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__column-row",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__advanced-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__orientation-select-wrapper",'children':rumext.v2.jsx(app.main.ui.components.select.select,{'data-mousetrap-dont-stop':true,'default-value':new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(params),'class':"main_ui_workspace_sidebar_options_menus_frame_grid__orientation-select",'options':new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"stretch","stretch",-1888837380),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.params.type.stretch")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"left","left",-399115937),new cljs.core.Keyword(null,"label","label",1718410804),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"row","row",-570139521)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.params.type.top"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.params.type.left"))], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"center","center",-748944368),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.params.type.center")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"right","right",-452581833),new cljs.core.Keyword(null,"label","label",1718410804),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"row","row",-570139521)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.params.type.bottom"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.params.type.right"))], null)], null),'on-change':handle_change(new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"type","type",1174270348))})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__color-wrapper",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.options.rows.color_row.color_row_STAR_,{'color':new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(params),'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.params.color"),'disableGradient':true,'disableImage':true,'origin':new cljs.core.Keyword(null,"guides","guides",-1398390510),'onChange':handle_change_color,'onDetach':handle_detach_color})})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__advanced-row",'children':[rumext.v2.jsxs("div",{'title':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),type))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.params.height"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.params.width")),'className':"main_ui_workspace_sidebar_options_menus_frame_grid__height",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__icon-text",'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"row","row",-570139521),type))?"H":"W")}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'placeholder':"Auto",'onChange':handle_change_item_length,'nillable':true,'className':"main_ui_workspace_sidebar_options_menus_frame_grid__numeric-input",'value':(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"item-length","item-length",-2094673604).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})()})]}),rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.params.gutter"),'className':"main_ui_workspace_sidebar_options_menus_frame_grid__gutter",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__icon"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"row","row",-570139521)))?"main_ui_workspace_sidebar_options_menus_frame_grid__rotated":""),'children':app.main.ui.icons.gap_horizontal}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'placeholder':"0",'onChange':handle_change(new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"gutter","gutter",1047805662)),'nillable':true,'className':"main_ui_workspace_sidebar_options_menus_frame_grid__numeric-input",'value':(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"gutter","gutter",1047805662).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})()})]}),rumext.v2.jsxs("div",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.params.margin"),'className':"main_ui_workspace_sidebar_options_menus_frame_grid__margin",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__icon"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095)))?"main_ui_workspace_sidebar_options_menus_frame_grid__rotated":""),'children':app.main.ui.icons.grid_margin}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'placeholder':"0",'onChange':handle_change(new cljs.core.Keyword(null,"params","params",710516235),new cljs.core.Keyword(null,"margin","margin",-995903681)),'nillable':true,'className':"main_ui_workspace_sidebar_options_menus_frame_grid__numeric-input",'value':(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"margin","margin",-995903681).cljs$core$IFn$_invoke$arity$1(params);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})()})]}),rumext.v2.jsx("button",{'onClick':toggle_more_options,'disabled':is_default,'className':"main_ui_workspace_sidebar_options_menus_frame_grid__show-more-options"+" "+(cljs.core.truth_(show_more_options_QMARK_)?"main_ui_workspace_sidebar_options_menus_frame_grid__selected":""),'children':app.main.ui.icons.menu}),(cljs.core.truth_(show_more_options_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__more-options",'children':[rumext.v2.jsx("button",{'onClick':handle_use_default,'className':"main_ui_workspace_sidebar_options_menus_frame_grid__option-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.params.use-default")}),rumext.v2.jsx("button",{'onClick':handle_set_as_default,'className':"main_ui_workspace_sidebar_options_menus_frame_grid__option-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.grid.params.set-default")})]}):null)]})]}):null)]}):null)]});
}));

(app.main.ui.workspace.sidebar.options.menus.frame_grid.grid_options.displayName = "grid-options");

app.main.ui.workspace.sidebar.options.menus.frame_grid.frame_grid = (function app$main$ui$workspace$sidebar$options$menus$frame_grid$frame_grid(props_55896){
var map__55897 = rumext.v2.util.wrap_props(props_55896);
var map__55897__$1 = cljs.core.__destructure_map(map__55897);
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55897__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(true);
var open_QMARK_ = cljs.core.deref(state_STAR_);
var frame_grids = new cljs.core.Keyword(null,"grids","grids",44187194).cljs$core$IFn$_invoke$arity$1(shape);
var has_frame_grids_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),frame_grids)) || ((!((cljs.core.seq(frame_grids) == null)))));
var toggle_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(state_STAR_,cljs.core.not);
}));
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
var default_grids = rumext.v2.deref(app.main.ui.workspace.sidebar.options.menus.frame_grid.lens_COLON_default_grids);
var default_grid_params = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(default_grids)],(function (){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.types.grid.default_grid_params,default_grids], 0));
}));
var handle_create_grid = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.grid.add_frame_grid(id));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__element-set",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__element-title",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':has_frame_grids_QMARK_,'collapsed':cljs.core.not(open_QMARK_),'onCollapsed':toggle_content,'className':(((!(has_frame_grids_QMARK_)))?"main_ui_workspace_sidebar_options_menus_frame_grid__title-spacing-board-grid":""),'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.guides.title"),'children':rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.guides.add-guide"),'onClick':handle_create_grid,'icon':app.main.ui.ds.foundations.assets.icon.add})})}),(cljs.core.truth_((function (){var and__5023__auto__ = open_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.seq(frame_grids);
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_frame_grid__element-set-content",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55929){
var vec__55934 = p__55929;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55934,(0),null);
var grid = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55934,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.frame_grid.grid_options,{'shape-id':id,'grid':grid,'index':index,'frame-width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(shape),'frame-height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(shape),'default-grid-params':default_grid_params},[cljs.core.str.cljs$core$IFn$_invoke$arity$1(id),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index)].join('')));

return out_arr__35152__auto__;
}),[],cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,frame_grids))}):null)]});
});

(app.main.ui.workspace.sidebar.options.menus.frame_grid.frame_grid.displayName = "frame-grid");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.frame_grid.js.map
