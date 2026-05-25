import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('okulary.util');
/**
 * Get iterator object from iterable.
 */
okulary.util.iterator = (function okulary$util$iterator(iterable){
var iterator_fn = (iterable[Symbol.iterator]);
return iterator_fn.call(iterable);
});
okulary.util.next = (function okulary$util$next(iterator){
return iterator.next();
});
okulary.util.done_QMARK_ = (function okulary$util$done_QMARK_(chunk){
return chunk.done;
});
okulary.util.value = (function okulary$util$value(chunk){
return chunk.value;
});
okulary.util.doiter = (function okulary$util$doiter(iterable,f){
var iterator = okulary.util.iterator(iterable);
var chunk = okulary.util.next(iterator);
while(true){
if(okulary.util.done_QMARK_(chunk)){
return null;
} else {
var G__45096_45106 = okulary.util.value(chunk);
(f.cljs$core$IFn$_invoke$arity$1 ? f.cljs$core$IFn$_invoke$arity$1(G__45096_45106) : f.call(null,G__45096_45106));

var G__45107 = okulary.util.next(iterator);
chunk = G__45107;
continue;
}
break;
}
});

//# sourceMappingURL=okulary.util.js.map
