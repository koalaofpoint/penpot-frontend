import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.json.js";
import "./app.common.types.tokens_lib.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.refs.js";
import "./app.main.store.js";
import "./app.main.ui.components.code_block.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.foundations.typography.heading.js";
import "./app.main.ui.ds.foundations.typography.text.js";
import "./app.main.ui.ds.layout.tab_switcher.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.webapi.js";
import "./app.util.zip.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.export$.modal');
app.main.ui.workspace.tokens.export$.modal.export_tab_STAR_ = (function app$main$ui$workspace$tokens$export$modal$export_tab_STAR_(props_79528){
var is_disabled = props_79528.isDisabled;
var on_export = props_79528.onExport;
var children = props_79528.children;
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_export_modal__export-preview",'children':[(cljs.core.truth_(is_disabled)?null:rumext.v2.jsx(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"span",'typography':"body-medium",'className':"main_ui_workspace_tokens_export_modal__preview-label",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.export.preview")})),(cljs.core.truth_(is_disabled)?rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_export_modal__disabled-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.export.no-tokens-themes-sets")}):children),rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_export_modal__export-actions",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"secondary",'type':"button",'onClick':app.main.data.modal.hide_BANG_,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.cancel")}),rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"primary",'type':"button",'disabled':is_disabled,'onClick':on_export,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.export")})]})]});
});

(app.main.ui.workspace.tokens.export$.modal.export_tab_STAR_.displayName = "export-tab*");

app.main.ui.workspace.tokens.export$.modal.single_file_tab_STAR_ = (function app$main$ui$workspace$tokens$export$modal$single_file_tab_STAR_(props_79529){
var tokens_data = (function (){var G__79530 = cljs.core.deref(app.main.refs.tokens_lib);
if((G__79530 == null)){
return null;
} else {
return app.common.types.tokens_lib.export_dtcg_json(G__79530);
}
})();
var tokens_json = (function (){var G__79531 = tokens_data;
if((G__79531 == null)){
return null;
} else {
return app.common.json.encode.cljs$core$IFn$_invoke$arity$variadic(G__79531,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.identity,new cljs.core.Keyword(null,"indent","indent",-148200125),(2)], 0));
}
})();
var is_disabled = cljs.core.empty_QMARK_(tokens_data);
var on_export = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(tokens_json)],(function (){
if(cljs.core.truth_(tokens_json)){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"export-tokens",new cljs.core.Keyword(null,"type","type",1174270348),"single"], null)));

return app.util.dom.trigger_download("tokens.json",app.util.webapi.create_blob.cljs$core$IFn$_invoke$arity$2((function (){var or__5025__auto__ = tokens_json;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "{}";
}
})(),"application/json"));
} else {
return null;
}
}));
return rumext.v2.jsx(app.main.ui.workspace.tokens.export$.modal.export_tab_STAR_,{'isDisabled':is_disabled,'onExport':on_export,'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_export_modal__json-preview",'children':rumext.v2.jsx(app.main.ui.components.code_block.code_block,{'code':tokens_json,'type':"json"})})});
});

(app.main.ui.workspace.tokens.export$.modal.single_file_tab_STAR_.displayName = "single-file-tab*");

app.main.ui.workspace.tokens.export$.modal.download_tokens_zip_BANG_ = (function app$main$ui$workspace$tokens$export$modal$download_tokens_zip_BANG_(multi_file_entries){
var writer = app.util.zip.writer(app.util.zip.blob_writer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mtype","mtype",-1724656120),"application/zip"], null)], 0)));
var seq__79533_79562 = cljs.core.seq(multi_file_entries);
var chunk__79534_79563 = null;
var count__79535_79564 = (0);
var i__79536_79565 = (0);
while(true){
if((i__79536_79565 < count__79535_79564)){
var vec__79543_79566 = chunk__79534_79563.cljs$core$IIndexed$_nth$arity$2(null,i__79536_79565);
var path_79567 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79543_79566,(0),null);
var content_79568 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79543_79566,(1),null);
app.util.zip.add(writer,path_79567,app.common.json.encode.cljs$core$IFn$_invoke$arity$variadic(content_79568,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.identity,new cljs.core.Keyword(null,"indent","indent",-148200125),(2)], 0)));


var G__79569 = seq__79533_79562;
var G__79570 = chunk__79534_79563;
var G__79571 = count__79535_79564;
var G__79572 = (i__79536_79565 + (1));
seq__79533_79562 = G__79569;
chunk__79534_79563 = G__79570;
count__79535_79564 = G__79571;
i__79536_79565 = G__79572;
continue;
} else {
var temp__5825__auto___79573 = cljs.core.seq(seq__79533_79562);
if(temp__5825__auto___79573){
var seq__79533_79574__$1 = temp__5825__auto___79573;
if(cljs.core.chunked_seq_QMARK_(seq__79533_79574__$1)){
var c__5548__auto___79575 = cljs.core.chunk_first(seq__79533_79574__$1);
var G__79576 = cljs.core.chunk_rest(seq__79533_79574__$1);
var G__79577 = c__5548__auto___79575;
var G__79578 = cljs.core.count(c__5548__auto___79575);
var G__79579 = (0);
seq__79533_79562 = G__79576;
chunk__79534_79563 = G__79577;
count__79535_79564 = G__79578;
i__79536_79565 = G__79579;
continue;
} else {
var vec__79546_79580 = cljs.core.first(seq__79533_79574__$1);
var path_79581 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79546_79580,(0),null);
var content_79582 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79546_79580,(1),null);
app.util.zip.add(writer,path_79581,app.common.json.encode.cljs$core$IFn$_invoke$arity$variadic(content_79582,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.identity,new cljs.core.Keyword(null,"indent","indent",-148200125),(2)], 0)));


var G__79583 = cljs.core.next(seq__79533_79574__$1);
var G__79584 = null;
var G__79585 = (0);
var G__79586 = (0);
seq__79533_79562 = G__79583;
chunk__79534_79563 = G__79584;
count__79535_79564 = G__79585;
i__79536_79565 = G__79586;
continue;
}
} else {
}
}
break;
}

return app.util.zip.close(writer).then((function (p1__79532_SHARP_){
return app.util.dom.trigger_download("tokens.zip",p1__79532_SHARP_);
}));
});
app.main.ui.workspace.tokens.export$.modal.multi_file_tab_STAR_ = (function app$main$ui$workspace$tokens$export$modal$multi_file_tab_STAR_(props_79549){
var files = (function (){var G__79550 = cljs.core.deref(app.main.refs.tokens_lib);
if((G__79550 == null)){
return null;
} else {
return app.common.types.tokens_lib.export_dtcg_multi_file(G__79550);
}
})();
var is_disabled = ((cljs.core.empty_QMARK_(files)) || (cljs.core.every_QMARK_((function (p__79551){
var vec__79552 = p__79551;
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79552,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79552,(1),null);
return cljs.core.empty_QMARK_(v);
}),files)));
var on_export = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(files)],(function (){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"export-tokens",new cljs.core.Keyword(null,"type","type",1174270348),"multiple"], null)));

return app.main.ui.workspace.tokens.export$.modal.download_tokens_zip_BANG_(files);
}));
return rumext.v2.jsx(app.main.ui.workspace.tokens.export$.modal.export_tab_STAR_,{'onExport':on_export,'isDisabled':is_disabled,'children':rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_export_modal__preview-container",'children':rumext.v2.jsx("ul",{'className':"main_ui_workspace_tokens_export_modal__file-list",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__79555){
var vec__79556 = p__79555;
var path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79556,(0),null);
out_arr__46744__auto__.push(rumext.v2.jsxs("li",{'className':"main_ui_workspace_tokens_export_modal__file-item",'children':[rumext.v2.jsx("div",{'className':"main_ui_workspace_tokens_export_modal__file-icon",'children':rumext.v2.jsx(app.main.ui.ds.foundations.assets.icon.icon_STAR_,{'iconId':app.main.ui.ds.foundations.assets.icon.document})}),rumext.v2.jsx("div",{'title':path,'className':"main_ui_workspace_tokens_export_modal__file-name",'children':path})]},path));

return out_arr__46744__auto__;
}),[],files)})})});
});

(app.main.ui.workspace.tokens.export$.modal.multi_file_tab_STAR_.displayName = "multi-file-tab*");

app.main.ui.workspace.tokens.export$.modal.export_modal_body_STAR_ = (function app$main$ui$workspace$tokens$export$modal$export_modal_body_STAR_(props_79560){
var selected_tab_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1("single");
var selected_tab = cljs.core.deref(selected_tab_STAR_);
var on_change_tab = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (p1__79559_SHARP_){
return cljs.core.reset_BANG_(selected_tab_STAR_,p1__79559_SHARP_);
}));
var tabs = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([],(function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.export.single-file"),new cljs.core.Keyword(null,"id","id",-1388402092),"single"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.export.multiple-files"),new cljs.core.Keyword(null,"id","id",-1388402092),"multiple"], null)], null);
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_export_modal__export-modal-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.heading.heading_STAR_,{'level':(2),'typography':"headline-medium",'className':"main_ui_workspace_tokens_export_modal__export-modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.export-tokens")}),rumext.v2.jsx(app.main.ui.ds.layout.tab_switcher.tab_switcher_STAR_,{'tabs':tabs,'selected':selected_tab,'onChange':on_change_tab,'children':(function (){var G__79561 = selected_tab;
switch (G__79561) {
case "single":
return rumext.v2.jsx(app.main.ui.workspace.tokens.export$.modal.single_file_tab_STAR_,{});

break;
case "multiple":
return rumext.v2.jsx(app.main.ui.workspace.tokens.export$.modal.multi_file_tab_STAR_,{});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__79561)].join('')));

}
})()})]});
});

(app.main.ui.workspace.tokens.export$.modal.export_modal_body_STAR_.displayName = "export-modal-body*");


//# sourceMappingURL=app.main.ui.workspace.tokens.export.modal.js.map
