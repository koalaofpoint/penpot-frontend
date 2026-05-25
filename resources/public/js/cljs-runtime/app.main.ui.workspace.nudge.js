import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.modal.js";
import "./app.main.data.workspace.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.numeric_input.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./goog.events.events.js";
import "./rumext.v2.js";
import "./goog.events.eventtype.js";
goog.provide('app.main.ui.workspace.nudge');
app.main.ui.workspace.nudge.on_keydown = (function app$main$ui$workspace$nudge$on_keydown(event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

return app.main.data.modal.hide_BANG_();
} else {
return null;
}
});
app.main.ui.workspace.nudge.nudge_modal = (function app$main$ui$workspace$nudge$nudge_modal(props_54972){
var profile = rumext.v2.deref(app.main.refs.profile);
var nudge = (function (){var or__5025__auto__ = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(profile,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"nudge","nudge",-715499585)], null));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"big","big",903550151),(10),new cljs.core.Keyword(null,"small","small",2133478704),(1)], null);
}
})();
var update_big = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p1__54970_SHARP_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_nudge(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"big","big",903550151),p1__54970_SHARP_], null)));
}));
var update_small = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p1__54971_SHARP_){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.update_nudge(new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"small","small",2133478704),p1__54971_SHARP_], null)));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(goog.events.unlistenByKey,goog.events.listen(document,goog.events.EventType.KEYDOWN,app.main.ui.workspace.nudge.on_keydown));
}));

return rumext.v2.jsx("div",{'className':"main_ui_workspace_nudge__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_workspace_nudge__modal-container",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_nudge__modal-header",'children':[rumext.v2.jsx("h2",{'className':"main_ui_workspace_nudge__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.nudge-title")}),rumext.v2.jsx("button",{'onClick':app.main.data.modal.hide_BANG_,'className':"main_ui_workspace_nudge__modal-close-btn",'children':app.main.ui.icons.close})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_nudge__modal-content",'children':[rumext.v2.jsxs("div",{'className':"main_ui_workspace_nudge__input-wrapper",'children':[rumext.v2.jsx("label",{'htmlFor':"nudge-small",'className':"main_ui_workspace_nudge__modal-msg",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.small-nudge")}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'min':0.01,'id':"nudge-small",'value':new cljs.core.Keyword(null,"small","small",2133478704).cljs$core$IFn$_invoke$arity$1(nudge),'onChange':update_small})]}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_nudge__input-wrapper",'children':[rumext.v2.jsx("label",{'htmlFor':"nudge-big",'className':"main_ui_workspace_nudge__modal-msg",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("modals.big-nudge")}),rumext.v2.jsx(app.main.ui.components.numeric_input.numeric_input_STAR_,{'min':0.01,'id':"nudge-big",'value':new cljs.core.Keyword(null,"big","big",903550151).cljs$core$IFn$_invoke$arity$1(nudge),'onChange':update_big})]})]})]})});
});

(app.main.ui.workspace.nudge.nudge_modal.displayName = "nudge-modal");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"nudge-option","nudge-option",-726591721),app.main.ui.workspace.nudge.nudge_modal);
}));

//# sourceMappingURL=app.main.ui.workspace.nudge.js.map
