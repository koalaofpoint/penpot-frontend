import "./cljs_env.js";
import "./cljs.core.js";
import "./shadow.js.shim.module$react_dom$server.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.geom.shapes.bounds.js";
import "./app.common.logging.js";
import "./app.common.math.js";
import "./app.common.types.color.js";
import "./app.common.types.components_list.js";
import "./app.common.types.file.js";
import "./app.common.types.modifiers.js";
import "./app.common.types.shape_tree.js";
import "./app.common.types.shape.layout.js";
import "./app.config.js";
import "./app.main.fonts.js";
import "./app.main.ui.context.js";
import "./app.main.ui.shapes.bool.js";
import "./app.main.ui.shapes.circle.js";
import "./app.main.ui.shapes.embed.js";
import "./app.main.ui.shapes.export.js";
import "./app.main.ui.shapes.frame.js";
import "./app.main.ui.shapes.grid_layout_viewer.js";
import "./app.main.ui.shapes.group.js";
import "./app.main.ui.shapes.image.js";
import "./app.main.ui.shapes.path.js";
import "./app.main.ui.shapes.rect.js";
import "./app.main.ui.shapes.shape.js";
import "./app.main.ui.shapes.svg_raw.js";
import "./app.main.ui.shapes.text.js";
import "./app.main.ui.shapes.text.fontfaces.js";
import "./app.util.dom.js";
import "./app.util.http.js";
import "./app.util.strings.js";
import "./app.util.thumbnails.js";
import "./app.util.timers.js";
import "./beicon.v2.core.js";
import "./clojure.set.js";
import "./cuerdas.core.js";
import "./rumext.v2.js";
goog.provide('app.main.render');
app.main.render.viewbox_decimal_precision = (3);
app.main.render.default_color = "#E8E9EA";
app.main.render.background = (function app$main$render$background(props_54942){
var map__54943 = rumext.v2.util.wrap_props(props_54942);
var map__54943__$1 = cljs.core.__destructure_map(map__54943);
var vbox = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54943__$1,new cljs.core.Keyword(null,"vbox","vbox",-492787765));
var color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54943__$1,new cljs.core.Keyword(null,"color","color",1011675173));
return rumext.v2.jsx("rect",{'x':new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(vbox),'y':new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(vbox),'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(vbox),'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(vbox),'fill':color});
});

(app.main.render.background.displayName = "background");

app.main.render.calculate_dimensions = (function app$main$render$calculate_dimensions(objects,aspect_ratio){
var root_objects = app.common.types.shape_tree.get_root_objects(objects);
if(cljs.core.empty_QMARK_(root_objects)){
return app.common.geom.rect.fix_aspect_ratio(app.common.geom.rect.update_rect(app.common.geom.rect.make_rect.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"x","x",2099068185),(0),new cljs.core.Keyword(null,"y","y",-1757859776),(0),new cljs.core.Keyword(null,"width","width",-384071477),(100),new cljs.core.Keyword(null,"height","height",1025178622),(100)], null)),new cljs.core.Keyword(null,"position","position",-2011731912)),aspect_ratio);
} else {
var bounds = app.common.geom.rect.join_rects(cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.geom.shapes.bounds.get_object_bounds,objects),root_objects));
return app.common.geom.rect.fix_aspect_ratio(app.common.geom.rect.update_rect(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(cljs.core.update.cljs$core$IFn$_invoke$arity$4(bounds,new cljs.core.Keyword(null,"x","x",2099068185),app.common.math.finite,(0)),new cljs.core.Keyword(null,"y","y",-1757859776),app.common.math.finite,(0)),new cljs.core.Keyword(null,"width","width",-384071477),app.common.math.finite,(100000)),new cljs.core.Keyword(null,"height","height",1025178622),app.common.math.finite,(100000)),new cljs.core.Keyword(null,"position","position",-2011731912)),aspect_ratio);
}
});
app.main.render.frame_wrapper_factory = (function app$main$render$frame_wrapper_factory(objects){
var shape_wrapper = (app.main.render.shape_wrapper_factory.cljs$core$IFn$_invoke$arity$1 ? app.main.render.shape_wrapper_factory.cljs$core$IFn$_invoke$arity$1(objects) : app.main.render.shape_wrapper_factory.call(null,objects));
var frame_shape = app.main.ui.shapes.frame.frame_shape(shape_wrapper);
var frame_wrapper__54945 = (function app$main$render$frame_wrapper_factory_$_frame_wrapper(props_54944){
var shape = props_54944.shape;
var thumbnails_QMARK_ = rumext.v2.use_ctx(app.main.ui.context.render_thumbnails);
var childs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
if(cljs.core.truth_((function (){var and__5023__auto__ = thumbnails_QMARK_;
if(cljs.core.truth_(and__5023__auto__)){
return (!((new cljs.core.Keyword(null,"thumbnail-id","thumbnail-id",406242421).cljs$core$IFn$_invoke$arity$1(shape) == null)));
} else {
return and__5023__auto__;
}
})())){
return rumext.v2.jsx(app.main.ui.shapes.frame.frame_thumbnail,{'shape':shape,'bounds':new cljs.core.Keyword(null,"children-bounds","children-bounds",-1464963835).cljs$core$IFn$_invoke$arity$1(shape)});
} else {
return rumext.v2.jsx(frame_shape,{'shape':shape,'childs':childs});
}
});
(frame_wrapper__54945.displayName = "frame-wrapper");

return frame_wrapper__54945;
});
app.main.render.group_wrapper_factory = (function app$main$render$group_wrapper_factory(objects){
var shape_wrapper = (app.main.render.shape_wrapper_factory.cljs$core$IFn$_invoke$arity$1 ? app.main.render.shape_wrapper_factory.cljs$core$IFn$_invoke$arity$1(objects) : app.main.render.shape_wrapper_factory.call(null,objects));
var group_shape = app.main.ui.shapes.group.group_shape(shape_wrapper);
var group_wrapper__54948 = (function app$main$render$group_wrapper_factory_$_group_wrapper(props_54947){
var map__54949 = rumext.v2.util.wrap_props(props_54947);
var map__54949__$1 = cljs.core.__destructure_map(map__54949);
var props = map__54949__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54949__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var childs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54946_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__54946_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
return rumext.v2.jsx(group_shape,{'shape':shape,'is-child-selected?':true,'childs':childs});
});
(group_wrapper__54948.displayName = "group-wrapper");

return group_wrapper__54948;
});
app.main.render.bool_wrapper_factory = (function app$main$render$bool_wrapper_factory(objects){
var shape_wrapper = (app.main.render.shape_wrapper_factory.cljs$core$IFn$_invoke$arity$1 ? app.main.render.shape_wrapper_factory.cljs$core$IFn$_invoke$arity$1(objects) : app.main.render.shape_wrapper_factory.call(null,objects));
var bool_shape = app.main.ui.shapes.bool.bool_shape(shape_wrapper);
var bool_wrapper__54951 = (function app$main$render$bool_wrapper_factory_$_bool_wrapper(props_54950){
var map__54952 = rumext.v2.util.wrap_props(props_54950);
var map__54952__$1 = cljs.core.__destructure_map(map__54952);
var props = map__54952__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54952__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var childs = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)),rumext.v2.adapt(objects)],(function (){
return cljs.core.select_keys(objects,app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));
}));
return rumext.v2.jsx(bool_shape,{'shape':shape,'childs':childs});
});
(bool_wrapper__54951.displayName = "bool-wrapper");

return bool_wrapper__54951;
});
app.main.render.svg_raw_wrapper_factory = (function app$main$render$svg_raw_wrapper_factory(objects){
var shape_wrapper = (app.main.render.shape_wrapper_factory.cljs$core$IFn$_invoke$arity$1 ? app.main.render.shape_wrapper_factory.cljs$core$IFn$_invoke$arity$1(objects) : app.main.render.shape_wrapper_factory.call(null,objects));
var svg_raw_shape = app.main.ui.shapes.svg_raw.svg_raw_shape(shape_wrapper);
var svg_raw_wrapper__54955 = (function app$main$render$svg_raw_wrapper_factory_$_svg_raw_wrapper(props_54954){
var map__54956 = rumext.v2.util.wrap_props(props_54954);
var map__54956__$1 = cljs.core.__destructure_map(map__54956);
var props = map__54956__$1;
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54956__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var childs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__54953_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__54953_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
if(((cljs.core.map_QMARK_(new cljs.core.Keyword(null,"content","content",15833224).cljs$core$IFn$_invoke$arity$1(shape))) && (((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"tspan","tspan",-1557853197),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null)))) && (((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"svg","svg",856789142),cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null)))) || (cljs.core.contains_QMARK_(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772))))))))){
return rumext.v2.jsx(app.main.ui.shapes.shape.shape_container,{'shape':shape,'children':rumext.v2.jsx(svg_raw_shape,{'shape':shape,'childs':childs})});
} else {
return rumext.v2.jsx(svg_raw_shape,{'shape':shape,'childs':childs});
}
});
(svg_raw_wrapper__54955.displayName = "svg-raw-wrapper");

return svg_raw_wrapper__54955;
});
app.main.render.shape_wrapper_factory = (function app$main$render$shape_wrapper_factory(objects){
var shape_wrapper__54958 = (function app$main$render$shape_wrapper_factory_$_shape_wrapper(props_54957){
var map__54959 = rumext.v2.util.wrap_props(props_54957);
var map__54959__$1 = cljs.core.__destructure_map(map__54959);
var props = map__54959__$1;
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54959__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54959__$1,new cljs.core.Keyword(null,"shape","shape",1190694006));
var group_wrapper = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.main.render.group_wrapper_factory(objects);
}));
var svg_raw_wrapper = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.main.render.svg_raw_wrapper_factory(objects);
}));
var bool_wrapper = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.main.render.bool_wrapper_factory(objects);
}));
var frame_wrapper = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.main.render.frame_wrapper_factory(objects);
}));
if(cljs.core.truth_(shape)){
var opts = ({"shape": shape});
var svg_raw_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"svg-raw","svg-raw",-594329202),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape));
if((!(svg_raw_QMARK_))){
return rumext.v2.jsx(app.main.ui.shapes.shape.shape_container,{'shape':shape,'children':(function (){var G__54960 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape);
var G__54960__$1 = (((G__54960 instanceof cljs.core.Keyword))?G__54960.fqn:null);
switch (G__54960__$1) {
case "text":
return rumext.v2.create_element(app.main.ui.shapes.text.text_shape,opts);

break;
case "rect":
return rumext.v2.create_element(app.main.ui.shapes.rect.rect_shape,opts);

break;
case "path":
return rumext.v2.create_element(app.main.ui.shapes.path.path_shape,opts);

break;
case "image":
return rumext.v2.create_element(app.main.ui.shapes.image.image_shape,opts);

break;
case "circle":
return rumext.v2.create_element(app.main.ui.shapes.circle.circle_shape,opts);

break;
case "frame":
return rumext.v2.jsx(frame_wrapper,{'shape':shape});

break;
case "group":
return rumext.v2.jsx(group_wrapper,{'shape':shape,'frame':frame});

break;
case "bool":
return rumext.v2.jsx(bool_wrapper,{'shape':shape,'frame':frame});

break;
default:
return null;

}
})()});
} else {
return rumext.v2.jsx(svg_raw_wrapper,{'shape':shape,'frame':frame});
}
} else {
return null;
}
});
(shape_wrapper__54958.displayName = "shape-wrapper");

return shape_wrapper__54958;
});
/**
 * Format a viewbox given a rectangle
 */
app.main.render.format_viewbox = (function app$main$render$format_viewbox(p__54962){
var map__54963 = p__54962;
var map__54963__$1 = cljs.core.__destructure_map(map__54963);
var x = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54963__$1,new cljs.core.Keyword(null,"x","x",2099068185),(0));
var y = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54963__$1,new cljs.core.Keyword(null,"y","y",-1757859776),(0));
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54963__$1,new cljs.core.Keyword(null,"width","width",-384071477),(100));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54963__$1,new cljs.core.Keyword(null,"height","height",1025178622),(100));
return cuerdas.core.join.cljs$core$IFn$_invoke$arity$2(" ",cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54961_SHARP_){
return app.util.strings.format_precision(p1__54961_SHARP_,(3));
}),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [x,y,width,height], null)));
});
app.main.render.adapt_root_frame = (function app$main$render$adapt_root_frame(objects,object){
var shapes = app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$1(objects);
var srect = app.common.geom.shapes.shapes__GT_rect(shapes);
var object__$1 = cljs.core.merge.cljs$core$IFn$_invoke$arity$variadic(cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([object,cljs.core.select_keys(srect,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"x","x",2099068185),new cljs.core.Keyword(null,"y","y",-1757859776),new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"height","height",1025178622)], null))], 0));
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(object__$1,new cljs.core.Keyword(null,"fill-color","fill-color",-1156875903),"#f0f0f0");
});
app.main.render.adapt_objects_for_shape = (function app$main$render$adapt_objects_for_shape(objects,object_id){
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,object_id);
var object__$1 = (function (){var G__54970 = object;
if(app.common.files.helpers.root_QMARK_(object)){
return app.main.render.adapt_root_frame(objects,G__54970);
} else {
return G__54970;
}
})();
var objects__$1 = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(objects,object_id,object__$1);
var vector = app.common.geom.point.negate(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(object__$1),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(object__$1)));
var mod_ids = cljs.core.cons(object_id,app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects__$1,object_id));
var updt_fn = (function (p1__54964_SHARP_,p2__54965_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__54964_SHARP_,p2__54965_SHARP_,app.common.geom.shapes.transform_shape,app.common.types.modifiers.move_modifiers.cljs$core$IFn$_invoke$arity$1(vector));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(updt_fn,objects__$1,mod_ids);
});
app.main.render.page_svg = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$render$page_svg(props_54973){
var map__54979 = rumext.v2.util.wrap_props(props_54973);
var map__54979__$1 = cljs.core.__destructure_map(map__54979);
var props = map__54979__$1;
var data = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54979__$1,new cljs.core.Keyword(null,"data","data",-232669377));
var use_thumbnails = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54979__$1,new cljs.core.Keyword(null,"use-thumbnails","use-thumbnails",1849918701));
var embed = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54979__$1,new cljs.core.Keyword(null,"embed","embed",-1354913349),false);
var include_metadata = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54979__$1,new cljs.core.Keyword(null,"include-metadata","include-metadata",1795532512),false);
var aspect_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54979__$1,new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504));
var objects = new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(data);
var shapes = app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$1(objects);
var dim = app.main.render.calculate_dimensions(objects,aspect_ratio);
var vbox = app.main.render.format_viewbox(dim);
var bgcolor = cljs.core.get.cljs$core$IFn$_invoke$arity$3(data,new cljs.core.Keyword(null,"background","background",-863952629),app.main.render.default_color);
var shape_wrapper = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.main.render.shape_wrapper_factory(objects);
}));
return rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.render_thumbnails),{'value':use_thumbnails,'children':rumext.v2.jsx(rumext.v2.provider(app.main.ui.shapes.embed.context),{'value':embed,'children':rumext.v2.jsx(rumext.v2.provider(app.main.ui.shapes.export$.include_metadata_ctx),{'value':include_metadata,'children':rumext.v2.jsxs("svg",{'viewBox':vbox,'version':"1.1",'xmlns':"http://www.w3.org/2000/svg",'xmlnsXlink':"http://www.w3.org/1999/xlink",'xmlns:penpot':(cljs.core.truth_(include_metadata)?"https://penpot.app/xmlns":null),'style':{'width':"100%",'height':"100%",'background':bgcolor},'fill':"none",'children':[(cljs.core.truth_(include_metadata)?rumext.v2.jsx(app.main.ui.shapes.export$.export_page,{'page':data}):null),(function (){var shapes__$1 = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic((function (p1__54972_SHARP_){
return app.common.files.helpers.get_children_with_self(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__54972_SHARP_));
}),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.remove.cljs$core$IFn$_invoke$arity$2(app.common.files.helpers.frame_shape_QMARK_,shapes)], 0));
var fonts = app.main.ui.shapes.text.fontfaces.shapes__GT_fonts(shapes__$1);
return rumext.v2.jsx(app.main.ui.shapes.text.fontfaces.fontfaces_style,{'fonts':fonts});
})(),cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,item){
out_arr__46744__auto__.push(rumext.v2.jsx(shape_wrapper,{'shape':item},new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(item)));

return out_arr__46744__auto__;
}),[],shapes)]})})})});
}));

(app.main.render.page_svg.displayName = "page-svg");

app.main.render.frame_imposter = (function app$main$render$frame_imposter(props_54981){
var x = props_54981.x;
var height = props_54981.height;
var y = props_54981.y;
var frame = props_54981.frame;
var objects = props_54981.objects;
var vbox = props_54981.vbox;
var width = props_54981.width;
var background = props_54981.background;
var shape_wrapper = app.main.render.shape_wrapper_factory(objects);
return rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.render_thumbnails),{'value':false,'children':rumext.v2.jsxs("svg",{'viewBox':vbox,'width':app.util.strings.format_precision(width,(3)),'height':app.util.strings.format_precision(height,(3)),'version':"1.1",'xmlns':"http://www.w3.org/2000/svg",'xmlnsXlink':"http://www.w3.org/1999/xlink",'fill':"none",'children':[(((!((background == null))))?rumext.v2.jsx("rect",{'x':x,'y':y,'width':width,'height':height,'fill':background}):null),rumext.v2.jsx(shape_wrapper,{'shape':frame})]})});
});

(app.main.render.frame_imposter.displayName = "frame-imposter");

app.main.render.frame_svg = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$render$frame_svg(props_54987){
var map__54989 = rumext.v2.util.wrap_props(props_54987);
var map__54989__$1 = cljs.core.__destructure_map(map__54989);
var props = map__54989__$1;
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54989__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54989__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__54989__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(1));
var use_thumbnails = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54989__$1,new cljs.core.Keyword(null,"use-thumbnails","use-thumbnails",1849918701));
var aspect_ratio = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54989__$1,new cljs.core.Keyword(null,"aspect-ratio","aspect-ratio",1674013504));
var background_color = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__54989__$1,new cljs.core.Keyword(null,"background-color","background-color",570434026));
var frame_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame);
var bgcolor = app.common.data.nilv.cljs$core$IFn$_invoke$arity$2(background_color,app.main.render.default_color);
var include_metadata = rumext.v2.use_ctx(app.main.ui.shapes.export$.include_metadata_ctx);
var bounds = app.common.geom.rect.fix_aspect_ratio(app.common.geom.shapes.bounds.get_object_bounds.cljs$core$IFn$_invoke$arity$2(objects,frame),aspect_ratio);
var bounds2 = app.common.geom.shapes.bounds.get_object_bounds.cljs$core$IFn$_invoke$arity$2(objects,cljs.core.dissoc.cljs$core$IFn$_invoke$arity$variadic(frame,new cljs.core.Keyword(null,"shadow","shadow",873231803),cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([new cljs.core.Keyword(null,"blur","blur",-453500461)], 0)));
var delta_bounds = app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(bounds),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(bounds));
var vector = app.common.geom.point.negate(delta_bounds);
var children_ids = app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,frame_id);
var objects__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(frame_id),rumext.v2.adapt(objects),rumext.v2.adapt(vector)],(function (){
var update_fn = (function (p1__54985_SHARP_,p2__54986_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__54985_SHARP_,p2__54986_SHARP_,app.common.geom.shapes.transform_shape,app.common.types.modifiers.move_modifiers.cljs$core$IFn$_invoke$arity$1(vector));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(update_fn,objects,cljs.core.into.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [frame_id], null),children_ids));
}));
var frame__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(vector)],(function (){
return app.common.geom.shapes.transform_shape.cljs$core$IFn$_invoke$arity$2(frame,app.common.types.modifiers.move_modifiers.cljs$core$IFn$_invoke$arity$1(vector));
}));
var frame__$2 = (function (){var G__54994 = frame__$1;
if((((!((bounds == null)))) && ((new cljs.core.Keyword(null,"children-bounds","children-bounds",-1464963835).cljs$core$IFn$_invoke$arity$1(bounds) == null)))){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__54994,new cljs.core.Keyword(null,"children-bounds","children-bounds",-1464963835),bounds2);
} else {
return G__54994;
}
})();
var frame__$3 = cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(cljs.core.update_in.cljs$core$IFn$_invoke$arity$4(frame__$2,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children-bounds","children-bounds",-1464963835),new cljs.core.Keyword(null,"x","x",2099068185)], null),cljs.core._,new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(delta_bounds)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"children-bounds","children-bounds",-1464963835),new cljs.core.Keyword(null,"y","y",-1757859776)], null),cljs.core._,new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(delta_bounds));
var shape_wrapper = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects__$1)],(function (){
return app.main.render.shape_wrapper_factory(objects__$1);
}));
var width = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(bounds) * zoom);
var height = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(bounds) * zoom);
var vbox = app.main.render.format_viewbox(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$2(bounds,(0)),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$2(bounds,(0))], null));
return rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.render_thumbnails),{'value':use_thumbnails,'children':rumext.v2.jsx("svg",{'xmlns:penpot':(cljs.core.truth_(include_metadata)?"https://penpot.app/xmlns":null),'width':app.util.strings.format_precision(width,(3)),'xmlns':"http://www.w3.org/2000/svg",'height':app.util.strings.format_precision(height,(3)),'children':rumext.v2.jsx(shape_wrapper,{'shape':frame__$3}),'viewBox':vbox,'style':{'background':bgcolor},'xmlnsXlink':"http://www.w3.org/1999/xlink",'fill':"none",'version':"1.1"})});
}));

(app.main.render.frame_svg.displayName = "frame-svg");

app.main.render.empty_grids = (function app$main$render$empty_grids(props_55003){
var root_shape_id = (props_55003["root-shape-id"]);
var objects = props_55003.objects;
var empty_grids__$1 = cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55002_SHARP_){
return cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(p1__55002_SHARP_));
}),cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__55001_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__55001_SHARP_);
}),cljs.core.filter.cljs$core$IFn$_invoke$arity$2((function (p1__55000_SHARP_){
return app.common.types.shape.layout.grid_layout_QMARK_.cljs$core$IFn$_invoke$arity$2(objects,p1__55000_SHARP_);
}),cljs.core.cons(root_shape_id,app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,root_shape_id)))));
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,grid){
out_arr__46744__auto__.push(rumext.v2.jsx(app.main.ui.shapes.grid_layout_viewer.grid_layout_viewer,{'shape':grid,'objects':objects}));

return out_arr__46744__auto__;
}),[],empty_grids__$1);
});

(app.main.render.empty_grids.displayName = "empty-grids");

app.main.render.component_svg = (function (p1__55006_SHARP_){
return rumext.v2.deferred.cljs$core$IFn$_invoke$arity$2(p1__55006_SHARP_,app.util.timers.idle_then_raf);
})(rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$render$component_svg(props_55010){
var map__55021 = rumext.v2.util.wrap_props(props_55010);
var map__55021__$1 = cljs.core.__destructure_map(map__55021);
var props = map__55021__$1;
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55021__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var root_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55021__$1,new cljs.core.Keyword(null,"root-shape","root-shape",1863248774));
var show_grids_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55021__$1,new cljs.core.Keyword(null,"show-grids?","show-grids?",-1588571301));
var is_hidden = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55021__$1,new cljs.core.Keyword(null,"is-hidden","is-hidden",1850308789));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55021__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(1));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55021__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
if(cljs.core.truth_(root_shape)){
var root_shape_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root_shape);
var include_metadata = rumext.v2.use_ctx(app.main.ui.shapes.export$.include_metadata_ctx);
var vector = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(root_shape)),rumext.v2.adapt(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(root_shape))],(function (){
return app.common.geom.point.negate(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(root_shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(root_shape)));
}));
var objects__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(vector),rumext.v2.adapt(objects),rumext.v2.adapt(root_shape_id)],(function (){
var children_ids = cljs.core.cons(root_shape_id,app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,root_shape_id));
var update_fn = (function (p1__55007_SHARP_,p2__55008_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__55007_SHARP_,p2__55008_SHARP_,app.common.geom.shapes.transform_shape,app.common.types.modifiers.move_modifiers.cljs$core$IFn$_invoke$arity$1(vector));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(update_fn,objects,children_ids);
}));
var root_shape_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects__$1,root_shape_id);
var width = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(root_shape_SINGLEQUOTE_) * zoom);
var height = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(root_shape_SINGLEQUOTE_) * zoom);
var vbox = app.main.render.format_viewbox(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$2(root_shape_SINGLEQUOTE_,(0)),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$2(root_shape_SINGLEQUOTE_,(0))], null));
var root_shape_wrapper = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects__$1),rumext.v2.adapt(root_shape_SINGLEQUOTE_)],(function (){
var G__55023 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(root_shape_SINGLEQUOTE_);
var G__55023__$1 = (((G__55023 instanceof cljs.core.Keyword))?G__55023.fqn:null);
switch (G__55023__$1) {
case "group":
return app.main.render.group_wrapper_factory(objects__$1);

break;
case "frame":
return app.main.render.frame_wrapper_factory(objects__$1);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55023__$1)].join('')));

}
}));
return rumext.v2.jsx("svg",{'xmlns:penpot':(cljs.core.truth_(include_metadata)?"https://penpot.app/xmlns":null),'width':app.util.strings.format_precision(width,(3)),'xmlns':"http://www.w3.org/2000/svg",'height':app.util.strings.format_precision(height,(3)),'className':class$,'children':(cljs.core.truth_(is_hidden)?null:rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.shapes.shape.shape_container,{'shape':root_shape_SINGLEQUOTE_,'children':rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.is_component_QMARK_),{'value':true,'children':rumext.v2.jsx(root_shape_wrapper,{'shape':root_shape_SINGLEQUOTE_,'view-box':vbox})})}),(cljs.core.truth_(show_grids_QMARK_)?rumext.v2.jsx(app.main.render.empty_grids,{'root-shape-id':root_shape_id,'objects':objects__$1}):null)]})),'viewBox':vbox,'xmlnsXlink':"http://www.w3.org/1999/xlink",'fill':"none",'version':"1.1"});
} else {
return null;
}
})));

(app.main.render.component_svg.displayName = "component-svg");

app.main.render.component_svg_thumbnail = (function (p1__55024_SHARP_){
return rumext.v2.deferred.cljs$core$IFn$_invoke$arity$2(p1__55024_SHARP_,app.util.timers.idle_then_raf);
})(rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$render$component_svg_thumbnail(props_55027){
var map__55028 = rumext.v2.util.wrap_props(props_55027);
var map__55028__$1 = cljs.core.__destructure_map(map__55028);
var props = map__55028__$1;
var thumbnail_uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55028__$1,new cljs.core.Keyword(null,"thumbnail-uri","thumbnail-uri",1904972561));
var on_error = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55028__$1,new cljs.core.Keyword(null,"on-error","on-error",1728533530));
var show_grids_QMARK_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55028__$1,new cljs.core.Keyword(null,"show-grids?","show-grids?",-1588571301));
var class$ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55028__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55028__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var root_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55028__$1,new cljs.core.Keyword(null,"root-shape","root-shape",1863248774));
var zoom = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55028__$1,new cljs.core.Keyword(null,"zoom","zoom",-1827487038),(1));
if(cljs.core.truth_(root_shape)){
var root_shape_id = new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(root_shape);
var vector = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(root_shape)),rumext.v2.adapt(new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(root_shape))],(function (){
return app.common.geom.point.negate(app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(root_shape),new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(root_shape)));
}));
var objects__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(vector),rumext.v2.adapt(objects),rumext.v2.adapt(root_shape_id)],(function (){
var children_ids = cljs.core.cons(root_shape_id,app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,root_shape_id));
var update_fn = (function (p1__55025_SHARP_,p2__55026_SHARP_){
return cljs.core.update.cljs$core$IFn$_invoke$arity$4(p1__55025_SHARP_,p2__55026_SHARP_,app.common.geom.shapes.transform_shape,app.common.types.modifiers.move_modifiers.cljs$core$IFn$_invoke$arity$1(vector));
});
return cljs.core.reduce.cljs$core$IFn$_invoke$arity$3(update_fn,objects,children_ids);
}));
var root_shape_SINGLEQUOTE_ = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects__$1,root_shape_id);
var width = new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$2(root_shape_SINGLEQUOTE_,(0));
var height = new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$2(root_shape_SINGLEQUOTE_,(0));
var width_zoom = (new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(root_shape_SINGLEQUOTE_) * zoom);
var height_zoom = (new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(root_shape_SINGLEQUOTE_) * zoom);
var vbox = app.main.render.format_viewbox(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),width,new cljs.core.Keyword(null,"height","height",1025178622),height], null));
return rumext.v2.jsxs("svg",{'width':app.util.strings.format_precision(width_zoom,(3)),'xmlns':"http://www.w3.org/2000/svg",'height':app.util.strings.format_precision(height_zoom,(3)),'className':class$,'children':[rumext.v2.jsx("image",{'x':(0),'y':(0),'width':width,'height':height,'href':thumbnail_uri,'onError':on_error,'loading':"lazy",'decoding':"async"}),(cljs.core.truth_(show_grids_QMARK_)?rumext.v2.jsx(app.main.render.empty_grids,{'root-shape-id':root_shape_id,'objects':objects__$1}):null)],'viewBox':vbox,'xmlnsXlink':"http://www.w3.org/1999/xlink",'fill':"none",'version':"1.1"});
} else {
return null;
}
})));

(app.main.render.component_svg_thumbnail.displayName = "component-svg-thumbnail");

app.main.render.object_svg = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$render$object_svg(props_55029){
var map__55037 = rumext.v2.util.wrap_props(props_55029);
var map__55037__$1 = cljs.core.__destructure_map(map__55037);
var props = map__55037__$1;
var objects = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55037__$1,new cljs.core.Keyword(null,"objects","objects",2099713734));
var object_id = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55037__$1,new cljs.core.Keyword(null,"object-id","object-id",-754527291));
var embed = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__55037__$1,new cljs.core.Keyword(null,"embed","embed",-1354913349),false);
var skip_children = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55037__$1,new cljs.core.Keyword(null,"skip-children","skip-children",1139347942));
var object = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,object_id);
var object__$1 = (function (){var G__55039 = object;
var G__55039__$1 = (cljs.core.truth_(new cljs.core.Keyword(null,"hide-fill-on-export","hide-fill-on-export",-1674607391).cljs$core$IFn$_invoke$arity$1(object))?cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55039,new cljs.core.Keyword(null,"fills","fills",902966780),cljs.core.PersistentVector.EMPTY):G__55039);
if(cljs.core.truth_(skip_children)){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(G__55039__$1,new cljs.core.Keyword(null,"shapes","shapes",1897594879),cljs.core.PersistentVector.EMPTY);
} else {
return G__55039__$1;
}
})();
var map__55038 = app.common.geom.shapes.bounds.get_object_bounds.cljs$core$IFn$_invoke$arity$3(objects,object__$1,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-margin?","ignore-margin?",1173241988),false], null));
var map__55038__$1 = cljs.core.__destructure_map(map__55038);
var bounds = map__55038__$1;
var width = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55038__$1,new cljs.core.Keyword(null,"width","width",-384071477));
var height = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55038__$1,new cljs.core.Keyword(null,"height","height",1025178622));
var vbox = app.main.render.format_viewbox(bounds);
var fonts = app.main.ui.shapes.text.fontfaces.shape__GT_fonts(object__$1,objects);
var shape_wrapper = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.main.render.shape_wrapper_factory(objects);
}));
return rumext.v2.jsx(rumext.v2.provider(app.main.ui.shapes.export$.include_metadata_ctx),{'value':false,'children':rumext.v2.jsx(rumext.v2.provider(app.main.ui.shapes.embed.context),{'value':embed,'children':rumext.v2.jsxs("svg",{'width':app.util.strings.format_precision(width,(3)),'xmlns':"http://www.w3.org/2000/svg",'height':app.util.strings.format_precision(height,(3)),'children':[rumext.v2.jsx(app.main.ui.shapes.text.fontfaces.fontfaces_style,{'fonts':fonts}),rumext.v2.jsx(shape_wrapper,{'shape':object__$1})],'id':""+"screenshot-"+(object_id ?? ""),'viewBox':vbox,'style':{'WebkitPrintColorAdjust':new cljs.core.Keyword(null,"exact","exact",1438022323)},'xmlnsXlink':"http://www.w3.org/1999/xlink",'fill':"none",'version':"1.1"})})});
}));

(app.main.render.object_svg.displayName = "object-svg");

app.main.render.component_symbol = (function app$main$render$component_symbol(props_55052){
var map__55064 = rumext.v2.util.wrap_props(props_55052);
var map__55064__$1 = cljs.core.__destructure_map(map__55064);
var props = map__55064__$1;
var component = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__55064__$1,new cljs.core.Keyword(null,"component","component",1555936782));
var name = new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(component);
var path = new cljs.core.Keyword(null,"path","path",-188191168).cljs$core$IFn$_invoke$arity$1(component);
var root_id = (function (){var or__5025__auto__ = new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component);
}
})();
var orig_root = cljs.core.get.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component),root_id);
var objects = app.main.render.adapt_objects_for_shape(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(component),root_id);
var root_shape = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,root_id);
var selrect = new cljs.core.Keyword(null,"selrect","selrect",1966287292).cljs$core$IFn$_invoke$arity$1(root_shape);
var main_instance_id = new cljs.core.Keyword(null,"main-instance-id","main-instance-id",1035682372).cljs$core$IFn$_invoke$arity$1(component);
var main_instance_page = new cljs.core.Keyword(null,"main-instance-page","main-instance-page",1727937139).cljs$core$IFn$_invoke$arity$1(component);
var main_instance_x = (cljs.core.truth_(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))?new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(orig_root):null);
var main_instance_y = (cljs.core.truth_(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))?new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(orig_root):null);
var main_instance_parent = (cljs.core.truth_(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))?new cljs.core.Keyword(null,"parent-id","parent-id",-1400729131).cljs$core$IFn$_invoke$arity$1(orig_root):null);
var main_instance_frame = (cljs.core.truth_(new cljs.core.Keyword(null,"deleted","deleted",-510100639).cljs$core$IFn$_invoke$arity$1(component))?new cljs.core.Keyword(null,"frame-id","frame-id",-636372072).cljs$core$IFn$_invoke$arity$1(orig_root):null);
var vbox = app.main.render.format_viewbox(new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"width","width",-384071477),new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(selrect),new cljs.core.Keyword(null,"height","height",1025178622),new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(selrect)], null));
var group_wrapper = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.main.render.group_wrapper_factory(objects);
}));
var frame_wrapper = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.main.render.frame_wrapper_factory(objects);
}));
if(cljs.core.truth_(root_shape)){
return rumext.v2.create_element("symbol",({"penpot:main-instance-y": main_instance_y, "penpot:main-instance-page": main_instance_page, "id": cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component)), "penpot:main-instance-x": main_instance_x, "penpot:main-instance-id": main_instance_id, "penpot:main-instance-frame": main_instance_frame, "viewBox": vbox, "penpot:main-instance-parent": main_instance_parent, "penpot:path": path}),rumext.v2.jsx("title",{'children':name}),rumext.v2.jsx(app.main.ui.shapes.shape.shape_container,{'shape':root_shape,'children':(function (){var G__55067 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(root_shape);
var G__55067__$1 = (((G__55067 instanceof cljs.core.Keyword))?G__55067.fqn:null);
switch (G__55067__$1) {
case "group":
return rumext.v2.jsx(group_wrapper,{'shape':root_shape,'view-box':vbox});

break;
case "frame":
return rumext.v2.jsx(frame_wrapper,{'shape':root_shape,'view-box':vbox});

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__55067__$1)].join('')));

}
})()}));
} else {
return null;
}
});

(app.main.render.component_symbol.displayName = "component-symbol");

app.main.render.components_svg = (function app$main$render$components_svg(props_55070){
var embed = props_55070.embed;
var data = props_55070.data;
var include_metadata = (props_55070["include-metadata"]);
var children = props_55070.children;
var deleted_QMARK_ = (props_55070["deleted?"]);
var components = ((cljs.core.not(deleted_QMARK_))?app.common.types.components_list.components_seq(data):app.common.types.components_list.deleted_components_seq(data));
return rumext.v2.jsx(rumext.v2.provider(app.main.ui.shapes.embed.context),{'value':embed,'children':rumext.v2.jsx(rumext.v2.provider(app.main.ui.shapes.export$.include_metadata_ctx),{'value':include_metadata,'children':rumext.v2.jsxs("svg",{'version':"1.1",'xmlns':"http://www.w3.org/2000/svg",'xmlnsXlink':"http://www.w3.org/1999/xlink",'xmlns:penpot':(cljs.core.truth_(include_metadata)?"https://penpot.app/xmlns":null),'style':{'display':(((!((children == null))))?null:"none")},'fill':"none",'children':[rumext.v2.jsx("defs",{'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__46744__auto__,component){
out_arr__46744__auto__.push((function (){var component__$1 = app.common.types.file.load_component_objects.cljs$core$IFn$_invoke$arity$2(data,component);
return rumext.v2.jsx(app.main.render.component_symbol,{'component':component__$1},""+(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(component__$1) ?? ""));
})());

return out_arr__46744__auto__;
}),[],components)}),children]})})});
});

(app.main.render.components_svg.displayName = "components-svg");

app.main.render.get_image_data = (function app$main$render$get_image_data(shape){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"image","image",-58725096),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"metadata","metadata",1799301597).cljs$core$IFn$_invoke$arity$1(shape)], null);
} else {
if((!((new cljs.core.Keyword(null,"fill-image","fill-image",-99895848).cljs$core$IFn$_invoke$arity$1(shape) == null)))){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"fill-image","fill-image",-99895848).cljs$core$IFn$_invoke$arity$1(shape)], null);
} else {
return cljs.core.PersistentVector.EMPTY;

}
}
});
app.main.render.populate_images_cache = (function app$main$render$populate_images_cache(objects){
var images = cljs.core.mapcat.cljs$core$IFn$_invoke$arity$variadic(app.main.render.get_image_data,cljs.core.prim_seq.cljs$core$IFn$_invoke$arity$2([cljs.core.vals(objects)], 0));
return beicon.v2.core.merge_map(app.util.http.fetch_data_uri,beicon.v2.core.map((function (p1__55071_SHARP_){
return app.config.resolve_file_media.cljs$core$IFn$_invoke$arity$1(p1__55071_SHARP_);
}),beicon.v2.core.from(images)));
});
app.main.render.populate_fonts_cache = (function app$main$render$populate_fonts_cache(objects){
var texts = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"content","content",15833224),cljs.core.filterv((function (p1__55072_SHARP_){
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(p1__55072_SHARP_),new cljs.core.Keyword(null,"text","text",-1790561697));
}),cljs.core.vals(objects)));
return beicon.v2.core.merge_map(app.util.http.fetch_data_uri,beicon.v2.core.merge_map(app.main.fonts.extract_fontface_urls,beicon.v2.core.merge_map(app.main.fonts.fetch_font_css,beicon.v2.core.merge_map(cljs.core.identity,beicon.v2.core.reduce.cljs$core$IFn$_invoke$arity$3(clojure.set.union,cljs.core.PersistentHashSet.EMPTY,beicon.v2.core.map(app.main.fonts.get_content_fonts,beicon.v2.core.from(texts)))))));
});
app.main.render.render_page = (function app$main$render$render_page(data){
return beicon.v2.core.concat(beicon.v2.core.ignore(beicon.v2.core.merge(app.main.render.populate_images_cache(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(data)),app.main.render.populate_fonts_cache(new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(data)))),beicon.v2.core.map((function (data__$1){
var elem = rumext.v2.element.cljs$core$IFn$_invoke$arity$2(app.main.render.page_svg,({"data": data__$1, "embed": true, "include-metadata": true}));
return shadow.js.shim.module$react_dom$server.renderToStaticMarkup(elem);
}),beicon.v2.core.of(data)));
});
app.main.render.render_components = (function app$main$render$render_components(data,deleted_QMARK_){
var components = ((cljs.core.not(deleted_QMARK_))?app.common.types.components_list.components_seq(data):app.common.types.components_list.deleted_components_seq(data));
var objects = cljs.core.reduce.cljs$core$IFn$_invoke$arity$2(cljs.core.conj,cljs.core.map.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"objects","objects",2099713734),cljs.core.map.cljs$core$IFn$_invoke$arity$2(cljs.core.partial.cljs$core$IFn$_invoke$arity$2(app.common.types.file.load_component_objects,data),components)));
return beicon.v2.core.concat(beicon.v2.core.ignore(beicon.v2.core.merge(app.main.render.populate_images_cache(objects),app.main.render.populate_fonts_cache(objects))),beicon.v2.core.map((function (data__$1){
var elem = rumext.v2.element.cljs$core$IFn$_invoke$arity$2(app.main.render.components_svg,({"data": data__$1, "embed": true, "include-metadata": true, "deleted?": deleted_QMARK_}));
return shadow.js.shim.module$react_dom$server.renderToStaticMarkup(elem);
}),beicon.v2.core.of(data)));
});
app.main.render.render_frame = (function app$main$render$render_frame(var_args){
var G__55074 = arguments.length;
switch (G__55074) {
case 3:
return app.main.render.render_frame.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return app.main.render.render_frame.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

(app.main.render.render_frame.cljs$core$IFn$_invoke$arity$3 = (function (objects,shape,object_id){
return app.main.render.render_frame.cljs$core$IFn$_invoke$arity$4(objects,shape,object_id,null);
}));

(app.main.render.render_frame.cljs$core$IFn$_invoke$arity$4 = (function (objects,shape,object_id,options){
if((!((shape == null)))){
var fonts = app.main.ui.shapes.text.fontfaces.shape__GT_fonts(shape,objects);
var bounds = app.common.geom.shapes.bounds.get_object_bounds.cljs$core$IFn$_invoke$arity$3(objects,shape,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"ignore-margin?","ignore-margin?",1173241988),false], null));
var background = ((cuerdas.core.ends_with_QMARK_(object_id,"component"))?(function (){var or__5025__auto__ = new cljs.core.Keyword(null,"background","background",-863952629).cljs$core$IFn$_invoke$arity$1(options);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
var or__5025__auto____$1 = app.util.dom.get_css_variable.cljs$core$IFn$_invoke$arity$1("--assets-component-background-color");
if(cljs.core.truth_(or__5025__auto____$1)){
return or__5025__auto____$1;
} else {
return "#fff";
}
}
})():null);
var x = (bounds?.x?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"x","x",2099068185)));
var y = (bounds?.y?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"y","y",-1757859776)));
var width = (bounds?.width?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"width","width",-384071477)));
var height = (bounds?.height?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(bounds,new cljs.core.Keyword(null,"height","height",1025178622)));
var viewbox = ""+(x ?? "")+" "+(y ?? "")+" "+(width ?? "")+" "+(height ?? "");
var vec__55075 = app.util.thumbnails.get_relative_size(width,height);
var fixed_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55075,(0),null);
var fixed_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55075,(1),null);
var vec__55078 = app.util.thumbnails.get_proportional_size.cljs$core$IFn$_invoke$arity$4(width,height,(140),(140));
var component_width = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55078,(0),null);
var component_height = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__55078,(1),null);
var data = (function (){var public_uri_orig_val__55081 = app.config.public_uri;
var public_uri_temp_val__55082 = app.config.rasterizer_uri;
(app.config.public_uri = public_uri_temp_val__55082);

try{return shadow.js.shim.module$react_dom$server.renderToStaticMarkup(rumext.v2.element.cljs$core$IFn$_invoke$arity$2(app.main.render.frame_imposter,({"objects": objects, "frame": shape, "vbox": viewbox, "background": background, "x": x, "y": y, "width": width, "height": height})));
}finally {(app.config.public_uri = public_uri_orig_val__55081);
}})();
var component_QMARK_ = cuerdas.core.ends_with_QMARK_(object_id,"/component");
return beicon.v2.core.map((function (styles){
return new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"id","id",-1388402092),object_id,new cljs.core.Keyword(null,"data","data",-232669377),data,new cljs.core.Keyword(null,"width","width",-384071477),((component_QMARK_)?component_width:fixed_width),new cljs.core.Keyword(null,"height","height",1025178622),((component_QMARK_)?component_height:fixed_height),new cljs.core.Keyword(null,"styles","styles",1954480375),styles], null);
}),beicon.v2.core.catch$.cljs$core$IFn$_invoke$arity$2((function (cause){
if(app.common.logging.enabled_QMARK_("app.main.render",new cljs.core.Keyword(null,"error","error",-978969032))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"hint","hint",439639918),"unexpected error on rendering imposter"], null)], null);
}),null)),cause,null,"app.main.render",new cljs.core.Keyword(null,"error","error",-978969032),false);
} else {
}


return beicon.v2.core.empty();
}),app.main.fonts.render_font_styles_cached(fonts)));
} else {
if(app.common.logging.enabled_QMARK_("app.main.render",new cljs.core.Keyword(null,"warn","warn",-436710552))){
app.common.logging.emit_log((new cljs.core.Delay((function (){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"msg","msg",-1386103444),"imposter shape is nil"], null)], null);
}),null)),null,null,"app.main.render",new cljs.core.Keyword(null,"warn","warn",-436710552),false);
} else {
}


return beicon.v2.core.empty();
}
}));

(app.main.render.render_frame.cljs$lang$maxFixedArity = 4);


//# sourceMappingURL=app.main.render.js.map
