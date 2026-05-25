import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.schema.js";
import "./app.main.data.common.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.data.team.js";
import "./app.main.store.js";
import "./app.main.ui.components.forms.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./beicon.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.team_form');
app.main.ui.dashboard.team_form.schema_COLON_team_form = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"TeamForm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(250)], null)], null)], null)], null);
app.main.ui.dashboard.team_form.on_create_success = (function app$main$ui$dashboard$team_form$on_create_success(_form,response){
var message = "Team created successfully";
var team_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(response);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(message),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.common.go_to_dashboard_recent.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id], 0))], 0));
});
app.main.ui.dashboard.team_form.on_update_success = (function app$main$ui$dashboard$team_form$on_update_success(_form,_response){
var message = "Team created successfully";
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(message),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide()], 0));
});
app.main.ui.dashboard.team_form.on_error = (function app$main$ui$dashboard$team_form$on_error(form,_response){
var id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clean-data","clean-data",1601974651),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
if(cljs.core.truth_(id)){
return beicon.v2.core.of(app.main.data.notifications.error("Error on updating team."));
} else {
return beicon.v2.core.of(app.main.data.notifications.error("Error on creating team."));
}
});
app.main.ui.dashboard.team_form.on_create_submit = (function app$main$ui$dashboard$team_form$on_create_submit(form){
var mdata = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.dashboard.team_form.on_create_success,form),new cljs.core.Keyword(null,"on-error","on-error",1728533530),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.dashboard.team_form.on_error,form)], null);
var params = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clean-data","clean-data",1601974651),new cljs.core.Keyword(null,"name","name",1843675177)], null))], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(cljs.core.with_meta(app.main.data.team.create_team(cljs.core.with_meta(params,mdata)),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),new cljs.core.Keyword(null,"dashboard","dashboard",-631747508)], null)));
});
app.main.ui.dashboard.team_form.on_update_submit = (function app$main$ui$dashboard$team_form$on_update_submit(form){
var mdata = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.dashboard.team_form.on_update_success,form),new cljs.core.Keyword(null,"on-error","on-error",1728533530),cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.dashboard.team_form.on_error,form)], null);
var team = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.Keyword(null,"clean-data","clean-data",1601974651));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.team.update_team(cljs.core.with_meta(team,mdata)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.hide()], 0));
});
app.main.ui.dashboard.team_form.on_submit = (function app$main$ui$dashboard$team_form$on_submit(form,_){
var data = new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form));
if(cljs.core.truth_(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(data))){
return app.main.ui.dashboard.team_form.on_update_submit(form);
} else {
return app.main.ui.dashboard.team_form.on_create_submit(form);
}
});
app.main.ui.dashboard.team_form.team_form_modal = (function app$main$ui$dashboard$team_form$team_form_modal(props_52618){
var map__52619 = rumext.v2.util.wrap_props(props_52618);
var map__52619__$1 = cljs.core.__destructure_map(map__52619);
var props = map__52619__$1;
var team = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52619__$1,new cljs.core.Keyword(null,"team","team",1355747699));
var initial = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$1((function (){
var or__5025__auto__ = (function (){var G__52620 = team;
if((G__52620 == null)){
return null;
} else {
return cljs.core.select_keys(G__52620,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"id","id",-1388402092)], null));
}
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.PersistentArrayMap.EMPTY;
}
}));
var form = (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.dashboard.team_form.schema_COLON_team_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial) : app.main.ui.components.forms.use_form.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.dashboard.team_form.schema_COLON_team_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial));
var handle_keydown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(e))){
app.util.dom.prevent_default(e);

app.util.dom.stop_propagation(e);

return app.main.ui.dashboard.team_form.on_submit(form,e);
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'className':"main_ui_dashboard_team_form__modal-overlay",'children':rumext.v2.jsx("div",{'className':"main_ui_dashboard_team_form__modal-container",'children':rumext.v2.jsxs(app.main.ui.components.forms.form,{'form':form,'on-submit':app.main.ui.dashboard.team_form.on_submit,'class':"main_ui_dashboard_team_form__team-form",'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_team_form__modal-header",'children':[(cljs.core.truth_(team)?rumext.v2.jsx("h2",{'className':"main_ui_dashboard_team_form__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.rename-team")}):rumext.v2.jsx("h2",{'className':"main_ui_dashboard_team_form__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.create-team")})),rumext.v2.jsx("button",{'onClick':app.main.data.modal.hide_BANG_,'className':"main_ui_dashboard_team_form__modal-close-btn",'children':app.main.ui.icons.close})]}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team_form__modal-content",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'type':"text",'auto-focus?':true,'class':"main_ui_dashboard_team_form__group-name-input",'form':form,'name':new cljs.core.Keyword(null,"name","name",1843675177),'placeholder':"E.g. Design",'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.create-team.placeholder"),'on-key-down':handle_keydown})}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_team_form__modal-footer",'children':rumext.v2.jsx("div",{'className':"main_ui_dashboard_team_form__action-buttons",'children':rumext.v2.jsx(app.main.ui.components.forms.submit_button_STAR_,{'label':(cljs.core.truth_(team)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.update-team"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.create-team")),'className':"main_ui_dashboard_team_form__accept-btn"})})})]})})});
});

(app.main.ui.dashboard.team_form.team_form_modal.displayName = "team-form-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"team-form","team-form",1411783122),app.main.ui.dashboard.team_form.team_form_modal);
}));

//# sourceMappingURL=app.main.ui.dashboard.team_form.js.map
