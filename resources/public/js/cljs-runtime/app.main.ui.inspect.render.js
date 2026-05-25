import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.point.js";
import "./app.common.geom.shapes.js";
import "./app.main.data.viewer.js";
import "./app.main.store.js";
import "./app.main.ui.inspect.selection_feedback.js";
import "./app.main.ui.shapes.bool.js";
import "./app.main.ui.shapes.circle.js";
import "./app.main.ui.shapes.frame.js";
import "./app.main.ui.shapes.group.js";
import "./app.main.ui.shapes.image.js";
import "./app.main.ui.shapes.path.js";
import "./app.main.ui.shapes.rect.js";
import "./app.main.ui.shapes.shape.js";
import "./app.main.ui.shapes.svg_raw.js";
import "./app.main.ui.shapes.text.js";
import "./app.main.ui.viewer.interactions.js";
import "./app.util.dom.js";
import "./app.util.object.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.inspect.render');
app.main.ui.inspect.render.handle_hover_shape = (function app$main$ui$inspect$render$handle_hover_shape(shape,hover_QMARK_){
return (function (event){
if(((app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) || (app.common.files.helpers.root_frame_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
return null;
} else {
app.util.dom.prevent_default(event);

app.util.dom.stop_propagation(event);

return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.hover_shape(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape),hover_QMARK_));
}
});
});
app.main.ui.inspect.render.select_shape = (function app$main$ui$inspect$render$select_shape(shape){
return (function (event){
if(((app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) || (app.common.files.helpers.root_frame_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
return null;
} else {
app.util.dom.stop_propagation(event);

app.util.dom.prevent_default(event);

if(cljs.core.truth_(event.shiftKey)){
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.toggle_selection(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));
} else {
return app.main.store.emit_BANG_.cljs$core$IFn$_invoke$arity$1(app.main.data.viewer.select_shape(new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));

}
}
});
});
app.main.ui.inspect.render.shape_wrapper_factory = (function app$main$ui$inspect$render$shape_wrapper_factory(component){
var shape_wrapper__58610 = (function app$main$ui$inspect$render$shape_wrapper_factory_$_shape_wrapper(props_58609){
var props = props_58609;
var shape = (props["shape"]);
var childs = (props["childs"]);
var frame = (props["frame"]);
var render_wrapper_QMARK_ = ((cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"svg-raw","svg-raw",-594329202),new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape))) || (cljs.core.contains_QMARK_(app.main.ui.shapes.svg_raw.graphic_element,cljs.core.get_in.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.Keyword(null,"tag","tag",-1290361223)], null)))));
if(render_wrapper_QMARK_){
return rumext.v2.jsx(app.main.ui.shapes.shape.shape_container,{'shape':shape,'onPointerEnter':app.main.ui.inspect.render.handle_hover_shape(shape,true),'onPointerLeave':app.main.ui.inspect.render.handle_hover_shape(shape,false),'onClick':app.main.ui.inspect.render.select_shape(shape),'children':rumext.v2.jsx(component,{'shape':shape,'frame':frame,'childs':childs,'is-child-selected?':true})});
} else {
return rumext.v2.jsx(component,{'shape':shape,'frame':frame,'childs':childs});
}
});
(shape_wrapper__58610.displayName = "shape-wrapper");

return shape_wrapper__58610;
});
app.main.ui.inspect.render.frame_container_factory = (function app$main$ui$inspect$render$frame_container_factory(objects){
var shape_container = (app.main.ui.inspect.render.shape_container_factory.cljs$core$IFn$_invoke$arity$1 ? app.main.ui.inspect.render.shape_container_factory.cljs$core$IFn$_invoke$arity$1(objects) : app.main.ui.inspect.render.shape_container_factory.call(null,objects));
var frame_shape = app.main.ui.shapes.frame.frame_shape(shape_container);
var frame_wrapper = app.main.ui.inspect.render.shape_wrapper_factory(frame_shape);
var frame_container__58613 = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$inspect$render$frame_container_factory_$_frame_container(props_58612){
var props = props_58612;
var shape = (props["shape"]);
var childs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58611_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__58611_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
var props__$1 = app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(app.util.object.create(),props),({"shape": shape, "childs": childs}));
return rumext.v2.create_element(frame_wrapper,props__$1);
}));
(frame_container__58613.displayName = "frame-container");

return frame_container__58613;
});
app.main.ui.inspect.render.group_container_factory = (function app$main$ui$inspect$render$group_container_factory(objects){
var shape_container = (app.main.ui.inspect.render.shape_container_factory.cljs$core$IFn$_invoke$arity$1 ? app.main.ui.inspect.render.shape_container_factory.cljs$core$IFn$_invoke$arity$1(objects) : app.main.ui.inspect.render.shape_container_factory.call(null,objects));
var group_shape = app.main.ui.shapes.group.group_shape(shape_container);
var group_wrapper = app.main.ui.inspect.render.shape_wrapper_factory(group_shape);
var group_container__58618 = (function app$main$ui$inspect$render$group_container_factory_$_group_container(props_58617){
var props = props_58617;
var shape = (props["shape"]);
var childs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58615_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__58615_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
var props__$1 = app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(app.util.object.create(),props),({"childs": childs}));
return rumext.v2.create_element(group_wrapper,props__$1);
});
(group_container__58618.displayName = "group-container");

return group_container__58618;
});
app.main.ui.inspect.render.bool_container_factory = (function app$main$ui$inspect$render$bool_container_factory(objects){
var shape_container = (app.main.ui.inspect.render.shape_container_factory.cljs$core$IFn$_invoke$arity$1 ? app.main.ui.inspect.render.shape_container_factory.cljs$core$IFn$_invoke$arity$1(objects) : app.main.ui.inspect.render.shape_container_factory.call(null,objects));
var bool_shape = app.main.ui.shapes.bool.bool_shape(shape_container);
var bool_wrapper = app.main.ui.inspect.render.shape_wrapper_factory(bool_shape);
var bool_container__58620 = (function app$main$ui$inspect$render$bool_container_factory_$_bool_container(props_58619){
var props = props_58619;
var shape = (props["shape"]);
var children = cljs.core.select_keys(objects,app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(shape)));
var props__$1 = app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(app.util.object.create(),props),({"childs": children}));
return rumext.v2.create_element(bool_wrapper,props__$1);
});
(bool_container__58620.displayName = "bool-container");

return bool_container__58620;
});
app.main.ui.inspect.render.svg_raw_container_factory = (function app$main$ui$inspect$render$svg_raw_container_factory(objects){
var shape_container = (app.main.ui.inspect.render.shape_container_factory.cljs$core$IFn$_invoke$arity$1 ? app.main.ui.inspect.render.shape_container_factory.cljs$core$IFn$_invoke$arity$1(objects) : app.main.ui.inspect.render.shape_container_factory.call(null,objects));
var svg_raw_shape = app.main.ui.shapes.svg_raw.svg_raw_shape(shape_container);
var svg_raw_wrapper = app.main.ui.inspect.render.shape_wrapper_factory(svg_raw_shape);
var group_container__58623 = (function app$main$ui$inspect$render$svg_raw_container_factory_$_group_container(props_58622){
var props = props_58622;
var shape = (props["shape"]);
var childs = cljs.core.mapv.cljs$core$IFn$_invoke$arity$2((function (p1__58621_SHARP_){
return cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,p1__58621_SHARP_);
}),new cljs.core.Keyword(null,"shapes","shapes",1897594879).cljs$core$IFn$_invoke$arity$1(shape));
var props__$1 = app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(app.util.object.merge_BANG_.cljs$core$IFn$_invoke$arity$2(app.util.object.create(),props),({"childs": childs}));
return rumext.v2.create_element(svg_raw_wrapper,props__$1);
});
(group_container__58623.displayName = "group-container");

return group_container__58623;
});
app.main.ui.inspect.render.shape_container_factory = (function app$main$ui$inspect$render$shape_container_factory(objects){
var path_wrapper = app.main.ui.inspect.render.shape_wrapper_factory(app.main.ui.shapes.path.path_shape);
var text_wrapper = app.main.ui.inspect.render.shape_wrapper_factory(app.main.ui.shapes.text.text_shape);
var rect_wrapper = app.main.ui.inspect.render.shape_wrapper_factory(app.main.ui.shapes.rect.rect_shape);
var image_wrapper = app.main.ui.inspect.render.shape_wrapper_factory(app.main.ui.shapes.image.image_shape);
var circle_wrapper = app.main.ui.inspect.render.shape_wrapper_factory(app.main.ui.shapes.circle.circle_shape);
var shape_container__58626 = (function app$main$ui$inspect$render$shape_container_factory_$_shape_container(props_58625){
var props = props_58625;
var shape = (props["shape"]);
var frame = (props["frame"]);
var frame_container = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.main.ui.inspect.render.frame_container_factory(objects);
}));
var group_container = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.main.ui.inspect.render.group_container_factory(objects);
}));
var bool_container = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.main.ui.inspect.render.bool_container_factory(objects);
}));
var svg_raw_container = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.main.ui.inspect.render.svg_raw_container_factory(objects);
}));
if(cljs.core.truth_((function (){var and__5023__auto__ = shape;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return and__5023__auto__;
}
})())){
var shape__$1 = (cljs.core.truth_(frame)?app.common.geom.shapes.translate_to_frame(shape,frame):shape);
var opts = ({"shape": shape__$1, "frame": frame});
var G__58627 = new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(shape__$1);
var G__58627__$1 = (((G__58627 instanceof cljs.core.Keyword))?G__58627.fqn:null);
switch (G__58627__$1) {
case "frame":
return rumext.v2.create_element(frame_container,opts);

break;
case "text":
return rumext.v2.create_element(text_wrapper,opts);

break;
case "rect":
return rumext.v2.create_element(rect_wrapper,opts);

break;
case "path":
return rumext.v2.create_element(path_wrapper,opts);

break;
case "image":
return rumext.v2.create_element(image_wrapper,opts);

break;
case "circle":
return rumext.v2.create_element(circle_wrapper,opts);

break;
case "group":
return rumext.v2.create_element(group_container,opts);

break;
case "bool":
return rumext.v2.create_element(bool_container,opts);

break;
case "svg-raw":
return rumext.v2.create_element(svg_raw_container,opts);

break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__58627__$1)].join('')));

}
} else {
return null;
}
});
(shape_container__58626.displayName = "shape-container");

return shape_container__58626;
});
app.main.ui.inspect.render.render_frame_svg = (function app$main$ui$inspect$render$render_frame_svg(props_58628){
var map__58630 = rumext.v2.util.wrap_props(props_58628);
var map__58630__$1 = cljs.core.__destructure_map(map__58630);
var page = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58630__$1,new cljs.core.Keyword(null,"page","page",849072397));
var frame = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58630__$1,new cljs.core.Keyword(null,"frame","frame",-1711082588));
var local = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58630__$1,new cljs.core.Keyword(null,"local","local",-1497766724));
var size = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__58630__$1,new cljs.core.Keyword(null,"size","size",1098693007));
var objects = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(page),rumext.v2.adapt(frame),rumext.v2.adapt(size)],(function (){
return app.main.ui.viewer.interactions.prepare_objects(frame,size,app.common.geom.point.point.cljs$core$IFn$_invoke$arity$2((0),(0)),new cljs.core.Keyword(null,"objects","objects",2099713734).cljs$core$IFn$_invoke$arity$1(page));
}));
var frame__$1 = cljs.core.get.cljs$core$IFn$_invoke$arity$2(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(frame));
var render = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(objects)],(function (){
return app.main.ui.inspect.render.frame_container_factory(objects);
}));
return rumext.v2.jsxs("svg",{'width':new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(size),'xmlns':"http://www.w3.org/2000/svg",'height':new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(size),'children':[rumext.v2.jsx(render,{'shape':frame__$1,'view-box':new cljs.core.Keyword(null,"vbox","vbox",-492787765).cljs$core$IFn$_invoke$arity$1(size)}),rumext.v2.jsx(app.main.ui.inspect.selection_feedback.selection_feedback,{'frame':frame__$1,'objects':objects,'local':local,'size':size})],'id':"svg-frame",'viewBox':new cljs.core.Keyword(null,"vbox","vbox",-492787765).cljs$core$IFn$_invoke$arity$1(size),'xmlnsXlink':"http://www.w3.org/1999/xlink",'fill':"none",'version':"1.1"});
});

(app.main.ui.inspect.render.render_frame_svg.displayName = "render-frame-svg");


//# sourceMappingURL=app.main.ui.inspect.render.js.map
