import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.types.color.js";
import "./app.common.types.shape.shadow.js";
import "./app.common.uuid.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.colors.js";
import "./app.main.data.workspace.shapes.js";
import "./app.main.store.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.workspace.sidebar.options.rows.shadow_row.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.menus.shadow');
app.main.ui.workspace.sidebar.options.menus.shadow.shadow_attrs = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803)], null);
app.main.ui.workspace.sidebar.options.menus.shadow.create_shadow = (function app$main$ui$workspace$sidebar$options$menus$shadow$create_shadow(){
return new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"id","id",-1388402092),app.common.uuid.next(),new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"drop-shadow","drop-shadow",878776332),new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),"#000000",new cljs.core.Keyword(null,"opacity","opacity",397153780),0.2], null),new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),(4),new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),(4),new cljs.core.Keyword(null,"blur","blur",-453500461),(4),new cljs.core.Keyword(null,"spread","spread",862337191),(0),new cljs.core.Keyword(null,"hidden","hidden",-312506092),false], null);
});
app.main.ui.workspace.sidebar.options.menus.shadow.remove_shadow_by_index = (function app$main$ui$workspace$sidebar$options$menus$shadow$remove_shadow_by_index(values,index){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(cljs.core.second,cljs.core.filterv((function (p__55771){
var vec__55772 = p__55771;
var idx = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55772,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55772,(1),null);
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(idx,index);
}),app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(values)));
});
app.main.ui.workspace.sidebar.options.menus.shadow.xf_COLON_add_index = cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$1((function (index,shadow__$1){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow__$1,new cljs.core.Keyword("app.main.ui.workspace.sidebar.options.menus.shadow","index","app.main.ui.workspace.sidebar.options.menus.shadow/index",-1426814770),index);
}));
app.main.ui.workspace.sidebar.options.menus.shadow.shadow_menu_STAR_ = (function app$main$ui$workspace$sidebar$options$menus$shadow$shadow_menu_STAR_(props_55780){
var ids = props_55780.ids;
var type = props_55780.type;
var values = props_55780.values;
var props = props_55780;
var shadows = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(values)],(function (){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),values)){
return values;
} else {
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,app.main.ui.workspace.sidebar.options.menus.shadow.xf_COLON_add_index,values));
}
}));
var ids_ref = app.main.ui.hooks.use_update_ref(ids);
var open_state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var open_state = cljs.core.deref(open_state_STAR_);
var has_shadows_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),shadows)) || ((!((cljs.core.seq(shadows) == null)))));
var show_content_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(true);
var show_content_QMARK_ = cljs.core.deref(show_content_STAR_);
var toggle_content = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_content_STAR_,cljs.core.not);
}));
var on_toggle_open = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p1__55775_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(open_state_STAR_,cljs.core.update,p1__55775_SHARP_,cljs.core.not);
}));
var on_remove_all = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
var ids__$1 = rumext.v2.ref_val(ids_ref);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids__$1));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids__$1,(function (p1__55776_SHARP_){
return cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(p1__55776_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803));
})));
}));
var handle_reorder = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (from_pos,to_space_between_pos){
var ids__$1 = rumext.v2.ref_val(ids_ref);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids__$1));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.reorder_shadows(ids__$1,from_pos,to_space_between_pos));
}));
var on_add_shadow = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
var ids__$1 = rumext.v2.ref_val(ids_ref);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids__$1));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.colors.add_shadow(ids__$1,app.main.ui.workspace.sidebar.options.menus.shadow.create_shadow()));
}));
var on_detach_color = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (index){
var ids__$1 = rumext.v2.ref_val(ids_ref);
var f = (function (p1__55777_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$variadic(p1__55777_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),index,new cljs.core.Keyword(null,"color","color",1011675173)], null),cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"file-id","file-id",-811871323),new cljs.core.Keyword(null,"ref-id","ref-id",-1783010884),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"ref-file","ref-file",255004238)], 0));
});
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids__$1));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids__$1,f));
}));
var on_toggle_visibility = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (index){
var ids__$1 = rumext.v2.ref_val(ids_ref);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids__$1));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids__$1,(function (p1__55778_SHARP_){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(p1__55778_SHARP_,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),index,new cljs.core.Keyword(null,"hidden","hidden",-312506092)], null),cljs.core.not);
})));
}));
var on_remove = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (index){
var ids__$1 = rumext.v2.ref_val(ids_ref);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.trigger_bounding_box_cloaking(ids__$1));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids__$1,(function (p1__55779_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__55779_SHARP_,new cljs.core.Keyword(null,"shadow","shadow",873231803),app.main.ui.workspace.sidebar.options.menus.shadow.remove_shadow_by_index,index);
})));
}));
var on_update = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (index,attr,value){
var ids__$1 = rumext.v2.ref_val(ids_ref);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.shapes.update_shapes.cljs$core$IFn$_invoke$arity$2(ids__$1,(function (shape){
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"shadow","shadow",873231803),index], null),(function (shadow__$1){
return app.common.types.shape.shadow.check_shadow(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shadow__$1,attr,value));
}));
})));
}));
return rumext.v2.jsxs("div",{'data-testid':"shadow-section",'className':"main_ui_workspace_sidebar_options_menus_shadow__shadow-section",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_shadow__shadow-title",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':has_shadows_QMARK_,'collapsed':cljs.core.not(show_content_QMARK_),'onCollapsed':toggle_content,'title':(function (){var G__55781 = type;
var G__55781__$1 = (((G__55781 instanceof cljs.core.Keyword))?G__55781.fqn:null);
switch (G__55781__$1) {
case "multiple":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.title.multiple");

break;
case "group":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.title.group");

break;
default:
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.title");

}
})(),'className':(((!(has_shadows_QMARK_)))?"main_ui_workspace_sidebar_options_menus_shadow__shadow-title-bar":""),'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),shadows))?null:rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.add-shadow"),'onClick':on_add_shadow,'icon':app.main.ui.ds.foundations.assets.icon.add,'data-testid':"add-shadow"}))})}),(cljs.core.truth_(show_content_QMARK_)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"multiple","multiple",1244445549),shadows))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_shadow__shadow-content",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_menus_shadow__shadow-multiple",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_shadow__shadow-multiple-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("settings.multiple")}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.shadow-options.remove-shadow"),'onClick':on_remove_all,'icon':app.main.ui.ds.foundations.assets.icon.remove})]})}):(((!((shadows == null))))?rumext.v2.jsx(app.main.ui.hooks.sortable_container_STAR_,{'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_menus_shadow__shadow-content",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__55782){
var map__55783 = p__55782;
var map__55783__$1 = cljs.core.__destructure_map(map__55783);
var shadow__$1 = map__55783__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55783__$1,new cljs.core.Keyword("app.main.ui.workspace.sidebar.options.menus.shadow","index","app.main.ui.workspace.sidebar.options.menus.shadow/index",-1426814770));
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55783__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.workspace.sidebar.options.rows.shadow_row.shadow_row_STAR_,{'onRemove':on_remove,'onToggleVisibility':on_toggle_visibility,'index':index,'onUpdate':on_update,'onReorder':handle_reorder,'shadow':shadow__$1,'onDetachColor':on_detach_color,'onToggleOpen':on_toggle_open,'isOpen':cljs.core.get.cljs$core$IFn$_invoke$arity$2(open_state,id)},""+(index ?? "")));

return out_arr__35152__auto__;
}),[],shadows)})}):null)):null)]});
});

(app.main.ui.workspace.sidebar.options.menus.shadow.shadow_menu_STAR_.displayName = "shadow-menu*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.menus.shadow.js.map
