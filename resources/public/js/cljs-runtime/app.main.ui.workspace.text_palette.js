import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.main.data.event.js";
import "./app.main.data.workspace.texts.js";
import "./app.main.fonts.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.context.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.object.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.text_palette');
app.main.ui.workspace.text_palette.typography_item = (function app$main$ui$workspace$text_palette$typography_item(props_54983){
var map__54987 = rumext.v2.util.wrap_props(props_54983);
var map__54987__$1 = cljs.core.__destructure_map(map__54987);
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54987__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var selected_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54987__$1,new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141));
var typography = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54987__$1,new cljs.core.Keyword(null,"typography","typography",-399568138));
var name_only_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54987__$1,new cljs.core.Keyword(null,"name-only?","name-only?",667437857));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54987__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var current_file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54987__$1,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404));
var font_data = app.main.fonts.get_font_data(new cljs.core.Keyword(null,"font-id","font-id",-390084123).cljs$core$IFn$_invoke$arity$1(typography));
var font_variant_id = new cljs.core.Keyword(null,"font-variant-id","font-variant-id",1488748718).cljs$core$IFn$_invoke$arity$1(typography);
var variant_data = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__54981_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54981_SHARP_),font_variant_id);
}),new cljs.core.Keyword(null,"variants","variants",-176391100).cljs$core$IFn$_invoke$arity$1(font_data));
var handle_click = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(typography),rumext.v2.adapt(selected_ids),rumext.v2.adapt(file_id),rumext.v2.adapt(current_file_id)],(function (){
var attrs = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"typography-ref-file","typography-ref-file",2114311688),file_id,new cljs.core.Keyword(null,"typography-ref-id","typography-ref-id",-993695356),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(typography)], null),cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(typography,new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177)], 0))], 0));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"use-library-typography",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"text-palette",new cljs.core.Keyword(null,"external-library","external-library",93332093),cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(file_id,current_file_id)], null)));

return cljs.core.run_BANG_((function (p1__54982_SHARP_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.texts.update_text_attrs(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),p1__54982_SHARP_,new cljs.core.Keyword(null,"editor","editor",-989377770),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.refs.workspace_editor_state),p1__54982_SHARP_),new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs], null)));
}),selected_ids);
}));
return rumext.v2.jsxs("div",{'onClick':handle_click,'className':"main_ui_workspace_text_palette__typography-item"+" "+(((size <= (72)))?"main_ui_workspace_text_palette__mid-item":"")+" "+(((size <= (64)))?"main_ui_workspace_text_palette__small-item":""),'children':[rumext.v2.jsx("div",{'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(typography),'style':{'fontFamily':new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(typography),'fontWeight':new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(typography),'fontStyle':new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(typography)},'className':"main_ui_workspace_text_palette__typography-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(typography)}),(cljs.core.truth_(name_only_QMARK_)?null:rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_text_palette__typography-font",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(font_data)}),rumext.v2.jsx("div",{'className':"main_ui_workspace_text_palette__typography-data",'children':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"font-size","font-size",-1847940346).cljs$core$IFn$_invoke$arity$1(typography)),"px | ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(variant_data))].join('')})]}))]});
});

(app.main.ui.workspace.text_palette.typography_item.displayName = "typography-item");

app.main.ui.workspace.text_palette.palette = (function app$main$ui$workspace$text_palette$palette(props_54997){
var map__54999 = rumext.v2.util.wrap_props(props_54997);
var map__54999__$1 = cljs.core.__destructure_map(map__54999);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54999__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var selected_ids = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54999__$1,new cljs.core.Keyword(null,"selected-ids","selected-ids",-1154760141));
var current_file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54999__$1,new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404));
var file_typographies = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54999__$1,new cljs.core.Keyword(null,"file-typographies","file-typographies",-177702884));
var libraries = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54999__$1,new cljs.core.Keyword(null,"libraries","libraries",-303286011));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54999__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54999__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var file_id = (function (){var G__55000 = selected;
var G__55000__$1 = (((G__55000 instanceof cljs.core.Keyword))?G__55000.fqn:null);
switch (G__55000__$1) {
case "recent":
return null;

break;
case "file":
return current_file_id;

break;
default:
return selected;

}
})();
var current_typographies = (function (){var G__55001 = selected;
var G__55001__$1 = (((G__55001 instanceof cljs.core.Keyword))?G__55001.fqn:null);
switch (G__55001__$1) {
case "recent":
return cljs.core.PersistentVector.EMPTY;

break;
case "file":
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__54994_SHARP_){
return cuerdas.core.lower(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__54994_SHARP_));
}),cljs.core.vals(file_typographies));

break;
default:
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (p1__54995_SHARP_){
return cuerdas.core.lower(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__54995_SHARP_));
}),cljs.core.vals(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [selected,new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"typographies","typographies",-482095730)], null))));

}
})();
var state = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"offset","offset",296498311),(0)], null));
var offset_step = (144);
var buttons_size = (((size <= (64)))?(164):(((size <= (72)))?(164):(((size <= (80)))?(132):(132)
)));
var width__$1 = (width - buttons_size);
var visible = ((width__$1 / offset_step) | (0));
var show_arrows_QMARK_ = (cljs.core.count(current_typographies) > visible);
var offset = new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$2(cljs.core.deref(state),(0));
var max_offset = (cljs.core.count(current_typographies) - visible);
var container = rumext.v2.use_ref(null);
var on_left_arrow_click = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(max_offset),rumext.v2.adapt(visible)],(function (_){
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
var on_right_arrow_click = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(max_offset),rumext.v2.adapt(visible)],(function (_){
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
var on_wheel = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(max_offset)],(function (event){
var event__$1 = app.util.dom.event__GT_native_event(event);
var delta = (event__$1.deltaY + event__$1.deltaX);
if((delta > (0))){
return (on_right_arrow_click.cljs$core$IFn$_invoke$arity$1 ? on_right_arrow_click.cljs$core$IFn$_invoke$arity$1(event__$1) : on_right_arrow_click.call(null,event__$1));
} else {
return (on_left_arrow_click.cljs$core$IFn$_invoke$arity$1 ? on_left_arrow_click.cljs$core$IFn$_invoke$arity$1(event__$1) : on_left_arrow_click.call(null,event__$1));
}
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_typographies)],(function (){
var fonts = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"font-id","font-id",-390084123)),current_typographies);
return cljs.core.run_BANG_(app.main.fonts.ensure_loaded_BANG_,fonts);
}));

rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$1((function (){
var dom = rumext.v2.ref_val(container);
var width__$2 = app.util.object.get.cljs$core$IFn$_invoke$arity$2(dom,"clientWidth");
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"width","width",-384071477),width__$2);
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(width__$1),rumext.v2.adapt(selected)],(function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(state)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state,cljs.core.assoc,new cljs.core.Keyword(null,"offset","offset",296498311),(0));
} else {
return null;
}
}));

return rumext.v2.jsxs("div",{'style':({"--height": [cljs.core.str.cljs$core$IFn$_invoke$arity$1(size),"px"].join('')}),'className':"main_ui_workspace_text_palette__text-palette",'children':[((show_arrows_QMARK_)?rumext.v2.jsx("button",{'disabled':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset,(0)),'onClick':on_left_arrow_click,'className':"main_ui_workspace_text_palette__left-arrow",'children':app.main.ui.icons.arrow}):null),rumext.v2.jsx("div",{'ref':container,'onWheel':on_wheel,'className':"main_ui_workspace_text_palette__text-palette-content",'children':((cljs.core.empty_QMARK_(current_typographies))?rumext.v2.jsx("div",{'style':{'position':"absolute",'left':"50%",'top':"50%",'transform':"translate(-50%, -50%)"},'className':"main_ui_workspace_text_palette__text-palette-empty",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.libraries.colors.empty-typography-palette")}):rumext.v2.jsx("div",{'style':{'position':"relative",'maxWidth':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(width__$1),"px"].join(''),'right':[cljs.core.str.cljs$core$IFn$_invoke$arity$1((offset_step * offset)),"px"].join('')},'className':"main_ui_workspace_text_palette__text-palette-inside",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55014){
var vec__55015 = p__55014;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55015,(0),null);
var item = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55015,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.text_palette.typography_item,{'file-id':file_id,'current-file-id':current_file_id,'selected-ids':selected_ids,'typography':item,'size':size},idx));

return out_arr__35152__auto__;
}),[],cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2(cljs.core.vector,current_typographies))}))}),((show_arrows_QMARK_)?rumext.v2.jsx("button",{'disabled':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(offset,max_offset),'onClick':on_right_arrow_click,'className':"main_ui_workspace_text_palette__right-arrow",'children':app.main.ui.icons.arrow}):null)]});
});

(app.main.ui.workspace.text_palette.palette.displayName = "palette");

app.main.ui.workspace.text_palette.text_palette = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$text_palette$text_palette(props_55018){
var map__55019 = rumext.v2.util.wrap_props(props_55018);
var map__55019__$1 = cljs.core.__destructure_map(map__55019);
var props = map__55019__$1;
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55019__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55019__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55019__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var selected_ids = rumext.v2.deref(app.main.refs.selected_shapes);
var file_typographies = rumext.v2.deref(app.main.refs.workspace_file_typography);
var libraries = rumext.v2.deref(app.main.refs.files);
var current_file_id = rumext.v2.use_ctx(app.main.ui.context.current_file_id);
return rumext.v2.jsx(app.main.ui.workspace.text_palette.palette,{'current-file-id':current_file_id,'selected-ids':selected_ids,'file-typographies':file_typographies,'libraries':libraries,'width':width,'selected':selected,'size':size});
}));

(app.main.ui.workspace.text_palette.text_palette.displayName = "text-palette");


//# sourceMappingURL=app.main.ui.workspace.text_palette.js.map
