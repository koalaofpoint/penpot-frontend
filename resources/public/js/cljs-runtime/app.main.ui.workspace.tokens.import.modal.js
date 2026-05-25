import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.data.workspace.tokens.errors.js";
import "./app.main.data.workspace.tokens.import_export.js";
import "./app.main.data.workspace.tokens.library_edit.js";
import "./app.main.store.js";
import "./app.main.ui.components.dropdown.js";
import "./app.main.ui.ds.buttons.button.js";
import "./app.main.ui.ds.controls.shared.options_dropdown.js";
import "./app.main.ui.ds.foundations.assets.icon.js";
import "./app.main.ui.ds.foundations.typography.heading.js";
import "./app.main.ui.ds.foundations.typography.text.js";
import "./app.main.ui.ds.notifications.context_notification.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./app.util.webapi.js";
import "./app.util.zip.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.tokens.import$.modal');
app.main.ui.workspace.tokens.import$.modal.on_stream_imported = (function app$main$ui$workspace$tokens$import$modal$on_stream_imported(type,tokens_lib_stream){
return beicon.v2.core.sub_BANG_.cljs$core$IFn$_invoke$arity$3(tokens_lib_stream,(function (lib){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(potok.v2.core.data_event.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.main.data.event","event","app.main.data.event/event",-1765150124),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),"import-tokens",new cljs.core.Keyword(null,"type","type",1174270348),type], null)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.workspace.tokens.library_edit.import_tokens_lib(lib)], 0));

return app.main.data.modal.hide_BANG_();
}),(function (err){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),app.main.data.workspace.tokens.errors.humanize_errors(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ex_data(err)], null)),new cljs.core.Keyword(null,"detail","detail",-1545345025),app.main.data.workspace.tokens.errors.detail_errors(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.ex_data(err)], null)),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032)], null)));
}));
});
app.main.ui.workspace.tokens.import$.modal.import_type_dropdown_STAR_ = (function app$main$ui$workspace$tokens$import$modal$import_type_dropdown_STAR_(props_56385){
var options = props_56385.options;
var text_render = props_56385.textRender;
var default$ = props_56385.default;
var on_click = props_56385.onClick;
var initial_option = (function (){var or__5025__auto__ = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56383_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__56383_SHARP_),default$);
}),options));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.first(options);
}
})();
var selected_option_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(initial_option);
var selected_option = cljs.core.deref(selected_option_STAR_);
var show_dropdown_QMARK_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(false);
var file_type_options = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(options)],(function (){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (option){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(option)),new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(option),new cljs.core.Keyword(null,"aria-label","aria-label",455891514),new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(option)], null);
}),options);
}));
var button_text = (cljs.core.truth_(text_render)?(text_render.cljs$core$IFn$_invoke$arity$1 ? text_render.cljs$core$IFn$_invoke$arity$1(selected_option) : text_render.call(null,selected_option)):new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(selected_option));
var toggle_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(show_dropdown_QMARK_,cljs.core.not);
}));
var close_dropdown = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return cljs.core.reset_BANG_(show_dropdown_QMARK_,false);
}));
var handle_option_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(options)],(function (event){
var target = app.util.dom.get_current_target(event);
var option_id = app.util.dom.get_attribute(target,"id");
var option = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__56384_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(p1__56384_SHARP_)),option_id);
}),options));
(close_dropdown.cljs$core$IFn$_invoke$arity$0 ? close_dropdown.cljs$core$IFn$_invoke$arity$0() : close_dropdown.call(null));

if(cljs.core.truth_(option)){
return cljs.core.reset_BANG_(selected_option_STAR_,option);
} else {
return null;
}
}));
var handle_main_click = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_click),rumext.v2.adapt(selected_option)],(function (event){
app.util.dom.prevent_default(event);

if(cljs.core.truth_((function (){var and__5023__auto__ = selected_option;
if(cljs.core.truth_(and__5023__auto__)){
return on_click;
} else {
return and__5023__auto__;
}
})())){
var G__56386 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(selected_option);
return (on_click.cljs$core$IFn$_invoke$arity$1 ? on_click.cljs$core$IFn$_invoke$arity$1(G__56386) : on_click.call(null,G__56386));
} else {
return null;
}
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_import_modal__dropdown-btn-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"primary",'type':"button",'className':"main_ui_workspace_tokens_import_modal__dropdown-btn",'onClick':handle_main_click,'children':button_text}),rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"primary",'type':"button",'className':"main_ui_workspace_tokens_import_modal__dropdown-trigger-btn",'icon':app.main.ui.ds.foundations.assets.icon.arrow_down,'onClick':toggle_dropdown,'aria-label':"Show options"}),rumext.v2.jsx(app.main.ui.components.dropdown.dropdown,{'show':cljs.core.deref(show_dropdown_QMARK_),'on-close':close_dropdown,'children':rumext.v2.jsx(app.main.ui.ds.controls.shared.options_dropdown.options_dropdown_STAR_,{'options':file_type_options,'selected':cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(selected_option)),'onClick':handle_option_click,'setRef':(function (_){
return null;
})})})]});
});

(app.main.ui.workspace.tokens.import$.modal.import_type_dropdown_STAR_.displayName = "import-type-dropdown*");

app.main.ui.workspace.tokens.import$.modal.has_token_files_QMARK_ = (function app$main$ui$workspace$tokens$import$modal$has_token_files_QMARK_(file_paths){
var and__5023__auto__ = cljs.core.seq(file_paths);
if(and__5023__auto__){
return cljs.core.some((function (p1__56387_SHARP_){
return cuerdas.core.ends_with_QMARK_(p1__56387_SHARP_,".json");
}),file_paths);
} else {
return and__5023__auto__;
}
});
app.main.ui.workspace.tokens.import$.modal.validate_token_files = (function app$main$ui$workspace$tokens$import$modal$validate_token_files(file_stream){
return beicon.v2.core.mapcat(cljs.core.identity,beicon.v2.core.tap.cljs$core$IFn$_invoke$arity$2((function (file_entries){
var file_paths = cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.first,file_entries);
if(cljs.core.truth_(app.main.ui.workspace.tokens.import$.modal.has_token_files_QMARK_(file_paths))){
return null;
} else {
throw app.main.data.workspace.tokens.errors.error_ex_info(new cljs.core.Keyword("error.import","no-token-files-found","error.import/no-token-files-found",-1804804754),file_paths,null);
}
}),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__56390){
var vec__56391 = p__56390;
var file_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56391,(0),null);
var file_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__56391,(1),null);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(acc,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_path,file_text], null));
}),cljs.core.PersistentVector.EMPTY,file_stream)));
});
app.main.ui.workspace.tokens.import$.modal.import_modal_body_STAR_ = (function app$main$ui$workspace$tokens$import$modal$import_modal_body_STAR_(props_56398){
var file_input_ref = rumext.v2.use_ref();
var dir_input_ref = rumext.v2.use_ref();
var zip_input_ref = rumext.v2.use_ref();
var on_display_file_explorer = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.dom.click(rumext.v2.ref_val(file_input_ref));
}));
var on_display_dir_explorer = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.dom.click(rumext.v2.ref_val(dir_input_ref));
}));
var on_display_zip_explorer = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.dom.click(rumext.v2.ref_val(zip_input_ref));
}));
var handle_import_action = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(on_display_file_explorer),rumext.v2.adapt(on_display_dir_explorer),rumext.v2.adapt(on_display_zip_explorer)],(function (val){
var G__56402 = val;
var G__56402__$1 = (((G__56402 instanceof cljs.core.Keyword))?G__56402.fqn:null);
switch (G__56402__$1) {
case "file":
return (on_display_file_explorer.cljs$core$IFn$_invoke$arity$0 ? on_display_file_explorer.cljs$core$IFn$_invoke$arity$0() : on_display_file_explorer.call(null));

break;
case "folder":
return (on_display_dir_explorer.cljs$core$IFn$_invoke$arity$0 ? on_display_dir_explorer.cljs$core$IFn$_invoke$arity$0() : on_display_dir_explorer.call(null));

break;
case "zip":
return (on_display_zip_explorer.cljs$core$IFn$_invoke$arity$0 ? on_display_zip_explorer.cljs$core$IFn$_invoke$arity$0() : on_display_zip_explorer.call(null));

break;
default:
return null;

}
}));
var on_import_directory = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var files = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (file){
var name = file.name;
var type = file.type;
return ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,"application/json")) || (cuerdas.core.ends_with_QMARK_(name,".json")));
}),app.util.dom.get_files(app.util.dom.get_target(event)));
app.main.ui.workspace.tokens.import$.modal.on_stream_imported("multiple",app.main.data.workspace.tokens.import_export.import_directory_stream(app.main.ui.workspace.tokens.import$.modal.validate_token_files(beicon.v2.core.mapcat((function (file){
return beicon.v2.core.map((function (file_text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [file.webkitRelativePath,file_text], null);
}),app.util.webapi.read_file_as_text(file));
}),beicon.v2.core.from(files)))));

return app.util.dom.set_value_BANG_(rumext.v2.ref_val(dir_input_ref),"");
}));
var on_import_zip_file = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var zipfile = cljs.core.first(app.util.dom.get_files(app.util.dom.get_target(event)));
var zipfile_name = cuerdas.core.strip_suffix(zipfile.name,".zip");
app.main.ui.workspace.tokens.import$.modal.on_stream_imported("zip",app.main.data.workspace.tokens.import_export.import_directory_stream(app.main.ui.workspace.tokens.import$.modal.validate_token_files(beicon.v2.core.mapcat((function (file_content){
var zip_reader = app.util.zip.reader(file_content);
return beicon.v2.core.finalize(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.util.zip.close,zip_reader),beicon.v2.core.mapcat((function (entries){
return beicon.v2.core.merge_map((function (entry){
var filename = ""+(zipfile_name ?? "")+"/"+(entry.filename ?? "");
var content_promise = app.util.zip.read_as_text(entry);
return beicon.v2.core.from(content_promise.then((function (text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [filename,text], null);
})));
}),beicon.v2.core.filter((function (entry){
var filename = entry.filename;
return cuerdas.core.ends_with_QMARK_(filename,".json");
}),beicon.v2.core.from(entries)));
}),beicon.v2.core.from(app.util.zip.get_entries(zip_reader))));
}),app.util.webapi.read_file_as_array_buffer(zipfile)))));

return app.util.dom.set_value_BANG_(rumext.v2.ref_val(zip_input_ref),"");
}));
var on_import_json_file = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var file = cljs.core.first(app.util.dom.get_files(app.util.dom.get_target(event)));
app.main.ui.workspace.tokens.import$.modal.on_stream_imported("single",app.main.data.workspace.tokens.import_export.import_file_stream(file.name,app.util.webapi.read_file_as_text(file)));

return app.util.dom.set_value_BANG_(rumext.v2.ref_val(file_input_ref),"");
}));
var render_button_text = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (option){
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.import-button-prefix",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(option)], 0));
}));
return rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_import_modal__import-modal-wrapper",'children':[rumext.v2.jsx(app.main.ui.ds.foundations.typography.heading.heading_STAR_,{'level':(2),'typography':"headline-medium",'className':"main_ui_workspace_tokens_import_modal__import-modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.import-tokens")}),rumext.v2.jsxs(app.main.ui.ds.foundations.typography.text.text_STAR_,{'as':"ul",'typography':"body-medium",'className':"main_ui_workspace_tokens_import_modal__import-description",'children':[rumext.v2.jsx("li",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.import-single-file")}),rumext.v2.jsx("li",{'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.import-multiple-files")})]}),rumext.v2.jsx(app.main.ui.ds.notifications.context_notification.context_notification_STAR_,{'type':new cljs.core.Keyword(null,"context","context",-830191113),'appearance':"neutral",'level':"default",'isHtml':true,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.import-warning")}),rumext.v2.jsxs("div",{'className':"main_ui_workspace_tokens_import_modal__import-actions",'children':[rumext.v2.jsx("input",{'type':"file",'ref':file_input_ref,'style':{'display':"none"},'accept':".json",'onChange':on_import_json_file}),rumext.v2.jsx("input",{'type':"file",'ref':zip_input_ref,'style':{'display':"none"},'accept':".zip",'onChange':on_import_zip_file}),rumext.v2.jsx("input",{'type':"file",'ref':dir_input_ref,'style':{'display':"none"},'accept':"",'webkitdirectory':"true",'onChange':on_import_directory}),rumext.v2.jsx(app.main.ui.ds.buttons.button.button_STAR_,{'variant':"secondary",'type':"button",'onClick':app.main.data.modal.hide_BANG_,'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.cancel")}),rumext.v2.jsx(app.main.ui.workspace.tokens.import$.modal.import_type_dropdown_STAR_,{'options':new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.import-menu-json-option"),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"file","file",-1269645878)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.import-menu-zip-option"),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"zip","zip",678448180)], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.import-menu-folder-option"),new cljs.core.Keyword(null,"value","value",305978217),new cljs.core.Keyword(null,"folder","folder",1515881736)], null)], null),'onClick':handle_import_action,'textRender':render_button_text,'default':new cljs.core.Keyword(null,"file","file",-1269645878)})]})]});
});

(app.main.ui.workspace.tokens.import$.modal.import_modal_body_STAR_.displayName = "import-modal-body*");


//# sourceMappingURL=app.main.ui.workspace.tokens.import.modal.js.map
