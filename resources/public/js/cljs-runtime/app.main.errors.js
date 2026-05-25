import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.exceptions.js";
import "./app.common.pprint.js";
import "./app.config.js";
import "./app.main.data.auth.js";
import "./app.main.data.event.js";
import "./app.main.data.modal.js";
import "./app.main.data.notifications.js";
import "./app.main.router.js";
import "./app.main.store.js";
import "./app.main.worker.js";
import "./app.util.globals.js";
import "./app.util.i18n.js";
import "./app.util.timers.js";
import "./cuerdas.core.js";
import "./potok.v2.core.js";
goog.provide('app.main.errors');
app.main.errors.reload_file = null;
app.main.errors.last_report = null;
app.main.errors.last_exception = null;
app.main.errors.handling_error_QMARK_ = cljs.core.volatile_BANG_(false);
/**
 * Returns true if the error matches the signature of a cross-build
 *   module mismatch. Two distinct patterns can appear depending on which
 *   cross-module reference is accessed first:
 * 
 *   1. Keyword constants  – names contain '$cljs$cst$'; these arise when a
 *   compiled keyword defined in shared.js is absent in the version of
 *   shared.js already resident in the browser.
 * 
 *   2. Protocol dispatch – names contain '$cljs$core$I'; these arise when
 *   main-workspace.js (new build) tries to invoke a protocol method on
 *   an object whose prototype was stamped by an older shared.js that
 *   used different mangled property names (e.g. the LazySeq /
 *   instaparse crash: 'Cannot read properties of undefined (reading
 *   \'$cljs$core$IFn$_invoke$arity$1$\')').
 * 
 *   Both patterns are symptoms of the same split-brain deployment
 *   scenario (browser has JS chunks from two different builds) and
 *   should trigger a hard page reload.
 */
app.main.errors.stale_asset_error_QMARK_ = (function app$main$errors$stale_asset_error_QMARK_(cause){
if((!((cause == null)))){
var message = cljs.core.ex_message(cause);
var and__5023__auto__ = typeof message === 'string';
if(and__5023__auto__){
var and__5023__auto____$1 = (function (){var or__5025__auto__ = cuerdas.core.includes_QMARK_(message,"$cljs$cst$");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cuerdas.core.includes_QMARK_(message,"$cljs$core$I");
}
})();
if(cljs.core.truth_(and__5023__auto____$1)){
var or__5025__auto__ = cuerdas.core.includes_QMARK_(message,"is undefined");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cuerdas.core.includes_QMARK_(message,"is null");
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = cuerdas.core.includes_QMARK_(message,"is not a function");
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return cuerdas.core.includes_QMARK_(message,"Cannot read properties of undefined");
}
}
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
} else {
return null;
}
});
app.main.errors.exception__GT_error_data = (function app$main$errors$exception__GT_error_data(cause){
var data = cljs.core.ex_data(cause);
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"hint","hint",439639918),(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"hint","hint",439639918).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cljs.core.ex_message(cause);
}
})()),new cljs.core.Keyword("app.main.errors","instance","app.main.errors/instance",2062011223),cause),new cljs.core.Keyword("app.main.errors","trace","app.main.errors/trace",198160606),cause.stack);
});
/**
 * A general purpose error handler.
 * 
 *   Protected by a re-entrancy guard: if an error is raised while this
 *   function is already on the call stack (e.g. the notification emit
 *   itself fails), we print it to the console and return immediately
 *   instead of recursing until the call-stack is exhausted.
 */
app.main.errors.on_error = (function app$main$errors$on_error(error){
if(cljs.core.truth_(cljs.core.deref(app.main.errors.handling_error_QMARK_))){
return console.error("[on-error] re-entrant call suppressed",error);
} else {
cljs.core.vreset_BANG_(app.main.errors.handling_error_QMARK_,true);

try{if(cljs.core.map_QMARK_(error)){
return potok.v2.core.handle_error.cljs$core$IFn$_invoke$arity$1(error);
} else {
var data = app.main.errors.exception__GT_error_data(error);
return potok.v2.core.handle_error.cljs$core$IFn$_invoke$arity$1(data);
}
}finally {cljs.core.vreset_BANG_(app.main.errors.handling_error_QMARK_,false);
}}
});
(app.main.worker.on_error = app.main.errors.on_error);
cljs.core.reset_BANG_(app.main.store.on_error,app.main.errors.on_error);
app.main.errors.generate_report = (function app$main$errors$generate_report(cause){
try{var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var file_id = new cljs.core.Keyword(null,"current-file-id","current-file-id",1601348404).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var profile_id = new cljs.core.Keyword(null,"profile-id","profile-id",1866572309).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var data = cljs.core.ex_data(cause);
var sb__5670__auto__ = (new goog.string.StringBuffer());
var _STAR_print_newline_STAR__orig_val__49083_49110 = cljs.core._STAR_print_newline_STAR_;
var _STAR_print_fn_STAR__orig_val__49084_49111 = cljs.core._STAR_print_fn_STAR_;
var _STAR_print_newline_STAR__temp_val__49085_49112 = true;
var _STAR_print_fn_STAR__temp_val__49086_49113 = (function (x__5671__auto__){
return sb__5670__auto__.append(x__5671__auto__);
});
(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__temp_val__49085_49112);

(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__temp_val__49086_49113);

try{cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Context:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--------------------"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Hint:    ",(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"hint","hint",439639918).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cljs.core.ex_message(cause);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return "--";
}
}
})()], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Prof ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = profile_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "--";
}
})())], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Team ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = team_id;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return "--";
}
})())], 0));

var temp__5825__auto___49115 = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"file-id","file-id",-811871323).cljs$core$IFn$_invoke$arity$1(data);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return file_id;
}
})();
if(cljs.core.truth_(temp__5825__auto___49115)){
var file_id_49116__$1 = temp__5825__auto___49115;
cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["File ID: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file_id_49116__$1)], 0));
} else {
}

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Version: ",new cljs.core.Keyword(null,"full","full",436801220).cljs$core$IFn$_invoke$arity$1(app.config.version)], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["HREF:    ",app.main.router.get_current_href()], 0));

cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.exceptions.format_throwable(cause)], 0));

cljs.core.println();

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["Last events:"], 0));

cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2(["--------------------"], 0));

app.common.pprint.pprint.cljs$core$IFn$_invoke$arity$variadic(cljs.core.deref(app.main.store.last_events),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"length","length",588987862),(200)], null)], 0));

cljs.core.println();
}finally {(cljs.core._STAR_print_fn_STAR_ = _STAR_print_fn_STAR__orig_val__49084_49111);

(cljs.core._STAR_print_newline_STAR_ = _STAR_print_newline_STAR__orig_val__49083_49110);
}
return cljs.core.str.cljs$core$IFn$_invoke$arity$1(sb__5670__auto__);
}catch (e49082){var cause__$1 = e49082;
console.error("error on generating report",cause__$1);

return null;
}});
/**
 * Report the error report to the audit log subsystem
 */
app.main.errors.submit_report = (function app$main$errors$submit_report(var_args){
var args__5755__auto__ = [];
var len__5749__auto___49117 = arguments.length;
var i__5750__auto___49118 = (0);
while(true){
if((i__5750__auto___49118 < len__5749__auto___49117)){
args__5755__auto__.push((arguments[i__5750__auto___49118]));

var G__49119 = (i__5750__auto___49118 + (1));
i__5750__auto___49118 = G__49119;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.errors.submit_report.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.errors.submit_report.cljs$core$IFn$_invoke$arity$variadic = (function (p__49093){
var map__49094 = p__49093;
var map__49094__$1 = cljs.core.__destructure_map(map__49094);
var event_name = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49094__$1,new cljs.core.Keyword(null,"event-name","event-name",927259778),"unhandled-exception");
var report = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49094__$1,new cljs.core.Keyword(null,"report","report",1394055010));
var hint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49094__$1,new cljs.core.Keyword(null,"hint","hint",439639918));
if((((!(cuerdas.core.empty_QMARK_(hint)))) && (((typeof report === 'string') && (typeof event_name === 'string'))))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.event.event(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),event_name,new cljs.core.Keyword(null,"hint","hint",439639918),hint,new cljs.core.Keyword(null,"href","href",-793805698),app.main.router.get_current_href(),new cljs.core.Keyword(null,"report","report",1394055010),report], null)));
} else {
return null;
}
}));

(app.main.errors.submit_report.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.errors.submit_report.cljs$lang$applyTo = (function (seq49092){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49092));
}));

/**
 * Show error notification banner and emit error report.
 * 
 *   The notification is scheduled asynchronously (via tm/schedule) to
 *   avoid pushing a new event into the potok store while the store's own
 *   error-handling pipeline is still on the call stack.  Emitting
 *   synchronously from inside an error handler creates a re-entrant
 *   event-processing cycle that can exhaust the JS call stack
 *   (RangeError: Maximum call stack size exceeded).
 */
app.main.errors.flash = (function app$main$errors$flash(var_args){
var args__5755__auto__ = [];
var len__5749__auto___49120 = arguments.length;
var i__5750__auto___49121 = (0);
while(true){
if((i__5750__auto___49121 < len__5749__auto___49120)){
args__5755__auto__.push((arguments[i__5750__auto___49121]));

var G__49122 = (i__5750__auto___49121 + (1));
i__5750__auto___49121 = G__49122;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.main.errors.flash.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.main.errors.flash.cljs$core$IFn$_invoke$arity$variadic = (function (p__49096){
var map__49097 = p__49096;
var map__49097__$1 = cljs.core.__destructure_map(map__49097);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__49097__$1,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"handled","handled",1889700151));
var hint = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49097__$1,new cljs.core.Keyword(null,"hint","hint",439639918));
var cause = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49097__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
if(app.common.exceptions.exception_QMARK_(cause)){
var temp__5825__auto___49123 = (function (){var G__49098 = type;
var G__49098__$1 = (((G__49098 instanceof cljs.core.Keyword))?G__49098.fqn:null);
switch (G__49098__$1) {
case "handled":
return "handled-exception";

break;
case "unhandled":
return "unhandled-exception";

break;
case "silent":
return null;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__49098__$1)].join('')));

}
})();
if(cljs.core.truth_(temp__5825__auto___49123)){
var event_name_49125 = temp__5825__auto___49123;
var report_49126 = app.main.errors.generate_report(cause);
app.main.errors.submit_report.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"event-name","event-name",927259778),event_name_49125,new cljs.core.Keyword(null,"report","report",1394055010),report_49126,new cljs.core.Keyword(null,"hint","hint",439639918),app.common.exceptions.get_hint(cause)], 0));
} else {
}
} else {
}

return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),(function (){var or__5025__auto__ = hint;
if(or__5025__auto__){
return or__5025__auto__;
} else {
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.generic");
}
})(),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(5000)], null)));
}));
}));

(app.main.errors.flash.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.main.errors.flash.cljs$lang$applyTo = (function (seq49095){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq49095));
}));

potok.v2.core.handle_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"network","network",2050004697),(function (error){
var temp__5825__auto___49131 = new cljs.core.Keyword("app.main.errors","instance","app.main.errors/instance",2062011223).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(temp__5825__auto___49131)){
var cause_49132 = temp__5825__auto___49131;
app.common.exceptions.print_throwable.cljs$core$IFn$_invoke$arity$variadic(cause_49132,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),"Network Error"], 0));
} else {
}

return app.main.errors.flash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cause","cause",231901252),new cljs.core.Keyword("app.main.errors","instance","app.main.errors/instance",2062011223).cljs$core$IFn$_invoke$arity$1(error),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"handled","handled",1889700151)], 0));
}));
potok.v2.core.handle_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"internal","internal",-854870097),(function (error){
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.assign_exception(error));

var temp__5825__auto__ = new cljs.core.Keyword("app.main.errors","instance","app.main.errors/instance",2062011223).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(temp__5825__auto__)){
var cause = temp__5825__auto__;
return app.common.exceptions.print_throwable.cljs$core$IFn$_invoke$arity$variadic(cause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),"Internal Error"], 0));
} else {
return null;
}
}));
potok.v2.core.handle_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"default","default",-1987822328),(function (error){
if(((typeof new cljs.core.Keyword(null,"hint","hint",439639918).cljs$core$IFn$_invoke$arity$1(error) === 'string') && (cuerdas.core.starts_with_QMARK_(new cljs.core.Keyword(null,"hint","hint",439639918).cljs$core$IFn$_invoke$arity$1(error),"Assert failed:")))){
return potok.v2.core.handle_error.cljs$core$IFn$_invoke$arity$1(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(error,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"assertion","assertion",-1645134882)));
} else {
var temp__5825__auto__ = new cljs.core.Keyword("app.main.errors","instance","app.main.errors/instance",2062011223).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(temp__5825__auto__)){
var cause = temp__5825__auto__;
app.common.exceptions.print_throwable.cljs$core$IFn$_invoke$arity$variadic(cause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),"Unexpected Error"], 0));

return app.main.errors.flash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cause","cause",231901252),cause,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unhandled","unhandled",-114756435)], 0));
} else {
return null;
}
}
}));
potok.v2.core.handle_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"authentication","authentication",1746273042),(function (error){
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.auth.unable-to-login");
var uri = app.main.router.get_current_href();
var show_error_QMARK_ = (function (){var or__5025__auto__ = cuerdas.core.includes_QMARK_(uri,"workspace");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = cuerdas.core.includes_QMARK_(uri,"dashboard");
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = cuerdas.core.includes_QMARK_(uri,"view");
if(cljs.core.truth_(or__5025__auto____$2)){
return or__5025__auto____$2;
} else {
return cuerdas.core.includes_QMARK_(uri,"settings");
}
}
}
})();
if(cljs.core.truth_(show_error_QMARK_)){
return app.main.store.async_emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.router.assign_exception(error)], 0));
} else {
app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.auth.logout());

return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((500),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.warn.cljs$core$IFn$_invoke$arity$1(message));
}));
}
}));
potok.v2.core.handle_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"validation","validation",-2141396518),(function (p__49099){
var map__49100 = p__49099;
var map__49100__$1 = cljs.core.__destructure_map(map__49100);
var error = map__49100__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49100__$1,new cljs.core.Keyword(null,"code","code",1586293142));
var temp__5825__auto___49137 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.Keyword("app.main.errors","instance","app.main.errors/instance",2062011223));
if(cljs.core.truth_(temp__5825__auto___49137)){
var instance_49138 = temp__5825__auto___49137;
app.common.exceptions.print_throwable.cljs$core$IFn$_invoke$arity$variadic(instance_49138,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),"Validation Error"], 0));
} else {
}

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.Keyword(null,"invalid-paste-data","invalid-paste-data",1058482108))){
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.paste-data-validation");
return app.main.store.async_emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),message,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(3000)], null))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.Keyword(null,"vern-conflict","vern-conflict",-1088162320))){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(potok.v2.core.event.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword("app.main.data.workspace","reload-current-file","app.main.data.workspace/reload-current-file",-807745136)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.Keyword(null,"snapshot-is-locked","snapshot-is-locked",904526286))){
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.version-locked");
return app.main.store.async_emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),message,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(3000)], null))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.Keyword(null,"only-creator-can-lock","only-creator-can-lock",-1061349571))){
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.only-creator-can-lock");
return app.main.store.async_emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),message,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(3000)], null))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.Keyword(null,"only-creator-can-unlock","only-creator-can-unlock",1799851042))){
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.only-creator-can-unlock");
return app.main.store.async_emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),message,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(3000)], null))], 0));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(code,new cljs.core.Keyword(null,"snapshot-already-locked","snapshot-already-locked",-138440288))){
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.version-already-locked");
return app.main.store.async_emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),message,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(3000)], null))], 0));
} else {
return app.main.store.async_emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.router.assign_exception(error)], 0));

}
}
}
}
}
}
}));
potok.v2.core.handle_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"assertion","assertion",-1645134882),(function (error){
var temp__5825__auto__ = new cljs.core.Keyword("app.main.errors","instance","app.main.errors/instance",2062011223).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(temp__5825__auto__)){
var cause = temp__5825__auto__;
app.main.errors.flash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cause","cause",231901252),cause,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"handled","handled",1889700151)], 0));

return app.common.exceptions.print_throwable.cljs$core$IFn$_invoke$arity$variadic(cause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),"Assertion Error"], 0));
} else {
return null;
}
}));
potok.v2.core.handle_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"worker-error","worker-error",-1820227890),(function (error){
app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.internal-worker-error"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(3000)], null)));
}));

var G__49101 = new cljs.core.Keyword("app.main.errors","instance","app.main.errors/instance",2062011223).cljs$core$IFn$_invoke$arity$1(error);
if((G__49101 == null)){
return null;
} else {
return app.common.exceptions.print_throwable.cljs$core$IFn$_invoke$arity$variadic(G__49101,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),"Web Worker Error"], 0));
}
}));
potok.v2.core.handle_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"svg-parser","svg-parser",-257903184),(function (_){
return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.svg-parser.invalid-svg"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(3000)], null)));
}));
}));
potok.v2.core.handle_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"comment-error","comment-error",371413856),(function (_){
return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.notifications.show(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"content","content",15833224),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.comment-error"),new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"toast","toast",68598129),new cljs.core.Keyword(null,"level","level",1290497552),new cljs.core.Keyword(null,"error","error",-978969032),new cljs.core.Keyword(null,"timeout","timeout",-318625318),(3000)], null)));
}));
}));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"not-found","not-found",-629079980),new cljs.core.Keyword("app.main.errors","exceptional-state","app.main.errors/exceptional-state",1603386584));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bad-gateway","bad-gateway",1203629050),new cljs.core.Keyword("app.main.errors","exceptional-state","app.main.errors/exceptional-state",1603386584));
cljs.core.derive.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"service-unavailable","service-unavailable",751643155),new cljs.core.Keyword("app.main.errors","exceptional-state","app.main.errors/exceptional-state",1603386584));
potok.v2.core.handle_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword("app.main.errors","exceptional-state","app.main.errors/exceptional-state",1603386584),(function (error){
var temp__5825__auto___49148 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.Keyword("app.main.errors","instance","app.main.errors/instance",2062011223));
if(cljs.core.truth_(temp__5825__auto___49148)){
var instance_49149 = temp__5825__auto___49148;
app.common.exceptions.print_throwable.cljs$core$IFn$_invoke$arity$variadic(instance_49149,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),"Exceptional State"], 0));
} else {
}

return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.assign_exception(error));
}));
}));
app.main.errors.redirect_to_dashboard = (function app$main$errors$redirect_to_dashboard(){
var team_id = new cljs.core.Keyword(null,"current-team-id","current-team-id",999946995).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
var project_id = new cljs.core.Keyword(null,"current-project-id","current-project-id",1950829814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref(app.main.store.state));
if(cljs.core.truth_((function (){var and__5023__auto__ = project_id;
if(cljs.core.truth_(and__5023__auto__)){
return team_id;
} else {
return and__5023__auto__;
}
})())){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"dashboard-files","dashboard-files",-1779590854),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"team-id","team-id",-14505725),team_id,new cljs.core.Keyword(null,"project-id","project-id",206449307),project_id], null)));
} else {
return (app.util.globals.location.href = "");
}
});
potok.v2.core.handle_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"restriction","restriction",-1380234912),(function (p__49102){
var map__49103 = p__49102;
var map__49103__$1 = cljs.core.__destructure_map(map__49103);
var error = map__49103__$1;
var code = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__49103__$1,new cljs.core.Keyword(null,"code","code",1586293142));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"migration-in-progress","migration-in-progress",800384336),code)){
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.migration-in-progress",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"feature","feature",27242652).cljs$core$IFn$_invoke$arity$1(error)], 0));
var on_accept = cljs.core.constantly(null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"on-accept","on-accept",705439955),on_accept], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"team-feature-mismatch","team-feature-mismatch",-1423359773),code)){
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.team-feature-mismatch",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"feature","feature",27242652).cljs$core$IFn$_invoke$arity$1(error)], 0));
var on_accept = cljs.core.constantly(null);
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"on-accept","on-accept",705439955),on_accept], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file-feature-mismatch","file-feature-mismatch",-792098307),code)){
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.file-feature-mismatch",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"feature","feature",27242652).cljs$core$IFn$_invoke$arity$1(error)], 0));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"on-accept","on-accept",705439955),app.main.errors.redirect_to_dashboard], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feature-mismatch","feature-mismatch",-514436878),code)){
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.feature-mismatch",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"feature","feature",27242652).cljs$core$IFn$_invoke$arity$1(error)], 0));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"on-accept","on-accept",705439955),app.main.errors.redirect_to_dashboard], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"feature-not-supported","feature-not-supported",1036203378),code)){
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.feature-not-supported",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"feature","feature",27242652).cljs$core$IFn$_invoke$arity$1(error)], 0));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"on-accept","on-accept",705439955),app.main.errors.redirect_to_dashboard], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file-version-not-supported","file-version-not-supported",-2120659694),code)){
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.version-not-supported");
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Keyword(null,"message","message",-406056002),message,new cljs.core.Keyword(null,"on-accept","on-accept",705439955),app.main.errors.redirect_to_dashboard], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"max-quote-reached","max-quote-reached",183086757),code)){
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.max-quota-reached",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"target","target",253001721).cljs$core$IFn$_invoke$arity$1(error)], 0));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Keyword(null,"message","message",-406056002),message], null)));
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"paste-feature-not-enabled","paste-feature-not-enabled",163689318),code)) || (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"missing-features-in-paste-content","missing-features-in-paste-content",1178098165),code)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"paste-feature-not-supported","paste-feature-not-supported",-204919938),code)))))){
var message = app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic("errors.feature-not-supported",cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"feature","feature",27242652).cljs$core$IFn$_invoke$arity$1(error)], 0));
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Keyword(null,"message","message",-406056002),message], null)));
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"file-in-components-v1","file-in-components-v1",-1067825588),code)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.modal.show.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"alert","alert",-571950580),new cljs.core.Keyword(null,"message","message",-406056002),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.deprecated"),new cljs.core.Keyword(null,"link-message","link-message",893661043),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"before","before",-1633692388),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.deprecated.contact.before"),new cljs.core.Keyword(null,"text","text",-1790561697),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.deprecated.contact.text"),new cljs.core.Keyword(null,"after","after",594996914),app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1("errors.deprecated.contact.after"),new cljs.core.Keyword(null,"on-click","on-click",1632826543),(function (){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.router.nav.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"settings-feedback","settings-feedback",-1884878904)));
})], null)], null)));
} else {
var temp__5825__auto__ = new cljs.core.Keyword("app.main.errors","instance","app.main.errors/instance",2062011223).cljs$core$IFn$_invoke$arity$1(error);
if(cljs.core.truth_(temp__5825__auto__)){
var cause = temp__5825__auto__;
app.common.exceptions.print_throwable.cljs$core$IFn$_invoke$arity$variadic(cause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),"Restriction Error"], 0));

return app.main.errors.flash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cause","cause",231901252),cause,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unhandled","unhandled",-114756435)], 0));
} else {
return null;
}

}
}
}
}
}
}
}
}
}
}));
potok.v2.core.handle_error.cljs$core$IMultiFn$_add_method$arity$3(null,new cljs.core.Keyword(null,"server-error","server-error",-426815993),(function (error){
var temp__5825__auto___49168 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(error,new cljs.core.Keyword("app.main.errors","instance","app.main.errors/instance",2062011223));
if(cljs.core.truth_(temp__5825__auto___49168)){
var instance_49169 = temp__5825__auto___49168;
app.common.exceptions.print_throwable.cljs$core$IFn$_invoke$arity$variadic(instance_49169,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),"Server Error"], 0));
} else {
}

return app.main.store.async_emit_BANG_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.main.router.assign_exception(error)], 0));
}));
/**
 * True when the error stack trace originates from a browser extension.
 */
app.main.errors.from_extension_QMARK_ = (function app$main$errors$from_extension_QMARK_(cause){
var stack = cause.stack;
var and__5023__auto__ = typeof stack === 'string';
if(and__5023__auto__){
var or__5025__auto__ = cuerdas.core.includes_QMARK_(stack,"chrome-extension://");
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return cuerdas.core.includes_QMARK_(stack,"moz-extension://");
}
} else {
return and__5023__auto__;
}
});
/**
 * True when the error stack trace originates from PostHog analytics.
 */
app.main.errors.from_posthog_QMARK_ = (function app$main$errors$from_posthog_QMARK_(cause){
var stack = cause.stack;
var and__5023__auto__ = typeof stack === 'string';
if(and__5023__auto__){
return cuerdas.core.includes_QMARK_(stack,"posthog");
} else {
return and__5023__auto__;
}
});
/**
 * True when the error is known to be harmless (browser extensions, analytics,
 * React/extension DOM conflicts, etc.) and should NOT be surfaced to the user.
 */
app.main.errors.is_ignorable_exception_QMARK_ = (function app$main$errors$is_ignorable_exception_QMARK_(cause){
var message = cljs.core.ex_message(cause);
var or__5025__auto__ = app.main.errors.from_extension_QMARK_(cause);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.main.errors.from_posthog_QMARK_(cause);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(message,"Possible side-effect in debug-evaluate");
if(or__5025__auto____$2){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(message,"Unexpected end of input");
if(or__5025__auto____$3){
return or__5025__auto____$3;
} else {
var or__5025__auto____$4 = cuerdas.core.starts_with_QMARK_(message,"invalid props on component");
if(or__5025__auto____$4){
return or__5025__auto____$4;
} else {
var or__5025__auto____$5 = cuerdas.core.starts_with_QMARK_(message,"Unexpected token ");
if(or__5025__auto____$5){
return or__5025__auto____$5;
} else {
var or__5025__auto____$6 = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause.name,"AbortError");
if(or__5025__auto____$6){
return or__5025__auto____$6;
} else {
var or__5025__auto____$7 = cuerdas.core.starts_with_QMARK_(message,"Cannot assign to read only property 'toString'");
if(or__5025__auto____$7){
return or__5025__auto____$7;
} else {
var and__5023__auto__ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cause.name,"NotFoundError");
if(and__5023__auto__){
return cuerdas.core.includes_QMARK_(message,"removeChild");
} else {
return and__5023__auto__;
}
}
}
}
}
}
}
}
}
});
if((typeof app !== 'undefined') && (typeof app.main !== 'undefined') && (typeof app.main.errors !== 'undefined') && (typeof app.main.errors.uncaught_error_handler !== 'undefined')){
} else {
app.main.errors.uncaught_error_handler = (function (){var on_unhandled_error = (function app$main$errors$on_unhandled_error(event){
event.preventDefault();

var temp__5825__auto__ = (event["error"]);
if(cljs.core.truth_(temp__5825__auto__)){
var cause = temp__5825__auto__;
if(cljs.core.truth_(app.main.errors.is_ignorable_exception_QMARK_(cause))){
return null;
} else {
if(cljs.core.truth_(app.main.errors.stale_asset_error_QMARK_(cause))){
return app.config.throttled_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reason","reason",-2070751759),cljs.core.ex_message(cause)], 0));
} else {
var data = cljs.core.ex_data(cause);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"type","type",1174270348));
(app.main.errors.last_exception = cause);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wasm-error","wasm-error",-551095469),type)){
return app.main.errors.on_error(cause);
} else {
app.common.exceptions.print_throwable.cljs$core$IFn$_invoke$arity$variadic(cause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),"Uncaught Exception"], 0));

return app.util.timers.asap((function (){
return app.main.errors.flash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cause","cause",231901252),cause,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unhandled","unhandled",-114756435)], 0));
}));
}
}
}
} else {
return null;
}
});
var on_unhandled_rejection = (function app$main$errors$on_unhandled_rejection(event){
event.preventDefault();

var temp__5825__auto__ = (event["reason"]);
if(cljs.core.truth_(temp__5825__auto__)){
var cause = temp__5825__auto__;
if(cljs.core.truth_(app.main.errors.is_ignorable_exception_QMARK_(cause))){
return null;
} else {
if(cljs.core.truth_(app.main.errors.stale_asset_error_QMARK_(cause))){
return app.config.throttled_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"reason","reason",-2070751759),cljs.core.ex_message(cause)], 0));
} else {
var data = cljs.core.ex_data(cause);
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(data,new cljs.core.Keyword(null,"type","type",1174270348));
(app.main.errors.last_exception = cause);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"wasm-error","wasm-error",-551095469),type)){
return app.main.errors.on_error(cause);
} else {
app.common.exceptions.print_throwable.cljs$core$IFn$_invoke$arity$variadic(cause,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"prefix","prefix",-265908465),"Uncaught Rejection"], 0));

return app.util.timers.asap((function (){
return app.main.errors.flash.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"cause","cause",231901252),cause,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"unhandled","unhandled",-114756435)], 0));
}));
}
}
}
} else {
return null;
}
});
app.util.globals.window.addEventListener("error",on_unhandled_error);

app.util.globals.window.addEventListener("unhandledrejection",on_unhandled_rejection);

return (function (){
app.util.globals.window.removeEventListener("error",on_unhandled_error);

return app.util.globals.window.removeEventListener("unhandledrejection",on_unhandled_rejection);
});
})();
}

//# sourceMappingURL=app.main.errors.js.map
