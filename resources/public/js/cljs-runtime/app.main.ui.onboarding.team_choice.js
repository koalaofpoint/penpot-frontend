import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.schema.js";
import "./app.main.data.common.js";
import "./app.main.data.event.js";
import "./app.main.data.profile.js";
import "./app.main.data.team.js";
import "./app.main.store.js";
import "./app.main.ui.components.forms.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.notifications.context_notification.js";
import "./app.util.i18n.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.onboarding.team_choice');
app.main.ui.onboarding.team_choice.left_sidebar = (function app$main$ui$onboarding$team_choice$left_sidebar(props_58731){
return rumext.v2.jsxs("div",{'className':"main_ui_onboarding_team_choice__modal-left",'children':[rumext.v2.jsx("h2",{'className':"main_ui_onboarding_team_choice__modal-subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.team-modal.team-definition")}),rumext.v2.jsx("p",{'className':"main_ui_onboarding_team_choice__modal-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.team-modal.create-team-desc")}),rumext.v2.jsxs("ul",{'className':"main_ui_onboarding_team_choice__team-features",'children':[rumext.v2.jsxs("li",{'className':"main_ui_onboarding_team_choice__feature",'children':[rumext.v2.jsx("span",{'className':"main_ui_onboarding_team_choice__icon",'children':app.main.ui.icons.document}),rumext.v2.jsx("p",{'className':"main_ui_onboarding_team_choice__modal-desc",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.team-modal.create-team-feature-1")})]}),rumext.v2.jsxs("li",{'className':"main_ui_onboarding_team_choice__feature",'children':[rumext.v2.jsx("span",{'className':"main_ui_onboarding_team_choice__icon",'children':app.main.ui.icons.move}),rumext.v2.jsx("p",{'className':"main_ui_onboarding_team_choice__modal-desc",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.team-modal.create-team-feature-2")})]}),rumext.v2.jsxs("li",{'className':"main_ui_onboarding_team_choice__feature",'children':[rumext.v2.jsx("span",{'className':"main_ui_onboarding_team_choice__icon",'children':app.main.ui.icons.tree}),rumext.v2.jsx("p",{'className':"main_ui_onboarding_team_choice__modal-desc",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.team-modal.create-team-feature-3")})]}),rumext.v2.jsxs("li",{'className':"main_ui_onboarding_team_choice__feature",'children':[rumext.v2.jsx("span",{'className':"main_ui_onboarding_team_choice__icon",'children':app.main.ui.icons.user}),rumext.v2.jsx("p",{'className':"main_ui_onboarding_team_choice__modal-desc",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.team-modal.create-team-feature-4")})]}),rumext.v2.jsxs("li",{'className':"main_ui_onboarding_team_choice__feature",'children':[rumext.v2.jsx("span",{'className':"main_ui_onboarding_team_choice__icon",'children':app.main.ui.icons.tick}),rumext.v2.jsx("p",{'className':"main_ui_onboarding_team_choice__modal-desc",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.team-modal.create-team-feature-5")})]})]})]});
});

(app.main.ui.onboarding.team_choice.left_sidebar.displayName = "left-sidebar");

app.main.ui.onboarding.team_choice.get_available_roles = (function app$main$ui$onboarding$team_choice$get_available_roles(){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"viewer",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.viewer")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"editor",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.editor")], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"admin",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.admin")], null)], null);
});
app.main.ui.onboarding.team_choice.schema_COLON_team_form = new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"TeamForm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(250)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"keyword","keyword",811389747)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"emails","emails",306754554),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","set","app.common.schema/set",1226590145),new cljs.core.Keyword("app.common.schema","email","app.common.schema/email",2070921211)], null)], null)], null);
app.main.ui.onboarding.team_choice.team_form = (function app$main$ui$onboarding$team_choice$team_form(props_58736){
var go_to_team = (props_58736["go-to-team"]);
var initial = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"role","role",-736691072),"editor"], null);
}));
var form = (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.onboarding.team_choice.schema_COLON_team_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial) : app.main.ui.components.forms.use_form.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.onboarding.team_choice.schema_COLON_team_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial));
var roles = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$1(app.main.ui.onboarding.team_choice.get_available_roles);
var error_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var on_success = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (response){
var team_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(response);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.profile.update_profile_props(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"onboarding-team-id","onboarding-team-id",1539385036),team_id,new cljs.core.Keyword(null,"onboarding-viewed","onboarding-viewed",-399988124),true], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([go_to_team], 0)),(cljs.core.truth_(go_to_team)?app.main.data.common.go_to_dashboard_recent.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], 0)):null)], 0));
}));
var on_error = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (cause){
var map__58740 = cljs.core.ex_data(cause);
var map__58740__$1 = cljs.core.__destructure_map(map__58740);
var error = map__58740__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58740__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58740__$1,new cljs.core.Keyword(null,"code","code",1586293142));
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"validation","validation",-2141396518),type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"profile-is-muted","profile-is-muted",-1029142459),code)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(error_STAR_,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.profile-is-muted"));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"validation","validation",-2141396518),type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-invitations-by-request","max-invitations-by-request",-1517961638),code)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(error_STAR_,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.maximum-invitations-by-request-reached",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"threshold","threshold",204221583).cljs$core$IFn$_invoke$arity$1(error)], 0)));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"restriction","restriction",-1380234912),type)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-quote-reached","max-quote-reached",183086757),code)))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(error_STAR_,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.max-quota-reached",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(error)], 0)));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"member-is-muted","member-is-muted",161120640),code)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"email-has-permanent-bounces","email-has-permanent-bounces",223647074),code)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"email-has-complaints","email-has-complaints",-2106579252),code)))))){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(error_STAR_,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.email-spam-or-permanent-bounces",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(error)], 0)));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(error_STAR_,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.generic"));

}
}
}
}
}));
var on_invite_later = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p__58741){
var map__58742 = p__58741;
var map__58742__$1 = cljs.core.__destructure_map(map__58742);
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58742__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var mdata = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null);
var params = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),name], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.with_meta(app.main.data.team.create_team(cljs.core.with_meta(params,mdata)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),new cljs.core.Keyword(null,"onboarding-without-invitations","onboarding-without-invitations",-677171434)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"onboarding-step",new cljs.core.Keyword(null,"label","label",1718410804),"team:create-team-and-invite-later",new cljs.core.Keyword(null,"team-name","team-name",1475836072),name,new cljs.core.Keyword(null,"step","step",1288888124),(8)], null)),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"onboarding-finish"], null))], 0));
}));
var on_invite_now = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p__58743){
var map__58744 = p__58743;
var map__58744__$1 = cljs.core.__destructure_map(map__58744);
var params = map__58744__$1;
var name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58744__$1,new cljs.core.Keyword(null,"name","name",1843675177));
var emails = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58744__$1,new cljs.core.Keyword(null,"emails","emails",306754554));
var mdata = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.with_meta(app.main.data.team.create_team_with_invitations(cljs.core.with_meta(params,mdata)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),new cljs.core.Keyword(null,"onboarding-with-invitations","onboarding-with-invitations",1108924654)], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"onboarding-step",new cljs.core.Keyword(null,"label","label",1718410804),"team:create-team-and-invite",new cljs.core.Keyword(null,"invites","invites",1962160761),cljs.core.count(emails),new cljs.core.Keyword(null,"team-name","team-name",1475836072),name,new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.Keyword(null,"role","role",-736691072).cljs$core$IFn$_invoke$arity$1(params),new cljs.core.Keyword(null,"step","step",1288888124),(8)], null)),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"onboarding-finish"], null))], 0));
}));
var on_submit_STAR_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (form__$1){
var params = new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form__$1));
var emails = new cljs.core.Keyword(null,"emails","emails",306754554).cljs$core$IFn$_invoke$arity$1(params);
if((cljs.core.count(emails) > (0))){
return (on_invite_now.cljs$core$IFn$_invoke$arity$1 ? on_invite_now.cljs$core$IFn$_invoke$arity$1(params) : on_invite_now.call(null,params));
} else {
return (on_invite_later.cljs$core$IFn$_invoke$arity$1 ? on_invite_later.cljs$core$IFn$_invoke$arity$1(params) : on_invite_later.call(null,params));
}
}));
var on_skip = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.profile.update_profile_props(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"onboarding-viewed","onboarding-viewed",-399988124),true], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"onboarding-step",new cljs.core.Keyword(null,"label","label",1718410804),"team:skip-team-creation",new cljs.core.Keyword(null,"step","step",1288888124),(7)], null)),potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"onboarding-finish"], null))], 0));
}));
return rumext.v2.jsx(rumext.v2.Fragment,{'children':rumext.v2.jsxs("div",{'className':"main_ui_onboarding_team_choice__modal-right",'children':[rumext.v2.jsx("div",{'className':"main_ui_onboarding_team_choice__first-block",'children':rumext.v2.jsxs(app.main.ui.components.forms.form,{'form':form,'class':"main_ui_onboarding_team_choice__modal-form",'on-submit':on_submit_STAR_,'children':[rumext.v2.jsx("h2",{'className':"main_ui_onboarding_team_choice__modal-subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.team-modal.create-team")}),rumext.v2.jsx("p",{'className':"main_ui_onboarding_team_choice__modal-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.choice.team-up.create-team-desc")}),rumext.v2.jsx(app.main.ui.components.forms.input,{'type':"text",'class':"main_ui_onboarding_team_choice__team-name-input",'name':new cljs.core.Keyword(null,"name","name",1843675177),'auto-focus?':true,'placeholder':"Team name",'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.choice.team-up.create-team-placeholder")}),rumext.v2.jsx("h2",{'className':"main_ui_onboarding_team_choice__modal-subtitle main_ui_onboarding_team_choice__invite-subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.choice.team-up.invite-members")}),rumext.v2.jsx("p",{'className':"main_ui_onboarding_team_choice__modal-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.choice.team-up.invite-members-info")}),(function (){var temp__5825__auto__ = cljs.core.deref(error_STAR_);
if(cljs.core.truth_(temp__5825__auto__)){
var content = temp__5825__auto__;
return rumext.v2.jsx(app.main.ui.notifications.context_notification.context_notification,{'content':content,'level':new cljs.core.Keyword(null,"error","error",-978969032)});
} else {
return null;
}
})(),rumext.v2.jsxs("div",{'className':"main_ui_onboarding_team_choice__role-select",'children':[rumext.v2.jsx("p",{'className':"main_ui_onboarding_team_choice__role-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.choice.team-up.roles")}),rumext.v2.jsx(app.main.ui.components.forms.select,{'name':new cljs.core.Keyword(null,"role","role",-736691072),'options':roles})]}),rumext.v2.jsx("div",{'className':"main_ui_onboarding_team_choice__invitation-row",'children':rumext.v2.jsx(app.main.ui.components.forms.multi_input,{'type':"email",'name':new cljs.core.Keyword(null,"emails","emails",306754554),'trim':true,'valid-item-fn':app.common.schema.parse_email,'caution-item-fn':cljs.core.PersistentHashSet.EMPTY,'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.invite-member.emails")})}),(function (){var params = new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form));
var emails = new cljs.core.Keyword(null,"emails","emails",306754554).cljs$core$IFn$_invoke$arity$1(params);
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'className':"main_ui_onboarding_team_choice__action-buttons",'children':rumext.v2.jsx(app.main.ui.components.forms.submit_button_STAR_,{'className':"main_ui_onboarding_team_choice__accept-button",'label':(((cljs.core.count(emails) > (0)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.choice.team-up.create-team-and-invite"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.choice.team-up.create-team-without-invite"))})}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.count(emails),(0)))?rumext.v2.jsxs("div",{'className':"main_ui_onboarding_team_choice__modal-hint",'children':["(",app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.choice.team-up.create-team-and-send-invites-description"),")"]}):null)]});
})()]})}),rumext.v2.jsxs("div",{'className':"main_ui_onboarding_team_choice__second-block",'children':[rumext.v2.jsx("h2",{'className':"main_ui_onboarding_team_choice__modal-subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.choice.team-up.start-without-a-team")}),rumext.v2.jsx("p",{'className':"main_ui_onboarding_team_choice__modal-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.choice.team-up.start-without-a-team-description")}),rumext.v2.jsx("div",{'className':"main_ui_onboarding_team_choice__action-buttons",'children':rumext.v2.jsx("button",{'onClick':on_skip,'className':"main_ui_onboarding_team_choice__accept-button",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.choice.team-up.continue-without-a-team")})})]})]})});
});

(app.main.ui.onboarding.team_choice.team_form.displayName = "team-form");

app.main.ui.onboarding.team_choice.onboarding_team_modal = (function app$main$ui$onboarding$team_choice$onboarding_team_modal(props_58746){
var go_to_team = (props_58746["go-to-team"]);
return rumext.v2.jsx("div",{'className':"main_ui_onboarding_team_choice__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"animated"+" "+"fadeIn"+" "+("main_ui_onboarding_team_choice__modal-container" ?? ""),'children':[rumext.v2.jsx("h1",{'className':"main_ui_onboarding_team_choice__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding-v2.welcome.title")}),rumext.v2.jsxs("div",{'className':"main_ui_onboarding_team_choice__modal-sections",'children':[rumext.v2.jsx(app.main.ui.onboarding.team_choice.left_sidebar,{}),rumext.v2.jsx("div",{'className':"main_ui_onboarding_team_choice__separator"}),rumext.v2.jsx(app.main.ui.onboarding.team_choice.team_form,{'go-to-team':go_to_team})]})]})});
});

(app.main.ui.onboarding.team_choice.onboarding_team_modal.displayName = "onboarding-team-modal");


//# sourceMappingURL=app.main.ui.onboarding.team_choice.js.map
