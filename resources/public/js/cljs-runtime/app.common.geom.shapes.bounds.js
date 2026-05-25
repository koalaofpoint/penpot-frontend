import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.rect.js";
import "./app.common.math.js";
import "./app.common.types.path.js";
goog.provide('app.common.geom.shapes.bounds');
app.common.geom.shapes.bounds.shape_stroke_margin = (function app$common$geom$shapes$bounds$shape_stroke_margin(shape,stroke_width){
if(app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return (stroke_width + app.common.math.sqrt((((2) * stroke_width) * stroke_width)));
} else {
return app.common.math.sqrt((((2) * stroke_width) * stroke_width));
}
});
app.common.geom.shapes.bounds.apply_filters = (function app$common$geom$shapes$bounds$apply_filters(attr,type,filters){
return cljs.core.sequence.cljs$core$IFn$_invoke$arity$2(cljs.core.comp.cljs$core$IFn$_invoke$arity$3(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"hidden","hidden",-312506092)),cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__50291_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((attr.cljs$core$IFn$_invoke$arity$1 ? attr.cljs$core$IFn$_invoke$arity$1(p1__50291_SHARP_) : attr.call(null,p1__50291_SHARP_)),type);
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1((function (item){
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),""+"filter_"+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item) ?? ""),new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"params","params",710516235),item], null);
}))),filters);
});
app.common.geom.shapes.bounds.shape__GT_filters = (function app$common$geom$shapes$bounds$shape__GT_filters(shape){
return app.common.data.concat_vec.cljs$core$IFn$_invoke$arity$variadic(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"BackgroundImageFix",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"image-fix","image-fix",-823773862)], null)], null),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([app.common.geom.shapes.bounds.apply_filters(new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"drop-shadow","drop-shadow",878776332),new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(shape)),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"id","id",-1388402092),"shape",new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"blend-filters","blend-filters",-1725368612)], null)], null),app.common.geom.shapes.bounds.apply_filters(new cljs.core.Keyword(null,"style","style",-496642736),new cljs.core.Keyword(null,"inner-shadow","inner-shadow",-548982250),new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(shape)),app.common.geom.shapes.bounds.apply_filters(new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"layer-blur","layer-blur",2003227989),(new cljs.core.List(null,new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(shape),null,(1),null)))], 0));
});
app.common.geom.shapes.bounds.calculate_filter_bounds = (function app$common$geom$shapes$bounds$calculate_filter_bounds(selrect,filter_entry){
var x = (selrect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (selrect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y","y",-1757859776)));
var w = (selrect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"width","width",-384071477)));
var h = (selrect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"height","height",1025178622)));
var map__50297 = new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(filter_entry);
var map__50297__$1 = cljs.core.__destructure_map(map__50297);
var offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50297__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230),(0));
var offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50297__$1,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008),(0));
var blur = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50297__$1,new cljs.core.Keyword(null,"blur","blur",-453500461),(0));
var spread = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50297__$1,new cljs.core.Keyword(null,"spread","spread",862337191),(0));
var filter_x = Math.min(x,((((x + offset_x) + (- spread)) + (- blur)) + (-5)));
var filter_y = Math.min(y,((((y + offset_y) + (- spread)) + (- blur)) + (-5)));
var filter_w = ((((w + app.common.math.abs(offset_x)) + (spread * (2))) + (blur * (2))) + (10));
var filter_h = ((((h + app.common.math.abs(offset_y)) + (spread * (2))) + (blur * (2))) + (10));
return app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$4(filter_x,filter_y,filter_w,filter_h);
});
app.common.geom.shapes.bounds.get_rect_filter_bounds = (function app$common$geom$shapes$bounds$get_rect_filter_bounds(var_args){
var G__50300 = arguments.length;
switch (G__50300) {
case 3:
return app.common.geom.shapes.bounds.get_rect_filter_bounds.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.common.geom.shapes.bounds.get_rect_filter_bounds.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.bounds.get_rect_filter_bounds.cljs$core$IFn$_invoke$arity$3 = (function (selrect,filters,blur_value){
return app.common.geom.shapes.bounds.get_rect_filter_bounds.cljs$core$IFn$_invoke$arity$4(selrect,filters,blur_value,false);
}));

(app.common.geom.shapes.bounds.get_rect_filter_bounds.cljs$core$IFn$_invoke$arity$4 = (function (selrect,filters,blur_value,ignore_shadow_margin_QMARK_){
var bounds_xf = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.filter.cljs$core$IFn$_invoke$arity$1((function (p1__50298_SHARP_){
return ((cljs.core.not(ignore_shadow_margin_QMARK_)) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"drop-shadow","drop-shadow",878776332),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__50298_SHARP_))));
})),cljs.core.map.cljs$core$IFn$_invoke$arity$1(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.bounds.calculate_filter_bounds,selrect)));
var delta_blur = (blur_value * (2));
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(app.common.geom.rect.join_rects(cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [selrect], null),bounds_xf,filters)),new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._,delta_blur),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,delta_blur),new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._,delta_blur),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._,delta_blur),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,delta_blur),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,delta_blur),new cljs.core.Keyword(null,"width","width",-384071477),cljs.core._PLUS_,(delta_blur * (2))),new cljs.core.Keyword(null,"height","height",1025178622),cljs.core._PLUS_,(delta_blur * (2)));
}));

(app.common.geom.shapes.bounds.get_rect_filter_bounds.cljs$lang$maxFixedArity = 4);

app.common.geom.shapes.bounds.get_shape_filter_bounds = (function app$common$geom$shapes$bounds$get_shape_filter_bounds(var_args){
var G__50302 = arguments.length;
switch (G__50302) {
case 1:
return app.common.geom.shapes.bounds.get_shape_filter_bounds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.geom.shapes.bounds.get_shape_filter_bounds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.bounds.get_shape_filter_bounds.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return app.common.geom.shapes.bounds.get_shape_filter_bounds.cljs$core$IFn$_invoke$arity$2(shape,false);
}));

(app.common.geom.shapes.bounds.get_shape_filter_bounds.cljs$core$IFn$_invoke$arity$2 = (function (shape,ignore_shadow_margin_QMARK_){
if(((((app.common.files.helpers.svg_raw_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.get.cljs$core$IFn$_invoke$arity$2(cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"content","content",15833224)),new cljs.core.Keyword(null,"tag","tag",-1290361223)))))) || (((cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(shape))) && (((function (){var or__5025__auto____$1 = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return (0);
}
})() === (0))))))){
return (shape?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"selrect","selrect",1966287292)));
} else {
var filters = app.common.geom.shapes.bounds.shape__GT_filters(shape);
var blur_value = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
var srect = app.common.geom.rect.points__GT_rect((shape?.points?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"points","points",-1486596883))));
return app.common.geom.shapes.bounds.get_rect_filter_bounds.cljs$core$IFn$_invoke$arity$4(srect,filters,blur_value,ignore_shadow_margin_QMARK_);
}
}));

(app.common.geom.shapes.bounds.get_shape_filter_bounds.cljs$lang$maxFixedArity = 2);

app.common.geom.shapes.bounds.calculate_padding = (function app$common$geom$shapes$bounds$calculate_padding(var_args){
var G__50309 = arguments.length;
switch (G__50309) {
case 1:
return app.common.geom.shapes.bounds.calculate_padding.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return app.common.geom.shapes.bounds.calculate_padding.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.bounds.calculate_padding.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return app.common.geom.shapes.bounds.calculate_padding.cljs$core$IFn$_invoke$arity$3(shape,false,false);
}));

(app.common.geom.shapes.bounds.calculate_padding.cljs$core$IFn$_invoke$arity$3 = (function (shape,ignore_margin_QMARK_,ignore_shadow_margin_QMARK_){
var strokes = new cljs.core.Keyword(null,"strokes","strokes",-1645650952).cljs$core$IFn$_invoke$arity$1(shape);
var open_path_QMARK_ = ((app.common.files.helpers.path_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (app.common.types.path.shape_with_open_path_QMARK_(shape)));
var stroke_width = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.data.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50304_SHARP_){
var G__50311 = cljs.core.get.cljs$core$IFn$_invoke$arity$3(p1__50304_SHARP_,new cljs.core.Keyword(null,"stroke-alignment","stroke-alignment",465679340),new cljs.core.Keyword(null,"center","center",-748944368));
var G__50311__$1 = (((G__50311 instanceof cljs.core.Keyword))?G__50311.fqn:null);
switch (G__50311__$1) {
case "center":
return (new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$2(p1__50304_SHARP_,(0)) / (2));

break;
case "outer":
return new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$2(p1__50304_SHARP_,(0));

break;
default:
if(open_path_QMARK_){
return new cljs.core.Keyword(null,"stroke-width","stroke-width",716836435).cljs$core$IFn$_invoke$arity$2(p1__50304_SHARP_,(0));
} else {
return (0);
}

}
}),strokes));
var stroke_margin = (cljs.core.truth_(ignore_margin_QMARK_)?(0):app.common.geom.shapes.bounds.shape_stroke_margin(shape,stroke_width));
var shadow_width = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.data.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50305_SHARP_){
var G__50312 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$2(p1__50305_SHARP_,new cljs.core.Keyword(null,"drop-shadow","drop-shadow",878776332));
var G__50312__$1 = (((G__50312 instanceof cljs.core.Keyword))?G__50312.fqn:null);
switch (G__50312__$1) {
case "drop-shadow":
return (((app.common.math.abs(new cljs.core.Keyword(null,"offset-x","offset-x",1036466230).cljs$core$IFn$_invoke$arity$1(p1__50305_SHARP_)) + (new cljs.core.Keyword(null,"spread","spread",862337191).cljs$core$IFn$_invoke$arity$1(p1__50305_SHARP_) * (2))) + (new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(p1__50305_SHARP_) * (2))) + (10));

break;
default:
return (0);

}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(shape))));
var shadow_height = cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(app.common.data.max,(0),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__50306_SHARP_){
var G__50313 = new cljs.core.Keyword(null,"style","style",-496642736).cljs$core$IFn$_invoke$arity$2(p1__50306_SHARP_,new cljs.core.Keyword(null,"drop-shadow","drop-shadow",878776332));
var G__50313__$1 = (((G__50313 instanceof cljs.core.Keyword))?G__50313.fqn:null);
switch (G__50313__$1) {
case "drop-shadow":
return (((app.common.math.abs(new cljs.core.Keyword(null,"offset-y","offset-y",2076844008).cljs$core$IFn$_invoke$arity$1(p1__50306_SHARP_)) + (new cljs.core.Keyword(null,"spread","spread",862337191).cljs$core$IFn$_invoke$arity$1(p1__50306_SHARP_) * (2))) + (new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(p1__50306_SHARP_) * (2))) + (10));

break;
default:
return (0);

}
}),cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(shape))));
var shadow_height__$1 = (cljs.core.truth_(ignore_shadow_margin_QMARK_)?(0):shadow_height);
var shadow_width__$1 = (cljs.core.truth_(ignore_shadow_margin_QMARK_)?(0):shadow_width);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"horizontal","horizontal",2062109475),app.common.math.ceil((stroke_margin + shadow_width__$1)),new cljs.core.Keyword(null,"vertical","vertical",718696748),app.common.math.ceil((stroke_margin + shadow_height__$1))], null);
}));

(app.common.geom.shapes.bounds.calculate_padding.cljs$lang$maxFixedArity = 3);

app.common.geom.shapes.bounds.add_padding = (function app$common$geom$shapes$bounds$add_padding(bounds,padding){
var h_padding = new cljs.core.Keyword(null,"horizontal","horizontal",2062109475).cljs$core$IFn$_invoke$arity$1(padding);
var v_padding = new cljs.core.Keyword(null,"vertical","vertical",718696748).cljs$core$IFn$_invoke$arity$1(padding);
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(bounds,new cljs.core.Keyword(null,"x","x",2099068185),cljs.core._,h_padding),new cljs.core.Keyword(null,"x1","x1",-1863922247),cljs.core._,h_padding),new cljs.core.Keyword(null,"x2","x2",-1362513475),cljs.core._PLUS_,h_padding),new cljs.core.Keyword(null,"y","y",-1757859776),cljs.core._,v_padding),new cljs.core.Keyword(null,"y1","y1",589123466),cljs.core._,v_padding),new cljs.core.Keyword(null,"y2","y2",-718691301),cljs.core._PLUS_,v_padding),new cljs.core.Keyword(null,"width","width",-384071477),cljs.core._PLUS_,((2) * h_padding)),new cljs.core.Keyword(null,"height","height",1025178622),cljs.core._PLUS_,((2) * v_padding));
});
app.common.geom.shapes.bounds.calculate_base_bounds = (function app$common$geom$shapes$bounds$calculate_base_bounds(var_args){
var G__50315 = arguments.length;
switch (G__50315) {
case 1:
return app.common.geom.shapes.bounds.calculate_base_bounds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 3:
return app.common.geom.shapes.bounds.calculate_base_bounds.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.bounds.calculate_base_bounds.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return app.common.geom.shapes.bounds.calculate_base_bounds.cljs$core$IFn$_invoke$arity$3(shape,true,false);
}));

(app.common.geom.shapes.bounds.calculate_base_bounds.cljs$core$IFn$_invoke$arity$3 = (function (shape,ignore_margin_QMARK_,ignore_shadow_margin_QMARK_){
return app.common.geom.shapes.bounds.add_padding(app.common.geom.shapes.bounds.get_shape_filter_bounds.cljs$core$IFn$_invoke$arity$2(shape,ignore_shadow_margin_QMARK_),app.common.geom.shapes.bounds.calculate_padding.cljs$core$IFn$_invoke$arity$3(shape,ignore_margin_QMARK_,ignore_shadow_margin_QMARK_));
}));

(app.common.geom.shapes.bounds.calculate_base_bounds.cljs$lang$maxFixedArity = 3);

app.common.geom.shapes.bounds.get_object_bounds = (function app$common$geom$shapes$bounds$get_object_bounds(var_args){
var G__50317 = arguments.length;
switch (G__50317) {
case 2:
return app.common.geom.shapes.bounds.get_object_bounds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return app.common.geom.shapes.bounds.get_object_bounds.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.bounds.get_object_bounds.cljs$core$IFn$_invoke$arity$2 = (function (objects,shape){
return app.common.geom.shapes.bounds.get_object_bounds.cljs$core$IFn$_invoke$arity$3(objects,shape,null);
}));

(app.common.geom.shapes.bounds.get_object_bounds.cljs$core$IFn$_invoke$arity$3 = (function (objects,shape,p__50318){
var map__50319 = p__50318;
var map__50319__$1 = cljs.core.__destructure_map(map__50319);
var ignore_margin_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50319__$1,new cljs.core.Keyword(null,"ignore-margin?","ignore-margin?",1173241988),true);
var ignore_shadow_margin_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50319__$1,new cljs.core.Keyword(null,"ignore-shadow-margin?","ignore-shadow-margin?",-10356246),false);
var base_bounds = app.common.geom.shapes.bounds.calculate_base_bounds.cljs$core$IFn$_invoke$arity$3(shape,ignore_margin_QMARK_,ignore_shadow_margin_QMARK_);
var bounds = (cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = new cljs.core.Keyword(null,"masked-group","masked-group",1899947873).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return ((app.common.files.helpers.bool_shape_QMARK_(shape)) || (((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core.not(new cljs.core.Keyword(null,"show-content","show-content",-878000465).cljs$core$IFn$_invoke$arity$1(shape))))));
}
}
})())?new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_bounds], null):app.common.files.helpers.reduce_objects.cljs$core$IFn$_invoke$arity$5(objects,(function (shape__$1){
var and__5023__auto__ = cljs.core.not(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(shape__$1));
if(and__5023__auto__){
var and__5023__auto____$1 = app.common.data.not_empty_QMARK_(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape__$1));
if(and__5023__auto____$1){
var and__5023__auto____$2 = (function (){var or__5025__auto__ = (!(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1)));
if(or__5025__auto__){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"show-content","show-content",-878000465).cljs$core$IFn$_invoke$arity$1(shape__$1);
}
})();
if(cljs.core.truth_(and__5023__auto____$2)){
return (((!(app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape__$1)))) || (cljs.core.not(new cljs.core.Keyword(null,"masked-group","masked-group",1899947873).cljs$core$IFn$_invoke$arity$1(shape__$1))));
} else {
return and__5023__auto____$2;
}
} else {
return and__5023__auto____$1;
}
} else {
return and__5023__auto__;
}
}),new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),(function (result,child){
var G__50322 = result;
if(cljs.core.not(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(child))){
return cljs.core.conj.cljs$core$IFn$_invoke$arity$2(G__50322,app.common.geom.shapes.bounds.calculate_base_bounds.cljs$core$IFn$_invoke$arity$1(child));
} else {
return G__50322;
}
}),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [base_bounds], null))
);
var children_bounds = (function (){var G__50323 = app.common.geom.rect.join_rects(bounds);
if((!(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
var or__5025__auto__ = new cljs.core.Keyword(null,"children-bounds","children-bounds",-1464963835).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return G__50323;
}
} else {
return G__50323;
}
})();
var filters = app.common.geom.shapes.bounds.shape__GT_filters(shape);
var blur_value = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})();
return app.common.geom.shapes.bounds.get_rect_filter_bounds.cljs$core$IFn$_invoke$arity$4(children_bounds,filters,blur_value,ignore_shadow_margin_QMARK_);
}));

(app.common.geom.shapes.bounds.get_object_bounds.cljs$lang$maxFixedArity = 3);

app.common.geom.shapes.bounds.get_frame_bounds = (function app$common$geom$shapes$bounds$get_frame_bounds(var_args){
var G__50329 = arguments.length;
switch (G__50329) {
case 1:
return app.common.geom.shapes.bounds.get_frame_bounds.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return app.common.geom.shapes.bounds.get_frame_bounds.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.common.geom.shapes.bounds.get_frame_bounds.cljs$core$IFn$_invoke$arity$1 = (function (shape){
return app.common.geom.shapes.bounds.get_frame_bounds.cljs$core$IFn$_invoke$arity$2(shape,null);
}));

(app.common.geom.shapes.bounds.get_frame_bounds.cljs$core$IFn$_invoke$arity$2 = (function (shape,p__50330){
var map__50331 = p__50330;
var map__50331__$1 = cljs.core.__destructure_map(map__50331);
var ignore_margin_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50331__$1,new cljs.core.Keyword(null,"ignore-margin?","ignore-margin?",1173241988),false);
var ignore_shadow_margin_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__50331__$1,new cljs.core.Keyword(null,"ignore-shadow-margin?","ignore-shadow-margin?",-10356246),false);
return app.common.geom.shapes.bounds.get_object_bounds.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,shape,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"ignore-margin?","ignore-margin?",1173241988),ignore_margin_QMARK_,new cljs.core.Keyword(null,"ignore-shadow-margin?","ignore-shadow-margin?",-10356246),ignore_shadow_margin_QMARK_], null));
}));

(app.common.geom.shapes.bounds.get_frame_bounds.cljs$lang$maxFixedArity = 2);


//# sourceMappingURL=app.common.geom.shapes.bounds.js.map
