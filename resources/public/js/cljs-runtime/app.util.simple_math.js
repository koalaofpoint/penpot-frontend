import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.exceptions.js";
import "./cljs.spec.alpha.js";
import "./clojure.string.js";
import "./cuerdas.core.js";
import "./instaparse.core.js";
goog.provide('app.util.simple_math');
app.util.simple_math.parser = instaparse.core.parser("opt-expr = '' | expr\n     expr = term (<spaces> ('+'|'-') <spaces> expr)* |\n            ('+'|'-'|'*'|'/') <spaces> factor\n     term = factor (<spaces> ('*'|'/') <spaces> term)*\n     factor = number | ('(' <spaces> expr <spaces> ')')\n     number = #'[0-9]*[.,]?[0-9]+%?'\n     spaces = ' '*");
app.util.simple_math.interpret = (function app$util$simple_math$interpret(tree,init_value){
var token = cljs.core.first(tree);
var args = cljs.core.rest(tree);
var G__77623 = token;
var G__77623__$1 = (((G__77623 instanceof cljs.core.Keyword))?G__77623.fqn:null);
switch (G__77623__$1) {
case "opt-expr":
if(cljs.core.empty_QMARK_(args)){
return null;
} else {
var G__77624 = cljs.core.first(args);
var G__77625 = init_value;
return (app.util.simple_math.interpret.cljs$core$IFn$_invoke$arity$2 ? app.util.simple_math.interpret.cljs$core$IFn$_invoke$arity$2(G__77624,G__77625) : app.util.simple_math.interpret.call(null,G__77624,G__77625));
}

break;
case "expr":
if(cljs.core.truth_(clojure.string.index_of.cljs$core$IFn$_invoke$arity$2("+-*/",cljs.core.first(args)))){
var operator = cljs.core.first(args);
var second_value = (function (){var G__77626 = cljs.core.second(args);
var G__77627 = init_value;
return (app.util.simple_math.interpret.cljs$core$IFn$_invoke$arity$2 ? app.util.simple_math.interpret.cljs$core$IFn$_invoke$arity$2(G__77626,G__77627) : app.util.simple_math.interpret.call(null,G__77626,G__77627));
})();
var G__77628 = operator;
switch (G__77628) {
case "+":
return (init_value + second_value);

break;
case "-":
return ((0) - second_value);

break;
case "*":
return (init_value * second_value);

break;
case "/":
return (init_value / second_value);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77628)].join('')));

}
} else {
var value = (function (){var G__77629 = cljs.core.first(args);
var G__77630 = init_value;
return (app.util.simple_math.interpret.cljs$core$IFn$_invoke$arity$2 ? app.util.simple_math.interpret.cljs$core$IFn$_invoke$arity$2(G__77629,G__77630) : app.util.simple_math.interpret.call(null,G__77629,G__77630));
})();
var value__$1 = value;
var rest_expr = cljs.core.rest(args);
while(true){
if(cljs.core.empty_QMARK_(rest_expr)){
return value__$1;
} else {
var operator = cljs.core.first(rest_expr);
var second_value = (function (){var G__77631 = cljs.core.second(rest_expr);
var G__77632 = init_value;
return (app.util.simple_math.interpret.cljs$core$IFn$_invoke$arity$2 ? app.util.simple_math.interpret.cljs$core$IFn$_invoke$arity$2(G__77631,G__77632) : app.util.simple_math.interpret.call(null,G__77631,G__77632));
})();
var rest_expr__$1 = cljs.core.rest(cljs.core.rest(rest_expr));
var G__77633 = operator;
switch (G__77633) {
case "+":
var G__77646 = (value__$1 + second_value);
var G__77647 = rest_expr__$1;
value__$1 = G__77646;
rest_expr = G__77647;
continue;

break;
case "-":
var G__77648 = (value__$1 - second_value);
var G__77649 = rest_expr__$1;
value__$1 = G__77648;
rest_expr = G__77649;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77633)].join('')));

}
}
break;
}
}

break;
case "term":
var value = (function (){var G__77634 = cljs.core.first(args);
var G__77635 = init_value;
return (app.util.simple_math.interpret.cljs$core$IFn$_invoke$arity$2 ? app.util.simple_math.interpret.cljs$core$IFn$_invoke$arity$2(G__77634,G__77635) : app.util.simple_math.interpret.call(null,G__77634,G__77635));
})();
var value__$1 = value;
var rest_expr = cljs.core.rest(args);
while(true){
if(cljs.core.empty_QMARK_(rest_expr)){
return value__$1;
} else {
var operator = cljs.core.first(rest_expr);
var second_value = (function (){var G__77636 = cljs.core.second(rest_expr);
var G__77637 = init_value;
return (app.util.simple_math.interpret.cljs$core$IFn$_invoke$arity$2 ? app.util.simple_math.interpret.cljs$core$IFn$_invoke$arity$2(G__77636,G__77637) : app.util.simple_math.interpret.call(null,G__77636,G__77637));
})();
var rest_expr__$1 = cljs.core.rest(cljs.core.rest(rest_expr));
var G__77638 = operator;
switch (G__77638) {
case "*":
var G__77651 = (value__$1 * second_value);
var G__77652 = rest_expr__$1;
value__$1 = G__77651;
rest_expr = G__77652;
continue;

break;
case "/":
var G__77653 = (value__$1 / second_value);
var G__77654 = rest_expr__$1;
value__$1 = G__77653;
rest_expr = G__77654;
continue;

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__77638)].join('')));

}
}
break;
}

break;
case "factor":
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.first(args),"(")){
var G__77639 = cljs.core.second(args);
var G__77640 = init_value;
return (app.util.simple_math.interpret.cljs$core$IFn$_invoke$arity$2 ? app.util.simple_math.interpret.cljs$core$IFn$_invoke$arity$2(G__77639,G__77640) : app.util.simple_math.interpret.call(null,G__77639,G__77640));
} else {
var G__77641 = cljs.core.first(args);
var G__77642 = init_value;
return (app.util.simple_math.interpret.cljs$core$IFn$_invoke$arity$2 ? app.util.simple_math.interpret.cljs$core$IFn$_invoke$arity$2(G__77641,G__77642) : app.util.simple_math.interpret.call(null,G__77641,G__77642));
}

break;
case "number":
var value_str = cuerdas.core.replace(cljs.core.first(args),",",".");
if((!(cuerdas.core.ends_with_QMARK_(value_str,"%")))){
return app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(value_str);
} else {
return ((app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(cuerdas.core.replace(value_str,"%","")) / (100)) * init_value);
}

break;
default:
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$3(["Unknown token",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)].join(''),cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"validation","validation",-2141396518),new cljs.core.Keyword(null,"hint","hint",439639918),["Unknown token",cljs.core.str.cljs$core$IFn$_invoke$arity$1(token),cljs.core.str.cljs$core$IFn$_invoke$arity$1(args)].join('')], null),null], 0)),null);

}
});
app.util.simple_math.expr_eval = (function app$util$simple_math$expr_eval(expr,init_value){
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(cljs.core.string_QMARK_,expr);
} else {
}
} else {
}

var result = (app.util.simple_math.parser.cljs$core$IFn$_invoke$arity$1 ? app.util.simple_math.parser.cljs$core$IFn$_invoke$arity$1(expr) : app.util.simple_math.parser.call(null,expr));
var init_value__$1 = (function (){var or__5025__auto__ = init_value;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
if(cljs.core.truth_(cljs.spec.alpha._STAR_compile_asserts_STAR_)){
if(cljs.core.truth_(cljs.core.deref(new cljs.core.Var(function(){return cljs.spec.alpha._STAR_runtime_asserts_STAR_;},new cljs.core.Symbol("cljs.spec.alpha","*runtime-asserts*","cljs.spec.alpha/*runtime-asserts*",-1060443587,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"private","private",-558947994),new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"dynamic","dynamic",704819571),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[true,new cljs.core.Symbol(null,"cljs.spec.alpha","cljs.spec.alpha",505122844,null),new cljs.core.Symbol(null,"*runtime-asserts*","*runtime-asserts*",1632801956,null),"cljs/spec/alpha.cljs",20,1,true,1480,1482,cljs.core.List.EMPTY,null,(cljs.core.truth_(cljs.spec.alpha._STAR_runtime_asserts_STAR_)?cljs.spec.alpha._STAR_runtime_asserts_STAR_.cljs$lang$test:null)]))))){
cljs.spec.alpha.assert_STAR_(cljs.core.number_QMARK_,init_value__$1);
} else {
}
} else {
}

if((!(instaparse.core.failure_QMARK_(result)))){
return app.util.simple_math.interpret(result,init_value__$1);
} else {
var text = new cljs.core.Keyword(null,"text","text",-1790561697).cljs$core$IFn$_invoke$arity$1(result);
var index = new cljs.core.Keyword(null,"index","index",-1531685915).cljs$core$IFn$_invoke$arity$1(result);
var expecting = cljs.core.filter.cljs$core$IFn$_invoke$arity$2(cljs.core.some_QMARK_,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"expecting","expecting",-57706705),new cljs.core.Keyword(null,"reason","reason",-2070751759).cljs$core$IFn$_invoke$arity$1(result)));
console.debug(["Invalid value '",cljs.core.str.cljs$core$IFn$_invoke$arity$1(text),"' at index ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(index),". Expected one of ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(expecting),"."].join(''));

return null;
}
});

//# sourceMappingURL=app.util.simple_math.js.map
