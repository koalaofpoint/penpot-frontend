import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.auth.js";
import "./app.main.data.common.js";
import "./app.main.data.dashboard.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.data.team.js";
import "./app.main.refs.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.ui.components.dropdown_menu.js";
import "./app.main.ui.components.link.js";
import "./app.main.ui.dashboard.comments.js";
import "./app.main.ui.dashboard.inline_edition.js";
import "./app.main.ui.dashboard.project_menu.js";
import "./app.main.ui.dashboard.subscription.js";
import "./app.main.ui.dashboard.team_form.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.nitrate.nitrate_form.js";
import "./app.util.dom.js";
import "./app.util.dom.dnd.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./app.util.timers.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./goog.functions.functions.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.sidebar');
app.main.ui.dashboard.sidebar.clear_search_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_sidebar__clear-search-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-delete-text"})});
app.main.ui.dashboard.sidebar.search_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_sidebar__search-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-search"})});
app.main.ui.dashboard.sidebar.tick_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_sidebar__tick-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-tick"})});
app.main.ui.dashboard.sidebar.logo_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_sidebar__logo-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-logo"})});
app.main.ui.dashboard.sidebar.add_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_sidebar__add-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-add"})});
app.main.ui.dashboard.sidebar.arrow_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_sidebar__arrow-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-arrow"})});
app.main.ui.dashboard.sidebar.menu_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_sidebar__menu-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-menu"})});
app.main.ui.dashboard.sidebar.pin_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_sidebar__pin-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-pin"})});
app.main.ui.dashboard.sidebar.exit_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_sidebar__exit-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-exit"})});
app.main.ui.dashboard.sidebar.sidebar_project_STAR_ = (function app$main$ui$dashboard$sidebar$sidebar_project_STAR_(props_53222){
var is_selected = props_53222.isSelected;
var item = props_53222.item;
var dstate = rumext.v2.deref(app.main.refs.dashboard_local);
var selected_files = new cljs.core.Keyword(null,"selected-files","selected-files",1045525459).cljs$core$IFn$_invoke$arity$1(dstate);
var selected_project = new cljs.core.Keyword(null,"selected-project","selected-project",993223033).cljs$core$IFn$_invoke$arity$1(dstate);
var edit_id = new cljs.core.Keyword(null,"project-for-edit","project-for-edit",-763691370).cljs$core$IFn$_invoke$arity$1(dstate);
var local_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false,new cljs.core.Keyword(null,"menu-pos","menu-pos",1459627496),null,new cljs.core.Keyword(null,"edition?","edition?",594759303),cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),edit_id),new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false], null);
}));
var local = cljs.core.deref(local_STAR_);
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"id","id",-1388402092));
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(project_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_files.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id], 0)));
}));
var on_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(project_id)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_files.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id], 0)));

return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
var temp__5825__auto__ = app.util.dom.get_element(cljs.core.str.cljs$core$IFn$_invoke$arity$1(project_id));
if(cljs.core.truth_(temp__5825__auto__)){
var title = temp__5825__auto__;
app.util.dom.set_attribute_BANG_(title,"tabindex","0");

app.util.dom.focus_BANG_(title);

return app.util.dom.set_attribute_BANG_(title,"tabindex","-1");
} else {
return null;
}
}));
} else {
return null;
}
}));
var on_menu_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var position = app.util.dom.get_client_position(event);
app.util.dom.prevent_default(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(local_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"menu-pos","menu-pos",1459627496),position], 0));
}));
var on_menu_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295),false);
}));
var on_edit_open = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"edition?","edition?",594759303),true);
}));
var on_edit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(item)],(function (name){
if(cuerdas.core.blank_QMARK_(name)){
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(app.main.data.dashboard.rename_project(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(item,new cljs.core.Keyword(null,"name","name",1843675177),name)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard:sidebar"], null)));
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"edition?","edition?",594759303),false);
}));
var on_drag_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_project)],(function (e){
if(cljs.core.truth_(app.util.dom.dnd.has_type_QMARK_(e,"penpot/files"))){
app.util.dom.prevent_default(e);

if(cljs.core.truth_(app.util.dom.dnd.from_child_QMARK_(e))){
return null;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_project,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),true);
} else {
return null;
}
}
} else {
return null;
}
}));
var on_drag_over = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
if(cljs.core.truth_(app.util.dom.dnd.has_type_QMARK_(e,"penpot/files"))){
return app.util.dom.prevent_default(e);
} else {
return null;
}
}));
var on_drag_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
if(cljs.core.truth_(app.util.dom.dnd.from_child_QMARK_(e))){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false);
}
}));
var on_drop_success = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(project_id)],(function (_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.common.go_to_dashboard_files.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id], 0)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.success-move-file"))], 0));
}));
var on_drop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(item),rumext.v2.adapt(selected_files)],(function (_){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(local_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410),false);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_project,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item))){
var data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ids","ids",-998535796),selected_files,new cljs.core.Keyword(null,"project-id","project-id",206449307),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)], null);
var mdata = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_drop_success], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.move_files(cljs.core.with_meta(data,mdata)));
} else {
return null;
}
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("li",{'onDoubleClick':on_edit_open,'onDragEnter':on_drag_enter,'tabIndex':"0",'onDragLeave':on_drag_leave,'className':"main_ui_dashboard_sidebar__project-element"+" "+"main_ui_dashboard_sidebar__sidebar-nav-item"+" "+(cljs.core.truth_(is_selected)?"main_ui_dashboard_sidebar__current":"")+" "+(cljs.core.truth_(new cljs.core.Keyword(null,"dragging?","dragging?",-995941410).cljs$core$IFn$_invoke$arity$1(local))?"main_ui_dashboard_sidebar__dragging":""),'children':(cljs.core.truth_(new cljs.core.Keyword(null,"edition?","edition?",594759303).cljs$core$IFn$_invoke$arity$1(local))?rumext.v2.jsx(app.main.ui.dashboard.inline_edition.inline_edition,{'content':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),'on-end':on_edit}):rumext.v2.jsx("span",{'className':"main_ui_dashboard_sidebar__element-title",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)})),'onContextMenu':on_menu_click,'onDrop':on_drop,'onDragOver':on_drag_over,'onClick':on_click,'onKeyDown':on_key_down}),rumext.v2.jsx(app.main.ui.dashboard.project_menu.project_menu_STAR_,{'project':item,'show':new cljs.core.Keyword(null,"menu-open","menu-open",1430293295).cljs$core$IFn$_invoke$arity$1(local),'left':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"menu-pos","menu-pos",1459627496).cljs$core$IFn$_invoke$arity$1(local)),'top':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"menu-pos","menu-pos",1459627496).cljs$core$IFn$_invoke$arity$1(local)),'onEdit':on_edit_open,'onClose':on_menu_close})]});
});

(app.main.ui.dashboard.sidebar.sidebar_project_STAR_.displayName = "sidebar-project*");

app.main.ui.dashboard.sidebar.sidebar_search_STAR_ = (function app$main$ui$dashboard$sidebar$sidebar_search_STAR_(props_53224){
var team_id = props_53224.teamId;
var search_term = props_53224.searchTerm;
var search_term__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(search_term,"");
var focused_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var emit_BANG_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$1((function (){
return goog.functions.debounce(app.main.store.emit_BANG_,(500));
}));
var on_search_blur = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
return cljs.core.reset_BANG_(focused_QMARK_,false);
}));
var on_search_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var value = app.util.dom.get_target_val(event);
var G__53225 = app.main.data.common.go_to_dashboard_search.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"term","term",-1817390416),value], 0));
return (emit_BANG_.cljs$core$IFn$_invoke$arity$1 ? emit_BANG_.cljs$core$IFn$_invoke$arity$1(G__53225) : emit_BANG_.call(null,G__53225));
}));
var on_clear_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (e){
var G__53226_53334 = app.main.data.common.go_to_dashboard_search();
(emit_BANG_.cljs$core$IFn$_invoke$arity$1 ? emit_BANG_.cljs$core$IFn$_invoke$arity$1(G__53226_53334) : emit_BANG_.call(null,G__53226_53334));

var search_input = app.util.dom.get_element("search-input");
app.util.dom.clean_value_BANG_(search_input);

app.util.dom.focus_BANG_(search_input);

app.util.dom.prevent_default(e);

return app.util.dom.stop_propagation(e);
}));
var on_key_press = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(e))){
app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
var search_title = app.util.dom.get_element("dashboard-search-title");
if(cljs.core.truth_(search_title)){
app.util.dom.set_attribute_BANG_(search_title,"tabindex","0");

app.util.dom.focus_BANG_(search_title);

return app.util.dom.set_attribute_BANG_(search_title,"tabindex","-1");
} else {
return null;
}
}));

app.util.dom.prevent_default(e);

return app.util.dom.stop_propagation(e);
} else {
return null;
}
}));
var handle_clear_search = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_clear_click)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_clear_click.cljs$core$IFn$_invoke$arity$1 ? on_clear_click.cljs$core$IFn$_invoke$arity$1(event) : on_clear_click.call(null,event));
} else {
return null;
}
}));
return rumext.v2.jsxs("form",{'className':"main_ui_dashboard_sidebar__sidebar-search",'children':[rumext.v2.jsx("input",{'onKeyPress':on_key_press,'onChange':on_search_change,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.search-placeholder"),'className':"main_ui_dashboard_sidebar__input-text",'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.search-placeholder"),'id':"search-input",'onBlur':on_search_blur,'autoComplete':"off",'type':"text",'ref':(function (p1__53223_SHARP_){
if(cljs.core.truth_(p1__53223_SHARP_)){
return (p1__53223_SHARP_.value = search_term__$1);
} else {
return null;
}
}),'defaultValue':search_term__$1},"images-search-box"),(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.deref(focused_QMARK_);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.seq(search_term__$1);
}
})())?rumext.v2.jsx("button",{'tabIndex':"0",'aria-label':"dashboard-clear-search",'onClick':on_clear_click,'onKeyDown':handle_clear_search,'className':"main_ui_dashboard_sidebar__search-btn main_ui_dashboard_sidebar__clear-search-btn",'children':app.main.ui.dashboard.sidebar.clear_search_icon}):rumext.v2.jsx("button",{'aria-label':"dashboard-search",'onClick':on_clear_click,'className':"main_ui_dashboard_sidebar__search-btn",'children':app.main.ui.dashboard.sidebar.search_icon}))]});
});

(app.main.ui.dashboard.sidebar.sidebar_search_STAR_.displayName = "sidebar-search*");

app.main.ui.dashboard.sidebar.teams_selector_dropdown_STAR_ = (function app$main$ui$dashboard$sidebar$teams_selector_dropdown_STAR_(props_53227){
var allow_create_teams = undefined;
var profile = undefined;
var show_default_team = undefined;
var teams = undefined;
var team = undefined;
var allow_create_org = undefined;
var props = undefined;
var {"team": team, "profile": profile, "teams": teams, "showDefaultTeam": show_default_team, "allowCreateTeams": allow_create_teams, "allowCreateOrg": allow_create_org, ...props} = props_53227;

var on_create_team_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"team-form","team-form",1411783122),cljs.core.PersistentArrayMap.EMPTY));
}));
var on_team_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var team_id = app.common.uuid.parse(app.util.dom.get_data(app.util.dom.get_current_target(event),"value"));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_recent.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], 0)));
}));
var on_create_org_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
if(cljs.core.truth_(new cljs.core.Keyword(null,"nitrate-licence","nitrate-licence",1028080808).cljs$core$IFn$_invoke$arity$1(profile))){
return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1("/control-center/org/create");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"nitrate-form","nitrate-form",-1290547359),cljs.core.PersistentArrayMap.EMPTY));
}
}));
return rumext.v2.create_element(app.main.ui.components.dropdown_menu.dropdown_menu_STAR_,props,(cljs.core.truth_(show_default_team)?rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':on_team_click,'data-value':new cljs.core.Keyword(null,"default-team-id","default-team-id",1198639706).cljs$core$IFn$_invoke$arity$1(profile),'className':"main_ui_dashboard_sidebar__team-dropdown-item",'children':[rumext.v2.jsx("span",{'className':"main_ui_dashboard_sidebar__penpot-icon",'children':app.main.ui.icons.logo_icon}),rumext.v2.jsx("span",{'className':"main_ui_dashboard_sidebar__team-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.your-penpot")}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"default-team-id","default-team-id",1198639706).cljs$core$IFn$_invoke$arity$1(profile),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team)))?app.main.ui.dashboard.sidebar.tick_icon:null)]}):null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,team_item){
out_arr__35152__auto__.push(rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':on_team_click,'data-value':new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team_item),'className':"main_ui_dashboard_sidebar__team-dropdown-item",'children':[rumext.v2.jsx("img",{'src':app.config.resolve_team_photo_url(team_item),'alt':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team_item),'className':"main_ui_dashboard_sidebar__team-picture"}),(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776));
if(and__5023__auto__){
var G__53229 = app.main.ui.dashboard.subscription.get_subscription_type(new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(team_item));
var fexpr__53228 = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["enterprise",null,"unlimited",null], null), null);
return (fexpr__53228.cljs$core$IFn$_invoke$arity$1 ? fexpr__53228.cljs$core$IFn$_invoke$arity$1(G__53229) : fexpr__53228.call(null,G__53229));
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_sidebar__team-text-with-icon",'children':[rumext.v2.jsx("span",{'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team_item),'className':"main_ui_dashboard_sidebar__team-text",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team_item)}),rumext.v2.jsx(app.main.ui.dashboard.subscription.menu_team_icon_STAR_,{'subscriptionType':app.main.ui.dashboard.subscription.get_subscription_type(new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(team_item))})]}):rumext.v2.jsx("span",{'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team_item),'className':"main_ui_dashboard_sidebar__team-text",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team_item)})),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team_item),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team)))?app.main.ui.dashboard.sidebar.tick_icon:null)]},cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team_item))));

return out_arr__35152__auto__;
}),[],cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"is-default","is-default",1401171070),cljs.core.vals(teams))),(cljs.core.truth_(allow_create_teams)?(function (){
rumext.v2.jsx("hr",{'role':"separator",'className':"main_ui_dashboard_sidebar__team-separator"});

return rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':on_create_team_click,'className':"main_ui_dashboard_sidebar__team-dropdown-item main_ui_dashboard_sidebar__action",'children':[rumext.v2.jsx("span",{'className':"main_ui_dashboard_sidebar__icon-wrapper",'children':app.main.ui.dashboard.sidebar.add_icon}),rumext.v2.jsx("span",{'className':"main_ui_dashboard_sidebar__team-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.create-new-team")})]});
})()
:null),(cljs.core.truth_(allow_create_org)?(function (){
rumext.v2.jsx("hr",{'role':"separator",'className':"main_ui_dashboard_sidebar__team-separator"});

return rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':on_create_org_click,'className':"main_ui_dashboard_sidebar__team-dropdown-item main_ui_dashboard_sidebar__action",'children':[rumext.v2.jsx("span",{'className':"main_ui_dashboard_sidebar__icon-wrapper",'children':app.main.ui.dashboard.sidebar.add_icon}),rumext.v2.jsx("span",{'className':"main_ui_dashboard_sidebar__team-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.create-new-org")})]});
})()
:null));
});

(app.main.ui.dashboard.sidebar.teams_selector_dropdown_STAR_.displayName = "teams-selector-dropdown*");

app.main.ui.dashboard.sidebar.team_options_dropdown_STAR_ = (function app$main$ui$dashboard$sidebar$team_options_dropdown_STAR_(props_53230){
var profile = undefined;
var team = undefined;
var props = undefined;
var {"team": team, "profile": profile, ...props} = props_53230;

var go_members = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_members());
});
var go_invitations = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_invitations());
});
var go_webhooks = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_webhooks());
});
var go_settings = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_settings());
});
var members = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"members","members",159001018));
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"permissions","permissions",67803075));
var can_rename_QMARK_ = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132).cljs$core$IFn$_invoke$arity$1(permissions);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"is-admin","is-admin",-1352205216).cljs$core$IFn$_invoke$arity$1(permissions);
}
})();
var on_success = (function (){
var team_id = new cljs.core.Keyword(null,"default-team-id","default-team-id",1198639706).cljs$core$IFn$_invoke$arity$1(profile);
return beicon.v2.core.of(app.main.data.common.go_to_dashboard_recent.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], 0)),app.main.data.modal.hide());
});
var on_error = (function (p__53231){
var map__53232 = p__53231;
var map__53232__$1 = cljs.core.__destructure_map(map__53232);
var error = map__53232__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53232__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var pred__53233 = cljs.core._EQ_;
var expr__53234 = code;
if(cljs.core.truth_((pred__53233.cljs$core$IFn$_invoke$arity$2 ? pred__53233.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"no-enough-members-for-leave","no-enough-members-for-leave",132163040),expr__53234) : pred__53233.call(null,new cljs.core.Keyword(null,"no-enough-members-for-leave","no-enough-members-for-leave",132163040),expr__53234)))){
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.team-leave.insufficient-members")));
} else {
if(cljs.core.truth_((pred__53233.cljs$core$IFn$_invoke$arity$2 ? pred__53233.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"member-does-not-exist","member-does-not-exist",1388767352),expr__53234) : pred__53233.call(null,new cljs.core.Keyword(null,"member-does-not-exist","member-does-not-exist",1388767352),expr__53234)))){
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.team-leave.member-does-not-exists")));
} else {
if(cljs.core.truth_((pred__53233.cljs$core$IFn$_invoke$arity$2 ? pred__53233.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"owner-cant-leave-team","owner-cant-leave-team",659839763),expr__53234) : pred__53233.call(null,new cljs.core.Keyword(null,"owner-cant-leave-team","owner-cant-leave-team",659839763),expr__53234)))){
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.team-leave.owner-cant-leave")));
} else {
return beicon.v2.core.throw$(error);
}
}
}
});
var leave_fn = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_success),rumext.v2.adapt(on_error)],(function (member_id){
var params = (function (){var G__53236 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.uuid_QMARK_(member_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53236,new cljs.core.Keyword(null,"reassign-to","reassign-to",-161965705),member_id);
} else {
return G__53236;
}
})();
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.leave_current_team(cljs.core.with_meta(params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null))));
}));
var delete_fn = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team),rumext.v2.adapt(on_success),rumext.v2.adapt(on_error)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.delete_team(cljs.core.with_meta(team,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null))));
}));
var on_rename_clicked = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"team-form","team-form",1411783122),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"team","team",1355747699),team], null)));
}));
var on_leave_clicked = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(leave_fn)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.leave-confirm.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.leave-confirm.message"),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.leave-confirm.accept"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),leave_fn], null)));
}));
var on_leave_as_owner_clicked = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team),rumext.v2.adapt(profile),rumext.v2.adapt(leave_fn)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.team.fetch_members.cljs$core$IFn$_invoke$arity$0(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"leave-and-reassign","leave-and-reassign",-602937808),new cljs.core.Keyword(null,"profile","profile",-545963874),profile,new cljs.core.Keyword(null,"team","team",1355747699),team,new cljs.core.Keyword(null,"accept","accept",1874130431),leave_fn], null))], 0));
}));
var leave_and_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team),rumext.v2.adapt(delete_fn)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.leave-confirm.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.leave-and-close-confirm.message",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team)], 0)),new cljs.core.Keyword(null,"scd-message","scd-message",89862664),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.leave-and-close-confirm.hint"),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.leave-confirm.accept"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),delete_fn], null)));
}));
var on_delete_clicked = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(delete_fn)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-team-confirm.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-team-confirm.message"),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-team-confirm.accept"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),delete_fn], null)));
}));
return rumext.v2.create_element(app.main.ui.components.dropdown_menu.dropdown_menu_STAR_,props,rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':go_members,'className':"main_ui_dashboard_sidebar__team-options-item",'data-testid':"team-members",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.members")}),rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':go_invitations,'className':"main_ui_dashboard_sidebar__team-options-item",'data-testid':"team-invitations",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.invitations")}),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"webhooks","webhooks",1535047469)))?rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':go_webhooks,'className':"main_ui_dashboard_sidebar__team-options-item",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.webhooks")}):null),rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':go_settings,'className':"main_ui_dashboard_sidebar__team-options-item",'data-testid':"team-settings",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.settings")}),rumext.v2.jsx("hr",{'className':"main_ui_dashboard_sidebar__team-option-separator"}),(cljs.core.truth_(can_rename_QMARK_)?rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':on_rename_clicked,'className':"main_ui_dashboard_sidebar__team-options-item",'data-testid':"rename-team",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.rename")}):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(members),(1)))?rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':leave_and_close,'className':"main_ui_dashboard_sidebar__team-options-item",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.leave-team")}):(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"permissions","permissions",67803075),new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132)], null)))?rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':on_leave_as_owner_clicked,'className':"main_ui_dashboard_sidebar__team-options-item",'data-testid':"leave-team",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.leave-team")}):(((cljs.core.count(members) > (1)))?rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':on_leave_clicked,'className':"main_ui_dashboard_sidebar__team-options-item",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.leave-team")}):null))),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"permissions","permissions",67803075),new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132)], null)))?rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'onClick':on_delete_clicked,'className':"main_ui_dashboard_sidebar__team-options-item main_ui_dashboard_sidebar__warning",'data-testid':"delete-team",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.delete-team")}):null));
});

(app.main.ui.dashboard.sidebar.team_options_dropdown_STAR_.displayName = "team-options-dropdown*");

app.main.ui.dashboard.sidebar.sidebar_org_switch_STAR_ = (function app$main$ui$dashboard$sidebar$sidebar_org_switch_STAR_(props_53237){
var profile = props_53237.profile;
var team = props_53237.team;
var teams = app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.vec(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p__53238){
var vec__53239 = p__53238;
var _group = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53239,(0),null);
var entries = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__53239,(1),null);
return cljs.core.first(entries);
}),cljs.core.group_by(new cljs.core.Keyword(null,"organization-id","organization-id",-501672147),cljs.core.vals(rumext.v2.deref(app.main.refs.teams))))));
var teams__$1 = cljs.core.update_vals(teams,(function (t){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(t,new cljs.core.Keyword(null,"name","name",1843675177),["ORG: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"organization-name","organization-name",1335899468).cljs$core$IFn$_invoke$arity$1(t))].join(''));
}));
var team__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(team,new cljs.core.Keyword(null,"name","name",1843675177),["ORG: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"organization-name","organization-name",1335899468).cljs$core$IFn$_invoke$arity$1(team))].join(''));
var show_teams_menu_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var show_teams_menu_QMARK_ = cljs.core.deref(show_teams_menu_STAR_);
var on_show_teams_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_teams_menu_STAR_,cljs.core.not);
}));
var on_show_teams_keydown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.keyboard.space_QMARK_(event);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.keyboard.enter_QMARK_(event);
}
})())){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

var G__53242 = app.util.dom.get_current_target(event);
if((G__53242 == null)){
return null;
} else {
return app.util.dom.click_BANG_(G__53242);
}
} else {
return null;
}
}));
var close_teams_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_teams_menu_STAR_,false);
}));
return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_sidebar__sidebar-team-switch",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_sidebar__switch-content",'children':rumext.v2.jsxs("button",{'onClick':on_show_teams_click,'onKeyDown':on_show_teams_keydown,'className':"main_ui_dashboard_sidebar__current-team",'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_sidebar__team-name",'children':[rumext.v2.jsx("img",{'src':app.config.resolve_team_photo_url(team__$1),'alt':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team__$1),'className':"main_ui_dashboard_sidebar__team-picture"}),rumext.v2.jsx("span",{'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team__$1),'className':"main_ui_dashboard_sidebar__team-text",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team__$1)})]}),app.main.ui.dashboard.sidebar.arrow_icon]})}),rumext.v2.jsx(app.main.ui.dashboard.sidebar.teams_selector_dropdown_STAR_,{'allowCreateOrg':true,'showDefaultTeam':false,'onClose':close_teams_menu,'teams':teams__$1,'className':"main_ui_dashboard_sidebar__dropdown main_ui_dashboard_sidebar__teams-dropdown",'profile':profile,'id':"organizations-list",'show':show_teams_menu_QMARK_,'allowCreateTeams':false,'team':team__$1})]});
});

(app.main.ui.dashboard.sidebar.sidebar_org_switch_STAR_.displayName = "sidebar-org-switch*");

app.main.ui.dashboard.sidebar.sidebar_team_switch_STAR_ = (function app$main$ui$dashboard$sidebar$sidebar_team_switch_STAR_(props_53244){
var profile = props_53244.profile;
var team = props_53244.team;
var nitrate_QMARK_ = cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"nitrate","nitrate",1567206870));
var org_id = ((nitrate_QMARK_)?new cljs.core.Keyword(null,"organization-id","organization-id",-501672147).cljs$core$IFn$_invoke$arity$1(team):null);
var teams = (function (){var G__53245 = rumext.v2.deref(app.main.refs.teams);
if(nitrate_QMARK_){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__53243_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"organization-id","organization-id",-501672147).cljs$core$IFn$_invoke$arity$1(cljs.core.val(p1__53243_SHARP_)),org_id);
}),G__53245);
} else {
return G__53245;
}
})();
var subscription = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"subscription","subscription",1949009182));
var subscription_type = app.main.ui.dashboard.subscription.get_subscription_type(subscription);
var show_team_options_menu_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var show_team_options_menu_QMARK_ = cljs.core.deref(show_team_options_menu_STAR_);
var show_teams_menu_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var show_teams_menu_QMARK_ = cljs.core.deref(show_teams_menu_STAR_);
var on_show_teams_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_teams_menu_STAR_,cljs.core.not);
}));
var on_show_teams_keydown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.keyboard.space_QMARK_(event);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.keyboard.enter_QMARK_(event);
}
})())){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

var G__53246 = app.util.dom.get_current_target(event);
if((G__53246 == null)){
return null;
} else {
return app.util.dom.click_BANG_(G__53246);
}
} else {
return null;
}
}));
var close_team_options_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_team_options_menu_STAR_,false);
}));
var on_show_options_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_team_options_menu_STAR_,cljs.core.not);
}));
var on_show_options_keydown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.keyboard.space_QMARK_(event);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.keyboard.enter_QMARK_(event);
}
})())){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

var G__53248 = app.util.dom.get_current_target(event);
if((G__53248 == null)){
return null;
} else {
return app.util.dom.click_BANG_(G__53248);
}
} else {
return null;
}
}));
var close_teams_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_teams_menu_STAR_,false);
}));
return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_sidebar__sidebar-team-switch",'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_sidebar__switch-content",'children':[rumext.v2.jsxs("button",{'onClick':on_show_teams_click,'onKeyDown':on_show_teams_keydown,'className':"main_ui_dashboard_sidebar__current-team",'children':[(cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(team))?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_sidebar__team-name",'children':[rumext.v2.jsx("span",{'className':"main_ui_dashboard_sidebar__penpot-icon",'children':app.main.ui.icons.logo_icon}),rumext.v2.jsx("span",{'className':"main_ui_dashboard_sidebar__team-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.default-team-name")})]}):((((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776))) && (((cljs.core.not(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(team))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("unlimited",subscription_type)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("enterprise",subscription_type))))))))?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_sidebar__team-name",'children':[rumext.v2.jsx("img",{'src':app.config.resolve_team_photo_url(team),'alt':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team),'className':"main_ui_dashboard_sidebar__team-picture"}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_sidebar__team-text-with-icon",'children':[rumext.v2.jsx("span",{'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team),'className':"main_ui_dashboard_sidebar__team-text",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team)}),rumext.v2.jsx(app.main.ui.dashboard.subscription.menu_team_icon_STAR_,{'subscriptionType':subscription_type})]})]}):((((cljs.core.not(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(team))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("unlimited",subscription_type)) || (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("enterprise",subscription_type))))))?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_sidebar__team-name",'children':[rumext.v2.jsx("img",{'src':app.config.resolve_team_photo_url(team),'alt':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team),'className':"main_ui_dashboard_sidebar__team-picture"}),rumext.v2.jsx("span",{'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team),'className':"main_ui_dashboard_sidebar__team-text",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team)})]}):null))),app.main.ui.dashboard.sidebar.arrow_icon]}),(cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(team))?null:rumext.v2.jsx("button",{'onClick':on_show_options_click,'aria-label':"team-management",'tabIndex':"0",'onKeyDown':on_show_options_keydown,'className':"main_ui_dashboard_sidebar__switch-options",'children':app.main.ui.dashboard.sidebar.menu_icon}))]}),rumext.v2.jsx(app.main.ui.dashboard.sidebar.teams_selector_dropdown_STAR_,{'allowCreateOrg':false,'showDefaultTeam':true,'onClose':close_teams_menu,'teams':teams,'className':"main_ui_dashboard_sidebar__dropdown main_ui_dashboard_sidebar__teams-dropdown",'profile':profile,'id':"team-list",'show':show_teams_menu_QMARK_,'allowCreateTeams':true,'team':team}),rumext.v2.jsx(app.main.ui.dashboard.sidebar.team_options_dropdown_STAR_,{'show':show_team_options_menu_QMARK_,'onClose':close_team_options_menu,'id':"team-options",'className':"main_ui_dashboard_sidebar__dropdown main_ui_dashboard_sidebar__options-dropdown",'team':team,'profile':profile})]});
});

(app.main.ui.dashboard.sidebar.sidebar_team_switch_STAR_.displayName = "sidebar-team-switch*");

app.main.ui.dashboard.sidebar.sidebar_content_STAR_ = (function app$main$ui$dashboard$sidebar$sidebar_content_STAR_(props_53255){
var default_project = props_53255.defaultProject;
var profile = props_53255.profile;
var projects = props_53255.projects;
var search_term = props_53255.searchTerm;
var section = props_53255.section;
var project = props_53255.project;
var team = props_53255.team;
var props = props_53255;
var default_project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(default_project,new cljs.core.Keyword(null,"id","id",-1388402092));
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"id","id",-1388402092));
var projects_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"dashboard-recent","dashboard-recent",-1541043167));
var fonts_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"dashboard-fonts","dashboard-fonts",-1313435498));
var libs_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"dashboard-libraries","dashboard-libraries",-1057436771));
var drafts_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"dashboard-files","dashboard-files",-1779590854))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project),default_project_id)));
var container = rumext.v2.use_ref(null);
var overflow_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var overflow_QMARK_ = cljs.core.deref(overflow_STAR_);
var go_projects = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_recent());
}));
var go_projects_with_key = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_recent.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], 0)));

return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
var temp__5825__auto__ = app.util.dom.get_element("dashboard-projects-title");
if(cljs.core.truth_(temp__5825__auto__)){
var projects_title = temp__5825__auto__;
app.util.dom.set_attribute_BANG_(projects_title,"tabindex","0");

app.util.dom.focus_BANG_(projects_title);

return app.util.dom.set_attribute_BANG_(projects_title,"tabindex","-1");
} else {
return null;
}
}));
}));
var go_fonts = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_fonts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], 0)));
}));
var go_fonts_with_key = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team)],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_fonts.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], 0)));

return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
var font_title = app.util.dom.get_element("dashboard-fonts-title");
if(cljs.core.truth_(font_title)){
app.util.dom.set_attribute_BANG_(font_title,"tabindex","0");

app.util.dom.focus_BANG_(font_title);

return app.util.dom.set_attribute_BANG_(font_title,"tabindex","-1");
} else {
return null;
}
}));
}));
var go_drafts = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id),rumext.v2.adapt(default_project_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_files.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"project-id","project-id",206449307),default_project_id], 0)));
}));
var go_drafts_with_key = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id),rumext.v2.adapt(default_project_id)],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_files.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"project-id","project-id",206449307),default_project_id], 0)));

return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
var temp__5825__auto__ = app.util.dom.get_element("dashboard-drafts-title");
if(cljs.core.truth_(temp__5825__auto__)){
var title = temp__5825__auto__;
app.util.dom.set_attribute_BANG_(title,"tabindex","0");

app.util.dom.focus_BANG_(title);

return app.util.dom.set_attribute_BANG_(title,"tabindex","-1");
} else {
return null;
}
}));
}));
var go_libs = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_libraries.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], 0)));
}));
var go_libs_with_key = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_libraries.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], 0)));

return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
var libs_title = app.util.dom.get_element("dashboard-libraries-title");
if(cljs.core.truth_(libs_title)){
app.util.dom.set_attribute_BANG_(libs_title,"tabindex","0");

app.util.dom.focus_BANG_(libs_title);

return app.util.dom.set_attribute_BANG_(libs_title,"tabindex","-1");
} else {
return null;
}
}));
}));
var pinned_projects = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(projects)],(function (){
return cljs.core.not_empty(cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"is-pinned","is-pinned",620920978),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"is-default","is-default",1401171070),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"deleted-at","deleted-at",1742232687),projects)))));
}));
rumext.v2.use_layout_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(pinned_projects)],(function (){
var node = rumext.v2.ref_val(container);
var client_height = node.clientHeight;
var scroll_height = node.scrollHeight;
return cljs.core.reset_BANG_(overflow_STAR_,(scroll_height > client_height));
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'ref':container,'className':"main_ui_dashboard_sidebar__sidebar-content",'children':[((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"nitrate","nitrate",1567206870)))?rumext.v2.jsx(app.main.ui.dashboard.sidebar.sidebar_org_switch_STAR_,{'team':team,'profile':profile}):null),rumext.v2.jsx(app.main.ui.dashboard.sidebar.sidebar_team_switch_STAR_,{'team':team,'profile':profile}),rumext.v2.jsx(app.main.ui.dashboard.sidebar.sidebar_search_STAR_,{'searchTerm':search_term,'teamId':new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team)}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_sidebar__sidebar-content-section",'children':rumext.v2.jsxs("ul",{'className':"main_ui_dashboard_sidebar__sidebar-nav",'children':[rumext.v2.jsx("li",{'className':"main_ui_dashboard_sidebar__recent-projects"+" "+"main_ui_dashboard_sidebar__sidebar-nav-item"+" "+((projects_QMARK_)?"main_ui_dashboard_sidebar__current":""),'children':rumext.v2.jsx(app.main.ui.components.link.link,{'action':go_projects,'class':"main_ui_dashboard_sidebar__sidebar-link",'keyboard-action':go_projects_with_key,'children':rumext.v2.jsx("span",{'className':"main_ui_dashboard_sidebar__element-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.projects")})})}),rumext.v2.jsx("li",{'className':((drafts_QMARK_)?"main_ui_dashboard_sidebar__current":"")+" "+"main_ui_dashboard_sidebar__sidebar-nav-item",'children':rumext.v2.jsx(app.main.ui.components.link.link,{'action':go_drafts,'class':"main_ui_dashboard_sidebar__sidebar-link",'keyboard-action':go_drafts_with_key,'children':rumext.v2.jsx("span",{'className':"main_ui_dashboard_sidebar__element-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.drafts")})})})]})}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_sidebar__sidebar-content-section",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_sidebar__sidebar-section-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.sources")}),rumext.v2.jsxs("ul",{'className':"main_ui_dashboard_sidebar__sidebar-nav",'children':[rumext.v2.jsx("li",{'className':"main_ui_dashboard_sidebar__sidebar-nav-item"+" "+((fonts_QMARK_)?"main_ui_dashboard_sidebar__current":""),'children':rumext.v2.jsx(app.main.ui.components.link.link,{'action':go_fonts,'class':"main_ui_dashboard_sidebar__sidebar-link",'keyboard-action':go_fonts_with_key,'data-testid':"fonts",'children':rumext.v2.jsx("span",{'className':"main_ui_dashboard_sidebar__element-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.fonts")})})}),rumext.v2.jsx("li",{'className':((libs_QMARK_)?"main_ui_dashboard_sidebar__current":"")+" "+"main_ui_dashboard_sidebar__sidebar-nav-item",'children':rumext.v2.jsx(app.main.ui.components.link.link,{'action':go_libs,'data-testid':"libs-link-sidebar",'class':"main_ui_dashboard_sidebar__sidebar-link",'keyboard-action':go_libs_with_key,'children':rumext.v2.jsx("span",{'className':"main_ui_dashboard_sidebar__element-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.shared-libraries")})})})]})]}),rumext.v2.jsxs("div",{'data-testid':"pinned-projects",'className':"main_ui_dashboard_sidebar__sidebar-content-section",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_sidebar__sidebar-section-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.pinned-projects")}),(((!((pinned_projects == null))))?rumext.v2.jsx("ul",{'className':"main_ui_dashboard_sidebar__sidebar-nav main_ui_dashboard_sidebar__pinned-projects",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,item){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.dashboard.sidebar.sidebar_project_STAR_,{'item':item,'id':new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),'teamId':new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team),'isSelected':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project))},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item) ?? "")));

return out_arr__35152__auto__;
}),[],pinned_projects)}):rumext.v2.jsxs("div",{'className':"main_ui_dashboard_sidebar__sidebar-empty-placeholder",'children':[app.main.ui.dashboard.sidebar.pin_icon,rumext.v2.jsx("span",{'className':"main_ui_dashboard_sidebar__empty-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.no-projects-placeholder")})]}))]})]}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_sidebar__separator"+" "+(cljs.core.truth_(overflow_QMARK_)?"main_ui_dashboard_sidebar__overflow-separator":"")})]});
});

(app.main.ui.dashboard.sidebar.sidebar_content_STAR_.displayName = "sidebar-content*");

app.main.ui.dashboard.sidebar.help_learning_menu_STAR_ = (function app$main$ui$dashboard$sidebar$help_learning_menu_STAR_(props_53299){
var on_close = props_53299.onClose;
var on_click = props_53299.onClick;
var handle_click_url = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var url = app.util.dom.get_data(app.util.dom.get_current_target(event),"url");
var eventname = app.util.dom.get_data(app.util.dom.get_current_target(event),"eventname");
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),eventname,new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"menu:in-app"], null)));

return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1(url);
}));
var handle_feedback_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p1__53298_SHARP_){
return (on_click.cljs$core$IFn$_invoke$arity$2 ? on_click.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"settings-feedback","settings-feedback",-1884878904),p1__53298_SHARP_) : on_click.call(null,new cljs.core.Keyword(null,"settings-feedback","settings-feedback",-1884878904),p1__53298_SHARP_));
}));
return rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_STAR_,{'show':true,'className':"main_ui_dashboard_sidebar__sub-menu main_ui_dashboard_sidebar__help-learning",'onClose':on_close,'children':[rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_dashboard_sidebar__submenu-item",'data-url':"https://help.penpot.app",'onClick':handle_click_url,'data-eventname':"explore-help-center-click",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.help-center")}),rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_dashboard_sidebar__submenu-item",'data-url':"https://penpot.app/learning-center",'onClick':handle_click_url,'data-eventname':"explore-learning-center-click",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.learning-center")}),rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_dashboard_sidebar__submenu-item",'data-url':"https://penpot.app/penpothub",'onClick':handle_click_url,'data-eventname':"explore-penpot-hub-click",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.penpot-hub")}),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"user-feedback","user-feedback",89199827)))?rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_dashboard_sidebar__submenu-item",'onClick':handle_feedback_click,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.give-feedback")}):null)]});
});

(app.main.ui.dashboard.sidebar.help_learning_menu_STAR_.displayName = "help-learning-menu*");

app.main.ui.dashboard.sidebar.community_contributions_menu_STAR_ = (function app$main$ui$dashboard$sidebar$community_contributions_menu_STAR_(props_53303){
var on_close = props_53303.onClose;
var handle_click_url = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var url = app.util.dom.get_data(app.util.dom.get_current_target(event),"url");
var eventname = app.util.dom.get_data(app.util.dom.get_current_target(event),"eventname");
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),eventname,new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"menu:in-app"], null)));

return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1(url);
}));
return rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_STAR_,{'show':true,'className':"main_ui_dashboard_sidebar__sub-menu main_ui_dashboard_sidebar__community",'onClose':on_close,'children':[rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_dashboard_sidebar__submenu-item",'data-url':"https://github.com/penpot/penpot",'onClick':handle_click_url,'data-eventname':"explore-github-repository-click",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.github-repo")}),rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_dashboard_sidebar__submenu-item",'data-url':"https://community.penpot.app",'onClick':handle_click_url,'data-eventname':"explore-community-click",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.community")})]});
});

(app.main.ui.dashboard.sidebar.community_contributions_menu_STAR_.displayName = "community-contributions-menu*");

app.main.ui.dashboard.sidebar.about_penpot_menu_STAR_ = (function app$main$ui$dashboard$sidebar$about_penpot_menu_STAR_(props_53308){
var on_close = props_53308.onClose;
var version = app.config.version;
var show_release_notes = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"show-release-notes",new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"main","main",-2117802661).cljs$core$IFn$_invoke$arity$1(version)], null)));

if(((app.util.keyboard.alt_QMARK_(event)) && (app.util.keyboard.mod_QMARK_(event)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"onboarding","onboarding",-1622662800)], null)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"release-notes","release-notes",1238210686),new cljs.core.Keyword(null,"version","version",425292698),new cljs.core.Keyword(null,"main","main",-2117802661).cljs$core$IFn$_invoke$arity$1(version)], null)));
}
}));
var handle_click_url = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var url = app.util.dom.get_data(app.util.dom.get_current_target(event),"url");
var eventname = app.util.dom.get_data(app.util.dom.get_current_target(event),"eventname");
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),eventname,new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"menu:in-app"], null)));

return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1(url);
}));
return rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_STAR_,{'show':true,'className':"main_ui_dashboard_sidebar__sub-menu main_ui_dashboard_sidebar__about",'onClose':on_close,'children':[rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_dashboard_sidebar__submenu-item",'onClick':show_release_notes,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("labels.version-notes",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(version)], 0))}),rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_dashboard_sidebar__submenu-item",'data-url':"https://github.com/penpot/penpot/blob/develop/CHANGES.md",'onClick':handle_click_url,'data-eventname':"explore-changelog-click",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.penpot-changelog")}),rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_dashboard_sidebar__submenu-item",'data-url':"https://penpot.app/terms",'onClick':handle_click_url,'data-eventname':"explore-terms-service-click",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("auth.terms-of-service")})]});
});

(app.main.ui.dashboard.sidebar.about_penpot_menu_STAR_.displayName = "about-penpot-menu*");

app.main.ui.dashboard.sidebar.profile_section_STAR_ = (function app$main$ui$dashboard$sidebar$profile_section_STAR_(props_53311){
var profile = props_53311.profile;
var team = props_53311.team;
var show_profile_menu_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var show_profile_menu_QMARK_ = cljs.core.deref(show_profile_menu_STAR_);
var sub_menu_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var sub_menu = cljs.core.deref(sub_menu_STAR_);
var version = new cljs.core.Keyword(null,"base","base",185279322).cljs$core$IFn$_invoke$arity$1(app.config.version);
var close_sub_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return cljs.core.reset_BANG_(sub_menu_STAR_,null);
}));
var photo = app.config.resolve_profile_photo_url(profile);
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (section,event){
app.util.dom.stop_propagation(event);

cljs.core.reset_BANG_(show_profile_menu_STAR_,false);

if((section instanceof cljs.core.Keyword)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(section));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(section);
}
}));
var show_comments_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var show_comments_QMARK_ = cljs.core.deref(show_comments_STAR_);
var handle_hide_comments = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_comments_STAR_,false);
}));
var handle_show_comments = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_comments_STAR_,true);
}));
var handle_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_profile_menu_STAR_,cljs.core.not);
}));
var handle_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return cljs.core.reset_BANG_(show_profile_menu_STAR_,true);
} else {
return null;
}
}));
var on_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_profile_menu_STAR_,false);
}));
var handle_logout_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p1__53309_SHARP_){
var G__53312 = app.main.data.auth.logout();
var G__53313 = p1__53309_SHARP_;
return (on_click.cljs$core$IFn$_invoke$arity$2 ? on_click.cljs$core$IFn$_invoke$arity$2(G__53312,G__53313) : on_click.call(null,G__53312,G__53313));
}));
var handle_set_profile = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p1__53310_SHARP_){
return (on_click.cljs$core$IFn$_invoke$arity$2 ? on_click.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"settings-profile","settings-profile",-520294200),p1__53310_SHARP_) : on_click.call(null,new cljs.core.Keyword(null,"settings-profile","settings-profile",-520294200),p1__53310_SHARP_));
}));
var on_menu_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

var menu = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"testid"));
return cljs.core.reset_BANG_(sub_menu_STAR_,menu);
}));
var on_power_up_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"explore-pricing-click",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard",new cljs.core.Keyword(null,"section","section",-300141526),"sidebar"], null)));

return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1("https://penpot.app/pricing");
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776)))?((app.main.ui.dashboard.subscription.show_subscription_dashboard_banner_QMARK_(profile))?rumext.v2.jsx(app.main.ui.dashboard.subscription.dashboard_cta_STAR_,{'profile':profile}):rumext.v2.jsx(app.main.ui.dashboard.subscription.subscription_sidebar_STAR_,{'profile':profile})):null),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"subscriptions-old","subscriptions-old",-338159584)))?rumext.v2.jsxs("button",{'onClick':on_power_up_click,'className':"main_ui_dashboard_sidebar__upgrade-plan-section",'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_sidebar__penpot-free",'children':[rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.upgrade-plan.penpot-free")}),rumext.v2.jsx("span",{'className':"main_ui_dashboard_sidebar__no-limits",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.upgrade-plan.no-limits")})]}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_sidebar__power-up",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.dashboard.upgrade-plan.power-up")})]}):null),(cljs.core.truth_((function (){var and__5023__auto__ = team;
if(cljs.core.truth_(and__5023__auto__)){
return profile;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.dashboard.comments.comments_section,{'profile':profile,'team':team,'show?':show_comments_QMARK_,'on-show-comments':handle_show_comments,'on-hide-comments':handle_hide_comments}):null),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_sidebar__profile-section",'children':[rumext.v2.jsxs("button",{'tabIndex':"0",'onClick':handle_click,'onKeyDown':handle_key_down,'data-testid':"profile-btn",'className':"main_ui_dashboard_sidebar__profile",'children':[rumext.v2.jsx("img",{'src':photo,'alt':new cljs.core.Keyword(null,"fullname","fullname",1638772587).cljs$core$IFn$_invoke$arity$1(profile),'className':"main_ui_dashboard_sidebar__profile-img"}),rumext.v2.jsx("span",{'className':"main_ui_dashboard_sidebar__profile-fullname",'children':new cljs.core.Keyword(null,"fullname","fullname",1638772587).cljs$core$IFn$_invoke$arity$1(profile)})]}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_STAR_,{'onClose':on_close,'show':show_profile_menu_QMARK_,'id':"profile-menu",'className':"main_ui_dashboard_sidebar__profile-dropdown",'children':[rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_dashboard_sidebar__profile-dropdown-item",'onClick':handle_set_profile,'data-testid':"profile-profile-opt",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.your-account")}),rumext.v2.jsx("li",{'className':"main_ui_dashboard_sidebar__profile-separator"}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_dashboard_sidebar__profile-dropdown-item",'onClick':on_menu_click,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_menu_click.cljs$core$IFn$_invoke$arity$1 ? on_menu_click.cljs$core$IFn$_invoke$arity$1(event) : on_menu_click.call(null,event));
} else {
return null;
}
}),'onPointerEnter':on_menu_click,'data-testid':"help-learning",'id':"help-learning",'children':[rumext.v2.jsx("span",{'className':"main_ui_dashboard_sidebar__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.help-learning")}),rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow,'className':"main_ui_dashboard_sidebar__open-arrow"})]}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_dashboard_sidebar__profile-dropdown-item",'onClick':on_menu_click,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_menu_click.cljs$core$IFn$_invoke$arity$1 ? on_menu_click.cljs$core$IFn$_invoke$arity$1(event) : on_menu_click.call(null,event));
} else {
return null;
}
}),'onPointerEnter':on_menu_click,'data-testid':"community-contributions",'id':"community-contributions",'children':[rumext.v2.jsx("span",{'className':"main_ui_dashboard_sidebar__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.community-contributions")}),rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow,'className':"main_ui_dashboard_sidebar__open-arrow"})]}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_dashboard_sidebar__profile-dropdown-item",'onClick':on_menu_click,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_menu_click.cljs$core$IFn$_invoke$arity$1 ? on_menu_click.cljs$core$IFn$_invoke$arity$1(event) : on_menu_click.call(null,event));
} else {
return null;
}
}),'onPointerEnter':on_menu_click,'data-testid':"about-penpot",'id':"about-penpot",'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_sidebar__about-penpot",'children':[rumext.v2.jsx("span",{'className':"main_ui_dashboard_sidebar__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.about-penpot")}),rumext.v2.jsx("span",{'title':version,'className':"main_ui_dashboard_sidebar__menu-version",'children':version})]}),rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.arrow,'className':"main_ui_dashboard_sidebar__open-arrow"})]}),rumext.v2.jsx("li",{'className':"main_ui_dashboard_sidebar__profile-separator"}),rumext.v2.jsxs(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_dashboard_sidebar__profile-dropdown-item main_ui_dashboard_sidebar__item-with-icon",'onClick':handle_logout_click,'data-testid':"logout-profile-opt",'children':[app.main.ui.dashboard.sidebar.exit_icon,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.logout")]})]}),(cljs.core.truth_((function (){var and__5023__auto__ = team;
if(cljs.core.truth_(and__5023__auto__)){
return profile;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.dashboard.comments.comments_icon_STAR_,{'profile':profile,'onShowComments':handle_show_comments}):null)]}),(cljs.core.truth_(show_profile_menu_QMARK_)?(function (){var G__53315 = sub_menu;
var G__53315__$1 = (((G__53315 instanceof cljs.core.Keyword))?G__53315.fqn:null);
switch (G__53315__$1) {
case "help-learning":
return rumext.v2.jsx(app.main.ui.dashboard.sidebar.help_learning_menu_STAR_,{'onClose':close_sub_menu,'onClick':on_click});

break;
case "community-contributions":
return rumext.v2.jsx(app.main.ui.dashboard.sidebar.community_contributions_menu_STAR_,{'onClose':close_sub_menu});

break;
case "about-penpot":
return rumext.v2.jsx(app.main.ui.dashboard.sidebar.about_penpot_menu_STAR_,{'onClose':close_sub_menu});

break;
default:
return null;

}
})():null)]});
});

(app.main.ui.dashboard.sidebar.profile_section_STAR_.displayName = "profile-section*");

app.main.ui.dashboard.sidebar.sidebar_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$dashboard$sidebar$sidebar_STAR_(props_53320){
var profile = props_53320.profile;
var team = props_53320.team;
var props = props_53320;
return rumext.v2.jsxs("nav",{'data-testid':"dashboard-sidebar",'className':"main_ui_dashboard_sidebar__dashboard-sidebar",'children':[rumext.v2.create_element(app.main.ui.dashboard.sidebar.sidebar_content_STAR_,props),rumext.v2.jsx(app.main.ui.dashboard.sidebar.profile_section_STAR_,{'profile':profile,'team':team})]});
}));

(app.main.ui.dashboard.sidebar.sidebar_STAR_.displayName = "sidebar*");


//# sourceMappingURL=app.main.ui.dashboard.sidebar.js.map
