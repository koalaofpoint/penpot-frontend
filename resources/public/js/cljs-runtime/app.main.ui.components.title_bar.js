import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.ui.ds.buttons.icon_button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.components.title_bar');
app.main.ui.components.title_bar.title_bar_STAR_ = (function app$main$ui$components$title_bar$title_bar_STAR_(props_72815){
var on_collapsed = props_72815.onCollapsed;
var title_class = props_72815.titleClass;
var children = props_72815.children;
var add_icon_gap = props_72815.addIconGap;
var on_btn_click = props_72815.onBtnClick;
var collapsed = props_72815.collapsed;
var btn_title = props_72815.btnTitle;
var btn_icon = props_72815.btnIcon;
var title = props_72815.title;
var class$ = props_72815.className;
var all_clickable = props_72815.allClickable;
var collapsable = props_72815.collapsable;
return rumext.v2.jsxs("div",{'className':("main_ui_components_title_bar__title-bar"+" "+(cljs.core.truth_(all_clickable)?"main_ui_components_title_bar__all-clickable":"") ?? "")+" "+(class$ ?? ""),'children':[((collapsable)?rumext.v2.jsx("div",{'className':("main_ui_components_title_bar__title-wrapper" ?? "")+" "+(title_class ?? ""),'children':(function (){var icon_id = (cljs.core.truth_(collapsed)?"arrow-right":"arrow-down");
if(all_clickable){
return rumext.v2.jsxs("button",{'onClick':on_collapsed,'className':"main_ui_components_title_bar__icon-text-btn",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':icon_id,'size':"s",'className':"main_ui_components_title_bar__icon"}),rumext.v2.jsx("div",{'className':"main_ui_components_title_bar__title",'children':title})]});
} else {
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("button",{'onClick':on_collapsed,'className':"main_ui_components_title_bar__icon-btn",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':icon_id,'size':"s",'className':"main_ui_components_title_bar__icon"})}),rumext.v2.jsx("div",{'className':"main_ui_components_title_bar__title",'children':title})]});
}
})()}):rumext.v2.jsx("div",{'className':("main_ui_components_title_bar__title-only"+" "+(cljs.core.truth_(add_icon_gap)?"main_ui_components_title_bar__title-only-icon-gap":"") ?? "")+" "+(title_class ?? ""),'children':title})),children,(((!((on_btn_click == null))))?rumext.v2.jsx(app.main.ui.ds.buttons.icon_button.icon_button_STAR_,{'variant':"ghost",'aria-label':btn_title,'onClick':on_btn_click,'icon':btn_icon}):null)]});
});

(app.main.ui.components.title_bar.title_bar_STAR_.displayName = "title-bar*");

app.main.ui.components.title_bar.inspect_title_bar_STAR_ = (function app$main$ui$components$title_bar$inspect_title_bar_STAR_(props_72816){
var title_class = props_72816.titleClass;
var title = props_72816.title;
var class$ = props_72816.className;
return rumext.v2.jsx("div",{'className':("main_ui_components_title_bar__title-bar" ?? "")+" "+(class$ ?? ""),'children':rumext.v2.jsx("div",{'className':(title_class ?? "")+" "+("main_ui_components_title_bar__title-only main_ui_components_title_bar__inspect-title" ?? ""),'children':title})});
});

(app.main.ui.components.title_bar.inspect_title_bar_STAR_.displayName = "inspect-title-bar*");


//# sourceMappingURL=app.main.ui.components.title_bar.js.map
