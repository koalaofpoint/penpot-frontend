import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.uri.js";
import "./app.config.js";
import "./app.main.data.common.js";
import "./app.main.data.dashboard.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.dom.normalize_wheel.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./app.util.storage.js";
import "./okulary.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.templates');
app.main.ui.dashboard.templates.arrow_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_templates__arrow-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-arrow"})});
app.main.ui.dashboard.templates.download_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_templates__download-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-add"})});
app.main.ui.dashboard.templates.builtin_templates = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"builtin-templates","builtin-templates",698520902),app.main.store.state);
app.main.ui.dashboard.templates.import_template_BANG_ = (function app$main$ui$dashboard$templates$import_template_BANG_(template,team_id,project_id,default_project_id,section){
var on_finish = (function app$main$ui$dashboard$templates$import_template_BANG__$_on_finish(){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.dashboard.fetch_recent_files.cljs$core$IFn$_invoke$arity$1(team_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"import-template-finish",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard",new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(template),new cljs.core.Keyword(null,"section","section",-300141526),section], null)),(((!((project_id == null))))?null:app.main.data.common.go_to_dashboard_recent.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"project-id","project-id",206449307),default_project_id], 0)))], 0));
});
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"import-template-launch",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard",new cljs.core.Keyword(null,"template","template",-702405684),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(template),new cljs.core.Keyword(null,"section","section",-300141526),section], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.Keyword(null,"project-id","project-id",206449307),(function (){var or__5025__auto__ = project_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return default_project_id;
}
})(),new cljs.core.Keyword(null,"files","files",-472457450),cljs.core.PersistentVector.EMPTY,new cljs.core.Keyword(null,"template","template",-702405684),template,new cljs.core.Keyword(null,"on-finish-import","on-finish-import",1088832986),on_finish], null))], 0));
});
app.main.ui.dashboard.templates.title_STAR_ = (function app$main$ui$dashboard$templates$title_STAR_(props_58556){
var is_collapsed = props_58556.isCollapsed;
var on_click = props_58556.onClick;
var on_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_click)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
app.util.dom.stop_propagation(event);

app.util.dom.prevent_default(event);

return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'className':"main_ui_dashboard_templates__title",'children':rumext.v2.jsxs("button",{'tabIndex':"0",'onClick':on_click,'onKeyDown':on_key_down,'className':"main_ui_dashboard_templates__title-btn",'children':[rumext.v2.jsx("span",{'className':"main_ui_dashboard_templates__title-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.libraries-and-templates")}),((is_collapsed)?rumext.v2.jsxs("span",{'className':"main_ui_dashboard_templates__title-icon-container",'children':[rumext.v2.jsx("span",{'className':"main_ui_dashboard_templates__title-icon-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.show")}),rumext.v2.jsx("span",{'className':"main_ui_dashboard_templates__title-icon main_ui_dashboard_templates__title-icon-collapsed",'children':app.main.ui.dashboard.templates.arrow_icon})]}):rumext.v2.jsxs("span",{'className':"main_ui_dashboard_templates__title-icon-container",'children':[rumext.v2.jsx("span",{'className':"main_ui_dashboard_templates__title-icon-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.hide")}),rumext.v2.jsx("span",{'className':"main_ui_dashboard_templates__title-icon",'children':app.main.ui.dashboard.templates.arrow_icon})]}))]})});
});

(app.main.ui.dashboard.templates.title_STAR_.displayName = "title*");

app.main.ui.dashboard.templates.card_item = (function app$main$ui$dashboard$templates$card_item(props_58559){
var on_import = (props_58559["on-import"]);
var collapsed = props_58559.collapsed;
var index = props_58559.index;
var item = props_58559.item;
var is_visible = (props_58559["is-visible"]);
var id = ""+"card-container-"+(index ?? "");
var href = app.common.uri.join.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.config.public_uri,""+"images/thumbnails/template-"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item) ?? "")+".jpg"], 0));
var hover_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_import)],(function (event){
return (on_import.cljs$core$IFn$_invoke$arity$2 ? on_import.cljs$core$IFn$_invoke$arity$2(item,event) : on_import.call(null,item,event));
}));
var on_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_import)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
app.util.dom.stop_propagation(event);

return (on_import.cljs$core$IFn$_invoke$arity$2 ? on_import.cljs$core$IFn$_invoke$arity$2(item,event) : on_import.call(null,item,event));
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'tabIndex':(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.not(is_visible);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return collapsed;
}
})())?"-1":"0"),'id':id,'data-index':index,'className':"main_ui_dashboard_templates__card-container",'children':rumext.v2.jsxs("a",{'onClick':on_click,'onMouseDown':app.util.dom.prevent_default,'onMouseEnter':(function (){
return cljs.core.reset_BANG_(hover_QMARK_,true);
}),'onMouseLeave':(function (){
return cljs.core.reset_BANG_(hover_QMARK_,false);
}),'onKeyDown':on_key_down,'className':"main_ui_dashboard_templates__template-card",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_templates__img-container",'children':rumext.v2.jsx("img",{'src':""+(href ?? ""),'alt':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item),'loading':"lazy",'decoding':"async"})}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_templates__card-name",'children':[rumext.v2.jsx("span",{'className':"main_ui_dashboard_templates__card-text",'children':(cljs.core.truth_(cljs.core.deref(hover_QMARK_))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.template.add-to-project"):new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item))}),app.main.ui.dashboard.templates.download_icon]})]})});
});

(app.main.ui.dashboard.templates.card_item.displayName = "card-item");

app.main.ui.dashboard.templates.card_item_link = (function app$main$ui$dashboard$templates$card_item_link(props_58560){
var collapsed = props_58560.collapsed;
var section = props_58560.section;
var total = props_58560.total;
var is_visible = (props_58560["is-visible"]);
var id = ""+"card-container-"+(total ?? "");
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(section)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"explore-libraries-click",new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"dashboard",new cljs.core.Keyword(null,"section","section",-300141526),section], null)));
}));
var on_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_click)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
app.util.dom.stop_propagation(event);

return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(event) : on_click.call(null,event));
} else {
return null;
}
}));
return rumext.v2.jsx("div",{'className':"main_ui_dashboard_templates__card-container",'children':rumext.v2.jsx("div",{'className':"main_ui_dashboard_templates__template-card",'children':rumext.v2.jsx("div",{'className':"main_ui_dashboard_templates__img-container",'children':rumext.v2.jsx("a",{'id':id,'tabIndex':(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.not(is_visible);
if(or__5025__auto__){
return or__5025__auto__;
} else {
return collapsed;
}
})())?"-1":"0"),'href':"https://penpot.app/libraries-templates",'target':"_blank",'onClick':on_click,'onKeyDown':on_key_down,'children':rumext.v2.jsxs("div",{'className':"main_ui_dashboard_templates__template-link",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_templates__template-link-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.libraries-and-templates")}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_templates__template-link-text",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.libraries-and-templates.explore")})]})})})})});
});

(app.main.ui.dashboard.templates.card_item_link.displayName = "card-item-link");

app.main.ui.dashboard.templates.templates_section_STAR_ = (function app$main$ui$dashboard$templates$templates_section_STAR_(props_58562){
var project_id = props_58562.projectId;
var profile = props_58562.profile;
var team_id = props_58562.teamId;
var default_project_id = props_58562.defaultProjectId;
var templates = rumext.v2.deref(app.main.ui.dashboard.templates.builtin_templates);
var templates__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(templates)],(function (){
return cljs.core.filterv((function (p1__58561_SHARP_){
return ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__58561_SHARP_),"welcome")) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__58561_SHARP_),"tutorial-for-beginners")));
}),templates);
}));
var route = rumext.v2.deref(app.main.refs.route);
var route_name = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(route,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"data","data",-232669377),new cljs.core.Keyword(null,"name","name",1843675177)], null));
var section = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(route_name,new cljs.core.Keyword(null,"dashboard-files","dashboard-files",-1779590854)))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(project_id,default_project_id))?"dashboard-drafts":"dashboard-project"):cljs.core.name(route_name));
var collapsed_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.util.storage.global,new cljs.core.Keyword("app.main.ui.dashboard.templates","collapsed","app.main.ui.dashboard.templates/collapsed",1868771256));
}));
var collapsed = cljs.core.deref(collapsed_STAR_);
var can_move = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),false,new cljs.core.Keyword(null,"right","right",-452581833),true], null));
var total = cljs.core.count(templates__$1);
var content_ref = rumext.v2.use_ref();
var on_toggle_collapse = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_event){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(collapsed_STAR_,cljs.core.not);
}));
var on_wheel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var event_STAR_ = app.util.dom.normalize_wheel.normalize_wheel(event);
var deltaY = event_STAR_.spinY;
var deltaX = event_STAR_.spinX;
var node = rumext.v2.ref_val(content_ref);
if((cljs.core.abs(deltaY) > cljs.core.abs(deltaX))){
return node.scrollBy(({"left": ((300) * deltaY), "mode": "smooth"}));
} else {
return null;
}
}));
var on_scroll = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
var scroll = app.util.dom.get_target_scroll(e);
var scroll_left = new cljs.core.Keyword(null,"scroll-left","scroll-left",-211761103).cljs$core$IFn$_invoke$arity$1(scroll);
var scroll_available = (new cljs.core.Keyword(null,"scroll-width","scroll-width",-752407930).cljs$core$IFn$_invoke$arity$1(scroll) - scroll_left);
var client_rect = app.util.dom.get_client_size(app.util.dom.get_target(e));
var client_width = (client_rect["width"]);
return cljs.core.reset_BANG_(can_move,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"left","left",-399115937),(scroll_left > (0)),new cljs.core.Keyword(null,"right","right",-452581833),(scroll_available > client_width)], null));
}));
var on_move_left = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
if(cljs.core.truth_(app.util.keyboard.right_arrow_QMARK_(event))){
return app.util.dom.scroll_by_BANG_.cljs$core$IFn$_invoke$arity$3(rumext.v2.ref_val(content_ref),(300),(0));
} else {
return app.util.dom.scroll_by_BANG_.cljs$core$IFn$_invoke$arity$3(rumext.v2.ref_val(content_ref),(-300),(0));
}
}));
var on_move_right = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
if(cljs.core.truth_(app.util.keyboard.left_arrow_QMARK_(event))){
return app.util.dom.scroll_by_BANG_.cljs$core$IFn$_invoke$arity$3(rumext.v2.ref_val(content_ref),(-300),(0));
} else {
return app.util.dom.scroll_by_BANG_.cljs$core$IFn$_invoke$arity$3(rumext.v2.ref_val(content_ref),(300),(0));
}
}));
var on_import_template = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(default_project_id),rumext.v2.adapt(project_id),rumext.v2.adapt(section),rumext.v2.adapt(templates__$1),rumext.v2.adapt(team_id)],(function (template,_event){
return app.main.ui.dashboard.templates.import_template_BANG_(template,team_id,project_id,default_project_id,section);
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(templates__$1)],(function (){
var content = rumext.v2.ref_val(content_ref);
if((((!((content == null)))) && ((!((templates__$1 == null)))))){
app.util.dom.scroll_to.cljs$core$IFn$_invoke$arity$2(content,({"behavior": "instant", "left": (0), "top": (0)}));

return app.util.dom.dispatch_event(content,app.util.dom.event.cljs$core$IFn$_invoke$arity$1("scroll"));
} else {
return null;
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(profile),rumext.v2.adapt(collapsed)],(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(app.util.storage.global,cljs.core.assoc,new cljs.core.Keyword("app.main.ui.dashboard.templates","collapsed","app.main.ui.dashboard.templates/collapsed",1868771256),collapsed);

if(cljs.core.truth_((function (){var and__5023__auto__ = profile;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(collapsed);
} else {
return and__5023__auto__;
}
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.fetch_builtin_templates());
} else {
return null;
}
}));

return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_templates__dashboard-templates-section"+" "+(cljs.core.truth_(collapsed)?"main_ui_dashboard_templates__collapsed":""),'children':[rumext.v2.jsx(app.main.ui.dashboard.templates.title_STAR_,{'onClick':on_toggle_collapse,'isCollapsed':collapsed}),rumext.v2.jsx("p",{'className':"main_ui_dashboard_templates__content-description",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.libraries-and-templates.description")}),rumext.v2.jsxs("div",{'onScroll':on_scroll,'onWheel':on_wheel,'ref':content_ref,'className':"main_ui_dashboard_templates__content",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,index){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.dashboard.templates.card_item,{'on-import':on_import_template,'item':cljs.core.nth.cljs$core$IFn$_invoke$arity$2(templates__$1,index),'index':index,'is-visible':true,'collapsed':collapsed},index));

return out_arr__35152__auto__;
}),[],cljs.core.range.cljs$core$IFn$_invoke$arity$1(cljs.core.count(templates__$1))),rumext.v2.jsx(app.main.ui.dashboard.templates.card_item_link,{'is-visible':true,'collapsed':collapsed,'section':section,'total':total})]}),(cljs.core.truth_(new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(can_move)))?rumext.v2.jsx("button",{'tabIndex':((collapsed)?"-1":"0"),'onClick':on_move_left,'onKeyDown':on_move_left,'className':"main_ui_dashboard_templates__move-button main_ui_dashboard_templates__move-left",'children':app.main.ui.dashboard.templates.arrow_icon}):null),(cljs.core.truth_(new cljs.core.Keyword(null,"right","right",-452581833).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(can_move)))?rumext.v2.jsx("button",{'tabIndex':(cljs.core.truth_(collapsed)?"-1":"0"),'onClick':on_move_right,'onKeyDown':on_move_right,'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.next"),'className':"main_ui_dashboard_templates__move-button main_ui_dashboard_templates__move-right",'children':app.main.ui.dashboard.templates.arrow_icon}):null)]});
});

(app.main.ui.dashboard.templates.templates_section_STAR_.displayName = "templates-section*");


//# sourceMappingURL=app.main.ui.dashboard.templates.js.map
