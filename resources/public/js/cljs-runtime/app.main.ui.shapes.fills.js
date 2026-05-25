import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.text.js";
import "./app.config.js";
import "./app.main.ui.shapes.attrs.js";
import "./app.main.ui.shapes.embed.js";
import "./app.main.ui.shapes.gradients.js";
import "./app.util.object.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.fills');
app.main.ui.shapes.fills.no_repeat_padding = 1.05;
app.main.ui.shapes.fills.internal_fills = (function app$main$ui$shapes$fills$internal_fills(props_54715){
var props = props_54715;
var shape = (props["shape"]);
var render_id = (props["render-id"]);
var type = (shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)));
var image = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"fill-image","fill-image",-99895848));
var fills = cljs.core.get.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.PersistentVector.EMPTY);
var selrect = (shape?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"selrect","selrect",1966287292)));
var bounds = ((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?app.common.geom.shapes.text.shape__GT_rect(shape):null);
var metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"metadata","metadata",1799301597));
var x = (selrect?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (selrect?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"y","y",-1757859776)));
var width = (selrect?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"width","width",-384071477)));
var height = (selrect?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(selrect,new cljs.core.Keyword(null,"height","height",1025178622)));
var has_image_QMARK_ = (((!((metadata == null)))) || ((!((image == null)))));
var uri = (((!((metadata == null))))?app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(metadata):(((!((image == null))))?app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(image):null));
var uris = cljs.core.into.cljs$core$IFn$_invoke$arity$3(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [uri], null),cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.keep.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fill-image","fill-image",-99895848)),cljs.core.map.cljs$core$IFn$_invoke$arity$1(app.config.resolve_file_media)),fills);
var embed = app.main.ui.shapes.embed.use_data_uris(uris);
var transform = app.common.geom.shapes.transform_str.cljs$core$IFn$_invoke$arity$1(shape);
var pat_props = ({"patternUnits": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),type))?"objectBoundingBox":"userSpaceOnUse"), "x": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),type))?null:x), "y": ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"text","text",-1790561697),type))?null:y), "width": width, "height": height});
var pat_props__$1 = ((((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"path","path",-188191168),type)) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"bool","bool",1444635321),type))))?app.util.object.set_BANG_(pat_props,"patternTransform",transform):pat_props);
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,p__54716){
var vec__54717 = p__54716;
var obj_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54717,(0),null);
var obj = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54717,(1),null);
out_arr__46744__auto__.push(rumext.v2.jsxs(rumext.v2.Fragment,{'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto____$1,p__54720){
var vec__54721 = p__54720;
var fill_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54721,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54721,(1),null);
out_arr__46744__auto____$1.push((((!((new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870).cljs$core$IFn$_invoke$arity$1(value) == null))))?(function (){var gradient = new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870).cljs$core$IFn$_invoke$arity$1(value);
var from_p = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + (width * new cljs.core.Keyword(null,"start-x","start-x",-193941684).cljs$core$IFn$_invoke$arity$1(gradient))),(y + (height * new cljs.core.Keyword(null,"start-y","start-y",-771244577).cljs$core$IFn$_invoke$arity$1(gradient))));
var to_p = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((x + (width * new cljs.core.Keyword(null,"end-x","end-x",-1323983821).cljs$core$IFn$_invoke$arity$1(gradient))),(y + (height * new cljs.core.Keyword(null,"end-y","end-y",859881965).cljs$core$IFn$_invoke$arity$1(gradient))));
var gradient__$1 = (function (){var G__54724 = gradient;
if((!((bounds == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$variadic(G__54724,new cljs.core.Keyword(null,"start-x","start-x",-193941684),((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(from_p) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds)) / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bounds)),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"start-y","start-y",-771244577),((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(from_p) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds)) / new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bounds)),new cljs.core.Keyword(null,"end-x","end-x",-1323983821),((new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(to_p) - new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds)) / new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bounds)),new cljs.core.Keyword(null,"end-y","end-y",859881965),((new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(to_p) - new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds)) / new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bounds))], 0));
} else {
return G__54724;
}
})();
var props__$1 = ({"id": ""+"fill-color-gradient-"+(render_id ?? "")+"-"+(fill_index ?? ""), "key": ""+(fill_index ?? ""), "gradient": gradient__$1, "shape": obj});
var G__54725 = app.common.data.name(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(gradient__$1));
switch (G__54725) {
case "linear":
return rumext.v2.create_element(app.main.ui.shapes.gradients.linear_gradient,props__$1);

break;
case "radial":
return rumext.v2.create_element(app.main.ui.shapes.gradients.radial_gradient,props__$1);

break;
default:
throw (new Error(["No matching clause: ",G__54725].join('')));

}
})():null));

return out_arr__46744__auto____$1;
}),[],cljs.core.reverse(app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(obj,new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.PersistentVector.EMPTY)))),(function (){var fill_id = ""+"fill-"+(obj_index ?? "")+"-"+(render_id ?? "");
return rumext.v2.create_element("pattern",(function (){var G__54726 = (function (){var G__54727 = app.util.object.set_BANG_(app.util.object.clone(pat_props__$1),"id",fill_id);
if(((has_image_QMARK_) && ((bounds == null)))){
return app.util.object.set_BANG_(app.util.object.set_BANG_(G__54727,"width",(width * app.main.ui.shapes.fills.no_repeat_padding)),"height",(height * app.main.ui.shapes.fills.no_repeat_padding));
} else {
return G__54727;
}
})();
if((!((bounds == null)))){
return app.util.object.set_BANG_(app.util.object.set_BANG_(G__54726,"width",new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bounds)),"height",new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bounds));
} else {
return G__54726;
}
})(),rumext.v2.jsxs("g",{'children':[cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto____$1,p__54728){
var vec__54729 = p__54728;
var fill_index = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54729,(0),null);
var value = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__54729,(1),null);
out_arr__46744__auto____$1.push((function (){var style = app.main.ui.shapes.attrs.get_fill_style.cljs$core$IFn$_invoke$arity$4(value,fill_index,render_id,type);
var props__$1 = ({"key": ""+(fill_index ?? ""), "width": app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bounds),width), "height": app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bounds),height), "style": style});
if(cljs.core.truth_(new cljs.core.Keyword(null,"fill-image","fill-image",-99895848).cljs$core$IFn$_invoke$arity$1(value))){
var uri__$1 = app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fill-image","fill-image",-99895848).cljs$core$IFn$_invoke$arity$1(value));
var keep_ar_QMARK_ = new cljs.core.Keyword(null,"keep-aspect-ratio","keep-aspect-ratio",-475848727).cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"fill-image","fill-image",-99895848).cljs$core$IFn$_invoke$arity$1(value));
var image_props = ({"id": ""+"fill-image-"+(render_id ?? "")+"-"+(fill_index ?? ""), "href": cljs.core.get.cljs$core$IFn$_invoke$arity$3(embed,uri__$1,uri__$1), "preserveAspectRatio": (cljs.core.truth_(keep_ar_QMARK_)?"xMidYMid slice":"none"), "width": width, "height": height, "key": ""+(fill_index ?? ""), "opacity": new cljs.core.Keyword(null,"fill-opacity","fill-opacity",-537571170).cljs$core$IFn$_invoke$arity$1(value)});
return rumext.v2.create_element("image",image_props);
} else {
return rumext.v2.create_element("rect",props__$1);
}
})());

return out_arr__46744__auto____$1;
}),[],cljs.core.reverse(app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1(cljs.core.get.cljs$core$IFn$_invoke$arity$3(obj,new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.PersistentVector.EMPTY)))),((has_image_QMARK_)?rumext.v2.jsxs("g",{'children':[rumext.v2.jsx("rect",{'x':(0),'y':(0),'width':(width * app.main.ui.shapes.fills.no_repeat_padding),'height':(height * app.main.ui.shapes.fills.no_repeat_padding),'fill':"none"}),rumext.v2.jsx("image",{'href':uri,'preserveAspectRatio':"none",'x':(0),'y':(0),'width':width,'height':height})]}):null)]}));
})()]},""+(obj_index ?? "")));

return out_arr__46744__auto__;
}),[],app.common.data.enumerate.cljs$core$IFn$_invoke$arity$1((function (){var or__5025__auto__ = new cljs.core.Keyword(null,"position-data","position-data",-499622376).cljs$core$IFn$_invoke$arity$1(shape);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [shape], null);
}
})()));
});

(app.main.ui.shapes.fills.internal_fills.displayName = "internal-fills");

app.main.ui.shapes.fills.fills = (function app$main$ui$shapes$fills$fills(props_54732){
var props = props_54732;
var shape = (props["shape"]);
var type = (shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)));
var image = new cljs.core.Keyword(null,"fill-image","fill-image",-99895848).cljs$core$IFn$_invoke$arity$1(shape);
var fills__$1 = new cljs.core.Keyword(null,"fills","fills",902966780).cljs$core$IFn$_invoke$arity$2(shape,cljs.core.PersistentVector.EMPTY);
if(cljs.core.truth_((function (){var or__5025__auto__ = (!((image == null)));
if(or__5025__auto__){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"image","image",-58725096))) || (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(type,new cljs.core.Keyword(null,"text","text",-1790561697))));
if(or__5025__auto____$1){
return or__5025__auto____$1;
} else {
var or__5025__auto____$2 = (cljs.core.count(fills__$1) > (1));
if(or__5025__auto____$2){
return or__5025__auto____$2;
} else {
var or__5025__auto____$3 = cljs.core.some(new cljs.core.Keyword(null,"fill-color-gradient","fill-color-gradient",-2028374870),fills__$1);
if(cljs.core.truth_(or__5025__auto____$3)){
return or__5025__auto____$3;
} else {
return cljs.core.some(new cljs.core.Keyword(null,"fill-image","fill-image",-99895848),fills__$1);
}
}
}
}
})())){
return rumext.v2.create_element(app.main.ui.shapes.fills.internal_fills,props);
} else {
return null;
}
});

(app.main.ui.shapes.fills.fills.displayName = "fills");


//# sourceMappingURL=app.main.ui.shapes.fills.js.map
