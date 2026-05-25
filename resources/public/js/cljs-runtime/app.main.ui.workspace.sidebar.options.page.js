import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.types.color.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.undo.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.title_bar.js";
import "./app.main.ui.workspace.sidebar.options.rows.color_row.js";
import "./app.util.i18n.js";
import "./okulary.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.sidebar.options.page');
app.main.ui.workspace.sidebar.options.page.ref_COLON_background_color = okulary.core.derived.cljs$core$IFn$_invoke$arity$2(okulary.core.key(new cljs.core.Keyword(null,"background","background",-863952629)),app.main.refs.workspace_page);
app.main.ui.workspace.sidebar.options.page.options_STAR_ = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$sidebar$options$page$options_STAR_(props_55489){
var background = rumext.v2.deref(app.main.ui.workspace.sidebar.options.page.ref_COLON_background_color);
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p1__55488_SHARP_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.change_canvas_color.cljs$core$IFn$_invoke$arity$1(p1__55488_SHARP_));
}));
var on_open = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.start_undo_transaction(new cljs.core.Keyword(null,"options","options",99638489)));
}));
var on_close = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.undo.commit_undo_transaction(new cljs.core.Keyword(null,"options","options",99638489)));
}));
var color = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(background)],(function (){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"color","color",1011675173),app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(background,"#E8E9EA"),new cljs.core.Keyword(null,"opacity","opacity",397153780),(1)], null);
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_sidebar_options_page__element-set",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_page__element-title",'children':rumext.v2.jsx(app.main.ui.components.title_bar.title_bar_STAR_,{'collapsable':false,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.canvas-background"),'className':"main_ui_workspace_sidebar_options_page__title-spacing-page"})}),rumext.v2.jsx("div",{'className':"main_ui_workspace_sidebar_options_page__element-content",'children':rumext.v2.jsx(app.main.ui.workspace.sidebar.options.rows.color_row.color_row_STAR_,{'origin':new cljs.core.Keyword(null,"canvas","canvas",-1798817489),'onClose':on_close,'onChange':on_change,'disableOpacity':true,'disableGradient':true,'disableImage':true,'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.options.canvas-background"),'color':color,'onOpen':on_open})})]});
}));

(app.main.ui.workspace.sidebar.options.page.options_STAR_.displayName = "options*");


//# sourceMappingURL=app.main.ui.workspace.sidebar.options.page.js.map
