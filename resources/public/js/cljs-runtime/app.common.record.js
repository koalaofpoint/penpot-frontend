import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('app.common.record');

/**
 * @interface
 */
app.common.record.ICustomRecordEquiv = function(){};

var app$common$record$ICustomRecordEquiv$_equiv_with_exceptions$dyn_46211 = (function (_,other,exceptions){
var x__5373__auto__ = (((_ == null))?null:_);
var m__5374__auto__ = (app.common.record._equiv_with_exceptions[goog.typeOf(x__5373__auto__)]);
if((!((m__5374__auto__ == null)))){
return (m__5374__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5374__auto__.cljs$core$IFn$_invoke$arity$3(_,other,exceptions) : m__5374__auto__.call(null,_,other,exceptions));
} else {
var m__5372__auto__ = (app.common.record._equiv_with_exceptions["_"]);
if((!((m__5372__auto__ == null)))){
return (m__5372__auto__.cljs$core$IFn$_invoke$arity$3 ? m__5372__auto__.cljs$core$IFn$_invoke$arity$3(_,other,exceptions) : m__5372__auto__.call(null,_,other,exceptions));
} else {
throw cljs.core.missing_protocol("ICustomRecordEquiv.-equiv-with-exceptions",_);
}
}
});
app.common.record._equiv_with_exceptions = (function app$common$record$_equiv_with_exceptions(_,other,exceptions){
if((((!((_ == null)))) && ((!((_.app$common$record$ICustomRecordEquiv$_equiv_with_exceptions$arity$3 == null)))))){
return _.app$common$record$ICustomRecordEquiv$_equiv_with_exceptions$arity$3(_,other,exceptions);
} else {
return app$common$record$ICustomRecordEquiv$_equiv_with_exceptions$dyn_46211(_,other,exceptions);
}
});


//# sourceMappingURL=app.common.record.js.map
