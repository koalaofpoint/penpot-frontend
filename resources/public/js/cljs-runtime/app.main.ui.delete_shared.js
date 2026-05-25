import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.main.data.modal.js";
import "./app.main.repo.js";
import "./app.main.store.js";
import "./app.main.ui.ds.notifications.context_notification.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./beicon.v2.core.js";
import "./goog.events.events.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.delete_shared');
app.main.ui.delete_shared.noop = cljs.core.constantly(null);
app.main.ui.delete_shared.delete_shared_dialog = (function app$main$ui$delete_shared$delete_shared_dialog(props_83030){
var on_cancel = (props_83030["on-cancel"]);
var accept_style = (props_83030["accept-style"]);
var count_libraries = (props_83030["count-libraries"]);
var ids = props_83030.ids;
var on_accept = (props_83030["on-accept"]);
var origin = props_83030.origin;
var references_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var references = cljs.core.deref(references_STAR_);
var on_accept__$1 = (function (){var or__5025__auto__ = on_accept;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.ui.delete_shared.noop;
}
})();
var on_cancel__$1 = (function (){var or__5025__auto__ = on_cancel;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.ui.delete_shared.noop;
}
})();
var cancel_label = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.cancel");
var accept_style__$1 = (function (){var or__5025__auto__ = accept_style;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"danger","danger",-624338030);
}
})();
var count_files = cljs.core.count(cljs.core.keys(references));
var title = (function (){var G__83031 = origin;
var G__83031__$1 = (((G__83031 instanceof cljs.core.Keyword))?G__83031.fqn:null);
switch (G__83031__$1) {
case "delete":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.delete-shared-confirm.title",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(count_libraries)], 0));

break;
case "unpublish":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.unpublish-shared-confirm.title",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(count_libraries)], 0));

break;
case "move":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.move-shared-confirm.title",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(count_libraries)], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__83031__$1)].join('')));

}
})();
var subtitle = (function (){var G__83032 = origin;
var G__83032__$1 = (((G__83032 instanceof cljs.core.Keyword))?G__83032.fqn:null);
switch (G__83032__$1) {
case "delete":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.delete-shared-confirm.message",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(count_libraries)], 0));

break;
case "unpublish":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.unpublish-shared-confirm.message",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(count_libraries)], 0));

break;
case "move":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.move-shared-confirm.message",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(count_libraries)], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__83032__$1)].join('')));

}
})();
var accept_label = (function (){var G__83033 = origin;
var G__83033__$1 = (((G__83033 instanceof cljs.core.Keyword))?G__83033.fqn:null);
switch (G__83033__$1) {
case "delete":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.delete-shared-confirm.accept",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(count_libraries)], 0));

break;
case "unpublish":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.unpublish-shared-confirm.accept",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(count_libraries)], 0));

break;
case "move":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.move-shared-confirm.accept",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(count_libraries)], 0));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__83033__$1)].join('')));

}
})();
var no_files_msg = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.delete-shared-confirm.activated.no-files-message",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(count_libraries)], 0));
var scd_msg = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.delete-shared-confirm.activated.scd-message",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(count_libraries)], 0));
var hint = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("modals.delete-unpublish-shared-confirm.activated.hint",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(count_files)], 0));
var accept_fn = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_accept__$1)],(function (event){
app.util.dom.prevent_default(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());

return (on_accept__$1.cljs$core$IFn$_invoke$arity$0 ? on_accept__$1.cljs$core$IFn$_invoke$arity$0() : on_accept__$1.call(null));
}));
var cancel_fn = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_cancel__$1)],(function (event){
app.util.dom.prevent_default(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());

return (on_cancel__$1.cljs$core$IFn$_invoke$arity$0 ? on_cancel__$1.cljs$core$IFn$_invoke$arity$0() : on_cancel__$1.call(null));
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(ids)],(function (){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p1__83029_SHARP_){
return cljs.core.reset_BANG_(references_STAR_,p1__83029_SHARP_);
}),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(cljs.core.conj,cljs.core.PersistentVector.EMPTY,beicon.v2.core.map(cljs.core.juxt.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"name","name",1843675177)),beicon.v2.core.mapcat(cljs.core.identity,beicon.v2.core.mapcat((function (p1__83028_SHARP_){
return app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-library-file-references","get-library-file-references",383296011),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),p1__83028_SHARP_], null));
}),beicon.v2.core.filter(cljs.core.some_QMARK_,beicon.v2.core.from(ids)))))));
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(accept_fn)],(function (){
var on_keydown = (function app$main$ui$delete_shared$delete_shared_dialog_$_on_keydown(event){
if(cljs.core.truth_(app.util.keyboard.enter_QMARK_(event))){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

return (accept_fn.cljs$core$IFn$_invoke$arity$0 ? accept_fn.cljs$core$IFn$_invoke$arity$0() : accept_fn.call(null));
} else {
return null;
}
});
var key = goog.events.listen(document,"keydown",on_keydown);
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(goog.events.unlistenByKey,key);
}));

return rumext.v2.jsx("div",{'className':"main_ui_delete_shared__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_delete_shared__modal-container",'children':[rumext.v2.jsxs("div",{'className':"main_ui_delete_shared__modal-header",'children':[rumext.v2.jsx("h2",{'className':"main_ui_delete_shared__modal-title",'children':title}),rumext.v2.jsx("button",{'onClick':cancel_fn,'className':"main_ui_delete_shared__modal-close-btn",'children':app.main.ui.icons.close})]}),rumext.v2.jsxs("div",{'className':"main_ui_delete_shared__modal-content",'children':[((((typeof subtitle === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(subtitle,""))))?rumext.v2.jsx("h3",{'className':"main_ui_delete_shared__modal-subtitle",'children':subtitle}):null),((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2((0),count_libraries))?(((cljs.core.count(references) > (0)))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[((((typeof scd_msg === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(scd_msg,""))))?rumext.v2.jsx("p",{'className':"main_ui_delete_shared__modal-scd-msg",'children':scd_msg}):null),rumext.v2.jsx("ul",{'className':"main_ui_delete_shared__element-list",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__83036){
var vec__83039 = p__83036;
var file_id = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83039,(0),null);
var file_name = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__83039,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsx("li",{'className':"main_ui_delete_shared__list-item",'children':rumext.v2.jsxs("span",{'children':["- ",file_name]})},""+(file_id ?? "")));

return out_arr__46744__auto__;
}),[],references)}),((((typeof hint === 'string') && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(hint,""))))?rumext.v2.jsx(app.main.ui.ds.notifications.context_notification.context_notification_STAR_,{'level':new cljs.core.Keyword(null,"info","info",-317069002),'appearance':new cljs.core.Keyword(null,"ghost","ghost",-1531157576),'children':hint}):null)]}):rumext.v2.jsx(rumext.v2.Fragment,{'children':rumext.v2.jsx("h3",{'className':"main_ui_delete_shared__modal-msg",'children':no_files_msg})})):null)]}),rumext.v2.jsx("div",{'className':"main_ui_delete_shared__modal-footer",'children':rumext.v2.jsxs("div",{'className':"main_ui_delete_shared__action-buttons",'children':[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cancel_label,new cljs.core.Keyword(null,"omit","omit",-1917972325)))?null:rumext.v2.jsx("input",{'type':"button",'value':cancel_label,'onClick':cancel_fn,'className':"main_ui_delete_shared__cancel-button"})),rumext.v2.jsx("input",{'type':"button",'value':accept_label,'onClick':accept_fn,'className':"main_ui_delete_shared__accept-btn"+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept_style__$1,new cljs.core.Keyword(null,"danger","danger",-624338030)))?"main_ui_delete_shared__danger":"")+" "+((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(accept_style__$1,new cljs.core.Keyword(null,"primary","primary",817773892)))?"main_ui_delete_shared__primary":"")})]})})]})});
});

(app.main.ui.delete_shared.delete_shared_dialog.displayName = "delete-shared-dialog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__47156__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__47156__auto__,new cljs.core.Keyword(null,"delete-shared-libraries","delete-shared-libraries",769506220),app.main.ui.delete_shared.delete_shared_dialog);
}));

//# sourceMappingURL=app.main.ui.delete_shared.js.map
