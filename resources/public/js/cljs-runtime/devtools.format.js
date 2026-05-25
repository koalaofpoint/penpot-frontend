import "./cljs_env.js";
import "./cljs.core.js";
import "./devtools.context.js";
goog.provide('devtools.format');

/**
 * @interface
 */
devtools.format.IDevtoolsFormat = function(){};

var devtools$format$IDevtoolsFormat$_header$dyn_25366 = (function (value){
var x__5373__auto__ = (((value == null))?null:value);
var m__5374__auto__ = (devtools.format._header[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5374__auto__.call(null,value));
} else {
var m__5372__auto__ = (devtools.format._header["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5372__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-header",value);
}
}
});
devtools.format._header = (function devtools$format$_header(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_header$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_header$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_header$dyn_25366(value);
}
});

var devtools$format$IDevtoolsFormat$_has_body$dyn_25367 = (function (value){
var x__5373__auto__ = (((value == null))?null:value);
var m__5374__auto__ = (devtools.format._has_body[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5374__auto__.call(null,value));
} else {
var m__5372__auto__ = (devtools.format._has_body["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5372__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-has-body",value);
}
}
});
devtools.format._has_body = (function devtools$format$_has_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_has_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_has_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_has_body$dyn_25367(value);
}
});

var devtools$format$IDevtoolsFormat$_body$dyn_25369 = (function (value){
var x__5373__auto__ = (((value == null))?null:value);
var m__5374__auto__ = (devtools.format._body[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5374__auto__.call(null,value));
} else {
var m__5372__auto__ = (devtools.format._body["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(value) : m__5372__auto__.call(null,value));
} else {
throw cljs.core.missing_protocol("IDevtoolsFormat.-body",value);
}
}
});
devtools.format._body = (function devtools$format$_body(value){
if((((!((value == null)))) && ((!((value.devtools$format$IDevtoolsFormat$_body$arity$1 == null)))))){
return value.devtools$format$IDevtoolsFormat$_body$arity$1(value);
} else {
return devtools$format$IDevtoolsFormat$_body$dyn_25369(value);
}
});

devtools.format.setup_BANG_ = (function devtools$format$setup_BANG_(){
if(cljs.core.truth_(devtools.format._STAR_setup_done_STAR_)){
return null;
} else {
(devtools.format._STAR_setup_done_STAR_ = true);

devtools.format.make_template_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o25284 = temp__5823__auto__;
var temp__5823__auto____$1 = (o25284["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o25285 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o25285["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o25286 = temp__5823__auto____$2;
return (o25286["make_template"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_group_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o25287 = temp__5823__auto__;
var temp__5823__auto____$1 = (o25287["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o25288 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o25288["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o25289 = temp__5823__auto____$2;
return (o25289["make_group"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_reference_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o25290 = temp__5823__auto__;
var temp__5823__auto____$1 = (o25290["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o25291 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o25291["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o25292 = temp__5823__auto____$2;
return (o25292["make_reference"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.make_surrogate_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o25295 = temp__5823__auto__;
var temp__5823__auto____$1 = (o25295["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o25301 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o25301["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o25302 = temp__5823__auto____$2;
return (o25302["make_surrogate"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format.render_markup_fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o25307 = temp__5823__auto__;
var temp__5823__auto____$1 = (o25307["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o25308 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o25308["templating"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o25309 = temp__5823__auto____$2;
return (o25309["render_markup"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_header_GT__fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o25313 = temp__5823__auto__;
var temp__5823__auto____$1 = (o25313["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o25314 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o25314["markup"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o25315 = temp__5823__auto____$2;
return (o25315["_LT_header_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

devtools.format._LT_standard_body_GT__fn = (function (){var temp__5823__auto__ = (devtools.context.get_root.call(null)["devtools"]);
if(cljs.core.truth_(temp__5823__auto__)){
var o25316 = temp__5823__auto__;
var temp__5823__auto____$1 = (o25316["formatters"]);
if(cljs.core.truth_(temp__5823__auto____$1)){
var o25317 = temp__5823__auto____$1;
var temp__5823__auto____$2 = (o25317["markup"]);
if(cljs.core.truth_(temp__5823__auto____$2)){
var o25318 = temp__5823__auto____$2;
return (o25318["_LT_standard_body_GT_"]);
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
})();

if(cljs.core.truth_(devtools.format.make_template_fn)){
} else {
throw (new Error("Assert failed: make-template-fn"));
}

if(cljs.core.truth_(devtools.format.make_group_fn)){
} else {
throw (new Error("Assert failed: make-group-fn"));
}

if(cljs.core.truth_(devtools.format.make_reference_fn)){
} else {
throw (new Error("Assert failed: make-reference-fn"));
}

if(cljs.core.truth_(devtools.format.make_surrogate_fn)){
} else {
throw (new Error("Assert failed: make-surrogate-fn"));
}

if(cljs.core.truth_(devtools.format.render_markup_fn)){
} else {
throw (new Error("Assert failed: render-markup-fn"));
}

if(cljs.core.truth_(devtools.format._LT_header_GT__fn)){
} else {
throw (new Error("Assert failed: <header>-fn"));
}

if(cljs.core.truth_(devtools.format._LT_standard_body_GT__fn)){
return null;
} else {
throw (new Error("Assert failed: <standard-body>-fn"));
}
}
});
devtools.format.render_markup = (function devtools$format$render_markup(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25389 = arguments.length;
var i__5750__auto___25390 = (0);
while(true){
if((i__5750__auto___25390 < len__5749__auto___25389)){
args__5755__auto__.push((arguments[i__5750__auto___25390]));

var G__25391 = (i__5750__auto___25390 + (1));
i__5750__auto___25390 = G__25391;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.render_markup_fn,args);
}));

(devtools.format.render_markup.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.render_markup.cljs$lang$applyTo = (function (seq25320){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25320));
}));

devtools.format.make_template = (function devtools$format$make_template(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25394 = arguments.length;
var i__5750__auto___25395 = (0);
while(true){
if((i__5750__auto___25395 < len__5749__auto___25394)){
args__5755__auto__.push((arguments[i__5750__auto___25395]));

var G__25396 = (i__5750__auto___25395 + (1));
i__5750__auto___25395 = G__25396;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.make_template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.make_template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_template.cljs$lang$applyTo = (function (seq25324){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25324));
}));

devtools.format.make_group = (function devtools$format$make_group(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25397 = arguments.length;
var i__5750__auto___25398 = (0);
while(true){
if((i__5750__auto___25398 < len__5749__auto___25397)){
args__5755__auto__.push((arguments[i__5750__auto___25398]));

var G__25399 = (i__5750__auto___25398 + (1));
i__5750__auto___25398 = G__25399;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.make_group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.make_group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_group.cljs$lang$applyTo = (function (seq25328){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25328));
}));

devtools.format.make_surrogate = (function devtools$format$make_surrogate(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25400 = arguments.length;
var i__5750__auto___25401 = (0);
while(true){
if((i__5750__auto___25401 < len__5749__auto___25400)){
args__5755__auto__.push((arguments[i__5750__auto___25401]));

var G__25402 = (i__5750__auto___25401 + (1));
i__5750__auto___25401 = G__25402;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.make_surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.make_surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.make_surrogate.cljs$lang$applyTo = (function (seq25330){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25330));
}));

devtools.format.template = (function devtools$format$template(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25403 = arguments.length;
var i__5750__auto___25404 = (0);
while(true){
if((i__5750__auto___25404 < len__5749__auto___25403)){
args__5755__auto__.push((arguments[i__5750__auto___25404]));

var G__25405 = (i__5750__auto___25404 + (1));
i__5750__auto___25404 = G__25405;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.template.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.template.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_template_fn,args);
}));

(devtools.format.template.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.template.cljs$lang$applyTo = (function (seq25333){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25333));
}));

devtools.format.group = (function devtools$format$group(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25407 = arguments.length;
var i__5750__auto___25408 = (0);
while(true){
if((i__5750__auto___25408 < len__5749__auto___25407)){
args__5755__auto__.push((arguments[i__5750__auto___25408]));

var G__25409 = (i__5750__auto___25408 + (1));
i__5750__auto___25408 = G__25409;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.group.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.group.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_group_fn,args);
}));

(devtools.format.group.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.group.cljs$lang$applyTo = (function (seq25337){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25337));
}));

devtools.format.surrogate = (function devtools$format$surrogate(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25411 = arguments.length;
var i__5750__auto___25412 = (0);
while(true){
if((i__5750__auto___25412 < len__5749__auto___25411)){
args__5755__auto__.push((arguments[i__5750__auto___25412]));

var G__25414 = (i__5750__auto___25412 + (1));
i__5750__auto___25412 = G__25414;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.surrogate.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_surrogate_fn,args);
}));

(devtools.format.surrogate.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.surrogate.cljs$lang$applyTo = (function (seq25339){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25339));
}));

devtools.format.reference = (function devtools$format$reference(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25417 = arguments.length;
var i__5750__auto___25418 = (0);
while(true){
if((i__5750__auto___25418 < len__5749__auto___25417)){
args__5755__auto__.push((arguments[i__5750__auto___25418]));

var G__25420 = (i__5750__auto___25418 + (1));
i__5750__auto___25418 = G__25420;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(devtools.format.reference.cljs$core$IFn$_invoke$arity$variadic = (function (object,p__25348){
var vec__25349 = p__25348;
var state_override = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__25349,(0),null);
devtools.format.setup_BANG_();

return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format.make_reference_fn,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [object,(function (p1__25345_SHARP_){
return cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p1__25345_SHARP_,state_override], 0));
})], null));
}));

(devtools.format.reference.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.reference.cljs$lang$applyTo = (function (seq25346){
var G__25347 = cljs.core.first(seq25346);
var seq25346__$1 = cljs.core.next(seq25346);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25347,seq25346__$1);
}));

devtools.format.standard_reference = (function devtools$format$standard_reference(target){
devtools.format.setup_BANG_();

var G__25352 = new cljs.core.Keyword(null,"ol","ol",932524051);
var G__25353 = new cljs.core.Keyword(null,"standard-ol-style","standard-ol-style",2143825615);
var G__25354 = (function (){var G__25355 = new cljs.core.Keyword(null,"li","li",723558921);
var G__25356 = new cljs.core.Keyword(null,"standard-li-style","standard-li-style",413442955);
var G__25357 = (devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1 ? devtools.format.make_reference_fn.cljs$core$IFn$_invoke$arity$1(target) : devtools.format.make_reference_fn.call(null,target));
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__25355,G__25356,G__25357) : devtools.format.make_template_fn.call(null,G__25355,G__25356,G__25357));
})();
return (devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3 ? devtools.format.make_template_fn.cljs$core$IFn$_invoke$arity$3(G__25352,G__25353,G__25354) : devtools.format.make_template_fn.call(null,G__25352,G__25353,G__25354));
});
devtools.format.build_header = (function devtools$format$build_header(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25426 = arguments.length;
var i__5750__auto___25427 = (0);
while(true){
if((i__5750__auto___25427 < len__5749__auto___25426)){
args__5755__auto__.push((arguments[i__5750__auto___25427]));

var G__25428 = (i__5750__auto___25427 + (1));
i__5750__auto___25427 = G__25428;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(devtools.format.build_header.cljs$core$IFn$_invoke$arity$variadic = (function (args){
devtools.format.setup_BANG_();

return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_header_GT__fn,args)], 0));
}));

(devtools.format.build_header.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(devtools.format.build_header.cljs$lang$applyTo = (function (seq25358){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq25358));
}));

devtools.format.standard_body_template = (function devtools$format$standard_body_template(var_args){
var args__5755__auto__ = [];
var len__5749__auto___25429 = arguments.length;
var i__5750__auto___25430 = (0);
while(true){
if((i__5750__auto___25430 < len__5749__auto___25429)){
args__5755__auto__.push((arguments[i__5750__auto___25430]));

var G__25431 = (i__5750__auto___25430 + (1));
i__5750__auto___25430 = G__25431;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((1) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((1)),(0),null)):null);
return devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__5756__auto__);
});

(devtools.format.standard_body_template.cljs$core$IFn$_invoke$arity$variadic = (function (lines,rest){
devtools.format.setup_BANG_();

var args = cljs.core.concat.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [x], null);
}),lines)], null),rest);
return devtools.format.render_markup.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(devtools.format._LT_standard_body_GT__fn,args)], 0));
}));

(devtools.format.standard_body_template.cljs$lang$maxFixedArity = (1));

/** @this {Function} */
(devtools.format.standard_body_template.cljs$lang$applyTo = (function (seq25360){
var G__25361 = cljs.core.first(seq25360);
var seq25360__$1 = cljs.core.next(seq25360);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__25361,seq25360__$1);
}));


//# sourceMappingURL=devtools.format.js.map
