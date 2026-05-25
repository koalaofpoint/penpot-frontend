import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$date_fns$format$default.js";
import "./shadow.js.shim.module$date_fns$formatISO$default.js";
import "./shadow.js.shim.module$date_fns$setDefaultOptions$default.js";
import "./shadow.js.shim.module$date_fns$differenceInMilliseconds$default.js";
import "./shadow.js.shim.module$date_fns$formatDistanceToNowStrict$default.js";
import "./shadow.js.shim.module$date_fns$add$default.js";
import "./shadow.js.shim.module$date_fns$sub$default.js";
import "./shadow.js.shim.module$date_fns$parseISO$default.js";
import "./shadow.js.shim.module$date_fns$locale$ar_SA$default.js";
import "./shadow.js.shim.module$date_fns$locale$ca$default.js";
import "./shadow.js.shim.module$date_fns$locale$cs$default.js";
import "./shadow.js.shim.module$date_fns$locale$de$default.js";
import "./shadow.js.shim.module$date_fns$locale$el$default.js";
import "./shadow.js.shim.module$date_fns$locale$en_US$default.js";
import "./shadow.js.shim.module$date_fns$locale$es$default.js";
import "./shadow.js.shim.module$date_fns$locale$eu$default.js";
import "./shadow.js.shim.module$date_fns$locale$fa_IR$default.js";
import "./shadow.js.shim.module$date_fns$locale$fr$default.js";
import "./shadow.js.shim.module$date_fns$locale$gl$default.js";
import "./shadow.js.shim.module$date_fns$locale$he$default.js";
import "./shadow.js.shim.module$date_fns$locale$hr$default.js";
import "./shadow.js.shim.module$date_fns$locale$id$default.js";
import "./shadow.js.shim.module$date_fns$locale$it$default.js";
import "./shadow.js.shim.module$date_fns$locale$ja$default.js";
import "./shadow.js.shim.module$date_fns$locale$ko$default.js";
import "./shadow.js.shim.module$date_fns$locale$lv$default.js";
import "./shadow.js.shim.module$date_fns$locale$nb$default.js";
import "./shadow.js.shim.module$date_fns$locale$nl$default.js";
import "./shadow.js.shim.module$date_fns$locale$pl$default.js";
import "./shadow.js.shim.module$date_fns$locale$pt$default.js";
import "./shadow.js.shim.module$date_fns$locale$pt_BR$default.js";
import "./shadow.js.shim.module$date_fns$locale$ro$default.js";
import "./shadow.js.shim.module$date_fns$locale$ru$default.js";
import "./shadow.js.shim.module$date_fns$locale$tr$default.js";
import "./shadow.js.shim.module$date_fns$locale$uk$default.js";
import "./shadow.js.shim.module$date_fns$locale$zh_CN$default.js";
import "./app.common.schema.js";
import "./app.common.schema.generators.js";
import "./cuerdas.core.js";
goog.provide('app.common.time');
app.common.time.now = (function app$common$time$now(){
return (new Date());
});
app.common.time.resolve_temporal_unit = (function app$common$time$resolve_temporal_unit(o){
var G__43260 = o;
var G__43260__$1 = (((G__43260 instanceof cljs.core.Keyword))?G__43260.fqn:null);
switch (G__43260__$1) {
case "nanos":
case "nano":
throw (new Error("not supported nanos"));

break;
case "micros":
case "microsecond":
case "micro":
throw (new Error("not supported nanos"));

break;
case "millis":
case "millisecond":
case "milli":
return "millisecond";

break;
case "seconds":
case "second":
return "second";

break;
case "minutes":
case "minute":
return "minute";

break;
case "hours":
case "hour":
return "hour";

break;
case "days":
case "day":
return "day";

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__43260__$1)].join('')));

}
});
app.common.time.temporal_unit = (function app$common$time$temporal_unit(o){
return app.common.time.resolve_temporal_unit(o);
});
/**
 * Analgous to: da > db
 */
app.common.time.is_after_QMARK_ = (function app$common$time$is_after_QMARK_(da,db){
var result = cljs.core.compare(da,db);
if((result < (0))){
return false;
} else {
if((result === (0))){
return false;
} else {
return true;

}
}
});
app.common.time.is_before_QMARK_ = (function app$common$time$is_before_QMARK_(da,db){
var result = cljs.core.compare(da,db);
if((result < (0))){
return true;
} else {
if((result === (0))){
return false;
} else {
return false;

}
}
});
app.common.time.inst_QMARK_ = (function app$common$time$inst_QMARK_(o){
return (o instanceof Date);
});
app.common.time.seconds = (function app$common$time$seconds(d){
return ((cljs.core.inst_ms(d) / (1000)) | (0));
});
app.common.time.format_inst = (function app$common$time$format_inst(var_args){
var G__43278 = arguments.length;
switch (G__43278) {
case 1:
return app.common.time.format_inst.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.time.format_inst.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.time.format_inst.cljs$core$IFn$_invoke$arity$1 = (function (v){
return app.common.time.format_inst.cljs$core$IFn$_invoke$arity$2(v,new cljs.core.Keyword(null,"iso","iso",-1366207543));
}));

(app.common.time.format_inst.cljs$core$IFn$_invoke$arity$2 = (function (v,fmt){
if((!((v == null)))){
var G__43281 = fmt;
var G__43281__$1 = (((G__43281 instanceof cljs.core.Keyword))?G__43281.fqn:null);
switch (G__43281__$1) {
case "iso":
case "iso8601":
return shadow.js.shim.module$date_fns$formatISO$default(v);

break;
case "iso-date":
return shadow.js.shim.module$date_fns$formatISO$default(v,({"representation": "date"}));

break;
case "rfc1123":
case "http":
return shadow.js.shim.module$date_fns$format$default(v,"EEE, dd LLL yyyy HH:mm:ss 'GMT'");

break;
case "time-24-simple":
return shadow.js.shim.module$date_fns$format$default(v,"HH:mm");

break;
case "date-full":
return shadow.js.shim.module$date_fns$format$default(v,"PPP");

break;
case "localized-date":
return shadow.js.shim.module$date_fns$format$default(v,"PPP");

break;
case "localized-time":
return shadow.js.shim.module$date_fns$format$default(v,"p");

break;
case "localized-date-time":
return shadow.js.shim.module$date_fns$format$default(v,"PPP . p");

break;
default:
if(typeof fmt === 'string'){
return shadow.js.shim.module$date_fns$format$default(v,fmt);
} else {
throw (new Error("unpexted format"));
}

}
} else {
return null;
}
}));

(app.common.time.format_inst.cljs$lang$maxFixedArity = 2);

app.common.time.locales = ({"fr": shadow.js.shim.module$date_fns$locale$fr$default, "ja": shadow.js.shim.module$date_fns$locale$ja$default, "el": shadow.js.shim.module$date_fns$locale$el$default, "hr": shadow.js.shim.module$date_fns$locale$hr$default, "es": shadow.js.shim.module$date_fns$locale$es$default, "pt": shadow.js.shim.module$date_fns$locale$pt$default, "pt_pt": shadow.js.shim.module$date_fns$locale$pt$default, "ca": shadow.js.shim.module$date_fns$locale$ca$default, "ro": shadow.js.shim.module$date_fns$locale$ro$default, "tr": shadow.js.shim.module$date_fns$locale$tr$default, "cs": shadow.js.shim.module$date_fns$locale$cs$default, "pt_br": shadow.js.shim.module$date_fns$locale$pt_BR$default, "ko": shadow.js.shim.module$date_fns$locale$ko$default, "pl": shadow.js.shim.module$date_fns$locale$pl$default, "it": shadow.js.shim.module$date_fns$locale$it$default, "es_es": shadow.js.shim.module$date_fns$locale$es$default, "ja_jp": shadow.js.shim.module$date_fns$locale$ja$default, "en": shadow.js.shim.module$date_fns$locale$en_US$default, "nl": shadow.js.shim.module$date_fns$locale$nl$default, "de": shadow.js.shim.module$date_fns$locale$de$default, "id": shadow.js.shim.module$date_fns$locale$id$default, "ar": shadow.js.shim.module$date_fns$locale$ar_SA$default, "uk": shadow.js.shim.module$date_fns$locale$uk$default, "nb": shadow.js.shim.module$date_fns$locale$nb$default, "en_us": shadow.js.shim.module$date_fns$locale$en_US$default, "ru": shadow.js.shim.module$date_fns$locale$ru$default, "gl": shadow.js.shim.module$date_fns$locale$gl$default, "he": shadow.js.shim.module$date_fns$locale$he$default, "zh-cn": shadow.js.shim.module$date_fns$locale$zh_CN$default, "fa_ir": shadow.js.shim.module$date_fns$locale$fa_IR$default, "nb_no": shadow.js.shim.module$date_fns$locale$nb$default, "lv": shadow.js.shim.module$date_fns$locale$lv$default, "eu": shadow.js.shim.module$date_fns$locale$eu$default, "fa": shadow.js.shim.module$date_fns$locale$fa_IR$default});
app.common.time.timeago = (function app$common$time$timeago(v){
if(cljs.core.truth_(v)){
return shadow.js.shim.module$date_fns$formatDistanceToNowStrict$default(v,({"includeSeconds": true, "addSuffix": true}));
} else {
return null;
}
});
app.common.time.inst = (function app$common$time$inst(s){
if((s == null)){
return s;
} else {
if(app.common.time.inst_QMARK_(s)){
return s;
} else {
if(cljs.core.int_QMARK_(s)){
return (new Date(s));
} else {
if(typeof s === 'string'){
return shadow.js.shim.module$date_fns$parseISO$default(s);
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("invalid parameters",cljs.core.PersistentArrayMap.EMPTY);

}
}
}
}
});
app.common.time.plus = (function app$common$time$plus(d,ta){
var ta__$1 = ta;
if(app.common.time.inst_QMARK_(d)){
return shadow.js.shim.module$date_fns$add$default(d,ta__$1);
} else {
throw (new Error("unsupported type"));

}
});
app.common.time.minus = (function app$common$time$minus(d,ta){
var ta__$1 = ta;
if(app.common.time.inst_QMARK_(d)){
return shadow.js.shim.module$date_fns$sub$default(d,ta__$1);
} else {
throw (new Error("unsupported type"));

}
});
app.common.time.in_future = (function app$common$time$in_future(v){
return app.common.time.plus(app.common.time.now(),v);
});
app.common.time.in_past = (function app$common$time$in_past(v){
return app.common.time.minus(app.common.time.now(),v);
});
app.common.time.diff_ms = (function app$common$time$diff_ms(t1,t2){
return shadow.js.shim.module$date_fns$differenceInMilliseconds$default(t2,t1);
});
app.common.time.set_default_locale = (function app$common$time$set_default_locale(locale){
var temp__5825__auto__ = (app.common.time.locales[locale]);
if(cljs.core.truth_(temp__5825__auto__)){
var locale__$1 = temp__5825__auto__;
return shadow.js.shim.module$date_fns$setDefaultOptions$default(({"locale": locale__$1}));
} else {
return null;
}
});
/**
 * Create a measurement checkpoint for time measurement of potentially
 *   asynchronous flow.
 */
app.common.time.tpoint_ms = (function app$common$time$tpoint_ms(){
var p1 = performance.now();
return (function (){
return (performance.now() - p1);
});
});
app.common.time.schema_COLON_inst = app.common.schema.register_BANG_.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword("app.common.time","inst","app.common.time/inst",1401175972),new cljs.core.Keyword(null,"pred","pred",1927423397),app.common.time.inst_QMARK_,new cljs.core.Keyword(null,"type-properties","type-properties",-1728352126),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword("decode","string","decode/string",-108229948),new cljs.core.Keyword("decode","json","decode/json",468276044),new cljs.core.Keyword(null,"title","title",636505583),new cljs.core.Keyword("app.common.schema.openapi","format","app.common.schema.openapi/format",1235016623),new cljs.core.Keyword("encode","json","encode/json",303857460),new cljs.core.Keyword("app.common.schema.openapi","type","app.common.schema.openapi/type",-2037057739),new cljs.core.Keyword("gen","gen","gen/gen",142743606),new cljs.core.Keyword("error","message","error/message",-502809098),new cljs.core.Keyword("encode","string","encode/string",-137314532)],[app.common.time.inst,app.common.time.inst,"instant","iso",app.common.time.format_inst,"string",app.common.schema.generators.fmap((function (i){
return app.common.time.in_past(i);
}),app.common.schema.generators.small_int.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"min","min",444991522),(0)], 0))),"should be an instant",app.common.time.format_inst])], null));
(Date.prototype.cljs$core$IEncodeJS$ = cljs.core.PROTOCOL_SENTINEL);

(Date.prototype.cljs$core$IEncodeJS$_clj__GT_js$arity$1 = (function (x){
var x__$1 = this;
return x__$1;
}));

//# sourceMappingURL=app.common.time.js.map
