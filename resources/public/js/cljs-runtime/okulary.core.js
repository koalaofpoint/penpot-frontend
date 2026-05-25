import "./cljs_env.js";
import "./cljs.core.js";
import "./okulary.util.js";
goog.provide('okulary.core');
/**
 * A key based selector.
 */
okulary.core.key = (function okulary$core$key(k){
return (function (v){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(v,k);
});
});
okulary.core.in$ = (function okulary$core$in(kv){
return (function (v){
return cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(v,kv);
});
});

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IEquiv}
 * @implements {cljs.core.IHash}
 * @implements {cljs.core.IReset}
 * @implements {cljs.core.ISwap}
 * @implements {cljs.core.IDeref}
*/
okulary.core.Atom = (function (state,watches){
this.state = state;
this.watches = watches;
this.cljs$lang$protocol_mask$partition1$ = 114690;
this.cljs$lang$protocol_mask$partition0$ = 6324224;
});
(okulary.core.Atom.prototype.equiv = (function (other){
var self__ = this;
var self = this;
return self.cljs$core$IEquiv$_equiv$arity$2(null,other);
}));

(okulary.core.Atom.prototype.cljs$core$IEquiv$_equiv$arity$2 = (function (o,other){
var self__ = this;
var o__$1 = this;
return (o__$1 === other);
}));

(okulary.core.Atom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.state;
}));

(okulary.core.Atom.prototype.cljs$core$IReset$_reset_BANG_$arity$2 = (function (self,newval){
var self__ = this;
var self__$1 = this;
var oldval = self__.state;
(self__$1.state = newval);

if((self__.watches.size > (0))){
self__$1.cljs$core$IWatchable$_notify_watches$arity$3(null,oldval,newval);
} else {
}

return newval;
}));

(okulary.core.Atom.prototype.cljs$core$ISwap$_swap_BANG_$arity$2 = (function (self,f){
var self__ = this;
var self__$1 = this;
return self__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(self__.state) : f.call(null,self__.state)));
}));

(okulary.core.Atom.prototype.cljs$core$ISwap$_swap_BANG_$arity$3 = (function (self,f,x){
var self__ = this;
var self__$1 = this;
return self__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$2 ? f.cljs$core$IFn$_invoke$arity$2(self__.state,x) : f.call(null,self__.state,x)));
}));

(okulary.core.Atom.prototype.cljs$core$ISwap$_swap_BANG_$arity$4 = (function (self,f,x,y){
var self__ = this;
var self__$1 = this;
return self__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,(f.cljs$core$IFn$_invoke$arity$3 ? f.cljs$core$IFn$_invoke$arity$3(self__.state,x,y) : f.call(null,self__.state,x,y)));
}));

(okulary.core.Atom.prototype.cljs$core$ISwap$_swap_BANG_$arity$5 = (function (self,f,x,y,more){
var self__ = this;
var self__$1 = this;
return self__$1.cljs$core$IReset$_reset_BANG_$arity$2(null,cljs.core.apply.cljs$core$IFn$_invoke$arity$5(f,self__.state,x,y,more));
}));

(okulary.core.Atom.prototype.cljs$core$IWatchable$_notify_watches$arity$3 = (function (self,oldval,newval){
var self__ = this;
var self__$1 = this;
return okulary.util.doiter(self__.watches.entries(),(function (n){
var f = (n[(1)]);
var k = (n[(0)]);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(k,self__$1,oldval,newval) : f.call(null,k,self__$1,oldval,newval));
}));
}));

(okulary.core.Atom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (self,key,f){
var self__ = this;
var self__$1 = this;
self__.watches.set(key,f);

return self__$1;
}));

(okulary.core.Atom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (self,key){
var self__ = this;
var self__$1 = this;
return self__.watches.delete(key);
}));

(okulary.core.Atom.prototype.cljs$core$IHash$_hash$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
return goog.getUid(self__$1);
}));

(okulary.core.Atom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"state","state",-348086572,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null)], null);
}));

(okulary.core.Atom.cljs$lang$type = true);

(okulary.core.Atom.cljs$lang$ctorStr = "okulary.core/Atom");

(okulary.core.Atom.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"okulary.core/Atom");
}));

/**
 * Positional factory function for okulary.core/Atom.
 */
okulary.core.__GT_Atom = (function okulary$core$__GT_Atom(state,watches){
return (new okulary.core.Atom(state,watches));
});

/**
 * Creates and returns an Atom with an initial value of x.
 */
okulary.core.atom = (function okulary$core$atom(x){
return (new okulary.core.Atom(x,(new Map())));
});
okulary.core.EMPTY = Symbol("empty");

/**
* @constructor
 * @implements {cljs.core.IWatchable}
 * @implements {cljs.core.IAtom}
 * @implements {cljs.core.IDeref}
*/
okulary.core.DerivedAtom = (function (id,selector,source,equals_QMARK_,watches,srccache,cache){
this.id = id;
this.selector = selector;
this.source = source;
this.equals_QMARK_ = equals_QMARK_;
this.watches = watches;
this.srccache = srccache;
this.cache = cache;
this.cljs$lang$protocol_mask$partition1$ = 16386;
this.cljs$lang$protocol_mask$partition0$ = 32768;
});
(okulary.core.DerivedAtom.prototype.cljs$core$IDeref$_deref$arity$1 = (function (self){
var self__ = this;
var self__$1 = this;
var source__$1 = cljs.core.deref(self__.source);
if((((self__.srccache === source__$1)) && ((!((self__.cache === okulary.core.EMPTY)))))){
return self__.cache;
} else {
var selector_fn = self__.selector;
var result = (selector_fn.cljs$core$IFn$_invoke$arity$1 ? selector_fn.cljs$core$IFn$_invoke$arity$1(source__$1) : selector_fn.call(null,source__$1));
(self__.srccache = source__$1);

(self__.cache = result);

return result;
}
}));

(okulary.core.DerivedAtom.prototype.cljs$core$IWatchable$_add_watch$arity$3 = (function (self,key,cb){
var self__ = this;
var self__$1 = this;
self__.watches.set(key,cb);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.watches.size,(1))){
cljs.core.add_watch(self__.source,self__.id,(function (_,___$1,old_source_value,new_source_value){
if((old_source_value === new_source_value)){
return null;
} else {
var equals_fn = self__.equals_QMARK_;
var selector_fn = self__.selector;
var new_value = (selector_fn.cljs$core$IFn$_invoke$arity$1 ? selector_fn.cljs$core$IFn$_invoke$arity$1(new_source_value) : selector_fn.call(null,new_source_value));
var old_value = (selector_fn.cljs$core$IFn$_invoke$arity$1 ? selector_fn.cljs$core$IFn$_invoke$arity$1(old_source_value) : selector_fn.call(null,old_source_value));
(self__.srccache = new_source_value);

(self__.cache = new_value);

if((equals_fn.cljs$core$IFn$_invoke$arity$2 ? equals_fn.cljs$core$IFn$_invoke$arity$2(new_value,old_value) : equals_fn.call(null,new_value,old_value))){
return null;
} else {
return okulary.util.doiter(self__.watches.entries(),(function (n){
var f = (n[(1)]);
var k = (n[(0)]);
return (f.cljs$core$IFn$_invoke$arity$4 ? f.cljs$core$IFn$_invoke$arity$4(k,self__$1,old_value,new_value) : f.call(null,k,self__$1,old_value,new_value));
}));
}
}
}));
} else {
}

return self__$1;
}));

(okulary.core.DerivedAtom.prototype.cljs$core$IWatchable$_remove_watch$arity$2 = (function (self,key){
var self__ = this;
var self__$1 = this;
self__.watches.delete(key);

if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(self__.watches.size,(0))){
cljs.core.remove_watch(self__.source,self__.id);
} else {
}

return self__$1;
}));

(okulary.core.DerivedAtom.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"id","id",252129435,null),new cljs.core.Symbol(null,"selector","selector",-1891906903,null),new cljs.core.Symbol(null,"source","source",1206599988,null),new cljs.core.Symbol(null,"equals?","equals?",-2078448756,null),new cljs.core.Symbol(null,"watches","watches",1367433992,null),cljs.core.with_meta(new cljs.core.Symbol(null,"srccache","srccache",1824766780,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"cache","cache",403508473,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
}));

(okulary.core.DerivedAtom.cljs$lang$type = true);

(okulary.core.DerivedAtom.cljs$lang$ctorStr = "okulary.core/DerivedAtom");

(okulary.core.DerivedAtom.cljs$lang$ctorPrWriter = (function (this__5310__auto__,writer__5311__auto__,opt__5312__auto__){
return cljs.core._write(writer__5311__auto__,"okulary.core/DerivedAtom");
}));

/**
 * Positional factory function for okulary.core/DerivedAtom.
 */
okulary.core.__GT_DerivedAtom = (function okulary$core$__GT_DerivedAtom(id,selector,source,equals_QMARK_,watches,srccache,cache){
return (new okulary.core.DerivedAtom(id,selector,source,equals_QMARK_,watches,srccache,cache));
});

/**
 * Create a derived atom from an other atom with the provided lense.
 * 
 *   The returned atom is lazy, so no code is executed until user
 *   requires it.
 * 
 *   By default the derived atom does not trigger updates if the data
 *   does not affects to it (determined by selector), but this behavior
 *   can be deactivated passing `:equals?` to `false` on the third
 *   options parameter. You also may pass `=` as `equals?` parameter if
 *   you want value comparison instead of reference comparison with
 *   `identical?`.
 */
okulary.core.derived = (function okulary$core$derived(var_args){
var G__46358 = arguments.length;
switch (G__46358) {
case 2:
return okulary.core.derived.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(okulary.core.derived.cljs$core$IFn$_invoke$arity$2 = (function (selector,source){
return okulary.core.derived.cljs$core$IFn$_invoke$arity$3(selector,source,cljs.core.identical_QMARK_);
}));

(okulary.core.derived.cljs$core$IFn$_invoke$arity$3 = (function (selector,source,equals_QMARK_){
return (new okulary.core.DerivedAtom(Symbol("okulary"),selector,source,equals_QMARK_,(new Map()),okulary.core.EMPTY,okulary.core.EMPTY));
}));

(okulary.core.derived.cljs$lang$maxFixedArity = 3);


//# sourceMappingURL=okulary.core.js.map
