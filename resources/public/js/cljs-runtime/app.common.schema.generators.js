import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.math.js";
import "./app.common.schema.registry.js";
import "./app.common.uri.js";
import "./app.common.uuid.js";
import "./clojure.test.check.generators.js";
import "./cuerdas.core.js";
import "./malli.generator.js";
goog.provide('app.common.schema.generators');
app.common.schema.generators.sample = (function app$common$schema$generators$sample(var_args){
var G__39627 = arguments.length;
switch (G__39627) {
case 1:
return app.common.schema.generators.sample.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.schema.generators.sample.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.schema.generators.sample.cljs$core$IFn$_invoke$arity$1 = (function (g){
return malli.generator.sample.cljs$core$IFn$_invoke$arity$2(g,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registry","registry",1021159018),app.common.schema.registry.default_registry], null));
}));

(app.common.schema.generators.sample.cljs$core$IFn$_invoke$arity$2 = (function (g,opts){
return malli.generator.sample.cljs$core$IFn$_invoke$arity$2(g,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"registry","registry",1021159018),app.common.schema.registry.default_registry));
}));

(app.common.schema.generators.sample.cljs$lang$maxFixedArity = 2);

app.common.schema.generators.generate = (function app$common$schema$generators$generate(var_args){
var G__39629 = arguments.length;
switch (G__39629) {
case 1:
return app.common.schema.generators.generate.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.schema.generators.generate.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.schema.generators.generate.cljs$core$IFn$_invoke$arity$1 = (function (g){
return malli.generator.generate.cljs$core$IFn$_invoke$arity$2(g,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registry","registry",1021159018),app.common.schema.registry.default_registry], null));
}));

(app.common.schema.generators.generate.cljs$core$IFn$_invoke$arity$2 = (function (g,opts){
return malli.generator.generate.cljs$core$IFn$_invoke$arity$2(g,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"registry","registry",1021159018),app.common.schema.registry.default_registry));
}));

(app.common.schema.generators.generate.cljs$lang$maxFixedArity = 2);

app.common.schema.generators.generator = (function app$common$schema$generators$generator(var_args){
var G__39631 = arguments.length;
switch (G__39631) {
case 1:
return app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$1 = (function (s){
return malli.generator.generator.cljs$core$IFn$_invoke$arity$2(s,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"registry","registry",1021159018),app.common.schema.registry.default_registry], null));
}));

(app.common.schema.generators.generator.cljs$core$IFn$_invoke$arity$2 = (function (s,opts){
return malli.generator.generator.cljs$core$IFn$_invoke$arity$2(s,cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(opts,new cljs.core.Keyword(null,"registry","registry",1021159018),app.common.schema.registry.default_registry));
}));

(app.common.schema.generators.generator.cljs$lang$maxFixedArity = 2);

app.common.schema.generators.small_double = (function app$common$schema$generators$small_double(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39655 = arguments.length;
var i__5750__auto___39656 = (0);
while(true){
if((i__5750__auto___39656 < len__5749__auto___39655)){
args__5755__auto__.push((arguments[i__5750__auto___39656]));

var G__39657 = (i__5750__auto___39656 + (1));
i__5750__auto___39656 = G__39657;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.schema.generators.small_double.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.schema.generators.small_double.cljs$core$IFn$_invoke$arity$variadic = (function (p__39634){
var map__39635 = p__39634;
var map__39635__$1 = cljs.core.__destructure_map(map__39635);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39635__$1,new cljs.core.Keyword(null,"min","min",444991522),(-100));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39635__$1,new cljs.core.Keyword(null,"max","max",61366548),(100));
return clojure.test.check.generators.fmap((function (p1__39632_SHARP_){
return app.common.math.precision(p1__39632_SHARP_,(2));
}),clojure.test.check.generators.double_STAR_(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max,new cljs.core.Keyword(null,"infinite?","infinite?",-2017886608),false,new cljs.core.Keyword(null,"NaN?","NaN?",-1917767651),false], null)));
}));

(app.common.schema.generators.small_double.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.schema.generators.small_double.cljs$lang$applyTo = (function (seq39633){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39633));
}));

app.common.schema.generators.small_int = (function app$common$schema$generators$small_int(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39658 = arguments.length;
var i__5750__auto___39659 = (0);
while(true){
if((i__5750__auto___39659 < len__5749__auto___39658)){
args__5755__auto__.push((arguments[i__5750__auto___39659]));

var G__39660 = (i__5750__auto___39659 + (1));
i__5750__auto___39659 = G__39660;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.schema.generators.small_int.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.schema.generators.small_int.cljs$core$IFn$_invoke$arity$variadic = (function (p__39637){
var map__39638 = p__39637;
var map__39638__$1 = cljs.core.__destructure_map(map__39638);
var min = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39638__$1,new cljs.core.Keyword(null,"min","min",444991522),(-100));
var max = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__39638__$1,new cljs.core.Keyword(null,"max","max",61366548),(100));
return clojure.test.check.generators.large_integer_STAR_(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min","min",444991522),min,new cljs.core.Keyword(null,"max","max",61366548),max], null));
}));

(app.common.schema.generators.small_int.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.schema.generators.small_int.cljs$lang$applyTo = (function (seq39636){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39636));
}));

app.common.schema.generators.word_string = (function app$common$schema$generators$word_string(){
var $$ = clojure.test.check.generators.string_ascii;
var $$__$1 = clojure.test.check.generators.resize((10),$$);
var $$__$2 = clojure.test.check.generators.fmap((function (v){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,cljs.core.re_seq(/[A-Za-z]+/,v));
}),$$__$1);
var $$__$3 = clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3((function (v){
return (cljs.core.count(v) >= (4));
}),$$__$2,(100));
return clojure.test.check.generators.fmap(cuerdas.core.lower,$$__$3);
});
app.common.schema.generators.word_keyword = (function app$common$schema$generators$word_keyword(){
return clojure.test.check.generators.fmap(cljs.core.keyword,app.common.schema.generators.word_string());
});
app.common.schema.generators.email = (function app$common$schema$generators$email(){
return clojure.test.check.generators.fmap((function (v){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(v),"@example.net"].join('');
}),clojure.test.check.generators.fmap(cuerdas.core.lower,clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$2((function (v){
return (cljs.core.count(v) >= (4));
}),app.common.schema.generators.word_string())));
});
app.common.schema.generators.uri = (function app$common$schema$generators$uri(){
return clojure.test.check.generators.bind(clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, ["http","https"], null)),(function (scheme){
return clojure.test.check.generators.bind((function (){var $ = app.common.schema.generators.word_string();
var $__$1 = clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3((function (x){
return (cljs.core.count(x) > (5));
}),$,(100));
return clojure.test.check.generators.fmap(cuerdas.core.lower,$__$1);
})(),(function (domain){
return clojure.test.check.generators.bind(clojure.test.check.generators.elements(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, ["net","com","org","app","io"], null)),(function (ext){
var val__35816__auto__ = app.common.uri.uri([cljs.core.str.cljs$core$IFn$_invoke$arity$1(scheme),"://",cljs.core.str.cljs$core$IFn$_invoke$arity$1(domain),".",cljs.core.str.cljs$core$IFn$_invoke$arity$1(ext)].join(''));
if(clojure.test.check.generators.generator_QMARK_(val__35816__auto__)){
return val__35816__auto__;
} else {
return clojure.test.check.generators.return$(val__35816__auto__);
}
}));
}));
}));
});
app.common.schema.generators.uuid = (function app$common$schema$generators$uuid(){
return clojure.test.check.generators.fmap((function (_){
return app.common.uuid.next();
}),app.common.schema.generators.small_int());
});
/**
 * Given a collection, generates "subsequences" which are sequences
 *   of (not necessarily contiguous) elements from the original
 *   collection, in the same order. For collections of distinct elements
 *   this is effectively a subset generator, with an ordering guarantee.
 */
app.common.schema.generators.subseq = (function app$common$schema$generators$subseq(var_args){
var G__39642 = arguments.length;
switch (G__39642) {
case 1:
return app.common.schema.generators.subseq.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.schema.generators.subseq.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.schema.generators.subseq.cljs$core$IFn$_invoke$arity$1 = (function (elements){
return app.common.schema.generators.subseq.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,elements);
}));

(app.common.schema.generators.subseq.cljs$core$IFn$_invoke$arity$2 = (function (dest,elements){
return clojure.test.check.generators.fmap((function (bools){
return cljs.core.into.cljs$core$IFn$_invoke$arity$3(dest,cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1(cljs.core.first),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.second)),cljs.core.map.cljs$core$IFn$_invoke$arity$3(cljs.core.list,bools,elements));
}),cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,cljs.core.repeat.cljs$core$IFn$_invoke$arity$2(cljs.core.count(elements),clojure.test.check.generators.boolean$)));
}));

(app.common.schema.generators.subseq.cljs$lang$maxFixedArity = 2);

app.common.schema.generators.map_of = (function app$common$schema$generators$map_of(var_args){
var G__39644 = arguments.length;
switch (G__39644) {
case 2:
return app.common.schema.generators.map_of.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.schema.generators.map_of.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.schema.generators.map_of.cljs$core$IFn$_invoke$arity$2 = (function (kg,vg){
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3(kg,vg,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"min-elements","min-elements",949370780),(1),new cljs.core.Keyword(null,"max-elements","max-elements",433034073),(3)], null));
}));

(app.common.schema.generators.map_of.cljs$core$IFn$_invoke$arity$3 = (function (kg,vg,opts){
return clojure.test.check.generators.map.cljs$core$IFn$_invoke$arity$3(kg,vg,opts);
}));

(app.common.schema.generators.map_of.cljs$lang$maxFixedArity = 3);

app.common.schema.generators.elements = (function app$common$schema$generators$elements(s){
return clojure.test.check.generators.elements(s);
});
app.common.schema.generators.one_of = (function app$common$schema$generators$one_of(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39665 = arguments.length;
var i__5750__auto___39666 = (0);
while(true){
if((i__5750__auto___39666 < len__5749__auto___39665)){
args__5755__auto__.push((arguments[i__5750__auto___39666]));

var G__39667 = (i__5750__auto___39666 + (1));
i__5750__auto___39666 = G__39667;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.schema.generators.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.schema.generators.one_of.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return clojure.test.check.generators.one_of(cljs.core.into.cljs$core$IFn$_invoke$arity$2(cljs.core.PersistentVector.EMPTY,gens));
}));

(app.common.schema.generators.one_of.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.schema.generators.one_of.cljs$lang$applyTo = (function (seq39645){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39645));
}));

app.common.schema.generators.fmap = (function app$common$schema$generators$fmap(f,g){
return clojure.test.check.generators.fmap(f,g);
});
app.common.schema.generators.filter = (function app$common$schema$generators$filter(pred,gen){
return clojure.test.check.generators.such_that.cljs$core$IFn$_invoke$arity$3(pred,gen,(100));
});
app.common.schema.generators.mcat = (function app$common$schema$generators$mcat(f,g){
return clojure.test.check.generators.bind(g,f);
});
app.common.schema.generators.tuple = (function app$common$schema$generators$tuple(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39668 = arguments.length;
var i__5750__auto___39669 = (0);
while(true){
if((i__5750__auto___39669 < len__5749__auto___39668)){
args__5755__auto__.push((arguments[i__5750__auto___39669]));

var G__39670 = (i__5750__auto___39669 + (1));
i__5750__auto___39669 = G__39670;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.schema.generators.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.schema.generators.tuple.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.tuple,opts);
}));

(app.common.schema.generators.tuple.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.schema.generators.tuple.cljs$lang$applyTo = (function (seq39646){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39646));
}));

app.common.schema.generators.vector = (function app$common$schema$generators$vector(var_args){
var args__5755__auto__ = [];
var len__5749__auto___39673 = arguments.length;
var i__5750__auto___39674 = (0);
while(true){
if((i__5750__auto___39674 < len__5749__auto___39673)){
args__5755__auto__.push((arguments[i__5750__auto___39674]));

var G__39675 = (i__5750__auto___39674 + (1));
i__5750__auto___39674 = G__39675;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((0) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((0)),(0),null)):null);
return app.common.schema.generators.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__5756__auto__);
});

(app.common.schema.generators.vector.cljs$core$IFn$_invoke$arity$variadic = (function (opts){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(clojure.test.check.generators.vector,opts);
}));

(app.common.schema.generators.vector.cljs$lang$maxFixedArity = (0));

/** @this {Function} */
(app.common.schema.generators.vector.cljs$lang$applyTo = (function (seq39647){
var self__5735__auto__ = this;
return self__5735__auto__.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq39647));
}));

app.common.schema.generators.set = (function app$common$schema$generators$set(g){
return clojure.test.check.generators.set.cljs$core$IFn$_invoke$arity$1(g);
});
app.common.schema.generators.boolean$ = clojure.test.check.generators.boolean$;
app.common.schema.generators.text = app.common.schema.generators.word_string();
app.common.schema.generators.double$ = app.common.schema.generators.small_double();
app.common.schema.generators.int$ = app.common.schema.generators.small_int();
app.common.schema.generators.keyword = app.common.schema.generators.word_keyword();
app.common.schema.generators.any = clojure.test.check.generators.one_of(new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [app.common.schema.generators.text,app.common.schema.generators.boolean$,app.common.schema.generators.double$,app.common.schema.generators.int$,app.common.schema.generators.keyword], null));
app.common.schema.generators.not_empty = clojure.test.check.generators.not_empty;

//# sourceMappingURL=app.common.schema.generators.js.map
