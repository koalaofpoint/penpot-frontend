import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.modal.js";
import "./app.main.store.js";
import "./app.main.ui.components.link.js";
import "./app.main.ui.ds.notifications.context_notification.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./goog.events.events.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.alert');
app.main.ui.alert.alert_dialog = (function app$main$ui$alert$alert_dialog(props_83020){
var map__83021 = rumext.v2.util.wrap_props(props_83020);
var map__83021__$1 = cljs.core.__destructure_map(map__83021);
var props = map__83021__$1;
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83021__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var scd_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83021__$1,new cljs.core.Keyword(null,"scd-message","scd-message",89862664));
var link_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83021__$1,new cljs.core.Keyword(null,"link-message","link-message",893661043));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83021__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_accept = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83021__$1,new cljs.core.Keyword(null,"on-accept","on-accept",705439955));
var hint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83021__$1,new cljs.core.Keyword(null,"hint","hint",439639918));
var accept_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83021__$1,new cljs.core.Keyword(null,"accept-label","accept-label",1215904838));
var accept_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83021__$1,new cljs.core.Keyword(null,"accept-style","accept-style",630742659));
var on_accept__$1 = (function (){var or__5025__auto__ = on_accept;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.identity;
}
})();
var message__$1 = (function (){var or__5025__auto__ = message;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.alert-title");
}
})();
var accept_label__$1 = (function (){var or__5025__auto__ = accept_label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.alert-ok");
}
})();
var accept_style__$1 = (function (){var or__5025__auto__ = accept_style;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"danger","danger",-624338030);
}
})();
var title__$1 = (function (){var or__5025__auto__ = title;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.alert-title");
}
})();
var accept_fn = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());

return (on_accept__$1.cljs$core$IFn$_invoke$arity$1 ? on_accept__$1.cljs$core$IFn$_invoke$arity$1(props) : on_accept__$1.call(null,props));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var on_keydown = (function app$main$ui$alert$alert_dialog_$_on_keydown(event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());

return (on_accept__$1.cljs$core$IFn$_invoke$arity$1 ? on_accept__$1.cljs$core$IFn$_invoke$arity$1(props) : on_accept__$1.call(null,props));
} else {
return null;
}
});
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(goog.events.unlistenByKey,goog.events.listen(document,"keydown",on_keydown));
}));

return rumext.v2.jsx("div",{'className':"main_ui_alert__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_alert__modal-container",'children':[rumext.v2.jsxs("div",{'className':"main_ui_alert__modal-header",'children':[rumext.v2.jsx("h2",{'className':"main_ui_alert__modal-title",'children':title__$1}),rumext.v2.jsx("button",{'onClick':accept_fn,'className':"main_ui_alert__modal-close-btn",'children':app.main.ui.icons.close})]}),rumext.v2.jsxs("div",{'className':"main_ui_alert__modal-content",'children':[((((typeof message__$1 === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(message__$1,""))))?rumext.v2.jsx("h3",{'className':"main_ui_alert__modal-msg",'children':message__$1}):null),((cljs.core.seq(link_message))?rumext.v2.jsxs("h3",{'className':"main_ui_alert__modal-msg",'children':[rumext.v2.jsx("span",{'children':new cljs.core.Keyword(null,"before","before",-1633692388).cljs$core$IFn$_invoke$arity$1(link_message)}),rumext.v2.jsx(app.main.ui.components.link.link,{'action':new cljs.core.Keyword(null,"on-click","on-click",1632826543).cljs$core$IFn$_invoke$arity$1(link_message),'class':"main_ui_alert__link",'children':new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(link_message)}),rumext.v2.jsx("span",{'children':new cljs.core.Keyword(null,"after","after",594996914).cljs$core$IFn$_invoke$arity$1(link_message)})]}):null),((((typeof scd_message === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(scd_message,""))))?rumext.v2.jsx("h3",{'className':"main_ui_alert__modal-scd-msg",'children':scd_message}):null),((typeof hint === 'string')?rumext.v2.jsx(app.main.ui.ds.notifications.context_notification.context_notification_STAR_,{'level':new cljs.core.Keyword(null,"info","info",-317069002),'appearance':new cljs.core.Keyword(null,"ghost","ghost",-1531157576),'children':hint}):null)]}),rumext.v2.jsx("div",{'className':"main_ui_alert__modal-footer",'children':rumext.v2.jsx("div",{'className':"main_ui_alert__action-buttons",'children':rumext.v2.jsx("input",{'type':"button",'value':accept_label__$1,'onClick':accept_fn,'className':"main_ui_alert__accept-btn"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept_style__$1,new cljs.core.Keyword(null,"danger","danger",-624338030)))?"main_ui_alert__danger":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept_style__$1,new cljs.core.Keyword(null,"primary","primary",817773892)))?"main_ui_alert__primary":"")})})})]})});
});

(app.main.ui.alert.alert_dialog.displayName = "alert-dialog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__47156__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__47156__auto__,new cljs.core.Keyword(null,"alert","alert",-571950580),app.main.ui.alert.alert_dialog);
}));

//# sourceMappingURL=app.main.ui.alert.js.map
