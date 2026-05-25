import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.schema.js";
import "./app.main.data.profile.js";
import "./app.main.store.js";
import "./app.main.ui.components.forms.js";
import "./app.main.ui.icons.js";
import "./app.util.i18n.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.onboarding.questions');
app.main.ui.onboarding.questions.step_container = (function app$main$ui$onboarding$questions$step_container(props_58694){
var form = props_58694.form;
var on_next = (props_58694["on-next"]);
var step = props_58694.step;
var children = props_58694.children;
var on_prev = (props_58694["on-prev"]);
var label = props_58694.label;
var class$ = props_58694.class;
var on_next_STAR_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_next),rumext.v2.adapt(step),rumext.v2.adapt(label)],(function (form__$1,event){
var params = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form__$1)),new cljs.core.Keyword(null,"label","label",1718410804),label),new cljs.core.Keyword(null,"step","step",1288888124),step),new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"onboarding-step");
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),params));

return (on_next.cljs$core$IFn$_invoke$arity$2 ? on_next.cljs$core$IFn$_invoke$arity$2(form__$1,event) : on_next.call(null,form__$1,event));
}));
return rumext.v2.jsxs(app.main.ui.components.forms.form,{'form':form,'on-submit':on_next_STAR_,'class':""+(class$ ?? "")+" "+("main_ui_onboarding_questions__form-wrapper" ?? ""),'children':[children,rumext.v2.jsxs("div",{'className':"main_ui_onboarding_questions__action-buttons",'children':[(((!((on_prev == null))))?rumext.v2.jsx("button",{'onClick':on_prev,'className':"main_ui_onboarding_questions__prev-button",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.previous")}):null),rumext.v2.jsx(app.main.ui.components.forms.submit_button_STAR_,{'label':(((step < (4)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.next"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.start")),'className':"main_ui_onboarding_questions__next-button"})]})]});
});

(app.main.ui.onboarding.questions.step_container.displayName = "step-container");

app.main.ui.onboarding.questions.schema_COLON_questions_form_1 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"QuestionsFormStep1"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"expected-use","expected-use",133731615),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"work","education","personal"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"role","role",-736691072),new cljs.core.PersistentVector(null, 8, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"ux","developer","student-teacher","designer","marketing","manager","other"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"role-other","role-other",-933264397),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(512)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","field","error/field",-1330531468),new cljs.core.Keyword(null,"role-other","role-other",-933264397)], null),(function (p__58695){
var map__58696 = p__58695;
var map__58696__$1 = cljs.core.__destructure_map(map__58696);
var role = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword(null,"role","role",-736691072));
var role_other = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58696__$1,new cljs.core.Keyword(null,"role-other","role-other",-933264397));
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(role,"other")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(role,"other")) && ((!(cuerdas.core.blank_QMARK_(role_other)))))));
})], null)], null);
app.main.ui.onboarding.questions.step_1 = (function app$main$ui$onboarding$questions$step_1(props_58697){
var form = props_58697.form;
var on_next = (props_58697["on-next"]);
var show_step_3 = (props_58697["show-step-3"]);
var use_options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return cljs.core.shuffle(new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.use.work"),new cljs.core.Keyword(null,"value","value",305978217),"work"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.use.education"),new cljs.core.Keyword(null,"value","value",305978217),"education"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.use.personal"),new cljs.core.Keyword(null,"value","value",305978217),"personal"], null)], null));
}));
var role_options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.shuffle(new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.select-option"),new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"key","key",-1516042587),"role",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.product-design"),new cljs.core.Keyword(null,"value","value",305978217),"ux",new cljs.core.Keyword(null,"key","key",-1516042587),"ux"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.developer"),new cljs.core.Keyword(null,"value","value",305978217),"developer",new cljs.core.Keyword(null,"key","key",-1516042587),"developer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.student-teacher"),new cljs.core.Keyword(null,"value","value",305978217),"student-teacher",new cljs.core.Keyword(null,"key","key",-1516042587),"student"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.graphic-design"),new cljs.core.Keyword(null,"value","value",305978217),"designer",new cljs.core.Keyword(null,"key","key",-1516042587),"design"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.marketing"),new cljs.core.Keyword(null,"value","value",305978217),"marketing",new cljs.core.Keyword(null,"key","key",-1516042587),"marketing"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.product-management"),new cljs.core.Keyword(null,"value","value",305978217),"manager",new cljs.core.Keyword(null,"key","key",-1516042587),"manager"], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.other-short"),new cljs.core.Keyword(null,"value","value",305978217),"other"], null));
}));
var current_role = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"role","role",-736691072));
return rumext.v2.jsxs(app.main.ui.onboarding.questions.step_container,{'form':form,'step':(1),'label':"questions:about-you",'on-next':on_next,'class':"main_ui_onboarding_questions__step-1",'children':[rumext.v2.jsx("div",{'className':"main_ui_onboarding_questions__paginator",'children':""+"1/"+((cljs.core.truth_(cljs.core.deref(show_step_3))?(4):(3)) ?? "")}),rumext.v2.jsx("img",{'src':"images/form/use-for-1.png",'alt':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.lets-get-started"),'className':"main_ui_onboarding_questions__header-image"}),rumext.v2.jsx("h1",{'className':"main_ui_onboarding_questions__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.step1.title")}),rumext.v2.jsx("p",{'className':"main_ui_onboarding_questions__modal-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.step1.subtitle")}),rumext.v2.jsxs("div",{'className':"main_ui_onboarding_questions__modal-question",'children':[rumext.v2.jsx("h3",{'className':"main_ui_onboarding_questions__modal-subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.step1.question1")}),rumext.v2.jsx(app.main.ui.components.forms.radio_buttons,{'options':use_options,'name':new cljs.core.Keyword(null,"expected-use","expected-use",133731615),'class':"main_ui_onboarding_questions__radio-btns"}),rumext.v2.jsx("h3",{'className':"main_ui_onboarding_questions__modal-subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.step3.question1")}),rumext.v2.jsx(app.main.ui.components.forms.select,{'options':role_options,'select-class':"main_ui_onboarding_questions__select-class",'default':"",'name':new cljs.core.Keyword(null,"role","role",-736691072)}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_role,"other"))?rumext.v2.jsx(app.main.ui.components.forms.input,{'name':new cljs.core.Keyword(null,"role-other","role-other",-933264397),'class':"main_ui_onboarding_questions__input-spacing",'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.other"),'show-error':false,'label':""}):null)]})]});
});

(app.main.ui.onboarding.questions.step_1.displayName = "step-1");

app.main.ui.onboarding.questions.schema_COLON_questions_form_2 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"QuestionsFormStep2"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"experience-design-tool","experience-design-tool",1120701429),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"figma","sketch","adobe-xd","canva","invision","other"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"experience-design-tool-other","experience-design-tool-other",-1840227460),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(512)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","field","error/field",-1330531468),new cljs.core.Keyword(null,"experience-design-tool-other","experience-design-tool-other",-1840227460)], null),(function (data){
var experience = new cljs.core.Keyword(null,"experience-design-tool","experience-design-tool",1120701429).cljs$core$IFn$_invoke$arity$1(data);
var experience_other = new cljs.core.Keyword(null,"experience-design-tool-other","experience-design-tool-other",-1840227460).cljs$core$IFn$_invoke$arity$1(data);
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(experience,"other")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(experience,"other")) && ((!(cuerdas.core.blank_QMARK_(experience_other)))))));
})], null)], null);
app.main.ui.onboarding.questions.step_2 = (function app$main$ui$onboarding$questions$step_2(props_58706){
var form = props_58706.form;
var on_next = (props_58706["on-next"]);
var show_step_3 = (props_58706["show-step-3"]);
var on_prev = (props_58706["on-prev"]);
var design_tool_options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.shuffle(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.figma"),new cljs.core.Keyword(null,"img-width","img-width",1169865415),"48px",new cljs.core.Keyword(null,"img-height","img-height",1572702026),"60px",new cljs.core.Keyword(null,"value","value",305978217),"figma",new cljs.core.Keyword(null,"image","image",-58725096),"images/form/figma.png"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.sketch"),new cljs.core.Keyword(null,"img-width","img-width",1169865415),"48px",new cljs.core.Keyword(null,"img-height","img-height",1572702026),"60px",new cljs.core.Keyword(null,"value","value",305978217),"sketch",new cljs.core.Keyword(null,"image","image",-58725096),"images/form/sketch.png"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.adobe-xd"),new cljs.core.Keyword(null,"img-width","img-width",1169865415),"48px",new cljs.core.Keyword(null,"img-height","img-height",1572702026),"60px",new cljs.core.Keyword(null,"value","value",305978217),"adobe-xd",new cljs.core.Keyword(null,"image","image",-58725096),"images/form/adobe-xd.png"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.canva"),new cljs.core.Keyword(null,"img-width","img-width",1169865415),"48px",new cljs.core.Keyword(null,"img-height","img-height",1572702026),"60px",new cljs.core.Keyword(null,"value","value",305978217),"canva",new cljs.core.Keyword(null,"image","image",-58725096),"images/form/canva.png"], null),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.invision"),new cljs.core.Keyword(null,"img-width","img-width",1169865415),"48px",new cljs.core.Keyword(null,"img-height","img-height",1572702026),"60px",new cljs.core.Keyword(null,"value","value",305978217),"invision",new cljs.core.Keyword(null,"image","image",-58725096),"images/form/invision.png"], null)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.other-short"),new cljs.core.Keyword(null,"value","value",305978217),"other",new cljs.core.Keyword(null,"icon","icon",1679606541),app.main.ui.icons.curve], null));
}));
var current_experience = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"experience-design-tool","experience-design-tool",1120701429));
var on_design_tool_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_experience)],(function (){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_experience,"other")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(form,app.common.data.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"experience-design-tool-other","experience-design-tool-other",-1840227460)], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(form,app.common.data.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"experience-design-tool-other","experience-design-tool-other",-1840227460)], null));
} else {
return null;
}
}));
return rumext.v2.jsxs(app.main.ui.onboarding.questions.step_container,{'form':form,'step':(2),'label':"questions:experience-design-tool",'on-next':on_next,'on-prev':on_prev,'class':"main_ui_onboarding_questions__step-2",'children':[rumext.v2.jsx("div",{'className':"main_ui_onboarding_questions__paginator",'children':""+"2/"+((cljs.core.truth_(cljs.core.deref(show_step_3))?(4):(3)) ?? "")}),rumext.v2.jsx("h1",{'className':"main_ui_onboarding_questions__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.step2.title")}),rumext.v2.jsxs("div",{'className':"main_ui_onboarding_questions__radio-wrapper",'children':[rumext.v2.jsx(app.main.ui.components.forms.image_radio_buttons,{'options':design_tool_options,'img-width':"48px",'img-height':"60px",'name':new cljs.core.Keyword(null,"experience-design-tool","experience-design-tool",1120701429),'image':true,'class':"main_ui_onboarding_questions__image-radio",'on-change':on_design_tool_change}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_experience,"other"))?rumext.v2.jsx(app.main.ui.components.forms.input,{'name':new cljs.core.Keyword(null,"experience-design-tool-other","experience-design-tool-other",-1840227460),'class':"main_ui_onboarding_questions__input-spacing",'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.other"),'show-error':false,'label':""}):null)]})]});
});

(app.main.ui.onboarding.questions.step_2.displayName = "step-2");

app.main.ui.onboarding.questions.schema_COLON_questions_form_3 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"QuestionsFormStep3"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"team-size","team-size",2116636517),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"more-than-50","31-50","11-30","2-10","freelancer","personal-project"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"planning","planning",-334758314),new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"planning-other","planning-other",147452360),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(512)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","field","error/field",-1330531468),new cljs.core.Keyword(null,"planning-other","planning-other",147452360)], null),(function (p__58711){
var map__58712 = p__58711;
var map__58712__$1 = cljs.core.__destructure_map(map__58712);
var planning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58712__$1,new cljs.core.Keyword(null,"planning","planning",-334758314));
var planning_other = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58712__$1,new cljs.core.Keyword(null,"planning-other","planning-other",147452360));
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(planning,"other")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(planning,"other")) && ((!(cuerdas.core.blank_QMARK_(planning_other)))))));
})], null)], null);
app.main.ui.onboarding.questions.step_3 = (function app$main$ui$onboarding$questions$step_3(props_58727){
var form = props_58727.form;
var on_next = (props_58727["on-next"]);
var show_step_3 = (props_58727["show-step-3"]);
var on_prev = (props_58727["on-prev"]);
var team_size_options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.select-option"),new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"key","key",-1516042587),"team-size",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.team-size.more-than-50"),new cljs.core.Keyword(null,"value","value",305978217),"more-than-50",new cljs.core.Keyword(null,"key","key",-1516042587),"more-than-50"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.team-size.31-50"),new cljs.core.Keyword(null,"value","value",305978217),"31-50",new cljs.core.Keyword(null,"key","key",-1516042587),"31-50"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.team-size.11-30"),new cljs.core.Keyword(null,"value","value",305978217),"11-30",new cljs.core.Keyword(null,"key","key",-1516042587),"11-30"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.team-size.2-10"),new cljs.core.Keyword(null,"value","value",305978217),"2-10",new cljs.core.Keyword(null,"key","key",-1516042587),"2-10"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.team-size.freelancer"),new cljs.core.Keyword(null,"value","value",305978217),"freelancer",new cljs.core.Keyword(null,"key","key",-1516042587),"freelancer"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.team-size.personal-project"),new cljs.core.Keyword(null,"value","value",305978217),"personal-project",new cljs.core.Keyword(null,"key","key",-1516042587),"personal-project"], null)], null);
}));
var planning_options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.shuffle(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.select-option"),new cljs.core.Keyword(null,"value","value",305978217),"",new cljs.core.Keyword(null,"key","key",-1516042587),"questions:what-brings-you-here",new cljs.core.Keyword(null,"disabled","disabled",-1529784218),true], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.reasons.exploring"),new cljs.core.Keyword(null,"value","value",305978217),"discover-more-about-penpot",new cljs.core.Keyword(null,"key","key",-1516042587),"discover-more-about-penpot"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.reasons.fit"),new cljs.core.Keyword(null,"value","value",305978217),"test-penpot-to-see-if-its-a-fit-for-team",new cljs.core.Keyword(null,"key","key",-1516042587),"test-penpot-to-see-if-its-a-fit-for-team"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.reasons.alternative"),new cljs.core.Keyword(null,"value","value",305978217),"alternative-to-figma",new cljs.core.Keyword(null,"key","key",-1516042587),"alternative-to-figma"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.reasons.testing"),new cljs.core.Keyword(null,"value","value",305978217),"try-out-before-using-penpot-on-premise",new cljs.core.Keyword(null,"key","key",-1516042587),"try-out-before-using-penpot-on-premise"], null)], null)),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.other-short"),new cljs.core.Keyword(null,"value","value",305978217),"other"], null));
}));
var current_planning = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"planning","planning",-334758314));
return rumext.v2.jsxs(app.main.ui.onboarding.questions.step_container,{'form':form,'step':(3),'label':"questions:about-your-job",'on-next':on_next,'on-prev':on_prev,'class':"main_ui_onboarding_questions__step-3",'children':[rumext.v2.jsx("div",{'className':"main_ui_onboarding_questions__paginator",'children':""+"3/"+((cljs.core.truth_(cljs.core.deref(show_step_3))?(4):(3)) ?? "")}),rumext.v2.jsx("h1",{'className':"main_ui_onboarding_questions__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.step3.title")}),rumext.v2.jsxs("div",{'className':"main_ui_onboarding_questions__modal-question",'children':[rumext.v2.jsx("h3",{'className':"main_ui_onboarding_questions__modal-subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.step1.question2")}),rumext.v2.jsx(app.main.ui.components.forms.select,{'options':planning_options,'select-class':"main_ui_onboarding_questions__select-class",'default':"",'name':new cljs.core.Keyword(null,"planning","planning",-334758314),'dropdown-class':"main_ui_onboarding_questions__question-dropdown"})]}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_planning,"other"))?rumext.v2.jsx(app.main.ui.components.forms.input,{'name':new cljs.core.Keyword(null,"planning-other","planning-other",147452360),'class':"main_ui_onboarding_questions__input-spacing",'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.other"),'show-error':false,'label':""}):null),rumext.v2.jsxs("div",{'className':"main_ui_onboarding_questions__modal-question",'children':[rumext.v2.jsx("h3",{'className':"main_ui_onboarding_questions__modal-subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.step3.question3")}),rumext.v2.jsx(app.main.ui.components.forms.select,{'options':team_size_options,'default':"",'select-class':"main_ui_onboarding_questions__select-class",'name':new cljs.core.Keyword(null,"team-size","team-size",2116636517)})]})]});
});

(app.main.ui.onboarding.questions.step_3.displayName = "step-3");

app.main.ui.onboarding.questions.schema_COLON_questions_form_4 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"QuestionsFormStep4"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-with","start-with",1292915726),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),"ui","wireframing","prototyping","ds","code","other"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"start-with-other","start-with-other",-1627779046),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","text","app.common.schema/text",1286758422),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(512)], null)], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("error","field","error/field",-1330531468),new cljs.core.Keyword(null,"start-with-other","start-with-other",-1627779046)], null),(function (p__58738){
var map__58739 = p__58738;
var map__58739__$1 = cljs.core.__destructure_map(map__58739);
var start_with = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58739__$1,new cljs.core.Keyword(null,"start-with","start-with",1292915726));
var start_with_other = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58739__$1,new cljs.core.Keyword(null,"start-with-other","start-with-other",-1627779046));
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(start_with,"other")) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(start_with,"other")) && ((!(cuerdas.core.blank_QMARK_(start_with_other)))))));
})], null)], null);
app.main.ui.onboarding.questions.step_4 = (function app$main$ui$onboarding$questions$step_4(props_58748){
var form = props_58748.form;
var on_next = (props_58748["on-next"]);
var show_step_3 = (props_58748["show-step-3"]);
var on_prev = (props_58748["on-prev"]);
var start_options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(cljs.core.shuffle(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.start-with.ui"),new cljs.core.Keyword(null,"value","value",305978217),"ui",new cljs.core.Keyword(null,"image","image",-58725096),"images/form/Design.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.start-with.wireframing"),new cljs.core.Keyword(null,"value","value",305978217),"wireframing",new cljs.core.Keyword(null,"image","image",-58725096),"images/form/templates.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.start-with.prototyping"),new cljs.core.Keyword(null,"value","value",305978217),"prototyping",new cljs.core.Keyword(null,"image","image",-58725096),"images/form/Prototype.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.start-with.ds"),new cljs.core.Keyword(null,"value","value",305978217),"ds",new cljs.core.Keyword(null,"image","image",-58725096),"images/form/components.png"], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.start-with.code"),new cljs.core.Keyword(null,"value","value",305978217),"code",new cljs.core.Keyword(null,"image","image",-58725096),"images/form/design-and-dev.png"], null)], null)),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.other-short"),new cljs.core.Keyword(null,"value","value",305978217),"other",new cljs.core.Keyword(null,"icon","icon",1679606541),app.main.ui.icons.curve], null));
}));
var current_start = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"start-with","start-with",1292915726));
var on_start_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_start)],(function (_,___$1){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(current_start,"other")){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(form,app.common.data.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"start-with-other","start-with-other",-1627779046)], null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(form,app.common.data.dissoc_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"start-with-other","start-with-other",-1627779046)], null));
} else {
return null;
}
}));
return rumext.v2.jsxs(app.main.ui.onboarding.questions.step_container,{'form':form,'step':(4),'label':"questions:how-start",'on-next':on_next,'on-prev':on_prev,'class':"main_ui_onboarding_questions__step-4",'children':[rumext.v2.jsx("div",{'className':"main_ui_onboarding_questions__paginator",'children':""+((cljs.core.truth_(cljs.core.deref(show_step_3))?(4):(3)) ?? "")+"/"+((cljs.core.truth_(cljs.core.deref(show_step_3))?(4):(3)) ?? "")}),rumext.v2.jsx("h1",{'className':"main_ui_onboarding_questions__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("onboarding.questions.step4.title")}),rumext.v2.jsxs("div",{'className':"main_ui_onboarding_questions__radio-wrapper",'children':[rumext.v2.jsx(app.main.ui.components.forms.image_radio_buttons,{'options':start_options,'img-width':"159px",'img-height':"120px",'name':new cljs.core.Keyword(null,"start-with","start-with",1292915726),'on-change':on_start_change}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(current_start,"other"))?rumext.v2.jsx(app.main.ui.components.forms.input,{'name':new cljs.core.Keyword(null,"start-with-other","start-with-other",-1627779046),'class':"main_ui_onboarding_questions__input-spacing",'label':"",'show-error':false,'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.other")}):null)]})]});
});

(app.main.ui.onboarding.questions.step_4.displayName = "step-4");

app.main.ui.onboarding.questions.questions_modal = (function app$main$ui$onboarding$questions$questions_modal(props_58751){
var container = rumext.v2.use_ref();
var step = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((1));
var clean_data = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var show_step_3 = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var step_1_form = (function (){var G__58752 = new cljs.core.Keyword(null,"initial","initial",1854648214);
var G__58753 = cljs.core.PersistentArrayMap.EMPTY;
var G__58754 = new cljs.core.Keyword(null,"schema","schema",-1582001791);
var G__58755 = app.main.ui.onboarding.questions.schema_COLON_questions_form_1;
return (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(G__58752,G__58753,G__58754,G__58755) : app.main.ui.components.forms.use_form.call(null,G__58752,G__58753,G__58754,G__58755));
})();
var step_2_form = (function (){var G__58756 = new cljs.core.Keyword(null,"initial","initial",1854648214);
var G__58757 = cljs.core.PersistentArrayMap.EMPTY;
var G__58758 = new cljs.core.Keyword(null,"schema","schema",-1582001791);
var G__58759 = app.main.ui.onboarding.questions.schema_COLON_questions_form_2;
return (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(G__58756,G__58757,G__58758,G__58759) : app.main.ui.components.forms.use_form.call(null,G__58756,G__58757,G__58758,G__58759));
})();
var step_3_form = (function (){var G__58760 = new cljs.core.Keyword(null,"initial","initial",1854648214);
var G__58761 = cljs.core.PersistentArrayMap.EMPTY;
var G__58762 = new cljs.core.Keyword(null,"schema","schema",-1582001791);
var G__58763 = app.main.ui.onboarding.questions.schema_COLON_questions_form_3;
return (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(G__58760,G__58761,G__58762,G__58763) : app.main.ui.components.forms.use_form.call(null,G__58760,G__58761,G__58762,G__58763));
})();
var step_4_form = (function (){var G__58764 = new cljs.core.Keyword(null,"initial","initial",1854648214);
var G__58765 = cljs.core.PersistentArrayMap.EMPTY;
var G__58766 = new cljs.core.Keyword(null,"schema","schema",-1582001791);
var G__58767 = app.main.ui.onboarding.questions.schema_COLON_questions_form_4;
return (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(G__58764,G__58765,G__58766,G__58767) : app.main.ui.components.forms.use_form.call(null,G__58764,G__58765,G__58766,G__58767));
})();
var on_next = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (form){
if(cljs.core.truth_(new cljs.core.Keyword(null,"expected-use","expected-use",133731615).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))))){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expected-use","expected-use",133731615).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))),"work")){
cljs.core.reset_BANG_(show_step_3,true);
} else {
cljs.core.reset_BANG_(show_step_3,false);
}
} else {
}

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(step,cljs.core.inc);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(clean_data,cljs.core.merge,new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form)));
}));
var on_prev = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(step,cljs.core.dec);
}));
var on_submit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(cljs.core.deref(clean_data))],(function (form){
var data = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.deref(clean_data),new cljs.core.Keyword(null,"clean-data","clean-data",1601974651).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(form))], 0));
cljs.core.reset_BANG_(clean_data,data);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.profile.mark_questions_as_answered(data));
}));
return rumext.v2.jsx("div",{'className':"main_ui_onboarding_questions__modal-overlay",'children':rumext.v2.jsx("div",{'ref':container,'className':"main_ui_onboarding_questions__modal-container",'children':(function (){var G__58768 = cljs.core.deref(step);
switch (G__58768) {
case (1):
return rumext.v2.jsx(app.main.ui.onboarding.questions.step_1,{'on-next':on_next,'on-prev':on_prev,'form':step_1_form,'show-step-3':show_step_3});

break;
case (2):
return rumext.v2.jsx(app.main.ui.onboarding.questions.step_2,{'on-next':on_next,'on-prev':on_prev,'form':step_2_form,'show-step-3':show_step_3});

break;
case (3):
if(cljs.core.truth_(cljs.core.deref(show_step_3))){
return rumext.v2.jsx(app.main.ui.onboarding.questions.step_3,{'on-next':on_next,'on-prev':on_prev,'form':step_3_form,'show-step-3':show_step_3});
} else {
return rumext.v2.jsx(app.main.ui.onboarding.questions.step_4,{'on-next':on_submit,'on-prev':on_prev,'form':step_4_form,'show-step-3':show_step_3});
}

break;
default:
if(cljs.core.truth_(cljs.core.deref(show_step_3))){

return rumext.v2.jsx(app.main.ui.onboarding.questions.step_4,{'on-next':on_submit,'on-prev':on_prev,'form':step_4_form,'show-step-3':show_step_3});
} else {
return null;
}

}
})()})});
});

(app.main.ui.onboarding.questions.questions_modal.displayName = "questions-modal");


//# sourceMappingURL=app.main.ui.onboarding.questions.js.map
