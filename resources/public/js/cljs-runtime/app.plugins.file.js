import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.time.js";
import "./app.common.uuid.js";
import "./app.config.js";
import "./app.main.data.exports.files.js";
import "./app.main.data.plugins.js";
import "./app.main.data.workspace.js";
import "./app.main.data.workspace.versions.js";
import "./app.main.repo.js";
import "./app.main.store.js";
import "./app.main.worker.js";
import "./app.plugins.format.js";
import "./app.plugins.page.js";
import "./app.plugins.parser.js";
import "./app.plugins.register.js";
import "./app.plugins.user.js";
import "./app.plugins.utils.js";
import "./app.util.http.js";
import "./app.util.object.js";
import "./beicon.v2.core.js";
goog.provide('app.plugins.file');
app.plugins.file.file_version_proxy_QMARK_ = (function app$plugins$file$file_version_proxy_QMARK_(proxy){
return app.util.object.type_of_QMARK_(proxy,"FileVersionProxy");
});
app.plugins.file.file_version_proxy = (function app$plugins$file$file_version_proxy(plugin_id,file_id,users,data){
var data__$1 = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(data);
var obj_64372 = ({});
var to_string_64371 = (function (){
return "FileVersionProxy";
});
var obj_64372_target_64376_64682 = obj_64372;
var prop_get_fn__64384_64683 = (function (){
var obj_64372_this_64375 = this;
var internal_fn__64378 = to_string_64371;
return internal_fn__64378.call(obj_64372_this_64375);
});
var prop_get_fn__64391_64684 = (function (){
var obj_64372_this_64375 = this;
var internal_fn__64385 = to_string_64371;
return internal_fn__64385.call(obj_64372_this_64375);
});
var prop_get_fn_plugin_64398_64685 = (function (){
var obj_64372_this_64375 = this;
var internal_fn_plugin_64392 = (function (){
return plugin_id;
});
return internal_fn_plugin_64392.call(obj_64372_this_64375);
});
var prop_get_fn_file_64405_64686 = (function (){
var obj_64372_this_64375 = this;
var internal_fn_file_64399 = (function (){
return file_id;
});
return internal_fn_file_64399.call(obj_64372_this_64375);
});
var prop_get_fn_label_64412_64687 = (function (){
var obj_64372_this_64375 = this;
var internal_fn_label_64406 = (function (){
return new cljs.core.Keyword(null,"label","label",1718410804).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data__$1));
});
return internal_fn_label_64406.call(obj_64372_this_64375);
});
var schema_label_64409_64688 = null;
var coercer_fn_label_64407_64689 = (((((!((schema_label_64409_64688 == null)))) && ((!(cljs.core.fn_QMARK_(schema_label_64409_64688))))))?app.common.schema.coercer(schema_label_64409_64688):null);
var decode_fn_label_64408_64690 = app.common.json.__GT_clj;
var prop_set_fn_label_64413_64691 = (function (val_label_64411){
var obj_64372_this_64375 = this;
var internal_fn_label_64406 = (function (value){
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"label","label",1718410804),"Plugin doesn't have 'content:write' permission");
} else {
if((((!(typeof value === 'string'))) || (cljs.core.empty_QMARK_(value)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"label","label",1718410804),value);
} else {
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(data__$1,cljs.core.assoc,new cljs.core.Keyword(null,"label","label",1718410804),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"created-by","created-by",-1870794445),"user"], 0));

return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$2(cljs.core.identity,beicon.v2.core.take((1),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-file-snapshot","update-file-snapshot",149964604),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data__$1)),new cljs.core.Keyword(null,"label","label",1718410804),value], null))));

}
}
});
return internal_fn_label_64406.call(obj_64372_this_64375,val_label_64411);
});
var prop_get_fn_createdby_64420_64692 = (function (){
var obj_64372_this_64375 = this;
var internal_fn_createdby_64414 = (function (){
var temp__5825__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(users,new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data__$1)));
if(cljs.core.truth_(temp__5825__auto__)){
var user_data = temp__5825__auto__;
return app.plugins.user.user_proxy(plugin_id,user_data);
} else {
return null;
}
});
return internal_fn_createdby_64414.call(obj_64372_this_64375);
});
var prop_get_fn_createdat_64427_64693 = (function (){
var obj_64372_this_64375 = this;
var internal_fn_createdat_64421 = (function (){
return new cljs.core.Keyword(null,"created-at","created-at",-89248644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data__$1)).toJSDate();
});
return internal_fn_createdat_64421.call(obj_64372_this_64375);
});
var prop_get_fn_isautosave_64434_64694 = (function (){
var obj_64372_this_64375 = this;
var internal_fn_isautosave_64428 = (function (){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("system",new cljs.core.Keyword(null,"created-by","created-by",-1870794445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data__$1)));
});
return internal_fn_isautosave_64428.call(obj_64372_this_64375);
});
var schema_restore_64438_64695 = null;
var coercer_fn_restore_64436_64696 = (((((!((schema_restore_64438_64695 == null)))) && ((!(cljs.core.fn_QMARK_(schema_restore_64438_64695))))))?app.common.schema.coercer(schema_restore_64438_64695):null);
var decode_fn_restore_64437_64697 = app.common.json.__GT_clj;
var prop_get_fn_restore_64441_64698 = (function (){
var obj_64372_this_64375 = this;
var internal_fn_restore_64435 = (function (){
return (new Promise((function (resolve,reject){
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.reject_not_valid(reject,new cljs.core.Keyword(null,"restore","restore",267172424),"Plugin doesn't have 'content:write' permission");
} else {
var version_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(data__$1),new cljs.core.Keyword(null,"id","id",-1388402092));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.versions.restore_version_from_plugin(file_id,version_id,resolve,reject));

}
})));
});
var internal_fn_restore_64435__$1 = internal_fn_restore_64435.bind(obj_64372_this_64375);
return internal_fn_restore_64435__$1;
});
var schema_remove_64445_64699 = null;
var coercer_fn_remove_64443_64700 = (((((!((schema_remove_64445_64699 == null)))) && ((!(cljs.core.fn_QMARK_(schema_remove_64445_64699))))))?app.common.schema.coercer(schema_remove_64445_64699):null);
var decode_fn_remove_64444_64701 = app.common.json.__GT_clj;
var prop_get_fn_remove_64448_64702 = (function (){
var obj_64372_this_64375 = this;
var internal_fn_remove_64442 = (function (){
return (new Promise((function (resolve,reject){
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.reject_not_valid(reject,new cljs.core.Keyword(null,"remove","remove",-131428414),"Plugin doesn't have 'content:write' permission");
} else {
var version_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data__$1));
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3(resolve,reject,beicon.v2.core.map(cljs.core.constantly(null),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"delete-file-snapshot","delete-file-snapshot",-364018056),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),version_id], null))));

}
})));
});
var internal_fn_remove_64442__$1 = internal_fn_remove_64442.bind(obj_64372_this_64375);
return internal_fn_remove_64442__$1;
});
var schema_pin_64452_64703 = null;
var coercer_fn_pin_64450_64704 = (((((!((schema_pin_64452_64703 == null)))) && ((!(cljs.core.fn_QMARK_(schema_pin_64452_64703))))))?app.common.schema.coercer(schema_pin_64452_64703):null);
var decode_fn_pin_64451_64705 = app.common.json.__GT_clj;
var prop_get_fn_pin_64455_64706 = (function (){
var obj_64372_this_64375 = this;
var internal_fn_pin_64449 = (function (){
return (new Promise((function (resolve,reject){
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.reject_not_valid(reject,new cljs.core.Keyword(null,"pin","pin",-2111774834),"Plugin doesn't have 'content:write' permission");
} else {
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2("system",new cljs.core.Keyword(null,"created-by","created-by",-1870794445).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data__$1)))){
return app.plugins.utils.reject_not_valid(reject,new cljs.core.Keyword(null,"pin","pin",-2111774834),"Only auto-saved versions can be pinned");
} else {
var params = new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data__$1)),new cljs.core.Keyword(null,"label","label",1718410804),app.common.time.format_inst.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"created-at","created-at",-89248644).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(data__$1)),new cljs.core.Keyword(null,"localized-date","localized-date",-1568818775))], null);
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (p__64466){
var vec__64467 = p__64466;
var users__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64467,(0),null);
var data__$2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64467,(1),null);
var users__$2 = app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),users__$1);
var G__64470 = (function (){var G__64471 = plugin_id;
var G__64472 = file_id;
var G__64473 = users__$2;
var G__64474 = cljs.core.deref(data__$2);
return (app.plugins.file.file_version_proxy.cljs$core$IFn$_invoke$arity$4 ? app.plugins.file.file_version_proxy.cljs$core$IFn$_invoke$arity$4(G__64471,G__64472,G__64473,G__64474) : app.plugins.file.file_version_proxy.call(null,G__64471,G__64472,G__64473,G__64474));
})();
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__64470) : resolve.call(null,G__64470));
}),reject,beicon.v2.core.zip(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-team-users","get-team-users",796041692),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),file_id], null)),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"update-file-snapshot","update-file-snapshot",149964604),params)));

}
}
})));
});
var internal_fn_pin_64449__$1 = internal_fn_pin_64449.bind(obj_64372_this_64375);
return internal_fn_pin_64449__$1;
});
Object.defineProperty(obj_64372_target_64376_64682,Symbol.toStringTag,(function (){var obj64476 = ({"enumerable":false,"get":prop_get_fn__64384_64683});
return obj64476;
})());

Object.defineProperty(obj_64372_target_64376_64682,Symbol["for"]("penpot.reify:type"),(function (){var obj64478 = ({"enumerable":false,"get":prop_get_fn__64391_64684});
return obj64478;
})());

Object.defineProperty(obj_64372_target_64376_64682,"$plugin",(function (){var obj64480 = ({"enumerable":false,"get":prop_get_fn_plugin_64398_64685});
return obj64480;
})());

Object.defineProperty(obj_64372_target_64376_64682,"$file",(function (){var obj64482 = ({"enumerable":false,"get":prop_get_fn_file_64405_64686});
return obj64482;
})());

Object.defineProperty(obj_64372_target_64376_64682,"label",(function (){var obj64484 = ({"enumerable":true,"get":prop_get_fn_label_64412_64687,"set":prop_set_fn_label_64413_64691});
return obj64484;
})());

Object.defineProperty(obj_64372_target_64376_64682,"createdBy",(function (){var obj64486 = ({"enumerable":true,"get":prop_get_fn_createdby_64420_64692});
return obj64486;
})());

Object.defineProperty(obj_64372_target_64376_64682,"createdAt",(function (){var obj64488 = ({"enumerable":true,"get":prop_get_fn_createdat_64427_64693});
return obj64488;
})());

Object.defineProperty(obj_64372_target_64376_64682,"isAutosave",(function (){var obj64490 = ({"enumerable":true,"get":prop_get_fn_isautosave_64434_64694});
return obj64490;
})());

Object.defineProperty(obj_64372_target_64376_64682,"restore",(function (){var obj64492 = ({"enumerable":false,"get":prop_get_fn_restore_64441_64698});
return obj64492;
})());

Object.defineProperty(obj_64372_target_64376_64682,"remove",(function (){var obj64494 = ({"enumerable":false,"get":prop_get_fn_remove_64448_64702});
return obj64494;
})());

Object.defineProperty(obj_64372_target_64376_64682,"pin",(function (){var obj64496 = ({"enumerable":false,"get":prop_get_fn_pin_64455_64706});
return obj64496;
})());


return obj_64372;
});
app.plugins.file.file_proxy_QMARK_ = (function app$plugins$file$file_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"FileProxy");
});
app.plugins.file.file_proxy = (function app$plugins$file$file_proxy(plugin_id,id){
var obj_64503 = ({});
var to_string_64502 = (function (){
return "FileProxy";
});
var obj_64503_target_64507_64707 = obj_64503;
var prop_get_fn__64515_64708 = (function (){
var obj_64503_this_64506 = this;
var internal_fn__64509 = to_string_64502;
return internal_fn__64509.call(obj_64503_this_64506);
});
var prop_get_fn__64522_64709 = (function (){
var obj_64503_this_64506 = this;
var internal_fn__64516 = to_string_64502;
return internal_fn__64516.call(obj_64503_this_64506);
});
var prop_get_fn_plugin_64529_64710 = (function (){
var obj_64503_this_64506 = this;
var internal_fn_plugin_64523 = (function (){
return plugin_id;
});
return internal_fn_plugin_64523.call(obj_64503_this_64506);
});
var prop_get_fn_id_64536_64711 = (function (){
var obj_64503_this_64506 = this;
var internal_fn_id_64530 = (function (){
return id;
});
return internal_fn_id_64530.call(obj_64503_this_64506);
});
var prop_get_fn_id_64543_64712 = (function (){
var obj_64503_this_64506 = this;
var internal_fn_id_64537 = (function (){
return app.plugins.format.format_id(id);
});
return internal_fn_id_64537.call(obj_64503_this_64506);
});
var prop_get_fn_name_64550_64713 = (function (){
var obj_64503_this_64506 = this;
var internal_fn_name_64544 = (function (){
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(app.plugins.utils.locate_file(id));
});
return internal_fn_name_64544.call(obj_64503_this_64506);
});
var prop_get_fn_pages_64557_64714 = (function (){
var obj_64503_this_64506 = this;
var internal_fn_pages_64551 = (function (p1__64497_SHARP_){
return p1__64497_SHARP_.getPages();
});
return internal_fn_pages_64551.call(obj_64503_this_64506,obj_64503_this_64506);
});
var schema_getpages_64561_64715 = null;
var coercer_fn_getpages_64559_64716 = (((((!((schema_getpages_64561_64715 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getpages_64561_64715))))))?app.common.schema.coercer(schema_getpages_64561_64715):null);
var decode_fn_getpages_64560_64717 = app.common.json.__GT_clj;
var prop_get_fn_getpages_64564_64718 = (function (){
var obj_64503_this_64506 = this;
var internal_fn_getpages_64558 = (function (){
var file = app.plugins.utils.locate_file(id);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (p1__64498_SHARP_){
return app.plugins.page.page_proxy(plugin_id,id,p1__64498_SHARP_);
})),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"pages","pages",-285406513))));
});
var internal_fn_getpages_64558__$1 = internal_fn_getpages_64558.bind(obj_64503_this_64506);
return internal_fn_getpages_64558__$1;
});
var schema_getplugindata_64568_64719 = null;
var coercer_fn_getplugindata_64566_64720 = (((((!((schema_getplugindata_64568_64719 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getplugindata_64568_64719))))))?app.common.schema.coercer(schema_getplugindata_64568_64719):null);
var decode_fn_getplugindata_64567_64721 = app.common.json.__GT_clj;
var prop_get_fn_getplugindata_64571_64722 = (function (){
var obj_64503_this_64506 = this;
var internal_fn_getplugindata_64565 = (function (key){
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getPluginData-key","getPluginData-key",-1372143031),key);
} else {
var file = app.plugins.utils.locate_file(id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id))),key);

}
});
var internal_fn_getplugindata_64565__$1 = internal_fn_getplugindata_64565.bind(obj_64503_this_64506);
return internal_fn_getplugindata_64565__$1;
});
var schema_setplugindata_64575_64723 = null;
var coercer_fn_setplugindata_64573_64724 = (((((!((schema_setplugindata_64575_64723 == null)))) && ((!(cljs.core.fn_QMARK_(schema_setplugindata_64575_64723))))))?app.common.schema.coercer(schema_setplugindata_64575_64723):null);
var decode_fn_setplugindata_64574_64725 = app.common.json.__GT_clj;
var prop_get_fn_setplugindata_64578_64726 = (function (){
var obj_64503_this_64506 = this;
var internal_fn_setplugindata_64572 = (function (key,value){
if((((!(typeof key === 'string'))) || (cljs.core.empty_QMARK_(key)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData-key","setPluginData-key",437211756),key);
} else {
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData-value","setPluginData-value",281004073),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setPluginData","setPluginData",2049380387),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$5(id,new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",cljs.core.str.cljs$core$IFn$_invoke$arity$1(plugin_id)),key,value));

}
}
}
});
var internal_fn_setplugindata_64572__$1 = internal_fn_setplugindata_64572.bind(obj_64503_this_64506);
return internal_fn_setplugindata_64572__$1;
});
var schema_getplugindatakeys_64582_64727 = null;
var coercer_fn_getplugindatakeys_64580_64728 = (((((!((schema_getplugindatakeys_64582_64727 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getplugindatakeys_64582_64727))))))?app.common.schema.coercer(schema_getplugindatakeys_64582_64727):null);
var decode_fn_getplugindatakeys_64581_64729 = app.common.json.__GT_clj;
var prop_get_fn_getplugindatakeys_64585_64730 = (function (){
var obj_64503_this_64506 = this;
var internal_fn_getplugindatakeys_64579 = (function (){
var file = app.plugins.utils.locate_file(id);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("plugin",""+(plugin_id ?? "")))));
});
var internal_fn_getplugindatakeys_64579__$1 = internal_fn_getplugindatakeys_64579.bind(obj_64503_this_64506);
return internal_fn_getplugindatakeys_64579__$1;
});
var schema_getsharedplugindata_64589_64731 = null;
var coercer_fn_getsharedplugindata_64587_64732 = (((((!((schema_getsharedplugindata_64589_64731 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getsharedplugindata_64589_64731))))))?app.common.schema.coercer(schema_getsharedplugindata_64589_64731):null);
var decode_fn_getsharedplugindata_64588_64733 = app.common.json.__GT_clj;
var prop_get_fn_getsharedplugindata_64592_64734 = (function (){
var obj_64503_this_64506 = this;
var internal_fn_getsharedplugindata_64586 = (function (namespace,key){
if((!(typeof namespace === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getSharedPluginData-namespace","getSharedPluginData-namespace",823864288),namespace);
} else {
if((!(typeof key === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getSharedPluginData-key","getSharedPluginData-key",1393856585),key);
} else {
var file = app.plugins.utils.locate_file(id);
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace)),key);

}
}
});
var internal_fn_getsharedplugindata_64586__$1 = internal_fn_getsharedplugindata_64586.bind(obj_64503_this_64506);
return internal_fn_getsharedplugindata_64586__$1;
});
var schema_setsharedplugindata_64596_64735 = null;
var coercer_fn_setsharedplugindata_64594_64736 = (((((!((schema_setsharedplugindata_64596_64735 == null)))) && ((!(cljs.core.fn_QMARK_(schema_setsharedplugindata_64596_64735))))))?app.common.schema.coercer(schema_setsharedplugindata_64596_64735):null);
var decode_fn_setsharedplugindata_64595_64737 = app.common.json.__GT_clj;
var prop_get_fn_setsharedplugindata_64599_64738 = (function (){
var obj_64503_this_64506 = this;
var internal_fn_setsharedplugindata_64593 = (function (namespace,key,value){
if((((!(typeof namespace === 'string'))) || (cljs.core.empty_QMARK_(namespace)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-namespace","setSharedPluginData-namespace",807971852),namespace);
} else {
if((((!(typeof key === 'string'))) || (cljs.core.empty_QMARK_(key)))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-key","setSharedPluginData-key",-1257676988),key);
} else {
if((!(typeof value === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData-value","setSharedPluginData-value",1942190613),value);
} else {
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"setSharedPluginData","setSharedPluginData",-324251591),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.plugins.set_plugin_data.cljs$core$IFn$_invoke$arity$5(id,new cljs.core.Keyword(null,"file","file",-1269645878),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace),key,value));

}
}
}
}
});
var internal_fn_setsharedplugindata_64593__$1 = internal_fn_setsharedplugindata_64593.bind(obj_64503_this_64506);
return internal_fn_setsharedplugindata_64593__$1;
});
var schema_getsharedplugindatakeys_64603_64739 = null;
var coercer_fn_getsharedplugindatakeys_64601_64740 = (((((!((schema_getsharedplugindatakeys_64603_64739 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getsharedplugindatakeys_64603_64739))))))?app.common.schema.coercer(schema_getsharedplugindatakeys_64603_64739):null);
var decode_fn_getsharedplugindatakeys_64602_64741 = app.common.json.__GT_clj;
var prop_get_fn_getsharedplugindatakeys_64606_64742 = (function (){
var obj_64503_this_64506 = this;
var internal_fn_getsharedplugindatakeys_64600 = (function (namespace){
if((!(typeof namespace === 'string'))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"getSharedPluginDataKeys","getSharedPluginDataKeys",1605636461),namespace);
} else {
var file = app.plugins.utils.locate_file(id);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.keys(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(file,new cljs.core.Keyword(null,"data","data",-232669377)),new cljs.core.Keyword(null,"plugin-data","plugin-data",871296431)),cljs.core.keyword.cljs$core$IFn$_invoke$arity$2("shared",namespace))));

}
});
var internal_fn_getsharedplugindatakeys_64600__$1 = internal_fn_getsharedplugindatakeys_64600.bind(obj_64503_this_64506);
return internal_fn_getsharedplugindatakeys_64600__$1;
});
var schema_createpage_64610_64743 = null;
var coercer_fn_createpage_64608_64744 = (((((!((schema_createpage_64610_64743 == null)))) && ((!(cljs.core.fn_QMARK_(schema_createpage_64610_64743))))))?app.common.schema.coercer(schema_createpage_64610_64743):null);
var decode_fn_createpage_64609_64745 = app.common.json.__GT_clj;
var prop_get_fn_createpage_64613_64746 = (function (){
var obj_64503_this_64506 = this;
var internal_fn_createpage_64607 = (function (){
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"createPage","createPage",1663482836),"Plugin doesn't have 'content:write' permission");
} else {
var page_id = app.common.uuid.next();
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.create_page(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"page-id","page-id",-872941168),page_id,new cljs.core.Keyword(null,"file-id","file-id",-811871323),id], null)));

return app.plugins.page.page_proxy(plugin_id,id,page_id);

}
});
var internal_fn_createpage_64607__$1 = internal_fn_createpage_64607.bind(obj_64503_this_64506);
return internal_fn_createpage_64607__$1;
});
var schema_export_64617_64747 = null;
var coercer_fn_export_64615_64748 = (((((!((schema_export_64617_64747 == null)))) && ((!(cljs.core.fn_QMARK_(schema_export_64617_64747))))))?app.common.schema.coercer(schema_export_64617_64747):null);
var decode_fn_export_64616_64749 = app.common.json.__GT_clj;
var prop_get_fn_export_64620_64750 = (function (){
var obj_64503_this_64506 = this;
var internal_fn_export_64614 = (function (format,type){
return (new Promise((function (resolve,reject){
var type__$1 = (function (){var or__5025__auto__ = app.plugins.parser.parse_keyword(type);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"all","all",892129742);
}
})();
if((((!((format == null)))) && ((!(cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, ["penpot",null,"zip",null], null), null),format)))))){
return app.plugins.utils.reject_not_valid(reject,new cljs.core.Keyword(null,"format","format",-1306924766),""+"Invalid format: "+(format ?? ""));
} else {
if((!(cljs.core.contains_QMARK_(cljs.core.set(app.main.data.exports.files.valid_types),type__$1)))){
return app.plugins.utils.reject_not_valid(reject,new cljs.core.Keyword(null,"format","format",-1306924766),""+"Invalid type: "+(type__$1 ?? ""));
} else {
var file = app.plugins.utils.locate_file(id);
var features__$1 = new cljs.core.Keyword(null,"features","features",-1146962336).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var format__$1 = (function (){var G__64635 = format;
switch (G__64635) {
case "zip":
return new cljs.core.Keyword(null,"legacy-zip","legacy-zip",1673362658);

break;
default:
if(cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"export-file-v3","export-file-v3",-1949378869))){
return new cljs.core.Keyword(null,"binfile-v3","binfile-v3",-2038359825);
} else {
return new cljs.core.Keyword(null,"binfile-v1","binfile-v1",1008484704);
}

}
})();
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3(resolve,reject,beicon.v2.core.map((function (p1__64499_SHARP_){
return (new Uint8Array(new cljs.core.Keyword(null,"body","body",-2049205669).cljs$core$IFn$_invoke$arity$1(p1__64499_SHARP_)));
}),beicon.v2.core.take((1),beicon.v2.core.mapcat((function (msg){
console.log(msg);

var G__64636 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(msg);
var G__64636__$1 = (((G__64636 instanceof cljs.core.Keyword))?G__64636.fqn:null);
switch (G__64636__$1) {
case "error":
return beicon.v2.core.throw$(cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("cannot export file",new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"export-file","export-file",-1808912864)], null)));

break;
case "progress":
return beicon.v2.core.empty();

break;
case "finish":
return app.util.http.send_BANG_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"method","method",55703592),new cljs.core.Keyword(null,"get","get",1683182755),new cljs.core.Keyword(null,"uri","uri",-774711847),new cljs.core.Keyword(null,"uri","uri",-774711847).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"mode","mode",654403691),new cljs.core.Keyword(null,"no-cors","no-cors",-603212056),new cljs.core.Keyword(null,"response-type","response-type",-1493770458),new cljs.core.Keyword(null,"buffer","buffer",617295198)], null));

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__64636__$1)].join('')));

}
}),app.main.worker.ask_many_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"cmd","cmd",-302931143),new cljs.core.Keyword(null,"export-files","export-files",1120929044),new cljs.core.Keyword(null,"format","format",-1306924766),format__$1,new cljs.core.Keyword(null,"type","type",1174270348),type__$1,new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"features","features",-1146962336),features__$1,new cljs.core.Keyword(null,"files","files",-472457450),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file], null)], null))))));

}
}
})));
});
var internal_fn_export_64614__$1 = internal_fn_export_64614.bind(obj_64503_this_64506);
return internal_fn_export_64614__$1;
});
var schema_findversions_64624_64751 = null;
var coercer_fn_findversions_64622_64752 = (((((!((schema_findversions_64624_64751 == null)))) && ((!(cljs.core.fn_QMARK_(schema_findversions_64624_64751))))))?app.common.schema.coercer(schema_findversions_64624_64751):null);
var decode_fn_findversions_64623_64753 = app.common.json.__GT_clj;
var prop_get_fn_findversions_64627_64754 = (function (){
var obj_64503_this_64506 = this;
var internal_fn_findversions_64621 = (function (criteria){
var user = app.util.object.get.cljs$core$IFn$_invoke$arity$3(criteria,"createdBy",null);
return (new Promise((function (resolve,reject){
if((!(app.plugins.register.check_permission(plugin_id,"content:read")))){
return app.plugins.utils.reject_not_valid(reject,new cljs.core.Keyword(null,"findVersions","findVersions",1578584464),"Plugin doesn't have 'content:read' permission");
} else {
if((((!((user == null)))) && ((!(app.plugins.user.user_proxy_QMARK_(user)))))){
return app.plugins.utils.reject_not_valid(reject,new cljs.core.Keyword(null,"findVersions-user","findVersions-user",836091189),"Created by user is not a valid user object");
} else {
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3((function (p__64637){
var vec__64638 = p__64637;
var users = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64638,(0),null);
var snapshots = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64638,(1),null);
var users__$1 = app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),users);
var G__64641 = cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.sequence.cljs$core$IFn$_invoke$arity$1(cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__64501_SHARP_){
return app.plugins.file.file_version_proxy(plugin_id,id,users__$1,p1__64501_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__64500_SHARP_){
return ((cljs.core.not(app.util.object.get.cljs$core$IFn$_invoke$arity$2(user,"id"))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(""+(new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(p1__64500_SHARP_) ?? ""),app.util.object.get.cljs$core$IFn$_invoke$arity$2(user,"id"))));
}),snapshots))));
return (resolve.cljs$core$IFn$_invoke$arity$1 ? resolve.cljs$core$IFn$_invoke$arity$1(G__64641) : resolve.call(null,G__64641));
}),reject,beicon.v2.core.take((1),beicon.v2.core.zip(app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-team-users","get-team-users",796041692),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),id], null)),app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-file-snapshots","get-file-snapshots",1534053253),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),id], null)))));

}
}
})));
});
var internal_fn_findversions_64621__$1 = internal_fn_findversions_64621.bind(obj_64503_this_64506);
return internal_fn_findversions_64621__$1;
});
var schema_saveversion_64631_64755 = null;
var coercer_fn_saveversion_64629_64756 = (((((!((schema_saveversion_64631_64755 == null)))) && ((!(cljs.core.fn_QMARK_(schema_saveversion_64631_64755))))))?app.common.schema.coercer(schema_saveversion_64631_64755):null);
var decode_fn_saveversion_64630_64757 = app.common.json.__GT_clj;
var prop_get_fn_saveversion_64634_64758 = (function (){
var obj_64503_this_64506 = this;
var internal_fn_saveversion_64628 = (function (label){
var users_promise = (new Promise((function (resolve,reject){
return beicon.v2.core.subs_BANG_.cljs$core$IFn$_invoke$arity$3(resolve,reject,app.main.repo.cmd_BANG_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"get-team-users","get-team-users",796041692),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"file-id","file-id",-811871323),id], null)));
})));
var create_version_promise = (new Promise((function (resolve,reject){
if((!(app.plugins.register.check_permission(plugin_id,"content:write")))){
return app.plugins.utils.reject_not_valid(reject,new cljs.core.Keyword(null,"findVersions","findVersions",1578584464),"Plugin doesn't have 'content:write' permission");
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.versions.create_version_from_plugins(id,label,resolve,reject));

}
})));
return Promise.all([users_promise,create_version_promise]).then((function (p__64642){
var vec__64643 = p__64642;
var users = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64643,(0),null);
var data = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__64643,(1),null);
var users__$1 = app.common.data.index_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),users);
return app.plugins.file.file_version_proxy(plugin_id,id,users__$1,data);
}));
});
var internal_fn_saveversion_64628__$1 = internal_fn_saveversion_64628.bind(obj_64503_this_64506);
return internal_fn_saveversion_64628__$1;
});
Object.defineProperty(obj_64503_target_64507_64707,Symbol.toStringTag,(function (){var obj64647 = ({"enumerable":false,"get":prop_get_fn__64515_64708});
return obj64647;
})());

Object.defineProperty(obj_64503_target_64507_64707,Symbol["for"]("penpot.reify:type"),(function (){var obj64649 = ({"enumerable":false,"get":prop_get_fn__64522_64709});
return obj64649;
})());

Object.defineProperty(obj_64503_target_64507_64707,"$plugin",(function (){var obj64651 = ({"enumerable":false,"get":prop_get_fn_plugin_64529_64710});
return obj64651;
})());

Object.defineProperty(obj_64503_target_64507_64707,"$id",(function (){var obj64653 = ({"enumerable":false,"get":prop_get_fn_id_64536_64711});
return obj64653;
})());

Object.defineProperty(obj_64503_target_64507_64707,"id",(function (){var obj64655 = ({"enumerable":true,"get":prop_get_fn_id_64543_64712});
return obj64655;
})());

Object.defineProperty(obj_64503_target_64507_64707,"name",(function (){var obj64657 = ({"enumerable":true,"get":prop_get_fn_name_64550_64713});
return obj64657;
})());

Object.defineProperty(obj_64503_target_64507_64707,"pages",(function (){var obj64659 = ({"enumerable":true,"get":prop_get_fn_pages_64557_64714});
return obj64659;
})());

Object.defineProperty(obj_64503_target_64507_64707,"getPages",(function (){var obj64661 = ({"enumerable":false,"get":prop_get_fn_getpages_64564_64718});
return obj64661;
})());

Object.defineProperty(obj_64503_target_64507_64707,"getPluginData",(function (){var obj64663 = ({"enumerable":false,"get":prop_get_fn_getplugindata_64571_64722});
return obj64663;
})());

Object.defineProperty(obj_64503_target_64507_64707,"setPluginData",(function (){var obj64665 = ({"enumerable":false,"get":prop_get_fn_setplugindata_64578_64726});
return obj64665;
})());

Object.defineProperty(obj_64503_target_64507_64707,"getPluginDataKeys",(function (){var obj64667 = ({"enumerable":false,"get":prop_get_fn_getplugindatakeys_64585_64730});
return obj64667;
})());

Object.defineProperty(obj_64503_target_64507_64707,"getSharedPluginData",(function (){var obj64669 = ({"enumerable":false,"get":prop_get_fn_getsharedplugindata_64592_64734});
return obj64669;
})());

Object.defineProperty(obj_64503_target_64507_64707,"setSharedPluginData",(function (){var obj64671 = ({"enumerable":false,"get":prop_get_fn_setsharedplugindata_64599_64738});
return obj64671;
})());

Object.defineProperty(obj_64503_target_64507_64707,"getSharedPluginDataKeys",(function (){var obj64673 = ({"enumerable":false,"get":prop_get_fn_getsharedplugindatakeys_64606_64742});
return obj64673;
})());

Object.defineProperty(obj_64503_target_64507_64707,"createPage",(function (){var obj64675 = ({"enumerable":false,"get":prop_get_fn_createpage_64613_64746});
return obj64675;
})());

Object.defineProperty(obj_64503_target_64507_64707,"export",(function (){var obj64677 = ({"enumerable":false,"get":prop_get_fn_export_64620_64750});
return obj64677;
})());

Object.defineProperty(obj_64503_target_64507_64707,"findVersions",(function (){var obj64679 = ({"enumerable":false,"get":prop_get_fn_findversions_64627_64754});
return obj64679;
})());

Object.defineProperty(obj_64503_target_64507_64707,"saveVersion",(function (){var obj64681 = ({"enumerable":false,"get":prop_get_fn_saveversion_64634_64758});
return obj64681;
})());


return obj_64503;
});

//# sourceMappingURL=app.plugins.file.js.map
