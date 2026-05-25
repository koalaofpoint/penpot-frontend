import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.schema.js";
import "./app.main.data.notifications.js";
import "./app.main.errors.js";
import "./app.main.refs.js";
import "./app.main.repo.js";
import "./app.main.store.js";
import "./app.main.ui.components.forms.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.timers.js";
import "./app.util.webapi.js";
import "./beicon.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.settings.feedback');
app.main.ui.settings.feedback.schema_COLON_feedback_form = new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"FeedbackForm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"subject","subject",-1411880451),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(250)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"string","string",-1989541586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(250)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(5000)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-report","error-report",-2013083107),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error-href","error-href",-1882436137),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(2048)], null)], null)], null)], null);
app.main.ui.settings.feedback.feedback_form_STAR_ = (function app$main$ui$settings$feedback$feedback_form_STAR_(props_66862){
var error_report = props_66862.errorReport;
var type = props_66862.type;
var error_href = props_66862.errorHref;
var profile = rumext.v2.deref(app.main.refs.profile);
var initial = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(error_href),rumext.v2.adapt(error_report)],(function (){
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"subject","subject",-1411880451),"",new cljs.core.Keyword(null,"type","type",1174270348),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(type,""),new cljs.core.Keyword(null,"content","content",15833224),"",new cljs.core.Keyword(null,"error-href","error-href",-1882436137),error_href,new cljs.core.Keyword(null,"error-report","error-report",-2013083107),error_report], null));
}));
var form = (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.settings.feedback.schema_COLON_feedback_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial) : app.main.ui.components.forms.use_form.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),app.main.ui.settings.feedback.schema_COLON_feedback_form,new cljs.core.Keyword(null,"initial","initial",1854648214),initial));
var loading = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var report = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(error_report)],(function (){
if(cljs.core.truth_(error_report)){
return app.util.webapi.create_blob.cljs$core$IFn$_invoke$arity$2(error_report,"text/plain");
} else {
return null;
}
}));
var on_download = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(report)],(function (event){
app.util.dom.prevent_default(event);

var uri = app.util.webapi.create_uri(report);
app.util.dom.trigger_download_uri("report","text/plain",uri);

return app.util.timers.schedule_on_idle.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.webapi.revoke_uri(uri);
}));
}));
var on_succes = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(profile)],(function (_){
cljs.core.reset_BANG_(loading,false);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.feedback-sent")));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.assoc,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"touched","touched",-609134419),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"errors","errors",-908790718),cljs.core.PersistentArrayMap.EMPTY], 0));
}));
var on_error = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(profile)],(function (p__66863){
var map__66864 = p__66863;
var map__66864__$1 = cljs.core.__destructure_map(map__66864);
var error = map__66864__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66864__$1,new cljs.core.Keyword(null,"code","code",1586293142));
cljs.core.reset_BANG_(loading,false);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.Keyword(null,"feedback-disabled","feedback-disabled",232152321))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.feedback-disabled")));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.generic")));
}
}));
var on_submit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(profile)],(function (form__$1,_){
cljs.core.reset_BANG_(loading,true);

var data = new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form__$1));
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3(on_succes,on_error,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"send-user-feedback","send-user-feedback",-1832564578),data));
}));
return rumext.v2.jsxs(app.main.ui.components.forms.form,{'class':"main_ui_settings_feedback__feedback-form",'on-submit':on_submit,'form':form,'children':[rumext.v2.jsx("h2",{'className':"main_ui_settings_feedback__field-title main_ui_settings_feedback__feedback-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("feedback.title-contact-us")}),rumext.v2.jsx("p",{'className':"main_ui_settings_feedback__field-text main_ui_settings_feedback__feedback-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("feedback.subtitle")}),rumext.v2.jsx("div",{'className':"main_ui_settings_feedback__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("feedback.subject"),'name':new cljs.core.Keyword(null,"subject","subject",-1411880451),'show-success?':true})}),rumext.v2.jsxs("div",{'className':"main_ui_settings_feedback__fields-row",'children':[rumext.v2.jsx("label",{'className':"main_ui_settings_feedback__field-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("feedback.type")}),rumext.v2.jsx(app.main.ui.components.forms.select,{'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("feedback.type"),'name':new cljs.core.Keyword(null,"type","type",1174270348),'options':new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("feedback.type.idea"),new cljs.core.Keyword(null,"value","value",305978217),"idea"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("feedback.type.issue"),new cljs.core.Keyword(null,"value","value",305978217),"issue"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("feedback.type.doubt"),new cljs.core.Keyword(null,"value","value",305978217),"doubt"], null)], null)})]}),rumext.v2.jsx("div",{'className':"main_ui_settings_feedback__fields-row main_ui_settings_feedback__description",'children':rumext.v2.jsx(app.main.ui.components.forms.textarea,{'class':"main_ui_settings_feedback__feedback-description",'label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("feedback.description"),'name':new cljs.core.Keyword(null,"content","content",15833224),'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("feedback.description-placeholder"),'rows':(5)})}),rumext.v2.jsxs("div",{'className':"main_ui_settings_feedback__fields-row",'children':[rumext.v2.jsx("p",{'className':"main_ui_settings_feedback__field-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("feedback.penpot.link")}),rumext.v2.jsx(app.main.ui.components.forms.input,{'label':"",'name':new cljs.core.Keyword(null,"error-href","error-href",-1882436137),'placeholder':"https://penpot.app/",'show-success?':true}),(cljs.core.truth_(report)?rumext.v2.jsx("a",{'onClick':on_download,'className':"main_ui_settings_feedback__link main_ui_settings_feedback__download-button",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("labels.download",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["report.txt"], 0))}):null)]}),rumext.v2.jsx(app.main.ui.components.forms.submit_button_STAR_,{'label':(cljs.core.truth_(cljs.core.deref(loading))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.sending"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.send")),'className':"main_ui_settings_feedback__feedback-button-link",'disabled':cljs.core.deref(loading)}),rumext.v2.jsx("hr",{}),rumext.v2.jsx("h2",{'className':"main_ui_settings_feedback__feedback-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("feedback.other-ways-contact")}),rumext.v2.jsx("a",{'href':"https://community.penpot.app",'target':"_blank",'className':"main_ui_settings_feedback__link",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("feedback.discourse-title")}),rumext.v2.jsx("p",{'className':"main_ui_settings_feedback__field-text main_ui_settings_feedback__bottom-margin",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("feedback.discourse-subtitle1")}),rumext.v2.jsx("a",{'href':"https://x.com/penpotapp",'target':"_blank",'className':"main_ui_settings_feedback__link",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("feedback.twitter-title")}),rumext.v2.jsx("p",{'className':"main_ui_settings_feedback__field-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("feedback.twitter-subtitle1")})]});
});

(app.main.ui.settings.feedback.feedback_form_STAR_.displayName = "feedback-form*");

app.main.ui.settings.feedback.feedback_page_STAR_ = (function app$main$ui$settings$feedback$feedback_page_STAR_(props_66865){
var error_report_id = props_66865.errorReportId;
var props = props_66865;
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return app.util.dom.set_html_title(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("title.settings.feedback"));
}));

var report = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(error_report_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(app.main.errors.last_report)))?new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(app.main.errors.last_report):null);
var props__$1 = {...props, 'errorReport':report};
return rumext.v2.jsx("div",{'className':"main_ui_settings_feedback__dashboard-settings",'children':rumext.v2.jsx("div",{'className':"main_ui_settings_feedback__form-container",'children':rumext.v2.create_element(app.main.ui.settings.feedback.feedback_form_STAR_,props__$1)})});
});

(app.main.ui.settings.feedback.feedback_page_STAR_.displayName = "feedback-page*");


//# sourceMappingURL=app.main.ui.settings.feedback.js.map
