import "./cljs_env.js";
import "./cljs.core.js";
import "./app.main.data.event.js";
import "./app.main.store.js";
goog.provide('app.plugins.system_events');
app.plugins.system_events.event = (function app$plugins$system_events$event(var_args){
var args__5755__auto__ = [];
var len__5749__auto___89672 = arguments.length;
var i__5750__auto___89673 = (0);
while(true){
if((i__5750__auto___89673 < len__5749__auto___89672)){
args__5755__auto__.push((arguments[i__5750__auto___89673]));

var G__89674 = (i__5750__auto___89673 + (1));
i__5750__auto___89673 = G__89674;
continue;
} else {
}
break;
}

var argseq__5756__auto__ = ((((2) < args__5755__auto__.length))?(new cljs.core.IndexedSeq(args__5755__auto__.slice((2)),(0),null)):null);
return app.plugins.system_events.event.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),argseq__5756__auto__);
});

(app.plugins.system_events.event.cljs$core$IFn$_invoke$arity$variadic = (function (plugin_id,name,p__89670){
var map__89671 = p__89670;
var map__89671__$1 = cljs.core.__destructure_map(map__89671);
var props = map__89671__$1;
var plugin_data = cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(cljs.core.deref(app.main.store.state),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"profile","profile",-545963874),new cljs.core.Keyword(null,"props","props",453281727),new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"data","data",-232669377),plugin_id], null));
return app.main.data.event.event(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(props,new cljs.core.Keyword("app.main.data.event","name","app.main.data.event/name",-541742837),name),new cljs.core.Keyword("app.main.data.event","origin","app.main.data.event/origin",-1096683174),"plugin"),new cljs.core.Keyword("app.main.data.event","context","app.main.data.event/context",-411684139),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"plugin-name","plugin-name",1482210260),new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(plugin_data),new cljs.core.Keyword(null,"plugin-url","plugin-url",1542869449),new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(plugin_data)], null)));
}));

(app.plugins.system_events.event.cljs$lang$maxFixedArity = (2));

/** @this {Function} */
(app.plugins.system_events.event.cljs$lang$applyTo = (function (seq89667){
var G__89668 = cljs.core.first(seq89667);
var seq89667__$1 = cljs.core.next(seq89667);
var G__89669 = cljs.core.first(seq89667__$1);
var seq89667__$2 = cljs.core.next(seq89667__$1);
var self__5734__auto__ = this;
return self__5734__auto__.cljs$core$IFn$_invoke$arity$variadic(G__89668,G__89669,seq89667__$2);
}));


//# sourceMappingURL=app.plugins.system_events.js.map
