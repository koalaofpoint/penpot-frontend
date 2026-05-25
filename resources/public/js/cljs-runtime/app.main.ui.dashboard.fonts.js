import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.media.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.fonts.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.repo.js";
import "./app.main.store.js";
import "./app.main.ui.components.context_menu_a11y.js";
import "./app.main.ui.components.file_uploader.js";
import "./app.main.ui.ds.product.empty_placeholder.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.notifications.context_notification.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.fonts');
app.main.ui.dashboard.fonts.accept_font_types = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(",",app.common.media.font_types)),",.ttf,application/font-woff,woff,.otf"].join('');
app.main.ui.dashboard.fonts.use_page_title = (function app$main$ui$dashboard$fonts$use_page_title(team,section){
return rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team)],(function (){
if(cljs.core.truth_(team)){
var tname = (cljs.core.truth_(new cljs.core.Keyword(null,"is-default","is-default",1401171070).cljs$core$IFn$_invoke$arity$1(team))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.your-penpot"):new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(team));
var G__82306 = section;
var G__82306__$1 = (((G__82306 instanceof cljs.core.Keyword))?G__82306.fqn:null);
switch (G__82306__$1) {
case "fonts":
return app.util.dom.set_html_title(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("title.dashboard.fonts",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tname], 0)));

break;
case "providers":
return app.util.dom.set_html_title(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("title.dashboard.font-providers",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([tname], 0)));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__82306__$1)].join('')));

}
} else {
return null;
}
}));
});
app.main.ui.dashboard.fonts.bad_font_family_tmp_QMARK_ = (function app$main$ui$dashboard$fonts$bad_font_family_tmp_QMARK_(font){
return ((cljs.core.contains_QMARK_(font,new cljs.core.Keyword(null,"font-family-tmp","font-family-tmp",1518875480))) && (cuerdas.core.blank_QMARK_(new cljs.core.Keyword(null,"font-family-tmp","font-family-tmp",1518875480).cljs$core$IFn$_invoke$arity$1(font))));
});
app.main.ui.dashboard.fonts.header_STAR_ = rumext.v2.memo_SINGLEQUOTE_((function app$main$ui$dashboard$fonts$header_STAR_(props_82308){
var section = props_82308.section;
var team = props_82308.team;
app.main.ui.dashboard.fonts.use_page_title(team,section);

return rumext.v2.jsx("header",{'data-testid':"dashboard-header",'className':"main_ui_dashboard_fonts__dashboard-header",'children':rumext.v2.jsx("div",{'id':"dashboard-fonts-title",'className':"main_ui_dashboard_fonts__dashboard-title",'children':rumext.v2.jsx("h1",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.fonts")})})});
}));

(app.main.ui.dashboard.fonts.header_STAR_.displayName = "header*");

app.main.ui.dashboard.fonts.font_variant_display_name_STAR_ = (function app$main$ui$dashboard$fonts$font_variant_display_name_STAR_(props_82309){
var variant = props_82309.variant;
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("span",{'children':app.common.media.font_weight__GT_name(new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(variant))}),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("normal",new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(variant)))?rumext.v2.jsxs("span",{'children':[" ",cuerdas.core.capital(new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(variant))]}):null)]});
});

(app.main.ui.dashboard.fonts.font_variant_display_name_STAR_.displayName = "font-variant-display-name*");

app.main.ui.dashboard.fonts.uploaded_fonts_STAR_ = (function app$main$ui$dashboard$fonts$uploaded_fonts_STAR_(props_82311){
var installed_fonts = props_82311.installedFonts;
var team = props_82311.team;
var fonts_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var fonts = cljs.core.deref(fonts_STAR_);
var font_vals = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(fonts)],(function (){
return cljs.core.not_empty(cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.val),fonts));
}));
var team_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team);
var input_ref = rumext.v2.use_ref();
var uploading_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentHashSet.EMPTY);
var uploading = cljs.core.deref(uploading_STAR_);
var disable_upload_all_QMARK_ = cljs.core.some(app.main.ui.dashboard.fonts.bad_font_family_tmp_QMARK_,fonts);
var problematic_fonts_QMARK_ = cljs.core.some(new cljs.core.Keyword(null,"height-warning?","height-warning?",1727594341),cljs.core.vals(fonts));
var on_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.dom.click(rumext.v2.ref_val(input_ref));
}));
var on_selected = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id),rumext.v2.adapt(installed_fonts)],(function (blobs){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (result){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(fonts_STAR_,app.main.data.fonts.merge_and_group_fonts,installed_fonts,result);
}),(function (error){
return console.error("error",error);
}),app.main.data.fonts.process_upload(blobs,team_id));
}));
var on_upload_STAR_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p__82323){
var map__82324 = p__82323;
var map__82324__$1 = cljs.core.__destructure_map(map__82324);
var item = map__82324__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82324__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(uploading_STAR_,cljs.core.conj,id);

return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (font){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(fonts_STAR_,cljs.core.dissoc,id);

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(uploading_STAR_,cljs.core.disj,id);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.fonts.add_font(font));
}),(function (error){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.bad-font",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.first(new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(item))], 0))));

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(fonts_STAR_,cljs.core.dissoc,id);

return console.log("error",error);
}),beicon.v2.core.delay_at_least((2000),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-font-variant","create-font-variant",-341336194),item)));
}));
var on_upload = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(fonts),rumext.v2.adapt(on_upload_STAR_)],(function (event){
var id = app.common.uuid.parse(app.util.dom.get_data(app.util.dom.get_current_target(event),"id"));
var item = cljs.core.get.cljs$core$IFn$_invoke$arity$2(fonts,id);
return (on_upload_STAR_.cljs$core$IFn$_invoke$arity$1 ? on_upload_STAR_.cljs$core$IFn$_invoke$arity$1(item) : on_upload_STAR_.call(null,item));
}));
var on_blur_name = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(installed_fonts)],(function (event){
var target = app.util.dom.get_current_target(event);
var id = app.common.uuid.parse(app.util.dom.get_data(target,"id"));
var name = app.util.dom.get_value(target);
if(cuerdas.core.blank_QMARK_(name)){
return null;
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(fonts_STAR_,app.main.data.fonts.rename_and_regroup,id,name,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([installed_fonts], 0));
}
}));
var on_change_name = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var target = app.util.dom.get_current_target(event);
var id = app.common.uuid.parse(app.util.dom.get_data(target,"id"));
var name = app.util.dom.get_value(target);
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(fonts_STAR_,cljs.core.update,id,cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"font-family-tmp","font-family-tmp",1518875480),name], 0));
}));
var on_delete = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team)],(function (event){
var id = app.common.uuid.parse(app.util.dom.get_data(app.util.dom.get_current_target(event),"id"));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(fonts_STAR_,cljs.core.dissoc,id);
}));
var on_upload_all = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(font_vals)],(function (_){
return cljs.core.run_BANG_(on_upload_STAR_,font_vals);
}));
var on_dismis_all = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(fonts)],(function (_){
return cljs.core.run_BANG_((function (p1__82310_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(fonts_STAR_,cljs.core.dissoc,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__82310_SHARP_));
}),cljs.core.vals(fonts));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_fonts__dashboard-fonts-upload",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_fonts__dashboard-fonts-hero",'children':rumext.v2.jsxs("div",{'className':"main_ui_dashboard_fonts__desc",'children':[rumext.v2.jsx("h2",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.upload-custom-fonts")}),rumext.v2.jsx(app.util.i18n.tr_html_STAR_,{'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.fonts.hero-text1")}),rumext.v2.jsxs("button",{'onClick':on_click,'tabIndex':"0",'className':"main_ui_dashboard_fonts__btn-primary",'children':[rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.add-custom-font")}),rumext.v2.jsx(app.main.ui.components.file_uploader.file_uploader,{'input-id':"font-upload",'accept':app.main.ui.dashboard.fonts.accept_font_types,'multi':true,'ref':input_ref,'on-selected':on_selected})]}),(function (){var temp__5825__auto__ = app.config.terms_of_service_uri;
if(cljs.core.truth_(temp__5825__auto__)){
var url = temp__5825__auto__;
return rumext.v2.jsx(app.main.ui.notifications.context_notification.context_notification,{'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.fonts.hero-text2",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([url], 0)),'level':new cljs.core.Keyword(null,"default","default",-1987822328),'is-html':true});
} else {
return null;
}
})(),(cljs.core.truth_(problematic_fonts_QMARK_)?rumext.v2.jsx(app.main.ui.notifications.context_notification.context_notification,{'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.fonts.warning-text"),'level':new cljs.core.Keyword(null,"warning","warning",-1685650671),'is-html':true}):null)]})}),rumext.v2.jsxs(rumext.v2.Fragment,{'children':[((cljs.core.seq(fonts))?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_fonts__font-item main_ui_dashboard_fonts__table-row",'children':[rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.fonts.fonts-added",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(cljs.core.count(fonts))], 0))}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_fonts__table-field main_ui_dashboard_fonts__options",'children':[rumext.v2.jsx("button",{'onClick':on_upload_all,'data-testid':"upload-all",'disabled':disable_upload_all_QMARK_,'className':"main_ui_dashboard_fonts__btn-primary"+" "+(cljs.core.truth_(disable_upload_all_QMARK_)?"main_ui_dashboard_fonts__disabled":""),'children':rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.fonts.upload-all")})}),rumext.v2.jsx("button",{'onClick':on_dismis_all,'data-testid':"dismiss-all",'className':"main_ui_dashboard_fonts__btn-secondary",'children':rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.fonts.dismiss-all")})})]})]}):null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__82334){
var map__82335 = p__82334;
var map__82335__$1 = cljs.core.__destructure_map(map__82335);
var item = map__82335__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82335__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
out_arr__46744__auto__.push((function (){var uploading_QMARK_ = cljs.core.contains_QMARK_(uploading,id);
var disable_upload_QMARK_ = ((uploading_QMARK_) || (app.main.ui.dashboard.fonts.bad_font_family_tmp_QMARK_(item)));
return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_fonts__font-item main_ui_dashboard_fonts__table-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_fonts__table-field main_ui_dashboard_fonts__family",'children':rumext.v2.jsx("input",{'type':"text",'data-id':""+(id ?? ""),'onBlur':on_blur_name,'onChange':on_change_name,'defaultValue':new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(item)})}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_fonts__table-field main_ui_dashboard_fonts__variants",'children':rumext.v2.jsx("span",{'className':"main_ui_dashboard_fonts__label",'children':rumext.v2.jsx(app.main.ui.dashboard.fonts.font_variant_display_name_STAR_,{'variant':item})})}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_fonts__table-field main_ui_dashboard_fonts__filenames",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto____$1,item__$1){
out_arr__46744__auto____$1.push(rumext.v2.jsx("span",{'children':item__$1},""+"name-"+(item__$1 ?? "")));

return out_arr__46744__auto____$1;
}),[],new cljs.core.Keyword(null,"names","names",-1943074658).cljs$core$IFn$_invoke$arity$1(item))}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_fonts__table-field main_ui_dashboard_fonts__options",'children':[(cljs.core.truth_(new cljs.core.Keyword(null,"height-warning?","height-warning?",1727594341).cljs$core$IFn$_invoke$arity$1(item))?rumext.v2.jsx("span",{'className':"main_ui_dashboard_fonts__icon main_ui_dashboard_fonts__failure",'children':app.main.ui.icons.msg_neutral}):null),rumext.v2.jsx("button",{'onClick':on_upload,'data-id':""+(id ?? ""),'disabled':disable_upload_QMARK_,'className':"main_ui_dashboard_fonts__btn-primary"+" "+"main_ui_dashboard_fonts__upload-button"+" "+((disable_upload_QMARK_)?"main_ui_dashboard_fonts__disabled":""),'children':((uploading_QMARK_)?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.uploading"):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.upload"))}),rumext.v2.jsx("span",{'data-id':""+(id ?? ""),'onClick':on_delete,'className':"main_ui_dashboard_fonts__icon main_ui_dashboard_fonts__close",'children':app.main.ui.icons.close})]})]},""+(id ?? ""));
})());

return out_arr__46744__auto__;
}),[],cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font-family","font-family",-667419874),font_vals))]})]});
});

(app.main.ui.dashboard.fonts.uploaded_fonts_STAR_.displayName = "uploaded-fonts*");

app.main.ui.dashboard.fonts.installed_font_context_menu = (function app$main$ui$dashboard$fonts$installed_font_context_menu(props_82344){
var is_open = (props_82344["is-open"]);
var on_close = (props_82344["on-close"]);
var on_delete = (props_82344["on-delete"]);
var on_edit = (props_82344["on-edit"]);
var options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_edit),rumext.v2.adapt(on_delete)],(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.edit"),new cljs.core.Keyword(null,"id","id",-1388402092),"font-edit",new cljs.core.Keyword(null,"handler","handler",-195596612),on_edit], null),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.delete"),new cljs.core.Keyword(null,"id","id",-1388402092),"font-delete",new cljs.core.Keyword(null,"handler","handler",-195596612),on_delete], null)], null);
}));
return rumext.v2.jsx(app.main.ui.components.context_menu_a11y.context_menu_STAR_,{'onClose':on_close,'show':is_open,'fixed':false,'minWidth':true,'top':(-15),'left':(-115),'options':options});
});

(app.main.ui.dashboard.fonts.installed_font_context_menu.displayName = "installed-font-context-menu");

app.main.ui.dashboard.fonts.installed_font = rumext.v2.memo_SINGLEQUOTE_((function app$main$ui$dashboard$fonts$installed_font(props_82355){
var variants = props_82355.variants;
var font_id = (props_82355["font-id"]);
var can_edit = (props_82355["can-edit"]);
var font = cljs.core.first(variants);
var menu_open_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var menu_open_QMARK_ = cljs.core.deref(menu_open_STAR_);
var edition_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var edition_QMARK_ = cljs.core.deref(edition_STAR_);
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(font));
var font_family = cljs.core.deref(state_STAR_);
var variants__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(variants)],(function (){
return cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2((function (item){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(item),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("normal",new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(item)))?(1):(2))], null);
}),variants);
}));
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
return cljs.core.reset_BANG_(state_STAR_,app.util.dom.get_target_val(event));
}));
var on_edit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(edition_STAR_,true);
}));
var on_menu_open = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(menu_open_STAR_,true);
}));
var on_menu_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(menu_open_STAR_,false);
}));
var on_save = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(font_family)],(function (_){
cljs.core.reset_BANG_(edition_STAR_,false);

if(cuerdas.core.blank_QMARK_(font_family)){
return null;
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.fonts.update_font(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),font_id,new cljs.core.Keyword(null,"name","name",1843675177),font_family], null)));
}
}));
var on_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_save)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
return (on_save.cljs$core$IFn$_invoke$arity$1 ? on_save.cljs$core$IFn$_invoke$arity$1(event) : on_save.call(null,event));
} else {
return null;
}
}));
var on_cancel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (_){
cljs.core.reset_BANG_(edition_STAR_,false);

return cljs.core.reset_BANG_(state_STAR_,new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(font));
}));
var on_delete_font = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(font_id)],(function (){
var options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-font.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-font.message"),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.delete"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),(function (_props){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.fonts.delete_font(font_id));
})], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(options));
}));
var on_delete_variant = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var id = app.common.uuid.parse(app.util.dom.get_data(app.util.dom.get_current_target(event),"id"));
var options = new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"confirm","confirm",-2004000608),new cljs.core.Keyword(null,"title","title",636505583),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-font-variant.title"),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.delete-font-variant.message"),new cljs.core.Keyword(null,"accept-label","accept-label",1215904838),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.delete"),new cljs.core.Keyword(null,"on-accept","on-accept",705439955),(function (_props){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.fonts.delete_font_variant(id));
})], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(options));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_fonts__font-item main_ui_dashboard_fonts__table-row",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_fonts__table-field"+" "+"main_ui_dashboard_fonts__family"+" "+(cljs.core.truth_(edition_QMARK_)?"main_ui_dashboard_fonts__is-edition":""),'children':((edition_QMARK_)?rumext.v2.jsx("input",{'type':"text",'autoFocus':true,'defaultValue':font_family,'onKeyDown':on_key_down,'onChange':on_change}):rumext.v2.jsx("span",{'children':new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(font)}))}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_fonts__table-field main_ui_dashboard_fonts__variants",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__82368){
var map__82369 = p__82368;
var map__82369__$1 = cljs.core.__destructure_map(map__82369);
var item = map__82369__$1;
var id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82369__$1,new cljs.core.Keyword(null,"id","id",-1388402092));
out_arr__46744__auto__.push(rumext.v2.jsxs("div",{'className':"main_ui_dashboard_fonts__variant"+" "+((cljs.core.not(can_edit))?"main_ui_dashboard_fonts__inhert-variant":""),'children':[rumext.v2.jsx("span",{'className':"main_ui_dashboard_fonts__label",'children':rumext.v2.jsx(app.main.ui.dashboard.fonts.font_variant_display_name_STAR_,{'variant':item})}),(cljs.core.truth_(can_edit)?rumext.v2.jsx("span",{'data-id':""+(id ?? ""),'onClick':on_delete_variant,'className':"main_ui_dashboard_fonts__icon main_ui_dashboard_fonts__close",'children':app.main.ui.icons.add}):null)]},""+(id ?? "")));

return out_arr__46744__auto__;
}),[],variants__$1)}),((edition_QMARK_)?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_fonts__table-field main_ui_dashboard_fonts__options",'children':[rumext.v2.jsx("button",{'disabled':cuerdas.core.blank_QMARK_(font_family),'onClick':on_save,'className':"main_ui_dashboard_fonts__btn-primary"+" "+((cuerdas.core.blank_QMARK_(font_family))?"main_ui_dashboard_fonts__btn-disabled":""),'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.save")}),rumext.v2.jsx("button",{'onClick':on_cancel,'className':"main_ui_dashboard_fonts__icon main_ui_dashboard_fonts__close",'children':app.main.ui.icons.close})]}):(cljs.core.truth_(can_edit)?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_fonts__table-field main_ui_dashboard_fonts__options",'children':[rumext.v2.jsx("span",{'onClick':on_menu_open,'className':"main_ui_dashboard_fonts__icon",'children':app.main.ui.icons.menu}),rumext.v2.jsx(app.main.ui.dashboard.fonts.installed_font_context_menu,{'on-close':on_menu_close,'is-open':menu_open_QMARK_,'on-delete':on_delete_font,'on-edit':on_edit})]}):null))]});
}));

(app.main.ui.dashboard.fonts.installed_font.displayName = "installed-font");

app.main.ui.dashboard.fonts.installed_fonts_STAR_ = (function app$main$ui$dashboard$fonts$installed_fonts_STAR_(props_82371){
var fonts = props_82371.fonts;
var can_edit = props_82371.canEdit;
var sterm = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("");
var matches_QMARK_ = (function (p1__82370_SHARP_){
return cuerdas.core.includes_QMARK_(cuerdas.core.lower(new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(p1__82370_SHARP_)),cljs.core.deref(sterm));
});
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var val = app.util.dom.get_target_val(event);
return cljs.core.reset_BANG_(sterm,cuerdas.core.lower(val));
}));
return rumext.v2.jsx("div",{'className':"main_ui_dashboard_fonts__dashboard-installed-fonts",'children':((cljs.core.seq(fonts))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("h3",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.installed-fonts")}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_fonts__installed-fonts-header",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_fonts__table-field main_ui_dashboard_fonts__family",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.font-family")}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_fonts__table-field main_ui_dashboard_fonts__variants",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.font-variants")}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_fonts__table-field main_ui_dashboard_fonts__search-input",'children':rumext.v2.jsx("input",{'placeholder':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.search-font"),'defaultValue':"",'onChange':on_change})})]}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__82378){
var vec__82379 = p__82378;
var font_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82379,(0),null);
var variants = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__82379,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.dashboard.fonts.installed_font,{'font-id':font_id,'can-edit':can_edit,'variants':variants},""+(font_id ?? "")+"-installed"));

return out_arr__46744__auto__;
}),[],cljs.core.group_by(new cljs.core.Keyword(null,"font-id","font-id",-390084123),cljs.core.filter.cljs$core$IFn$_invoke$arity$2(matches_QMARK_,cljs.core.vals(fonts))))]}):(((fonts == null))?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_fonts__fonts-placeholder",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_fonts__icon",'children':app.main.ui.icons.loader}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_fonts__label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.loading-fonts")})]}):((can_edit)?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_fonts__fonts-placeholder",'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_fonts__icon",'children':app.main.ui.icons.text}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_fonts__label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.fonts.empty-placeholder")})]}):rumext.v2.jsx(app.main.ui.ds.product.empty_placeholder.empty_placeholder_STAR_,{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.fonts.empty-placeholder-viewer"),'subtitle':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.fonts.empty-placeholder-viewer-sub"),'type':(2)}))
))});
});

(app.main.ui.dashboard.fonts.installed_fonts_STAR_.displayName = "installed-fonts*");

app.main.ui.dashboard.fonts.ref_COLON_fonts = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"fonts","fonts",1683167295),app.main.store.state);
app.main.ui.dashboard.fonts.fonts_page_STAR_ = (function app$main$ui$dashboard$fonts$fonts_page_STAR_(props_82383){
var team = props_82383.team;
var fonts = rumext.v2.deref(app.main.ui.dashboard.fonts.ref_COLON_fonts);
var permissions = new cljs.core.Keyword(null,"permissions","permissions",67803075).cljs$core$IFn$_invoke$arity$1(team);
var can_edit = new cljs.core.Keyword(null,"can-edit","can-edit",442089902).cljs$core$IFn$_invoke$arity$1(permissions);
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.dashboard.fonts.header_STAR_,{'team':team,'section':new cljs.core.Keyword(null,"fonts","fonts",1683167295)}),rumext.v2.jsxs("section",{'className':"main_ui_dashboard_fonts__dashboard-container main_ui_dashboard_fonts__dashboard-fonts",'children':[((can_edit)?rumext.v2.jsx(app.main.ui.dashboard.fonts.uploaded_fonts_STAR_,{'team':team,'installedFonts':fonts}):null),rumext.v2.jsx(app.main.ui.dashboard.fonts.installed_fonts_STAR_,{'team':team,'fonts':fonts,'canEdit':can_edit})]})]});
});

(app.main.ui.dashboard.fonts.fonts_page_STAR_.displayName = "fonts-page*");

app.main.ui.dashboard.fonts.font_providers_page_STAR_ = (function app$main$ui$dashboard$fonts$font_providers_page_STAR_(props_82392){
var team = props_82392.team;
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.dashboard.fonts.header_STAR_,{'team':team,'section':new cljs.core.Keyword(null,"providers","providers",543153826)}),rumext.v2.jsx("section",{'className':"main_ui_dashboard_fonts__dashboard-container",'children':rumext.v2.jsx("span",{'children':"font providers"})})]});
});

(app.main.ui.dashboard.fonts.font_providers_page_STAR_.displayName = "font-providers-page*");


//# sourceMappingURL=app.main.ui.dashboard.fonts.js.map
