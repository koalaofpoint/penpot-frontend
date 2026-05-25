import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('app.common.data.undo_stack');
if((typeof app !== 'undefined') && (typeof app.common !== 'undefined') && (typeof app.common.data !== 'undefined') && (typeof app.common.data.undo_stack !== 'undefined') && (typeof app.common.data.undo_stack.MAX_UNDO_SIZE !== 'undefined')){
} else {
app.common.data.undo_stack.MAX_UNDO_SIZE = (100);
}
app.common.data.undo_stack.make_stack = (function app$common$data$undo_stack$make_stack(){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),(-1),new cljs.core.Keyword(null,"items","items",1031954938),cljs.core.PersistentVector.EMPTY], null);
});
app.common.data.undo_stack.peek = (function app$common$data$undo_stack$peek(p__70064){
var map__70065 = p__70064;
var map__70065__$1 = cljs.core.__destructure_map(map__70065);
var stack = map__70065__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70065__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70065__$1,new cljs.core.Keyword(null,"items","items",1031954938));
if((((index >= (0))) && ((index < cljs.core.count(items))))){
return cljs.core.nth.cljs$core$IFn$_invoke$arity$2(items,index);
} else {
return null;
}
});
app.common.data.undo_stack.append = (function app$common$data$undo_stack$append(p__70066,value){
var map__70067 = p__70066;
var map__70067__$1 = cljs.core.__destructure_map(map__70067);
var stack = map__70067__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70067__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70067__$1,new cljs.core.Keyword(null,"items","items",1031954938));
if((((!((stack == null)))) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(value,app.common.data.undo_stack.peek(stack))))){
var items__$1 = (function (){var G__70068 = items;
var G__70068__$1 = (((index > (0)))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__70068,(0),(index + (1))):G__70068);
var G__70068__$2 = ((((index + (2)) > app.common.data.undo_stack.MAX_UNDO_SIZE))?cljs.core.subvec.cljs$core$IFn$_invoke$arity$3(G__70068__$1,(1),(index + (1))):G__70068__$1);
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__70068__$2,value);

})();
var index__$1 = (function (){var x__5113__auto__ = (app.common.data.undo_stack.MAX_UNDO_SIZE - (1));
var y__5114__auto__ = (index + (1));
return ((x__5113__auto__ < y__5114__auto__) ? x__5113__auto__ : y__5114__auto__);
})();
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"index","index",-1531685915),index__$1,new cljs.core.Keyword(null,"items","items",1031954938),items__$1], null);
} else {
return stack;
}
});
app.common.data.undo_stack.fixup = (function app$common$data$undo_stack$fixup(p__70069,value){
var map__70070 = p__70069;
var map__70070__$1 = cljs.core.__destructure_map(map__70070);
var stack = map__70070__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70070__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
return cljs.core.assoc_in(stack,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"items","items",1031954938),index], null),value);
});
app.common.data.undo_stack.undo = (function app$common$data$undo_stack$undo(stack){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(stack,new cljs.core.Keyword(null,"index","index",-1531685915),(function (p1__70071_SHARP_){
var x__5110__auto__ = (0);
var y__5111__auto__ = (p1__70071_SHARP_ - (1));
return ((x__5110__auto__ > y__5111__auto__) ? x__5110__auto__ : y__5111__auto__);
}));
});
app.common.data.undo_stack.redo = (function app$common$data$undo_stack$redo(p__70072){
var map__70073 = p__70072;
var map__70073__$1 = cljs.core.__destructure_map(map__70073);
var stack = map__70073__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70073__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
var items = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70073__$1,new cljs.core.Keyword(null,"items","items",1031954938));
var G__70074 = stack;
if((index < (cljs.core.count(items) - (1)))){
return cljs.core.update.cljs$core$IFn$_invoke$arity$3(G__70074,new cljs.core.Keyword(null,"index","index",-1531685915),cljs.core.inc);
} else {
return G__70074;
}
});
app.common.data.undo_stack.size = (function app$common$data$undo_stack$size(p__70075){
var map__70076 = p__70075;
var map__70076__$1 = cljs.core.__destructure_map(map__70076);
var stack = map__70076__$1;
var index = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__70076__$1,new cljs.core.Keyword(null,"index","index",-1531685915));
return (index + (1));
});

//# sourceMappingURL=app.common.data.undo_stack.js.map
