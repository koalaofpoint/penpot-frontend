import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.main.data.exports.files.js";
import "./app.main.data.modal.js";
import "./app.main.store.js";
import "./app.main.ui.ds.product.loader.js";
import "./app.main.ui.icons.js";
import "./app.util.dom.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.exports.files');
app.main.ui.exports.files.mark_file_error = (function app$main$ui$exports$files$mark_file_error(files,file_id){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__82862_SHARP_){
var G__82863 = p1__82862_SHARP_;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__82862_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__82863,new cljs.core.Keyword(null,"export-error?","export-error?",-1564759176),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
} else {
return G__82863;
}
}),files);
});
app.main.ui.exports.files.mark_file_success = (function app$main$ui$exports$files$mark_file_success(files,file_id){
return cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__82864_SHARP_){
var G__82865 = p1__82864_SHARP_;
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(file_id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__82864_SHARP_))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__82865,new cljs.core.Keyword(null,"export-success?","export-success?",1913775048),true,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"loading","loading",-737050189),false], 0));
} else {
return G__82865;
}
}),files);
});
/**
 * Initialize export dialog state
 */
app.main.ui.exports.files.initialize_state = (function app$main$ui$exports$files$initialize_state(files){
var files__$1 = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (file){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(file,new cljs.core.Keyword(null,"loading","loading",-737050189),true);
}),files);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"prepare","prepare",-1449654665),new cljs.core.Keyword(null,"selected","selected",574897764),new cljs.core.Keyword(null,"all","all",892129742),new cljs.core.Keyword(null,"files","files",-472457450),files__$1], null);
});
app.main.ui.exports.files.export_entry_STAR_ = (function app$main$ui$exports$files$export_entry_STAR_(props_82866){
var file = props_82866.file;
return rumext.v2.jsx("div",{'className':"main_ui_exports_files__file-entry"+" "+(cljs.core.truth_(new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(file))?"main_ui_exports_files__loading":"")+" "+(cljs.core.truth_(new cljs.core.Keyword(null,"export-success?","export-success?",1913775048).cljs$core$IFn$_invoke$arity$1(file))?"main_ui_exports_files__success":"")+" "+(cljs.core.truth_(new cljs.core.Keyword(null,"export-error?","export-error?",-1564759176).cljs$core$IFn$_invoke$arity$1(file))?"main_ui_exports_files__error":""),'children':rumext.v2.jsxs("div",{'className':"main_ui_exports_files__file-name",'children':[(cljs.core.truth_(new cljs.core.Keyword(null,"loading","loading",-737050189).cljs$core$IFn$_invoke$arity$1(file))?rumext.v2.jsx(app.main.ui.ds.product.loader.loader_STAR_,{'width':(16),'title':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.loading")}):rumext.v2.jsx("span",{'className':"main_ui_exports_files__file-icon",'children':(cljs.core.truth_(new cljs.core.Keyword(null,"export-success?","export-success?",1913775048).cljs$core$IFn$_invoke$arity$1(file))?app.main.ui.icons.tick:(cljs.core.truth_(new cljs.core.Keyword(null,"export-error?","export-error?",-1564759176).cljs$core$IFn$_invoke$arity$1(file))?app.main.ui.icons.close:null))})),rumext.v2.jsx("div",{'className':"main_ui_exports_files__file-name-label",'children':new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(file)})]})});
});

(app.main.ui.exports.files.export_entry_STAR_.displayName = "export-entry*");

app.main.ui.exports.files.export_dialog = (function app$main$ui$exports$files$export_dialog(props_82869){
var team_id = (props_82869["team-id"]);
var files = props_82869.files;
var state_STAR_ = rumext.v2.use_state.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.main.ui.exports.files.initialize_state,files));
var has_libs_QMARK_ = cljs.core.some(new cljs.core.Keyword(null,"has-libraries","has-libraries",1869731297),files);
var state = cljs.core.deref(state_STAR_);
var selected = new cljs.core.Keyword(null,"selected","selected",574897764).cljs$core$IFn$_invoke$arity$1(state);
var status = new cljs.core.Keyword(null,"status","status",-1997798413).cljs$core$IFn$_invoke$arity$1(state);
var start_export = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(team_id),rumext.v2.adapt(selected),rumext.v2.adapt(files)],(function (){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exporting","exporting",-2019585981));

return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2((function (p__82873){
var map__82874 = p__82873;
var map__82874__$1 = cljs.core.__destructure_map(map__82874);
var result = map__82874__$1;
var file_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82874__$1,new cljs.core.Keyword(null,"file-id","file-id",-811871323));
var error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82874__$1,new cljs.core.Keyword(null,"error","error",-978969032));
var filename = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82874__$1,new cljs.core.Keyword(null,"filename","filename",-1428840783));
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__82874__$1,new cljs.core.Keyword(null,"uri","uri",-774711847));
if(cljs.core.truth_(error)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"files","files",-472457450),app.main.ui.exports.files.mark_file_error,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_id], 0));
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(state_STAR_,cljs.core.update,new cljs.core.Keyword(null,"files","files",-472457450),app.main.ui.exports.files.mark_file_success,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([file_id], 0));

return app.util.dom.trigger_download_uri(filename,"application/penpot",uri);
}
}),app.main.data.exports.files.export_files.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"files","files",-472457450),files,new cljs.core.Keyword(null,"type","type",1174270348),selected], 0)));
}));
var on_cancel = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
app.util.dom.prevent_default(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.hide());
}));
var on_accept = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(start_export)],(function (event){
app.util.dom.prevent_default(event);

return (start_export.cljs$core$IFn$_invoke$arity$0 ? start_export.cljs$core$IFn$_invoke$arity$0() : start_export.call(null));
}));
var on_change = rumext.v2.use_fn.cljs$core$IFn$_invoke$arity$1((function (event){
var type = cljs.core.keyword.cljs$core$IFn$_invoke$arity$1(app.util.dom.get_data(app.util.dom.get_target(event),"type"));
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(state_STAR_,cljs.core.assoc,new cljs.core.Keyword(null,"selected","selected",574897764),type);
}));
rumext.v2.use_effect.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(has_libs_QMARK_)],(function (){
if(cljs.core.truth_(has_libs_QMARK_)){
return null;
} else {
return (start_export.cljs$core$IFn$_invoke$arity$0 ? start_export.cljs$core$IFn$_invoke$arity$0() : start_export.call(null));
}
}));

return rumext.v2.jsx("div",{'className':"main_ui_exports_files__modal-overlay",'children':rumext.v2.jsxs("div",{'className':"main_ui_exports_files__modal-container",'children':[rumext.v2.jsxs("div",{'className':"main_ui_exports_files__modal-header",'children':[rumext.v2.jsx("h2",{'className':"main_ui_exports_files__modal-title",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("files-download-modal.title")}),rumext.v2.jsx("button",{'onClick':on_cancel,'className':"main_ui_exports_files__modal-close-btn",'children':app.main.ui.icons.close})]}),((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"prepare","prepare",-1449654665)))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsxs("div",{'className':"main_ui_exports_files__modal-content",'children':[rumext.v2.jsx("p",{'className':"main_ui_exports_files__modal-msg",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("files-download-modal.description-1")}),rumext.v2.jsx("p",{'className':"main_ui_exports_files__modal-scd-msg",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("files-download-modal.description-2")}),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,type){
out_arr__46744__auto__.push(rumext.v2.jsx("div",{'className':"main_ui_exports_files__export-option",'children':rumext.v2.jsxs("label",{'htmlFor':["export-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),'className':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,type))?"checked":""),'children':[rumext.v2.jsx("span",{'className':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,type))?"checked":""),'children':((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,type))?app.main.ui.icons.status_tick:null)}),rumext.v2.jsxs("div",{'className':"main_ui_exports_files__option-content",'children':[rumext.v2.jsx("h3",{'className':"main_ui_exports_files__modal-subtitle",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1(""+"files-download-modal.options."+(app.common.data.name(type) ?? "")+".title")}),rumext.v2.jsx("p",{'className':"main_ui_exports_files__modal-msg",'children':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1(""+"files-download-modal.options."+(app.common.data.name(type) ?? "")+".message")})]}),rumext.v2.jsx("input",{'type':"radio",'id':["export-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(type)].join(''),'checked':cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(selected,type),'name':"export-option",'data-type':cljs.core.name(type),'onChange':on_change,'className':"main_ui_exports_files__option-input"})]})},cljs.core.name(type)));

return out_arr__46744__auto__;
}),[],app.main.data.exports.files.valid_types)]}),rumext.v2.jsx("div",{'className':"main_ui_exports_files__modal-footer",'children':rumext.v2.jsxs("div",{'className':"main_ui_exports_files__action-buttons",'children':[rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.cancel"),'onClick':on_cancel,'className':"main_ui_exports_files__cancel-button"}),rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.continue"),'onClick':on_accept,'className':"main_ui_exports_files__accept-btn"})]})})]}):((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(status,new cljs.core.Keyword(null,"exporting","exporting",-2019585981)))?rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("div",{'className':"main_ui_exports_files__modal-content",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,file){
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.exports.files.export_entry_STAR_,{'file':file},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(file) ?? "")));

return out_arr__46744__auto__;
}),[],new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(state))}),rumext.v2.jsx("div",{'className':"main_ui_exports_files__modal-footer",'children':rumext.v2.jsx("div",{'className':"main_ui_exports_files__action-buttons",'children':rumext.v2.jsx("input",{'type':"button",'value':app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("labels.close"),'disabled':cljs.core.some(new cljs.core.Keyword(null,"loading","loading",-737050189),new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(state)),'onClick':on_cancel,'className':"main_ui_exports_files__accept-btn"})})})]}):null))]})});
});

(app.main.ui.exports.files.export_dialog.displayName = "export-dialog");

cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.data.modal.components,(function (state__47156__auto__){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(state__47156__auto__,new cljs.core.Keyword("app.main.data.exports.files","export-files","app.main.data.exports.files/export-files",1145324384),app.main.ui.exports.files.export_dialog);
}));

//# sourceMappingURL=app.main.ui.exports.files.js.map
