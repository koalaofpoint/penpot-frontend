import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.json.js";
import "./app.common.path_names.js";
import "./app.common.types.tokens_lib.js";
import "./app.config.js";
import "./app.main.data.notifications.js";
import "./app.main.data.style_dictionary.js";
import "./app.main.data.tokenscript.js";
import "./app.main.data.workspace.tokens.errors.js";
import "./app.main.store.js";
import "./app.util.i18n.js";
import "./beicon.v2.core.js";
import "./cuerdas.core.js";
goog.provide('app.main.data.workspace.tokens.import_export');
/**
 * Extracts reference errors from errors produced by StyleDictionary.
 */
app.main.data.workspace.tokens.import_export.extract_reference_errors = (function app$main$data$workspace$tokens$import_export$extract_reference_errors(err){
var vec__79589 = cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(err,"\n");
var seq__79590 = cljs.core.seq(vec__79589);
var first__79591 = cljs.core.first(seq__79590);
var seq__79590__$1 = cljs.core.next(seq__79590);
var header_1 = first__79591;
var first__79591__$1 = cljs.core.first(seq__79590__$1);
var seq__79590__$2 = cljs.core.next(seq__79590__$1);
var header_2 = first__79591__$1;
var errors = seq__79590__$2;
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(header_1,"Error: ")) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(header_2,"Reference Errors:")))){
return errors;
} else {
return null;
}
});
/**
 * Extracts name error out of malli schema error during import.
 */
app.main.data.workspace.tokens.import_export.extract_name_error = (function app$main$data$workspace$tokens$import_export$extract_name_error(err){
var schema_error = (function (){var G__79592 = cljs.core.ex_data(err);
var G__79592__$1 = (((G__79592 == null))?null:cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(G__79592,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.schema","explain","app.common.schema/explain",1944111705),new cljs.core.Keyword(null,"errors","errors",-908790718)], null)));
if((G__79592__$1 == null)){
return null;
} else {
return cljs.core.first(G__79592__$1);
}
})();
var name_error_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"in","in",-1531184865).cljs$core$IFn$_invoke$arity$1(schema_error),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"name","name",1843675177)], null));
if(name_error_QMARK_){
return app.main.data.workspace.tokens.errors.error_ex_info(new cljs.core.Keyword("error.import","invalid-token-name","error.import/invalid-token-name",-1589247189),new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(schema_error),err);
} else {
return null;
}
});
app.main.data.workspace.tokens.import_export.group_by_value = (function app$main$data$workspace$tokens$import_export$group_by_value(m){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (acc,p__79593){
var vec__79594 = p__79593;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79594,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79594,(1),null);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(acc,v,cljs.core.conj,k);
}),cljs.core.PersistentArrayMap.EMPTY,m);
});
app.main.data.workspace.tokens.import_export.show_unknown_types_warning = (function app$main$data$workspace$tokens$import_export$show_unknown_types_warning(unknown_tokens){
var type__GT_tokens = app.main.data.workspace.tokens.import_export.group_by_value(unknown_tokens);
return app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("workspace.tokens.unknown-token-type-message"),new cljs.core.Keyword(null,"detail","detail",-1545345025),cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("<br>",(function (){var iter__5503__auto__ = (function app$main$data$workspace$tokens$import_export$show_unknown_types_warning_$_iter__79597(s__79598){
return (new cljs.core.LazySeq(null,(function (){
var s__79598__$1 = s__79598;
while(true){
var temp__5825__auto__ = cljs.core.seq(s__79598__$1);
if(temp__5825__auto__){
var s__79598__$2 = temp__5825__auto__;
if(cljs.core.chunked_seq_QMARK_(s__79598__$2)){
var c__5501__auto__ = cljs.core.chunk_first(s__79598__$2);
var size__5502__auto__ = cljs.core.count(c__5501__auto__);
var b__79600 = cljs.core.chunk_buffer(size__5502__auto__);
if((function (){var i__79599 = (0);
while(true){
if((i__79599 < size__5502__auto__)){
var vec__79601 = cljs.core._nth(c__5501__auto__,i__79599);
var token_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79601,(0),null);
var tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79601,(1),null);
cljs.core.chunk_append(b__79600,app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.unknown-token-type-section",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([token_type,cljs.core.count(tokens)], 0)));

var G__79618 = (i__79599 + (1));
i__79599 = G__79618;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__79600),app$main$data$workspace$tokens$import_export$show_unknown_types_warning_$_iter__79597(cljs.core.chunk_rest(s__79598__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__79600),null);
}
} else {
var vec__79604 = cljs.core.first(s__79598__$2);
var token_type = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79604,(0),null);
var tokens = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79604,(1),null);
return cljs.core.cons(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("workspace.tokens.unknown-token-type-section",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([token_type,cljs.core.count(tokens)], 0)),app$main$data$workspace$tokens$import_export$show_unknown_types_warning_$_iter__79597(cljs.core.rest(s__79598__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__5503__auto__(type__GT_tokens);
})()),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"info","info",-317069002)], null));
});
app.main.data.workspace.tokens.import_export.decode_json = (function app$main$data$workspace$tokens$import_export$decode_json(json_string){
try{return app.common.json.decode.cljs$core$IFn$_invoke$arity$variadic(json_string,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key-fn","key-fn",-636154479),cljs.core.identity], null)], 0));
}catch (e79607){if((e79607 instanceof Error)){
var e = e79607;
throw app.main.data.workspace.tokens.errors.error_ex_info(new cljs.core.Keyword("error.import","json-parse-error","error.import/json-parse-error",503270464),json_string,e);
} else {
throw e79607;

}
}});
app.main.data.workspace.tokens.import_export.parse_decoded_json = (function app$main$data$workspace$tokens$import_export$parse_decoded_json(decoded_json,file_name){
try{return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991),app.common.types.tokens_lib.parse_decoded_json(decoded_json,file_name),new cljs.core.Keyword(null,"unknown-tokens","unknown-tokens",-366587692),app.common.types.tokens_lib.get_tokens_of_unknown_type(decoded_json,cljs.core.PersistentArrayMap.EMPTY)], null);
}catch (e79608){if((e79608 instanceof Error)){
var e = e79608;
var err = (function (){var or__5025__auto__ = app.main.data.workspace.tokens.import_export.extract_name_error(e);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.main.data.workspace.tokens.errors.error_ex_info(new cljs.core.Keyword("error.import","invalid-json-data","error.import/invalid-json-data",231259630),decoded_json,e);
}
})();
throw err;
} else {
throw e79608;

}
}});
/**
 * Resolve tokens in the library and search for errors. Reference errors are ignored, since
 * it can be resolved by the user in the UI. All the other errors are thrown as exceptions.
 */
app.main.data.workspace.tokens.import_export.validate_library = (function app$main$data$workspace$tokens$import_export$validate_library(p__79609){
var map__79610 = p__79609;
var map__79610__$1 = cljs.core.__destructure_map(map__79610);
var tokens_lib = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79610__$1,new cljs.core.Keyword(null,"tokens-lib","tokens-lib",1725671991));
var unknown_tokens = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__79610__$1,new cljs.core.Keyword(null,"unknown-tokens","unknown-tokens",-366587692));
if(cljs.core.truth_(unknown_tokens)){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.workspace.tokens.import_export.show_unknown_types_warning(unknown_tokens));
} else {
}

try{var tokens_tree = app.common.types.tokens_lib.get_all_tokens_map(tokens_lib);
var resolved_tokens = ((cljs.core.contains_QMARK_(app.config.flags,new cljs.core.Keyword(null,"tokenscript","tokenscript",-1399248500)))?beicon.v2.core.of(app.main.data.tokenscript.resolve_tokens(tokens_tree)):app.main.data.style_dictionary.resolve_tokens_with_verbose_errors(tokens_tree));
return beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (sd_error){
var reference_errors = app.main.data.workspace.tokens.import_export.extract_reference_errors(sd_error);
if(cljs.core.truth_(reference_errors)){
return beicon.v2.core.of(tokens_lib);
} else {
throw app.main.data.workspace.tokens.errors.error_ex_info(new cljs.core.Keyword("error.import","style-dictionary-unknown-error","error.import/style-dictionary-unknown-error",-317476276),sd_error,sd_error);
}
}),beicon.v2.core.map((function (_){
return tokens_lib;
}),resolved_tokens));
}catch (e79611){if((e79611 instanceof Error)){
var e = e79611;
throw app.main.data.workspace.tokens.errors.error_ex_info(new cljs.core.Keyword("error.import","style-dictionary-unknown-error","error.import/style-dictionary-unknown-error",-317476276),"",e);
} else {
throw e79611;

}
}});
app.main.data.workspace.tokens.import_export.drop_parent_directory = (function app$main$data$workspace$tokens$import_export$drop_parent_directory(path){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2("/",cljs.core.rest(app.common.path_names.split_path(path)));
});
app.main.data.workspace.tokens.import_export.remove_path_extension = (function app$main$data$workspace$tokens$import_export$remove_path_extension(path){
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$1(cljs.core.butlast(cuerdas.core.split.cljs$core$IFn$_invoke$arity$2(path,".")));
});
app.main.data.workspace.tokens.import_export.file_path__GT_set_name = (function app$main$data$workspace$tokens$import_export$file_path__GT_set_name(path){
return app.main.data.workspace.tokens.import_export.remove_path_extension(app.main.data.workspace.tokens.import_export.drop_parent_directory(path));
});
app.main.data.workspace.tokens.import_export.import_file_stream = (function app$main$data$workspace$tokens$import_export$import_file_stream(file_path,file_text){
var file_name = app.main.data.workspace.tokens.import_export.remove_path_extension(file_path);
return beicon.v2.core.mapcat(app.main.data.workspace.tokens.import_export.validate_library,beicon.v2.core.map((function (p1__79612_SHARP_){
return app.main.data.workspace.tokens.import_export.parse_decoded_json(p1__79612_SHARP_,file_name);
}),beicon.v2.core.map(app.main.data.workspace.tokens.import_export.decode_json,file_text)));
});
app.main.data.workspace.tokens.import_export.import_directory_stream = (function app$main$data$workspace$tokens$import_export$import_directory_stream(file_stream){
return beicon.v2.core.mapcat(app.main.data.workspace.tokens.import_export.validate_library,beicon.v2.core.map((function (merged_json){
return app.main.data.workspace.tokens.import_export.parse_decoded_json(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((1),cljs.core.count(merged_json)))?cljs.core.val(cljs.core.first(merged_json)):merged_json),cljs.core.ffirst(merged_json));
}),beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3((function (merged_json,decoded_json){
if(cljs.core.truth_(new cljs.core.Keyword(null,"error","error",-978969032).cljs$core$IFn$_invoke$arity$1(decoded_json))){
return merged_json;
} else {
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(merged_json,decoded_json);
}
}),cljs.core.PersistentArrayMap.EMPTY,beicon.v2.core.map((function (p__79613){
var vec__79614 = p__79613;
var file_path = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79614,(0),null);
var file_text = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__79614,(1),null);
var set_name = app.main.data.workspace.tokens.import_export.file_path__GT_set_name(file_path);
try{return cljs.core.PersistentArrayMap.createAsIfByAssoc([set_name,app.main.data.workspace.tokens.import_export.decode_json(file_text)]);
}catch (e79617){if((e79617 instanceof Error)){
var e = e79617;
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"path","path",-188191168),file_path,new cljs.core.Keyword(null,"error","error",-978969032),e], null);
} else {
throw e79617;

}
}}),file_stream))));
});

//# sourceMappingURL=app.main.data.workspace.tokens.import_export.js.map
