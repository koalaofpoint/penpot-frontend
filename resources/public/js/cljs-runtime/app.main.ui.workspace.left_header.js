import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.data.common.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.colors.js";
import "./app.main.refs.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.ui.context.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.workspace.main_menu.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.left_header');
app.main.ui.workspace.left_header.left_header_STAR_ = (function app$main$ui$workspace$left_header$left_header_STAR_(props_55089){
var layout = props_55089.layout;
var file = props_55089.file;
var page_id = props_55089.pageId;
var project = props_55089.project;
var class$ = props_55089.className;
var profile = rumext.v2.deref(app.main.refs.profile);
var file_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file);
var file_name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file);
var project_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project);
var team_id = new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(project);
var shared_QMARK_ = new cljs.core.Keyword(null,"is-shared","is-shared",2126511925).cljs$core$IFn$_invoke$arity$1(file);
var persistence = rumext.v2.deref(app.main.refs.persistence);
var persistence_status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(persistence,new cljs.core.Keyword(null,"status","status",-1997798413));
var read_only_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.workspace_read_only_QMARK_);
var editing_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var editing_QMARK_ = cljs.core.deref(editing_STAR_);
var input_ref = rumext.v2.use_ref(null);
var handle_blur = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id)],(function (_){
var value = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_value(rumext.v2.ref_val(input_ref)));
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,"")){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.rename_file(file_id,value));
} else {
}

return cljs.core.reset_BANG_(editing_STAR_,false);
}));
var handle_name_keydown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(handle_blur)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (handle_blur.cljs$core$IFn$_invoke$arity$1 ? handle_blur.cljs$core$IFn$_invoke$arity$1(event) : handle_blur.call(null,event));
} else {
return null;
}
}));
var start_editing_name = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

return cljs.core.reset_BANG_(editing_STAR_,true);
}));
var close_modals = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.workspace.colors.stop_picker(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide()], 0));
}));
var go_back = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
(close_modals.cljs$core$IFn$_invoke$arity$0 ? close_modals.cljs$core$IFn$_invoke$arity$0() : close_modals.call(null));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.set_options_mode(new cljs.core.Keyword(null,"design","design",1241338903)),app.main.data.common.go_to_dashboard_recent()], 0));
}));
var nav_to_project = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(project_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"interrupt","interrupt",-1601071178),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.common.go_to_dashboard_files.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("app.main.router","new-window","app.main.router/new-window",1705407424),true,new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id], 0))], 0));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(editing_QMARK_)],(function (){
if(editing_QMARK_){
return app.util.dom.select_text_BANG_(rumext.v2.ref_val(input_ref));
} else {
return null;
}
}));

return rumext.v2.jsxs("header",{'className':""+(class$ ?? "")+" "+("main_ui_workspace_left_header__workspace-header-left" ?? ""),'children':[rumext.v2.jsx("a",{'onClick':go_back,'className':"main_ui_workspace_left_header__main-icon",'children':app.main.ui.icons.logo_icon}),rumext.v2.jsxs("div",{'alt':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.sitemap"),'className':"main_ui_workspace_left_header__project-tree",'children':[rumext.v2.jsx("div",{'onClick':nav_to_project,'className':"main_ui_workspace_left_header__project-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(project)}),((editing_QMARK_)?rumext.v2.jsx("input",{'type':"text",'ref':input_ref,'onBlur':handle_blur,'onKeyDown':handle_name_keydown,'autoFocus':true,'defaultValue':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$2(file,""),'className':"main_ui_workspace_left_header__file-name-input"}):rumext.v2.jsxs("div",{'title':file_name,'onDoubleClick':start_editing_name,'className':"main_ui_workspace_left_header__file-name",'children':[rumext.v2.jsx("div",{'title':(function (){var G__55090 = persistence_status;
var G__55090__$1 = (((G__55090 instanceof cljs.core.Keyword))?G__55090.fqn:null);
switch (G__55090__$1) {
case "pending":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.saving");

break;
case "saving":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.saving");

break;
case "saved":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.saved");

break;
case "error":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.header.save-error");

break;
default:
return null;

}
})(),'className':(function (){var G__55091 = persistence_status;
var G__55091__$1 = (((G__55091 instanceof cljs.core.Keyword))?G__55091.fqn:null);
switch (G__55091__$1) {
case "pending":
return "main_ui_workspace_left_header__status-notification main_ui_workspace_left_header__pending-status";

break;
case "saving":
return "main_ui_workspace_left_header__status-notification main_ui_workspace_left_header__saving-status";

break;
case "saved":
return "main_ui_workspace_left_header__status-notification main_ui_workspace_left_header__saved-status";

break;
case "error":
return "main_ui_workspace_left_header__status-notification main_ui_workspace_left_header__error-status";

break;
default:
return "main_ui_workspace_left_header__status-notification";

}
})(),'children':(function (){var G__55092 = persistence_status;
var G__55092__$1 = (((G__55092 instanceof cljs.core.Keyword))?G__55092.fqn:null);
switch (G__55092__$1) {
case "pending":
return app.main.ui.icons.status_alert;

break;
case "saving":
return app.main.ui.icons.status_alert;

break;
case "saved":
return app.main.ui.icons.status_tick;

break;
case "error":
return app.main.ui.icons.status_wrong;

break;
default:
return null;

}
})()}),rumext.v2.jsx("div",{'className':"main_ui_workspace_left_header__file-name-label",'children':file_name})]}))]}),((shared_QMARK_)?rumext.v2.jsx("span",{'className':"main_ui_workspace_left_header__shared-badge",'children':app.main.ui.icons.library}):null),rumext.v2.jsx("div",{'className':"main_ui_workspace_left_header__menu-section",'children':rumext.v2.jsx(app.main.ui.workspace.main_menu.menu,{'layout':layout,'file':file,'profile':profile,'read-only?':read_only_QMARK_,'team-id':team_id,'page-id':page_id})})]});
});

(app.main.ui.workspace.left_header.left_header_STAR_.displayName = "left-header*");


//# sourceMappingURL=app.main.ui.workspace.left_header.js.map
