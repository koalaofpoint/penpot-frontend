import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.common.js";
import "./app.main.data.team.js";
import "./app.main.errors.js";
import "./app.main.refs.js";
import "./app.main.repo.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.ui.context.js";
import "./app.main.ui.debug.icons_preview.js";
import "./app.main.ui.debug.playground.js";
import "./app.main.ui.ds.product.loader.js";
import "./app.main.ui.error_boundary.js";
import "./app.main.ui.exports.files.js";
import "./app.main.ui.frame_preview.js";
import "./app.main.ui.notifications.js";
import "./app.main.ui.onboarding.questions.js";
import "./app.main.ui.onboarding.team_choice.js";
import "./app.main.ui.releases.js";
import "./app.main.ui.static.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.modules.js";
import "./app.util.theme.js";
import "./beicon.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui');
app.main.ui.auth_page = rumext.v2.lazy((function (){
return shadow.esm.load_by_name(new cljs.core.Symbol("app.main.ui.auth","auth-page*","app.main.ui.auth/auth-page*",63279394,null)).then((function (f__36724__auto__){
var obj59418 = ({"default":(f__36724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36724__auto__.cljs$core$IFn$_invoke$arity$0() : f__36724__auto__.call(null))});
return obj59418;
}));
}));
app.main.ui.verify_token_page_STAR_ = rumext.v2.lazy((function (){
return shadow.esm.load_by_name(new cljs.core.Symbol("app.main.ui.auth.verify-token","verify-token-page*","app.main.ui.auth.verify-token/verify-token-page*",426832199,null)).then((function (f__36724__auto__){
var obj59420 = ({"default":(f__36724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36724__auto__.cljs$core$IFn$_invoke$arity$0() : f__36724__auto__.call(null))});
return obj59420;
}));
}));
app.main.ui.viewer_page_STAR_ = rumext.v2.lazy((function (){
return shadow.esm.load_by_name(new cljs.core.Symbol("app.main.ui.viewer","viewer-page*","app.main.ui.viewer/viewer-page*",2102384267,null)).then((function (f__36724__auto__){
var obj59430 = ({"default":(f__36724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36724__auto__.cljs$core$IFn$_invoke$arity$0() : f__36724__auto__.call(null))});
return obj59430;
}));
}));
app.main.ui.dashboard_page_STAR_ = rumext.v2.lazy((function (){
return shadow.esm.load_by_name(new cljs.core.Symbol("app.main.ui.dashboard","dashboard-page*","app.main.ui.dashboard/dashboard-page*",-1237983004,null)).then((function (f__36724__auto__){
var obj59466 = ({"default":(f__36724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36724__auto__.cljs$core$IFn$_invoke$arity$0() : f__36724__auto__.call(null))});
return obj59466;
}));
}));
app.main.ui.settings_page_STAR_ = rumext.v2.lazy((function (){
return shadow.esm.load_by_name(new cljs.core.Symbol("app.main.ui.settings","settings-page*","app.main.ui.settings/settings-page*",-117972938,null)).then((function (f__36724__auto__){
var obj59468 = ({"default":(f__36724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36724__auto__.cljs$core$IFn$_invoke$arity$0() : f__36724__auto__.call(null))});
return obj59468;
}));
}));
app.main.ui.workspace_page_STAR_ = rumext.v2.lazy((function (){
return shadow.esm.load_by_name(new cljs.core.Symbol("app.main.ui.workspace","workspace-page*","app.main.ui.workspace/workspace-page*",1318295057,null)).then((function (f__36724__auto__){
var obj59470 = ({"default":(f__36724__auto__.cljs$core$IFn$_invoke$arity$0 ? f__36724__auto__.cljs$core$IFn$_invoke$arity$0() : f__36724__auto__.call(null))});
return obj59470;
}));
}));
app.main.ui.workspace_legacy_redirect_STAR_ = (function app$main$ui$workspace_legacy_redirect_STAR_(props_59471){
var project_id = props_59471.projectId;
var file_id = props_59471.fileId;
var layout = props_59471.layout;
var page_id = props_59471.pageId;
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (p__59472){
var map__59473 = p__59472;
var map__59473__$1 = cljs.core.__destructure_map(map__59473);
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59473__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"layout","layout",-2120940921),layout], 0)));
}),app.main.errors.on_error,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-project","get-project",621757082),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),project_id], null)));
}));

return rumext.v2.jsx(app.main.ui.ds.product.loader.loader_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.loading"),'overlay':true});
});

(app.main.ui.workspace_legacy_redirect_STAR_.displayName = "workspace-legacy-redirect*");

app.main.ui.dashboard_legacy_redirect_STAR_ = (function app$main$ui$dashboard_legacy_redirect_STAR_(props_59474){
var project_id = props_59474.projectId;
var team_id = props_59474.teamId;
var search_term = props_59474.searchTerm;
var plugin_url = props_59474.pluginUrl;
var section = props_59474.section;
var template = props_59474.template;
var section__$1 = (function (){var G__59523 = section;
var G__59523__$1 = (((G__59523 instanceof cljs.core.Keyword))?G__59523.fqn:null);
switch (G__59523__$1) {
case "dashboard-legacy-search":
return new cljs.core.Keyword(null,"dashboard-search","dashboard-search",-644447359);

break;
case "dashboard-legacy-projects":
return new cljs.core.Keyword(null,"dashboard-recent","dashboard-recent",-1541043167);

break;
case "dashboard-legacy-files":
return new cljs.core.Keyword(null,"dashboard-files","dashboard-files",-1779590854);

break;
case "dashboard-legacy-libraries":
return new cljs.core.Keyword(null,"dashboard-libraries","dashboard-libraries",-1057436771);

break;
case "dashboard-legacy-fonts":
return new cljs.core.Keyword(null,"dashboard-fonts","dashboard-fonts",-1313435498);

break;
case "dashboard-legacy-font-providers":
return new cljs.core.Keyword(null,"dashboard-font-providers","dashboard-font-providers",-593422352);

break;
case "dashboard-legacy-team-members":
return new cljs.core.Keyword(null,"dashboard-members","dashboard-members",726788044);

break;
case "dashboard-legacy-team-invitations":
return new cljs.core.Keyword(null,"dashboard-invitations","dashboard-invitations",-357467805);

break;
case "dashboard-legacy-team-webhooks":
return new cljs.core.Keyword(null,"dashboard-webhooks","dashboard-webhooks",-1830316512);

break;
case "dashboard-legacy-team-settings":
return new cljs.core.Keyword(null,"dashboard-settings","dashboard-settings",1232740502);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__59523__$1)].join('')));

}
})();
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var params = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id,new cljs.core.Keyword(null,"search-term","search-term",356193544),search_term,new cljs.core.Keyword(null,"plugin","plugin",-1688841923),plugin_url,new cljs.core.Keyword(null,"template","template",-702405684),template], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(section__$1,app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(params)));
}));

return rumext.v2.jsx(app.main.ui.ds.product.loader.loader_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.loading"),'overlay':true});
});

(app.main.ui.dashboard_legacy_redirect_STAR_.displayName = "dashboard-legacy-redirect*");

app.main.ui.viewer_legacy_redirect_STAR_ = (function app$main$ui$viewer_legacy_redirect_STAR_(props_59644){
var file_id = props_59644.fileId;
var index = props_59644.index;
var section = props_59644.section;
var interactions_mode = props_59644.interactionsMode;
var page_id = props_59644.pageId;
var share = props_59644.share;
var share_id = props_59644.shareId;
var frame_id = props_59644.frameId;
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var params = new cljs.core.PersistentArrayMap(null, 8, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"section","section",-300141526),section,new cljs.core.Keyword(null,"index","index",-1531685915),index,new cljs.core.Keyword(null,"share-id","share-id",795821204),share_id,new cljs.core.Keyword(null,"interactions-mode","interactions-mode",-1234827377),interactions_mode,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072),frame_id,new cljs.core.Keyword(null,"share","share",-589433933),share], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"viewer","viewer",-783949853),app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(params)));
}));

return rumext.v2.jsx(app.main.ui.ds.product.loader.loader_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.loading"),'overlay':true});
});

(app.main.ui.viewer_legacy_redirect_STAR_.displayName = "viewer-legacy-redirect*");

app.main.ui.team_container_STAR_ = (function app$main$ui$team_container_STAR_(props_59709){
var children = props_59709.children;
var team_id = props_59709.teamId;
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.initialize_team(team_id));

return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.finalize_team(team_id));
});
}));

var map__59710 = rumext.v2.deref(app.main.refs.team);
var map__59710__$1 = cljs.core.__destructure_map(map__59710);
var team = map__59710__$1;
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59710__$1,new cljs.core.Keyword(null,"permissions","permissions",67803075));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(team_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team))){
return rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.current_team_id),{'value':team_id,'children':rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.permissions),{'value':permissions,'children':rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.can_edit_QMARK_),{'value':new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(permissions),'children':rumext.v2.jsx(rumext.v2.Fragment,{'children':children},cljs.core.str.cljs$core$IFn$_invoke$arity$1(team_id))})})});
} else {
return null;
}
});

(app.main.ui.team_container_STAR_.displayName = "team-container*");

app.main.ui.page_STAR_ = (function app$main$ui$page_STAR_(props_59711){
var profile = props_59711.profile;
var route = props_59711.route;
var map__59712 = route;
var map__59712__$1 = cljs.core.__destructure_map(map__59712);
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59712__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__59712__$1,new cljs.core.Keyword(null,"params","params",710516235));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(profile,new cljs.core.Keyword(null,"props","props",453281727));
var section = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"name","name",1843675177));
var team = rumext.v2.deref(app.main.refs.team);
var show_question_modal_QMARK_ = ((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"onboarding","onboarding",-1622662800))) && (((cljs.core.not(new cljs.core.Keyword(null,"onboarding-viewed","onboarding-viewed",-399988124).cljs$core$IFn$_invoke$arity$1(props))) && ((!(cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"onboarding-questions","onboarding-questions",1680690249))))))));
var show_team_modal_QMARK_ = (function (){var and__5023__auto__ = cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"onboarding","onboarding",-1622662800));
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.not(new cljs.core.Keyword(null,"onboarding-viewed","onboarding-viewed",-399988124).cljs$core$IFn$_invoke$arity$1(props));
if(and__5023__auto____$1){
var and__5023__auto____$2 = (!(cljs.core.contains_QMARK_(props,new cljs.core.Keyword(null,"onboarding-team-id","onboarding-team-id",1539385036))));
if(and__5023__auto____$2){
return new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(team);
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
var show_release_modal_QMARK_ = (function (){var and__5023__auto__ = cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"onboarding","onboarding",-1622662800));
if(and__5023__auto__){
var and__5023__auto____$1 = (!(cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"hide-release-modal","hide-release-modal",2076796063))));
if(and__5023__auto____$1){
var and__5023__auto____$2 = new cljs.core.Keyword(null,"onboarding-viewed","onboarding-viewed",-399988124).cljs$core$IFn$_invoke$arity$1(props);
if(cljs.core.truth_(and__5023__auto____$2)){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"release-notes-viewed","release-notes-viewed",-1668623270).cljs$core$IFn$_invoke$arity$1(props),new cljs.core.Keyword(null,"main","main",-2117802661).cljs$core$IFn$_invoke$arity$1(app.config.version))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("0.0",new cljs.core.Keyword(null,"main","main",-2117802661).cljs$core$IFn$_invoke$arity$1(app.config.version))));
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})();
return rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.current_route),{'value':route,'children':(function (){var G__59721 = section;
var G__59721__$1 = (((G__59721 instanceof cljs.core.Keyword))?G__59721.fqn:null);
switch (G__59721__$1) {
case "auth-login":
case "auth-register":
case "auth-register-validate":
case "auth-register-success":
case "auth-recovery-request":
case "auth-recovery":
return rumext.v2.jsx(rumext.v2.Suspense,{'children':rumext.v2.jsx(app.main.ui.auth_page,{'route':route})});

break;
case "auth-verify-token":
return rumext.v2.jsx(rumext.v2.Suspense,{'children':rumext.v2.jsx(app.main.ui.verify_token_page_STAR_,{'route':route})});

break;
case "settings-profile":
case "settings-password":
case "settings-options":
case "settings-feedback":
case "settings-subscription":
case "settings-access-tokens":
case "settings-notifications":
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"query","query",-1288509510));
var error_report_id = (function (){var G__59722 = params__$1;
var G__59722__$1 = (((G__59722 == null))?null:new cljs.core.Keyword(null,"error-report-id","error-report-id",848722092).cljs$core$IFn$_invoke$arity$1(G__59722));
if((G__59722__$1 == null)){
return null;
} else {
return app.common.uuid.parse_STAR_(G__59722__$1);
}
})();
return rumext.v2.jsx(rumext.v2.Suspense,{'children':rumext.v2.jsx(app.main.ui.settings_page_STAR_,{'route':route,'type':cljs.core.get.cljs$core$IFn$_invoke$arity$2(params__$1,new cljs.core.Keyword(null,"type","type",1174270348)),'errorReportId':error_report_id,'errorHref':cljs.core.get.cljs$core$IFn$_invoke$arity$2(params__$1,new cljs.core.Keyword(null,"error-href","error-href",-1882436137))})});

break;
case "debug-icons-preview":
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return rumext.v2.jsx(app.main.ui.debug.icons_preview.icons_preview,{});
} else {
return null;
}

break;
case "debug-playground":
if(cljs.core.truth_(cljs.core._STAR_assert_STAR_)){
return rumext.v2.jsx(app.main.ui.debug.playground.playground,{});
} else {
return null;
}

break;
case "dashboard-search":
case "dashboard-recent":
case "dashboard-files":
case "dashboard-libraries":
case "dashboard-fonts":
case "dashboard-font-providers":
case "dashboard-members":
case "dashboard-invitations":
case "dashboard-webhooks":
case "dashboard-settings":
case "dashboard-deleted":
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"query","query",-1288509510));
var team_id = (function (){var G__59724 = params__$1;
var G__59724__$1 = (((G__59724 == null))?null:new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(G__59724));
if((G__59724__$1 == null)){
return null;
} else {
return app.common.uuid.parse_STAR_(G__59724__$1);
}
})();
var project_id = (function (){var G__59727 = params__$1;
var G__59727__$1 = (((G__59727 == null))?null:new cljs.core.Keyword(null,"project-id","project-id",206449307).cljs$core$IFn$_invoke$arity$1(G__59727));
if((G__59727__$1 == null)){
return null;
} else {
return app.common.uuid.parse_STAR_(G__59727__$1);
}
})();
var search_term = (function (){var G__59732 = params__$1;
if((G__59732 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"search-term","search-term",356193544).cljs$core$IFn$_invoke$arity$1(G__59732);
}
})();
var plugin_url = (function (){var G__59770 = params__$1;
if((G__59770 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"plugin","plugin",-1688841923).cljs$core$IFn$_invoke$arity$1(G__59770);
}
})();
var template = (function (){var G__59854 = params__$1;
if((G__59854 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__59854);
}
})();
return rumext.v2.jsxs(rumext.v2.Suspense,{'children':[((show_question_modal_QMARK_)?rumext.v2.jsx(app.main.ui.onboarding.questions.questions_modal,{}):(cljs.core.truth_(show_team_modal_QMARK_)?rumext.v2.jsx(app.main.ui.onboarding.team_choice.onboarding_team_modal,{'go-to-team':true}):(cljs.core.truth_(show_release_modal_QMARK_)?rumext.v2.jsx(app.main.ui.releases.release_notes_modal,{'version':new cljs.core.Keyword(null,"main","main",-2117802661).cljs$core$IFn$_invoke$arity$1(app.config.version)}):null))),rumext.v2.jsx(app.main.ui.team_container_STAR_,{'teamId':team_id,'children':rumext.v2.jsx(app.main.ui.dashboard_page_STAR_,{'profile':profile,'section':section,'teamId':team_id,'searchTerm':search_term,'pluginUrl':plugin_url,'projectId':project_id,'template':template})})]});

break;
case "workspace":
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"query","query",-1288509510));
var team_id = (function (){var G__59917 = params__$1;
var G__59917__$1 = (((G__59917 == null))?null:new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(G__59917));
if((G__59917__$1 == null)){
return null;
} else {
return app.common.uuid.parse_STAR_(G__59917__$1);
}
})();
var file_id = (function (){var G__59918 = params__$1;
var G__59918__$1 = (((G__59918 == null))?null:new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(G__59918));
if((G__59918__$1 == null)){
return null;
} else {
return app.common.uuid.parse_STAR_(G__59918__$1);
}
})();
var page_id = (function (){var G__59919 = params__$1;
var G__59919__$1 = (((G__59919 == null))?null:new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(G__59919));
if((G__59919__$1 == null)){
return null;
} else {
return app.common.uuid.parse_STAR_(G__59919__$1);
}
})();
var layout = (function (){var G__59920 = params__$1;
var G__59920__$1 = (((G__59920 == null))?null:new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(G__59920));
if((G__59920__$1 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__59920__$1);
}
})();
return rumext.v2.jsxs(rumext.v2.Suspense,{'children':[(cljs.core.truth_(app.config.external_feature_flag("onboarding-03","test"))?((show_question_modal_QMARK_)?rumext.v2.jsx(app.main.ui.onboarding.questions.questions_modal,{}):(cljs.core.truth_(show_team_modal_QMARK_)?rumext.v2.jsx(app.main.ui.onboarding.team_choice.onboarding_team_modal,{'go-to-team':false}):(cljs.core.truth_(show_release_modal_QMARK_)?rumext.v2.jsx(app.main.ui.releases.release_notes_modal,{'version':new cljs.core.Keyword(null,"main","main",-2117802661).cljs$core$IFn$_invoke$arity$1(app.config.version)}):null))):null),rumext.v2.jsx(app.main.ui.team_container_STAR_,{'teamId':team_id,'children':rumext.v2.jsx(app.main.ui.workspace_page_STAR_,{'teamId':team_id,'fileId':file_id,'pageId':page_id,'layoutName':layout},file_id)})]});

break;
case "viewer":
var params__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(params,new cljs.core.Keyword(null,"query","query",-1288509510));
var index = (function (){var G__59949 = app.main.router.get_query_param(params__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
if((G__59949 == null)){
return null;
} else {
return cljs.core.parse_long(G__59949);
}
})();
var share_id = (function (){var G__59958 = new cljs.core.Keyword(null,"share-id","share-id",795821204).cljs$core$IFn$_invoke$arity$1(params__$1);
if((G__59958 == null)){
return null;
} else {
return app.common.uuid.parse_STAR_(G__59958);
}
})();
var section__$1 = (function (){var or__5025__auto__ = (function (){var G__59969 = new cljs.core.Keyword(null,"section","section",-300141526).cljs$core$IFn$_invoke$arity$1(params__$1);
if((G__59969 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__59969);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"interactions","interactions",550841811);
}
})();
var file_id = (function (){var G__59972 = new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(params__$1);
if((G__59972 == null)){
return null;
} else {
return app.common.uuid.parse_STAR_(G__59972);
}
})();
var page_id = (function (){var G__59974 = new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(params__$1);
if((G__59974 == null)){
return null;
} else {
return app.common.uuid.parse_STAR_(G__59974);
}
})();
var imode = (function (){var or__5025__auto__ = (function (){var G__59976 = new cljs.core.Keyword(null,"interactions-mode","interactions-mode",-1234827377).cljs$core$IFn$_invoke$arity$1(params__$1);
if((G__59976 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__59976);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"show-on-click","show-on-click",1549930356);
}
})();
var frame_id = (function (){var G__59979 = new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(params__$1);
if((G__59979 == null)){
return null;
} else {
return app.common.uuid.parse_STAR_(G__59979);
}
})();
var share = new cljs.core.Keyword(null,"share","share",-589433933).cljs$core$IFn$_invoke$arity$1(params__$1);
return rumext.v2.jsx(rumext.v2.Suspense,{'children':rumext.v2.jsx(app.main.ui.viewer_page_STAR_,{'pageId':page_id,'fileId':file_id,'frameId':frame_id,'section':section__$1,'index':index,'shareId':share_id,'interactionsMode':imode,'share':share})});

break;
case "workspace-legacy":
var project_id = (function (){var G__59983 = params;
var G__59983__$1 = (((G__59983 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__59983));
var G__59983__$2 = (((G__59983__$1 == null))?null:new cljs.core.Keyword(null,"project-id","project-id",206449307).cljs$core$IFn$_invoke$arity$1(G__59983__$1));
if((G__59983__$2 == null)){
return null;
} else {
return app.common.uuid.parse_STAR_(G__59983__$2);
}
})();
var file_id = (function (){var G__59985 = params;
var G__59985__$1 = (((G__59985 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__59985));
var G__59985__$2 = (((G__59985__$1 == null))?null:new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(G__59985__$1));
if((G__59985__$2 == null)){
return null;
} else {
return app.common.uuid.parse_STAR_(G__59985__$2);
}
})();
var page_id = (function (){var G__59986 = params;
var G__59986__$1 = (((G__59986 == null))?null:new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__59986));
var G__59986__$2 = (((G__59986__$1 == null))?null:new cljs.core.Keyword(null,"page-id","page-id",-872941168).cljs$core$IFn$_invoke$arity$1(G__59986__$1));
if((G__59986__$2 == null)){
return null;
} else {
return app.common.uuid.parse_STAR_(G__59986__$2);
}
})();
var layout = (function (){var G__59987 = params;
var G__59987__$1 = (((G__59987 == null))?null:new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__59987));
var G__59987__$2 = (((G__59987__$1 == null))?null:new cljs.core.Keyword(null,"layout","layout",-2120940921).cljs$core$IFn$_invoke$arity$1(G__59987__$1));
if((G__59987__$2 == null)){
return null;
} else {
return cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(G__59987__$2);
}
})();
return rumext.v2.jsx(app.main.ui.workspace_legacy_redirect_STAR_,{'projectId':project_id,'fileId':file_id,'pageId':page_id,'layout':layout});

break;
case "dashboard-legacy-search":
case "dashboard-legacy-projects":
case "dashboard-legacy-files":
case "dashboard-legacy-libraries":
case "dashboard-legacy-fonts":
case "dashboard-legacy-font-providers":
case "dashboard-legacy-team-members":
case "dashboard-legacy-team-invitations":
case "dashboard-legacy-team-webhooks":
case "dashboard-legacy-team-settings":
var team_id = (function (){var G__59992 = params;
var G__59992__$1 = (((G__59992 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__59992));
var G__59992__$2 = (((G__59992__$1 == null))?null:new cljs.core.Keyword(null,"team-id","team-id",-14505725).cljs$core$IFn$_invoke$arity$1(G__59992__$1));
if((G__59992__$2 == null)){
return null;
} else {
return app.common.uuid.parse_STAR_(G__59992__$2);
}
})();
var project_id = (function (){var G__60044 = params;
var G__60044__$1 = (((G__60044 == null))?null:new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(G__60044));
var G__60044__$2 = (((G__60044__$1 == null))?null:new cljs.core.Keyword(null,"project-id","project-id",206449307).cljs$core$IFn$_invoke$arity$1(G__60044__$1));
if((G__60044__$2 == null)){
return null;
} else {
return app.common.uuid.parse_STAR_(G__60044__$2);
}
})();
var search_term = (function (){var G__60101 = params;
var G__60101__$1 = (((G__60101 == null))?null:new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__60101));
if((G__60101__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"search-term","search-term",356193544).cljs$core$IFn$_invoke$arity$1(G__60101__$1);
}
})();
var plugin_url = (function (){var G__60104 = params;
var G__60104__$1 = (((G__60104 == null))?null:new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(G__60104));
if((G__60104__$1 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"plugin","plugin",-1688841923).cljs$core$IFn$_invoke$arity$1(G__60104__$1);
}
})();
var template = (function (){var G__60105 = params;
if((G__60105 == null)){
return null;
} else {
return new cljs.core.Keyword(null,"template","template",-702405684).cljs$core$IFn$_invoke$arity$1(G__60105);
}
})();
return rumext.v2.jsx(app.main.ui.dashboard_legacy_redirect_STAR_,{'teamId':team_id,'section':section,'projectId':project_id,'searchTerm':search_term,'pluginUrl':plugin_url,'template':template});

break;
case "viewer-legacy":
var map__60106 = route;
var map__60106__$1 = cljs.core.__destructure_map(map__60106);
var query_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60106__$1,new cljs.core.Keyword(null,"query-params","query-params",900640534));
var path_params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60106__$1,new cljs.core.Keyword(null,"path-params","path-params",-48130597));
var map__60107 = query_params;
var map__60107__$1 = cljs.core.__destructure_map(map__60107);
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60107__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var share_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60107__$1,new cljs.core.Keyword(null,"share-id","share-id",795821204));
var section__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60107__$1,new cljs.core.Keyword(null,"section","section",-300141526),new cljs.core.Keyword(null,"interactions","interactions",550841811));
var page_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60107__$1,new cljs.core.Keyword(null,"page-id","page-id",-872941168));
var interactions_mode = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__60107__$1,new cljs.core.Keyword(null,"interactions-mode","interactions-mode",-1234827377),new cljs.core.Keyword(null,"show-on-click","show-on-click",1549930356));
var frame_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60107__$1,new cljs.core.Keyword(null,"frame-id","frame-id",-636372072));
var share = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60107__$1,new cljs.core.Keyword(null,"share","share",-589433933));
var map__60108 = path_params;
var map__60108__$1 = cljs.core.__destructure_map(map__60108);
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__60108__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
return rumext.v2.jsx(app.main.ui.viewer_legacy_redirect_STAR_,{'pageId':page_id,'fileId':file_id,'section':section__$1,'index':index,'shareId':share_id,'interactionsMode':cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(interactions_mode),'frameId':frame_id,'share':share});

break;
case "frame-preview":
return rumext.v2.jsx(app.main.ui.frame_preview.frame_preview,{});

break;
default:
return null;

}
})()});
});

(app.main.ui.page_STAR_.displayName = "page*");

app.main.ui.app = (function app$main$ui$app(props_60109){
var route = rumext.v2.deref(app.main.refs.route);
var edata = rumext.v2.deref(app.main.refs.exception);
var profile = rumext.v2.deref(app.main.refs.profile);
app.util.theme.use_initialize(profile);

app.util.dom.prevent_browser_gesture_navigation_BANG_();

return rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.current_route),{'value':route,'children':rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.current_profile),{'value':profile,'children':(cljs.core.truth_(edata)?rumext.v2.jsx(app.main.ui.static$.exception_page_STAR_,{'data':edata,'route':route}):rumext.v2.jsxs(app.main.ui.error_boundary.error_boundary_STAR_,{'fallback':app.main.ui.static$.exception_page_STAR_,'children':[rumext.v2.jsx(app.main.ui.notifications.current_notification_STAR_,{}),(cljs.core.truth_(route)?rumext.v2.jsx(app.main.ui.page_STAR_,{'route':route,'profile':profile}):null)]}))})});
});

(app.main.ui.app.displayName = "app");


//# sourceMappingURL=app.main.ui.js.map
