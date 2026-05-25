import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.math.js";
import "./cuerdas.core.js";
goog.provide('app.main.ui.formats');
app.main.ui.formats.format_percent = (function app$main$ui$formats$format_percent(var_args){
var G__54761 = arguments.length;
switch (G__54761) {
case 1:
return app.main.ui.formats.format_percent.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.ui.formats.format_percent.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.formats.format_percent.cljs$core$IFn$_invoke$arity$1 = (function (value){
return app.main.ui.formats.format_percent.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(app.main.ui.formats.format_percent.cljs$core$IFn$_invoke$arity$2 = (function (value,p__54762){
var map__54763 = p__54762;
var map__54763__$1 = cljs.core.__destructure_map(map__54763);
var precision = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54763__$1,new cljs.core.Keyword(null,"precision","precision",-1175707478),(2));
var value__$1 = ((typeof value === 'string')?app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(value):value);
if(cljs.core.truth_(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(value__$1))){
var percent_val = app.common.math.precision((value__$1 * (100)),precision);
return ""+(percent_val ?? "")+"%";
} else {
return null;
}
}));

(app.main.ui.formats.format_percent.cljs$lang$maxFixedArity = 2);

app.main.ui.formats.format_frs = (function app$main$ui$formats$format_frs(var_args){
var G__54787 = arguments.length;
switch (G__54787) {
case 1:
return app.main.ui.formats.format_frs.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.ui.formats.format_frs.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.formats.format_frs.cljs$core$IFn$_invoke$arity$1 = (function (value){
return app.main.ui.formats.format_frs.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(app.main.ui.formats.format_frs.cljs$core$IFn$_invoke$arity$2 = (function (value,p__54803){
var map__54804 = p__54803;
var map__54804__$1 = cljs.core.__destructure_map(map__54804);
var precision = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54804__$1,new cljs.core.Keyword(null,"precision","precision",-1175707478),(2));
var value__$1 = ((typeof value === 'string')?app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(value):value);
if(cljs.core.truth_(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(value__$1))){
var value__$2 = app.common.math.precision(value__$1,precision);
return ""+(value__$2 ?? "")+"fr";
} else {
return null;
}
}));

(app.main.ui.formats.format_frs.cljs$lang$maxFixedArity = 2);

app.main.ui.formats.format_number = (function app$main$ui$formats$format_number(var_args){
var G__54808 = arguments.length;
switch (G__54808) {
case 1:
return app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1 = (function (value){
return app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$2 = (function (value,p__54812){
var map__54813 = p__54812;
var map__54813__$1 = cljs.core.__destructure_map(map__54813);
var precision = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54813__$1,new cljs.core.Keyword(null,"precision","precision",-1175707478),(2));
var value__$1 = ((typeof value === 'string')?app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(value):value);
if(cljs.core.truth_(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(value__$1))){
var value__$2 = app.common.math.precision(value__$1,precision);
return ""+(value__$2 ?? "");
} else {
return null;
}
}));

(app.main.ui.formats.format_number.cljs$lang$maxFixedArity = 2);

app.main.ui.formats.format_pixels = (function app$main$ui$formats$format_pixels(var_args){
var G__54817 = arguments.length;
switch (G__54817) {
case 1:
return app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1 = (function (value){
return app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$2(value,null);
}));

(app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$2 = (function (value,p__54818){
var map__54819 = p__54818;
var map__54819__$1 = cljs.core.__destructure_map(map__54819);
var precision = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54819__$1,new cljs.core.Keyword(null,"precision","precision",-1175707478),(2));
var value__$1 = ((typeof value === 'string')?app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(value):value);
if(cljs.core.truth_(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(value__$1))){
var value__$2 = app.common.math.precision(value__$1,precision);
return ""+(value__$2 ?? "")+"px";
} else {
return null;
}
}));

(app.main.ui.formats.format_pixels.cljs$lang$maxFixedArity = 2);

app.main.ui.formats.format_int = (function app$main$ui$formats$format_int(value){
var value__$1 = ((typeof value === 'string')?app.common.data.parse_double.cljs$core$IFn$_invoke$arity$1(value):value);
if(cljs.core.truth_(app.common.data.num_QMARK_.cljs$core$IFn$_invoke$arity$1(value__$1))){
var value__$2 = app.common.math.precision(value__$1,(0));
return ""+(value__$2 ?? "");
} else {
return null;
}
});
app.main.ui.formats.format_padding_margin_shorthand = (function app$main$ui$formats$format_padding_margin_shorthand(values){
var vec__54820 = values;
var p1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54820,(0),null);
var p2 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54820,(1),null);
var p3 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54820,(2),null);
var p4 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54820,(3),null);
var p1__$1 = app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(p1);
var p2__$1 = app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(p2);
var p3__$1 = app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(p3);
var p4__$1 = app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(p4);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(p1__$1,p2__$1,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([p3__$1,p4__$1], 0))){
return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"p1","p1",-936759954),p1__$1], null);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((4),cljs.core.count(cljs.core.set(new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__$1,p2__$1,p3__$1,p4__$1], null))))){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p1","p1",-936759954),p1__$1,new cljs.core.Keyword(null,"p2","p2",905500641),p2__$1,new cljs.core.Keyword(null,"p3","p3",1731040739),p3__$1,new cljs.core.Keyword(null,"p4","p4",-1090126814),p4__$1], null);
} else {
if(((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p1__$1,p3__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2__$1,p4__$1)))){
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"p1","p1",-936759954),p1__$1,new cljs.core.Keyword(null,"p2","p2",905500641),p2__$1], null);
} else {
if(((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(p1__$1,p3__$1)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(p2__$1,p4__$1)))){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"p1","p1",-936759954),p1__$1,new cljs.core.Keyword(null,"p2","p2",905500641),p2__$1,new cljs.core.Keyword(null,"p3","p3",1731040739),p3__$1], null);
} else {
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p1","p1",-936759954),p1__$1,new cljs.core.Keyword(null,"p2","p2",905500641),p2__$1,new cljs.core.Keyword(null,"p3","p3",1731040739),p3__$1,new cljs.core.Keyword(null,"p4","p4",-1090126814),p4__$1], null);

}
}
}
}
});
app.main.ui.formats.format_size = (function app$main$ui$formats$format_size(type,value,shape){
var sizing = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"width","width",-384071477)))?new cljs.core.Keyword(null,"layout-item-h-sizing","layout-item-h-sizing",136908527).cljs$core$IFn$_invoke$arity$1(shape):new cljs.core.Keyword(null,"layout-item-v-sizing","layout-item-v-sizing",1684690641).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sizing,new cljs.core.Keyword(null,"fill","fill",883462889))){
return "100%";
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(sizing,new cljs.core.Keyword(null,"auto","auto",-566279492))){
return "auto";
} else {
if(typeof value === 'number'){
return app.main.ui.formats.format_pixels.cljs$core$IFn$_invoke$arity$1(value);
} else {
return value;

}
}
}
});
app.main.ui.formats.format_padding = (function app$main$ui$formats$format_padding(padding_values,type){
var new_padding = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"margin","margin",-995903681),type))?new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"m1","m1",-108094626),(0),new cljs.core.Keyword(null,"m2","m2",-587003306),(0),new cljs.core.Keyword(null,"m3","m3",-703635357),(0),new cljs.core.Keyword(null,"m4","m4",-1624571215),(0)], null):new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"p1","p1",-936759954),(0),new cljs.core.Keyword(null,"p2","p2",905500641),(0),new cljs.core.Keyword(null,"p3","p3",1731040739),(0),new cljs.core.Keyword(null,"p4","p4",-1090126814),(0)], null));
var merged_padding = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new_padding,padding_values], 0));
var short_hand = app.main.ui.formats.format_padding_margin_shorthand(cljs.core.vals(merged_padding));
var parsed_values = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54823_SHARP_){
return (cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$2 ? cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$2("%spx",p1__54823_SHARP_) : cuerdas.core.fmt.call(null,"%spx",p1__54823_SHARP_));
}),cljs.core.vals(short_hand));
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",parsed_values);
});
app.main.ui.formats.format_margin = (function app$main$ui$formats$format_margin(margin_values){
return app.main.ui.formats.format_padding(margin_values,new cljs.core.Keyword(null,"margin","margin",-995903681));
});
app.main.ui.formats.format_gap = (function app$main$ui$formats$format_gap(gap_values){
var row_gap = new cljs.core.Keyword(null,"row-gap","row-gap",-1809905537).cljs$core$IFn$_invoke$arity$1(gap_values);
var column_gap = new cljs.core.Keyword(null,"column-gap","column-gap",384822863).cljs$core$IFn$_invoke$arity$1(gap_values);
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(row_gap,column_gap)){
var G__54824 = "%spx";
var G__54825 = app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(row_gap);
return (cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$2 ? cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$2(G__54824,G__54825) : cuerdas.core.fmt.call(null,G__54824,G__54825));
} else {
var G__54826 = "%spx %spx";
var G__54827 = app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(row_gap);
var G__54828 = app.main.ui.formats.format_number.cljs$core$IFn$_invoke$arity$1(column_gap);
return (cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$3 ? cuerdas.core.fmt.cljs$core$IFn$_invoke$arity$3(G__54826,G__54827,G__54828) : cuerdas.core.fmt.call(null,G__54826,G__54827,G__54828));
}
});
app.main.ui.formats.format_matrix = (function app$main$ui$formats$format_matrix(var_args){
var G__54830 = arguments.length;
switch (G__54830) {
case 1:
return app.main.ui.formats.format_matrix.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.main.ui.formats.format_matrix.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.ui.formats.format_matrix.cljs$core$IFn$_invoke$arity$1 = (function (mtx){
return app.main.ui.formats.format_matrix.cljs$core$IFn$_invoke$arity$2(mtx,(2));
}));

(app.main.ui.formats.format_matrix.cljs$core$IFn$_invoke$arity$2 = (function (p__54831,precision){
var map__54832 = p__54831;
var map__54832__$1 = cljs.core.__destructure_map(map__54832);
var a = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54832__$1,new cljs.core.Keyword(null,"a","a",-2123407586));
var b = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54832__$1,new cljs.core.Keyword(null,"b","b",1482224470));
var c = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54832__$1,new cljs.core.Keyword(null,"c","c",-1763192079));
var d = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54832__$1,new cljs.core.Keyword(null,"d","d",1972142424));
var e = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54832__$1,new cljs.core.Keyword(null,"e","e",1381269198));
var f = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54832__$1,new cljs.core.Keyword(null,"f","f",-1597136552));
return ""+"matrix("+(app.common.math.to_fixed(a,precision) ?? "")+", "+(app.common.math.to_fixed(b,precision) ?? "")+", "+(app.common.math.to_fixed(c,precision) ?? "")+", "+(app.common.math.to_fixed(d,precision) ?? "")+", "+(app.common.math.to_fixed(e,precision) ?? "")+", "+(app.common.math.to_fixed(f,precision) ?? "")+")";
}));

(app.main.ui.formats.format_matrix.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=app.main.ui.formats.js.map
