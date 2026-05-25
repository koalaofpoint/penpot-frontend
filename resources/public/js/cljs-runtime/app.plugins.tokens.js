import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.files.tokens.js";
import "./app.common.json.js";
import "./app.common.schema.js";
import "./app.common.types.token.js";
import "./app.common.types.tokens_lib.js";
import "./app.common.uuid.js";
import "./app.main.data.tokenscript.js";
import "./app.main.data.workspace.tokens.application.js";
import "./app.main.data.workspace.tokens.library_edit.js";
import "./app.main.store.js";
import "./app.plugins.utils.js";
import "./app.util.object.js";
import "./clojure.datafy.js";
goog.provide('app.plugins.tokens');
app.plugins.tokens.apply_token_to_shapes = (function app$plugins$tokens$apply_token_to_shapes(file_id,set_id,id,shape_ids,attrs){
var token = app.plugins.utils.locate_token(file_id,set_id,id);
if(cljs.core.truth_(cljs.core.some((function (p1__62885_SHARP_){
return (!(app.common.types.token.token_attr_QMARK_(p1__62885_SHARP_)));
}),attrs))){
return app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"applyToSelected","applyToSelected",577942880),attrs);
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.application.toggle_token(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"token","token",-1211463215),token,new cljs.core.Keyword(null,"attrs","attrs",-2090668713),attrs,new cljs.core.Keyword(null,"shape-ids","shape-ids",699231806),shape_ids,new cljs.core.Keyword(null,"expand-with-children","expand-with-children",-1923116463),false], null)));
}
});
app.plugins.tokens.get_resolved_value = (function app$plugins$tokens$get_resolved_value(token,tokens_tree){
var resolved_tokens = app.main.data.tokenscript.resolve_tokens(tokens_tree);
var resolved_value = app.main.data.tokenscript.tokenscript_symbols__GT_penpot_unit(cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(resolved_tokens,new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(token)),new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626)));
return resolved_value;
});
app.plugins.tokens.token_proxy_QMARK_ = (function app$plugins$tokens$token_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"TokenProxy");
});
app.plugins.tokens.shape_proxy_QMARK_ = (function app$plugins$tokens$shape_proxy_QMARK_(s){
return app.util.object.type_of_QMARK_(s,"ShapeProxy");
});
app.plugins.tokens.token_proxy = (function app$plugins$tokens$token_proxy(plugin_id,file_id,set_id,id){
var obj_62888 = ({});
var to_string_62887 = (function (){
return "TokenProxy";
});
var obj_62888_target_62892_63858 = obj_62888;
var prop_get_fn__62900_63859 = (function (){
var obj_62888_this_62891 = this;
var internal_fn__62894 = to_string_62887;
return internal_fn__62894.call(obj_62888_this_62891);
});
var prop_get_fn__62907_63860 = (function (){
var obj_62888_this_62891 = this;
var internal_fn__62901 = to_string_62887;
return internal_fn__62901.call(obj_62888_this_62891);
});
var prop_get_fn_plugin_62914_63861 = (function (){
var obj_62888_this_62891 = this;
var internal_fn_plugin_62908 = cljs.core.constantly(plugin_id);
try{return internal_fn_plugin_62908.call(obj_62888_this_62891);
}catch (e63033){var cause_62893 = e63033;
return app.plugins.utils.handle_error(cause_62893);
}});
var prop_get_fn_fileid_62921_63862 = (function (){
var obj_62888_this_62891 = this;
var internal_fn_fileid_62915 = cljs.core.constantly(file_id);
try{return internal_fn_fileid_62915.call(obj_62888_this_62891);
}catch (e63034){var cause_62893 = e63034;
return app.plugins.utils.handle_error(cause_62893);
}});
var prop_get_fn_setid_62928_63863 = (function (){
var obj_62888_this_62891 = this;
var internal_fn_setid_62922 = cljs.core.constantly(set_id);
try{return internal_fn_setid_62922.call(obj_62888_this_62891);
}catch (e63035){var cause_62893 = e63035;
return app.plugins.utils.handle_error(cause_62893);
}});
var prop_get_fn_id_62935_63864 = (function (){
var obj_62888_this_62891 = this;
var internal_fn_id_62929 = cljs.core.constantly(id);
try{return internal_fn_id_62929.call(obj_62888_this_62891);
}catch (e63036){var cause_62893 = e63036;
return app.plugins.utils.handle_error(cause_62893);
}});
var prop_get_fn_id_62942_63865 = (function (){
var obj_62888_this_62891 = this;
var internal_fn_id_62936 = (function (){
return ""+(id ?? "");
});
try{return internal_fn_id_62936.call(obj_62888_this_62891);
}catch (e63037){var cause_62893 = e63037;
return app.plugins.utils.handle_error(cause_62893);
}});
var prop_get_fn_name_62949_63866 = (function (){
var obj_62888_this_62891 = this;
var internal_fn_name_62943 = (function (_){
var token = app.plugins.utils.locate_token(file_id,set_id,id);
return app.common.types.tokens_lib.get_name(token);
});
try{return internal_fn_name_62943.call(obj_62888_this_62891,obj_62888_this_62891);
}catch (e63096){var cause_62893 = e63096;
return app.plugins.utils.handle_error(cause_62893);
}});
var schema_name_62946_63867 = app.common.files.tokens.make_token_name_schema((function (){var G__63104 = app.plugins.utils.locate_tokens_lib(file_id);
if((G__63104 == null)){
return null;
} else {
return app.common.types.tokens_lib.get_tokens(G__63104,set_id);
}
})());
var coercer_fn_name_62944_63868 = (((((!((schema_name_62946_63867 == null)))) && ((!(cljs.core.fn_QMARK_(schema_name_62946_63867))))))?app.common.schema.coercer(schema_name_62946_63867):null);
var decode_fn_name_62945_63869 = app.common.json.__GT_clj;
var prop_set_fn_name_62950_63870 = (function (val_name_62948){
try{var obj_62888_this_62891 = this;
var internal_fn_name_62943 = (function (_,value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.update_token.cljs$core$IFn$_invoke$arity$3(set_id,id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"name","name",1843675177),value], null)));
});
var schema_name_62946__$1 = ((cljs.core.fn_QMARK_(schema_name_62946_63867))?schema_name_62946_63867(val_name_62948):schema_name_62946_63867);
var coercer_fn_name_62944__$1 = (((coercer_fn_name_62944_63868 == null))?app.common.schema.coercer(schema_name_62946__$1):coercer_fn_name_62944_63868);
var val_name_62948__$1 = decode_fn_name_62945_63869(val_name_62948,null);
var val_name_62948__$2 = coercer_fn_name_62944__$1(val_name_62948__$1);
return internal_fn_name_62943.call(obj_62888_this_62891,obj_62888_this_62891,val_name_62948__$2);
}catch (e63105){var cause_62893 = e63105;
return app.plugins.utils.handle_error(cause_62893);
}});
var prop_get_fn_type_62957_63871 = (function (){
var obj_62888_this_62891 = this;
var internal_fn_type_62951 = (function (_){
var token = app.plugins.utils.locate_token(file_id,set_id,id);
var G__63106 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token);
return (app.common.types.token.token_type__GT_dtcg_token_type.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.token_type__GT_dtcg_token_type.cljs$core$IFn$_invoke$arity$1(G__63106) : app.common.types.token.token_type__GT_dtcg_token_type.call(null,G__63106));
});
try{return internal_fn_type_62951.call(obj_62888_this_62891,obj_62888_this_62891);
}catch (e63107){var cause_62893 = e63107;
return app.plugins.utils.handle_error(cause_62893);
}});
var prop_get_fn_value_62964_63872 = (function (){
var obj_62888_this_62891 = this;
var internal_fn_value_62958 = (function (_){
var token = app.plugins.utils.locate_token(file_id,set_id,id);
return app.common.json.__GT_js(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(token));
});
try{return internal_fn_value_62958.call(obj_62888_this_62891,obj_62888_this_62891);
}catch (e63108){var cause_62893 = e63108;
return app.plugins.utils.handle_error(cause_62893);
}});
var schema_value_62961_63873 = (function (){var token = app.plugins.utils.locate_token(file_id,set_id,id);
return app.common.files.tokens.make_token_value_schema(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(token));
})();
var coercer_fn_value_62959_63874 = (((((!((schema_value_62961_63873 == null)))) && ((!(cljs.core.fn_QMARK_(schema_value_62961_63873))))))?app.common.schema.coercer(schema_value_62961_63873):null);
var decode_fn_value_62960_63875 = app.common.json.__GT_clj;
var prop_set_fn_value_62965_63876 = (function (val_value_62963){
try{var obj_62888_this_62891 = this;
var internal_fn_value_62958 = (function (_,value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.update_token.cljs$core$IFn$_invoke$arity$3(set_id,id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"value","value",305978217),value], null)));
});
var schema_value_62961__$1 = ((cljs.core.fn_QMARK_(schema_value_62961_63873))?schema_value_62961_63873(val_value_62963):schema_value_62961_63873);
var coercer_fn_value_62959__$1 = (((coercer_fn_value_62959_63874 == null))?app.common.schema.coercer(schema_value_62961__$1):coercer_fn_value_62959_63874);
var val_value_62963__$1 = decode_fn_value_62960_63875(val_value_62963,null);
var val_value_62963__$2 = coercer_fn_value_62959__$1(val_value_62963__$1);
return internal_fn_value_62958.call(obj_62888_this_62891,obj_62888_this_62891,val_value_62963__$2);
}catch (e63109){var cause_62893 = e63109;
return app.plugins.utils.handle_error(cause_62893);
}});
var prop_get_fn_resolvedvalue_62972_63877 = (function (){
var obj_62888_this_62891 = this;
var internal_fn_resolvedvalue_62966 = (function (_){
var token = app.plugins.utils.locate_token(file_id,set_id,id);
var tokens_lib = app.plugins.utils.locate_tokens_lib(file_id);
var tokens_tree = app.common.types.tokens_lib.get_tokens_in_active_sets(tokens_lib);
return app.plugins.tokens.get_resolved_value(token,tokens_tree);
});
try{return internal_fn_resolvedvalue_62966.call(obj_62888_this_62891,obj_62888_this_62891);
}catch (e63110){var cause_62893 = e63110;
return app.plugins.utils.handle_error(cause_62893);
}});
var prop_get_fn_resolvedvaluestring_62979_63878 = (function (){
var obj_62888_this_62891 = this;
var internal_fn_resolvedvaluestring_62973 = (function (_){
var token = app.plugins.utils.locate_token(file_id,set_id,id);
var tokens_lib = app.plugins.utils.locate_tokens_lib(file_id);
var tokens_tree = app.common.types.tokens_lib.get_tokens_in_active_sets(tokens_lib);
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.plugins.tokens.get_resolved_value(token,tokens_tree));
});
try{return internal_fn_resolvedvaluestring_62973.call(obj_62888_this_62891,obj_62888_this_62891);
}catch (e63111){var cause_62893 = e63111;
return app.plugins.utils.handle_error(cause_62893);
}});
var prop_get_fn_description_62996_63879 = (function (){
var obj_62888_this_62891 = this;
var internal_fn_description_62980 = (function (_){
var token = app.plugins.utils.locate_token(file_id,set_id,id);
return app.common.types.tokens_lib.get_description(token);
});
try{return internal_fn_description_62980.call(obj_62888_this_62891,obj_62888_this_62891);
}catch (e63112){var cause_62893 = e63112;
return app.plugins.utils.handle_error(cause_62893);
}});
var schema_description_62983_63880 = app.common.files.tokens.schema_COLON_token_description;
var coercer_fn_description_62981_63881 = (((((!((schema_description_62983_63880 == null)))) && ((!(cljs.core.fn_QMARK_(schema_description_62983_63880))))))?app.common.schema.coercer(schema_description_62983_63880):null);
var decode_fn_description_62982_63882 = app.common.json.__GT_clj;
var prop_set_fn_description_62997_63883 = (function (val_description_62995){
try{var obj_62888_this_62891 = this;
var internal_fn_description_62980 = (function (_,value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.update_token.cljs$core$IFn$_invoke$arity$3(set_id,id,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"description","description",-1428560544),value], null)));
});
var schema_description_62983__$1 = ((cljs.core.fn_QMARK_(schema_description_62983_63880))?schema_description_62983_63880(val_description_62995):schema_description_62983_63880);
var coercer_fn_description_62981__$1 = (((coercer_fn_description_62981_63881 == null))?app.common.schema.coercer(schema_description_62983__$1):coercer_fn_description_62981_63881);
var val_description_62995__$1 = decode_fn_description_62982_63882(val_description_62995,null);
var val_description_62995__$2 = coercer_fn_description_62981__$1(val_description_62995__$1);
return internal_fn_description_62980.call(obj_62888_this_62891,obj_62888_this_62891,val_description_62995__$2);
}catch (e63113){var cause_62893 = e63113;
return app.plugins.utils.handle_error(cause_62893);
}});
var schema_duplicate_63001_63884 = null;
var coercer_fn_duplicate_62999_63885 = (((((!((schema_duplicate_63001_63884 == null)))) && ((!(cljs.core.fn_QMARK_(schema_duplicate_63001_63884))))))?app.common.schema.coercer(schema_duplicate_63001_63884):null);
var decode_fn_duplicate_63000_63886 = app.common.json.__GT_clj;
var prop_get_fn_duplicate_63004_63887 = (function (){
var obj_62888_this_62891 = this;
var internal_fn_duplicate_62998 = (function (){
try{var token = app.plugins.utils.locate_token(file_id,set_id,id);
var token_SINGLEQUOTE_ = app.common.types.tokens_lib.make_token.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(clojure.datafy.datafy(token),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"modified-at","modified-at",-932048179)], 0))], 0));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.create_token.cljs$core$IFn$_invoke$arity$2(set_id,token_SINGLEQUOTE_));

var G__63115 = plugin_id;
var G__63116 = file_id;
var G__63117 = set_id;
var G__63118 = token_SINGLEQUOTE_.id;
return (app.plugins.tokens.token_proxy.cljs$core$IFn$_invoke$arity$4 ? app.plugins.tokens.token_proxy.cljs$core$IFn$_invoke$arity$4(G__63115,G__63116,G__63117,G__63118) : app.plugins.tokens.token_proxy.call(null,G__63115,G__63116,G__63117,G__63118));
}catch (e63114){var cause_62893 = e63114;
return app.plugins.utils.handle_error(cause_62893);
}});
var internal_fn_duplicate_62998__$1 = internal_fn_duplicate_62998.bind(obj_62888_this_62891);
return internal_fn_duplicate_62998__$1;
});
var schema_remove_63008_63888 = null;
var coercer_fn_remove_63006_63889 = (((((!((schema_remove_63008_63888 == null)))) && ((!(cljs.core.fn_QMARK_(schema_remove_63008_63888))))))?app.common.schema.coercer(schema_remove_63008_63888):null);
var decode_fn_remove_63007_63890 = app.common.json.__GT_clj;
var prop_get_fn_remove_63011_63891 = (function (){
var obj_62888_this_62891 = this;
var internal_fn_remove_63005 = (function (){
try{return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.delete_token(set_id,id));
}catch (e63119){var cause_62893 = e63119;
return app.plugins.utils.handle_error(cause_62893);
}});
var internal_fn_remove_63005__$1 = internal_fn_remove_63005.bind(obj_62888_this_62891);
return internal_fn_remove_63005__$1;
});
var schema_applytoshapes_63015_63892 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"vector","vector",1902966158),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.plugins.tokens.shape_proxy_QMARK_], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword("app.common.schema","keyword","app.common.schema/keyword",123822366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.types.token.token_attr_QMARK_], null)], null)], null)], null)], null);
var coercer_fn_applytoshapes_63013_63893 = (((((!((schema_applytoshapes_63015_63892 == null)))) && ((!(cljs.core.fn_QMARK_(schema_applytoshapes_63015_63892))))))?app.common.schema.coercer(schema_applytoshapes_63015_63892):null);
var decode_fn_applytoshapes_63014_63894 = app.common.json.__GT_clj;
var prop_get_fn_applytoshapes_63018_63895 = (function (){
var obj_62888_this_62891 = this;
var internal_fn_applytoshapes_63012 = (function (shapes,attrs){
try{return app.plugins.tokens.apply_token_to_shapes(file_id,set_id,id,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__62886_SHARP_){
return app.util.object.get.cljs$core$IFn$_invoke$arity$2(p1__62886_SHARP_,"$id");
}),shapes),attrs);
}catch (e63120){var cause_62893 = e63120;
return app.plugins.utils.handle_error(cause_62893);
}});
var internal_fn_applytoshapes_63012__$1 = internal_fn_applytoshapes_63012.bind(obj_62888_this_62891);
var internal_fn_applytoshapes_63012__$2 = (function (){
try{var val_applytoshapes_63017 = app.util.object.into_array(arguments);
var val_applytoshapes_63017__$1 = decode_fn_applytoshapes_63014_63894(val_applytoshapes_63017,null);
var schema_applytoshapes_63015__$1 = ((cljs.core.fn_QMARK_(schema_applytoshapes_63015_63892))?schema_applytoshapes_63015_63892(val_applytoshapes_63017__$1):schema_applytoshapes_63015_63892);
var coercer_fn_applytoshapes_63013__$1 = (((coercer_fn_applytoshapes_63013_63893 == null))?app.common.schema.coercer(schema_applytoshapes_63015__$1):coercer_fn_applytoshapes_63013_63893);
var val_applytoshapes_63017__$2 = coercer_fn_applytoshapes_63013__$1(val_applytoshapes_63017__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(internal_fn_applytoshapes_63012__$1,val_applytoshapes_63017__$2);
}catch (e63121){var cause_62893 = e63121;
return app.plugins.utils.handle_error(cause_62893);
}});
return internal_fn_applytoshapes_63012__$2;
});
var schema_applytoselected_63022_63896 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"set","set",304602554),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"and","and",-971899817),new cljs.core.Keyword("app.common.schema","keyword","app.common.schema/keyword",123822366),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.types.token.token_attr_QMARK_], null)], null)], null)], null)], null);
var coercer_fn_applytoselected_63020_63897 = (((((!((schema_applytoselected_63022_63896 == null)))) && ((!(cljs.core.fn_QMARK_(schema_applytoselected_63022_63896))))))?app.common.schema.coercer(schema_applytoselected_63022_63896):null);
var decode_fn_applytoselected_63021_63898 = app.common.json.__GT_clj;
var prop_get_fn_applytoselected_63025_63899 = (function (){
var obj_62888_this_62891 = this;
var internal_fn_applytoselected_63019 = (function (attrs){
try{var selected = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"workspace-local","workspace-local",1916337699),new cljs.core.Keyword(null,"selected","selected",574897764)], null));
return app.plugins.tokens.apply_token_to_shapes(file_id,set_id,id,selected,attrs);
}catch (e63122){var cause_62893 = e63122;
return app.plugins.utils.handle_error(cause_62893);
}});
var internal_fn_applytoselected_63019__$1 = internal_fn_applytoselected_63019.bind(obj_62888_this_62891);
var internal_fn_applytoselected_63019__$2 = (function (){
try{var val_applytoselected_63024 = app.util.object.into_array(arguments);
var val_applytoselected_63024__$1 = decode_fn_applytoselected_63021_63898(val_applytoselected_63024,null);
var schema_applytoselected_63022__$1 = ((cljs.core.fn_QMARK_(schema_applytoselected_63022_63896))?schema_applytoselected_63022_63896(val_applytoselected_63024__$1):schema_applytoselected_63022_63896);
var coercer_fn_applytoselected_63020__$1 = (((coercer_fn_applytoselected_63020_63897 == null))?app.common.schema.coercer(schema_applytoselected_63022__$1):coercer_fn_applytoselected_63020_63897);
var val_applytoselected_63024__$2 = coercer_fn_applytoselected_63020__$1(val_applytoselected_63024__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(internal_fn_applytoselected_63019__$1,val_applytoselected_63024__$2);
}catch (e63125){var cause_62893 = e63125;
return app.plugins.utils.handle_error(cause_62893);
}});
return internal_fn_applytoselected_63019__$2;
});
Object.defineProperty(obj_62888_target_62892_63858,Symbol.toStringTag,(function (){var obj63127 = ({"enumerable":false,"get":prop_get_fn__62900_63859});
return obj63127;
})());

Object.defineProperty(obj_62888_target_62892_63858,Symbol["for"]("penpot.reify:type"),(function (){var obj63131 = ({"enumerable":false,"get":prop_get_fn__62907_63860});
return obj63131;
})());

Object.defineProperty(obj_62888_target_62892_63858,"$plugin",(function (){var obj63133 = ({"enumerable":false,"get":prop_get_fn_plugin_62914_63861});
return obj63133;
})());

Object.defineProperty(obj_62888_target_62892_63858,"$file-id",(function (){var obj63136 = ({"enumerable":false,"get":prop_get_fn_fileid_62921_63862});
return obj63136;
})());

Object.defineProperty(obj_62888_target_62892_63858,"$set-id",(function (){var obj63139 = ({"enumerable":false,"get":prop_get_fn_setid_62928_63863});
return obj63139;
})());

Object.defineProperty(obj_62888_target_62892_63858,"$id",(function (){var obj63141 = ({"enumerable":false,"get":prop_get_fn_id_62935_63864});
return obj63141;
})());

Object.defineProperty(obj_62888_target_62892_63858,"id",(function (){var obj63143 = ({"enumerable":true,"get":prop_get_fn_id_62942_63865});
return obj63143;
})());

Object.defineProperty(obj_62888_target_62892_63858,"name",(function (){var obj63147 = ({"enumerable":true,"get":prop_get_fn_name_62949_63866,"set":prop_set_fn_name_62950_63870});
return obj63147;
})());

Object.defineProperty(obj_62888_target_62892_63858,"type",(function (){var obj63149 = ({"enumerable":true,"get":prop_get_fn_type_62957_63871});
return obj63149;
})());

Object.defineProperty(obj_62888_target_62892_63858,"value",(function (){var obj63151 = ({"enumerable":true,"get":prop_get_fn_value_62964_63872,"set":prop_set_fn_value_62965_63876});
return obj63151;
})());

Object.defineProperty(obj_62888_target_62892_63858,"resolvedValue",(function (){var obj63155 = ({"enumerable":false,"get":prop_get_fn_resolvedvalue_62972_63877});
return obj63155;
})());

Object.defineProperty(obj_62888_target_62892_63858,"resolvedValueString",(function (){var obj63157 = ({"enumerable":false,"get":prop_get_fn_resolvedvaluestring_62979_63878});
return obj63157;
})());

Object.defineProperty(obj_62888_target_62892_63858,"description",(function (){var obj63159 = ({"enumerable":true,"get":prop_get_fn_description_62996_63879,"set":prop_set_fn_description_62997_63883});
return obj63159;
})());

Object.defineProperty(obj_62888_target_62892_63858,"duplicate",(function (){var obj63161 = ({"enumerable":false,"get":prop_get_fn_duplicate_63004_63887});
return obj63161;
})());

Object.defineProperty(obj_62888_target_62892_63858,"remove",(function (){var obj63165 = ({"enumerable":false,"get":prop_get_fn_remove_63011_63891});
return obj63165;
})());

Object.defineProperty(obj_62888_target_62892_63858,"applyToShapes",(function (){var obj63167 = ({"enumerable":false,"get":prop_get_fn_applytoshapes_63018_63895});
return obj63167;
})());

Object.defineProperty(obj_62888_target_62892_63858,"applyToSelected",(function (){var obj63169 = ({"enumerable":false,"get":prop_get_fn_applytoselected_63025_63899});
return obj63169;
})());


return obj_62888;
});
app.plugins.tokens.token_set_proxy_QMARK_ = (function app$plugins$tokens$token_set_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"TokenSetProxy");
});
app.plugins.tokens.token_set_proxy = (function app$plugins$tokens$token_set_proxy(plugin_id,file_id,id){
var obj_63182 = ({});
var to_string_63181 = (function (){
return "TokenSetProxy";
});
var obj_63182_target_63186_63948 = obj_63182;
var prop_get_fn__63194_63949 = (function (){
var obj_63182_this_63185 = this;
var internal_fn__63188 = to_string_63181;
return internal_fn__63188.call(obj_63182_this_63185);
});
var prop_get_fn__63202_63950 = (function (){
var obj_63182_this_63185 = this;
var internal_fn__63195 = to_string_63181;
return internal_fn__63195.call(obj_63182_this_63185);
});
var prop_get_fn_plugin_63211_63951 = (function (){
var obj_63182_this_63185 = this;
var internal_fn_plugin_63205 = cljs.core.constantly(plugin_id);
try{return internal_fn_plugin_63205.call(obj_63182_this_63185);
}catch (e63302){var cause_63187 = e63302;
return app.plugins.utils.handle_error(cause_63187);
}});
var prop_get_fn_fileid_63219_63952 = (function (){
var obj_63182_this_63185 = this;
var internal_fn_fileid_63212 = cljs.core.constantly(file_id);
try{return internal_fn_fileid_63212.call(obj_63182_this_63185);
}catch (e63303){var cause_63187 = e63303;
return app.plugins.utils.handle_error(cause_63187);
}});
var prop_get_fn_id_63226_63953 = (function (){
var obj_63182_this_63185 = this;
var internal_fn_id_63220 = cljs.core.constantly(id);
try{return internal_fn_id_63220.call(obj_63182_this_63185);
}catch (e63304){var cause_63187 = e63304;
return app.plugins.utils.handle_error(cause_63187);
}});
var prop_get_fn_id_63233_63954 = (function (){
var obj_63182_this_63185 = this;
var internal_fn_id_63227 = (function (){
return ""+(id ?? "");
});
try{return internal_fn_id_63227.call(obj_63182_this_63185);
}catch (e63305){var cause_63187 = e63305;
return app.plugins.utils.handle_error(cause_63187);
}});
var prop_get_fn_name_63240_63955 = (function (){
var obj_63182_this_63185 = this;
var internal_fn_name_63234 = (function (_){
var set = app.plugins.utils.locate_token_set(file_id,id);
return app.common.types.tokens_lib.get_name(set);
});
try{return internal_fn_name_63234.call(obj_63182_this_63185,obj_63182_this_63185);
}catch (e63306){var cause_63187 = e63306;
return app.plugins.utils.handle_error(cause_63187);
}});
var schema_name_63237_63956 = app.common.files.tokens.make_token_set_name_schema(app.plugins.utils.locate_tokens_lib(file_id),id);
var coercer_fn_name_63235_63957 = (((((!((schema_name_63237_63956 == null)))) && ((!(cljs.core.fn_QMARK_(schema_name_63237_63956))))))?app.common.schema.coercer(schema_name_63237_63956):null);
var decode_fn_name_63236_63958 = app.common.json.__GT_clj;
var prop_set_fn_name_63241_63959 = (function (val_name_63239){
try{var obj_63182_this_63185 = this;
var internal_fn_name_63234 = (function (_,name){
var set = app.plugins.utils.locate_token_set(file_id,id);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.rename_token_set(set,name));
});
var schema_name_63237__$1 = ((cljs.core.fn_QMARK_(schema_name_63237_63956))?schema_name_63237_63956(val_name_63239):schema_name_63237_63956);
var coercer_fn_name_63235__$1 = (((coercer_fn_name_63235_63957 == null))?app.common.schema.coercer(schema_name_63237__$1):coercer_fn_name_63235_63957);
var val_name_63239__$1 = decode_fn_name_63236_63958(val_name_63239,null);
var val_name_63239__$2 = coercer_fn_name_63235__$1(val_name_63239__$1);
return internal_fn_name_63234.call(obj_63182_this_63185,obj_63182_this_63185,val_name_63239__$2);
}catch (e63307){var cause_63187 = e63307;
return app.plugins.utils.handle_error(cause_63187);
}});
var prop_get_fn_active_63249_63960 = (function (){
var obj_63182_this_63185 = this;
var internal_fn_active_63242 = (function (_){
var tokens_lib = app.plugins.utils.locate_tokens_lib(file_id);
var set = app.plugins.utils.locate_token_set(file_id,id);
return app.common.types.tokens_lib.token_set_active_QMARK_(tokens_lib,app.common.types.tokens_lib.get_name(set));
});
try{return internal_fn_active_63242.call(obj_63182_this_63185,obj_63182_this_63185);
}catch (e63310){var cause_63187 = e63310;
return app.plugins.utils.handle_error(cause_63187);
}});
var schema_active_63246_63961 = new cljs.core.Keyword("app.common.schema","boolean","app.common.schema/boolean",-727386221);
var coercer_fn_active_63243_63962 = (((((!((schema_active_63246_63961 == null)))) && ((!(cljs.core.fn_QMARK_(schema_active_63246_63961))))))?app.common.schema.coercer(schema_active_63246_63961):null);
var decode_fn_active_63245_63963 = app.common.json.__GT_clj;
var prop_set_fn_active_63250_63964 = (function (val_active_63248){
try{var obj_63182_this_63185 = this;
var internal_fn_active_63242 = (function (_,value){
var set = app.plugins.utils.locate_token_set(file_id,id);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.set_enabled_token_set(app.common.types.tokens_lib.get_name(set),value));
});
var schema_active_63246__$1 = ((cljs.core.fn_QMARK_(schema_active_63246_63961))?schema_active_63246_63961(val_active_63248):schema_active_63246_63961);
var coercer_fn_active_63243__$1 = (((coercer_fn_active_63243_63962 == null))?app.common.schema.coercer(schema_active_63246__$1):coercer_fn_active_63243_63962);
var val_active_63248__$1 = decode_fn_active_63245_63963(val_active_63248,null);
var val_active_63248__$2 = coercer_fn_active_63243__$1(val_active_63248__$1);
return internal_fn_active_63242.call(obj_63182_this_63185,obj_63182_this_63185,val_active_63248__$2);
}catch (e63311){var cause_63187 = e63311;
return app.plugins.utils.handle_error(cause_63187);
}});
var schema_toggleactive_63255_63965 = null;
var coercer_fn_toggleactive_63253_63966 = (((((!((schema_toggleactive_63255_63965 == null)))) && ((!(cljs.core.fn_QMARK_(schema_toggleactive_63255_63965))))))?app.common.schema.coercer(schema_toggleactive_63255_63965):null);
var decode_fn_toggleactive_63254_63967 = app.common.json.__GT_clj;
var prop_get_fn_toggleactive_63258_63968 = (function (){
var obj_63182_this_63185 = this;
var internal_fn_toggleactive_63252 = (function (_){
try{var set = app.plugins.utils.locate_token_set(file_id,id);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.toggle_token_set(app.common.types.tokens_lib.get_name(set)));
}catch (e63316){var cause_63187 = e63316;
return app.plugins.utils.handle_error(cause_63187);
}});
var internal_fn_toggleactive_63252__$1 = internal_fn_toggleactive_63252.bind(obj_63182_this_63185);
return internal_fn_toggleactive_63252__$1;
});
var prop_get_fn_tokens_63265_63969 = (function (){
var obj_63182_this_63185 = this;
var internal_fn_tokens_63259 = (function (_){
var tokens_lib = app.plugins.utils.locate_tokens_lib(file_id);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63178_SHARP_){
return app.plugins.tokens.token_proxy(plugin_id,file_id,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__63178_SHARP_));
}),cljs.core.vals(app.common.types.tokens_lib.get_tokens(tokens_lib,id))));
});
try{return internal_fn_tokens_63259.call(obj_63182_this_63185,obj_63182_this_63185);
}catch (e63406){var cause_63187 = e63406;
return app.plugins.utils.handle_error(cause_63187);
}});
var prop_get_fn_tokensbytype_63272_63970 = (function (){
var obj_63182_this_63185 = this;
var internal_fn_tokensbytype_63266 = (function (_){
var tokens_lib = app.plugins.utils.locate_tokens_lib(file_id);
var tokens = app.common.types.tokens_lib.get_tokens(tokens_lib,id);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p__63429){
var vec__63430 = p__63429;
var type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63430,(0),null);
var tokens__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__63430,(1),null);
return [cljs.core.name(type),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63180_SHARP_){
return app.plugins.tokens.token_proxy(plugin_id,file_id,id,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__63180_SHARP_));
}),tokens__$1))];
}),cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,cljs.core.group_by((function (p1__63179_SHARP_){
var G__63453 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__63179_SHARP_);
return (app.common.types.token.token_type__GT_dtcg_token_type.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.token_type__GT_dtcg_token_type.cljs$core$IFn$_invoke$arity$1(G__63453) : app.common.types.token.token_type__GT_dtcg_token_type.call(null,G__63453));
}),cljs.core.sort_by.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"name","name",1843675177),cljs.core.vals(tokens))))));
});
try{return internal_fn_tokensbytype_63266.call(obj_63182_this_63185,obj_63182_this_63185);
}catch (e63473){var cause_63187 = e63473;
return app.plugins.utils.handle_error(cause_63187);
}});
var schema_gettokenbyid_63276_63971 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null);
var coercer_fn_gettokenbyid_63274_63972 = (((((!((schema_gettokenbyid_63276_63971 == null)))) && ((!(cljs.core.fn_QMARK_(schema_gettokenbyid_63276_63971))))))?app.common.schema.coercer(schema_gettokenbyid_63276_63971):null);
var decode_fn_gettokenbyid_63275_63973 = app.common.json.__GT_clj;
var prop_get_fn_gettokenbyid_63279_63974 = (function (){
var obj_63182_this_63185 = this;
var internal_fn_gettokenbyid_63273 = (function (token_id){
try{var token = app.plugins.utils.locate_token(file_id,id,token_id);
if((!((token == null)))){
return app.plugins.tokens.token_proxy(plugin_id,file_id,id,token_id);
} else {
return null;
}
}catch (e63519){var cause_63187 = e63519;
return app.plugins.utils.handle_error(cause_63187);
}});
var internal_fn_gettokenbyid_63273__$1 = internal_fn_gettokenbyid_63273.bind(obj_63182_this_63185);
var internal_fn_gettokenbyid_63273__$2 = (function (){
try{var val_gettokenbyid_63278 = app.util.object.into_array(arguments);
var val_gettokenbyid_63278__$1 = decode_fn_gettokenbyid_63275_63973(val_gettokenbyid_63278,null);
var schema_gettokenbyid_63276__$1 = ((cljs.core.fn_QMARK_(schema_gettokenbyid_63276_63971))?schema_gettokenbyid_63276_63971(val_gettokenbyid_63278__$1):schema_gettokenbyid_63276_63971);
var coercer_fn_gettokenbyid_63274__$1 = (((coercer_fn_gettokenbyid_63274_63972 == null))?app.common.schema.coercer(schema_gettokenbyid_63276__$1):coercer_fn_gettokenbyid_63274_63972);
var val_gettokenbyid_63278__$2 = coercer_fn_gettokenbyid_63274__$1(val_gettokenbyid_63278__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(internal_fn_gettokenbyid_63273__$1,val_gettokenbyid_63278__$2);
}catch (e63526){var cause_63187 = e63526;
return app.plugins.utils.handle_error(cause_63187);
}});
return internal_fn_gettokenbyid_63273__$2;
});
var schema_addtoken_63283_63975 = (function (args){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),app.common.schema.update_properties.cljs$core$IFn$_invoke$arity$variadic(app.common.schema.dissoc_key(app.common.files.tokens.make_token_schema(app.common.types.tokens_lib.get_tokens(app.plugins.utils.locate_tokens_lib(file_id),id),(function (){var G__63527 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.first(args),"type");
return (app.common.types.token.dtcg_token_type__GT_token_type.cljs$core$IFn$_invoke$arity$1 ? app.common.types.token.dtcg_token_type__GT_token_type.cljs$core$IFn$_invoke$arity$1(G__63527) : app.common.types.token.dtcg_token_type__GT_token_type.call(null,G__63527));
})()),new cljs.core.Keyword(null,"id","id",-1388402092)),cljs.core.assoc,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("decode","json","decode/json",468276044),app.common.files.tokens.convert_dtcg_token], 0))], null);
});
var coercer_fn_addtoken_63281_63976 = (((((!((schema_addtoken_63283_63975 == null)))) && ((!(cljs.core.fn_QMARK_(schema_addtoken_63283_63975))))))?app.common.schema.coercer(schema_addtoken_63283_63975):null);
var decode_fn_addtoken_63282_63977 = app.common.json.__GT_clj;
var prop_get_fn_addtoken_63286_63978 = (function (){
var obj_63182_this_63185 = this;
var internal_fn_addtoken_63280 = (function (attrs){
try{var tokens_lib = app.plugins.utils.locate_tokens_lib(file_id);
var token = app.common.types.tokens_lib.make_token.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs], 0));
var tokens_tree = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(app.common.types.tokens_lib.get_tokens_in_active_sets(tokens_lib),token.name,token);
var resolved_tokens = app.main.data.tokenscript.resolve_tokens(tokens_tree);
var map__63529 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(resolved_tokens,token.name);
var map__63529__$1 = cljs.core.__destructure_map(map__63529);
var resolved_token = map__63529__$1;
var errors = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63529__$1,new cljs.core.Keyword(null,"errors","errors",-908790718));
var resolved_value = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__63529__$1,new cljs.core.Keyword(null,"resolved-value","resolved-value",676275626));
if(cljs.core.truth_(resolved_value)){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.create_token.cljs$core$IFn$_invoke$arity$2(id,token));

return app.plugins.tokens.token_proxy(plugin_id,file_id,id,token.id);
} else {
app.plugins.utils.display_not_valid(new cljs.core.Keyword(null,"addToken","addToken",-646732290),cljs.core.str.cljs$core$IFn$_invoke$arity$1(errors));

return null;
}
}catch (e63528){var cause_63187 = e63528;
return app.plugins.utils.handle_error(cause_63187);
}});
var internal_fn_addtoken_63280__$1 = internal_fn_addtoken_63280.bind(obj_63182_this_63185);
var internal_fn_addtoken_63280__$2 = (function (){
try{var val_addtoken_63285 = app.util.object.into_array(arguments);
var val_addtoken_63285__$1 = decode_fn_addtoken_63282_63977(val_addtoken_63285,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.identity], null));
var schema_addtoken_63283__$1 = ((cljs.core.fn_QMARK_(schema_addtoken_63283_63975))?schema_addtoken_63283_63975(val_addtoken_63285__$1):schema_addtoken_63283_63975);
var coercer_fn_addtoken_63281__$1 = (((coercer_fn_addtoken_63281_63976 == null))?app.common.schema.coercer(schema_addtoken_63283__$1):coercer_fn_addtoken_63281_63976);
var val_addtoken_63285__$2 = coercer_fn_addtoken_63281__$1(val_addtoken_63285__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(internal_fn_addtoken_63280__$1,val_addtoken_63285__$2);
}catch (e63530){var cause_63187 = e63530;
return app.plugins.utils.handle_error(cause_63187);
}});
return internal_fn_addtoken_63280__$2;
});
var schema_duplicate_63290_63979 = null;
var coercer_fn_duplicate_63288_63980 = (((((!((schema_duplicate_63290_63979 == null)))) && ((!(cljs.core.fn_QMARK_(schema_duplicate_63290_63979))))))?app.common.schema.coercer(schema_duplicate_63290_63979):null);
var decode_fn_duplicate_63289_63981 = app.common.json.__GT_clj;
var prop_get_fn_duplicate_63293_63982 = (function (){
var obj_63182_this_63185 = this;
var internal_fn_duplicate_63287 = (function (){
try{return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.duplicate_token_set(id));
}catch (e63531){var cause_63187 = e63531;
return app.plugins.utils.handle_error(cause_63187);
}});
var internal_fn_duplicate_63287__$1 = internal_fn_duplicate_63287.bind(obj_63182_this_63185);
return internal_fn_duplicate_63287__$1;
});
var schema_remove_63297_63983 = null;
var coercer_fn_remove_63295_63984 = (((((!((schema_remove_63297_63983 == null)))) && ((!(cljs.core.fn_QMARK_(schema_remove_63297_63983))))))?app.common.schema.coercer(schema_remove_63297_63983):null);
var decode_fn_remove_63296_63985 = app.common.json.__GT_clj;
var prop_get_fn_remove_63300_63986 = (function (){
var obj_63182_this_63185 = this;
var internal_fn_remove_63294 = (function (){
try{return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.delete_token_set(id));
}catch (e63532){var cause_63187 = e63532;
return app.plugins.utils.handle_error(cause_63187);
}});
var internal_fn_remove_63294__$1 = internal_fn_remove_63294.bind(obj_63182_this_63185);
return internal_fn_remove_63294__$1;
});
Object.defineProperty(obj_63182_target_63186_63948,Symbol.toStringTag,(function (){var obj63534 = ({"enumerable":false,"get":prop_get_fn__63194_63949});
return obj63534;
})());

Object.defineProperty(obj_63182_target_63186_63948,Symbol["for"]("penpot.reify:type"),(function (){var obj63536 = ({"enumerable":false,"get":prop_get_fn__63202_63950});
return obj63536;
})());

Object.defineProperty(obj_63182_target_63186_63948,"$plugin",(function (){var obj63538 = ({"enumerable":false,"get":prop_get_fn_plugin_63211_63951});
return obj63538;
})());

Object.defineProperty(obj_63182_target_63186_63948,"$file-id",(function (){var obj63540 = ({"enumerable":false,"get":prop_get_fn_fileid_63219_63952});
return obj63540;
})());

Object.defineProperty(obj_63182_target_63186_63948,"$id",(function (){var obj63542 = ({"enumerable":false,"get":prop_get_fn_id_63226_63953});
return obj63542;
})());

Object.defineProperty(obj_63182_target_63186_63948,"id",(function (){var obj63544 = ({"enumerable":true,"get":prop_get_fn_id_63233_63954});
return obj63544;
})());

Object.defineProperty(obj_63182_target_63186_63948,"name",(function (){var obj63546 = ({"enumerable":true,"get":prop_get_fn_name_63240_63955,"set":prop_set_fn_name_63241_63959});
return obj63546;
})());

Object.defineProperty(obj_63182_target_63186_63948,"active",(function (){var obj63548 = ({"enumerable":false,"get":prop_get_fn_active_63249_63960,"set":prop_set_fn_active_63250_63964});
return obj63548;
})());

Object.defineProperty(obj_63182_target_63186_63948,"toggleActive",(function (){var obj63550 = ({"enumerable":false,"get":prop_get_fn_toggleactive_63258_63968});
return obj63550;
})());

Object.defineProperty(obj_63182_target_63186_63948,"tokens",(function (){var obj63552 = ({"enumerable":false,"get":prop_get_fn_tokens_63265_63969});
return obj63552;
})());

Object.defineProperty(obj_63182_target_63186_63948,"tokensByType",(function (){var obj63554 = ({"enumerable":false,"get":prop_get_fn_tokensbytype_63272_63970});
return obj63554;
})());

Object.defineProperty(obj_63182_target_63186_63948,"getTokenById",(function (){var obj63556 = ({"enumerable":false,"get":prop_get_fn_gettokenbyid_63279_63974});
return obj63556;
})());

Object.defineProperty(obj_63182_target_63186_63948,"addToken",(function (){var obj63558 = ({"enumerable":false,"get":prop_get_fn_addtoken_63286_63978});
return obj63558;
})());

Object.defineProperty(obj_63182_target_63186_63948,"duplicate",(function (){var obj63560 = ({"enumerable":false,"get":prop_get_fn_duplicate_63293_63982});
return obj63560;
})());

Object.defineProperty(obj_63182_target_63186_63948,"remove",(function (){var obj63562 = ({"enumerable":false,"get":prop_get_fn_remove_63300_63986});
return obj63562;
})());


return obj_63182;
});
app.plugins.tokens.token_theme_proxy_QMARK_ = (function app$plugins$tokens$token_theme_proxy_QMARK_(p){
return app.util.object.type_of_QMARK_(p,"TokenThemeProxy");
});
app.plugins.tokens.token_theme_proxy = (function app$plugins$tokens$token_theme_proxy(plugin_id,file_id,id){
var obj_63565 = ({});
var to_string_63564 = (function (){
return "TokenThemeProxy";
});
var obj_63565_target_63569_64107 = obj_63565;
var prop_get_fn__63577_64108 = (function (){
var obj_63565_this_63568 = this;
var internal_fn__63571 = to_string_63564;
return internal_fn__63571.call(obj_63565_this_63568);
});
var prop_get_fn__63584_64109 = (function (){
var obj_63565_this_63568 = this;
var internal_fn__63578 = to_string_63564;
return internal_fn__63578.call(obj_63565_this_63568);
});
var prop_get_fn_plugin_63591_64110 = (function (){
var obj_63565_this_63568 = this;
var internal_fn_plugin_63585 = cljs.core.constantly(plugin_id);
try{return internal_fn_plugin_63585.call(obj_63565_this_63568);
}catch (e63686){var cause_63570 = e63686;
return app.plugins.utils.handle_error(cause_63570);
}});
var prop_get_fn_fileid_63598_64111 = (function (){
var obj_63565_this_63568 = this;
var internal_fn_fileid_63592 = cljs.core.constantly(file_id);
try{return internal_fn_fileid_63592.call(obj_63565_this_63568);
}catch (e63687){var cause_63570 = e63687;
return app.plugins.utils.handle_error(cause_63570);
}});
var prop_get_fn_id_63605_64112 = (function (){
var obj_63565_this_63568 = this;
var internal_fn_id_63599 = cljs.core.constantly(id);
try{return internal_fn_id_63599.call(obj_63565_this_63568);
}catch (e63688){var cause_63570 = e63688;
return app.plugins.utils.handle_error(cause_63570);
}});
var prop_get_fn_id_63612_64113 = (function (){
var obj_63565_this_63568 = this;
var internal_fn_id_63606 = (function (){
return ""+(id ?? "");
});
try{return internal_fn_id_63606.call(obj_63565_this_63568);
}catch (e63689){var cause_63570 = e63689;
return app.plugins.utils.handle_error(cause_63570);
}});
var prop_get_fn_externalid_63619_64114 = (function (){
var obj_63565_this_63568 = this;
var internal_fn_externalid_63613 = (function (_){
var theme = app.plugins.utils.locate_token_theme(file_id,id);
return new cljs.core.Keyword(null,"external-id","external-id",-456527727).cljs$core$IFn$_invoke$arity$1(theme);
});
try{return internal_fn_externalid_63613.call(obj_63565_this_63568,obj_63565_this_63568);
}catch (e63690){var cause_63570 = e63690;
return app.plugins.utils.handle_error(cause_63570);
}});
var prop_get_fn_group_63626_64115 = (function (){
var obj_63565_this_63568 = this;
var internal_fn_group_63620 = (function (_){
var theme = app.plugins.utils.locate_token_theme(file_id,id);
return new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(theme);
});
try{return internal_fn_group_63620.call(obj_63565_this_63568,obj_63565_this_63568);
}catch (e63691){var cause_63570 = e63691;
return app.plugins.utils.handle_error(cause_63570);
}});
var schema_group_63623_64116 = (function (){var theme = app.plugins.utils.locate_token_theme(file_id,id);
return app.common.files.tokens.make_token_theme_group_schema(app.plugins.utils.locate_tokens_lib(file_id),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(theme),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(theme));
})();
var coercer_fn_group_63621_64117 = (((((!((schema_group_63623_64116 == null)))) && ((!(cljs.core.fn_QMARK_(schema_group_63623_64116))))))?app.common.schema.coercer(schema_group_63623_64116):null);
var decode_fn_group_63622_64118 = app.common.json.__GT_clj;
var prop_set_fn_group_63627_64119 = (function (val_group_63625){
try{var obj_63565_this_63568 = this;
var internal_fn_group_63620 = (function (_,group){
var theme = app.plugins.utils.locate_token_theme(file_id,id);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.update_token_theme(id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(theme,new cljs.core.Keyword(null,"group","group",582596132),group)));
});
var schema_group_63623__$1 = ((cljs.core.fn_QMARK_(schema_group_63623_64116))?schema_group_63623_64116(val_group_63625):schema_group_63623_64116);
var coercer_fn_group_63621__$1 = (((coercer_fn_group_63621_64117 == null))?app.common.schema.coercer(schema_group_63623__$1):coercer_fn_group_63621_64117);
var val_group_63625__$1 = decode_fn_group_63622_64118(val_group_63625,null);
var val_group_63625__$2 = coercer_fn_group_63621__$1(val_group_63625__$1);
return internal_fn_group_63620.call(obj_63565_this_63568,obj_63565_this_63568,val_group_63625__$2);
}catch (e63692){var cause_63570 = e63692;
return app.plugins.utils.handle_error(cause_63570);
}});
var prop_get_fn_name_63634_64120 = (function (){
var obj_63565_this_63568 = this;
var internal_fn_name_63628 = (function (_){
var theme = app.plugins.utils.locate_token_theme(file_id,id);
return new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(theme);
});
try{return internal_fn_name_63628.call(obj_63565_this_63568,obj_63565_this_63568);
}catch (e63693){var cause_63570 = e63693;
return app.plugins.utils.handle_error(cause_63570);
}});
var schema_name_63631_64121 = (function (){var theme = app.plugins.utils.locate_token_theme(file_id,id);
return app.common.files.tokens.make_token_theme_name_schema(app.plugins.utils.locate_tokens_lib(file_id),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(theme),new cljs.core.Keyword(null,"group","group",582596132).cljs$core$IFn$_invoke$arity$1(theme));
})();
var coercer_fn_name_63629_64122 = (((((!((schema_name_63631_64121 == null)))) && ((!(cljs.core.fn_QMARK_(schema_name_63631_64121))))))?app.common.schema.coercer(schema_name_63631_64121):null);
var decode_fn_name_63630_64123 = app.common.json.__GT_clj;
var prop_set_fn_name_63635_64124 = (function (val_name_63633){
try{var obj_63565_this_63568 = this;
var internal_fn_name_63628 = (function (_,name){
var theme = app.plugins.utils.locate_token_theme(file_id,id);
if(cljs.core.truth_(name)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.update_token_theme(id,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(theme,new cljs.core.Keyword(null,"name","name",1843675177),name)));
} else {
return null;
}
});
var schema_name_63631__$1 = ((cljs.core.fn_QMARK_(schema_name_63631_64121))?schema_name_63631_64121(val_name_63633):schema_name_63631_64121);
var coercer_fn_name_63629__$1 = (((coercer_fn_name_63629_64122 == null))?app.common.schema.coercer(schema_name_63631__$1):coercer_fn_name_63629_64122);
var val_name_63633__$1 = decode_fn_name_63630_64123(val_name_63633,null);
var val_name_63633__$2 = coercer_fn_name_63629__$1(val_name_63633__$1);
return internal_fn_name_63628.call(obj_63565_this_63568,obj_63565_this_63568,val_name_63633__$2);
}catch (e63694){var cause_63570 = e63694;
return app.plugins.utils.handle_error(cause_63570);
}});
var prop_get_fn_active_63642_64125 = (function (){
var obj_63565_this_63568 = this;
var internal_fn_active_63636 = (function (_){
var tokens_lib = app.plugins.utils.locate_tokens_lib(file_id);
return app.common.types.tokens_lib.theme_active_QMARK_(tokens_lib,id);
});
try{return internal_fn_active_63636.call(obj_63565_this_63568,obj_63565_this_63568);
}catch (e63695){var cause_63570 = e63695;
return app.plugins.utils.handle_error(cause_63570);
}});
var schema_active_63639_64126 = new cljs.core.Keyword("app.common.schema","boolean","app.common.schema/boolean",-727386221);
var coercer_fn_active_63637_64127 = (((((!((schema_active_63639_64126 == null)))) && ((!(cljs.core.fn_QMARK_(schema_active_63639_64126))))))?app.common.schema.coercer(schema_active_63639_64126):null);
var decode_fn_active_63638_64128 = app.common.json.__GT_clj;
var prop_set_fn_active_63643_64129 = (function (val_active_63641){
try{var obj_63565_this_63568 = this;
var internal_fn_active_63636 = (function (_,value){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.set_token_theme_active(id,value));
});
var schema_active_63639__$1 = ((cljs.core.fn_QMARK_(schema_active_63639_64126))?schema_active_63639_64126(val_active_63641):schema_active_63639_64126);
var coercer_fn_active_63637__$1 = (((coercer_fn_active_63637_64127 == null))?app.common.schema.coercer(schema_active_63639__$1):coercer_fn_active_63637_64127);
var val_active_63641__$1 = decode_fn_active_63638_64128(val_active_63641,null);
var val_active_63641__$2 = coercer_fn_active_63637__$1(val_active_63641__$1);
return internal_fn_active_63636.call(obj_63565_this_63568,obj_63565_this_63568,val_active_63641__$2);
}catch (e63696){var cause_63570 = e63696;
return app.plugins.utils.handle_error(cause_63570);
}});
var schema_toggleactive_63647_64130 = null;
var coercer_fn_toggleactive_63645_64131 = (((((!((schema_toggleactive_63647_64130 == null)))) && ((!(cljs.core.fn_QMARK_(schema_toggleactive_63647_64130))))))?app.common.schema.coercer(schema_toggleactive_63647_64130):null);
var decode_fn_toggleactive_63646_64132 = app.common.json.__GT_clj;
var prop_get_fn_toggleactive_63650_64133 = (function (){
var obj_63565_this_63568 = this;
var internal_fn_toggleactive_63644 = (function (_){
try{return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.toggle_token_theme_active(id));
}catch (e63697){var cause_63570 = e63697;
return app.plugins.utils.handle_error(cause_63570);
}});
var internal_fn_toggleactive_63644__$1 = internal_fn_toggleactive_63644.bind(obj_63565_this_63568);
return internal_fn_toggleactive_63644__$1;
});
var prop_get_fn_activesets_63657_64134 = (function (){
var obj_63565_this_63568 = this;
var internal_fn_activesets_63651 = (function (_){
var tokens_lib = app.plugins.utils.locate_tokens_lib(file_id);
var theme = app.plugins.utils.locate_token_theme(file_id,id);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63563_SHARP_){
return app.plugins.tokens.token_set_proxy(plugin_id,file_id,app.common.types.tokens_lib.get_id(app.common.types.tokens_lib.get_set_by_name(tokens_lib,p1__63563_SHARP_)));
}),new cljs.core.Keyword(null,"sets","sets",400955582).cljs$core$IFn$_invoke$arity$1(theme)));
});
try{return internal_fn_activesets_63651.call(obj_63565_this_63568,obj_63565_this_63568);
}catch (e63698){var cause_63570 = e63698;
return app.plugins.utils.handle_error(cause_63570);
}});
var schema_addset_63661_64135 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.plugins.tokens.token_set_proxy_QMARK_], null)], null);
var coercer_fn_addset_63659_64136 = (((((!((schema_addset_63661_64135 == null)))) && ((!(cljs.core.fn_QMARK_(schema_addset_63661_64135))))))?app.common.schema.coercer(schema_addset_63661_64135):null);
var decode_fn_addset_63660_64137 = app.common.json.__GT_clj;
var prop_get_fn_addset_63664_64138 = (function (){
var obj_63565_this_63568 = this;
var internal_fn_addset_63658 = (function (token_set){
try{var theme = app.plugins.utils.locate_token_theme(file_id,id);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.update_token_theme(id,app.common.types.tokens_lib.enable_set(theme,app.util.object.get.cljs$core$IFn$_invoke$arity$2(token_set,new cljs.core.Keyword(null,"name","name",1843675177)))));
}catch (e63699){var cause_63570 = e63699;
return app.plugins.utils.handle_error(cause_63570);
}});
var internal_fn_addset_63658__$1 = internal_fn_addset_63658.bind(obj_63565_this_63568);
var internal_fn_addset_63658__$2 = (function (){
try{var val_addset_63663 = app.util.object.into_array(arguments);
var val_addset_63663__$1 = decode_fn_addset_63660_64137(val_addset_63663,null);
var schema_addset_63661__$1 = ((cljs.core.fn_QMARK_(schema_addset_63661_64135))?schema_addset_63661_64135(val_addset_63663__$1):schema_addset_63661_64135);
var coercer_fn_addset_63659__$1 = (((coercer_fn_addset_63659_64136 == null))?app.common.schema.coercer(schema_addset_63661__$1):coercer_fn_addset_63659_64136);
var val_addset_63663__$2 = coercer_fn_addset_63659__$1(val_addset_63663__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(internal_fn_addset_63658__$1,val_addset_63663__$2);
}catch (e63700){var cause_63570 = e63700;
return app.plugins.utils.handle_error(cause_63570);
}});
return internal_fn_addset_63658__$2;
});
var schema_removeset_63668_64139 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.plugins.tokens.token_set_proxy_QMARK_], null)], null);
var coercer_fn_removeset_63666_64140 = (((((!((schema_removeset_63668_64139 == null)))) && ((!(cljs.core.fn_QMARK_(schema_removeset_63668_64139))))))?app.common.schema.coercer(schema_removeset_63668_64139):null);
var decode_fn_removeset_63667_64141 = app.common.json.__GT_clj;
var prop_get_fn_removeset_63671_64142 = (function (){
var obj_63565_this_63568 = this;
var internal_fn_removeset_63665 = (function (token_set){
try{var theme = app.plugins.utils.locate_token_theme(file_id,id);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.update_token_theme(id,app.common.types.tokens_lib.disable_set(theme,app.util.object.get.cljs$core$IFn$_invoke$arity$2(token_set,new cljs.core.Keyword(null,"name","name",1843675177)))));
}catch (e63701){var cause_63570 = e63701;
return app.plugins.utils.handle_error(cause_63570);
}});
var internal_fn_removeset_63665__$1 = internal_fn_removeset_63665.bind(obj_63565_this_63568);
var internal_fn_removeset_63665__$2 = (function (){
try{var val_removeset_63670 = app.util.object.into_array(arguments);
var val_removeset_63670__$1 = decode_fn_removeset_63667_64141(val_removeset_63670,null);
var schema_removeset_63668__$1 = ((cljs.core.fn_QMARK_(schema_removeset_63668_64139))?schema_removeset_63668_64139(val_removeset_63670__$1):schema_removeset_63668_64139);
var coercer_fn_removeset_63666__$1 = (((coercer_fn_removeset_63666_64140 == null))?app.common.schema.coercer(schema_removeset_63668__$1):coercer_fn_removeset_63666_64140);
var val_removeset_63670__$2 = coercer_fn_removeset_63666__$1(val_removeset_63670__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(internal_fn_removeset_63665__$1,val_removeset_63670__$2);
}catch (e63702){var cause_63570 = e63702;
return app.plugins.utils.handle_error(cause_63570);
}});
return internal_fn_removeset_63665__$2;
});
var schema_duplicate_63675_64143 = null;
var coercer_fn_duplicate_63673_64144 = (((((!((schema_duplicate_63675_64143 == null)))) && ((!(cljs.core.fn_QMARK_(schema_duplicate_63675_64143))))))?app.common.schema.coercer(schema_duplicate_63675_64143):null);
var decode_fn_duplicate_63674_64145 = app.common.json.__GT_clj;
var prop_get_fn_duplicate_63678_64146 = (function (){
var obj_63565_this_63568 = this;
var internal_fn_duplicate_63672 = (function (){
try{var theme = app.plugins.utils.locate_token_theme(file_id,id);
var theme_SINGLEQUOTE_ = app.common.types.tokens_lib.make_token_theme.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(clojure.datafy.datafy(theme),new cljs.core.Keyword(null,"id","id",-1388402092),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"modified-at","modified-at",-932048179)], 0))], 0));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.create_token_theme(theme_SINGLEQUOTE_));

var G__63704 = plugin_id;
var G__63705 = file_id;
var G__63706 = theme_SINGLEQUOTE_.id;
return (app.plugins.tokens.token_theme_proxy.cljs$core$IFn$_invoke$arity$3 ? app.plugins.tokens.token_theme_proxy.cljs$core$IFn$_invoke$arity$3(G__63704,G__63705,G__63706) : app.plugins.tokens.token_theme_proxy.call(null,G__63704,G__63705,G__63706));
}catch (e63703){var cause_63570 = e63703;
return app.plugins.utils.handle_error(cause_63570);
}});
var internal_fn_duplicate_63672__$1 = internal_fn_duplicate_63672.bind(obj_63565_this_63568);
return internal_fn_duplicate_63672__$1;
});
var schema_remove_63682_64147 = null;
var coercer_fn_remove_63680_64148 = (((((!((schema_remove_63682_64147 == null)))) && ((!(cljs.core.fn_QMARK_(schema_remove_63682_64147))))))?app.common.schema.coercer(schema_remove_63682_64147):null);
var decode_fn_remove_63681_64149 = app.common.json.__GT_clj;
var prop_get_fn_remove_63685_64150 = (function (){
var obj_63565_this_63568 = this;
var internal_fn_remove_63679 = (function (){
try{return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.delete_token_theme(id));
}catch (e63707){var cause_63570 = e63707;
return app.plugins.utils.handle_error(cause_63570);
}});
var internal_fn_remove_63679__$1 = internal_fn_remove_63679.bind(obj_63565_this_63568);
return internal_fn_remove_63679__$1;
});
Object.defineProperty(obj_63565_target_63569_64107,Symbol.toStringTag,(function (){var obj63709 = ({"enumerable":false,"get":prop_get_fn__63577_64108});
return obj63709;
})());

Object.defineProperty(obj_63565_target_63569_64107,Symbol["for"]("penpot.reify:type"),(function (){var obj63711 = ({"enumerable":false,"get":prop_get_fn__63584_64109});
return obj63711;
})());

Object.defineProperty(obj_63565_target_63569_64107,"$plugin",(function (){var obj63713 = ({"enumerable":false,"get":prop_get_fn_plugin_63591_64110});
return obj63713;
})());

Object.defineProperty(obj_63565_target_63569_64107,"$file-id",(function (){var obj63715 = ({"enumerable":false,"get":prop_get_fn_fileid_63598_64111});
return obj63715;
})());

Object.defineProperty(obj_63565_target_63569_64107,"$id",(function (){var obj63717 = ({"enumerable":false,"get":prop_get_fn_id_63605_64112});
return obj63717;
})());

Object.defineProperty(obj_63565_target_63569_64107,"id",(function (){var obj63719 = ({"enumerable":true,"get":prop_get_fn_id_63612_64113});
return obj63719;
})());

Object.defineProperty(obj_63565_target_63569_64107,"external-id",(function (){var obj63721 = ({"enumerable":true,"get":prop_get_fn_externalid_63619_64114});
return obj63721;
})());

Object.defineProperty(obj_63565_target_63569_64107,"group",(function (){var obj63723 = ({"enumerable":true,"get":prop_get_fn_group_63626_64115,"set":prop_set_fn_group_63627_64119});
return obj63723;
})());

Object.defineProperty(obj_63565_target_63569_64107,"name",(function (){var obj63725 = ({"enumerable":true,"get":prop_get_fn_name_63634_64120,"set":prop_set_fn_name_63635_64124});
return obj63725;
})());

Object.defineProperty(obj_63565_target_63569_64107,"active",(function (){var obj63727 = ({"enumerable":false,"get":prop_get_fn_active_63642_64125,"set":prop_set_fn_active_63643_64129});
return obj63727;
})());

Object.defineProperty(obj_63565_target_63569_64107,"toggleActive",(function (){var obj63729 = ({"enumerable":false,"get":prop_get_fn_toggleactive_63650_64133});
return obj63729;
})());

Object.defineProperty(obj_63565_target_63569_64107,"activeSets",(function (){var obj63731 = ({"enumerable":true,"get":prop_get_fn_activesets_63657_64134});
return obj63731;
})());

Object.defineProperty(obj_63565_target_63569_64107,"addSet",(function (){var obj63733 = ({"enumerable":false,"get":prop_get_fn_addset_63664_64138});
return obj63733;
})());

Object.defineProperty(obj_63565_target_63569_64107,"removeSet",(function (){var obj63735 = ({"enumerable":false,"get":prop_get_fn_removeset_63671_64142});
return obj63735;
})());

Object.defineProperty(obj_63565_target_63569_64107,"duplicate",(function (){var obj63738 = ({"enumerable":false,"get":prop_get_fn_duplicate_63678_64146});
return obj63738;
})());

Object.defineProperty(obj_63565_target_63569_64107,"remove",(function (){var obj63743 = ({"enumerable":false,"get":prop_get_fn_remove_63685_64150});
return obj63743;
})());


return obj_63565;
});
app.plugins.tokens.tokens_catalog = (function app$plugins$tokens$tokens_catalog(plugin_id,file_id){
var obj_63748 = ({});
var to_string_63747 = (function (){
return "TokensCatalog";
});
var obj_63748_target_63752_64158 = obj_63748;
var prop_get_fn__63760_64159 = (function (){
var obj_63748_this_63751 = this;
var internal_fn__63754 = to_string_63747;
return internal_fn__63754.call(obj_63748_this_63751);
});
var prop_get_fn__63767_64160 = (function (){
var obj_63748_this_63751 = this;
var internal_fn__63761 = to_string_63747;
return internal_fn__63761.call(obj_63748_this_63751);
});
var prop_get_fn_plugin_63774_64161 = (function (){
var obj_63748_this_63751 = this;
var internal_fn_plugin_63768 = cljs.core.constantly(plugin_id);
try{return internal_fn_plugin_63768.call(obj_63748_this_63751);
}catch (e63824){var cause_63753 = e63824;
return app.plugins.utils.handle_error(cause_63753);
}});
var prop_get_fn_id_63781_64162 = (function (){
var obj_63748_this_63751 = this;
var internal_fn_id_63775 = cljs.core.constantly(file_id);
try{return internal_fn_id_63775.call(obj_63748_this_63751);
}catch (e63825){var cause_63753 = e63825;
return app.plugins.utils.handle_error(cause_63753);
}});
var prop_get_fn_themes_63788_64163 = (function (){
var obj_63748_this_63751 = this;
var internal_fn_themes_63782 = (function (_){
var tokens_lib = app.plugins.utils.locate_tokens_lib(file_id);
var themes = (cljs.core.truth_(tokens_lib)?cljs.core.remove.cljs$core$IFn$_invoke$arity$2((function (p1__63744_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__63744_SHARP_),app.common.uuid.zero);
}),app.common.types.tokens_lib.get_themes(tokens_lib)):null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63745_SHARP_){
return app.plugins.tokens.token_theme_proxy(plugin_id,file_id,app.common.types.tokens_lib.get_id(p1__63745_SHARP_));
}),themes));
});
try{return internal_fn_themes_63782.call(obj_63748_this_63751,obj_63748_this_63751);
}catch (e63826){var cause_63753 = e63826;
return app.plugins.utils.handle_error(cause_63753);
}});
var prop_get_fn_sets_63795_64164 = (function (){
var obj_63748_this_63751 = this;
var internal_fn_sets_63789 = (function (_){
var tokens_lib = app.plugins.utils.locate_tokens_lib(file_id);
var sets = (cljs.core.truth_(tokens_lib)?app.common.types.tokens_lib.get_sets(tokens_lib):null);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.array,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__63746_SHARP_){
return app.plugins.tokens.token_set_proxy(plugin_id,file_id,app.common.types.tokens_lib.get_id(p1__63746_SHARP_));
}),sets));
});
try{return internal_fn_sets_63789.call(obj_63748_this_63751,obj_63748_this_63751);
}catch (e63827){var cause_63753 = e63827;
return app.plugins.utils.handle_error(cause_63753);
}});
var schema_addtheme_63799_64165 = (function (attrs){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),app.common.schema.dissoc_key(app.common.schema.schema(app.common.files.tokens.make_token_theme_schema(app.plugins.utils.locate_tokens_lib(file_id),(function (){var or__5025__auto__ = app.util.object.get.cljs$core$IFn$_invoke$arity$2(attrs,"group");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),(function (){var or__5025__auto__ = app.util.object.get.cljs$core$IFn$_invoke$arity$2(attrs,"name");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "";
}
})(),null)),new cljs.core.Keyword(null,"id","id",-1388402092))], null);
});
var coercer_fn_addtheme_63797_64166 = (((((!((schema_addtheme_63799_64165 == null)))) && ((!(cljs.core.fn_QMARK_(schema_addtheme_63799_64165))))))?app.common.schema.coercer(schema_addtheme_63799_64165):null);
var decode_fn_addtheme_63798_64167 = app.common.json.__GT_clj;
var prop_get_fn_addtheme_63802_64168 = (function (){
var obj_63748_this_63751 = this;
var internal_fn_addtheme_63796 = (function (attrs){
try{var theme = app.common.types.tokens_lib.make_token_theme.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs], 0));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.create_token_theme(theme));

return app.plugins.tokens.token_theme_proxy(plugin_id,file_id,theme.id);
}catch (e63828){var cause_63753 = e63828;
return app.plugins.utils.handle_error(cause_63753);
}});
var internal_fn_addtheme_63796__$1 = internal_fn_addtheme_63796.bind(obj_63748_this_63751);
var internal_fn_addtheme_63796__$2 = (function (){
try{var val_addtheme_63801 = app.util.object.into_array(arguments);
var val_addtheme_63801__$1 = decode_fn_addtheme_63798_64167(val_addtheme_63801,null);
var schema_addtheme_63799__$1 = ((cljs.core.fn_QMARK_(schema_addtheme_63799_64165))?schema_addtheme_63799_64165(val_addtheme_63801__$1):schema_addtheme_63799_64165);
var coercer_fn_addtheme_63797__$1 = (((coercer_fn_addtheme_63797_64166 == null))?app.common.schema.coercer(schema_addtheme_63799__$1):coercer_fn_addtheme_63797_64166);
var val_addtheme_63801__$2 = coercer_fn_addtheme_63797__$1(val_addtheme_63801__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(internal_fn_addtheme_63796__$1,val_addtheme_63801__$2);
}catch (e63829){var cause_63753 = e63829;
return app.plugins.utils.handle_error(cause_63753);
}});
return internal_fn_addtheme_63796__$2;
});
var schema_addset_63806_64169 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),app.common.schema.dissoc_key(app.common.schema.schema(app.common.files.tokens.make_token_set_schema(app.plugins.utils.locate_tokens_lib(file_id),null)),new cljs.core.Keyword(null,"id","id",-1388402092))], null);
var coercer_fn_addset_63804_64170 = (((((!((schema_addset_63806_64169 == null)))) && ((!(cljs.core.fn_QMARK_(schema_addset_63806_64169))))))?app.common.schema.coercer(schema_addset_63806_64169):null);
var decode_fn_addset_63805_64171 = app.common.json.__GT_clj;
var prop_get_fn_addset_63809_64172 = (function (){
var obj_63748_this_63751 = this;
var internal_fn_addset_63803 = (function (attrs){
try{var attrs__$1 = cljs.core.update.cljs$core$IFn$_invoke$arity$3(attrs,new cljs.core.Keyword(null,"name","name",1843675177),app.common.types.tokens_lib.normalize_set_name);
var set = app.common.types.tokens_lib.make_token_set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([attrs__$1], 0));
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.library_edit.create_token_set(set));

return app.plugins.tokens.token_set_proxy(plugin_id,file_id,set.app$common$types$tokens_lib$INamedItem$get_id$arity$1(null));
}catch (e63830){var cause_63753 = e63830;
return app.plugins.utils.handle_error(cause_63753);
}});
var internal_fn_addset_63803__$1 = internal_fn_addset_63803.bind(obj_63748_this_63751);
var internal_fn_addset_63803__$2 = (function (){
try{var val_addset_63808 = app.util.object.into_array(arguments);
var val_addset_63808__$1 = decode_fn_addset_63805_64171(val_addset_63808,null);
var schema_addset_63806__$1 = ((cljs.core.fn_QMARK_(schema_addset_63806_64169))?schema_addset_63806_64169(val_addset_63808__$1):schema_addset_63806_64169);
var coercer_fn_addset_63804__$1 = (((coercer_fn_addset_63804_64170 == null))?app.common.schema.coercer(schema_addset_63806__$1):coercer_fn_addset_63804_64170);
var val_addset_63808__$2 = coercer_fn_addset_63804__$1(val_addset_63808__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(internal_fn_addset_63803__$1,val_addset_63808__$2);
}catch (e63831){var cause_63753 = e63831;
return app.plugins.utils.handle_error(cause_63753);
}});
return internal_fn_addset_63803__$2;
});
var schema_getthemebyid_63813_64173 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null);
var coercer_fn_getthemebyid_63811_64174 = (((((!((schema_getthemebyid_63813_64173 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getthemebyid_63813_64173))))))?app.common.schema.coercer(schema_getthemebyid_63813_64173):null);
var decode_fn_getthemebyid_63812_64175 = app.common.json.__GT_clj;
var prop_get_fn_getthemebyid_63816_64176 = (function (){
var obj_63748_this_63751 = this;
var internal_fn_getthemebyid_63810 = (function (theme_id){
try{var theme = app.plugins.utils.locate_token_theme(file_id,theme_id);
if((!((theme == null)))){
return app.plugins.tokens.token_theme_proxy(plugin_id,file_id,theme_id);
} else {
return null;
}
}catch (e63832){var cause_63753 = e63832;
return app.plugins.utils.handle_error(cause_63753);
}});
var internal_fn_getthemebyid_63810__$1 = internal_fn_getthemebyid_63810.bind(obj_63748_this_63751);
var internal_fn_getthemebyid_63810__$2 = (function (){
try{var val_getthemebyid_63815 = app.util.object.into_array(arguments);
var val_getthemebyid_63815__$1 = decode_fn_getthemebyid_63812_64175(val_getthemebyid_63815,null);
var schema_getthemebyid_63813__$1 = ((cljs.core.fn_QMARK_(schema_getthemebyid_63813_64173))?schema_getthemebyid_63813_64173(val_getthemebyid_63815__$1):schema_getthemebyid_63813_64173);
var coercer_fn_getthemebyid_63811__$1 = (((coercer_fn_getthemebyid_63811_64174 == null))?app.common.schema.coercer(schema_getthemebyid_63813__$1):coercer_fn_getthemebyid_63811_64174);
var val_getthemebyid_63815__$2 = coercer_fn_getthemebyid_63811__$1(val_getthemebyid_63815__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(internal_fn_getthemebyid_63810__$1,val_getthemebyid_63815__$2);
}catch (e63833){var cause_63753 = e63833;
return app.plugins.utils.handle_error(cause_63753);
}});
return internal_fn_getthemebyid_63810__$2;
});
var schema_getsetbyid_63820_64177 = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"tuple","tuple",-472667284),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null);
var coercer_fn_getsetbyid_63818_64178 = (((((!((schema_getsetbyid_63820_64177 == null)))) && ((!(cljs.core.fn_QMARK_(schema_getsetbyid_63820_64177))))))?app.common.schema.coercer(schema_getsetbyid_63820_64177):null);
var decode_fn_getsetbyid_63819_64179 = app.common.json.__GT_clj;
var prop_get_fn_getsetbyid_63823_64180 = (function (){
var obj_63748_this_63751 = this;
var internal_fn_getsetbyid_63817 = (function (set_id){
try{var set = app.plugins.utils.locate_token_set(file_id,set_id);
if((!((set == null)))){
return app.plugins.tokens.token_set_proxy(plugin_id,file_id,set_id);
} else {
return null;
}
}catch (e63834){var cause_63753 = e63834;
return app.plugins.utils.handle_error(cause_63753);
}});
var internal_fn_getsetbyid_63817__$1 = internal_fn_getsetbyid_63817.bind(obj_63748_this_63751);
var internal_fn_getsetbyid_63817__$2 = (function (){
try{var val_getsetbyid_63822 = app.util.object.into_array(arguments);
var val_getsetbyid_63822__$1 = decode_fn_getsetbyid_63819_64179(val_getsetbyid_63822,null);
var schema_getsetbyid_63820__$1 = ((cljs.core.fn_QMARK_(schema_getsetbyid_63820_64177))?schema_getsetbyid_63820_64177(val_getsetbyid_63822__$1):schema_getsetbyid_63820_64177);
var coercer_fn_getsetbyid_63818__$1 = (((coercer_fn_getsetbyid_63818_64178 == null))?app.common.schema.coercer(schema_getsetbyid_63820__$1):coercer_fn_getsetbyid_63818_64178);
var val_getsetbyid_63822__$2 = coercer_fn_getsetbyid_63818__$1(val_getsetbyid_63822__$1);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(internal_fn_getsetbyid_63817__$1,val_getsetbyid_63822__$2);
}catch (e63835){var cause_63753 = e63835;
return app.plugins.utils.handle_error(cause_63753);
}});
return internal_fn_getsetbyid_63817__$2;
});
Object.defineProperty(obj_63748_target_63752_64158,Symbol.toStringTag,(function (){var obj63837 = ({"enumerable":false,"get":prop_get_fn__63760_64159});
return obj63837;
})());

Object.defineProperty(obj_63748_target_63752_64158,Symbol["for"]("penpot.reify:type"),(function (){var obj63839 = ({"enumerable":false,"get":prop_get_fn__63767_64160});
return obj63839;
})());

Object.defineProperty(obj_63748_target_63752_64158,"$plugin",(function (){var obj63841 = ({"enumerable":false,"get":prop_get_fn_plugin_63774_64161});
return obj63841;
})());

Object.defineProperty(obj_63748_target_63752_64158,"$id",(function (){var obj63843 = ({"enumerable":false,"get":prop_get_fn_id_63781_64162});
return obj63843;
})());

Object.defineProperty(obj_63748_target_63752_64158,"themes",(function (){var obj63845 = ({"enumerable":false,"get":prop_get_fn_themes_63788_64163});
return obj63845;
})());

Object.defineProperty(obj_63748_target_63752_64158,"sets",(function (){var obj63847 = ({"enumerable":false,"get":prop_get_fn_sets_63795_64164});
return obj63847;
})());

Object.defineProperty(obj_63748_target_63752_64158,"addTheme",(function (){var obj63849 = ({"enumerable":false,"get":prop_get_fn_addtheme_63802_64168});
return obj63849;
})());

Object.defineProperty(obj_63748_target_63752_64158,"addSet",(function (){var obj63851 = ({"enumerable":false,"get":prop_get_fn_addset_63809_64172});
return obj63851;
})());

Object.defineProperty(obj_63748_target_63752_64158,"getThemeById",(function (){var obj63853 = ({"enumerable":false,"get":prop_get_fn_getthemebyid_63816_64176});
return obj63853;
})());

Object.defineProperty(obj_63748_target_63752_64158,"getSetById",(function (){var obj63855 = ({"enumerable":false,"get":prop_get_fn_getsetbyid_63823_64180});
return obj63855;
})());


return obj_63748;
});

//# sourceMappingURL=app.plugins.tokens.js.map
