import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.path_names.js";
import "./app.common.schema.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.js";
import "./app.main.store.js";
import "./app.main.ui.components.forms.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.workspace.sidebar.assets.common.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.assets.groups');
app.main.ui.workspace.sidebar.assets.groups.asset_group_title_STAR_ = (function app$main$ui$workspace$sidebar$assets$groups$asset_group_title_STAR_(props_55101){
var on_group_combine_variants = props_55101.onGroupCombineVariants;
var path = props_55101.path;
var is_group_open = props_55101.isGroupOpen;
var is_can_combine = props_55101.isCanCombine;
var file_id = props_55101.fileId;
var section = props_55101.section;
var on_ungroup = props_55101.onUngroup;
var on_rename = props_55101.onRename;
if(cljs.core.empty_QMARK_(path)){
return null;
} else {
var vec__55102 = app.common.path_names.compact_path(path,(35),true);
var other_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55102,(0),null);
var last_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55102,(1),null);
var truncated = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55102,(2),null);
var menu_state = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(app.main.ui.workspace.sidebar.assets.common.initial_context_menu_state);
var on_fold_group = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(section),rumext.v2.adapt(path),rumext.v2.adapt(is_group_open)],(function (event){
app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.set_assets_group_open(file_id,section,path,cljs.core.not(is_group_open)));
}));
var on_context_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

var pos = app.util.dom.get_client_position(event);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(menu_state,app.main.ui.workspace.sidebar.assets.common.open_context_menu,pos);
}));
var on_close_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(menu_state,app.main.ui.workspace.sidebar.assets.common.close_context_menu);
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_assets_groups__group-title-wrapper",'children':[rumext.v2.jsxs("div",{'onContextMenu':on_context_menu,'className':"main_ui_workspace_sidebar_assets_groups__group-title",'children':[rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':true,'collapsed':cljs.core.not(is_group_open),'allClickable':true,'onCollapsed':on_fold_group,'title':rumext.v2.jsxs(rumext.v2.Fragment,{'children':[((cljs.core.empty_QMARK_(other_path))?null:rumext.v2.jsxs("span",{'title':(cljs.core.truth_(truncated)?path:null),'className':"main_ui_workspace_sidebar_assets_groups__pre-path",'children':[other_path,"\u00A0\u2022\u00A0"]})),rumext.v2.jsx("span",{'title':(cljs.core.truth_(truncated)?path:null),'className':"main_ui_workspace_sidebar_assets_groups__path",'children':last_path})]})}),rumext.v2.jsx(app.main.ui.workspace.sidebar.assets.common.assets_context_menu_STAR_,{'onClose':on_close_menu,'state':cljs.core.deref(menu_state),'options':(function (){var G__55105 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.rename"),new cljs.core.Keyword(null,"id","id",-1388402092),"assets-rename-group",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (p1__55100_SHARP_){
return (on_rename.cljs$core$IFn$_invoke$arity$3 ? on_rename.cljs$core$IFn$_invoke$arity$3(p1__55100_SHARP_,path,last_path) : on_rename.call(null,p1__55100_SHARP_,path,last_path));
})], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.ungroup"),new cljs.core.Keyword(null,"id","id",-1388402092),"assets-ungroup-group",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
return (on_ungroup.cljs$core$IFn$_invoke$arity$1 ? on_ungroup.cljs$core$IFn$_invoke$arity$1(path) : on_ungroup.call(null,path));
})], null)], null);
if(cljs.core.truth_(is_can_combine)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__55105,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.shape.menu.combine-as-variants"),new cljs.core.Keyword(null,"id","id",-1388402092),"assets-combine-as-variants",new cljs.core.Keyword(null,"handler","handler",-195596612),(function (){
return (on_group_combine_variants.cljs$core$IFn$_invoke$arity$1 ? on_group_combine_variants.cljs$core$IFn$_invoke$arity$1(path) : on_group_combine_variants.call(null,path));
})], null));
} else {
return G__55105;
}
})()})]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_assets_groups__title-menu",'children':rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.component-group-options"),'onClick':on_context_menu,'icon':app.main.ui.ds.foundations.assets.icon.menu})})]});
}
});

(app.main.ui.workspace.sidebar.assets.groups.asset_group_title_STAR_.displayName = "asset-group-title*");

/**
 * Convert a list of assets in a nested structure like this:
 * 
 *  {'': [assetA assetB]
 *   'group1': {'': [asset1A asset1B]
 *              'subgroup11': {'': [asset11A asset11B asset11C]}
 *              'subgroup12': {'': [asset12A]}}
 *   'group2': {'subgroup21': {'': [asset21A]}}}
 *   
 */
app.main.ui.workspace.sidebar.assets.groups.group_assets = (function app$main$ui$workspace$sidebar$assets$groups$group_assets(assets,reverse_sort_QMARK_){
if(cljs.core.empty_QMARK_(assets)){
return null;
} else {
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (groups,p__55107){
var map__55108 = p__55107;
var map__55108__$1 = cljs.core.__destructure_map(map__55108);
var asset = map__55108__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55108__$1,new cljs.core.Keyword(null,"path","path",-188191168));
var path__$1 = app.common.path_names.split_path((function (){var or__5025__auto__ = path;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})());
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(groups,cljs.core.conj.cljs$core$IFn$_invoke$arity$2(path__$1,""),(function (group){
if(cljs.core.truth_(group)){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(group,asset);
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [asset], null);
}
}));
}),cljs.core.sorted_map_by((function (key1,key2){
if(cljs.core.truth_(reverse_sort_QMARK_)){
return cljs.core.compare(key2,key1);
} else {
return cljs.core.compare(key1,key2);
}
})),assets);
}
});
app.main.ui.workspace.sidebar.assets.groups.schema_COLON_group_form = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"GroupForm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(250)], null)], null)], null)], null);
app.main.ui.workspace.sidebar.assets.groups.name_group_dialog = (function app$main$ui$workspace$sidebar$assets$groups$name_group_dialog(props_55109){
var map__55110 = rumext.v2.util.wrap_props(props_55109);
var map__55110__$1 = cljs.core.__destructure_map(map__55110);
var ctx = map__55110__$1;
var path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55110__$1,new cljs.core.Keyword(null,"path","path",-188191168),"");
var last_path = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55110__$1,new cljs.core.Keyword(null,"last-path","last-path",-143957020),"");
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55110__$1,new cljs.core.Keyword(null,"accept","accept",1874130431));
var initial = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(last_path)],(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"asset-name","asset-name",-1412454368),last_path], null);
}));
var form = (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.workspace.sidebar.assets.groups.schema_COLON_group_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial) : app.main.ui.components.forms.use_form.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.workspace.sidebar.assets.groups.schema_COLON_group_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial));
var create_QMARK_ = cljs.core.empty_QMARK_(path);
var on_accept = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(form)],(function (_){
var asset_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clean-data","clean-data",1601974651),new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(create_QMARK_){
(accept.cljs$core$IFn$_invoke$arity$1 ? accept.cljs$core$IFn$_invoke$arity$1(asset_name) : accept.call(null,asset_name));
} else {
(accept.cljs$core$IFn$_invoke$arity$2 ? accept.cljs$core$IFn$_invoke$arity$2(path,asset_name) : accept.call(null,path,asset_name));
}

return app.main.data.modal.hide_BANG_();
}));
return rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_assets_groups__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_assets_groups__modal-container",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_assets_groups__modal-header",'children':[rumext.v2.jsx("h2",{'className':"main_ui_workspace_sidebar_assets_groups__modal-title",'children':((create_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.create-group"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.rename-group"))}),rumext.v2.jsx("button",{'onClick':app.main.data.modal.hide_BANG_,'className':"main_ui_workspace_sidebar_assets_groups__modal-close-btn",'children':app.main.ui.icons.close})]}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_assets_groups__modal-content",'children':rumext.v2.jsx(app.main.ui.components.forms.form,{'form':form,'on-submit':on_accept,'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'name':new cljs.core.Keyword(null,"name","name",1843675177),'class':"main_ui_workspace_sidebar_assets_groups__input-wrapper",'auto-focus?':true,'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.group-name"),'hint':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.create-group-hint")})})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_assets_groups__modal-footer",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_assets_groups__action-buttons",'children':[rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.cancel"),'onClick':app.main.data.modal.hide_BANG_,'className':"main_ui_workspace_sidebar_assets_groups__cancel-button"}),rumext.v2.jsx("input",{'type':"button",'disabled':cljs.core.not(new cljs.core.Keyword(null,"valid","valid",155614240).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))),'value':((create_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.create"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.rename")),'onClick':on_accept,'className':"main_ui_workspace_sidebar_assets_groups__accept-btn"+" "+((cljs.core.not(new cljs.core.Keyword(null,"valid","valid",155614240).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))))?"disabled":"")})]})})]})});
});

(app.main.ui.workspace.sidebar.assets.groups.name_group_dialog.displayName = "name-group-dialog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"name-group-dialog","name-group-dialog",1853050356),app.main.ui.workspace.sidebar.assets.groups.name_group_dialog);
}));

//# sourceMappingURL=app.main.ui.workspace.sidebar.assets.groups.js.map
