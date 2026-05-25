import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.point.js";
import "./app.common.logging.js";
import "./app.common.time.js";
import "./app.config.js";
import "./app.main.data.common.js";
import "./app.main.data.dashboard.js";
import "./app.main.data.notifications.js";
import "./app.main.data.project.js";
import "./app.main.data.team.js";
import "./app.main.features.js";
import "./app.main.fonts.js";
import "./app.main.rasterizer.js";
import "./app.main.refs.js";
import "./app.main.render.js";
import "./app.main.repo.js";
import "./app.main.store.js";
import "./app.main.ui.components.color_bullet.js";
import "./app.main.ui.components.portal.js";
import "./app.main.ui.dashboard.file_menu.js";
import "./app.main.ui.dashboard.import.js";
import "./app.main.ui.dashboard.inline_edition.js";
import "./app.main.ui.dashboard.placeholder.js";
import "./app.main.ui.ds.product.loader.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.icons.js";
import "./app.main.worker.js";
import "./app.util.color.js";
import "./app.util.dom.js";
import "./app.util.dom.dnd.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./app.util.timers.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.grid');
app.common.logging.loggers.set("app.main.ui.dashboard.grid",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"debug","debug",-1608172596)));
app.main.ui.dashboard.grid.thumbnail_width = (252);
app.main.ui.dashboard.grid.persist_thumbnail = (function app$main$ui$dashboard$grid$persist_thumbnail(file_id,revn,blob){
var params = new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"revn","revn",-633391765),revn,new cljs.core.Keyword(null,"media","media",-1066138403),blob], null);
return beicon.v2.core.map(new cljs.core.Keyword(null,"id","id",-1388402092),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"create-file-thumbnail","create-file-thumbnail",-1914149111),params));
});
app.main.ui.dashboard.grid.render_thumbnail = (function app$main$ui$dashboard$grid$render_thumbnail(file_id,revn){
if(cljs.core.truth_(app.main.features.active_feature_QMARK_(cljs.core.deref(app.main.store.state),"render-wasm/v1"))){
return app.main.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword("thumbnails","generate-for-file-wasm","thumbnails/generate-for-file-wasm",-1780261229),new cljs.core.Keyword(null,"revn","revn",-633391765),revn,new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"width","width",-384071477),app.main.ui.dashboard.grid.thumbnail_width], null));
} else {
return beicon.v2.core.mapcat((function (p__58493){
var map__58494 = p__58493;
var map__58494__$1 = cljs.core.__destructure_map(map__58494);
var result = map__58494__$1;
var fonts = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58494__$1,new cljs.core.Keyword(null,"fonts","fonts",1683167295));
return beicon.v2.core.map((function (styles){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(result,new cljs.core.Keyword(null,"styles","styles",1954480375),styles,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"width","width",-384071477),app.main.ui.dashboard.grid.thumbnail_width], 0));
}),app.main.fonts.render_font_styles(fonts));
}),app.main.worker.ask_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword("thumbnails","generate-for-file","thumbnails/generate-for-file",-1533672464),new cljs.core.Keyword(null,"revn","revn",-633391765),revn,new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id,new cljs.core.Keyword(null,"width","width",-384071477),app.main.ui.dashboard.grid.thumbnail_width], null)));
}
});
/**
 * Creates some hooks to handle the files thumbnails cache
 */
app.main.ui.dashboard.grid.ask_for_thumbnail = (function app$main$ui$dashboard$grid$ask_for_thumbnail(file_id,revn){
return beicon.v2.core.mapcat(cljs.core.partial.cljs$core$IFn$_invoke$arity$3(app.main.ui.dashboard.grid.persist_thumbnail,file_id,revn),beicon.v2.core.mapcat(app.main.rasterizer.render,app.main.ui.dashboard.grid.render_thumbnail(file_id,revn)));
});
app.main.ui.dashboard.grid.grid_item_thumbnail_STAR_ = (function app$main$ui$dashboard$grid$grid_item_thumbnail_STAR_(props_58495){
var file = props_58495.file;
var can_edit = props_58495.canEdit;
var can_restore = props_58495.canRestore;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"id","id",-1388402092));
var revn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"revn","revn",-633391765));
var thumbnail_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"thumbnail-id","thumbnail-id",406242421));
var bg_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"background","background",-863952629));
var container = rumext.v2.use_ref();
var visible_QMARK_ = app.main.ui.hooks.use_visible.cljs$core$IFn$_invoke$arity$variadic(container,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"once?","once?",-872881597),true], 0));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(revn),rumext.v2.adapt(visible_QMARK_),rumext.v2.adapt(thumbnail_id)],(function (){
if(cljs.core.truth_((function (){var and__5023__auto__ = visible_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(thumbnail_id);
} else {
return and__5023__auto__;
}
})())){
var subscription = beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (thumbnail_id__$1){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.set_file_thumbnail(file_id,thumbnail_id__$1));
}),(function (cause){
if(app.common.logging.enabled_QMARK_("app.main.ui.dashboard.grid",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"unable to render thumbnail"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-if","file-if",-1983487897),file_id], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"revn","revn",-633391765),revn], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),cljs.core.ex_message(cause)], null)], null);
}),null)),null,null,"app.main.ui.dashboard.grid",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}

return null;
}),app.main.ui.dashboard.grid.ask_for_thumbnail(file_id,revn));
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(beicon.v2.core.dispose_BANG_,subscription);
} else {
return null;
}
}));

return rumext.v2.jsx("div",{'style':{'backgroundColor':bg_color},'ref':container,'className':"main_ui_dashboard_grid__grid-item-th"+" "+(cljs.core.truth_(can_restore)?"main_ui_dashboard_grid__deleted-item":""),'children':(cljs.core.truth_(visible_QMARK_)?(cljs.core.truth_(thumbnail_id)?rumext.v2.jsx("img",{'draggable':""+(can_edit ?? ""),'src':app.config.resolve_media(thumbnail_id),'loading':"lazy",'decoding':"async",'className':"main_ui_dashboard_grid__grid-item-thumbnail-image"}):rumext.v2.jsx(app.main.ui.ds.product.loader.loader_STAR_,{'className':"main_ui_dashboard_grid__grid-loader",'draggable':""+(can_edit ?? ""),'overlay':true,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.loading")})):null)});
});

(app.main.ui.dashboard.grid.grid_item_thumbnail_STAR_.displayName = "grid-item-thumbnail*");

app.main.ui.dashboard.grid.menu_icon = rumext.v2.jsx("svg",{'width':(500),'className':"main_ui_dashboard_grid__menu-icon",'height':(500),'children':rumext.v2.jsx("use",{'href':"#icon-menu"})});
app.main.ui.dashboard.grid.grid_item_library_STAR_ = (function app$main$ui$dashboard$grid$grid_item_library_STAR_(props_58498){
var file = props_58498.file;
var can_restore = props_58498.canRestore;
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file)],(function (){
if(cljs.core.truth_(file)){
var font_ids = cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"font-id","font-id",-390084123),cljs.core.get_in.cljs$core$IFn$_invoke$arity$3(file,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"library-summary","library-summary",908431551),new cljs.core.Keyword(null,"typographies","typographies",-482095730),new cljs.core.Keyword(null,"sample","sample",79023601)], null),cljs.core.PersistentVector.EMPTY));
return cljs.core.run_BANG_(app.main.fonts.ensure_loaded_BANG_,font_ids);
} else {
return null;
}
}));

return rumext.v2.jsx("div",{'className':"main_ui_dashboard_grid__grid-item-th"+" "+"main_ui_dashboard_grid__library"+" "+(cljs.core.truth_(can_restore)?"main_ui_dashboard_grid__deleted-item":""),'children':(((file == null))?rumext.v2.jsx(app.main.ui.ds.product.loader.loader_STAR_,{'className':"main_ui_dashboard_grid__grid-loader",'overlay':true,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.loading")}):(function (){var summary = new cljs.core.Keyword(null,"library-summary","library-summary",908431551).cljs$core$IFn$_invoke$arity$1(file);
var components = new cljs.core.Keyword(null,"components","components",-1073188942).cljs$core$IFn$_invoke$arity$1(summary);
var colors = new cljs.core.Keyword(null,"colors","colors",1157174732).cljs$core$IFn$_invoke$arity$1(summary);
var typographies = new cljs.core.Keyword(null,"typographies","typographies",-482095730).cljs$core$IFn$_invoke$arity$1(summary);
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[(((((new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(components) === (0))) && ((((new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(colors) === (0))) && ((new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(typographies) === (0)))))))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_grid__asset-section",'children':rumext.v2.jsxs("div",{'className':"main_ui_dashboard_grid__asset-title",'children':[rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.components")}),rumext.v2.jsxs("span",{'className':"main_ui_dashboard_grid__num-assets",'children':["\u00A0(",(0),")"]})]})}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_grid__asset-section",'children':rumext.v2.jsxs("div",{'className':"main_ui_dashboard_grid__asset-title",'children':[rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.colors")}),rumext.v2.jsxs("span",{'className':"main_ui_dashboard_grid__num-assets",'children':["\u00A0(",(0),")"]})]})}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_grid__asset-section",'children':rumext.v2.jsxs("div",{'className':"main_ui_dashboard_grid__asset-title",'children':[rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.typography")}),rumext.v2.jsxs("span",{'className':"main_ui_dashboard_grid__num-assets",'children':["\u00A0(",(0),")"]})]})})]}):null),(((new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(components) > (0)))?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_grid__asset-section",'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_grid__asset-title",'children':[rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.components")}),rumext.v2.jsxs("span",{'className':"main_ui_dashboard_grid__num-assets",'children':["\u00A0(",new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(components),")"]})]}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_grid__asset-list",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,component){
out_arr__35152__auto__.push((function (){var root_id = new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component);
return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_grid__asset-list-item",'children':[rumext.v2.jsx(app.main.render.component_svg,{'root-shape':cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(component,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"objects","objects",2099713734),root_id], null)),'objects':new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component)}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_grid__name-block",'children':rumext.v2.jsx("span",{'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component),'className':"main_ui_dashboard_grid__item-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component)})})]},["assets-component-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component))].join(''));
})());

return out_arr__35152__auto__;
}),[],new cljs.core.Keyword(null,"sample","sample",79023601).cljs$core$IFn$_invoke$arity$1(components)),(((new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(components) > cljs.core.count(new cljs.core.Keyword(null,"sample","sample",79023601).cljs$core$IFn$_invoke$arity$1(components))))?rumext.v2.jsx("div",{'className':"main_ui_dashboard_grid__asset-list-item",'children':rumext.v2.jsx("div",{'className':"main_ui_dashboard_grid__name-block",'children':rumext.v2.jsx("span",{'className':"main_ui_dashboard_grid__item-name",'children':"(...)"})})}):null)]})]}):null),(((new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(colors) > (0)))?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_grid__asset-section",'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_grid__asset-title",'children':[rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.colors")}),rumext.v2.jsxs("span",{'className':"main_ui_dashboard_grid__num-assets",'children':["\u00A0(",new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(colors),")"]})]}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_grid__asset-list",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,color){
out_arr__35152__auto__.push((function (){var default_name = (cljs.core.truth_(new cljs.core.Keyword(null,"gradient","gradient",-1983908971).cljs$core$IFn$_invoke$arity$1(color))?app.util.color.gradient_type__GT_string(cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(color,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"gradient","gradient",-1983908971),new cljs.core.Keyword(null,"type","type",1174270348)], null))):(cljs.core.truth_(new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color))?new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color):new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(color)
));
return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_grid__asset-list-item main_ui_dashboard_grid__color-item",'children':[rumext.v2.jsx(app.main.ui.components.color_bullet.color_bullet,{'color':new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"color","color",1011675173),new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color),new cljs.core.Keyword(null,"opacity","opacity",397153780),new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(color)], null),'mini':true}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_grid__name-block",'children':[rumext.v2.jsx("span",{'className':"main_ui_dashboard_grid__color-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(color)}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(color),default_name))?null:rumext.v2.jsx("span",{'className':"main_ui_dashboard_grid__color-value",'children':new cljs.core.Keyword(null,"color","color",1011675173).cljs$core$IFn$_invoke$arity$1(color)}))]})]},["assets-color-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(color))].join(''));
})());

return out_arr__35152__auto__;
}),[],new cljs.core.Keyword(null,"sample","sample",79023601).cljs$core$IFn$_invoke$arity$1(colors)),(((new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(colors) > cljs.core.count(new cljs.core.Keyword(null,"sample","sample",79023601).cljs$core$IFn$_invoke$arity$1(colors))))?rumext.v2.jsx("div",{'className':"main_ui_dashboard_grid__asset-list-item",'children':rumext.v2.jsx("div",{'className':"main_ui_dashboard_grid__name-block",'children':rumext.v2.jsx("span",{'className':"main_ui_dashboard_grid__item-name",'children':"(...)"})})}):null)]})]}):null),(((new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(typographies) > (0)))?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_grid__asset-section",'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_grid__asset-title",'children':[rumext.v2.jsx("span",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.typography")}),rumext.v2.jsxs("span",{'className':"main_ui_dashboard_grid__num-assets",'children':["\u00A0(",new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(typographies),")"]})]}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_grid__asset-list",'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,typography){
out_arr__35152__auto__.push(rumext.v2.jsxs("div",{'className':"main_ui_dashboard_grid__asset-list-item",'children':[rumext.v2.jsx("div",{'style':{'fontFamily':new cljs.core.Keyword(null,"font-family","font-family",-667419874).cljs$core$IFn$_invoke$arity$1(typography),'fontWeight':new cljs.core.Keyword(null,"font-weight","font-weight",2085804583).cljs$core$IFn$_invoke$arity$1(typography),'fontStyle':new cljs.core.Keyword(null,"font-style","font-style",-773672352).cljs$core$IFn$_invoke$arity$1(typography)},'className':"main_ui_dashboard_grid__typography-sample",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.assets.typography.sample")}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_grid__name-block",'children':rumext.v2.jsx("span",{'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(typography),'className':"main_ui_dashboard_grid__item-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(typography)})})]},["assets-typography-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(typography))].join('')));

return out_arr__35152__auto__;
}),[],new cljs.core.Keyword(null,"sample","sample",79023601).cljs$core$IFn$_invoke$arity$1(typographies)),(((new cljs.core.Keyword(null,"count","count",2139924085).cljs$core$IFn$_invoke$arity$1(typographies) > cljs.core.count(new cljs.core.Keyword(null,"sample","sample",79023601).cljs$core$IFn$_invoke$arity$1(typographies))))?rumext.v2.jsx("div",{'className':"main_ui_dashboard_grid__asset-list-item",'children':rumext.v2.jsx("div",{'className':"main_ui_dashboard_grid__name-block",'children':rumext.v2.jsx("span",{'className':"main_ui_dashboard_grid__item-name",'children':"(...)"})})}):null)]})]}):null)]});
})())});
});

(app.main.ui.dashboard.grid.grid_item_library_STAR_.displayName = "grid-item-library*");

app.main.ui.dashboard.grid.grid_item_metadata_STAR_ = (function app$main$ui$dashboard$grid$grid_item_metadata_STAR_(props_58510){
var file = props_58510.file;
var time = app.common.time.timeago((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"will-be-deleted-at","will-be-deleted-at",-1174985202).cljs$core$IFn$_invoke$arity$1(file);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"modified-at","modified-at",-932048179).cljs$core$IFn$_invoke$arity$1(file);
}
})());
return rumext.v2.jsx("span",{'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.deleted.will-be-deleted-at",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([time], 0)),'className':"main_ui_dashboard_grid__date",'children':time});
});

(app.main.ui.dashboard.grid.grid_item_metadata_STAR_.displayName = "grid-item-metadata*");

app.main.ui.dashboard.grid.create_counter_element = (function app$main$ui$dashboard$grid$create_counter_element(_element,file_count){
var counter_el = app.util.dom.create_element.cljs$core$IFn$_invoke$arity$1("div");
app.util.dom.set_property_BANG_(counter_el,"class","main_ui_dashboard_grid__drag-counter");

app.util.dom.set_text_BANG_(counter_el,cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_count));

return counter_el;
});
app.main.ui.dashboard.grid.grid_item_STAR_ = (function app$main$ui$dashboard$grid$grid_item_STAR_(props_58513){
var file = props_58513.file;
var can_edit = props_58513.canEdit;
var selected_files = props_58513.selectedFiles;
var can_restore = props_58513.canRestore;
var origin = props_58513.origin;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"id","id",-1388402092));
var state = rumext.v2.deref(app.main.refs.dashboard_local);
var menu_pos = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"menu-pos","menu-pos",1459627496));
var menu_open_QMARK_ = (function (){var and__5023__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(state,new cljs.core.Keyword(null,"menu-open","menu-open",1430293295));
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(state));
} else {
return and__5023__auto__;
}
})();
var selected_QMARK_ = cljs.core.contains_QMARK_(selected_files,file_id);
var selected_num = cljs.core.count(selected_files);
var node_ref = rumext.v2.use_ref();
var menu_ref = rumext.v2.use_ref();
var is_library_view_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(origin,new cljs.core.Keyword(null,"libraries","libraries",-303286011));
var on_menu_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.hide_file_menu());
}));
var on_select = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_QMARK_),rumext.v2.adapt(selected_num)],(function (event){
if((((!(selected_QMARK_))) || ((selected_num > (1))))){
app.util.dom.stop_propagation(event);

var shift_QMARK_ = app.util.keyboard.shift_QMARK_(event);
if(shift_QMARK_){
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.clear_selected_files());
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.toggle_file_select(file));
} else {
return null;
}
}));
var on_navigate = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(can_restore)],(function (event){
if(cljs.core.truth_(can_restore)){
return null;
} else {
var menu_icon = rumext.v2.ref_val(menu_ref);
var target = app.util.dom.get_target(event);
if(cljs.core.truth_(app.util.dom.child_QMARK_(target,menu_icon))){
return null;
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.common.go_to_workspace.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id], 0)));
}
}
}));
var on_drag_start = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_QMARK_),rumext.v2.adapt(selected_num)],(function (event){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.hide_file_menu());

if(cljs.core.truth_(can_edit)){
var offset = app.util.dom.get_offset_position(app.util.dom.event__GT_native_event(event));
var item_el = rumext.v2.ref_val(node_ref);
var counter_el = app.main.ui.dashboard.grid.create_counter_element(item_el,(((!(selected_QMARK_)))?(1):selected_num));
if((!(selected_QMARK_))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.clear_selected_files());

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.toggle_file_select(file));
} else {
}

app.util.dom.dnd.set_data_BANG_.cljs$core$IFn$_invoke$arity$3(event,"penpot/files","dummy");

app.util.dom.dnd.set_allowed_effect_BANG_(event,"move");

app.util.dom.append_child_BANG_(item_el,counter_el);

app.util.dom.dnd.set_drag_image_BANG_.cljs$core$IFn$_invoke$arity$4(event,item_el,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(offset),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(offset));

return app.util.timers.raf((function (){
if(cljs.core.truth_(app.util.dom.child_QMARK_(counter_el,item_el))){
return app.util.dom.remove_child_BANG_(item_el,counter_el);
} else {
return null;
}
}));
} else {
return null;
}
}));
var on_menu_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file),rumext.v2.adapt(selected_QMARK_)],(function (event){
app.util.dom.stop_propagation(event);

if(selected_QMARK_){
} else {
if(app.util.keyboard.shift_QMARK_(event)){
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.clear_selected_files());
}

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.toggle_file_select(file));
}

var client_position = app.util.dom.get_client_position(event);
var position = (((((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(client_position) == null)) && ((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(client_position) == null))))?(function (){var target_element = app.util.dom.get_target(event);
var points = app.util.dom.get_bounding_rect(target_element);
var y = new cljs.core.Keyword(null,"top","top",-1856271961).cljs$core$IFn$_invoke$arity$1(points);
var x = new cljs.core.Keyword(null,"left","left",-399115937).cljs$core$IFn$_invoke$arity$1(points);
return app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(x,y);
})():client_position);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.show_file_menu_with_position(file_id,position));
}));
var on_context_menu = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_menu_click)],(function (event){
app.util.dom.prevent_default(event);

return (on_menu_click.cljs$core$IFn$_invoke$arity$1 ? on_menu_click.cljs$core$IFn$_invoke$arity$1(event) : on_menu_click.call(null,event));
}));
var edit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file)],(function (name){
var name_58538__$1 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(name);
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(name_58538__$1,"")){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.rename_file(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file,new cljs.core.Keyword(null,"name","name",1843675177),name_58538__$1)));
} else {
}

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.stop_edit_file_name());
}));
var on_edit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file)],(function (event){
app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.start_edit_file_name(file_id));
}));
var on_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_navigate),rumext.v2.adapt(on_select)],(function (event){
app.util.dom.stop_propagation(event);

if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
(on_navigate.cljs$core$IFn$_invoke$arity$1 ? on_navigate.cljs$core$IFn$_invoke$arity$1(event) : on_navigate.call(null,event));
} else {
}

if(app.util.keyboard.shift_QMARK_(event)){
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.keyboard.down_arrow_QMARK_(event);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.util.keyboard.left_arrow_QMARK_(event);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = app.util.keyboard.up_arrow_QMARK_(event);
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return app.util.keyboard.right_arrow_QMARK_(event);
}
}
}
})())){
return (on_select.cljs$core$IFn$_invoke$arity$1 ? on_select.cljs$core$IFn$_invoke$arity$1(event) : on_select.call(null,event));
} else {
return null;
}
} else {
return null;
}
}));
var on_menu_key_down = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_menu_click)],(function (event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
app.util.dom.stop_propagation(event);

app.util.dom.prevent_default(event);

return (on_menu_click.cljs$core$IFn$_invoke$arity$1 ? on_menu_click.cljs$core$IFn$_invoke$arity$1(event) : on_menu_click.call(null,event));
} else {
return null;
}
}));
return rumext.v2.jsx("li",{'className':"main_ui_dashboard_grid__grid-item"+" "+"main_ui_dashboard_grid__project-th"+" "+((is_library_view_QMARK_)?"main_ui_dashboard_grid__library":""),'children':rumext.v2.jsxs("div",{'onDoubleClick':on_navigate,'role':"button",'className':((selected_QMARK_)?"main_ui_dashboard_grid__selected":"")+" "+((is_library_view_QMARK_)?"main_ui_dashboard_grid__library":""),'children':[rumext.v2.jsx("div",{'className':"main_ui_dashboard_grid__overlay"}),((is_library_view_QMARK_)?rumext.v2.jsx(app.main.ui.dashboard.grid.grid_item_library_STAR_,{'file':file,'canRestore':can_restore}):rumext.v2.jsx(app.main.ui.dashboard.grid.grid_item_thumbnail_STAR_,{'file':file,'canEdit':can_edit,'canRestore':can_restore})),(cljs.core.truth_((function (){var and__5023__auto__ = new cljs.core.Keyword(null,"is-shared","is-shared",2126511925).cljs$core$IFn$_invoke$arity$1(file);
if(cljs.core.truth_(and__5023__auto__)){
return (!(is_library_view_QMARK_));
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx("div",{'className':"main_ui_dashboard_grid__item-badge",'children':app.main.ui.icons.library}):null),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_grid__info-wrapper",'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_grid__item-info",'children':[(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(state));
if(and__5023__auto__){
return new cljs.core.Keyword(null,"edition","edition",1337508089).cljs$core$IFn$_invoke$arity$1(state);
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.dashboard.inline_edition.inline_edition,{'content':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file),'on-end':edit,'max-length':(250)}):rumext.v2.jsx("h3",{'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file)})),rumext.v2.jsx(app.main.ui.dashboard.grid.grid_item_metadata_STAR_,{'file':file})]}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_grid__project-th-actions"+" "+(cljs.core.truth_(menu_open_QMARK_)?"main_ui_dashboard_grid__force-display":""),'children':rumext.v2.jsxs("div",{'role':"button",'aria-label':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.options"),'tabIndex':"0",'className':"main_ui_dashboard_grid__project-th-icon main_ui_dashboard_grid__menu",'children':[app.main.ui.dashboard.grid.menu_icon,(cljs.core.truth_((function (){var and__5023__auto__ = selected_QMARK_;
if(and__5023__auto__){
return menu_open_QMARK_;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.components.portal.portal_on_document_STAR_,{'children':rumext.v2.jsx(app.main.ui.dashboard.file_menu.file_menu_STAR_,{'parentId':""+(file_id ?? "")+"-action-menu",'origin':origin,'top':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(menu_pos),'onClose':on_menu_close,'canRestore':can_restore,'files':cljs.core.vals(selected_files),'onEdit':on_edit,'canEdit':can_edit,'left':((24) + new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(menu_pos)),'navigate':true})}):null)],'id':""+(file_id ?? "")+"-action-menu",'onClick':on_menu_click,'ref':menu_ref,'onKeyDown':on_menu_key_down})})]})],'onContextMenu':on_context_menu,'draggable':""+(can_edit ?? ""),'onClick':on_select,'title':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file),'ref':node_ref,'onDragStart':on_drag_start,'onKeyDown':on_key_down})});
});

(app.main.ui.dashboard.grid.grid_item_STAR_.displayName = "grid-item*");

app.main.ui.dashboard.grid.grid_STAR_ = (function app$main$ui$dashboard$grid$grid_STAR_(props_58515){
var limit = props_58515.limit;
var can_edit = props_58515.canEdit;
var project = props_58515.project;
var selected_files = props_58515.selectedFiles;
var create_fn = props_58515.createFn;
var files = props_58515.files;
var can_restore = props_58515.canRestore;
var origin = props_58515.origin;
var dragging_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var project_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(project,new cljs.core.Keyword(null,"id","id",-1388402092));
var team_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(project,new cljs.core.Keyword(null,"team-id","team-id",-14505725));
var node_ref = rumext.v2.use_var.cljs$core$IFn$_invoke$arity$1(null);
var on_finish_import = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(project_id),rumext.v2.adapt(team_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.project.fetch_files.cljs$core$IFn$_invoke$arity$1(project_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.team.fetch_shared_files.cljs$core$IFn$_invoke$arity$1(team_id),app.main.data.dashboard.clear_selected_files()], 0));
}));
var import_files = app.main.ui.dashboard.import$.use_import_file(project_id,on_finish_import);
var on_scroll = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.hide_file_menu());
}));
var on_drag_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
if(cljs.core.truth_(can_edit)){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(app.util.dom.dnd.has_type_QMARK_(e,"penpot/files"));
if(and__5023__auto__){
var or__5025__auto__ = app.util.dom.dnd.has_type_QMARK_(e,"Files");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.dom.dnd.has_type_QMARK_(e,"application/x-moz-file");
}
} else {
return and__5023__auto__;
}
})())){
app.util.dom.prevent_default(e);

return cljs.core.reset_BANG_(dragging_QMARK_,true);
} else {
return null;
}
} else {
return null;
}
}));
var on_drag_over = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.dom.dnd.has_type_QMARK_(e,"Files");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.dom.dnd.has_type_QMARK_(e,"application/x-moz-file");
}
})())){
return app.util.dom.prevent_default(e);
} else {
return null;
}
}));
var on_drag_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
if(cljs.core.truth_(app.util.dom.dnd.from_child_QMARK_(e))){
return null;
} else {
return cljs.core.reset_BANG_(dragging_QMARK_,false);
}
}));
var on_drop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
if(cljs.core.truth_(can_edit)){
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.not(app.util.dom.dnd.has_type_QMARK_(e,"penpot/files"));
if(and__5023__auto__){
var or__5025__auto__ = app.util.dom.dnd.has_type_QMARK_(e,"Files");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.dom.dnd.has_type_QMARK_(e,"application/x-moz-file");
}
} else {
return and__5023__auto__;
}
})())){
app.util.dom.prevent_default(e);

cljs.core.reset_BANG_(dragging_QMARK_,false);

var G__58516 = e.dataTransfer.files;
return (import_files.cljs$core$IFn$_invoke$arity$1 ? import_files.cljs$core$IFn$_invoke$arity$1(G__58516) : import_files.call(null,G__58516));
} else {
return null;
}
} else {
return app.util.dom.prevent_default(e);
}
}));
return rumext.v2.jsx("div",{'onDragEnter':on_drag_enter,'onDragLeave':on_drag_leave,'className':"main_ui_dashboard_grid__dashboard-grid",'children':(((files == null))?rumext.v2.jsx(app.main.ui.dashboard.placeholder.loading_placeholder_STAR_,{}):((cljs.core.seq(files))?cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,p__58517){
var vec__58518 = p__58517;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58518,(0),null);
var slice = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__58518,(1),null);
out_arr__35152__auto__.push(rumext.v2.jsxs("ul",{'className':"main_ui_dashboard_grid__grid-row",'children':[(cljs.core.truth_(cljs.core.deref(dragging_QMARK_))?rumext.v2.jsx("li",{'className':"main_ui_dashboard_grid__grid-item"}):null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto____$1,item){
out_arr__35152__auto____$1.push(rumext.v2.jsx(app.main.ui.dashboard.grid.grid_item_STAR_,{'file':item,'origin':origin,'selectedFiles':selected_files,'canEdit':can_edit,'canRestore':can_restore},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item) ?? "")));

return out_arr__35152__auto____$1;
}),[],slice)]},""+(index ?? "")));

return out_arr__35152__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$2(limit,files))):rumext.v2.jsx(app.main.ui.dashboard.placeholder.empty_grid_placeholder_STAR_,{'limit':limit,'canEdit':can_edit,'createFn':create_fn,'origin':origin,'projectId':project_id,'teamId':team_id,'onFinishImport':on_finish_import})
)),'onDrop':on_drop,'onDragOver':on_drag_over,'dragabble':""+(can_edit ?? ""),'ref':node_ref,'onScroll':on_scroll});
});

(app.main.ui.dashboard.grid.grid_STAR_.displayName = "grid*");

app.main.ui.dashboard.grid.line_grid_row = (function app$main$ui$dashboard$grid$line_grid_row(props_58521){
var map__58522 = rumext.v2.util.wrap_props(props_58521);
var map__58522__$1 = cljs.core.__destructure_map(map__58522);
var props = map__58522__$1;
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58522__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var selected_files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58522__$1,new cljs.core.Keyword(null,"selected-files","selected-files",1045525459));
var dragging_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58522__$1,new cljs.core.Keyword(null,"dragging?","dragging?",-995941410));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58522__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var can_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58522__$1,new cljs.core.Keyword(null,"can-edit","can-edit",442089902));
var can_restore = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58522__$1,new cljs.core.Keyword(null,"can-restore","can-restore",388064375));
var elements = limit;
var limit__$1 = (cljs.core.truth_(dragging_QMARK_)?(limit - (1)):limit);
return rumext.v2.jsxs("ul",{'style':{'gridTemplateColumns':""+"repeat("+(elements ?? "")+", 1fr)"},'className':"main_ui_dashboard_grid__grid-row main_ui_dashboard_grid__no-wrap",'children':[(cljs.core.truth_(dragging_QMARK_)?rumext.v2.jsx("li",{'className':"main_ui_dashboard_grid__grid-item main_ui_dashboard_grid__dragged"}):null),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,item){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.dashboard.grid.grid_item_STAR_,{'id':new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item),'file':item,'selectedFiles':selected_files,'canEdit':can_edit,'canRestore':can_restore},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item) ?? "")));

return out_arr__35152__auto__;
}),[],cljs.core.take.cljs$core$IFn$_invoke$arity$2(limit__$1,files))]});
});

(app.main.ui.dashboard.grid.line_grid_row.displayName = "line-grid-row");

app.main.ui.dashboard.grid.line_grid = (function app$main$ui$dashboard$grid$line_grid(props_58523){
var map__58524 = rumext.v2.util.wrap_props(props_58523);
var map__58524__$1 = cljs.core.__destructure_map(map__58524);
var props = map__58524__$1;
var project = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58524__$1,new cljs.core.Keyword(null,"project","project",1124394579));
var team = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58524__$1,new cljs.core.Keyword(null,"team","team",1355747699));
var files = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58524__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var limit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58524__$1,new cljs.core.Keyword(null,"limit","limit",-1355822363));
var create_fn = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58524__$1,new cljs.core.Keyword(null,"create-fn","create-fn",-1596040813));
var can_edit = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58524__$1,new cljs.core.Keyword(null,"can-edit","can-edit",442089902));
var can_restore = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58524__$1,new cljs.core.Keyword(null,"can-restore","can-restore",388064375));
var dragging_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var project_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(project);
var team_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(team);
var selected_files = rumext.v2.deref(app.main.refs.selected_files);
var selected_project = rumext.v2.deref(app.main.refs.selected_project);
var on_finish_import = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.dashboard.fetch_recent_files.cljs$core$IFn$_invoke$arity$1(team_id),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.dashboard.clear_selected_files()], 0));
}));
var import_files = app.main.ui.dashboard.import$.use_import_file(project_id,on_finish_import);
var on_drag_enter = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(selected_project),rumext.v2.adapt(can_edit)],(function (e){
if(cljs.core.truth_(can_edit)){
if(cljs.core.truth_(app.util.dom.dnd.has_type_QMARK_(e,"penpot/files"))){
app.util.dom.prevent_default(e);

if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.dom.dnd.from_child_QMARK_(e);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.dom.dnd.broken_event_QMARK_(e);
}
})())){
return null;
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_project,project_id)){
return cljs.core.reset_BANG_(dragging_QMARK_,true);
} else {
return null;
}
}
} else {
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.dom.dnd.has_type_QMARK_(e,"Files");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.dom.dnd.has_type_QMARK_(e,"application/x-moz-file");
}
})())){
app.util.dom.prevent_default(e);

return cljs.core.reset_BANG_(dragging_QMARK_,true);
} else {
return null;
}
}
} else {
return null;
}
}));
var on_drag_over = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.dom.dnd.has_type_QMARK_(e,"penpot/files");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.util.dom.dnd.has_type_QMARK_(e,"Files");
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return app.util.dom.dnd.has_type_QMARK_(e,"application/x-moz-file");
}
}
})())){
return app.util.dom.prevent_default(e);
} else {
return null;
}
}));
var on_drag_leave = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (e){
if(cljs.core.truth_(app.util.dom.dnd.from_child_QMARK_(e))){
return null;
} else {
return cljs.core.reset_BANG_(dragging_QMARK_,false);
}
}));
var on_drop_success = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id)],(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(app.main.data.notifications.success.cljs$core$IFn$_invoke$arity$1(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.success-move-file")),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.dashboard.fetch_recent_files.cljs$core$IFn$_invoke$arity$1(team_id),app.main.data.dashboard.clear_selected_files()], 0));
}));
var on_drop = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(files),rumext.v2.adapt(selected_files),rumext.v2.adapt(can_edit)],(function (e){
if(cljs.core.truth_(can_edit)){
if(cljs.core.truth_(app.util.dom.dnd.has_type_QMARK_(e,"penpot/files"))){
cljs.core.reset_BANG_(dragging_QMARK_,false);

if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(selected_project,project_id)){
var data = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ids","ids",-998535796),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.keys(selected_files)),new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id], null);
var mdata = new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_drop_success], null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.move_files(cljs.core.with_meta(data,mdata)));
} else {
return null;
}
} else {
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.dom.dnd.has_type_QMARK_(e,"Files");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.dom.dnd.has_type_QMARK_(e,"application/x-moz-file");
}
})())){
app.util.dom.prevent_default(e);

cljs.core.reset_BANG_(dragging_QMARK_,false);

var G__58525 = e.dataTransfer.files;
return (import_files.cljs$core$IFn$_invoke$arity$1 ? import_files.cljs$core$IFn$_invoke$arity$1(G__58525) : import_files.call(null,G__58525));
} else {
return null;
}
}
} else {
return app.util.dom.prevent_default(e);
}
}));
return rumext.v2.jsx("div",{'dragabble':""+(can_edit ?? ""),'onDragEnter':on_drag_enter,'onDragOver':on_drag_over,'onDragLeave':on_drag_leave,'onDrop':on_drop,'className':"main_ui_dashboard_grid__dashboard-grid",'children':(((files == null))?rumext.v2.jsx(app.main.ui.dashboard.placeholder.loading_placeholder_STAR_,{}):((cljs.core.seq(files))?rumext.v2.jsx(app.main.ui.dashboard.grid.line_grid_row,{'files':files,'team-id':team_id,'selected-files':selected_files,'dragging?':cljs.core.deref(dragging_QMARK_),'can-edit':can_edit,'limit':limit,'can-restore':can_restore}):rumext.v2.jsx(app.main.ui.dashboard.placeholder.empty_grid_placeholder_STAR_,{'isDragging':cljs.core.deref(dragging_QMARK_),'limit':limit,'canEdit':can_edit,'createFn':create_fn,'projectId':project_id,'teamId':team_id,'onFinishImport':on_finish_import})
))});
});

(app.main.ui.dashboard.grid.line_grid.displayName = "line-grid");


//# sourceMappingURL=app.main.ui.dashboard.grid.js.map
