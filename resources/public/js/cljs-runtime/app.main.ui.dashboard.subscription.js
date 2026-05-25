import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.config.js";
import "./app.main.data.event.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.ui.components.dropdown_menu.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.product.cta.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./lambdaisland.uri.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.subscription');
app.main.ui.dashboard.subscription.get_subscription_type = (function app$main$ui$dashboard$subscription$get_subscription_type(p__52560){
var map__52561 = p__52560;
var map__52561__$1 = cljs.core.__destructure_map(map__52561);
var subscription = map__52561__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52561__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__52561__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
if(cljs.core.truth_((function (){var and__5023__auto__ = subscription;
if(cljs.core.truth_(and__5023__auto__)){
var and__5023__auto____$1 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(subscription);
if(cljs.core.truth_(and__5023__auto____$1)){
return (!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["unpaid",null,"canceled",null], null), null),status)));
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return type;
} else {
return "professional";
}
});
app.main.ui.dashboard.subscription.cta_power_up_STAR_ = (function app$main$ui$dashboard$subscription$cta_power_up_STAR_(props_52562){
var bottom_button = props_52562.bottomButton;
var bottom_button_href = props_52562.bottomButtonHref;
var has_dropdown = props_52562.hasDropdown;
var bottom_description = props_52562.bottomDescription;
var top_description = props_52562.topDescription;
var is_highlighted = props_52562.isHighlighted;
var top_title = props_52562.topTitle;
var show_data_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var show_data = cljs.core.deref(show_data_STAR_);
var handle_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_data_STAR_,cljs.core.not);
}));
var handle_navigation = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav_raw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),bottom_button_href], 0)));
}));
return rumext.v2.jsxs("div",{'onClick':handle_click,'className':"main_ui_dashboard_subscription__cta-power-up"+" "+(cljs.core.truth_(is_highlighted)?"main_ui_dashboard_subscription__highlighted":""),'children':[rumext.v2.jsxs("button",{'className':"main_ui_dashboard_subscription__cta-top-section"+" "+((cljs.core.not(has_dropdown))?"main_ui_dashboard_subscription__cta-without-dropdown":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_subscription__content",'children':[rumext.v2.jsx("span",{'className':"main_ui_dashboard_subscription__cta-title",'children':top_title}),rumext.v2.jsx("span",{'data-testid':"subscription-name",'className':"main_ui_dashboard_subscription__cta-text",'children':top_description})]}),(cljs.core.truth_(has_dropdown)?rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':(cljs.core.truth_((function (){var and__5023__auto__ = has_dropdown;
if(cljs.core.truth_(and__5023__auto__)){
return show_data;
} else {
return and__5023__auto__;
}
})())?app.main.ui.ds.foundations.assets.icon.arrow_up:app.main.ui.ds.foundations.assets.icon.arrow_down),'className':"main_ui_dashboard_subscription__icon-dropdown",'size':"s"}):null)]}),(cljs.core.truth_((function (){var and__5023__auto__ = has_dropdown;
if(cljs.core.truth_(and__5023__auto__)){
return show_data;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("div",{'className':"main_ui_dashboard_subscription__cta-bottom-section",'children':rumext.v2.jsx(app.util.i18n.tr_html_STAR_,{'content':bottom_description,'className':"main_ui_dashboard_subscription__content",'tagName':"span"})}):null),(cljs.core.truth_((function (){var and__5023__auto__ = bottom_description;
if(cljs.core.truth_(and__5023__auto__)){
return bottom_button;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_subscription__cta-bottom-section",'children':[rumext.v2.jsx("span",{'className':"main_ui_dashboard_subscription__content",'children':bottom_description}),rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"primary",'type':"button",'className':"main_ui_dashboard_subscription__cta-bottom-button",'onClick':handle_navigation,'children':bottom_button})]}):null)]});
});

(app.main.ui.dashboard.subscription.cta_power_up_STAR_.displayName = "cta-power-up*");

app.main.ui.dashboard.subscription.subscription_sidebar_STAR_ = (function app$main$ui$dashboard$subscription$subscription_sidebar_STAR_(props_52566){
var profile = props_52566.profile;
var subscription = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(profile));
var subscription_type = app.main.ui.dashboard.subscription.get_subscription_type(subscription);
var subscription_is_trial = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(subscription),"trialing");
var subscription_href = ""+(lambdaisland.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.public_uri,"#/settings/subscriptions"], 0)) ?? "");
var G__52567 = subscription_type;
switch (G__52567) {
case "professional":
return rumext.v2.jsx(app.main.ui.dashboard.subscription.cta_power_up_STAR_,{'topTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.dashboard.power-up.your-subscription"),'topDescription':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.dashboard.power-up.professional.top-title"),'bottomDescription':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.dashboard.power-up.professional.bottom-description"),'bottomButton':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.dashboard.power-up.professional.bottom-button"),'bottomButtonHref':subscription_href,'hasDropdown':false,'isHighlighted':true});

break;
case "unlimited":
if(subscription_is_trial){
return rumext.v2.jsx(app.main.ui.dashboard.subscription.cta_power_up_STAR_,{'topTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.dashboard.power-up.your-subscription"),'topDescription':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.dashboard.power-up.trial.top-title"),'bottomDescription':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("subscription.dashboard.power-up.trial.bottom-description",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription_href], 0)),'hasDropdown':true,'isHighlighted':false});
} else {
return rumext.v2.jsx(app.main.ui.dashboard.subscription.cta_power_up_STAR_,{'topTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.dashboard.power-up.your-subscription"),'topDescription':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.dashboard.power-up.unlimited-plan"),'bottomDescription':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("subscription.dashboard.power-up.unlimited.bottom-text",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([subscription_href], 0)),'hasDropdown':true,'isHighlighted':false});
}

break;
case "enterprise":
if(subscription_is_trial){
return rumext.v2.jsx(app.main.ui.dashboard.subscription.cta_power_up_STAR_,{'topTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.dashboard.power-up.your-subscription"),'topDescription':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.dashboard.power-up.enterprise-trial.top-title"),'hasDropdown':false,'isHighlighted':false});
} else {
return rumext.v2.jsx(app.main.ui.dashboard.subscription.cta_power_up_STAR_,{'topTitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.dashboard.power-up.your-subscription"),'topDescription':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.dashboard.power-up.enterprise-plan"),'hasDropdown':false,'isHighlighted':false});
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52567)].join('')));

}
});

(app.main.ui.dashboard.subscription.subscription_sidebar_STAR_.displayName = "subscription-sidebar*");

app.main.ui.dashboard.subscription.team_STAR_ = (function app$main$ui$dashboard$subscription$team_STAR_(props_52568){
var is_owner = props_52568.isOwner;
var team = props_52568.team;
var subscription = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(team);
var subscription_type = app.main.ui.dashboard.subscription.get_subscription_type(subscription);
var subscription_is_trial = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("trialing",new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(subscription));
var go_to_manage_subscription = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"open-subscription-management",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard",new cljs.core.Keyword(null,"section","section",-300141526),"team-settings"], null)));

var href = app.main.router.encode_url(app.main.router.get_current_href());
var href__$1 = ["payments/subscriptions/show?returnUrl=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(href)].join('');
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav_raw.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"href","href",-793805698),href__$1], 0)));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_subscription__team",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_subscription__team-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.dashboard.team-plan")}),rumext.v2.jsx("span",{'className':"main_ui_dashboard_subscription__team-text",'children':(function (){var G__52569 = subscription_type;
switch (G__52569) {
case "professional":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.professional");

break;
case "unlimited":
if(subscription_is_trial){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.unlimited-trial");
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.unlimited");
}

break;
case "enterprise":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.enterprise");

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52569)].join('')));

}
})()}),(cljs.core.truth_((function (){var and__5023__auto__ = is_owner;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(subscription_type,"professional");
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("button",{'onClick':go_to_manage_subscription,'data-testid':"manage-subscription-link",'className':"main_ui_dashboard_subscription__manage-subscription-link",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.settings.manage-your-subscription")}):null)]});
});

(app.main.ui.dashboard.subscription.team_STAR_.displayName = "team*");

app.main.ui.dashboard.subscription.menu_team_icon_STAR_ = (function app$main$ui$dashboard$subscription$menu_team_icon_STAR_(props_52570){
var subscription_type = props_52570.subscriptionType;
return rumext.v2.jsx("span",{'className':"main_ui_dashboard_subscription__subscription-icon-wrapper",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':(function (){var G__52571 = subscription_type;
switch (G__52571) {
case "unlimited":
return app.main.ui.ds.foundations.assets.icon.character_u;

break;
case "enterprise":
return app.main.ui.ds.foundations.assets.icon.character_e;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__52571)].join('')));

}
})(),'className':"main_ui_dashboard_subscription__subscription-icon",'size':"s",'title':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription_type,"unlimited"))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.dashboard.power-up.unlimited-plan"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.dashboard.power-up.enterprise-plan")),'data-testid':"subscription-icon"})});
});

(app.main.ui.dashboard.subscription.menu_team_icon_STAR_.displayName = "menu-team-icon*");

app.main.ui.dashboard.subscription.main_menu_power_up_STAR_ = (function app$main$ui$dashboard$subscription$main_menu_power_up_STAR_(props_52572){
var close_sub_menu = props_52572.closeSubMenu;
var go_to_subscription = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"settings-subscription","settings-subscription",11670706)));
}));
return rumext.v2.jsx(app.main.ui.components.dropdown_menu.dropdown_menu_item_STAR_,{'className':"main_ui_dashboard_subscription__menu-item",'onClick':go_to_subscription,'onKeyDown':(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (go_to_subscription.cljs$core$IFn$_invoke$arity$0 ? go_to_subscription.cljs$core$IFn$_invoke$arity$0() : go_to_subscription.call(null));
} else {
return null;
}
}),'onPointerEnter':close_sub_menu,'id':"file-menu-power-up",'children':rumext.v2.jsx("span",{'className':"main_ui_dashboard_subscription__item-name",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.workspace.header.menu.option.power-up")})});
});

(app.main.ui.dashboard.subscription.main_menu_power_up_STAR_.displayName = "main-menu-power-up*");

app.main.ui.dashboard.subscription.members_cta_STAR_ = (function app$main$ui$dashboard$subscription$members_cta_STAR_(props_52579){
return rumext.v2.jsx(app.main.ui.ds.product.cta.cta_STAR_,{'className':"main_ui_dashboard_subscription__members-cta",'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.dashboard.unlimited-members-extra-editors-cta-title"),'children':rumext.v2.jsx(app.util.i18n.tr_html_STAR_,{'tagName':"span",'className':"main_ui_dashboard_subscription__cta-message",'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("subscription.dashboard.unlimited-members-extra-editors-cta-text")})});
});

(app.main.ui.dashboard.subscription.members_cta_STAR_.displayName = "members-cta*");

app.main.ui.dashboard.subscription.dashboard_cta_STAR_ = (function app$main$ui$dashboard$subscription$dashboard_cta_STAR_(props_52580){
var profile = props_52580.profile;
var subscription = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(profile));
var subscription_type = app.main.ui.dashboard.subscription.get_subscription_type(subscription);
var go_to_subscription = ""+(lambdaisland.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.public_uri,"#/settings/subscriptions"], 0)) ?? "");
var seats = new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(subscription);
var editors = cljs.core.count(new cljs.core.Keyword(null,"editors","editors",557792993).cljs$core$IFn$_invoke$arity$1(subscription));
var cta_title = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("professional",subscription_type))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("subscription.dashboard.professional-dashboard-cta-title",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([editors], 0)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("unlimited",subscription_type))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("subscription.dashboard.unlimited-dashboard-cta-title",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([seats,editors], 0)):null));
var cta_message = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("professional",subscription_type))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("subscription.dashboard.professional-dashboard-cta-upgrade-owner",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([go_to_subscription], 0)):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("unlimited",subscription_type))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("subscription.dashboard.unlimited-dashboard-cta-upgrade-owner",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([go_to_subscription], 0)):null));
return rumext.v2.jsx(app.main.ui.ds.product.cta.cta_STAR_,{'className':"main_ui_dashboard_subscription__dashboard-cta",'title':cta_title,'children':rumext.v2.jsx(app.util.i18n.tr_html_STAR_,{'tagName':"span",'className':"main_ui_dashboard_subscription__cta-message",'content':cta_message})});
});

(app.main.ui.dashboard.subscription.dashboard_cta_STAR_.displayName = "dashboard-cta*");

app.main.ui.dashboard.subscription.show_subscription_dashboard_banner_QMARK_ = (function app$main$ui$dashboard$subscription$show_subscription_dashboard_banner_QMARK_(profile){
var subscription = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(profile));
var subscription_type = app.main.ui.dashboard.subscription.get_subscription_type(subscription);
var seats = new cljs.core.Keyword(null,"quantity","quantity",-1929050694).cljs$core$IFn$_invoke$arity$1(subscription);
var editors = cljs.core.count(new cljs.core.Keyword(null,"editors","editors",557792993).cljs$core$IFn$_invoke$arity$1(subscription));
return ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription_type,"professional")) && ((editors > (8))))) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription_type,"unlimited")) && ((((((seats < (25))) && (((editors - seats) >= (4))))) || ((((seats < (25))) && ((((editors >= (25))) && ((editors > seats)))))))))));
});
app.main.ui.dashboard.subscription.show_subscription_members_banner_QMARK_ = (function app$main$ui$dashboard$subscription$show_subscription_members_banner_QMARK_(team,profile){
var subscription = new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(team);
var subscription_type = app.main.ui.dashboard.subscription.get_subscription_type(subscription);
var seats = new cljs.core.Keyword(null,"seats","seats",936438203).cljs$core$IFn$_invoke$arity$1(subscription);
var editors = cljs.core.count(new cljs.core.Keyword(null,"editors","editors",557792993).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"subscription","subscription",1949009182).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"props","props",453281727).cljs$core$IFn$_invoke$arity$1(profile))));
var is_owner = new cljs.core.Keyword(null,"is-owner","is-owner",-1163290132).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(team));
var and__5023__auto__ = is_owner;
if(cljs.core.truth_(and__5023__auto__)){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(subscription_type,"unlimited")) && ((((seats < (25))) && (((editors - seats) >= (4))))));
} else {
return and__5023__auto__;
}
});

//# sourceMappingURL=app.main.ui.dashboard.subscription.js.map
