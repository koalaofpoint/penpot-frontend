import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('malli.registry');
/**
 * @define {string}
 */
malli.registry.mode = goog.define("malli.registry.mode","default");
/**
 * @define {string}
 */
malli.registry.type = goog.define("malli.registry.type","default");

/**
 * @interface
 */
malli.registry.Registry = function(){};

var malli$registry$Registry$_schema$dyn_29542 = (function (this$,type){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.registry._schema[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5374__auto__.call(null,this$,type));
} else {
var m__5372__auto__ = (malli.registry._schema["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$2 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$2(this$,type) : m__5372__auto__.call(null,this$,type));
} else {
throw cljs.core.missing_protocol("Registry.-schema",this$);
}
}
});
/**
 * returns the schema from a registry
 */
malli.registry._schema = (function malli$registry$_schema(this$,type){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schema$arity$2 == null)))))){
return this$.malli$registry$Registry$_schema$arity$2(this$,type);
} else {
return malli$registry$Registry$_schema$dyn_29542(this$,type);
}
});

var malli$registry$Registry$_schemas$dyn_29564 = (function (this$){
var x__5373__auto__ = (((this$ == null))?null:this$);
var m__5374__auto__ = (malli.registry._schemas[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5374__auto__.call(null,this$));
} else {
var m__5372__auto__ = (malli.registry._schemas["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$1 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$1(this$) : m__5372__auto__.call(null,this$));
} else {
throw cljs.core.missing_protocol("Registry.-schemas",this$);
}
}
});
/**
 * returns all schemas from a registry
 */
malli.registry._schemas = (function malli$registry$_schemas(this$){
if((((!((this$ == null)))) && ((!((this$.malli$registry$Registry$_schemas$arity$1 == null)))))){
return this$.malli$registry$Registry$_schemas$arity$1(this$);
} else {
return malli$registry$Registry$_schemas$dyn_29564(this$);
}
});

malli.registry.registry_QMARK_ = (function malli$registry$registry_QMARK_(x){
if((!((x == null)))){
if(((false) || ((cljs.core.PROTOCOL_SENTINEL === x.malli$registry$Registry$)))){
return true;
} else {
return false;
}
} else {
return false;
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry29338 = (function (m,fm,meta29339){
this.m = m;
this.fm = fm;
this.meta29339 = meta29339;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry29338.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29340,meta29339__$1){
var self__ = this;
var _29340__$1 = this;
return (new malli.registry.t_malli$registry29338(self__.m,self__.fm,meta29339__$1));
}));

(malli.registry.t_malli$registry29338.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29340){
var self__ = this;
var _29340__$1 = this;
return self__.meta29339;
}));

(malli.registry.t_malli$registry29338.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry29338.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return self__.fm.get(type);
}));

(malli.registry.t_malli$registry29338.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry29338.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"fm","fm",-1190690268,null),new cljs.core.Symbol(null,"meta29339","meta29339",758431582,null)], null);
}));

(malli.registry.t_malli$registry29338.cljs$lang$type = true);

(malli.registry.t_malli$registry29338.cljs$lang$ctorStr = "malli.registry/t_malli$registry29338");

(malli.registry.t_malli$registry29338.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry29338");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry29338.
 */
malli.registry.__GT_t_malli$registry29338 = (function malli$registry$__GT_t_malli$registry29338(m,fm,meta29339){
return (new malli.registry.t_malli$registry29338(m,fm,meta29339));
});


malli.registry.fast_registry = (function malli$registry$fast_registry(m){
var fm = m;
return (new malli.registry.t_malli$registry29338(m,fm,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry29378 = (function (m,meta29379){
this.m = m;
this.meta29379 = meta29379;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry29378.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29380,meta29379__$1){
var self__ = this;
var _29380__$1 = this;
return (new malli.registry.t_malli$registry29378(self__.m,meta29379__$1));
}));

(malli.registry.t_malli$registry29378.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29380){
var self__ = this;
var _29380__$1 = this;
return self__.meta29379;
}));

(malli.registry.t_malli$registry29378.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry29378.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return (self__.m.cljs$core$IFn$_invoke$arity$1 ? self__.m.cljs$core$IFn$_invoke$arity$1(type) : self__.m.call(null,type));
}));

(malli.registry.t_malli$registry29378.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.m;
}));

(malli.registry.t_malli$registry29378.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"m","m",-1021758608,null),new cljs.core.Symbol(null,"meta29379","meta29379",1823023570,null)], null);
}));

(malli.registry.t_malli$registry29378.cljs$lang$type = true);

(malli.registry.t_malli$registry29378.cljs$lang$ctorStr = "malli.registry/t_malli$registry29378");

(malli.registry.t_malli$registry29378.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry29378");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry29378.
 */
malli.registry.__GT_t_malli$registry29378 = (function malli$registry$__GT_t_malli$registry29378(m,meta29379){
return (new malli.registry.t_malli$registry29378(m,meta29379));
});


malli.registry.simple_registry = (function malli$registry$simple_registry(m){
return (new malli.registry.t_malli$registry29378(m,cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry.registry = (function malli$registry$registry(_QMARK_registry){
if((_QMARK_registry == null)){
return null;
} else {
if(malli.registry.registry_QMARK_(_QMARK_registry)){
return _QMARK_registry;
} else {
if(cljs.core.map_QMARK_(_QMARK_registry)){
return malli.registry.simple_registry(_QMARK_registry);
} else {
if((((!((_QMARK_registry == null))))?((((false) || ((cljs.core.PROTOCOL_SENTINEL === _QMARK_registry.malli$registry$Registry$))))?true:(((!_QMARK_registry.cljs$lang$protocol_mask$partition$))?cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry):false)):cljs.core.native_satisfies_QMARK_(malli.registry.Registry,_QMARK_registry))){
return _QMARK_registry;
} else {
return null;
}
}
}
}
});
malli.registry.registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(malli.registry.simple_registry(cljs.core.PersistentArrayMap.EMPTY));
malli.registry.set_default_registry_BANG_ = (function malli$registry$set_default_registry_BANG_(_QMARK_registry){
if((!((malli.registry.mode === "strict")))){
return cljs.core.reset_BANG_(malli.registry.registry_STAR_,malli.registry.registry(_QMARK_registry));
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("can't set default registry, invalid mode",new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"mode","mode",654403691),malli.registry.mode,new cljs.core.Keyword(null,"type","type",1174270348),malli.registry.type], null));
}
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry29400 = (function (meta29401){
this.meta29401 = meta29401;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry29400.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29402,meta29401__$1){
var self__ = this;
var _29402__$1 = this;
return (new malli.registry.t_malli$registry29400(meta29401__$1));
}));

(malli.registry.t_malli$registry29400.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29402){
var self__ = this;
var _29402__$1 = this;
return self__.meta29401;
}));

(malli.registry.t_malli$registry29400.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry29400.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(cljs.core.deref(malli.registry.registry_STAR_),type);
}));

(malli.registry.t_malli$registry29400.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(cljs.core.deref(malli.registry.registry_STAR_));
}));

(malli.registry.t_malli$registry29400.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29401","meta29401",628481379,null)], null);
}));

(malli.registry.t_malli$registry29400.cljs$lang$type = true);

(malli.registry.t_malli$registry29400.cljs$lang$ctorStr = "malli.registry/t_malli$registry29400");

(malli.registry.t_malli$registry29400.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry29400");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry29400.
 */
malli.registry.__GT_t_malli$registry29400 = (function malli$registry$__GT_t_malli$registry29400(meta29401){
return (new malli.registry.t_malli$registry29400(meta29401));
});


malli.registry.custom_default_registry = (function malli$registry$custom_default_registry(){
return (new malli.registry.t_malli$registry29400(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry29419 = (function (_QMARK_registries,registries,meta29420){
this._QMARK_registries = _QMARK_registries;
this.registries = registries;
this.meta29420 = meta29420;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry29419.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29421,meta29420__$1){
var self__ = this;
var _29421__$1 = this;
return (new malli.registry.t_malli$registry29419(self__._QMARK_registries,self__.registries,meta29420__$1));
}));

(malli.registry.t_malli$registry29419.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29421){
var self__ = this;
var _29421__$1 = this;
return self__.meta29420;
}));

(malli.registry.t_malli$registry29419.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry29419.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return cljs.core.some((function (p1__29416_SHARP_){
return malli.registry._schema(p1__29416_SHARP_,type);
}),self__.registries);
}));

(malli.registry.t_malli$registry29419.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.merge,cljs.core.map.cljs$core$IFn$_invoke$arity$2(malli.registry._schemas,cljs.core.reverse(self__.registries)));
}));

(malli.registry.t_malli$registry29419.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"?registries","?registries",2135368100,null),new cljs.core.Symbol(null,"registries","registries",-1366064418,null),new cljs.core.Symbol(null,"meta29420","meta29420",218552068,null)], null);
}));

(malli.registry.t_malli$registry29419.cljs$lang$type = true);

(malli.registry.t_malli$registry29419.cljs$lang$ctorStr = "malli.registry/t_malli$registry29419");

(malli.registry.t_malli$registry29419.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry29419");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry29419.
 */
malli.registry.__GT_t_malli$registry29419 = (function malli$registry$__GT_t_malli$registry29419(_QMARK_registries,registries,meta29420){
return (new malli.registry.t_malli$registry29419(_QMARK_registries,registries,meta29420));
});


malli.registry.composite_registry = (function malli$registry$composite_registry(var_args){
var args__5755__auto__ = [];
var len__5749__auto___29612 = arguments.length;
var i__5750__auto___29613 = (0);
while(true){
if((i__5750__auto___29613 < len__5749__auto___29612)){
args__5755__auto__.push((arguments[i__5750__auto___29613]));

var G__29620 = (i__5750__auto___29613 + (1));
i__5750__auto___29613 = G__29620;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic = (function (_QMARK_registries){
var registries = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(malli.registry.registry,_QMARK_registries);
return (new malli.registry.t_malli$registry29419(_QMARK_registries,registries,cljs.core.PersistentArrayMap.EMPTY));
}));

(malli.registry.composite_registry.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(malli.registry.composite_registry.cljs$lang$applyTo = (function (seq29417){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq29417));
}));


/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry29435 = (function (db,meta29436){
this.db = db;
this.meta29436 = meta29436;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry29435.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29437,meta29436__$1){
var self__ = this;
var _29437__$1 = this;
return (new malli.registry.t_malli$registry29435(self__.db,meta29436__$1));
}));

(malli.registry.t_malli$registry29435.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29437){
var self__ = this;
var _29437__$1 = this;
return self__.meta29436;
}));

(malli.registry.t_malli$registry29435.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry29435.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(cljs.core.deref(self__.db)),type);
}));

(malli.registry.t_malli$registry29435.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(cljs.core.deref(self__.db)));
}));

(malli.registry.t_malli$registry29435.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"db","db",-1661185010,null),new cljs.core.Symbol(null,"meta29436","meta29436",-2054854333,null)], null);
}));

(malli.registry.t_malli$registry29435.cljs$lang$type = true);

(malli.registry.t_malli$registry29435.cljs$lang$ctorStr = "malli.registry/t_malli$registry29435");

(malli.registry.t_malli$registry29435.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry29435");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry29435.
 */
malli.registry.__GT_t_malli$registry29435 = (function malli$registry$__GT_t_malli$registry29435(db,meta29436){
return (new malli.registry.t_malli$registry29435(db,meta29436));
});


malli.registry.mutable_registry = (function malli$registry$mutable_registry(db){
return (new malli.registry.t_malli$registry29435(db,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry29448 = (function (meta29449){
this.meta29449 = meta29449;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry29448.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29450,meta29449__$1){
var self__ = this;
var _29450__$1 = this;
return (new malli.registry.t_malli$registry29448(meta29449__$1));
}));

(malli.registry.t_malli$registry29448.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29450){
var self__ = this;
var _29450__$1 = this;
return self__.meta29449;
}));

(malli.registry.t_malli$registry29448.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry29448.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
if(cljs.core.var_QMARK_(type)){
return cljs.core.deref(type);
} else {
return null;
}
}));

(malli.registry.t_malli$registry29448.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return null;
}));

(malli.registry.t_malli$registry29448.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29449","meta29449",2104902028,null)], null);
}));

(malli.registry.t_malli$registry29448.cljs$lang$type = true);

(malli.registry.t_malli$registry29448.cljs$lang$ctorStr = "malli.registry/t_malli$registry29448");

(malli.registry.t_malli$registry29448.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry29448");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry29448.
 */
malli.registry.__GT_t_malli$registry29448 = (function malli$registry$__GT_t_malli$registry29448(meta29449){
return (new malli.registry.t_malli$registry29448(meta29449));
});


malli.registry.var_registry = (function malli$registry$var_registry(){
return (new malli.registry.t_malli$registry29448(cljs.core.PersistentArrayMap.EMPTY));
});
malli.registry._STAR_registry_STAR_ = cljs.core.PersistentArrayMap.EMPTY;

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry29471 = (function (meta29472){
this.meta29472 = meta29472;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry29471.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29473,meta29472__$1){
var self__ = this;
var _29473__$1 = this;
return (new malli.registry.t_malli$registry29471(meta29472__$1));
}));

(malli.registry.t_malli$registry29471.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29473){
var self__ = this;
var _29473__$1 = this;
return self__.meta29472;
}));

(malli.registry.t_malli$registry29471.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry29471.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,type){
var self__ = this;
var ___$1 = this;
return malli.registry._schema(malli.registry.registry(malli.registry._STAR_registry_STAR_),type);
}));

(malli.registry.t_malli$registry29471.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return malli.registry._schemas(malli.registry.registry(malli.registry._STAR_registry_STAR_));
}));

(malli.registry.t_malli$registry29471.getBasis = (function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"meta29472","meta29472",1774933946,null)], null);
}));

(malli.registry.t_malli$registry29471.cljs$lang$type = true);

(malli.registry.t_malli$registry29471.cljs$lang$ctorStr = "malli.registry/t_malli$registry29471");

(malli.registry.t_malli$registry29471.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry29471");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry29471.
 */
malli.registry.__GT_t_malli$registry29471 = (function malli$registry$__GT_t_malli$registry29471(meta29472){
return (new malli.registry.t_malli$registry29471(meta29472));
});


malli.registry.dynamic_registry = (function malli$registry$dynamic_registry(){
return (new malli.registry.t_malli$registry29471(cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
 * @implements {malli.registry.Registry}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
malli.registry.t_malli$registry29493 = (function (default_registry,provider,cache_STAR_,registry_STAR_,meta29494){
this.default_registry = default_registry;
this.provider = provider;
this.cache_STAR_ = cache_STAR_;
this.registry_STAR_ = registry_STAR_;
this.meta29494 = meta29494;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
(malli.registry.t_malli$registry29493.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_29495,meta29494__$1){
var self__ = this;
var _29495__$1 = this;
return (new malli.registry.t_malli$registry29493(self__.default_registry,self__.provider,self__.cache_STAR_,self__.registry_STAR_,meta29494__$1));
}));

(malli.registry.t_malli$registry29493.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_29495){
var self__ = this;
var _29495__$1 = this;
return self__.meta29494;
}));

(malli.registry.t_malli$registry29493.prototype.malli$registry$Registry$ = cljs.core.PROTOCOL_SENTINEL);

(malli.registry.t_malli$registry29493.prototype.malli$registry$Registry$_schema$arity$2 = (function (_,name){
var self__ = this;
var ___$1 = this;
var or__5025__auto__ = (function (){var fexpr__29517 = cljs.core.deref(self__.cache_STAR_);
return (fexpr__29517.cljs$core$IFn$_invoke$arity$1 ? fexpr__29517.cljs$core$IFn$_invoke$arity$1(name) : fexpr__29517.call(null,name));
})();
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var temp__5825__auto__ = (function (){var G__29518 = name;
var G__29519 = cljs.core.deref(self__.registry_STAR_);
return (self__.provider.cljs$core$IFn$_invoke$arity$2 ? self__.provider.cljs$core$IFn$_invoke$arity$2(G__29518,G__29519) : self__.provider.call(null,G__29518,G__29519));
})();
if(cljs.core.truth_(temp__5825__auto__)){
var schema = temp__5825__auto__;
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(self__.cache_STAR_,cljs.core.assoc,name,schema);

return schema;
} else {
return null;
}
}
}));

(malli.registry.t_malli$registry29493.prototype.malli$registry$Registry$_schemas$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref(self__.cache_STAR_);
}));

(malli.registry.t_malli$registry29493.getBasis = (function (){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"default-registry","default-registry",732204441,null),new cljs.core.Symbol(null,"provider","provider",1338474627,null),new cljs.core.Symbol(null,"cache*","cache*",-548597526,null),new cljs.core.Symbol(null,"registry*","registry*",-268031273,null),new cljs.core.Symbol(null,"meta29494","meta29494",1588480772,null)], null);
}));

(malli.registry.t_malli$registry29493.cljs$lang$type = true);

(malli.registry.t_malli$registry29493.cljs$lang$ctorStr = "malli.registry/t_malli$registry29493");

(malli.registry.t_malli$registry29493.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"malli.registry/t_malli$registry29493");
}));

/**
 * Positional factory function for malli.registry/t_malli$registry29493.
 */
malli.registry.__GT_t_malli$registry29493 = (function malli$registry$__GT_t_malli$registry29493(default_registry,provider,cache_STAR_,registry_STAR_,meta29494){
return (new malli.registry.t_malli$registry29493(default_registry,provider,cache_STAR_,registry_STAR_,meta29494));
});


malli.registry.lazy_registry = (function malli$registry$lazy_registry(default_registry,provider){
var cache_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(cljs.core.PersistentArrayMap.EMPTY);
var registry_STAR_ = cljs.core.atom.cljs$core$IFn$_invoke$arity$1(default_registry);
return cljs.core.reset_BANG_(registry_STAR_,malli.registry.composite_registry.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([default_registry,(new malli.registry.t_malli$registry29493(default_registry,provider,cache_STAR_,registry_STAR_,cljs.core.PersistentArrayMap.EMPTY))], 0)));
});
/**
 * finds a schema from a registry
 */
malli.registry.schema = (function malli$registry$schema(registry,type){
return malli.registry._schema(registry,type);
});
/**
 * finds all schemas from a registry
 */
malli.registry.schemas = (function malli$registry$schemas(registry){
return malli.registry._schemas(registry);
});

//# sourceMappingURL=malli.registry.js.map
