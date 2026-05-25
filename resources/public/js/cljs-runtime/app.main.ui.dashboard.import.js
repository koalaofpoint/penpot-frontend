import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.exceptions.js";
import "./app.common.logging.js";
import "./app.main.data.dashboard.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.store.js";
import "./app.main.ui.components.file_uploader.js";
import "./app.main.ui.ds.product.loader.js";
import "./app.main.ui.icons.js";
import "./app.main.ui.notifications.context_notification.js";
import "./app.main.worker.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.keyboard.js";
import "./app.util.webapi.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.dashboard.import$');
app.common.logging.loggers.set("app.main.ui.dashboard.import",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"debug","debug",-1608172596)));
app.main.ui.dashboard.import$.emit_delay = (200);
app.main.ui.dashboard.import$.use_import_file = (function app$main$ui$dashboard$import$use_import_file(project_id,on_finish_import){
return rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(project_id),rumext.v2.adapt(on_finish_import)],(function (entries){
var entries__$1 = cljs.core.not_empty(cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (file){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),file.name,new cljs.core.Keyword(null,"uri","uri",-774711847),app.util.webapi.create_uri(file)], null);
}),entries));
if(cljs.core.truth_(entries__$1)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"import","import",-1399500709),new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id,new cljs.core.Keyword(null,"entries","entries",-86943161),entries__$1,new cljs.core.Keyword(null,"on-finish-import","on-finish-import",1088832986),on_finish_import], null)));
} else {
return null;
}
}));
});
app.main.ui.dashboard.import$.import_form = rumext.v2.forward_ref((function app$main$ui$dashboard$import$import_form(props_53129,external_ref){
var on_finish_import = (props_53129["on-finish-import"]);
var project_id = (props_53129["project-id"]);
var on_file_selected = app.main.ui.dashboard.import$.use_import_file(project_id,on_finish_import);
return rumext.v2.jsx("form",{'className':"import-file",'aria-hidden':"true",'children':rumext.v2.jsx(app.main.ui.components.file_uploader.file_uploader,{'accept':".penpot,.zip",'multi':true,'ref':external_ref,'on-selected':on_file_selected})});
}));

(app.main.ui.dashboard.import$.import_form.displayName = "import-form");

app.main.ui.dashboard.import$.update_entry_name = (function app$main$ui$dashboard$import$update_entry_name(entries,file_id,new_name){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (entry){
var new_name__$1 = cuerdas.core.trim.cljs$core$IFn$_invoke$arity$1(new_name);
var G__53132 = entry;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(entry),file_id)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("",new_name__$1)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53132,new cljs.core.Keyword(null,"name","name",1843675177),new_name__$1);
} else {
return G__53132;
}
}),entries);
});
app.main.ui.dashboard.import$.remove_entry = (function app$main$ui$dashboard$import$remove_entry(entries,file_id){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (entry){
var G__53133 = entry;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(entry),file_id)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__53133,new cljs.core.Keyword(null,"deleted","deleted",-510100639),true);
} else {
return G__53133;
}
}),entries);
});
app.main.ui.dashboard.import$.update_with_analyze_result = (function app$main$ui$dashboard$import$update_with_analyze_result(entries,p__53136){
var map__53138 = p__53136;
var map__53138__$1 = cljs.core.__destructure_map(map__53138);
var updated = map__53138__$1;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53138__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var status = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__53138__$1,new cljs.core.Keyword(null,"status","status",-1997798413));
var entries__$1 = cljs.core.filterv(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.uuid_QMARK_,new cljs.core.Keyword(null,"file-id","file-id",-811871323)),entries);
var status__$1 = (function (){var G__53139 = status;
var G__53139__$1 = (((G__53139 instanceof cljs.core.Keyword))?G__53139.fqn:null);
switch (G__53139__$1) {
case "success":
return new cljs.core.Keyword(null,"import-ready","import-ready",-1694649791);

break;
case "error":
return new cljs.core.Keyword(null,"analyze-error","analyze-error",-2139543576);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53139__$1)].join('')));

}
})();
var updated__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(updated,new cljs.core.Keyword(null,"status","status",-1997798413),status__$1);
if(cljs.core.truth_(cljs.core.some((function (p1__53134_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(p1__53134_SHARP_));
}),entries__$1))){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (entry){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(entry),file_id)){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([entry,updated__$1], 0));
} else {
return entry;
}
}),entries__$1);
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(entries__$1,updated__$1);
}
});
app.main.ui.dashboard.import$.update_entry_status = (function app$main$ui$dashboard$import$update_entry_status(entries,message){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (entry){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(entry),new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(message))){
var status = (function (){var G__53141 = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(message);
var G__53141__$1 = (((G__53141 instanceof cljs.core.Keyword))?G__53141.fqn:null);
switch (G__53141__$1) {
case "progress":
return new cljs.core.Keyword(null,"import-progress","import-progress",-1408128405);

break;
case "finish":
return new cljs.core.Keyword(null,"import-success","import-success",-1164176997);

break;
case "error":
return new cljs.core.Keyword(null,"import-error","import-error",1672727808);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__53141__$1)].join('')));

}
})();
return app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(entry,new cljs.core.Keyword(null,"progress","progress",244323547),new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(message)),new cljs.core.Keyword(null,"status","status",-1997798413),status),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(message)));
} else {
return entry;
}
}),entries);
});
app.main.ui.dashboard.import$.parse_progress_message = (function app$main$ui$dashboard$import$parse_progress_message(message){
var G__53142 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(message);
var G__53142__$1 = (((G__53142 instanceof cljs.core.Keyword))?G__53142.fqn:null);
switch (G__53142__$1) {
case "upload-data":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.import.progress.upload-data",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"current","current",-1088038603).cljs$core$IFn$_invoke$arity$1(message),new cljs.core.Keyword(null,"total","total",1916810418).cljs$core$IFn$_invoke$arity$1(message)], 0));

break;
case "upload-media":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.import.progress.upload-media",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(message)], 0));

break;
case "process-page":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.import.progress.process-page",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(message)], 0));

break;
case "process-colors":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.import.progress.process-colors");

break;
case "process-typographies":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.import.progress.process-typographies");

break;
case "process-media":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.import.progress.process-media");

break;
case "process-components":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.import.progress.process-components");

break;
case "process-deleted-components":
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.import.progress.process-components");

break;
default:
return "";

}
});
app.main.ui.dashboard.import$.has_status_analyze_QMARK_ = (function app$main$ui$dashboard$import$has_status_analyze_QMARK_(item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"analyze","analyze",-766389120));
});
app.main.ui.dashboard.import$.has_status_import_success_QMARK_ = (function app$main$ui$dashboard$import$has_status_import_success_QMARK_(item){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"import-success","import-success",-1164176997));
});
app.main.ui.dashboard.import$.has_status_error_QMARK_ = (function app$main$ui$dashboard$import$has_status_error_QMARK_(item){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"import-error","import-error",1672727808))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(item),new cljs.core.Keyword(null,"analyze-error","analyze-error",-2139543576))));
});
app.main.ui.dashboard.import$.has_status_ready_QMARK_ = (function app$main$ui$dashboard$import$has_status_ready_QMARK_(item){
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import-ready","import-ready",-1694649791),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(item))) && (cljs.core.not(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(item))));
});
app.main.ui.dashboard.import$.analyze_entries = (function app$main$ui$dashboard$import$analyze_entries(state,entries){
var features__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"features","features",-1146962336));
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (message){
if((!((new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(message) == null)))){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"import-files-error",new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(message)], null)));
} else {
}

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,app.main.ui.dashboard.import$.update_with_analyze_result,message);
}),beicon.v2.core.filter(cljs.core.some_QMARK_,beicon.v2.core.mapcat((function (p1__53143_SHARP_){
return beicon.v2.core.delay((200),beicon.v2.core.of(p1__53143_SHARP_));
}),app.main.worker.ask_many_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword(null,"analyze-import","analyze-import",-2025506043),new cljs.core.Keyword(null,"files","files",-472457450),entries,new cljs.core.Keyword(null,"features","features",-1146962336),features__$1], null)))));
});
app.main.ui.dashboard.import$.import_files = (function app$main$ui$dashboard$import$import_files(state,project_id,entries){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"import-files",new cljs.core.Keyword(null,"num-files","num-files",1227997359),cljs.core.count(entries)], null)));

var features__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.Keyword(null,"features","features",-1146962336));
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (message){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state,app.main.ui.dashboard.import$.update_entry_status,message);
}),beicon.v2.core.filter(cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.uuid_QMARK_,new cljs.core.Keyword(null,"file-id","file-id",-811871323)),app.main.worker.ask_many_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword(null,"import-files","import-files",1048427091),new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id,new cljs.core.Keyword(null,"files","files",-472457450),entries,new cljs.core.Keyword(null,"features","features",-1146962336),features__$1], null))));
});
app.main.ui.dashboard.import$.import_entry_STAR_ = rumext.v2.memo_SINGLEQUOTE_((function app$main$ui$dashboard$import$import_entry_STAR_(props_53158){
var edition = props_53158.edition;
var can_be_deleted = props_53158.canBeDeleted;
var on_change = props_53158.onChange;
var entries = props_53158.entries;
var on_delete = props_53158.onDelete;
var on_edit = props_53158.onEdit;
var entry = props_53158.entry;
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(entry);
var format = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry);
var loading_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"analyze","analyze",-766389120),status)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import-progress","import-progress",-1408128405),status)));
var analyze_error_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"analyze-error","analyze-error",-2139543576),status);
var import_success_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import-success","import-success",-1164176997),status);
var import_error_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import-error","import-error",1672727808),status);
var import_ready_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import-ready","import-ready",-1694649791),status);
var is_shared_QMARK_ = new cljs.core.Keyword(null,"shared","shared",-384145993).cljs$core$IFn$_invoke$arity$1(entry);
var progress = new cljs.core.Keyword(null,"progress","progress",244323547).cljs$core$IFn$_invoke$arity$1(entry);
var file_id = new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(entry);
var editing_QMARK_ = (((!((file_id == null)))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(edition,file_id)));
var editable_QMARK_ = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"legacy-zip","legacy-zip",1673362658),format)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"import-ready","import-ready",-1694649791))));
var on_edit_key_press = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
if(cljs.core.truth_((function (){var or__5025__auto__ = app.util.keyboard.enter_QMARK_(event);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.keyboard.esc_QMARK_(event);
}
})())){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

return app.util.dom.blur_BANG_(app.util.dom.get_target(event));
} else {
return null;
}
}));
var on_edit_blur = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(on_change)],(function (event){
var value = app.util.dom.get_target_val(event);
return (on_change.cljs$core$IFn$_invoke$arity$3 ? on_change.cljs$core$IFn$_invoke$arity$3(file_id,value,event) : on_change.call(null,file_id,value,event));
}));
var on_edit_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(on_change)],(function (event){
if(cljs.core.fn_QMARK_(on_edit)){
return (on_edit.cljs$core$IFn$_invoke$arity$2 ? on_edit.cljs$core$IFn$_invoke$arity$2(file_id,event) : on_edit.call(null,file_id,event));
} else {
return null;
}
}));
var on_delete_SINGLEQUOTE_ = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(file_id),rumext.v2.adapt(on_delete)],(function (event){
if(cljs.core.fn_QMARK_(on_delete)){
return (on_delete.cljs$core$IFn$_invoke$arity$2 ? on_delete.cljs$core$IFn$_invoke$arity$2(file_id,event) : on_delete.call(null,file_id,event));
} else {
return null;
}
}));
return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_import__file-entry"+" "+((loading_QMARK_)?"main_ui_dashboard_import__loading":"")+" "+((import_success_QMARK_)?"main_ui_dashboard_import__success":"")+" "+((((import_error_QMARK_) || (analyze_error_QMARK_)))?"main_ui_dashboard_import__error":"")+" "+((((import_ready_QMARK_) && ((!(editing_QMARK_)))))?"main_ui_dashboard_import__editable":""),'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_import__file-name",'children':[((loading_QMARK_)?rumext.v2.jsx(app.main.ui.ds.product.loader.loader_STAR_,{'width':(16),'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.loading")}):rumext.v2.jsx("div",{'className':"main_ui_dashboard_import__file-icon"+" "+((import_ready_QMARK_)?"main_ui_dashboard_import__icon-fill":""),'children':((import_ready_QMARK_)?app.main.ui.icons.logo_icon:((import_error_QMARK_)?app.main.ui.icons.close:((import_success_QMARK_)?app.main.ui.icons.tick:((analyze_error_QMARK_)?app.main.ui.icons.close:null))))})),((editing_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_dashboard_import__file-name-edit",'children':rumext.v2.jsx("input",{'type':"text",'autoFocus':true,'defaultValue':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entry),'onKeyPress':on_edit_key_press,'onBlur':on_edit_blur})}):rumext.v2.jsxs("div",{'className':"main_ui_dashboard_import__file-name-label",'children':[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entry),((is_shared_QMARK_)?rumext.v2.jsx("span",{'className':"main_ui_dashboard_import__icon",'children':app.main.ui.icons.library}):null)]})),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_import__edit-entry-buttons",'children':[((editable_QMARK_)?rumext.v2.jsx("button",{'onClick':on_edit_SINGLEQUOTE_,'children':app.main.ui.icons.curve}):null),((can_be_deleted)?rumext.v2.jsx("button",{'onClick':on_delete_SINGLEQUOTE_,'children':app.main.ui.icons.delete$}):null)]})]}),((analyze_error_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_dashboard_import__error-message",'children':(((!((new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(entry) == null))))?app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(entry)):app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.import.analyze-error"))}):((import_error_QMARK_)?rumext.v2.jsx("div",{'className':"main_ui_dashboard_import__error-message",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.error")}):(((((!(import_success_QMARK_))) && ((!((progress == null))))))?rumext.v2.jsx("div",{'className':"main_ui_dashboard_import__progress-message",'children':app.main.ui.dashboard.import$.parse_progress_message(progress)}):null))),rumext.v2.jsx("div",{'className':"main_ui_dashboard_import__linked-libraries",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,library_id){
out_arr__35152__auto__.push((function (){var library_data = app.common.data.seek.cljs$core$IFn$_invoke$arity$2((function (p1__53156_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(library_id,new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(p1__53156_SHARP_));
}),entries);
var error_QMARK_ = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(library_data);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"import-error","import-error",1672727808).cljs$core$IFn$_invoke$arity$1(library_data);
}
})();
if((!((library_data == null)))){
return rumext.v2.jsxs("div",{'className':"main_ui_dashboard_import__linked-library",'children':[new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(library_data),rumext.v2.jsx("span",{'className':"main_ui_dashboard_import__linked-library-tag"+" "+(cljs.core.truth_(error_QMARK_)?"main_ui_dashboard_import__error":""),'children':app.main.ui.icons.detach})]},""+(library_id ?? ""));
} else {
return null;
}
})());

return out_arr__35152__auto__;
}),[],new cljs.core.Keyword(null,"libraries","libraries",-303286011).cljs$core$IFn$_invoke$arity$1(entry))})]});
}));

(app.main.ui.dashboard.import$.import_entry_STAR_.displayName = "import-entry*");

app.main.ui.dashboard.import$.initialize_state = (function app$main$ui$dashboard$import$initialize_state(entries){
return (function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__53171_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__53171_SHARP_,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"analyze","analyze",-766389120));
}),entries);
});
});
app.main.ui.dashboard.import$.import_dialog = (function app$main$ui$dashboard$import$import_dialog(props_53177){
var on_finish_import = (props_53177["on-finish-import"]);
var project_id = (props_53177["project-id"]);
var entries = props_53177.entries;
var template = props_53177.template;
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
return (function (){
return cljs.core.run_BANG_(app.util.webapi.revoke_uri,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"uri","uri",-774711847),entries));
});
}));

var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(app.main.ui.dashboard.import$.initialize_state(entries));
var entries__$1 = cljs.core.deref(state_STAR_);
var status_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"analyze","analyze",-766389120));
var status = cljs.core.deref(status_STAR_);
var edition_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(null);
var edition = cljs.core.deref(edition_STAR_);
var continue_entries = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(entries__$1)],(function (){
var entries__$2 = cljs.core.filterv(app.main.ui.dashboard.import$.has_status_ready_QMARK_,entries__$1);
cljs.core.reset_BANG_(status_STAR_,new cljs.core.Keyword(null,"import-progress","import-progress",-1408128405));

return app.main.ui.dashboard.import$.import_files(state_STAR_,project_id,entries__$2);
}));
var continue_template = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_finish_import)],(function (template__$1){
var on_success = (function (_event){
cljs.core.reset_BANG_(status_STAR_,new cljs.core.Keyword(null,"import-success","import-success",-1164176997));

if(cljs.core.fn_QMARK_(on_finish_import)){
return (on_finish_import.cljs$core$IFn$_invoke$arity$0 ? on_finish_import.cljs$core$IFn$_invoke$arity$0() : on_finish_import.call(null));
} else {
return null;
}
});
var on_error = (function (cause){
cljs.core.reset_BANG_(status_STAR_,new cljs.core.Keyword(null,"error","error",-978969032));

app.common.exceptions.print_throwable(cause);

return beicon.v2.core.of(app.main.data.modal.hide(),app.main.data.notifications.error(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.libraries-and-templates.import-error")));
});
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id,new cljs.core.Keyword(null,"template-id","template-id",1952916477),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(template__$1)], null);
cljs.core.reset_BANG_(status_STAR_,new cljs.core.Keyword(null,"import-progress","import-progress",-1408128405));

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.dashboard.clone_template(cljs.core.with_meta(params,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"on-success","on-success",1786904109),on_success,new cljs.core.Keyword(null,"on-error","on-error",1728533530),on_error], null))));
}));
var on_edit = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (file_id,_event){
return cljs.core.reset_BANG_(edition_STAR_,file_id);
}));
var on_entry_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (file_id,value){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(edition_STAR_,cljs.core.constantly(null));

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,app.main.ui.dashboard.import$.update_entry_name,file_id,value);
}));
var on_entry_delete = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (file_id){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$3(state_STAR_,app.main.ui.dashboard.import$.remove_entry,file_id);
}));
var on_cancel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(edition)],(function (event){
if((edition == null)){
app.util.dom.prevent_default(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());
} else {
return null;
}
}));
var on_continue = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(continue_template),rumext.v2.adapt(continue_entries)],(function (event){
app.util.dom.prevent_default(event);

if((!((template == null)))){
return (continue_template.cljs$core$IFn$_invoke$arity$1 ? continue_template.cljs$core$IFn$_invoke$arity$1(template) : continue_template.call(null,template));
} else {
return (continue_entries.cljs$core$IFn$_invoke$arity$0 ? continue_entries.cljs$core$IFn$_invoke$arity$0() : continue_entries.call(null));
}
}));
var on_accept = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_finish_import)],(function (event){
app.util.dom.prevent_default(event);

app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());

if(cljs.core.fn_QMARK_(on_finish_import)){
return (on_finish_import.cljs$core$IFn$_invoke$arity$0 ? on_finish_import.cljs$core$IFn$_invoke$arity$0() : on_finish_import.call(null));
} else {
return null;
}
}));
var entries__$2 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(entries__$1)],(function (){
return cljs.core.filterv(cljs.core.complement(new cljs.core.Keyword(null,"deleted","deleted",-510100639)),entries__$1);
}));
var import_success_total = (((!((template == null))))?(1):cljs.core.count(cljs.core.filterv(app.main.ui.dashboard.import$.has_status_import_success_QMARK_,entries__$2)));
var errors_QMARK_ = (((!((template == null))))?cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"error","error",-978969032)):(function (){var or__5025__auto__ = cljs.core.some(app.main.ui.dashboard.import$.has_status_error_QMARK_,entries__$2);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (cljs.core.count(entries__$2) === (0));
}
})());
var pending_analysis_QMARK_ = cljs.core.some(app.main.ui.dashboard.import$.has_status_analyze_QMARK_,entries__$2);
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(entries__$2)],(function (){
if((!((template == null)))){
return cljs.core.reset_BANG_(status_STAR_,new cljs.core.Keyword(null,"import-ready","import-ready",-1694649791));
} else {
if(((cljs.core.seq(entries__$2)) && (cljs.core.every_QMARK_((function (p1__53172_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import-ready","import-ready",-1694649791),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__53172_SHARP_));
}),entries__$2)))){
return cljs.core.reset_BANG_(status_STAR_,new cljs.core.Keyword(null,"import-ready","import-ready",-1694649791));
} else {
if(((cljs.core.seq(entries__$2)) && (cljs.core.every_QMARK_((function (p1__53173_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import-success","import-success",-1164176997),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__53173_SHARP_));
}),entries__$2)))){
return cljs.core.reset_BANG_(status_STAR_,new cljs.core.Keyword(null,"import-success","import-success",-1164176997));
} else {
if(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core.seq(entries__$2);
if(and__5023__auto__){
var and__5023__auto____$1 = cljs.core.every_QMARK_((function (p1__53174_SHARP_){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import-ready","import-ready",-1694649791),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__53174_SHARP_));
}),entries__$2);
if(and__5023__auto____$1){
return cljs.core.some((function (p1__53175_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import-error","import-error",1672727808),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(p1__53175_SHARP_));
}),entries__$2);
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
})())){
return cljs.core.reset_BANG_(status_STAR_,new cljs.core.Keyword(null,"import-error","import-error",1672727808));
} else {
return null;
}
}
}
}
}));

rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([],(function (){
var sub = app.main.ui.dashboard.import$.analyze_entries(state_STAR_,entries__$2);
return cljs.core.partial.cljs$core$IFn$_invoke$arity$2(beicon.v2.core.dispose_BANG_,sub);
}));

return rumext.v2.jsx("div",{'className':"main_ui_dashboard_import__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_dashboard_import__modal-container",'children':[rumext.v2.jsxs("div",{'className':"main_ui_dashboard_import__modal-header",'children':[rumext.v2.jsx("h2",{'className':"main_ui_dashboard_import__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.import")}),rumext.v2.jsx("button",{'onClick':on_cancel,'className':"main_ui_dashboard_import__modal-close-btn",'children':app.main.ui.icons.close})]}),rumext.v2.jsxs("div",{'className':"main_ui_dashboard_import__modal-content",'children':[(cljs.core.truth_((function (){var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"analyze","analyze",-766389120),status);
if(and__5023__auto__){
return errors_QMARK_;
} else {
return and__5023__auto__;
}
})())?rumext.v2.jsx(app.main.ui.notifications.context_notification.context_notification,{'level':new cljs.core.Keyword(null,"warning","warning",-1685650671),'class':"main_ui_dashboard_import__context-notification-error",'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.import.import-warning")}):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import-success","import-success",-1164176997),status))?rumext.v2.jsx(app.main.ui.notifications.context_notification.context_notification,{'level':(((import_success_total === (0)))?new cljs.core.Keyword(null,"warning","warning",-1685650671):new cljs.core.Keyword(null,"success","success",1890645906)),'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("dashboard.import.import-message",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.util.i18n.c(import_success_total)], 0))}):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import-error","import-error",1672727808),status))?rumext.v2.jsx(app.main.ui.notifications.context_notification.context_notification,{'level':new cljs.core.Keyword(null,"error","error",-978969032),'class':"main_ui_dashboard_import__context-notification-error",'content':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.import.import-error.disclaimer")}):null),(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import-error","import-error",1672727808),status);
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"analyze","analyze",-766389120),status);
if(and__5023__auto__){
return errors_QMARK_;
} else {
return and__5023__auto__;
}
}
})())?rumext.v2.jsxs("div",{'className':"main_ui_dashboard_import__import-error-disclaimer",'children':[rumext.v2.jsx("div",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.import.import-error.message1")}),rumext.v2.jsx("ul",{'className':"main_ui_dashboard_import__import-error-list",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,entry){
out_arr__35152__auto__.push(((cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"import-error","import-error",1672727808),null,new cljs.core.Keyword(null,"analyze-error","analyze-error",-2139543576),null], null), null),new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(entry)))?rumext.v2.jsx("li",{'className':"main_ui_dashboard_import__import-error-list-enry",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(entry)}):null));

return out_arr__35152__auto__;
}),[],entries__$2)}),rumext.v2.jsx("div",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("dashboard.import.import-error.message2")})]}):cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,entry){
out_arr__35152__auto__.push(rumext.v2.jsx(app.main.ui.dashboard.import$.import_entry_STAR_,{'edition':edition,'entry':entry,'entries':entries__$2,'onEdit':on_edit,'onChange':on_entry_change,'onDelete':on_entry_delete,'canBeDeleted':(cljs.core.count(entries__$2) > (1))},""+(new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(entry) ?? "")+"/"+(new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(entry) ?? "")));

return out_arr__35152__auto__;
}),[],entries__$2)),(((!((template == null))))?rumext.v2.jsx(app.main.ui.dashboard.import$.import_entry_STAR_,{'entry':cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(template,new cljs.core.Keyword(null,"status","status",-1997798413),status),'canBeDeleted':false}):null)]}),rumext.v2.jsx("div",{'className':"main_ui_dashboard_import__modal-footer",'children':rumext.v2.jsxs("div",{'className':"main_ui_dashboard_import__action-buttons",'children':[((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"analyze","analyze",-766389120),status))?rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.cancel"),'onClick':on_cancel,'className':"main_ui_dashboard_import__cancel-button"}):null),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"import-ready","import-ready",-1694649791)))?rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.continue"),'disabled':pending_analysis_QMARK_,'onClick':on_continue,'className':"main_ui_dashboard_import__accept-btn"}):null),((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import-success","import-success",-1164176997),status)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import-error","import-error",1672727808),status)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import-progress","import-progress",-1408128405),status))))))?rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.accept"),'disabled':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"import-progress","import-progress",-1408128405),status),'onClick':on_accept,'className':"main_ui_dashboard_import__accept-btn"}):null)]})})]})});
});

(app.main.ui.dashboard.import$.import_dialog.displayName = "import-dialog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__35552__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__35552__auto__,new cljs.core.Keyword(null,"import","import",-1399500709),app.main.ui.dashboard.import$.import_dialog);
}));

//# sourceMappingURL=app.main.ui.dashboard.import.js.map
