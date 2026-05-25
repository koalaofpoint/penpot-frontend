import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.schema.js";
import "./app.common.time.js";
import "./app.main.data.auth.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.refs.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.ui.components.forms.js";
import "./app.main.ui.dashboard.subscription.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.foundations.assets.raw_svg.js";
import "./app.main.ui.notifications.badge.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.settings.subscription');
app.main.ui.settings.subscription.plan_card_STAR_ = (function app$main$ui$settings$subscription$plan_card_STAR_(props_66882){
var recommended = props_66882.recommended;
var card_title_icon = props_66882.cardTitleIcon;
var editors = props_66882.editors;
var cta_text_with_icon = props_66882.ctaTextWithIcon;
var card_title = props_66882.cardTitle;
var cta_text_trial = props_66882.ctaTextTrial;
var benefits_title = props_66882.benefitsTitle;
var show_button_cta = props_66882.showButtonCta;
var cta_text = props_66882.ctaText;
var cta_link_trial = props_66882.ctaLinkTrial;
var cta_link_with_icon = props_66882.ctaLinkWithIcon;
var price_value = props_66882.priceValue;
var cta_link = props_66882.ctaLink;
var price_period = props_66882.pricePeriod;
var benefits = props_66882.benefits;
return rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__plan-card"+" "+(cljs.core.truth_(recommended)?"main_ui_settings_subscription__plan-card-highlight":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__plan-card-header",'children':[rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__plan-card-title-container",'children':[(cljs.core.truth_(card_title_icon)?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':card_title_icon,'className':"main_ui_settings_subscription__plan-title-icon",'size':"s"}):null),rumext.v2.jsx("h4",{'className':"main_ui_settings_subscription__plan-card-title",'children':card_title}),(cljs.core.truth_(recommended)?rumext.v2.jsx(app.main.ui.notifications.badge.badge_notification,{'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.recommended"),'size':new cljs.core.Keyword(null,"small","small",2133478704),'is-focus':true}):null),(cljs.core.truth_(editors)?rumext.v2.jsx("span",{'className':"main_ui_settings_subscription__plan-editors",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("subscription.settings.editors",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([editors], 0))}):null)]}),(cljs.core.truth_((function (){var and__5023__auto__ = price_value;
if(cljs.core.truth_(and__5023__auto__)){
return price_period;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__plan-price",'children':[rumext.v2.jsx("span",{'className':"main_ui_settings_subscription__plan-price-value",'children':price_value}),rumext.v2.jsxs("span",{'className':"main_ui_settings_subscription__plan-price-period",'children':[" / ",price_period]})]}):null)]}),(cljs.core.truth_(benefits_title)?rumext.v2.jsx("h5",{'className':"main_ui_settings_subscription__benefits-title",'children':benefits_title}):null),rumext.v2.jsx("ul",{'className':"main_ui_settings_subscription__benefits-list",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,benefit){
out_arr__35152__auto__.push(rumext.v2.jsxs("li",{'className':"main_ui_settings_subscription__benefit",'children':["- ",benefit]},""+(benefit ?? "")));

return out_arr__35152__auto__;
}),[],benefits)}),(cljs.core.truth_((function (){var and__5023__auto__ = cta_link_with_icon;
if(cljs.core.truth_(and__5023__auto__)){
return cta_text_with_icon;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsxs("button",{'onClick':cta_link_with_icon,'className':"main_ui_settings_subscription__cta-button main_ui_settings_subscription__more-info",'children':[cta_text_with_icon,rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':"open-link",'size':"s"})]}):null),(cljs.core.truth_((function (){var and__5023__auto__ = cta_link;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = cta_text;
if(cljs.core.truth_(and__5023__auto____$1)){
return cljs.core.not(show_button_cta);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("button",{'onClick':cta_link,'className':"main_ui_settings_subscription__cta-button"+" "+((cljs.core.not((function (){var and__5023__auto__ = cta_link_trial;
if(cljs.core.truth_(and__5023__auto__)){
return cta_text_trial;
} else {
return and__5023__auto__;
}
})()))?"main_ui_settings_subscription__bottom-link":""),'children':cta_text}):null),(cljs.core.truth_((function (){var and__5023__auto__ = cta_link;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = cta_text;
if(cljs.core.truth_(and__5023__auto____$1)){
return show_button_cta;
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"primary",'type':"button",'className':((cljs.core.not((function (){var and__5023__auto__ = cta_link_trial;
if(cljs.core.truth_(and__5023__auto__)){
return cta_text_trial;
} else {
return and__5023__auto__;
}
})()))?"main_ui_settings_subscription__bottom-button":""),'onClick':cta_link,'children':cta_text}):null),(cljs.core.truth_((function (){var and__5023__auto__ = cta_link_trial;
if(cljs.core.truth_(and__5023__auto__)){
return cta_text_trial;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("button",{'onClick':cta_link_trial,'className':"main_ui_settings_subscription__cta-button main_ui_settings_subscription__bottom-link",'children':cta_text_trial}):null)]});
});

(app.main.ui.settings.subscription.plan_card_STAR_.displayName = "plan-card*");

app.main.ui.settings.subscription.make_management_form_schema = (function app$main$ui$settings$subscription$make_management_form_schema(min_editors){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"title","title",636505583),"SeatsForm"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"min-members","min-members",1244570149),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","number","app.common.schema/number",-157963053),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),min_editors,new cljs.core.Keyword(null,"max","max",61366548),(9999)], null)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"redirect-to-payment-details","redirect-to-payment-details",-1904019116),new cljs.core.Keyword(null,"boolean","boolean",-1919418404)], null)], null);
});
app.main.ui.settings.subscription.subscribe_management_dialog = (function app$main$ui$settings$subscription$subscribe_management_dialog(props_66883){
var map__66884 = rumext.v2.util.wrap_props(props_66883);
var map__66884__$1 = cljs.core.__destructure_map(map__66884);
var subscription_type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66884__$1,new cljs.core.Keyword(null,"subscription-type","subscription-type",1621034091));
var current_subscription = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66884__$1,new cljs.core.Keyword(null,"current-subscription","current-subscription",-770910774));
var editors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66884__$1,new cljs.core.Keyword(null,"editors","editors",557792993));
var subscribe_to_trial = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66884__$1,new cljs.core.Keyword(null,"subscribe-to-trial","subscribe-to-trial",-1105082881));
var unlimited_modal_step_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((1));
var unlimited_modal_step = cljs.core.deref(unlimited_modal_step_STAR_);
var subscription_name = (cljs.core.truth_(subscribe_to_trial)?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription_type,"unlimited"))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.unlimited-trial"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.enterprise-trial")):(function (){var G__66885 = subscription_type;
switch (G__66885) {
case "professional":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.professional");

break;
case "unlimited":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.unlimited");

break;
case "enterprise":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.enterprise");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66885)].join('')));

}
})());
var min_editors = ((cljs.core.seq(editors))?cljs.core.count(editors):(1));
var initial = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(min_editors)],(function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-members","min-members",1244570149),min_editors,new cljs.core.Keyword(null,"redirect-to-payment-details","redirect-to-payment-details",-1904019116),false], null);
}));
var schema = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(min_editors)],(function (){
return app.main.ui.settings.subscription.make_management_form_schema(min_editors);
}));
var form = (app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4 ? app.main.ui.components.forms.use_form.cljs$core$IFn$_invoke$arity$4(new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"initial","initial",1854648214),initial) : app.main.ui.components.forms.use_form.call(null,new cljs.core.Keyword(null,"schema","schema",-1582001791),schema,new cljs.core.Keyword(null,"initial","initial",1854648214),initial));
var submit_in_progress = rumext.v2.use_ref(false);
var subscribe_to_unlimited = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (min_members,add_payment_details_QMARK_){
if(cljs.core.truth_(rumext.v2.ref_val(submit_in_progress))){
return null;
} else {
rumext.v2.set_ref_val_BANG_(submit_in_progress,true);

var return_url = app.main.router.encode_url(app.main.router.get_current_href());
var href = ""+"payments/subscriptions/create?type=unlimited&show="+(add_payment_details_QMARK_ ?? "")+"&quantity="+(min_members ?? "")+"&returnUrl="+(return_url ?? "");
cljs.core.reset_BANG_(form,null);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"create-trial-subscription",new cljs.core.Keyword(null,"type","type",1174270348),"unlimited",new cljs.core.Keyword(null,"quantity","quantity",-1929050694),min_members], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.router.nav_raw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),href], 0))], 0));
}
}));
var subscribe_to_enterprise = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"create-trial-subscription",new cljs.core.Keyword(null,"type","type",1174270348),"enterprise"], null)));

var return_url = app.main.router.encode_url(app.main.router.get_current_href());
var href = ""+"payments/subscriptions/create?type=enterprise&returnUrl="+(return_url ?? "");
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav_raw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),href], 0)));
}));
var handle_accept_dialog = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"open-subscription-management",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"settings",new cljs.core.Keyword(null,"section","section",-300141526),"subscription-management-modal"], null)));

var current_href_66891 = app.main.router.get_current_href();
var returnUrl_66892 = encodeURIComponent(current_href_66891);
var href_66893 = ""+"payments/subscriptions/show?returnUrl="+(returnUrl_66892 ?? "");
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav_raw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),href_66893], 0)));

return app.main.data.modal.hide_BANG_();
}));
var handle_close_dialog = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"close-subscription-modal"], null)));

return app.main.data.modal.hide_BANG_();
}));
var show_editors_list_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var show_editors_list = cljs.core.deref(show_editors_list_STAR_);
var handle_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_editors_list_STAR_,cljs.core.not);
}));
var on_submit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(current_subscription),rumext.v2.adapt(unlimited_modal_step_STAR_)],(function (form__$1){
var clean_data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form__$1),new cljs.core.Keyword(null,"clean-data","clean-data",1601974651));
var min_members = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clean_data,new cljs.core.Keyword(null,"min-members","min-members",1244570149));
var redirect_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(clean_data,new cljs.core.Keyword(null,"redirect-to-payment-details","redirect-to-payment-details",-1904019116));
if(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["unpaid",null,"canceled",null], null), null),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(current_subscription))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(unlimited_modal_step_STAR_),(2))))){
return (subscribe_to_unlimited.cljs$core$IFn$_invoke$arity$2 ? subscribe_to_unlimited.cljs$core$IFn$_invoke$arity$2(min_members,redirect_QMARK_) : subscribe_to_unlimited.call(null,min_members,redirect_QMARK_));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(unlimited_modal_step_STAR_,cljs.core.inc);
}
}));
var on_add_payments_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(form,cljs.core.update,new cljs.core.Keyword(null,"data","data",-232669377),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"redirect-to-payment-details","redirect-to-payment-details",-1904019116),true], 0));
}));
return rumext.v2.jsx("div",{'className':"main_ui_settings_subscription__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__modal-dialog",'children':[rumext.v2.jsx("button",{'onClick':handle_close_dialog,'className':"main_ui_settings_subscription__close-btn",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':"close",'size':"m"})}),rumext.v2.jsx("div",{'className':"main_ui_settings_subscription__modal-title main_ui_settings_subscription__subscription-title",'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unlimited_modal_step,(2)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.management-dialog.step-2-title"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("subscription.settings.management.dialog.title",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription_name], 0)))}),rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__modal-content",'children':[((((cljs.core.seq(editors)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(unlimited_modal_step,(2)))))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("p",{'className':"main_ui_settings_subscription__editors-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("subscription.settings.management.dialog.currently-editors-title",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(cljs.core.count(editors))], 0))}),rumext.v2.jsxs("button",{'onClick':handle_click,'className':"main_ui_settings_subscription__cta-button main_ui_settings_subscription__show-editors-button",'children':[app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.management.dialog.editors"),rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':(cljs.core.truth_(show_editors_list)?app.main.ui.ds.foundations.assets.icon.arrow_up:app.main.ui.ds.foundations.assets.icon.arrow_down),'className':"main_ui_settings_subscription__icon-dropdown",'size':"s"})]}),(cljs.core.truth_(show_editors_list)?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("p",{'className':"main_ui_settings_subscription__editors-text main_ui_settings_subscription__editors-list-warning",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.management.dialog.editors-explanation")}),rumext.v2.jsx("ul",{'className':"main_ui_settings_subscription__editors-list",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,editor){
out_arr__35152__auto__.push(rumext.v2.jsxs("li",{'className':"main_ui_settings_subscription__team-name",'children':["- ",new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(editor)]},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(editor) ?? "")));

return out_arr__35152__auto__;
}),[],editors)})]}):null)]}):null),((((((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription_type,"professional")) && (cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["enterprise",null,"unlimited",null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(current_subscription))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription_type,"unlimited")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(current_subscription),"enterprise")))))) && ((((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["unpaid",null,"canceled",null], null), null),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(current_subscription))))) && (cljs.core.not(subscribe_to_trial))))))?rumext.v2.jsx("div",{'className':"main_ui_settings_subscription__modal-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.management.dialog.downgrade")}):null),(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription_type,"unlimited");
if(and__5023__auto__){
var or__5025__auto__ = subscribe_to_trial;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["unpaid",null,"canceled",null], null), null),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(current_subscription));
}
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsxs(app.main.ui.components.forms.form,{'on-submit':on_submit,'class':"main_ui_settings_subscription__seats-form",'form':form,'children':[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unlimited_modal_step,(1)))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__editors-wrapper",'children':[rumext.v2.jsx("div",{'className':"main_ui_settings_subscription__fields-row",'children':rumext.v2.jsx(app.main.ui.components.forms.input,{'type':"number",'name':new cljs.core.Keyword(null,"min-members","min-members",1244570149),'show-error':false,'label':"",'class':"main_ui_settings_subscription__input-field"})}),rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__editors-cost",'children':[rumext.v2.jsxs("span",{'className':"main_ui_settings_subscription__modal-text-medium",'children':[(((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clean-data","clean-data",1601974651),new cljs.core.Keyword(null,"min-members","min-members",1244570149)], null)) > (25)))?rumext.v2.jsx(app.util.i18n.tr_html_STAR_,{'className':"main_ui_settings_subscription__modal-text-cap",'tagName':"span",'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("subscription.settings.management.dialog.price-month",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["175"], 0))}):null),rumext.v2.jsx(app.util.i18n.tr_html_STAR_,{'className':(((cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clean-data","clean-data",1601974651),new cljs.core.Keyword(null,"min-members","min-members",1244570149)], null)) > (25)))?"main_ui_settings_subscription__text-strikethrough":""),'tagName':"span",'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("subscription.settings.management.dialog.price-month",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([((7) * (function (){var or__5025__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"clean-data","clean-data",1601974651),new cljs.core.Keyword(null,"min-members","min-members",1244570149)], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})())], 0))})]}),rumext.v2.jsx("span",{'className':"main_ui_settings_subscription__modal-text-medium",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.management.dialog.payment-explanation")})]})]}),(cljs.core.truth_(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(form),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"errors","errors",-908790718),new cljs.core.Keyword(null,"min-members","min-members",1244570149)], null)))?rumext.v2.jsx("div",{'className':"main_ui_settings_subscription__error-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.management.dialog.input-error")}):null),rumext.v2.jsx("div",{'className':"main_ui_settings_subscription__unlimited-capped-warning",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.management.dialog.unlimited-capped-warning")}),rumext.v2.jsx("div",{'className':"main_ui_settings_subscription__modal-footer",'children':rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__action-buttons",'children':[rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.confirm-cancel"),'onClick':handle_close_dialog,'className':"main_ui_settings_subscription__cancel-button"}),rumext.v2.jsx(app.main.ui.components.forms.submit_button_STAR_,{'label':((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["unpaid",null,"canceled",null], null), null),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(current_subscription)))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.subscribe"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.continue")),'className':"main_ui_settings_subscription__primary-button"})]})})]}):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(unlimited_modal_step,(2)))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("p",{'className':"main_ui_settings_subscription__modal-text-medium",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.management-dialog.step-2-description")}),rumext.v2.jsx("div",{'className':"main_ui_settings_subscription__modal-footer",'children':rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__action-buttons",'children':[rumext.v2.jsx("input",{'type':"submit",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.management-dialog.step-2-skip-button"),'className':"main_ui_settings_subscription__cancel-button"}),rumext.v2.jsx("input",{'type':"submit",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.management-dialog.step-2-add-payment-button"),'onClick':on_add_payments_click,'className':"main_ui_settings_subscription__primary-button"})]})})]}):null)]}):rumext.v2.jsx("div",{'className':"main_ui_settings_subscription__modal-footer",'children':rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__action-buttons",'children':[rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.confirm-cancel"),'onClick':handle_close_dialog,'className':"main_ui_settings_subscription__cancel-button"}),rumext.v2.jsx("input",{'type':"button",'value':(cljs.core.truth_(subscribe_to_trial)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.start-trial"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.continue")),'onClick':(cljs.core.truth_((function (){var or__5025__auto__ = subscribe_to_trial;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["unpaid",null,"canceled",null], null), null),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(current_subscription));
}
})())?subscribe_to_enterprise:handle_accept_dialog),'className':"main_ui_settings_subscription__primary-button"})]})}))]})]})});
});

(app.main.ui.settings.subscription.subscribe_management_dialog.displayName = "subscribe-management-dialog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"management-dialog","management-dialog",-1692469763),app.main.ui.settings.subscription.subscribe_management_dialog);
}));
app.main.ui.settings.subscription.subscription_success_dialog = (function app$main$ui$settings$subscription$subscription_success_dialog(props_66886){
var map__66887 = rumext.v2.util.wrap_props(props_66886);
var map__66887__$1 = cljs.core.__destructure_map(map__66887);
var subscription_name = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__66887__$1,new cljs.core.Keyword(null,"subscription-name","subscription-name",-649250617));
var profile = rumext.v2.deref(app.main.refs.profile);
var handle_close_dialog = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"subscription-success"], null)));

return app.main.data.modal.hide_BANG_();
}));
return rumext.v2.jsx("div",{'className':"main_ui_settings_subscription__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__modal-dialog main_ui_settings_subscription__subscription-success",'children':[rumext.v2.jsx("button",{'onClick':handle_close_dialog,'className':"main_ui_settings_subscription__close-btn",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':"close",'size':"m"})}),rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__modal-success-content",'children':[rumext.v2.jsx("div",{'className':"main_ui_settings_subscription__modal-start",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.raw_svg.raw_svg_STAR_,{'id':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("light",new cljs.core.Keyword(null,"theme","theme",-1247880880).cljs$core$IFn$_invoke$arity$1(profile)))?"logo-subscription-light":"logo-subscription")})}),rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__modal-end",'children':[rumext.v2.jsx("div",{'className':"main_ui_settings_subscription__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("subscription.settings.sucess.dialog.title",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription_name], 0))}),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(subscription_name,"professional"))?rumext.v2.jsx("p",{'className':"main_ui_settings_subscription__modal-text-large",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("subscription.settings.success.dialog.thanks",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription_name], 0))}):null),rumext.v2.jsx("p",{'className':"main_ui_settings_subscription__modal-text-large",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.success.dialog.description")}),rumext.v2.jsx("p",{'className':"main_ui_settings_subscription__modal-text-large",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.sucess.dialog.footer")}),rumext.v2.jsx("div",{'className':"main_ui_settings_subscription__success-action-buttons",'children':rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close"),'onClick':handle_close_dialog,'className':"main_ui_settings_subscription__primary-button"})})]})]})]})});
});

(app.main.ui.settings.subscription.subscription_success_dialog.displayName = "subscription-success-dialog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"subscription-success","subscription-success",150990068),app.main.ui.settings.subscription.subscription_success_dialog);
}));
app.main.ui.settings.subscription.subscription_page_STAR_ = (function app$main$ui$settings$subscription$subscription_page_STAR_(props_66888){
var profile = props_66888.profile;
var route = rumext.v2.deref(app.main.refs.route);
var authenticated_QMARK_ = app.main.data.auth.is_authenticated_QMARK_(profile);
var params_subscription = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(route)));
var show_trial_subscription_modal_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(params_subscription,"subscription-to-penpot-unlimited")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(params_subscription,"subscription-to-penpot-enterprise")));
var show_subscription_success_modal_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(params_subscription,"subscribed-to-penpot-unlimited")) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(params_subscription,"subscribed-to-penpot-enterprise")));
var success_modal_is_trial_QMARK_ = new cljs.core.Keyword(null,"trial","trial",-677458347).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"query","query",-1288509510).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(route)));
var subscription_editors = new cljs.core.Keyword(null,"editors","editors",557792993).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(profile)));
var subscription = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(profile));
var subscription_type = app.main.ui.dashboard.subscription.get_subscription_type(subscription);
var subscription_is_trial_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(subscription),"trialing");
var member_since = app.common.time.format_inst.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"created-at","created-at",-89248644).cljs$core$IFn$_invoke$arity$1(profile),"d MMMM, yyyy");
var subscribed_since = app.common.time.format_inst.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"start-date","start-date",295168731).cljs$core$IFn$_invoke$arity$1(subscription),"d MMMM, yyyy");
var go_to_pricing_page = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"explore-pricing-click",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"settings",new cljs.core.Keyword(null,"section","section",-300141526),"subscription"], null)));

return app.util.dom.open_new_window.cljs$core$IFn$_invoke$arity$1("https://penpot.app/pricing");
}));
var go_to_payments = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"open-subscription-management",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"settings",new cljs.core.Keyword(null,"section","section",-300141526),"subscription"], null)));

var current_href = app.main.router.get_current_href();
var returnUrl = encodeURIComponent(current_href);
var href = ""+"payments/subscriptions/show?returnUrl="+(returnUrl ?? "");
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav_raw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),href], 0)));
}));
var open_subscription_modal = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(subscription_editors)],(function (subscription_type__$1,current_subscription){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"open-subscription-modal",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"settings:in-app"], null)));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"management-dialog","management-dialog",-1692469763),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"subscription-type","subscription-type",1621034091),subscription_type__$1,new cljs.core.Keyword(null,"current-subscription","current-subscription",-770910774),current_subscription,new cljs.core.Keyword(null,"editors","editors",557792993),subscription_editors,new cljs.core.Keyword(null,"subscribe-to-trial","subscribe-to-trial",-1105082881),cljs.core.not(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(subscription))], null)));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return app.util.dom.set_html_title(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.labels"));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(authenticated_QMARK_),rumext.v2.adapt(show_subscription_success_modal_QMARK_),rumext.v2.adapt(show_trial_subscription_modal_QMARK_),rumext.v2.adapt(success_modal_is_trial_QMARK_),rumext.v2.adapt(subscription)],(function (){
if(authenticated_QMARK_){
if(show_trial_subscription_modal_QMARK_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"open-subscription-modal",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"settings:from-pricing-page"], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"management-dialog","management-dialog",-1692469763),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"subscription-type","subscription-type",1621034091),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(params_subscription,"subscription-to-penpot-unlimited"))?"unlimited":"enterprise"),new cljs.core.Keyword(null,"current-subscription","current-subscription",-770910774),subscription,new cljs.core.Keyword(null,"editors","editors",557792993),subscription_editors,new cljs.core.Keyword(null,"subscribe-to-trial","subscribe-to-trial",-1105082881),cljs.core.not(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(subscription))], null)),app.main.router.nav.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"settings-subscription","settings-subscription",11670706),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.router","replace","app.main.router/replace",466128885),true], null)], 0))], 0));
} else {
if(show_subscription_success_modal_QMARK_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"subscription-success","subscription-success",150990068),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"subscription-name","subscription-name",-649250617),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(params_subscription,"subscribed-to-penpot-unlimited"))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(success_modal_is_trial_QMARK_,"true"))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.unlimited-trial"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.unlimited")):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(success_modal_is_trial_QMARK_,"true"))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.enterprise-trial"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.enterprise")))], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.router.nav.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"settings-subscription","settings-subscription",11670706),cljs.core.PersistentArrayMap.EMPTY,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword("app.main.router","replace","app.main.router/replace",466128885),true], null)], 0))], 0));
} else {
return null;
}
}
} else {
return null;
}
}));

return rumext.v2.jsx("section",{'className':"main_ui_settings_subscription__dashboard-section",'children':rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__dashboard-content",'children':[rumext.v2.jsx("h2",{'className':"main_ui_settings_subscription__title-section",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.labels")}),rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__your-subscription",'children':[rumext.v2.jsx("h3",{'className':"main_ui_settings_subscription__plan-section-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.section-plan")}),(function (){var G__66889 = subscription_type;
switch (G__66889) {
case "professional":
return rumext.v2.jsx(app.main.ui.settings.subscription.plan_card_STAR_,{'cardTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.professional"),'benefits':new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.professional.storage-benefit"),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.professional.autosave-benefit"),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.professional.teams-editors-benefit")], null)});

break;
case "unlimited":
if(subscription_is_trial_QMARK_){
return rumext.v2.jsx(app.main.ui.settings.subscription.plan_card_STAR_,{'ctaLinkTrial':go_to_payments,'cardTitleIcon':app.main.ui.ds.foundations.assets.icon.character_u,'cardTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.unlimited-trial"),'editors':new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(profile))),'benefits':new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.unlimited.storage-benefit"),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.unlimited.autosave-benefit"),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.unlimited.bill")], null),'ctaTextTrial':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.add-payment-to-continue"),'ctaLink':go_to_payments,'ctaText':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.manage-your-subscription"),'benefitsTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.benefits.all-professional-benefits")});
} else {
return rumext.v2.jsx(app.main.ui.settings.subscription.plan_card_STAR_,{'cardTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.unlimited"),'cardTitleIcon':app.main.ui.ds.foundations.assets.icon.character_u,'benefitsTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.benefits.all-unlimited-benefits"),'benefits':new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.unlimited.storage-benefit"),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.unlimited.autosave-benefit"),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.unlimited.bill")], null),'ctaText':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.manage-your-subscription"),'ctaLink':go_to_payments,'editors':new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(profile)))});
}

break;
case "enterprise":
if(subscription_is_trial_QMARK_){
return rumext.v2.jsx(app.main.ui.settings.subscription.plan_card_STAR_,{'cardTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.enterprise-trial"),'cardTitleIcon':app.main.ui.ds.foundations.assets.icon.character_e,'benefitsTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.benefits.all-unlimited-benefits"),'benefits':new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.enterprise.unlimited-storage-benefit"),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.enterprise.autosave"),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.enterprise.capped-bill")], null),'ctaText':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.manage-your-subscription"),'ctaLink':go_to_payments,'ctaTextTrial':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.add-payment-to-continue"),'ctaLinkTrial':go_to_payments});
} else {
return rumext.v2.jsx(app.main.ui.settings.subscription.plan_card_STAR_,{'cardTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.enterprise"),'cardTitleIcon':app.main.ui.ds.foundations.assets.icon.character_e,'benefitsTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.benefits.all-unlimited-benefits"),'benefits':new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.enterprise.unlimited-storage-benefit"),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.enterprise.autosave"),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.enterprise.capped-bill")], null),'ctaText':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.manage-your-subscription"),'ctaLink':go_to_payments});
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__66889)].join('')));

}
})(),rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__membership-container",'children':[(cljs.core.truth_((function (){var and__5023__auto__ = subscribed_since;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(subscription_type,"professional");
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__membership",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'className':"main_ui_settings_subscription__subscription-member",'iconId':"crown",'size':"m"}),rumext.v2.jsx("span",{'className':"main_ui_settings_subscription__membership-date",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("subscription.settings.support-us-since",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscribed_since], 0))})]}):null),rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__membership",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'className':"main_ui_settings_subscription__penpot-member",'iconId':"user",'size':"m"}),rumext.v2.jsx("span",{'className':"main_ui_settings_subscription__membership-date",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("subscription.settings.member-since",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([member_since], 0))})]})]})]}),rumext.v2.jsxs("div",{'className':"main_ui_settings_subscription__other-subscriptions",'children':[rumext.v2.jsx("h3",{'className':"main_ui_settings_subscription__plan-section-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.other-plans")}),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(subscription_type,"professional"))?rumext.v2.jsx(app.main.ui.settings.subscription.plan_card_STAR_,{'cardTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.professional"),'priceValue':"$0",'pricePeriod':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.price-editor-month"),'benefits':new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.professional.storage-benefit"),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.professional.autosave-benefit"),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.professional.teams-editors-benefit")], null),'ctaText':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.subscribe"),'ctaLink':(function (){
return (open_subscription_modal.cljs$core$IFn$_invoke$arity$1 ? open_subscription_modal.cljs$core$IFn$_invoke$arity$1("professional") : open_subscription_modal.call(null,"professional"));
}),'ctaTextWithIcon':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.more-information"),'ctaLinkWithIcon':go_to_pricing_page}):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(subscription_type,"unlimited"))?rumext.v2.jsx(app.main.ui.settings.subscription.plan_card_STAR_,{'ctaLinkWithIcon':go_to_pricing_page,'showButtonCta':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription_type,"professional"),'cardTitleIcon':app.main.ui.ds.foundations.assets.icon.character_u,'cardTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.unlimited"),'benefits':new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.unlimited.storage-benefit"),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.unlimited.autosave-benefit"),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.unlimited.bill")], null),'priceValue':"$7",'ctaTextWithIcon':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.more-information"),'ctaLink':(function (){
return (open_subscription_modal.cljs$core$IFn$_invoke$arity$2 ? open_subscription_modal.cljs$core$IFn$_invoke$arity$2("unlimited",subscription) : open_subscription_modal.call(null,"unlimited",subscription));
}),'ctaText':(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(subscription))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.subscribe"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.try-it-free")),'benefitsTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.benefits.all-professional-benefits"),'recommended':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription_type,"professional"),'pricePeriod':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.price-editor-month")}):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(subscription_type,"enterprise"))?rumext.v2.jsx(app.main.ui.settings.subscription.plan_card_STAR_,{'ctaLinkWithIcon':go_to_pricing_page,'showButtonCta':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription_type,"professional"),'cardTitleIcon':app.main.ui.ds.foundations.assets.icon.character_e,'cardTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.enterprise"),'benefits':new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.enterprise.unlimited-storage-benefit"),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.enterprise.autosave"),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.enterprise.capped-bill")], null),'priceValue':"$950",'ctaTextWithIcon':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.more-information"),'ctaLink':(function (){
return (open_subscription_modal.cljs$core$IFn$_invoke$arity$2 ? open_subscription_modal.cljs$core$IFn$_invoke$arity$2("enterprise",subscription) : open_subscription_modal.call(null,"enterprise",subscription));
}),'ctaText':(cljs.core.truth_(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(subscription))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.subscribe"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.try-it-free")),'benefitsTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.benefits.all-unlimited-benefits"),'pricePeriod':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.price-organization-month")}):null)]})]})});
});

(app.main.ui.settings.subscription.subscription_page_STAR_.displayName = "subscription-page*");


//# sourceMappingURL=app.main.ui.settings.subscription.js.map
