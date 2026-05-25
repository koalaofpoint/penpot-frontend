import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.bounds.js";
import "./app.common.types.shape.layout.js";
import "./app.config.js";
import "./app.main.ui.context.js";
import "./app.main.ui.shapes.attrs.js";
import "./app.main.ui.shapes.custom_stroke.js";
import "./app.main.ui.shapes.filters.js";
import "./app.util.debug.js";
import "./app.util.object.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.frame');
app.main.ui.shapes.frame.frame_clip_id = (function app$main$ui$shapes$frame$frame_clip_id(shape,render_id){
return ""+"frame-clip-"+((shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092))) ?? "")+"-"+(render_id ?? "");
});
app.main.ui.shapes.frame.frame_clip_url = (function app$main$ui$shapes$frame$frame_clip_url(shape,render_id){
return ""+"url(#"+(app.main.ui.shapes.frame.frame_clip_id(shape,render_id) ?? "")+")";
});
app.main.ui.shapes.frame.frame_clip_def = (function app$main$ui$shapes$frame$frame_clip_def(props_54348){
var props = props_54348;
var shape = (props["shape"]);
if(((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && ((!(new cljs.core.Keyword(null,"show-content","show-content",-878000465).cljs$core$IFn$_invoke$arity$1(shape)))))){
var render_id = (props["render-id"]);
var x = (shape?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (shape?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"y","y",-1757859776)));
var w = (shape?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"width","width",-384071477)));
var h = (shape?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"height","height",1025178622)));
var t = app.common.geom.shapes.transform_str.cljs$core$IFn$_invoke$arity$1(shape);
var props__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (){
return app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.ui.shapes.attrs.add_border_props_BANG_(({}),shape),({"x": x, "y": y, "width": w, "height": h, "transform": t}));
}));
var path_QMARK_ = (!((props__$1.d == null)));
return rumext.v2.jsx("clipPath",{'id':app.main.ui.shapes.frame.frame_clip_id(shape,render_id),'className':"frame-clip frame-clip-def",'children':((path_QMARK_)?rumext.v2.create_element("path",props__$1):rumext.v2.create_element("rect",props__$1))});
} else {
return null;
}
});

(app.main.ui.shapes.frame.frame_clip_def.displayName = "frame-clip-def");

app.main.ui.shapes.frame.frame_container = (function app$main$ui$shapes$frame$frame_container(props_54355){
var props = props_54355;
var shape = (props["shape"]);
var children = (props["children"]);
var render_id = rumext.v2.use_ctx(app.main.ui.context.render_id);
var filter_id_blur = ""+"filter-blur-"+(render_id ?? "");
var filter_id_shadows = ""+"filter-shadow-"+(render_id ?? "");
var filter_str_blur = app.main.ui.shapes.filters.filter_str(filter_id_blur,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"shadow","shadow",873231803)));
var filter_str_shadows = app.main.ui.shapes.filters.filter_str(filter_id_shadows,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"blur","blur",-453500461)));
var x = (shape?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (shape?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"y","y",-1757859776)));
var w = (shape?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"width","width",-384071477)));
var h = (shape?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"height","height",1025178622)));
var opacity = (shape?.opacity?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"opacity","opacity",397153780)));
var transform = app.common.geom.shapes.transform_str.cljs$core$IFn$_invoke$arity$1(shape);
var show_content_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"show-content","show-content",-878000465));
var props__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape)],(function (){
return app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(app.main.ui.shapes.attrs.add_border_props_BANG_(({}),shape),({"x": x, "y": y, "width": w, "height": h, "transform": transform, "className": "frame-background"}));
}));
var path_QMARK_ = (!((props__$1.d == null)));
return rumext.v2.jsx("g",{'className':"frame-container-wrapper",'opacity':opacity,'children':rumext.v2.jsxs("g",{'className':"frame-container-blur",'filter':filter_str_blur,'children':[rumext.v2.jsxs("defs",{'children':[rumext.v2.jsx(app.main.ui.shapes.filters.filters,{'shape':cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"blur","blur",-453500461)),'filter-id':filter_id_shadows}),rumext.v2.jsx(app.main.ui.shapes.filters.filters,{'shape':cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"shadow","shadow",873231803),cljs.core.PersistentVector.EMPTY),'filter-id':filter_id_blur})]}),rumext.v2.jsx("g",{'className':"frame-container-shadows",'filter':filter_str_shadows,'children':rumext.v2.jsxs("g",{'clipPath':((show_content_QMARK_)?null:app.main.ui.shapes.frame.frame_clip_url(shape,render_id)),'fill':"none",'children':[rumext.v2.jsx(app.main.ui.shapes.custom_stroke.shape_fills,{'shape':shape,'children':((path_QMARK_)?rumext.v2.create_element("path",props__$1):rumext.v2.create_element("rect",props__$1))}),children]})}),rumext.v2.jsx(app.main.ui.shapes.custom_stroke.shape_strokes,{'shape':shape,'children':((path_QMARK_)?rumext.v2.create_element("path",props__$1):rumext.v2.create_element("rect",props__$1))})]})});
});

(app.main.ui.shapes.frame.frame_container.displayName = "frame-container");

app.main.ui.shapes.frame.frame_thumbnail_image = (function app$main$ui$shapes$frame$frame_thumbnail_image(props_54375){
var props = props_54375;
var shape = (props["shape"]);
var bounds = (props["bounds"]);
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var points = (shape?.points?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"points","points",-1486596883)));
var bounds__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(bounds),rumext.v2.adapt(points)],(function (){
var or__5025__auto__ = bounds;
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return app.common.geom.shapes.bounds.get_frame_bounds.cljs$core$IFn$_invoke$arity$1(shape);
}
}));
var thumb = app.config.resolve_media(new cljs.core.Keyword(null,"thumbnail-id","thumbnail-id",406242421).cljs$core$IFn$_invoke$arity$1(shape));
var debug_QMARK_ = app.util.debug.enabled_QMARK_(new cljs.core.Keyword(null,"thumbnails","thumbnails",-529239572));
var safari_QMARK_ = app.config.check_browser_QMARK_(new cljs.core.Keyword(null,"safari","safari",497115653));
var bx = new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds__$1);
var by = new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds__$1);
var bh = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bounds__$1);
var bw = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bounds__$1);
return rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx("image",{'width':bw,'height':bh,'className':"frame-thumbnail",'x':bx,'id':""+"thumbnail-"+(shape_id ?? ""),'href':thumb,'style':{'filter':(((((!(safari_QMARK_))) && (debug_QMARK_)))?"sepia(1)":null)},'decoding':"async",'y':by}),((((safari_QMARK_) && (debug_QMARK_)))?rumext.v2.jsx("rect",{'x':(bx + (4)),'y':(by + (4)),'width':(bw - (8)),'height':(bh - (8)),'stroke':"red",'strokeWidth':(2)}):null)]});
});

(app.main.ui.shapes.frame.frame_thumbnail_image.displayName = "frame-thumbnail-image");

app.main.ui.shapes.frame.frame_thumbnail = (function app$main$ui$shapes$frame$frame_thumbnail(props_54377){
var props = props_54377;
var shape = (props["shape"]);
if(new cljs.core.Keyword(null,"thumbnail-id","thumbnail-id",406242421).cljs$core$IFn$_invoke$arity$1(shape)){
return rumext.v2.create_element(app.main.ui.shapes.frame.frame_container,props,rumext.v2.create_element(app.main.ui.shapes.frame.frame_thumbnail_image,props));
} else {
return null;
}
});

(app.main.ui.shapes.frame.frame_thumbnail.displayName = "frame-thumbnail");

app.main.ui.shapes.frame.frame_shape = (function app$main$ui$shapes$frame$frame_shape(shape_wrapper){
var frame_shape__54379 = (function app$main$ui$shapes$frame$frame_shape_$_frame_shape(props_54378){
var props = props_54378;
var shape = (props["shape"]);
var childs = (props["childs"]);
var reverse_QMARK_ = ((app.common.types.shape.layout.flex_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (app.common.types.shape.layout.reverse_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)));
var childs__$1 = (function (){var G__54394 = childs;
if(app.common.types.shape.layout.any_layout_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)){
return app.common.types.shape.layout.sort_layout_children_z_index(G__54394,reverse_QMARK_);
} else {
return G__54394;
}
})();
return rumext.v2.create_element(app.main.ui.shapes.frame.frame_container,props,rumext.v2.jsx("g",{'className':"frame-children",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,item){
out_arr__46744__auto__.push((function (){var id = (item?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(item,new cljs.core.Keyword(null,"id","id",-1388402092)));
if((!((id == null)))){
return rumext.v2.jsx(shape_wrapper,{'shape':item},""+(id ?? ""));
} else {
return null;
}
})());

return out_arr__46744__auto__;
}),[],childs__$1)}));
});
(frame_shape__54379.displayName = "frame-shape");

return frame_shape__54379;
});

//# sourceMappingURL=app.main.ui.shapes.frame.js.map
