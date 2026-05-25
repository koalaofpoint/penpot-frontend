import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.exceptions.js";
import "./app.common.pprint.js";
import "./app.common.schema.js";
import "./app.common.time.js";
import "./app.common.uuid.js";
import "./cuerdas.core.js";
import "./promesa.exec.js";
import "./promesa.util.js";
goog.provide('app.common.logging');
app.common.logging._STAR_context_STAR_ = null;
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.logging !== 'undefined') && (typeof app.common.logging.log_record !== 'undefined')){
} else {
/**
 * A global log-record atom instance; stores last logged record.
 */
app.common.logging.log_record = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null);
}
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.logging !== 'undefined') && (typeof app.common.logging._STAR_default_executor_STAR_ !== 'undefined')){
} else {
/**
 * Default executor instance used for processing logs.
 */
app.common.logging._STAR_default_executor_STAR_ = (new cljs.core.Delay((function (){
return promesa.exec.microtask_executor();
}),null));
}
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.logging !== 'undefined') && (typeof app.common.logging.loggers !== 'undefined')){
} else {
app.common.logging.loggers = (new Map());
}
app.common.logging.get_parent_logger = (function app$common$logging$get_parent_logger(logger){
var lindex = logger.lastIndexOf(".");
return logger.slice((0),(function (){var x__5110__auto__ = lindex;
var y__5111__auto__ = (0);
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
})());
});
/**
 * Get the current level set for the specified logger. Returns int.
 */
app.common.logging.get_logger_level = (function app$common$logging$get_logger_level(logger){
var val = app.common.logging.loggers.get(logger);
if((val > (0))){
return val;
} else {
var logger_SINGLEQUOTE_ = app.common.logging.get_parent_logger(logger);
while(true){
var val__$1 = app.common.logging.loggers.get(logger_SINGLEQUOTE_);
if((!((val__$1 == null)))){
app.common.logging.loggers.set(logger,val__$1);

return val__$1;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("",logger_SINGLEQUOTE_)){
app.common.logging.loggers.set(logger,(100));

return (100);
} else {
var G__45087 = app.common.logging.get_parent_logger(logger_SINGLEQUOTE_);
logger_SINGLEQUOTE_ = G__45087;
continue;
}
}
break;
}
}
});
/**
 * Check if logger has enabled logging for given level.
 */
app.common.logging.enabled_QMARK_ = (function app$common$logging$enabled_QMARK_(logger,level){
return ((app.common.logging.level__GT_int.cljs$core$IFn$_invoke$arity$1 ? app.common.logging.level__GT_int.cljs$core$IFn$_invoke$arity$1(level) : app.common.logging.level__GT_int.call(null,level)) >= app.common.logging.get_logger_level(logger));
});
app.common.logging.level__GT_color = (function app$common$logging$level__GT_color(level){
var G__44976 = level;
var G__44976__$1 = (((G__44976 instanceof cljs.core.Keyword))?G__44976.fqn:null);
switch (G__44976__$1) {
case "error":
return "#c82829";

break;
case "warn":
return "#f5871f";

break;
case "info":
return "#4271ae";

break;
case "debug":
return "#969896";

break;
case "trace":
return "#8e908c";

break;
default:
var hint = ["invalid level provided to `level->color` function: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([level], 0))].join('');
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(hint,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),level], null));

}
});
app.common.logging.level__GT_name = (function app$common$logging$level__GT_name(level){
var G__44986 = level;
var G__44986__$1 = (((G__44986 instanceof cljs.core.Keyword))?G__44986.fqn:null);
switch (G__44986__$1) {
case "debug":
return "DBG";

break;
case "trace":
return "TRC";

break;
case "info":
return "INF";

break;
case "warn":
return "WRN";

break;
case "error":
return "ERR";

break;
default:
var hint = ["invalid level provided to `level->name` function: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([level], 0))].join('');
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(hint,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),level], null));

}
});
app.common.logging.level__GT_int = (function app$common$logging$level__GT_int(level){
var G__44991 = level;
var G__44991__$1 = (((G__44991 instanceof cljs.core.Keyword))?G__44991.fqn:null);
switch (G__44991__$1) {
case "trace":
return (10);

break;
case "debug":
return (20);

break;
case "info":
return (30);

break;
case "warn":
return (40);

break;
case "error":
return (50);

break;
default:
var hint = ["invalid level provided to `level->int` function: ",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([level], 0))].join('');
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2(hint,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"level","level",1290497552),level], null));

}
});
app.common.logging.build_message = (function app$common$logging$build_message(props){
var props__$1 = cljs.core.seq(props);
var result = cljs.core.PersistentVector.EMPTY;
var body = null;
while(true){
var temp__5823__auto__ = cljs.core.first(props__$1);
if(cljs.core.truth_(temp__5823__auto__)){
var vec__45000 = temp__5823__auto__;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45000,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45000,(1),null);
if(cljs.core.simple_ident_QMARK_(k)){
var G__45097 = cljs.core.next(props__$1);
var G__45098 = cljs.core.conj.cljs$core$IFn$_invoke$arity$2(result,[cljs.core.name(k),"=",cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v], 0))].join(''));
var G__45099 = body;
props__$1 = G__45097;
result = G__45098;
body = G__45099;
continue;
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword("app.common.logging","body","app.common.logging/body",275332276),k)){
var G__45100 = cljs.core.next(props__$1);
var G__45101 = result;
var G__45102 = v;
props__$1 = G__45100;
result = G__45101;
body = G__45102;
continue;
} else {
var G__45103 = cljs.core.next(props__$1);
var G__45104 = result;
var G__45105 = body;
props__$1 = G__45103;
result = G__45104;
body = G__45105;
continue;

}
}
} else {
var message = cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(", ",result);
if(typeof body === 'string'){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(message),"\n",body].join('');
} else {
return message;
}
}
break;
}
});
app.common.logging.build_stack_trace = (function app$common$logging$build_stack_trace(cause){
return cause.stack;
});
app.common.logging.get_special_props = (function app$common$logging$get_special_props(props){
return cljs.core.keep.cljs$core$IFn$_invoke$arity$2((function (p__45009){
var vec__45010 = p__45009;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45010,(0),null);
var v = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45010,(1),null);
if(cljs.core.qualified_ident_QMARK_(k)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("js",cljs.core.namespace(k))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"js","js",1768080579),cljs.core.name(k),((cljs.core.object_QMARK_(v))?v:cljs.core.clj__GT_js(v))], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2("error",cljs.core.namespace(k))){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"error","error",-978969032),cljs.core.name(k),v], null);
} else {
return null;
}
}
} else {
return null;
}
}),cljs.core.seq(props));
});
app.common.logging.reserved_props = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword("app.common.logging","context","app.common.logging/context",1292978112),null,new cljs.core.Keyword(null,"cause","cause",231901252),null,new cljs.core.Keyword("app.common.logging","sync?","app.common.logging/sync?",-1206954327),null,new cljs.core.Keyword("app.common.logging","logger","app.common.logging/logger",-2023501234),null,new cljs.core.Keyword("app.common.logging","level","app.common.logging/level",1936739415),null], null), null);
app.common.logging.msg_props_xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.partition_all.cljs$core$IFn$_invoke$arity$1((2)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.vec),cljs.core.remove.cljs$core$IFn$_invoke$arity$1((function (p__45013){
var vec__45014 = p__45013;
var k = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45014,(0),null);
var _ = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45014,(1),null);
return cljs.core.contains_QMARK_(app.common.logging.reserved_props,k);
})));
app.common.logging.schema_COLON_record = new cljs.core.PersistentVector(null, 9, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map","map",1371690461),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.logging","id","app.common.logging/id",1339267211),new cljs.core.Keyword("app.common.schema","uuid","app.common.schema/uuid",-451405422)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.logging","props","app.common.logging/props",-2005375352),new cljs.core.Keyword(null,"any","any",1705907423)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.logging","logger","app.common.logging/logger",-2023501234),new cljs.core.Keyword(null,"string","string",-1989541586)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.logging","timestamp","app.common.logging/timestamp",-1174599550),new cljs.core.Keyword("app.common.schema","int","app.common.schema/int",519552051)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.logging","level","app.common.logging/level",1936739415),new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"enum","enum",1679018432),new cljs.core.Keyword(null,"trace","trace",-1082747415),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"info","info",-317069002),new cljs.core.Keyword(null,"warn","warn",-436710552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"fatal","fatal",1874419888)], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.logging","message","app.common.logging/message",-984224085),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),cljs.core.delay_QMARK_], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.logging","cause","app.common.logging/cause",-1908169987),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fn","fn",-1175266204),app.common.exceptions.exception_QMARK_], null)], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("app.common.logging","context","app.common.logging/context",1292978112),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"optional","optional",2053951509),true], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"maybe","maybe",-314397560),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"map-of","map-of",1189682355),new cljs.core.Keyword(null,"keyword","keyword",811389747),new cljs.core.Keyword(null,"any","any",1705907423)], null)], null)], null)], null);
app.common.logging.valid_record_QMARK_ = app.common.schema.validator(app.common.logging.schema_COLON_record);
app.common.logging.current_timestamp = (function app$common$logging$current_timestamp(){
return Date.now();
});
app.common.logging.emit_log = (function app$common$logging$emit_log(props,cause,context,logger,level,sync_QMARK_){
var props__$1 = (function (){var G__45024 = props;
if(cljs.core.truth_(sync_QMARK_)){
return cljs.core.deref(G__45024);
} else {
return G__45024;
}
})();
var ts = app.common.logging.current_timestamp();
var gcontext = app.common.logging._STAR_context_STAR_;
var logfn = (function (){
var props__$2 = (cljs.core.truth_(sync_QMARK_)?props__$1:cljs.core.deref(props__$1));
var props__$3 = cljs.core.into.cljs$core$IFn$_invoke$arity$2(app.common.data.ordered_map.cljs$core$IFn$_invoke$arity$0(),props__$2);
var context__$1 = ((((cljs.core.empty_QMARK_(gcontext)) && (cljs.core.empty_QMARK_(context))))?cljs.core.PersistentArrayMap.EMPTY:app.common.data.without_nils.cljs$core$IFn$_invoke$arity$1(cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([gcontext,context], 0))));
var lrecord = new cljs.core.PersistentArrayMap(null, 7, [new cljs.core.Keyword("app.common.logging","id","app.common.logging/id",1339267211),app.common.uuid.next(),new cljs.core.Keyword("app.common.logging","timestamp","app.common.logging/timestamp",-1174599550),ts,new cljs.core.Keyword("app.common.logging","message","app.common.logging/message",-984224085),(new cljs.core.Delay((function (){
return app.common.logging.build_message(props__$3);
}),null)),new cljs.core.Keyword("app.common.logging","props","app.common.logging/props",-2005375352),props__$3,new cljs.core.Keyword("app.common.logging","context","app.common.logging/context",1292978112),context__$1,new cljs.core.Keyword("app.common.logging","level","app.common.logging/level",1936739415),level,new cljs.core.Keyword("app.common.logging","logger","app.common.logging/logger",-2023501234),logger], null);
var lrecord__$1 = (function (){var G__45026 = lrecord;
if((!((cause == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__45026,new cljs.core.Keyword("app.common.logging","cause","app.common.logging/cause",-1908169987),cause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword("app.common.logging","trace","app.common.logging/trace",1508486088),(new cljs.core.Delay((function (){
return app.common.logging.build_stack_trace(cause);
}),null))], 0));
} else {
return G__45026;
}
})();
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$2(app.common.logging.log_record,cljs.core.constantly(lrecord__$1));
});
if(cljs.core.truth_(sync_QMARK_)){
return logfn();
} else {
return promesa.exec.exec_BANG_.cljs$core$IFn$_invoke$arity$2(app.common.logging._STAR_default_executor_STAR_,logfn);
}
});
app.common.logging.console_log_handler = (function app$common$logging$console_log_handler(_,___$1,___$2,p__45027){
var map__45028 = p__45027;
var map__45028__$1 = cljs.core.__destructure_map(map__45028);
var logger = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45028__$1,new cljs.core.Keyword("app.common.logging","logger","app.common.logging/logger",-2023501234));
var props = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45028__$1,new cljs.core.Keyword("app.common.logging","props","app.common.logging/props",-2005375352));
var level = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45028__$1,new cljs.core.Keyword("app.common.logging","level","app.common.logging/level",1936739415));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45028__$1,new cljs.core.Keyword("app.common.logging","cause","app.common.logging/cause",-1908169987));
var trace = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45028__$1,new cljs.core.Keyword("app.common.logging","trace","app.common.logging/trace",1508486088));
var message = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__45028__$1,new cljs.core.Keyword("app.common.logging","message","app.common.logging/message",-984224085));
if(app.common.logging.enabled_QMARK_(logger,level)){
var hstyles = ""+"font-weight: 600; color: "+(app.common.logging.level__GT_color(level) ?? "");
var mstyles = ""+"font-weight: 300; color: "+(app.common.logging.level__GT_color(level) ?? "");
var ts = app.common.time.format_inst.cljs$core$IFn$_invoke$arity$2(app.common.time.now(),"kk:mm:ss.SSSS");
var header = ""+"%c"+(app.common.logging.level__GT_name(level) ?? "")+" "+(ts ?? "")+" ["+(logger ?? "")+"] ";
var message__$1 = ""+(header ?? "")+"%c"+(cljs.core.deref(message) ?? "");
console.group(message__$1,hstyles,mstyles);

var seq__45035_45109 = cljs.core.seq(app.common.logging.get_special_props(props));
var chunk__45036_45110 = null;
var count__45037_45111 = (0);
var i__45038_45112 = (0);
while(true){
if((i__45038_45112 < count__45037_45111)){
var vec__45053_45113 = chunk__45036_45110.cljs$core$IIndexed$_nth$arity$2(null,i__45038_45112);
var type_45114 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45053_45113,(0),null);
var n_45115 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45053_45113,(1),null);
var v_45116 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45053_45113,(2),null);
var G__45056_45117 = type_45114;
var G__45056_45118__$1 = (((G__45056_45117 instanceof cljs.core.Keyword))?G__45056_45117.fqn:null);
switch (G__45056_45118__$1) {
case "js":
console.log(n_45115,v_45116);

break;
case "error":
if(app.common.exceptions.error_QMARK_(v_45116)){
console.error(n_45115,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_45116], 0)));
} else {
console.error(n_45115,v_45116);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45056_45118__$1)].join('')));

}


var G__45120 = seq__45035_45109;
var G__45121 = chunk__45036_45110;
var G__45122 = count__45037_45111;
var G__45123 = (i__45038_45112 + (1));
seq__45035_45109 = G__45120;
chunk__45036_45110 = G__45121;
count__45037_45111 = G__45122;
i__45038_45112 = G__45123;
continue;
} else {
var temp__5825__auto___45124 = cljs.core.seq(seq__45035_45109);
if(temp__5825__auto___45124){
var seq__45035_45125__$1 = temp__5825__auto___45124;
if(cljs.core.chunked_seq_QMARK_(seq__45035_45125__$1)){
var c__5548__auto___45126 = cljs.core.chunk_first(seq__45035_45125__$1);
var G__45127 = cljs.core.chunk_rest(seq__45035_45125__$1);
var G__45128 = c__5548__auto___45126;
var G__45129 = cljs.core.count(c__5548__auto___45126);
var G__45130 = (0);
seq__45035_45109 = G__45127;
chunk__45036_45110 = G__45128;
count__45037_45111 = G__45129;
i__45038_45112 = G__45130;
continue;
} else {
var vec__45057_45131 = cljs.core.first(seq__45035_45125__$1);
var type_45132 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45057_45131,(0),null);
var n_45133 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45057_45131,(1),null);
var v_45134 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45057_45131,(2),null);
var G__45060_45135 = type_45132;
var G__45060_45136__$1 = (((G__45060_45135 instanceof cljs.core.Keyword))?G__45060_45135.fqn:null);
switch (G__45060_45136__$1) {
case "js":
console.log(n_45133,v_45134);

break;
case "error":
if(app.common.exceptions.error_QMARK_(v_45134)){
console.error(n_45133,cljs.core.pr_str.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([v_45134], 0)));
} else {
console.error(n_45133,v_45134);
}

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__45060_45136__$1)].join('')));

}


var G__45138 = cljs.core.next(seq__45035_45125__$1);
var G__45139 = null;
var G__45140 = (0);
var G__45141 = (0);
seq__45035_45109 = G__45138;
chunk__45036_45110 = G__45139;
count__45037_45111 = G__45140;
i__45038_45112 = G__45141;
continue;
}
} else {
}
}
break;
}

if(app.common.exceptions.exception_QMARK_(cause)){
var data_45143 = cljs.core.ex_data(cause);
var explain_45144 = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"explain","explain",484226146).cljs$core$IFn$_invoke$arity$1(data_45143);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.exceptions.explain(data_45143);
}
})();
if(cljs.core.truth_(explain_45144)){
console.log("Explain:");

console.log(explain_45144);
} else {
}

if(cljs.core.truth_((function (){var and__5023__auto__ = data_45143;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(explain_45144);
} else {
return and__5023__auto__;
}
})())){
console.log("Data:");

console.log(app.common.pprint.pprint_str(data_45143));
} else {
}

console.log(cljs.core.deref(trace));
} else {
}

return console.groupEnd(message__$1);
} else {
return null;
}
});
cljs.core.add_watch(app.common.logging.log_record,new cljs.core.Keyword("app.common.logging","default","app.common.logging/default",993090353),app.common.logging.console_log_handler);
app.common.logging.setup_BANG_ = (function app$common$logging$setup_BANG_(p__45063){
var map__45064 = p__45063;
var map__45064__$1 = cljs.core.__destructure_map(map__45064);
var config = map__45064__$1;
return cljs.core.run_BANG_((function (p__45070){
var vec__45071 = p__45070;
var logger = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45071,(0),null);
var level = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__45071,(1),null);
var logger__$1 = (((logger instanceof cljs.core.Keyword))?cljs.core.name(logger):logger);
return app.common.logging.loggers.set(logger__$1,app.common.logging.level__GT_int(level));
}),config);
});

//# sourceMappingURL=app.common.logging.js.map
