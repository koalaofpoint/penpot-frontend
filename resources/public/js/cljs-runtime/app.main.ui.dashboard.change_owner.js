import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.schema.js";
import "./app.main.data.modal.js";
import "./app.main.ui.components.forms.js";
import "./app.main.ui.icons.js";
import "./app.util.i18n.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.change_owner');
app.main.ui.dashboard.change_owner.schema_COLON_leave_modal_form = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"LeaveModalForm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"member-id","member-id",606659713),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null)], null);
app.main.ui.dashboard.change_owner.leave_and_reassign_modal = (function app$main$ui$dashboard$change_owner$leave_and_reassign_modal(props_73430){
var map__73431 = rumext.v2.util.wrap_props(props_73430);
var map__73431__$1 = cljs.core.__destructure_map(map__73431);
var profile = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73431__$1,new cljs.core.Keyword(null,"profile","profile",-545963874));
var team = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73431__$1,new cljs.core.Keyword(null,"team","team",1355747699));
var accept = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__73431__$1,new cljs.core.Keyword(null,"accept","accept",1874130431));
var form = (function (){var G__73432 = new cljs.core.Keyword(null,"schema","schema",-1582001791);
var G__73433 = app.main.ui.dashboard.change_owner.schema_COLON_leave_modal_form;
var G__73434 = new cljs.core.Keyword(null,"initial","initial",1854648214);
var G__73435 = cljs.core.PersistentArrayMap.EMPTY;
return (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(G__73432,G__73433,G__73434,G__73435) : app.main.ui.components.forms.use_form.call(null,G__73432,G__73433,G__73434,G__73435));
})();
var members = cljs.core.get.cljs$core$IFn$_invoke$arity$2(team,new cljs.core.Keyword(null,"members","members",159001018));
var options = cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.leave-and-reassign.select-member-to-promote")], null)], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__73428_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(p1__73428_SHARP_),new cljs.core.Keyword(null,"email","email",1415816706).cljs$core$IFn$_invoke$arity$1(profile));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__73429_SHARP_){
return cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"value","value",305978217)],[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(p1__73429_SHARP_),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__73429_SHARP_))]);
}))),members);
var on_accept = (function (_){
var member_id = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clean-data","clean-data",1601974651),new cljs.core.Keyword(null,"member-id","member-id",606659713)], null));
return (accept.cljs$core$IFn$_invoke$arity$1 ? accept.cljs$core$IFn$_invoke$arity$1(member_id) : accept.call(null,member_id));
});
return rumext.v2.jsx("div",{'className':"main_ui_dashboard_change_owner__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_dashboard_change_owner__modal-container",'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_change_owner__modal-header",'children':[rumext.v2.jsx("h2",{'className':"main_ui_dashboard_change_owner__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.leave-and-reassign.title")}),rumext.v2.jsx("button",{'onClick':app.main.data.modal.hide_BANG_,'className':"main_ui_dashboard_change_owner__modal-close-btn",'children':app.main.ui.icons.close})]}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_change_owner__modal-content",'children':[rumext.v2.jsx("p",{'className':"main_ui_dashboard_change_owner__modal-msg",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.leave-and-reassign.hint1",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team)], 0))}),((cljs.core.empty_QMARK_(members))?rumext.v2.jsx("p",{'className':"main_ui_dashboard_change_owner__modal-msg",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.leave-and-reassign.forbidden")}):rumext.v2.jsx(rumext.v2.Fragment,{'children':rumext.v2.jsx(app.main.ui.components.forms.form,{'form':form,'children':rumext.v2.jsx(app.main.ui.components.forms.select,{'name':new cljs.core.Keyword(null,"member-id","member-id",606659713),'options':options})})}))]}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_change_owner__modal-footer",'children':rumext.v2.jsxs("div",{'className':"main_ui_dashboard_change_owner__action-buttons",'children':[rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.cancel"),'onClick':app.main.data.modal.hide_BANG_,'className':"main_ui_dashboard_change_owner__cancel-button"}),rumext.v2.jsx("input",{'className':"accept-button"+" "+("main_ui_dashboard_change_owner__accept-btn"+" "+(cljs.core.truth_(new cljs.core.Keyword(null,"valid","valid",155614240).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)))?"main_ui_dashboard_change_owner__danger":"")+" "+((cljs.core.not(new cljs.core.Keyword(null,"valid","valid",155614240).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))))?"disabled":"") ?? ""),'type':"button",'disabled':cljs.core.not(new cljs.core.Keyword(null,"valid","valid",155614240).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))),'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.leave-and-reassign.promote-and-leave"),'onClick':on_accept})]})})]})});
});

(app.main.ui.dashboard.change_owner.leave_and_reassign_modal.displayName = "leave-and-reassign-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__47156__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__47156__auto__,new cljs.core.Keyword(null,"leave-and-reassign","leave-and-reassign",-602937808),app.main.ui.dashboard.change_owner.leave_and_reassign_modal);
}));

//# sourceMappingURL=app.main.ui.dashboard.change_owner.js.map
