import "./cljs_env.js";
import "./cljs.core.js";
import "./app.common.data.js";
import "./app.common.data.macros.js";
import "./app.common.files.helpers.js";
import "./app.main.refs.js";
import "./app.main.ui.context.js";
import "./app.main.ui.hooks.js";
import "./app.main.ui.shapes.attrs.js";
import "./app.main.ui.shapes.export.js";
import "./app.main.ui.shapes.fills.js";
import "./app.main.ui.shapes.filters.js";
import "./app.main.ui.shapes.frame.js";
import "./app.main.ui.shapes.svg_defs.js";
import "./app.util.object.js";
import "./rumext.v2.js";
goog.provide('app.main.ui.shapes.shape');
app.main.ui.shapes.shape.propagate_wrapper_styles_child = (function app$main$ui$shapes$shape$propagate_wrapper_styles_child(child,wrapper_props){
if((!((child == null)))){
var child_props_childs = app.util.object.get.cljs$core$IFn$_invoke$arity$2(app.util.object.clone(app.util.object.get.cljs$core$IFn$_invoke$arity$2(child,"props")),"childs");
var child_props_childs__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54764_SHARP_){
return cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(p1__54764_SHARP_,new cljs.core.Keyword(null,"wrapper-styles","wrapper-styles",484780849),app.util.object.get.cljs$core$IFn$_invoke$arity$2(wrapper_props,"style"));
}),child_props_childs);
var child_props = app.util.object.set_BANG_(app.util.object.clone(app.util.object.get.cljs$core$IFn$_invoke$arity$2(child,"props")),"childs",child_props_childs__$1);
return app.util.object.set_BANG_(app.util.object.clone(child),"props",child_props);
} else {
return null;
}
});
app.main.ui.shapes.shape.propagate_wrapper_styles = (function app$main$ui$shapes$shape$propagate_wrapper_styles(children,wrapper_props){
if(app.util.object.array_QMARK_(children)){
return cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__54779_SHARP_){
return app.main.ui.shapes.shape.propagate_wrapper_styles_child(p1__54779_SHARP_,wrapper_props);
}),children);
} else {
return app.main.ui.shapes.shape.propagate_wrapper_styles_child(children,wrapper_props);
}
});
app.main.ui.shapes.shape.shape_container = rumext.v2.forward_ref((function app$main$ui$shapes$shape$shape_container(props_54793,ref){
var props = props_54793;
var shape = (props["shape"]);
var children = (props["children"]);
var pointer_events = (props["pointer-events"]);
var shape_id = (shape?.id?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"id","id",-1388402092)));
var preview_blend_mode_ref = rumext.v2.use_memo.cljs$core$IFn$_invoke$arity$2([rumext.v2.adapt(shape_id)],(function (){
return app.main.refs.workspace_preview_blend_by_id(shape_id);
}));
var blend_mode = (function (){var or__5025__auto__ = rumext.v2.deref(preview_blend_mode_ref);
if(cljs.core.truth_(or__5025__auto__)){
return or__5025__auto__;
} else {
return new cljs.core.Keyword(null,"blend-mode","blend-mode",-1393007224).cljs$core$IFn$_invoke$arity$1(shape);
}
})();
var type = (shape?.type?? cljs.core.get.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"type","type",1174270348)));
var render_id = app.main.ui.hooks.use_render_id();
var styles = (function (){var G__54809 = (function (){var G__54810 = (function (){var G__54811 = app.util.object.set_BANG_(app.util.object.create(),"pointerEvents",pointer_events);
if((!(app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)))){
return app.util.object.set_BANG_(G__54811,"opacity",new cljs.core.Keyword(null,"opacity","opacity",397153780).cljs$core$IFn$_invoke$arity$1(shape));
} else {
return G__54811;
}
})();
if(cljs.core.truth_(new cljs.core.Keyword(null,"hidden","hidden",-312506092).cljs$core$IFn$_invoke$arity$1(shape))){
return app.util.object.set_BANG_(G__54810,"display","none");
} else {
return G__54810;
}
})();
if(cljs.core.truth_((function (){var and__5023__auto__ = blend_mode;
if(cljs.core.truth_(and__5023__auto__)){
return cljs.core.not_EQ_.cljs$core$IFn$_invoke$arity$2(blend_mode,new cljs.core.Keyword(null,"normal","normal",-1519123858));
} else {
return and__5023__auto__;
}
})())){
return app.util.object.set_BANG_(G__54809,"mixBlendMode",app.common.data.name(blend_mode));
} else {
return G__54809;
}
})();
var include_metadata_QMARK_ = rumext.v2.use_ctx(app.main.ui.shapes.export$.include_metadata_ctx);
var shape_without_blur = cljs.core.dissoc.cljs$core$IFn$_invoke$arity$2(shape,new cljs.core.Keyword(null,"blur","blur",-453500461));
var shape_without_shadows = cljs.core.assoc.cljs$core$IFn$_invoke$arity$3(shape,new cljs.core.Keyword(null,"shadow","shadow",873231803),cljs.core.PersistentVector.EMPTY);
var filter_id = ""+"filter-"+(render_id ?? "");
var filter_str = ((((app.common.files.helpers.group_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) || (app.common.files.helpers.svg_raw_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))))?app.main.ui.shapes.filters.filter_str(filter_id,shape):null);
var wrapper_props = app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.unset_BANG_(app.util.object.unset_BANG_(app.util.object.clone(props),"shape"),"children"),"ref",ref),"id",""+"shape-"+(shape_id ?? "")),"style",styles);
var wrapper_props__$1 = (function (){var G__54814 = wrapper_props;
var G__54814__$1 = ((((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape)) && (cljs.core.empty_QMARK_(new cljs.core.Keyword(null,"position-data","position-data",-499622376).cljs$core$IFn$_invoke$arity$1(shape)))))?app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(app.util.object.set_BANG_(G__54814,"x",new cljs.core.Keyword(null,"x","x",2099068185).cljs$core$IFn$_invoke$arity$1(shape)),"y",new cljs.core.Keyword(null,"y","y",-1757859776).cljs$core$IFn$_invoke$arity$1(shape)),"width",new cljs.core.Keyword(null,"width","width",-384071477).cljs$core$IFn$_invoke$arity$1(shape)),"height",new cljs.core.Keyword(null,"height","height",1025178622).cljs$core$IFn$_invoke$arity$1(shape)):G__54814);
var G__54814__$2 = ((cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),type))?app.main.ui.shapes.attrs.add_border_props_BANG_(app.main.ui.shapes.attrs.add_fill_props_BANG_.cljs$core$IFn$_invoke$arity$3(G__54814__$1,shape,render_id),shape):G__54814__$1);
if((!((filter_str == null)))){
return app.util.object.set_BANG_(G__54814__$2,"filter",filter_str);
} else {
return G__54814__$2;
}
})();
var svg_group_QMARK_ = ((cljs.core.contains_QMARK_(shape,new cljs.core.Keyword(null,"svg-attrs","svg-attrs",524765772))) && (cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(new cljs.core.Keyword(null,"group","group",582596132),type)));
var children__$1 = (function (){var G__54816 = children;
if(svg_group_QMARK_){
return app.main.ui.shapes.shape.propagate_wrapper_styles(G__54816,wrapper_props__$1);
} else {
return G__54816;
}
})();
return rumext.v2.jsx(rumext.v2.provider(app.main.ui.context.render_id),{'value':render_id,'children':rumext.v2.create_element("g",wrapper_props__$1,(cljs.core.truth_(include_metadata_QMARK_)?rumext.v2.jsx(app.main.ui.shapes.export$.export_data,{'shape':shape}):null),rumext.v2.jsxs("defs",{'children':[rumext.v2.jsx(app.main.ui.shapes.svg_defs.svg_defs,{'shape':shape,'render-id':render_id}),((app.common.files.helpers.frame_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?null:rumext.v2.jsxs(rumext.v2.Fragment,{'children':[rumext.v2.jsx(app.main.ui.shapes.filters.filters,{'shape':shape,'filter-id':filter_id}),rumext.v2.jsx(app.main.ui.shapes.filters.filters,{'shape':shape_without_blur,'filter-id':""+"filter-shadow-"+(render_id ?? "")}),rumext.v2.jsx(app.main.ui.shapes.filters.filters,{'shape':shape_without_shadows,'filter-id':""+"filter-blur-"+(render_id ?? "")})]})),rumext.v2.jsx(app.main.ui.shapes.frame.frame_clip_def,{'shape':shape,'render-id':render_id}),((app.common.files.helpers.text_shape_QMARK_.cljs$core$IFn$_invoke$arity$1(shape))?null:rumext.v2.jsx(app.main.ui.shapes.fills.fills,{'shape':shape,'render-id':render_id}))]}),children__$1)});
}));

(app.main.ui.shapes.shape.shape_container.displayName = "shape-container");


//# sourceMappingURL=app.main.ui.shapes.shape.js.map
