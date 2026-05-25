import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.geom.shapes.bounds.js";
import "./app.common.math.js";
import "./app.common.types.color.js";
import "./app.common.uuid.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.filters');
app.main.ui.shapes.filters.get_filter_id = (function app$main$ui$shapes$filters$get_filter_id(){
return ""+"filter-"+(app.common.uuid.next() ?? "");
});
app.main.ui.shapes.filters.filter_str = (function app$main$ui$shapes$filters$filter_str(filter_id,shape){
if(cljs.core.truth_((function (){var or__5025__auto__ = cljs.core.seq(cljs.core.remove.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"hidden","hidden",-312506092),new cljs.core.Keyword(null,"shadow","shadow",873231803).cljs$core$IFn$_invoke$arity$1(shape)));
if(or__5025__auto__){
return or__5025__auto__;
} else {
var and__5023__auto__ = new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(shape)));
} else {
return and__5023__auto__;
}
}
})())){
return ""+"url(#"+(filter_id ?? "")+")";
} else {
return null;
}
});
app.main.ui.shapes.filters.color_matrix = (function app$main$ui$shapes$filters$color_matrix(props_54275){
var map__54277 = rumext.v2.util.wrap_props(props_54275);
var map__54277__$1 = cljs.core.__destructure_map(map__54277);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54277__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var map__54278 = color;
var map__54278__$1 = cljs.core.__destructure_map(map__54278);
var color__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54278__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var opacity = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54278__$1,new cljs.core.Keyword(null,"opacity","opacity",397153780));
var vec__54279 = app.common.types.color.hex__GT_rgba(color__$1,opacity);
var r = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54279,(0),null);
var g = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54279,(1),null);
var b = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54279,(2),null);
var a = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54279,(3),null);
var vec__54282 = new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [(r / (255)),(g / (255)),(b / (255))], null);
var r__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54282,(0),null);
var g__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54282,(1),null);
var b__$1 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54282,(2),null);
return rumext.v2.jsx("feColorMatrix",{'type':"matrix",'values':""+"0 0 0 0 "+(r__$1 ?? "")+" 0 0 0 0 "+(g__$1 ?? "")+" 0 0 0 0 "+(b__$1 ?? "")+" 0 0 0 "+(a ?? "")+" 0"});
});

(app.main.ui.shapes.filters.color_matrix.displayName = "color-matrix");

app.main.ui.shapes.filters.drop_shadow_filter = (function app$main$ui$shapes$filters$drop_shadow_filter(props_54285){
var map__54286 = rumext.v2.util.wrap_props(props_54285);
var map__54286__$1 = cljs.core.__destructure_map(map__54286);
var filter_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54286__$1,new cljs.core.Keyword(null,"filter-in","filter-in",1424647666));
var filter_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54286__$1,new cljs.core.Keyword(null,"filter-id","filter-id",-84826199));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54286__$1,new cljs.core.Keyword(null,"params","params",710516235));
var map__54287 = params;
var map__54287__$1 = cljs.core.__destructure_map(map__54287);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54287__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54287__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54287__$1,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008));
var blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54287__$1,new cljs.core.Keyword(null,"blur","blur",-453500461));
var spread = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54287__$1,new cljs.core.Keyword(null,"spread","spread",862337191));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("feColorMatrix",{'in':"SourceAlpha",'type':"matrix",'values':"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"}),(((spread > (0)))?rumext.v2.jsx("feMorphology",{'radius':spread,'operator':"dilate",'in':"SourceAlpha",'result':filter_id}):null),(((spread < (0)))?rumext.v2.jsx("feMorphology",{'radius':(- spread),'operator':"erode",'in':"SourceAlpha",'result':filter_id}):null),rumext.v2.jsx("feOffset",{'dx':offset_x,'dy':offset_y}),rumext.v2.jsx("feGaussianBlur",{'stdDeviation':(blur / (2))}),rumext.v2.jsx(app.main.ui.shapes.filters.color_matrix,{'color':color}),rumext.v2.jsx("feBlend",{'mode':"normal",'in2':filter_in,'result':filter_id})]});
});

(app.main.ui.shapes.filters.drop_shadow_filter.displayName = "drop-shadow-filter");

app.main.ui.shapes.filters.inner_shadow_filter = (function app$main$ui$shapes$filters$inner_shadow_filter(props_54296){
var map__54297 = rumext.v2.util.wrap_props(props_54296);
var map__54297__$1 = cljs.core.__destructure_map(map__54297);
var filter_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54297__$1,new cljs.core.Keyword(null,"filter-in","filter-in",1424647666));
var filter_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54297__$1,new cljs.core.Keyword(null,"filter-id","filter-id",-84826199));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54297__$1,new cljs.core.Keyword(null,"params","params",710516235));
var map__54300 = params;
var map__54300__$1 = cljs.core.__destructure_map(map__54300);
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54300__$1,new cljs.core.Keyword(null,"color","color",1011675173));
var offset_x = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54300__$1,new cljs.core.Keyword(null,"offset-x","offset-x",1036466230));
var offset_y = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54300__$1,new cljs.core.Keyword(null,"offset-y","offset-y",2076844008));
var blur = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54300__$1,new cljs.core.Keyword(null,"blur","blur",-453500461));
var spread = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54300__$1,new cljs.core.Keyword(null,"spread","spread",862337191));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("feColorMatrix",{'in':"SourceAlpha",'type':"matrix",'values':"0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0",'result':"hardAlpha"}),(((spread > (0)))?rumext.v2.jsx("feMorphology",{'radius':spread,'operator':"erode",'in':"SourceAlpha",'result':filter_id}):null),rumext.v2.jsx("feOffset",{'dx':offset_x,'dy':offset_y}),rumext.v2.jsx("feGaussianBlur",{'stdDeviation':(blur / (2))}),rumext.v2.jsx("feComposite",{'in2':"hardAlpha",'operator':"arithmetic",'k2':"-1",'k3':"1"}),rumext.v2.jsx(app.main.ui.shapes.filters.color_matrix,{'color':color}),rumext.v2.jsx("feBlend",{'mode':"normal",'in2':filter_in,'result':filter_id})]});
});

(app.main.ui.shapes.filters.inner_shadow_filter.displayName = "inner-shadow-filter");

app.main.ui.shapes.filters.background_blur_filter = (function app$main$ui$shapes$filters$background_blur_filter(props_54301){
var map__54305 = rumext.v2.util.wrap_props(props_54301);
var map__54305__$1 = cljs.core.__destructure_map(map__54305);
var filter_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54305__$1,new cljs.core.Keyword(null,"filter-id","filter-id",-84826199));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54305__$1,new cljs.core.Keyword(null,"params","params",710516235));
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("feGaussianBlur",{'in':"BackgroundImage",'stdDeviation':(new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(params) / (2))}),rumext.v2.jsx("feComposite",{'in2':"SourceAlpha",'operator':"in",'result':filter_id})]});
});

(app.main.ui.shapes.filters.background_blur_filter.displayName = "background-blur-filter");

app.main.ui.shapes.filters.layer_blur_filter = (function app$main$ui$shapes$filters$layer_blur_filter(props_54306){
var map__54307 = rumext.v2.util.wrap_props(props_54306);
var map__54307__$1 = cljs.core.__destructure_map(map__54307);
var filter_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54307__$1,new cljs.core.Keyword(null,"filter-id","filter-id",-84826199));
var params = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54307__$1,new cljs.core.Keyword(null,"params","params",710516235));
return rumext.v2.jsx("feGaussianBlur",{'stdDeviation':new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(params),'result':filter_id});
});

(app.main.ui.shapes.filters.layer_blur_filter.displayName = "layer-blur-filter");

app.main.ui.shapes.filters.image_fix_filter = (function app$main$ui$shapes$filters$image_fix_filter(props_54309){
var map__54310 = rumext.v2.util.wrap_props(props_54309);
var map__54310__$1 = cljs.core.__destructure_map(map__54310);
var filter_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54310__$1,new cljs.core.Keyword(null,"filter-id","filter-id",-84826199));
return rumext.v2.jsx("feFlood",{'floodOpacity':(0),'result':filter_id});
});

(app.main.ui.shapes.filters.image_fix_filter.displayName = "image-fix-filter");

app.main.ui.shapes.filters.blend_filters = (function app$main$ui$shapes$filters$blend_filters(props_54311){
var map__54312 = rumext.v2.util.wrap_props(props_54311);
var map__54312__$1 = cljs.core.__destructure_map(map__54312);
var filter_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54312__$1,new cljs.core.Keyword(null,"filter-id","filter-id",-84826199));
var filter_in = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54312__$1,new cljs.core.Keyword(null,"filter-in","filter-in",1424647666));
return rumext.v2.jsx("feBlend",{'mode':"normal",'in':"SourceGraphic",'in2':filter_in,'result':filter_id});
});

(app.main.ui.shapes.filters.blend_filters.displayName = "blend-filters");

app.main.ui.shapes.filters.filter_entry = (function app$main$ui$shapes$filters$filter_entry(props_54313){
var map__54314 = rumext.v2.util.wrap_props(props_54313);
var map__54314__$1 = cljs.core.__destructure_map(map__54314);
var entry = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54314__$1,new cljs.core.Keyword(null,"entry","entry",505168823));
var props = ({"filter-id": new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(entry), "filter-in": new cljs.core.Keyword(null,"filter-in","filter-in",1424647666).cljs$core$IFn$_invoke$arity$1(entry), "params": new cljs.core.Keyword(null,"params","params",710516235).cljs$core$IFn$_invoke$arity$1(entry)});
var G__54316 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(entry);
var G__54316__$1 = (((G__54316 instanceof cljs.core.Keyword))?G__54316.fqn:null);
switch (G__54316__$1) {
case "drop-shadow":
return rumext.v2.create_element(app.main.ui.shapes.filters.drop_shadow_filter,props);

break;
case "inner-shadow":
return rumext.v2.create_element(app.main.ui.shapes.filters.inner_shadow_filter,props);

break;
case "background-blur":
return rumext.v2.create_element(app.main.ui.shapes.filters.background_blur_filter,props);

break;
case "layer-blur":
return rumext.v2.create_element(app.main.ui.shapes.filters.layer_blur_filter,props);

break;
case "image-fix":
return rumext.v2.create_element(app.main.ui.shapes.filters.image_fix_filter,props);

break;
case "blend-filters":
return rumext.v2.create_element(app.main.ui.shapes.filters.blend_filters,props);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__54316__$1)].join('')));

}
});

(app.main.ui.shapes.filters.filter_entry.displayName = "filter-entry");

/**
 * Adds the previous filter as `filter-in` parameter
 */
app.main.ui.shapes.filters.change_filter_in = (function app$main$ui$shapes$filters$change_filter_in(filters){
return cljs.core.map.cljs$core$IFn$_invoke$arity$3((function (p1__54319_SHARP_,p2__54320_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__54319_SHARP_,new cljs.core.Keyword(null,"filter-in","filter-in",1424647666),p2__54320_SHARP_);
}),filters,cljs.core.cons(null,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"id","id",-1388402092),filters)));
});
app.main.ui.shapes.filters.filter_coords = (function app$main$ui$shapes$filters$filter_coords(bounds,selrect,padding){
if(cljs.core.truth_((function (){var or__5025__auto__ = app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(0.01,new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(selrect));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.math.close_QMARK_.cljs$core$IFn$_invoke$arity$2(0.01,new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selrect));
}
})())){
var filter_width = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bounds) + ((2) * new cljs.core.Keyword(null,"horizontal","horizontal",2062109475).cljs$core$IFn$_invoke$arity$1(padding)));
var filter_height = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bounds) + ((2) * new cljs.core.Keyword(null,"vertical","vertical",718696748).cljs$core$IFn$_invoke$arity$1(padding)));
var filter_x = (new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds) - new cljs.core.Keyword(null,"horizontal","horizontal",2062109475).cljs$core$IFn$_invoke$arity$1(padding));
var filter_y = (new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds) - new cljs.core.Keyword(null,"vertical","vertical",718696748).cljs$core$IFn$_invoke$arity$1(padding));
var filter_units = "userSpaceOnUse";
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_x,filter_y,filter_width,filter_height,filter_units], null);
} else {
var filter_width = ((new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bounds) + ((2) * new cljs.core.Keyword(null,"horizontal","horizontal",2062109475).cljs$core$IFn$_invoke$arity$1(padding))) / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(selrect));
var filter_height = ((new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bounds) + ((2) * new cljs.core.Keyword(null,"vertical","vertical",718696748).cljs$core$IFn$_invoke$arity$1(padding))) / new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selrect));
var filter_x = (((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(selrect)) - new cljs.core.Keyword(null,"horizontal","horizontal",2062109475).cljs$core$IFn$_invoke$arity$1(padding)) / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(selrect));
var filter_y = (((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(selrect)) - new cljs.core.Keyword(null,"vertical","vertical",718696748).cljs$core$IFn$_invoke$arity$1(padding)) / new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selrect));
var filter_units = "objectBoundingBox";
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [filter_x,filter_y,filter_width,filter_height,filter_units], null);
}
});
app.main.ui.shapes.filters.filters = (function app$main$ui$shapes$filters$filters(props_54321){
var map__54323 = rumext.v2.util.wrap_props(props_54321);
var map__54323__$1 = cljs.core.__destructure_map(map__54323);
var filter_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54323__$1,new cljs.core.Keyword(null,"filter-id","filter-id",-84826199));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54323__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var shape_SINGLEQUOTE_ = cljs.core.update.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"shadow","shadow",873231803),cljs.core.reverse);
var filters__$1 = app.main.ui.shapes.filters.change_filter_in(app.common.geom.shapes.bounds.shape__GT_filters(shape_SINGLEQUOTE_));
var bounds = app.common.geom.shapes.bounds.get_rect_filter_bounds.cljs$core$IFn$_invoke$arity$3(new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape),filters__$1,(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"value","value",305978217).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"blur","blur",-453500461).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return (0);
}
})());
var padding = app.common.geom.shapes.bounds.calculate_padding.cljs$core$IFn$_invoke$arity$1(shape);
var selrect = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(shape);
var vec__54324 = app.main.ui.shapes.filters.filter_coords(bounds,selrect,padding);
var filter_x = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54324,(0),null);
var filter_y = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54324,(1),null);
var filter_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54324,(2),null);
var filter_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54324,(3),null);
var filter_units = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54324,(4),null);
if((cljs.core.count(filters__$1) > (2))){
return rumext.v2.jsx("filter",{'id':filter_id,'x':filter_x,'y':filter_y,'width':filter_width,'height':filter_height,'filterUnits':filter_units,'colorInterpolationFilters':"sRGB",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54327){
var vec__54328 = p__54327;
var index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54328,(0),null);
var entry = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54328,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.shapes.filters.filter_entry,{'entry':entry},""+(filter_id ?? "")+"-"+(index ?? "")));

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(filters__$1))});
} else {
return null;
}
});

(app.main.ui.shapes.filters.filters.displayName = "filters");


//# sourceMappingURL=app.main.ui.shapes.filters.js.map
