import "./cljs_env.js";
import "./cljs.core.js";
import "./goog.array.array.js";
goog.provide('app.util.array');
goog.scope(function(){
  app.util.array.goog$module$goog$array = goog.module.get('goog.array');
});
/**
 * A conj like function for js arrays.
 */
app.util.array.conj = (function app$util$array$conj(a,v){
return [...a, v];
});
/**
 * A conj! like function for js arrays.
 */
app.util.array.conj_BANG_ = (function app$util$array$conj_BANG_(var_args){
var G__68604 = arguments.length;
switch (G__68604) {
case 2:
return app.util.array.conj_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.util.array.conj_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.util.array.conj_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return app.util.array.conj_BANG_.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return app.util.array.conj_BANG_.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
case 7:
return app.util.array.conj_BANG_.cljs$core$IFn$_invoke$arity$7((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]),(arguments[(6)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.util.array.conj_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (a,v){
a.push(v);

return a;
}));

(app.util.array.conj_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (a,v1,v2){
a.push(v1,v2);

return a;
}));

(app.util.array.conj_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (a,v1,v2,v3){
a.push(v1,v2,v3);

return a;
}));

(app.util.array.conj_BANG_.cljs$core$IFn$_invoke$arity$5 = (function (a,v1,v2,v3,v4){
a.push(v1,v2,v3,v4);

return a;
}));

(app.util.array.conj_BANG_.cljs$core$IFn$_invoke$arity$6 = (function (a,v1,v2,v3,v4,v5){
a.push(v1,v2,v3,v4,v5);

return a;
}));

(app.util.array.conj_BANG_.cljs$core$IFn$_invoke$arity$7 = (function (a,v1,v2,v3,v4,v5,v6){
a.push(v1,v2,v3,v4,v5,v6);

return a;
}));

(app.util.array.conj_BANG_.cljs$lang$maxFixedArity = 7);

/**
 * If `o` is an array, returns it as-is, if not, wrap into an array.
 */
app.util.array.normalize_to_array = (function app$util$array$normalize_to_array(o){
if(cljs.core.array_QMARK_(o)){
return o;
} else {
return [o];
}
});
app.util.array.without_nils = (function app$util$array$without_nils(o){
return o.filter((function (v){
return (!((v == null)));
}));
});
/**
 * A specific filter for js arrays.
 */
app.util.array.filter = (function app$util$array$filter(pred,o){
return o.filter(pred);
});
app.util.array.map = (function app$util$array$map(f,a){
return a.map(f);
});
app.util.array.reduce = (function app$util$array$reduce(f,init,val){
return val.reduce(f,init);
});
app.util.array.find_index = (function app$util$array$find_index(f,v){
return v.findIndex(f);
});
app.util.array.find = (function app$util$array$find(f,v){
return v.find(f);
});
app.util.array.sort_BANG_ = (function app$util$array$sort_BANG_(a){
app.util.array.goog$module$goog$array.sort(a,cljs.core.compare);

return a;
});

//# sourceMappingURL=app.util.array.js.map
