import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.common.geom.rect.js";
import "./app.common.geom.shapes.js";
import "./app.common.uuid.js";
import "./app.main.ui.context.js";
import "./app.main.ui.shapes.circle.js";
import "./app.main.ui.shapes.image.js";
import "./app.main.ui.shapes.rect.js";
import "./app.main.ui.shapes.text.fontfaces.js";
import "./app.main.ui.workspace.shapes.bool.js";
import "./app.main.ui.workspace.shapes.common.js";
import "./app.main.ui.workspace.shapes.frame.js";
import "./app.main.ui.workspace.shapes.group.js";
import "./app.main.ui.workspace.shapes.path.js";
import "./app.main.ui.workspace.shapes.svg_raw.js";
import "./app.main.ui.workspace.shapes.text.js";
import "./app.util.object.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.workspace.shapes');
app.main.ui.workspace.shapes.circle_wrapper = app.main.ui.workspace.shapes.common.generic_wrapper_factory(app.main.ui.shapes.circle.circle_shape);
app.main.ui.workspace.shapes.image_wrapper = app.main.ui.workspace.shapes.common.generic_wrapper_factory(app.main.ui.shapes.image.image_shape);
app.main.ui.workspace.shapes.rect_wrapper = app.main.ui.workspace.shapes.common.generic_wrapper_factory(app.main.ui.shapes.rect.rect_shape);
app.main.ui.workspace.shapes.make_is_frame_overlap = (function app$main$ui$workspace$shapes$make_is_frame_overlap(vbox,objects){
return (function (shape){
var bounds = (cljs.core.truth_((shape?.show_content?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"show-content","show-content",-878000465))))?(function (){var children = cljs.core.map.cljs$core$IFn$_invoke$arity$2(app.common.data.getf(objects),app.common.files.helpers.get_children_ids.cljs$core$IFn$_invoke$arity$2(objects,(shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)))));
return app.common.geom.shapes.shapes__GT_rect(cljs.core.cons(shape,children));
})():(shape?.selrect?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"selrect","selrect",1966287292))));
return app.common.geom.rect.overlaps_rects_QMARK_(vbox,bounds);
});
});
/**
 * Draws the root shape of the viewport and recursively all the shapes
 */
app.main.ui.workspace.shapes.root_shape = rumext.v2.memo.cljs$core$IFn$_invoke$arity$1((function app$main$ui$workspace$shapes$root_shape(props_52804){
var props = props_52804;
var objects = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"objects");
var active_frames = app.util.object.get.cljs$core$IFn$_invoke$arity$2(props,"active-frames");
var shapes = app.common.files.helpers.get_immediate_children.cljs$core$IFn$_invoke$arity$1(objects);
var vbox = rumext.v2.use_ctx(app.main.ui.context.current_vbox);
var frame_overlap_QMARK_ = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(vbox),rumext.v2.adapt(objects)],(function (){
return (function (){
return app.main.ui.workspace.shapes.make_is_frame_overlap(vbox,objects);
});
}));
var shapes__$1 = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shapes),rumext.v2.adapt(vbox),rumext.v2.adapt(frame_overlap_QMARK_)],(function (){
var G__52809 = shapes;
if((!((vbox == null)))){
return cljs.core.filter.cljs$core$IFn$_invoke$arity$2(frame_overlap_QMARK_,G__52809);
} else {
return G__52809;
}
}));
return rumext.v2.jsx("g",{'id':""+"shape-"+(app.common.uuid.zero ?? ""),'children':rumext.v2.jsxs(rumext.v2.provider(app.main.ui.context.active_frames),{'value':active_frames,'children':[(function (){var xform = cljs.core.comp.cljs$core$IFn$_invoke$arity$2(cljs.core.remove.cljs$core$IFn$_invoke$arity$1(app.common.files.helpers.frame_shape_QMARK_),cljs.core.mapcat.cljs$core$IFn$_invoke$arity$1((function (p1__52803_SHARP_){
return app.common.files.helpers.get_children_with_self(objects,new cljs.core.Keyword(null,"id","id",-1388402092).cljs$core$IFn$_invoke$arity$1(p1__52803_SHARP_));
})));
return rumext.v2.jsx(app.main.ui.shapes.text.fontfaces.fontfaces_style,{'shapes':cljs.core.into.cljs$core$IFn$_invoke$arity$3(cljs.core.PersistentVector.EMPTY,xform,shapes__$1)});
})(),rumext.v2.jsx("g",{'className':"frame-children",'children':cljs.core.reduce.cljs$core$IFn$_invoke$arity$3((function (out_arr__35152__auto__,shape){
out_arr__35152__auto__.push(rumext.v2.jsx("g",{'className':"ws-shape-wrapper",'children':((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?rumext.v2.jsx(app.main.ui.workspace.shapes.root_frame_wrapper,{'shape':shape,'objects':objects,'thumbnail?':(!(cljs.core.contains_QMARK_(active_frames,(shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092))))))}):rumext.v2.jsx(app.main.ui.workspace.shapes.shape_wrapper,{'shape':shape}))},""+((shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092))) ?? "")));

return out_arr__35152__auto__;
}),[],shapes__$1)})]})});
}));

(app.main.ui.workspace.shapes.root_shape.displayName = "root-shape");

app.main.ui.workspace.shapes.shape_wrapper = (function (p1__52810_SHARP_){
return rumext.v2.memo_SINGLEQUOTE_(p1__52810_SHARP_,app.main.ui.workspace.shapes.common.check_shape_props);
})((function app$main$ui$workspace$shapes$shape_wrapper(props_52812){
var props = props_52812;
var shape = (props["shape"]);
var shape_type = (shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)));
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var active_frames = ((app.common.files.helpers.root_frame_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?rumext.v2.use_ctx(app.main.ui.context.active_frames):null);
var thumbnail_QMARK_ = (((!((active_frames == null)))) && ((!(cljs.core.contains_QMARK_(active_frames,shape_id)))));
var props__$1 = ({"shape": shape, "thumbnail?": thumbnail_QMARK_});
var rawsvg_QMARK_ = cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"svg-raw","svg-raw",-594329202),shape_type);
var wrapper_elem = ((rawsvg_QMARK_)?rumext.v2.Fragment:"g");
var wrapper_props = ((rawsvg_QMARK_)?({}):({"className": "workspace-shape-wrapper"}));
if((((!((shape == null)))) && ((!(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(shape)))))){
return rumext.v2.create_element(wrapper_elem,wrapper_props,(function (){var G__52815 = shape_type;
var G__52815__$1 = (((G__52815 instanceof cljs.core.Keyword))?G__52815.fqn:null);
switch (G__52815__$1) {
case "path":
return rumext.v2.create_element(app.main.ui.workspace.shapes.path.path_wrapper,props__$1);

break;
case "text":
return rumext.v2.create_element(app.main.ui.workspace.shapes.text.text_wrapper,props__$1);

break;
case "group":
return rumext.v2.create_element(app.main.ui.workspace.shapes.group_wrapper,props__$1);

break;
case "rect":
return rumext.v2.create_element(app.main.ui.workspace.shapes.rect_wrapper,props__$1);

break;
case "image":
return rumext.v2.create_element(app.main.ui.workspace.shapes.image_wrapper,props__$1);

break;
case "circle":
return rumext.v2.create_element(app.main.ui.workspace.shapes.circle_wrapper,props__$1);

break;
case "svg-raw":
return rumext.v2.create_element(app.main.ui.workspace.shapes.svg_raw_wrapper,props__$1);

break;
case "bool":
return rumext.v2.create_element(app.main.ui.workspace.shapes.bool_wrapper,props__$1);

break;
case "frame":
return rumext.v2.create_element(app.main.ui.workspace.shapes.nested_frame_wrapper,props__$1);

break;
default:
return null;

}
})());
} else {
return null;
}
}));

(app.main.ui.workspace.shapes.shape_wrapper.displayName = "shape-wrapper");

app.main.ui.workspace.shapes.group_wrapper = app.main.ui.workspace.shapes.group.group_wrapper_factory(app.main.ui.workspace.shapes.shape_wrapper);
app.main.ui.workspace.shapes.svg_raw_wrapper = app.main.ui.workspace.shapes.svg_raw.svg_raw_wrapper_factory(app.main.ui.workspace.shapes.shape_wrapper);
app.main.ui.workspace.shapes.bool_wrapper = app.main.ui.workspace.shapes.bool.bool_wrapper_factory(app.main.ui.workspace.shapes.shape_wrapper);
app.main.ui.workspace.shapes.nested_frame_wrapper = app.main.ui.workspace.shapes.frame.nested_frame_wrapper_factory(app.main.ui.workspace.shapes.shape_wrapper);
app.main.ui.workspace.shapes.root_frame_wrapper = app.main.ui.workspace.shapes.frame.root_frame_wrapper_factory(app.main.ui.workspace.shapes.shape_wrapper);

//# sourceMappingURL=app.main.ui.workspace.shapes.js.map
