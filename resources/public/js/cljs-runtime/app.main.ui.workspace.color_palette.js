import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.types.color.js";
import "./app.common.types.library.js";
import "./app.main.data.event.js";
import "./app.main.data.workspace.colors.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.color_bullet.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.utilities.swatch.js";
import "./app.main.ui.icons.js";
import "./app.util.color.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./app.util.object.js";
import "./okulary.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.color_palette');
app.main.ui.workspace.color_palette.palette_item_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$color_palette$palette_item_STAR_(props_55026){
var selected = props_55026.selected;
var color = props_55026.color;
var size = props_55026.size;
var select_color = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(color),rumext.v2.adapt(selected)],(function (event){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.colors.add_recent_color(color),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.colors.apply_color_from_palette(color,app.util.keyboard.alt_QMARK_(event)),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.Keyword(null,"recent","recent",449517715)))?potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"use-library-color",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"color-palette",new cljs.core.Keyword(null,"external-library","external-library",93332093),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.Keyword(null,"file","file",-1269645878))], null)):null)], 0));
}));
var title = app.util.color.get_color_name(color);
return rumext.v2.jsxs("button",{'title':title,'aria-label':title,'type':"button",'onClick':select_color,'className':"main_ui_workspace_color_palette__color-cell"+" "+(((new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color) == null))?"main_ui_workspace_color_palette__is-not-library-color":"")+" "+(((size <= (64)))?"main_ui_workspace_color_palette__no-text":""),'children':[rumext.v2.jsx(app.main.ui.ds.utilities.swatch.swatch_STAR_,{'background':color,'size':"medium"}),rumext.v2.jsx(app.main.ui.components.color_bullet.color_name,{'color':color,'size':size,'origin':new cljs.core.Keyword(null,"palette","palette",-456203511)})]});
}));

(app.main.ui.workspace.color_palette.palette_item_STAR_.displayName = "palette-item*");

app.main.ui.workspace.color_palette.palette_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$color_palette$palette_STAR_(props_55030){
var selected = props_55030.selected;
var width = props_55030.width;
var colors = props_55030.colors;
var size = props_55030.size;
var state = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"show-menu","show-menu",14072792),false], null);
}));
var offset_step = (((size <= (64)))?(40):(((size <= (80)))?(72):(72)
));
var buttons_size = (((size <= (64)))?(164):(132)
);
var width__$1 = (width - buttons_size);
var visible = ((width__$1 / offset_step) | (0));
var show_arrows_QMARK_ = (cljs.core.count(colors) > visible);
var visible__$1 = ((show_arrows_QMARK_)?(((width__$1 - (48)) / offset_step) | (0)):visible);
var offset = new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),(0));
var max_offset = (cljs.core.count(colors) - visible__$1);
var container = rumext.v2.use_ref(null);
var bullet_size = (((size <= (64)))?"32":(((size <= (72)))?"28":(((size <= (80)))?"32":"32"
)));
var color_cell_width = (((size <= (64)))?(32):(64)
);
var on_left_arrow_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(max_offset),rumext.v2.adapt(visible__$1)],(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"offset","offset",296498311),(function (offset__$1){
if((offset__$1 > (0))){
var x__5110__auto__ = (offset__$1 - (1));
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
} else {
return offset__$1;
}
}));
}));
var on_right_arrow_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(max_offset),rumext.v2.adapt(visible__$1)],(function (_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.update,new cljs.core.Keyword(null,"offset","offset",296498311),(function (offset__$1){
if((offset__$1 < max_offset)){
var x__5113__auto__ = max_offset;
var y__5114__auto__ = (offset__$1 + (1));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
} else {
return offset__$1;
}
}));
}));
var on_scroll = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(max_offset)],(function (event){
var event__$1 = app.util.dom.event__GT_native_event(event);
var delta = (event__$1.deltaY + event__$1.deltaX);
if((delta > (0))){
return (on_right_arrow_click.cljs$core$IFn$_invoke$arity$1 ? on_right_arrow_click.cljs$core$IFn$_invoke$arity$1(event__$1) : on_right_arrow_click.call(null,event__$1));
} else {
return (on_left_arrow_click.cljs$core$IFn$_invoke$arity$1 ? on_left_arrow_click.cljs$core$IFn$_invoke$arity$1(event__$1) : on_left_arrow_click.call(null,event__$1));
}
}));
rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var dom = rumext.v2.ref_val(container);
var width__$2 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(dom,"clientWidth");
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),width__$2);
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(width__$1),rumext.v2.adapt(colors)],(function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"offset","offset",296498311),(0));
} else {
return null;
}
}));

return rumext.v2.jsxs("div",{'style':({"--bullet-size": ""+(bullet_size ?? "")+"px", "--color-cell-width": ""+(color_cell_width ?? "")+"px"}),'className':"main_ui_workspace_color_palette__color-palette"+" "+(((size < (64)))?"main_ui_workspace_color_palette__no-text":""),'children':[((show_arrows_QMARK_)?rumext.v2.jsx("button",{'disabled':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset,(0)),'onClick':on_left_arrow_click,'className':"main_ui_workspace_color_palette__left-arrow",'children':app.main.ui.icons.arrow}):null),rumext.v2.jsx("div",{'ref':container,'onWheel':on_scroll,'className':"main_ui_workspace_color_palette__color-palette-content",'children':((cljs.core.empty_QMARK_(colors))?rumext.v2.jsx("div",{'style':{'position':"absolute",'left':"50%",'top':"50%",'transform':"translate(-50%, -50%)"},'className':"main_ui_workspace_color_palette__color-palette-empty",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.colors.empty-palette")}):rumext.v2.jsx("div",{'style':{'position':"relative",'maxWidth':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width__$1),"px"].join(''),'right':[cljs.core.str.cljs$core$IFn$_invoke$arity$1((offset_step * offset)),"px"].join('')},'className':"main_ui_workspace_color_palette__color-palette-inside",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55046){
var vec__55047 = p__55046;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55047,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55047,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.color_palette.palette_item_STAR_,{'color':item,'size':size,'selected':selected},idx));

return out_arr__35152__auto__;
}),[],cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,colors))}))}),((show_arrows_QMARK_)?rumext.v2.jsx("button",{'disabled':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset,max_offset),'onClick':on_right_arrow_click,'className':"main_ui_workspace_color_palette__right-arrow",'children':app.main.ui.icons.arrow}):null)]});
}));

(app.main.ui.workspace.color_palette.palette_STAR_.displayName = "palette*");

app.main.ui.workspace.color_palette.recent_colors_palette_STAR_ = (function app$main$ui$workspace$color_palette$recent_colors_palette_STAR_(props_55052){
var props = props_55052;
var libraries = rumext.v2.deref(app.main.refs.files);
var colors = rumext.v2.deref(app.main.refs.recent_colors);
var colors__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(colors),rumext.v2.adapt(libraries)],(function (){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__55053){
var map__55054 = p__55053;
var map__55054__$1 = cljs.core.__destructure_map(map__55054);
var color = map__55054__$1;
var ref_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55054__$1,new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884));
var ref_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55054__$1,new cljs.core.Keyword(null,"ref-file","ref-file",255004238));
if(cljs.core.truth_((function (){var and__5023__auto__ = ref_id;
if(cljs.core.truth_(and__5023__auto__)){
return ref_file;
} else {
return and__5023__auto__;
}
})())){
var fdata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,ref_file),new cljs.core.Keyword(null,"data","data",-232669377));
var or__5025__auto__ = (function (){var G__55056 = app.common.types.library.get_color(fdata,ref_id);
if((G__55056 == null)){
return null;
} else {
return app.common.types.color.library_color__GT_color(G__55056,ref_file);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(color,new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref-file","ref-file",255004238)], 0));
}
} else {
return color;
}
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.types.color.valid_color_QMARK_,cljs.core.reverse(colors))));
}));
var props__$1 = {...props, 'colors':colors__$1};
return rumext.v2.create_element(app.main.ui.workspace.color_palette.palette_STAR_,props__$1);
});

(app.main.ui.workspace.color_palette.recent_colors_palette_STAR_.displayName = "recent-colors-palette*");

app.main.ui.workspace.color_palette.make_library_colors_ref = (function app$main$ui$workspace$color_palette$make_library_colors_ref(file_id){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2((function (files){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(files,file_id),new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"colors","colors",1157174732));
}),app.main.refs.files);
});
app.main.ui.workspace.color_palette.file_color_palette_STAR_ = (function app$main$ui$workspace$color_palette$file_color_palette_STAR_(props_55059){
var file_id = props_55059.fileId;
var props = props_55059;
var colors_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (){
return app.main.ui.workspace.color_palette.make_library_colors_ref(file_id);
}));
var colors = rumext.v2.deref(colors_ref);
var colors__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(colors),rumext.v2.adapt(file_id)],(function (){
return cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55058_SHARP_){
return app.common.types.color.library_color__GT_color(p1__55058_SHARP_,file_id);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.types.color.valid_library_color_QMARK_,cljs.core.vals(colors)))));
}));
var props__$1 = {...props, 'colors':colors__$1};
return rumext.v2.create_element(app.main.ui.workspace.color_palette.palette_STAR_,props__$1);
});

(app.main.ui.workspace.color_palette.file_color_palette_STAR_.displayName = "file-color-palette*");

app.main.ui.workspace.color_palette.color_palette_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$color_palette$color_palette_STAR_(props_55064){
var selected = props_55064.selected;
var props = props_55064;
var file_id = rumext.v2.use_ctx(app.main.ui.context.current_file_id);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.Keyword(null,"recent","recent",449517715))){
return rumext.v2.create_element(app.main.ui.workspace.color_palette.recent_colors_palette_STAR_,props);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,new cljs.core.Keyword(null,"file","file",-1269645878))){
var props__$1 = {...props, 'fileId':file_id};
return rumext.v2.create_element(app.main.ui.workspace.color_palette.file_color_palette_STAR_,props__$1);
} else {
var props__$1 = {...props, 'fileId':selected};
return rumext.v2.create_element(app.main.ui.workspace.color_palette.file_color_palette_STAR_,props__$1);

}
}
}));

(app.main.ui.workspace.color_palette.color_palette_STAR_.displayName = "color-palette*");


//# sourceMappingURL=app.main.ui.workspace.color_palette.js.map
