import "./cljs_env.js";
import "./cljs.core.js";
import "./promesa.protocols.js";
goog.provide('promesa.util');
/**
 * Create a handler, mainly for combine two separate functions
 *   into a single callbale.
 */
promesa.util.handler = (function promesa$util$handler(fv,fc){
return (function (v,c){
if(cljs.core.truth_(c)){
return (fc.cljs$core$IFn$_invoke$arity$1 ? fc.cljs$core$IFn$_invoke$arity$1(c) : fc.call(null,c));
} else {
return (fv.cljs$core$IFn$_invoke$arity$1 ? fv.cljs$core$IFn$_invoke$arity$1(v) : fv.call(null,v));
}
});
});
promesa.util.maybe_deref = (function promesa$util$maybe_deref(o){
if(cljs.core.delay_QMARK_(o)){
return cljs.core.deref(o);
} else {
return o;
}
});

/**
* @constructor
 * @implements {promesa.protocols.ILock}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
promesa.util.t_promesa$util42790 = (function (meta42791){
this.meta42791 = meta42791;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(promesa.util.t_promesa$util42790.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_42792,meta42791__$1){
var self__ = this;
var _42792__$1 = this;
return (new promesa.util.t_promesa$util42790(meta42791__$1));
}));

(promesa.util.t_promesa$util42790.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_42792){
var self__ = this;
var _42792__$1 = this;
return self__.meta42791;
}));

(promesa.util.t_promesa$util42790.prototype.promesa$protocols$ILock$ = cljs.core.PROTOCOL_SENTINEL);

(promesa.util.t_promesa$util42790.prototype.promesa$protocols$ILock$_lock_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(promesa.util.t_promesa$util42790.prototype.promesa$protocols$ILock$_unlock_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(promesa.util.t_promesa$util42790.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta42791","meta42791",274484758,null)], null);
}));

(promesa.util.t_promesa$util42790.cljs$lang$type = true);

(promesa.util.t_promesa$util42790.cljs$lang$ctorStr = "promesa.util/t_promesa$util42790");

(promesa.util.t_promesa$util42790.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"promesa.util/t_promesa$util42790");
}));

/**
 * Positional factory function for promesa.util/t_promesa$util42790.
 */
promesa.util.__GT_t_promesa$util42790 = (function promesa$util$__GT_t_promesa$util42790(meta42791){
return (new promesa.util.t_promesa$util42790(meta42791));
});


promesa.util.mutex = (function promesa$util$mutex(){
return (new promesa.util.t_promesa$util42790(cljs.core.PersistentArrayMap.EMPTY));
});
promesa.util.try_STAR_ = (function promesa$util$try_STAR_(f,on_error){
try{return (f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));
}catch (e42797){var e = e42797;
return (on_error.cljs$core$IFn$_invoke$arity$1 ? on_error.cljs$core$IFn$_invoke$arity$1(e) : on_error.call(null,e));
}});
promesa.util.close_BANG_ = (function promesa$util$close_BANG_(var_args){
var G__42800 = arguments.length;
switch (G__42800) {
case 1:
return promesa.util.close_BANG_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return promesa.util.close_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(promesa.util.close_BANG_.cljs$core$IFn$_invoke$arity$1 = (function (o){
return promesa.protocols._close_BANG_(o);
}));

(promesa.util.close_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (o,reason){
return promesa.protocols._close_BANG_(o,reason);
}));

(promesa.util.close_BANG_.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=promesa.util.js.map
