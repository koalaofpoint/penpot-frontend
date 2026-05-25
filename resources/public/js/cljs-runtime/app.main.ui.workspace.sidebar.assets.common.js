import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.path_names.js";
import "./app.common.thumbnails.js";
import "./app.common.types.component.js";
import "./app.common.types.container.js";
import "./app.common.types.file.js";
import "./app.common.types.variant.js";
import "./app.config.js";
import "./app.main.data.event.js";
import "./app.main.data.helpers.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.libraries.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.data.workspace.variants.js";
import "./app.main.refs.js";
import "./app.main.render.js";
import "./app.main.store.js";
import "./app.main.ui.components.context_menu_a11y.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.context.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.util.array.js";
import "./app.util.dom.js";
import "./app.util.dom.dnd.js";
import "./app.util.i18n.js";
import "./app.util.strings.js";
import "./app.util.timers.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.assets.common');
app.main.ui.workspace.sidebar.assets.common.assets_filters = rumext.v2.create_context(null);
app.main.ui.workspace.sidebar.assets.common.assets_toggle_ordering = rumext.v2.create_context(null);
app.main.ui.workspace.sidebar.assets.common.assets_toggle_list_style = rumext.v2.create_context(null);
app.main.ui.workspace.sidebar.assets.common.apply_filters = (function app$main$ui$workspace$sidebar$assets$common$apply_filters(coll,p__54771){
var map__54772 = p__54771;
var map__54772__$1 = cljs.core.__destructure_map(map__54772);
var filters = map__54772__$1;
var ordering = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54772__$1,new cljs.core.Keyword(null,"ordering","ordering",1096406705));
var term = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54772__$1,new cljs.core.Keyword(null,"term","term",-1817390416));
var reverse_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"desc","desc",2093485764),ordering);
var G__54773 = coll;
var G__54773__$1 = (((!(cuerdas.core.empty_QMARK_(term))))?cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (item){
var or__5025__auto__ = app.util.strings.matches_search(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(item,"!$!"),term);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.util.strings.matches_search(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$2(item,"!$!"),term);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return app.util.strings.matches_search(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$2(item,"!$!"),term);
}
}
}),G__54773):G__54773);
var G__54773__$2 = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$3((function (p__54774){
var map__54775 = p__54774;
var map__54775__$1 = cljs.core.__destructure_map(map__54775);
var item = map__54775__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54775__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54775__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var path__$1 = ((cuerdas.core.empty_QMARK_(path))?((reverse_QMARK_)?"z":"a"):path);
return cuerdas.core.lower(app.common.path_names.merge_path_item(path__$1,name));
}),((reverse_QMARK_)?cljs.core._GT_:cljs.core._LT_),G__54773__$1)
;
return cljs.core.vec(G__54773__$2);

});
app.main.ui.workspace.sidebar.assets.common.add_group = (function app$main$ui$workspace$sidebar$assets$common$add_group(asset,group_name){
return app.common.path_names.merge_path_item(app.common.path_names.merge_path_item(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(asset),group_name),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(asset));
});
app.main.ui.workspace.sidebar.assets.common.rename_group = (function app$main$ui$workspace$sidebar$assets$common$rename_group(asset,path,last_path){
return app.common.path_names.merge_path_item([cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.common.path_names.join_path(cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.vec(cljs.core.butlast(app.common.path_names.split_path(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(asset),(0),cljs.core.count(path))))),last_path))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(asset),cljs.core.count(path)))].join(''),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(asset));
});
app.main.ui.workspace.sidebar.assets.common.ungroup = (function app$main$ui$workspace$sidebar$assets$common$ungroup(asset,path){
return app.common.path_names.merge_path_item([cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.common.path_names.join_path(cljs.core.butlast(app.common.path_names.split_path(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(asset),(0),cljs.core.count(path)))))),cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.slice.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(asset),cljs.core.count(path)))].join(''),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(asset));
});
app.main.ui.workspace.sidebar.assets.common.initial_context_menu_state = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"open?","open?",1238443125),false,new cljs.core.Keyword(null,"top","top",-1856271961),null,new cljs.core.Keyword(null,"left","left",-399115937),null], null);
app.main.ui.workspace.sidebar.assets.common.open_context_menu = (function app$main$ui$workspace$sidebar$assets$common$open_context_menu(state,pos){
var top = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(pos);
var left = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(pos) + (10));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(state,new cljs.core.Keyword(null,"open?","open?",1238443125),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"top","top",-1856271961),top,new cljs.core.Keyword(null,"left","left",-399115937),left], 0));
});
app.main.ui.workspace.sidebar.assets.common.close_context_menu = (function app$main$ui$workspace$sidebar$assets$common$close_context_menu(state){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state,new cljs.core.Keyword(null,"open?","open?",1238443125),false);
});
app.main.ui.workspace.sidebar.assets.common.assets_context_menu_STAR_ = (function app$main$ui$workspace$sidebar$assets$common$assets_context_menu_STAR_(props_54778){
var options = props_54778.options;
var on_close = props_54778.onClose;
var state = props_54778.state;
return rumext.v2.jsx(app.main.ui.components.context_menu_a11y.context_menu_STAR_,{'show':new cljs.core.Keyword(null,"open?","open?",1238443125).cljs$core$IFn$_invoke$arity$1(state),'fixed':((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(state),(0))) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(state),(0)))),'onClose':on_close,'top':new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(state),'left':new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(state),'options':options});
});

(app.main.ui.workspace.sidebar.assets.common.assets_context_menu_STAR_.displayName = "assets-context-menu*");

app.main.ui.workspace.sidebar.assets.common.section_icon = (function app$main$ui$workspace$sidebar$assets$common$section_icon(section){
var G__54779 = section;
var G__54779__$1 = (((G__54779 instanceof cljs.core.Keyword))?G__54779.fqn:null);
switch (G__54779__$1) {
case "colors":
return "drop";

break;
case "components":
return "component";

break;
case "typographies":
return "text-palette";

break;
default:
return "add";

}
});
app.main.ui.workspace.sidebar.assets.common.should_display_asset_count_QMARK_ = (function app$main$ui$workspace$sidebar$assets$common$should_display_asset_count_QMARK_(section,assets_count){
return (((!(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"tokens","tokens",-818939304))))) || (((((0) < assets_count)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"tokens","tokens",-818939304))))));
});
app.main.ui.workspace.sidebar.assets.common.asset_section_STAR_ = (function app$main$ui$workspace$sidebar$assets$common$asset_section_STAR_(props_54784){
var is_open = props_54784.isOpen;
var assets_count = props_54784.assetsCount;
var children = props_54784.children;
var file_id = props_54784.fileId;
var section = props_54784.section;
var icon = props_54784.icon;
var title = props_54784.title;
var on_click = props_54784.onClick;
var children__$1 = app.util.array.without_nils(app.util.array.normalize_to_array(children));
var is_button_QMARK_ = (function (p1__54781_SHARP_){
var $ = p1__54781_SHARP_;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"title-button","title-button",-634326965),$.props.role);
});
var is_content_QMARK_ = (function (p1__54782_SHARP_){
var $ = p1__54782_SHARP_;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224),$.props.role);
});
var buttons = app.util.array.filter(is_button_QMARK_,children__$1);
var content = app.util.array.filter(is_content_QMARK_,children__$1);
var on_collapsed = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(section),rumext.v2.adapt(is_open),rumext.v2.adapt(assets_count)],(function (_){
if(((0) < assets_count)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_assets_section_open(file_id,section,cljs.core.not(is_open)));
} else {
return null;
}
}));
var title__$1 = rumext.v2.jsxs("span",{'className':"main_ui_workspace_sidebar_assets_common__title-name"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"tokens","tokens",-818939304)))?"main_ui_workspace_sidebar_assets_common__title-tokens":"")+" "+((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"tokens","tokens",-818939304))) && (((0) < assets_count))))?"main_ui_workspace_sidebar_assets_common__title-tokens-active":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_assets_common__section-icon",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':(function (){var or__5025__auto__ = icon;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.ui.workspace.sidebar.assets.common.section_icon(section);
}
})(),'size':"s"})}),rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_assets_common__section-name",'children':title}),((app.main.ui.workspace.sidebar.assets.common.should_display_asset_count_QMARK_(section,assets_count))?rumext.v2.jsx("span",{'className':"main_ui_workspace_sidebar_assets_common__num-assets",'children':assets_count}):null)]});
return rumext.v2.jsxs("div",{'onClick':on_click,'className':"main_ui_workspace_sidebar_assets_common__asset-section"+" "+(cljs.core.truth_((function (){var and__5023__auto__ = ((0) < assets_count);
if(and__5023__auto__){
return is_open;
} else {
return and__5023__auto__;
}
})())?"main_ui_workspace_sidebar_assets_common__opened":""),'children':[rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':((0) < assets_count),'collapsed':cljs.core.not(is_open),'allClickable':true,'onCollapsed':on_collapsed,'addIconGap':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),assets_count),'title':title__$1,'children':buttons}),(cljs.core.truth_((function (){var and__5023__auto__ = ((0) < assets_count);
if(and__5023__auto__){
return is_open;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("div",{'className':(cljs.core.truth_(is_open)?"main_ui_workspace_sidebar_assets_common__title-spacing":""),'children':content}):null)]});
});

(app.main.ui.workspace.sidebar.assets.common.asset_section_STAR_.displayName = "asset-section*");

app.main.ui.workspace.sidebar.assets.common.asset_section_block_STAR_ = (function app$main$ui$workspace$sidebar$assets$common$asset_section_block_STAR_(props_54786){
var children = props_54786.children;
return rumext.v2.jsx(rumext.v2.Fragment,{'children':children});
});

(app.main.ui.workspace.sidebar.assets.common.asset_section_block_STAR_.displayName = "asset-section-block*");

app.main.ui.workspace.sidebar.assets.common.create_assets_group = (function app$main$ui$workspace$sidebar$assets$common$create_assets_group(rename,components_to_group,group_name){
var undo_id = Symbol();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.start_undo_transaction(undo_id));

cljs.core.run_BANG_(app.main.store.emit_BANG_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54791_SHARP_){
var G__54796 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54791_SHARP_);
var G__54797 = app.main.ui.workspace.sidebar.assets.common.add_group(p1__54791_SHARP_,group_name);
return (rename.cljs$core$IFn$_invoke$arity$2 ? rename.cljs$core$IFn$_invoke$arity$2(G__54796,G__54797) : rename.call(null,G__54796,G__54797));
}),components_to_group));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.commit_undo_transaction(undo_id));
});
app.main.ui.workspace.sidebar.assets.common.on_drop_asset = (function app$main$ui$workspace$sidebar$assets$common$on_drop_asset(event,asset,dragging_STAR_,selected,selected_full,selected_paths,rename){
var create_typed_assets_group = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.workspace.sidebar.assets.common.create_assets_group,rename);
if(cljs.core.not(app.util.dom.dnd.from_child_QMARK_(event))){
cljs.core.reset_BANG_(dragging_STAR_,false);

if((((!(cljs.core.contains_QMARK_(selected,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(asset))))) && (cljs.core.every_QMARK_((function (p1__54798_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__54798_SHARP_,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(asset));
}),selected_paths)))){
var components_to_group = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(selected_full,asset);
var create_typed_assets_group__$1 = cljs.core.partial.cljs$core$IFn$_invoke$arity$2(create_typed_assets_group,components_to_group);
return app.main.data.modal.show_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name-group-dialog","name-group-dialog",1853050356),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"accept","accept",1874130431),create_typed_assets_group__$1], null));
} else {
return null;
}
} else {
return null;
}
});
app.main.ui.workspace.sidebar.assets.common.on_drag_enter_asset = (function app$main$ui$workspace$sidebar$assets$common$on_drag_enter_asset(event,asset,dragging_STAR_,selected,selected_paths){
if(((cljs.core.not(app.util.dom.dnd.from_child_QMARK_(event))) && (((cljs.core.every_QMARK_((function (p1__54802_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__54802_SHARP_,new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(asset));
}),selected_paths)) && ((!(cljs.core.contains_QMARK_(selected,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(asset))))))))){
return cljs.core.reset_BANG_(dragging_STAR_,true);
} else {
return null;
}
});
app.main.ui.workspace.sidebar.assets.common.on_drag_leave_asset = (function app$main$ui$workspace$sidebar$assets$common$on_drag_leave_asset(event,dragging_STAR_){
if(cljs.core.not(app.util.dom.dnd.from_child_QMARK_(event))){
return cljs.core.reset_BANG_(dragging_STAR_,false);
} else {
return null;
}
});
app.main.ui.workspace.sidebar.assets.common.create_counter_element = (function app$main$ui$workspace$sidebar$assets$common$create_counter_element(asset_count){
var counter_el = app.util.dom.create_element.cljs$core$IFn$_invoke$arity$1("div");
app.util.dom.set_property_BANG_(counter_el,"class","main_ui_workspace_sidebar_assets_common__drag-counter");

app.util.dom.set_text_BANG_(counter_el,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.assets.sidebar.components",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(asset_count)], 0)));

return counter_el;
});
app.main.ui.workspace.sidebar.assets.common.set_drag_image = (function app$main$ui$workspace$sidebar$assets$common$set_drag_image(event,item_ref,num_selected){
var offset = app.util.dom.get_offset_position(app.util.dom.event__GT_native_event(event));
var item_el = rumext.v2.ref_val(item_ref);
var counter_el = app.main.ui.workspace.sidebar.assets.common.create_counter_element(num_selected);
app.util.dom.append_child_BANG_(item_el,counter_el);

app.util.dom.dnd.set_drag_image_BANG_.cljs$core$IFn$_invoke$arity$4(event,item_el,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offset),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset));

return app.util.timers.raf((function (){
if(cljs.core.truth_(app.util.dom.child_QMARK_(counter_el,item_el))){
return app.util.dom.remove_child_BANG_(item_el,counter_el);
} else {
return null;
}
}));
});
app.main.ui.workspace.sidebar.assets.common.on_asset_drag_start = (function app$main$ui$workspace$sidebar$assets$common$on_asset_drag_start(event,file_id,asset,selected,item_ref,asset_type,on_drag_start){
var id_asset = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(asset);
var num_selected = ((cljs.core.contains_QMARK_(selected,id_asset))?cljs.core.count(selected):(1));
if((!(cljs.core.contains_QMARK_(selected,id_asset)))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.unselect_all_assets.cljs$core$IFn$_invoke$arity$1(file_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.toggle_selected_assets(file_id,id_asset,asset_type)], 0));
} else {
}

(on_drag_start.cljs$core$IFn$_invoke$arity$2 ? on_drag_start.cljs$core$IFn$_invoke$arity$2(asset,event) : on_drag_start.call(null,asset,event));

if((num_selected > (1))){
return app.main.ui.workspace.sidebar.assets.common.set_drag_image(event,item_ref,num_selected);
} else {
return null;
}
});
app.main.ui.workspace.sidebar.assets.common.on_drag_enter_asset_group = (function app$main$ui$workspace$sidebar$assets$common$on_drag_enter_asset_group(event,dragging_STAR_,prefix,selected_paths){
app.util.dom.stop_propagation(event);

if(((cljs.core.not(app.util.dom.dnd.from_child_QMARK_(event))) && ((!(cljs.core.every_QMARK_((function (p1__54804_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__54804_SHARP_,prefix);
}),selected_paths)))))){
return cljs.core.reset_BANG_(dragging_STAR_,true);
} else {
return null;
}
});
app.main.ui.workspace.sidebar.assets.common.on_drop_asset_group = (function app$main$ui$workspace$sidebar$assets$common$on_drop_asset_group(event,dragging_STAR_,prefix,selected_paths,selected_full,rename){
app.util.dom.stop_propagation(event);

if(cljs.core.not(app.util.dom.dnd.from_child_QMARK_(event))){
cljs.core.reset_BANG_(dragging_STAR_,false);

if((!(cljs.core.every_QMARK_((function (p1__54805_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__54805_SHARP_,prefix);
}),selected_paths)))){
var seq__54806 = cljs.core.seq(selected_full);
var chunk__54807 = null;
var count__54808 = (0);
var i__54809 = (0);
while(true){
if((i__54809 < count__54808)){
var target_asset = chunk__54807.cljs$core$IIndexed$_nth$arity$2(null,i__54809);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1((function (){var G__54814 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_asset);
var G__54815 = app.common.path_names.merge_path_item(prefix,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target_asset));
return (rename.cljs$core$IFn$_invoke$arity$2 ? rename.cljs$core$IFn$_invoke$arity$2(G__54814,G__54815) : rename.call(null,G__54814,G__54815));
})());


var G__54831 = seq__54806;
var G__54832 = chunk__54807;
var G__54833 = count__54808;
var G__54834 = (i__54809 + (1));
seq__54806 = G__54831;
chunk__54807 = G__54832;
count__54808 = G__54833;
i__54809 = G__54834;
continue;
} else {
var temp__5825__auto__ = cljs.core.seq(seq__54806);
if(temp__5825__auto__){
var seq__54806__$1 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(seq__54806__$1)){
var c__5548__auto__ = cljs.core.chunk_first(seq__54806__$1);
var G__54836 = cljs.core.chunk_rest(seq__54806__$1);
var G__54837 = c__5548__auto__;
var G__54838 = cljs.core.count(c__5548__auto__);
var G__54839 = (0);
seq__54806 = G__54836;
chunk__54807 = G__54837;
count__54808 = G__54838;
i__54809 = G__54839;
continue;
} else {
var target_asset = cljs.core.first(seq__54806__$1);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1((function (){var G__54816 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(target_asset);
var G__54817 = app.common.path_names.merge_path_item(prefix,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(target_asset));
return (rename.cljs$core$IFn$_invoke$arity$2 ? rename.cljs$core$IFn$_invoke$arity$2(G__54816,G__54817) : rename.call(null,G__54816,G__54817));
})());


var G__54840 = cljs.core.next(seq__54806__$1);
var G__54841 = null;
var G__54842 = (0);
var G__54843 = (0);
seq__54806 = G__54840;
chunk__54807 = G__54841;
count__54808 = G__54842;
i__54809 = G__54843;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
});
/**
 * Component that renders the thumbnail image or the original SVG.
 */
app.main.ui.workspace.sidebar.assets.common.component_item_thumbnail_STAR_ = (function app$main$ui$workspace$sidebar$assets$common$component_item_thumbnail_STAR_(props_54818){
var file_id = props_54818.fileId;
var root_shape = props_54818.rootShape;
var component = props_54818.component;
var class$ = props_54818.className;
var container = props_54818.container;
var is_hidden = props_54818.isHidden;
var page_id = new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component);
var root_id = new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component);
var retry = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((0));
var thumbnail_uri_STAR_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(page_id),rumext.v2.adapt(root_id)],(function (){
var object_id = app.common.thumbnails.fmt_object_id.cljs$core$IFn$_invoke$arity$4(file_id,page_id,root_id,"component");
return app.main.refs.workspace_thumbnail_by_id(object_id);
}));
var thumbnail_uri = rumext.v2.deref(thumbnail_uri_STAR_);
var on_error = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(retry))],(function (){
if((cljs.core.deref(retry) < (3))){
return (retry + (1));
} else {
return null;
}
}));
if((((!((thumbnail_uri == null)))) && (cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"component-thumbnails","component-thumbnails",96380471))))){
return rumext.v2.jsx(app.main.render.component_svg_thumbnail,{'thumbnail-uri':thumbnail_uri,'class':class$,'on-error':on_error,'root-shape':root_shape,'objects':new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container),'show-grids?':true});
} else {
return rumext.v2.jsx(app.main.render.component_svg,{'root-shape':root_shape,'class':class$,'objects':new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(container),'show-grids?':true,'is-hidden':is_hidden});
}
});

(app.main.ui.workspace.sidebar.assets.common.component_item_thumbnail_STAR_.displayName = "component-item-thumbnail*");

app.main.ui.workspace.sidebar.assets.common.generate_components_menu_entries = (function app$main$ui$workspace$sidebar$assets$common$generate_components_menu_entries(var_args){
var args__5755__auto__ = [];
var len__5749__auto___54845 = arguments.length;
var i__5750__auto___54846 = (0);
while(true){
if((i__5750__auto___54846 < len__5749__auto___54845)){
args__5755__auto__.push((arguments[i__5750__auto___54846]));

var G__54847 = (i__5750__auto___54846 + (1));
i__5750__auto___54846 = G__54847;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return app.main.ui.workspace.sidebar.assets.common.generate_components_menu_entries.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(app.main.ui.workspace.sidebar.assets.common.generate_components_menu_entries.cljs$core$IFn$_invoke$arity$variadic = (function (shapes,p__54826){
var map__54827 = p__54826;
var map__54827__$1 = cljs.core.__destructure_map(map__54827);
var for_design_tab_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54827__$1,new cljs.core.Keyword(null,"for-design-tab?","for-design-tab?",-900372392));
var multi = (cljs.core.count(shapes) > (1));
var copies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.common.types.component.in_component_copy_QMARK_,shapes);
var current_file_id = rumext.v2.use_ctx(app.main.ui.context.current_file_id);
var current_page_id = rumext.v2.use_ctx(app.main.ui.context.current_page_id);
var libraries = cljs.core.deref(app.main.refs.files);
var current_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,current_file_id);
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.main.data.helpers.get_page(new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(current_file),current_page_id),new cljs.core.Keyword(null,"objects","objects",2099713734));
var find_component = (function (shape,include_deleted_QMARK_){
return app.common.types.file.resolve_component.cljs$core$IFn$_invoke$arity$variadic(shape,current_file,libraries,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"include-deleted?","include-deleted?",-689388372),include_deleted_QMARK_], null)], 0));
});
var local_or_exists = (function (shape){
var library_id = new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape);
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(library_id,current_file_id)) || ((!((cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,library_id) == null)))));
});
var restorable_copies = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54820_SHARP_){
return local_or_exists(p1__54820_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54819_SHARP_){
return (find_component(p1__54819_SHARP_,false) == null);
}),copies));
var touched_not_dangling = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__54821_SHARP_){
var and__5023__auto__ = app.common.files.helpers.component_touched_QMARK_(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54821_SHARP_));
if(and__5023__auto__){
return find_component(p1__54821_SHARP_,false);
} else {
return and__5023__auto__;
}
}),copies);
var can_reset_overrides_QMARK_ = cljs.core.seq(touched_not_dangling);
var shape = cljs.core.first(shapes);
var shape_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape);
var main_instance_QMARK_ = app.common.types.component.main_instance_QMARK_(shape);
var variant_container_QMARK_ = app.common.types.component.is_variant_container_QMARK_(shape);
var component_id = new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(shape);
var variant_id = new cljs.core.Keyword(null,"variant-id","variant-id",1171818270).cljs$core$IFn$_invoke$arity$1(shape);
var library_id = new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape);
var local_component_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(library_id,current_file_id);
var component = find_component(shape,false);
var lacks_annotation_QMARK_ = (new cljs.core.Keyword(null,"annotation","annotation",-344661666).cljs$core$IFn$_invoke$arity$1(component) == null);
var is_dangling_QMARK_ = (component == null);
var can_show_component_QMARK_ = (((!(multi))) && ((((!(main_instance_QMARK_))) && ((!(is_dangling_QMARK_))))));
var can_update_main_QMARK_ = (((!(multi))) && ((((!(is_dangling_QMARK_))) && ((((!(main_instance_QMARK_))) && (((cljs.core.not(app.common.types.container.has_any_copy_parent_QMARK_(objects,shape))) && (app.common.files.helpers.component_touched_QMARK_(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape))))))))));
var can_detach_QMARK_ = ((cljs.core.seq(copies)) && (cljs.core.every_QMARK_((function (p1__54822_SHARP_){
return cljs.core.not(app.common.types.container.has_any_copy_parent_QMARK_(objects,p1__54822_SHARP_));
}),copies)));
var same_variant_QMARK_ = app.common.types.variant.same_variant_QMARK_(shapes);
var is_restorable_variant_QMARK_ = (function (shape__$1){
var component__$1 = find_component(shape__$1,true);
var main = app.common.types.component.get_deleted_component_root(component__$1);
var objects__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(libraries,new cljs.core.Keyword(null,"component-file","component-file",-1378670433).cljs$core$IFn$_invoke$arity$1(shape__$1)),new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"pages-index","pages-index",-1376462145)),new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component__$1)),new cljs.core.Keyword(null,"objects","objects",2099713734));
var parent = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects__$1,new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(main));
var and__5023__auto__ = new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component__$1);
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = app.common.types.component.is_variant_QMARK_(component__$1);
if(and__5023__auto____$1){
return parent;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
});
var restorable_variants_QMARK_ = cljs.core.every_QMARK_(is_restorable_variant_QMARK_,restorable_copies);
var do_detach_component = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.detach_components(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),copies)));
});
var do_reset_component = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.reset_components(cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),touched_not_dangling)));
});
var do_update_component_sync = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.update_component_sync.cljs$core$IFn$_invoke$arity$2(shape_id,library_id));
});
var do_update_remote_component = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"message","message",-406056002),"",new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.update-remote-component.message"),new cljs.core.Keyword(null,"hint","hint",439639918),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.update-remote-component.hint"),new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.update-remote-component.cancel"),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.update-remote-component.accept"),new cljs.core.Keyword(null,"accept-style","accept-style",630742659),new cljs.core.Keyword(null,"primary","primary",817773892),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),do_update_component_sync], null)));
});
var do_update_component = (function (){
if(local_component_QMARK_){
return do_update_component_sync();
} else {
return do_update_remote_component();
}
});
var do_show_in_assets = (function (){var component_id__$1 = (cljs.core.truth_(variant_container_QMARK_)?new cljs.core.Keyword(null,"component-id","component-id",1551113783).cljs$core$IFn$_invoke$arity$1(cljs.core.first(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54823_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__54823_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape)))):component_id);
return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.show_component_in_assets(component_id__$1));
});
})();
var do_create_annotation = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_annotations_id_for_create(shape_id));
});
var do_add_variant = (function (){
if(app.common.types.component.is_variant_QMARK_(shape)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-new-variant",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),(cljs.core.truth_(for_design_tab_QMARK_)?"workspace:design-tab-menu-variant":"workspace:context-menu-variant")], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.variants.add_new_variant.cljs$core$IFn$_invoke$arity$1(shape_id)], 0));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"transform-in-variant",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),(cljs.core.truth_(for_design_tab_QMARK_)?"workspace:design-tab-menu":"workspace:context-menu")], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.variants.transform_in_variant.cljs$core$IFn$_invoke$arity$1(shape_id)], 0));
}
});
var do_add_new_property = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"add-new-property",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"workspace:design-tab-menu-variant"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.variants.add_new_property.cljs$core$IFn$_invoke$arity$variadic(variant_id,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"property-value","property-value",1516163307),"Value 1",new cljs.core.Keyword(null,"editing?","editing?",1646440800),true], null)], 0))], 0));
});
var do_show_local_component = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.go_to_local_component.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"id","id",-1388402092),component_id], 0)));
});
var do_show_remote_component = (function (update_layout_QMARK_){
var temp__5825__auto__ = find_component(shape,true);
if(cljs.core.truth_(temp__5825__auto__)){
var comp = temp__5825__auto__;
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.go_to_component_file(library_id,comp,update_layout_QMARK_));
} else {
return null;
}
});
var do_show_component = (function (_,update_layout_QMARK_){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.hide_context_menu);

if(local_component_QMARK_){
return do_show_local_component();
} else {
return do_show_remote_component(update_layout_QMARK_);
}
});
var do_restore_component = (function (){
var comps_to_restore = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (id_file_map,p__54828){
var map__54829 = p__54828;
var map__54829__$1 = cljs.core.__destructure_map(map__54829);
var component_id__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54829__$1,new cljs.core.Keyword(null,"component-id","component-id",1551113783));
var component_file = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54829__$1,new cljs.core.Keyword(null,"component-file","component-file",-1378670433));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(id_file_map,component_id__$1,component_file);
}),cljs.core.PersistentArrayMap.EMPTY,restorable_copies);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.libraries.restore_components(comps_to_restore));

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(comps_to_restore))){
return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((1000),(function (){
return do_show_component(null,true);
}));
} else {
return null;
}
});
var menu_entries = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [(cljs.core.truth_((function (){var or__5025__auto__ = (function (){var and__5023__auto__ = (!(multi));
if(and__5023__auto__){
var or__5025__auto__ = variant_container_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return main_instance_QMARK_;
}
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = multi;
if(and__5023__auto__){
return same_variant_QMARK_;
} else {
return and__5023__auto__;
}
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.show-in-assets"),new cljs.core.Keyword(null,"action","action",-811238024),do_show_in_assets], null):null),(((((!(multi))) && (((main_instance_QMARK_) && (((local_component_QMARK_) && (lacks_annotation_QMARK_)))))))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.create-annotation"),new cljs.core.Keyword(null,"action","action",-811238024),do_create_annotation], null):null),((can_detach_QMARK_)?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),(((cljs.core.count(copies) > (1)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.detach-instances-in-bulk"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.detach-instance")),new cljs.core.Keyword(null,"action","action",-811238024),do_detach_component,new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword(null,"detach-component","detach-component",761982427)], null):null),((can_reset_overrides_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.reset-overrides"),new cljs.core.Keyword(null,"action","action",-811238024),do_reset_component], null):null),((cljs.core.seq(restorable_copies))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),((restorable_variants_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.restore-variant"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.restore-main")),new cljs.core.Keyword(null,"action","action",-811238024),do_restore_component], null):null),((can_show_component_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.show-main"),new cljs.core.Keyword(null,"action","action",-811238024),do_show_component], null):null),((can_update_main_QMARK_)?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.update-main"),new cljs.core.Keyword(null,"action","action",-811238024),do_update_component], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = (function (){var or__5025__auto__ = (!(multi));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return same_variant_QMARK_;
}
})();
if(cljs.core.truth_(and__5023__auto__)){
return main_instance_QMARK_;
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.add-variant"),new cljs.core.Keyword(null,"shortcut","shortcut",-431647697),new cljs.core.Keyword(null,"create-component-variant","create-component-variant",1450799770),new cljs.core.Keyword(null,"action","action",-811238024),do_add_variant], null):null),(cljs.core.truth_((function (){var and__5023__auto__ = same_variant_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = main_instance_QMARK_;
if(and__5023__auto____$1){
var and__5023__auto____$2 = variant_id;
if(cljs.core.truth_(and__5023__auto____$2)){
return for_design_tab_QMARK_;
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.add-variant-property"),new cljs.core.Keyword(null,"action","action",-811238024),do_add_new_property], null):null)], null);
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.complement(cljs.core.nil_QMARK_),menu_entries);
}));

(app.main.ui.workspace.sidebar.assets.common.generate_components_menu_entries.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(app.main.ui.workspace.sidebar.assets.common.generate_components_menu_entries.cljs$lang$applyTo = (function (seq54824){
var G__54825 = cljs.core.first(seq54824);
var seq54824__$1 = cljs.core.next(seq54824);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__54825,seq54824__$1);
}));


//# sourceMappingURL=app.main.ui.workspace.sidebar.assets.common.js.map
