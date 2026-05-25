import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./beicon.v2.core.js";
import "./promesa.core.js";
goog.provide('app.util.timers');

/**
* @constructor
 * @implements {beicon.v2.core.IDisposable}
 * @implements {app.common.data.ICloseable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.util.timers.t_app$util$timers46250 = (function (ms,func,sem,meta46251){
this.ms = ms;
this.func = func;
this.sem = sem;
this.meta46251 = meta46251;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.util.timers.t_app$util$timers46250.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46252,meta46251__$1){
var self__ = this;
var _46252__$1 = this;
return (new app.util.timers.t_app$util$timers46250(self__.ms,self__.func,self__.sem,meta46251__$1));
}));

(app.util.timers.t_app$util$timers46250.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46252){
var self__ = this;
var _46252__$1 = this;
return self__.meta46251;
}));

(app.util.timers.t_app$util$timers46250.prototype.app$common$data$ICloseable$ = cljs.core.PROTOCOL_SENTINEL);

(app.util.timers.t_app$util$timers46250.prototype.app$common$data$ICloseable$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return clearTimeout(self__.sem);
}));

(app.util.timers.t_app$util$timers46250.prototype.beicon$v2$core$IDisposable$ = cljs.core.PROTOCOL_SENTINEL);

(app.util.timers.t_app$util$timers46250.prototype.beicon$v2$core$IDisposable$_dispose$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return clearTimeout(self__.sem);
}));

(app.util.timers.t_app$util$timers46250.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ms","ms",487821794,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"sem","sem",1637425433,null),new cljs.core.Symbol(null,"meta46251","meta46251",-1947171992,null)], null);
}));

(app.util.timers.t_app$util$timers46250.cljs$lang$type = true);

(app.util.timers.t_app$util$timers46250.cljs$lang$ctorStr = "app.util.timers/t_app$util$timers46250");

(app.util.timers.t_app$util$timers46250.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.util.timers/t_app$util$timers46250");
}));

/**
 * Positional factory function for app.util.timers/t_app$util$timers46250.
 */
app.util.timers.__GT_t_app$util$timers46250 = (function app$util$timers$__GT_t_app$util$timers46250(ms,func,sem,meta46251){
return (new app.util.timers.t_app$util$timers46250(ms,func,sem,meta46251));
});


app.util.timers.schedule = (function app$util$timers$schedule(var_args){
var G__46242 = arguments.length;
switch (G__46242) {
case 1:
return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.timers.schedule.cljs$core$IFn$_invoke$arity$1 = (function (func){
return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2((0),func);
}));

(app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2 = (function (ms,func){
var sem = setTimeout((function (){
return (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
}),ms);
return (new app.util.timers.t_app$util$timers46250(ms,func,sem,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.util.timers.schedule.cljs$lang$maxFixedArity = 2);

app.util.timers.dispose_BANG_ = (function app$util$timers$dispose_BANG_(v){
return beicon.v2.core.dispose_BANG_(v);
});
app.util.timers.asap = (function app$util$timers$asap(f){
return promesa.core.then.cljs$core$IFn$_invoke$arity$2(promesa.core.resolved(null),(function (_){
return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}));
});

/**
* @constructor
 * @implements {beicon.v2.core.IDisposable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.util.timers.t_app$util$timers46273 = (function (ms,func,sem,meta46274){
this.ms = ms;
this.func = func;
this.sem = sem;
this.meta46274 = meta46274;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.util.timers.t_app$util$timers46273.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46275,meta46274__$1){
var self__ = this;
var _46275__$1 = this;
return (new app.util.timers.t_app$util$timers46273(self__.ms,self__.func,self__.sem,meta46274__$1));
}));

(app.util.timers.t_app$util$timers46273.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46275){
var self__ = this;
var _46275__$1 = this;
return self__.meta46274;
}));

(app.util.timers.t_app$util$timers46273.prototype.beicon$v2$core$IDisposable$ = cljs.core.PROTOCOL_SENTINEL);

(app.util.timers.t_app$util$timers46273.prototype.beicon$v2$core$IDisposable$_dispose$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return clearInterval(self__.sem);
}));

(app.util.timers.t_app$util$timers46273.getBasis = (function (){
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ms","ms",487821794,null),new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"sem","sem",1637425433,null),new cljs.core.Symbol(null,"meta46274","meta46274",-108272147,null)], null);
}));

(app.util.timers.t_app$util$timers46273.cljs$lang$type = true);

(app.util.timers.t_app$util$timers46273.cljs$lang$ctorStr = "app.util.timers/t_app$util$timers46273");

(app.util.timers.t_app$util$timers46273.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.util.timers/t_app$util$timers46273");
}));

/**
 * Positional factory function for app.util.timers/t_app$util$timers46273.
 */
app.util.timers.__GT_t_app$util$timers46273 = (function app$util$timers$__GT_t_app$util$timers46273(ms,func,sem,meta46274){
return (new app.util.timers.t_app$util$timers46273(ms,func,sem,meta46274));
});


app.util.timers.interval = (function app$util$timers$interval(ms,func){
var sem = setInterval((function (){
return (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
}),ms);
return (new app.util.timers.t_app$util$timers46273(ms,func,sem,cljs.core.PersistentArrayMap.EMPTY));
});
if(cljs.core.truth_((function (){var and__5023__auto__ = (typeof window !== 'undefined');
if(and__5023__auto__){
return window.requestIdleCallback;
} else {
return and__5023__auto__;
}
})())){
app.util.timers.request_idle_callback = (function app$util$timers$request_idle_callback(p1__46292_SHARP_){
return requestIdleCallback(p1__46292_SHARP_,({"timeout": (30000)}));
});

app.util.timers.cancel_idle_callback = (function app$util$timers$cancel_idle_callback(p1__46293_SHARP_){
return cancelIdleCallback(p1__46293_SHARP_);
});
} else {
app.util.timers.request_idle_callback = (function app$util$timers$request_idle_callback(p1__46294_SHARP_){
return setTimeout(p1__46294_SHARP_,(250));
});

app.util.timers.cancel_idle_callback = (function app$util$timers$cancel_idle_callback(p1__46295_SHARP_){
return clearTimeout(p1__46295_SHARP_);
});
}

/**
* @constructor
 * @implements {beicon.v2.core.IDisposable}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
app.util.timers.t_app$util$timers46306 = (function (func,sem,meta46307){
this.func = func;
this.sem = sem;
this.meta46307 = meta46307;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(app.util.timers.t_app$util$timers46306.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_46308,meta46307__$1){
var self__ = this;
var _46308__$1 = this;
return (new app.util.timers.t_app$util$timers46306(self__.func,self__.sem,meta46307__$1));
}));

(app.util.timers.t_app$util$timers46306.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_46308){
var self__ = this;
var _46308__$1 = this;
return self__.meta46307;
}));

(app.util.timers.t_app$util$timers46306.prototype.beicon$v2$core$IDisposable$ = cljs.core.PROTOCOL_SENTINEL);

(app.util.timers.t_app$util$timers46306.prototype.beicon$v2$core$IDisposable$_dispose$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return app.util.timers.cancel_idle_callback(self__.sem);
}));

(app.util.timers.t_app$util$timers46306.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"func","func",1401825487,null),new cljs.core.Symbol(null,"sem","sem",1637425433,null),new cljs.core.Symbol(null,"meta46307","meta46307",1079373770,null)], null);
}));

(app.util.timers.t_app$util$timers46306.cljs$lang$type = true);

(app.util.timers.t_app$util$timers46306.cljs$lang$ctorStr = "app.util.timers/t_app$util$timers46306");

(app.util.timers.t_app$util$timers46306.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"app.util.timers/t_app$util$timers46306");
}));

/**
 * Positional factory function for app.util.timers/t_app$util$timers46306.
 */
app.util.timers.__GT_t_app$util$timers46306 = (function app$util$timers$__GT_t_app$util$timers46306(func,sem,meta46307){
return (new app.util.timers.t_app$util$timers46306(func,sem,meta46307));
});


app.util.timers.schedule_on_idle = (function app$util$timers$schedule_on_idle(var_args){
var G__46303 = arguments.length;
switch (G__46303) {
case 2:
return app.util.timers.schedule_on_idle.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return app.util.timers.schedule_on_idle.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.timers.schedule_on_idle.cljs$core$IFn$_invoke$arity$2 = (function (ms,func){
return app.util.timers.schedule.cljs$core$IFn$_invoke$arity$2(ms,(function (){
return app.util.timers.schedule_on_idle.cljs$core$IFn$_invoke$arity$1(func);
}));
}));

(app.util.timers.schedule_on_idle.cljs$core$IFn$_invoke$arity$1 = (function (func){
var sem = app.util.timers.request_idle_callback((function (){
return (func.cljs$core$IFn$_invoke$arity$0 ? func.cljs$core$IFn$_invoke$arity$0() : func.call(null));
}));
return (new app.util.timers.t_app$util$timers46306(func,sem,cljs.core.PersistentArrayMap.EMPTY));
}));

(app.util.timers.schedule_on_idle.cljs$lang$maxFixedArity = 2);

app.util.timers.request_animation_frame = (((((typeof globalThis !== 'undefined')) && ((!((globalThis.requestAnimationFrame == null))))))?(function (p1__46319_SHARP_){
return globalThis.requestAnimationFrame(p1__46319_SHARP_);
}):(function (p1__46320_SHARP_){
return setTimeout(p1__46320_SHARP_,(16));
}));
app.util.timers.raf = (function app$util$timers$raf(f){
return app.util.timers.request_animation_frame(f);
});
app.util.timers.idle_then_raf = (function app$util$timers$idle_then_raf(f){
return app.util.timers.schedule_on_idle.cljs$core$IFn$_invoke$arity$1((function (){
return app.util.timers.raf(f);
}));
});

//# sourceMappingURL=app.util.timers.js.map
