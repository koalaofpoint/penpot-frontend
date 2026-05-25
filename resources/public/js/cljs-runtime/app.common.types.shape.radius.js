import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.types.shape.attrs.js";
goog.provide('app.common.types.shape.radius');
app.common.types.shape.radius.can_get_border_radius_QMARK_ = (function app$common$types$shape$radius$can_get_border_radius_QMARK_(shape){
return cljs.core.contains_QMARK_(new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"frame","frame",-1711082588),null,new cljs.core.Keyword(null,"rect","rect",-108902628),null], null), null),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape));
});
app.common.types.shape.radius.has_radius_QMARK_ = (function app$common$types$shape$radius$has_radius_QMARK_(shape){
return cljs.core.contains_QMARK_(cljs.core.get.cljs$core$IFn$_invoke$arity$2(app.common.types.shape.attrs.editable_attrs,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.Keyword(null,"r1","r1",690974900));
});
app.common.types.shape.radius.all_equal_QMARK_ = (function app$common$types$shape$radius$all_equal_QMARK_(shape){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.Keyword(null,"r1","r1",690974900).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"r2","r2",252844174).cljs$core$IFn$_invoke$arity$1(shape),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"r3","r3",-2027148174).cljs$core$IFn$_invoke$arity$1(shape),new cljs.core.Keyword(null,"r4","r4",1134323163).cljs$core$IFn$_invoke$arity$1(shape)], 0));
});
app.common.types.shape.radius.radius_mode = (function app$common$types$shape$radius$radius_mode(shape){
if(app.common.types.shape.radius.all_equal_QMARK_(shape)){
return new cljs.core.Keyword(null,"radius-1","radius-1",739275475);
} else {
return new cljs.core.Keyword(null,"radius-4","radius-4",-1326301618);
}
});
app.common.types.shape.radius.set_radius_to_all_corners = (function app$common$types$shape$radius$set_radius_to_all_corners(shape,value){
var G__49619 = shape;
if(app.common.types.shape.radius.can_get_border_radius_QMARK_(shape)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__49619,new cljs.core.Keyword(null,"r1","r1",690974900),value,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"r2","r2",252844174),value,new cljs.core.Keyword(null,"r3","r3",-2027148174),value,new cljs.core.Keyword(null,"r4","r4",1134323163),value], 0));
} else {
return G__49619;
}
});
app.common.types.shape.radius.set_radius_to_single_corner = (function app$common$types$shape$radius$set_radius_to_single_corner(shape,attr,value){
var attr__$1 = (function (){var G__49627 = attr;
var G__49627__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"flip-x","flip-x",891276861).cljs$core$IFn$_invoke$arity$1(shape))?cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r4","r4",1134323163),new cljs.core.Keyword(null,"r4","r4",1134323163),new cljs.core.Keyword(null,"r3","r3",-2027148174)], null),G__49627):G__49627);
if(cljs.core.truth_(new cljs.core.Keyword(null,"flip-y","flip-y",935998815).cljs$core$IFn$_invoke$arity$1(shape))){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"r1","r1",690974900),new cljs.core.Keyword(null,"r4","r4",1134323163),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r3","r3",-2027148174),new cljs.core.Keyword(null,"r2","r2",252844174),new cljs.core.Keyword(null,"r4","r4",1134323163),new cljs.core.Keyword(null,"r1","r1",690974900)], null),G__49627__$1);
} else {
return G__49627__$1;
}
})();
var G__49629 = shape;
if(app.common.types.shape.radius.can_get_border_radius_QMARK_(shape)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__49629,attr__$1,value);
} else {
return G__49629;
}
});
/**
 * Set border radius to `value` for each radius `attr`.
 */
app.common.types.shape.radius.set_radius_for_corners = (function app$common$types$shape$radius$set_radius_for_corners(shape,attrs,value){
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (shape_SINGLEQUOTE_,attr){
return app.common.types.shape.radius.set_radius_to_single_corner(shape_SINGLEQUOTE_,attr,value);
}),shape,attrs);
});

//# sourceMappingURL=app.common.types.shape.radius.js.map
