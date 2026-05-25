import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.i18n.js";
import "./app.common.logging.js";
import "./app.common.time.js";
import "./app.config.js";
import "./app.util.globals.js";
import "./app.util.modules.js";
import "./app.util.storage.js";
import "./cuerdas.core.js";
import "./goog.object.object.js";
import "./okulary.core.js";
import "./promesa.core.js";
import "./rumext.v2.js";
goog.provide('app.util.i18n');
goog.scope(function(){
  app.util.i18n.goog$module$goog$object = goog.module.get('goog.object');
});
app.common.logging.loggers.set("app.util.i18n",app.common.logging.level__GT_int(new cljs.core.Keyword(null,"info","info",-317069002)));
app.util.i18n.supported_locales = cljs.core.PersistentVector.fromArray([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"English",new cljs.core.Keyword(null,"value","value",305978217),"en"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Espa\u00F1ol",new cljs.core.Keyword(null,"value","value",305978217),"es"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Catal\u00E0",new cljs.core.Keyword(null,"value","value",305978217),"ca"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Deutsch (community)",new cljs.core.Keyword(null,"value","value",305978217),"de"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Dutch (community)",new cljs.core.Keyword(null,"value","value",305978217),"nl"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Euskera (community)",new cljs.core.Keyword(null,"value","value",305978217),"eu"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Fran\u00E7ais (community)",new cljs.core.Keyword(null,"value","value",305978217),"fr"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Gallego (Community)",new cljs.core.Keyword(null,"value","value",305978217),"gl"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Hausa (Community)",new cljs.core.Keyword(null,"value","value",305978217),"ha"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Hrvatski (Community)",new cljs.core.Keyword(null,"value","value",305978217),"hr"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Italiano (community)",new cljs.core.Keyword(null,"value","value",305978217),"it"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Norsk - Bokm\u00E5l (community)",new cljs.core.Keyword(null,"value","value",305978217),"nb_no"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Polski (community)",new cljs.core.Keyword(null,"value","value",305978217),"pl"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Portuguese - Brazil (community)",new cljs.core.Keyword(null,"value","value",305978217),"pt_br"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Portuguese - Portugal (community)",new cljs.core.Keyword(null,"value","value",305978217),"pt_pt"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Bahasa Indonesia (community)",new cljs.core.Keyword(null,"value","value",305978217),"id"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Rumanian (community)",new cljs.core.Keyword(null,"value","value",305978217),"ro"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"T\u00FCrk\u00E7e (community)",new cljs.core.Keyword(null,"value","value",305978217),"tr"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u0395\u03BB\u03BB\u03B7\u03BD\u03B9\u03BA\u03AE \u03B3\u03BB\u03CE\u03C3\u03C3\u03B1 (community)",new cljs.core.Keyword(null,"value","value",305978217),"el"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u0420\u0443\u0441\u0441\u043A\u0438\u0439 (community)",new cljs.core.Keyword(null,"value","value",305978217),"ru"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u0423\u043A\u0440\u0430\u0457\u0301\u043D\u0441\u044C\u043A\u0430 \u043C\u043E\u0301\u0432\u0430 (community)",new cljs.core.Keyword(null,"value","value",305978217),"uk"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u010Cesk\u00FD jazyk (community)",new cljs.core.Keyword(null,"value","value",305978217),"cs"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Latvie\u0161u valoda (community)",new cljs.core.Keyword(null,"value","value",305978217),"lv"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u0421\u0440\u043F\u0441\u043A\u0438 (community)",new cljs.core.Keyword(null,"value","value",305978217),"sr"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"F\u00F8royskt m\u00E1l (community)",new cljs.core.Keyword(null,"value","value",305978217),"fo"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"Korean (community)",new cljs.core.Keyword(null,"value","value",305978217),"ko"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u05E2\u05B4\u05D1\u05B0\u05E8\u05B4\u05D9\u05EA (community)",new cljs.core.Keyword(null,"value","value",305978217),"he"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u0906\u0927\u0941\u0928\u093F\u0915 \u092E\u093E\u0928\u0915 \u0939\u093F\u0928\u094D\u0926\u0940 (community)",new cljs.core.Keyword(null,"value","value",305978217),"hi"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u0639\u0631\u0628\u064A/\u0639\u0631\u0628\u0649 (community)",new cljs.core.Keyword(null,"value","value",305978217),"ar"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u0641\u0627\u0631\u0633\u06CC (community)",new cljs.core.Keyword(null,"value","value",305978217),"fa"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u65E5\u672C\u8A9E (Community)",new cljs.core.Keyword(null,"value","value",305978217),"ja_jp"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u7B80\u4F53\u4E2D\u6587 (community)",new cljs.core.Keyword(null,"value","value",305978217),"zh_cn"], null),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"label","label",1718410804),"\u7E41\u9AD4\u4E2D\u6587 (community)",new cljs.core.Keyword(null,"value","value",305978217),"zh_hant"], null)], true);
app.util.i18n.parse_locale = (function app$util$i18n$parse_locale(locale){
var locale__$1 = cuerdas.core.replace(cuerdas.core.lower(locale),"-","_");
var G__51242 = new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [locale__$1], null);
if(cljs.core.truth_(cuerdas.core.includes_QMARK_(locale__$1,"_"))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__51242,cljs.core.subs.cljs$core$IFn$_invoke$arity$3(locale__$1,(0),(2)));
} else {
return G__51242;
}
});
app.util.i18n.browser_locales = (new cljs.core.Delay((function (){
return app.util.i18n.parse_locale(app.util.globals.navigator.language);
}),null));
if((!(((app.util.globals.global["penpotTranslations"]) == null)))){
} else {
(app.util.globals.global["penpotTranslations"] = ({}));
}
app.util.i18n.autodetect = (function app$util$i18n$autodetect(){
var supported = cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"value","value",305978217),app.util.i18n.supported_locales));
var locales = cljs.core.seq(cljs.core.deref(app.util.i18n.browser_locales));
while(true){
var temp__5823__auto__ = cljs.core.first(locales);
if(cljs.core.truth_(temp__5823__auto__)){
var locale = temp__5823__auto__;
if(cljs.core.contains_QMARK_(supported,locale)){
return locale;
} else {
var G__51292 = cljs.core.rest(locales);
locales = G__51292;
continue;
}
} else {
return app.config.default_language;
}
break;
}
});
/**
 * Get the currently memoized locale or execute the autodetection
 */
app.util.i18n.get_current = (function app$util$i18n$get_current(){
var or__5025__auto__ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.util.storage.global,new cljs.core.Keyword("app.util.i18n","locale","app.util.i18n/locale",-2025524154));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.util.i18n.autodetect();
}
});
app.util.i18n._STAR_current_locale_STAR_ = app.util.i18n.get_current();
if((typeof app !== 'undefined') && (typeof app.util !== 'undefined') && (typeof app.util.i18n !== 'undefined') && (typeof app.util.i18n.locale !== 'undefined')){
} else {
app.util.i18n.locale = okulary.core.atom(app.util.i18n._STAR_current_locale_STAR_);
}
/**
 * Get globaly stored mutable object with all loaded translations
 */
app.util.i18n.get_translations = (function app$util$i18n$get_translations(){
return (app.util.globals.global["penpotTranslations"]);
});
/**
 * A helper for synchronously set translations data for specified locale
 */
app.util.i18n.set_translations = (function app$util$i18n$set_translations(locale,data){
var translations = app.util.i18n.get_translations();
(translations[locale] = data);

return null;
});
app.util.i18n.set_default_translations = (function app$util$i18n$set_default_translations(data){
return app.util.i18n.set_translations(app.config.default_language,data);
});
app.util.i18n.load = (function app$util$i18n$load(locale){
var path = ["./translation.",cljs.core.str.cljs$core$IFn$_invoke$arity$1(locale),".js?version=",cljs.core.str.cljs$core$IFn$_invoke$arity$1(app.config.version_tag)].join('');
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((function (data,cause){
if(cljs.core.truth_(cause)){
return console.error("unexpected error on fetching locale",cause);
} else {
return app.util.i18n.set_translations(locale,data);
}
}),promesa.core.fmap.cljs$core$IFn$_invoke$arity$2((function (result){
return (result["default"]);
}),app.util.modules.import$(path)));
});
/**
 * Initialize the i18n module
 */
app.util.i18n.init = (function app$util$i18n$init(){
app.util.i18n.load(app.util.i18n._STAR_current_locale_STAR_);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.util.i18n._STAR_current_locale_STAR_,app.config.default_language)){
return null;
} else {
return app.util.i18n.load(app.config.default_language);
}
});
app.util.i18n.set_locale = (function app$util$i18n$set_locale(lname){
var lname__$1 = (((((lname == null)) || (cuerdas.core.empty_QMARK_(lname))))?app.util.i18n.autodetect():(function (){var supported = cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentHashSet.EMPTY,cljs.core.map.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"value","value",305978217)),app.util.i18n.supported_locales);
var locales = cljs.core.seq(app.util.i18n.parse_locale(lname));
while(true){
var temp__5823__auto__ = cljs.core.first(locales);
if(cljs.core.truth_(temp__5823__auto__)){
var locale = temp__5823__auto__;
if(cljs.core.contains_QMARK_(supported,locale)){
return locale;
} else {
var G__51293 = cljs.core.rest(locales);
locales = G__51293;
continue;
}
} else {
return app.config.default_language;
}
break;
}
})());
return promesa.core.fnly.cljs$core$IFn$_invoke$arity$2((function (_r,_c){
(app.util.i18n._STAR_current_locale_STAR_ = lname__$1);

return cljs.core.reset_BANG_(app.util.i18n.locale,lname__$1);
}),app.util.i18n.load(lname__$1));
});

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
app.util.i18n.C = (function (val){
this.val = val;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.util.i18n.C.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
}));

(app.util.i18n.C.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
}));

(app.util.i18n.C.cljs$lang$type = true);

(app.util.i18n.C.cljs$lang$ctorStr = "app.util.i18n/C");

(app.util.i18n.C.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.util.i18n/C");
}));

/**
 * Positional factory function for app.util.i18n/C.
 */
app.util.i18n.__GT_C = (function app$util$i18n$__GT_C(val){
return (new app.util.i18n.C(val));
});

app.util.i18n.c_QMARK_ = (function app$util$i18n$c_QMARK_(r){
return (r instanceof app.util.i18n.C);
});
app.util.i18n.c = (function app$util$i18n$c(x){
return (new app.util.i18n.C(x));
});
app.util.i18n.empty_string_QMARK_ = (function app$util$i18n$empty_string_QMARK_(v){
return (((v == null)) || (cljs.core.empty_QMARK_(v)));
});
app.util.i18n.t = (function app$util$i18n$t(var_args){
var G__51271 = arguments.length;
switch (G__51271) {
case 2:
return app.util.i18n.t.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___51298 = arguments.length;
var i__5750__auto___51299 = (0);
while(true){
if((i__5750__auto___51299 < len__5749__auto___51298)){
args_arr__5774__auto__.push((arguments[i__5750__auto___51299]));

var G__51300 = (i__5750__auto___51299 + (1));
i__5750__auto___51299 = G__51300;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((2) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((2)),(0),null)):null);
return app.util.i18n.t.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5775__auto__);

}
});

(app.util.i18n.t.cljs$core$IFn$_invoke$arity$2 = (function (locale,code){
var translations = app.util.i18n.get_translations();
var code__$1 = app.common.data.name(code);
var value = app.util.i18n.goog$module$goog$object.getValueByKeys(translations,locale,code__$1);
if(app.util.i18n.empty_string_QMARK_(value)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.config.default_language,locale)){
return code__$1;
} else {
return app.util.i18n.t.cljs$core$IFn$_invoke$arity$2(app.config.default_language,code__$1);
}
} else {
if(cljs.core.array_QMARK_(value)){
return (value[(0)]);
} else {
return value;
}
}
}));

(app.util.i18n.t.cljs$core$IFn$_invoke$arity$variadic = (function (locale,code,args){
var translations = app.util.i18n.get_translations();
var code__$1 = app.common.data.name(code);
var value = app.util.i18n.goog$module$goog$object.getValueByKeys(translations,locale,code__$1);
if(app.util.i18n.empty_string_QMARK_(value)){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(app.config.default_language,locale)){
return code__$1;
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(app.util.i18n.t,app.config.default_language,code__$1,args);
}
} else {
var plural = cljs.core.first(cljs.core.filter.cljs$core$IFn$_invoke$arity$2(app.util.i18n.c_QMARK_,args));
var value__$1 = ((cljs.core.array_QMARK_(value))?((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(plural),(1)))?(value[(0)]):(value[(1)])):value);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(cuerdas.core.fmt,value__$1,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__51266_SHARP_){
if(app.util.i18n.c_QMARK_(p1__51266_SHARP_)){
return cljs.core.deref(p1__51266_SHARP_);
} else {
return p1__51266_SHARP_;
}
}),args));
}
}));

/** @this {Function} */
(app.util.i18n.t.cljs$lang$applyTo = (function (seq51268){
var G__51269 = cljs.core.first(seq51268);
var seq51268__$1 = cljs.core.next(seq51268);
var G__51270 = cljs.core.first(seq51268__$1);
var seq51268__$2 = cljs.core.next(seq51268__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51269,G__51270,seq51268__$2);
}));

(app.util.i18n.t.cljs$lang$maxFixedArity = (2));

app.util.i18n.tr = (function app$util$i18n$tr(var_args){
var G__51283 = arguments.length;
switch (G__51283) {
case 1:
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
var args_arr__5774__auto__ = [];
var len__5749__auto___51308 = arguments.length;
var i__5750__auto___51309 = (0);
while(true){
if((i__5750__auto___51309 < len__5749__auto___51308)){
args_arr__5774__auto__.push((arguments[i__5750__auto___51309]));

var G__51310 = (i__5750__auto___51309 + (1));
i__5750__auto___51309 = G__51310;
continue;
} else {
}
break;
}

var argseq__5775__auto__ = ((((1) < args_arr__5774__auto__.length))?(new cljs.core.IndexedSeq(args_arr__5774__auto__.slice((1)),(0),null)):null);
return app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5775__auto__);

}
});

(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$1 = (function (code){
return app.util.i18n.t.cljs$core$IFn$_invoke$arity$2(app.util.i18n._STAR_current_locale_STAR_,code);
}));

(app.util.i18n.tr.cljs$core$IFn$_invoke$arity$variadic = (function (code,args){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$4(app.util.i18n.t,app.util.i18n._STAR_current_locale_STAR_,code,args);
}));

/** @this {Function} */
(app.util.i18n.tr.cljs$lang$applyTo = (function (seq51280){
var G__51282 = cljs.core.first(seq51280);
var seq51280__$1 = cljs.core.next(seq51280);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__51282,seq51280__$1);
}));

(app.util.i18n.tr.cljs$lang$maxFixedArity = (1));

app.util.i18n.tr_html_STAR_ = (function app$util$i18n$tr_html_STAR_(props_51289){
var tag_name = props_51289.tagName;
var content = props_51289.content;
var on_click = props_51289.onClick;
var class$ = props_51289.className;
var tag_name__$1 = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(tag_name,"p");
return rumext.v2.jsx(tag_name__$1,{'dangerouslySetInnerHTML':({"__html": content}),'className':class$,'onClick':on_click});
});

(app.util.i18n.tr_html_STAR_.displayName = "tr-html*");

cljs.core.add_watch(app.util.i18n.locale,"common.time",(function (_,___$1,pv,cv){
if(cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(pv,cv)){
return app.common.time.set_default_locale(cv);
} else {
return null;
}
}));
(app.common.i18n.tr = app.util.i18n.tr);

//# sourceMappingURL=app.util.i18n.js.map
