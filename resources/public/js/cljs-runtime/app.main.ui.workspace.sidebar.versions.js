import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.time.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.notifications.js";
import "./app.main.data.workspace.versions.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.components.select.js";
import "./app.main.ui.dashboard.subscription.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.product.cta.js";
import "./app.main.ui.ds.product.empty_state.js";
import "./app.main.ui.ds.product.milestone.js";
import "./app.main.ui.ds.product.milestone_group.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./cuerdas.core.js";
import "./lambdaisland.uri.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.versions');
app.main.ui.workspace.sidebar.versions.versions = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace-versions","workspace-versions",-347907449),app.main.store.state);
app.main.ui.workspace.sidebar.versions.get_versions_stored_days = (function app$main$ui$workspace$sidebar$versions$get_versions_stored_days(team){
var subscription_type = app.main.ui.dashboard.subscription.get_subscription_type(new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(team));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription_type,"unlimited")){
return (30);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription_type,"enterprise")){
return (90);
} else {
return (7);

}
}
});
app.main.ui.workspace.sidebar.versions.get_versions_warning_subtext = (function app$main$ui$workspace$sidebar$versions$get_versions_warning_subtext(team){
var subscription_type = app.main.ui.dashboard.subscription.get_subscription_type(new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(team));
var is_owner_QMARK_ = new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(team));
var email_owner = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(cljs.core.some((function (p1__56161_SHARP_){
if(cljs.core.truth_(new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132).cljs$core$IFn$_invoke$arity$1(p1__56161_SHARP_))){
return p1__56161_SHARP_;
} else {
return null;
}
}),new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(team)));
var support_email = "support@penpot.app";
var go_to_subscription = ""+(lambdaisland.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.public_uri,"#/settings/subscriptions"], 0)) ?? "");
if(cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776))){
if(cljs.core.truth_(is_owner_QMARK_)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("enterprise",subscription_type)){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("subscription.workspace.versions.warning.enterprise.subtext-owner",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([support_email,support_email], 0));
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("subscription.workspace.versions.warning.subtext-owner",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([go_to_subscription], 0));
}
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("subscription.workspace.versions.warning.subtext-member",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([email_owner,email_owner], 0));
}
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.versions.warning.subtext",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([support_email], 0));
}
});
app.main.ui.workspace.sidebar.versions.group_snapshots = (function app$main$ui$workspace$sidebar$versions$group_snapshots(data){
return cljs.core.reverse(cljs.core.map_indexed.cljs$core$IFn$_invoke$arity$2((function (index,item){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"index","index",-1531685915),index);
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"created-at","created-at",-89248644),cljs.core.concat.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__56163_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__56163_SHARP_,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"version","version",425292698));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56162_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("user",new cljs.core.Keyword(null,"created-by","created-by",-1870794445).cljs$core$IFn$_invoke$arity$1(p1__56162_SHARP_));
}),data)),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__56166){
var vec__56167 = p__56166;
var day = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56167,(0),null);
var entries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56167,(1),null);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),new cljs.core.Keyword(null,"created-at","created-at",-89248644),app.common.time.inst(day),new cljs.core.Keyword(null,"snapshots","snapshots",941363956),entries], null);
}),cljs.core.group_by((function (p1__56165_SHARP_){
return app.common.time.format_inst.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"created-at","created-at",-89248644).cljs$core$IFn$_invoke$arity$1(p1__56165_SHARP_),new cljs.core.Keyword(null,"iso-date","iso-date",-1889998156));
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56164_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("system",new cljs.core.Keyword(null,"created-by","created-by",-1870794445).cljs$core$IFn$_invoke$arity$1(p1__56164_SHARP_));
}),data)))))));
});
app.main.ui.workspace.sidebar.versions.open_restore_version_dialog = (function app$main$ui$workspace$sidebar$versions$open_restore_version_dialog(origin,id){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.dialog.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.versions.restore-warning"),new cljs.core.Keyword(null,"controls","controls",1340701452),new cljs.core.Keyword(null,"inline-actions","inline-actions",-1590886374),new cljs.core.Keyword(null,"cancel","cancel",-1964088360),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.updates.dismiss"),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.hide());
})], null),new cljs.core.Keyword(null,"accept","accept",1874130431),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.restore"),new cljs.core.Keyword(null,"callback","callback",-705136228),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.versions.restore_version(id,origin));
})], null),new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Keyword(null,"restore-dialog","restore-dialog",230231813)], 0)));
});
app.main.ui.workspace.sidebar.versions.version_entry_STAR_ = (function app$main$ui$workspace$sidebar$versions$version_entry_STAR_(props_56170){
var current_profile = props_56170.currentProfile;
var on_delete = props_56170.onDelete;
var on_cancel_edit = props_56170.onCancelEdit;
var on_lock = props_56170.onLock;
var on_unlock = props_56170.onUnlock;
var on_edit = props_56170.onEdit;
var is_editing = props_56170.isEditing;
var on_restore = props_56170.onRestore;
var on_rename = props_56170.onRename;
var entry = props_56170.entry;
var show_menu_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var profiles = rumext.v2.deref(app.main.refs.profiles);
var created_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(profiles,new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(entry));
var on_open_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_menu_QMARK_,true);
}));
var on_close_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_menu_QMARK_,false);
}));
var on_edit__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_edit),rumext.v2.adapt(entry)],(function (event){
var G__56171 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entry);
var G__56172 = event;
return (on_edit.cljs$core$IFn$_invoke$arity$2 ? on_edit.cljs$core$IFn$_invoke$arity$2(G__56171,G__56172) : on_edit.call(null,G__56171,G__56172));
}));
var on_restore__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(entry),rumext.v2.adapt(on_restore)],(function (){
if(cljs.core.fn_QMARK_(on_restore)){
var G__56173 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entry);
return (on_restore.cljs$core$IFn$_invoke$arity$1 ? on_restore.cljs$core$IFn$_invoke$arity$1(G__56173) : on_restore.call(null,G__56173));
} else {
return null;
}
}));
var on_delete__$1 = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(entry),rumext.v2.adapt(on_delete)],(function (event){
if(cljs.core.fn_QMARK_(on_delete)){
var G__56174 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entry);
var G__56175 = event;
return (on_delete.cljs$core$IFn$_invoke$arity$2 ? on_delete.cljs$core$IFn$_invoke$arity$2(G__56174,G__56175) : on_delete.call(null,G__56174,G__56175));
} else {
return null;
}
}));
var on_lock__$1 = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(entry),rumext.v2.adapt(on_lock)],(function (){
if(cljs.core.truth_(on_lock)){
var G__56176 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entry);
return (on_lock.cljs$core$IFn$_invoke$arity$1 ? on_lock.cljs$core$IFn$_invoke$arity$1(G__56176) : on_lock.call(null,G__56176));
} else {
return null;
}
}));
var on_unlock__$1 = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(entry),rumext.v2.adapt(on_unlock)],(function (){
if(cljs.core.truth_(on_unlock)){
var G__56177 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entry);
return (on_unlock.cljs$core$IFn$_invoke$arity$1 ? on_unlock.cljs$core$IFn$_invoke$arity$1(G__56177) : on_unlock.call(null,G__56177));
} else {
return null;
}
}));
var on_name_input_focus = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
return app.util.dom.select_text_BANG_(app.util.dom.get_target(event));
}));
var on_name_input_blur = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(entry),rumext.v2.adapt(on_rename),rumext.v2.adapt(on_cancel_edit)],(function (event){
var label = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_target_val(event));
if((((!(cuerdas.core.empty_QMARK_(label)))) && (cljs.core.fn_QMARK_(on_rename)))){
var G__56178 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entry);
var G__56179 = label;
var G__56180 = event;
return (on_rename.cljs$core$IFn$_invoke$arity$3 ? on_rename.cljs$core$IFn$_invoke$arity$3(G__56178,G__56179,G__56180) : on_rename.call(null,G__56178,G__56179,G__56180));
} else {
var G__56181 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entry);
var G__56182 = event;
return (on_cancel_edit.cljs$core$IFn$_invoke$arity$2 ? on_cancel_edit.cljs$core$IFn$_invoke$arity$2(G__56181,G__56182) : on_cancel_edit.call(null,G__56181,G__56182));
}
}));
var on_name_input_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(entry),rumext.v2.adapt(on_cancel_edit),rumext.v2.adapt(on_name_input_blur)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_name_input_blur.cljs$core$IFn$_invoke$arity$1 ? on_name_input_blur.cljs$core$IFn$_invoke$arity$1(event) : on_name_input_blur.call(null,event));
} else {
if(cljs.core.truth_(app.util.keyboard.esc_QMARK_(event))){
if(cljs.core.fn_QMARK_(on_cancel_edit)){
var G__56184 = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entry);
var G__56185 = event;
return (on_cancel_edit.cljs$core$IFn$_invoke$arity$2 ? on_cancel_edit.cljs$core$IFn$_invoke$arity$2(G__56184,G__56185) : on_cancel_edit.call(null,G__56184,G__56185));
} else {
return null;
}
} else {
return null;
}
}
}));
return rumext.v2.jsxs("li",{'className':"main_ui_workspace_sidebar_versions__version-entry-wrap",'children':[rumext.v2.jsx(app.main.ui.ds.product.milestone.milestone_STAR_,{'onBlurInput':on_name_input_blur,'createdAt':new cljs.core.Keyword(null,"created-at","created-at",-89248644).cljs$core$IFn$_invoke$arity$1(entry),'label':new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(entry),'profile':created_by,'onKeyDownInput':on_name_input_key_down,'editing':is_editing,'onFocusInput':on_name_input_focus,'locked':(!((new cljs.core.Keyword(null,"locked-by","locked-by",-545502839).cljs$core$IFn$_invoke$arity$1(entry) == null))),'onOpenMenu':on_open_menu}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':cljs.core.deref(show_menu_QMARK_),'on-close':on_close_menu,'children':(function (){var current_user_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(current_profile);
var locked_by_id = new cljs.core.Keyword(null,"locked-by","locked-by",-545502839).cljs$core$IFn$_invoke$arity$1(entry);
var im_the_owner_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_user_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(created_by));
var is_locked_by_me_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_user_id,locked_by_id);
var is_locked_QMARK_ = (!((locked_by_id == null)));
var can_delete_QMARK_ = (((!(is_locked_QMARK_))) || (((is_locked_QMARK_) && (is_locked_by_me_QMARK_))));
return rumext.v2.jsxs("ul",{'className':"main_ui_workspace_sidebar_versions__version-options-dropdown",'children':[((im_the_owner_QMARK_)?rumext.v2.jsx("li",{'role':"button",'onClick':on_edit__$1,'className':"main_ui_workspace_sidebar_versions__menu-option",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.rename")}):null),rumext.v2.jsx("li",{'role':"button",'onClick':on_restore__$1,'className':"main_ui_workspace_sidebar_versions__menu-option",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.restore")}),((is_locked_by_me_QMARK_)?rumext.v2.jsx("li",{'role':"button",'onClick':on_unlock__$1,'className':"main_ui_workspace_sidebar_versions__menu-option",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.unlock")}):((((im_the_owner_QMARK_) && ((!(is_locked_QMARK_)))))?rumext.v2.jsx("li",{'role':"button",'onClick':on_lock__$1,'className':"main_ui_workspace_sidebar_versions__menu-option",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.lock")}):null)),((can_delete_QMARK_)?rumext.v2.jsx("li",{'role':"button",'onClick':on_delete__$1,'className':"main_ui_workspace_sidebar_versions__menu-option",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.delete")}):null)]});
})()})]});
});

(app.main.ui.workspace.sidebar.versions.version_entry_STAR_.displayName = "version-entry*");

app.main.ui.workspace.sidebar.versions.snapshot_entry_STAR_ = (function app$main$ui$workspace$sidebar$versions$snapshot_entry_STAR_(props_56186){
var on_restore_snapshot = props_56186.onRestoreSnapshot;
var on_pin_snapshot = props_56186.onPinSnapshot;
var entry = props_56186.entry;
var open_menu_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var entry_ref = rumext.v2.use_ref(null);
var on_pin_snapshot__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_pin_snapshot)],(function (event){
var node = app.util.dom.get_current_target(event);
var id = app.common.uuid.parse(app.util.dom.get_data(node,"id"));
if(cljs.core.fn_QMARK_(on_pin_snapshot)){
return (on_pin_snapshot.cljs$core$IFn$_invoke$arity$2 ? on_pin_snapshot.cljs$core$IFn$_invoke$arity$2(id,event) : on_pin_snapshot.call(null,id,event));
} else {
return null;
}
}));
var on_restore_snapshot__$1 = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_restore_snapshot)],(function (event){
var node = app.util.dom.get_current_target(event);
var id = app.common.uuid.parse(app.util.dom.get_data(node,"id"));
if(cljs.core.fn_QMARK_(on_restore_snapshot)){
return (on_restore_snapshot.cljs$core$IFn$_invoke$arity$2 ? on_restore_snapshot.cljs$core$IFn$_invoke$arity$2(id,event) : on_restore_snapshot.call(null,id,event));
} else {
return null;
}
}));
var on_open_snapshot_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(entry)],(function (index,event){
var snapshot = cljs.core.nth.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(entry),index);
var current_bb = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(app.util.dom.get_bounding_rect(rumext.v2.ref_val(entry_ref)));
var target_bb = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(app.util.dom.get_bounding_rect(app.util.dom.get_target(event)));
var offset = ((target_bb - current_bb) + (32));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(open_menu_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(snapshot),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"offset","offset",296498311),offset], 0));
}));
return rumext.v2.jsxs("li",{'ref':entry_ref,'className':"main_ui_workspace_sidebar_versions__version-entry-wrap",'children':[rumext.v2.jsx(app.main.ui.ds.product.milestone_group.milestone_group_STAR_,{'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.versions.autosaved.version",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.time.format_inst.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"created-at","created-at",-89248644).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"localized-date","localized-date",-1568818775))], 0)),'snapshots':cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.Keyword(null,"snapshots","snapshots",941363956).cljs$core$IFn$_invoke$arity$1(entry)),'onMenuClick':on_open_snapshot_menu}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':(!((cljs.core.deref(open_menu_STAR_) == null))),'on-close':(function (){
return cljs.core.reset_BANG_(open_menu_STAR_,null);
}),'children':rumext.v2.jsxs("ul",{'style':{'--offset':""+(new cljs.core.Keyword(null,"offset","offset",296498311).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(open_menu_STAR_)) ?? "")+"px"},'className':"main_ui_workspace_sidebar_versions__version-options-dropdown",'children':[rumext.v2.jsx("li",{'role':"button",'data-id':""+(new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(open_menu_STAR_)) ?? ""),'onClick':on_restore_snapshot__$1,'className':"main_ui_workspace_sidebar_versions__menu-option",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.versions.button.restore")}),rumext.v2.jsx("li",{'role':"button",'data-id':""+(new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(open_menu_STAR_)) ?? ""),'onClick':on_pin_snapshot__$1,'className':"main_ui_workspace_sidebar_versions__menu-option",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.versions.button.pin")})]})})]});
});

(app.main.ui.workspace.sidebar.versions.snapshot_entry_STAR_.displayName = "snapshot-entry*");

app.main.ui.workspace.sidebar.versions.versions_toolbox_STAR_ = (function app$main$ui$workspace$sidebar$versions$versions_toolbox_STAR_(props_56188){
var profiles = rumext.v2.deref(app.main.refs.profiles);
var profile = rumext.v2.deref(app.main.refs.profile);
var team = rumext.v2.deref(app.main.refs.team);
var map__56192 = rumext.v2.deref(app.main.ui.workspace.sidebar.versions.versions);
var map__56192__$1 = cljs.core.__destructure_map(map__56192);
var state = map__56192__$1;
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56192__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56192__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var editing = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56192__$1,new cljs.core.Keyword(null,"editing","editing",1365491601));
var users = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(data)],(function (){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (p__56213){
var map__56214 = p__56213;
var map__56214__$1 = cljs.core.__destructure_map(map__56214);
var created_by = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56214__$1,new cljs.core.Keyword(null,"created-by","created-by",-1870794445));
var profile_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__56214__$1,new cljs.core.Keyword(null,"profile-id","profile-id",1866572309));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("user",created_by)){
return profile_id;
} else {
return null;
}
})),data);
}));
var entries = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(state)],(function (){
return app.main.ui.workspace.sidebar.versions.group_snapshots(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56187_SHARP_){
return ((cljs.core.not(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(state))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("user",new cljs.core.Keyword(null,"created-by","created-by",-1870794445).cljs$core$IFn$_invoke$arity$1(p1__56187_SHARP_))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"filter","filter",-948537934).cljs$core$IFn$_invoke$arity$1(state),new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(p1__56187_SHARP_))))));
}),new cljs.core.Keyword(null,"data","data",-232669377).cljs$core$IFn$_invoke$arity$1(state)));
}));
var on_create_version = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.versions.create_version());
}));
var on_edit_version = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (id,_event){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.versions.update_versions_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),id], null)));
}));
var on_cancel_version_edition = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_id,_event){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.versions.update_versions_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"editing","editing",1365491601),null], null)));
}));
var on_rename_version = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (id,label){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.versions.rename_version(id,label));
}));
var on_restore_version = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (id,_event){
return app.main.ui.workspace.sidebar.versions.open_restore_version_dialog(new cljs.core.Keyword(null,"version","version",425292698),id);
}));
var on_restore_snapshot = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (id,_event){
return app.main.ui.workspace.sidebar.versions.open_restore_version_dialog(new cljs.core.Keyword(null,"snapshot","snapshot",-1274785710),id);
}));
var on_delete_version = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (id){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.versions.delete_version(id));
}));
var on_pin_version = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (id){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.versions.pin_version(id));
}));
var on_lock_version = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (id){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.versions.lock_version(id));
}));
var on_unlock_version = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (id){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.versions.unlock_version(id));
}));
var on_change_filter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (filter){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"all","all",892129742),filter)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.versions.update_versions_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),null], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"own","own",-286380473),filter)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.versions.update_versions_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(profile)], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.versions.update_versions_state(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"filter","filter",-948537934),filter], null)));

}
}
}));
var options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(users),rumext.v2.adapt(profile)],(function (){
var current_profile_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(profile,new cljs.core.Keyword(null,"id","id",-1388402092));
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.versions.filter.all")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"own","own",-286380473),new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.versions.filter.mine")], null)], null),cljs.core.keep.cljs$core$IFn$_invoke$arity$1((function (id){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(id,current_profile_id)){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(profiles,id),new cljs.core.Keyword(null,"fullname","fullname",1638772587));
if(cljs.core.truth_(temp__5825__auto__)){
var fullname = temp__5825__auto__;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),id,new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.versions.filter.user",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([fullname], 0))], null);
} else {
return null;
}
} else {
return null;
}
})),users);
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.versions.init_versions_state());
}));

return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_versions__version-toolbox",'children':[rumext.v2.jsx(app.main.ui.components.select.select,{'default-value':new cljs.core.Keyword(null,"all","all",892129742),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.versions.filter.label"),'options':options,'on-change':on_change_filter}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"loading","loading",-737050189)))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_versions__versions-empty",'children':rumext.v2.jsx(app.main.ui.ds.product.empty_state.empty_state_STAR_,{'icon':app.main.ui.ds.foundations.assets.icon.clock,'text':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.versions.loading")})}):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"loaded","loaded",-1246482293)))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_versions__version-save-version",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.versions.button.save"),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.versions.button.save"),'onClick':on_create_version,'icon':app.main.ui.ds.foundations.assets.icon.pin})]}),((cljs.core.empty_QMARK_(data))?rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_versions__versions-empty",'children':rumext.v2.jsx(app.main.ui.ds.product.empty_state.empty_state_STAR_,{'icon':app.main.ui.ds.foundations.assets.icon.history,'text':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.versions.empty")})}):rumext.v2.jsx("ul",{'className':"main_ui_workspace_sidebar_versions__versions-entries",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,entry){
out_arr__35152__auto__.push((function (){var G__56262 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry);
var G__56262__$1 = (((G__56262 instanceof cljs.core.Keyword))?G__56262.fqn:null);
switch (G__56262__$1) {
case "version":
return rumext.v2.jsx(app.main.ui.workspace.sidebar.versions.version_entry_STAR_,{'entry':entry,'onDelete':on_delete_version,'onLock':on_lock_version,'currentProfile':profile,'onRestore':on_restore_version,'onUnlock':on_unlock_version,'onEdit':on_edit_version,'onCancelEdit':on_cancel_version_edition,'onRename':on_rename_version,'isEditing':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entry),editing)},new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(entry));

break;
case "snapshot":
return rumext.v2.jsx(app.main.ui.workspace.sidebar.versions.snapshot_entry_STAR_,{'entry':entry,'onRestoreSnapshot':on_restore_snapshot,'onPinSnapshot':on_pin_version},new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(entry));

break;
default:
return null;

}
})());

return out_arr__35152__auto__;
}),[],entries)})),rumext.v2.jsx(app.main.ui.ds.product.cta.cta_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.versions.warning.text",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.ui.workspace.sidebar.versions.get_versions_stored_days(team)], 0)),'children':rumext.v2.jsx(app.util.i18n.tr_html_STAR_,{'tagName':"div",'className':"main_ui_workspace_sidebar_versions__cta",'content':app.main.ui.workspace.sidebar.versions.get_versions_warning_subtext(team)})})]}):null))]});
});

(app.main.ui.workspace.sidebar.versions.versions_toolbox_STAR_.displayName = "versions-toolbox*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.versions.js.map
