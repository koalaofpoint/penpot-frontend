import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.modal.js";
import "./app.main.store.js";
import "./app.main.ui.ds.notifications.context_notification.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./goog.events.events.js";
import "./rumext.v2.js";
import "./goog.events.eventtype.js";
goog.provide('app.main.ui.confirm');
app.main.ui.confirm.confirm_dialog = (function app$main$ui$confirm$confirm_dialog(props_83026){
var map__83027 = rumext.v2.util.wrap_props(props_83026);
var map__83027__$1 = cljs.core.__destructure_map(map__83027);
var props = map__83027__$1;
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83027__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var on_cancel = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83027__$1,new cljs.core.Keyword(null,"on-cancel","on-cancel",-2071892932));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83027__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var accept_style = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83027__$1,new cljs.core.Keyword(null,"accept-style","accept-style",630742659));
var accept_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83027__$1,new cljs.core.Keyword(null,"accept-label","accept-label",1215904838));
var scd_message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83027__$1,new cljs.core.Keyword(null,"scd-message","scd-message",89862664));
var cancel_label = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83027__$1,new cljs.core.Keyword(null,"cancel-label","cancel-label",-1093310551));
var hint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83027__$1,new cljs.core.Keyword(null,"hint","hint",439639918));
var title = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83027__$1,new cljs.core.Keyword(null,"title","title",636505583));
var on_accept = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__83027__$1,new cljs.core.Keyword(null,"on-accept","on-accept",705439955));
var on_accept__$1 = (function (){var or__5025__auto__ = on_accept;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.identity;
}
})();
var on_cancel__$1 = (function (){var or__5025__auto__ = on_cancel;
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
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.confirm-title");
}
})();
var cancel_label__$1 = (function (){var or__5025__auto__ = cancel_label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.confirm-cancel");
}
})();
var accept_label__$1 = (function (){var or__5025__auto__ = accept_label;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.confirm-ok");
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
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.confirm-title");
}
})();
var accept_fn = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());

return (on_accept__$1.cljs$core$IFn$_invoke$arity$1 ? on_accept__$1.cljs$core$IFn$_invoke$arity$1(props) : on_accept__$1.call(null,props));
}));
var cancel_fn = rumext.v2.use_callback.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());

return (on_cancel__$1.cljs$core$IFn$_invoke$arity$1 ? on_cancel__$1.cljs$core$IFn$_invoke$arity$1(props) : on_cancel__$1.call(null,props));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$1((function (){
var on_keydown = (function app$main$ui$confirm$confirm_dialog_$_on_keydown(event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());

return (on_accept__$1.cljs$core$IFn$_invoke$arity$1 ? on_accept__$1.cljs$core$IFn$_invoke$arity$1(props) : on_accept__$1.call(null,props));
} else {
return null;
}
});
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(goog.events.unlistenByKey,goog.events.listen(document,goog.events.EventType.KEYDOWN,on_keydown));
}));

return rumext.v2.jsx("div",{'className':"main_ui_confirm__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_confirm__modal-container",'children':[rumext.v2.jsxs("div",{'className':"main_ui_confirm__modal-header",'children':[rumext.v2.jsx("h2",{'className':"main_ui_confirm__modal-title",'children':title__$1}),rumext.v2.jsx("button",{'onClick':cancel_fn,'className':"main_ui_confirm__modal-close-btn",'children':app.main.ui.icons.close})]}),rumext.v2.jsxs("div",{'className':"main_ui_confirm__modal-content",'children':[((((typeof message__$1 === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(message__$1,""))))?rumext.v2.jsx("h3",{'className':"main_ui_confirm__modal-msg",'children':message__$1}):null),((((typeof scd_message === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(scd_message,""))))?rumext.v2.jsx("h3",{'className':"main_ui_confirm__modal-scd-msg",'children':scd_message}):null),((typeof hint === 'string')?rumext.v2.jsx(app.main.ui.ds.notifications.context_notification.context_notification_STAR_,{'level':new cljs.core.Keyword(null,"info","info",-317069002),'appearance':new cljs.core.Keyword(null,"ghost","ghost",-1531157576),'children':hint}):null),(((cljs.core.count(items) > (0)))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("p",{'className':"main_ui_confirm__modal-subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("ds.component-subtitle")}),rumext.v2.jsx("ul",{'className':"main_ui_confirm__component-list",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,item){
out_arr__46744__auto__.push(rumext.v2.jsxs("li",{'className':"main_ui_confirm__modal-item-element",'children':[rumext.v2.jsx("span",{'className':"main_ui_confirm__modal-component-icon",'children':app.main.ui.icons.component}),rumext.v2.jsx("span",{'className':"main_ui_confirm__modal-component-name",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(item)})]}));

return out_arr__46744__auto__;
}),[],items)})]}):null)]}),rumext.v2.jsx("div",{'className':"main_ui_confirm__modal-footer",'children':rumext.v2.jsxs("div",{'className':"main_ui_confirm__action-buttons",'children':[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cancel_label__$1,new cljs.core.Keyword(null,"omit","omit",-1917972325)))?null:rumext.v2.jsx("input",{'type':"button",'value':cancel_label__$1,'onClick':cancel_fn,'className':"main_ui_confirm__cancel-button"})),rumext.v2.jsx("input",{'type':"button",'value':accept_label__$1,'onClick':accept_fn,'className':"main_ui_confirm__accept-btn"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept_style__$1,new cljs.core.Keyword(null,"danger","danger",-624338030)))?"main_ui_confirm__danger":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept_style__$1,new cljs.core.Keyword(null,"primary","primary",817773892)))?"main_ui_confirm__primary":"")})]})})]})});
});

(app.main.ui.confirm.confirm_dialog.displayName = "confirm-dialog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__47156__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__47156__auto__,new cljs.core.Keyword(null,"confirm","confirm",-2004000608),app.main.ui.confirm.confirm_dialog);
}));

//# sourceMappingURL=app.main.ui.confirm.js.map
