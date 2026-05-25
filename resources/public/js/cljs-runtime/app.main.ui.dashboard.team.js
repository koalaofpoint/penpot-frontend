import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.schema.js";
import "./app.config.js";
import "./app.main.data.common.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.data.team.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.components.file_uploader.js";
import "./app.main.ui.components.forms.js";
import "./app.main.ui.dashboard.change_owner.js";
import "./app.main.ui.dashboard.subscription.js";
import "./app.main.ui.dashboard.team_form.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.notifications.badge.js";
import "./app.main.ui.notifications.context_notification.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.team');
app.main.ui.dashboard.team.arrow_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_team__arrow-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-arrow"})});
app.main.ui.dashboard.team.menu_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_team__menu-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-menu"})});
app.main.ui.dashboard.team.warning_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_team__warning-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-msg-warning"})});
app.main.ui.dashboard.team.success_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_team__success-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-msg-success"})});
app.main.ui.dashboard.team.image_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_team__image-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-img"})});
app.main.ui.dashboard.team.user_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_team__user-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-user"})});
app.main.ui.dashboard.team.document_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_team__document-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-document"})});
app.main.ui.dashboard.team.group_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_team__group-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-group"})});
app.main.ui.dashboard.team.header = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$dashboard$team$header(props_52661){
var section = props_52661.section;
var team = props_52661.team;
var on_nav_members = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_members());
}));
var on_nav_settings = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_settings());
}));
var on_nav_invitations = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_invitations());
}));
var on_nav_webhooks = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_dashboard_webhooks());
}));
var route = rumext.v2.deref(app.main.refs.route);
var invite_email = new cljs.core.Keyword(null,"invite-email","invite-email",1375794598).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(route));
var members_section_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"dashboard-team-members","dashboard-team-members",-736569143));
var settings_section_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"dashboard-team-settings","dashboard-team-settings",-1522044016));
var invitations_section_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"dashboard-team-invitations","dashboard-team-invitations",2059131944));
var webhooks_section_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(section,new cljs.core.Keyword(null,"dashboard-team-webhooks","dashboard-team-webhooks",884385449));
var permissions = new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(team);
var invitations = new cljs.core.Keyword(null,"invitations","invitations",-1668975235).cljs$core$IFn$_invoke$arity$1(team);
var on_invite_member = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team),rumext.v2.adapt(invite_email)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invite-members","invite-members",683231892),new cljs.core.Keyword(null,"team","team",1355747699),team,new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"invite-email","invite-email",1375794598),invite_email], null)));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team),rumext.v2.adapt(invite_email)],(function (){
if(cljs.core.truth_(invite_email)){
return (on_invite_member.cljs$core$IFn$_invoke$arity$0 ? on_invite_member.cljs$core$IFn$_invoke$arity$0() : on_invite_member.call(null));
} else {
return null;
}
}));

return rumext.v2.jsxs("header",{'data-testid':"dashboard-header",'className':"main_ui_dashboard_team__dashboard-header main_ui_dashboard_team__team",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__dashboard-title",'children':rumext.v2.jsx("h1",{'children':((members_section_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.members"):((settings_section_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.settings"):((invitations_section_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.invitations"):((webhooks_section_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.webhooks"):null
))))})}),rumext.v2.jsx("nav",{'className':"main_ui_dashboard_team__dashboard-header-menu",'children':rumext.v2.jsxs("ul",{'className':"main_ui_dashboard_team__dashboard-header-options",'children':[rumext.v2.jsx("li",{'className':((members_section_QMARK_)?"main_ui_dashboard_team__active":null),'children':rumext.v2.jsx("a",{'onClick':on_nav_members,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.members")})}),rumext.v2.jsx("li",{'className':((invitations_section_QMARK_)?"main_ui_dashboard_team__active":null),'children':rumext.v2.jsx("a",{'onClick':on_nav_invitations,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.invitations")})}),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"webhooks","webhooks",1535047469)))?rumext.v2.jsx("li",{'className':((webhooks_section_QMARK_)?"main_ui_dashboard_team__active":null),'children':rumext.v2.jsx("a",{'onClick':on_nav_webhooks,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.webhooks")})}):null),rumext.v2.jsx("li",{'className':((settings_section_QMARK_)?"main_ui_dashboard_team__active":null),'children':rumext.v2.jsx("a",{'onClick':on_nav_settings,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.settings")})})]})}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__dashboard-buttons",'children':(cljs.core.truth_((function (){var and__5023__auto__ = ((invitations_section_QMARK_) || (members_section_QMARK_));
if(and__5023__auto__){
var and__5023__auto____$1 = new cljs.core.Keyword(null,"is-admin","is-admin",-1352205216).cljs$core$IFn$_invoke$arity$1(permissions);
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not_empty(invitations);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("a",{'onClick':on_invite_member,'data-testid':"invite-member",'className':"main_ui_dashboard_team__btn-secondary main_ui_dashboard_team__btn-small",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.invite-profile")}):rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__blank-space"}))})]});
}));

(app.main.ui.dashboard.team.header.displayName = "header");

app.main.ui.dashboard.team.get_available_roles = (function app$main$ui$dashboard$team$get_available_roles(permissions){
return cljs.core.filterv(cljs.core.identity,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"viewer",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.viewer")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"editor",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.editor")], null),(cljs.core.truth_(new cljs.core.Keyword(null,"is-admin","is-admin",-1352205216).cljs$core$IFn$_invoke$arity$1(permissions))?new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"admin",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.admin")], null):null)], null));
});
app.main.ui.dashboard.team.schema_COLON_invite_member_form = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"InviteMemberForm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emails","emails",306754554),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","set","app.common.schema/set",1226590145),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null),new cljs.core.Keyword("app.common.schema","email","app.common.schema/email",2070921211)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null);
app.main.ui.dashboard.team.invite_members_modal = (function app$main$ui$dashboard$team$invite_members_modal(props_52662){
var invite_email = (props_52662["invite-email"]);
var team = props_52662.team;
var origin = props_52662.origin;
var members = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"members","members",159001018));
var perms = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"permissions","permissions",67803075));
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"id","id",-1388402092));
var roles = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(perms)],(function (){
return app.main.ui.dashboard.team.get_available_roles(perms);
}));
var initial = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id),rumext.v2.adapt(invite_email)],(function (){
if(cljs.core.truth_(invite_email)){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"role","role",-736691072),"editor",new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"emails","emails",306754554),cljs.core.PersistentHashSet.createAsIfByAssoc([invite_email])], null);
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"role","role",-736691072),"editor",new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null);
}
}));
var form = (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.dashboard.team.schema_COLON_invite_member_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial) : app.main.ui.components.forms.use_form.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.dashboard.team.schema_COLON_invite_member_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial));
var error_text = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("");
var current_data_emails = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.Keyword(null,"clean-data","clean-data",1601974651)),new cljs.core.Keyword(null,"emails","emails",306754554)));
var current_members_emails = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"email","email",1415816706)),members);
var on_success = (function (_form,p__52663){
var map__52664 = p__52663;
var map__52664__$1 = cljs.core.__destructure_map(map__52664);
var total = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52664__$1,new cljs.core.Keyword(null,"total","total",1916810418));
if((total > (0))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("notifications.invitation-email-sent")));
} else {
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.modal.hide(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.team.fetch_members.cljs$core$IFn$_invoke$arity$0(),app.main.data.team.fetch_invitations()], 0));
});
var on_error = (function (_form,cause){
var map__52665 = cljs.core.ex_data(cause);
var map__52665__$1 = cljs.core.__destructure_map(map__52665);
var error = map__52665__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52665__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52665__$1,new cljs.core.Keyword(null,"code","code",1586293142));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"validation","validation",-2141396518),type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"profile-is-muted","profile-is-muted",-1029142459),code)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.profile-is-muted")),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide()], 0));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"validation","validation",-2141396518),type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-invitations-by-request","max-invitations-by-request",-1517961638),code)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(error_text,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.maximum-invitations-by-request-reached",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"threshold","threshold",204221583).cljs$core$IFn$_invoke$arity$1(error)], 0)));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restriction","restriction",-1380234912),type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-quote-reached","max-quote-reached",183086757),code)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(error_text,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.max-quota-reached",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(error)], 0)));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"member-is-muted","member-is-muted",161120640),code)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"email-has-permanent-bounces","email-has-permanent-bounces",223647074),code)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"email-has-complaints","email-has-complaints",-2106579252),code)))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(error_text,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.email-spam-or-permanent-bounces",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(error)], 0)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.generic")),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide()], 0));

}
}
}
}
});
var on_submit = (function (form__$1){
var params = new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form__$1));
var mdata = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_success,form__$1),new cljs.core.Keyword(null,"on-error","on-error",1728533530),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_error,form__$1)], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.with_meta(app.main.data.team.create_invitations(cljs.core.with_meta(params,mdata)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),origin], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.team.fetch_invitations(),app.main.data.team.fetch_members.cljs$core$IFn$_invoke$arity$0()], 0));
});
return rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__modal-team-container"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"workspace","workspace",-1096735709)))?"main_ui_dashboard_team__modal-team-container-workspace":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"hero","hero",1983137057)))?"main_ui_dashboard_team__hero":""),'children':rumext.v2.jsxs(app.main.ui.components.forms.form,{'on-submit':on_submit,'form':form,'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.invite-team-member.title")}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"workspace","workspace",-1096735709),origin))?rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__invite-team-member-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.invite-team-member.text")}):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",cljs.core.deref(error_text)))?null:rumext.v2.jsx(app.main.ui.notifications.context_notification.context_notification,{'content':cljs.core.deref(error_text),'level':new cljs.core.Keyword(null,"error","error",-978969032)})),(cljs.core.truth_(cljs.core.some(current_data_emails,current_members_emails))?rumext.v2.jsx(app.main.ui.notifications.context_notification.context_notification,{'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.invite-member.repeated-invitation"),'level':new cljs.core.Keyword(null,"warning","warning",-1685650671)}):null),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__role-select",'children':[rumext.v2.jsx("p",{'className':"main_ui_dashboard_team__role-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.choice.team-up.roles")}),rumext.v2.jsx(app.main.ui.components.forms.select,{'name':new cljs.core.Keyword(null,"role","role",-736691072),'options':roles})]}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__invitation-row",'children':rumext.v2.jsx(app.main.ui.components.forms.multi_input,{'type':"email",'class':"main_ui_dashboard_team__email-input",'name':new cljs.core.Keyword(null,"emails","emails",306754554),'auto-focus?':true,'trim':true,'valid-item-fn':app.common.schema.parse_email,'caution-item-fn':current_members_emails,'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.invite-member.emails")})}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__action-buttons",'children':rumext.v2.jsx(app.main.ui.components.forms.submit_button_STAR_,{'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.invite-member-confirm.accept"),'className':"main_ui_dashboard_team__accept-btn",'disabled':((cljs.core.boolean$(cljs.core.some(current_data_emails,current_members_emails))) && (cljs.core.empty_QMARK_(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(current_members_emails,current_data_emails))))})})]})});
});

(app.main.ui.dashboard.team.invite_members_modal.displayName = "invite-members-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"invite-members","invite-members",683231892),app.main.ui.dashboard.team.invite_members_modal);
}));
app.main.ui.dashboard.team.member_info = (function app$main$ui$dashboard$team$member_info(props_52666){
var profile = props_52666.profile;
var member = props_52666.member;
var is_you_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(profile),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("img",{'src':app.config.resolve_profile_photo_url(member),'className':"main_ui_dashboard_team__member-image"}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__member-info",'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__member-name",'children':[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member),((is_you_QMARK_)?rumext.v2.jsx("span",{'className':"main_ui_dashboard_team__you",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.you")}):null)]}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__member-email",'children':new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(member)})]})]});
});

(app.main.ui.dashboard.team.member_info.displayName = "member-info");

app.main.ui.dashboard.team.rol_info_STAR_ = (function app$main$ui$dashboard$team$rol_info_STAR_(props_52667){
var profile = props_52667.profile;
var on_set_viewer = props_52667.onSetViewer;
var on_set_editor = props_52667.onSetEditor;
var member = props_52667.member;
var on_set_admin = props_52667.onSetAdmin;
var team = props_52667.team;
var on_set_owner = props_52667.onSetOwner;
var member_is_owner = new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132).cljs$core$IFn$_invoke$arity$1(member);
var member_is_admin = (function (){var and__5023__auto__ = new cljs.core.Keyword(null,"is-admin","is-admin",-1352205216).cljs$core$IFn$_invoke$arity$1(member);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(member_is_owner);
} else {
return and__5023__auto__;
}
})();
var member_is_editor = (function (){var and__5023__auto__ = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(member);
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core.not(member_is_admin)) && (cljs.core.not(member_is_owner)));
} else {
return and__5023__auto__;
}
})();
var member_is_viewer = ((cljs.core.not(member_is_editor)) && (((cljs.core.not(member_is_admin)) && (cljs.core.not(member_is_owner)))));
var show_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var permissions = new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(team);
var is_owner = new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132).cljs$core$IFn$_invoke$arity$1(permissions);
var is_admin = new cljs.core.Keyword(null,"is-admin","is-admin",-1352205216).cljs$core$IFn$_invoke$arity$1(permissions);
var is_you = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(profile),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member));
var can_change_rol = (function (){var or__5025__auto__ = is_owner;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return is_admin;
}
})();
var not_superior = (function (){var or__5025__auto__ = (function (){var and__5023__auto__ = cljs.core.not(member_is_owner);
if(and__5023__auto__){
return is_admin;
} else {
return and__5023__auto__;
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var and__5023__auto__ = can_change_rol;
if(cljs.core.truth_(and__5023__auto__)){
var or__5025__auto____$1 = member_is_admin;
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = member_is_editor;
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return member_is_viewer;
}
}
} else {
return and__5023__auto__;
}
}
})();
var role = (cljs.core.truth_(member_is_owner)?"labels.owner":(cljs.core.truth_(member_is_admin)?"labels.admin":(cljs.core.truth_(member_is_editor)?"labels.editor":"labels.viewer"
)));
var on_show = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_QMARK_,true);
}));
var on_hide = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_QMARK_,false);
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_((function (){var and__5023__auto__ = can_change_rol;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = not_superior;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not((function (){var and__5023__auto____$2 = is_you;
if(and__5023__auto____$2){
return is_owner;
} else {
return and__5023__auto____$2;
}
})());
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsxs("div",{'role':"combobox",'aria-labelledby':"role-label-id",'onClick':on_show,'className':"main_ui_dashboard_team__rol-selector main_ui_dashboard_team__has-priv",'children':[rumext.v2.jsx("span",{'id':"role-label-id",'className':"main_ui_dashboard_team__rol-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1(role)}),app.main.ui.dashboard.team.arrow_icon]}):rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__rol-selector",'children':rumext.v2.jsx("span",{'className':"main_ui_dashboard_team__rol-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1(role)})})),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':cljs.core.deref(show_QMARK_),'on-close':on_hide,'dropdown-id':["member-role-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member))].join(''),'children':rumext.v2.jsxs("ul",{'role':"listbox",'className':"main_ui_dashboard_team__roles-dropdown",'children':[rumext.v2.jsx("li",{'onClick':on_set_viewer,'className':"main_ui_dashboard_team__rol-dropdown-item",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.viewer")}),rumext.v2.jsx("li",{'onClick':on_set_editor,'className':"main_ui_dashboard_team__rol-dropdown-item",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.editor")}),rumext.v2.jsx("li",{'onClick':on_set_admin,'className':"main_ui_dashboard_team__rol-dropdown-item",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.admin")}),(cljs.core.truth_(is_owner)?rumext.v2.jsx("li",{'onClick':cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_set_owner,member),'className':"main_ui_dashboard_team__rol-dropdown-item",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.owner")}):null)]})})]});
});

(app.main.ui.dashboard.team.rol_info_STAR_.displayName = "rol-info*");

app.main.ui.dashboard.team.member_actions_STAR_ = (function app$main$ui$dashboard$team$member_actions_STAR_(props_52668){
var profile = props_52668.profile;
var on_delete = props_52668.onDelete;
var on_leave = props_52668.onLeave;
var member = props_52668.member;
var team = props_52668.team;
var is_owner_QMARK_ = new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132).cljs$core$IFn$_invoke$arity$1(member);
var owner_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"permissions","permissions",67803075)),new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132));
var admin_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"permissions","permissions",67803075)),new cljs.core.Keyword(null,"is-admin","is-admin",-1352205216));
var show_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var is_you_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(profile),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member));
var can_delete_QMARK_ = (function (){var or__5025__auto__ = owner_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return admin_QMARK_;
}
})();
var on_show = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_QMARK_,true);
}));
var on_hide = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_QMARK_,false);
}));
if(cljs.core.truth_((function (){var or__5025__auto__ = is_you_QMARK_;
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = can_delete_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not((function (){var and__5023__auto____$1 = is_owner_QMARK_;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not(owner_QMARK_);
} else {
return and__5023__auto____$1;
}
})());
} else {
return and__5023__auto__;
}
}
})())){
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("button",{'onClick':on_show,'className':"main_ui_dashboard_team__menu-btn",'children':app.main.ui.dashboard.team.menu_icon}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':cljs.core.deref(show_QMARK_),'on-close':on_hide,'dropdown-id':["member-actions-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member))].join(''),'children':rumext.v2.jsxs("ul",{'className':"main_ui_dashboard_team__actions-dropdown",'children':[((is_you_QMARK_)?rumext.v2.jsx("li",{'onClick':on_leave,'className':"main_ui_dashboard_team__action-dropdown-item",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.leave-team")},"is-you-option"):null),(cljs.core.truth_((function (){var and__5023__auto__ = can_delete_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (((!(is_you_QMARK_))) && (cljs.core.not((function (){var and__5023__auto____$2 = is_owner_QMARK_;
if(cljs.core.truth_(and__5023__auto____$2)){
return cljs.core.not(owner_QMARK_);
} else {
return and__5023__auto____$2;
}
})())));
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("li",{'onClick':on_delete,'className':"main_ui_dashboard_team__action-dropdown-item",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.remove-member")},"is-not-you-option"):null)]})})]});
} else {
return null;
}
});

(app.main.ui.dashboard.team.member_actions_STAR_.displayName = "member-actions*");

app.main.ui.dashboard.team.set_role_BANG_ = (function app$main$ui$dashboard$team$set_role_BANG_(member_id,role){
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"member-id","member-id",606659713),member_id,new cljs.core.Keyword(null,"role","role",-736691072),role], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.update_member_role(params));
});
app.main.ui.dashboard.team.team_member_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$dashboard$team$team_member_STAR_(props_52669){
var profile = props_52669.profile;
var member = props_52669.member;
var team = props_52669.team;
var total_members = props_52669.totalMembers;
var member_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(member);
var on_set_admin = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(member_id)],cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.dashboard.team.set_role_BANG_,member_id,new cljs.core.Keyword(null,"admin","admin",-1239101627)));
var on_set_editor = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(member_id)],cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.dashboard.team.set_role_BANG_,member_id,new cljs.core.Keyword(null,"editor","editor",-989377770)));
var on_set_viewer = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(member_id)],cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.dashboard.team.set_role_BANG_,member_id,new cljs.core.Keyword(null,"viewer","viewer",-783949853)));
var owner_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"permissions","permissions",67803075)),new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132));
var on_set_owner = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(member)],(function (member__$1,_event){
var params = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.promote-owner-confirm.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.promote-owner-confirm.message",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(member__$1)], 0)),new cljs.core.Keyword(null,"scd-message","scd-message",89862664),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.promote-owner-confirm.hint"),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.promote-owner-confirm.accept"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.dashboard.team.set_role_BANG_,member_id,new cljs.core.Keyword(null,"owner","owner",-392611939)),new cljs.core.Keyword(null,"accept-style","accept-style",630742659),new cljs.core.Keyword(null,"primary","primary",817773892)], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(params));
}));
var on_success = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return beicon.v2.core.of(app.main.data.common.go_to_dashboard_recent.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),new cljs.core.Keyword(null,"default","default",-1987822328)], 0)));
}));
var on_error = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p__52670){
var map__52671 = p__52670;
var map__52671__$1 = cljs.core.__destructure_map(map__52671);
var error = map__52671__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52671__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var pred__52672 = cljs.core._EQ_;
var expr__52673 = code;
if(cljs.core.truth_((pred__52672.cljs$core$IFn$_invoke$arity$2 ? pred__52672.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"no-enough-members-for-leave","no-enough-members-for-leave",132163040),expr__52673) : pred__52672.call(null,new cljs.core.Keyword(null,"no-enough-members-for-leave","no-enough-members-for-leave",132163040),expr__52673)))){
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.team-leave.insufficient-members")));
} else {
if(cljs.core.truth_((pred__52672.cljs$core$IFn$_invoke$arity$2 ? pred__52672.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"member-does-not-exist","member-does-not-exist",1388767352),expr__52673) : pred__52672.call(null,new cljs.core.Keyword(null,"member-does-not-exist","member-does-not-exist",1388767352),expr__52673)))){
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.team-leave.member-does-not-exists")));
} else {
if(cljs.core.truth_((pred__52672.cljs$core$IFn$_invoke$arity$2 ? pred__52672.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"owner-cant-leave-team","owner-cant-leave-team",659839763),expr__52673) : pred__52672.call(null,new cljs.core.Keyword(null,"owner-cant-leave-team","owner-cant-leave-team",659839763),expr__52673)))){
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.team-leave.owner-cant-leave")));
} else {
return beicon.v2.core.throw$(error);
}
}
}
}));
var on_delete_accepted = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team),rumext.v2.adapt(on_success),rumext.v2.adapt(on_error)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.delete_team(cljs.core.with_meta(team,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null))));
}));
var on_leave_accepted = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_success),rumext.v2.adapt(on_error)],(function (member_id__$1){
var params = (function (){var G__52675 = cljs.core.PersistentArrayMap.EMPTY;
if(cljs.core.uuid_QMARK_(member_id__$1)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__52675,new cljs.core.Keyword(null,"reassign-to","reassign-to",-161965705),member_id__$1);
} else {
return G__52675;
}
})();
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.leave_current_team(cljs.core.with_meta(params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null))));
}));
var on_leave_and_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_delete_accepted)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.leave-confirm.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.leave-and-close-confirm.message",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team)], 0)),new cljs.core.Keyword(null,"scd-message","scd-message",89862664),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.leave-and-close-confirm.hint"),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.leave-confirm.accept"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),on_delete_accepted], null)));
}));
var on_change_owner_and_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(profile),rumext.v2.adapt(team),rumext.v2.adapt(on_leave_accepted)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.team.fetch_members.cljs$core$IFn$_invoke$arity$0(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"leave-and-reassign","leave-and-reassign",-602937808),new cljs.core.Keyword(null,"profile","profile",-545963874),profile,new cljs.core.Keyword(null,"team","team",1355747699),team,new cljs.core.Keyword(null,"accept","accept",1874130431),on_leave_accepted], null))], 0));
}));
var on_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_leave_accepted)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.leave-confirm.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.leave-confirm.message"),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.leave-confirm.accept"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),on_leave_accepted], null)));
}));
var on_delete = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(member_id)],(function (){
var on_accept = (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.delete_member(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"member-id","member-id",606659713),member_id], null)));
});
var params = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-team-member-confirm.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-team-member-confirm.message"),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-team-member-confirm.accept"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),on_accept], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(params));
}));
var on_leave_SINGLEQUOTE_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),total_members))?on_leave_and_close:((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(true,owner_QMARK_))?on_change_owner_and_leave:on_leave
));
return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__table-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__table-field main_ui_dashboard_team__field-name",'children':rumext.v2.jsx(app.main.ui.dashboard.team.member_info,{'member':member,'profile':profile})}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__table-field main_ui_dashboard_team__field-roles",'children':rumext.v2.jsx(app.main.ui.dashboard.team.rol_info_STAR_,{'member':member,'team':team,'onSetAdmin':on_set_admin,'onSetEditor':on_set_editor,'onSetViewer':on_set_viewer,'onSetOwner':on_set_owner,'profile':profile})}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__table-field main_ui_dashboard_team__field-actions",'children':rumext.v2.jsx(app.main.ui.dashboard.team.member_actions_STAR_,{'member':member,'profile':profile,'team':team,'onDelete':on_delete,'onLeave':on_leave_SINGLEQUOTE_})})]});
}));

(app.main.ui.dashboard.team.team_member_STAR_.displayName = "team-member*");

app.main.ui.dashboard.team.team_members_STAR_ = (function app$main$ui$dashboard$team$team_members_STAR_(props_52677){
var profile = props_52677.profile;
var team = props_52677.team;
var members = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"members","members",159001018));
var total_members = cljs.core.count(members);
var owner = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(members)],(function (){
return app.common.data.seek.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132),members);
}));
var members__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team)],(function (){
return cljs.core.vec(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"created-at","created-at",-89248644),new cljs.core.Keyword(null,"members","members",159001018).cljs$core$IFn$_invoke$arity$1(team))));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__dashboard-table main_ui_dashboard_team__team-members",'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__table-header",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__table-field main_ui_dashboard_team__title-field-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.member")}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__table-field main_ui_dashboard_team__title-field-role",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.role")})]}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__table-rows",'children':[rumext.v2.jsx(app.main.ui.dashboard.team.team_member_STAR_,{'member':owner,'team':team,'profile':profile,'totalMembers':total_members}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,item){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.dashboard.team.team_member_STAR_,{'member':item,'team':team,'profile':profile,'totalMembers':total_members},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item) ?? "")));

return out_arr__35152__auto__;
}),[],members__$1)]})]});
});

(app.main.ui.dashboard.team.team_members_STAR_.displayName = "team-members*");

app.main.ui.dashboard.team.team_members_page_STAR_ = (function app$main$ui$dashboard$team$team_members_page_STAR_(props_52681){
var profile = props_52681.profile;
var team = props_52681.team;
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team)],(function (){
return app.util.dom.set_html_title(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("title.team-members",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(team))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.your-penpot"):new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team))], 0)));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.fetch_members.cljs$core$IFn$_invoke$arity$0());
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.dashboard.team.header,{'section':new cljs.core.Keyword(null,"dashboard-team-members","dashboard-team-members",-736569143),'team':team}),rumext.v2.jsxs("section",{'className':"main_ui_dashboard_team__dashboard-container main_ui_dashboard_team__dashboard-team-members",'children':[rumext.v2.jsx(app.main.ui.dashboard.team.team_members_STAR_,{'profile':profile,'team':team}),(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776));
if(and__5023__auto__){
return app.main.ui.dashboard.subscription.show_subscription_members_banner_QMARK_(team,profile);
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.dashboard.subscription.members_cta_STAR_,{'team':team}):null)]})]});
});

(app.main.ui.dashboard.team.team_members_page_STAR_.displayName = "team-members-page*");

app.main.ui.dashboard.team.invitation_role_selector_STAR_ = (function app$main$ui$dashboard$team$invitation_role_selector_STAR_(props_52685){
var on_change = props_52685.onChange;
var role = props_52685.role;
var can_invite = props_52685.canInvite;
var status = props_52685.status;
var show_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var label = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(role,new cljs.core.Keyword(null,"owner","owner",-392611939)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.owner"):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(role,new cljs.core.Keyword(null,"admin","admin",-1239101627)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.admin"):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(role,new cljs.core.Keyword(null,"editor","editor",-989377770)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.editor"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.viewer")
)));
var on_hide = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_QMARK_,false);
}));
var on_show = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_QMARK_,true);
}));
var on_change_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_change)],(function (event){
var role__$1 = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_current_target(event),"role"));
return (on_change.cljs$core$IFn$_invoke$arity$2 ? on_change.cljs$core$IFn$_invoke$arity$2(role__$1,event) : on_change.call(null,role__$1,event));
}));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(cljs.core.truth_((function (){var and__5023__auto__ = can_invite;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"pending","pending",-220036727));
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsxs("div",{'onClick':on_show,'className':"main_ui_dashboard_team__rol-selector main_ui_dashboard_team__has-priv",'children':[rumext.v2.jsx("span",{'className':"main_ui_dashboard_team__rol-label",'children':label}),app.main.ui.dashboard.team.arrow_icon]}):rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__rol-selector",'children':rumext.v2.jsx("span",{'className':"main_ui_dashboard_team__rol-label",'children':label})})),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':cljs.core.deref(show_QMARK_),'on-close':on_hide,'dropdown-id':"invitation-role-selector",'children':rumext.v2.jsxs("ul",{'className':"main_ui_dashboard_team__roles-dropdown",'children':[rumext.v2.jsx("li",{'data-role':"admin",'onClick':on_change_SINGLEQUOTE_,'className':"main_ui_dashboard_team__rol-dropdown-item",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.admin")}),rumext.v2.jsx("li",{'data-role':"editor",'onClick':on_change_SINGLEQUOTE_,'className':"main_ui_dashboard_team__rol-dropdown-item",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.editor")}),rumext.v2.jsx("li",{'data-role':"viewer",'onClick':on_change_SINGLEQUOTE_,'className':"main_ui_dashboard_team__rol-dropdown-item",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.viewer")})]})})]});
});

(app.main.ui.dashboard.team.invitation_role_selector_STAR_.displayName = "invitation-role-selector*");

app.main.ui.dashboard.team.invitation_actions_STAR_ = (function app$main$ui$dashboard$team$invitation_actions_STAR_(props_52687){
var invitation = props_52687.invitation;
var team_id = props_52687.teamId;
var email = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(invitation);
var on_error = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(email)],(function (cause){
var map__52688 = cljs.core.ex_data(cause);
var map__52688__$1 = cljs.core.__destructure_map(map__52688);
var error = map__52688__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52688__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52688__$1,new cljs.core.Keyword(null,"code","code",1586293142));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"validation","validation",-2141396518),type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"profile-is-muted","profile-is-muted",-1029142459),code)))){
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.profile-is-muted")));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"validation","validation",-2141396518),type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"member-is-muted","member-is-muted",161120640),code)))){
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.member-is-muted")));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restriction","restriction",-1380234912),type)) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"email-has-permanent-bounces","email-has-permanent-bounces",223647074),code)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"email-has-complaints","email-has-complaints",-2106579252),code)))))){
return beicon.v2.core.of(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.email-has-permanent-bounces",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([email], 0))));
} else {
return beicon.v2.core.throw$(cause);

}
}
}
}));
var on_copy_success = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("notifications.invitation-link-copied")),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide()], 0));
}));
var on_copy = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(email),rumext.v2.adapt(team_id)],(function (){
var params = cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_copy_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(app.main.data.team.copy_invitation_link(params),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),new cljs.core.Keyword(null,"team","team",1355747699)], null)));
}));
return rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.copy-invitation-link"),'onClick':on_copy,'icon':"clipboard"});
});

(app.main.ui.dashboard.team.invitation_actions_STAR_.displayName = "invitation-actions*");

app.main.ui.dashboard.team.invitation_row_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$dashboard$team$invitation_row_STAR_(props_52692){
var invitation = props_52692.invitation;
var team_id = props_52692.teamId;
var selected = props_52692.selected;
var can_invite = props_52692.canInvite;
var on_select_change = props_52692.onSelectChange;
var expired_QMARK_ = new cljs.core.Keyword(null,"expired","expired",917709975).cljs$core$IFn$_invoke$arity$1(invitation);
var email = new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(invitation);
var role = new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(invitation);
var status = (cljs.core.truth_(expired_QMARK_)?new cljs.core.Keyword(null,"expired","expired",917709975):new cljs.core.Keyword(null,"pending","pending",-220036727));
var type = (cljs.core.truth_(expired_QMARK_)?new cljs.core.Keyword(null,"warning","warning",-1685650671):new cljs.core.Keyword(null,"default","default",-1987822328));
var badge_content = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"expired","expired",917709975)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.expired-invitation"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.pending-invitation"));
var is_selected_QMARK_ = (function (email__$1){
return cljs.core.contains_QMARK_(cljs.core.deref(selected),email__$1);
});
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_select_change)],(function (event){
var email__$1 = app.util.dom.get_data(app.util.dom.get_current_target(event),"attr");
return (on_select_change.cljs$core$IFn$_invoke$arity$1 ? on_select_change.cljs$core$IFn$_invoke$arity$1(email__$1) : on_select_change.call(null,email__$1));
}));
var on_change_role = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(email),rumext.v2.adapt(team_id)],(function (role__$1,_event){
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"email","email",1415816706),email,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"role","role",-736691072),role__$1], null);
var mdata = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.fetch_invitations());
})], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.update_invitation_role(cljs.core.with_meta(params,mdata)));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__table-row main_ui_dashboard_team__table-row-invitations",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__table-field main_ui_dashboard_team__field-email",'children':rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__input-wrapper",'children':rumext.v2.jsxs("label",{'children':[rumext.v2.jsx("span",{'className':"main_ui_dashboard_team__input-checkbox"+" "+((is_selected_QMARK_(email))?"checked":""),'children':app.main.ui.icons.status_tick}),rumext.v2.jsx("input",{'type':"checkbox",'id':""+"email-"+(email ?? ""),'data-attr':email,'value':email,'checked':is_selected_QMARK_(email),'onChange':on_change}),email]})})}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__table-field main_ui_dashboard_team__field-roles",'children':rumext.v2.jsx(app.main.ui.dashboard.team.invitation_role_selector_STAR_,{'canInvite':can_invite,'role':role,'status':status,'onChange':on_change_role})}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__table-field main_ui_dashboard_team__field-status",'children':rumext.v2.jsx(app.main.ui.notifications.badge.badge_notification,{'type':type,'content':badge_content})}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__table-field main_ui_dashboard_team__field-actions",'children':((can_invite)?rumext.v2.jsx(app.main.ui.dashboard.team.invitation_actions_STAR_,{'invitation':invitation,'teamId':team_id}):null)})]});
}));

(app.main.ui.dashboard.team.invitation_row_STAR_.displayName = "invitation-row*");

app.main.ui.dashboard.team.empty_invitation_table_STAR_ = (function app$main$ui$dashboard$team$empty_invitation_table_STAR_(props_52698){
var can_invite = props_52698.canInvite;
var team = props_52698.team;
var route = rumext.v2.deref(app.main.refs.route);
var invite_email = new cljs.core.Keyword(null,"invite-email","invite-email",1375794598).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query-params","query-params",900640534).cljs$core$IFn$_invoke$arity$1(route));
var on_invite_member = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team),rumext.v2.adapt(invite_email)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"invite-members","invite-members",683231892),new cljs.core.Keyword(null,"team","team",1355747699),team,new cljs.core.Keyword(null,"origin","origin",1037372088),new cljs.core.Keyword(null,"team","team",1355747699),new cljs.core.Keyword(null,"invite-email","invite-email",1375794598),invite_email], null)));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__empty-invitations",'children':[rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.no-invitations")}),((can_invite)?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.no-invitations-gather-people")}),rumext.v2.jsx("a",{'onClick':on_invite_member,'data-testid':"invite-member",'className':"main_ui_dashboard_team__btn-empty-invitations",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.invite-profile")}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__blank-space"})], null):null)]});
});

(app.main.ui.dashboard.team.empty_invitation_table_STAR_.displayName = "empty-invitation-table*");

app.main.ui.dashboard.team.invitation_modal = (function app$main$ui$dashboard$team$invitation_modal(props_52704){
var map__52705 = rumext.v2.util.wrap_props(props_52704);
var map__52705__$1 = cljs.core.__destructure_map(map__52705);
var selected = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52705__$1,new cljs.core.Keyword(null,"selected","selected",574897764));
var delete$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52705__$1,new cljs.core.Keyword(null,"delete","delete",-1768633620));
var on_confirm = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52705__$1,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038));
return rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__modal-invitation-container main_ui_dashboard_team__modal-container",'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__modal-header",'children':[rumext.v2.jsx("h2",{'className':"main_ui_dashboard_team__modal-title",'children':(cljs.core.truth_(delete$)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.invitation-modal.title.delete-invitations"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.invitation-modal.title.resend-invitations"))}),rumext.v2.jsx("button",{'onClick':app.main.data.modal.hide_BANG_,'className':"main_ui_dashboard_team__modal-close-btn",'children':app.main.ui.icons.close})]}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__modal-invitation-content",'children':[rumext.v2.jsx("p",{'children':(cljs.core.truth_(delete$)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.invitation-modal.delete"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.invitation-modal.resend"))}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__invitation-list",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__52707){
var map__52708 = p__52707;
var map__52708__$1 = cljs.core.__destructure_map(map__52708);
var email = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52708__$1,new cljs.core.Keyword(null,"email","email",1415816706));
var role = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52708__$1,new cljs.core.Keyword(null,"role","role",-736691072));
out_arr__35152__auto__.push(rumext.v2.jsx("p",{'children':["- ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(email)," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1(["labels.",cljs.core.name(role)].join(''))),")"].join('')},email));

return out_arr__35152__auto__;
}),[],selected)})]}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__modal-footer",'children':rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__action-buttons main_ui_dashboard_team__modal-invitation-action-buttons",'children':[(cljs.core.truth_(delete$)?null:rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'className':"main_ui_dashboard_team__cancel-button",'variant':"secondary",'type':"button",'onClick':app.main.data.modal.hide_BANG_,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.cancel")})),rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'className':"main_ui_dashboard_team__accept-btn",'variant':"primary",'type':"button",'onClick':on_confirm,'children':(cljs.core.truth_(delete$)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.continue"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.resend"))})]})})]})});
});

(app.main.ui.dashboard.team.invitation_modal.displayName = "invitation-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"invitation-modal","invitation-modal",-1270137375),app.main.ui.dashboard.team.invitation_modal);
}));
app.main.ui.dashboard.team.invitation_section_STAR_ = (function app$main$ui$dashboard$team$invitation_section_STAR_(props_52712){
var team = props_52712.team;
var permissions = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"permissions","permissions",67803075));
var invitations = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"invitations","invitations",-1668975235)));
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"id","id",-1388402092));
var owner_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(permissions,new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132));
var admin_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(permissions,new cljs.core.Keyword(null,"is-admin","is-admin",-1352205216));
var can_invite_QMARK_ = (function (){var or__5025__auto__ = owner_QMARK_;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return admin_QMARK_;
}
})();
var selected = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var sort_state = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),null,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"asc","asc",356854569)], null));
var selected_invitations = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected),rumext.v2.adapt(invitations)],(function (){
return cljs.core.filterv((function (p1__52709_SHARP_){
return cljs.core.contains_QMARK_(cljs.core.deref(selected),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(p1__52709_SHARP_));
}),cljs.core.deref(invitations));
}));
var on_select_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected)],(function (email){
if(cljs.core.contains_QMARK_(cljs.core.deref(selected),email)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(selected,cljs.core.disj,email);
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(selected,cljs.core.conj,email);
}
}));
var on_confirm_delete = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected),rumext.v2.adapt(team_id)],(function (){
var seq__52722_52898 = cljs.core.seq(cljs.core.deref(selected));
var chunk__52723_52899 = null;
var count__52724_52900 = (0);
var i__52725_52901 = (0);
while(true){
if((i__52725_52901 < count__52724_52900)){
var email_52902 = chunk__52723_52899.cljs$core$IIndexed$_nth$arity$2(null,i__52725_52901);
var params_52903 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),email_52902,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null);
var mdata_52904 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),((function (seq__52722_52898,chunk__52723_52899,count__52724_52900,i__52725_52901,params_52903,email_52902,permissions,invitations,team_id,owner_QMARK_,admin_QMARK_,can_invite_QMARK_,selected,sort_state,selected_invitations,on_select_change,team){
return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("notifications.invitation-deleted")),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.team.fetch_invitations(),app.main.data.modal.hide()], 0));
});})(seq__52722_52898,chunk__52723_52899,count__52724_52900,i__52725_52901,params_52903,email_52902,permissions,invitations,team_id,owner_QMARK_,admin_QMARK_,can_invite_QMARK_,selected,sort_state,selected_invitations,on_select_change,team))
], null);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.delete_invitation(cljs.core.with_meta(params_52903,mdata_52904)));


var G__52905 = seq__52722_52898;
var G__52906 = chunk__52723_52899;
var G__52907 = count__52724_52900;
var G__52908 = (i__52725_52901 + (1));
seq__52722_52898 = G__52905;
chunk__52723_52899 = G__52906;
count__52724_52900 = G__52907;
i__52725_52901 = G__52908;
continue;
} else {
var temp__5825__auto___52909 = cljs.core.seq(seq__52722_52898);
if(temp__5825__auto___52909){
var seq__52722_52910__$1 = temp__5825__auto___52909;
if(cljs.core.chunked_seq_QMARK_(seq__52722_52910__$1)){
var c__5548__auto___52911 = cljs.core.chunk_first(seq__52722_52910__$1);
var G__52912 = cljs.core.chunk_rest(seq__52722_52910__$1);
var G__52913 = c__5548__auto___52911;
var G__52914 = cljs.core.count(c__5548__auto___52911);
var G__52915 = (0);
seq__52722_52898 = G__52912;
chunk__52723_52899 = G__52913;
count__52724_52900 = G__52914;
i__52725_52901 = G__52915;
continue;
} else {
var email_52916 = cljs.core.first(seq__52722_52910__$1);
var params_52917 = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"email","email",1415816706),email_52916,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], null);
var mdata_52918 = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),((function (seq__52722_52898,chunk__52723_52899,count__52724_52900,i__52725_52901,params_52917,email_52916,seq__52722_52910__$1,temp__5825__auto___52909,permissions,invitations,team_id,owner_QMARK_,admin_QMARK_,can_invite_QMARK_,selected,sort_state,selected_invitations,on_select_change,team){
return (function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("notifications.invitation-deleted")),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.team.fetch_invitations(),app.main.data.modal.hide()], 0));
});})(seq__52722_52898,chunk__52723_52899,count__52724_52900,i__52725_52901,params_52917,email_52916,seq__52722_52910__$1,temp__5825__auto___52909,permissions,invitations,team_id,owner_QMARK_,admin_QMARK_,can_invite_QMARK_,selected,sort_state,selected_invitations,on_select_change,team))
], null);
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.delete_invitation(cljs.core.with_meta(params_52917,mdata_52918)));


var G__52919 = cljs.core.next(seq__52722_52910__$1);
var G__52920 = null;
var G__52921 = (0);
var G__52922 = (0);
seq__52722_52898 = G__52919;
chunk__52723_52899 = G__52920;
count__52724_52900 = G__52921;
i__52725_52901 = G__52922;
continue;
}
} else {
}
}
break;
}

return cljs.core.reset_BANG_(selected,cljs.core.PersistentHashSet.EMPTY);
}));
var on_delete = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_invitations),rumext.v2.adapt(team_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invitation-modal","invitation-modal",-1270137375),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"selected","selected",574897764),selected_invitations,new cljs.core.Keyword(null,"delete","delete",-1768633620),true,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),on_confirm_delete], null)));
}));
var on_error = (function (form){
var map__52726 = cljs.core.ex_data(form);
var map__52726__$1 = cljs.core.__destructure_map(map__52726);
var error = map__52726__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52726__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52726__$1,new cljs.core.Keyword(null,"code","code",1586293142));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([form], 0));

if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"validation","validation",-2141396518),type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"profile-is-muted","profile-is-muted",-1029142459),code)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.profile-is-muted")),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide()], 0));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"validation","validation",-2141396518),type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-invitations-by-request","max-invitations-by-request",-1517961638),code)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.maximum-invitations-by-request-reached",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"threshold","threshold",204221583).cljs$core$IFn$_invoke$arity$1(error)], 0))));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restriction","restriction",-1380234912),type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-quote-reached","max-quote-reached",183086757),code)))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.max-quote-reached",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(error)], 0))));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"member-is-muted","member-is-muted",161120640),code)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"email-has-permanent-bounces","email-has-permanent-bounces",223647074),code)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"email-has-complaints","email-has-complaints",-2106579252),code)))))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.email-spam-or-permanent-bounces",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(error)], 0))));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.generic")),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide()], 0));

}
}
}
}
});
var on_resend_success = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("notifications.invitation-email-sent")),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide(),app.main.data.team.fetch_invitations()], 0));

return cljs.core.reset_BANG_(selected,cljs.core.PersistentHashSet.EMPTY);
}));
var on_confirm_resend = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_invitations),rumext.v2.adapt(team_id),rumext.v2.adapt(on_resend_success)],(function (){
app.main.data.modal.hide_BANG_();

var params = cljs.core.with_meta(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"invitations","invitations",-1668975235),selected_invitations,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"resend?","resend?",-682387124),true], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_resend_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(app.main.data.team.create_invitations(params),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),new cljs.core.Keyword(null,"team","team",1355747699)], null)));
}));
var on_resend = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id),rumext.v2.adapt(selected_invitations)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"invitation-modal","invitation-modal",-1270137375),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"selected","selected",574897764),selected_invitations,new cljs.core.Keyword(null,"on-confirm","on-confirm",1527003038),on_confirm_resend], null)));
}));
var on_order_by_status = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(sort_state)],(function (){
var current_field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sort_state));
var current_direction = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sort_state));
var new_direction = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_field,new cljs.core.Keyword(null,"status","status",-1997798413)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_direction,new cljs.core.Keyword(null,"asc","asc",356854569)))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569)):new cljs.core.Keyword(null,"asc","asc",356854569));
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(invitations)], 0));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sort_state,cljs.core.assoc,new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"status","status",-1997798413),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"direction","direction",-633359395),new_direction], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(invitations,(function (p1__52710_SHARP_){
var sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expired","expired",917709975),new cljs.core.Keyword(null,"email","email",1415816706)),p1__52710_SHARP_);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_direction,new cljs.core.Keyword(null,"desc","desc",2093485764))){
return cljs.core.reverse(sorted);
} else {
return sorted;
}
}));
}));
var on_order_by_role = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(sort_state)],(function (){
var current_field = new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sort_state));
var current_direction = new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sort_state));
var new_direction = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_field,new cljs.core.Keyword(null,"role","role",-736691072)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_direction,new cljs.core.Keyword(null,"asc","asc",356854569)))?new cljs.core.Keyword(null,"desc","desc",2093485764):new cljs.core.Keyword(null,"asc","asc",356854569)):new cljs.core.Keyword(null,"asc","asc",356854569));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(sort_state,cljs.core.assoc,new cljs.core.Keyword(null,"field","field",-1302436500),new cljs.core.Keyword(null,"role","role",-736691072),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"direction","direction",-633359395),new_direction], 0));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(invitations,(function (p1__52711_SHARP_){
var sorted = cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"email","email",1415816706)),p1__52711_SHARP_);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new_direction,new cljs.core.Keyword(null,"desc","desc",2093485764))){
return cljs.core.reverse(sorted);
} else {
return sorted;
}
}));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team)],(function (){
cljs.core.reset_BANG_(invitations,cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"invitations","invitations",-1668975235)));

return cljs.core.reset_BANG_(sort_state,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"field","field",-1302436500),null,new cljs.core.Keyword(null,"direction","direction",-633359395),new cljs.core.Keyword(null,"asc","asc",356854569)], null));
}));

return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__invitations",'children':[(((cljs.core.count(cljs.core.deref(selected)) > (0)))?rumext.v2.jsx(rumext.v2.Fragment,{'children':rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__invitations-actions",'children':[rumext.v2.jsx("div",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("team.invitations-selected",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(cljs.core.count(cljs.core.deref(selected)))], 0))}),rumext.v2.jsx("div",{'children':rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"secondary",'type':"button",'onClick':on_resend,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.resend-invitation")})}),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'onClick':on_delete,'variant':"destructive",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.delete-invitation"),'icon':"delete"})]})}):null),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__table-header",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__title-field-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.invitations")}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__title-field-role",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.role"),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"action",'className':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sort_state)),new cljs.core.Keyword(null,"role","role",-736691072)))?"main_ui_dashboard_team__sort-active":"")+" "+((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sort_state)),new cljs.core.Keyword(null,"role","role",-736691072)))?"main_ui_dashboard_team__sort-inactive":""),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.order-invitations-by-role"),'icon':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sort_state)),new cljs.core.Keyword(null,"role","role",-736691072)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sort_state)),new cljs.core.Keyword(null,"asc","asc",356854569)))?"arrow-down":"arrow-up"):"arrow-down"),'onClick':on_order_by_role})]}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__title-field-status",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.status"),rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"action",'className':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sort_state)),new cljs.core.Keyword(null,"status","status",-1997798413)))?"main_ui_dashboard_team__sort-active":"")+" "+((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sort_state)),new cljs.core.Keyword(null,"status","status",-1997798413)))?"main_ui_dashboard_team__sort-inactive":""),'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.order-invitations-by-status"),'icon':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"field","field",-1302436500).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sort_state)),new cljs.core.Keyword(null,"status","status",-1997798413)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"direction","direction",-633359395).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(sort_state)),new cljs.core.Keyword(null,"asc","asc",356854569)))?"arrow-down":"arrow-up"):"arrow-down"),'onClick':on_order_by_status})]})]}),((cljs.core.empty_QMARK_(cljs.core.deref(invitations)))?rumext.v2.jsx(app.main.ui.dashboard.team.empty_invitation_table_STAR_,{'canInvite':can_invite_QMARK_,'team':team}):rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__table-rows",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,invitation){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.dashboard.team.invitation_row_STAR_,{'invitation':invitation,'canInvite':can_invite_QMARK_,'teamId':team_id,'selected':selected,'onSelectChange':on_select_change},new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(invitation)));

return out_arr__35152__auto__;
}),[],cljs.core.deref(invitations))}))]});
});

(app.main.ui.dashboard.team.invitation_section_STAR_.displayName = "invitation-section*");

app.main.ui.dashboard.team.team_invitations_page_STAR_ = (function app$main$ui$dashboard$team$team_invitations_page_STAR_(props_52727){
var profile = props_52727.profile;
var team = props_52727.team;
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team)],(function (){
return app.util.dom.set_html_title(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("title.team-invitations",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(team))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.your-penpot"):new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team))], 0)));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.fetch_invitations());
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.dashboard.team.header,{'section':new cljs.core.Keyword(null,"dashboard-team-invitations","dashboard-team-invitations",2059131944),'team':team}),rumext.v2.jsxs("section",{'className':"main_ui_dashboard_team__dashboard-team-invitations",'children':[rumext.v2.jsx(app.main.ui.dashboard.team.invitation_section_STAR_,{'team':team}),(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776));
if(and__5023__auto__){
return app.main.ui.dashboard.subscription.show_subscription_members_banner_QMARK_(team,profile);
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.dashboard.subscription.members_cta_STAR_,{'team':team}):null)]})]});
});

(app.main.ui.dashboard.team.team_invitations_page_STAR_.displayName = "team-invitations-page*");

app.main.ui.dashboard.team.schema_COLON_webhook_form = new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"WebhookForm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","uri","app.common.schema/uri",-383357038),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"max","max",61366548),(4069),new cljs.core.Keyword(null,"prefix","prefix",-265908465),/^http[s]?:\/\//,new cljs.core.Keyword("error","code","error/code",-1740032098),"errors.webhooks.invalid-uri"], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"mtype","mtype",-1724656120),new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422)], null)], null);
app.main.ui.dashboard.team.valid_webhook_mtypes = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"application/json",new cljs.core.Keyword(null,"value","value",305978217),"application/json"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"application/transit+json",new cljs.core.Keyword(null,"value","value",305978217),"application/transit+json"], null)], null);
app.main.ui.dashboard.team.extract_status = (function app$main$ui$dashboard$team$extract_status(error_code){
return cljs.core.second(cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(error_code,/:/));
});
app.main.ui.dashboard.team.webhook_modal = (function app$main$ui$dashboard$team$webhook_modal(props_52730){
var map__52737 = rumext.v2.util.wrap_props(props_52730);
var map__52737__$1 = cljs.core.__destructure_map(map__52737);
var webhook = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52737__$1,new cljs.core.Keyword(null,"webhook","webhook",-860093016));
var initial = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
var or__5025__auto__ = (function (){var G__52739 = webhook;
if((G__52739 == null)){
return null;
} else {
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__52739,new cljs.core.Keyword(null,"uri","uri",-774711847),cljs.core.str);
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"is-active","is-active",-1424968720),false,new cljs.core.Keyword(null,"mtype","mtype",-1724656120),"application/json"], null);
}
}));
var form = (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.dashboard.team.schema_COLON_webhook_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial) : app.main.ui.components.forms.use_form.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.dashboard.team.schema_COLON_webhook_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial));
var on_success = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.webhooks.create.success");
return beicon.v2.core.of(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(message),app.main.data.modal.hide());
}));
var on_error = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (form__$1,error){
var map__52744 = cljs.core.ex_data(error);
var map__52744__$1 = cljs.core.__destructure_map(map__52744);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52744__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52744__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var hint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52744__$1,new cljs.core.Keyword(null,"hint","hint",439639918));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"validation","validation",-2141396518))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.Keyword(null,"webhook-validation","webhook-validation",-1228580175))))){
var message = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hint,"unknown"))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.webhooks.unexpected"):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hint,"invalid-uri"))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.webhooks.invalid-uri"):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hint,"ssl-validation-error"))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.webhooks.ssl-validation"):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hint,"timeout"))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.webhooks.timeout"):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(hint,"connection-error"))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.webhooks.connection"):((cuerdas.core.starts_with_QMARK_(hint,"unexpected-status"))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.webhooks.unexpected-status",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.ui.dashboard.team.extract_status(hint)], 0)):null))))));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(form__$1,cljs.core.assoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"uri","uri",-774711847)], null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"message","message",-406056002),message], null));
} else {
return beicon.v2.core.throw$(error);
}
}));
var on_create_submit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (form__$1){
var cdata = new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form__$1));
var mdata = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_success,form__$1),new cljs.core.Keyword(null,"on-error","on-error",1728533530),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_error,form__$1)], null);
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(cdata),new cljs.core.Keyword(null,"mtype","mtype",-1724656120),new cljs.core.Keyword(null,"mtype","mtype",-1724656120).cljs$core$IFn$_invoke$arity$1(cdata),new cljs.core.Keyword(null,"is-active","is-active",-1424968720),new cljs.core.Keyword(null,"is-active","is-active",-1424968720).cljs$core$IFn$_invoke$arity$1(cdata)], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.create_webhook(cljs.core.with_meta(params,mdata)));
}));
var on_update_submit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (form__$1){
var params = new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form__$1));
var mdata = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_success,form__$1),new cljs.core.Keyword(null,"on-error","on-error",1728533530),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(on_error,form__$1)], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.update_webhook(cljs.core.with_meta(params,mdata)));
}));
var on_submit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (form__$1){
var data = new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form__$1));
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data))){
return (on_update_submit.cljs$core$IFn$_invoke$arity$1 ? on_update_submit.cljs$core$IFn$_invoke$arity$1(form__$1) : on_update_submit.call(null,form__$1));
} else {
return (on_create_submit.cljs$core$IFn$_invoke$arity$1 ? on_create_submit.cljs$core$IFn$_invoke$arity$1(form__$1) : on_create_submit.call(null,form__$1));
}
}));
return rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__modal-overlay",'children':rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__modal-container",'children':rumext.v2.jsxs(app.main.ui.components.forms.form,{'form':form,'on-submit':on_submit,'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__modal-header",'children':[rumext.v2.jsx("h2",{'className':"main_ui_dashboard_team__modal-title",'children':(cljs.core.truth_(webhook)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.edit-webhook.title"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.create-webhook.title"))}),rumext.v2.jsx("button",{'onClick':app.main.data.modal.hide_BANG_,'className':"main_ui_dashboard_team__modal-close-btn",'children':app.main.ui.icons.close})]}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__modal-content",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'type':"text",'auto-focus?':true,'form':form,'name':new cljs.core.Keyword(null,"uri","uri",-774711847),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.create-webhook.url.label"),'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.create-webhook.url.placeholder")})}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__fields-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__select-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.webhooks.content-type")}),rumext.v2.jsx(app.main.ui.components.forms.select,{'options':app.main.ui.dashboard.team.valid_webhook_mtypes,'default':"application/json",'name':new cljs.core.Keyword(null,"mtype","mtype",-1724656120)})]}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__fields-row",'children':[rumext.v2.jsx(app.main.ui.components.forms.input,{'type':"checkbox",'class':"main_ui_dashboard_team__custom-input-checkbox",'form':form,'name':new cljs.core.Keyword(null,"is-active","is-active",-1424968720),'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.webhooks.active")}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__hint",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.webhooks.active.explain")})]})]}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__modal-footer",'children':rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__action-buttons",'children':[rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.cancel"),'onClick':app.main.data.modal.hide_BANG_,'className':"main_ui_dashboard_team__cancel-button"}),rumext.v2.jsx(app.main.ui.components.forms.submit_button_STAR_,{'label':(cljs.core.truth_(webhook)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.edit-webhook.submit-label"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.create-webhook.submit-label"))})]})})]})})});
});

(app.main.ui.dashboard.team.webhook_modal.displayName = "webhook-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"webhook","webhook",-860093016),app.main.ui.dashboard.team.webhook_modal);
}));
app.main.ui.dashboard.team.webhooks_hero_STAR_ = (function app$main$ui$dashboard$team$webhooks_hero_STAR_(props_52780){
return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__webhooks-hero-container",'children':[rumext.v2.jsx("h2",{'className':"main_ui_dashboard_team__hero-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.webhooks")}),rumext.v2.jsx(app.util.i18n.tr_html_STAR_,{'className':"main_ui_dashboard_team__hero-desc",'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.webhooks.description")}),rumext.v2.jsx("button",{'onClick':(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"webhook","webhook",-860093016),cljs.core.PersistentArrayMap.EMPTY));
}),'className':"main_ui_dashboard_team__hero-btn",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.webhooks.create")})]});
});

(app.main.ui.dashboard.team.webhooks_hero_STAR_.displayName = "webhooks-hero*");

app.main.ui.dashboard.team.webhook_actions_STAR_ = (function app$main$ui$dashboard$team$webhook_actions_STAR_(props_52781){
var on_delete = props_52781.onDelete;
var can_edit = props_52781.canEdit;
var on_edit = props_52781.onEdit;
var show_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var on_show = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_QMARK_,true);
}));
var on_hide = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_QMARK_,false);
}));
if(cljs.core.truth_(can_edit)){
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("button",{'onClick':on_show,'className':"main_ui_dashboard_team__menu-btn",'children':app.main.ui.dashboard.team.menu_icon}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':cljs.core.deref(show_QMARK_),'on-close':on_hide,'dropdown-id':"webhook-actions",'children':rumext.v2.jsxs("ul",{'className':"main_ui_dashboard_team__webhook-actions-dropdown",'children':[rumext.v2.jsx("li",{'onClick':on_edit,'className':"main_ui_dashboard_team__webhook-dropdown-item",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.edit")}),rumext.v2.jsx("li",{'onClick':on_delete,'className':"main_ui_dashboard_team__webhook-dropdown-item",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.delete")})]})})]});
} else {
return rumext.v2.jsx("span",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.webhooks.cant-edit"),'className':"main_ui_dashboard_team__menu-disabled",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.menu})});
}
});

(app.main.ui.dashboard.team.webhook_actions_STAR_.displayName = "webhook-actions*");

app.main.ui.dashboard.team.webhook_item_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$dashboard$team$webhook_item_STAR_(props_52789){
var permissions = props_52789.permissions;
var webhook = props_52789.webhook;
var error_code = new cljs.core.Keyword(null,"error-code","error-code",180497232).cljs$core$IFn$_invoke$arity$1(webhook);
var id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(webhook);
var creator_id = new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(webhook);
var profile = rumext.v2.deref(app.main.refs.profile);
var user_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(profile);
var can_edit = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(permissions);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(creator_id,user_id);
}
})();
var on_edit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(webhook)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"webhook","webhook",-860093016),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"webhook","webhook",-860093016),webhook], null)));
}));
var on_delete_accepted = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(id)],(function (){
var params = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),id], null);
var mdata = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.fetch_webhooks());
})], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.delete_webhook(cljs.core.with_meta(params,mdata)));
}));
var on_delete = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_delete_accepted)],(function (){
var params = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-webhook.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-webhook.message"),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-webhook.accept"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),on_delete_accepted], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(params));
}));
var last_delivery_text = (((error_code == null))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("webhooks.last-delivery.success"):""+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.webhooks.last-delivery") ?? "")+(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(error_code,"ssl-validation-error"))?""+" "+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.webhooks.ssl-validation") ?? ""):((cuerdas.core.starts_with_QMARK_(error_code,"unexpected-status"))?""+" "+(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.webhooks.unexpected-status",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.ui.dashboard.team.extract_status(error_code)], 0)) ?? ""):null)) ?? ""));
return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__table-row main_ui_dashboard_team__webhook-row",'children':[rumext.v2.jsx("div",{'title':last_delivery_text,'className':"main_ui_dashboard_team__table-field main_ui_dashboard_team__last-delivery",'children':(((error_code == null))?app.main.ui.dashboard.team.success_icon:app.main.ui.dashboard.team.warning_icon)}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__table-field main_ui_dashboard_team__uri",'children':rumext.v2.jsx("div",{'children':""+(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(webhook) ?? "")})}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__table-field main_ui_dashboard_team__active",'children':rumext.v2.jsx("div",{'children':(cljs.core.truth_(new cljs.core.Keyword(null,"is-active","is-active",-1424968720).cljs$core$IFn$_invoke$arity$1(webhook))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.active"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.inactive"))})}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__table-field main_ui_dashboard_team__actions",'children':rumext.v2.jsx(app.main.ui.dashboard.team.webhook_actions_STAR_,{'onEdit':on_edit,'onDelete':on_delete,'canEdit':can_edit})})]});
}));

(app.main.ui.dashboard.team.webhook_item_STAR_.displayName = "webhook-item*");

app.main.ui.dashboard.team.webhooks_list_STAR_ = (function app$main$ui$dashboard$team$webhooks_list_STAR_(props_52801){
var permissions = props_52801.permissions;
var webhooks = props_52801.webhooks;
return rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__table-rows main_ui_dashboard_team__webhook-table",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,webhook){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.dashboard.team.webhook_item_STAR_,{'webhook':webhook,'permissions':permissions},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(webhook) ?? "")));

return out_arr__35152__auto__;
}),[],webhooks)});
});

(app.main.ui.dashboard.team.webhooks_list_STAR_.displayName = "webhooks-list*");

app.main.ui.dashboard.team.webhooks_page_STAR_ = (function app$main$ui$dashboard$team$webhooks_page_STAR_(props_52805){
var team = props_52805.team;
var webhooks = new cljs.core.Keyword(null,"webhooks","webhooks",1535047469).cljs$core$IFn$_invoke$arity$1(team);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team)],(function (){
return app.util.dom.set_html_title(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("title.team-webhooks",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(team))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.your-penpot"):new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team))], 0)));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.fetch_webhooks());
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.dashboard.team.header,{'team':team,'section':new cljs.core.Keyword(null,"dashboard-team-webhooks","dashboard-team-webhooks",884385449)}),rumext.v2.jsx("section",{'className':"main_ui_dashboard_team__dashboard-container main_ui_dashboard_team__dashboard-team-webhooks",'children':rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.dashboard.team.webhooks_hero_STAR_,{}),((cljs.core.empty_QMARK_(webhooks))?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__webhooks-empty",'children':[rumext.v2.jsx("div",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.webhooks.empty.no-webhooks")}),rumext.v2.jsx("div",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.webhooks.empty.add-one")})]}):rumext.v2.jsx(app.main.ui.dashboard.team.webhooks_list_STAR_,{'webhooks':webhooks,'permissions':new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(team)}))]})})]});
});

(app.main.ui.dashboard.team.webhooks_page_STAR_.displayName = "webhooks-page*");

app.main.ui.dashboard.team.team_settings_page_STAR_ = (function app$main$ui$dashboard$team$team_settings_page_STAR_(props_52814){
var team = props_52814.team;
var finput = rumext.v2.use_ref();
var members = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"members","members",159001018));
var stats = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"stats","stats",-85643011));
var owner = app.common.data.seek.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132),members);
var permissions = new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(team);
var can_edit = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132).cljs$core$IFn$_invoke$arity$1(permissions);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"is-admin","is-admin",-1352205216).cljs$core$IFn$_invoke$arity$1(permissions);
}
})();
var on_image_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.dom.click(rumext.v2.ref_val(finput));
}));
var on_file_selected = (function (file){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.team.update_team_photo(file));
});
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team)],(function (){
return app.util.dom.set_html_title(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("title.team-settings",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([(cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(team))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.your-penpot"):new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team))], 0)));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.team.fetch_members.cljs$core$IFn$_invoke$arity$0(),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.team.fetch_stats()], 0));
}));

return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.dashboard.team.header,{'section':new cljs.core.Keyword(null,"dashboard-team-settings","dashboard-team-settings",-1522044016),'team':team}),rumext.v2.jsx("section",{'className':"main_ui_dashboard_team__dashboard-team-settings",'children':rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__settings-container",'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__block main_ui_dashboard_team__info-block",'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__team-icon",'children':[(cljs.core.truth_(can_edit)?rumext.v2.jsx("button",{'onClick':on_image_click,'className':"main_ui_dashboard_team__update-overlay",'children':app.main.ui.dashboard.team.image_icon}):null),rumext.v2.jsx("img",{'src':app.config.resolve_team_photo_url(team),'className':"main_ui_dashboard_team__team-image"}),(cljs.core.truth_(can_edit)?rumext.v2.jsx(app.main.ui.components.file_uploader.file_uploader,{'accept':"image/jpeg,image/png",'multi':false,'ref':finput,'on-selected':on_file_selected}):null)]}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__block-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.team-info")}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__block-text",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team)})]}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__block",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__block-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.team-members")}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__block-content",'children':[rumext.v2.jsx("img",{'src':app.config.resolve_profile_photo_url(owner),'className':"main_ui_dashboard_team__owner-icon"}),rumext.v2.jsx("span",{'className':"main_ui_dashboard_team__block-text",'children':[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(owner))," (",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.owner")),")"].join('')})]}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__block-content",'children':[app.main.ui.dashboard.team.user_icon,rumext.v2.jsx("span",{'className':"main_ui_dashboard_team__block-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.num-of-members",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.count(members)], 0))})]})]}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__block",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_team__block-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.team-projects")}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__block-content",'children':[app.main.ui.dashboard.team.group_icon,rumext.v2.jsx("span",{'className':"main_ui_dashboard_team__block-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("labels.num-of-projects",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c((new cljs.core.Keyword(null,"projects","projects",-364845983).cljs$core$IFn$_invoke$arity$1(stats) - (1)))], 0))})]}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team__block-content",'children':[app.main.ui.dashboard.team.document_icon,rumext.v2.jsx("span",{'className':"main_ui_dashboard_team__block-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("labels.num-of-files",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(stats))], 0))})]})]}),((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"subscriptions","subscriptions",1250949776)))?rumext.v2.jsx(app.main.ui.dashboard.subscription.team_STAR_,{'isOwner':new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132).cljs$core$IFn$_invoke$arity$1(permissions),'team':team}):null)]})})]});
});

(app.main.ui.dashboard.team.team_settings_page_STAR_.displayName = "team-settings-page*");


//# sourceMappingURL=app.main.ui.dashboard.team.js.map
