import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.attrs.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.math.js";
import "./app.common.types.shape.layout.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.grid_layout.editor.js";
import "./app.main.data.workspace.shape_layout.js";
import "./app.main.store.js";
import "./app.main.ui.components.numeric_input.js";
import "./app.main.ui.components.radio_buttons.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.grid_cell');
app.main.ui.workspace.sidebar.options.menus.grid_cell.cell_props = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"position","position",-2011731912),new cljs.core.Keyword(null,"row","row",-570139521),new cljs.core.Keyword(null,"row-span","row-span",-365554241),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"column-span","column-span",1302376857),new cljs.core.Keyword(null,"align-self","align-self",1475936794),new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605),new cljs.core.Keyword(null,"area-name","area-name",-496581211)], null);
app.main.ui.workspace.sidebar.options.menus.grid_cell.set_self_alignment = (function app$main$ui$workspace$sidebar$options$menus$grid_cell$set_self_alignment(props_55364){
var map__55365 = rumext.v2.util.wrap_props(props_55364);
var map__55365__$1 = cljs.core.__destructure_map(map__55365);
var props = map__55365__$1;
var is_col_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55365__$1,new cljs.core.Keyword(null,"is-col?","is-col?",-405323997));
var alignment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55365__$1,new cljs.core.Keyword(null,"alignment","alignment",1040093386));
var set_alignment = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55365__$1,new cljs.core.Keyword(null,"set-alignment","set-alignment",-2128681649));
var alignment__$1 = (function (){var or__5025__auto__ = alignment;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"auto","auto",-566279492);
}
})();
var type = (cljs.core.truth_(is_col_QMARK_)?"col":"row");
var handle_set_alignment = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(set_alignment)],(function (value){
var G__55366 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(value);
return (set_alignment.cljs$core$IFn$_invoke$arity$1 ? set_alignment.cljs$core$IFn$_invoke$arity$1(G__55366) : set_alignment.call(null,G__55366));
}));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__self-align-menu",'children':rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':app.common.data.name(alignment__$1),'on-change':handle_set_alignment,'allow-empty':true,'name':""+"flex-align-items-"+(type ?? ""),'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"start",'icon':(cljs.core.truth_(is_col_QMARK_)?app.main.ui.ds.foundations.assets.icon.align_self_row_left:app.main.ui.ds.foundations.assets.icon.align_self_column_top),'title':"Align self start",'id':""+"align-self-start-"+(type ?? "")}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"center",'icon':(cljs.core.truth_(is_col_QMARK_)?app.main.ui.ds.foundations.assets.icon.align_self_row_center:app.main.ui.ds.foundations.assets.icon.align_self_column_center),'title':"Align self center",'id':""+"align-self-center-"+(type ?? "")}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"end",'icon':(cljs.core.truth_(is_col_QMARK_)?app.main.ui.ds.foundations.assets.icon.align_self_row_right:app.main.ui.ds.foundations.assets.icon.align_self_column_bottom),'title':"Align self end",'id':""+"align-self-end-"+(type ?? "")}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"stretch",'icon':(cljs.core.truth_(is_col_QMARK_)?app.main.ui.ds.foundations.assets.icon.align_self_row_stretch:app.main.ui.ds.foundations.assets.icon.align_self_column_stretch),'title':"Align self stretch",'id':""+"align-self-stretch-"+(type ?? "")})]})});
});

(app.main.ui.workspace.sidebar.options.menus.grid_cell.set_self_alignment.displayName = "set-self-alignment");

app.main.ui.workspace.sidebar.options.menus.grid_cell.options = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$sidebar$options$menus$grid_cell$options(props_55373){
var map__55374 = rumext.v2.util.wrap_props(props_55373);
var map__55374__$1 = cljs.core.__destructure_map(map__55374);
var props = map__55374__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55374__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var cell = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55374__$1,new cljs.core.Keyword(null,"cell","cell",764245084));
var cells = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55374__$1,new cljs.core.Keyword(null,"cells","cells",-985166822));
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"open","open",-1763596448),true], null));
var open_QMARK_ = new cljs.core.Keyword(null,"open","open",-1763596448).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state_STAR_));
var cells__$1 = app.main.ui.hooks.use_equal_memo(cells);
var cell__$1 = (function (){var or__5025__auto__ = cell;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.attrs.get_attrs_multi.cljs$core$IFn$_invoke$arity$2(cells__$1,app.main.ui.workspace.sidebar.options.menus.grid_cell.cell_props);
}
})();
var multiple_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell__$1));
var cell_ids = ((multiple_QMARK_)?cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cells__$1):new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell__$1)], null));
var cell_ids__$1 = app.main.ui.hooks.use_equal_memo(cell_ids);
var map__55375 = cell__$1;
var map__55375__$1 = cljs.core.__destructure_map(map__55375);
var position = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55375__$1,new cljs.core.Keyword(null,"position","position",-2011731912));
var area_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55375__$1,new cljs.core.Keyword(null,"area-name","area-name",-496581211));
var align_self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55375__$1,new cljs.core.Keyword(null,"align-self","align-self",1475936794));
var justify_self = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55375__$1,new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605));
var column = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55375__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var column_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55375__$1,new cljs.core.Keyword(null,"column-span","column-span",1302376857));
var row = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55375__$1,new cljs.core.Keyword(null,"row","row",-570139521));
var row_span = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55375__$1,new cljs.core.Keyword(null,"row-span","row-span",-365554241));
var column_end = (cljs.core.truth_((function (){var and__5023__auto__ = app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(column);
if(cljs.core.truth_(and__5023__auto__)){
return app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(column_span);
} else {
return and__5023__auto__;
}
})())?(column + column_span):null);
var row_end = (cljs.core.truth_((function (){var and__5023__auto__ = app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(row);
if(cljs.core.truth_(and__5023__auto__)){
return app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(row_span);
} else {
return and__5023__auto__;
}
})())?(row + row_span):null);
var cell_mode = (function (){var or__5025__auto__ = position;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"auto","auto",-566279492);
}
})();
var cell_mode__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),cell_mode)) && ((((new cljs.core.Keyword(null,"column-span","column-span",1302376857).cljs$core$IFn$_invoke$arity$1(cell__$1) > (1))) || ((new cljs.core.Keyword(null,"row-span","row-span",-365554241).cljs$core$IFn$_invoke$arity$1(cell__$1) > (1)))))))?new cljs.core.Keyword(null,"manual","manual",-237370608):cell_mode);
var valid_area_cells_QMARK_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cells__$1)],(function (){
return app.common.types.shape.layout.valid_area_cells_QMARK_(cells__$1);
}));
var set_alignment = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(align_self),rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),rumext.v2.adapt(cell_ids__$1)],(function (value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(align_self,value)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_grid_cells(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),cell_ids__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),null], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_grid_cells(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),cell_ids__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"align-self","align-self",1475936794),value], null)));
}
}));
var set_justify_self = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(justify_self),rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),rumext.v2.adapt(cell_ids__$1)],(function (value){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(justify_self,value)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_grid_cells(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),cell_ids__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605),null], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_grid_cells(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),cell_ids__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"justify-self","justify-self",-2135975605),value], null)));
}
}));
var on_grid_coordinates = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(column),rumext.v2.adapt(row),rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell__$1))],(function (field,type,value){
if(multiple_QMARK_){
return null;
} else {
var value__$1 = app.common.math.round.cljs$core$IFn$_invoke$arity$1(value);
var column__$1 = app.common.math.round.cljs$core$IFn$_invoke$arity$1(column);
var row__$1 = app.common.math.round.cljs$core$IFn$_invoke$arity$1(row);
var vec__55376 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"all","all",892129742))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"start","start",-355208981)))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column","column",2078222095),value__$1], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"column","column",2078222095))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"end","end",-268185958)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"column-span","column-span",1302376857),(function (){var x__5110__auto__ = (1);
var y__5111__auto__ = (value__$1 - column__$1);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"row","row",-570139521))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"all","all",892129742))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"start","start",-355208981)))))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row","row",-570139521),value__$1], null):((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"row","row",-570139521))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(field,new cljs.core.Keyword(null,"end","end",-268185958)))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"row-span","row-span",-365554241),(function (){var x__5110__auto__ = (1);
var y__5111__auto__ = (value__$1 - row__$1);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})()], null):null))));
var property = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55376,(0),null);
var value__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55376,(1),null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_grid_cell_position(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell__$1),cljs.core.PersistentArrayMap.createAsIfByAssoc([property,value__$2])));
}
}));
var on_area_name_change = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),rumext.v2.adapt(cell_ids__$1)],(function (event){
var value = app.util.dom.get_value(app.util.dom.get_target(event));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(value,"")){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_grid_cells(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),cell_ids__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"area-name","area-name",-496581211),null], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.update_grid_cells(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),cell_ids__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"area-name","area-name",-496581211),value], null)));
}
}));
var set_cell_mode = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),rumext.v2.adapt(cell_ids__$1)],(function (mode){
var mode__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(mode);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shape_layout.change_cells_mode(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),cell_ids__$1,mode__$1));
}));
var toggle_edit_mode = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.start_edition_mode(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.grid_layout.editor.clear_selection(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))], 0));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__grid-cell-menu",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__grid-cell-menu-title",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':true,'collapsed':cljs.core.not(open_QMARK_),'onCollapsed':(function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"open","open",-1763596448),cljs.core.not);
}),'title':"Grid cell"})}),(cljs.core.truth_(open_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__grid-cell-menu-container",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__cell-mode main_ui_workspace_sidebar_options_menus_grid_cell__row",'children':rumext.v2.jsxs(app.main.ui.components.radio_buttons.radio_buttons,{'selected':app.common.data.name(cell_mode__$1),'on-change':set_cell_mode,'name':"cell-mode",'wide':true,'children':[rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"auto",'id':new cljs.core.Keyword(null,"auto","auto",-566279492)}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"manual",'id':new cljs.core.Keyword(null,"manual","manual",-237370608)}),rumext.v2.jsx(app.main.ui.components.radio_buttons.radio_button,{'value':"area",'id':new cljs.core.Keyword(null,"area","area",472007256),'disabled':cljs.core.not(valid_area_cells_QMARK_)})]})}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"area","area",472007256),cell_mode__$1))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__row",'children':rumext.v2.jsx("input",{'autoComplete':"off",'placeholder':"Area name",'defaultValue':area_name,'type':"text",'id':"grid-area-name",'className':"main_ui_workspace_sidebar_options_menus_grid_cell__area-input",'aria-label':"grid-area-name",'onChange':on_area_name_change},""+"name-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cell__$1) ?? ""))}):null),(((((!(multiple_QMARK_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"auto","auto",-566279492),cell_mode__$1))))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__row",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__grid-coord-group",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__icon",'children':app.main.ui.icons.flex_vertical}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__coord-input",'children':rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'placeholder':"--",'title':"Column",'onClick':(function (p1__55367_SHARP_){
return app.util.dom.select_target(p1__55367_SHARP_);
}),'onChange':cljs.core.partial.cljs$core$IFn$_invoke$arity$3(on_grid_coordinates,new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"column","column",2078222095)),'integer':true,'value':column})})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__grid-coord-group",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__icon",'children':app.main.ui.icons.flex_horizontal}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__coord-input",'children':rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'placeholder':"--",'title':"Row",'onClick':(function (p1__55368_SHARP_){
return app.util.dom.select_target(p1__55368_SHARP_);
}),'onChange':cljs.core.partial.cljs$core$IFn$_invoke$arity$3(on_grid_coordinates,new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"row","row",-570139521)),'integer':true,'value':row})})]})]}):null),(((((!(multiple_QMARK_))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"manual","manual",-237370608),cell_mode__$1)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"area","area",472007256),cell_mode__$1))))))?rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__row",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__grid-coord-group",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__icon",'children':app.main.ui.icons.flex_vertical}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__coord-input",'children':rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'placeholder':"--",'onPointerDown':(function (p1__55369_SHARP_){
return app.util.dom.select_target(p1__55369_SHARP_);
}),'onChange':cljs.core.partial.cljs$core$IFn$_invoke$arity$3(on_grid_coordinates,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"column","column",2078222095)),'integer':true,'value':column})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__coord-input",'children':rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'placeholder':"--",'onPointerDown':(function (p1__55370_SHARP_){
return app.util.dom.select_target(p1__55370_SHARP_);
}),'onChange':cljs.core.partial.cljs$core$IFn$_invoke$arity$3(on_grid_coordinates,new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"column","column",2078222095)),'integer':true,'value':column_end})})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__grid-coord-group",'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__icon",'children':app.main.ui.icons.flex_horizontal}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__coord-input main_ui_workspace_sidebar_options_menus_grid_cell__double",'children':rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'placeholder':"--",'onPointerDown':(function (p1__55371_SHARP_){
return app.util.dom.select_target(p1__55371_SHARP_);
}),'onChange':cljs.core.partial.cljs$core$IFn$_invoke$arity$3(on_grid_coordinates,new cljs.core.Keyword(null,"start","start",-355208981),new cljs.core.Keyword(null,"row","row",-570139521)),'integer':true,'value':row})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__coord-input",'children':rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'placeholder':"--",'onPointerDown':(function (p1__55372_SHARP_){
return app.util.dom.select_target(p1__55372_SHARP_);
}),'onChange':cljs.core.partial.cljs$core$IFn$_invoke$arity$3(on_grid_coordinates,new cljs.core.Keyword(null,"end","end",-268185958),new cljs.core.Keyword(null,"row","row",-570139521)),'integer':true,'value':row_end})})]})]}):null),rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__row",'children':[rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.grid_cell.set_self_alignment,{'is-col?':false,'alignment':align_self,'set-alignment':set_alignment}),rumext.v2.jsx(app.main.ui.workspace.sidebar.options.menus.grid_cell.set_self_alignment,{'is-col?':true,'alignment':justify_self,'set-alignment':set_justify_self})]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_grid_cell__row",'children':rumext.v2.jsx("button",{'alt':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.options.edit-grid"),'onClick':toggle_edit_mode,'className':"main_ui_workspace_sidebar_options_menus_grid_cell__edit-grid-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.layout-grid.editor.options.edit-grid")})})]}):null)]});
}));

(app.main.ui.workspace.sidebar.options.menus.grid_cell.options.displayName = "options");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.grid_cell.js.map
