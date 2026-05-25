import "./cljs_env.js";
import "./cljs.core.js";
goog.provide('app.common.geom.line');
app.common.geom.line.line_value = (function app$common$geom$line$line_value(p__54546,p__54547){
var vec__54548 = p__54546;
var map__54551 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54548,(0),null);
var map__54551__$1 = cljs.core.__destructure_map(map__54551);
var px = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54551__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var py = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54551__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__54552 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54548,(1),null);
var map__54552__$1 = cljs.core.__destructure_map(map__54552);
var vx = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54552__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var vy = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54552__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var map__54553 = p__54547;
var map__54553__$1 = cljs.core.__destructure_map(map__54553);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54553__$1,new cljs.core.Keyword(null,"x","x",2099068185));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54553__$1,new cljs.core.Keyword(null,"y","y",-1757859776));
var a = vy;
var b = (- vx);
var c = (((- vy) * px) + (vx * py));
return (((a * x) + (b * y)) + c);
});
app.common.geom.line.is_inside_lines_QMARK_ = (function app$common$geom$line$is_inside_lines_QMARK_(line_1,line_2,pos){
return ((app.common.geom.line.line_value(line_1,pos) * app.common.geom.line.line_value(line_2,pos)) < (0));
});

//# sourceMappingURL=app.common.geom.line.js.map
