import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
goog.provide('app.common.geom.proportions');
app.common.geom.proportions.assign_proportions = (function app$common$geom$proportions$assign_proportions(shape){
var map__50523 = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape);
var map__50523__$1 = cljs.core.__destructure_map(map__50523);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50523__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50523__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"proportion","proportion",-1209284230),(width / height));
});
app.common.geom.proportions.setup_proportions_image = (function app$common$geom$proportions$setup_proportions_image(p__50524){
var map__50525 = p__50524;
var map__50525__$1 = cljs.core.__destructure_map(map__50525);
var shape = map__50525__$1;
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50525__$1,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
var map__50527 = metadata;
var map__50527__$1 = cljs.core.__destructure_map(map__50527);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50527__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50527__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"proportion","proportion",-1209284230),(width / height),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127),true], 0));
});
app.common.geom.proportions.setup_proportions_size = (function app$common$geom$proportions$setup_proportions_size(p__50528){
var map__50529 = p__50528;
var map__50529__$1 = cljs.core.__destructure_map(map__50529);
var shape = map__50529__$1;
var map__50530 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50529__$1,new cljs.core.Keyword(null,"selrect","selrect",1966287292));
var map__50530__$1 = cljs.core.__destructure_map(map__50530);
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50530__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50530__$1,new cljs.core.Keyword(null,"height","height",1025178622));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"proportion","proportion",-1209284230),(width / height),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127),true], 0));
});
app.common.geom.proportions.setup_proportions_const = (function app$common$geom$proportions$setup_proportions_const(shape){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(shape,new cljs.core.Keyword(null,"proportion","proportion",-1209284230),1.0,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"proportion-lock","proportion-lock",1363898127),false], 0));
});
app.common.geom.proportions.setup_proportions = (function app$common$geom$proportions$setup_proportions(p__50536){
var map__50537 = p__50536;
var map__50537__$1 = cljs.core.__destructure_map(map__50537);
var shape = map__50537__$1;
var type = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__50537__$1,new cljs.core.Keyword(null,"type","type",1174270348));
var image_fill_QMARK_ = ((app.common.data.not_empty_QMARK_(new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(shape))) && (cljs.core.every_QMARK_((function (p1__50532_SHARP_){
return (!((new cljs.core.Keyword(null,"fill-image","fill-image",-99895848).cljs$core$IFn$_invoke$arity$1(p1__50532_SHARP_) == null)));
}),new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$1(shape))));
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"svg-raw","svg-raw",-594329202))){
return app.common.geom.proportions.setup_proportions_size(shape);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"image","image",-58725096))){
return app.common.geom.proportions.setup_proportions_image(shape);
} else {
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"text","text",-1790561697))){
return shape;
} else {
if(image_fill_QMARK_){
return app.common.geom.proportions.setup_proportions_size(shape);
} else {
return app.common.geom.proportions.setup_proportions_const(shape);

}
}
}
}
});

//# sourceMappingURL=app.common.geom.proportions.js.map
